// "use client";
// import React from "react";
// import Link from "next/link";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
//   brand?: { name: string };
//   category?: { name: string };
// };

// type ProductCardProps = {
//   product: Product;
//   size?: "small" | "medium" | "large";
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, size = "medium" }) => {
//   const sizeClasses = {
//     small: "w-40 h-56 text-sm", // рекомендации
//     medium: "w-56 h-72 text-base", // главная
//     large: "w-72 h-96 text-lg", // категория
//   };

//   return (
//     <Link href={`/products/${product.id}`}>
//       <div
//         className={`bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${sizeClasses[size]}`}
//       >
//         <img
//           src={
//             product.thumbnail ||
//             product.images?.[0]?.url ||
//             "https://via.placeholder.com/300x200?text=Нет+фото"
//           }
//           alt={product.name}
//           className="w-full h-2/3 object-cover"
//         />
//         <div className="p-2">
//           <h2 className="font-semibold line-clamp-1">{product.name}</h2>
//           {product.brand?.name && (
//             <p className="text-xs text-gray-500">{product.brand.name}</p>
//           )}
//           <p className="font-bold mt-1">{product.basePrice} ₸</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

"use client";
import React from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  description?: string;
  basePrice: number;
  thumbnail?: string;
  images?: { url: string }[];
};

type ProductCardProps = {
  product: Product;
  variant?: "horizontal" | "vertical"; // 👈 тип карточки
};

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
  const imageSrc =
    product.thumbnail ||
    product.images?.[0]?.url ||
    "https://via.placeholder.com/300x200?text=Нет+фото";

  if (variant === "horizontal") {
    // ✅ Горизонтальная карточка (id page рекомендации)
    return (
      <Link href={`/products/${product.id}`}>
        <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
          {/* Картинка */}
          <img
            src={imageSrc}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-md"
          />
          {/* Текстовый блок */}
          <div className="flex flex-col justify-between w-[196px]">
            <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
              {product.name}
            </p>
            <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
          </div>
        </div>
      </Link>
    );
  }

  // ✅ Вертикальная карточка (каталог, главная)
  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition">
        {/* Картинка */}
        <img
          src={imageSrc}
          alt={product.name}
          className="w-[202px] h-[172px] object-cover rounded-md mx-auto"
        />
        {/* Текстовый блок */}
        <div className="mt-4 flex flex-col justify-between flex-1">
          <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
            {product.name}
          </p>
          <p className="text-sm font-semibold text-gray-900 mt-auto">{product.basePrice} ₸</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
