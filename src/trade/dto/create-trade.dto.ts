import { IsEnum, IsInt, IsString, Max, Min } from "class-validator";
import { Timestamp } from "typeorm";

export enum TradeState {
    buy='buy',
    sell='sell'
}

export class CreateTradeDto {
    @IsString()
    @IsEnum(TradeState)
    type: string;

    @IsInt()
    user_id: number;

    @IsString()
    symbol: string;

    @IsInt()
    @Min(10)
    @Max(30)
    shares: number;

    @IsInt()
    price: number;

    @IsInt()
    timestamp: number;
}
