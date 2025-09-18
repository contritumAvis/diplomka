// frontend/src/app/track-order/page.tsx
"use client";

import React, { useState } from "react";
import TopHeader from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");

  const handleTrackClick = () => {
    alert("ВВЕДУТСЯ ТЕХНИЧЕСКИЕ РАБОТЫ");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <BottomHeader />

      <Container className="pt-12 pb-32">
        {/* Верхняя текстовая часть */}
        <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-900 font-semibold text-[32px] leading-[40px]">
              Track Order
            </h1>
            <p className="text-gray-600 font-normal text-[16px] leading-[24px] max-w-[760px]">
              To track your order please enter your order ID in the input field
              below and press the “Track Order” button. This was given to you on
              your receipt and in the confirmation email you should have received.
            </p>
          </div>

          {/* Поля ввода */}
          <div className="flex flex-wrap gap-6 mt-6">
            {/* Левый блок Order ID */}
            <div className="flex flex-col gap-2 w-[424px]">
              <label
                htmlFor="orderId"
                className="text-gray-900 font-normal text-[14px] leading-[20px]"
              >
                Order ID
              </label>
              <input
                id="orderId"
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="h-[44px] border border-gray-300 rounded-[2px] px-3"
                placeholder="Enter your Order ID"
              />
              <span className="text-gray-600 text-[14px] leading-[20px]">
                Order ID that we sended to you in your email address.
              </span>
            </div>

            {/* Правый блок Email */}
            <div className="flex flex-col gap-2 w-[424px]">
              <label
                htmlFor="email"
                className="text-gray-900 font-normal text-[14px] leading-[20px]"
              >
                Billing Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[44px] border border-gray-300 rounded-[2px] px-3"
                placeholder="Enter your Email"
              />
            </div>
          </div>

          {/* Кнопка */}
          <div className="mt-8">
            <button
              onClick={handleTrackClick}
              className="flex items-center justify-center w-[217px] h-[56px] px-8 py-3 bg-gray-800 text-white rounded-[3px] transform transition-transform duration-200 hover:scale-105"
            >
              {/* Если нужно вставить SVG, вставь сюда */}
              <span>Track Order</span>
            </button>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
