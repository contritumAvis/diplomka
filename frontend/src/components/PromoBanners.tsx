// // frontend/src/components/PromoBanners.tsx
// "use client";

// import React from "react";
// import Container from "@/components/ui/Container";
// import Image from "next/image";
// import Link from "next/link";

// export default function PromoBanners() {
//   return (
//     <Container className="py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Первый баннер */}
//         <div className="relative group rounded-md overflow-hidden">
//           <Image
//             src="/whitt.svg"
//             alt="White Promo"
//             width={648}
//             height={336}
//             className="w-full h-auto rounded-md transition-shadow duration-300 group-hover:shadow-lg"
//           />
//           <Link
//             href="/product/7"
//             className="absolute left-5 bottom-11 md:top-67 md:left-14"
//           >
//             <div className="transition-transform duration-300 group-hover:scale-105">
//               {/* Вставляем кнопку прямо сюда */}
//               <svg
//                 width="156"
//                 height="48"
//                 viewBox="0 0 156 48"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="cursor-pointer"
//               >
//                 <rect width="156" height="48" rx="2" fill="#FA8232" />
//                 <path
//                   d="M28.935 29.14C28.4357 29.14 27.9457 29.077 27.465 28.951C26.9843 28.825 26.5457 28.636 26.149 28.384C25.7523 28.132 25.4233 27.817 25.162 27.439C24.9053 27.061 24.7513 26.6177 24.7 26.109H26.793C26.863 26.417 26.996 26.676 27.192 26.886C27.388 27.096 27.6353 27.257 27.934 27.369C28.2327 27.481 28.564 27.537 28.928 27.537C29.3013 27.537 29.642 27.4903 29.95 27.397C30.258 27.3037 30.5053 27.1637 30.692 26.977C30.8787 26.7857 30.972 26.5477 30.972 26.263C30.972 26.0063 30.895 25.7963 30.741 25.633C30.5917 25.4697 30.3887 25.3367 30.132 25.234C29.8753 25.1313 29.5837 25.0473 29.257 24.982L27.507 24.625C26.7417 24.4803 26.135 24.177 25.687 23.715C25.239 23.2483 25.008 22.6277 24.994 21.853C24.9893 21.2183 25.1573 20.67 25.498 20.208C25.8433 19.7413 26.31 19.382 26.898 19.13C27.4907 18.878 28.1533 18.752 28.886 18.752C29.7587 18.752 30.4913 18.8897 31.084 19.165C31.6813 19.4357 32.134 19.8043 32.442 20.271C32.7547 20.733 32.9157 21.2487 32.925 21.818H30.874C30.8367 21.4633 30.7293 21.181 30.552 20.971C30.3747 20.761 30.146 20.6093 29.866 20.516C29.5907 20.4227 29.2757 20.376 28.921 20.376C28.6503 20.376 28.403 20.4063 28.179 20.467C27.9597 20.5277 27.773 20.614 27.619 20.726C27.465 20.8333 27.346 20.9617 27.262 21.111C27.178 21.2603 27.136 21.4283 27.136 21.615C27.136 21.909 27.234 22.147 27.43 22.329C27.626 22.511 27.9923 22.6603 28.529 22.777L30.265 23.134C30.8857 23.2553 31.378 23.435 31.742 23.673C32.1107 23.911 32.386 24.1793 32.568 24.478C32.7547 24.7767 32.876 25.0823 32.932 25.395C32.9927 25.703 33.023 25.9877 33.023 26.249C33.023 26.795 32.8503 27.2873 32.505 27.726C32.1643 28.16 31.6883 28.5053 31.077 28.762C30.4657 29.014 29.7517 29.14 28.935 29.14Z"
//                   fill="white"
//                 />
//                 <path
//                   d="M115.125 24H128.875"
//                   stroke="white"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M123.25 18.375L128.875 24L123.25 29.625"
//                   stroke="white"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </Link>
//         </div>

//         {/* Второй баннер */}
//         <div className="relative group rounded-md overflow-hidden">
//           <Image
//             src="/blacck.svg"
//             alt="Black Promo"
//             width={648}
//             height={336}
//             className="w-full h-auto rounded-md transition-shadow duration-300 group-hover:shadow-lg"
//           />
//           <Link
//             href="/product/8"
//             className="absolute left-11 bottom-11 md:top-67 md:left-11"
//           >
//             <div className="transition-transform duration-300 group-hover:scale-105">
//               {/* кнопка такая же */}
//               <svg
//                 width="156"
//                 height="48"
//                 viewBox="0 0 156 48"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="cursor-pointer"
//               >
//                 <rect width="156" height="48" rx="2" fill="#FA8232" />
//                 <path
//                   d="M115.125 24H128.875"
//                   stroke="white"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M123.25 18.375L128.875 24L123.25 29.625"
//                   stroke="white"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </Container>
//   );
// }

// frontend/src/components/PromoBanners.tsx
"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function PromoBanners() {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Первый баннер */}
        <div className="relative group rounded-md overflow-hidden">
          <Image
            src="/whitt.svg"
            alt="White Promo"
            width={648}
            height={336}
            className="w-full h-auto rounded-md transition-transform duration-500 group-hover:scale-105"
          />
          <Link
            href="/product/7"
            className="absolute left-5 bottom-8 md:bottom-12 md:left-14"
          >
            <Image
              src="/aa.svg"
              alt="Shop Now"
              width={156}
              height={48}
              className="cursor-pointer transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Второй баннер */}
        <div className="relative group rounded-md overflow-hidden">
          <Image
            src="/blacck.svg"
            alt="Black Promo"
            width={648}
            height={336}
            className="w-full h-auto rounded-md transition-transform duration-500 group-hover:scale-105"
          />
          <Link
            href="/product/8"
            className="absolute left-5 bottom-8 md:bottom-12 md:left-14"
          >
            <Image
              src="/aa.svg"
              alt="Shop Now"
              width={156}
              height={48}
              className="cursor-pointer transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}
