import { IsInt } from "class-validator";

export class CreateCustomerProductDto {
    @IsInt()
    customer_id: number

    @IsInt()
    product_id: number
}
