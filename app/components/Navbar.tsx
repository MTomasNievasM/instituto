"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-absolute top-0 w-100 z-3 bg-transparent py-3">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold text-uppercase">IES Cura Valera</Link>
        <div className="navbar-nav ms-auto fw-bold text-uppercase small">
          <Link href="/" className="nav-link px-3">Inicio</Link>
          <Link href="/centro" className="nav-link px-3">El Centro</Link>
          <Link href="/departamentos" className="nav-link px-3">Departamentos</Link>
          <Link href="/contacto" className="nav-link px-3 border border-white rounded-pill ms-lg-2">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}