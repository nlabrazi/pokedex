import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';
import { PokemonModule } from 'pokemon/pokemon.module';
import { PokemonController } from 'pokemon/pokemon.controller';

@Module({
  imports: [PrismaModule, PokemonModule],
  controllers: [AppController, PokemonController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
