import { IsEnum, IsInt, IsString, Max, Min } from "class-validator";

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
    @Min(1500000000000)
    @Max(2000000000000)
    timestamp: number;
}
