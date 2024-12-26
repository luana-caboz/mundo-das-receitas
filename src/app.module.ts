import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasModule } from './receitas/receitas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receita } from './receitas/receitas.model';

@Module({
  imports: [
    ReceitasModule,
    TypeOrmModule.forRoot({
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      type: 'postgres',
      database: 'receitas_db',
      entities: [Receita],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
