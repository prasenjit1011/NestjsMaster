import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Faq } from './models/faq.model';
import { CreateFaqInput } from './dto/create-faq.input';
import { UpdateFaqInput } from './dto/update-faq.input';

@Injectable()
export class FaqService {
  constructor(
    @InjectModel(Faq)
    private faqModel: typeof Faq,
  ) {}

  async create(createFaqInput: CreateFaqInput): Promise<Faq> {
    return this.faqModel.create({ ...createFaqInput });
  }

  async findAll(): Promise<Faq[]> {
    return this.faqModel.findAll();
  }

  async findOne(id: number): Promise<Faq> {
    const faq = await this.faqModel.findByPk(id);
    if (!faq) {
      throw new NotFoundException(`FAQ with ID ${id} not found`);
    }
    return faq;
  }

  async findByCategory(category: string): Promise<Faq[]> {
    return this.faqModel.findAll({
      where: {
        category,
        isActive: true,
      },
    });
  }

  async update(id: number, updateFaqInput: UpdateFaqInput): Promise<Faq> {
    const faq = await this.findOne(id);
    await faq.update(updateFaqInput);
    return faq;
  }

  async remove(id: number): Promise<boolean> {
    const faq = await this.findOne(id);
    await faq.destroy();
    return true;
  }
} 