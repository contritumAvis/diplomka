"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

const mapProductForCard = (p: Product) => ({
  id: p.id,
  name: p.name,
  price: p.price ?? 0,
  basePrice: p.basePrice ?? p.price ?? 0,
  thumbnail: p.thumbnail ?? p.imageUrl ?? "/no-image.png",
});



export default function ProductRecommendationSectionSec() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Заглушка
  const Placeholder = () => (
    <div className="flex w-full h-[104px] border rounded-md items-center justify-center bg-gray-50">
      <span className="text-gray-400 text-xs">Нет товара ✖</span>
    </div>
  );

  // 🔹 Загружаем продукты с API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        if (!res.ok) throw new Error("Ошибка загрузки продуктов");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 🔹 Лоадер
  if (loading) {
    return (
      <section className="px-4 md:px-24 lg:px-28">
        <div className="max-w-[1440px] mx-auto py-[72px] text-center text-gray-500">
          Загружаем товары...
        </div>
      </section>
    );
  }

  // 🔹 1. FLASH SALE TODAY → первые 3
  const flashSale = products.slice(0, 3);

  // 🔹 2. BEST SELLERS (categoryId = 4)
  const bestSellers = products.filter((p) => p.categoryId === 4).slice(0, 3);

  // 🔹 3. TOP RATED (жёстко товары id 11, 14, 17)
  const topRated = products.filter((p) => [11, 14, 17].includes(p.id));

  // 🔹 4. NEW ARRIVAL (categoryId = 10)
  const newArrival = products.filter((p) => p.categoryId === 10).slice(0, 3);

  const sections = [
    { title: "FLASH SALE TODAY", items: flashSale },
    { title: "BEST SELLERS", items: bestSellers },
    { title: "TOP RATED", items: topRated },
    { title: "NEW ARRIVAL", items: newArrival },
  ];

  return (
    <section className="px-4 md:px-24 lg:px-28">
      <div className="max-w-[1440px] mx-auto pt-[72px] pb-[72px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4 w-full">
              {/* Заголовок */}
              <h3 className="font-semibold text-[16px] leading-6 text-gray-900">
                {section.title}
              </h3>

              {/* Карточки */}
              <div className="flex flex-col gap-4">
                {section.items.length > 0
                  ? section.items.map((product) => (
                      <ProductCard
  key={product.id}
  product={{
    ...product,
    basePrice: product.basePrice ?? product.price, 
    thumbnail: product.thumbnail ?? product.imageUrl,
  }}
  variant="horizontal"
/>

                    ))
                  : [1, 2, 3].map((i) => <Placeholder key={i} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
