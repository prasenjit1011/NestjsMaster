import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('tbl_productdetail')
export class Productdetail {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description: string;

    // One-to-one relationship with Product
    @OneToOne(() => Product, (product) => product.id)
    @JoinColumn() // Specifies that this is the owning side of the relationship
    product: Product;

}
