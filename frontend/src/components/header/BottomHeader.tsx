// 'use client';
// import { useState, ReactNode } from "react";
// import Link from "next/link";

// export default function BottomHeader() {
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);

//   return (
//     <div className="w-full bg-white border-b">
//       <div className="max-w-[1320px] mx-auto flex items-center justify-between h-12 px-4">
        
//         {/* Левая часть */}
//         <div className="flex items-center gap-6">
          
//           {/* All Category */}
//           <div
//             className="flex items-center gap-2 bg-[#F2F4F5] px-4 h-12 cursor-pointer"
//             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//           >
//             <span className="text-sm font-normal text-[#191C1F]">
//               All Category
//             </span>
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className={`transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}
//             >
//               <path
//                 d="M13 6L8 11L3 6"
//                 stroke="#191C1F"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>

//           {/* Навигация */}
//           <NavItem to="/404" icon={<TrackOrderIcon />} text="Track Order" />
//           <NavItem to="/404" icon={<CompareIcon />} text="Compare" />
//           <NavItem to="/404" icon={<CustomerSupportIcon />} text="Customer Support" />
//           <NavItem to="/404" icon={<NeedHelpIcon />} text="Need Help" />
//         </div>

//         {/* Правая часть */}
//         <div className="flex items-center gap-2">
//           <PhoneIcon />
//           <span className="text-lg font-normal text-[#191C1F]">
//             +1-202-555-0104
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// type NavItemProps = {
//   to: string;
//   icon: ReactNode;
//   text: string;
// };

// function NavItem({ to, icon, text }: NavItemProps) {
//   return (
//     <Link href={to} className="flex items-center gap-1 text-sm text-[#191C1F]">
//       {icon}
//       <span>{text}</span>
//     </Link>
//   );
// }

// // Иконки
// function TrackOrderIcon() {
//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <path d="M5.25 21.75H18.75" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// function CompareIcon() {
//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <path d="M7.48126 9.34688H2.98126V4.84688" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       <path d="M17.8313 6.16874C17.0659 5.40226 16.1569 4.79418 15.1563 4.3793C14.1558 3.96442 13.0832 3.75087 12 3.75087C10.9168 3.75087 9.84427 3.96442 8.84369 4.3793C7.8431 4.79418 6.93413 5.40226 6.16876 6.16874L2.98126 9.34687" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       <path d="M16.5187 14.6531H21.0187V19.1531" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       <path d="M6.16876 17.8313C6.93413 18.5977 7.8431 19.2058 8.84368 19.6207C9.84427 20.0356 10.9168 20.2491 12 20.2491C13.0832 20.2491 14.1558 20.0356 15.1563 19.6207C16.1569 19.2058 17.0659 18.5977 17.8313 17.8313L21.0188 14.6531" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// function CustomerSupportIcon() {
//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M21.1406 12.75H18.1406C17.7428 12.75 17.3613 12.908 17.08 13.1893C16.7987 13.4707 16.6406 13.8522 16.6406 14.25V18C16.6406 18.3978 16.7987 18.7794 17.08 19.0607C17.3613 19.342 17.7428 19.5 18.1406 19.5H19.6406C20.0384 19.5 20.42 19.342 20.7013 19.0607C20.9826 18.7794 21.1406 18.3978 21.1406 18V12.75ZM21.1406 12.75C21.1407 11.5618 20.9054 10.3853 20.4484 9.28845C19.9915 8.1916 19.3218 7.1961 18.4781 6.35938C17.6344 5.52267 16.6334 4.8613 15.5328 4.41345C14.4322 3.96559 13.2538 3.74011 12.0656 3.75001C10.8782 3.74135 9.70083 3.96775 8.60132 4.41616C7.5018 4.86458 6.50189 5.52614 5.6592 6.36273C4.81651 7.19932 4.1477 8.1944 3.69131 9.29063C3.23492 10.3869 2.99997 11.5626 3 12.75V18C3 18.3978 3.15804 18.7794 3.43934 19.0607C3.72064 19.342 4.10218 19.5 4.5 19.5H6C6.39782 19.5 6.77936 19.342 7.06066 19.0607C7.34196 18.7794 7.5 18.3978 7.5 18V14.25C7.5 13.8522 7.34196 13.4707 7.06066 13.1893C6.77936 12.908 6.39782 12.75 6 12.75H3" stroke="#5F6C72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

//   );
// }

// function NeedHelpIcon() {
//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       <path d="M11.25 11.25H12V16.5H12.75" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       <path d="M11.8125 7.5C12.0196 7.5 12.1875 7.66789 12.1875 7.875C12.1875 8.08211 12.0196 8.25 11.8125 8.25C11.6054 8.25 11.4375 8.08211 11.4375 7.875C11.4375 7.66789 11.6054 7.5 11.8125 7.5Z" fill="#191C1F" stroke="#5F6C72" strokeWidth="1.5"/>
//     </svg>
//   );
// }

// function PhoneIcon() {
//   return (
//      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M17.4343 4.375C18.9185 4.77332 20.2718 5.55499 21.3584 6.64159C22.445 7.72818 23.2266 9.08147 23.625 10.5656" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M16.5266 7.75468C17.4192 7.99175 18.2333 8.46057 18.8864 9.11364C19.5395 9.7667 20.0083 10.5808 20.2454 11.4734" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M10.1172 13.65C11.0176 15.5094 12.5211 17.0091 14.3828 17.9047C14.5201 17.9697 14.672 17.9979 14.8235 17.9864C14.975 17.9748 15.1209 17.9241 15.2469 17.8391L17.9812 16.0125C18.1021 15.9306 18.2417 15.8806 18.387 15.8672C18.5324 15.8538 18.6788 15.8775 18.8125 15.9359L23.9312 18.1344C24.1062 18.2072 24.2524 18.3355 24.3472 18.4995C24.4421 18.6636 24.4804 18.8542 24.4562 19.0422C24.294 20.3085 23.6759 21.4722 22.7177 22.3158C21.7594 23.1593 20.5266 23.6247 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75001C4.37529 7.47338 4.84073 6.24059 5.68425 5.28233C6.52776 4.32407 7.69153 3.70599 8.95781 3.54376C9.14576 3.51961 9.33643 3.55792 9.50047 3.65279C9.66451 3.74765 9.79281 3.89381 9.86562 4.06876L12.0641 9.19844C12.1212 9.33007 12.1451 9.47374 12.1337 9.6168C12.1223 9.75985 12.0758 9.89789 11.9984 10.0188L10.1719 12.7969C10.0906 12.9225 10.0428 13.0669 10.0333 13.2163C10.0237 13.3657 10.0526 13.515 10.1172 13.65V13.65Z" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

    
//   );
// }

'use client';
import { useState, ReactNode } from "react";
import Link from "next/link";

export default function BottomHeader() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
  { id: 3, name: "Computer & Laptop", href: "/category/computer-and-laptop" },
  { id: 4, name: "Computer Accessories", href: "/category/computer-accessories" },
  { id: 5, name: "SmartPhone", href: "/category/smartphone" },
  { id: 6, name: "Headphone", href: "/category/headphone" },
  { id: 7, name: "Mobile Accessories", href: "/category/mobile-accessories" },
  { id: 8, name: "Gaming Console", href: "/category/gaming-console" },
  { id: 9, name: "Camera & Photo", href: "/category/camera-and-photo" },
  { id: 10, name: "TV & Homes Appliances", href: "/category/tv-and-homes-appliances" },
  { id: 11, name: "Watchs & Accessories", href: "/category/watchs-and-accessories" },
  { id: 12, name: "GPS & Navigation", href: "/category/gps-and-navigation" },
  { id: 13, name: "Warable Technology", href: "/category/warable-technology" },
];


  return (
    <div className="w-full bg-white border-b relative">
      {/* Основной контейнер с адаптивными отступами */}
      <section className="px-4 md:px-24 lg:px-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between h-12">
            {/* Левая часть */}
            <div className="flex items-center gap-2 md:gap-6">
              {/* Бургер меню для мобилок */}
              <button
                className="md:hidden flex items-center mr-2"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>

              {/* All Category */}
              <div
                className="hidden md:flex items-center gap-2 bg-[#F2F4F5] px-4 h-10 cursor-pointer relative"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <span className="text-sm font-normal text-[#191C1F]">
                  All Category
                </span>
                <svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
  className={`transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}
