import { NestFactory } from "@nestjs/core";
import { Handler, Context } from "aws-lambda";
import { AsyncOperationsHandlerInterface } from "./async-operations-handler-interface.service";
import { AsyncOperationsModule } from "./async-operations.module";
import { getLogger } from "src/shared/server";

export const handler: Handler = async (event: any, context: Context) => {
  const app = await NestFactory.createApplicationContext(
    AsyncOperationsModule,
    {
      logger: getLogger(AsyncOperationsModule),
    }
  );

  await app.get(AsyncOperationsHandlerInterface).asyncHandler(event);
};
