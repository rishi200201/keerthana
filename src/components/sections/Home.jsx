import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Kerala Lamp (Nilavilakku) Component
const Nilavilakku = ({ delay = 0, position }) => {
  return (
    <motion.div
      className="absolute"
      style={position}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 1, type: "spring", bounce: 0.4 }}
    >
      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-xl">
          <defs>
            <radialGradient id={`flame-${delay}`}>
              <stop offset="0%" stopColor="#ffeb3b" />
              <stop offset="50%" stopColor="#ff9800" />
              <stop offset="100%" stopColor="#ff5722" />
            </radialGradient>
            <filter id={`glow-${delay}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Flame */}
          <motion.path
            d="M40 10 Q35 20 40 30 Q45 20 40 10 Z"
            fill={`url(#flame-${delay})`}
            filter={`url(#glow-${delay})`}
            animate={{
              d: [
                "M40 10 Q35 20 40 30 Q45 20 40 10 Z",
                "M40 8 Q33 20 40 32 Q47 20 40 8 Z",
                "M40 10 Q35 20 40 30 Q45 20 40 10 Z",
              ],
              opacity: [1, 0.8, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Lamp top (bowl) */}
          <ellipse cx="40" cy="35" rx="15" ry="5" fill="#b8860b" stroke="#8b6914" strokeWidth="1"/>
          
          {/* Lamp body */}
          <path
            d="M30 35 Q25 50 30 65 L50 65 Q55 50 50 35"
            fill="#daa520"
            stroke="#b8860b"
            strokeWidth="2"
          />
          
          {/* Decorative lines */}
          <line x1="27" y1="45" x2="53" y2="45" stroke="#8b6914" strokeWidth="1"/>
          <line x1="28" y1="55" x2="52" y2="55" stroke="#8b6914" strokeWidth="1"/>
          
          {/* Base */}
          <rect x="25" y="65" width="30" height="8" fill="#b8860b" stroke="#8b6914" strokeWidth="1" rx="2"/>
          <ellipse cx="40" cy="73" rx="20" ry="5" fill="#daa520" stroke="#b8860b" strokeWidth="1"/>
          
          {/* Stand */}
          <rect x="35" y="73" width="10" height="15" fill="#8b6914"/>
          <ellipse cx="40" cy="88" rx="15" ry="4" fill="#b8860b"/>
          <ellipse cx="40" cy="92" rx="18" ry="5" fill="#daa520" stroke="#8b6914" strokeWidth="1"/>
          
          {/* Light glow */}
          <motion.circle
            cx="40"
            cy="20"
            r="20"
            fill="#ffeb3b"
            opacity="0.3"
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

// Hibiscus Flower (Kerala State Flower) Component
const Hibiscus = ({ delay = 0, position }) => {
  return (
    <motion.div
      className="absolute"
      style={position}
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ delay, duration: 2, type: "spring", bounce: 0.4 }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="90" height="130" viewBox="0 0 90 130" className="drop-shadow-2xl">
          {/* Hibiscus specific styling */}
          <defs>
            <radialGradient id={`hibiscus-glow-${delay}`}>
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
            </radialGradient>
            <filter id={`hibiscus-shadow-${delay}`}>
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
            </filter>
            <linearGradient id={`stem-gradient-${delay}`} x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1a5c0a" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>

          {/* Stem */}
          <motion.path
            d="M45 130 Q43 85 45 40"
            stroke={`url(#stem-gradient-${delay})`}
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: delay + 0.5, duration: 1.2 }}
          />

          {/* Leaves */}
          <motion.path
            d="M45 75 Q32 72 25 78 Q32 82 45 78"
            fill="#22c55e"
            stroke="#15803d"
            strokeWidth="1"
            initial={{ scale: 0, x: 10 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ delay: delay + 1, duration: 0.6, type: "spring" }}
          />
          <motion.path
            d="M45 92 Q58 89 65 95 Q58 99 45 95"
            fill="#22c55e"
            stroke="#15803d"
            strokeWidth="1"
            initial={{ scale: 0, x: -10 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ delay: delay + 1.2, duration: 0.6, type: "spring" }}
          />

          {/* Hibiscus flower - 5 large petals */}
          <g transform="translate(45, 30)" filter={`url(#hibiscus-shadow-${delay})`}>
            {/* Glow */}
            <motion.circle
              cx="0"
              cy="0"
              r="28"
              fill={`url(#hibiscus-glow-${delay})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ delay: delay + 2, duration: 2, repeat: Infinity }}
            />

            {/* 5 Large red petals characteristic of hibiscus */}
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <motion.ellipse
                key={`petal-${i}`}
                cx="0"
                cy="-15"
                rx="12"
                ry="18"
                fill="#dc2626"
                stroke="#991b1b"
                strokeWidth="1"
                transform={`rotate(${angle})`}
                initial={{ scale: 0, rotate: angle - 90 }}
                animate={{ scale: 1, rotate: angle }}
                transition={{ 
                  delay: delay + 1.7 + i * 0.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              />
            ))}
            
            {/* Yellow center (stamen) */}
            <motion.circle
              cx="0"
              cy="0"
              r="4"
              fill="#fbbf24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 2.2, duration: 0.4, type: "spring" }}
            />
            
            {/* Long pistil (characteristic of hibiscus) */}
            <motion.line
              x1="0" y1="0" x2="0" y2="-10"
              stroke="#fbbf24"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: delay + 2.3, duration: 0.5 }}
            />
            <motion.circle
              cx="0"
              cy="-10"
              r="2"
              fill="#ff9800"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 2.5, duration: 0.3, type: "spring" }}
            />
          </g>

          {/* Sparkles */}
          {[...Array(4)].map((_, i) => {
            const sparkleAngle = (i * 90) + 45;
            const x = 45 + Math.cos(sparkleAngle * Math.PI / 180) * 25;
            const y = 30 + Math.sin(sparkleAngle * Math.PI / 180) * 25;
            return (
              <motion.circle
                key={`sparkle-${i}`}
                cx={x}
                cy={y}
                r="2"
                fill="#fbbf24"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0] 
                }}
                transition={{
                  delay: delay + 2.5 + i * 0.1,
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            );
          })}
        </svg>
      </motion.div>
    </motion.div>
  );
};

// Boy with Cap Component
const BoyWithCap = () => {
  return (
    <motion.div
      className="relative"
      animate={{ 
        y: [0, -8, 0],
      }}
      transition={{ 
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div>
        <svg width="180" height="220" viewBox="0 0 180 220" className="drop-shadow-2xl">
          <defs>
            <radialGradient id="boy-glow">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="shirt-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="pants-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <filter id="boy-shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="2" dy="3" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Glow effect */}
          <motion.circle
            cx="90"
            cy="110"
            r="75"
            fill="url(#boy-glow)"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <g filter="url(#boy-shadow)">
            {/* Black Cap */}
            <motion.g
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            >
              {/* Cap brim */}
              <ellipse cx="90" cy="48" rx="38" ry="7" fill="#1f2937" />
              <ellipse cx="90" cy="47" rx="38" ry="6" fill="#374151" />
              
              {/* Cap body - rounded dome shape */}
              <path
                d="M55 48 Q55 22 90 20 Q125 22 125 48"
                fill="#374151"
                stroke="#1f2937"
                strokeWidth="1.5"
              />
              
              {/* Cap panels/stitching */}
              <path d="M90 20 L90 48" stroke="#1f2937" strokeWidth="1" opacity="0.5" />
              <path d="M70 28 Q90 20 110 28" stroke="#1f2937" strokeWidth="1" opacity="0.3" />
              
              {/* Cap button on top */}
              <circle cx="90" cy="22" r="3.5" fill="#111827" stroke="#000" strokeWidth="0.5" />
            </motion.g>

            {/* Neck */}
            <motion.rect
              x="82"
              y="90"
              width="16"
              height="12"
              fill="#fbbf24"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
            />

            {/* Head - perfect circle */}
            <motion.circle
              cx="90"
              cy="75"
              r="28"
              fill="#fcd34d"
              stroke="#f59e0b"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 180 }}
            />
            
            {/* Hair peeking out from cap - neat style */}
            <motion.path
              d="M58 50 Q56 54 58 58 L62 56 Z"
              fill="#2d1810"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
            />
            <motion.path
              d="M122 50 Q124 54 122 58 L118 56 Z"
              fill="#2d1810"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
            />

            {/* Ears */}
            <ellipse cx="62" cy="75" rx="4" ry="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
            <ellipse cx="118" cy="75" rx="4" ry="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />

            {/* Friendly eyes with sparkle */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Left eye */}
              <ellipse cx="78" cy="72" rx="6" ry="7" fill="white" stroke="#000" strokeWidth="1.2" />
              <motion.circle 
                cx="79" 
                cy="73" 
                r="3.5" 
                fill="#1f2937"
                animate={{ scale: [1, 0.95, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <circle cx="80" cy="71" r="1.5" fill="white" opacity="0.9" />
              
              {/* Right eye */}
              <ellipse cx="102" cy="72" rx="6" ry="7" fill="white" stroke="#000" strokeWidth="1.2" />
              <motion.circle 
                cx="101" 
                cy="73" 
                r="3.5" 
                fill="#1f2937"
                animate={{ scale: [1, 0.95, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <circle cx="100" cy="71" r="1.5" fill="white" opacity="0.9" />

              {/* Eyebrows */}
              <path d="M73 65 Q78 63 83 64" stroke="#2d1810" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M97 64 Q102 63 107 65" stroke="#2d1810" strokeWidth="2" strokeLinecap="round" fill="none" />
            </motion.g>

            {/* Nose */}
            <motion.path
              d="M90 78 L90 84"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.45 }}
            />
            <ellipse cx="90" cy="84" rx="3" ry="2" fill="#f59e0b" opacity="0.6" />

            {/* Happy smile */}
            <motion.path
              d="M76 88 Q90 96 104 88"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            />
            
            {/* Teeth */}
            <motion.path
              d="M82 91 Q90 96 98 91"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            />

            {/* Body - neat t-shirt */}
            <motion.path
              d="M68 102 L60 108 L58 165 L72 163 L72 140 L108 140 L108 163 L122 165 L120 108 L112 102 Z"
              fill="url(#shirt-gradient)"
              stroke="#1e40af"
              strokeWidth="2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            />

            {/* Collar */}
            <path d="M82 102 L78 108 L90 110 L102 108 L98 102" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1" />
            
            {/* Pocket on shirt */}
            <motion.rect
              x="82"
              y="120"
              width="16"
              height="14"
              rx="2"
              fill="#2563eb"
              stroke="#1e40af"
              strokeWidth="1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            />

            {/* Arms - natural position */}
            <motion.path
              d="M60 108 Q48 120 44 138"
              stroke="#fcd34d"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
              }}
              transition={{ 
                pathLength: { delay: 0.5, duration: 0.5 }
              }}
            />
            
            {/* Left hand - waving */}
            <motion.g
              animate={{
                rotate: [0, -20, 20, 0],
                y: [0, -3, 3, 0]
              }}
              transition={{ delay: 1, duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: '44px 138px' }}
            >
              <ellipse cx="42" cy="140" rx="6" ry="8" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1"/>
              <path d="M42 134 L42 128" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M39 134 L38 128" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M45 134 L46 128" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round"/>
            </motion.g>

            <motion.path
              d="M120 108 Q132 120 136 138"
              stroke="#fcd34d"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
              }}
              transition={{ 
                pathLength: { delay: 0.5, duration: 0.5 }
              }}
            />
            
            {/* Right hand - waving */}
            <motion.g
              animate={{
                rotate: [0, 20, -20, 0],
                y: [0, -3, 3, 0]
              }}
              transition={{ delay: 1, duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: '136px 138px' }}
            >
              <ellipse cx="138" cy="140" rx="6" ry="8" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1"/>
              <path d="M138 134 L138 128" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M135 134 L134 128" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M141 134 L142 128" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round"/>
            </motion.g>

            {/* Legs - neat pants */}
            <motion.path
              d="M72 163 Q70 185 68 203"
              stroke="url(#pants-gradient)"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
            
            <motion.path
              d="M108 163 Q110 185 112 203"
              stroke="url(#pants-gradient)"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />

            {/* Shoes - neat sneakers */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              {/* Left shoe */}
              <ellipse cx="68" cy="206" rx="10" ry="5" fill="#ffffff" stroke="#1f2937" strokeWidth="1.5"/>
              <ellipse cx="68" cy="205" rx="9" ry="4" fill="#1f2937"/>
              <line x1="62" y1="205" x2="74" y2="205" stroke="#ffffff" strokeWidth="1"/>
              
              {/* Right shoe */}
              <ellipse cx="112" cy="206" rx="10" ry="5" fill="#ffffff" stroke="#1f2937" strokeWidth="1.5"/>
              <ellipse cx="112" cy="205" rx="9" ry="4" fill="#1f2937"/>
              <line x1="106" y1="205" x2="118" y2="205" stroke="#ffffff" strokeWidth="1"/>
            </motion.g>
          </g>

          {/* Sparkles - subtle */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60);
            const radius = 50;
            const x = 90 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 75 + Math.sin(angle * Math.PI / 180) * radius;
            return (
              <motion.g key={`sparkle-${i}`}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="2.5"
                  fill="#fbbf24"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.3, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    delay: 1.2 + i * 0.15,
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </motion.g>
            );
          })}
        </svg>
      </motion.div>

      {/* Speech bubble */}
      <motion.div
        className="absolute -top-20 -right-40 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl px-8 py-4 shadow-2xl border-4 border-orange-600"
        initial={{ scale: 0, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.8, type: "spring", bounce: 0.6 }}
      >
        <motion.p 
          className="text-3xl md:text-4xl font-black text-white whitespace-nowrap"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [-2, 2, -2]
          }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          SURPRISE!! 🎉
        </motion.p>
        <div className="absolute bottom-2 left-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-orange-600 transform translate-y-full" />
        <div className="absolute bottom-2 left-9 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-orange-400 transform translate-y-full" />
      </motion.div>
    </motion.div>
  );
};

// Kerala Girl with Kasavu Saree Component
const MalluGirlCelebrating = ({ position, delay = 0, color = "#fbbf24" }) => {
  return (
    <motion.div
      className="absolute"
      style={position}
      initial={{ scale: 0, opacity: 0, y: 50, rotate: 180 }}
      animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay, type: "spring", bounce: 0.8 }}
    >
      <motion.svg width="120" height="150" viewBox="0 0 120 150">
        <defs>
          <linearGradient id={`kasavu-gradient-${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#fffef0" />
            <stop offset="100%" stopColor="#f5f5dc" />
          </linearGradient>
          <radialGradient id={`girl-glow-${delay}`}>
            <stop offset="0%" stopColor={color} stopOpacity="0.7" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <g>
          {/* Glow effect */}
          <motion.circle
            cx="60"
            cy="65"
            r="55"
            fill={`url(#girl-glow-${delay})`}
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay }}
          />

          {/* Head with brown skin tone */}
          <motion.circle
            cx="60"
            cy="28"
            r="15"
            fill="#8b5a3c"
            stroke="#6b4423"
            strokeWidth="2"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{ duration: 0.9, repeat: Infinity, delay }}
          />
          
          {/* Long hair with flowers */}
          <motion.path
            d="M47 25 Q45 15 50 12 Q55 10 60 10 Q65 10 70 12 Q75 15 73 25 L73 35 Q70 40 60 42 Q50 40 47 35 Z"
            fill="#1a1a1a"
            stroke="#000"
            strokeWidth="1.5"
          />
          
          {/* Hair bun with flower garland */}
          <motion.circle
            cx="60"
            cy="18"
            r="8"
            fill="#1a1a1a"
            stroke="#000"
            strokeWidth="1"
          />
          
          {/* Jasmine flowers in hair */}
          {[0, 1, 2].map((i) => (
            <motion.g key={`flower-hair-${i}`}>
              <motion.circle
                cx={54 + i * 6}
                cy="18"
                r="2.5"
                fill="#ffffff"
                stroke="#fbbf24"
                strokeWidth="0.5"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: delay + i * 0.2 }}
              />
            </motion.g>
          ))}
          
          {/* Bindi (red dot on forehead) */}
          <motion.circle
            cx="60"
            cy="24"
            r="1.5"
            fill="#dc2626"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay }}
          />
          
          {/* Eyes with kajal */}
          <motion.ellipse cx="55" cy="27" rx="2" ry="2.5" fill="#000" />
          <motion.ellipse cx="65" cy="27" rx="2" ry="2.5" fill="#000" />
          
          {/* Smile */}
          <motion.path
            d="M53 32 Q60 36 67 32"
            stroke="#000"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Earrings - traditional Kerala jhumka */}
          <motion.g
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 1, repeat: Infinity, delay }}
            style={{ transformOrigin: '48px 30px' }}
          >
            <circle cx="48" cy="30" r="2" fill="#d4af37" stroke="#b8860b" strokeWidth="0.5" />
            <ellipse cx="48" cy="34" rx="2.5" ry="3" fill="#d4af37" stroke="#b8860b" strokeWidth="0.5" />
          </motion.g>
          <motion.g
            animate={{ rotate: [3, -3, 3] }}
            transition={{ duration: 1, repeat: Infinity, delay }}
            style={{ transformOrigin: '72px 30px' }}
          >
            <circle cx="72" cy="30" r="2" fill="#d4af37" stroke="#b8860b" strokeWidth="0.5" />
            <ellipse cx="72" cy="34" rx="2.5" ry="3" fill="#d4af37" stroke="#b8860b" strokeWidth="0.5" />
          </motion.g>

          {/* Neck */}
          <rect x="55" y="43" width="10" height="8" fill="#8b5a3c" />

          {/* Gold necklace */}
          <motion.path
            d="M55 45 Q60 48 65 45"
            stroke="#d4af37"
            strokeWidth="2"
            fill="none"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, delay }}
          />
          <circle cx="60" cy="48" r="2.5" fill="#d4af37" stroke="#b8860b" strokeWidth="0.5" />

          {/* Kasavu Set Saree top (white with gold border) */}
          <motion.path
            d="M50 51 L42 58 L42 80 L78 80 L78 58 L70 51"
            fill={`url(#kasavu-gradient-${delay})`}
            stroke="#d4af37"
            strokeWidth="2.5"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{ duration: 0.9, repeat: Infinity, delay }}
          />

          {/* Gold kasavu border on top */}
          <motion.line
            x1="42"
            y1="78"
            x2="78"
            y2="78"
            stroke="#d4af37"
            strokeWidth="4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.2, repeat: Infinity, delay }}
          />

          {/* Sleeves with gold border */}
          <motion.path
            d="M42 58 Q35 65 32 72"
            stroke={`url(#kasavu-gradient-${delay})`}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M42 58 Q35 65 32 72",
                "M42 58 Q30 62 28 68",
                "M42 58 Q35 65 32 72",
              ],
            }}
            transition={{ duration: 0.6, repeat: Infinity, delay }}
          />
          <motion.line
            x1="32"
            y1="72"
            x2="32"
            y2="70"
            stroke="#d4af37"
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          <motion.path
            d="M78 58 Q85 65 88 72"
            stroke={`url(#kasavu-gradient-${delay})`}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M78 58 Q85 65 88 72",
                "M78 58 Q90 62 92 68",
                "M78 58 Q85 65 88 72",
              ],
            }}
            transition={{ duration: 0.6, repeat: Infinity, delay: delay + 0.3 }}
          />
          <motion.line
            x1="88"
            y1="72"
            x2="88"
            y2="70"
            stroke="#d4af37"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Hands with bangles */}
          <motion.g
            animate={{ y: [0, -6, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay }}
          >
            <ellipse cx="32" cy="72" rx="4" ry="5" fill="#8b5a3c" stroke="#6b4423" strokeWidth="1"/>
            {/* Bangles */}
            <circle cx="32" cy="68" r="4" fill="none" stroke="#d4af37" strokeWidth="1.5" />
            <circle cx="32" cy="68" r="5" fill="none" stroke="#dc2626" strokeWidth="1" />
          </motion.g>
          
          <motion.g
            animate={{ y: [0, -6, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: delay + 0.3 }}
          >
            <ellipse cx="88" cy="72" rx="4" ry="5" fill="#8b5a3c" stroke="#6b4423" strokeWidth="1"/>
            {/* Bangles */}
            <circle cx="88" cy="68" r="4" fill="none" stroke="#d4af37" strokeWidth="1.5" />
            <circle cx="88" cy="68" r="5" fill="none" stroke="#dc2626" strokeWidth="1" />
          </motion.g>

          {/* Kasavu Saree - long flowing skirt */}
          <motion.path
            d="M42 80 L38 100 L35 125 L48 125 L52 105 L55 80"
            fill={`url(#kasavu-gradient-${delay})`}
            stroke="#d4af37"
            strokeWidth="2"
            animate={{
              d: [
                "M42 80 L38 100 L35 125 L48 125 L52 105 L55 80",
                "M42 80 L36 100 L33 125 L48 125 L53 105 L55 80",
                "M42 80 L38 100 L35 125 L48 125 L52 105 L55 80",
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay }}
          />
          <motion.path
            d="M65 80 L68 105 L72 125 L85 125 L82 100 L78 80"
            fill={`url(#kasavu-gradient-${delay})`}
            stroke="#d4af37"
            strokeWidth="2"
            animate={{
              d: [
                "M65 80 L68 105 L72 125 L85 125 L82 100 L78 80",
                "M65 80 L67 105 L72 125 L87 125 L84 100 L78 80",
                "M65 80 L68 105 L72 125 L85 125 L82 100 L78 80",
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: delay + 0.5 }}
          />

          {/* Golden kasavu border on saree bottom */}
          <motion.line x1="35" y1="125" x2="48" y2="125" stroke="#d4af37" strokeWidth="5" />
          <motion.line x1="72" y1="125" x2="85" y2="125" stroke="#d4af37" strokeWidth="5" />
          
          {/* Traditional kasavu design lines */}
          {[...Array(3)].map((_, i) => (
            <motion.line
              key={i}
              x1="38"
              y1={95 + i * 10}
              x2="48"
              y2={95 + i * 10}
              stroke="#d4af37"
              strokeWidth="1.5"
              opacity="0.7"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: delay + i * 0.2 }}
            />
          ))}
          {[...Array(3)].map((_, i) => (
            <motion.line
              key={i}
              x1="72"
              y1={95 + i * 10}
              x2="82"
              y2={95 + i * 10}
              stroke="#d4af37"
              strokeWidth="1.5"
              opacity="0.7"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: delay + i * 0.2 }}
            />
          ))}

          {/* Bare feet */}
          <motion.ellipse
            cx="44"
            cy="130"
            rx="6"
            ry="3"
            fill="#8b5a3c"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, delay }}
          />
          <motion.ellipse
            cx="76"
            cy="130"
            rx="6"
            ry="3"
            fill="#8b5a3c"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: delay + 0.5 }}
          />

          {/* Ankle jewelry (payal) */}
          <motion.ellipse cx="44" cy="128" rx="5" ry="1.5" fill="none" stroke="#d4af37" strokeWidth="1" />
          <motion.ellipse cx="76" cy="128" rx="5" ry="1.5" fill="none" stroke="#d4af37" strokeWidth="1" />

          {/* Kerala themed confetti */}
          {[...Array(6)].map((_, i) => {
            const angle = i * 60;
            const radius = 38;
            const x = 60 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 70 + Math.sin(angle * Math.PI / 180) * radius;
            const emojis = ['🌺', '🌸', '🪷', '✨', '💐', '🌼'];
            return (
              <motion.text
                key={i}
                x={x}
                y={y}
                fontSize="12"
                textAnchor="middle"
                animate={{
                  scale: [0, 1.4, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: delay + i * 0.18,
                }}
              >
                {emojis[i]}
              </motion.text>
            );
          })}

          {/* Speech bubble with Malayalam */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.6, type: "spring" }}
          >
            <ellipse
              cx="85"
              cy="12"
              rx="20"
              ry="8"
              fill="white"
              stroke={color}
              strokeWidth="2"
            />
            <motion.text
              x="85"
              y="15"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
              fill={color}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              കേർത്തന! 🎉
            </motion.text>
          </motion.g>
        </g>
      </motion.svg>
    </motion.div>
  );
};

