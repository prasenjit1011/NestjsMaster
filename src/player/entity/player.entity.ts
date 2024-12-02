import { Category } from "src/category/entities/category.entity";
import { Team } from "src/teams/entities/team.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    profilepic: string;

    @Column({ type: 'date', default: () => 'CURRENT_Date' })
    timestamp: Date;

    @ManyToOne(type => Team)
    team: Team;

    @ManyToOne(type => Category)
    //@JoinColumn({ name: 'catId' })
    category: Category;
}

