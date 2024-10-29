"use client"
import { useState } from "react";

export default function siginPage(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSigin = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/sigin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username, password})
    })
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSigin}>
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
