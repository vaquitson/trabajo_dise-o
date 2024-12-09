"use client"
import { useState } from "react";
import Navbar from '@/components/Navbar';
import { useAuth } from "./../context/auth_context.js"
import { useRouter } from "next/navigation";

const translations = {
  en: {
    title: "Login",
    username: "Username",
    password: "Password",
    button: "Log In",
    noAccount: "Don't have an account?",
    register: "Register",
  },
  es: {
    title: "Inicio de sesión",
    username: "Nombre de usuario",
    password: "Contraseña",
    button: "Iniciar sesión",
    noAccount: "¿No tienes una cuenta?",
    register: "Regístrate",
  },
  fr: {
    title: "Connexion",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    button: "Se connecter",
    noAccount: "Pas encore de compte?",
    register: "S'inscrire",
  },
};

export default function LoginPage(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("en");
  const router = useRouter();

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
      
      localStorage.setItem("token", body.token)
      localStorage.setItem("user", body.username)

      router.push("/profile")

    } else {
      alert("Invalid user or password");
    }
  }
  const { title, username: usernameLabel, password: passwordLabel, button, noAccount, register } = translations[language];

return (
    <div>
      <Navbar setLanguage={setLanguage} language={language} />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800">{title}</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                {usernameLabel}
              </label>
              <input
                id="username"
                type="text"
                placeholder={usernameLabel}
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
                {passwordLabel}
              </label>
              <input
                id="password"
                type="password"
                placeholder={passwordLabel}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
            >
              {button}
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            {noAccount}{" "}
            <a href="/sigin" className="text-blue-500 hover:underline">
              {register}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
 }
