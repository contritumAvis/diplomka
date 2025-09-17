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
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical"; // 👈 тип карточки
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   if (variant === "horizontal") {
//     // ✅ Горизонтальная карточка (id page рекомендации)
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           {/* Картинка */}
//           <img
//             src={imageSrc}
//             alt={product.name}
//             className="w-20 h-20 object-cover rounded-md"
//           />
//           {/* Текстовый блок */}
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
//               {product.name}
//             </p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // ✅ Вертикальная карточка (каталог, главная)
//   return (
//     <Link href={`/products/${product.id}`}>
//       <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition">
//         {/* Картинка */}
//         <img
//           src={imageSrc}
//           alt={product.name}
//           className="w-[202px] h-[172px] object-cover rounded-md mx-auto"
//         />
//         {/* Текстовый блок */}
//         <div className="mt-4 flex flex-col justify-between flex-1">
//           <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
//             {product.name}
//           </p>
//           <p className="text-sm font-semibold text-gray-900 mt-auto">{product.basePrice} ₸</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;















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
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical"; // 👈 тип карточки
// };

// const ProductCard: React.FC<ProductCardProps> = ({
//   product,
//   variant = "vertical",
// }) => {
//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   if (variant === "horizontal") {
//     // ✅ Горизонтальная карточка (id page рекомендации)
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           {/* Картинка */}
//           <img
//             src={imageSrc}
//             alt={product.name}
//             className="w-20 h-20 object-cover rounded-md"
//           />
//           {/* Текстовый блок */}
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
//               {product.name}
//             </p>
//             <p className="text-sm font-semibold text-gray-900">
//               {product.basePrice} ₸
//             </p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // ✅ Вертикальная карточка (каталог, главная) + hover-иконки
//   return (
//     <Link href={`/products/${product.id}`} className="relative group">
//       <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition">
//         {/* Картинка */}
//         <div className="relative">
//           <img
//             src={imageSrc}
//             alt={product.name}
//             className="w-[202px] h-[172px] object-cover rounded-md mx-auto"
//           />

//           {/* Ховер-иконки */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//             <div className="flex gap-4">
//               {/* Сердце */}
//               <button className="w-12 h-12">
//                 <svg
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect width="48" height="48" rx="24" fill="#FA8232" />
//                   <path
//                     d="M24 32.25C24 32.25 14.625 27 14.625 20.625C14.625 19.498 15.0155 18.4059 15.73 17.5343C16.4445 16.6628 17.4388 16.0657 18.5439 15.8447C19.649 15.6237 20.7966 15.7923 21.7913 16.322C22.7861 16.8517 23.5665 17.7097 24 18.75C24.4335 17.7097 25.2139 16.8517 26.2087 16.322C27.2034 15.7923 28.351 15.6237 29.4561 15.8447C30.5612 16.0657 31.5555 16.6628 32.27 17.5343C32.9845 18.4059 33.375 19.498 33.375 20.625C33.375 27 24 32.25 24 32.25Z"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>

//               {/* Корзина */}
//               <button className="w-12 h-12">
//                 <svg
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect width="48" height="48" rx="24" fill="white" />
//                   <path
//                     d="M19.5 31.5C19.9142 31.5 20.25 31.8358 20.25 32.25C20.25 32.6642 19.9142 33 19.5 33C19.0858 33 18.75 32.6642 18.75 32.25C18.75 31.8358 19.0858 31.5 19.5 31.5Z"
//                     fill="#191C1F"
//                     stroke="#191C1F"
//                     strokeWidth="1.5"
//                   />
//                   <path
//                     d="M29.25 33.75C30.0784 33.75 30.75 33.0784 30.75 32.25C30.75 31.4216 30.0784 30.75 29.25 30.75C28.4216 30.75 27.75 31.4216 27.75 32.25C27.75 33.0784 28.4216 33.75 29.25 33.75Z"
//                     fill="#191C1F"
//                   />
//                   <path
//                     d="M15.9656 18.75H32.7844L30.3094 27.4125C30.2211 27.7269 30.032 28.0036 29.7711 28.2C29.5103 28.3965 29.1922 28.5019 28.8656 28.5H19.8844C19.5578 28.5019 19.2397 28.3965 18.9789 28.2C18.718 28.0036 18.5289 27.7269 18.4406 27.4125L15.0469 15.5438C15.002 15.387 14.9073 15.2491 14.777 15.1509C14.6468 15.0528 14.4881 14.9998 14.325 15H12.75"
//                     stroke="#191C1F"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>

//               {/* Глаз */}
//               <Link href={`/products/${product.id}`} className="w-12 h-12">
//                 <svg
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect width="48" height="48" rx="24" fill="white" />
//                   <path
//                     d="M24 16.25C16.5 16.25 13.5 24 13.5 24C13.5 24 16.5 31.75 24 31.75C31.5 31.75 34.5 24 34.5 24C34.5 24 31.5 16.25 24 16.25Z"
//                     stroke="#191C1F"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M24 27C25.6569 27 27 25.6569 27 24C27 22.3431 25.6569 21 24 21C22.3431 21 21 22.3431 21 24C21 25.6569 22.3431 27 24 27Z"
//                     stroke="#191C1F"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Текст */}
//         <div className="mt-4 flex flex-col justify-between flex-1">
//           <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
//             {product.name}
//           </p>
//           <p className="text-sm font-semibold text-gray-900 mt-auto">
//             {product.basePrice} ₸
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;














// "use client";
// import React from "react";
// import Link from "next/link";
// import axios from "@/api/axios"; // твой инстанс
// import { useSession } from "next-auth/react"; // чтобы брать юзера

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical";
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
//   const { data: session } = useSession();
//   const userId = session?.user?.id; // ⚡ id юзера из NextAuth

//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   // 👉 Добавление в избранное
//   const handleAddToFavorites = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!userId) return alert("Сначала авторизуйся!");

//     try {
//       await axios.post("/api/favorites", {
//         productId: product.id,
//         userId,
//       });
//       alert("Добавлено в избранное ❤️");
//     } catch (err) {
//       console.error(err);
//       alert("Ошибка при добавлении в избранное");
//     }
//   };

//   // 👉 Добавление в корзину
//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!userId) return alert("Сначала авторизуйся!");

//     try {
//       await axios.post("/api/cart", {
//         productId: product.id,
//         userId,
//         quantity: 1,
//       });
//       alert("Товар добавлен в корзину 🛒");
//     } catch (err) {
//       console.error(err);
//       alert("Ошибка при добавлении в корзину");
//     }
//   };

//   if (variant === "horizontal") {
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           <img
//             src={imageSrc}
//             alt={product.name}
//             className="w-20 h-20 object-cover rounded-md"
//           />
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
//               {product.name}
//             </p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // ✅ Вертикальная карточка (каталог, главная)
//   return (
//     <Link href={`/products/${product.id}`} className="relative group">
//       <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition">
//         {/* Картинка */}
//         <div className="relative">
//           <img
//             src={imageSrc}
//             alt={product.name}
//             className="w-[202px] h-[172px] object-cover rounded-md mx-auto"
//           />

//           {/* Ховер-иконки */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//             <div className="flex gap-4">
//               {/* ❤️ Избранное */}
//               <button onClick={handleAddToFavorites} className="w-12 h-12">
//                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                   <rect width="48" height="48" rx="24" fill="#FA8232" />
//                   <path
//                     d="M24 32.25C24 32.25 14.625 27 14.625 20.625C14.625 19.498 15.0155 18.4059 15.73 17.5343C16.4445 16.6628 17.4388 16.0657 18.5439 15.8447C19.649 15.6237 20.7966 15.7923 21.7913 16.322C22.7861 16.8517 23.5665 17.7097 24 18.75C24.4335 17.7097 25.2139 16.8517 26.2087 16.322C27.2034 15.7923 28.351 15.6237 29.4561 15.8447C30.5612 16.0657 31.5555 16.6628 32.27 17.5343C32.9845 18.4059 33.375 19.498 33.375 20.625C33.375 27 24 32.25 24 32.25Z"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>

//               {/* 🛒 Корзина */}
//               <button onClick={handleAddToCart} className="w-12 h-12">
//                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                   <rect width="48" height="48" rx="24" fill="white" />
//                   <path
//                     d="M19.5 31.5C19.9142 31.5 20.25 31.8358 20.25 32.25C20.25 32.6642 19.9142 33 19.5 33C19.0858 33 18.75 32.6642 18.75 32.25C18.75 31.8358 19.0858 31.5 19.5 31.5Z"
//                     fill="#191C1F"
//                     stroke="#191C1F"
//                     strokeWidth="1.5"
//                   />
//                   <path
//                     d="M29.25 33.75C30.0784 33.75 30.75 33.0784 30.75 32.25C30.75 31.4216 30.0784 30.75 29.25 30.75C28.4216 30.75 27.75 31.4216 27.75 32.25C27.75 33.0784 28.4216 33.75 29.25 33.75Z"
//                     fill="#191C1F"
//                   />
//                   <path
//                     d="M15.9656 18.75H32.7844L30.3094 27.4125C30.2211 27.7269 30.032 28.0036 29.7711 28.2C29.5103 28.3965 29.1922 28.5019 28.8656 28.5H19.8844C19.5578 28.5019 19.2397 28.3965 18.9789 28.2C18.718 28.0036 18.5289 27.7269 18.4406 27.4125L15.0469 15.5438C15.002 15.387 14.9073 15.2491 14.777 15.1509C14.6468 15.0528 14.4881 14.9998 14.325 15H12.75"
//                     stroke="#191C1F"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>

//               {/* 👁 Глазик */}
//               <Link href={`/products/${product.id}`} className="w-12 h-12">
//                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                   <rect width="48" height="48" rx="24" fill="white" />
//                   <path
//                     d="M24 16.25C16.5 16.25 13.5 24 13.5 24C13.5 24 16.5 31.75 24 31.75C31.5 31.75 34.5 24 34.5 24C34.5 24 31.5 16.25 24 16.25Z"
//                     stroke="#191C1F"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M24 27C25.6569 27 27 25.6569 27 24C27 22.3431 25.6569 21 24 21C22.3431 21 21 22.3431 21 24C21 25.6569 22.3431 27 24 27Z"
//                     stroke="#191C1F"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Текст */}
//         <div className="mt-4 flex flex-col justify-between flex-1">
//           <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
//             {product.name}
//           </p>
//           <p className="text-sm font-semibold text-gray-900 mt-auto">
//             {product.basePrice} ₸
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;














// "use client";
// import React from "react";
// import Link from "next/link";
// import axios from "@/api/axios";
// import { useSession } from "next-auth/react";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical";
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
//   const { data: session } = useSession();
//   const userId = session?.user?.id;

//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   const handleAddToFavorites = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!userId) return alert("Сначала авторизуйся!");
//     try {
//       await axios.post("/api/favorites", { productId: product.id, userId });
//       alert("Добавлено в избранное ❤️");
//     } catch (err) {
//       console.error(err);
//       alert("Ошибка при добавлении в избранное");
//     }
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!userId) return alert("Сначала авторизуйся!");
//     try {
//       await axios.post("/api/cart", { productId: product.id, userId, quantity: 1 });
//       alert("Товар добавлен в корзину 🛒");
//     } catch (err) {
//       console.error(err);
//       alert("Ошибка при добавлении в корзину");
//     }
//   };

