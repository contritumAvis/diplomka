'use client';
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <section className="w-full flex justify-center items-center px-4 py-12 relative">
      <div className="w-full max-w-[1320px] h-auto flex flex-col items-center">
        
       
        <div className="w-full flex justify-center mb-10">
          <motion.div
            className="w-[80%] max-w-[600px] h-auto"
            initial={{ opacity: 0, y: 50 }} // Начальное состояние: невидим и снизу
            animate={{ opacity: 1, y: 0 }}  // Конечное: видим и на месте
            transition={{ duration: 1.5, ease: "easeOut" }} // Время и плавность
          >
            <img
              src="ErrorRobot.svg"
              alt="Banner"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Второй блок */}
        <div className="flex flex-col items-center text-center gap-6 w-full max-w-[840px] px-4">
          {/* Заголовок 404 */}
          <h1 className="font-semibold text-[36px] leading-[44px] text-black font-['Public Sans']">
            404, Page not found
          </h1>

          {/* Описание */}
          <p className="font-normal text-[16px] leading-[24px] text-black font-['Public Sans']">
            Something went wrong. It looks like your request could not be found. <br />
            It looks like the link is broken or the page is removed.
          </p>

          {/* SVG-кнопки */}
          <div className="flex flex-row justify-center items-center gap-4 mt-2 flex-wrap">
            <img
              src="errorBack.svg"
              alt="button"
              className="cursor-pointer h-auto object-contain"
              onClick={() => router.back()}
              
            />
        
            {/* Кнопка 2 */}
             <img
              src="errorMenu.svg"
              alt="button"
              className="cursor-pointer h-auto object-contain"
              onClick={() => router.push('/')}
            />
              
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
