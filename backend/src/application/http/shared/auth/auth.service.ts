import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '@application/http/user/user.service'
import RegisterDto from '@domain/auth/dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import LogInDto from '@domain/auth/dto/logIn.dto';

import { JwtPayload } from './interfaces/jwt.payload';
import { Role } from '@infrastructure/auth/roles.enum';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(registrationData: RegisterDto) {
    try {
      const createdUser = await this.usersService.create({
        ...registrationData,
        role: Role.Regular,
        password: registrationData.password,
        registered: true
      });
      return createdUser;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  public async login(loginData: LogInDto){
    const user = await this.usersService.getByLogin(loginData.login);
    if (!loginData.password)  throw new HttpException("You must provide password", HttpStatus.BAD_REQUEST);
    if (!loginData.login)  throw new HttpException("You must provide login", HttpStatus.BAD_REQUEST);
    if (!user) throw new HttpException("User not exists", HttpStatus.NOT_FOUND);

    const passwordIsValid = bcrypt.compareSync(
      loginData.password,
      user.password,
    );

    if(!passwordIsValid) throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST)

    const payload = {
      login: user.login,
      role: user.role,
    }
    const authorizationToken = this.jwtService.sign(payload);
    return authorizationToken;
  }

  public async validateUserByJwt(payload: JwtPayload) {
    const user = await this.usersService.getByLogin(payload.login);

    return user;
  }
}