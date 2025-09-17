import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

const prisma = new PrismaClient();

async function fixSlugs() {
  const categories = await prisma.category.findMany();

  for (const cat of categories) {
    const newSlug = slugify(cat.name, { lower: true, strict: true });
    await prisma.category.update({
      where: { id: cat.id },
      data: { slug: newSlug },
    });
    console.log(`✅ ${cat.name} → ${newSlug}`);
  }

  await prisma.$disconnect();
}

fixSlugs().catch((e) => {
  console.error(e);
  prisma.$disconnect();
});