import Image from "next/image";

// Definimos qué datos necesita recibir la tarjeta
interface CardProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Card({ title, text, imageSrc, imageAlt }: CardProps) {
  return (
    <div className="card">
      <Image src={imageSrc} alt={imageAlt} width={50} height={50} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}