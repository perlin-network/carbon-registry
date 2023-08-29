import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataListResponseDto } from '../dto/data.list.response';
import { QueryDto } from '../dto/query.dto';
import { Country } from '../entities/country.entity';
import { HelperService } from './helpers.service';
import { Region } from "../entities/region.entity";

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country) private countryRepo: Repository<Country>,
        @InjectRepository(Region) private regionRepo: Repository<Region>,
        private helperService: HelperService
        ) { }

    async insertCountry(country: Country) {
        return this.countryRepo.save(country)
    }

    async isValidCountry(alpha2: string) {
        return (await this.countryRepo.findOneBy({
            alpha2: alpha2
        })) != null;
    }

    async getCountryName(alpha2: string) {
        return (await this.countryRepo.findOneBy({
            alpha2: alpha2
        }))?.name;
    }

    async getCountryList(query: QueryDto) {

        const resp = await this.countryRepo
            .createQueryBuilder()
            .select([
                '"alpha2"',
                '"name"'
            ])
            .where(
                this.helperService.generateWhereSQL(
                  query,
                  undefined
                )
              )
            .orderBy(query?.sort?.key && `"${query?.sort?.key}"`, query?.sort?.order)
            .offset(query.size * query.page - query.size)
            .limit(query.size)
            .getRawMany();
            
            console.log(resp)
            return new DataListResponseDto(
            resp,
            undefined
            );
    }

    async getAvailableCountries() {
        const resp = await this.countryRepo
            .find({
                select:{
                    name: true,
                    alpha2: true
                }
            })

        return resp;
    }

    async queryRegions(query: QueryDto, abilityCondition: string): Promise<any> {
        const resp = await this.regionRepo
          .createQueryBuilder()
          .select(['"key"', '"name"', '"countryAlpha2"'])
          .where(
            this.helperService.generateWhereSQL(
              query,
              this.helperService.parseMongoQueryToSQL(abilityCondition)
            )
          )
          .orderBy(query?.sort?.key && `"${query?.sort?.key}"`, query?.sort?.order)
          .offset(query.size * query.page - query.size)
          .limit(query.size)
          .getRawMany();
    
        console.log('[queryRegions]', resp);
        return new DataListResponseDto(resp, undefined);
      }
}
