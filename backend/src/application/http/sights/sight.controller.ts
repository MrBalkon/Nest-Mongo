import createSightDto from '@domain/sight/dtos/createSight.dto';
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { SightService } from './sight.service';

@ApiTags("sight")
@Controller("sight")
export class SightController {
    constructor(public service: SightService) {}

    @Get()
    @HttpCode(200)
    async findAll(){
        return await this.service.findAll()
    }

    @Post()
    @HttpCode(200)
    async create(@Body() body: createSightDto){
        return await this.service.create(body)
    }
}
