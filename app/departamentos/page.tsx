export default function Departamentos() {
  const depto = ["Informática", "Sanidad", "Matemáticas", "Inglés", "Orientación"];
  return (
    <main className="page-content container">
      <h1 className="fw-bold mb-5">Nuestros Departamentos</h1>
      <div className="list-group">
        {depto.map(d => (
          <div key={d} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
            <span className="h5 mb-0">{d}</span>
            <button className="btn btn-sm btn-outline-primary">Ver programa</button>
          </div>
        ))}
      </div>
    </main>
  );
}