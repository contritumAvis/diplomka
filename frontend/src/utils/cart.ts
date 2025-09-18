// frontend/src/utils/cart.ts
import api from "@/api/axios";

export const addToCart = async (productId: number, variantId?: number) => {
  try {
    const response = await api.post("/cart", {
      productId,
      variantId, // может быть undefined
      quantity: 1,
    });

    return response.data;
  } catch (error: any) {
    console.error("Ошибка при добавлении в корзину:", error);
    throw error;
  }
};
