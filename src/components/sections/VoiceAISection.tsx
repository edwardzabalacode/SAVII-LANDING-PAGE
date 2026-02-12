"use client";

import { motion } from "framer-motion";
import { Mic, Cpu, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    icon: Mic,
    title: "Habla",
    description: "Presiona el micrófono y habla naturalmente",
    color: "bg-primary-500",
  },
  {
    icon: Cpu,
    title: "Procesa",
    description: "Gemini AI extrae la información",
    color: "bg-tint",
  },
  {
    icon: CheckCircle,
    title: "Listo",
    description: "Tu gasto queda registrado al instante",
    color: "bg-success",
  },
];

function SoundWave() {
  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-primary-400 rounded-full"
          animate={{
            height: [12, 32, 12],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function VoiceAISection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-dark text-text-light">
      <Container>
        <AnimatedSection>
          <SectionTitle
            badge="IA de Voz"
            title="Habla, Savii escucha"
            subtitle="Olvídate de escribir. Solo di lo que gastaste y nuestra IA hace el resto."
            light
          />
        </AnimatedSection>

        {/* Voice command example */}
        <AnimatedSection
          delay={0.1}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-surface-dark-alt rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <Mic className="h-5 w-5 text-primary-400" />
              </div>
              <SoundWave />
            </div>
            <p className="text-lg text-gray-300 italic mb-6">
              &quot;Gasté cincuenta mil pesos en el supermercado&quot;
            </p>

            {/* Extracted data */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <div className="text-xs text-gray-400 mb-1">Monto</div>
                <div className="font-display font-bold text-primary-400">
                  $50,000
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <div className="text-xs text-gray-400 mb-1">Categoría</div>
                <div className="font-display font-bold text-primary-400">
                  Mercado
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <div className="text-xs text-gray-400 mb-1">Descripción</div>
                <div className="font-display font-bold text-primary-400 text-sm">
                  Supermercado
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={0.2 + index * 0.1}>
              <div className="text-center">
                <div
                  className={`w-14 h-14 rounded-2xl ${step.color} mx-auto mb-4 flex items-center justify-center`}
                >
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>

              {/* Connector arrow (hidden on last + mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  {/* arrow handled by grid gap */}
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
