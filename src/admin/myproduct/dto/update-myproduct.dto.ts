import { PartialType } from '@nestjs/mapped-types';
import { CreateMyproductDto } from './create-myproduct.dto';

export class UpdateMyproductDto extends PartialType(CreateMyproductDto) {}
