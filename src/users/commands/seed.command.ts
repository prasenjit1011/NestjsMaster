import { Command, CommandRunner } from 'nest-commander';
import { UsersSeeder } from '../seeders/users.seeder';

@Command({ name: 'seed:users', description: 'Seed users data' })
export class SeedUsersCommand extends CommandRunner {
  constructor(private readonly usersSeeder: UsersSeeder) {
    super();
  }

  async run(): Promise<void> {
    try {
      await this.usersSeeder.seed();
      process.exit(0);
    } catch (error) {
      console.error('Seeding failed:', error);
      process.exit(1);
    }
  }
} 