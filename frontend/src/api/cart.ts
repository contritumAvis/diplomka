import api from "axios";

// получить корзину
export async function getCart() {
  const res = await api.get("/cart");
  return res.data;
}

// добавить в корзину
export async function addToCart(productId: number, quantity: number = 1) {
  const res = await api.post("/cart", { productId, quantity });
  return res.data;
}

// обновить количество
export async function updateCartItem(itemId: number, quantity: number) {
  const res = await api.patch(`/cart/${itemId}`, { quantity });
  return res.data;
}

// удалить товар
export async function removeFromCart(itemId: number) {
  const res = await api.delete(`/cart/${itemId}`);
  return res.data;
}
