/*
  Warnings:

  - Made the column `reponame` on table `Repos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Repos" ALTER COLUMN "reponame" SET NOT NULL,
ALTER COLUMN "reponame" SET DEFAULT 'main';
