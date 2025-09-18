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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import ProductCard from "@/components/ProductCard";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
//   brand?: { name: string };
//   category?: { name: string };
// };

// async function getProduct(id: string): Promise<Product> {
//   const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error("Failed to fetch product");
//   return res.json();
// }

// async function getRecommended(category?: string): Promise<Product[]> {
//   if (!category) return [];
//   const res = await fetch(`http://localhost:5000/api/products?category=${category}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) return [];
//   return res.json();
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await getProduct(params.id);
//   const recommended = await getRecommended(product.category?.name);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="grid grid-cols-2 gap-6">
//         {/* Картинка */}
//         <img
//           src={product.thumbnail ?? "https://via.placeholder.com/400"}
//           alt={product.name}
//           className="w-full h-auto rounded-xl shadow-md"
//         />

//         {/* Инфо о товаре */}
//         <div>
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-600 mt-2">{product.description}</p>
//           <p className="text-xl font-semibold mt-4">{product.basePrice} ₸</p>
//           <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Добавить в корзину
//           </button>
//         </div>
//       </div>

//       {/* Рекомендации */}
//       {recommended.length > 0 && (
//         <div className="mt-12">
//           <h2 className="text-xl font-bold mb-4">Похожие товары</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {recommended.map((p) => (
//               <ProductCard key={p.id} product={p} variant="horizontal" />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React from "react";
// import { notFound } from "next/navigation";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import ProductGallery from "@/components/product/ProductGallery";
// import ProductInfo from "@/components/product/ProductInfo";
// import TopHeader from "@/components/header/Header";
// import BottomHeader from "@/components/header/BottomHeader";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   price: number;
//   imageUrl?: string;
//   images?: string[]; // добавим массив
//   brand?: { name: string };
//   category?: { name: string };
// };

// async function getProduct(id: string): Promise<Product | null> {
//   try {
//     const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) return null;
//     return res.json();
//   } catch (err) {
//     console.error("Ошибка загрузки продукта:", err);
//     return null;
//   }
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await getProduct(params.id);

//   if (!product) return notFound();

//   return (
//     <>
//       {/* Хэдер теперь сверху */}
//       <TopHeader />
//       <BottomHeader />

//       <section className="max-w-[1440px] mx-auto px-4 md:px-24 lg:px-28 py-10">
//         <Breadcrumbs
//           items={[
//             { label: "Главная", href: "/" },
//             { label: product.category?.name || "Категория", href: "/products" },
//             { label: product.name, href: `/products/${product.id}` },
//           ]}
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
//           <ProductGallery
//             images={
//               product.images && product.images.length > 0
//                 ? product.images
//                 : [product.imageUrl || "/placeholder.png"]
//             }
//           />
//           <ProductInfo product={product} />
//         </div>
//       </section>
//     </>
//   );
// }





// import React from "react";
// import { notFound } from "next/navigation";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import ProductGallery from "@/components/product/ProductGallery";
// import ProductInfo from "@/components/product/ProductInfo";
// import TopHeader from "@/components/header/Header";
// import BottomHeader from "@/components/header/BottomHeader";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   price: number;
//   imageUrl?: string;
//   images?: { url: string }[];
//   brand?: { name: string };
//   category?: { name: string };
// };

// async function getProduct(id: string): Promise<Product | null> {
//   try {
//     const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) return null;
//     return res.json();
//   } catch (err) {
//     console.error("Ошибка загрузки продукта:", err);
//     return null;
//   }
// }

// export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
//   const { id } = await props.params;
//   const product = await getProduct(id);

//   if (!product) return notFound();

//   return (
//     <>
//       <TopHeader />
//       <BottomHeader />

//       {/* ✅ структура контейнера совпадает с хэдером */}
//      <section className="w-full bg-gray-50">
//   <div className="max-w-[1440px] mx-auto px-4 md:px-24 lg:px-28 py-3">
//     <Breadcrumbs
//       items={[
//         { label: "Главная", href: "/" },
//         { label: product.category?.name || "Категория", href: "/products" },
//         { label: product.name, href: `/products/${product.id}` },
//       ]}
//     />
//   </div>
// </section>

// {/* Контент продукта */}
// <section className="max-w-[1440px] mx-auto px-4 md:px-24 lg:px-28 py-10">
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
//     <ProductGallery
//       images={
//         product.images && product.images.length > 0
//           ? product.images.map((img) => img.url)
//           : [product.imageUrl || "/placeholder.png"]
//       }
//     />
//     <ProductInfo product={product} />
//   </div>
// </section>
//     </>
//   );
// }
















