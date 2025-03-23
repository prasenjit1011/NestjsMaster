import { Controller, Post, Body, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      console.log('Login attempt for:', loginDto.emailId); // Debug log
      const user = await this.authService.validateUser(
        loginDto.emailId,
        loginDto.password,
      );
      console.log('User found:', user ? 'yes' : 'no'); // Debug log
      return this.authService.login(user);
    } catch (error) {
      console.error('Login error:', error.message); // Debug log
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new BadRequestException('Invalid login request');
    }
  }
} 