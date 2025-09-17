// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   price: number;
//   imageUrl?: string;
//   brand?: { name: string };
//   category?: { name: string };
// };

// export default function ProductInfo({ product }: { product: Product }) {
//   return (
//     <motion.div
//       className="flex flex-col space-y-6"
//       initial={{ opacity: 0, x: 30 }}
//       animate={{ opacity: 1, x: 0 }}
//     >
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <p className="text-gray-500">{product.brand?.name}</p>
//       <p className="text-lg">{product.description || "Описание отсутствует"}</p>
//       <p className="text-2xl font-semibold text-blue-600">{product.price} ₸</p>

//       <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
//         Добавить в корзину
//       </button>
//     </motion.div>
//   );
// }


"use client";
import React from "react";
import { motion } from "framer-motion";

type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  brand?: { name: string };
  category?: { name: string };
};

export default function ProductInfo({ product }: { product: Product }) {
  return (
    <motion.div
      className="flex flex-col space-y-4 sm:space-y-6"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-500">{product.brand?.name}</p>
      <p className="text-base sm:text-lg">
        {product.description || "Описание отсутствует"}
      </p>
      <p className="text-xl sm:text-2xl font-semibold text-blue-600">
        {product.price} ₸
      </p>

      <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-blue-700 transition">
        Добавить в корзину
      </button>
    </motion.div>
  );
}
