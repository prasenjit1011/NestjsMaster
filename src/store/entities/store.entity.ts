import { Merchant } from "src/merchant/entities/merchant.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_store')
export class Store {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    contactus: string;

    // Many Stores belong to one Merchant
    @ManyToOne(() => Merchant, (merchant) => merchant.stores)
    merchant: Merchant;
}
