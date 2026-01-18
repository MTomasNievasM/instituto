import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | IES Cura Valera',
  description: 'Ponte en contacto con el instituto',
};

export default function ContactoPage() {
  return (
    // MAIN: Indica a los buscadores y lectores de pantalla dónde empieza el contenido real
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER: Cabecera específica de esta página */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight sm:text-5xl">
            Contacta con nosotros
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos tus dudas o visítanos en nuestras instalaciones.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* SECTION: Una sección independiente para el formulario */}
          <section aria-labelledby="form-heading" className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 id="form-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un mensaje
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-3" 
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-3" 
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea 
                  id="mensaje" 
                  name="mensaje"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-3" 
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar Mensaje
              </button>
            </form>
          </section>

          {/* ASIDE: Contenido complementario (sidebar) */}
          <aside className="space-y-8">
            
            {/* ADDRESS: La etiqueta semántica correcta para direcciones y contacto */}
            <address className="bg-blue-900 text-white rounded-2xl shadow-lg p-8 not-italic">
              <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-4">
                Información de Contacto
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="sr-only">Dirección:</span> {/* sr-only es para lectores de pantalla */}
                  <svg className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div>
                    <p className="font-semibold text-blue-200 text-sm uppercase tracking-wider">Dirección</p>
                    <p className="text-blue-50 mt-1">Calle Prof. Tierno Galván, s/n<br/>04600 Huércal-Overa, Almería</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <span className="sr-only">Teléfono:</span>
                  <svg className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <div>
                    <p className="font-semibold text-blue-200 text-sm uppercase tracking-wider">Teléfono</p>
                    <a href="tel:+34950451908" className="text-blue-50 mt-1 hover:text-white transition block">
                      950 45 19 08
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="sr-only">Email:</span>
                  <svg className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <div>
                    <p className="font-semibold text-blue-200 text-sm uppercase tracking-wider">Email</p>
                    <a href="mailto:04002621.edu@juntadeandalucia.es" className="text-blue-50 mt-1 hover:text-white transition block break-all">
                      04002621.edu@juntadeandalucia.es
                    </a>
                  </div>
                </li>
              </ul>
            </address>

            {/* SECTION: Mapa */}
            <section className="bg-white rounded-2xl shadow-sm overflow-hidden h-64 border border-gray-100" aria-label="Ubicación en mapa">
               <iframe 
                 title="Mapa de ubicación IES Cura Valera"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.658666567226!2d-1.9482166847065997!3d37.39763597983057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad3c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sIES%20Cura%20Valera!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy"
               ></iframe>
            </section>

          </aside>
        </div>
      </div>
    </main>
  );
}