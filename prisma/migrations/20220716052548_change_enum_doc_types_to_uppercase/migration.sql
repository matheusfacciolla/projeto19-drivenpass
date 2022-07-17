/*
  Warnings:

  - The values [rg,cnh] on the enum `docTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "docTypes_new" AS ENUM ('RG', 'CNH');
ALTER TABLE "documents" ALTER COLUMN "docType" TYPE "docTypes_new" USING ("docType"::text::"docTypes_new");
ALTER TYPE "docTypes" RENAME TO "docTypes_old";
ALTER TYPE "docTypes_new" RENAME TO "docTypes";
DROP TYPE "docTypes_old";
COMMIT;
