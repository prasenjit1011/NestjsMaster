import { Productdetail } from "src/productdetail/entities/productdetail.entity";
import { Store } from "src/store/entities/store.entity";
import { Entity, Column, ManyToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_product')
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    // Many-to-many relationship with Store
    @ManyToMany(() => Store, (store) => store.products)
    stores: Store[];

    // One-to-one relationship with ProductDetails
    @OneToOne(() => Productdetail, (productDetails) => productDetails.product)
    @JoinColumn() // Specifies that this is the owning side of the relationship
    details: Productdetail;


}
