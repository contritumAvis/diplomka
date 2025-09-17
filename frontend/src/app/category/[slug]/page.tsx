// "use client";

// import { use } from "react";
// import { useState } from "react";

// const brands = [
//   "Apple", "Asus", "Acer", "Dell", "HP", "Lenovo", "MSI", "Logitech",
//   "Razer", "Corsair", "SteelSeries", "HyperX", "Microsoft", "Redragon",
//   "Samsung", "Xiaomi", "Oppo", "Vivo", "Huawei", "Realme", "Sony", "Bose",
//   "Sennheiser", "Beats", "JBL", "Bang & Olufsen", "Anker", "Baseus", "Spigen",
//   "Ugreen", "Rock", "Remax", "Nillkin", "Sony PlayStation", "Microsoft Xbox",
//   "Nintendo", "Canon", "Nikon", "Fujifilm", "Panasonic", "Olympus", "Leica",
//   "LG", "Philips", "TCL", "Hisense", "Garmin", "Fitbit", "Casio", "Seiko",
//   "Fossil", "TomTom", "Magellan", "Navitel", "Pioneer", "Mio", "Amazfit"
// ];

// export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = use(params); // ✅ правильно в Next.js 15

//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

//   const toggleBrand = (brand: string) => {
//     setSelectedBrands((prev) =>
//       prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
//     );
//   };

//   return (
//     <div className="flex max-w-[1440px] mx-auto px-4 md:px-8 py-6 gap-6">
//       {/* Фильтр */}
//       <aside className="w-64 border-r pr-4">
//         <h2 className="text-lg font-semibold mb-4">Бренды</h2>
//         <ul className="space-y-2 max-h-[400px] overflow-y-auto">
//           {brands.map((brand) => (
//             <li key={brand}>
//               <label className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selectedBrands.includes(brand)}
//                   onChange={() => toggleBrand(brand)}
//                 />
//                 {brand}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Список товаров */}
//       <main className="flex-1">
//         <h1 className="text-2xl font-bold mb-6">
//           Категория: {slug.replace("-", " ")}
//         </h1>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {/* Заглушка под товары */}
//           <div className="border rounded-lg p-4">Товар 1</div>
//           <div className="border rounded-lg p-4">Товар 2</div>
//           <div className="border rounded-lg p-4">Товар 3</div>
//         </div>
//       </main>
//     </div>
//   );
// }











// "use client";

// import { use, useState, useEffect } from "react";
// import axios from "axios";

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   imageUrl?: string;
//   brand?: { name: string };
// };

// export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = use(params);

//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/categories/${slug}/products`);
//         setProducts(res.data);
//       } catch (error) {
//         console.error("Ошибка загрузки товаров:", error);
//       }
//     }
//     fetchProducts();
//   }, [slug]);

//   const toggleBrand = (brand: string) => {
//     setSelectedBrands((prev) =>
//       prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
//     );
//   };

//   // Фильтрация товаров по выбранным брендам
//   const filteredProducts =
//     selectedBrands.length > 0
//       ? products.filter((p) => p.brand && selectedBrands.includes(p.brand.name))
//       : products;

//   return (
//     <div className="flex max-w-[1440px] mx-auto px-4 md:px-8 py-6 gap-6">
//       {/* Фильтр */}
//       <aside className="w-64 border-r pr-4">
//         <h2 className="text-lg font-semibold mb-4">Бренды</h2>
//         <ul className="space-y-2 max-h-[400px] overflow-y-auto">
//           {[...new Set(products.map((p) => p.brand?.name).filter(Boolean))].map((brand) => (
//             <li key={brand}>
//               <label className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selectedBrands.includes(brand!)}
//                   onChange={() => toggleBrand(brand!)}
//                 />
//                 {brand}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Список товаров */}
//       <main className="flex-1">
//         <h1 className="text-2xl font-bold mb-6">
//           Категория: {slug.replace("-", " ")}
//         </h1>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((p) => (
//               <div key={p.id} className="border rounded-lg p-4">
//                 <img
//                   src={p.imageUrl || "/placeholder.png"}
//                   alt={p.name}
//                   className="w-full h-40 object-cover rounded"
//                 />
//                 <h2 className="mt-2 font-semibold">{p.name}</h2>
//                 <p className="text-sm text-gray-500">{p.brand?.name}</p>
//                 <p className="font-bold">{p.price} ₸</p>
//               </div>
//             ))
//           ) : (
//             <p>Нет товаров</p>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }























// "use client";
// import { use, useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

// type Brand = {
//   id: number;
//   name: string;
//   slug: string;
// };

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   thumbnail?: string;
//   brand?: Brand;
// };

// type Category = {
//   id: number;
//   name: string;
//   slug: string;
//   brands: Brand[];
//   products: Product[];
// };

// export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = use(params);

//   const [category, setCategory] = useState<Category | null>(null);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/categories/${slug}`);

//         // 🔹 Приводим данные (thumbnail → картинка, basePrice → price)
//         const formatted = {
//           ...res.data,
//           products: res.data.products.map((p: any) => ({
//             ...p,
//             price: p.basePrice,
//             thumbnail: p.thumbnail,
//           })),
//         };

//         setCategory(formatted);
//       } catch (error) {
//         console.error("Ошибка загрузки категории:", error);
//         setCategory(null);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [slug]);

//   if (loading) return <p className="p-6">Загрузка...</p>;
//   if (!category) return <p className="p-6">Категория не найдена</p>;

//   const toggleBrand = (brandSlug: string) => {
//     setSelectedBrands((prev) =>
//       prev.includes(brandSlug) ? prev.filter((b) => b !== brandSlug) : [...prev, brandSlug]
//     );
//   };

//   const filteredProducts =
//     selectedBrands.length > 0
//       ? category.products.filter((p) => p.brand && selectedBrands.includes(p.brand.slug))
//       : category.products;

//   return (
//     <div className="flex max-w-[1440px] mx-auto px-4 md:px-8 py-6 gap-6">
//       {/* Фильтр */}
//       <aside className="w-64 border-r pr-4">
//         <h2 className="text-lg font-semibold mb-4">Бренды</h2>
//         <ul className="space-y-2 max-h-[400px] overflow-y-auto">
//           {category?.brands?.map((brand) => (
//             <li key={brand.id}>
//               <label className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input type="checkbox" onChange={() => toggleBrand(brand.slug)} />
//                 {brand.name}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Список товаров */}
//       <main className="flex-1">
//         <h1 className="text-2xl font-bold mb-6">Категория: {category.name}</h1>
//         {filteredProducts.length === 0 ? (
//           <p>Нет товаров</p>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {filteredProducts.map((p) => (
//               <Link
//                 key={p.id}
//                 href={`/products/${p.id}`}
//                 className="border rounded-lg p-4 block hover:shadow-md transition"
//               >
//                 {p.thumbnail && (
//                   <img
//                     src={p.thumbnail}
//                     alt={p.name}
//                     className="w-full h-40 object-cover mb-2"
//                   />
//                 )}
//                 <h2 className="font-semibold">{p.name}</h2>
//                 <p className="text-gray-600">{p.price} ₸</p>
//               </Link>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import Container from "@/components/ui/Container";
// import ProductCard from "@/components/ProductCard";
// import Footer from "@/components/Footer";

// // 🔹 Категории
// const categories = [
//   { id: 0, name: "Electronics Devices" },
//   { id: 3, name: "Computer & Laptop" },
//   { id: 4, name: "Computer Accessories" },
//   { id: 5, name: "SmartPhone" },
//   { id: 6, name: "Headphone" },
//   { id: 7, name: "Mobile Accessories" },
//   { id: 8, name: "Gaming Console" },
//   { id: 9, name: "Camera & Photo" },
//   { id: 10, name: "TV & Homes Appliances" },
//   { id: 11, name: "Watchs & Accessories" },
//   { id: 12, name: "GPS & Navigation" },
//   { id: 13, name: "Warable Technology" },
// ];

// // 🔹 Брэнды
// const brands = [
//   "Apple", "Asus", "Acer", "HP", "Lenovo", "Logitech", "Microsoft",
//   "Samsung", "Xiaomi", "Huawei", "Realme", "Sony", "JBL",
//   "Sony PlayStation", "Microsoft Xbox", "Nintendo", "Canon", "LG"
// ];

// export default function CategoriesPage() {
//   const [selectedCategory, setSelectedCategory] = useState("Electronics Devices");
//   const [priceRange, setPriceRange] = useState([0, 10000]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [search, setSearch] = useState("");

//   const toggleBrand = (brand: string) => {
//     setSelectedBrands((prev) =>
//       prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
//     );
//   };

