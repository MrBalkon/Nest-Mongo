import { Sight } from '@domain/sight/schemas/sight.schema';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class ReadCityDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

export default ReadCityDto;