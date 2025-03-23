import { InputType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class UpdateFaqInput {
  @Field(() => ID)
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  question?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  answer?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  category?: string;
} 