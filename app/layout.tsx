import type { Metadata } from "next";
import "./globals.css"; // <--- ESTA LÍNEA ES LA QUE RECUPERA TUS ESTILOS Y LA FOTO
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "IES Cura Valera",
  description: "Sitio web oficial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  );
}