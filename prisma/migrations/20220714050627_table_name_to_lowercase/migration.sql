/*
  Warnings:

  - You are about to drop the `Cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Credentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wifi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cards" DROP CONSTRAINT "Cards_userId_fkey";

-- DropForeignKey
ALTER TABLE "Credentials" DROP CONSTRAINT "Credentials_userId_fkey";

-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_userId_fkey";

-- DropForeignKey
ALTER TABLE "Wifi" DROP CONSTRAINT "Wifi_userId_fkey";

-- DropTable
DROP TABLE "Cards";

-- DropTable
DROP TABLE "Credentials";

-- DropTable
DROP TABLE "Notes";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "Wifi";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credentials" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cardNumber" INTEGER NOT NULL,
    "cardName" TEXT NOT NULL,
    "securityCode" INTEGER NOT NULL,
    "expirationDate" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL DEFAULT false,
    "type" "cardTypes" NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wifi" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "wifi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wifi" ADD CONSTRAINT "wifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
