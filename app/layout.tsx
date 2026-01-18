import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IES Tecnológico",
  description: "Web oficial del instituto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* --- HEADER BLANCO FIJO --- */}
        <nav style={{
          height: '90px',
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e5e5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 5%',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          
          {/* LOGO + NOMBRE (Izquierda) */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Logo de ejemplo */}
            <Image 
              src="/vercel.svg" 
              alt="Logotipo" 
              width={40} 
              height={40} 
              style={{ filter: 'grayscale(100%)' }} 
            />
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#004d99', lineHeight: '1' }}>
                IES INSTITUTO
              </span>
              <span style={{ fontSize: '0.8rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Centro Educativo
              </span>
            </div>
          </Link>

          {/* ENLACES (Derecha) */}
          <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link href="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>Inicio</Link></li>
            <li><Link href="/el-centro" style={{ textDecoration: 'none', color: '#333', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>El Centro</Link></li>
            <li><Link href="/estudios" style={{ textDecoration: 'none', color: '#333', fontWeight: