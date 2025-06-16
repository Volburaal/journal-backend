/*
  Warnings:

  - Added the required column `categoryId` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Title" AS ENUM ('AUTO_NUMBER', 'CUSTOM_TITLE', 'CUSTOM_AND_AUTO');

-- AlterTable
ALTER TABLE "Entry" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "titleStyle" "Title" NOT NULL,
    "recordDateTime" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
