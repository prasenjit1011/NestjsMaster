export class CreateTradeDto {
    type: string;
    user_id: number;
    symbol: string;
    shares: number;
    price: number;
    timestamp: number;
}
