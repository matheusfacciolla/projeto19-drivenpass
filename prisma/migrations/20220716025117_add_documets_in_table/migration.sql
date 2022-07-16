-- CreateEnum
CREATE TYPE "docTypes" AS ENUM ('rg', 'cnh');

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "docType" "docTypes" NOT NULL,
    "completeName" TEXT NOT NULL,
    "emissionDate" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "registerDate" TEXT NOT NULL,
    "agency" TEXT NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
