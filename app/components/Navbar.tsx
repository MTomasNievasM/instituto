"use client";
import Link from 'next/link';
import { useEffect } from 'react';

export default function Navbar() {
  // Activa el desplegable de Bootstrap
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <header className="shadow-sm sticky-top bg-white">
      {/* BARRA SUPERIOR (Logo y Nombre) */}
      <div className="py-3 border-bottom">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <Link href="/" className="d-flex align-items-center text-decoration-none text-dark mb-3 mb-md-0">
            
            {/* CAMBIO: Usamos el favicon.ico como logo */}
            <img 
              src="/favicon.ico" 
              alt="Logo IES Cura Valera" 
              className="d-block me-3" 
              style={{height: '50px', width: 'auto', objectFit: 'contain'}} 
              onError={(e) => {
                // Si incluso el favicon fallara, mostramos el círculo de respaldo
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
            
            {/* Círculo de respaldo (solo visible si falla la imagen anterior) */}
            <div className="bg-ies-blue text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px', display: 'none'}}>
              IES
            </div>

            <div>
              <h1 className="h2 mb-0 fw-bold text-uppercase text-ies-blue" style={{letterSpacing: '-1px'}}>IES Cura Valera</h1>
              <span className="text-secondary text-uppercase small ls-1">Enseñanza Secundaria y FP</span>
            </div>
          </Link>
          
          <div className="d-none d-md-block text-end text-secondary small">
            <div><i className="bi bi-geo-alt-fill me-1 text-ies-orange"></i> Huércal-Overa (Almería)</div>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR (Menú) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-ies-blue">
        <div className="container">
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span> Menú
          </button>
          
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold text-uppercase fs-6">
              <li className="nav-item">
                <Link href="/" className="nav-link text-white px-3 border-end border-white border-opacity-25">Inicio</Link>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white px-3 border-end border-white border-opacity-25" href="#" role="button" data-bs-toggle="dropdown">
                  El Centro
                </a>
                <ul className="dropdown-menu">
                  <li><Link href="/centro/historia" className="dropdown-item">Historia</Link></li>
                  <li><Link href="/centro/equipo" className="dropdown-item">Equipo Directivo</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/departamentos" className="nav-link text-white px-3 border-end border-white border-opacity-25">Departamentos</Link>
              </li>
              <li className="nav-item">
                <Link href="/contacto" className="nav-link text-white px-3">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}