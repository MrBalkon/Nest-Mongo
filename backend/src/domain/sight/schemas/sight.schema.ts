import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SightDocument = Sight & Document;

@Schema()
export class Sight {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  architect: string;
}

export const SightSchema = SchemaFactory.createForClass(Sight);