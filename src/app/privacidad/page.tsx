import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Política de Privacidad - Savii",
  description: "Política de privacidad de la aplicación Savii.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background min-h-screen">
        <Container className="max-w-3xl">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-2">
            Política de Privacidad
          </h1>
          <p className="text-text-muted text-sm mb-10">
            Última actualización: febrero 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-6 text-text-secondary leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                1. Información que recopilamos
              </h2>
              <p>
                Savii recopila la información mínima necesaria para brindarte el
                servicio. Esto incluye:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  Datos financieros que registras (montos, categorías,
                  descripciones de gastos).
                </li>
                <li>
                  Audio de voz procesado temporalmente para extraer información de
                  gastos mediante IA. El audio no se almacena.
                </li>
                <li>
                  Preferencias de configuración (idioma, moneda, tema visual).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                2. Cómo usamos tu información
              </h2>
              <p>Tu información se utiliza exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Registrar y organizar tus gastos personales.</li>
                <li>
                  Generar estadísticas y visualizaciones de tus finanzas.
                </li>
                <li>
                  Sincronizar listas compartidas entre personas que tú invites.
                </li>
                <li>Mejorar la precisión del reconocimiento de voz.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                3. Almacenamiento y seguridad
              </h2>
              <p>
                Tus datos se almacenan de forma segura en tu dispositivo. Si
                activas el respaldo en la nube, los datos se cifran durante la
                transferencia y el almacenamiento. No vendemos, compartimos ni
                cedemos tu información personal a terceros.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                4. Listas compartidas
              </h2>
              <p>
                Cuando compartes una lista, solo las personas que tú invites
                pueden ver los gastos de esa lista. Cada participante tiene
                acceso únicamente a la lista compartida, no a tus demás datos
                personales.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                5. Servicios de terceros
              </h2>
              <p>
                Savii utiliza Google Gemini AI para el procesamiento de voz. El
                audio se envía de forma segura a los servidores de Google para su
                procesamiento y no se almacena después de la transcripción.
                Consulta la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Política de Privacidad de Google
                </a>{" "}
                para más detalles.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                6. Tus derechos
              </h2>
              <p>Tienes derecho a:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Acceder a todos tus datos almacenados en la app.</li>
                <li>Eliminar tu cuenta y todos los datos asociados.</li>
                <li>Exportar tus datos en cualquier momento.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                7. Cambios en esta política
              </h2>
              <p>
                Podemos actualizar esta política ocasionalmente. Te
                notificaremos sobre cambios significativos a través de la app.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                8. Contacto
              </h2>
              <p>
                Si tienes preguntas sobre esta política, escríbenos a{" "}
                <a
                  href="mailto:thecode12ai@gmail.com"
                  className="text-primary-600 hover:underline"
                >
                  thecode12ai@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