//   if (variant === "horizontal") {
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           <img
//             src={imageSrc}
//             alt={product.name}
//             className="w-20 h-20 object-cover rounded-md"
//           />
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
//               {product.name}
//             </p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // Вертикальная карточка
//   return (
//     <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition group relative">
//       {/* Картинка */}
//       <div className="relative">
//         <img
//           src={imageSrc}
//           alt={product.name}
//           className="w-[202px] h-[172px] object-cover rounded-md mx-auto"
//         />

//         {/* Ховер-иконки */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-4">
//           {/* ❤️ Избранное */}
//           <button onClick={handleAddToFavorites} className="w-12 h-12">
//             <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//               <rect width="48" height="48" rx="24" fill="#FA8232" />
//               <path
//                 d="M24 32.25C24 32.25 14.625 27 14.625 20.625C14.625 19.498 15.0155 18.4059 15.73 17.5343C16.4445 16.6628 17.4388 16.0657 18.5439 15.8447C19.649 15.6237 20.7966 15.7923 21.7913 16.322C22.7861 16.8517 23.5665 17.7097 24 18.75C24.4335 17.7097 25.2139 16.8517 26.2087 16.322C27.2034 15.7923 28.351 15.6237 29.4561 15.8447C30.5612 16.0657 31.5555 16.6628 32.27 17.5343C32.9845 18.4059 33.375 19.498 33.375 20.625C33.375 27 24 32.25 24 32.25Z"
//                 stroke="white"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* 🛒 Корзина */}
//           <button onClick={handleAddToCart} className="w-12 h-12">
//             <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//               <rect width="48" height="48" rx="24" fill="white" />
//               <path
//                 d="M19.5 31.5C19.9142 31.5 20.25 31.8358 20.25 32.25C20.25 32.6642 19.9142 33 19.5 33C19.0858 33 18.75 32.6642 18.75 32.25C18.75 31.8358 19.0858 31.5 19.5 31.5Z"
//                 fill="#191C1F"
//                 stroke="#191C1F"
//                 strokeWidth="1.5"
//               />
//               <path
//                 d="M29.25 33.75C30.0784 33.75 30.75 33.0784 30.75 32.25C30.75 31.4216 30.0784 30.75 29.25 30.75C28.4216 30.75 27.75 31.4216 27.75 32.25C27.75 33.0784 28.4216 33.75 29.25 33.75Z"
//                 fill="#191C1F"
//               />
//               <path
//                 d="M15.9656 18.75H32.7844L30.3094 27.4125C30.2211 27.7269 30.032 28.0036 29.7711 28.2C29.5103 28.3965 29.1922 28.5019 28.8656 28.5H19.8844C19.5578 28.5019 19.2397 28.3965 18.9789 28.2C18.718 28.0036 18.5289 27.7269 18.4406 27.4125L15.0469 15.5438C15.002 15.387 14.9073 15.2491 14.777 15.1509C14.6468 15.0528 14.4881 14.9998 14.325 15H12.75"
//                 stroke="#191C1F"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* 👁 Глазик — отдельный Link */}
//           <Link
//             href={`/products/${product.id}`}
//             className="w-12 h-12 flex items-center justify-center"
//           >
//             <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//               <rect width="48" height="48" rx="24" fill="white" />
//               <path
//                 d="M24 16.25C16.5 16.25 13.5 24 13.5 24C13.5 24 16.5 31.75 24 31.75C31.5 31.75 34.5 24 34.5 24C34.5 24 31.5 16.25 24 16.25Z"
//                 stroke="#191C1F"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M24 27C25.6569 27 27 25.6569 27 24C27 22.3431 25.6569 21 24 21C22.3431 21 21 22.3431 21 24C21 25.6569 22.3431 27 24 27Z"
//                 stroke="#191C1F"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>

