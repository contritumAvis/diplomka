// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import axios from '@/api/axios'; // <-- ваш axios instance (frontend/src/api/axios)
// import { useRouter } from 'next/navigation';

// type Props = {
//   onClose?: () => void;
// };

// export default function UserDropdown({ onClose }: Props) {
//   const [open, setOpen] = useState(false); // local open — parent can control too
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null);
//   const router = useRouter();

//   // close on outside click
//   useEffect(() => {
//     function onDoc(e: MouseEvent) {
//       if (!ref.current) return;
//       if (!ref.current.contains(e.target as Node)) {
//         setOpen(false);
//         onClose?.();
//       }
//     }
//     document.addEventListener('click', onDoc);
//     return () => document.removeEventListener('click', onDoc);
//   }, [onClose]);

//   // keyboard: ESC to close
//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === 'Escape') {
//         setOpen(false);
//         onClose?.();
//       }
//     }
//     document.addEventListener('keydown', onKey);
//     return () => document.removeEventListener('keydown', onKey);
//   }, [onClose]);

//   const toggleOpen = (value?: boolean) => setOpen(prev => (typeof value === 'boolean' ? value : !prev));

//   const handleLogin = async (e?: React.FormEvent) => {
//     e?.preventDefault();
//     try {
//       // JSON Server style: GET /users?email=...&password=...
//       const res = await axios.get(`/users`, { params: { email, password } });
//       const data = res.data;
//       if (Array.isArray(data) && data.length > 0) {
//         const user = data[0];
//         // store minimal user in localStorage — later you can replace with real session/token
//         localStorage.setItem('user', JSON.stringify({ id: user.id, email: user.email, name: user.name }));
//         alert('Вы успешно вошли!');
//         setOpen(false);
//         onClose?.();
//         // you can navigate or reload to update header state
//         router.refresh();
//       } else {
//         alert('Пользователь не найден. Проверьте почту и пароль.');
//       }
//     } catch (err) {
//       console.error('Login error', err);
//       alert('Ошибка при попытке входа.');
//     }
//   };

//   const goToRegister = () => {
//     setOpen(false);
//     router.push('/register');
//   };

//   return (
//     <div className="relative" ref={ref}>
//       {/* Icon button: parent can place this where needed. We assume this component is used together with the icon. */}
//       <button
//         onClick={() => toggleOpen()}
//         onMouseEnter={() => toggleOpen(true)}
//         className="w-8 h-8 flex items-center justify-center"
//         aria-haspopup="true"
//         aria-expanded={open}
//       >
//         <img src="/user.svg" alt="User" className="w-5 h-5" />
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div
//           className="absolute right-0 mt-2 w-[424px] max-w-[92vw] bg-white border border-gray-200 rounded shadow-lg z-50"
//           style={{ top: '204px', left: 'auto' }}
//           onMouseLeave={() => { /* keep open for click on mobile; mouseLeave still allows hover-close */ }}
//         >
//           <div className="p-8">
//             {/* First main block */}
//             <div className="w-full max-w-[360px] mx-auto h-auto flex flex-col gap-5">
//               <div className="text-center">
//                 <div className="text-[20px] font-semibold leading-7 text-gray-900">Sign in to your account</div>
//               </div>

//               {/* Email block */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-[14px] leading-5 text-gray-900">Email Address</label>
//                 <input
//                   className="h-11 px-3 border border-[#E4E7E9] rounded-[2px] outline-none"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                 />
//               </div>

