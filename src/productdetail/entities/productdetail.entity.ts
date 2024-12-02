import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('tbl_productdetail')
export class Productdetail {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description: string;

    // One-to-one relationship with Product
    @OneToOne(() => Product, (product) => product.details)
    product: Product;

}
