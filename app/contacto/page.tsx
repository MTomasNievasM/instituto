export default function Contacto() {
  return (
    <main>
      {/* 1. CABECERA CON FONDO (Igual que las otras secciones) */}
      <section className="hero-small">
        <div className="hero-overlay"></div>
        <div className="position-relative z-2">
          <h1 className="display-4 fw-bold text-uppercase tracking-widest">Contacto</h1>
          <p className="lead text-white-50">Estamos a tu disposición</p>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL (Formulario y Datos) */}
      <div className="container mb-5">
        <div className="row g-5">
          
          {/* Columna Izquierda: Información */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4 text-primary">¿Dónde estamos?</h2>
            <p className="lead text-muted mb-4">
              Puedes visitarnos en nuestro centro o contactarnos a través de los canales oficiales.
            </p>
            <div className="d-flex flex-column gap-3">
              <div className="p-3 border rounded shadow-sm">
                <p className="mb-1 text-uppercase small fw-bold text-muted">Dirección</p>
                <p className="mb-0 fw-bold">Av. Guillermo Reyna, s/n, 04600 Huércal-Overa, Almería</p>
              </div>
              <div className="p-3 border rounded shadow-sm">
                <p className="mb-1 text-uppercase small fw-bold text-muted">Teléfono</p>
                <p className="mb-0 fw-bold">950 12 34 56</p>
              </div>
              <div className="p-3 border rounded shadow-sm">
                <p className="mb-1 text-uppercase small fw-bold text-muted">Email</p>
                <p className="mb-0 fw-bold">info@iescuravalera.es</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="col-lg-6">
            <form className="bg-white p-4 rounded-4 shadow border position-relative z-1">
              <h3 className="fw-bold mb-4">Envíanos un mensaje</h3>
              <div className="mb-3">
                <label className="form-label fw-bold small">Nombre Completo</label>
                <input type="text" className="form-control bg-light" placeholder="Tu nombre" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold small">Email de contacto</label>
                <input type="email" className="form-control bg-light" placeholder="nombre@ejemplo.com" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold small">Mensaje</label>
                <textarea className="form-control bg-light" rows={4} placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>
              <button className="btn btn-primary w-100 py-3 fw-bold text-uppercase tracking-widest">
                Enviar Solicitud
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}