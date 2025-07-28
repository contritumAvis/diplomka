'use client';
import React, { useState } from "react";

const BlackFridayBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <section className="relative px-4 md:px-20 bg-Gray-900">
        <div className="text-white w-full">
            <div className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-y-4 md:gap-y-0">

              <div className="flex items-center gap-2">
                <img src="/BlackFridayFB.svg" alt="Черная Пятница, но желтая" className="w-auto h-8" />
                <p className="font-semibold text-[24px] leading-[32px] tracking-[0]">Friday</p>
              </div>
              <div>
                <img src="/discount.svg" alt="Баннер со скидкой" className="w-full max-w-[200px] mx-auto" />
              </div>
              <div>
                <img src="/shopNowBF.svg" alt="Кнопка «Купить сейчас»" className="w-auto max-w-[150px]" />
              </div>
            </div>
         </div>
         <button
        onClick={() => setIsVisible(false)}
        className="absolute mt-2 top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8"
        aria-label="Закрыть баннер"
      >
        <img src="/closeButton.svg" alt="Закрыть" className="w-full h-full" />
      </button>
    </section>
  );
};

export default BlackFridayBanner;

