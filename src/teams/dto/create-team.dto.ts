import { IsDate, IsEnum, IsInt, IsString, Max, Min } from "class-validator";

export class CreateTeamDto {
    @IsString()
    name: string;

    @IsString()
    rank: string;

}
