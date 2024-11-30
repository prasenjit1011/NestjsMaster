import { Tournament } from "src/tournaments/entities/tournament.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organizer {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    status: string

    @OneToMany(type=> Tournament, tournament => tournament.organizer)
    tournaments: Tournament[]
}
