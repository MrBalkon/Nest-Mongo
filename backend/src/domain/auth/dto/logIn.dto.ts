import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class LogInDto {
  @IsString()
  @ApiProperty({ default: "admin"})
  login: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @ApiProperty({ default: 'testPassword'})
  password: string;
}

export default LogInDto;