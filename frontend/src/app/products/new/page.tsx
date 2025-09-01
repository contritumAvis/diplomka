// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function AddProductPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [brandId, setBrandId] = useState("");      // опционально
//   const [categoryId, setCategoryId] = useState(""); // опционально
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       if (brandId) formData.append("brandId", brandId);
//       if (categoryId) formData.append("categoryId", categoryId);
//       if (image) formData.append("image", image);

//       const res = await fetch("http://localhost:5000/api/products", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data?.message || "Ошибка при создании продукта");

//       // успех → редирект на список
//       router.push("/products");
//       router.refresh();
//     } catch (error) {
//       console.error(error);
//       setMessage("❌ Не удалось создать продукт");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Добавить продукт</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input className="w-full border rounded p-2" placeholder="Название" value={name} onChange={e=>setName(e.target.value)} required />
//         <textarea className="w-full border rounded p-2" placeholder="Описание" value={description} onChange={e=>setDescription(e.target.value)} />
//         <input className="w-full border rounded p-2" type="number" placeholder="Цена" value={price} onChange={e=>setPrice(e.target.value)} required />
//         {/* Если нужны связи */}
//         <input className="w-full border rounded p-2" placeholder="brandId (необязательно)" value={brandId} onChange={e=>setBrandId(e.target.value)} />
//         <input className="w-full border rounded p-2" placeholder="categoryId (необязательно)" value={categoryId} onChange={e=>setCategoryId(e.target.value)} />
//         <input className="w-full" type="file" accept="image/*" onChange={e=>setImage(e.target.files?.[0] || null)} />
//         <button disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
//           {loading ? "Загрузка..." : "Создать"}
//         </button>
//       </form>
//       {message && <p className="mt-4 text-center font-medium">{message}</p>}
//     </div>
//   );
// }
"use client";

// import { useState } from "react";
// import axios from "axios";

// export default function AddProductForm() {
//   const [title, setTitle] = useState("");
//   const [basePrice, setBasePrice] = useState("");
//   const [image, setImage] = useState<File | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!image) {
//       alert("Выберите картинку");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("basePrice", basePrice);
//     formData.append("image", image);

//     await axios.post("http://localhost:5000/products", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     setTitle("");
//     setBasePrice("");
//     setImage(null);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Название"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Цена"
//         value={basePrice}
//         onChange={(e) => setBasePrice(e.target.value)}
//       />
//       <input
//         type="file"
//         onChange={(e) => setImage(e.target.files?.[0] || null)}
//       />
//       <button type="submit">Добавить</button>
//     </form>
//   );
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import axios from "axios";

// export default function AddProduct() {
//   const [name, setName] = useState("");
//   const [basePrice, setBasePrice] = useState("");
//   const [images, setImages] = useState<FileList | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("basePrice", basePrice);

//     if (images) {
//       Array.from(images).forEach((file) => {
//         formData.append("images", file);
//       });
//     }

//     const res = await axios.post("http://localhost:5000/products", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     console.log(res.data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Название" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="number" placeholder="Цена" value={basePrice} onChange={(e) => setBasePrice(e.target.value)} />
//       <input type="file" multiple onChange={(e) => setImages(e.target.files)} />
//       <button type="submit">Добавить</button>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [images, setImages] = useState<FileList | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("basePrice", basePrice);

    if (images) {
      Array.from(images).forEach((file) => {
        formData.append("images", file);
      });
    }

    const res = await axios.post("http://localhost:5000/api/products", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("✅ Товар создан:", res.data);

    setName("");
    setBasePrice("");
    setImages(null);
    alert("Товар добавлен!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Цена"
        value={basePrice}
        onChange={(e) => setBasePrice(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input type="file" multiple onChange={(e) => setImages(e.target.files)} />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Добавить
      </button>
    </form>
  );
}