//       {/* Текст */}
//       <div className="mt-4 flex flex-col justify-between flex-1">
//         <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
//           {product.name}
//         </p>
//         <p className="text-sm font-semibold text-gray-900 mt-auto">
//           {product.basePrice} ₸
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;





// "use client";
// import React from "react";
// import Link from "next/link";
// import axios from "@/api/axios";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical";
//   userId?: string; // получаем userId после логина
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical", userId }) => {
//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   const handleAddToFavorites = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!userId) return alert("Сначала авторизуйся!");
//     try {
//       await axios.post("/favorites", { productId: product.id, userId });
//       alert("Добавлено в избранное ❤️");
//     } catch (err) {
//       console.error(err);
//       alert("Ошибка при добавлении в избранное");
//     }
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!userId) return alert("Сначала авторизуйся!");
//     try {
//       await axios.post("/cart", { productId: product.id, userId, quantity: 1 });
//       alert("Товар добавлен в корзину 🛒");
//     } catch (err) {
//       console.error(err);
//       alert("Ошибка при добавлении в корзину");
//     }
//   };

//   if (variant === "horizontal") {
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           <img src={imageSrc} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // Вертикальная карточка
//   return (
//     <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition group relative">
//       <div className="relative">
//         <img src={imageSrc} alt={product.name} className="w-[202px] h-[172px] object-cover rounded-md mx-auto" />

