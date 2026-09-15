/*
  Warnings:

  - You are about to drop the column `createdAT` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAT",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "Crops_farmerId_idx" ON "Crops"("farmerId");

-- CreateIndex
CREATE INDEX "Crops_status_idx" ON "Crops"("status");

-- CreateIndex
CREATE INDEX "Offer_cropId_idx" ON "Offer"("cropId");

-- CreateIndex
CREATE INDEX "Offer_buyerId_idx" ON "Offer"("buyerId");

-- CreateIndex
CREATE INDEX "PriceRecord_commodity_market_idx" ON "PriceRecord"("commodity", "market");

-- CreateIndex
CREATE INDEX "StorageListing_ownerId_idx" ON "StorageListing"("ownerId");
