import { IsString } from "class-validator";

export class CreateOrganizerDto {
    @IsString()
    name: string

    @IsString()
    status: string
}