//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-4">
//           <button onClick={handleAddToFavorites} className="w-12 h-12">
//             ❤️
//           </button>

//           <button onClick={handleAddToCart} className="w-12 h-12">
//             🛒
//           </button>

//           <Link href={`/products/${product.id}`} className="w-12 h-12 flex items-center justify-center">
//             👁
//           </Link>
//         </div>
//       </div>

//       <div className="mt-4 flex flex-col justify-between flex-1">
//         <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//         <p className="text-sm font-semibold text-gray-900 mt-auto">{product.basePrice} ₸</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;










// "use client";
// import React from "react";
// import Link from "next/link";
// import axios from "@/api/axios";
// import { useUser } from "@/context/UserContext";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical";
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
//   const { user } = useUser();

//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   const handleAddToFavorites = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return alert("Сначала авторизуйся!");
//     try {
//       await axios.post("/favorites", { productId: product.id });
//       alert("Добавлено в избранное ❤️");
//     } catch (err: any) {
//       console.error(err.response?.data || err.message);
//       alert("Ошибка при добавлении в избранное");
//     }
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return alert("Сначала авторизуйся!");
//     try {
//       await axios.post("/cart", { productId: product.id, quantity: 1 });
//       alert("Товар добавлен в корзину 🛒");
//     } catch (err: any) {
//       console.error(err.response?.data || err.message);
//       alert("Ошибка при добавлении в корзину");
//     }
//   };

