import { Role } from '@infrastructure/auth/roles.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true})
  login: string;

  @Exclude()
  @Prop()
  password: string

  @Prop()
  role: Role

  @Prop({ default: false, required: false})
  registered: boolean
}

export const UserSchema = SchemaFactory.createForClass(User);