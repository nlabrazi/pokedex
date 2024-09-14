import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  // Route pour récupérer tous les Pokémons
  @Get()
  async findAll() {
    return this.pokemonService.findAll();
  }

  // Route pour récupérer un Pokémon par son ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(Number(id));
  }
}