//   if (variant === "horizontal") {
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           <img src={imageSrc} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // Вертикальная карточка
//   return (
//     <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition group relative">
//       <div className="relative">
//         <img src={imageSrc} alt={product.name} className="w-[202px] h-[172px] object-cover rounded-md mx-auto" />

//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-4">
//           <button onClick={handleAddToFavorites} className="w-12 h-12">
//             ❤️
//           </button>

//           <button onClick={handleAddToCart} className="w-12 h-12">
//             🛒
//           </button>

//           <Link href={`/products/${product.id}`} className="w-12 h-12 flex items-center justify-center">
//             👁
//           </Link>
//         </div>
//       </div>

//       <div className="mt-4 flex flex-col justify-between flex-1">
//         <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//         <p className="text-sm font-semibold text-gray-900 mt-auto">{product.basePrice} ₸</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;





// "use client";
// import React from "react";
// import Link from "next/link";
// import { useUser } from "@/context/UserContext";
// import axios, { AxiosError, isAxiosError } from "axios"; 


// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical";
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
//   const { user } = useUser();

//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   const handleAddToFavorites = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return alert("Сначала авторизуйся!");
//     try {
//       const response = await axios.post("/favorites", { productId: product.id });
//       alert(response.data?.message || "Добавлено в избранное ❤️");
//     } catch (err: any) {
//       if (axios.isAxiosError(err)) {
//         console.error("Axios error:", err.response?.data || err.message);
//         alert(err.response?.data?.message || "Ошибка при добавлении в избранное");
//       } else {
//         console.error("Unexpected error:", err);
//         alert("Ошибка при добавлении в избранное");
//       }
//     }
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return alert("Сначала авторизуйся!");
//     try {
//       const response = await axios.post("/cart", { productId: product.id, quantity: 1 });
//       alert(response.data?.message || "Товар добавлен в корзину 🛒");
//     } catch (err: any) {
//       if (axios.isAxiosError(err)) {
//         console.error("Axios error:", err.response?.data || err.message);
//         alert(err.response?.data?.message || "Ошибка при добавлении в корзину");
//       } else {
//         console.error("Unexpected error:", err);
//         alert("Ошибка при добавлении в корзину");
//       }
//     }
//   };

//   if (variant === "horizontal") {
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           <img src={imageSrc} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // Вертикальная карточка
//   return (
//     <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition group relative">
//       <div className="relative">
//         <img src={imageSrc} alt={product.name} className="w-[202px] h-[172px] object-cover rounded-md mx-auto" />

//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-4">
//           <button onClick={handleAddToFavorites} className="w-12 h-12">
//             ❤️
//           </button>

//           <button onClick={handleAddToCart} className="w-12 h-12">
//             🛒
//           </button>

//           <Link href={`/products/${product.id}`} className="w-12 h-12 flex items-center justify-center">
//             👁
//           </Link>
//         </div>
//       </div>

//       <div className="mt-4 flex flex-col justify-between flex-1">
//         <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//         <p className="text-sm font-semibold text-gray-900 mt-auto">{product.basePrice} ₸</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



// ТУТТ ИСПРАВЛЕНА ОШИБКА НАУОКУГКУКОУКУЛ НАКОНЕЦ С ИЗБРАННЫМ
// "use client";
// import React from "react";
// import Link from "next/link";
// import { useUser } from "@/context/UserContext";
// import api from "@/api/axios";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical";
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
//   const { user } = useUser();

//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   const handleAddToFavorites = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return alert("Сначала авторизуйся!");

//     try {
//       const response = await api.post("/favorites", { productId: product.id });
//       alert(response.data?.message || response.data?.error || "Добавлено в избранное ❤️");
//     } catch (err: any) {
//       console.error("Axios error:", err.response?.data || err.message);
//       alert(err.response?.data?.message || err.response?.data?.error || "Ошибка при добавлении в избранное");
//     }
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return alert("Сначала авторизуйся!");

//     try {
//       const response = await api.post("/cart", { productId: product.id, quantity: 1 });
//       alert(response.data?.message || response.data?.error || "Товар добавлен в корзину 🛒");
//     } catch (err: any) {
//       console.error("Axios error:", err.response?.data || err.message);
//       alert(err.response?.data?.message || err.response?.data?.error || "Ошибка при добавлении в корзину");
//     }
//   };