//   // 🔹 Фильтр товаров (пока заглушка)
//   const products = Array.from({ length: 24 }, (_, i) => ({
//     id: i + 1,
//     name: `Product ${i + 1}`,
//     basePrice: 1000 + i * 200,
//     image: "https://via.placeholder.com/202x172?text=Product",
//   }));

//   return (
//     <Container className="mt-10">
//       <div className="grid grid-cols-[312px_1fr] gap-8">
//         {/* ===== Левая колонка ===== */}
//         <div className="flex flex-col gap-6">
//           {/* 🔹 Categories */}
//           <div>
//             <h2 className="text-gray-900 font-medium text-sm uppercase">Category</h2>
//             <div className="mt-4 flex flex-col gap-4">
//               {categories.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => setSelectedCategory(cat.name)}
//                   className="flex items-center gap-2 text-sm font-medium text-gray-900"
//                 >
//                   <span
//                     className={`w-5 h-5 rounded-full border flex items-center justify-center ${
//                       selectedCategory === cat.name
//                         ? "border-primary-500 bg-white"
//                         : "border-gray-200 bg-white"
//                     }`}
//                   >
//                     {selectedCategory === cat.name && (
//                       <span className="w-2 h-2 rounded-full bg-primary-500" />
//                     )}
//                   </span>
//                   {cat.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <hr className="border-gray-100 my-6" />

//           {/* 🔹 Price Range */}
//           <div>
//             <h2 className="text-gray-900 font-medium text-sm uppercase">Price Range</h2>
//             <div className="mt-4">
//               {/* Ползунок (заглушка) */}
//               <div className="w-full h-3 bg-gray-100 relative rounded">
//                 <div className="absolute left-1/4 right-1/4 h-3 bg-primary-500 rounded" />
//               </div>
//               {/* Min / Max */}
//               <div className="flex justify-between gap-3 mt-4">
//                 <input
//                   type="number"
//                   className="w-1/2 border rounded px-2 py-1 text-sm text-gray-500"
//                   placeholder="Min price"
//                   value={priceRange[0]}
//                   onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
//                 />
//                 <input
//                   type="number"
//                   className="w-1/2 border rounded px-2 py-1 text-sm text-gray-500"
//                   placeholder="Max price"
//                   value={priceRange[1]}
//                   onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
//                 />
//               </div>
//               {/* Фильтры цен */}
//               <div className="mt-4 flex flex-col gap-3">
//                 {["All Price","Under $20","$25 to $100","$100 to $300","$300 to $500","$500 to $1,000","$1,000 to $10,000"].map((label) => (
//                   <label key={label} className="flex items-center gap-2 text-sm text-gray-700">
//                     <input type="radio" name="price" className="w-5 h-5 border-gray-200" />
//                     {label}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <hr className="border-gray-100 my-6" />

//           {/* 🔹 Popular Brands */}
//           <div>
//             <h2 className="text-gray-900 font-medium text-sm uppercase">Popular Brands</h2>
//             <div className="mt-4 grid grid-cols-2 gap-3">
//               {brands.map((brand) => (
//                 <button
//                   key={brand}
//                   onClick={() => toggleBrand(brand)}
//                   className="flex items-center gap-2 text-sm text-gray-700"
//                 >
//                   <span
//                     className={`w-5 h-5 flex items-center justify-center border rounded-sm ${
//                       selectedBrands.includes(brand)
//                         ? "bg-primary-500 border-primary-500 text-white"
//                         : "bg-white border-gray-200"
//                     }`}
//                   >
//                     {selectedBrands.includes(brand) && "✓"}
//                   </span>
//                   {brand}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <hr className="border-gray-100 my-6" />

//           {/* 🔹 SVG блок (заглушки) */}
//           <div className="border rounded p-8 flex flex-col items-center gap-6">
//             <div className="w-[180px] h-[180px] bg-gray-200 flex items-center justify-center">watch.svg</div>
//             <div className="w-[248px] h-[175px] bg-gray-200 flex items-center justify-center">series.svg</div>
//             <div className="flex flex-col gap-3">
//               <div className="w-[248px] h-[48px] bg-gray-200 flex items-center justify-center">add.svg</div>
//               <div className="w-[248px] h-[48px] bg-gray-200 flex items-center justify-center">view.svg</div>
//             </div>
//           </div>
//         </div>

//         {/* ===== Правая колонка ===== */}
//         <div className="flex flex-col">
//           {/* 🔹 Search */}
//           <div className="flex items-center border rounded px-4 py-2 w-[424px]">
//             <input
//               type="text"
//               placeholder="Search for anything..."
//               className="flex-1 text-sm text-gray-500 outline-none"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <span className="w-5 h-5 bg-gray-300 rounded" />
//           </div>

//           {/* 🔹 Active Filters */}
//           <div className="flex justify-between items-center bg-gray-50 rounded mt-4 px-6 py-3">
//             <div className="flex items-center gap-4">
//               <span className="text-sm text-gray-700">Active Filters:</span>
//               {selectedBrands.map((b) => (
//                 <span key={b} className="text-sm text-gray-700 flex items-center gap-1">
//                   {b} <button className="text-gray-500">✕</button>
//                 </span>
//               ))}
//             </div>
//             <span className="text-sm font-semibold text-gray-900">{products.length} results found</span>
//           </div>

//           {/* 🔹 Products grid */}
//           <div className="mt-6 grid grid-cols-4 gap-4">
//             {products.map((p) => (
//               <ProductCard key={p.id} product={p} />
//             ))}
//           </div>

//           {/* 🔹 Pagination */}
//           <div className="flex justify-center items-center gap-4 mt-10">
//             <button className="w-10 h-10 flex items-center justify-center border rounded-full">‹</button>
//             {[1,2,3,4].map((n) => (
//               <button key={n} className="w-10 h-10 flex items-center justify-center border rounded-full text-sm">
//                 {n}
//               </button>
//             ))}
//             <button className="w-10 h-10 flex items-center justify-center border rounded-full">›</button>
//           </div>
//         </div>
//       </div>
//     </Container>
    
//   );
//   <Footer/>
// }




// "use client";
// import React, { useState } from "react";
// import Container from "@/components/ui/Container";
// import ProductCard from "@/components/ProductCard";
// import Footer from "@/components/Footer";
// import Image from "next/image";
// import { Range } from "react-range"; // <-- настоящий слайдер

// // 🔹 Категории
// const categories = [
//   { id: 0, name: "Electronics Devices" },
//   { id: 3, name: "Computer & Laptop" },
//   { id: 4, name: "Computer Accessories" },
//   { id: 5, name: "SmartPhone" },
//   { id: 6, name: "Headphone" },
//   { id: 7, name: "Mobile Accessories" },
//   { id: 8, name: "Gaming Console" },
//   { id: 9, name: "Camera & Photo" },
//   { id: 10, name: "TV & Homes Appliances" },
//   { id: 11, name: "Watchs & Accessories" },
//   { id: 12, name: "GPS & Navigation" },
//   { id: 13, name: "Warable Technology" },
// ];

// // 🔹 Брэнды
// const brands = [
//   "Apple", "Asus", "Acer", "HP", "Lenovo", "Logitech", "Microsoft",
//   "Samsung", "Xiaomi", "Huawei", "Realme", "Sony", "JBL",
//   "Sony PlayStation", "Microsoft Xbox", "Nintendo", "Canon", "LG"
// ];

// export default function CategoriesPage() {
//   const [selectedCategory, setSelectedCategory] = useState("Electronics Devices");
//   const [priceRange, setPriceRange] = useState([0, 10000]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [search, setSearch] = useState("");

//   const toggleBrand = (brand: string) => {
//     setSelectedBrands((prev) =>
//       prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
//     );
//   };

//   // 🔹 Фильтр товаров (тест)
//   const products = Array.from({ length: 24 }, (_, i) => ({
//     id: i + 1,
//     name: `Product ${i + 1}`,
//     basePrice: 1000 + i * 200,
//     thumbnail: i === 8 // <-- на id=9
//       ? "/series.svg" // тестовый svg как картинка
//       : "https://via.placeholder.com/202x172?text=Product",
//   }));

