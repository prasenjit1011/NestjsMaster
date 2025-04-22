import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @EventPattern('message_channel')
  handleMessage(@Payload() data: any) {
    console.log('📩 Received Subscriber EventPattern nestjs master :', data);
  }


  @MessagePattern('message_channel')
  handleRedisMessage(data: any) {
    console.log('📩 Received from MessagePattern Redis nestjs master:', data);
    return `Ack: ${data}`;
  }


  @Get()
  async getHello(){
    let key = 'mykey';
    //let value = 'Get '+(new Date).getSeconds();
    const result1 = 'Get';//await this.appService.setKey(key, value);
    
    
    const result2 = await this.appService.getKey(key);
    return { result1, result2 };
  }
}
