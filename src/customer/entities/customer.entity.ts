import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_customer')
export class Customer {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    mobile: number;
}
