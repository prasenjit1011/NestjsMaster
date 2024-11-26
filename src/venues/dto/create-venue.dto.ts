import { IsString } from "class-validator";

export class CreateVenueDto {
    @IsString()
    name: string

    @IsString()
    status: string
}
