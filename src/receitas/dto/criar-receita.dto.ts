import { IsArray, IsString } from 'class-validator';

export class CriarReceitaDto {
  @IsString()
  titulo: string;

  @IsArray()
  ingredientes: string[];

  @IsString()
  modoDeFazer: string;
}
