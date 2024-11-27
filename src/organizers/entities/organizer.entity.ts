import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organizer {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    status: string
}
