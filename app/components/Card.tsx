import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  excerpt: string;
  slug: string;
  date: string;
}

export default function Card({ title, image, excerpt, slug, date }: CardProps) {
  return (
    <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="bg-light d-flex align-items-center justify-content-center" style={{height: '140px'}}>
        <Image src={image} alt={title} width={64} height={64} style={{objectFit: 'contain'}} /> {/* */}
      </div>
      <div className="card-body p-4 d-flex flex-column">
        <span className="badge bg-primary mb-2 w-fit-content" style={{width: 'fit-content'}}>{date}</span>
        <h3 className="h5 fw-bold mb-3">{title}</h3>
        <p className="text-muted small flex-grow-1">{excerpt}</p>
        <Link href={`/${slug}`} className="text-decoration-none fw-bold small mt-3">
          Saber más →
        </Link>
      </div>
    </article>
  );
}