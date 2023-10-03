/*
  Warnings:

  - Made the column `price` on table `Featured` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Featured" ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "price" SET DATA TYPE TEXT;
