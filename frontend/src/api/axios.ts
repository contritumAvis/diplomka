import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // замени на URL твоего бэка
  withCredentials: true, // если работаешь с cookie / JWT
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
