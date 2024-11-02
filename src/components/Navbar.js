// src/components/Navbar.js
import Link from 'next/link';
import './Navbar.css'; // Opcional: para estilos personalizados de la barra de navegación

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre la plataforma</Link>
        </li>
        <li>
          <Link href="/services">Productos</Link>
        </li>
        <li>
          <Link href="/contact">Te ayudamos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
