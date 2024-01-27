import { RegistryClientService } from "../shared/registry-client/registry-client.service";
// import { PerlLedgerService } from "../shared/perl-ledger/perl-ledger.service";
import { AsyncActionType } from "../shared/enum/async.action.type.enum";
import { EmailService } from "../shared/email/email.service";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AsyncOperationsHandlerService {
  constructor(
    private emailService: EmailService,
    private registryClient: RegistryClientService,
    // private perlLedgerService: PerlLedgerService,
    private logger: Logger
  ) {
    logger.log("Constructor initialized", 'AsyncOperationsHandlerService');
  }

  async handler(actionType: any, dataObject: any) {
    // console.log('[handler] received %j', { actionType, dataObject });
    this.logger.log("received", 'handler', { actionType, dataObject });
    if (actionType) {
      switch (actionType.toString()) {
        case AsyncActionType.Email.toString():
          return await this.emailService.sendEmail(dataObject);
        case AsyncActionType.RegistryCompanyCreate.toString():
          return await this.registryClient.createCompany(dataObject);
        case AsyncActionType.AuthProgramme.toString():
          return await this.registryClient.authProgramme(dataObject);
        case AsyncActionType.IssueCredit.toString():
          return await this.registryClient.issueCredit(dataObject);
        case AsyncActionType.RejectProgramme.toString():
          return await this.registryClient.rejectProgramme(dataObject);
        // case AsyncActionType.PublishToPerlLedger.toString():
        //   return await this.perlLedgerService.createLedgerRecord(dataObject);
      }
    }
  }
}
