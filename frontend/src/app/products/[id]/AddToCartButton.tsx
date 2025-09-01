"use client";

export default function AddToCartButton({ product }: { product: any }) {
  const addToCart = () => {
    const key = "cart";
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    const found = current.find((i: any) => i.id === product.id);

    if (found) {
      found.qty += 1;
    } else {
      current.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        qty: 1,
      });
    }

    localStorage.setItem(key, JSON.stringify(current));
    alert("Добавлено в корзину");
  };

  return (
    <button
      onClick={addToCart}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      В корзину
    </button>
  );
}
