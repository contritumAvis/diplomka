// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "@/api/axios";

// type CartItem = {
//   id: number;
//   productId: number;
//   quantity: number;
//   product?: {
//     name: string;
//     basePrice: number;
//     thumbnail?: string;
//   };
// };

// type Props = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function CartModal({ isOpen, onClose }: Props) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     if (isOpen) {
//       axios.get("/cart") // твой бек эндпоинт
//         .then(res => setCartItems(res.data))
//         .catch(err => console.error("Ошибка загрузки корзины:", err));
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
//       <div className="w-[400px] h-full bg-white shadow-lg p-4 overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Моя корзина</h2>
//           <button onClick={onClose} className="text-gray-600 hover:text-black">✕</button>
//         </div>

//         {cartItems.length === 0 ? (
//           <p className="text-gray-500">Корзина пуста</p>
//         ) : (
//           <ul className="space-y-4">
//             {cartItems.map(item => (
//               <li key={item.id} className="flex items-center gap-4 border-b pb-2">
//                 {item.product?.thumbnail && (
//                   <img src={item.product.thumbnail} alt={item.product.name} className="w-12 h-12 object-cover rounded" />
//                 )}
//                 <div className="flex-1">
//                   <p className="font-medium">{item.product?.name}</p>
//                   <p className="text-sm text-gray-500">{item.quantity} x {item.product?.basePrice}₸</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }






// 'use client';

// import React, { useEffect, useState } from 'react';
// import api from '@/api/axios';
// import { useUser } from '@/context/UserContext';

// type CartItem = {
//   id: number;
//   productId: number;
//   quantity: number;
//   product?: {
//     name: string;
//     basePrice: number;
//     thumbnail?: string;
//   };
// };

// type Props = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function CartModal({ isOpen, onClose }: Props) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const { user } = useUser();

//   useEffect(() => {
//     if (isOpen && user) {
//       api.get('/cart')
//         .then(res => setCartItems(res.data))
//         .catch(err => {
//           console.error('Ошибка загрузки корзины:', err);
//           alert('Сначала войдите в аккаунт!');
//         });
//     }
//   }, [isOpen, user]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
//       <div className="w-[400px] h-full bg-white shadow-lg p-4 overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Моя корзина</h2>
//           <button onClick={onClose} className="text-gray-600 hover:text-black">✕</button>
//         </div>

//         {cartItems.length === 0 ? (
//           <p className="text-gray-500">Корзина пуста</p>
//         ) : (
//           <ul className="space-y-4">
//             {cartItems.map(item => (
//               <li key={item.id} className="flex items-center gap-4 border-b pb-2">
//                 {item.product?.thumbnail && (
//                   <img src={item.product.thumbnail} alt={item.product.name} className="w-12 h-12 object-cover rounded" />
//                 )}
//                 <div className="flex-1">
//                   <p className="font-medium">{item.product?.name}</p>
//                   <p className="text-sm text-gray-500">{item.quantity} x {item.product?.basePrice}₸</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }





// 'use client';

// import React, { useEffect, useState } from 'react';
// import api from '@/api/axios';
// import { useUser } from '@/context/UserContext';

// type CartItem = {
//   id: number;
//   productId: number;
//   quantity: number;
//   product?: {
//     name: string;
//     basePrice: number;
//     thumbnail?: string;
//   };
// };

// type Props = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function CartModal({ isOpen, onClose }: Props) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const { user } = useUser();

//   const fetchCart = async () => {
//     if (!user) return;

//     try {
//       const res = await api.get('/cart');
//       setCartItems(res.data);
//     } catch (err: any) {
//       console.error('Ошибка загрузки корзины:', err.response?.data || err.message);
//     }
//   };

//   useEffect(() => {
//     if (isOpen && user) {
//       fetchCart();
//     }
//   }, [isOpen, user]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
//       <div className="w-[400px] h-full bg-white shadow-lg p-4 overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Моя корзина</h2>
//           <button onClick={onClose} className="text-gray-600 hover:text-black">✕</button>
//         </div>

