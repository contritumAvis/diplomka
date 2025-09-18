// "use client";
// import React from "react";
// import ProductCard from "@/components/ProductCard";

// type Product = {
//   id: number;
//   name: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
//   brand?: { name: string };
//   categoryId?: number;
// };

// type Props = {
//   currentProduct: Product;
//   products: Product[];
// };

// export default function ProductRecommendationSection({ currentProduct, products }: Props) {
//   // 🔹 Заглушка
//   const Placeholder = () => (
//     <div className="flex w-full h-[104px] border rounded-md items-center justify-center bg-gray-50">
//       <span className="text-gray-400 text-xs">Нет товара ✖</span>
//     </div>
//   );

//   // 🔹 1. RELATED PRODUCT → любые 3 случайных
//   const related = products.slice(0, 3);

//   // 🔹 2. PRODUCT ACCESSORIES (categoryId = 4)
//   const accessories = products.filter((p) => p.categoryId === 4).slice(0, 3);

//   // 🔹 3. BRAND PRODUCTS (по бренду текущего товара)
//   const brandName = currentProduct.brand?.name || "BRAND";
//   const sameBrand = products
//     .filter((p) => p.brand?.name === brandName && p.id !== currentProduct.id)
//     .slice(0, 3);

//   // 🔹 4. FEATURED PRODUCTS (categoryId = 10)
//   const featured = products.filter((p) => p.categoryId === 10).slice(0, 3);

//   const sections = [
//     { title: "RELATED PRODUCT", items: related },
//     { title: "PRODUCT ACCESSORIES", items: accessories },
//     { title: `${brandName.toUpperCase()} PRODUCT`, items: sameBrand },
//     { title: "FEATURED PRODUCTS", items: featured },
//   ];

//   return (
//     <section className="px-4 md:px-24 lg:px-28">
//       <div className="max-w-[1440px] mx-auto pt-[72px] pb-[72px]">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {sections.map((section, idx) => (
//             <div key={idx} className="flex flex-col gap-4 w-full">
//               {/* Заголовок */}
//               <h3 className="font-semibold text-[16px] leading-6 text-gray-900">
//                 {section.title}
//               </h3>

//               {/* Карточки */}
//               <div className="flex flex-col gap-4">
//                 {section.items.length > 0
//                   ? section.items.map((product) => (
//                       <ProductCard
//                         key={product.id}
//                         product={product}
//                         variant="horizontal"
//                       />
//                     ))
//                   : [1, 2, 3].map((i) => <Placeholder key={i} />)}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";



type Props = {
  currentProduct: Product;
};

export default function ProductRecommendationSection({ currentProduct }: Props) {
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

  if (loading) {
    return (
      <section className="px-4 md:px-24 lg:px-28">
        <div className="max-w-[1440px] mx-auto py-[72px] text-center text-gray-500">
          Загружаем товары...
        </div>
      </section>
    );
  }

  // 🔹 1. RELATED PRODUCT → любые 3 случайных
  const related = products.slice(0, 3);

  // 🔹 2. PRODUCT ACCESSORIES (categoryId = 4)
  const accessories = products.filter((p) => p.categoryId === 4).slice(0, 3);

  // 🔹 3. BRAND PRODUCTS (по бренду текущего товара)
  const brandName = currentProduct.brand?.name || "BRAND";
  const sameBrand = products
    .filter((p) => p.brand?.name === brandName && p.id !== currentProduct.id)
    .slice(0, 3);

  // 🔹 4. FEATURED PRODUCTS (categoryId = 10)
  const featured = products.filter((p) => p.categoryId === 10).slice(0, 3);

  const sections = [
    { title: "RELATED PRODUCT", items: related },
    { title: "PRODUCT ACCESSORIES", items: accessories },
    { title: `${brandName.toUpperCase()} PRODUCT`, items: sameBrand },
    { title: "FEATURED PRODUCTS", items: featured },
  ];

  return (
    <section className="px-4 md:px-24 lg:px-28">
      <div className="max-w-[1440px] mx-auto pt-[72px] pb-[72px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4 w-full">
              <h3 className="font-semibold text-[16px] leading-6 text-gray-900">
                {section.title}
              </h3>

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
