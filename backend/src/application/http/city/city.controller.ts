import { City } from '@domain/city/city.schema';
import createCityDto from '@domain/city/dtos/createCity.dto';
import { BadRequestFilter } from '@infrastructure/error/BadRequestFilter';
import { HttpError } from '@infrastructure/error/HttpError';
import { MongoExceptionFilter } from '@infrastructure/error/MongoExceptionFilter';
import { Body, Catch, Controller, Get, HttpCode, Param, Post, Query, UseFilters } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CityService } from './city.service';

@ApiTags("city")
@Controller()
export class CityController {
    constructor(public service: CityService) {}

    @Get("city")
    @HttpCode(200)
    @ApiQuery({
        name: 'name'
    })
    async findSightsByCityName(@Query() body: City){
        return await this.service.findAll(body)
    }

    @Get("/:cityName/sights")
    @HttpCode(200)
    @UseFilters(BadRequestFilter, MongoExceptionFilter)
    @ApiParam({
        name: 'cityName'
    })
    async findAll(@Param("cityName") cityName){
        return await this.service.findSightsByCityName(cityName)
    }

    @Post("city")
    @HttpCode(200)
    @UseFilters(BadRequestFilter, MongoExceptionFilter)
    async create(@Body() body: createCityDto){
        return await this.service.create(body)
    }
}
