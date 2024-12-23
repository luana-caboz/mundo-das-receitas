import { Injectable, NotFoundException } from '@nestjs/common';
import { Receita } from './receitas.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarReceitaDto } from './dto/criar-receita.dto';

@Injectable()
export class ReceitasService {
  /*private receitas: Receita[] = [
    {
        "id": 1,
        "titulo": "Bolo de cenoura",
        "ingredientes": [
            "cenoura",
            "farinha",
            "ovos",
            "leite"
        ],
        "modoDeFazer": "Misture os ingredientes e asse o bolo por 1h"
    },
    {
        "id": 2,
        "titulo": "Bolo de chocolate",
        "ingredientes": [
            "chocolate",
            "farinha",
            "ovos",
            "leite"
        ],
        "modoDeFazer": "Misture os ingredientes e asse o bolo por 1h"
    }
];*/

  constructor(
    @InjectRepository(Receita)
    private readonly receitaRepository: Repository<Receita>,
  ) {}

  criarReceita(criarReceitaDto: CriarReceitaDto): Promise<Receita> {
    const novaReceita = new Receita();
    novaReceita.titulo = criarReceitaDto.titulo;
    novaReceita.ingredientes= criarReceitaDto.ingredientes;
    novaReceita.modoDeFazer = criarReceitaDto.modoDeFazer;

    return this.receitaRepository.save(novaReceita);
  }

  listarReceitas(): Promise<Receita[]> {
    return this.receitaRepository.find();
  }

  buscarReceitaPorId(id: number): Promise<Receita> {
    return this.receitaRepository.findOneBy({id});
  }

  atualizar(id: number, dadosAtualizados: Partial<Receita>): Promise<Receita> {
    this.receitaRepository.update(id, dadosAtualizados)
    return this.receitaRepository.findOneBy({id});

  }

  deletar(id: string): void {
    this.receitaRepository.delete(id);
  }
}
