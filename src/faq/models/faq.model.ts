import { Column, Model, Table } from 'sequelize-typescript';
import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
@Table
export class Faq extends Model {
  @Field(() => ID)
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Field()
  @Column
  question: string;

  @Field()
  @Column
  answer: string;

  @Field()
  @Column({
    defaultValue: true,
  })
  isActive: boolean;

  @Field()
  @Column
  category: string;
} 