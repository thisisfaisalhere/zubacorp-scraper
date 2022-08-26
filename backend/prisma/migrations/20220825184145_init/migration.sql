/*
  Warnings:

  - You are about to drop the column `company_name` on the `companies` table. All the data in the column will be lost.
  - Added the required column `companyName` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "company_name",
ADD COLUMN     "companyName" VARCHAR(255) NOT NULL;
