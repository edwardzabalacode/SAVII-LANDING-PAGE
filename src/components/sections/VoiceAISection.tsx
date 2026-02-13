"use client";

import { motion } from "framer-motion";
import { Mic, Cpu, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AbstractDarkArt } from "@/components/ui/AbstractDarkArt";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

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
  const t = useTranslations("VoiceAI");

  const steps = [
    {
      icon: Mic,
      title: t("stepSpeak"),
      description: t("stepSpeakDesc"),
      color: "bg-primary-500",
    },
    {
      icon: Cpu,
      title: t("stepProcess"),
      description: t("stepProcessDesc"),
      color: "bg-tint",
    },
    {
      icon: CheckCircle,
      title: t("stepDone"),
      description: t("stepDoneDesc"),
      color: "bg-success",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-surface-dark text-text-light overflow-hidden">
      {/* Abstract art background */}
      <AbstractDarkArt />

      {/* Grain texture */}
      <GrainOverlay opacity={0.04} />

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionTitle
            badge={t("badge")}
            title={t("title")}
            subtitle={t("subtitle")}
            light
          />
        </AnimatedSection>

        {/* Voice command example */}
        <AnimatedSection
          delay={0.1}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <Mic className="h-5 w-5 text-primary-400" />
              </div>
              <SoundWave />
            </div>
            <p className="text-lg text-gray-300 italic mb-6">
              &quot;{t("voiceExample")}&quot;
            </p>

            {/* Extracted data */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="min-w-0 bg-white/5 backdrop-blur-sm rounded-xl p-2 sm:p-3 text-center border border-white/5">
                <div className="text-[10px] sm:text-xs text-gray-400 mb-1">{t("amount")}</div>
                <div className="font-display font-bold text-primary-400 text-[10px] sm:text-base leading-tight">
                  {t("amountValue")}
                </div>
              </div>
              <div className="min-w-0 bg-white/5 backdrop-blur-sm rounded-xl p-2 sm:p-3 text-center border border-white/5">
                <div className="text-[10px] sm:text-xs text-gray-400 mb-1">{t("category")}</div>
                <div className="font-display font-bold text-primary-400 text-[10px] sm:text-base leading-tight">
                  {t("categoryValue")}
                </div>
              </div>
              <div className="min-w-0 bg-white/5 backdrop-blur-sm rounded-xl p-2 sm:p-3 text-center border border-white/5">
                <div className="text-[10px] sm:text-xs text-gray-400 mb-1">{t("description")}</div>
                <div className="font-display font-bold text-primary-400 text-[10px] sm:text-base leading-tight">
                  {t("descriptionValue")}
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
