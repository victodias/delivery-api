/*
  Warnings:

  - Made the column `created_at` on table `deliveries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_at` on table `deliveries` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "end_at" SET NOT NULL;
