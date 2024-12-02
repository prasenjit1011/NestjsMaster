import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_merchant')
export class Merchant {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;
}
