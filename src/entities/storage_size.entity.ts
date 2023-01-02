import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('storage_size')
export class StorageSize {
    @PrimaryGeneratedColumn()
    id: number

    @Column({default:0})
    road: number

    @Column({default:0})
    stand: number

    @Column({default:0})
    row: number
}
