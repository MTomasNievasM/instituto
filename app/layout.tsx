import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: "IES Cura Valera",
  description: "Instituto de Educación Secundaria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-light">
        <Navbar />
        {/* Aquí se renderizan todas las páginas: inicio, contacto, etc. */}
        {children}
      </body>
    </html>
  );
}