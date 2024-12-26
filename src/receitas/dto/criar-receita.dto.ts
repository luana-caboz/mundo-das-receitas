import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CriarReceitaDto {
  @ApiProperty({ description: 'Título da receita', example: 'Bolo de cenoura' })
  @IsString()
  titulo: string;

  @ApiProperty({
    description: 'Lista de ingredientes',
    example: ['cenoura', 'açúcar', 'farinha', 'ovo'],
  })
  @IsArray()
  ingredientes: string[];

  @ApiProperty({
    description: 'Modo de fazer a receita',
    example: '1. Bata tudo no liquidificador e asse por 40 minutos',
  })
  @IsString()
  modoDeFazer: string;
}
