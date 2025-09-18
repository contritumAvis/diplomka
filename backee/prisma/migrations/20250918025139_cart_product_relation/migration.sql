/*
  Warnings:

  - You are about to drop the column `variantId` on the `CartItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,productId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_variantId_fkey";

-- AlterTable
ALTER TABLE "public"."CartItem" DROP COLUMN "variantId",
ADD COLUMN     "productId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_userId_productId_key" ON "public"."CartItem"("userId", "productId");

-- AddForeignKey
ALTER TABLE "public"."CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
