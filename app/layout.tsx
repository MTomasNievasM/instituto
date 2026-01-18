import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Importamos el nuevo Navbar
import "bootstrap/dist/css/bootstrap.min.css"; // <--- AÑADE ESTO
import "./globals.css";
// ... resto de imports

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IES Cura Valera",
  description: "Web oficial del instituto recreada en Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 flex flex-col min-h-screen`}>
        
        {/* Aquí insertamos el Navbar funcional */}
        <Navbar />
        
        {/* Contenido principal */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer simple (para cerrar bien la página) */}
        <footer className="bg-gray-900 text-gray-300 py-8 text-center text-sm">
          <p>© {new Date().getFullYear()} IES Cura Valera. Todos los derechos reservados.</p>
        </footer>

      </body>
    </html>
  );
}