>
  <path
    d="M12 6L8 10L4 6"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>


                {/* Выпадающее меню для десктопа */}
                {isCategoryOpen && (
                  <div className="absolute top-10 left-0 bg-white border shadow-lg rounded-md w-56 z-50">
                    <ul className="py-2">
                      {categories.map((cat) => (
                        <li key={cat.name}>
                          <Link
                            href={cat.href}
                            className="block px-4 py-2 text-sm text-[#191C1F] hover:bg-gray-100"
                            onClick={() => setIsCategoryOpen(false)}
                          >
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Навигация (скрыта на мобильных) */}
              <div className="hidden md:flex items-center gap-4">
                <NavItem to="/track-order" icon={<TrackOrderIcon />} text="Track Order" />
                <NavItem to="/track-order" icon={<CompareIcon />} text="Compare" />
                <NavItem to="/404" icon={<CustomerSupportIcon />} text="Customer Support" />
                <NavItem to="/404" icon={<NeedHelpIcon />} text="Need Help" />
              </div>
            </div>

            {/* Правая часть (телефон) */}
            <div className="hidden md:flex items-center gap-2">
              <PhoneIcon />
              <span className="text-lg font-normal text-[#191C1F]">
                +1-202-555-0104
              </span>
            </div>

            {/* Мобильная кнопка категорий */}
            <button
              className="md:hidden flex items-center gap-2 bg-[#F2F4F5] px-3 h-10"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <span className="text-sm font-normal text-[#191C1F]">
                Categories
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M13 6L8 11L3 6"
                  stroke="#191C1F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Выпадающее меню категорий для мобилок */}
      {isCategoryOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="px-4">
            <ul className="py-3 space-y-2">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="block py-2 text-sm text-[#191C1F]"
                    onClick={() => setIsCategoryOpen(false)}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Боковое меню для мобилок */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50">
          <div className="bg-white w-4/5 h-full p-4 flex flex-col animate-slide-in">
            <button
              className="self-end mb-4 text-xl"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            
            <div className="flex flex-col gap-4">
              <MobileNavItem to="/404" icon={<TrackOrderIcon />} text="Track Order" />
              <MobileNavItem to="/404" icon={<CompareIcon />} text="Compare" />
              <MobileNavItem to="/404" icon={<CustomerSupportIcon />} text="Customer Support" />
              <MobileNavItem to="/404" icon={<NeedHelpIcon />} text="Need Help" />
            </div>
            
            <div className="mt-auto pt-4 border-t">
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <span className="text-lg font-normal text-[#191C1F]">
                  +1-202-555-0104
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type NavItemProps = {
  to: string;
  icon: ReactNode;
  text: string;
};

function NavItem({ to, icon, text }: NavItemProps) {
  return (
    <Link href={to} className="flex items-center gap-1 text-sm text-[#191C1F] hover:text-blue-600 transition-colors">
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

function MobileNavItem({ to, icon, text }: NavItemProps) {
  return (
    <Link href={to} className="flex items-center gap-3 py-2 text-base text-[#191C1F]">
      <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

// Иконки остаются без изменений
function TrackOrderIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5.25 21.75H18.75" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7.48126 9.34688H2.98126V4.84688" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.8313 6.16874C17.0659 5.40226 16.1569 4.79418 15.1563 4.3793C14.1558 3.96442 13.0832 3.75087 12 3.75087C10.9168 3.75087 9.84427 3.96442 8.84369 4.3793C7.8431 4.79418 6.93413 5.40226 6.16876 6.16874L2.98126 9.34687" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5187 14.6531H21.0187V19.1531" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.16876 17.8313C6.93413 18.5977 7.8431 19.2058 8.84368 19.6207C9.84427 20.0356 10.9168 20.2491 12 20.2491C13.0832 20.2491 14.1558 20.0356 15.1563 19.6207C16.1569 19.2058 17.0659 18.5977 17.8313 17.8313L21.0188 14.6531" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CustomerSupportIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.1406 12.75H18.1406C17.7428 12.75 17.3613 12.908 17.08 13.1893C16.7987 13.4707 16.6406 13.8522 16.6406 14.25V18C16.6406 18.3978 16.7987 18.7794 17.08 19.0607C17.3613 19.342 17.7428 19.5 18.1406 19.5H19.6406C20.0384 19.5 20.42 19.342 20.7013 19.0607C20.9826 18.7794 21.1406 18.3978 21.1406 18V12.75ZM21.1406 12.75C21.1407 11.5618 20.9054 10.3853 20.4484 9.28845C19.9915 8.1916 19.3218 7.1961 18.4781 6.35938C17.6344 5.52267 16.6334 4.8613 15.5328 4.41345C14.4322 3.96559 13.2538 3.74011 12.0656 3.75001C10.8782 3.74135 9.70083 3.96775 8.60132 4.41616C7.5018 4.86458 6.50189 5.52614 5.6592 6.36273C4.81651 7.19932 4.1477 8.1944 3.69131 9.29063C3.23492 10.3869 2.99997 11.5626 3 12.75V18C3 18.3978 3.15804 18.7794 3.43934 19.0607C3.72064 19.342 4.10218 19.5 4.5 19.5H6C6.39782 19.5 6.77936 19.342 7.06066 19.0607C7.34196 18.7794 7.5 18.3978 7.5 18V14.25C7.5 13.8522 7.34196 13.4707 7.06066 13.1893C6.77936 12.908 6.39782 12.75 6 12.75H3" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function NeedHelpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.25 11.25H12V16.5H12.75" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.8125 7.5C12.0196 7.5 12.1875 7.66789 12.1875 7.875C12.1875 8.08211 12.0196 8.25 11.8125 8.25C11.6054 8.25 11.4375 8.08211 11.4375 7.875C11.4375 7.66789 11.6054 7.5 11.8125 7.5Z" fill="#191C1F" stroke="#5F6C72" strokeWidth="1.5"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4343 4.375C18.9185 4.77332 20.2718 5.55499 21.3584 6.64159C22.445 7.72818 23.2266 9.08147 23.625 10.5656" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5266 7.75468C17.4192 7.99175 18.2333 8.46057 18.8864 9.11364C19.5395 9.7667 20.0083 10.5808 20.2454 11.4734" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.1172 13.65C11.0176 15.5094 12.5211 17.0091 14.3828 17.9047C14.5201 17.9697 14.672 17.9979 14.8235 17.9864C14.975 17.9748 15.1209 17.9241 15.2469 17.8391L17.9812 16.0125C18.1021 15.9306 18.2417 15.8806 18.387 15.8672C18.5324 15.8538 18.6788 15.8775 18.8125 15.9359L23.9312 18.1344C24.1062 18.2072 24.2524 18.3355 24.3472 18.4995C24.4421 18.6636 24.4804 18.8542 24.4562 19.0422C24.294 20.3085 23.6759 21.4722 22.7177 22.3158C21.7594 23.1593 20.5266 23.6247 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75001C4.37529 7.47338 4.84073 6.24059 5.68425 5.28233C6.52776 4.32407 7.69153 3.70599 8.95781 3.54376C9.14576 3.51961 9.33643 3.55792 9.50047 3.65279C9.66451 3.74765 9.79281 3.89381 9.86562 4.06876L12.0641 9.19844C12.1212 9.33007 12.1451 9.47374 12.1337 9.6168C12.1223 9.75985 12.0758 9.89789 11.9984 10.0188L10.1719 12.7969C10.0906 12.9225 10.0428 13.0669 10.0333 13.2163C10.0237 13.3657 10.0526 13.515 10.1172 13.65V13.65Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}