/*
  Warnings:

  - You are about to drop the `wifi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "wifi" DROP CONSTRAINT "wifi_userId_fkey";

-- DropTable
DROP TABLE "wifi";

-- CreateTable
CREATE TABLE "wifis" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "wifis_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wifis" ADD CONSTRAINT "wifis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
