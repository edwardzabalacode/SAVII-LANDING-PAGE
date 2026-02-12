"use client";

import { motion } from "framer-motion";

export function AbstractHeroArt({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 select-none pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="ha-orb1" cx="60%" cy="30%" r="45%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ha-orb2" cx="30%" cy="70%" r="40%">
            <stop offset="0%" stopColor="#0a7ea4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ha-blob1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="ha-blob2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="ha-line" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#0a7ea4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="ha-sparkle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background luminous fields */}
        <motion.ellipse
          cx="900" cy="280" rx="400" ry="350"
          fill="url(#ha-orb1)"
          animate={{ rx: [400, 420, 400], ry: [350, 370, 350] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="400" cy="600" rx="350" ry="300"
          fill="url(#ha-orb2)"
          animate={{ rx: [350, 370, 350], ry: [300, 320, 300] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Organic blobs */}
        <motion.path
          d="M950,150 C1120,100 1280,250 1230,400 C1180,550 1020,600 880,560 C740,520 680,380 740,260 C800,140 780,200 950,150Z"
          fill="url(#ha-blob1)"
          animate={{
            d: [
              "M950,150 C1120,100 1280,250 1230,400 C1180,550 1020,600 880,560 C740,520 680,380 740,260 C800,140 780,200 950,150Z",
              "M970,170 C1140,120 1260,270 1210,420 C1160,570 1000,620 860,580 C720,540 660,400 720,280 C780,160 800,220 970,170Z",
              "M950,150 C1120,100 1280,250 1230,400 C1180,550 1020,600 880,560 C740,520 680,380 740,260 C800,140 780,200 950,150Z",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M200,200 C350,120 520,200 500,380 C480,560 320,650 180,580 C40,510 50,280 200,200Z"
          fill="url(#ha-blob2)"
          animate={{
            d: [
              "M200,200 C350,120 520,200 500,380 C480,560 320,650 180,580 C40,510 50,280 200,200Z",
              "M220,220 C370,140 500,220 480,400 C460,580 300,670 160,600 C20,530 30,300 220,220Z",
              "M200,200 C350,120 520,200 500,380 C480,560 320,650 180,580 C40,510 50,280 200,200Z",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Flowing lines */}
        <motion.path
          d="M0,500 C200,420 400,550 720,480 C1040,410 1200,350 1440,400"
          stroke="url(#ha-line)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M0,500 C200,420 400,550 720,480 C1040,410 1200,350 1440,400",
              "M0,520 C200,440 400,530 720,460 C1040,390 1200,370 1440,420",
              "M0,500 C200,420 400,550 720,480 C1040,410 1200,350 1440,400",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,700 C300,650 500,720 800,680 C1100,640 1300,700 1440,680"
          stroke="url(#ha-line)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          animate={{
            d: [
              "M0,700 C300,650 500,720 800,680 C1100,640 1300,700 1440,680",
              "M0,720 C300,670 500,700 800,660 C1100,620 1300,720 1440,700",
              "M0,700 C300,650 500,720 800,680 C1100,640 1300,700 1440,680",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Sparkles */}
        <motion.circle
          cx="1100" cy="200" r="2.5" fill="url(#ha-sparkle)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="300" cy="350" r="2" fill="url(#ha-sparkle)"
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.circle
          cx="750" cy="600" r="2" fill="url(#ha-sparkle)"
          animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.circle
          cx="1300" cy="500" r="2" fill="url(#ha-sparkle)"
          animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />

        {/* Floating dots */}
        <motion.circle
          cx="1200" cy="350" r="4" fill="#A78BFA" opacity="0.2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="150" cy="500" r="5" fill="#0a7ea4" opacity="0.15"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <circle cx="600" cy="100" r="3" fill="#8B5CF6" opacity="0.15" />
        <circle cx="1350" cy="700" r="3" fill="#A78BFA" opacity="0.12" />
        <circle cx="100" cy="800" r="4" fill="#0a7ea4" opacity="0.1" />

        {/* Expanding ring */}
        <motion.circle
          cx="1100" cy="150" r="30" fill="none" stroke="#A78BFA" strokeWidth="0.5" opacity="0.15"
          animate={{ r: [30, 42, 30], opacity: [0.15, 0.06, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
