"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import api from "@/api/axios";
import { useUser } from "@/context/UserContext";

type ProductInfoActionsProps = {
  productId: number;
  showToast: (message: string) => void;
};

const ProductInfoActions: React.FC<ProductInfoActionsProps> = ({ productId, showToast }) => {
  const router = useRouter();
  const { user } = useUser();
  const [favLoading, setFavLoading] = useState(false);

  const handleAddToWishlist = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user?.id) return showToast("Сначала авторизуйся!");

    try {
      setFavLoading(true);
      const response = await api.post("/favorites", { productId });
      showToast(response.data?.message || "Добавлено в избранное ❤️");
    } catch (err: any) {
      console.error(err);
      showToast(err.response?.data?.message || "Ошибка при добавлении в избранное");
    } finally {
      setFavLoading(false);
    }
  };

  const handleAddToCompare = () => {
    router.push("/404");
  };

  const handleShareProduct = () => {
    console.log("Share product", productId);
  };

  return (
    <div className="flex items-center justify-between w-[648px] py-[24px] px-0">
      {/* Wishlist */}
      <div
        className={`flex items-center cursor-pointer ${favLoading ? "opacity-50" : ""}`}
        onClick={handleAddToWishlist}
      >
        <Image src="/htr.svg" width={24} height={24} alt="Wishlist" />
        <span className="ml-[6px] text-gray-700 font-normal text-[14px] leading-[20px]">
          Add to Wishlist
        </span>
      </div>

      {/* Compare */}
      <div className="flex items-center cursor-pointer ml-[24px]" onClick={handleAddToCompare}>
        <Image src="/comppp.svg" width={24} height={24} alt="Compare" />
        <span className="ml-[6px] text-gray-700 font-normal text-[14px] leading-[20px]">
          Add to Compare
        </span>
      </div>

      {/* Share */}
      <div className="flex items-center ml-[144px] cursor-pointer" onClick={handleShareProduct}>
        <span className="text-[14px] font-normal leading-[20px] text-[#475156]">
          Share product:
        </span>
        <Image src="/ptichka.svg" width={108} height={24} alt="Share" className="ml-[12px]" />
      </div>
    </div>
  );
};

export default ProductInfoActions;
