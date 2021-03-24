import { CityService } from './city.service';
import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { SightService } from '../sights/sight.service';

@Module({
    imports: [],
    controllers: [
        CityController
    ],
    providers: [
        CityService,
        SightService,
    ],
    exports: [
        
    ]
})
export class CityModule { }
