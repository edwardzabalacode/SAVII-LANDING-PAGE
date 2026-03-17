"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mic,
  BarChart3,
  Share2,
  Globe,
  Tag,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FinanceIllustration } from "@/components/ui/FinanceIllustration";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { features } from "@/data/features";

const iconMap: Record<string, LucideIcon> = {
  Mic,
  BarChart3,
  Share2,
  Globe,
  Tag,
  Palette,
};

const techRings = [
  { size: 360, opacity: 0.12, duration: 8 },
  { size: 500, opacity: 0.07, duration: 12 },
  { size: 640, opacity: 0.04, duration: 16 },
];

/* ── Glowing connection node ── */
function BranchNode({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay, duration: 0.3, type: "spring" }}
      className="relative flex-shrink-0"
    >
      <div className="w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_16px_rgba(139,92,246,0.6)]" />
      <motion.div
        className="absolute inset-0 rounded-full bg-primary-400"
        animate={{ scale: [1, 2.8], opacity: [0.35, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: delay + 0.5 }}
      />
    </motion.div>
  );
}

/* ── Gradient connector line ── */
function BranchLine({
  side,
  delay = 0,
}: {
  side: "left" | "right";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      style={{ transformOrigin: side === "left" ? "right" : "left" }}
      className={`flex-1 h-[3px] min-w-[24px] rounded-full ${
        side === "left"
          ? "bg-gradient-to-r from-primary-200/20 to-primary-500"
          : "bg-gradient-to-l from-primary-200/20 to-primary-500"
      }`}
    />
  );
}

/* ── Desktop feature branch (static label + line + node) ── */
function FeatureBranch({
  feature,
  title,
  side,
  index,
}: {
  feature: (typeof features)[number];
  title: string;
  side: "left" | "right";
  index: number;
}) {
  const delay = 0.15 + index * 0.1;
  const Icon = iconMap[feature.iconName] || Mic;

  const label = (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-base font-semibold
        bg-white/90 backdrop-blur-sm text-text-primary border border-white/60 shadow-md whitespace-nowrap"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary-100 flex-shrink-0">
        <Icon className="h-5 w-5 text-primary-600" />
      </span>
      {title}
    </motion.div>
  );

  if (side === "left") {
    return (
      <div className="flex items-center">
        <div className="flex-1 flex justify-end">{label}</div>
        <BranchLine side="left" delay={delay} />
        <BranchNode delay={delay + 0.3} />
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <BranchNode delay={delay + 0.3} />
      <BranchLine side="right" delay={delay} />
      <div className="flex-1">{label}</div>
    </div>
  );
}

/* ── Mobile feature label ── */
function MobileFeatureLabel({
  feature,
  title,
  index,
}: {
  feature: (typeof features)[number];
  title: string;
  index: number;
}) {
  const Icon = iconMap[feature.iconName] || Mic;

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.3 }}
      className="flex-1 flex items-center gap-3 px-5 py-3.5 rounded-2xl text-base font-semibold
        bg-white/90 backdrop-blur-sm text-text-primary border border-white/60 shadow-sm"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary-100 flex-shrink-0">
        <Icon className="h-5 w-5 text-primary-600" />
      </span>
      {title}
    </motion.div>
  );
}

/* ════════════════════════════════════════════════
   FEATURES TABS SECTION
   ════════════════════════════════════════════════ */
export function FeaturesTabsSection() {
  const t = useTranslations("Features");
  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3, 6);

  return (
    <section
      id="funciones"
      className="relative py-20 sm:py-28 bg-background overflow-hidden"
    >
      {/* ── FinanceIllustration background ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <FinanceIllustration className="w-full max-w-6xl opacity-80" />
      </div>

      {/* Tech dot-grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(139,92,246,0.04) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />

      <GrainOverlay opacity={0.03} />

      <Container className="relative z-10">
        {/* Title */}
        <AnimatedSection>
          <SectionTitle
            badge={t("badge")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </AnimatedSection>

        {/* ═══ HUB LAYOUT — Desktop (lg+) ═══ */}
        <AnimatedSection delay={0.1}>
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-x-4 mt-14">
            {/* Left branches */}
            <div className="flex flex-col justify-evenly py-8">
              {leftFeatures.map((f, i) => (
                <FeatureBranch
                  key={f.id}
                  feature={f}
                  title={t(`${f.id}.title`)}
                  side="left"
                  index={i}
                />
              ))}
            </div>

            {/* Phone hub with tech rings */}
            <div className="relative flex items-center justify-center px-6">
              {/* Concentric tech rings */}
              {techRings.map((ring, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-primary-400"
                  style={{
                    width: ring.size,
                    height: ring.size,
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    opacity: ring.opacity,
                  }}
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [ring.opacity, ring.opacity * 0.5, ring.opacity],
                  }}
                  transition={{
                    duration: ring.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Dashed ring */}
              <div
                className="absolute rounded-full border border-dashed border-primary-300/8"
                style={{
                  width: 430,
                  height: 430,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-primary-400/10 blur-[80px] rounded-full" />

              {/* Scaled-up phone */}
              <div className="lg:scale-[1.15] origin-center">
                <PhoneMockup
                  label={t("phoneLabel")}
                  gradientFrom="from-primary-400"
                  gradientTo="to-primary-600"
                  screenContent={
                    <Image
                      src="/images/screenshots/Estadisticas.webp"
                      alt={t("phoneLabel")}
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="350px"
                    />
                  }
                />
              </div>
            </div>

            {/* Right branches */}
            <div className="flex flex-col justify-evenly py-8">
              {rightFeatures.map((f, i) => (
                <FeatureBranch
                  key={f.id}
                  feature={f}
                  title={t(`${f.id}.title`)}
                  side="right"
                  index={i + 3}
                />
              ))}
            </div>
          </div>

          {/* ═══ MOBILE / TABLET (< lg) ═══ */}
          <div className="lg:hidden flex flex-col items-center mt-10">
            {/* Phone */}
            <div className="relative mb-8">
              {/* Mobile tech rings */}
              {[260, 360].map((size, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-primary-400"
                  style={{
                    width: size,
                    height: size,
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    opacity: 0.08 - i * 0.03,
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.08 - i * 0.03, 0.03, 0.08 - i * 0.03],
                  }}
                  transition={{
                    duration: 8 + i * 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-primary-400/10 blur-[50px] rounded-full" />
              <PhoneMockup
                label={t("phoneLabel")}
                gradientFrom="from-primary-400"
                gradientTo="to-primary-600"
                screenContent={
                  <Image
                    src="/images/screenshots/Estadisticas.webp"
                    alt={t("phoneLabel")}
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="280px"
                  />
                }
              />
            </div>

            {/* Vertical branch tree */}
            <div className="relative w-full max-w-sm">
              <div className="absolute left-[22px] top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-primary-400/50 to-primary-200/5" />
              <div className="space-y-3">
                {features.map((f, i) => (
                  <div key={f.id} className="relative flex items-center">
                    {/* Node */}
                    <div className="relative z-10 flex-shrink-0 w-[46px] flex justify-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                    </div>
                    {/* Horizontal connector */}
                    <div className="w-4 h-[3px] rounded-full bg-primary-400/30 flex-shrink-0" />
                    {/* Label */}
                    <MobileFeatureLabel feature={f} title={t(`${f.id}.title`)} index={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
