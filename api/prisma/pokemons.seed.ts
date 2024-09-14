import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { Pokemon } from './pokemon.interface'; // Importation des types

const prisma = new PrismaClient();

async function main() {
  console.log("Début de l'importation des pokémons....");

  // Charger les données du fichier JSON avec le type défini
  const pokemonsFilePath = path.join(
    __dirname,
    '../../src/assets/data/pokemons-list.json',
  );
  const pokemonsData: Pokemon[] = JSON.parse(
    fs.readFileSync(pokemonsFilePath, 'utf-8'),
  );

  // Compteur d'importation
  let importedPokemons = 0;

  for (const pokemon of pokemonsData) {
    // Convertir `ability` en un tableau de chaînes de caractères
    const abilityStrings = pokemon.profile.ability.map(
      (abilityTuple) => `${abilityTuple[0]} (${abilityTuple[1]})`,
    );

    // Création de chaque Pokémon dans la base de données
    await prisma.pokemon.create({
      data: {
        // id: pokemon.id,
        name: {
          create: {
            english: pokemon.name.english,
            japanese: pokemon.name.japanese,
            chinese: pokemon.name.chinese,
            french: pokemon.name.french,
          },
        },
        types: pokemon.types,
        base: {
          create: {
            HPs: pokemon.base.HPs,
            Attack: pokemon.base.Attack,
            Defense: pokemon.base.Defense,
            Sp_Attack: pokemon.base['Sp. Attack'],
            Sp_Defense: pokemon.base['Sp. Defense'],
            Speed: pokemon.base.Speed,
          },
        },
        species: pokemon.species,
        description: pokemon.description,
        firstSeen: new Date(pokemon.firstSeen),
        evolution: pokemon.evolution
          ? {
              create: {
                next: pokemon.evolution.next
                  ? JSON.stringify(pokemon.evolution.next)
                  : null,
                prev: pokemon.evolution.prev
                  ? JSON.stringify(pokemon.evolution.prev)
                  : null,
              },
            }
          : undefined,
        profile: {
          create: {
            height: pokemon.profile.height,
            weight: pokemon.profile.weight,
            egg: pokemon.profile.egg,
            ability: abilityStrings, // Conversion des tuples ability en chaînes de caractères
            gender: pokemon.profile.gender,
          },
        },
        image: {
          create: {
            sprite: pokemon.image.sprite,
            thumbnail: pokemon.image.thumbnail,
            hires: pokemon.image.hires,
          },
        },
      },
    });

    importedPokemons++;
    console.log(`Pokémon importé : ${pokemon.name.french}`);
  }

  // Afficher le nombre total de Pokémons importés
  console.log(`Pokémons importés : ${importedPokemons}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
