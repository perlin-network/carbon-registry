import { NestFactory } from "@nestjs/core";
// import { Role } from "../shared/casl/role.enum";
// import { UserDto } from "../shared/dto/user.dto";
// import { LedgerDbModule } from "../shared/ledger-db/ledger-db.module";
import { getLogger } from "../shared/server";
// import { UtilModule } from "../shared/util/util.module";
// import { Country } from "../shared/entities/country.entity";
// import { CountryService } from "../shared/util/country.service";
// import { CreditOverall } from "../shared/entities/credit.overall.entity";
// import { CompanyModule } from "../shared/company/company.module";
// import { OrganisationDto as OrganisationDto } from "../shared/dto/organisation.dto";
// import { CompanyRole } from "../shared/enum/company.role.enum";
// import { CompanyService } from "../shared/company/company.service";
// import { UserModule } from "../shared/user/user.module";
// import { UserService } from "../shared/user/user.service";
// import { TxType } from "../shared/enum/txtype.enum";
// import { LedgerDBInterface } from "../shared/ledger-db/ledger.db.interface";
import { Handler } from "aws-lambda";
import { LocationModule } from "../shared/location/location.module";
import { LocationInterface } from "../shared/location/location.interface";
// import { ProgrammeModule } from "../shared/programme/programme.module";
// import { ProgrammeService } from "../shared/programme/programme.service";
// import { ConfigService } from "@nestjs/config";
// const fs = require("fs");

