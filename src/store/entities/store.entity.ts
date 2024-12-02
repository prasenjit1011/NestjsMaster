import { Merchant } from "src/merchant/entities/merchant.entity";
import { Product } from "src/product/entities/product.entity";
import { Entity, Column, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";

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

    // Many-to-many relationship with Product
    @ManyToMany(() => Product, (product) => product.stores)
    @JoinTable({
        name: 'tbl_store_product',  // Custom join table name
        joinColumn: {
          name: 'store_id',   // Custom column name for the Store entity in the join table
          referencedColumnName: 'id', // Reference column in the Store entity
        },
        inverseJoinColumn: {
          name: 'product_id', // Custom column name for the Product entity in the join table
          referencedColumnName: 'id', // Reference column in the Product entity
        },
    }) // Specifies that this is the owning side of the relationship
    products: Product[];

}
