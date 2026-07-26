export default function Model3D() {
  const terminals = [
    { top: '5%', left: '10%', rotate: -6, w: 'w-36', lines: 3, delay: '0s' },
    { top: '8%', right: '5%', rotate: 4, w: 'w-32', lines: 2, delay: '0.3s' },
    { bottom: '18%', left: '0%', rotate: 3, w: 'w-34', lines: 4, delay: '0.6s' },
    { bottom: '12%', right: '8%', rotate: -5, w: 'w-28', lines: 2, delay: '0.9s' },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow background */}
      <div className="absolute w-56 h-56 bg-primary/8 rounded-full blur-[80px] animate-pulse-glow" />

      {/* Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Terminal windows */}
      {terminals.map((t, i) => (
        <div
          key={i}
          className={`absolute ${t.w} glass-strong rounded-xl border border-primary/15 overflow-hidden animate-float`}
          style={{
            top: t.top, bottom: t.bottom, left: t.left, right: t.right,
            transform: `rotate(${t.rotate}deg)`,
            animationDelay: t.delay,
            animationDuration: '4s',
            zIndex: 20,
          }}
        >
          {/* Mac dots */}
          <div className="flex items-center gap-1 px-3 py-2 bg-white/[0.03] border-b border-white/[0.06]">
            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          </div>
          {/* Code lines */}
          <div className="p-2.5 space-y-1.5">
            {Array.from({ length: t.lines }).map((_, j) => (
              <div key={j} className="flex items-center gap-1.5">
                <div
                  className="h-1 rounded-full bg-primary/40"
                  style={{ width: `${30 + Math.random() * 50}%` }}
                />
                {j === 0 && (
                  <div className="w-1 h-2.5 bg-primary/60 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Avatar container */}
      <div className="relative animate-float scale-90" style={{ zIndex: 10 }}>

        {/* Main avatar card */}
        <div className="relative glass-strong rounded-3xl p-6 border-2 border-primary/40 overflow-hidden z-10 shadow-[0_0_30px_rgba(225,29,72,0.15)]">

          {/* Avatar SVG */}
          <svg
            viewBox="0 0 200 290"
            className="w-44 h-60 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#e11d48" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
              <linearGradient id="shirtFold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e11d48" />
                <stop offset="100%" stopColor="#9f1239" />
              </linearGradient>
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#292524" />
                <stop offset="50%" stopColor="#1c1917" />
                <stop offset="100%" stopColor="#0c0a09" />
              </linearGradient>
              <linearGradient id="hairShine" x1="30%" y1="0%" x2="70%" y2="100%">
                <stop offset="0%" stopColor="#44403c" />
                <stop offset="100%" stopColor="#1c1917" />
              </linearGradient>
              <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3f3f46" />
                <stop offset="50%" stopColor="#27272a" />
                <stop offset="100%" stopColor="#18181b" />
              </linearGradient>
              <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f0f12" />
                <stop offset="100%" stopColor="#1a1a1f" />
              </linearGradient>
              <linearGradient id="headphoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3f3f46" />
                <stop offset="50%" stopColor="#27272a" />
                <stop offset="100%" stopColor="#18181b" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="softShadow">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
              </filter>
              <clipPath id="screenClip">
                <rect x="10" y="165" width="180" height="60" rx="4" />
              </clipPath>
            </defs>

            {/* BODY */}
            <path d="M 55 185 Q 55 165 75 155 L 100 145 L 125 155 Q 145 165 145 185 L 145 250 L 55 250 Z" fill="url(#shirtGrad)" filter="url(#softShadow)" />
            <path d="M 75 165 Q 80 180 85 200" fill="none" stroke="url(#shirtFold)" strokeWidth="1.5" opacity="0.4" />
            <path d="M 125 165 Q 120 180 115 200" fill="none" stroke="url(#shirtFold)" strokeWidth="1.5" opacity="0.4" />
            <path d="M 90 155 Q 95 165 100 155" fill="none" stroke="#fb7185" strokeWidth="1" opacity="0.3" />
            <path d="M 85 155 L 100 172 L 115 155" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.5" />

            {/* NECK */}
            <rect x="90" y="130" width="20" height="18" rx="5" fill="url(#skinShadow)" />

            {/* HEAD */}
            <ellipse cx="100" cy="85" rx="40" ry="46" fill="url(#skinGrad)" filter="url(#softShadow)" />
            <ellipse cx="100" cy="95" rx="35" ry="35" fill="#d97706" opacity="0.12" />
            <ellipse cx="70" cy="100" rx="8" ry="5" fill="#f97316" opacity="0.15" />
            <ellipse cx="130" cy="100" rx="8" ry="5" fill="#f97316" opacity="0.15" />

            {/* HAIR */}
            <path d="M 60 78 Q 60 30 100 25 Q 140 30 140 78 Q 138 50 122 42 Q 108 36 100 36 Q 92 36 78 42 Q 62 50 60 78 Z" fill="url(#hairGrad)" />
            <path d="M 75 55 Q 85 35 105 38 Q 95 42 85 58 Z" fill="url(#hairShine)" opacity="0.5" />
            <path d="M 68 65 Q 72 45 85 38" fill="none" stroke="#44403c" strokeWidth="0.8" opacity="0.3" />
            <path d="M 78 60 Q 82 42 95 35" fill="none" stroke="#44403c" strokeWidth="0.8" opacity="0.25" />
            <path d="M 115 58 Q 120 42 130 48" fill="none" stroke="#44403c" strokeWidth="0.8" opacity="0.25" />
            <path d="M 85 38 Q 80 18 92 22 Q 86 14 100 25" fill="url(#hairGrad)" />

            {/* EARS */}
            <ellipse cx="58" cy="90" rx="5" ry="8" fill="#f59e0b" />
            <ellipse cx="58" cy="90" rx="3" ry="5" fill="#d97706" opacity="0.4" />
            <ellipse cx="142" cy="90" rx="5" ry="8" fill="#f59e0b" />
            <ellipse cx="142" cy="90" rx="3" ry="5" fill="#d97706" opacity="0.4" />

            {/* EYES */}
            <ellipse cx="82" cy="88" rx="8" ry="7" fill="white" />
            <ellipse cx="118" cy="88" rx="8" ry="7" fill="white" />
            <ellipse cx="83" cy="89" rx="5.5" ry="5.5" fill="#1c1917" />
            <ellipse cx="119" cy="89" rx="5.5" ry="5.5" fill="#1c1917" />
            <circle cx="83" cy="89" r="2.5" fill="#0c0a09" />
            <circle cx="119" cy="89" r="2.5" fill="#0c0a09" />
            <circle cx="85.5" cy="86.5" r="2" fill="white" opacity="0.9" />
            <circle cx="121.5" cy="86.5" r="2" fill="white" opacity="0.9" />
            <circle cx="81" cy="91" r="0.8" fill="white" opacity="0.5" />
            <circle cx="117" cy="91" r="0.8" fill="white" opacity="0.5" />
            <path d="M 74 85 Q 82 80 90 85" fill="none" stroke="#1c1917" strokeWidth="1" opacity="0.2" />
            <path d="M 110 85 Q 118 80 126 85" fill="none" stroke="#1c1917" strokeWidth="1" opacity="0.2" />

            {/* EYEBROWS */}
            <path d="M 72 76 Q 82 70 92 75" fill="none" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 108 75 Q 118 70 128 76" fill="none" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />

            {/* NOSE */}
            <path d="M 97 93 Q 100 98 103 93" fill="none" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" />

            {/* MOUTH */}
            <path d="M 87 107 Q 94 113 100 112 Q 106 113 113 107" fill="none" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 93 108 Q 100 111 107 108" fill="none" stroke="#fb7185" strokeWidth="0.6" opacity="0.3" />

            {/* HEADPHONES */}
            <path d="M 56 78 Q 56 45 100 42 Q 144 45 144 78" fill="none" stroke="url(#headphoneGrad)" strokeWidth="5" strokeLinecap="round" />
            <path d="M 65 72 Q 65 50 100 47 Q 135 50 135 72" fill="none" stroke="#52525b" strokeWidth="1" opacity="0.3" />
            <rect x="49" y="74" width="12" height="18" rx="6" fill="url(#headphoneGrad)" />
            <rect x="50" y="76" width="10" height="14" rx="5" fill="#27272a" />
            <rect x="51" y="78" width="8" height="10" rx="4" fill="#e11d48" opacity="0.35" />
            <rect x="52" y="80" width="6" height="6" rx="3" fill="#e11d48" opacity="0.2" />
            <rect x="139" y="74" width="12" height="18" rx="6" fill="url(#headphoneGrad)" />
            <rect x="140" y="76" width="10" height="14" rx="5" fill="#27272a" />
            <rect x="141" y="78" width="8" height="10" rx="4" fill="#e11d48" opacity="0.35" />
            <rect x="142" y="80" width="6" height="6" rx="3" fill="#e11d48" opacity="0.2" />

            {/* LAPTOP */}
            <rect x="5" y="230" width="190" height="12" rx="5" fill="url(#laptopGrad)" />
            <rect x="15" y="232" width="170" height="8" rx="3" fill="#18181b" opacity="0.5" />
            {Array.from({ length: 12 }).map((_, i) => (
              <rect key={`k${i}`} x={18 + i * 14} y={233} width={11} height={4} rx={1} fill="#3f3f46" opacity="0.4" />
            ))}
            <rect x="55" y="241" width="90" height="4" rx="1.5" fill="#3f3f46" opacity="0.3" />
            <rect x="8" y="160" width="184" height="74" rx="6" fill="url(#laptopGrad)" filter="url(#softShadow)" />
            <rect x="12" y="164" width="176" height="66" rx="4" fill="url(#screenGrad)" />
            <rect x="12" y="164" width="176" height="66" rx="4" fill="#e11d48" opacity="0.05" />
            <circle cx="100" cy="167" r="1.5" fill="#3f3f46" opacity="0.5" />

            <g clipPath="url(#screenClip)">
              <text x="20" y="186" fontFamily="monospace" fontSize="14" fill="#e11d48" opacity="0.9" filter="url(#glow)">&lt;div&gt;</text>
              <text x="30" y="204" fontFamily="monospace" fontSize="13" fill="#fb7185" opacity="0.7">className="app"</text>
              <text x="20" y="204" fontFamily="monospace" fontSize="14" fill="#e11d48" opacity="0.6" filter="url(#glow)">&lt;/&gt;</text>
              <text x="20" y="218" fontFamily="monospace" fontSize="12" fill="#a1a1aa" opacity="0.4">const dev = () =&gt; {'{}'}</text>
              <rect x="130" y="180" width="2" height="8" fill="#e11d48" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0;0.8" dur="1s" repeatCount="indefinite" />
              </rect>
            </g>

            {/* Floating code */}
            <text x="28" y="65" fontFamily="monospace" fontSize="7" fill="#e11d48" opacity="0.12">{'{'}</text>
            <text x="165" y="55" fontFamily="monospace" fontSize="7" fill="#e11d48" opacity="0.12">{'}'}</text>
            <text x="22" y="130" fontFamily="monospace" fontSize="5" fill="#fb7185" opacity="0.08">fn()</text>
            <text x="170" y="125" fontFamily="monospace" fontSize="5" fill="#fb7185" opacity="0.08">01</text>
          </svg>

          {/* Status badge */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[11px] text-gray-text font-mono">coding...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
