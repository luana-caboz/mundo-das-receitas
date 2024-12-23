import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Receita {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    titulo: string;
    
    @Column('simple-array')
    ingredientes: string[];
    
    @Column()
    modoDeFazer: string; 
} 