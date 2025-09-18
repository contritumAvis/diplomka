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
//       className="flex flex-col space-y-4 sm:space-y-6"
//       initial={{ opacity: 0, x: 30 }}
//       animate={{ opacity: 1, x: 0 }}
//     >
//       <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
//       <p className="text-gray-500">{product.brand?.name}</p>
//       <p className="text-base sm:text-lg">
//         {product.description || "Описание отсутствует"}
//       </p>
//       <p className="text-xl sm:text-2xl font-semibold text-blue-600">
//         {product.price} ₸
//       </p>

//       <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-blue-700 transition">
//         Добавить в корзину
//       </button>
//     </motion.div>
//   );
// }





"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import api from "@/api/axios";
import { useUser } from "@/context/UserContext";
import ProductInfoActions from "./ProductInfoActions";

type Product = {
  id: number;
  name?: string;
  description?: string;
  basePrice?: number; // используем basePrice
  imageUrl?: string;
  images?: { url: string }[];
  brand?: { name: string };
  category?: { name: string };
};

interface ProductInfoProps {
  product?: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { token } = useUser();

  if (!product) return <div>Товар не найден</div>;

  // Берём цену как в карточке
  const price = product.basePrice != null ? product.basePrice : 0;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = async () => {
    if (!token) return alert("Пожалуйста, войдите в аккаунт!");
    try {
      await api.post("/cart", { productId: product.id, quantity });
      alert("Товар добавлен в корзину!");
    } catch (err) {
      console.error(err);
      alert("Ошибка при добавлении в корзину.");
    }
  };

  const buyNow = async () => {
    if (!token) return alert("Пожалуйста, войдите в аккаунт!");
    try {
      await api.post("/cart", { productId: product.id, quantity });
      router.push("/payment");
    } catch (err) {
      console.error(err);
      alert("Ошибка при быстрой покупке.");
    }
  };

  return (
    <div className="w-full max-w-[648px] h-auto flex flex-col gap-6 md:gap-8">
      {/* Название продукта */}
      <div className="text-gray-900 font-normal text-[20px] leading-7 font-public-sans">
        {product.name || "Без названия"}
      </div>

      {/* Brand & Category */}
      <div className="flex justify-between text-[14px] leading-5">
        <div>
          <span className="font-normal text-gray-900">Brand: </span>
          <span className="font-semibold">{product.brand?.name || "N/A"}</span>
        </div>
        <div>
          <span className="font-normal text-gray-900">Category: </span>
          <span className="font-semibold">{product.category?.name || "N/A"}</span>
        </div>
      </div>

      {/* Цена */}
      <div className="text-secondary-500 font-semibold text-[24px] leading-8">
        {price} ₸
      </div>

      <div className="w-full border border-[#E4E7E9]" />

      {/* Количество + кнопки */}
      <div className="w-full h-[68px] flex items-center gap-4 pt-3">
        <div className="flex items-center justify-between w-[164px] h-[56px] px-5 py-4 border-2 border-gray-300 rounded-md">
          <button onClick={decreaseQty}>-</button>
          <span className="text-center text-gray-700 text-[16px] leading-6 font-normal font-public-sans">
            {quantity}
          </span>
          <button onClick={increaseQty}>+</button>
        </div>

        <button
          onClick={addToCart}
          className="flex items-center justify-center gap-3 w-[310px] h-[56px] bg-primary-500 rounded-md px-1 text-white font-bold text-[16px] leading-[56px] uppercase hover:scale-105 transition-transform"
        >
          <Image src="/opan.svg" alt="shopping" width={310} height={240} />
        </button>

        <button
          onClick={buyNow}
          className="w-[142px] h-[56px] flex items-center justify-center rounded-md hover:scale-105 transition-transform"
        >
          <Image src="/bb.svg" alt="buy now" width={240} height={240} />
        </button>
      </div>

      {/* ProductInfoActions */}
      <ProductInfoActions
        productId={product.id}
        showToast={(msg) => alert(msg)}
      />

      {/* Payment */}
      <div className="w-full h-[90px]">
        <Image src="/payment.svg" alt="payment" width={648} height={98} />
      </div>
    </div>
  );
};

export default ProductInfo;





// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import api from "@/api/axios";
// import { useUser } from "@/context/UserContext";
// import ProductInfoActions from "./ProductInfoActions"; // ✅ импортируем наш компонент

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   price: number;
//   imageUrl?: string;
//   images?: { url: string }[];
//   brand?: { name: string };
//   category?: { name: string };
// };

// interface ProductInfoProps {
//   product: Product;
// }

// const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();
//   const { token } = useUser();
  

//   const increaseQty = () => setQuantity((prev) => prev + 1);
//   const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const addToCart = async () => {
//     if (!token) {
//       alert("Пожалуйста, войдите в аккаунт!");
//       return;
//     }

//     try {
//       await api.post("/cart", { productId: product.id, quantity });
//       alert("Товар добавлен в корзину!");
//     } catch (err) {
//       console.error(err);
//       alert("Ошибка при добавлении в корзину.");
//     }
//   };

//   const buyNow = async () => {
//     if (!token) {
//       alert("Пожалуйста, войдите в аккаунт!");
//       return;
//     }

//     try {
//       await api.post("/cart", { productId: product.id, quantity });
//       router.push("/payment");
//     } catch (err) {
//       console.error(err);
//       alert("Ошибка при быстрой покупке.");
//     }
//   };

