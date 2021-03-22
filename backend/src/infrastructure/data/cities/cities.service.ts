// import { City } from '@domain/city/entities/city.entity';
import { CityService } from '@application/http/city/city.service'
import { SightService } from '@application/http/sights/sight.service';
import { Sight } from '@domain/sight/schemas/sight.schema';
import { Inject, Injectable } from '@nestjs/common'
import * as citiesJson from './cities.json'

@Injectable()
export class CitiesDataService{
    constructor(@Inject(CityService) private CityService, 
                @Inject(SightService) private SightService,) {}

    async appendCities(){
        const existingCities = await this.CityService.findAll();
        for(let i = 0; i < existingCities.length; i++){
            await this.CityService.remove({ name: existingCities[i].name })
            if(existingCities[i].sights.length > 0){
                for(let j = 0; j < existingCities[i].sights.length; j++){
                    await this.SightService.remove({ name: existingCities[i].sights[j].name })
                }
            }
        }
        const cities = Object.entries(citiesJson);
        for(let i = 0; i < cities.length; i++){
            const sights = cities[i][1];
            const sightsArr = [];
            for(let j = 0; j < sights.length; j++){
                const sight = await this.SightService.create({ ...sights[j] })
                sightsArr.push(sight);
            }
            await this.CityService.create({ name: cities[i][0], sights: sightsArr })
        }
    }

    async

    async onModuleInit() {
        await this.appendCities();
    }
}