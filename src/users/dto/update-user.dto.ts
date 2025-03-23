import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserStatus, UserType } from '../schemas/user.schema';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEmail()
  emailId?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus;

  @IsOptional()
  @IsEnum(UserType)
  type?: UserType;
} 