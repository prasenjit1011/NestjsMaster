import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private readonly categoryRepository:Repository<Category>){}

  async create(createCategoryDto: CreateCategoryDto) {
    let category:Category = new Category();
    category.catname = 'Captain';
    category.orderby = 2;

    let data = await this.categoryRepository.save(category);
    return {msg:'This action adds a new category', data:data};
  }

  async findAll() {
    let cond = {relations: ['player']};
    let data = await this.categoryRepository.find(cond);
    return {msg:`This action returns all category`, data:data};
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
