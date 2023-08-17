import { Injectable, Logger } from "@nestjs/common";
// import { Wallet, Contract, JsonRpcProvider } from 'ethers';
import { ConfigService } from "@nestjs/config";
import { CreditOverall } from "../shared/entities/credit.overall.entity";
import { PerlLedgerConfig } from "../shared/dto/perlLedger.config";
import { ParameterStoreService } from "../shared/util/parameterStore.service";
import contractABI from './PerlLedger.json';

@Injectable()
export class PerlLedgerService {
  // private contract: Contract;

  constructor(
    private logger: Logger,
    private parameterStoreService: ParameterStoreService,
    configService: ConfigService
  ) {
    const config = configService.get<PerlLedgerConfig>('distributedLedger');
    // const provider = new JsonRpcProvider(config.providerURL);
    // const wallet = new Wallet(config.walletPrivateKey, provider);
    // this.contract = new Contract(config.contractAddress, contractABI as any, wallet)

    logger.log('Constructor initialized', 'PerlLedgerService', config);
  }

  async createLedgerRecord(overall: CreditOverall): Promise<string> {
    let hash;
    try {
      this.logger.debug('Request received', 'createLedgerRecord', overall);
      const isLedgerEnabled = await this.parameterStoreService.getParameter('PERL_LEDGER_ENABLED') === 'true';

      if (!isLedgerEnabled){
        this.logger.log('PERL Ledger DISABLED, skipping.', 'createLedgerRecord');
        return hash;
      }

      const { txId, txRef, txType, credit } = overall;
      // const txResponse = await this.contract.createCreditOverall(txId, txRef, txType, credit);
      // await txResponse.wait();

      // hash = txResponse.hash;
      // this.logger.debug('Response received', 'createLedgerRecord', txResponse);
    } catch (error) {
      this.logger.error('Error occured', 'createLedgerRecord', error);
    }

    return hash;
  }
}
