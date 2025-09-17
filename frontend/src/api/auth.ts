import api from "./axios";

export async function login(email: string, password: string) {
  const res = await api.post("/auth/login", { email, password });
  const { token, user } = res.data;

  // сохраняем токен
  localStorage.setItem("token", token);

  return user;
}

export async function register(email: string, password: string) {
  const res = await api.post("/auth/register", { email, password });
  const { token, user } = res.data;

  localStorage.setItem("token", token);

  return user;
}

// выйти (чистим токен)
export function logout() {
  localStorage.removeItem("token");
}
