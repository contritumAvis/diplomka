// "use client";

// import React, { useState } from "react";
// import Container from "@/components/ui/Container";
// import Image from "next/image";
// import ProductCard from "@/components/ProductCard";
// import Link from "next/link";

// type Product = {
//   id: number;
//   name: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
// };

// const categories = [
//   { id: 0, name: "All Product" },
//   { id: 1, name: "Smart Phone" },
//   { id: 2, name: "Laptop" },
//   { id: 3, name: "Headphone" },
//   { id: 4, name: "TV" },
// ];

// // Пример продуктов — в реальном проекте подтягивай через API
// const featuredProducts: Record<number, Product[]> = {
//   0: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Product ${i + 1}`, basePrice: 100 + i, thumbnail: "/placeholder.png" })),
//   1: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Phone ${i + 1}`, basePrice: 200 + i, thumbnail: "/placeholder.png" })),
//   2: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Laptop ${i + 1}`, basePrice: 500 + i, thumbnail: "/placeholder.png" })),
//   3: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Headphone ${i + 1}`, basePrice: 50 + i, thumbnail: "/placeholder.png" })),
//   4: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `TV ${i + 1}`, basePrice: 300 + i, thumbnail: "/placeholder.png" })),
// };

// export default function FeaturedSection() {
//   const [activeCategory, setActiveCategory] = useState(0);

//   return (
//     <Container className="flex justify-between items-start pt-18 pb-18 gap-6">
//       {/* Левая часть с большим SVG */}
//       <div className="relative w-[312px] h-[716px] flex-shrink-0 rounded-[3px]">
//         <Image src="/disbanner.svg" alt="Banner" fill style={{ objectFit: "cover" }} />
//         <div className="absolute" style={{ top: "216px", left: "60px", right: "61px", bottom: "444px" }}>
//           <Image src="/dinamicpush.svg" alt="Push Button" fill style={{ objectFit: "contain" }} />
//         </div>
//       </div>

//       {/* Правая часть */}
//       <div className="flex-1">
//         {/* Heading */}
//         <div className="flex justify-between items-center w-full h-9 mb-6">
//   <h2 className="font-[Public Sans] font-semibold text-[24px] leading-[32px] text-gray-900">
//     Featured Products
//   </h2>

//   <div className="flex gap-4 items-center">
//     {categories.map((cat) => (
//       <button
//         key={cat.id}
//         onClick={() => setActiveCategory(cat.id)}
//         className={`
//           px-2 py-2 text-[14px] leading-[20px] 
//           ${activeCategory === cat.id ? "font-semibold text-gray-900 shadow-[inset_0_-2px_0_0_#FA8232]" : "font-normal text-gray-600"}
//         `}
//       >
//         {cat.name}
//       </button>
//     ))}

//     <Link
//       href="/products"
//       className="flex items-center px-3 py-1 font-semibold text-[14px] leading-[20px] text-white bg-[#FA8232] rounded"
//     >
//       Browse All Product
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-1">
//         <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     </Link>
//   </div>
// </div>

//         {/* Products */}
//         <div className="grid grid-cols-4 gap-4">
//           {featuredProducts[activeCategory].map((product) => (
//             <div key={product.id} className="transform transition-transform hover:scale-105">
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// }

"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  basePrice: number;
  thumbnail?: string;
  images?: { url: string }[];
};

const categories = [
  { id: 0, name: "All Product" },
  { id: 1, name: "Smart Phone" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Headphone" },
  { id: 4, name: "TV" },
];

const featuredProducts: Record<number, Product[]> = {
  0: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Product ${i + 1}`, basePrice: 100 + i, thumbnail: "/placeholder.png" })),
  1: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Phone ${i + 1}`, basePrice: 200 + i, thumbnail: "/placeholder.png" })),
  2: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Laptop ${i + 1}`, basePrice: 500 + i, thumbnail: "/placeholder.png" })),
  3: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Headphone ${i + 1}`, basePrice: 50 + i, thumbnail: "/placeholder.png" })),
  4: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `TV ${i + 1}`, basePrice: 300 + i, thumbnail: "/placeholder.png" })),
};

export default function FeaturedSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <Container className="flex flex-col lg:flex-row justify-between items-start pt-18 pb-18 gap-6">
      {/* Левая часть с большим SVG */}
      <div className="relative w-full sm:w-[240px] md:w-[280px] lg:w-[312px] h-[500px] sm:h-[600px] md:h-[716px] flex-shrink-0 rounded-[3px]">
        <Image src="/disbanner.svg" alt="Banner" fill style={{ objectFit: "cover" }} />
        <div className="absolute"
             style={{
               top: "216px",
               left: "60px",
               right: "61px",
               bottom: "444px",
             }}>
          <Image src="/dinamicpush.svg" alt="Push Button" fill style={{ objectFit: "contain" }} />
        </div>
      </div>

      {/* Правая часть */}
      <div className="flex-1 w-full mt-6 lg:mt-0">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-6 gap-4">
          <h2 className="font-[Public Sans] font-semibold text-[24px] leading-[32px] text-gray-900">
            Featured Products
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-2 py-2 text-[14px] leading-[20px] 
                  ${activeCategory === cat.id ? "font-semibold text-gray-900 shadow-[inset_0_-2px_0_0_#FA8232]" : "font-normal text-gray-600"}
                `}
              >
                {cat.name}
              </button>
            ))}

            <Link
              href="/products"
              className="flex items-center px-3 py-1 font-semibold text-[14px] leading-[20px] text-white bg-[#FA8232] rounded"
            >
              Browse All Product
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProducts[activeCategory].map((product) => (
            <div key={product.id} className="transform transition-transform hover:scale-105">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