//               {/* Password block */}
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center justify-between">
//                   <label className="text-[14px] leading-5 text-gray-900">Password</label>
//                   <button
//                     onClick={() => router.push('/forgot-password')}
//                     className="text-[14px] font-medium"
//                     style={{ color: 'var(--secondary-500, #6B7280)' }}
//                   >
//                     Forget Password
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <input
//                     className="h-11 w-full px-3 border border-gray-100 rounded-[2px] outline-none"
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(v => !v)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center"
//                     aria-label={showPassword ? 'Hide password' : 'Show password'}
//                   >
//                     {/* Eye svg (same as you provided) */}
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M10 3.54166C3.75 3.54166 1.25 9.99999 1.25 9.99999C1.25 9.99999 3.75 16.4583 10 16.4583C16.25 16.4583 18.75 9.99999 18.75 9.99999C18.75 9.99999 16.25 3.54166 10 3.54166Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Login button (loggg.svg) */}
//                 <div className="pt-2">
//                   <button onClick={handleLogin} className="w-full h-12 flex items-center justify-center rounded-[2px] px-6 py-2 border">
//                     {/* Using image from public/loggg.svg */}
//                     <img src="/loggg.svg" alt="Log In" className="h-6" />
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Second small block (register button) */}
//           <div className="w-full border-t border-gray-100 p-8 pt-0 flex justify-center">
//             <button onClick={goToRegister} className="w-full max-w-[360px] h-20 flex items-center justify-center rounded-[2px]">
//               <img src="/create.svg" alt="Create account" style={{ width: 360, height: 80 }} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }








































// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import axios from '@/api/axios'; // <-- твой axios instance (frontend/src/api/axios)
// import { useRouter } from 'next/navigation';

// type Props = {
//   onClose?: () => void;
// };

// export default function UserDropdown({ onClose }: Props) {
//   const [open, setOpen] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null);
//   const router = useRouter();

//   // close on outside click
//   useEffect(() => {
//     function onDoc(e: MouseEvent) {
//       if (!ref.current) return;
//       if (!ref.current.contains(e.target as Node)) {
//         setOpen(false);
//         onClose?.();
//       }
//     }
//     document.addEventListener('click', onDoc);
//     return () => document.removeEventListener('click', onDoc);
//   }, [onClose]);

//   // keyboard: ESC to close
//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === 'Escape') {
//         setOpen(false);
//         onClose?.();
//       }
//     }
//     document.addEventListener('keydown', onKey);
//     return () => document.removeEventListener('keydown', onKey);
//   }, [onClose]);

//   const toggleOpen = (value?: boolean) =>
//     setOpen(prev => (typeof value === 'boolean' ? value : !prev));

//   const handleLogin = async (e?: React.FormEvent) => {
//     e?.preventDefault();
//     try {
//       const res = await axios.get(`/users`, { params: { email, password } });
//       const data = res.data;
//       if (Array.isArray(data) && data.length > 0) {
//         const user = data[0];
//         localStorage.setItem(
//           'user',
//           JSON.stringify({ id: user.id, email: user.email, name: user.name })
//         );
//         alert('Вы успешно вошли!');
//         setOpen(false);
//         onClose?.();
//         router.refresh();
//       } else {
//         alert('Пользователь не найден. Проверьте почту и пароль.');
//       }
//     } catch (err) {
//       console.error('Login error', err);
//       alert('Ошибка при попытке входа.');
//     }
//   };

//   const goToRegister = () => {
//     setOpen(false);
//     router.push('/register');
//   };

//   return (
//     <div className="relative" ref={ref}>
//       {/* Icon button */}
//       <button
//         onClick={() => toggleOpen()}
//         onMouseEnter={() => toggleOpen(true)}
//         className="w-8 h-8 flex items-center justify-center"
//         aria-haspopup="true"
//         aria-expanded={open}
//       >
//         <img src="/user.svg" alt="User" className="w-5 h-5" />
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div
//           className="absolute right-0 mt-2 w-[424px] max-w-[92vw] bg-white border border-gray-200 rounded shadow-lg z-50"
//         >
//           <div className="p-8">
//             {/* First main block */}
//             <div className="w-full max-w-[360px] mx-auto h-auto flex flex-col gap-5">
//               <div className="text-center">
//                 <div className="text-[20px] font-semibold leading-7 text-gray-900">
//                   Sign in to your account
//                 </div>
//               </div>

//               {/* Email block */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-[14px] leading-5 text-gray-900">
//                   Email Address
//                 </label>
//                 <input
//                   className="h-11 px-3 border border-[#E4E7E9] rounded-[2px] outline-none"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                 />
//               </div>

