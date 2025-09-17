// "use client";

// import React from "react";
// import Container from "@/components/ui/Container";
// import Image from "next/image";

// export default function SubscribeSection() {
//   return (
//     <section className="w-full bg-[#1B6392] py-16 px-[300px] flex flex-col items-center gap-8 max-xl:px-10">
//       <Container>
//         {/* Первый див (заголовок + описание) */}
//         <div className="flex flex-col items-center gap-3 text-center max-w-[1320px] mx-auto">
//           <h2 className="text-white font-semibold text-[32px] leading-[40px]">
//             Subscribe to our newsletter
//           </h2>
//           <p className="text-white/70 text-[16px] leading-[24px] max-w-[536px]">
//             Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
//             libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
//           </p>
//         </div>

//         {/* Второй див (форма подписки) */}
//         <div className="mt-8 flex w-full max-w-[624px] mx-auto bg-white rounded-md shadow-[0px_12px_24px_0px_#0000001F] items-center px-6 py-3 gap-4">
//           <input
//             type="email"
//             placeholder="Email address"
//             className="flex-1 outline-none text-[16px] leading-[24px] text-[#77878F] placeholder-[#77878F]"
//           />
//           <button className="flex items-center justify-center gap-2 bg-[#FA8232] text-white font-bold text-[14px] leading-[48px] tracking-[0.012em] uppercase rounded-sm w-[160px] h-[48px]">
//             Subscribe
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M3.125 10H16.875"
//                 stroke="white"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M11.25 4.375L16.875 10L11.25 15.625"
//                 stroke="white"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Третий див (SVG логотипы компаний) */}
//         <div className="mt-8 flex justify-center">
//           <Image
//             src="/companiesss.svg"
//             alt="Companies"
//             width={552}
//             height={72}
//             className="h-[72px] w-auto"
//           />
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import axios from "@/api/axios"; // твой axios instance

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("⚠️ Введите email");
      return;
    }
    try {
      const res = await axios.post("/subscribe", { email });
      if (res.status === 200) {
        setStatus("✅ Письмо отправлено!");
        setEmail(""); // очищаем инпут
      }
    } catch (error) {
      setStatus("❌ Ошибка при отправке");
    }
  };

  return (
    <section className="w-full bg-[#1B6392] py-16 px-[300px] flex flex-col items-center gap-8 max-xl:px-10">
      <Container>
        {/* Первый див (заголовок + описание) */}
        <div className="flex flex-col items-center gap-3 text-center max-w-[1320px] mx-auto">
          <h2 className="text-white font-semibold text-[32px] leading-[40px]">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/70 text-[16px] leading-[24px] max-w-[536px]">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
        </div>

        {/* Второй див (форма подписки) */}
        <div className="mt-8 flex w-full max-w-[624px] mx-auto bg-white rounded-md shadow-[0px_12px_24px_0px_#0000001F] items-center px-6 py-3 gap-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 outline-none text-[16px] leading-[24px] text-[#77878F] placeholder-[#77878F]"
          />
          <button
            type="button"
            onClick={handleSubscribe}
            className="flex items-center justify-center gap-2 bg-[#FA8232] text-white font-bold text-[14px] leading-[48px] tracking-[0.012em] uppercase rounded-sm w-[160px] h-[48px]"
          >
            Subscribe
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.125 10H16.875"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 4.375L16.875 10L11.25 15.625"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Статус отправки */}
        {status && (
          <p className="mt-4 text-center text-white font-medium">{status}</p>
        )}

        {/* Третий див (SVG логотипы компаний) */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/companiesss.svg"
            alt="Companies"
            width={552}
            height={72}
            className="h-[72px] w-auto"
          />
        </div>
      </Container>
    </section>
  );
}
