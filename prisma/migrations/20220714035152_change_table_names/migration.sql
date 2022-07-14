/*
  Warnings:

  - You are about to drop the `cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `credentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wifis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cards" DROP CONSTRAINT "cards_userId_fkey";

-- DropForeignKey
ALTER TABLE "credentials" DROP CONSTRAINT "credentials_userId_fkey";

-- DropForeignKey
ALTER TABLE "notes" DROP CONSTRAINT "notes_userId_fkey";

-- DropForeignKey
ALTER TABLE "wifis" DROP CONSTRAINT "wifis_userId_fkey";

-- DropTable
DROP TABLE "cards";

-- DropTable
DROP TABLE "credentials";

-- DropTable
DROP TABLE "notes";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "wifis";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credentials" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cardNumber" INTEGER NOT NULL,
    "cardName" TEXT NOT NULL,
    "securityCode" INTEGER NOT NULL,
    "expirationDate" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL DEFAULT false,
    "type" "cardTypes" NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wifi" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Wifi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wifi" ADD CONSTRAINT "Wifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
