import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class LogInDto {
  @IsString()
  @ApiProperty({ default: "user"})
  login: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @ApiProperty({ default: 'password'})
  password: string;
}

export default LogInDto;