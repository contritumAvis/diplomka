"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function WidgetSection() {
  const [hoverPrice, setHoverPrice] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  const slides = [
    {
      title: "Xbox Consoles",
      description: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
      image: "/xbox.png",
      price: "$299",
    },
    {
      title: "Xbox Consoles",
      description: "Exclusive offers and bundles available for a limited time.",
      image: "/xbox.png",
      price: "$399",
    },
    {
      title: "Xbox Consoles",
      description: "Enjoy portable gaming anywhere with special discounts.",
      image: "/xbox.png",
      price: "$249",
    },
  ];

  // Автоскролл каждые 10 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="px-4 md:px-24 lg:px-28 py-6">
      <div className="max-w-[1440px] mx-auto flex gap-6 h-[520px]">
        {/* Левый большой виджет как слайдер */}
        <div className="bg-[#F2F4F5] rounded-md flex-[2] overflow-hidden">
          <motion.div
            className="flex h-full"
            animate={{ x: `-${activeDot * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex items-center justify-between min-w-full px-14">
                {/* Левая часть с текстом */}
                <div className="flex flex-col justify-center" style={{ width: 356 }}>
                  <h2 className="font-[600] text-[48px] leading-[56px] font-[Public Sans]">
                    {slide.title}
                  </h2>
                  <p className="text-[18px] leading-[24px] font-[Public Sans] font-[400] mt-4">
                    {slide.description}
                  </p>
                  <motion.a
                    href="/404"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6 inline-flex items-center justify-center bg-[#FA8232] text-white uppercase font-[700] text-[16px] tracking-[0.012em] rounded-[3px] h-[56px]"
                    style={{
                      width: 191,
                      paddingLeft: 32,
                      paddingRight: 32,
                      lineHeight: "56px",
                    }}
                  >
                    Shop Now
                    <svg
                      className="ml-3"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 12H20.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.a>
                  {/* Точки */}
                  <div className="flex mt-[90px] gap-2">
                    {slides.map((_, i) => (
                      <motion.div
                        key={i}
                        onClick={() => setActiveDot(i)}
                        whileTap={{ scale: 0.8 }}
                        className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-colors ${
                          activeDot === i ? "bg-black" : "bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Правая часть с картинкой */}
                <div className="flex items-start relative">
                  <motion.div
                    animate={{ scale: hoverPrice ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={368}
                      height={408}
                      className="object-contain"
                    />
                    {/* Кружок с ценой */}
                    <motion.div
                      onMouseEnter={() => setHoverPrice(true)}
                      onMouseLeave={() => setHoverPrice(false)}
                      className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#FA8232] flex items-center justify-center text-white font-bold cursor-pointer"
                    >
                      {slide.price}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Правые два маленьких виджета */}
        <div className="flex flex-col gap-6 flex-[1] max-w-[424px]">
          <div className="bg-gray-50 h-[248px] rounded-md overflow-hidden">
            <img
              src="/summersales.svg"
              alt="Баннер со скидкой"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-50 h-[248px] rounded-md overflow-hidden">
            <img
              src="/buds.svg"
              alt="Баннер со скидкой"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
