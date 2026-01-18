import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, el recurso del instituto que buscas no existe.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Volver al Inicio
      </Link>
    </div>
  );
}