"use client";

import { motion } from "framer-motion";

export function FinanceIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          {/* Central luminous orb */}
          <radialGradient id="fi-orb" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
            <stop offset="35%" stopColor="#8B5CF6" stopOpacity="0.25" />
            <stop offset="65%" stopColor="#7C3AED" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
          </radialGradient>

          {/* Blob gradients */}
          <linearGradient id="fi-blob1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="fi-blob2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a7ea4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="fi-blob3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="fi-blob4" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0.15" />
          </linearGradient>

          {/* Flowing line gradients */}
          <linearGradient id="fi-line1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="25%" stopColor="#8B5CF6" stopOpacity="0.35" />
            <stop offset="75%" stopColor="#0a7ea4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="fi-line2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0" />
            <stop offset="40%" stopColor="#A78BFA" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#0a7ea4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="fi-line3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>

          {/* Glow gradients */}
          <radialGradient id="fi-glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="fi-glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0a7ea4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0a7ea4" stopOpacity="0" />
          </radialGradient>

          {/* Glass card fill */}
          <linearGradient id="fi-glass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.03" />
          </linearGradient>

          {/* Sparkle */}
          <radialGradient id="fi-sparkle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ========== LAYER 1: Background luminous field ========== */}
        <motion.circle
          cx="600" cy="520" r="380"
          fill="url(#fi-orb)"
          animate={{ r: [380, 400, 380], opacity: [1, 0.85, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="420" cy="380" rx="220" ry="200"
          fill="url(#fi-glow1)"
          animate={{ rx: [220, 245, 220], ry: [200, 218, 200] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.ellipse
          cx="780" cy="680" rx="190" ry="160"
          fill="url(#fi-glow2)"
          animate={{ rx: [190, 210, 190], ry: [160, 178, 160] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* ========== LAYER 2: Large organic blobs (morphing) ========== */}

        {/* Blob A — large, center-right */}
        <motion.path
          d="M650,220 C840,170 1000,360 940,550 C880,740 690,830 520,790 C350,750 260,570 330,400 C400,230 460,270 650,220Z"
          fill="url(#fi-blob1)"
          animate={{
            d: [
              "M650,220 C840,170 1000,360 940,550 C880,740 690,830 520,790 C350,750 260,570 330,400 C400,230 460,270 650,220Z",
              "M680,240 C860,190 980,380 930,570 C880,760 670,850 500,800 C330,750 240,550 320,380 C400,210 500,290 680,240Z",
              "M650,220 C840,170 1000,360 940,550 C880,740 690,830 520,790 C350,750 260,570 330,400 C400,230 460,270 650,220Z",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Blob B — large, center-left */}
        <motion.path
          d="M260,320 C370,170 590,150 700,300 C810,450 740,690 570,760 C400,830 180,700 160,530 C140,360 150,470 260,320Z"
          fill="url(#fi-blob2)"
          animate={{
            d: [
              "M260,320 C370,170 590,150 700,300 C810,450 740,690 570,760 C400,830 180,700 160,530 C140,360 150,470 260,320Z",
              "M290,300 C400,150 570,130 680,280 C790,430 760,670 590,740 C420,810 200,720 180,550 C160,380 180,450 290,300Z",
              "M260,320 C370,170 590,150 700,300 C810,450 740,690 570,760 C400,830 180,700 160,530 C140,360 150,470 260,320Z",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Blob C — medium, top area */}
        <motion.path
          d="M480,100 C640,40 800,160 760,310 C720,460 560,490 420,400 C280,310 320,160 480,100Z"
          fill="url(#fi-blob3)"
          animate={{
            d: [
              "M480,100 C640,40 800,160 760,310 C720,460 560,490 420,400 C280,310 320,160 480,100Z",
              "M510,120 C670,60 780,180 740,330 C700,480 540,510 400,420 C260,330 350,180 510,120Z",
              "M480,100 C640,40 800,160 760,310 C720,460 560,490 420,400 C280,310 320,160 480,100Z",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Blob D — small, bottom-right */}
        <motion.path
          d="M780,860 C870,820 960,880 940,970 C920,1060 840,1090 760,1040 C680,990 690,900 780,860Z"
          fill="url(#fi-blob4)"
          animate={{
            d: [
              "M780,860 C870,820 960,880 940,970 C920,1060 840,1090 760,1040 C680,990 690,900 780,860Z",
              "M800,840 C890,800 970,860 950,950 C930,1040 860,1070 780,1020 C700,970 710,880 800,840Z",
              "M780,860 C870,820 960,880 940,970 C920,1060 840,1090 760,1040 C680,990 690,900 780,860Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />

        {/* Blob E — small, bottom-left */}
        <motion.path
          d="M180,880 C240,840 320,870 310,940 C300,1010 240,1050 180,1020 C120,990 120,920 180,880Z"
          fill="url(#fi-blob1)"
          opacity="0.5"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* ========== LAYER 3: Flowing curves ========== */}

        {/* Main flowing line 1 */}
        <motion.path
          d="M80,380 C230,280 420,480 620,430 C820,380 920,280 1120,330"
          stroke="url(#fi-line1)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M80,380 C230,280 420,480 620,430 C820,380 920,280 1120,330",
              "M80,400 C230,300 420,460 620,410 C820,360 920,300 1120,350",
              "M80,380 C230,280 420,480 620,430 C820,380 920,280 1120,330",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main flowing line 2 */}
        <motion.path
          d="M30,640 C180,570 360,700 530,650 C700,600 840,710 1030,640 C1110,610 1150,650 1200,640"
          stroke="url(#fi-line1)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
          animate={{
            d: [
              "M30,640 C180,570 360,700 530,650 C700,600 840,710 1030,640 C1110,610 1150,650 1200,640",
              "M30,660 C180,590 360,680 530,630 C700,580 840,730 1030,660 C1110,630 1150,630 1200,620",
              "M30,640 C180,570 360,700 530,650 C700,600 840,710 1030,640 C1110,610 1150,650 1200,640",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Accent curve A */}
        <motion.path
          d="M180,180 Q420,120 540,290 Q660,460 860,370"
          stroke="url(#fi-line2)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Accent curve B */}
        <motion.path
          d="M360,810 Q580,750 710,860 Q840,970 1050,890"
          stroke="url(#fi-line3)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Accent curve C — diagonal */}
        <motion.path
          d="M100,900 Q300,700 500,750 Q700,800 900,600 Q1050,450 1150,500"
          stroke="url(#fi-line2)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />

        {/* ========== LAYER 4: Glass floating cards ========== */}

        {/* Glass card — top right (larger) */}
        <motion.g
          animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "870px 280px" }}
        >
          <rect x="790" y="220" width="160" height="120" rx="20" fill="url(#fi-glass)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          {/* Simulated chart bars */}
          <rect x="815" y="295" width="14" height="25" rx="3" fill="rgba(139,92,246,0.2)" />
          <rect x="837" y="280" width="14" height="40" rx="3" fill="rgba(139,92,246,0.3)" />
          <rect x="859" y="288" width="14" height="32" rx="3" fill="rgba(10,126,164,0.25)" />
          <rect x="881" y="272" width="14" height="48" rx="3" fill="rgba(10,126,164,0.35)" />
          <rect x="903" y="284" width="14" height="36" rx="3" fill="rgba(139,92,246,0.2)" />
          {/* Label lines */}
          <line x1="815" y1="248" x2="890" y2="248" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeLinecap="round" />
          <line x1="815" y1="260" x2="860" y2="260" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Glass card — bottom left */}
        <motion.g
          animate={{ y: [0, 14, 0], rotate: [2, -1, 2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ transformOrigin: "310px 760px" }}
        >
          <rect x="240" y="710" width="140" height="105" rx="18" fill="url(#fi-glass)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          {/* Circle indicator */}
          <circle cx="285" cy="748" r="14" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
          <circle cx="285" cy="748" r="6" fill="rgba(139,92,246,0.25)" />
          {/* Lines */}
          <line x1="310" y1="742" x2="360" y2="742" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
          <line x1="310" y1="755" x2="345" y2="755" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Divider */}
          <line x1="258" y1="778" x2="362" y2="778" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          {/* Amount */}
          <line x1="258" y1="796" x2="310" y2="796" stroke="rgba(139,92,246,0.18)" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Glass card — small, right center */}
        <motion.g
          animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <rect x="920" y="560" width="110" height="85" rx="16" fill="url(#fi-glass)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {/* Donut chart simulation */}
          <circle cx="975" cy="595" r="18" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="4" />
          <circle cx="975" cy="595" r="18" fill="none" stroke="rgba(10,126,164,0.3)" strokeWidth="4" strokeDasharray="28 85" strokeLinecap="round" />
          <circle cx="975" cy="595" r="18" fill="none" stroke="rgba(139,92,246,0.35)" strokeWidth="4" strokeDasharray="40 73" strokeDashoffset="-28" strokeLinecap="round" />
          {/* Lines */}
          <line x1="938" y1="630" x2="1012" y2="630" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Glass card — small, top left */}
        <motion.g
          animate={{ y: [0, 12, 0], rotate: [-3, 1, -3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{ transformOrigin: "180px 220px" }}
        >
          <rect x="120" y="180" width="120" height="80" rx="14" fill="url(#fi-glass)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {/* Uptrend line */}
          <path d="M140,238 L160,225 L180,230 L200,212 L220,205" stroke="rgba(74,222,128,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Arrow head */}
          <circle cx="220" cy="205" r="3" fill="rgba(74,222,128,0.3)" />
          {/* Label */}
          <line x1="140" y1="198" x2="190" y2="198" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* ========== LAYER 5: Sparkles ========== */}
        <motion.circle
          cx="720" cy="230" r="3"
          fill="url(#fi-sparkle)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="330" cy="480" r="2.5"
          fill="url(#fi-sparkle)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.circle
          cx="880" cy="480" r="2"
          fill="url(#fi-sparkle)"
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.circle
          cx="480" cy="720" r="2.5"
          fill="url(#fi-sparkle)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.circle
          cx="170" cy="560" r="2"
          fill="url(#fi-sparkle)"
          animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
        <motion.circle
          cx="1050" cy="380" r="2"
          fill="url(#fi-sparkle)"
          animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.3, 0.5] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.circle
          cx="600" cy="950" r="2.5"
          fill="url(#fi-sparkle)"
          animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* ========== LAYER 6: Floating dots & rings ========== */}

        {/* Animated dots */}
        <motion.circle
          cx="130" cy="480" r="5" fill="#A78BFA" opacity="0.25"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="980" cy="420" r="6" fill="#0a7ea4" opacity="0.2"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.circle
          cx="600" cy="120" r="4" fill="#8B5CF6" opacity="0.3"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.circle
          cx="1100" cy="700" r="4" fill="#A78BFA" opacity="0.2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Static accent dots */}
        <circle cx="380" cy="960" r="3" fill="#A78BFA" opacity="0.18" />
        <circle cx="820" cy="1020" r="4" fill="#0a7ea4" opacity="0.12" />
        <circle cx="1080" cy="280" r="3" fill="#8B5CF6" opacity="0.18" />
        <circle cx="80" cy="780" r="5" fill="#C4B5FD" opacity="0.12" />
        <circle cx="1020" cy="180" r="3" fill="#A78BFA" opacity="0.15" />
        <circle cx="280" cy="80" r="4" fill="#0a7ea4" opacity="0.12" />
        <circle cx="700" cy="1080" r="3" fill="#8B5CF6" opacity="0.1" />
        <circle cx="50" cy="350" r="3" fill="#C4B5FD" opacity="0.15" />

        {/* Expanding rings */}
        <motion.circle
          cx="240" cy="230" r="40" fill="none" stroke="#A78BFA" strokeWidth="0.5" opacity="0.2"
          animate={{ r: [40, 52, 40], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="930" cy="870" r="30" fill="none" stroke="#0a7ea4" strokeWidth="0.5" opacity="0.18"
          animate={{ r: [30, 40, 30], opacity: [0.18, 0.08, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.circle
          cx="770" cy="130" r="25" fill="none" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.15"
          animate={{ r: [25, 34, 25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.circle
          cx="500" cy="1050" r="35" fill="none" stroke="#A78BFA" strokeWidth="0.5" opacity="0.12"
          animate={{ r: [35, 45, 35], opacity: [0.12, 0.06, 0.12] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </svg>
    </div>
  );
}
