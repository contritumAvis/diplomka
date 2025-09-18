// // frontend/src/context/UserContext.tsx
// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// type User = { id: string; email: string; name?: string; role?: string } | null;

// type UserContextType = {
//   user: User;
//   setUser: (u: User) => void;
// };

// const UserContext = createContext<UserContextType>({ user: null, setUser: () => {} });

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User>(null);

//   useEffect(() => {
//     const stored = localStorage.getItem('user');
//     if (stored) setUser(JSON.parse(stored));
//   }, []);

//   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
// };

// export const useUser = () => useContext(UserContext);
// frontend/src/context/UserContext.tsx


import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = { id: string; email: string; name?: string; role?: string } | null;

type UserContextType = {
  user: User;
  token: string | null;
  setUser: (u: User) => void;
  setToken: (t: string | null) => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);
  }, []);

  return (
    <UserContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