// Kerala-themed Celebrating Stickman Component
const MalluCelebratingStickman = ({ position, delay = 0, color = "#fbbf24", type = "mundu" }) => {
  const isPuncha = type === "puncha";
  
  return (
    <motion.div
      className="absolute"
      style={position}
      initial={{ scale: 0, opacity: 0, y: 50, rotate: -180 }}
      animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay, type: "spring", bounce: 0.8 }}
    >
      <motion.svg width="120" height="140" viewBox="0 0 120 140">
        <defs>
          <linearGradient id={`mundu-gradient-${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
          <radialGradient id={`glow-${delay}`}>
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <g>
          {/* Glow effect */}
          <motion.circle
            cx="60"
            cy="60"
            r="50"
            fill={`url(#glow-${delay})`}
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay }}
          />

          {/* Head with brown skin tone */}
          <motion.circle
            cx="60"
            cy="25"
            r="14"
            fill="#8b5a3c"
            stroke="#6b4423"
            strokeWidth="2"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity, delay }}
          />
          
          {/* Hair - Kerala style */}
          <motion.path
            d="M48 20 Q46 12 52 10 Q58 8 64 10 Q70 12 72 20"
            fill="#1a1a1a"
            stroke="#000"
            strokeWidth="1"
          />
          
          {/* Happy eyes */}
          <motion.circle cx="55" cy="23" r="2" fill="#000" />
          <motion.circle cx="65" cy="23" r="2" fill="#000" />
          <motion.path
            d="M52 28 Q60 33 68 28"
            stroke="#000"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Kasavu border line (gold border on mundu) */}
          <motion.line
            x1="50"
            y1="85"
            x2="70"
            y2="85"
            stroke="#d4af37"
            strokeWidth="3"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1, repeat: Infinity, delay }}
          />

          {/* Body - Kerala shirt style */}
          <motion.path
            d="M55 39 L45 45 L45 75 L75 75 L75 45 L65 39"
            fill={isPuncha ? "#dc2626" : "#3b82f6"}
            stroke={isPuncha ? "#991b1b" : "#1e40af"}
            strokeWidth="2"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity, delay }}
          />

          {/* Collar detail */}
          <path
            d="M55 39 L58 43 L60 42 L62 43 L65 39"
            fill="none"
            stroke={isPuncha ? "#7f1d1d" : "#1e3a8a"}
            strokeWidth="2"
          />

          {/* Left arm - enthusiastic waving */}
          <motion.path
            d="M45 50 L30 35"
            stroke="#8b5a3c"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M45 50 L30 35",
                "M45 50 L25 28",
                "M45 50 L30 35",
              ],
            }}
            transition={{ duration: 0.5, repeat: Infinity, delay }}
          />

          {/* Right arm - enthusiastic waving */}
          <motion.path
            d="M75 50 L90 35"
            stroke="#8b5a3c"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M75 50 L90 35",
                "M75 50 L95 28",
                "M75 50 L90 35",
              ],
            }}
            transition={{ duration: 0.5, repeat: Infinity, delay: delay + 0.25 }}
          />

          {/* Hands */}
          <motion.circle
            cx="30"
            cy="35"
            r="5"
            fill="#8b5a3c"
            stroke="#6b4423"
            strokeWidth="1"
            animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, delay }}
          />
          <motion.circle
            cx="90"
            cy="35"
            r="5"
            fill="#8b5a3c"
            stroke="#6b4423"
            strokeWidth="1"
            animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: delay + 0.25 }}
          />

          {/* Mundu/Dhoti - Kerala traditional dress */}
          <motion.path
            d="M45 75 L42 95 L40 115 L55 115 L58 95 L60 75"
            fill={`url(#mundu-gradient-${delay})`}
            stroke="#d4af37"
            strokeWidth="2"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity, delay }}
          />
          <motion.path
            d="M60 75 L62 95 L65 115 L80 115 L78 95 L75 75"
            fill={`url(#mundu-gradient-${delay})`}
            stroke="#d4af37"
            strokeWidth="2"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity, delay: delay + 0.4 }}
          />

          {/* Kasavu border (gold border) on mundu */}
          <line x1="40" y1="115" x2="55" y2="115" stroke="#d4af37" strokeWidth="4" />
          <line x1="65" y1="115" x2="80" y2="115" stroke="#d4af37" strokeWidth="4" />
          
          {/* Pleats on mundu */}
          <line x1="48" y1="80" x2="46" y2="110" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
          <line x1="52" y1="80" x2="50" y2="110" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
          <line x1="68" y1="80" x2="70" y2="110" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
          <line x1="72" y1="80" x2="74" y2="110" stroke="#d4af37" strokeWidth="1" opacity="0.5" />

          {/* Bare feet */}
          <motion.ellipse
            cx="47"
            cy="120"
            rx="6"
            ry="3"
            fill="#8b5a3c"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, delay }}
          />
          <motion.ellipse
            cx="73"
            cy="120"
            rx="6"
            ry="3"
            fill="#8b5a3c"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: delay + 0.4 }}
          />

          {/* Kerala themed confetti - coconut, leaf, flower */}
          {[...Array(5)].map((_, i) => {
            const angle = i * 72;
            const radius = 35;
            const x = 60 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 60 + Math.sin(angle * Math.PI / 180) * radius;
            const emojis = ['🥥', '🌺', '🍃', '🪔', '✨'];
            return (
              <motion.text
                key={i}
                x={x}
                y={y}
                fontSize="12"
                textAnchor="middle"
                animate={{
                  scale: [0, 1.3, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: delay + i * 0.15,
                }}
              >
                {emojis[i]}
              </motion.text>
            );
          })}

          {/* Speech bubble with Malayalam */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.5, type: "spring" }}
          >
            <rect
              x="15"
              y="2"
              width="35"
              height="12"
              rx="6"
              fill="white"
              stroke={color}
              strokeWidth="2"
            />
            <motion.text
              x="32"
              y="10"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
              fill={color}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              സന്തോഷം!
            </motion.text>
          </motion.g>
        </g>
      </motion.svg>
    </motion.div>
  );
};

