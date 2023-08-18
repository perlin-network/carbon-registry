import { Logger, Module } from "@nestjs/common";
import { PerlLedgerService } from './perl-ledger.service';
import { UtilModule } from '../util/util.module';

@Module({
  imports: [UtilModule],
  providers: [Logger, PerlLedgerService],
  exports: [PerlLedgerService]
})

export class PerlLedgerModule {}
