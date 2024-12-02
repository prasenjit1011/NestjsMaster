import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_customer')
export class Customer {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    mobile: number;

    // Many-to-many relationship with Product
    @ManyToMany(() => Product, (product) => product.stores)
    @JoinTable({
        name: 'tbl_customer_product',  // Custom join table name
        joinColumn: {
          name: 'customer_id',   // Custom column name for the Store entity in the join table
          referencedColumnName: 'id', // Reference column in the Store entity
        },
        inverseJoinColumn: {
          name: 'product_id', // Custom column name for the Product entity in the join table
          referencedColumnName: 'id', // Reference column in the Product entity
        },
    }) // Specifies that this is the owning side of the relationship
    products: Product[];


}
