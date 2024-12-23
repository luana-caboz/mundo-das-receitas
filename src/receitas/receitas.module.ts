import { Module } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitasController } from './receitas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receita } from './receitas.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Receita]), 
  ],
  providers: [ReceitasService],
  controllers: [ReceitasController]
})
export class ReceitasModule {}
