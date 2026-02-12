"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { StoreBadge } from "@/components/ui/StoreBadge";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export function FinalCTASection() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-tint overflow-hidden">
      {/* Abstract art background */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="cta-orb1" cx="40%" cy="35%" r="45%">
              <stop offset="0%" stopColor="white" stopOpacity="0.15" />
              <stop offset="50%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cta-orb2" cx="70%" cy="65%" r="40%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cta-blob" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="cta-line" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="30%" stopColor="white" stopOpacity="0.15" />
              <stop offset="70%" stopColor="white" stopOpacity="0.15" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Glowing orbs */}
          <motion.ellipse
            cx="580" cy="280" rx="400" ry="340"
            fill="url(#cta-orb1)"
            animate={{ rx: [400, 420, 400], ry: [340, 360, 340] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="1000" cy="520" rx="320" ry="280"
            fill="url(#cta-orb2)"
            animate={{ rx: [320, 340, 320], ry: [280, 300, 280] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Organic blob */}
          <motion.path
            d="M900,100 C1100,50 1280,200 1230,370 C1180,540 1000,600 850,560 C700,520 640,360 710,230 C780,100 700,150 900,100Z"
            fill="url(#cta-blob)"
            animate={{
              d: [
                "M900,100 C1100,50 1280,200 1230,370 C1180,540 1000,600 850,560 C700,520 640,360 710,230 C780,100 700,150 900,100Z",
                "M920,120 C1120,70 1260,220 1210,390 C1160,560 980,620 830,580 C680,540 620,380 690,250 C760,120 720,170 920,120Z",
                "M900,100 C1100,50 1280,200 1230,370 C1180,540 1000,600 850,560 C700,520 640,360 710,230 C780,100 700,150 900,100Z",
              ],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path
            d="M200,300 C350,220 520,280 500,440 C480,600 320,670 180,610 C40,550 50,380 200,300Z"
            fill="url(#cta-blob)"
            animate={{
              d: [
                "M200,300 C350,220 520,280 500,440 C480,600 320,670 180,610 C40,550 50,380 200,300Z",
                "M220,320 C370,240 500,300 480,460 C460,620 300,690 160,630 C20,570 30,400 220,320Z",
                "M200,300 C350,220 520,280 500,440 C480,600 320,670 180,610 C40,550 50,380 200,300Z",
              ],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />

          {/* Flowing lines */}
          <motion.path
            d="M0,400 C200,330 450,470 720,420 C990,370 1200,300 1440,350"
            stroke="url(#cta-line)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M0,400 C200,330 450,470 720,420 C990,370 1200,300 1440,350",
                "M0,420 C200,350 450,450 720,400 C990,350 1200,320 1440,370",
                "M0,400 C200,330 450,470 720,420 C990,370 1200,300 1440,350",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,600 C300,550 600,630 900,580 C1200,530 1350,590 1440,570"
            stroke="url(#cta-line)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
            animate={{
              d: [
                "M0,600 C300,550 600,630 900,580 C1200,530 1350,590 1440,570",
                "M0,620 C300,570 600,610 900,560 C1200,510 1350,610 1440,590",
                "M0,600 C300,550 600,630 900,580 C1200,530 1350,590 1440,570",
              ],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />

          {/* Sparkles */}
          <motion.circle
            cx="300" cy="200" r="2.5" fill="white" opacity="0.4"
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="1100" cy="350" r="2" fill="white" opacity="0.3"
            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.circle
            cx="700" cy="650" r="2" fill="white" opacity="0.35"
            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />

          {/* Floating dots */}
          <motion.circle
            cx="150" cy="500" r="4" fill="white" opacity="0.12"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="1300" cy="250" r="5" fill="white" opacity="0.1"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Expanding rings */}
          <motion.circle
            cx="400" cy="150" r="30" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1"
            animate={{ r: [30, 42, 30], opacity: [0.1, 0.04, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="1200" cy="600" r="25" fill="none" stroke="white" strokeWidth="0.5" opacity="0.08"
            animate={{ r: [25, 36, 25], opacity: [0.08, 0.03, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </svg>
      </div>

      <GrainOverlay opacity={0.04} />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <AnimatedSection className="text-center lg:text-left">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Empieza a controlar tus gastos hoy
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
              Únete a miles de personas que ya organizan sus finanzas con Savii.
              Es gratis.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </div>
          </AnimatedSection>

          {/* Mockup */}
          <AnimatedSection delay={0.2} className="flex justify-center">
            <PhoneMockup
              animate
              label="Descarga Savii"
              gradientFrom="from-white/20"
              gradientTo="to-white/5"
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
