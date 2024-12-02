import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_store')
export class Store {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    contactus: string;
}
