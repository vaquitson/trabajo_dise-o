"use client"
import { useState } from "react";
import { useAuth } from "./../context/auth_context.js"

export default function LoginPage(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, logout } = useAuth()

  const handleLogin = async function (event){
    event.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"username": username, "password": password})
    })
    

    if(res.ok){ 
      let body = await res.json()

      console.log(body.token)
      login(username, body.token) 
    } else {
      console.log("noooo\n")
    }
  }

  return (
    <div>
      <h1>Inicio de sesión</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}
