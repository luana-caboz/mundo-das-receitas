import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CriarReceitaDto } from './dto/criar-receita.dto';
import { Receita } from './receitas.model';
import { ReceitasService } from './receitas.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags()
@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova receita' })
  @ApiBody({ type: CriarReceitaDto, description: 'Dados da receita' })
  @ApiResponse({ status: 201, description: 'Receita criada com sucesso' })
  criarReceita(@Body() criarReceitaDto: CriarReceitaDto): Promise<Receita> {
    // const { titulo, ingredientes, modoDeFazer } = criarReceitaDto;
    return this.receitasService.criarReceita(criarReceitaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as receitas' })
  @ApiResponse({
    status: 200,
    description: 'Listagem de receitas',
    type: Receita,
  })
  listarReceitas(): Promise<Receita[]> {
    return this.receitasService.listarReceitas();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma receita por ID' })
  @ApiParam({ name: 'id', description: 'ID da receita' })
  @ApiResponse({
    status: 200,
    description: 'Receita encontrada',
    type: Receita,
  })
  @ApiResponse({ status: 404, description: 'Receita não encontrada' })
  buscarReceita(@Param('id') id: number): Promise<Receita> {
    return this.receitasService.buscarReceitaPorId(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma receita' })
  @ApiParam({ name: 'id', description: 'ID da receita' })
  @ApiBody({ description: 'Dados atualizados da receita' })
  @ApiResponse({
    status: 200,
    description: 'Receita atualizada com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Receita não encontrada' })
  atualizarReceita(
    @Param('id') id: number,
    @Body() dadosAtualizados: Partial<Receita>,
  ): Promise<Receita> {
    console.log({ id, dadosAtualizados });
    return this.receitasService.atualizar(id, dadosAtualizados);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma receita' })
  @ApiParam({ name: 'id', description: 'ID da receita' })
  @ApiResponse({
    status: 200,
    description: 'Receita deletada com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Receita não encontrada' })
  deleteReceita(@Param('id') id: string): void {
    this.receitasService.deletar(id);
  }
}
