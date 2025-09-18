'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import Container from '@/components/ui/Container';
import TopHeader from '@/components/header/Header';
import BottomHeader from '@/components/header/BottomHeader';
import Footer from '@/components/Footer';
import { getCart, removeFromCart, updateCartItem } from '@/api/cart';

type CartItem = {
  id: number;
  quantity: number;
  productId: number;
  product?: {
    name: string;
    basePrice: number;
    thumbnail?: string;
    inStock?: boolean;
    variantId?: number;
  };
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { user } = useUser();

  const fetchCart = async () => {
    if (!user) return;
    try {
      const data = await getCart();
      setCart(data || []);
    } catch (err: any) {
      console.error('Ошибка загрузки корзины:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const handleRemove = async (productId: number) => {
    try {
      await removeFromCart(productId);
      setCart(prev => prev.filter(item => item.productId !== productId));
    } catch (err: any) {
      console.error('Ошибка удаления из корзины:', err.response?.data || err.message);
    }
  };

  const handleQuantityChange = async (productId: number, quantity: number) => {
    if (quantity < 1) return;
    try {
      const updatedItem = await updateCartItem(productId, quantity);
      setCart(prev => prev.map(item => item.productId === productId ? updatedItem : item));
    } catch (err: any) {
      console.error('Ошибка обновления количества:', err.response?.data || err.message);
    }
  };

  if (!user) return <p className="p-6 text-gray-500">Пожалуйста, войдите, чтобы посмотреть корзину</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <BottomHeader />

      <Container className="py-10 flex-1 min-h-[500px]">
        <h1 className="text-2xl font-semibold mb-6">Корзина</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Корзина пуста</p>
        ) : (
          <div className="flex flex-col gap-0">
            <div className="w-full h-[38px] flex items-center bg-gray-50 px-6 gap-6 border-b border-gray-200 rounded-t-md">
              <div className="flex-1 text-gray-700 text-[12px] font-medium uppercase">Products</div>
              <div className="w-[200px] text-gray-700 text-[12px] font-medium uppercase">Price</div>
              <div className="w-[200px] text-gray-700 text-[12px] font-medium uppercase">Stock Status</div>
              <div className="w-[221px] text-gray-700 text-[12px] font-medium uppercase">Quantity</div>
              <div className="w-[50px]"></div>
            </div>

            <div className="flex flex-col gap-4">
              {cart.map(item => (
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
                    <span className="text-gray-700 text-[14px] font-normal">{item.product?.name || 'Продукт не найден'}</span>
                  </div>

                  <div className="w-[200px] text-gray-900 text-[14px] font-medium">
                    {item.product?.basePrice || 0}₸
                  </div>

                  <div
                    className={`w-[200px] text-[14px] font-semibold ${
                      item.product?.inStock ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {item.product?.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                  </div>

                  <div className="w-[221px] flex items-center gap-2">
                    <button
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                      onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                      onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.productId)}
                    className="hover:scale-110 transition-transform text-red-500 font-bold"
                  >
                    ✕
                  </button>
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
