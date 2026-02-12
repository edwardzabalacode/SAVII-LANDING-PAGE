import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Términos de Uso - Savii",
  description: "Términos y condiciones de uso de la aplicación Savii.",
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background min-h-screen">
        <Container className="max-w-3xl">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-2">
            Términos de Uso
          </h1>
          <p className="text-text-muted text-sm mb-10">
            Última actualización: febrero 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-6 text-text-secondary leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                1. Aceptación de los términos
              </h2>
              <p>
                Al descargar, instalar o usar Savii, aceptas estos Términos de
                Uso. Si no estás de acuerdo con alguno de estos términos, no
                debes utilizar la aplicación.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                2. Descripción del servicio
              </h2>
              <p>
                Savii es una aplicación de finanzas personales que te permite
                registrar gastos mediante voz o manualmente, visualizar
                estadísticas financieras, compartir listas de gastos con otras
                personas y gestionar tus finanzas en múltiples monedas e
                idiomas.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                3. Uso permitido
              </h2>
              <p>Te comprometes a:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Usar la app únicamente para fines personales y legales.</li>
                <li>
                  Proporcionar información veraz al registrar tus gastos.
                </li>
                <li>
                  No intentar acceder a datos de otros usuarios sin
                  autorización.
                </li>
                <li>
                  No modificar, descompilar o realizar ingeniería inversa de la
                  aplicación.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                4. Cuenta y seguridad
              </h2>
              <p>
                Eres responsable de mantener la seguridad de tu cuenta y de
                todas las actividades que ocurran bajo ella. Notifícanos
                inmediatamente si sospechas de un uso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                5. Listas compartidas
              </h2>
              <p>
                Al crear o unirte a una lista compartida, aceptas que los demás
                participantes podrán ver los gastos registrados en esa lista.
                Eres responsable de invitar solo a personas de tu confianza.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                6. Propiedad intelectual
              </h2>
              <p>
                Savii y todo su contenido (diseño, código, logotipos, textos)
                son propiedad de sus creadores y están protegidos por las leyes
                de propiedad intelectual. No se concede ningún derecho sobre
                estos elementos más allá del uso personal de la app.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                7. Limitación de responsabilidad
              </h2>
              <p>
                Savii se proporciona &quot;tal cual&quot;. No garantizamos que
                la app esté libre de errores o interrupciones. No somos
                responsables de decisiones financieras tomadas en base a la
                información mostrada en la app. Savii es una herramienta de
                registro, no un asesor financiero.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                8. Modificaciones del servicio
              </h2>
              <p>
                Nos reservamos el derecho de modificar, suspender o discontinuar
                cualquier aspecto del servicio en cualquier momento. Te
                notificaremos sobre cambios significativos a través de la app.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                9. Cambios en los términos
              </h2>
              <p>
                Podemos actualizar estos términos ocasionalmente. El uso
                continuado de Savii después de los cambios constituye la
                aceptación de los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                10. Contacto
              </h2>
              <p>
                Si tienes preguntas sobre estos términos, escríbenos a{" "}
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
