import { Organizer } from "src/organizers/entities/organizer.entity"
import { Team } from "src/teams/entities/team.entity"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"

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

    @ManyToOne(type => Organizer)
    organizer: Organizer


    @OneToMany(type=> Team, team => team.tournament)
    teams: Team[]

}
