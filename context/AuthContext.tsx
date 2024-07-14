'use client'
import React, { createContext, useEffect, useState } from "react";

interface User {
    id: number;
    email: string;
    username: string;
    createdAt: string;
    avatar: string;
    token: string;
}

interface AuthContextType {
  currentUser: User | null;
  updateUser: (data: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const getInitialUser = () => {
        if (typeof window !== 'undefined') {
          const storedUser = localStorage.getItem("user");
          return storedUser ? JSON.parse(storedUser) : null;
        }
        return null;
      };
  const [currentUser, setCurrentUser] = useState<User | null>(getInitialUser);

  const updateUser = (data: User | null) => {
    if(data === null){
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", JSON.stringify(data));
    }
    setCurrentUser(data);
  };

  useEffect(() => {
    if(typeof window !== 'undefined') {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
