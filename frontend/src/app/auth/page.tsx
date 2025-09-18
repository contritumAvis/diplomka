// "use client";

// import { useState } from "react";
// import axios from "axios";

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       if (isLogin) {
//         const res = await axios.post("http://localhost:5000/api/auth/login", {
//           email: formData.email,
//           password: formData.password,
//         });
//         alert("✅ Успешный вход: " + res.data.message);
//         console.log(res.data);
//       } else {
//         const res = await axios.post("http://localhost:5000/api/auth/register", {
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//         });
//         alert("🎉 Регистрация успешна!");
//         console.log(res.data);
//       }
//     } catch (err: any) {
//       alert("❌ Ошибка: " + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-[424px] rounded-2xl shadow-lg bg-white p-6">
//         {/* Переключатель */}
//         <div className="flex mb-6">
//           <button
//             onClick={() => setIsLogin(true)}
//             className={`flex-1 py-2 text-lg font-semibold ${
//               isLogin ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
//             }`}
//           >
//             Login
//           </button>
//           <button
//             onClick={() => setIsLogin(false)}
//             className={`flex-1 py-2 text-lg font-semibold ${
//               !isLogin ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
//             }`}
//           >
//             Register
//           </button>
//         </div>

//         {/* Форма */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             {isLogin ? "Login" : "Register"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useState } from 'react';
import TopHeader from '@/components/header/Header';
import BottomHeader from '@/components/header/BottomHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useRouter } from 'next/navigation';
import api from '@/api/axios';
import { useUser } from '@/context/UserContext';
import Footer from "@/components/Footer";

export default function AuthPage() {
  const [tab, setTab] = useState<'signIn' | 'signUp'>('signIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { setUser } = useUser();

  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email || !password) return alert('Введите email и пароль');
    try {
      const res = await api.post('/auth/login', { email, password });
      const { token, user } = res.data;
      if (!token || !user) return alert('Неверный ответ сервера');
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      router.push('/');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Ошибка при входе');
    }
  };

  const handleSignUp = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email || !password) return alert('Введите email и пароль');
    try {
      await api.post('/auth/register', { email, password });
      alert('Регистрация успешна!');
      setTab('signIn');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Ошибка при регистрации');
    }
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

                  ]}
                /> 
                
</div>
</section>
      <div className="flex justify-center pt-[72px] pb-[72px] px-[748px] md:px-8">
        <div className="w-[424px] h-[504px] border border-gray-200 rounded-[4px] p-8 flex flex-col">
          
          {/* Tab переключение */}
         <div className="flex h-[20px] w-full border-b border-gray-200">
  <div
    onClick={() => setTab('signIn')}
    className={`w-1/2 h-full flex items-center justify-center cursor-pointer text-[20px] font-semibold text-center pb-4 ${
      tab === 'signIn' ? 'text-gray-900 border-b-4 border-orange-500' : 'text-gray-500'
    }`}
  >
    Sign In
  </div>
  <div
    onClick={() => setTab('signUp')}
    className={`w-1/2 h-full flex items-center justify-center cursor-pointer text-[20px] font-semibold text-center pb-4 ${
      tab === 'signUp' ? 'text-gray-900 border-b-4 border-orange-500' : 'text-gray-500'
    }`}
  >
    Sign Up
  </div>
          </div>

          <form
            onSubmit={tab === 'signIn' ? handleLogin : handleSignUp}
            className="flex flex-col gap-6 mt-6"
          >
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-normal text-gray-900">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[44px] w-full border border-gray-100 rounded-[2px] px-3 outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[14px] font-normal text-gray-900">Password</label>
                <button
                  type="button"
                  className="text-[14px] font-medium text-blue-500"
                  onClick={() => router.push('/')}
                >
                  Forget Password
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-[44px] w-full border border-gray-100 rounded-[2px] px-3 outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  onClick={() => setShowPassword(v => !v)}
                >
                  {showPassword ? <img src="/eye-open.svg" /> : <img src="/eye-closed.svg" />}
                </button>
              </div>
            </div>

            {/* Основная кнопка входа/регистрации */}
            <button
              type="submit"
              className="w-full h-[48px] bg-orange-500 text-white rounded-[2px] font-semibold hover:bg-orange-600 transition"
            >
              {tab === 'signIn' ? 'Sign In' : 'Sign Up'}
            </button>

            {/* Вход через SVG */}
            <div className="flex flex-col gap-4 ">
              <img
                src="/oror.svg"
                className="w-full h-[20px] object-contain cursor-pointer hover:scale-105 transition"
                onClick={() => router.push('/404')}
              />
              <img
                src="/ggg.svg"
                className="w-full h-[44px] object-contain cursor-pointer hover:scale-105 transition"
                onClick={() => router.push('/404')}
              />
              <img
                src="/apap.svg"
                className="w-full h-[44px] object-contain cursor-pointer hover:scale-105 transition"
                onClick={() => router.push('/404')}
              />
            </div>
          </form>
          
        </div>
        
      </div>
      <Footer/>
    </>
  );
}
