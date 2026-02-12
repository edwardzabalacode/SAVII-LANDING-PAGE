import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Mail } from "lucide-react";

export const metadata = {
  title: "Contacto - Savii",
  description: "Ponte en contacto con el equipo de Savii.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background min-h-screen">
        <Container className="max-w-3xl">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-2">
            Contacto
          </h1>
          <p className="text-text-muted text-sm mb-10">
            ¿Tienes preguntas, sugerencias o necesitas ayuda? Estamos aquí para
            ti.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-text-primary mb-1">
                  Correo electrónico
                </h2>
                <p className="text-text-secondary mb-3">
                  Escríbenos para cualquier consulta, reporte de errores o
                  sugerencia. Respondemos en un plazo de 24-48 horas.
                </p>
                <a
                  href="mailto:thecode12ai@gmail.com"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
                >
                  thecode12ai@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h2 className="font-display font-bold text-lg text-text-primary mb-3">
                ¿Sobre qué puedes escribirnos?
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Problemas técnicos o errores en la app.</li>
                <li>Sugerencias de nuevas funciones o mejoras.</li>
                <li>Preguntas sobre tu cuenta o tus datos.</li>
                <li>Consultas sobre privacidad o términos de uso.</li>
                <li>Colaboraciones o propuestas comerciales.</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
