"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    // Siempre fixed-top y transparente. El fondo oscuro lo pondrá cada página.
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top w-100 z-3 py-3">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold text-uppercase">
          IES Cura Valera
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto fw-bold text-uppercase small">
            <Link href="/" className={`nav-link px-3 ${pathname === '/' ? 'active' : ''}`}>Inicio</Link>
            <Link href="/centro" className={`nav-link px-3 ${pathname === '/centro' ? 'active' : ''}`}>El Centro</Link>
            <Link href="/departamentos" className={`nav-link px-3 ${pathname === '/departamentos' ? 'active' : ''}`}>Departamentos</Link>
            <Link href="/contacto" className={`nav-link px-3 border border-white rounded-pill ms-lg-2 ${pathname === '/contacto' ? 'active' : ''}`}>Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}