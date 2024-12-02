import { IsString } from "class-validator";


export class CreateMerchantDto {
    @IsString()
    name: string
}
