import { IsDate, IsEnum, IsInt, IsString, Max, Min } from "class-validator";
import { Timestamp } from "typeorm";

export enum TradeState {
    buy='buy',
    sell='sell'
}

export class CreatePlayerDto {
    @IsString()
    username: string;

    @IsString()
    password: string;
}
