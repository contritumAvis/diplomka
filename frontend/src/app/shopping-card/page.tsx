"use client";

import React from "react";
import TopHeader from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ShoppingCartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopHeader />
      <BottomHeader />

      <main className="flex justify-center w-full px-4 md:px-8 lg:px-16 mt-6 mb-16">
        <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-6">
          {/* Левая колонка */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Блок Shopping Cart */}
            <div className="w-full max-w-[872px] h-[64px] flex items-center pl-6 pr-6 pt-5 pb-5 bg-white shadow border border-gray-200">
              <h1 className="font-medium text-[18px] leading-6 text-gray-900">
                Shopping Cart
              </h1>
            </div>

            {/* SVG блок под Shopping Cart */}
            <div className="w-full max-w-[872px] h-[38px] flex items-center pl-6 pr-6 pt-2 pb-2 border border-gray-200 bg-white">
              <img src="/gpgp.svg" alt="GPGP" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col gap-6 w-full max-w-[424px]">
            {/* Card Totals */}
            <div className="flex flex-col justify-between w-full h-[344px] border border-gray-200 rounded-md bg-white p-6">
              <div className="h-[64px] flex items-center">
                <span className="font-medium text-[18px] text-gray-900">
                  Card Totals
                </span>
              </div>
              {/* SVG кнопка внутри Card Totals */}
              <div className="mt-auto mb-6">
                <svg
                  width="376"
                  height="56"
                  viewBox="0 0 376 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="376" height="56" rx="3" fill="#FA8232" />
                  <path
                    d="M71.296 34V22.432H75.552C76.3947 22.432 77.1493 22.5787 77.816 22.872C78.4827 23.16 79.008 23.5867 79.392 24.152C79.7813 24.7173 79.976 25.408 79.976 26.224C79.976 26.992 79.8053 27.648 79.464 28.192C79.1227 28.736 78.6427 29.152 78.024 29.44C77.4107 29.728 76.688 29.872 75.856 29.872H73.648V34H71.296ZM73.624 28.064H75.792C76.3787 28.064 76.8587 27.8773 77.232 27.504C77.6053 27.1253 77.792 26.6587 77.792 26.104C77.792 25.528 77.5947 25.072 77.2 24.736C76.8053 24.3947 76.3253 24.224 75.76 24.224H73.624V28.064Z"
                    fill="white"
                  />
                  <path d="M285.75 28H302.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M295.5 21.25L302.25 28L295.5 34.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="flex flex-col w-full h-[220px] gap-6 border border-gray-200 rounded-md bg-white p-6">
              <div className="h-[64px] flex items-center border border-gray-100 pl-6 pr-6 pt-5 pb-5">
                <span className="font-medium text-[18px] text-gray-900">
                  Coupon Code
                </span>
              </div>

              {/* Мини-блок Email Input */}
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-[44px] border border-gray-200 rounded-sm px-3 text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* SVG кнопка */}
                <svg
                  width="159"
                  height="48"
                  viewBox="0 0 159 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <rect width="159" height="48" rx="2" fill="#2DA5F3" />
                  <path
                    d="M24.385 29L28.011 18.878H30.167L33.786 29H31.749L30.923 26.655H27.283L26.436 29H24.385ZM27.738 24.87H30.433L29.096 20.852L27.738 24.87Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
