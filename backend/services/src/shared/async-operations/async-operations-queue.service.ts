import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AsyncActionType } from "../enum/async.action.type.enum";
import { HelperService } from "../util/helpers.service";
import {
  AsyncAction,
  AsyncOperationsInterface,
} from "./async-operations.interface";
import { SQS } from 'aws-sdk';

@Injectable()
export class AsyncOperationsQueueService implements AsyncOperationsInterface {
  private emailDisabled: boolean;

  constructor(
    private configService: ConfigService,
    private logger: Logger,
    private helperService: HelperService
  ) {
    this.emailDisabled = this.configService.get<boolean>("email.disabled");
    console.info('[AsyncOperationsQueueService] constructor initialized');
  }

  public async AddAction(action: AsyncAction): Promise<boolean> {
    console.info('[AddAction] Preparing data %j', action);

    try {
      if (action.actionType === AsyncActionType.Email) {
        if (this.emailDisabled) {
          console.info('[AddAction] Email is disabled, skipping the SQS publish', action);
          return false;
        }
      }
  
      const request: SQS.Types.SendMessageRequest = {
        MessageAttributes: {
          actionType: {
            DataType: "Number",
            StringValue: action.actionType.toString(),
          },
        },
        MessageBody: JSON.stringify(action.actionProps),
        MessageGroupId: action.actionType.toString() + new Date().getTime(),
        QueueUrl: this.configService.get("asyncQueueName"),
      };

      console.info('[AddAction] SQS message %j', request);
      const sqs = new SQS();
      await sqs.sendMessage(request).promise();
      this.logger.log("[AddAction] Succefully added to the queue", action.actionType);
    } catch (error) {
      this.logger.error("[AddAction] Failed when adding to queue", action.actionType);
      throw new HttpException(
        this.helperService.formatReqMessagesString(
          "common.addAsyncActionQueueFailed",
          ["Email"]
        ),
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return true;
  }
}
