// 'use client';

// import React, { useEffect, useState } from 'react';
// import api from '@/api/axios';
// import { useUser } from '@/context/UserContext';
// import Container from '@/components/ui/Container';
// import TopHeader from "@/components/header/Header";
// import BottomHeader from "@/components/header/BottomHeader";
// import Footer from "@/components/Footer";
// import { addToCart } from '@/api/cart';

// type FavoriteItem = {
//   id: number;
//   productId: number;
//   product?: {
//     name: string;
//     basePrice: number;
//     thumbnail?: string;
//     inStock?: boolean;
//   };
// };

// export default function WishlistPage() {
//   const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
//   const { user } = useUser();

//   const fetchFavorites = async () => {
//     if (!user) return;
//     try {
//       const res = await api.get('/favorites');
//       setFavorites(res.data);
//     } catch (err: any) {
//       console.error('Ошибка загрузки избранного:', err.response?.data || err.message);
//     }
//   };
// console.log("Favorites:", favorites);
// favorites.forEach(item => console.log(item.id, item.productId, item.product?.name));

//   useEffect(() => {
//     fetchFavorites();
//   }, [user]);

// const handleRemove = async (productId: number) => {
//   try {
//     await api.delete(`/favorites/${productId}`); // ✅ правильный путь
//     setFavorites(prev => prev.filter(item => item.productId !== productId));
//   } catch (err: any) {
//     console.error('Ошибка удаления из избранного', err.response?.data || err.message);
//   }
// };


// //   const handleRemove = async (id: number) => {
// //     try {
// //       await api.delete(`/favorites/${id}`);
// //       setFavorites(prev => prev.filter(item => item.id !== id));
// //     } catch (err) {
// //       console.error('Ошибка удаления из избранного', err);
// //     }
// //   };

// //  const handleAddToCart = async (productId: number) => {
// //   try {
// //     await api.post("/cart", { productId, quantity: 1 }); // 🔹 добавил quantity
// //     alert("Добавлено в корзину");
// //   } catch (err: any) {
// //     console.error("Ошибка добавления в корзину:", err.response?.data || err.message);
// //   }
// // };

// const handleAddToCart = async (variantId: number) => {
//   try {
//     const res = await addToCart(variantId, 1); // используем api/cart.ts
//     console.log("Добавлено в корзину:", res);
//     alert("Добавлено в корзину");
//   } catch (err: any) {
//     console.error("Ошибка добавления в корзину:", err.response?.data || err.message);
//     alert("Не удалось добавить товар в корзину");
//   }
// };

// // const handleAddToCart = async (productId: number) => {
// //   try {
// //     // Отправляем POST-запрос на сервер
// //     const res = await api.post("/cart", { productId, quantity: 1 });
// //     console.log("Добавлено в корзину:", res.data);
// //     alert("Добавлено в корзину");
// //   } catch (err: any) {
// //     console.error("Ошибка добавления в корзину:", err.response?.data || err.message);
// //     alert("Не удалось добавить товар в корзину");
// //   }
// // };

//   if (!user) return <p className="p-6 text-gray-500">Пожалуйста, войдите, чтобы посмотреть Wishlist</p>;

//   return (
//     <div className="flex flex-col min-h-screen">
//       <TopHeader />
//       <BottomHeader />

//       <Container className="py-10 flex-1">
//         <h1 className="text-2xl font-semibold mb-6">Wishlist</h1>

//         {favorites.length === 0 ? (
//           <p className="text-gray-500">Пока ничего нет</p>
//         ) : (
//           <div className="flex flex-col gap-0">
//             {/* Заголовки таблицы */}
//             <div className="w-full h-[38px] flex items-center bg-gray-50 px-6 gap-6 border-b border-gray-200 rounded-t-md">
//               <div className="flex-1 text-gray-700 text-[12px] font-medium uppercase">Products</div>
//               <div className="w-[200px] text-gray-700 text-[12px] font-medium uppercase">Price</div>
//               <div className="w-[200px] text-gray-700 text-[12px] font-medium uppercase">Stock Status</div>
//               <div className="w-[221px] text-gray-700 text-[12px] font-medium uppercase">Actions</div>
//             </div>

//             {/* Список товаров */}
//             <div className="flex flex-col gap-4">
//               {favorites.map(item => (
//                 <div
//                   key={item.id}
//                   className="flex items-center gap-6 w-full h-[72px] bg-white rounded-md shadow-sm px-4"
//                 >
//                   {/* Продукт */}
//                   <div className="flex items-center flex-1 gap-4">
//                     {item.product?.thumbnail && (
//                       <img
//                         src={item.product.thumbnail}
//                         alt={item.product.name}
//                         className="w-[72px] h-[72px] object-cover rounded-sm"
//                       />
//                     )}
//                     <span className="text-gray-700 text-[14px] font-normal">{item.product?.name}</span>
//                   </div>

