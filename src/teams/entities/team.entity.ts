import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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
}