//   return (
//     <div className="w-full max-w-[648px] h-auto flex flex-col gap-6 md:gap-8">
//       {/* Название продукта */}
//       <div className="text-gray-900 font-normal text-[20px] leading-7 font-public-sans">
//         {product.name}
//       </div>

//       {/* Brand & Category */}
//       <div className="flex justify-between text-[14px] leading-5">
//         <div>
//           <span className="font-normal text-gray-900">Brand: </span>
//           <span className="font-semibold">{product.brand?.name || "N/A"}</span>
//         </div>
//         <div>
//           <span className="font-normal text-gray-900">Category: </span>
//           <span className="font-semibold">{product.category?.name || "N/A"}</span>
//         </div>
//       </div>

//       {/* Цена */}
//       <div className="text-secondary-500 font-semibold text-[24px] leading-8">
//         ${product.price != null ? product.price.toFixed(2) : "0.00"}
//       </div>

//       <div className="w-full border border-[#E4E7E9]" />

//       {/* Количество + кнопки */}
//       <div className="w-full h-[68px] flex items-center gap-4 pt-3">
//         <div className="flex items-center justify-between w-[164px] h-[56px] px-5 py-4 border-2 border-gray-300 rounded-md">
//           <button onClick={decreaseQty}>-</button>
//           <span className="text-center text-gray-700 text-[16px] leading-6 font-normal font-public-sans">
//             {quantity}
//           </span>
//           <button onClick={increaseQty}>+</button>
//         </div>

//         <button
//           onClick={addToCart}
//           className="flex items-center justify-center gap-3 w-[310px] h-[56px] bg-primary-500 rounded-md px-1 text-white font-bold text-[16px] leading-[56px] uppercase hover:scale-105 transition-transform"
//         >
//           <Image src="/opan.svg" alt="shopping" width={310} height={240} />
//         </button>

//         <button
//           onClick={buyNow}
//           className="w-[142px] h-[56px] flex items-center justify-center rounded-md hover:scale-105 transition-transform"
//         >
//           <Image src="/bb.svg" alt="buy now" width={240} height={240} />
//         </button>
//       </div>

//       {/* === Вставка ProductInfoActions === */}
//       <ProductInfoActions 
//   productId={product.id} 
//   showToast={(msg) => alert(msg)} 
// />
//       {/* Payment */}
//       <div className="w-full h-[90px]">
//         <Image src="/payment.svg" alt="payment" width={648} height={98} />
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;




































// // frontend/src/components/product/ProductInfo.tsx
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   price: number;
//   imageUrl?: string;
//   images?: { url: string }[];
//   brand?: { name: string };
//   category?: { name: string };
// };

// interface ProductInfoProps {
//   product: Product;
// }

// const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
//   const [quantity, setQuantity] = useState(1);

//   const increaseQty = () => setQuantity((prev) => prev + 1);
//   const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  

//   return (
//     <div className="w-full max-w-[648px] h-auto flex flex-col gap-6 md:gap-8">
//       {/* Название продукта */}
//       <div className="text-gray-900 font-normal text-[20px] leading-7 font-public-sans">
//         {product.name}
//       </div>

//       {/* Див с двумя текстовыми блоками */}
//       <div className="flex flex-col gap-2">
//         {/* SVG блок */}
//         <div className="flex items-center gap-6">
//           <Image src="/ramazan.svg" alt="icon" width={24} height={24} />
//         </div>

//         {/* Brand & Category */}
//         <div className="flex justify-between text-[14px] leading-5">
//           <div>
//             <span className="font-normal text-gray-900">Brand: </span>
//             <span className="font-semibold">{product.brand?.name || "N/A"}</span>
//           </div>
//           <div>
//             <span className="font-normal text-gray-900">Category: </span>
//             <span className="font-semibold">
//               {product.category?.name || "N/A"}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Цена */}
//       <div className="text-secondary-500 font-semibold text-[24px] leading-8">
//   ${product.price != null ? product.price.toFixed(2) : "0.00"}
// </div>

//       {/* Линия */}
//       <div className="w-full border border-[#E4E7E9]" />

//       {/* Выбор варианта товара */}
//       {/* <div className="w-full h-[72px] flex items-center bg-gray-50 rounded-md p-4"> */}
//         {/* Тут можно потом вставить варианты */}
//         {/* <span>Выберите вариант</span> */}
//       {/* </div> */}

//       {/* Блок с 3 элементами */}
//       <div className="w-full h-[68px] flex items-center gap-4 pt-3">
//         {/* Кол-во */}
//         <div className="flex items-center justify-between w-[164px] h-[56px] px-5 py-4 border-2 border-gray-300 rounded-md">
//           <button onClick={decreaseQty}>-</button>
//           <span className="text-center text-gray-700 text-[16px] leading-6 font-normal font-public-sans">
//             {quantity}
//           </span>
//           <button onClick={increaseQty}>+</button>
//         </div>

//         {/* Add to Cart */}
//         <button className="flex items-center justify-start gap-3 w-[310px] h-[56px] bg-primary-500 rounded-md px-1 text-white font-bold text-[16px] leading-[56px] uppercase hover:scale-105 transition-transform">
//           <Image src="/opan.svg" alt="shopping" width={310} height={240} />
//         </button>

//         {/* Быстрая покупка */}
//         <button  className="w-[142px] h-[56px] flex items-center justify-start rounded-md hover:scale-105 transition-transform">
//           <Image src="/bb.svg" alt="buy now" width={240} height={240} />
//         </button>
//       </div>

//       {/* Payment блок */}
//       <div className="w-full h-[90px] ">
//         <Image src="/payment.svg" alt="payment" width={648} height={98} />
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;
