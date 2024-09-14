import { Module } from '@nestjs/common';
import { CommonModule } from '@angular/common';
import { PokemonController } from './pokemon.controller';

@Module({
  imports: [CommonModule],
  controllers: [PokemonController],
})
export class PokemonModule {}
