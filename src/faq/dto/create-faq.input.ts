import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class CreateFaqInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  question: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  answer: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @Field()
  @IsNotEmpty()
  @IsString()
  category: string;
} 