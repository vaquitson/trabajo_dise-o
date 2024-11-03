// src/components/Navbar.js
import Link from 'next/link';
import './navbar.css'; // Optional: for custom navigation styles

function Navbar({ setLanguage, language }) {
  return (
    <nav className="navbar">
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre la plataforma</Link>
        </li>
        <li>
          <Link href="/profile">Perfil</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        {/* Language Selector */}
        <li className="flex space-x-2">
          <button 
            onClick={() => setLanguage("en")} 
            className={`px-2 py-1 rounded ${language === "en" ? "bg-blue-500 text-white" : "bg-gray-300"}`} 
            aria-label="Select English"
          >
            English
          </button>
          <button 
            onClick={() => setLanguage("es")} 
            className={`px-2 py-1 rounded ${language === "es" ? "bg-blue-500 text-white" : "bg-gray-300"}`} 
            aria-label="Select Español"
          >
            Español
          </button>
          <button 
            onClick={() => setLanguage("fr")} 
            className={`px-2 py-1 rounded ${language === "fr" ? "bg-blue-500 text-white" : "bg-gray-300"}`} 
            aria-label="Select Français"
          >
            Français
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

