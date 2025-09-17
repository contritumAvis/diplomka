// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function ProductGallery({ images }: { images: string[] }) {
//   const [active, setActive] = useState(0);

//   return (
//     <div>
//       {/* Главное изображение */}
//       <motion.div
//         key={active}
//         className="w-full flex justify-center items-center mb-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <img
//           src={images[active]}
//           alt="Product"
//           className="rounded-2xl shadow-md max-h-[500px] object-contain border border-gray-200"
//         />
//       </motion.div>

//       {/* Превью */}
//       <div className="flex gap-2 justify-center">
//         {images.map((img, idx) => (
//           <button
//             key={idx}
//             onClick={() => setActive(idx)}
//             className={`w-20 h-20 border-2 rounded-lg overflow-hidden ${
//               active === idx ? "border-blue-600" : "border-gray-200"
//             }`}
//           >
//             <img
//               src={img}
//               alt={`thumb-${idx}`}
//               className="object-cover w-full h-full"
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }










"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = { images: string[] };

const FALLBACK = "/placeholder.png";

function toSix(imgs: string[]): string[] {
  const clean = (imgs ?? []).filter(Boolean);
  const base = clean.length ? clean : [FALLBACK];
  const out: string[] = [];
  for (let i = 0; i < 6; i++) out.push(base[i % base.length]);
  return out.slice(0, 6);
}

