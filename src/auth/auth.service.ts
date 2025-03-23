import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { UserStatus, UserType } from '../users/schemas/user.schema';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    // Check if email already exists
    const existingUser = await this.usersService.findByEmail(registerDto.emailId);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Set default type if not provided
    const userType = registerDto.type || UserType.PATIENT;

    // Determine status based on user type
    const status = userType === UserType.PATIENT ? UserStatus.ACTIVE : UserStatus.PENDING;

    // Create user with the determined status
    const user = await this.usersService.create({
      firstName: registerDto.firstName,
      lastName: registerDto.lastName,
      emailId: registerDto.emailId,
      password: hashedPassword,
      type: userType,
      status: status,
    });

    // Generate token and return user data
    const payload = {
      email: user.emailId,
      sub: user._id,
      type: user.type,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user._id,
        emailId: user.emailId,
        firstName: user.firstName,
        lastName: user.lastName,
        type: user.type,
        status: user.status,
      },
    };
  }

  async validateUser(emailId: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(emailId);
    if (!user) {
      throw new UnauthorizedException('User not found with this email');
    }

    if (user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException('User account is not active');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return user;
  }

  async login(user: any) {
    const payload = {
      email: user.emailId,
      sub: user._id,
      type: user.type,
    };

    const token = this.jwtService.sign(payload);
    console.log('Token generated:', token ? 'yes' : 'no'); // Debug log

    return {
      access_token: token,
      user: {
        id: user._id,
        emailId: user.emailId,
        firstName: user.firstName,
        lastName: user.lastName,
        type: user.type,
        status: user.status,
      },
    };
  }

  async validateToken(token: string) {
    try {
      const payload = await this.jwtService.verify(token);
      const user = await this.usersService.findOne(payload.sub);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }
      if (user.status !== UserStatus.ACTIVE) {
        throw new UnauthorizedException('User account is not active');
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
} 