//   if (variant === "horizontal") {
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           <img src={imageSrc} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // Вертикальная карточка
//   return (
//     <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition group relative">
//       <div className="relative">
//         <img src={imageSrc} alt={product.name} className="w-[202px] h-[172px] object-cover rounded-md mx-auto" />
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-4">
//           <button onClick={handleAddToFavorites} className="w-12 h-12">❤️</button>
//           <button onClick={handleAddToCart} className="w-12 h-12">🛒</button>
//           <Link href={`/products/${product.id}`} className="w-12 h-12 flex items-center justify-center">👁</Link>
//         </div>
//       </div>
//       <div className="mt-4 flex flex-col justify-between flex-1">
//         <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//         <p className="text-sm font-semibold text-gray-900 mt-auto">{product.basePrice} ₸</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;








// лучший вариант пока что для карточки
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { useUser } from "@/context/UserContext";
// import api from "@/api/axios";

// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical";
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
//   const { user } = useUser();

//   const [favLoading, setFavLoading] = useState(false);
//   const [cartLoading, setCartLoading] = useState(false);
//   const [toast, setToast] = useState("");

//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   const showToast = (msg: string) => {
//     setToast(msg);
//     setTimeout(() => setToast(""), 2000); // исчезает через 2 сек
//   };

//   const handleAddToFavorites = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return showToast("Сначала авторизуйся!");

//     try {
//       setFavLoading(true);
//       const response = await api.post("/favorites", { productId: product.id });
//       showToast(response.data?.message || response.data?.error || "Добавлено в избранное ❤️");
//     } catch (err: any) {
//       console.error("Axios error:", err.response?.data || err.message);
//       showToast(err.response?.data?.message || err.response?.data?.error || "Ошибка при добавлении в избранное");
//     } finally {
//       setFavLoading(false);
//     }
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return showToast("Сначала авторизуйся!");

//     try {
//       setCartLoading(true);
//       const response = await api.post("/cart", { productId: product.id, quantity: 1 });
//       showToast(response.data?.message || response.data?.error || "Товар добавлен в корзину 🛒");
//     } catch (err: any) {
//       console.error("Axios error:", err.response?.data || err.message);
//       showToast(err.response?.data?.message || err.response?.data?.error || "Ошибка при добавлении в корзину");
//     } finally {
//       setCartLoading(false);
//     }
//   };

//   const buttonClass = "w-12 h-12 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition";

