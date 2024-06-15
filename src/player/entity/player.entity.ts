import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({ type: 'date', default: () => 'CURRENT_Date' })
    timestamp: Date;
}

