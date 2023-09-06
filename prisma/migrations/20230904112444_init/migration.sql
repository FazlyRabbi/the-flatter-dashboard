/*
  Warnings:

  - Added the required column `price` to the `Repos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Repos" ADD COLUMN     "price" TEXT NOT NULL;
