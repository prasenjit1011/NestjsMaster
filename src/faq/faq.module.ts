import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FaqService } from './faq.service';
import { FaqResolver } from './faq.resolver';
import { Faq } from './models/faq.model';

@Module({
  imports: [SequelizeModule.forFeature([Faq])],
  providers: [FaqResolver, FaqService],
  exports: [FaqService],
})
export class FaqModule {} 