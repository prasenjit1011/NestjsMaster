import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: "mobile"})
export class MobileEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;

}