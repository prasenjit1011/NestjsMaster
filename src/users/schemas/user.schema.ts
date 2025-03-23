import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum UserType {
  ADMIN = 'admin',
  PROVIDER = 'provider',
  PATIENT = 'patient',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  emailId: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: UserStatus, default: UserStatus.PENDING })
  status: UserStatus;

  @Prop({ type: String, enum: UserType, required: true })
  type: UserType;
}

export const UserSchema = SchemaFactory.createForClass(User); 