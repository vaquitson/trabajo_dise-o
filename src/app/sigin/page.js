"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function siginPage(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSigin = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/sigin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username, password})
    })
    
    if (res.ok){
      router.push("/perfil")
    } else {
      alert("el usuario ya existe")
      setUsername("");
      setPassword("");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Registro</h1>
        <form onSubmit={handleSigin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de usuario
            </label>
            <input
              id="username"
              type="text"
              placeholder="Escribe tu nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
