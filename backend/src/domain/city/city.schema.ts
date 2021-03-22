import { Sight } from '@domain/sight/schemas/sight.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { type } from 'node:os';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [Types.ObjectId], ref: Sight.name })
  sights: Sight[];
}

export const CitySchema = SchemaFactory.createForClass(City);