import { Inject, Injectable } from '@nestjs/common';
import createCityDto from '@domain/city/dtos/createCity.dto';
import { SightService } from '../sights/sight.service';

@Injectable()
export class CityService {
    constructor(@Inject(SightService) private sightService) {}

    async create(city: createCityDto): Promise<void> {
      await this.sightService.create({ name: "test", description: "test", architect: "test"});
    }

}
