import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      {/* SECCIÓN BIENVENIDOS (Igual a tu foto) */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="position-relative z-2">
          <h1 className="display-1 fw-bold text-uppercase tracking-widest">Bienvenidos</h1>
          <p className="lead text-uppercase opacity-75">IES Cura Valera - Formación y Futuro</p>
        </div>
      </section>

      {/* CONTENIDO DE INICIO */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nuestros Servicios</h2>
          <hr className="mx-auto border-primary border-3 opacity-100" style={{width: '50px'}} />
        </div>
        <div className="row g-4">
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
      </div>
    </main>
  );
}