//                   {/* Цена */}
//                   <div className="w-[200px] text-gray-900 text-[14px] font-medium">
//                     {item.product?.basePrice}₸
//                   </div>

//                   {/* Статус */}
//                   <div
//                     className={`w-[200px] text-[14px] font-semibold ${
//                       item.product?.inStock ? 'text-green-500' : 'text-red-500'
//                     }`}
//                   >
//                     {item.product?.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
//                   </div>

//                   {/* Действия */}
//                   <div className="flex items-center gap-4">
//                     <div
//                       className="cursor-pointer hover:scale-105 transition-transform"
//                       onClick={() => handleAddToCart(item.productId)}
//                     >
//                       <img src="/alishtygde.svg" alt="Add to cart" className="w-[173px] h-[48px]" />
//                     </div>
//              <button
//   onClick={() => handleRemove(item.productId)}
//   className="hover:scale-110 transition-transform text-red-500 font-bold"
// >
//   ✕
// </button>

//                     {/* <button
//                       onClick={() => handleRemove(item.id)}
//                       className="hover:scale-110 transition-transform text-red-500 font-bold"
//                     >
//                       ✕
//                     </button> */}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </Container>

//       <Footer />
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import api from '@/api/axios';
import { useUser } from '@/context/UserContext';
import Container from '@/components/ui/Container';
import TopHeader from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Footer from "@/components/Footer";
import { addToCart } from '@/api/cart'; // ✅ импортируем функцию

type FavoriteItem = {
  id: number;
  productId: number;
  variantId?: number; // если в корзину идёт variant
  product?: {
    name: string;
    basePrice: number;
    thumbnail?: string;
    inStock?: boolean;
    variantId?: number;
  };
};

export default function WishlistPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const { user } = useUser();

  const fetchFavorites = async () => {
    if (!user) return;
    try {
      const res = await api.get('/favorites');
      setFavorites(res.data);
    } catch (err: any) {
      console.error('Ошибка загрузки избранного:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  const handleRemove = async (productId: number) => {
    try {
      await api.delete(`/favorites/${productId}`);
      setFavorites(prev => prev.filter(item => item.productId !== productId));
    } catch (err: any) {
      console.error('Ошибка удаления из избранного', err.response?.data || err.message);
    }
  };

  const handleAddToCart = async (variantId?: number) => {
    if (!variantId) return alert("Нет доступного варианта товара!");
    try {
      const res = await addToCart(variantId, 1);
      console.log("Добавлено в корзину:", res);
      alert("Добавлено в корзину");
    } catch (err: any) {
      console.error("Ошибка добавления в корзину:", err.response?.data || err.message);
      alert("Не удалось добавить товар в корзину");
    }
  };

  if (!user) return <p className="p-6 text-gray-500">Пожалуйста, войдите, чтобы посмотреть Wishlist</p>;

  return (
    <div className="flex flex-col min-h-screen ">
      <TopHeader />
      <BottomHeader />

      <Container className="py-10 flex-1 min-h-[500px]">
        <h1 className="text-2xl font-semibold mb-6">Wishlist</h1>

        {favorites.length === 0 ? (
          <p className="text-gray-500">Пока ничего нет</p>
        ) : (
          <div className="flex flex-col gap-0">
            <div className="w-full h-[38px] flex items-center bg-gray-50 px-6 gap-6 border-b border-gray-200 rounded-t-md">
              <div className="flex-1 text-gray-700 text-[12px] font-medium uppercase">Products</div>
              <div className="w-[200px] text-gray-700 text-[12px] font-medium uppercase">Price</div>
              <div className="w-[200px] text-gray-700 text-[12px] font-medium uppercase">Stock Status</div>
              <div className="w-[221px] text-gray-700 text-[12px] font-medium uppercase">Actions</div>
            </div>

            <div className="flex flex-col gap-4">
              {favorites.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 w-full h-[72px] bg-white rounded-md shadow-sm px-4"
                >
                  <div className="flex items-center flex-1 gap-4">
                    {item.product?.thumbnail && (
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.name}
                        className="w-[72px] h-[72px] object-cover rounded-sm"
                      />
                    )}
                    <span className="text-gray-700 text-[14px] font-normal">{item.product?.name}</span>
                  </div>

                  <div className="w-[200px] text-gray-900 text-[14px] font-medium">
                    {item.product?.basePrice}₸
                  </div>

                  <div
                    className={`w-[200px] text-[14px] font-semibold ${
                      item.product?.inStock ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {item.product?.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className="cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => handleAddToCart(item.product?.variantId)}
                    >
                      <img src="/alishtygde.svg" alt="Add to cart" className="w-[173px] h-[48px]" />
                    </div>
                    <button
                      onClick={() => handleRemove(item.productId)}
                      className="hover:scale-110 transition-transform text-red-500 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
}
