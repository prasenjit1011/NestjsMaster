import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_product')
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;
}
