import { Player } from "src/player/entity/player.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    catname:string

    @Column()
    orderby:number

    @OneToMany(type=> Player, player => player.category)
    player: Player[]
}