//               {/* Password block */}
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center justify-between">
//                   <label className="text-[14px] leading-5 text-gray-900">
//                     Password
//                   </label>
//                   <button
//                     onClick={() => router.push('/forgot-password')}
//                     className="text-[14px] font-medium"
//                     style={{ color: 'var(--secondary-500, #6B7280)' }}
//                   >
//                     Forget Password
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <input
//                     className="h-11 w-full px-3 border border-gray-100 rounded-[2px] outline-none"
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(v => !v)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center"
//                     aria-label={showPassword ? 'Hide password' : 'Show password'}
//                   >
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10 3.54166C3.75 3.54166 1.25 9.99999 1.25 9.99999C1.25 9.99999 3.75 16.4583 10 16.4583C16.25 16.4583 18.75 9.99999 18.75 9.99999C18.75 9.99999 16.25 3.54166 10 3.54166Z"
//                         stroke="#191C1F"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
//                         stroke="#191C1F"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Login button */}
//                {/* Login button */}
// <div className="pt-2">
//   <button
//     onClick={handleLogin}
//     className="w-full flex items-center justify-center"
//   >
//     <img
//       src="/loggg.svg"
//       alt="Log In"
//       className="w-full h-auto max-h-12 object-contain"
//     />
//   </button>
// </div>

//               </div>
//             </div>
//           </div>

//           {/* Second small block (register button) */}
//           <div className="w-full border-t border-gray-100 p-8 pt-0 flex justify-center">
//             <button
//               onClick={goToRegister}
//               className="w-full max-w-[360px] h-20 flex items-center justify-center rounded-[2px]"
//             >
//               <img
//                 src="/create.svg"
//                 alt="Create account"
//                 style={{ width: 360, height: 80 }}
//               />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import axios from '@/api/axios'; 
// import { useRouter } from 'next/navigation';
// import { useUser } from '@/context/UserContext';

// type Props = {
//   onClose?: () => void;
// };

// export default function UserDropdown({ onClose }: Props) {
//   const [open, setOpen] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null);
//   const router = useRouter();
//   const { setUser } = useUser();

//   useEffect(() => {
//     function onDoc(e: MouseEvent) {
//       if (!ref.current) return;
//       if (!ref.current.contains(e.target as Node)) {
//         setOpen(false);
//         onClose?.();
//       }
//     }
//     document.addEventListener('click', onDoc);
//     return () => document.removeEventListener('click', onDoc);
//   }, [onClose]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === 'Escape') {
//         setOpen(false);
//         onClose?.();
//       }
//     }
//     document.addEventListener('keydown', onKey);
//     return () => document.removeEventListener('keydown', onKey);
//   }, [onClose]);

//   const toggleOpen = (value?: boolean) =>
//     setOpen(prev => (typeof value === 'boolean' ? value : !prev));

//   // 🟢 Новый логин
//   const handleLogin = async (e?: React.FormEvent) => {
//     e?.preventDefault();
//     try {
//       const res = await axios.post('/auth/login', { email, password });
//       const { token, user } = res.data;