//   if (variant === "horizontal") {
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           <img src={imageSrc} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   return (
//     <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition group relative">
//       <div className="relative">
//         <img src={imageSrc} alt={product.name} className="w-[202px] h-[172px] object-cover rounded-md mx-auto" />
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-4">
//           <button onClick={handleAddToFavorites} className={buttonClass} disabled={favLoading}>
//             {favLoading ? "❤️…" : "❤️"}
//           </button>
//           <button onClick={handleAddToCart} className={buttonClass} disabled={cartLoading}>
//             {cartLoading ? "🛒…" : "🛒"}
//           </button>
//           <Link href={`/products/${product.id}`} className={buttonClass}>
//             👁
//           </Link>
//         </div>
//       </div>
//       <div className="mt-4 flex flex-col justify-between flex-1">
//         <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//         <p className="text-sm font-semibold text-gray-900 mt-auto">{product.basePrice} ₸</p>
//       </div>

//       {/* Toast уведомление */}
//       {toast && (
//         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-md shadow-md animate-fadeInOut">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;








// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { useUser } from "@/context/UserContext";
// import api from "@/api/axios";

// // Тип для варианта товара
// type ProductVariant = {
//   id: number;
//   sku?: string;
//   price?: number;
//   stock?: number;
//   color?: string;
//   memory?: string;
//   storage?: string;
//   size?: string;
//   imageUrl?: string;
// };

// // Тип продукта с массивом вариантов
// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
//   variants?: ProductVariant[];
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical";
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
//   const { user } = useUser();

//   const [favLoading, setFavLoading] = useState(false);
//   const [cartLoading, setCartLoading] = useState(false);
//   const [toast, setToast] = useState("");

//   const imageSrc =
//     product.thumbnail ||
//     product.images?.[0]?.url ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   const showToast = (msg: string) => {
//     setToast(msg);
//     setTimeout(() => setToast(""), 2000); // исчезает через 2 сек
//   };

//   const handleAddToFavorites = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return showToast("Сначала авторизуйся!");

//     try {
//       setFavLoading(true);
//       const response = await api.post("/favorites", { productId: product.id });
//       showToast(response.data?.message || response.data?.error || "Добавлено в избранное ❤️");
//     } catch (err: any) {
//       console.error("Axios error:", err.response?.data || err.message);
//       showToast(err.response?.data?.message || err.response?.data?.error || "Ошибка при добавлении в избранное");
//     } finally {
//       setFavLoading(false);
//     }
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//   e.preventDefault();
//   if (!user?.id) return showToast("Сначала авторизуйся!");

//   const variantId = product.variants?.[0]?.id;
//   if (!variantId) return showToast("У этого товара нет доступного варианта");

//   try {
//     setCartLoading(true);
//     const response = await api.post("/cart", { variantId, quantity: 1 });
//     showToast(response.data?.message || "Товар добавлен в корзину 🛒");
//   } catch (err: any) {
//     console.error("Axios error:", err.response?.data || err.message);
//     showToast(err.response?.data?.message || "Ошибка при добавлении в корзину");
//   } finally {
//     setCartLoading(false);
//   }
// };


//   const buttonClass = "w-12 h-12 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition";

//   if (variant === "horizontal") {
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           <img src={imageSrc} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   return (
//     <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition group relative">
//       <div className="relative">
//         <img src={imageSrc} alt={product.name} className="w-[202px] h-[172px] object-cover rounded-md mx-auto" />
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-4">
//           <button onClick={handleAddToFavorites} className={buttonClass} disabled={favLoading}>
//             {favLoading ? "❤️…" : "❤️"}
//           </button>
//           <button onClick={handleAddToCart} className={buttonClass} disabled={cartLoading}>
//             {cartLoading ? "🛒…" : "🛒"}
//           </button>
//           <Link href={`/products/${product.id}`} className={buttonClass}>
//             👁
//           </Link>
//         </div>
//       </div>
//       <div className="mt-4 flex flex-col justify-between flex-1">
//         <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//         <p className="text-sm font-semibold text-gray-900 mt-auto">{product.basePrice} ₸</p>
//       </div>

//       {/* Toast уведомление */}
//       {toast && (
//         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-md shadow-md animate-fadeInOut">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// };

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import api from "@/api/axios";

type ProductVariant = {
  id: number;
  price?: number;
  stock?: number;
  color?: string;
  memory?: string;
  storage?: string;
  size?: string;
  imageUrl?: string;
};

type Product = {
  id: number;
  name: string;
  description?: string;
  basePrice: number;
  thumbnail?: string;
  images?: { url: string }[];
  variants?: ProductVariant[];
};

type ProductCardProps = {
  product: Product;
  variant?: "horizontal" | "vertical";
};

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
  const { user } = useUser();

  const [favLoading, setFavLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [toast, setToast] = useState("");

  // Берем картинку: сначала thumbnail, потом первый image.url, потом placeholder
  const imageSrc =
    product.thumbnail ||
    product.images?.[0]?.url ||
    "https://via.placeholder.com/300x200?text=Нет+фото";

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleAddToFavorites = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user?.id) return showToast("Сначала авторизуйся!");

    try {
      setFavLoading(true);
      const response = await api.post("/favorites", { productId: product.id });
      showToast(response.data?.message || "Добавлено в избранное ❤️");
    } catch (err: any) {
      console.error(err);
      showToast(err.response?.data?.message || "Ошибка при добавлении в избранное");
    } finally {
      setFavLoading(false);
    }
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user?.id) return showToast("Сначала авторизуйся!");

    const variantId = product.variants?.[0]?.id;
    if (!variantId) return showToast("У этого товара нет доступного варианта");

    try {
      setCartLoading(true);
      const response = await api.post("/cart", { variantId, quantity: 1 });
      showToast(response.data?.message || "Товар добавлен в корзину 🛒");
    } catch (err: any) {
      console.error(err);
      showToast(err.response?.data?.message || "Ошибка при добавлении в корзину");
    } finally {
      setCartLoading(false);
    }
  };

  const buttonClass =
    "w-12 h-12 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition";

  if (variant === "horizontal") {
    return (
      <Link href={`/products/${product.id}`}>
        <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-md"
          />
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

  // Вертикальная карточка
  return (
    <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition group relative">
      <div className="relative">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-[202px] h-[172px] object-cover rounded-md mx-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-4">
          <button
            onClick={handleAddToFavorites}
            className={buttonClass}
            disabled={favLoading}
          >
            {favLoading ? "❤️…" : "❤️"}
          </button>
          <button
            onClick={handleAddToCart}
            className={buttonClass}
            disabled={cartLoading}
          >
            {cartLoading ? "🛒…" : "🛒"}
          </button>
          <Link href={`/products/${product.id}`} className={buttonClass}>
            👁
          </Link>
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-between flex-1">
        <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">
          {product.name}
        </p>
        <p className="text-sm font-semibold text-gray-900 mt-auto">
          {product.basePrice} ₸
        </p>
      </div>

      {toast && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-md shadow-md animate-fadeInOut">
          {toast}
        </div>
      )}
    </div>
  );
};

