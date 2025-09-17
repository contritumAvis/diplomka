-- CreateTable
CREATE TABLE "public"."_CategoryBrands" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CategoryBrands_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CategoryBrands_B_index" ON "public"."_CategoryBrands"("B");

-- AddForeignKey
ALTER TABLE "public"."_CategoryBrands" ADD CONSTRAINT "_CategoryBrands_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_CategoryBrands" ADD CONSTRAINT "_CategoryBrands_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
