  
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @ApiProperty({ default: "user"})
  login: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @ApiProperty({ default: "password"})
  password: string;
}

export default RegisterDto;