//         {cartItems.length === 0 ? (
//           <p className="text-gray-500">Корзина пуста</p>
//         ) : (
//           <ul className="space-y-4">
//             {cartItems.map(item => (
//               <li key={item.id} className="flex items-center gap-4 border-b pb-2">
//                 {item.product?.thumbnail && (
//                   <img src={item.product.thumbnail} alt={item.product.name} className="w-12 h-12 object-cover rounded" />
//                 )}
//                 <div className="flex-1">
//                   <p className="font-medium">{item.product?.name}</p>
//                   <p className="text-sm text-gray-500">{item.quantity} x {item.product?.basePrice}₸</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import api from '@/api/axios';
import { useUser } from '@/context/UserContext';
import Container from '@/components/ui/Container';
import TopHeader from '@/components/header/Header';
import BottomHeader from '@/components/header/BottomHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';

type FavoriteItem = {
  id: number;
  productId: number;
  product?: {
    id: number;
    name: string;
    basePrice: number;
    thumbnail?: string;
    inStock?: boolean;
    category?: { name: string };
  };
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FavoriteModal({ isOpen, onClose }: Props) {
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
    if (isOpen && user) fetchFavorites();
  }, [isOpen, user]);

  const handleRemove = async (id: number) => {
    try {
      // await api.delete(`/favorites/${id}`);
      // setFavorites(prev => prev.filter(item => item.id !== id));
      await api.delete(`/:productId/${id}`);
setFavorites(prev => prev.filter(item => item.id !== id));

    } catch (err) {
      console.error('Ошибка удаления из избранного', err);
    }
  };

  const handleAddToCart = async (productId: number) => {
  try {
    const response = await api.post("/cart", {
      productId,
      quantity: 1, // если бэкенд требует
    });
    alert('Добавлено в корзину');
  } catch (err: any) {
    console.error('Ошибка добавления в корзину:', err.response?.data || err.message);
  }
};


  if (!isOpen) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* Хедеры */}
      <TopHeader />
      <BottomHeader />

      {/* Breadcrumbs */}
      <section className="px-4 md:px-24 lg:px-28">
        <div className="max-w-[1440px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Избранное", href: "/favorites" },
            ]}
          />
        </div>
      </section>

      {/* Модалка */}
      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center z-50 overflow-auto py-10">
        <div className="bg-white w-full max-w-[1320px] shadow-lg rounded-md">
          <Container className="flex flex-col gap-0">
            {/* Первый блок */}
            <div className="w-full h-[64px] flex items-center px-6 md:px-24 pt-5 pb-5">
              <h2 className="text-gray-900 font-medium text-[18px] leading-6">Wishlist</h2>
            </div>

            {/* Второй блок - заголовки */}
            <div className="w-full h-[38px] flex items-center bg-gray-50 px-6 md:px-24 gap-6 border-b border-gray-200">
              <div className="flex-1 text-gray-700 text-[12px] font-medium uppercase">Products</div>
              <div className="w-[200px] text-gray-700 text-[12px] font-medium uppercase">Price</div>
              <div className="w-[200px] text-gray-700 text-[12px] font-medium uppercase">Stock Status</div>
              <div className="w-[221px] text-gray-700 text-[12px] font-medium uppercase">Actions</div>
            </div>

            {/* Список товаров */}
            <div className="flex flex-col gap-4 px-6 md:px-24 py-4">
              {favorites.length === 0 ? (
                <p className="text-gray-500">Пока ничего нет</p>
              ) : (
                favorites.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-6 w-full h-[72px] bg-white rounded-md shadow-sm"
                  >
                    {/* Продукт */}
                    <div className="flex items-center flex-1 gap-4 pr-18">
                      {item.product?.thumbnail && (
                        <img
                          src={item.product.thumbnail}
                          alt={item.product.name}
                          className="w-[72px] h-[72px] object-cover rounded-sm"
                        />
                      )}
                      <span className="text-gray-700 text-[14px] font-normal">{item.product?.name}</span>
                    </div>

                    {/* Цена */}
                    <div className="w-[200px] text-gray-900 text-[14px] font-medium">
                      {item.product?.basePrice}₸
                    </div>

                    {/* Статус */}
                    <div className={`w-[200px] text-[14px] font-semibold ${
                      item.product?.inStock ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {item.product?.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                    </div>

                    {/* Действия */}
                    <div className="flex items-center gap-4">
                      {/* SVG кнопка добавления в корзину */}
                      <div
                        className="cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => handleAddToCart(item.productId)}
                      >
                        <img src="/alishtygde.svg" alt="Add to cart" className="w-[173px] h-[48px]" />
                      </div>

                      {/* Крестик */}
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="hover:scale-110 transition-transform"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#929FA5"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M15 9L9 15"
                            stroke="#929FA5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 15L9 9"
                            stroke="#929FA5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Container>
        </div>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
}
