"use client";
import { createContext, useState, useContext, useEffect } from "react";

const authContext = createContext();

export function authProvider({ child }){
  const [user, setUser] = useState(null);

  useEffect(function (){
    const token = localStorage.getItem("token");
    if (token) {
      fetch("api/verifie_token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({token})
      }).then(async function (){
        if (response.ok){
          console.log("autorizado")
        } else {
          console.log("no autorizado");
        }
      })
    } else {
      console.log("no token")
    }
  }, []);

  function login(username, token){
    localStorage.setItem("token")
    setUser(username)
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
