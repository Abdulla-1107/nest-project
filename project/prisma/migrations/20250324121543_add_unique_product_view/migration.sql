/*
  Warnings:

  - A unique constraint covering the columns `[userId,productId]` on the table `ProductView` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductView_userId_productId_key" ON "ProductView"("userId", "productId");