export default function ProductGallery({ images }: Props) {
  const thumbs = useMemo(() => toSix(images), [images]);
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const max = thumbs.length;
  const go = (dir: -1 | 1) => () => setIndex((i) => (i + dir + max) % max);

  return (
    <div className="w-full max-w-[616px] select-none">
      {/* Главное изображение */}
      <div
        className="w-[616px] h-[464px] rounded-[4px] overflow-hidden flex items-center justify-center border cursor-pointer"
        style={{ borderColor: "var(--gray-100, #EEF2F6)" }}
        onClick={() => setModalOpen(true)}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={thumbs[index] + index}
            src={thumbs[index]}
            alt={`Изображение товара ${index + 1}`}
            className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.18 }}
            onError={(e) => (e.currentTarget.src = FALLBACK)}
          />
        </AnimatePresence>
      </div>

      {/* Превью с кастомными стрелками */}
      <div className="relative mt-6 w-[616px] h-[96px]">
        {/* Стрелка влево */}
        <button
          aria-label="Предыдущее изображение"
          onClick={go(-1)}
          className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 active:scale-95 transition"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="1" y="1" width="46" height="46" rx="23" fill="var(--primary-500,#FA8232)" />
            <rect x="1" y="1" width="46" height="46" rx="23" stroke="white" strokeWidth="2" />
            <path d="M32.25 24H15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22.5 17.25L15.75 24L22.5 30.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Стрелка вправо */}
        <button
          aria-label="Следующее изображение"
          onClick={go(1)}
          className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 active:scale-95 transition"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="1" y="1" width="46" height="46" rx="23" fill="var(--primary-500,#FA8232)" />
            <rect x="1" y="1" width="46" height="46" rx="23" stroke="white" strokeWidth="2" />
            <path d="M15.75 24H32.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M25.5 17.25L32.25 24L25.5 30.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Превью */}
        <div className="flex h-[96px] gap-[6px]">
          {thumbs.map((src, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="w-[96px] h-[96px] rounded-[2px] border-2 overflow-hidden flex items-center justify-center"
                style={{
                  borderColor: active
                    ? "var(--primary-500,#FA8232)"
                    : "var(--gray-100,#EEF2F6)",
                }}
              >
                <img src={src} alt={`Миниатюра ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Модалка */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.img
              src={thumbs[index]}
              alt="Fullscreen"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type Props = {
//   images?: string[];
// };

// const FALLBACK = "/placeholder.png";

// /**
//  * If there are fewer images than 6, duplicate them to reach 6 (per spec).
//  */
// function toSix(imgs: string[]): string[] {
//   const clean = (imgs || []).filter(Boolean);
//   const base = clean.length ? clean : [FALLBACK];
//   const out: string[] = [];
//   for (let i = 0; i < 6; i++) out.push(base[i % base.length]);
//   return out;
// }

// export default function ProductGallery({ images = [] }: Props) {
//   const safe = images.length ? images : [FALLBACK];
//   const thumbs = useMemo(() => toSix(safe), [safe]);

//   const visible = 6; // number of thumbnails visible in the rail
//   const [index, setIndex] = useState<number>(0);
//   const [offset, setOffset] = useState<number>(0);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);

//   const maxOffset = Math.max(0, thumbs.length - visible);

//   const handlePrevOffset = () => setOffset((p) => Math.max(0, p - 1));
//   const handleNextOffset = () => setOffset((p) => Math.min(maxOffset, p + 1));

//   const prevImage = () => setIndex((i) => (i - 1 + thumbs.length) % thumbs.length);
//   const nextImage = () => setIndex((i) => (i + 1) % thumbs.length);

//   useEffect(() => {
//     if (!modalOpen) return;
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") setModalOpen(false);
//       if (e.key === "ArrowLeft") prevImage();
//       if (e.key === "ArrowRight") nextImage();
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [modalOpen, thumbs.length]);

//   // Keep index in bounds in case thumbs length changes
//   useEffect(() => {
//     if (index >= thumbs.length) setIndex(0);
//   }, [thumbs.length]);

//   return (
//     <>
//       {/* MAIN image container */}
//       <div className="w-full">
//         <div
//           className="w-full bg-white rounded-[4px] overflow-hidden border border-gray-100 flex items-center justify-center cursor-pointer"
//           style={{ minHeight: 200 }}
//           onClick={() => setModalOpen(true)}
//         >
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={`${thumbs[index]}-${index}`}
//               src={thumbs[index]}
//               alt={`Product image ${index + 1}`}
//               className="w-full h-auto max-h-[64vh] object-contain"
//               initial={{ opacity: 0, scale: 0.995 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.005 }}
//               transition={{ duration: 0.18 }}
//               onError={(e) => {
//                 e.currentTarget.src = FALLBACK;
//               }}
//             />
//           </AnimatePresence>
//         </div>

//         {/* THUMB RAIL */}
//         <div className="mt-4 relative">
//           {/* Left arrow (moves thumbnail window left) */}
//           <button
//             onClick={handlePrevOffset}
//             disabled={offset === 0}
//             aria-label="prev thumbs"
//             className={`absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full items-center justify-center bg-white border ${
//               offset === 0 ? "opacity-40 pointer-events-none" : ""
//             }`}
//           >
//             {/* SVG left */}
//             <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <rect x="1" y="1" width="46" height="46" rx="23" fill="#FA8232" />
//               <rect x="1" y="1" width="46" height="46" rx="23" stroke="white" strokeWidth="2" />
//               <path d="M32.25 24H15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//               <path d="M22.5 17.25L15.75 24L22.5 30.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//           </button>

//           {/* Thumbs — horizontally scrollable on small screens */}
//           <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 px-1">
//             {thumbs.slice(offset, offset + visible).map((src, i) => {
//               const realIdx = offset + i;
//               const active = realIdx === index;
//               return (
//                 <motion.button
//                   key={realIdx}
//                   onClick={() => setIndex(realIdx)}
//                   whileTap={{ scale: 0.985 }}
//                   className="flex-shrink-0 rounded-[2px] overflow-hidden border-2 flex items-center justify-center"
//                   style={{
//                     width: 96,
//                     height: 96,
//                     borderColor: active ? "var(--primary-500,#FA8232)" : "var(--gray-100,#EEF2F6)",
//                     transition: "border-color 180ms",
//                   }}
//                 >
//                   <img
//                     src={src}
//                     alt={`thumb-${realIdx}`}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.currentTarget.src = FALLBACK;
//                     }}
//                   />
//                 </motion.button>
//               );
//             })}
//           </div>

//           {/* Right arrow (moves thumbnail window right) */}
//           <button
//             onClick={handleNextOffset}
//             disabled={offset === maxOffset}
//             aria-label="next thumbs"
//             className={`absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full items-center justify-center bg-white border ${
//               offset === maxOffset ? "opacity-40 pointer-events-none" : ""
//             }`}
//           >
//             {/* SVG right */}
//             <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <rect x="1" y="1" width="46" height="46" rx="23" fill="#FA8232" />
//               <rect x="1" y="1" width="46" height="46" rx="23" stroke="white" strokeWidth="2" />
//               <path d="M15.75 24H32.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//               <path d="M25.5 17.25L32.25 24L25.5 30.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* LIGHTBOX / MODAL */}
//       <AnimatePresence>
//         {modalOpen && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setModalOpen(false)}
//           >
//             {/* Left nav inside modal */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 prevImage();
//               }}
//               className="absolute left-4 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white"
//               aria-label="Prev image"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             {/* The image */}
//             <motion.img
//               key={`modal-${index}-${thumbs[index]}`}
//               src={thumbs[index]}
//               alt={`Fullscreen ${index + 1}`}
//               className="max-w-[90vw] max-h-[90vh] object-contain rounded-md"
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             />

//             {/* Right nav inside modal */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 nextImage();
//               }}
//               className="absolute right-4 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white"
//               aria-label="Next image"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//             {/* Close button (mobile & desktop) */}
//             <button
//               onClick={() => setModalOpen(false)}
//               className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
//               aria-label="Close"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
