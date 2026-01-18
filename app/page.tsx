import Card from "./components/Card"; // Importamos nuestro componente nuevo

export default function Home() {
  return (
    <main>
      {/* Cabecera Azul */}
      <section className="hero">
        <h1>IES Tecnológico</h1>
        <p>Formación, Innovación y Futuro</p>
      </section>

      <div className="container">
        {/* Sección de Bienvenida */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2>Bienvenidos al curso 2025/2026</h2>
          <p>
            Nuestro centro ofrece una amplia oferta educativa adaptada a las 
            necesidades del mercado laboral actual.
          </p>
        </div>

        {/* Grid de Tarjetas: Ahora usamos el componente reutilizable */}
        <section className="cards-grid">
          
          <Card 
            title="Erasmus+" 
            text="Abierto el plazo para solicitar becas de movilidad europea."
            imageSrc="/globe.svg"
            imageAlt="Mundo"
          />

          <Card 
            title="Matriculación" 
            text="Descarga los impresos necesarios para la secretaría virtual."
            imageSrc="/file.svg"
            imageAlt="Documentos"
          />

          <Card 
            title="Aula Virtual" 
            text="Acceso directo a la plataforma Moodle del centro."
            imageSrc="/window.svg"
            imageAlt="Aula"
          />

        </section>
      </div>
    </main>
  );
}