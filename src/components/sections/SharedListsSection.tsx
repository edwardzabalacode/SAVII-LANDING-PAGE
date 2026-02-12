"use client";

import { motion } from "framer-motion";
import { Users, RefreshCw, Shield, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

const benefits = [
  {
    icon: Users,
    text: "Comparte con pareja, familia o roomies",
  },
  {
    icon: RefreshCw,
    text: "Sincronización en tiempo real",
  },
  {
    icon: Shield,
    text: "Código seguro de 6 dígitos",
  },
  {
    icon: Zap,
    text: "Únete a una lista en segundos",
  },
];

function CodeDigit({ digit, index }: { digit: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl bg-white/90 backdrop-blur-sm border-2 border-primary-200 flex items-center justify-center shadow-lg shadow-primary-500/10"
    >
      <span className="font-display font-bold text-2xl text-primary-600">
        {digit}
      </span>
    </motion.div>
  );
}

export function SharedListsSection() {
  const code = "A7B3K9";

  return (
    <section className="relative py-20 sm:py-28 bg-surface-alt overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="sl-orb1" cx="65%" cy="35%" r="40%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="sl-orb2" cx="25%" cy="70%" r="35%">
              <stop offset="0%" stopColor="#0a7ea4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sl-blob" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="sl-line" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#0a7ea4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.ellipse
            cx="950" cy="280" rx="350" ry="300"
            fill="url(#sl-orb1)"
            animate={{ rx: [350, 370, 350], ry: [300, 320, 300] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="350" cy="550" rx="280" ry="240"
            fill="url(#sl-orb2)"
            animate={{ rx: [280, 300, 280], ry: [240, 260, 240] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <motion.path
            d="M800,150 C980,100 1150,250 1100,400 C1050,550 880,600 740,560 C600,520 540,370 610,250 C680,130 620,200 800,150Z"
            fill="url(#sl-blob)"
            animate={{
              d: [
                "M800,150 C980,100 1150,250 1100,400 C1050,550 880,600 740,560 C600,520 540,370 610,250 C680,130 620,200 800,150Z",
                "M820,170 C1000,120 1130,270 1080,420 C1030,570 860,620 720,580 C580,540 520,390 590,270 C660,150 640,220 820,170Z",
                "M800,150 C980,100 1150,250 1100,400 C1050,550 880,600 740,560 C600,520 540,370 610,250 C680,130 620,200 800,150Z",
              ],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path
            d="M0,420 C200,360 450,480 700,430 C950,380 1200,320 1440,370"
            stroke="url(#sl-line)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M0,420 C200,360 450,480 700,430 C950,380 1200,320 1440,370",
                "M0,440 C200,380 450,460 700,410 C950,360 1200,340 1440,390",
                "M0,420 C200,360 450,480 700,430 C950,380 1200,320 1440,370",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Sparkles */}
          <motion.circle
            cx="1100" cy="200" r="2" fill="white" opacity="0.4"
            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="300" cy="350" r="2" fill="white" opacity="0.3"
            animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </svg>
      </div>

      <GrainOverlay opacity={0.02} />

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <AnimatedSection>
            <div className="flex flex-col items-center">
              {/* Illustration */}
              <div className="w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-primary-100/80 to-primary-200/80 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/50 shadow-lg shadow-primary-500/10">
                <Users className="h-24 w-24 text-primary-400" />
              </div>

              {/* 6-digit code */}
              <div className="flex gap-2">
                {code.split("").map((digit, i) => (
                  <CodeDigit key={i} digit={digit} index={i} />
                ))}
              </div>
              <p className="text-sm text-text-muted mt-3">
                Comparte este código para unirse
              </p>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <SectionTitle
              title="Listas compartidas"
              subtitle="Controla los gastos en equipo. Cada cambio se sincroniza automáticamente para que todos estén al día."
              align="left"
            />

            <ul className="space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-primary-100 flex items-center justify-center shrink-0 shadow-sm">
                    <benefit.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="text-text-primary font-medium">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
