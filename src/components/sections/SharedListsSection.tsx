"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, RefreshCw, Shield, Eye } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export function SharedListsSection() {
  const t = useTranslations("SharedLists");

  const benefits = [
    { icon: Shield, text: t("trust") },
    { icon: RefreshCw, text: t("sync") },
    { icon: Users, text: t("individual") },
    { icon: Eye, text: t("balance") },
  ];

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
            <div className="flex justify-center">
              <PhoneMockup
                label={t("phoneLabel")}
                gradientFrom="from-emerald-500"
                gradientTo="to-teal-600"
                screenContent={
                  <Image
                    src="/images/screenshots/listacompartida1.png"
                    alt={t("phoneLabel")}
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="300px"
                  />
                }
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <SectionTitle
              title={t("title")}
              subtitle={t("subtitle")}
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
