export default function Contacto() {
  return (
    <main className="page-content container">
      <div className="row g-5">
        <div className="col-lg-6">
          <h1 className="fw-bold mb-4">Contacto</h1>
          <p className="lead text-muted">Estamos a tu disposición para cualquier consulta.</p>
          <div className="mt-4">
            <p><strong>Dirección:</strong> Av. Guillermo Reyna, s/n, 04600 Huércal-Overa, Almería</p>
            <p><strong>Teléfono:</strong> 950 12 34 56</p>
            <p><strong>Email:</strong> info@iescuravalera.es</p>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="bg-white p-4 rounded-4 shadow-sm border">
            <div className="mb-3">
              <label className="form-label fw-bold small">Nombre Completo</label>
              <input type="text" className="form-control" placeholder="Escribe tu nombre" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold small">Mensaje</label>
              <textarea className="form-control" rows={4} placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>
            <button className="btn btn-primary w-100 py-2 fw-bold">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </main>
  );
}