import React from 'react';
import { notFound } from 'next/navigation';

// Simulación de una base de datos de páginas
const PAGINAS_DATA: Record<string, { title: string; content: string }> = {
  'el-centro': {
    title: 'El Centro',
    content: 'Aquí iría la historia y descripción del IES Cura Valera...'
  },
  'oferta-educativa': {
    title: 'Oferta Educativa',
    content: 'Listado de ciclos formativos, ESO y Bachillerato...'
  },
  'secretaria': {
    title: 'Secretaría',
    content: 'Horarios de atención, impresos y trámites administrativos...'
  },
};

// Necesario en Next.js 15+ para params asíncronos
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function SeccionPage({ params }: Props) {
  const { slug } = await params;
  const data = PAGINAS_DATA[slug];

  // Si el slug no existe en nuestros datos, muestra error 404
  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 capitalize">
          {data.title}
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 min-h-[300px]">
          <p className="text-gray-700 leading-relaxed">
            {data.content}
          </p>
          {/* Aquí podrías añadir componentes específicos más adelante */}
        </div>
      </article>
    </div>
  );
}