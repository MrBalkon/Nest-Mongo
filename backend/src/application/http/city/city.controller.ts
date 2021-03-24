import createCityDto from '@domain/city/dtos/createCity.dto';
import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.auth.guard';
import { CityService } from './city.service';

@ApiTags("City")
@Controller("city")
export class CityController {
    constructor(public service: CityService) {}

    @Post()
    @HttpCode(200)
    @UseGuards(new JwtAuthGuard())
    @ApiBearerAuth()
    async create(@Body() body: createCityDto){
        return await this.service.create(body)
    }

}
