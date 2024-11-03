"use client";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }){
  const [user, setUser] = useState(null);

  
  async function login(username, token){
    localStorage.setItem("token", token)
    localStorage.setItem("user", username)
    console.log("login completo " + user + "\n")
  }

  function logout(){
    localStorage.removeItem("token")
    setUser(null)
  }
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)