// Kerala-themed Birthday Cake Component
const KeralaBirthdayCake = () => {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, opacity: 0, rotate: -20 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
    >
      <svg width="350" height="400" viewBox="0 0 350 400" className="drop-shadow-2xl">
        <defs>
          <linearGradient id="cake-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fcd34d" />
          </linearGradient>
          <linearGradient id="frosting-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fce7f3" />
            <stop offset="100%" stopColor="#fbcfe8" />
          </linearGradient>
          <radialGradient id="flame-glow">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="30%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
        </defs>

        {/* Cake base - bottom layer */}
        <motion.rect
          x="50"
          y="220"
          width="200"
          height="80"
          fill="url(#cake-gradient)"
          stroke="#d97706"
          strokeWidth="3"
          rx="5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        {/* Frosting on bottom layer */}
        <motion.path
          d="M50 220 Q70 210 90 220 Q110 230 130 220 Q150 210 170 220 Q190 230 210 220 Q230 210 250 220 L250 240 L50 240 Z"
          fill="url(#frosting-gradient)"
          stroke="#db2777"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        />

        {/* Cake middle layer */}
        <motion.rect
          x="75"
          y="160"
          width="150"
          height="60"
          fill="url(#cake-gradient)"
          stroke="#d97706"
          strokeWidth="3"
          rx="5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        
        {/* Frosting on middle layer */}
        <motion.path
          d="M75 160 Q95 150 115 160 Q135 170 155 160 Q175 150 195 160 Q215 170 225 160 L225 180 L75 180 Z"
          fill="url(#frosting-gradient)"
          stroke="#db2777"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        />

        {/* Cake top layer */}
        <motion.rect
          x="100"
          y="110"
          width="100"
          height="50"
          fill="url(#cake-gradient)"
          stroke="#d97706"
          strokeWidth="3"
          rx="5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        
        {/* Frosting on top layer */}
        <motion.path
          d="M100 110 Q120 100 140 110 Q160 120 180 110 Q190 100 200 110 L200 130 L100 130 Z"
          fill="url(#frosting-gradient)"
          stroke="#db2777"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />

        {/* Decorative elements on cake */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={`decoration-${i}`}
            cx={70 + i * 25}
            cy="250"
            r="4"
            fill="#dc2626"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 + i * 0.05, type: "spring" }}
          />
        ))}

        {/* Candle */}
        <motion.g
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, type: "spring" }}
        >
          {/* Candle body */}
          <rect
            x="143"
            y="70"
            width="14"
            height="40"
            fill="#dc2626"
            stroke="#991b1b"
            strokeWidth="2"
            rx="2"
          />
          
          {/* Candle stripe */}
          <rect
            x="143"
            y="85"
            width="14"
            height="5"
            fill="#fbbf24"
          />

          {/* Wick */}
          <motion.line
            x1="150"
            y1="70"
            x2="150"
            y2="60"
            stroke="#1f2937"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5 }}
          />

          {/* Flame */}
          <motion.g
            animate={{
              y: [0, -3, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M150 60 Q145 50 150 40 Q155 50 150 60 Z"
              fill="url(#flame-glow)"
              filter="url(#glow-0)"
            />
            <ellipse
              cx="150"
              cy="53"
              rx="3"
              ry="5"
              fill="#fbbf24"
              opacity="0.8"
            />
          </motion.g>

          {/* Flame glow */}
          <motion.circle
            cx="150"
            cy="50"
            r="25"
            fill="#fbbf24"
            opacity="0.3"
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.g>

        {/* Sparkles around cake */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30);
          const radius = 120;
          const x = 150 + Math.cos(angle * Math.PI / 180) * radius;
          const y = 180 + Math.sin(angle * Math.PI / 180) * radius;
          return (
            <motion.circle
              key={`sparkle-${i}`}
              cx={x}
              cy={y}
              r="3"
              fill="#fbbf24"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                delay: 1.5 + i * 0.1,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
};

// Kathakali Dancer Component (Traditional Kerala Dance)
const KathakaliDancer = ({ onSurpriseClick }) => {
  return (
    <motion.div
      className="relative"
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div>
        <svg width="140" height="180" viewBox="0 0 140 180" className="drop-shadow-2xl">
          <defs>
            <radialGradient id="kathakali-glow">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </radialGradient>
            <filter id="kathakali-shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
              <feOffset dx="2" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.4" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Glow effect */}
          <motion.circle
            cx="70"
            cy="90"
            r="65"
            fill="url(#kathakali-glow)"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <g filter="url(#kathakali-shadow)">
            {/* Elaborate crown (Kireedam) */}
            <motion.path
              d="M40 15 L50 5 L60 10 L70 3 L80 10 L90 5 L100 15 L95 25 L45 25 Z"
              fill="#fbbf24"
              stroke="#d97706"
              strokeWidth="2"
              initial={{ scale: 0, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 3.2, type: "spring", stiffness: 200 }}
            />
            
            {/* Crown jewels */}
            {[50, 70, 90].map((x, i) => (
              <motion.circle
                key={`jewel-${i}`}
                cx={x}
                cy="15"
                r="3"
                fill="#dc2626"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.4 + i * 0.1, type: "spring" }}
              />
            ))}

            {/* Face with green makeup (Pacha) */}
            <motion.ellipse
              cx="70"
              cy="35"
              rx="18"
              ry="22"
              fill="#22c55e"
              stroke="#15803d"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.3, type: "spring", stiffness: 200 }}
            />
            
            {/* Large expressive eyes */}
            <motion.ellipse 
              cx="63" 
              cy="32" 
              rx="4" 
              ry="5" 
              fill="white"
              stroke="#000"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            />
            <motion.circle 
              cx="63" 
              cy="33" 
              r="2" 
              fill="#000"
              animate={{ 
                x: [-1, 1, -1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.ellipse 
              cx="77" 
              cy="32" 
              rx="4" 
              ry="5" 
              fill="white"
              stroke="#000"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            />
            <motion.circle 
              cx="77" 
              cy="33" 
              r="2" 
              fill="#000"
              animate={{ 
                x: [-1, 1, -1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Nose and smile */}
            <motion.path
              d="M70 37 L70 42"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 3.6 }}
            />
            
            <motion.path
              d="M62 45 Q70 50 78 45"
              stroke="#dc2626"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 3.7, duration: 0.5 }}
            />

            {/* Elaborate costume (red and gold) */}
            <motion.path
              d="M55 57 L50 70 L45 100 L50 105 L90 105 L95 100 L90 70 L85 57 Z"
              fill="#dc2626"
              stroke="#991b1b"
              strokeWidth="2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 3.4, duration: 0.6 }}
            />
            
            {/* Gold ornaments on costume */}
            {[65, 75].map((x, i) => (
              <motion.circle
                key={`ornament-${i}`}
                cx={x}
                cy="75"
                r="4"
                fill="#fbbf24"
                stroke="#d97706"
                strokeWidth="1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.8 + i * 0.1, type: "spring" }}
              />
            ))}

            {/* Arms in dancing mudra pose */}
            <motion.path
              d="M50 70 Q35 75 25 85"
              stroke="#22c55e"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                d: [
                  "M50 70 Q35 75 25 85",
                  "M50 70 Q35 70 20 75",
                  "M50 70 Q35 75 25 85"
                ]
              }}
              transition={{ 
                pathLength: { delay: 3.5, duration: 0.6 },
                d: { delay: 4, duration: 2, repeat: Infinity }
              }}
            />
            
            {/* Hand with fingers */}
            <motion.g
              animate={{
                x: [0, -3, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ delay: 4, duration: 2, repeat: Infinity }}
            >
              <ellipse cx="23" cy="85" rx="4" ry="6" fill="#22c55e" stroke="#15803d" strokeWidth="1"/>
              <line x1="23" y1="80" x2="23" y2="75" stroke="#22c55e" strokeWidth="2"/>
              <line x1="21" y1="80" x2="20" y2="75" stroke="#22c55e" strokeWidth="2"/>
              <line x1="25" y1="80" x2="26" y2="75" stroke="#22c55e" strokeWidth="2"/>
            </motion.g>
            
            <motion.path
              d="M90 70 Q105 75 115 85"
              stroke="#22c55e"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                d: [
                  "M90 70 Q105 75 115 85",
                  "M90 70 Q105 70 120 75",
                  "M90 70 Q105 75 115 85"
                ]
              }}
              transition={{ 
                pathLength: { delay: 3.5, duration: 0.6 },
                d: { delay: 4, duration: 2, repeat: Infinity }
              }}
            />
            
            <motion.g
              animate={{
                x: [0, 3, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ delay: 4, duration: 2, repeat: Infinity }}
            >
              <ellipse cx="117" cy="85" rx="4" ry="6" fill="#22c55e" stroke="#15803d" strokeWidth="1"/>
              <line x1="117" y1="80" x2="117" y2="75" stroke="#22c55e" strokeWidth="2"/>
              <line x1="115" y1="80" x2="114" y2="75" stroke="#22c55e" strokeWidth="2"/>
              <line x1="119" y1="80" x2="120" y2="75" stroke="#22c55e" strokeWidth="2"/>
            </motion.g>

            {/* Wide skirt base */}
            <motion.path
              d="M45 105 L35 135 L40 140 L100 140 L105 135 L95 105"
              fill="#fbbf24"
              stroke="#d97706"
              strokeWidth="2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 3.6, duration: 0.6 }}
            />

            {/* Legs in dance position */}
            <motion.path
              d="M55 140 Q52 155 50 170"
              stroke="#8b4513"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                d: [
                  "M55 140 Q52 155 50 170",
                  "M55 140 Q50 155 45 170",
                  "M55 140 Q52 155 50 170"
                ]
              }}
              transition={{ 
                pathLength: { delay: 3.7, duration: 0.5 },
                d: { delay: 4.5, duration: 2, repeat: Infinity }
              }}
            />
            <motion.path
              d="M85 140 Q88 155 90 170"
              stroke="#8b4513"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                d: [
                  "M85 140 Q88 155 90 170",
                  "M85 140 Q90 155 95 170",
                  "M85 140 Q88 155 90 170"
                ]
              }}
              transition={{ 
                pathLength: { delay: 3.7, duration: 0.5 },
                d: { delay: 4.5, duration: 2, repeat: Infinity }
              }}
            />
            
            {/* Ankle bells (ghungroo) */}
            {[50, 90].map((x, i) => (
              <motion.ellipse
                key={`bell-${i}`}
                cx={x}
                cy="165"
                rx="8"
                ry="3"
                fill="#fbbf24"
                stroke="#d97706"
                strokeWidth="1"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  scale: { delay: 4, duration: 0.5, repeat: Infinity }
                }}
              />
            ))}
          </g>

          {/* Sparkles around dancer */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60);
            const radius = 50;
            const x = 70 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 90 + Math.sin(angle * Math.PI / 180) * radius;
            return (
              <motion.circle
                key={`sparkle-${i}`}
                cx={x}
                cy={y}
                r="2.5"
                fill="#fbbf24"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  delay: 4 + i * 0.2,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Speech bubble in Malayalam style - Clickable */}
      <motion.div
        className="absolute -top-24 -left-36 bg-gradient-to-br from-white to-yellow-50 rounded-2xl px-6 py-4 shadow-2xl border-4 border-green-600 cursor-pointer hover:scale-105 transition-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
        onClick={onSurpriseClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.p 
          className="text-xl md:text-2xl font-black text-green-600 whitespace-nowrap"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Click for സർപ്രൈസ്! 🎊
        </motion.p>
        <div className="absolute bottom-0 right-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white transform translate-y-full" />
      </motion.div>
    </motion.div>
  );
};

