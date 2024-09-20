import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [PokemonService, PrismaService],
  exports: [PokemonService],
})
export class PokemonModule {}
