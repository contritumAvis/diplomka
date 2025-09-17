import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

const prisma = new PrismaClient(); // ✅ создаём экземпляр

async function checkSlugs() {
  const categories = await prisma.category.findMany();

  let hasIssues = false;

  for (const cat of categories) {
    const expectedSlug = slugify(cat.name, { lower: true, strict: true });

    if (!cat.slug) {
      console.log(`❌ Категория "${cat.name}" не имеет slug`);
      hasIssues = true;
    } else if (cat.slug !== expectedSlug) {
      console.log(
        `⚠️ Категория "${cat.name}" имеет slug "${cat.slug}", ожидалось "${expectedSlug}"`
      );
      hasIssues = true;
    } else {
      console.log(`✅ ${cat.name} → ${cat.slug} (всё ок)`);
    }
  }

  if (!hasIssues) {
    console.log("\n🎉 Все slug корректные!");
  }

  await prisma.$disconnect();
}

checkSlugs().catch((e) => {
  console.error(e);
  prisma.$disconnect();
});
