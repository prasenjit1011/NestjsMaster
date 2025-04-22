import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class AppService {
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: '127.0.0.1',
      port: 6379,
    });
  }

  async setKey(key: string, value: string): Promise<string> {
    return await this.redis.set(key, value);
  }

  async getKey(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }


  getHello(): string {
    return 'Hello World!';
  }
}
