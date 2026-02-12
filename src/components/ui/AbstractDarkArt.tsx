"use client";

import { motion } from "framer-motion";

export function AbstractDarkArt({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 select-none pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="da-orb1" cx="55%" cy="40%" r="45%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#6D28D9" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#4C1D95" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="da-orb2" cx="35%" cy="65%" r="40%">
            <stop offset="0%" stopColor="#0a7ea4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="da-blob1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="da-blob2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="da-line" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="30%" stopColor="#A78BFA" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#0a7ea4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="da-sparkle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glowing orbs */}
        <motion.ellipse
          cx="800" cy="300" rx="380" ry="320"
          fill="url(#da-orb1)"
          animate={{ rx: [380, 400, 380], ry: [320, 340, 320] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="500" cy="520" rx="300" ry="260"
          fill="url(#da-orb2)"
          animate={{ rx: [300, 320, 300], ry: [260, 280, 260] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Organic shapes */}
        <motion.path
          d="M850,100 C1050,60 1200,200 1150,360 C1100,520 920,580 780,530 C640,480 590,320 660,200 C730,80 650,140 850,100Z"
          fill="url(#da-blob1)"
          animate={{
            d: [
              "M850,100 C1050,60 1200,200 1150,360 C1100,520 920,580 780,530 C640,480 590,320 660,200 C730,80 650,140 850,100Z",
              "M870,120 C1070,80 1180,220 1130,380 C1080,540 900,600 760,550 C620,500 570,340 640,220 C710,100 670,160 870,120Z",
              "M850,100 C1050,60 1200,200 1150,360 C1100,520 920,580 780,530 C640,480 590,320 660,200 C730,80 650,140 850,100Z",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M300,300 C450,220 620,280 600,440 C580,600 420,670 280,610 C140,550 150,380 300,300Z"
          fill="url(#da-blob2)"
          animate={{
            d: [
              "M300,300 C450,220 620,280 600,440 C580,600 420,670 280,610 C140,550 150,380 300,300Z",
              "M320,320 C470,240 600,300 580,460 C560,620 400,690 260,630 C120,570 130,400 320,320Z",
              "M300,300 C450,220 620,280 600,440 C580,600 420,670 280,610 C140,550 150,380 300,300Z",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Flowing lines */}
        <motion.path
          d="M0,350 C200,280 450,420 720,360 C990,300 1200,260 1440,310"
          stroke="url(#da-line)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M0,350 C200,280 450,420 720,360 C990,300 1200,260 1440,310",
              "M0,370 C200,300 450,400 720,340 C990,280 1200,280 1440,330",
              "M0,350 C200,280 450,420 720,360 C990,300 1200,260 1440,310",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,580 C300,530 600,610 900,560 C1200,510 1350,570 1440,550"
          stroke="url(#da-line)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
          animate={{
            d: [
              "M0,580 C300,530 600,610 900,560 C1200,510 1350,570 1440,550",
              "M0,600 C300,550 600,590 900,540 C1200,490 1350,590 1440,570",
              "M0,580 C300,530 600,610 900,560 C1200,510 1350,570 1440,550",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Sparkles */}
        <motion.circle
          cx="1000" cy="150" r="2" fill="url(#da-sparkle)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="350" cy="400" r="2.5" fill="url(#da-sparkle)"
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.circle
          cx="700" cy="650" r="2" fill="url(#da-sparkle)"
          animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.circle
          cx="1250" cy="450" r="2" fill="url(#da-sparkle)"
          animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Floating dots */}
        <motion.circle
          cx="200" cy="200" r="4" fill="#A78BFA" opacity="0.15"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="1300" cy="600" r="5" fill="#0a7ea4" opacity="0.12"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <circle cx="600" cy="100" r="3" fill="#8B5CF6" opacity="0.1" />
        <circle cx="1100" cy="700" r="3" fill="#A78BFA" opacity="0.08" />
        <circle cx="100" cy="650" r="4" fill="#0a7ea4" opacity="0.08" />

        {/* Expanding rings */}
        <motion.circle
          cx="250" cy="150" r="35" fill="none" stroke="#A78BFA" strokeWidth="0.5" opacity="0.1"
          animate={{ r: [35, 48, 35], opacity: [0.1, 0.04, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="1200" cy="350" r="25" fill="none" stroke="#0a7ea4" strokeWidth="0.5" opacity="0.1"
          animate={{ r: [25, 36, 25], opacity: [0.1, 0.04, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </svg>
    </div>
  );
}
