// frontend/src/context/UserContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = { id: string; email: string; name?: string; role?: string } | null;

type UserContextType = {
  user: User;
  setUser: (u: User) => void;
};

const UserContext = createContext<UserContextType>({ user: null, setUser: () => {} });

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
