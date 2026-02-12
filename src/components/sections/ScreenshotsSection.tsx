"use client";

import { useState } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <section id="capturas" className="py-20 sm:py-28">
      <Container>
        <AnimatedSection>
          <SectionTitle
            badge="Capturas"
            title="Conoce Savii por dentro"
            subtitle="Explora la interfaz diseñada para hacer tu vida financiera más simple."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex justify-center mb-10">
          <Toggle
            options={["Modo Claro", "Modo Oscuro"]}
            value={isDarkMode}
            onChange={setIsDarkMode}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Carousel>
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className="flex-none w-[200px] sm:w-[240px]"
              >
                <PhoneMockup
                  label={screenshot.label}
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
                  className="scale-90"
                />
              </div>
            ))}
          </Carousel>
        </AnimatedSection>
      </Container>
    </section>
  );
}
