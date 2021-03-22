import {
    Body,
    Req,
    Controller,
    HttpCode,
    Post,
    Get, ClassSerializerInterceptor, UseInterceptors, UseGuards, UnauthorizedException,
  } from '@nestjs/common';
  import { AuthenticationService } from './auth.service';
  import { UserService } from '@application/http/user/user.service';
  import LogInDto from '@domain/auth/dto/logIn.dto';

  import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
  import { JwtAuthGuard } from './guards/jwt.auth.guard';
  import { Role } from '@infrastructure/auth/roles.enum';
import RegisterDto from '@domain/auth/dto/register.dto';
  
  @ApiTags("auth")
  @Controller('auth')
  // @UseInterceptors(ClassSerializerInterceptor)
  export class AuthenticationController {
    constructor(
      private readonly authenticationService: AuthenticationService,
      private readonly usersService: UserService
    ) {}
  
    @Post('register')
    @HttpCode(200)
    async register(@Body() registrationData: RegisterDto) {
      return await this.authenticationService.register(registrationData);
    }
  
    @HttpCode(200)
    @Post('log-in')
    async logIn(@Body() requestBody: LogInDto) {
      const accessToken = await this.authenticationService.login(requestBody);
      return {accessToken: accessToken};
    }

    @HttpCode(200)
    @Get('me')
    @UseGuards(new JwtAuthGuard())
    @ApiBearerAuth()
    async getMe(@Req() req){
      console.log(req.user)
       return req.user;
      // else throw new UnauthorizedException();
    }
  }