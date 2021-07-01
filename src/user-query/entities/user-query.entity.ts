import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserQueryDocument = UserQuery & Document;

export enum EventType {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED",
  SYNCRONIZED = "SYNCRONIZED"
}

@Schema()
export class UserQuery {

  _id: string;

  @Prop()
  id: number;

  @Prop()
  email: string;

  @Prop()
  appId: string;

  @Prop()
  seed: string;

  @Prop()
  currentStatus: EventType;

}

export const UserQuerySchema = SchemaFactory.createForClass(UserQuery);