export default ProductCard;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { useUser } from "@/context/UserContext";
// import api from "@/api/axios";

// // Тип для варианта товара
// type ProductVariant = {
//   id: number;
//   sku?: string;
//   price?: number;
//   stock?: number;
//   color?: string;
//   memory?: string;
//   storage?: string;
//   size?: string;
//   imageUrl?: string;
// };

// // Тип продукта с массивом вариантов
// type Product = {
//   id: number;
//   name: string;
//   description?: string;
//   basePrice: number;
//   thumbnail?: string;
//   images?: { url: string }[];
//   variants?: ProductVariant[];
// };

// type ProductCardProps = {
//   product: Product;
//   variant?: "horizontal" | "vertical";
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "vertical" }) => {
//   const { user } = useUser();

//   const [favLoading, setFavLoading] = useState(false);
//   const [cartLoading, setCartLoading] = useState(false);
//   const [toast, setToast] = useState("");

//   // ✅ надежный выбор картинки: thumbnail > первый image > заглушка
//   const imageSrc =
//     product.thumbnail ||
//     (product.images && product.images.length > 0 ? product.images[0].url : null) ||
//     "https://via.placeholder.com/300x200?text=Нет+фото";

//   const showToast = (msg: string) => {
//     setToast(msg);
//     setTimeout(() => setToast(""), 2000); // исчезает через 2 сек
//   };

//   const handleAddToFavorites = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return showToast("Сначала авторизуйся!");

//     try {
//       setFavLoading(true);
//       const response = await api.post("/favorites", { productId: product.id });
//       showToast(response.data?.message || response.data?.error || "Добавлено в избранное ❤️");
//     } catch (err: any) {
//       console.error("Axios error:", err.response?.data || err.message);
//       showToast(err.response?.data?.message || err.response?.data?.error || "Ошибка при добавлении в избранное");
//     } finally {
//       setFavLoading(false);
//     }
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!user?.id) return showToast("Сначала авторизуйся!");

//     const variantId = product.variants?.[0]?.id;
//     if (!variantId) return showToast("У этого товара нет доступного варианта");

//     try {
//       setCartLoading(true);
//       const response = await api.post("/cart", { variantId, quantity: 1 });
//       showToast(response.data?.message || "Товар добавлен в корзину 🛒");
//     } catch (err: any) {
//       console.error("Axios error:", err.response?.data || err.message);
//       showToast(err.response?.data?.message || "Ошибка при добавлении в корзину");
//     } finally {
//       setCartLoading(false);
//     }
//   };

//   const buttonClass = "w-12 h-12 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition";

//   if (variant === "horizontal") {
//     return (
//       <Link href={`/products/${product.id}`}>
//         <div className="flex w-[312px] max-w-full h-[104px] border rounded-md p-3 gap-3 bg-white hover:shadow-md transition">
//           <img src={imageSrc} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
//           <div className="flex flex-col justify-between w-[196px]">
//             <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//             <p className="text-sm font-semibold text-gray-900">{product.basePrice} ₸</p>
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   return (
//     <div className="w-[234px] max-w-full h-[320px] border rounded-md p-4 flex flex-col bg-white hover:shadow-md transition group relative">
//       <div className="relative">
//         <img src={imageSrc} alt={product.name} className="w-[202px] h-[172px] object-cover rounded-md mx-auto" />
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-4">
//           <button onClick={handleAddToFavorites} className={buttonClass} disabled={favLoading}>
//             {favLoading ? "❤️…" : "❤️"}
//           </button>
//           <button onClick={handleAddToCart} className={buttonClass} disabled={cartLoading}>
//             {cartLoading ? "🛒…" : "🛒"}
//           </button>
//           <Link href={`/products/${product.id}`} className={buttonClass}>
//             👁
//           </Link>
//         </div>
//       </div>
//       <div className="mt-4 flex flex-col justify-between flex-1">
//         <p className="text-sm leading-5 font-normal text-gray-800 line-clamp-2">{product.name}</p>
//         <p className="text-sm font-semibold text-gray-900 mt-auto">{product.basePrice} ₸</p>
//       </div>

//       {/* Toast уведомление */}
//       {toast && (
//         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-md shadow-md animate-fadeInOut">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;