//       // Сохраняем токен и данные юзера
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify({
//         id: user.id,
//         email: user.email,
//         name: user.name,
//         role: user.role
//       }));

//       alert('Вы успешно вошли!');
//       setOpen(false);
//       onClose?.();
//       router.refresh();
//       setUser(user); // ВОАВОАОВЫАОВООВ НЕ ЗАБЫЫТЬ
//     } catch (err: any) {
//       console.error('Login error', err);
//       alert(err.response?.data?.message || 'Ошибка при попытке входа.');
//     }
    
//   };

//   const goToRegister = () => {
//     setOpen(false);
//     router.push('/register');
//   };

//   return (
//     <div className="relative" ref={ref}>
//       <button
//         onClick={() => toggleOpen()}
//         onMouseEnter={() => toggleOpen(true)}
//         className="w-8 h-8 flex items-center justify-center"
//         aria-haspopup="true"
//         aria-expanded={open}
//       >
//         <img src="/user.svg" alt="User" className="w-5 h-5" />
//       </button>

//       {open && (
//         <div className="absolute right-0 mt-2 w-[424px] max-w-[92vw] bg-white border border-gray-200 rounded shadow-lg z-50">
//           <div className="p-8">
//             <div className="w-full max-w-[360px] mx-auto h-auto flex flex-col gap-5">
//               <div className="text-center">
//                 <div className="text-[20px] font-semibold leading-7 text-gray-900">
//                   Sign in to your account
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label className="text-[14px] leading-5 text-gray-900">Email Address</label>
//                 <input
//                   className="h-11 px-3 border border-[#E4E7E9] rounded-[2px] outline-none"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                 />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center justify-between">
//                   <label className="text-[14px] leading-5 text-gray-900">Password</label>
//                   <button
//                     onClick={() => router.push('/forgot-password')}
//                     className="text-[14px] font-medium"
//                     style={{ color: 'var(--secondary-500, #6B7280)' }}
//                   >
//                     Forget Password
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <input
//                     className="h-11 w-full px-3 border border-gray-100 rounded-[2px] outline-none"
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(v => !v)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center"
//                     aria-label={showPassword ? 'Hide password' : 'Show password'}
//                   >
//                     {/* SVG глаза */}
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10 3.54166C3.75 3.54166 1.25 9.99999 1.25 9.99999C1.25 9.99999 3.75 16.4583 10 16.4583C16.25 16.4583 18.75 9.99999 18.75 9.99999C18.75 9.99999 16.25 3.54166 10 3.54166Z"
//                         stroke="#191C1F"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
//                         stroke="#191C1F"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 <div className="pt-2">
//                   <button
//                     onClick={handleLogin}
//                     className="w-full flex items-center justify-center"
//                   >
//                     <img
//                       src="/loggg.svg"
//                       alt="Log In"
//                       className="w-full h-auto max-h-12 object-contain"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full border-t border-gray-100 p-8 pt-0 flex justify-center">
//             <button
//               onClick={goToRegister}
//               className="w-full max-w-[360px] h-20 flex items-center justify-center rounded-[2px]"
//             >
//               <img
//                 src="/create.svg"
//                 alt="Create account"
//                 style={{ width: 360, height: 80 }}
//               />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }














// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import api from '@/api/axios'; 
// import { useRouter } from 'next/navigation';
// import { useUser } from '@/context/UserContext';

// type Props = { onClose?: () => void };

// export default function UserDropdown({ onClose }: Props) {
//   const [open, setOpen] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null);
//   const router = useRouter();
//   const { setUser } = useUser();

//   useEffect(() => {
//     const onDoc = (e: MouseEvent) => {
//       if (!ref.current?.contains(e.target as Node)) {
//         setOpen(false);
//         onClose?.();
//       }
//     };
//     document.addEventListener('click', onDoc);
//     return () => document.removeEventListener('click', onDoc);
//   }, [onClose]);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         setOpen(false);
//         onClose?.();
//       }
//     };
//     document.addEventListener('keydown', onKey);
//     return () => document.removeEventListener('keydown', onKey);
//   }, [onClose]);

//   const toggleOpen = (value?: boolean) => setOpen(prev => typeof value === 'boolean' ? value : !prev);

//   const handleLogin = async (e?: React.FormEvent) => {
//     e?.preventDefault();
//     try {
//       const res = await api.post('/auth/login', { email, password });
//       const { token, user } = res.data;

//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));

//       alert('Вы успешно вошли!');
//       setOpen(false);
//       onClose?.();
//       setUser(user);
//       router.refresh();
//     } catch (err: any) {
//       console.error('Login error', err);
//       alert(err.response?.data?.message || 'Ошибка при попытке входа.');
//     }
//   };

//   const goToRegister = () => {
//     setOpen(false);
//     router.push('/auth');
//   };

//   return (
//     <div className="relative" ref={ref}>
//       <button onClick={() => toggleOpen()} onMouseEnter={() => toggleOpen(true)} className="w-8 h-8 flex items-center justify-center">
//         <img src="/user.svg" alt="User" className="w-5 h-5" />
//       </button>

//       {open && (
//         <div className="absolute right-0 mt-2 w-[424px] max-w-[92vw] bg-white border border-gray-200 rounded shadow-lg z-50">
//           <div className="p-8">
//             <div className="w-full max-w-[360px] mx-auto h-auto flex flex-col gap-5">
//               <div className="text-center">
//                 <div className="text-[20px] font-semibold leading-7 text-gray-900">Sign in to your account</div>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label className="text-[14px] leading-5 text-gray-900">Email Address</label>
//                 <input
//                   className="h-11 px-3 border border-[#E4E7E9] rounded-[2px] outline-none"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                 />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center justify-between">
//                   <label className="text-[14px] leading-5 text-gray-900">Password</label>
//                   <button
//                     onClick={() => router.push('/forgot-password')}
//                     className="text-[14px] font-medium"
//                     style={{ color: 'var(--secondary-500, #6B7280)' }}
//                   >
//                     Forget Password
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <input
//                     className="h-11 w-full px-3 border border-gray-100 rounded-[2px] outline-none"
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(v => !v)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center"
//                     aria-label={showPassword ? 'Hide password' : 'Show password'}
//                   >
//                     {/* SVG глаза */}
//                   </button>
//                 </div>

//                 <div className="pt-2">
//                   <button onClick={handleLogin} className="w-full flex items-center justify-center">
//                     <img src="/loggg.svg" alt="Log In" className="w-full h-auto max-h-12 object-contain" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full border-t border-gray-100 p-8 pt-0 flex justify-center">
//             <button onClick={goToRegister} className="w-full max-w-[360px] h-20 flex items-center justify-center rounded-[2px]">
//               <img src="/create.svg" alt="Create account" style={{ width: 360, height: 80 }} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import React, { useEffect, useRef, useState } from 'react';
import api from '@/api/axios';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

type Props = { onClose?: () => void };

export default function UserDropdown({ onClose }: Props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
        onClose?.();
      }
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        onClose?.();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const toggleOpen = (value?: boolean) => setOpen(prev => typeof value === 'boolean' ? value : !prev);

  // --------------------------
  // Исправленный handleLogin
  // --------------------------
  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();

    console.log('Отправляем на логин:', { email, password });

    if (!email || !password) {
      alert('Введите email и пароль');
      return;
    }

    try {
      const res = await api.post('/auth/login', { email, password });
      console.log('Ответ сервера:', res.data);

      // ⚠️ Убедись, что сервер возвращает { token, user }
      const { token, user } = res.data;

      if (!token || !user) {
        alert('Неверный ответ сервера');
        return;
      }

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert('Вы успешно вошли!');
      setOpen(false);
      onClose?.();
      setUser(user);
      useUser
      router.refresh();
    } catch (err: any) {
      console.error('Login error:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Ошибка при попытке входа. Проверьте email и пароль.');
    }
  };

  const goToRegister = () => {
    setOpen(false);
    router.push('/auth');
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => toggleOpen()}
        onMouseEnter={() => toggleOpen(true)}
        className="w-8 h-8 flex items-center justify-center"
      >
        <img src="/user.svg" alt="User" className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[424px] max-w-[92vw] bg-white border border-gray-200 rounded shadow-lg z-50">
          <div className="p-8">
            <div className="w-full max-w-[360px] mx-auto h-auto flex flex-col gap-5">
              <div className="text-center">
                <div className="text-[20px] font-semibold leading-7 text-gray-900">
                  Sign in to your account
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-5 text-gray-900">Email Address</label>
                <input
                  className="h-11 px-3 border border-[#E4E7E9] rounded-[2px] outline-none"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-[14px] leading-5 text-gray-900">Password</label>
                  <button
                    onClick={() => router.push('/forgot-password')}
                    className="text-[14px] font-medium"
                    style={{ color: 'var(--secondary-500, #6B7280)' }}
                  >
                    Forget Password
                  </button>
                </div>

                <div className="relative">
                  <input
                    className="h-11 w-full px-3 border border-gray-100 rounded-[2px] outline-none"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {/* SVG глаза */}
                  </button>
                </div>

                <div className="pt-2">
                  <button onClick={handleLogin} className="w-full flex items-center justify-center">
                    <img src="/loggg.svg" alt="Log In" className="w-full h-auto max-h-12 object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-100 p-8 pt-0 flex justify-center">
            <button onClick={goToRegister} className="w-full max-w-[360px] h-20 flex items-center justify-center rounded-[2px]">
              <img src="/create.svg" alt="Create account" style={{ width: 360, height: 80 }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
