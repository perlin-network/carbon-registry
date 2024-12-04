export default () => ({
  stage: process.env.STAGE || "prod",
  projectName: process.env.PROJECT_NAME,
  systemCountry: process.env.COUNTRY_CODE || "BS",
  systemCountryName: process.env.COUNTRY_NAME || "Bahamas",
  defaultCreditUnit: process.env.defaultCreditUnit || "ITMO",
  dateTimeFormat: "DD LLLL yyyy @ HH:mm",
  dateFormat: "DD LLLL yyyy",
  database: {
    type: "postgres",
    host: process.env.DB_HOST || "bscarbondbprod.c0rjpojmhdkp.us-east-1.rds.amazonaws.com",
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "bscarbondbprod",
    synchronize: true,
    autoLoadEntities: true,
    logging: ["error"],
  },
  jwt: {
    expiresIn: process.env.EXPIRES_IN || "7200",
    userSecret: process.env.USER_JWT_SECRET || "1324",
    adminSecret: process.env.ADMIN_JWT_SECRET || "8654",
  },
  ledger: {
    host: process.env.LEDGER_TYPE === 'PGSQL' 
          ? process.env.DB_LEDGER_HOST  || 'bscarbondbprod.c0rjpojmhdkp.us-east-1.rds.amazonaws.com' 
          : undefined,
    name: process.env.LEDGER_TYPE === 'PGSQL' ?  `${process.env.DB_NAME}Events` : "bs-carbon-registry-" + (process.env.NODE_ENV || "prod"),
    table: "programmes",
    overallTable: "overall",
    companyTable: "company",
  },
  distributedLedger: {
    providerURL: process.env.PERL_LEDGER_PROVIDER_URL,
    contractAddress: process.env.PERL_LEDGER_CONTRACT_ADDRESS,
    walletPrivateKey: process.env.PERL_LEDGER_WALLET_PRIVATE_KEY,
  },
  email: {
    source: process.env.SOURCE_EMAIL || "admin@bioeconomy.co",
    endpoint:
      process.env.SMTP_ENDPOINT || "email-smtp.us-east-1.amazonaws.com",
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
    disabled: process.env.IS_EMAIL_DISABLED === "true" ? true : false,
    disableLowPriorityEmails:
      process.env.DISABLE_LOW_PRIORITY_EMAIL === "true" ? true : false,
  },
  s3CommonBucket: {
    name: "bs-cr-perlin-common-" + (process.env.NODE_ENV || "prod"),
  },
  host: process.env.HOST || "https://bahamasemissionregistry.org",
  liveChat: "https://undp2020cdo.typeform.com/to/emSWOmDo",
  mapbox: {
    key: process.env.MAPBOX_PK,
  },
  openstreet: {
    retrieve: process.env.OPENSTREET_QUERY === "true" || false,
  },
  asyncQueueName:
    process.env.ASYNC_QUEUE_NAME ||
    "https://sqs.us-east-1.amazonaws.com/909101490035/BSAsyncQueueprod.fifo",
  ITMOSystem: {
    endpoint:
      process.env.ITMO_ENDPOINT ||
      "https://dev-digital-carbon-finance-webapp-api-rxloyxnj3dbso.azurewebsites.net/api/v1/",
    apiKey: process.env.ITMO_API_KEY,
    email: process.env.ITMO_EMAIL,
    password: process.env.ITMO_PASSWORD,
  },
  registry: {
    syncEnable: process.env.REGISTRY_SYNC_ENABLE || false,
    endpoint: process.env.MRV_ENDPOINT || 'https://u4h9swxm8b.execute-api.us-east-1.amazonaws.com/dev',
    apiToken: process.env.MRV_API_TOKEN
  }
});
