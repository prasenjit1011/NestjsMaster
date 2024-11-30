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

//Organizer => ICC, BCCI, ACB, SLC, ECB etc
//Tournaments => WorldCup, T20, AsiaCup etc 
//Teams => India, Australia, WestIndies etc
//Player => Player1, Player2, Player3 etc
//PlayerDetails => DOB, Score, 

//Category => Bowler, Batsman, GoodFielder, WicketKeeper, Captain
//Player => Player1, Player2, Player3 etc
//Player_Category => Player1 (Bowler, Batsman, GoodFielder)
//Category_player => Bowler ( Player1, Player2, Player3 ), Batsman ( Player2, Player3 ), Captain ( Player1 )