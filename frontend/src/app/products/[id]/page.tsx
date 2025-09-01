// "use client";
// import Link from "next/link";

// async function getProduct(id: string) {
//   const res = await fetch(`http://localhost:5000/api/products/${id}`, { cache: "no-store" });
//   if (!res.ok) return null;
//   return res.json();
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await getProduct(params.id);
//   if (!product) {
//     return <div className="p-6">Товар не найден. <Link className="text-blue-600" href="/products">← Назад</Link></div>;
//   }

//   return (
//     <main className="max-w-3xl mx-auto p-6 grid md:grid-cols-2 gap-6">
//       <img src={product.imageUrl || "https://via.placeholder.com/600x400?text=Нет+фото"} alt={product.name} className="w-full h-auto rounded" />
//       <div>
//         <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//         {product.brand && <p className="text-sm text-gray-500 mb-1">Бренд: {product.brand.name}</p>}
//         {product.category && <p className="text-sm text-gray-500 mb-4">Категория: {product.category.name}</p>}
//         <p className="text-2xl font-bold mb-4">{product.price} ₸</p>
//         {product.description && <p className="text-gray-700 mb-6 whitespace-pre-line">{product.description}</p>}
//         <form action={() => { 
//           // примитивная корзина в localStorage
//           const key = "cart";
//           const current = JSON.parse(localStorage.getItem(key) || "[]");
//           const found = current.find((i: any) => i.id === product.id);
//           if (found) found.qty += 1; else current.push({ id: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl, qty: 1 });
//           localStorage.setItem(key, JSON.stringify(current));
//           alert("Добавлено в корзину");
//         }}>
//           <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">В корзину</button>
//         </form>
//       </div>
//     </main>
//   );
// }


// import React from "react";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   price: number;
//   imageUrl?: string;
// };

// async function getProduct(id: string): Promise<Product> {
//   const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//     cache: "no-store", // чтобы всегда свежие данные
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch product");
//   }

//   return res.json();
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await getProduct(params.id);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="grid grid-cols-2 gap-6">
//         {/* Картинка */}
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="w-full h-auto rounded-xl shadow-md"
//         />

//         {/* Инфо о товаре */}
//         <div>
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-600 mt-2">{product.description}</p>
//           <p className="text-xl font-semibold mt-4">${product.price}</p>
//           <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Добавить в корзину
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number; // 👈 правильно как в БД
//   thumbnail?: string; // 👈 вместо imageUrl
// };

// async function getProduct(id: string): Promise<Product> {
//   const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//     cache: "no-store", // чтобы всегда свежие данные
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch product");
//   }

//   return res.json();
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await getProduct(params.id);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="grid grid-cols-2 gap-6">
//         {/* Картинка */}
//         <img
//           src={product.thumbnail ?? "https://via.placeholder.com/400"} // 👈 fallback если нет картинки
//           alt={product.name}
//           className="w-full h-auto rounded-xl shadow-md"
//         />

//         {/* Инфо о товаре */}
//         <div>
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-600 mt-2">{product.description}</p>
//           <p className="text-xl font-semibold mt-4">${product.basePrice}</p>
//           <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Добавить в корзину
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import ProductCard from "@/components/ProductCard";

type Product = {
  id: number;
  name: string;
  description?: string;
  basePrice: number;
  thumbnail?: string;
  images?: { url: string }[];
  brand?: { name: string };
  category?: { name: string };
};

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

async function getRecommended(category?: string): Promise<Product[]> {
  if (!category) return [];
  const res = await fetch(`http://localhost:5000/api/products?category=${category}`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  const recommended = await getRecommended(product.category?.name);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Картинка */}
        <img
          src={product.thumbnail ?? "https://via.placeholder.com/400"}
          alt={product.name}
          className="w-full h-auto rounded-xl shadow-md"
        />

        {/* Инфо о товаре */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">{product.basePrice} ₸</p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Добавить в корзину
          </button>
        </div>
      </div>

      {/* Рекомендации */}
      {recommended.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Похожие товары</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommended.map((p) => (
              <ProductCard key={p.id} product={p} variant="horizontal" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import axios from "axios";

// type Variant = {
//   id: number;
//   color?: string;
//   storage?: string;
//   price?: number;
// };

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   brand?: { name: string };
//   category?: { name: string };
//   variants?: Variant[];
// };

// export default function ProductPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/products/${id}`)
//       .then(res => setProduct(res.data))
//       .catch(err => console.error(err));
//   }, [id]);

//   if (!product) return <p>Загрузка...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{product.name}</h1>
//       <p>{product.description}</p>
//       <p>Цена: {product.basePrice} ₸</p>

//       {product.variants && product.variants.length > 0 && (
//         <div className="mt-4">
//           <h3 className="font-semibold">Варианты:</h3>
//           <ul>
//             {product.variants.map(v => (
//               <li key={v.id}>
//                 {v.color} {v.storage && `- ${v.storage}`} — {v.price ?? product.basePrice} ₸
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
