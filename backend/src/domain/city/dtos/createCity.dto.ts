import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  code: string;
}

export default CreateCityDto;