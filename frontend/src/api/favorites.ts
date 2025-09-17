import api from "./axios";

// получить избранные товары
export async function getFavorites() {
  const res = await api.get("/favorites");
  return res.data;
}

// добавить в избранные
export async function addFavorite(productId: number) {
  const res = await api.post("/favorites", { productId });
  return res.data;
}

// удалить из избранных
export async function removeFavorite(productId: number) {
  const res = await api.delete(`/favorites/${productId}`);
  return res.data;
}
