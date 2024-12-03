import { IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    name: string

    @IsString()
    mobile: number
}
