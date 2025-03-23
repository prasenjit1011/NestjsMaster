import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserStatus, UserType } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersSeeder {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  private readonly seedUsers = [
    {
      firstName: 'New',
      lastName: 'Admin',
      emailId: 'admin@domain.com',
      password: '12345678',
      status: UserStatus.ACTIVE,
      type: UserType.ADMIN,
    },
    {
      firstName: 'New',
      lastName: 'Provider',
      emailId: 'provider@domain.com',
      password: '12345678',
      status: UserStatus.ACTIVE,
      type: UserType.PROVIDER,
    },
    {
      firstName: 'New',
      lastName: 'Patient',
      emailId: 'patient@domain.com',
      password: '12345678',
      status: UserStatus.ACTIVE,
      type: UserType.PATIENT,
    },
  ];

  async seed() {
    try {
      // Clear existing users
      await this.userModel.deleteMany({});
      console.log('Cleared existing users');

      // Create new users
      for (const userData of this.seedUsers) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new this.userModel({
          ...userData,
          password: hashedPassword,
        });
        await user.save();
        console.log(`Created user: ${userData.emailId}`);
      }

      console.log('Seeding completed successfully');
    } catch (error) {
      console.error('Seeding failed:', error);
      throw error;
    }
  }
} 