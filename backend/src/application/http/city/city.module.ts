import { CityService } from './city.service';
import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from '@domain/city/city.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: City.name, schema: CitySchema}])],
    controllers: [
        CityController],
    providers: [
        CityService,],
    exports: [
        CityService
    ]
})
export class CityModule { }
