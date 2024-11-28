"use client"
import { useState } from "react";
import Navbar from '@/components/Navbar';
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
  <Navbar />
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800">Inicio de sesión</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Nombre de usuario
          </label>
          <input
            id="username"
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
        >
          Iniciar sesión
        </button>
      </form>
      <p className="text-sm text-center text-gray-600">
        ¿No tienes una cuenta?{" "}
        <a href="/sigin" className="text-blue-500 hover:underline">
          Regístrate
        </a>
      </p>
    </div>
  </div>
  </div>
);

 }
