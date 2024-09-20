import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '@prisma/client';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  // Récupérer tous les Pokémons
  @Get()
  async getAllPokemons(): Promise<Pokemon[]> {
    return this.pokemonService.getAllPokemons();
  }

  // Récupérer un Pokémon par son ID
  @Get(':id')
  async getPokemonById(@Param('id') id: number): Promise<Pokemon> {
    return this.pokemonService.getPokemonById(id);
  }

  // Route pour éditer un Pokémon
  @Put(':id/edit')
  async updatePokemon(
    @Param('id') id: number,
    @Body()
    pokemon: Partial<{
      name: { french: string };
      stats: { HPs: number; Attack: number; Defense: number };
    }>,
  ): Promise<Pokemon> {
    const updatedData = {
      name: {
        french: pokemon.name?.french,
      },
      stats: {
        HPs: pokemon.stats?.HPs,
        Attack: pokemon.stats?.Attack,
        Defense: pokemon.stats?.Defense,
      },
    };
    return this.pokemonService.updatePokemon(id, updatedData);
  }
}
