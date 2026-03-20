"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Toggle } from "@/components/ui/Toggle";
import { Carousel } from "@/components/ui/Carousel";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { screenshots } from "@/data/screenshots";

const darkGradients = [
  { from: "from-gray-800", to: "to-gray-900" },
  { from: "from-slate-800", to: "to-slate-900" },
  { from: "from-zinc-800", to: "to-zinc-900" },
  { from: "from-neutral-800", to: "to-neutral-900" },
  { from: "from-stone-800", to: "to-stone-900" },
  { from: "from-gray-700", to: "to-gray-900" },
  { from: "from-slate-700", to: "to-slate-900" },
  { from: "from-zinc-700", to: "to-zinc-900" },
];

const lightGradients = [
  { from: "from-primary-100", to: "to-primary-200" },
  { from: "from-blue-100", to: "to-blue-200" },
  { from: "from-emerald-100", to: "to-emerald-200" },
  { from: "from-amber-100", to: "to-amber-200" },
  { from: "from-rose-100", to: "to-rose-200" },
  { from: "from-indigo-100", to: "to-indigo-200" },
  { from: "from-cyan-100", to: "to-cyan-200" },
  { from: "from-teal-100", to: "to-teal-200" },
];

export function ScreenshotsSection() {
  const t = useTranslations("Screenshots");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <section id="capturas" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-100/30 blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-tint/8 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-200/20 blur-[80px]" />
      </div>

      <Container>
        <AnimatedSection>
          <SectionTitle
            badge={t("badge")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </AnimatedSection>

        {/* TODO: Descomentar cuando el modo oscuro esté listo */}
        {/* <AnimatedSection delay={0.1} className="flex justify-center mb-10">
          <Toggle
            options={[t("lightMode"), t("darkMode")]}
            value={isDarkMode}
            onChange={setIsDarkMode}
          />
        </AnimatedSection> */}

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-10">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className="w-[200px] sm:w-[220px] lg:w-[240px]"
              >
                <PhoneMockup
                  size="sm"
                  label={t(screenshot.key)}
                  gradientFrom={
                    isDarkMode
                      ? darkGradients[index % darkGradients.length].from
                      : lightGradients[index % lightGradients.length].from
                  }
                  gradientTo={
                    isDarkMode
                      ? darkGradients[index % darkGradients.length].to
                      : lightGradients[index % lightGradients.length].to
                  }
                  screenContent={
                    <Image
                      src={isDarkMode ? screenshot.darkSrc : screenshot.lightSrc}
                      alt={t(screenshot.key)}
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="240px"
                    />
                  }
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
