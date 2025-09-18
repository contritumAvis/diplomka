// import api from "axios";

// // получить корзину
// export async function getCart() {
//   const res = await api.get("/cart");
//   return res.data;
// }

// // добавить в корзину
// export async function addToCart(productId: number, quantity: number = 1) {
//   const res = await api.post("/cart", { productId, quantity });
//   return res.data;
// }

// // обновить количество
// export async function updateCartItem(itemId: number, quantity: number) {
//   const res = await api.patch(`/cart/${itemId}`, { quantity });
//   return res.data;
// }

// // удалить товар
// export async function removeFromCart(itemId: number) {
//   const res = await api.delete(`/cart/${itemId}`);
//   return res.data;
// }

// // получить корзину
// export async function getCart() {
//   const res = await api.get("/cart");
//   return res.data;
// }

// // добавить в корзину
// export async function addToCart(productId: number, quantity: number = 1) {
//   const res = await api.post("/cart", { productId, quantity });
//   return res.data;
// }

// // обновить количество
// export async function updateCartItem(itemId: number, quantity: number) {
//   const res = await api.patch(`/cart/${itemId}`, { quantity });
//   return res.data;
// }

// // удалить товар
// export async function removeFromCart(itemId: number) {
//   const res = await api.delete(`/cart/${itemId}`);
//   return res.data;
// }

// // добавить в корзину ЭТО ПРОСТО УБОЖЕСКИЙ ВАРИАНТ ФУУУ НАФИГ ЕГО
// export async function addToCart(variantId: number, quantity: number = 1) {
//   const res = await api.post("/cart", { variantId, quantity });
//   return res.data;
// }

// // обновить количество
// export async function updateCartItem(variantId: number, quantity: number) {
//   const res = await api.patch(`/cart/${variantId}`, { quantity });
//   return res.data;
// }

// // удалить товар
// export async function removeFromCart(variantId: number) {
//   const res = await api.delete(`/cart/${variantId}`);
//   return res.data;
// }

import api from './axios';

// Получить корзину
export const getCart = async () => {
  const { data } = await api.get('/cart');
  return data;
};

// Удалить товар из корзины
export const removeFromCart = async (productId: number) => {
  const { data } = await api.delete(`/cart/${productId}`);
  return data;
};

// Обновить количество товара (используем PATCH!)
export const updateCartItem = async (productId: number, quantity: number) => {
  const { data } = await api.patch(`/cart/${productId}`, { quantity });
  return data;
};

// Добавить товар в корзину
export const addToCart = async (variantId: number, quantity: number) => {
  const { data } = await api.post('/cart', { variantId, quantity });
  return data;
};

// import api from './axios';

// export const getCart = async () => {
//   const { data } = await api.get('/cart');
//   return data;
// };

// export const removeFromCart = async (productId: number) => {
//   const { data } = await api.delete(`/cart/${productId}`);
//   return data;
// };

// export const updateCartItem = async (productId: number, quantity: number) => {
//   const { data } = await api.put(`/cart/${productId}`, { quantity });
//   return data;
// };

// export const addToCart = async (variantId: number, quantity: number) => {
//   const { data } = await api.post('/cart', { variantId, quantity });
//   return data;
// };

// import api from "./axios";

// // добавить в корзину
// export async function addToCart(productId: number) {
//   const res = await api.post("/cart", { productId });
//   return res.data;
// }

// // обновить количество
// export async function updateCartItem(productId: number, quantity: number) {
//   const res = await api.patch(`/cart/${productId}`, { quantity });
//   return res.data;
// }

// // удалить товар
// export async function removeFromCart(productId: number) {
//   const res = await api.delete(`/cart/${productId}`);
//   return res.data;
// }

