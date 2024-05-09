import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity()
export class Trade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    user_id: number;

    @Column()
    symbol: string;

    @Column()
    shares: number;

    @Column()
    price: number;

    @Column()
    timestamp: number;
}
