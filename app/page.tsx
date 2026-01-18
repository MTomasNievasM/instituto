import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      {/* 1. SECCIÓN BIENVENIDOS (PORTADA) */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="position-relative z-2">
          <h1 className="display-1 fw-bold text-uppercase tracking-widest">Bienvenidos</h1>
          <p className="lead text-uppercase opacity-75">IES Cura Valera - Formación y Futuro</p>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="container py-5">
        
        {/* Título Servicios */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nuestros Servicios</h2>
          <hr className="mx-auto border-primary border-3 opacity-100" style={{width: '50px'}} />
        </div>

        {/* Tarjetas de Servicios */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <Card title="Erasmus+" excerpt="Programas de movilidad europea para alumnos." image="/globe.svg" slug="erasmus" date="2025/2026" />
          </div>
          <div className="col-md-4">
            <Card title="Secretaría" excerpt="Trámites de matriculación y becas online." image="/file.svg" slug="secretaria" date="Gestión" />
          </div>
          <div className="col-md-4">
            <Card title="Aula Virtual" excerpt="Acceso a Moodle y recursos educativos." image="/window.svg" slug="aula-virtual" date="Online" />
          </div>
        </div>

        {/* 3. NUEVO RECUADRO DE VIDEO (CORREGIDO) */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6"> 
            <div className="card shadow border-0 overflow-hidden">
              <div className="card-header bg-dark text-white text-center py-2">
                <small className="text-uppercase fw-bold">Graduación 2025</small>
              </div>
              <div className="card-body p-0">
                <div className="ratio ratio-16x9">
                  <iframe 
                    /* Aquí está el cambio: Usamos /embed/ + el ID del video */
                    src="https://www.youtube.com/embed/E7MduzVMqCQ?rel=0" 
                    title="Video de interes del mes" 
                    allowFullScreen
                    className="border-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}