// import createUserDto from '@domain/user/dtos/createUser.dto';
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags("user")
@Controller("user")
export class UserController {
    constructor(public service: UserService) {}

    @Get()
    @HttpCode(200)
    async findAll(){
        return await this.service.findAll()
    }

}
