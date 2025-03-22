import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';

export default registerAs('database', () => ({
  dialect: 'mysql' as Dialect,
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nest_auth_db',
  autoLoadModels: true,
  synchronize: true,
})); 