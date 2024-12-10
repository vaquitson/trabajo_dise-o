// src/components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

function Navbar({ setLanguage, language }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar bg-black text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Links */}
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
          <li>
            <Link href="/dashboards">
              <button className="px-3 py-2 rounded bg-green-600 hover:bg-green-700">
                Dashboards
              </button>
            </Link>
          </li>
        </ul>

        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-700"
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : "false"}
          >
            Languages
          </button>

          {/* Dropdown Options */}
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-gray-700 rounded shadow-lg">
              <li
                onClick={() => { setLanguage("en"); setIsOpen(false); }}
                className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                  language === "en" ? "font-bold" : ""
                }`}
              >
                English
              </li>
              <li
                onClick={() => { setLanguage("es"); setIsOpen(false); }}
                className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                  language === "es" ? "font-bold" : ""
                }`}
              >
                Español
              </li>
              <li
                onClick={() => { setLanguage("fr"); setIsOpen(false); }}
                className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                  language === "fr" ? "font-bold" : ""
                }`}
              >
                Français
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
