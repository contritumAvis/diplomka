// "use client";

// import React, { useRef, useState } from "react";
// import Container from "@/components/ui/Container";
// import Image from "next/image";

// const categories = [
//   { id: 3, name: "Computer & Laptop" },
//   { id: 4, name: "Computer Accessories" },
//   { id: 5, name: "SmartPhone" },
//   { id: 6, name: "Headphone" },
//   { id: 7, name: "Mobile Accessories" },
//   { id: 8, name: "Gaming Console" },
//   { id: 9, name: "Camera & Photo" },
//   { id: 10, name: "TV & Homes Appliances" },
//   { id: 11, name: "Watchs & Accessories" },
//   { id: 12, name: "GPS & Navigation" },
//   { id: 13, name: "Warable Technology" }
// ];

// export default function ShopCategories() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);
//   const [showRightArrow, setShowRightArrow] = useState(true);

//   const CARD_WIDTH = 205;
//   const GAP = 16;
//   const SCROLL_AMOUNT = CARD_WIDTH + GAP;

//   const checkScrollPosition = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setShowLeftArrow(scrollLeft > 0);
//       setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: -SCROLL_AMOUNT,
//         behavior: "smooth"
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: SCROLL_AMOUNT,
//         behavior: "smooth"
//       });
//     }
//   };

//   return (
//     <section className="w-full min-h-[316px] py-8 bg-white">
//       <Container className="flex flex-col items-center gap-10 relative">
//         {/* Заголовок */}
//         <h2 className="w-full text-center text-gray-900 font-semibold text-2xl md:text-[32px] leading-[40px]">
//           Shop with Categorys
//         </h2>

//         {/* Карусель категорий */}
//         <div className="w-full relative">
//           {/* Левая стрелка */}
//           {showLeftArrow && (
//             <button
//               onClick={scrollLeft}
//               onMouseDown={scrollLeft}
//               className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center p-3 hover:scale-110 transition-transform duration-200 z-10 shadow-lg"
//               aria-label="Previous categories"
//             >
//               <div className="relative w-4 h-4">
//                 <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-white transform -translate-y-1/2"></div>
//                 <div className="absolute top-1/2 left-0 w-2 h-2 border-l-2 border-t-2 border-white transform -translate-y-1/2 -rotate-45"></div>
//               </div>
//             </button>
//           )}

//           {/* Список категорий */}
//           <div
//             ref={scrollRef}
//             className="flex gap-4 md:gap-[16px] overflow-x-auto scrollbar-hide scroll-smooth px-2"
//             onScroll={checkScrollPosition}
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {categories.map((cat) => (
//               <div
//                 key={cat.id}
//                 className="flex-shrink-0 w-[180px] md:w-[205px] h-[236px] border border-gray-200 rounded-md flex flex-col items-center pt-6 px-3 pb-6 hover:shadow-md transition-shadow"
//               >
//                 <div className="w-[130px] md:w-[148px] h-[130px] md:h-[148px] relative mb-4">
//                   <Image
//                     src="/compp.svg"
//                     alt={cat.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <span className="text-center text-gray-900 font-medium text-sm md:text-[16px] leading-[24px]">
//                   {cat.name}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Правая стрелка */}
//           {showRightArrow && (
//             <button
//               onClick={scrollRight}
//               onMouseDown={scrollRight}
//               className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center p-3 hover:scale-110 transition-transform duration-200 z-10 shadow-lg"
//               aria-label="Next categories"
//             >
//               <div className="relative w-4 h-4">
//                 <div className="absolute top-1/2 right-0 w-4 h-0.5 bg-white transform -translate-y-1/2"></div>
//                 <div className="absolute top-1/2 right-0 w-2 h-2 border-r-2 border-t-2 border-white transform -translate-y-1/2 rotate-45"></div>
//               </div>
//             </button>
//           )}
//         </div>
//       </Container>
//     </section>
//   );
// }



"use client";

import React, { useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useRouter } from "next/navigation"; // <-- импортируем роутер

const categories = [
  { id: 3, name: "Computer & Laptop", slug: "computer-laptop" },
  { id: 4, name: "Computer Accessories", slug: "computer-accessories" },
  { id: 5, name: "SmartPhone", slug: "smartphone" },
  { id: 6, name: "Headphone", slug: "headphone" },
  { id: 7, name: "Mobile Accessories", slug: "mobile-accessories" },
  { id: 8, name: "Gaming Console", slug: "gaming-console" },
  { id: 9, name: "Camera & Photo", slug: "camera-photo" },
  { id: 10, name: "TV & Homes Appliances", slug: "tv-homes-appliances" },
  { id: 11, name: "Watchs & Accessories", slug: "watchs-accessories" },
  { id: 12, name: "GPS & Navigation", slug: "gps-navigation" },
  { id: 13, name: "Warable Technology", slug: "warable-technology" }
];

export default function ShopCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const router = useRouter(); // <-- создаём роутер

  const CARD_WIDTH = 205;
  const GAP = 16;
  const SCROLL_AMOUNT = CARD_WIDTH + GAP;

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  // Новая функция перехода
  const goToCategory = (slug: string) => {
    router.push(`/category/${slug}`);
  };

  return (
    <section className="w-full min-h-[316px] py-8 bg-white relative">
      <Container className="flex flex-col items-center gap-10 relative">
        {/* Заголовок */}
        <h2 className="w-full text-center text-gray-900 font-semibold text-2xl md:text-[32px] leading-[40px]">
          Shop with Categorys
        </h2>

        {/* Карусель категорий */}
        <div className="w-full relative flex items-center justify-center">
          {/* Левая стрелка */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 w-12 h-12 hover:scale-110 transition-transform duration-200 z-10"
            >
              <Image
                src="/strprv.svg"
                alt="Previous"
                width={48}
                height={48}
              />
            </button>
          )}

          {/* Список категорий */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-[16px] overflow-x-hidden w-full justify-center"
            onScroll={checkScrollPosition}
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => goToCategory(cat.slug)} // <-- переход при клике
                className="flex-shrink-0 w-[205px] h-[236px] border border-gray-200 rounded-md flex flex-col items-center pt-[24px] px-[12px] pb-[24px] hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="w-[148px] h-[148px] relative mb-[16px]">
                  <Image
                    src="/compp.svg"
                    alt={cat.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-center text-gray-900 font-medium text-[16px] leading-[24px]">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

          {/* Правая стрелка */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 w-12 h-12 hover:scale-110 transition-transform duration-200 z-10"
            >
              <Image
                src="/prvv.svg"
                alt="Next"
                width={48}
                height={48}
              />
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
