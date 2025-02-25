import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('employees')
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}