// src/redis.constants.ts
import { Transport } from '@nestjs/microservices';

export const REDIS_OPTIONS = {
  transport: Transport.REDIS,
  options: {
    host: '127.0.0.1',
    port: 6379,
  },
};
