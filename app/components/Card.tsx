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
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <time className="text-xs font-bold text-blue-600 uppercase mb-2">{date}</time>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{excerpt}</p>
        <Link href={`/${slug}`} className="text-blue-700 font-semibold hover:underline mt-auto">
          Leer más →
        </Link>
      </div>
    </article>
  );
}