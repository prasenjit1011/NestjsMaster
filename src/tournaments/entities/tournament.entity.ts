import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Tournament {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name:string

    @Column()
    startDate:Date

    @Column()
    endDate:Date

    @Column()
    status:string
}
