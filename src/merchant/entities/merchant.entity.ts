import { Store } from "src/store/entities/store.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_merchant')
export class Merchant {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    // One Merchant can have many Stores
    @OneToMany(() => Store, (store) => store.merchant)
    stores: Store[];
}
