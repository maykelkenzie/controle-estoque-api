import { Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import {Storage} from "./storage.entity";


@Entity('products')
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length:120, unique: true})
    name: string

    @Column({type:"double precision"})
    price: number

    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    validity: Date

    @Column()
    quantity: number
    
    @Column()
    isActive: boolean

    @OneToOne(() => Storage)
    @JoinColumn()
    storage: Storage
}

