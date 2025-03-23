import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  emailId: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
} 