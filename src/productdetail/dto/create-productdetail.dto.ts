import { IsString } from "class-validator";

export class CreateProductdetailDto {
    @IsString()
    description: string
}
