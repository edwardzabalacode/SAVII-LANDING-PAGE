"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TabGroup } from "@/components/ui/TabGroup";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FinanceIllustration } from "@/components/ui/FinanceIllustration";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { features } from "@/data/features";

const featureScreenshots: Record<string, string> = {
  voice: "/images/screenshots/grabadordevoz.png",
};

const gradientPairs = [
  { from: "from-violet-500", to: "to-purple-700" },
  { from: "from-blue-500", to: "to-cyan-600" },
  { from: "from-emerald-500", to: "to-teal-600" },
  { from: "from-amber-500", to: "to-orange-600" },
  { from: "from-rose-500", to: "to-pink-600" },
  { from: "from-indigo-500", to: "to-blue-700" },
];

export function FeaturesTabsSection() {
  const [activeTab, setActiveTab] = useState(features[0].id);
  const activeFeature = features.find((f) => f.id === activeTab) || features[0];
  const activeIndex = features.findIndex((f) => f.id === activeTab);

  return (
    <section id="funciones" className="relative py-20 sm:py-28 bg-surface-alt overflow-hidden">
      {/* === Large abstract illustration — dominant background element === */}
      <div className="absolute inset-0 flex items-center justify-center">
        <FinanceIllustration className="w-full max-w-6xl opacity-80" />
      </div>

      {/* Extra gradient blobs for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary-200/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-tint/8 blur-[120px]" />
      </div>

      {/* Grain overlay for texture */}
      <GrainOverlay opacity={0.03} />

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionTitle
            badge="Funciones"
            title="Características que te encantarán"
            subtitle="Todo lo que necesitas para organizar tus finanzas personales en una sola app."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <TabGroup
            tabs={features}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Mockup */}
            <div className="flex justify-center order-1 md:order-none">
              <PhoneMockup
                label={activeFeature.title}
                gradientFrom={gradientPairs[activeIndex]?.from || "from-primary-400"}
                gradientTo={gradientPairs[activeIndex]?.to || "to-primary-600"}
                screenContent={
                  featureScreenshots[activeFeature.id] ? (
                    <Image
                      src={featureScreenshots[activeFeature.id]}
                      alt={activeFeature.title}
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="300px"
                    />
                  ) : undefined
                }
              />
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/60 shadow-lg shadow-primary-500/5"
              >
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary mb-4">
                  {activeFeature.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {activeFeature.description}
                </p>
                <ul className="space-y-3">
                  {activeFeature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-text-primary"
                    >
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-100">
                        <Check className="h-3 w-3 text-primary-600" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
