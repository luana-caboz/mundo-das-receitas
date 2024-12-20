import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CriarReceitaDto } from './dto/criar-receita.dto';
import { Receita } from './receitas.model';
import { ReceitasService } from './receitas.service';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @Post()
  criarReceita(@Body() criarReceitaDto: CriarReceitaDto): Receita {
    const { titulo, ingredientes, modoDeFazer } = criarReceitaDto;
    return this.receitasService.criarReceita(titulo, ingredientes, modoDeFazer);
  }

  @Get()
  listarReceitas(): Receita[] {
    return this.receitasService.listarReceitas();
  }

  @Get(':id')
  buscarReceita(@Param('id') id: number): Receita {
    return this.receitasService.buscarReceitaPorId(id);
  }

  @Put(':id')
  atualizarReceita(
    @Param('id') id: number,
    @Body() dadosAtualizados: Partial<Receita>,
  ): Receita {
    return this.receitasService.atualizar(id, dadosAtualizados);
  }

  @Delete(':id')
  deleteReceita(@Param('id') id: number): void {
    this.receitasService.deletar(id);
  }
}
