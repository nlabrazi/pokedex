import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  // Récupérer tous les Pokémons
  async findAll() {
    return this.prisma.pokemon.findMany({
      include: { name: true, stats: true, image: true },
    });
  }

  // Récupérer un Pokémon par son ID
  async findOne(id: number) {
    return this.prisma.pokemon.findUnique({
      where: { id },
      include: { name: true, stats: true, image: true },
    });
  }
}
