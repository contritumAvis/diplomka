import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // без /api, чтобы работали /products
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true // чтобы при необходимости передавались куки
});

export default instance;
