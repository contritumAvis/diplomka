'use client';
import Link from 'next/link';

export default function MiddleHeader() {
  return (
    <div className="bg-[#1B6392] w-full">
      <section className="px-4 md:px-24 lg:px-28">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[96px]">
          
          
          <div className="flex-shrink-0">
            <img src="/clicon.svg" alt="Clicon" className="h-8 w-auto" />
          </div>

          {/* Поиск */}
          <div className="flex-grow flex justify-center px-4">
            <div className="relative w-full max-w-[646px]">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full h-[48px] rounded-md bg-white text-[14px] font-[400] leading-[20px] pl-4 pr-12 text-black placeholder-gray-500 outline-none"
                style={{
                  fontFamily: 'Public Sans, sans-serif'
                }}
              />
              <img
                src="/lupa.svg"
                alt="Search"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
          </div>

          {/* Иконки справа */}
          <div className="flex items-center justify-end flex-shrink-0 gap-4 w-[144px] h-[32px]">
            <Link href="/404">
              <img src="/shopping.svg" alt="Cart" className="w-5 h-5" />
            </Link>
            <Link href="/404">
              <img src="/heart.svg" alt="Favorites" className="w-5 h-5" />
            </Link>
            <Link href="/404">
              <img src="/user.svg" alt="User" className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
