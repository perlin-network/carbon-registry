// lambda.ts
import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { proxy } from 'aws-serverless-express';
import { bootstrapServer } from '../shared/server'
import { NationalAPIModule } from './national.api.module';
import { env } from 'process';

let cachedServer: Server;

export const handler: Handler = async (event: any, context: Context) => {
   const httpBase = '/national'
   console.info('[national-api][%s] EVENT %j', env.STAGE, event);
   event.path = event.path.replace(`/${env.STAGE}`, '');
   // event.path = event.path.includes('swagger-ui') ? `${event.path}` : event.path
   cachedServer = await bootstrapServer(
      cachedServer,
      NationalAPIModule,
      httpBase);

   return proxy(cachedServer, event, context, 'PROMISE').promise;
}