export const Home = () => {
  const [showDancer, setShowDancer] = useState(false);
  const [surpriseClicked, setSurpriseClicked] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [showBirthday, setShowBirthday] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDancer(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (surpriseClicked) {
      // Start countdown
      setCountdown(3);
      
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev === 1) {
            clearInterval(countdownInterval);
            setTimeout(() => {
              setCountdown(null);
              setShowBirthday(true);
            }, 1000);
            return prev;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [surpriseClicked]);

  const handleSurpriseClick = () => {
    setSurpriseClicked(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-12 overflow-hidden">
      {/* Dark Theme Overlay */}
      {surpriseClicked && (
        <motion.div
          className="absolute inset-0 bg-gray-900 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Countdown */}
          {countdown !== null && (
            <motion.div
              key={countdown}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-9xl font-black"
            >
              {countdown}
            </motion.div>
          )}

          {/* Birthday Cake and Message */}
          {showBirthday && (
            <div className="flex flex-col items-center justify-center gap-8">
              {/* Kerala-themed Party - Boys and Girls mix */}
              {/* Boys with mundu/puncha */}
              <MalluCelebratingStickman 
                position={{ top: '8%', left: '8%' }}
                delay={0.8}
                color="#fbbf24"
                type="mundu"
              />
              <MalluCelebratingStickman 
                position={{ bottom: '12%', left: '12%' }}
                delay={1.2}
                color="#22c55e"
                type="mundu"
              />
              <MalluCelebratingStickman 
                position={{ top: '50%', left: '3%', transform: 'translateY(-50%)' }}
                delay={1.6}
                color="#f97316"
                type="mundu"
              />
              <MalluCelebratingStickman 
                position={{ top: '25%', left: '18%' }}
                delay={2}
                color="#dc2626"
                type="puncha"
              />
              
              {/* Girls with kasavu saree */}
              <MalluGirlCelebrating 
                position={{ top: '8%', right: '8%' }}
                delay={1}
                color="#ec4899"
              />
              <MalluGirlCelebrating 
                position={{ bottom: '12%', right: '12%' }}
                delay={1.4}
                color="#3b82f6"
              />
              <MalluGirlCelebrating 
                position={{ top: '50%', right: '3%', transform: 'translateY(-50%)' }}
                delay={1.8}
                color="#a855f7"
              />
              <MalluGirlCelebrating 
                position={{ top: '25%', right: '18%' }}
                delay={2.2}
                color="#14b8a6"
              />
              <MalluGirlCelebrating 
                position={{ bottom: '30%', left: '22%' }}
                delay={2.4}
                color="#f43f5e"
              />
              <MalluCelebratingStickman 
                position={{ bottom: '30%', right: '22%' }}
                delay={2.6}
                color="#8b5cf6"
                type="puncha"
              />

              <KeralaBirthdayCake />
              
              <motion.h1
  className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 mb-4"
  animate={{
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  }}
  transition={{ duration: 3, repeat: Infinity }}
  style={{ backgroundSize: '200% 200%' }}
>
  Eda Birthday Girl 🎉
</motion.h1>



<motion.p
  className="text-2xl md:text-3xl text-pink-300 font-semibold"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  Cake cut cheyyan ready alle? 😏🎂  
</motion.p>

<motion.p
  className="text-xl md:text-2xl text-green-300 font-medium mt-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.4 }}
>
  Janmadinaashamsakal, KEERTHANA 💖✨
</motion.p>


              {/* Confetti effect */}
              {[...Array(30)].map((_, i) => {
                const colors = ['#fbbf24', '#dc2626', '#22c55e', '#3b82f6', '#ec4899'];
                const color = colors[i % colors.length];
                const startX = Math.random() * 100;
                
                return (
                  <motion.div
                    key={`confetti-${i}`}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: color,
                      left: `${startX}%`,
                      top: '-5%',
                    }}
                    animate={{
                      y: ['0vh', '110vh'],
                      x: [0, (Math.random() - 0.5) * 400],
                      rotate: [0, Math.random() * 720],
                      opacity: [1, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: Math.random() * 2,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  />
                );
              })}
            </div>
          )}
        </motion.div>
      )}

      {/* Kerala-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
          }}
        />
      </div>

      {/* Decorative Kerala patterns */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.08 }}>
        {[...Array(12)].map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos((angle * Math.PI) / 180) * 80}%`}
              y2={`${50 + Math.sin((angle * Math.PI) / 180) * 80}%`}
              stroke="#15803d"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Floating decorative elements around card */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Nilavilakku delay={0.2} position={{ position: 'relative' }} />
      </motion.div>
      
      <motion.div
        className="absolute top-10 right-10"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        <Nilavilakku delay={0.4} position={{ position: 'relative' }} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20"
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Hibiscus delay={0.3} position={{ position: 'relative' }} />
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-20"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.7 }}
      >
        <Hibiscus delay={0.6} position={{ position: 'relative' }} />
      </motion.div>

      {/* Main Content Card - Kerala Style */}
      <motion.div
        className="z-10 relative max-w-6xl w-full"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.6 }}
      >
        {/* Card Container */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-8 border-green-700 overflow-hidden">
          {/* Card Header with Kerala Pattern */}
          <div className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 py-6 px-8 border-b-8 border-green-800">
            <motion.div
              className="flex items-center justify-center gap-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-5xl">🪔</span>
              <h2 className="text-3xl md:text-5xl font-black text-white text-center" style={{ textShadow: '3px 3px 0 #15803d' }}>
                ജന്മദിനാശംസകൾ
              </h2>
              <span className="text-5xl">🌺</span>
            </motion.div>
          </div>

          {/* Card Body */}
          <div className="p-8 md:p-12 text-center space-y-8 relative">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg className="w-full h-full">
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 360) / 12;
                  return (
                    <motion.line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + Math.cos((angle * Math.PI) / 180) * 50}%`}
                      y2={`${50 + Math.sin((angle * Math.PI) / 180) * 50}%`}
                      stroke="#15803d"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                    />
                  );
                })}
              </svg>
            </div>
                {/* Happy Birthday Text - Malayalam + English */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.5 }}
            >
              <motion.div
                className="relative inline-block"
                animate={{ rotate: [-0.5, 0.5, -0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* English text - Main name */}
                <h1 
                  className="text-6xl md:text-8xl lg:text-9xl font-black uppercase relative mb-2"
                  style={{ 
                    fontFamily: 'Impact, sans-serif',
                    color: '#dc2626',
                    textShadow: '4px 4px 0 #15803d, -2px -2px 0 #15803d, 2px -2px 0 #15803d, -2px 2px 0 #15803d, 0 0 20px rgba(220, 38, 38, 0.5)',
                  }}
                >
                  <motion.span
                    className="relative"
                    animate={{ 
                      textShadow: [
                        '4px 4px 0 #15803d, -2px -2px 0 #15803d, 2px -2px 0 #15803d, -2px 2px 0 #15803d, 0 0 20px rgba(220, 38, 38, 0.5)',
                        '4px 4px 0 #fbbf24, -2px -2px 0 #fbbf24, 2px -2px 0 #fbbf24, -2px 2px 0 #fbbf24, 0 0 30px rgba(251, 191, 36, 0.7)',
                        '4px 4px 0 #15803d, -2px -2px 0 #15803d, 2px -2px 0 #15803d, -2px 2px 0 #15803d, 0 0 20px rgba(220, 38, 38, 0.5)',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    KEERTHANA
                  </motion.span>
                </h1>
                
                {/* Age badge */}
                <motion.div
                  className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-black text-3xl md:text-4xl px-8 py-3 rounded-full shadow-xl border-4 border-green-700"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.5, type: "spring", bounce: 0.7 }}
                  whileHover={{ scale: 1.1 }}
                >
                  🎂 24 വയസ്സ് 🎉
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Kerala-themed bubbles */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 md:gap-8 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              {[
                { emoji: "🌺", text: "24 aano!", color: "#dc2626", delay: 2 },
                { emoji: "🎊", text: "പാർട്ടി മോഡ് ON!", color: "#22c55e", delay: 2.2 },
                { emoji: "🪔", text: "ആഘോഷം!", color: "#fbbf24", delay: 2.4 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: item.delay, type: "spring", bounce: 0.8 }}
                >
                  <motion.div
                    className="relative bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl px-5 py-3 shadow-lg border-3 border-green-600"
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-xl md:text-2xl font-bold whitespace-nowrap">
                      <span className="mr-2 text-3xl">{item.emoji}</span>
                      <span style={{ color: item.color }}>
                        {item.text}
                      </span>
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Birthday message in Kerala style */}
            <motion.div
              className="relative mx-auto max-w-2xl"
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.6, type: "spring", bounce: 0.6 }}
            >
              <div 
                className="relative rounded-2xl p-8 md:p-10 shadow-xl border-4 border-green-600"
                style={{
                  background: 'linear-gradient(135deg, #fef3c7 0%, #fef08a 50%, #fde047 100%)',
                }}
              >
                <motion.p
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-3 leading-relaxed"
                  style={{ 
                    color: '#15803d',
                  }}
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  എത്ര സന്തോഷവും<br />
                  എത്ര അനുഗ്രഹവും നിറഞ്ഞ<br />
                  <motion.span
                    className="text-2xl md:text-3xl lg:text-4xl block mt-2"
                    style={{
                      background: 'linear-gradient(90deg, #dc2626, #ea580c, #fbbf24)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    ജന്മദിനം ആയിരിക്കട്ടെ! 🎂
                  </motion.span>
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl text-center italic font-semibold text-green-700 mt-4"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Eda molle 💚
                </motion.p>
                
                {/* Decorative corners */}
                {[
                  { top: -3, left: -3 },
                  { top: -3, right: -3 },
                  { bottom: -3, left: -3 },
                  { bottom: -3, right: -3 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-7 h-7 bg-green-700 rounded-full shadow-lg"
                    style={pos}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Card Footer */}
            <motion.div
              className="mt-8 flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
            >
              {['🥥', '🌴', '🌺', '🪔'].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-5xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

      </motion.div>

      {/* Surprise Kathakali Dancer - positioned outside card */}
      {showDancer && !surpriseClicked && (
        <motion.div
          className="absolute bottom-10 right-5 md:right-10 z-50"
          initial={{ x: 200, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 1, type: "spring", bounce: 0.6 }}
        >
          <KathakaliDancer onSurpriseClick={handleSurpriseClick} />
        </motion.div>
      )}

      {/* Subtle Kerala-themed falling elements */}
      {[...Array(20)].map((_, i) => {
        const elements = ['🌺', '🥥', '🍃', '🪔', '🌴'];
        const element = elements[i % 5];
        
        return (
          <motion.div
            key={`element-${i}`}
            className="absolute text-2xl md:text-3xl opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: -50,
            }}
            animate={{
              y: [0, typeof window !== 'undefined' ? window.innerHeight + 100 : 900],
              x: [0, (Math.random() - 0.5) * 200],
              rotate: [0, Math.random() * 720],
              opacity: [0.6, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              delay: 2 + Math.random() * 4,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            {element}
          </motion.div>
        );
      })}
    </section>
  );
};
