import React from 'react';

export default function DepartamentosPage() {
  return (
    <main>
      {/* Cabecera visual consistente */}
      <section className="hero-small">
        <div className="hero-overlay"></div>
        <div className="position-relative z-2">
          <h1 className="display-4 fw-bold text-uppercase tracking-widest">Departamentos</h1>
          <p className="lead text-white-50">Áreas didácticas y profesorado</p>
        </div>
      </section>

      <div className="container">
        <div className="row g-4">
          {/* Ejemplo de contenido */}
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>Informática</h3>
              <p>Ciclos formativos de grado medio y superior.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>Matemáticas</h3>
              <p>Asignaturas de ESO y Bachillerato.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>Lengua</h3>
              <p>Fomento de la lectura y escritura.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}