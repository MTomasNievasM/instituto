// app/(secciones)/[slug]/page.tsx
import { notFound } from 'next/navigation';

const PAGINAS_DATA: Record<string, { title: string; content: string }> = {
  'el-centro': { title: 'El Centro', content: '...' },
  'secretaria': { title: 'Secretaría', content: '...' },
  // ... resto de datos
};

// Esto genera las páginas en tiempo de compilación para carga instantánea
export async function generateStaticParams() {
  return Object.keys(PAGINAS_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function SeccionPage({ params }: Props) {
  const { slug } = await params;
  const data = PAGINAS_DATA[slug];

  if (!data) notFound();

  return (
    <main className="container py-5 mt-5"> {/* Ajuste de margen para no quedar bajo el Navbar */}
      <article className="card shadow-sm p-5">
        <h1 className="display-4 text-primary mb-4">{data.title}</h1>
        <p className="lead">{data.content}</p>
      </article>
    </main>
  );
}