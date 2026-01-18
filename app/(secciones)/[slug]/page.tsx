export default function DynamicPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Aquí podrías tener un objeto con la información de cada sección
  const contenido: Record<string, JSX.Element> = {
    "el-centro": <div><h1>El Centro</h1><p>Bienvenidos a nuestro instituto...</p></div>,
    "estudios": <div><h1>Estudios</h1><p>Ofrecemos ESO, Bachillerato y FP.</p></div>,
    "contacto": <div><h1>Contacto</h1><p>Estamos en Almería, calle...</p></div>,
  };

  // Si el slug no existe en nuestro objeto, Next mostrará el 404 automáticamente
  const pagina = contenido[slug];

  if (!pagina) {
    return null; // Next.js manejará esto si configuramos el error
  }

  return (
    <main style={{ padding: '20px' }}>
      {pagina}
    </main>
  );
}