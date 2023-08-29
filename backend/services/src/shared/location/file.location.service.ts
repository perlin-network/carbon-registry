import { Injectable, Logger } from "@nestjs/common";
import { LocationInterface } from "./location.interface";
import { Region } from "../entities/region.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { readFileSync } from "fs";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class FileLocationService implements LocationInterface {

  private regionMap: Array<Region> = [];

  constructor(
    private logger: Logger,
    @InjectRepository(Region) private regionRepo: Repository<Region>,
    private configService: ConfigService,
  ) {
    logger.log('Constructor initialized', 'FileLocationService');
  }

  public async init(): Promise<void> {
    this.logger.log('Started', 'init')
    const regions = await this.readRegionsFromFile();
    await this.regionRepo.save(regions);
    this.logger.log(`Regions loaded count: ${regions.length}`, 'init');
  }

  public async getCoordinatesForRegion(regions: string[]): Promise<number[][]> {
    const map = await this.getRegionMap();
    return new Promise((resolve, reject) => {
      resolve(regions.map((region) => {
        return map.find(x => x.regionName === region).geoCoordinates
      }));
    })
  }

  private async getRegionMap(): Promise<Array<Region>> {
    if (this.regionMap.length)
      return this.regionMap;

    const countryCode = this.configService.get("systemCountryCode");

    this.regionMap = await this.regionRepo.find({
      where: {
        countryAlpha2: countryCode
      }
    });

    return this.regionMap;
  }

  private async readRegionsFromFile(): Promise<Array<Region>> {
    const map: Region[] = [];
    const deliminator = ','
    const regionRawData = readFileSync('regions.csv', 'utf8');
    const headers = regionRawData.slice(0, regionRawData.indexOf("\n")).split(deliminator).map(e => e.trim().replace('\r', ''))
    const rows = regionRawData.slice(regionRawData.indexOf("\n") + 1).split("\n")

    const nameIndex = headers.indexOf('Name')
    const countryCodeIndex = headers.indexOf('CountryCode')
    const latitudeIndex = headers.indexOf('Latitude')
    const longitudeIndex = headers.indexOf('Longitude')
    console.log(headers, nameIndex, countryCodeIndex, latitudeIndex, longitudeIndex)
    if (nameIndex >= 0 && latitudeIndex >= 0 && longitudeIndex >= 0 && countryCodeIndex >= 0) {
      for (let row of rows) {
        row = row.replace('\r', '')
        const columns = row.split(deliminator)
        if (columns.length != headers.length) {
          continue
        }
        map.push({
          key: `en-${columns[countryCodeIndex].trim()}-${columns[nameIndex].trim()}`,
          regionName: columns[nameIndex].trim(),
          countryAlpha2: columns[countryCodeIndex].trim(),
          geoCoordinates: [Number(columns[longitudeIndex].trim()), Number(columns[latitudeIndex].trim())],
          lang: 'en'
        })
      }
    }

    this.logger.log(`Regions loaded: ${map.length}`, 'readRegionsFromFile')
    return map;
  }
}