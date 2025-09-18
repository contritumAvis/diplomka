// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:5000", // без /api, чтобы работали /products
//   headers: {
//     "Content-Type": "application/json"
//   },
//   withCredentials: true // чтобы при необходимости передавались куки
// });

// export default instance;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api", // твой бек
  
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // 👉 перед каждым запросом подставляем токен
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;


// Причина: твой API проверяет токен или userId. А у тебя компоненты берут данные только из localStorage, а бэкенд не видит токен.

// Исправление:

// Добавь Authorization header в axios:

// // frontend/src/api/axios.ts
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:5000', // твой бэкенд
// });

// instance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token && config.headers) config.headers['Authorization'] = `Bearer ${token}`;
//   return config;
// });

// export default instance;


// Теперь все запросы будут автоматически отправлять токен.

// frontend/src/api/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;


