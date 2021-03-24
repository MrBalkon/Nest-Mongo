import createSightDto from '@domain/sight/dtos/createSight.dto';
import { BadRequestFilter } from '@infrastructure/error/BadRequestFilter';
import { MongoExceptionFilter } from '@infrastructure/error/MongoExceptionFilter';
import { Body, Controller, Get, HttpCode, Param, Post, UseFilters } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { SightService } from './sight.service';

@ApiTags("sight")
@Controller()
export class SightController {
    constructor(public service: SightService) {}

    @Get("/:cityName/sights")
    @HttpCode(200)
    @ApiParam({
        name: 'cityName'
    })
    async findSightsByCityName(@Param("cityName") cityName){
        return await this.service.findSightsByCityName()
    }

}
