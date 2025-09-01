
"use client";
import Image from "next/image";

export default function FeaturesBar() {
  const items = [
    {
      icon: "/baga.svg",
      title: "FASTED DELIVERY",
      subtitle: "Delivery in 24/H",
    },
    {
      icon: "/kubok.svg",
      title: "SECURE PAYMENT",
      subtitle: "100% secure transactions",
    },
    {
      icon: "/cardbar.svg",
      title: "24/7 SUPPORT",
      subtitle: "We are here to help",
    },
    {
      icon: "/headphonesbar.svg",
      title: "EASY RETURN",
      subtitle: "30-day money back",
    },
  ];

  return (
    <section className="px-4 md:px-24 lg:px-28 py-6">
      <div className="max-w-[1440px] mx-auto border border-gray-100 rounded-[6px] h-[108px] flex items-center justify-between">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-[280px] h-[76px] relative"
          >
            {/* SVG иконка */}
            <div className="ml-4 mr-4 text-gray-700 flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px]"
              />
            </div>

            {/* Текст */}
            <div className="flex flex-col justify-center">
              <span className="font-[500] text-[14px] leading-[20px] uppercase font-[Public Sans]">
                {item.title}
              </span>
              <span className="font-[400] text-[14px] leading-[20px] font-[Public Sans]">
                {item.subtitle}
              </span>
            </div>

            {/* Вертикальная линия кроме последнего */}
            {index < items.length - 1 && (
              <div className="h-[56px] w-[1px] bg-gray-300 absolute right-0 top-1/2 -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
