import { Tournament } from "src/tournaments/entities/tournament.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    rank: string;

    @Column({ type: 'date' })
    timestamp: Date;

    @ManyToOne(type => Tournament)
    tournament: Tournament

    // @ManyToOne(type => Organizer)
    // organizer: Organizer
}
