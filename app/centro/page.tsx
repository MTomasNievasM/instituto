import React from 'react';

export default function CentroPage() {
  return (
    <main>
      {/* Cabecera visual consistente con el Inicio */}
      <section className="hero-small">
        <div className="hero-overlay"></div>
        <div className="position-relative z-2">
          <h1 className="display-4 fw-bold text-uppercase tracking-widest">El Centro</h1>
          <p className="lead text-white-50">Conoce nuestra historia e instalaciones</p>
        </div>
      </section>

      {/* Contenido de la página */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4 text-primary">Nuestra Historia</h2>
            <p className="lead">
              El IES Cura Valera es un referente educativo en la comarca...
            </p>
            <p>
              Aquí puedes poner todo el texto sobre el centro, fotos de las instalaciones,
              equipo directivo, etc. Al tener la cabecera arriba, el menú transparente
              se ve perfecto.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}