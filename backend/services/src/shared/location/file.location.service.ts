import { Injectable, Logger } from "@nestjs/common";
import { LocationInterface } from "./location.interface";
import { Region } from "../entities/region.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { readFileSync } from "fs";

@Injectable()
export class FileLocationService implements LocationInterface {

  private regionMap: Array<{ name: string, location: number[], countryCode: string }>  = [];

  constructor(
    private logger: Logger,
    @InjectRepository(Region) private regionRepo: Repository<Region>
  ) {
    const deliminator = ','
    const regionRawData = readFileSync('regions.csv', 'utf8');
    const headers = regionRawData.slice(0, regionRawData.indexOf("\n")).split(deliminator).map(e => e.trim().replace('\r', ''))
    const rows = regionRawData.slice(regionRawData.indexOf("\n") + 1).split("\n")

    const nameIndex = headers.indexOf('Name')
    const countryCodeIndex = headers.indexOf('CountryCode')
    const latitudeIndex = headers.indexOf('Latitude')
    const longitudeIndex = headers.indexOf('Longitude')
    console.log(headers, nameIndex, countryCodeIndex, latitudeIndex, longitudeIndex)
    if (nameIndex >=0 && latitudeIndex >=0 && longitudeIndex >=0 && countryCodeIndex >=0) {
      for (let row of rows) {
        row = row.replace('\r', '')
        const columns = row.split(deliminator)
        if (columns.length != headers.length) {
          continue
        }
        this.regionMap.push({
          name: columns[nameIndex].trim(),
          countryCode: columns[countryCodeIndex].trim(),
          location: [ Number(columns[longitudeIndex].trim()), Number(columns[latitudeIndex].trim()) ]
        })
      }
    }

    this.logger.log(`Regions loaded: ${this.regionMap.length}`)
    logger.log('Constructor initialized', 'FileLocationService');
  }
  
  public async init(): Promise<void> {
    this.logger.log('Started', 'init')
    const existingRegionsCount = await this.regionRepo.count();

    if (existingRegionsCount <= 0){
      const data: Region[] = [];
      for (const rg of this.regionMap) {
        const region = new Region();
        region.countryAlpha2 = rg.countryCode;
        region.regionName = rg.name;
        region.geoCoordinates = rg.location;
        region.lang = 'en';
        region.key = `${region.lang}-${rg.countryCode}-${rg.name}`;
        data.push(region);
      }

      await this.regionRepo.save(data);
      this.logger.log(`Regions loaded count: ${data.length}`, 'init');
    } else {
      this.logger.log(`Skipped adding regions.`, 'init')
    }
  }

  public getCoordinatesForRegion(regions: string[]): Promise<number[][]> {
    return new Promise((resolve, reject) => {
      resolve(regions.map( (region) => {
        return this.regionMap.find(x => x.name === region).location
      }));
    })
  }
  
}