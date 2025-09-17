// "use client";
// import { useState } from "react";
// import Image from "next/image";

// const tabs = [
//   { id: 1, label: "Description", value: "Описание товара №1" },
//   { id: 2, label: "Additional information", value: "Описание товара №2" },
//   { id: 3, label: "Specification", value: "Описание товара №3" },
//   { id: 4, label: "Review", value: "Описание товара №4" },
// ];

// export default function ProductInfoBlock() {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <div className="w-full max-w-[1320px] mx-auto border rounded-md pb-10">
//       {/* 🔹 Верхний блок с табами */}
//       <div className="flex border-b border-gray-200">
//         <div className="ml-[341px] flex gap-2">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`
//                 uppercase text-sm font-medium px-5 py-2.5 rounded
//                 transition-colors duration-200
//                 ${
//                   activeTab === tab.id
//                     ? "text-gray-900"
//                     : "text-gray-600 hover:text-orange-500"
//                 }
//               `}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 🔹 Нижний блок с информацией */}
//       <div className="flex flex-wrap gap-6 p-10">
//         {/* Левая часть (текст) */}
//         <div className="flex-1 min-w-[300px] max-w-[616px] flex flex-col gap-3">
//           <h3 className="font-semibold text-base leading-6">Description</h3>
//           <p className="text-sm leading-5 text-gray-700">
//             {tabs.find((t) => t.id === activeTab)?.value}
//           </p>
//         </div>

//         {/* SVG Feature */}
//         <div className="flex-shrink-0">
//           <Image src="/Feature.svg" alt="Feature" width={280} height={208} className="w-full h-auto max-w-[280px]" />
//         </div>

//         {/* Вертикальная палочка */}
//         <div className="w-px bg-gray-200 self-stretch" />

//         {/* SVG Shopping */}
//         <div className="flex-shrink-0">
//           <Image src="/shoppingfull.svg" alt="Shopping" width={272} height={160} className="w-full h-auto max-w-[272px]" />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";

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

type Props = {
  product: Product;
};

export default function ProductInfoBlock({ product }: Props) {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Description", value: product.description || "Описание отсутствует" },
    { id: 2, label: "Additional information", value: "я не знаю что тут надо было" },
    { id: 3, label: "Specification", value: "и тут не знаю" },
    { id: 4, label: "Review", value: "тут тоже хз" },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto border rounded-md pb-10">
      {/* 🔹 Верхний блок с табами */}
      <div className="flex border-b border-gray-200">
        <div className="mx-auto flex gap-2 sm:ml-[341px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                uppercase text-sm font-medium px-5 py-2.5 rounded
                transition-colors duration-200
                ${activeTab === tab.id ? "text-gray-900" : "text-gray-600 hover:text-orange-500"}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Нижний блок с информацией */}
      <div className="flex flex-col lg:flex-row gap-6 p-6 sm:p-10 items-center lg:items-start">
        {/* Левая часть (текст) */}
        <div className="flex-1 min-w-[280px] max-w-[616px] flex flex-col gap-3">
          <h3 className="font-semibold text-base leading-6 text-center lg:text-left">
            {tabs.find((t) => t.id === activeTab)?.label}
          </h3>
          <p className="text-sm leading-5 text-gray-700 whitespace-pre-line text-center lg:text-left">
            {tabs.find((t) => t.id === activeTab)?.value}
          </p>
        </div>

        {/* SVG Feature */}
        <div className="flex-shrink-0">
          <Image
            src="/Feature.svg"
            alt="Feature"
            width={280}
            height={208}
            className="w-full h-auto max-w-[280px] mx-auto"
          />
        </div>

        {/* Разделитель */}
        <div className="hidden lg:block w-px bg-gray-200 self-stretch" />
        <div className="block lg:hidden h-px bg-gray-200 w-full my-4" />

        {/* SVG Shopping */}
        <div className="flex-shrink-0">
          <Image
            src="/shoppingfull.svg"
            alt="Shopping"
            width={272}
            height={160}
            className="w-full h-auto max-w-[272px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