//   return (
//     <>
//       <Container className="mt-10">
//         <div className="grid grid-cols-[312px_1fr] gap-8">
//           {/* ===== Левая колонка ===== */}
//           <div className="flex flex-col gap-6">
//             {/* 🔹 Categories */}
//             <div>
//               <h2 className="text-gray-900 font-medium text-sm uppercase">Category</h2>
//               <div className="mt-4 flex flex-col gap-4">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat.id}
//                     onClick={() => setSelectedCategory(cat.name)}
//                     className="flex items-center gap-2 text-sm font-medium text-gray-900"
//                   >
//                     <span
//                       className={`w-5 h-5 rounded-full border flex items-center justify-center ${
//                         selectedCategory === cat.name
//                           ? "border-primary-500"
//                           : "border-gray-200"
//                       }`}
//                     >
//                       {selectedCategory === cat.name && (
//                         <span className="w-2 h-2 rounded-full bg-primary-500" />
//                       )}
//                     </span>
//                     {cat.name}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <hr className="border-gray-100 my-6" />

//             {/* 🔹 Price Range */}
//             <div>
//               <h2 className="text-gray-900 font-medium text-sm uppercase">Price Range</h2>
//               <div className="mt-4">
//                 <Range
//                   step={100}
//                   min={0}
//                   max={10000}
//                   values={priceRange}
//                   onChange={(values) => setPriceRange(values)}
//                   renderTrack={({ props, children }) => (
//                     <div
//                       {...props}
//                       className="h-3 w-full rounded bg-gray-100 relative"
//                     >
//                       <div
//                         className="h-3 rounded bg-primary-500 absolute"
//                         style={{
//                           left: `${(priceRange[0] / 10000) * 100}%`,
//                           right: `${100 - (priceRange[1] / 10000) * 100}%`,
//                         }}
//                       />
//                       {children}
//                     </div>
//                   )}
//                   renderThumb={({ props }) => (
//                     <div
//                       {...props}
//                       className="w-5 h-5 bg-primary-500 rounded-full shadow cursor-pointer"
//                     />
//                   )}
//                 />

//                 {/* Min / Max */}
//                 <div className="flex justify-between gap-3 mt-4">
//                   <input
//                     type="number"
//                     className="w-1/2 border rounded px-2 py-1 text-sm text-gray-500"
//                     value={priceRange[0]}
//                     onChange={(e) =>
//                       setPriceRange([+e.target.value, priceRange[1]])
//                     }
//                   />
//                   <input
//                     type="number"
//                     className="w-1/2 border rounded px-2 py-1 text-sm text-gray-500"
//                     value={priceRange[1]}
//                     onChange={(e) =>
//                       setPriceRange([priceRange[0], +e.target.value])
//                     }
//                   />
//                 </div>
//               </div>
//             </div>

//             <hr className="border-gray-100 my-6" />

//             {/* 🔹 Popular Brands */}
//             <div>
//               <h2 className="text-gray-900 font-medium text-sm uppercase">Popular Brands</h2>
//               <div className="mt-4 grid grid-cols-2 gap-3">
//                 {brands.map((brand) => (
//                   <button
//                     key={brand}
//                     onClick={() => toggleBrand(brand)}
//                     className="flex items-center gap-2 text-sm text-gray-700"
//                   >
//                     <span
//                       className={`w-5 h-5 flex items-center justify-center border rounded-sm ${
//                         selectedBrands.includes(brand)
//                           ? "bg-primary-500 border-primary-500 text-white"
//                           : "bg-white border-gray-200"
//                       }`}
//                     >
//                       {selectedBrands.includes(brand) && "✓"}
//                     </span>
//                     {brand}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <hr className="border-gray-100 my-6" />

//             {/* 🔹 SVG блок */}
//             <div className="border rounded p-8 flex flex-col items-center gap-6">
//               <Image src="/watch.svg" alt="watch" width={180} height={180} />
//               <Image src="/series.svg" alt="series" width={248} height={175} />
//               <div className="flex flex-col gap-3">
//                 <Image src="/add.svg" alt="add" width={248} height={48} />
//                 <Image src="/view.svg" alt="view" width={248} height={48} />
//               </div>
//             </div>
//           </div>

//           {/* ===== Правая колонка ===== */}
//           <div className="flex flex-col">
//             {/* 🔹 Search */}
//             <div className="flex items-center border rounded px-4 py-2 w-[424px]">
//               <input
//                 type="text"
//                 placeholder="Search for anything..."
//                 className="flex-1 text-sm text-gray-500 outline-none"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//               <span className="w-5 h-5 bg-gray-300 rounded" />
//             </div>

//             {/* 🔹 Active Filters */}
//             <div className="flex justify-between items-center bg-gray-50 rounded mt-4 px-6 py-3">
//               <div className="flex items-center gap-4">
//                 <span className="text-sm text-gray-700">Active Filters:</span>
//                 {selectedBrands.map((b) => (
//                   <span
//                     key={b}
//                     className="text-sm text-gray-700 flex items-center gap-1"
//                   >
//                     {b}{" "}
//                     <button
//                       onClick={() =>
//                         setSelectedBrands((prev) =>
//                           prev.filter((brand) => brand !== b)
//                         )
//                       }
//                       className="text-gray-500"
//                     >
//                       ✕
//                     </button>
//                   </span>
//                 ))}
//               </div>
//               <span className="text-sm font-semibold text-gray-900">
//                 {products.length} results found
//               </span>
//             </div>

//             {/* 🔹 Products grid */}
//             <div className="mt-6 grid grid-cols-4 gap-4">
//               {products.map((p) => (
//                 <ProductCard key={p.id} product={p} />
//               ))}
//             </div>

//             {/* 🔹 Pagination */}
//             <div className="flex justify-center items-center gap-4 mt-10">
//               <button className="w-10 h-10 flex items-center justify-center border rounded-full">
//                 ‹
//               </button>
//               {[1, 2, 3, 4].map((n) => (
//                 <button
//                   key={n}
//                   className="w-10 h-10 flex items-center justify-center border rounded-full text-sm"
//                 >
//                   {n}
//                 </button>
//               ))}
//               <button className="w-10 h-10 flex items-center justify-center border rounded-full">
//                 ›
//               </button>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// // frontend/src/app/category/[slug]/page.tsx
// "use client";
// import React, { useState, useMemo, useEffect } from "react";
// import Container from "@/components/ui/Container";
// import ProductCard from "@/components/ProductCard";
// import { Range } from "react-range";
// import { usePathname } from "next/navigation";

// const STEP = 100;
// const MIN = 0;
// const MAX = 10000;
// const PER_PAGE = 16;

// const categories = [
//   { id: 0, name: "Electronics Devices", slug: "electronics-devices" },
//   { id: 3, name: "Computer & Laptop", slug: "computer-laptop" },
//   { id: 4, name: "Computer Accessories", slug: "computer-accessories" },
//   { id: 5, name: "SmartPhone", slug: "smartphone" },
//     { id: 6, name: "Headphone" },
//   { id: 7, name: "Mobile Accessories", slug: "mobile-accessories" },
//   { id: 8, name: "Gaming Console", slug: "gaming-console" },
//   { id: 9, name: "Camera & Photo", slug: "camera-and-photo" },
//   { id: 10, name: "TV & Homes Appliances", slug: "tv-and-homes-appliances" },
//   { id: 11, name: "Watchs & Accessories", slug: "computer-watchs-and-accessories" },
//   { id: 12, name: "GPS & Navigation", slug: "computer-gps-and-navigation" },
//   { id: 13, name: "Warable Technology", slug: "warable-technology" },
// ];

// const brands = [
//   "Apple", "Asus", "Acer", "HP", "Lenovo", "Logitech", "Microsoft",
//   "Samsung", "Xiaomi", "Huawei", "Realme", "Sony", "JBL",
//   "Sony PlayStation", "Microsoft Xbox", "Nintendo", "Canon", "LG"
// ];