export const handler: Handler = async (event) => {
  console.log(`[setup] Handler Started with %j`, event);

  if (!event) {
    event = process.env;
  }

  // let userService: UserService;

  // try {
  //   const userApp = await NestFactory.createApplicationContext(UserModule, {
  //     logger: getLogger(UserModule),
  //   });
  //   userService = userApp.get(UserService);
  //   console.log(`[setup] User module initialized`);
  // } catch (e) {
  //    console.error("[setup] User module failed to initialize, stopping.", e);
  //    return;
  // }

  // if (event.type === "IMPORT_USERS" && event.body) {

  //   const users = event.body.split("\n");

  //   let c = 0;
  //   for (const user of users) {
  //     c++;
  //     if (c === 1) {
  //       continue;
  //     }
  //     let fields = user.split(",");
  //     if (fields.length < 7) {
  //       continue;
  //     }
  //     fields = fields.map(f => f.trim())
  //     // (name: string, companyRole: CompanyRole, taxId: string, password: string, email: string, userRole: string
  //     const cr =
  //       fields[4] == "Government"
  //         ? CompanyRole.GOVERNMENT
  //         : fields[4] == "Certifier"
  //         ? CompanyRole.CERTIFIER
  //         : fields[4] == "API"
  //         ? CompanyRole.API
  //         :CompanyRole.PROGRAMME_DEVELOPER;
  //     const ur =
  //       fields[5] == "admin"
  //         ? Role.Admin
  //         : fields[5] == "Manager"
  //         ? Role.Manager
  //         : Role.ViewOnly;
  //     console.log('Inserting user', fields[0],
  //     cr,
  //     fields[3],
  //     fields[1],
  //     ur,
  //     fields[2])
  //     try {
  //       await userService.createUserWithPassword(
  //         fields[0],
  //         cr,
  //         fields[3],
  //         fields[6],
  //         fields[1],
  //         ur,
  //         fields[2],
  //         (cr === CompanyRole.API && fields.length > 7) ? fields[7] : undefined
  //       );
  //     } catch (e) {
  //       console.log('Fail to create user', fields[1], e)
  //     }
     
  //   }
  //   return;
  // }

  // if (event.type === "IMPORT_ORG" && event.body) {
  //   const companyApp = await NestFactory.createApplicationContext(
  //     CompanyModule,
  //     {
  //       logger: getLogger(CompanyModule),
  //     }
  //   );
  //   const companyService = companyApp.get(CompanyService);
  //   const configService = companyApp.get(ConfigService);

  //   const companies = event.body.split("\n");

  //   let c = 0;
  //   for (const company of companies) {
  //     c++;
  //     if (c === 1) {
  //       continue;
  //     }
  //     let fields = company.split(",");
  //     if (fields.length < 5) {
  //       continue;
  //     }
  //     fields = fields.map(f => f.trim())
  //     // (name: string, companyRole: CompanyRole, taxId: string, password: string, email: string, userRole: string
  //     const cr = fields[4] == "Certifier"
  //         ? CompanyRole.CERTIFIER
  //         : fields[4] == "API"
  //         ? CompanyRole.API
  //         : CompanyRole.PROGRAMME_DEVELOPER;

  //     try {
  //       const org = await companyService.create({
  //             taxId: fields[3],
  //             companyId: undefined,
  //             name: fields[0],
  //             email: fields[1],
  //             phoneNo: fields[2],
  //             website: undefined,
  //             address: configService.get("systemCountryName"),
  //             logo: undefined,
  //             country: configService.get("systemCountry"),
  //             companyRole: cr,
  //             createdTime: undefined,
  //           });
  //       console.log('Company created', org)
  //     } catch (e) {
  //       console.log('Fail to create company', fields[1])
  //     }
  //   }
  //   return;
  // }

  // if (event.type === "UPDATE_COORDINATES") {
  //   const prApp = await NestFactory.createApplicationContext(ProgrammeModule, {
  //     logger: getLogger(ProgrammeModule),
  //   });
  //   const programmeService = prApp.get(ProgrammeService);
  //   await programmeService.regenerateRegionCoordinates();
  //   return;
  // }

  // const rootUser = await userService.findOne(event["rootEmail"]);
  // if (rootUser != undefined) {
  //   console.warn("[setup] Root user %s already created and setup is completed", event["rootEmail"]);
  // }

  // let ledgerDBInterface: LedgerDBInterface;

  // try {
  //   const app = await NestFactory.createApplicationContext(LedgerDbModule, {
  //     logger: getLogger(LedgerDbModule),
  //   });

  //   ledgerDBInterface = app.get(LedgerDBInterface);
  //   console.log(`[setup] Ledger module initialized`);
  // } catch (e) {
  //   console.error("[setup] Ledger module failed to initialize, stopping.", e);
  //   return;
  // }
  
  // try {
  //   await ledgerDBInterface.createTable("company");
  //   await ledgerDBInterface.createIndex("txId", "company");

  //   await ledgerDBInterface.createTable("overall");
  //   await ledgerDBInterface.createIndex("txId", "overall");
  //   const creditOverall = new CreditOverall();
  //   creditOverall.credit = 0;
  //   creditOverall.txId = event["systemCountryCode"];
  //   creditOverall.txRef = "genesis block";
  //   creditOverall.txType = TxType.ISSUE;
  //   await ledgerDBInterface.insertRecord(creditOverall, "overall");
  //   await ledgerDBInterface.createTable();
  //   await ledgerDBInterface.createIndex("programmeId");
  //   console.info("[setup] QLDB Table company created", );
  // } catch (e) {
  //   console.error("[setup] QLDB table does not create", e);
  // }

  // try {
  //   const company = new OrganisationDto();
  //   company.country = event["systemCountryCode"];
  //   company.name = event["name"];
  //   company.logo = event["logoBase64"];
  //   company.companyRole = CompanyRole.GOVERNMENT;

  //   const user = new UserDto();
  //   user.email = event["rootEmail"];
  //   user.name = "Root";
  //   user.role = Role.Root;
  //   user.phoneNo = "-";
  //   user.company = company;

  //   console.log("[setup] Adding company", company);
  //   console.log("[setup] Adding user", user);

  //   await userService.create(user, -1, CompanyRole.GOVERNMENT);
  // } catch (e) {
  //   console.error(`[setup] User ${event["rootEmail"]} failed to create`, e);
  // }

  // try {
  //   console.log("[setup] Adding countryData");
  //   const countryData = fs.readFileSync("countries.json", "utf8");
  //   const jsonCountryData = JSON.parse(countryData);
  //   const utils = await NestFactory.createApplicationContext(UtilModule);
  //   const countryService = utils.get(CountryService);
  
  //   jsonCountryData.forEach(async (countryItem) => {
  //     if (countryItem["UN Member States"] === "x") {
  //       const country = new Country();
  //       country.alpha2 = countryItem["ISO-alpha2 Code"];
  //       country.alpha3 = countryItem["ISO-alpha3 Code"];
  //       country.name = countryItem["English short"];
  //       await countryService.insertCountry(country);
  //     }
  //   });
  // } catch (e) {
  //   console.error("[setup] Failed to create country data, stopping", e);
  //   return;
  // }

  try {
    const locationApp = await NestFactory.createApplicationContext(
      LocationModule,
      {
        logger: getLogger(LocationModule),
      }
    );
    const locationInterface = locationApp.get(LocationInterface);
    await locationInterface.init();
    console.log(`[setup] Location module initialized`);
  } catch (e) {
    console.error("[setup] Location module failed to initialize, stopping.", e);
  }
};
