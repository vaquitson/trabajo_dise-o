"use client"
import { useState } from "react";
import Navbar from '@/components/Navbar';

const translations = {
  en: {
    title: "Register",
    username: "Username",
    password: "Password",
    button: "Sign Up",
    alreadyAccount: "Already have an account?",
    login: "Log In",
  },
  es: {
    title: "Registrar",
    username: "Nombre de usuario",
    password: "Contraseña",
    button: "Registrarse",
    alreadyAccount: "¿Ya tienes una cuenta?",
    login: "Iniciar sesión",
  },
  fr: {
    title: "S'inscrire",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    button: "S'inscrire",
    alreadyAccount: "Vous avez déjà un compte?",
    login: "Se connecter",
  },
};

export default function siginPage(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("en");

  const handleSigin = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/sigin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username, password})
    })
  }


  const { title, username: usernameLabel, password: passwordLabel, button, alreadyAccount, login } = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setLanguage={setLanguage} language={language} />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">{title}</h1>
          <form onSubmit={handleSigin} className="space-y-4">
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
            {alreadyAccount}{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              {login}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
