import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Définir une interface pour "Base"
interface Base {
  id: number;
  HPs: number;
  Attack: number;
  Defense: number;
  Sp_Attack: number;
  Sp_Defense: number;
  Speed: number;
}

async function migrateData() {
  console.log('Démarrage de la migration des données de Base vers Stats...');

  try {
    // Caster les résultats de la requête dans le type "Base[]"
    const bases = await prisma.$queryRaw<Base[]>`SELECT * FROM "Base" LIMIT 1`;

    if (bases.length === 0) {
      console.log("Le modèle 'Base' n'existe pas ou est déjà vide. Migration inutile.");
      return;
    }

    for (const base of bases) {
      // Créer une nouvelle entrée dans Stats avec les mêmes données
      const stats = await prisma.stats.create({
        data: {
          HPs: base.HPs,
          Attack: base.Attack,
          Defense: base.Defense,
          Sp_Attack: base.Sp_Attack,
          Sp_Defense: base.Sp_Defense,
          Speed: base.Speed,
        },
      });

      // Mettre à jour le champ statsId dans Pokemon
      await prisma.pokemon.updateMany({
        where: { id: base.id }, // Remplacer `baseId` par `id`
        data: { statsId: stats.id },
      });

      console.log(`Pokémon ID ${base.id} migré avec succès vers Stats.`);
    }

    console.log('Migration des données terminée.');
  } catch (e) {
    console.log("Le modèle 'Base' n'existe plus ou la table a déjà été supprimée.");
  }
}

migrateData()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
