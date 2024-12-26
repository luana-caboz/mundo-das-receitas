import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receita {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Bolo de cenoura' })
  @Column()
  titulo: string;

  @ApiProperty({ example: ['cenoura', 'açúcar', 'farinha', 'ovo'] })
  @Column('simple-array')
  ingredientes: string[];

  @ApiProperty({
    example: '1. Bata tudo no liquidificador e asse por 40 minutos',
  })
  @Column()
  modoDeFazer: string;
}
