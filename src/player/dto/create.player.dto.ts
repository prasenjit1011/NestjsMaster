import { IsDate, IsEnum, IsInt, IsString, Max, Min } from "class-validator";
import { IntegerType, Timestamp } from "typeorm";

export enum TradeState {
    buy='buy',
    sell='sell'
}

export class CreatePlayerDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    profilepic: string;

    @IsInt()
    categoryId: number;

    @IsInt()
    teamId: number;
}
