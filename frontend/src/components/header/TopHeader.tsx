// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function TopHeader() {
//   const [lang, setLang] = useState('ENG');
//   const [currency, setCurrency] = useState('USD');

//   const toggleLang = () => setLang(prev => (prev === 'ENG' ? 'RUS' : 'ENG'));
//   const toggleCurrency = () => setCurrency(prev => (prev === 'USD' ? 'KZT' : 'USD'));

//   return (
//     <div className="bg-[#1B6392] w-full">
//       <section className="px-4 md:px-24 lg:px-28">
//         <div className="max-w-[1440px] mx-auto text-white">
//           <div
//             className="flex items-center justify-between"
//             style={{ height: '52px' }}
//           >
//             {/* Левый текст */}
//             <span className="text-[14px] font-[400] leading-[20px]">
//               Welcome to Clicon online eCommerce store.
//             </span>

//             {/* Правая часть */}
//             <div className="flex items-center space-x-4">
//               {/* Follow us */}
//               <span className="text-[14px] font-[400] leading-[20px]">
//                 Follow us:
//               </span>

//               {/* Иконки соцсетей */}
//               <div className="flex items-center space-x-3">
//                 <Link href="/404"><img src="/twitter.svg" alt="Twitter" className="w-4 h-4" /></Link>
//                 <Link href="/404"><img src="/facebook.svg" alt="Twitter" className="w-4 h-4" /></Link>
//                 <Link href="/404"><img src="/pinterest.svg" alt="Twitter" className="w-4 h-4" /></Link>
//                 <Link href="/404"><img src="/reddit.svg" alt="Twitter" className="w-4 h-4" /></Link>
//                 <Link href="/404"><img src="/youtube.svg" alt="Twitter" className="w-4 h-4" /></Link>
//                 <Link href="/404"><img src="/insta.svg" alt="Twitter" className="w-4 h-4" /></Link>
//               </div>

//               {/* Линия */}
//               <div className="opacity-20 h-[28px] w-px bg-white"></div>

//               {/* Переключение языка */}
//               <button
//                 onClick={toggleLang}
//                 className="w-[44px] text-[14px] font-[400]"
//               >
//                 {lang}
//               </button>

//               {/* Переключение валюты */}
//               <button
//                 onClick={toggleCurrency}
//                 className="w-[44px] text-[14px] font-[400]"
//               >
//                 {currency}
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function TopHeader() {
  const { lang, toggleLang, currency, toggleCurrency } = useLanguage();

  return (
    <div className="bg-[#1B6392] w-full">
      <section className="px-4 md:px-24 lg:px-28">
        <div className="max-w-[1440px] mx-auto text-white">
          <div className="flex items-center justify-between" style={{ height: "52px" }}>
            {/* Левый текст */}
            <span className="text-[14px] font-[400] leading-[20px]">
              {lang === "ENG"
                ? "Welcome to Clicon online eCommerce store."
                : "Добро пожаловать в онлайн-магазин Clicon."}
            </span>

            {/* Правая часть */}
            <div className="flex items-center space-x-4">
              <span className="text-[14px] font-[400] leading-[20px]">
                {lang === "ENG" ? "Follow us:" : "Мы в соцсетях:"}
              </span>

              {/* Соцсети */}
              <div className="flex items-center space-x-3">
                <Link href="/404"><img src="/twitter.svg" alt="Twitter" className="w-4 h-4" /></Link>
                <Link href="/404"><img src="/facebook.svg" alt="Facebook" className="w-4 h-4" /></Link>
                <Link href="/404"><img src="/pinterest.svg" alt="Pinterest" className="w-4 h-4" /></Link>
                <Link href="/404"><img src="/reddit.svg" alt="Reddit" className="w-4 h-4" /></Link>
                <Link href="/404"><img src="/youtube.svg" alt="YouTube" className="w-4 h-4" /></Link>
                <Link href="/404"><img src="/insta.svg" alt="Instagram" className="w-4 h-4" /></Link>
              </div>

              <div className="opacity-20 h-[28px] w-px bg-white"></div>

              {/* Язык */}
              <button onClick={toggleLang} className="w-[44px] text-[14px] font-[400]">
                {lang}
              </button>

              {/* Валюта */}
              <button onClick={toggleCurrency} className="w-[44px] text-[14px] font-[400]">
                {currency}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