// frontend/src/app/products/[id]/page.tsx
// import React from "react";
// import { notFound } from "next/navigation";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import ProductGallery from "@/components/product/ProductGallery";
// import ProductInfo from "@/components/product/ProductInfo";
// import TopHeader from "@/components/header/Header";
// import BottomHeader from "@/components/header/BottomHeader";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   price: number;
//   imageUrl?: string;
//   images?: { url: string }[]; // from backend
//   brand?: { name: string };
//   category?: { name: string };
// };

// async function getProduct(id: string): Promise<Product | null> {
//   try {
//     const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) return null;
//     return res.json();
//   } catch (err) {
//     console.error("Ошибка загрузки продукта:", err);
//     return null;
//   }
// }

// // Server component (uses client headers/components inside)
// export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
//   const { id } = await props.params;
//   const product = await getProduct(id);

//   if (!product) return notFound();

//   // нормализуем картинки в массив строк (вдруг backend возвращает [{url:..}])
//   const imageUrls: string[] =
//     product.images && product.images.length > 0
//       ? product.images.map((i) => (typeof i === "string" ? i : (i as any).url).toString())
//       : product.imageUrl
//       ? [product.imageUrl]
//       : [];

//   return (
//     <>
//       <TopHeader />
//       <BottomHeader />

//       {/* Breadcrumbs as full-width light bar (like header) */}
//       <section className="w-full bg-gray-50">
//         <div className="max-w-[1440px] mx-auto px-4 md:px-24 lg:px-28 py-3">
//           <Breadcrumbs
//             items={[
//               { label: "Главная", href: "/" },
//               { label: product.category?.name || "Категория", href: "/products" },
//               { label: product.name, href: `/products/${product.id}` },
//             ]}
//           />
//         </div>
//       </section>

//       {/* Product content — SAME gutters as header, responsive */}
//       <section className="w-full">
//         <div className="max-w-[1440px] mx-auto px-4 md:px-24 lg:px-28 py-10">
//           {/* Use flex so left panel (gallery) can be fixed width on lg but fluid on small screens */}
//           <div className="flex flex-col lg:flex-row gap-8 lg:gap-[56px]">
//             {/* LEFT: gallery — on lg fixed-ish, on small full width */}
//             <div className="w-full lg:w-[616px] flex-shrink-0">
//               <ProductGallery
//                 images={
//                   imageUrls.length > 0 ? imageUrls : [product.imageUrl || "/placeholder.png"]
//                 }
//               />
//             </div>

//             {/* RIGHT: info — takes remaining space */}
//             <div className="w-full flex-1">
//               <ProductInfo product={product} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


// frontend/src/app/products/[id]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import TopHeader from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import ProductInfoBlock from "@/components/ProductInfoBlock"
import ProductRecommendationSection from "@/components/ProductRecommendationSection";
import Footer from "@/components/Footer";


type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  images?: { url: string }[];
  brand?: { name: string };
  category?: { name: string };
};

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("Ошибка загрузки продукта:", err);
    return null;
  }
}

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const product = await getProduct(id);

  if (!product) return notFound();

  // нормализуем массив картинок
  const imageUrls: string[] =
    product.images && product.images.length > 0
      ? product.images.map((i) => (typeof i === "string" ? i : (i as any).url).toString())
      : product.imageUrl
      ? [product.imageUrl]
      : [];

  return (
    <>
      <TopHeader />
            <BottomHeader />

      {/* Breadcrumbs как у хедера */}
     <section className="px-4 md:px-24 lg:px-28">
  <div className="max-w-[1440px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: product.category?.name || "Категория", href: "/products" },
              { label: product.name, href: `/products/${product.id}` },
            ]}
          />
        </div>
      
            
      {/* Контент продукта */}
      <section className="max-w-[1440px] mx-auto">
        <div className="container-gutter py-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[56px]">
            {/* Левая часть: галерея */}
            <div className="max-w-[1440px] mx-auto lg:w-[616px] flex-shrink-0">
              <ProductGallery
                images={
                  imageUrls.length > 0 ? imageUrls : [product.imageUrl || "/placeholder.png"]
                }
              />
            </div>

            {/* Правая часть: инфо */}
            <div className="w-full flex-1">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>
      <ProductInfoBlock product={product} />
      
      </section>
      
      <ProductRecommendationSection currentProduct={product as any} />
      < Footer />

      
    </>
  );
}

