import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  private readonly userdata = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

  @MessagePattern({ cmd: 'get_users' })
  getUsers() {
    return this.userdata;
  }

  @Get('users')
  getUsersList() {
    return this.userdata;
  }

}
