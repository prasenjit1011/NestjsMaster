import { Store } from "src/store/entities/store.entity";
import { Entity, Column, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_product')
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    // Many-to-many relationship with Store
    @ManyToMany(() => Store, (store) => store.products)
    stores: Store[];



}
