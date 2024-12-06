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
    @ManyToMany(() => Product, (product) => product.likedByCustomer)
    @JoinTable({
        name: 'tbl_customer_product',
        joinColumn: {
          name: 'customerId',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'productId',
          referencedColumnName: 'id',
        },
    })
    likedProduct: Product[];


}
