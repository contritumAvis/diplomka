// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   console.log('🌱 Сидинг данных...');
//   await prisma.productVariant.deleteMany();
//   await prisma.product.deleteMany();
//   await prisma.category.deleteMany();
//   await prisma.brand.deleteMany();

//   // 1. Создаём бренд
//   const brand = await prisma.brand.upsert({
//     where: { name: 'Apple' },
//     update: {},
//     create: { name: 'Apple' }
//   });

//   // 2. Создаём категорию
//   const category = await prisma.category.upsert({
//     where: { name: 'Ноутбуки' },
//     update: {},
//     create: { name: 'Ноутбуки' }
//   });

//   // 3. Создаём продукт с вариантами
//   const product = await prisma.product.upsert({
//   where: { name: 'MacBook Pro 14' }, 
//   update: {},
//   create: {
//     name: 'MacBook Pro 14',
//     description: 'Apple MacBook Pro с M-серией процессора, Retina дисплеем.',
//     basePrice: 1999.99,
//     thumbnail: 'https://res.cloudinary.com/dno4nbmas/image/upload/v1756046491/изображение_2025-08-24_194127189_bujdhu.png', // 👈 вот так
//     brandId: brand.id,
//     categoryId: category.id,
//     variants: {
//       create: [
//         {
//           sku: 'MBP14-16-512-SG',
//           color: 'Space Gray',
//           memory: '16GB',
//           storage: '512GB',
//           size: '14"',
//           price: 2099.99,
//           stock: 5,
//           imageUrl: 'https://res.cloudinary.com/dno4nbmas/image/upload/v1756046491/изображение_2025-08-24_194127189_bujdhu.png'
//         },
//         {
//           sku: 'MBP14-32-1T-SV',
//           color: 'Silver',
//           memory: '32GB',
//           storage: '1TB',
//           size: '14"',
//           price: 2499.99,
//           stock: 3,
//           imageUrl: 'https://res.cloudinary.com/dno4nbmas/image/upload/v1756046491/изображение_2025-08-24_194127189_bujdhu.png'
//         }
//       ]
//     }
//   }
// });

//   console.log(`✅ Seed завершён, product id: ${product.id}`);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // --- Категории с брендами ---
  const categories = [
    {
      name: "Computer & Laptop",
      brands: ["Asus", "Acer", "Dell", "HP", "Lenovo", "Apple", "MSI"],
    },
    {
      name: "Computer Accessories",
      brands: ["Logitech", "Razer", "Corsair", "SteelSeries", "HyperX", "Microsoft", "Redragon"],
    },
    {
      name: "SmartPhone",
      brands: ["Apple", "Samsung", "Xiaomi", "Oppo", "Vivo", "Huawei", "Realme"],
    },
    {
      name: "Headphone",
      brands: ["Sony", "Bose", "Sennheiser", "Beats", "JBL", "Bang & Olufsen", "HyperX"],
    },
    {
      name: "Mobile Accessories",
      brands: ["Anker", "Baseus", "Spigen", "Ugreen", "Rock", "Remax", "Nillkin"],
    },
    {
      name: "Gaming Console",
      brands: ["Sony PlayStation", "Microsoft Xbox", "Nintendo"],
    },
    {
      name: "Camera & Photo",
      brands: ["Canon", "Nikon", "Sony", "Fujifilm", "Panasonic", "Olympus", "Leica"],
    },
    {
      name: "TV & Homes Appliances",
      brands: ["LG", "Samsung", "Sony", "Panasonic", "Philips", "TCL", "Hisense"],
    },
    {
      name: "Watchs & Accessories",
      brands: ["Apple", "Samsung", "Garmin", "Fitbit", "Casio", "Seiko", "Fossil"],
    },
    {
      name: "GPS & Navigation",
      brands: ["Garmin", "TomTom", "Magellan", "Navitel", "Pioneer", "Xiaomi", "Mio"],
    },
    {
      name: "Warable Technology",
      brands: ["Apple", "Samsung", "Fitbit", "Garmin", "Huawei", "Amazfit", "Xiaomi"],
    },
  ];

  for (const category of categories) {
    // Создаём категорию (если её нет)
    const createdCategory = await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: { name: category.name },
    });

    // Создаём бренды (если их ещё нет)
    for (const brandName of category.brands) {
      await prisma.brand.upsert({
        where: { name: brandName },
        update: {},
        create: { name: brandName },
      });
    }
  }
}

main()
  .then(async () => {
    console.log("✅ Seed успешно выполнен");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Ошибка в seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
