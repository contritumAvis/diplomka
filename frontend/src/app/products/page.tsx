// 'use client';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;         // ✅ вместо price
//   thumbnail?: string;        // ✅ превьюшка
//   images: { url: string }[]; // ✅ массив картинок
//   brand?: { name: string };
//   category?: { name: string };
// };

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Ошибка при загрузке товаров");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div className="text-center text-lg mt-10">Загрузка...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500 mt-10">{error}</div>;
//   }

//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Наши товары</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
//           >
//             <img
//               src={
//                 product.thumbnail ||
//                 product.images[0]?.url || // если thumbnail нет, берём первую картинку
//                 "https://via.placeholder.com/300x200?text=Нет+фото"
//               }
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <Link href={`/products/${product.id}`}>
//                 <h2 className="text-lg font-semibold hover:underline">
//                   {product.name}
//                 </h2>
//               </Link>
//               {product.brand && (
//                 <p className="text-sm text-gray-500">
//                   Бренд: {product.brand.name}
//                 </p>
//               )}
//               {product.category && (
//                 <p className="text-sm text-gray-500">
//                   Категория: {product.category.name}
//                 </p>
//               )}
//               <p className="text-xl font-bold mt-2">{product.basePrice} ₸</p>
//               {product.description && (
//                 <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                   {product.description}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


// 'use client';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images: { url: string }[];
//   brand?: { name: string };
//   category?: { name: string };
// };

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products"); // ✅ правильно
//         setProducts(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Ошибка при загрузке товаров");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <div className="text-center text-lg mt-10">Загрузка...</div>;
//   if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Наши товары</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
//           >
//             <img
//               src={
//                 product.thumbnail ||
//                 product.images[0]?.url ||
//                 "https://via.placeholder.com/300x200?text=Нет+фото"
//               }
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <Link href={`/products/${product.id}`}>
//                 <h2 className="text-lg font-semibold hover:underline">
//                   {product.name}
//                 </h2>
//               </Link>
//               {product.brand && (
//                 <p className="text-sm text-gray-500">Бренд: {product.brand.name}</p>
//               )}
//               {product.category && (
//                 <p className="text-sm text-gray-500">Категория: {product.category.name}</p>
//               )}
//               <p className="text-xl font-bold mt-2">{product.basePrice} ₸</p>
//               {product.description && (
//                 <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import { Product as ProductType } from "@/types/product"; // ✅ используем твой тип

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        setError("Ошибка при загрузке товаров");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center text-lg mt-10">Загрузка...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Наши товары</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              basePrice: product.price ?? product.basePrice ?? 0, // price берём из price или basePrice
              thumbnail: product.thumbnail ?? product.imageUrl, // thumbnail берём из thumbnail или imageUrl
               // если нет данных о наличии
            }}
            variant="vertical"
          />
        ))}
      </div>
    </main>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "@/components/ProductCard";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images: { url: string }[];
//   brand?: { name: string };
//   category?: { name: string };
// };

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Ошибка при загрузке товаров");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (loading) return <div className="text-center text-lg mt-10">Загрузка...</div>;
//   if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Наши товары</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} variant="vertical" />
//         ))}
//       </div>
//     </main>
//   );
// }
