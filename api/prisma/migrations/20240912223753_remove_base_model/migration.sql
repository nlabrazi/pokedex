/*
  Warnings:

  - You are about to drop the column `baseId` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the `Base` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_baseId_fkey";

-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "baseId";

-- DropTable
DROP TABLE "Base";
