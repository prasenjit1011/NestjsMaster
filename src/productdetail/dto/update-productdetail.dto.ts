import { PartialType } from '@nestjs/mapped-types';
import { CreateProductdetailDto } from './create-productdetail.dto';

export class UpdateProductdetailDto extends PartialType(CreateProductdetailDto) {}
