import { Customer } from "src/customer/entities/customer.entity";
import { Productdetail } from "src/productdetail/entities/productdetail.entity";
import { Store } from "src/store/entities/store.entity";
import { Entity, Column, ManyToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_product')
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    // One-to-one relationship with ProductDetails
    // @JoinColumn() // Specifies that this is the owning side of the relationship
    @OneToOne(() => Productdetail, (productDetails) => productDetails.product)
    details: Productdetail;


    // Many-to-many relationship with Store
    @ManyToMany(() => Store, (store) => store.products)
    stores: Store[];

    @ManyToMany(() => Customer, (customer) => customer.likedProduct)
    likedByCustomer: Customer[];



}
