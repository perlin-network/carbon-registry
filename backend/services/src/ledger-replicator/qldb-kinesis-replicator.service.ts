import { Injectable, Logger } from "@nestjs/common";
import { Programme } from "../shared/entities/programme.entity";
import { dom } from "ion-js";
import { plainToClass } from "class-transformer";
import { ConfigService } from "@nestjs/config";
import { CreditOverall } from "../shared/entities/credit.overall.entity";
import { LedgerReplicatorInterface } from "./replicator-interface.service";
import { ProcessEventService } from "./process.event.service";
import { AsyncOperationsInterface } from "../shared/async-operations/async-operations.interface";
import { AsyncActionType } from "src/shared/enum/async.action.type.enum";

const computeChecksums = true;
const REVISION_DETAILS = "REVISION_DETAILS";
const deagg = require("aws-kinesis-agg");

@Injectable()
export class QLDBKinesisReplicatorService implements LedgerReplicatorInterface{
  constructor(
    private logger: Logger,
    private eventProcessor: ProcessEventService,
    private configService: ConfigService,
    private asyncOperationsInterface: AsyncOperationsInterface,
  ) {
    logger.log('Constructor initialized', 'QLDBKinesisReplicatorService');
  }

  async processRecords(records) {
    return await Promise.all(
      records.map(async (record) => {
        // Kinesis data is base64 encoded so decode here
        const payload = Buffer.from(record.data, "base64");

        // payload is the actual ion binary record published by QLDB to the stream
        const ionRecord = dom.load(payload);
        this.logger.log("ION Record %s", 'processRecords', ionRecord.get('payload'));
        // Only process records where the record type is REVISION_DETAILS
        if (ionRecord.get("recordType").stringValue() !== REVISION_DETAILS) {
          this.logger.log(
            `Skipping record of type ${ionRecord
              .get("recordType")
              .stringValue()}`,
              'processRecords',
          );
        } else {
          const tableName = ionRecord
            .get("payload")
            .get("tableInfo")
            .get("tableName");
          if (tableName == this.configService.get("ledger.table")) {
            const payload = ionRecord
              .get("payload")
              .get("revision")
              .get("data");

            const programme: Programme = plainToClass(
              Programme,
              JSON.parse(JSON.stringify(payload))
            );
            await this.eventProcessor.process(programme, undefined, 0, 0)
          } else if (
            tableName == this.configService.get("ledger.companyTable")
          ) {

            const meta = JSON.parse(
              JSON.stringify(
                ionRecord.get("payload").get("revision").get("metadata")
              )
            );

            const payload = ionRecord
              .get("payload")
              .get("revision")
              .get("data");

            const overall: CreditOverall = plainToClass(
              CreditOverall,
              JSON.parse(JSON.stringify(payload))
            );

            this.logger.log('CreditOverall', 'processRecords', overall);
            await this.eventProcessor.process(undefined, overall, parseInt(meta["version"]), new Date(meta.txTime).getTime())
          }
          // else if (
          //   tableName == this.configService.get("ledger.overallTable")
          // ) {
          //   const payload = ionRecord
          //     .get("payload")
          //     .get("revision")
          //     .get("data");

          //   const perlLedgerAction = {
          //     actionType: AsyncActionType.PublishToPerlLedger,
          //     actionProps: JSON.parse(JSON.stringify(payload)),
          //   };

          //   await this.asyncOperationsInterface.AddAction(perlLedgerAction);
          // }
        }
      })
    );
  }

  async promiseDeaggregate(record) {
    return new Promise((resolve, reject) => {
      deagg.deaggregateSync(record, computeChecksums, (err, responseObject) => {
        if (err) {
          //handle/report error
          return reject(err);
        }
        return resolve(responseObject);
      });
    });
  }

  async replicate(event): Promise<any> {
    this.logger.log("Event received", 'replicate', JSON.stringify(event));
    return await Promise.all(
      event.Records.map(async (kinesisRecord) => {
        const records = await this.promiseDeaggregate(kinesisRecord.kinesis);
        return await this.processRecords(records);
      })
    );
  }
}
