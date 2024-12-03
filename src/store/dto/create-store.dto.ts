import { IsInt, IsString } from "class-validator";

export class CreateStoreDto {
    @IsString()
    name: string

    @IsInt()
    merchant: number

    @IsString()
    contactus: string

    @IsInt()
    merchantId: number
}
