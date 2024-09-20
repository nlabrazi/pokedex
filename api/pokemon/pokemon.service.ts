import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pokemon, Prisma } from '@prisma/client';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  // Récupérer tous les Pokémons
  async getAllPokemons(): Promise<Pokemon[]> {
    return this.prisma.pokemon.findMany({
      include: {
        name: true, // Inclure les informations de Name
        stats: true, // Inclure les stats de base
        image: true, // Inclure les images
        profile: true,
        evolution: true,
      },
    });
  }

  // Récupérer un Pokémon par son ID
  async getPokemonById(id: number): Promise<Pokemon | null> {
    return this.prisma.pokemon.findUnique({
      where: { id: Number(id) },
      include: {
        name: true, // Inclure les informations de Name
        stats: true, // Inclure les stats de base
        image: true, // Inclure les images
        profile: true,
        evolution: true,
      },
    });
  }

  async updatePokemon(
    id: number,
    data: Partial<{
      name: { french: string };
      stats: { HPs: number; Attack: number; Defense: number };
    }>,
  ): Promise<Pokemon> {
    return this.prisma.pokemon.update({
      where: { id: Number(id) },
      data: {
        name: {
          update: {
            french: data.name?.french,
          },
        },
        stats: {
          update: {
            HPs: Number(data.stats?.HPs),
            Attack: Number(data.stats?.Attack),
            Defense: Number(data.stats?.Defense),
          },
        },
      },
    });
  }
}
