// "use client";
// import React, { useEffect, useState } from "react";
// import Container from "@/components/ui/Container";
// import Link from "next/link";
// import Image from "next/image";
// import ProductCard from "@/components/ProductCard";
// import axios from "@/api/axios";

// type Product = {
//   id: number;
//   name: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
// };

// export default function BestDealsSection() {
//   const [products, setProducts] = useState<Product[]>([]);

//   // Загружаем товары с id от 10 до 20
//   useEffect(() => {
//     axios
//       .get<Product[]>("/products")
//       .then((res) => {
//         const filtered = res.data.filter((p) => p.id >= 10 && p.id <= 20);
//         setProducts(filtered);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <section className="w-full py-[72px]">
//       <Container>
//         {/* === Хедер блока === */}
//         <div className="flex justify-between items-center mb-6">
//           {/* Заголовок */}
//           <h2 className="text-gray-900 font-semibold text-2xl leading-8">
//             Best Deals
//           </h2>

//           {/* Таймер + ссылка */}
//           <div className="flex items-center gap-6">
//             {/* Текст + таймер */}
//             <div className="flex items-center gap-3">
//               <span className="text-sm text-gray-700">Deals ends in</span>
//               <div className="bg-yellow-300 text-gray-900 text-base px-3 py-1.5 rounded-sm">
//                 24h : 05m : 60s
//               </div>
//             </div>

//             {/* Кнопка-ссылка (svg nikita.svg) */}
//             <Link
//               href="/category/electronics-devices"
//               className="flex items-center gap-2 py-1.5"
//             >
//               <Image
//                 src="/nikita.svg"
//                 alt="More Deals"
//                 width={154}
//                 height={32}
//               />
//             </Link>
//           </div>
//         </div>

//         {/* === Контент блока === */}
//         <div className="flex gap-6">
//           {/* Большая карточка слева */}
//           <div className="w-[328px] h-[592px] border border-gray-200 bg-white p-6 flex flex-col items-center justify-between">
//             {/* Верхняя картинка */}
//             <Link href="/products/5" className="hover:scale-105 transition">
//               <Image src="/timoha.svg" alt="Big Deal" width={280} height={268} />
//             </Link>

//             {/* Средняя картинка */}
//             <Image src="/cheknitt.svg" alt="Second Img" width={280} height={182} />

//             {/* Кнопки снизу */}
//             <div className="flex items-center gap-2 mt-6">
//               <button>
//                 <Image src="/serdd.svg" alt="Fav" width={48} height={48} />
//               </button>
//               <button>
//                 <Image src="/adv.svg" alt="Add to Cart" width={173} height={48} />
//               </button>
//               <Link href="/products/5">
//                 <Image src="/glazik.svg" alt="View" width={48} height={48} />
//               </Link>
//             </div>
//           </div>

//           {/* Сетка карточек справа */}
//           <div className="grid grid-cols-4 grid-rows-2 gap-4">
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }




"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import axios from "@/api/axios";

type Product = {
  id: number;
  name: string;
  basePrice: number;
  thumbnail?: string;
  images?: { url: string }[];
};

// Заглушки, если БД пустая
const mockProducts: Product[] = [
  { id: 101, name: "Mock Product 1", basePrice: 9999 },
  { id: 102, name: "Mock Product 2", basePrice: 15999 },
  { id: 103, name: "Mock Product 3", basePrice: 7999 },
  { id: 104, name: "Mock Product 4", basePrice: 11999 },
  { id: 105, name: "Mock Product 5", basePrice: 4599 },
  { id: 106, name: "Mock Product 6", basePrice: 20999 },
  { id: 107, name: "Mock Product 7", basePrice: 5499 },
  { id: 108, name: "Mock Product 8", basePrice: 8900 },
];

export default function BestDealsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);

  // Загружаем товары
  useEffect(() => {
    axios
      .get<Product[]>("/products")
      .then((res) => {
        const filtered = res.data.filter((p) => p.id >= 10 && p.id <= 20);
        setProducts(filtered.length ? filtered : mockProducts);
      })
      .catch(() => setProducts(mockProducts));
  }, []);

  // Таймер обратного отсчета: 24 часа
  useEffect(() => {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}h : ${String(minutes).padStart(
      2,
      "0"
    )}m : ${String(seconds).padStart(2, "0")}s`;
  };

  return (
    <section className="w-full py-[72px]">
      <Container>
        {/* Хедер блока */}
        <div className="flex justify-between items-center mb-6 flex-wrap">
          <div className="flex items-center flex-wrap">
            <h2 className="text-gray-900 font-semibold text-2xl leading-8">
              Best Deals
            </h2>
            <div className="flex items-center gap-3 ml-[24px] mt-2 sm:mt-0">
              <span className="text-sm text-gray-700">Deals ends in</span>
              <div className="bg-yellow-300 text-gray-900 text-base px-3 py-1.5 rounded-sm">
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <Link
            href="/category/electronics-devices"
            className="flex items-center gap-2 py-1.5 mt-2 sm:mt-0"
          >
            <Image src="/nikita.svg" alt="More Deals" width={154} height={32} />
          </Link>
        </div>

        {/* Контент блока */}
        <div className="flex flex-wrap gap-4">
          {/* Большая карточка слева */}
          <div className="flex-shrink-0 w-[328px] border border-gray-200 bg-white p-6 flex flex-col items-center justify-between">
            <Link href="/products/5" className="hover:scale-105 transition">
              <Image src="/timoha.svg" alt="Big Deal" width={280} height={268} />
            </Link>
            <Image src="/cheknitt.svg" alt="Second Img" width={280} height={182} />
            <div className="flex items-center gap-2 mt-6">
              <button>
                <Image src="/serdd.svg" alt="Fav" width={48} height={48} />
              </button>
              <button>
                <Image src="/adv.svg" alt="Add to Cart" width={173} height={48} />
              </button>
              <Link href="/products/5">
                <Image src="/glazik.svg" alt="View" width={48} height={48} />
              </Link>
            </div>
          </div>

          {/* Сетка карточек справа */}
          <div className="flex-1 grid grid-cols-4 auto-rows-fr gap-0">
           {products.map((product) => (
  <ProductCard key={product.id} product={product as any} variant="vertical" />
))}

          </div>
        </div>
      </Container>
    </section>
  );
}
