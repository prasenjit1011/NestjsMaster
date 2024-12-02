import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('tbl_productdetail')
export class Productdetail {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;}
