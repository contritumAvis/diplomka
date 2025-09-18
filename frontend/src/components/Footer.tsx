// frontend/src/components/Footer.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { usePathname } from "next/navigation";

const categories = [
  { id: 3, name: "Computer & Laptop", slug: "computer-and-laptop" },
  { id: 4, name: "Computer Accessories", slug: "computer-accessories" },
  { id: 5, name: "SmartPhone", slug: "smartphone" },
  { id: 6, name: "Headphone", slug: "headphone" },
  { id: 7, name: "Mobile Accessories", slug: "mobile-accessories" },
  { id: 8, name: "Gaming Console", slug: "gaming-console" },
];

const quickLinks = [
  "Shop Product",
  "Shoping Cart",
  "Wishlist",
  "Compare",
  "Track Order",
  "Customer Help",
  "About Us",
];

const brands = [
  "Apple",
  "Samsung",
  "Asus",
  "Acer",
  "MSI",
  "Razer",
  "Sony",
  "LG",
  "Xiaomi",
  "Dell",
];

export default function Footer() {
  const pathname = usePathname() ?? ""; // ✅ всегда строка

  return (
    <footer className="bg-gray-900 text-gray-400 w-full">
      {/* Верхняя часть футера */}
      <div className="pt-12 pb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 1. Логотип + Контакты */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="w-[177px] h-[48px]">
                <Image
                  src="/footerlogo.svg"
                  alt="Logo"
                  width={177}
                  height={48}
                />
              </Link>

              <div className="flex flex-col gap-3 text-sm leading-[20px]">
                <p className="text-gray-300">Customer Supports:</p>
                <p className="text-lg font-medium text-gray-50">(629) 555-0129</p>
                <p className="text-gray-300 text-base leading-6">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>
                <p className="font-medium text-gray-50 text-base">
                  info@kinbo.com
                </p>
              </div>
            </div>

            {/* 2. Категории */}
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-base text-gray-50 mb-3">
                Top Category
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className={`text-sm font-medium ${
                      pathname.includes(cat.slug)
                        ? "text-gray-50"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))}
                <Link
                  href="/"
                  className="text-sm font-medium text-amber-500 hover:text-amber-400"
                >
                  Browse All Product
                </Link>
              </div>
            </div>

            {/* 3. Быстрые ссылки */}
            <div className="flex flex-col gap-3">
              <h3 className="uppercase font-medium text-gray-50 mb-3">
                Quick links
              </h3>
              <div className="flex flex-col gap-2">
                {quickLinks.map((link, i) => (
                  <Link
                    key={i}
                    href="/track-order"
                    className="text-sm font-medium text-gray-400 hover:text-gray-200"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* 4. Download App */}
            <div className="flex flex-col gap-4">
              <Image
                src="/downloadshop.svg"
                alt="Download Shop"
                width={200}
                height={192}
                className="cursor-pointer"
              />
            </div>

            {/* 5. Popular Tags */}
            <div className="flex flex-col gap-4">
              <h3 className="uppercase font-medium text-gray-50">Popular Tag</h3>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand, i) => {
                  const isActive = pathname.includes(brand.toLowerCase());
                  return (
                    <span
                      key={i}
                      className={`px-2 py-1 text-sm font-medium border rounded ${
                        isActive
                          ? "border-2 border-white text-gray-50"
                          : "border border-gray-800 text-gray-400"
                      }`}
                    >
                      {brand}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Нижняя часть футера */}
      <div className="border-t border-gray-800 py-6">
        <Container>
          <p className="text-center text-sm text-gray-400">
            Kinbo - eCommerce Template © 2021. Design by Templatecookie
          </p>
        </Container>
      </div>
    </footer>
  );
}