// export default function CategoriesPage() {
//   // безопасно получаем pathname и slug (если pathname null -> '')
//   const pathname = usePathname() ?? "";
//   const parts = pathname.split("/").filter(Boolean);
//   const slug = parts.length ? parts[parts.length - 1] : "";

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [priceRange, setPriceRange] = useState<number[]>([MIN, MAX]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [page, setPage] = useState<number>(1);

//   // при заходе на /category/:slug выбираем соответствующую категорию
//   useEffect(() => {
//     const found = categories.find((c) => c.slug === slug);
//     if (found) {
//       setSelectedCategory(found.name);
//       setPage(1);
//     } else {
//       // если slug пустой/не найден — снимаем выбор
//       if (!slug) setSelectedCategory(null);
//     }
//   }, [slug]);

//   // Тестовые продукты: соответствуют форме, которую ожидает твой ProductCard
//   // thumbnail присутствует для i===8 (id=9)
//   const products = useMemo(
//     () =>
//       Array.from({ length: 24 }, (_, i) => ({
//         id: i + 1,
//         name: `Product ${i + 1}`,
//         basePrice: 500 + i * 300,
//         thumbnail: i === 8 ? "/sample-product-9.jpg" : undefined, // у тебя в БД может быть thumbnail для id 9
//         images: [{ url: "https://via.placeholder.com/202x172?text=Image" }],
//         // добавляем метаданные для фильтра (они не мешают ProductCard)
//         _meta: {
//           category: categories[i % categories.length].name,
//           brand: brands[i % brands.length],
//         },
//       })),
//     []
//   );

//   // фильтрация по категории, бренду и цене
//   const filtered = products.filter((p) => {
//     const categoryMatch = selectedCategory ? p._meta.category === selectedCategory : true;
//     const brandMatch = selectedBrands.length ? selectedBrands.includes(p._meta.brand) : true;
//     const priceMatch = p.basePrice >= priceRange[0] && p.basePrice <= priceRange[1];
//     return categoryMatch && brandMatch && priceMatch;
//   });

//   // пагинация
//   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//   const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

//   // переключатель бренда
//   const toggleBrand = (brand: string) => {
//     setPage(1);
//     setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));
//   };

//   return (
//     <Container className="mt-10">
//       <div className="grid grid-cols-[312px_1fr] gap-8">
//         {/* ЛЕВАЯ КОЛОНКА */}
//         <aside className="flex flex-col gap-6">
//           {/* Categories */}
//           <div>
//             <h2 className="text-gray-900 font-medium text-sm uppercase">Category</h2>
//             <div className="mt-4 flex flex-col gap-4">
//               {categories.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => {
//                     setSelectedCategory(cat.name);
//                     setPage(1);
//                   }}
//                   className="flex items-center gap-2 text-sm font-medium"
//                 >
//                   {/* Внешний круг 20x20, когда активен — border-2 Primary/500, внутри белый круг 8x8 */}
//                   <span
//                     className={`w-5 h-5 rounded-full flex items-center justify-center ${
//                       selectedCategory === cat.name
//                         ? "border-2 border-[#FA8232]" // Primary/500 - если нужно, замени на класс
//                         : "border border-gray-200"
//                     }`}
//                   >
//                     {selectedCategory === cat.name && <span className="w-2 h-2 rounded-full bg-white" />}
//                   </span>

//                   <span className="text-gray-900">{cat.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <hr className="border-gray-100 my-6" />

//           {/* Price Range */}
//           <div>
//             <h2 className="text-gray-900 font-medium text-sm uppercase">Price Range</h2>
//             <div className="mt-4">
//               <Range
//                 step={STEP}
//                 min={MIN}
//                 max={MAX}
//                 values={priceRange}
//                 onChange={(values) => {
//                   setPriceRange(values);
//                   setPage(1);
//                 }}
//                 renderTrack={({ props, children }) => {
//                   // избегаем spread props.key -> React warning
//                   const { key, ...rest } = props as any;
//                   return (
//                     <div
//                       {...rest}
//                       // важно: className/handlers остаются в rest
//                       className="h-3 w-full rounded bg-gray-100 relative"
//                     >
//                       {/* заполненная часть между ручками */}
//                       <div
//                         className="h-3 rounded bg-[#FA8232] absolute"
//                         style={{
//                           left: `${(priceRange[0] / MAX) * 100}%`,
//                           right: `${100 - (priceRange[1] / MAX) * 100}%`,
//                         }}
//                       />
//                       {children}
//                     </div>
//                   );
//                 }}
//                 renderThumb={({ props, index }) => {
//                   const { key, ...restProps } = props as any;
//                   return (
//                     <div
//                       {...restProps}
//                       // дизайн ручки: 20x20, border-2 Primary/500, внутренняя белая область
//                       className="w-5 h-5 rounded-full border-2 border-[#FA8232] bg-white shadow cursor-pointer flex items-center justify-center"
//                     >
//                       {/* если хочешь — можно добавить маленький внутренний кружок, но по ТЗ внутренняя часть белая */}
//                       <div className="w-[8px] h-[8px] rounded-full bg-white" />
//                     </div>
//                   );
//                 }}
//               />

//               {/* подписи под слайдером (0,2000,4000,...10000) */}
//               <div className="flex justify-between text-xs text-gray-500 mt-2">
//                 {Array.from({ length: 6 }, (_, i) => i * 2000).map((v) => (
//                   <span key={v}>${v}</span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <hr className="border-gray-100 my-6" />

//           {/* Brands */}
//           <div>
//             <h2 className="text-gray-900 font-medium text-sm uppercase">Popular Brands</h2>
//             <div className="mt-4 grid grid-cols-2 gap-3">
//               {brands.map((brand) => {
//                 const active = selectedBrands.includes(brand);
//                 return (
//                   <button
//                     key={brand}
//                     onClick={() => toggleBrand(brand)}
//                     className="flex items-center gap-2 text-sm"
//                   >
//                     {/* чекбокс 20x20: неактивный - border 1px #C9CFD2, активный - заполнение Primary/500 и белая галочка */}
//                     <span
//                       className={`w-5 h-5 flex items-center justify-center ${
//                         active ? "bg-[#FA8232] border-2 border-[#FA8232] text-white" : "bg-white border border-[#C9CFD2] text-transparent"
//                       }`}
//                     >
//                       {active ? (
//                         // простая галочка
//                         <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                       ) : (
//                         // пусто
//                         <span />
//                       )}
//                     </span>
//                     <span className="text-gray-700">{brand}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </aside>

//         {/* ПРАВАЯ КОЛОНКА */}
//         <main className="flex flex-col">
//           {/* Grid товаров */}
//           <div className="mt-6 grid grid-cols-4 gap-4">
//             {paginated.length ? (
//               paginated.map((p) => (
//                 // передаём продукт как есть — твой ProductCard сам выберет thumbnail или images[0].url
//                 <ProductCard key={p.id} product={p as any} />
//               ))
//             ) : (
//               <div className="col-span-4 text-center text-gray-500 py-12">No products found</div>
//             )}
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-center items-center gap-3 mt-10">
//             <button
//               onClick={() => setPage((prev) => Math.max(1, prev - 1))}
//               className="w-10 h-10 flex items-center justify-center rounded-full border"
//             >
//               ‹
//             </button>

//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
//               <button
//                 key={n}
//                 onClick={() => setPage(n)}
//                 className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm ${
//                   page === n ? "bg-[#FA8232] border-[#FA8232] text-white" : "border-gray-200 text-gray-400"
//                 }`}
//               >
//                 {n}
//               </button>
//             ))}

//             <button
//               onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
//               className="w-10 h-10 flex items-center justify-center rounded-full border"
//             >
//               ›
//             </button>
//           </div>
//         </main>
//       </div>
//     </Container>
//   );
// }























// // frontend/src/app/category/[slug]/page.tsx
// "use client";
// import React, { useState, useMemo, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Container from "@/components/ui/Container";
// import ProductCard from "@/components/ProductCard";
// import Footer from "@/components/Footer";
// import { Range } from "react-range";
// import { usePathname } from "next/navigation";
// import TopHeader from "@/components/header/Header";
// import BottomHeader from "@/components/header/BottomHeader";
// import Breadcrumbs from "@/components/Breadcrumbs";

// const STEP = 100;
// const MIN = 0;
// const MAX = 10000;
// const PER_PAGE = 16;

// const categories = [
//   { id: 0, name: "Electronics Devices", slug: "electronics-devices" },
//   { id: 3, name: "Computer & Laptop", slug: "computer-laptop" },
//   { id: 4, name: "Computer Accessories", slug: "computer-accessories" },
//   { id: 5, name: "SmartPhone", slug: "smartphone" },
//   { id: 6, name: "Headphone", slug: "headphone" },
//   { id: 7, name: "Mobile Accessories", slug: "mobile-accessories" },
//   { id: 8, name: "Gaming Console", slug: "gaming-console" },
//   { id: 9, name: "Camera & Photo", slug: "camera-and-photo" },
//   { id: 10, name: "TV & Homes Appliances", slug: "tv-and-homes-appliances" },
//   { id: 11, name: "Watchs & Accessories", slug: "computer-watchs-and-accessories" },
//   { id: 12, name: "GPS & Navigation", slug: "computer-gps-and-navigation" },
//   { id: 13, name: "Warable Technology", slug: "warable-technology" },
// ];

// const brands = [
//   "Apple", "Asus", "Acer", "HP", "Lenovo", "Logitech", "Microsoft",
//   "Samsung", "Xiaomi", "Huawei", "Realme", "Sony", "JBL",
//   "Sony PlayStation", "Microsoft Xbox", "Nintendo", "Canon", "LG"
// ];

// export default function CategoriesPage() {
//   // безопасно получаем pathname и slug (если pathname null -> '')
//   const pathname = usePathname() ?? "";
//   const parts = pathname.split("/").filter(Boolean);
//   const slug = parts.length ? parts[parts.length - 1] : "";

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [priceRange, setPriceRange] = useState<number[]>([MIN, MAX]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [search, setSearch] = useState<string>("");
//   const [page, setPage] = useState<number>(1);

//   // при заходе на /category/:slug выбираем соответствующую категорию
//   useEffect(() => {
//     const found = categories.find((c) => c.slug === slug);
//     if (found) {
//       setSelectedCategory(found.name);
//       setPage(1);
//     } else {
//       if (!slug) setSelectedCategory(null);
//     }
//   }, [slug]);

//   // тестовые продукты (структура совместима с твоим ProductCard)
//   const products = useMemo(
//     () =>
//       Array.from({ length: 24 }, (_, i) => ({
//         id: i + 1,
//         name: `Product ${i + 1}`,
//         basePrice: 500 + i * 300,
//         // у продукта с id=9 (i===8) есть thumbnail — на твоём проекте замени на реальный путь
//         thumbnail: i === 8 ? "/sample-product-9.jpg" : undefined,
//         images: [{ url: "https://via.placeholder.com/202x172?text=Image" }],
//         _meta: {
//           category: categories[i % categories.length].name,
//           brand: brands[i % brands.length],
//         },
//       })),
//     []
//   );

//   // фильтрация: категория, бренды, цена, поиск
//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     return products.filter((p) => {
//       const categoryMatch = selectedCategory ? p._meta.category === selectedCategory : true;
//       const brandMatch = selectedBrands.length ? selectedBrands.includes(p._meta.brand) : true;
//       const priceMatch = p.basePrice >= priceRange[0] && p.basePrice <= priceRange[1];
//       const searchMatch = q ? p.name.toLowerCase().includes(q) : true;
//       return categoryMatch && brandMatch && priceMatch && searchMatch;
//     });
//   }, [products, selectedCategory, selectedBrands, priceRange, search]);

//   // пагинация
//   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//   useEffect(() => {
//     if (page > totalPages) setPage(1);
//   }, [totalPages, page]);

//   const paginated = useMemo(
//     () => filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE),
//     [filtered, page]
//   );

//   // взаимодействия
//   const toggleBrand = (brand: string) => {
//     setPage(1);
//     setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));
//   };

//   const clearCategory = () => {
//     setSelectedCategory(null);
//     setPage(1);
//   };

//   const removeBrand = (brand: string) => {
//     setSelectedBrands((prev) => prev.filter((b) => b !== brand));
//     setPage(1);
//   };

//   return (
//     <>
//     <TopHeader />
//                 <BottomHeader />
                
// <section className="px-4 md:px-24 lg:px-28">
//   <div className="max-w-[1440px] mx-auto">
//     <Breadcrumbs
//       items={[
//         { label: "Home", href: "/" },
//         { label: "Categories", href: "/category" },
//         { label: selectedCategory || slug, href: `/category/${slug}` },
//       ]}
//     />
//   </div>
// </section>
//       <Container className="mt-10">
//         <div className="grid grid-cols-[312px_1fr] gap-8">
//           {/* ===== ЛЕВАЯ КОЛОНКА (фильтры) ===== */}
//           <aside className="flex flex-col gap-6">
//             {/* Categories */}
//             <div>
//               <h2 className="text-gray-900 font-medium text-sm uppercase">Category</h2>
//               <div className="mt-4 flex flex-col gap-4">
//                 {categories.map((cat) => {
//                   // если есть slug — используем навигацию, чтобы URL менялся
//                   const isActive = selectedCategory === cat.name;
//                   return cat.slug ? (
//                     <Link key={cat.id} href={`/category/${cat.slug}`} className="no-underline">
//                       <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">
//                         <span
//                           className={`w-5 h-5 rounded-full flex items-center justify-center ${
//                             isActive ? "border-2 border-[#FA8232]" : "border border-gray-200"
//                           }`}
//                         >
//                           {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
//                         </span>
//                         <span className="text-gray-900">{cat.name}</span>
//                       </div>
//                     </Link>
//                   ) : (
//                     <button
//                       key={cat.id}
//                       onClick={() => {
//                         setSelectedCategory(cat.name);
//                         setPage(1);
//                       }}
//                       className="flex items-center gap-2 text-sm font-medium"
//                     >
//                       <span
//                         className={`w-5 h-5 rounded-full flex items-center justify-center ${
//                           isActive ? "border-2 border-[#FA8232]" : "border border-gray-200"
//                         }`}
//                       >
//                         {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
//                       </span>
//                       <span className="text-gray-900">{cat.name}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             <hr className="border-gray-100 my-6" />

//             {/* Price Range */}
//             <div>
//               <h2 className="text-gray-900 font-medium text-sm uppercase">Price Range</h2>
//               <div className="mt-4">
//                 <Range
//                   step={STEP}
//                   min={MIN}
//                   max={MAX}
//                   values={priceRange}
//                   onChange={(values) => {
//                     setPriceRange(values);
//                     setPage(1);
//                   }}
//                   renderTrack={({ props, children }) => {
//                     // убираем key из props перед спредом (React warning)
//                     const { key, ...rest } = props as any;
//                     return (
//                       <div {...rest} className="h-3 w-full rounded bg-gray-100 relative">
//                         <div
//                           className="h-3 rounded bg-[#FA8232] absolute"
//                           style={{
//                             left: `${(priceRange[0] / MAX) * 100}%`,
//                             right: `${100 - (priceRange[1] / MAX) * 100}%`,
//                           }}
//                         />
//                         {children}
//                       </div>
//                     );
//                   }}
//                   renderThumb={({ props, index }) => {
//                     const { key, ...restProps } = props as any;
//                     // ручка 20x20: border-2 #FA8232, внутренняя белая (точно как ТЗ)
//                     return (
//                       <div
//                         {...restProps}
//                         className="w-5 h-5 rounded-full border-2 border-[#FA8232] bg-white shadow cursor-pointer flex items-center justify-center"
//                       >
//                         <div className="w-[8px] h-[8px] rounded-full bg-white" />
//                       </div>
//                     );
//                   }}
//                 />

//                 {/* подписи под слайдером (0,2000,...10000) */}
//                 <div className="flex justify-between text-xs text-gray-500 mt-2">
//                   {Array.from({ length: 6 }, (_, i) => i * 2000).map((v) => (
//                     <span key={v}>${v}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <hr className="border-gray-100 my-6" />

//             {/* Brands */}
//             <div>
//               <h2 className="text-gray-900 font-medium text-sm uppercase">Popular Brands</h2>
//               <div className="mt-4 grid grid-cols-2 gap-3">
//                 {brands.map((brand) => {
//                   const active = selectedBrands.includes(brand);
//                   return (
//                     <button
//                       key={brand}
//                       onClick={() => toggleBrand(brand)}
//                       className="flex items-center gap-2 text-sm"
//                     >
//                       <span
//                         className={`w-5 h-5 flex items-center justify-center ${
//                           active ? "bg-[#FA8232] border-2 border-[#FA8232] text-white" : "bg-white border border-[#C9CFD2] text-transparent"
//                         }`}
//                       >
//                         {active ? (
//                           <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                           </svg>
//                         ) : (
//                           <span />
//                         )}
//                       </span>
//                       <span className="text-gray-700">{brand}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             <hr className="border-gray-100 my-6" />

//             {/* SVG-блок (лево, под фильтрами) — берёт файлы из public */}
//             <div className="border rounded p-8 flex flex-col items-center gap-6">
//               <Image src="/watch.svg" alt="watch" width={180} height={180} />
//               <Image src="/series.svg" alt="series" width={248} height={175} />
//               <div className="flex flex-col gap-3">
//                 <Image src="/add.svg" alt="add" width={248} height={48} />
//                 <Image src="/view.svg" alt="view" width={248} height={48} />
//               </div>
//             </div>
//           </aside>

//           {/* ===== ПРАВАЯ КОЛОНКА (поиск, active filters, товары, пагинация) ===== */}
//           <main className="flex flex-col">
//             {/* Search */}
//             <div className="flex items-center border rounded px-4 py-2 w-[424px]">
//               <input
//                 type="text"
//                 placeholder="Search for anything..."
//                 className="flex-1 text-sm text-gray-500 outline-none"
//                 value={search}
//                 onChange={(e) => {
//                   setSearch(e.target.value);
//                   setPage(1);
//                 }}
//               />
//               <span className="w-5 h-5 bg-gray-300 rounded" />
//             </div>

//             {/* Active Filters + results count */}
//             <div className="mt-4 flex items-center justify-between bg-gray-50 px-6 py-3 rounded">
//               <div className="flex items-center gap-3">
//                 <span className="text-sm text-gray-600">Active Filters:</span>

//                 {/* категория (если выбрана) */}
//                 {selectedCategory && (
//                   <div className="flex items-center gap-2 bg-white border rounded px-3 py-1 text-sm">
//                     <span className="text-gray-700">{selectedCategory}</span>
//                     <button
//                       onClick={clearCategory}
//                       className="text-gray-500 text-xs"
//                       aria-label="clear category"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 )}

//                 {/* бренды */}
//                 {selectedBrands.map((b) => (
//                   <div key={b} className="flex items-center gap-2 bg-white border rounded px-3 py-1 text-sm">
//                     <span className="text-gray-700">{b}</span>
//                     <button onClick={() => removeBrand(b)} className="text-gray-500 text-xs">✕</button>
//                   </div>
//                 ))}
//               </div>

//               <div className="text-sm font-semibold text-gray-900">
//                 {filtered.length} results
//               </div>
//             </div>

//             {/* Grid товаров */}
//             <div className="mt-6 grid grid-cols-4 gap-4">
//               {paginated.length ? (
//                 paginated.map((p) => (
//                   // передаём продукт как есть — твой ProductCard сам выберет thumbnail или images[0].url
//                   <ProductCard key={p.id} product={p} />
//                 ))
//               ) : (
//                 <div className="col-span-4 text-center text-gray-500 py-12">No products found</div>
//               )}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center items-center gap-3 mt-10">
//               <button
//                 onClick={() => setPage((prev) => Math.max(1, prev - 1))}
//                 className="w-10 h-10 flex items-center justify-center rounded-full border"
//                 disabled={page === 1}
//               >
//                 ‹
//               </button>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
//                 <button
//                   key={n}
//                   onClick={() => setPage(n)}
//                   className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm ${
//                     page === n ? "bg-[#FA8232] border-[#FA8232] text-white" : "border-gray-200 text-gray-400"
//                   }`}
//                 >
//                   {n}
//                 </button>
//               ))}

//               <button
//                 onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
//                 className="w-10 h-10 flex items-center justify-center rounded-full border"
//                 disabled={page === totalPages}
//               >
//                 ›
//               </button>
//             </div>
//           </main>
//         </div>
//       </Container>

//       {/* Footer (возвращаю твой футер) */}
//       <Footer />
//     </>
//   );
// }












// // frontend/src/app/category/[slug]/page.tsx
// "use client";
// import React, { useState, useMemo, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Container from "@/components/ui/Container";
// import ProductCard from "@/components/ProductCard";
// import Footer from "@/components/Footer";
// import { Range } from "react-range";
// import { usePathname } from "next/navigation";
// import TopHeader from "@/components/header/Header";
// import BottomHeader from "@/components/header/BottomHeader";
// import Breadcrumbs from "@/components/Breadcrumbs";

// const STEP = 100;
// const MIN = 0;
// const MAX = 10000;
// const PER_PAGE = 24; // теперь 6 рядов по 4 карточки

// const categories = [
//   { id: 0, name: "Electronics Devices", slug: "electronics-devices" },
//   { id: 3, name: "Computer & Laptop", slug: "computer-laptop" },
//   { id: 4, name: "Computer Accessories", slug: "computer-accessories" },
//   { id: 5, name: "SmartPhone", slug: "smartphone" },
//   { id: 6, name: "Headphone", slug: "headphone" },
//   { id: 7, name: "Mobile Accessories", slug: "mobile-accessories" },
//   { id: 8, name: "Gaming Console", slug: "gaming-console" },
//   { id: 9, name: "Camera & Photo", slug: "camera-and-photo" },
//   { id: 10, name: "TV & Homes Appliances", slug: "tv-and-homes-appliances" },
//   { id: 11, name: "Watchs & Accessories", slug: "computer-watchs-and-accessories" },
//   { id: 12, name: "GPS & Navigation", slug: "computer-gps-and-navigation" },
//   { id: 13, name: "Warable Technology", slug: "warable-technology" },
// ];

// const brands = [
//   "Apple", "Asus", "Acer", "HP", "Lenovo", "Logitech", "Microsoft",
//   "Samsung", "Xiaomi", "Huawei", "Realme", "Sony", "JBL",
//   "Sony PlayStation", "Microsoft Xbox", "Nintendo", "Canon", "LG"
// ];

// export default function CategoriesPage() {
//   const pathname = usePathname() ?? "";
//   const parts = pathname.split("/").filter(Boolean);
//   const slug = parts.length ? parts[parts.length - 1] : "";

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [priceRange, setPriceRange] = useState<number[]>([MIN, MAX]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [search, setSearch] = useState<string>("");
//   const [page, setPage] = useState<number>(1);

//   useEffect(() => {
//     const found = categories.find((c) => c.slug === slug);
//     if (found) {
//       setSelectedCategory(found.name);
//       setPage(1);
//     } else {
//       if (!slug) setSelectedCategory(null);
//     }
//   }, [slug]);

//   const products = useMemo(
//     () =>
//       Array.from({ length: 48 }, (_, i) => ({
//         id: i + 1,
//         name: `Product ${i + 1}`,
//         basePrice: 500 + i * 300,
//         thumbnail: i === 8 ? "/sample-product-9.jpg" : undefined,
//         images: [{ url: "https://via.placeholder.com/202x172?text=Image" }],
//         _meta: {
//           category: categories[i % categories.length].name,
//           brand: brands[i % brands.length],
//         },
//       })),
//     []
//   );

//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     return products.filter((p) => {
//       const categoryMatch = selectedCategory ? p._meta.category === selectedCategory : true;
//       const brandMatch = selectedBrands.length ? selectedBrands.includes(p._meta.brand) : true;
//       const priceMatch = p.basePrice >= priceRange[0] && p.basePrice <= priceRange[1];
//       const searchMatch = q ? p.name.toLowerCase().includes(q) : true;
//       return categoryMatch && brandMatch && priceMatch && searchMatch;
//     });
//   }, [products, selectedCategory, selectedBrands, priceRange, search]);

//   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//   useEffect(() => {
//     if (page > totalPages) setPage(1);
//   }, [totalPages, page]);

//   const paginated = useMemo(
//     () => filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE),
//     [filtered, page]
//   );

//   const toggleBrand = (brand: string) => {
//     setPage(1);
//     setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));
//   };

//   const clearCategory = () => {
//     setSelectedCategory(null);
//     setPage(1);
//   };

//   const removeBrand = (brand: string) => {
//     setSelectedBrands((prev) => prev.filter((b) => b !== brand));
//     setPage(1);
//   };

//   return (
//     <>
//       <TopHeader />
//       <BottomHeader />

//       <section className="px-4 md:px-24 lg:px-28">
//         <div className="max-w-[1440px] mx-auto">
//           <Breadcrumbs
//             items={[
//               { label: "Home", href: "/" },
//               { label: "Categories", href: "/category" },
//               { label: selectedCategory || slug, href: `/category/${slug}` },
//             ]}
//           />
//         </div>
//       </section>

//       <Container className="mt-10">
//         <div className="grid grid-cols-[312px_1fr] gap-8">
//           {/* ===== ЛЕВАЯ КОЛОНКА ===== */}
//           <aside className="flex flex-col gap-6">
//             {/* Categories */}
//             <div>
//               <h2 className="text-gray-900 font-medium text-sm uppercase">Category</h2>
//               <div className="mt-4 flex flex-col gap-4">
//                 {categories.map((cat) => {
//                   const isActive = selectedCategory === cat.name;
//                   return (
//                     <Link key={cat.id} href={`/category/${cat.slug}`} className="no-underline">
//                       <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">
//                         <span
//                           className={`w-5 h-5 rounded-full flex items-center justify-center ${
//                             isActive ? "border-2 border-[#FA8232]" : "border border-gray-200"
//                           }`}
//                         >
//                           {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
//                         </span>
//                         <span className="text-gray-900">{cat.name}</span>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>

//             <hr className="border-gray-100 my-6" />

//             {/* Price Range */}
//             <div>
//               <h2 className="text-gray-900 font-medium text-sm uppercase">Price Range</h2>
//               <div className="mt-4">
//                 <Range
//                   step={STEP}
//                   min={MIN}
//                   max={MAX}
//                   values={priceRange}
//                   onChange={(values) => {
//                     setPriceRange(values);
//                     setPage(1);
//                   }}
//                   renderTrack={({ props, children }) => {
//                     const { key, ...rest } = props as any;
//                     return (
//                       <div {...rest} className="h-3 w-full rounded bg-gray-100 relative">
//                         <div
//                           className="h-3 rounded bg-[#FA8232] absolute"
//                           style={{
//                             left: `${(priceRange[0] / MAX) * 100}%`,
//                             right: `${100 - (priceRange[1] / MAX) * 100}%`,
//                           }}
//                         />
//                         {children}
//                       </div>
//                     );
//                   }}
//                   renderThumb={({ props }) => {
//                     const { key, ...restProps } = props as any;
//                     return (
//                       <div
//                         {...restProps}
//                         className="w-5 h-5 rounded-full border-2 border-[#FA8232] bg-white shadow cursor-pointer flex items-center justify-center"
//                       >
//                         <div className="w-[8px] h-[8px] rounded-full bg-white" />
//                       </div>
//                     );
//                   }}
//                 />

//                 {/* подписи */}
//                 <div className="flex justify-between text-xs text-gray-500 mt-2">
//                   {Array.from({ length: 6 }, (_, i) => i * 2000).map((v) => (
//                     <span key={v}>${v}</span>
//                   ))}
//                 </div>
//               </div>

//               {/* Min / Max Price */}
//               <div className="mt-4 flex gap-4">
//                 <div className="w-[150px] h-10 border border-gray-100 rounded-[3px] flex items-center px-3">
//                   <span className="text-gray-500 text-sm">Min Price</span>
//                 </div>
//                 <div className="w-[150px] h-10 border border-gray-100 rounded-[3px] flex items-center px-3">
//                   <span className="text-gray-500 text-sm">Max Price</span>
//                 </div>
//               </div>

//               {/* Радио диапазоны */}
//               <div className="mt-4 w-[312px] h-[212px] flex flex-col justify-between">
//                 {[
//                   "All Price",
//                   "Under $20",
//                   "$25 to $100",
//                   "$100 to $300",
//                   "$300 to $500",
//                   "$500 to $1,000",
//                   "$1,000 to $10,000",
//                 ].map((label, idx) => (
//                   <label key={idx} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
//                     <input type="radio" name="priceRangeRadio" className="peer hidden" />
//                     <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center peer-checked:border-2 peer-checked:border-[#FA8232]" />
//                     <span>{label}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <hr className="border-gray-100 my-6" />

//             {/* Brands */}
//             <div>
//               <h2 className="text-gray-900 font-medium text-sm uppercase">Popular Brands</h2>
//               <div className="mt-4 grid grid-cols-2 gap-3">
//                 {brands.map((brand) => {
//                   const active = selectedBrands.includes(brand);
//                   return (
//                     <button
//                       key={brand}
//                       onClick={() => toggleBrand(brand)}
//                       className="flex items-center gap-2 text-sm"
//                     >
//                       <span
//                         className={`w-5 h-5 flex items-center justify-center ${
//                           active ? "bg-[#FA8232] border-2 border-[#FA8232] text-white" : "bg-white border border-[#C9CFD2]"
//                         }`}
//                       >
//                         {active && (
//                           <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
//                             <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                           </svg>
//                         )}
//                       </span>
//                       <span className="text-gray-700">{brand}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             <hr className="border-gray-100 my-6" />

//             {/* SVG-блок */}
//             <div className="border rounded p-8 flex flex-col items-center gap-6">
//               <Image src="/watch.svg" alt="watch" width={180} height={180} />
//               <Image src="/series.svg" alt="series" width={248} height={175} />
//               <div className="flex flex-col gap-3">
//                 <Image src="/add.svg" alt="add" width={248} height={48} />
//                 <Image src="/view.svg" alt="view" width={248} height={48} />
//               </div>
//             </div>
//           </aside>

//           {/* ===== ПРАВАЯ КОЛОНКА ===== */}
//           <main className="flex flex-col">
//             {/* Search */}
//             <div className="flex items-center border rounded px-4 py-2 w-[424px]">
//               <input
//                 type="text"
//                 placeholder="Search for anything..."
//                 className="flex-1 text-sm text-gray-500 outline-none"
//                 value={search}
//                 onChange={(e) => {
//                   setSearch(e.target.value);
//                   setPage(1);
//                 }}
//               />
//               <span className="w-5 h-5 bg-gray-300 rounded" />
//             </div>

//             {/* Active Filters */}
//             <div className="mt-4 flex items-center justify-between bg-gray-50 px-6 py-3 rounded">
//               <div className="flex items-center gap-3">
//                 <span className="text-sm text-gray-600">Active Filters:</span>
//                 {selectedCategory && (
//                   <div className="flex items-center gap-2 bg-white border rounded px-3 py-1 text-sm">
//                     <span className="text-gray-700">{selectedCategory}</span>
//                     <button onClick={clearCategory} className="text-gray-500 text-xs">✕</button>
//                   </div>
//                 )}
//                 {selectedBrands.map((b) => (
//                   <div key={b} className="flex items-center gap-2 bg-white border rounded px-3 py-1 text-sm">
//                     <span className="text-gray-700">{b}</span>
//                     <button onClick={() => removeBrand(b)} className="text-gray-500 text-xs">✕</button>
//                   </div>
//                 ))}
//               </div>
//               <div className="text-sm font-semibold text-gray-900">
//                 {filtered.length} results
//               </div>
//             </div>

//             {/* Products Grid */}
//             <div className="mt-6 grid grid-cols-4 gap-4">
//               {paginated.length ? (
//                 paginated.map((p) => <ProductCard key={p.id} product={p} />)
//               ) : (
//                 <div className="col-span-4 text-center text-gray-500 py-12">No products found</div>
//               )}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center items-center gap-3 mt-10 mb-[72px]">
//               <button
//                 onClick={() => setPage((prev) => Math.max(1, prev - 1))}
//                 className="w-10 h-10 flex items-center justify-center rounded-full border"
//                 disabled={page === 1}
//               >
//                 ‹
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
//                 <button
//                   key={n}
//                   onClick={() => setPage(n)}
//                   className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm ${
//                     page === n ? "bg-[#FA8232] border-[#FA8232] text-white" : "border-gray-200 text-gray-400"
//                   }`}
//                 >
//                   {n}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
//                 className="w-10 h-10 flex items-center justify-center rounded-full border"
//                 disabled={page === totalPages}
//               >
//                 ›
//               </button>
//             </div>
//           </main>
//         </div>
//       </Container>

//       <Footer />
//     </>
//   );
// }

// frontend/src/app/category/[slug]/page.tsx
"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Range } from "react-range";
import { usePathname } from "next/navigation";
import TopHeader from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Breadcrumbs from "@/components/Breadcrumbs";

const STEP = 100;
const MIN = 0;
const MAX = 10000;
const PER_PAGE = 24;

const categories = [
  { id: 0, name: "Electronics Devices", slug: "electronics-devices" },
  { id: 3, name: "Computer & Laptop", slug: "computer-laptop" },
  { id: 4, name: "Computer Accessories", slug: "computer-accessories" },
  { id: 5, name: "SmartPhone", slug: "smartphone" },
  { id: 6, name: "Headphone", slug: "headphone" },
  { id: 7, name: "Mobile Accessories", slug: "mobile-accessories" },
  { id: 8, name: "Gaming Console", slug: "gaming-console" },
  { id: 9, name: "Camera & Photo", slug: "camera-and-photo" },
  { id: 10, name: "TV & Homes Appliances", slug: "tv-and-homes-appliances" },
  { id: 11, name: "Watchs & Accessories", slug: "computer-watchs-and-accessories" },
  { id: 12, name: "GPS & Navigation", slug: "computer-gps-and-navigation" },
  { id: 13, name: "Warable Technology", slug: "warable-technology" },
];

const brands = [
  "Apple", "Asus", "Acer", "HP", "Lenovo", "Logitech", "Microsoft",
  "Samsung", "Xiaomi", "Huawei", "Realme", "Sony", "JBL",
  "Sony PlayStation", "Microsoft Xbox", "Nintendo", "Canon", "LG"
];

export default function CategoriesPage() {
  const pathname = usePathname() ?? "";
  const parts = pathname.split("/").filter(Boolean);
  const slug = parts.length ? parts[parts.length - 1] : "";

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([MIN, MAX]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const found = categories.find((c) => c.slug === slug);
    if (found) {
      setSelectedCategory(found.name);
      setPage(1);
    } else {
      if (!slug) setSelectedCategory(null);
    }
  }, [slug]);

  const products = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        basePrice: 500 + i * 300,
        thumbnail: i === 8 ? "/sample-product-9.jpg" : undefined,
        images: [{ url: "https://via.placeholder.com/202x172?text=Image" }],
        _meta: {
          category: categories[i % categories.length].name,
          brand: brands[i % brands.length],
        },
      })),
    []
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      const categoryMatch = selectedCategory ? p._meta.category === selectedCategory : true;
      const brandMatch = selectedBrands.length ? selectedBrands.includes(p._meta.brand) : true;
      const priceMatch = p.basePrice >= priceRange[0] && p.basePrice <= priceRange[1];
      const searchMatch = q ? p.name.toLowerCase().includes(q) : true;
      return categoryMatch && brandMatch && priceMatch && searchMatch;
    });
  }, [products, selectedCategory, selectedBrands, priceRange, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const paginated = useMemo(
    () => filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [filtered, page]
  );

  const toggleBrand = (brand: string) => {
    setPage(1);
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const clearCategory = () => {
    setSelectedCategory(null);
    setPage(1);
  };

  const removeBrand = (brand: string) => {
    setSelectedBrands((prev) => prev.filter((b) => b !== brand));
    setPage(1);
  };

  return (
    <>
      <TopHeader />
      <BottomHeader />

      <section className="px-4 md:px-24 lg:px-28">
        <div className="max-w-[1440px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Categories", href: "/category" },
              { label: selectedCategory || slug, href: `/category/${slug}` },
            ]}
          />
        </div>
      </section>

      <Container className="mt-10">
        <div className="grid grid-cols-[312px_1fr] gap-8">
          {/* ===== ЛЕВАЯ КОЛОНКА ===== */}
          <aside className="flex flex-col gap-6">
            {/* Categories */}
            <div>
              <h2 className="text-gray-900 font-medium text-sm uppercase">Category</h2>
              <div className="mt-4 flex flex-col gap-4">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.name;
                  return (
                    <Link key={cat.id} href={`/category/${cat.slug}`} className="no-underline">
                      <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            isActive ? "border-2 border-[#FA8232]" : "border border-gray-200"
                          }`}
                        >
                          {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                        </span>
                        <span className="text-gray-900">{cat.name}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <hr className="border-gray-100 my-6" />

            {/* Price Range */}
            <div>
              <h2 className="text-gray-900 font-medium text-sm uppercase">Price Range</h2>
              <div className="mt-4">
                <Range
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  values={priceRange}
                  onChange={(values) => {
                    setPriceRange(values);
                    setPage(1);
                  }}
                  renderTrack={({ props, children }) => {
                    const { key, ...rest } = props as any;
                    return (
                      <div {...rest} className="h-3 w-full rounded bg-gray-100 relative">
                        <div
                          className="h-3 rounded bg-[#FA8232] absolute"
                          style={{
                            left: `${(priceRange[0] / MAX) * 100}%`,
                            right: `${100 - (priceRange[1] / MAX) * 100}%`,
                          }}
                        />
                        {children}
                      </div>
                    );
                  }}
                  renderThumb={({ props, index }) => {
  return (
    <div
      {...props}
      key={index} // <-- вот добавляем уникальный key для каждого thumb
      className="w-5 h-5 rounded-full border-2 border-[#FA8232] bg-white shadow cursor-pointer flex items-center justify-center"
    >
      <div className="w-[8px] h-[8px] rounded-full bg-white" />
    </div>
  );
}}
                />

                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  {Array.from({ length: 6 }, (_, i) => i * 2000).map((v) => (
                    <span key={v}>${v}</span>
                  ))}
                </div>
              </div>

              {/* Min / Max Price */}
              <div className="mt-4 flex gap-4">
                <input
                  type="number"
                  className="w-[150px] h-10 border border-gray-100 rounded-[3px] px-3 text-sm text-gray-700 outline-none"
                  value={priceRange[0]}
                  onChange={(e) => {
                    const val = Math.max(MIN, Number(e.target.value) || 0);
                    setPriceRange([Math.min(val, priceRange[1]), priceRange[1]]);
                    setPage(1);
                  }}
                  placeholder="Min Price"
                />
                <input
                  type="number"
                  className="w-[150px] h-10 border border-gray-100 rounded-[3px] px-3 text-sm text-gray-700 outline-none"
                  value={priceRange[1]}
                  onChange={(e) => {
                    let val = Number(e.target.value) || MAX;
                    if (val > MAX) val = MAX;
                    setPriceRange([priceRange[0], Math.max(val, priceRange[0])]);
                    setPage(1);
                  }}
                  placeholder="Max Price"
                />
              </div>

              {/* Радио диапазоны */}
              <div className="mt-4 w-[312px] flex flex-col gap-2">
                {[
                  { label: "All Price", min: MIN, max: MAX },
                  { label: "Under $20", min: 0, max: 20 },
                  { label: "$25 to $100", min: 25, max: 100 },
                  { label: "$100 to $300", min: 100, max: 300 },
                  { label: "$300 to $500", min: 300, max: 500 },
                  { label: "$500 to $1,000", min: 500, max: 1000 },
                  { label: "$1,000 to $10,000", min: 1000, max: 10000 },
                ].map((r, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
                  >
                    <input
                      type="radio"
                      name="priceRangeRadio"
                      className="peer hidden"
                      checked={priceRange[0] === r.min && priceRange[1] === r.max}
                      onChange={() => {
                        setPriceRange([r.min, r.max]);
                        setPage(1);
                      }}
                    />
                    <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center peer-checked:border-2 peer-checked:border-[#FA8232]" />
                    <span>{r.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <hr className="border-gray-100 my-6" />

            {/* Brands */}
            <div>
              <h2 className="text-gray-900 font-medium text-sm uppercase">Popular Brands</h2>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {brands.map((brand) => {
                  const active = selectedBrands.includes(brand);
                  return (
                    <button
                      key={brand}
                      onClick={() => toggleBrand(brand)}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span
                        className={`w-5 h-5 flex items-center justify-center ${
                          active
                            ? "bg-[#FA8232] border-2 border-[#FA8232] text-white"
                            : "bg-white border border-[#C9CFD2]"
                        }`}
                      >
                        {active && (
                          <svg
                            width="10"
                            height="7"
                            viewBox="0 0 10 7"
                            fill="none"
                          >
                            <path
                              d="M1 3.5L3.5 6L9 1"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="text-gray-700">{brand}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-gray-100 my-6" />

            {/* SVG-блок */}
            <div className="border rounded p-8 flex flex-col items-center gap-6">
              <Image src="/watch.svg" alt="watch" width={180} height={180} />
              <Image src="/series.svg" alt="series" width={248} height={175} />
              <div className="flex flex-col gap-3">
                <Image src="/add.svg" alt="add" width={248} height={48} />
                <Image src="/view.svg" alt="view" width={248} height={48} />
              </div>
            </div>
          </aside>

          {/* ===== ПРАВАЯ КОЛОНКА ===== */}
          <main className="flex flex-col">
            {/* Search */}
            <div className="flex items-center border rounded px-4 py-2 w-[424px]">
              <input
                type="text"
                placeholder="Search for anything..."
                className="flex-1 text-sm text-gray-500 outline-none"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
              <span className="w-5 h-5 bg-gray-300 rounded" />
            </div>

            {/* Active Filters */}
            <div className="mt-4 flex items-center justify-between bg-gray-50 px-6 py-3 rounded">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Active Filters:</span>
                {selectedCategory && (
                  <div className="flex items-center gap-2 bg-white border rounded px-3 py-1 text-sm">
                    <span className="text-gray-700">{selectedCategory}</span>
                    <button onClick={clearCategory} className="text-gray-500 text-xs">
                      ✕
                    </button>
                  </div>
                )}
                {selectedBrands.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2 bg-white border rounded px-3 py-1 text-sm"
                  >
                    <span className="text-gray-700">{b}</span>
                    <button
                      onClick={() => removeBrand(b)}
                      className="text-gray-500 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {filtered.length} results
              </div>
            </div>

            {/* Products Grid */}
            <div className="mt-6 grid grid-cols-4 gap-4">
              {paginated.length ? (
                paginated.map((p) => <ProductCard key={p.id} product={p} />)
              ) : (
                <div className="col-span-4 text-center text-gray-500 py-12">
                  No products found
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-3 mt-10 mb-[72px]">
              <button
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-full border"
                disabled={page === 1}
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm ${
                    page === n
                      ? "bg-[#FA8232] border-[#FA8232] text-white"
                      : "border-gray-200 text-gray-400"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                className="w-10 h-10 flex items-center justify-center rounded-full border"
                disabled={page === totalPages}
              >
                ›
              </button>
            </div>
          </main>
        </div>
      </Container>

      <Footer />
    </>
  );
}
