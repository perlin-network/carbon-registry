import { SSM } from "aws-sdk";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ParameterStoreService {

    constructor(
        private configService: ConfigService,
        private logger: Logger
        ) { }

    async getParameter(name:string) : Promise<string> {
        return this.getParameterWorker(this.getName(name), false);
    }

    async getEncryptedParameter(name:string) : Promise<string> {
        return this.getParameterWorker(this.getName(name), true);
    }

    private async getParameterWorker(name:string, decrypt:boolean) : Promise<string> {
        const ssm = new SSM();
        const result = await ssm
        .getParameter({ Name: name, WithDecryption: decrypt })
        .promise();

        return result.Parameter.Value;
    }

    private getName(name: string): string {
        const stage = this.configService.get('stage');
        const project = this.configService.get('projectName');
        const path = `/${project}/${stage}/${name}`;
        
        this.logger.log('Parameter formed: ', 'ParameterStoreService', path);

        return path;
    }
}
