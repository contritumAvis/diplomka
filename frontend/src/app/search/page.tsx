// frontend/src/app/search/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import Container from "@/components/ui/Container";
import api from "@/api/axios";
import Breadcrumbs from "@/components/Breadcrumbs";

type Product = {
  id: number;
  name: string;
  basePrice?: number;
  price: number;
  thumbnail?: string;
  imageUrl?: string;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products`, {
          params: { search: query }, // предполагается, что API умеет фильтровать по search
        });
        setProducts(res.data);
      } catch (err) {
        console.error("Ошибка при поиске товаров:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <Container>
      {/* Хлебные крошки */}
      

      <h1 className="text-2xl font-semibold my-6">Search results for: "{query}"</h1>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                basePrice: product.basePrice ?? product.price,
                thumbnail: product.thumbnail ?? product.imageUrl ?? "/no-image.png",
              }}
            />
          ))}
        </div>
      )}
    </Container>
  );
}
