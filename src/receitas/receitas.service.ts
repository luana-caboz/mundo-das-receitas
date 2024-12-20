import { Injectable, NotFoundException } from '@nestjs/common';
import { Receita } from './receitas.model';

@Injectable()
export class ReceitasService {
  private receitas: Receita[] = [];
  private idAtual: number = 0;

  private gerarIdUnico(): number {
    this.idAtual += 1;
    return this.idAtual;
  }

  criarReceita(
    titulo: string,
    ingredientes: string[],
    modoDeFazer: string,
  ): Receita {
    const novaReceita: Receita = {
      id: this.gerarIdUnico(),
      titulo,
      ingredientes,
      modoDeFazer,
    };
    this.receitas.push(novaReceita);
    return novaReceita;
  }

  listarReceitas(): Receita[] {
    return this.receitas;
  }

  buscarReceitaPorId(id: number): Receita {
    return this.receitas.find((receita) => receita.id === id);
  }

  atualizar(id: number, dadosAtualizados: Partial<Receita>): Receita {
    const receitaIndex = this.receitas.findIndex((r) => r.id === id);

    if (receitaIndex === -1) {
      throw new NotFoundException(`Receita com ID ${id} não encontrada`);
    }

    this.receitas[receitaIndex] = {
      ...this.receitas[receitaIndex],
      ...dadosAtualizados,
    };

    return this.receitas[receitaIndex];
  }

  deletar(id: number): void {
    const receitaIndex = this.receitas.findIndex((r) => r.id === id);

    if (receitaIndex === -1) {
      throw new NotFoundException(`Receita com ID ${id} não encontrada`);
    }

    this.receitas.splice(receitaIndex, 1);
  }
}
