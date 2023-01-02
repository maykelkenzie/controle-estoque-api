import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('storage')
export class Storage {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    road: number

    @Column()
    stand: number

    @Column()
    row: number
}
