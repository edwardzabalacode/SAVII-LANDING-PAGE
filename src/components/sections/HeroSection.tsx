"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { StoreBadge } from "@/components/ui/StoreBadge";
// import { StatCard } from "@/components/ui/StatCard";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AbstractHeroArt } from "@/components/ui/AbstractHeroArt";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
// import { stats } from "@/data/stats";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Abstract art background */}
      <AbstractHeroArt />

      {/* Grain texture */}
      <GrainOverlay opacity={0.03} />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <AnimatedSection className="text-center lg:text-left">
            <Badge className="mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              {t("badge")}
            </Badge>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-text-primary">
              {t("title")}{" "}
              <span className="text-gradient">{t("titleHighlight")}</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Store badges */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <StoreBadge store="google" />
              {/* TODO: Descomentar cuando la app esté disponible en iOS */}
              {/* <StoreBadge store="apple" /> */}
            </div>
          </AnimatedSection>

          {/* Phone mockup */}
          <AnimatedSection delay={0.2} className="flex justify-center lg:mt-10">
            <PhoneMockup
              animate
              label={t("phoneLabel")}
              screenContent={
                <Image
                  src="/images/screenshots/home.webp"
                  alt={t("phoneLabel")}
                  fill
                  className="object-cover"
                  quality={100}
                  sizes="300px"
                />
              }
            />
          </AnimatedSection>
        </div>

        {/* TODO: Descomentar cuando haya datos reales de la app */}
        {/* <AnimatedSection delay={0.4} className="mt-16 sm:mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-primary-500/10 p-4 border border-white/50">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                iconName={stat.iconName}
              />
            ))}
          </div>
        </AnimatedSection> */}
      </Container>
    </section>
  );
}
