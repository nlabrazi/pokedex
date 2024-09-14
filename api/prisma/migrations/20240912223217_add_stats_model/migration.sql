-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "statsId" INTEGER;

-- CreateTable
CREATE TABLE "Stats" (
    "id" SERIAL NOT NULL,
    "HPs" INTEGER NOT NULL,
    "Attack" INTEGER NOT NULL,
    "Defense" INTEGER NOT NULL,
    "Sp_Attack" INTEGER NOT NULL,
    "Sp_Defense" INTEGER NOT NULL,
    "Speed" INTEGER NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "Stats"("id") ON DELETE SET NULL ON UPDATE CASCADE;
