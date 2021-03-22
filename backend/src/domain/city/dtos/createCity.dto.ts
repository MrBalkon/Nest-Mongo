import { Sight } from '@domain/sight/schemas/sight.schema';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  sights: Sight[];
}

export default CreateCityDto;