// src/components/FloatingCube.jsx
import { CUBE_FACES } from "../data/data";

// Inline SVG icon for each face
function FaceIcon({ label, color }) {
  if (label === "React") return (
    <svg viewBox="0 0 40 40" width="52" height="52" fill="none">
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke={color} strokeWidth="1.6" />
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke={color} strokeWidth="1.6" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke={color} strokeWidth="1.6" transform="rotate(120 20 20)" />
      <circle cx="20" cy="20" r="3" fill={color} />
    </svg>
  );
  if (label === "Node.js") return (
    <svg viewBox="0 0 40 40" width="52" height="52">
      <path d="M20 3 L35 12 L35 28 L20 37 L5 28 L5 12 Z" stroke={color} strokeWidth="1.6" fill="rgba(104,160,99,0.12)" />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill={color} fontSize="10" fontFamily="monospace" fontWeight="bold">NODE</text>
    </svg>
  );
  if (label === "Express") return (
    <svg viewBox="0 0 40 40" width="52" height="52">
      <text x="50%" y="42%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace" fontWeight="bold">EX</text>
      <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">PRESS</text>
      <line x1="8" y1="26" x2="32" y2="26" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    </svg>
  );
  if (label === "HTML") return (
    <svg viewBox="0 0 40 40" width="52" height="52">
      <path d="M7 5 L10 33 L20 36 L30 33 L33 5 Z" stroke={color} strokeWidth="1.5" fill="rgba(227,79,38,0.12)" />
      <path d="M13 11 H27 L26 24 L20 26 L14 24 L13.5 18 H25.5 L26 14 H13" stroke={color} strokeWidth="1" fill="none" />
    </svg>
  );
  if (label === "Tailwind") return (
    <svg viewBox="0 0 40 40" width="52" height="52">
      <path d="M10 17 C12 11 16 8 20 10 C22 12 22 16 20 18 C24 12 28 10 30 14 C32 18 28 24 20 26 C18 24 18 20 20 18 C16 24 12 24 10 20 Z"
        stroke={color} strokeWidth="1.4" fill="rgba(56,189,248,0.12)" />
    </svg>
  );
  if (label === "MongoDB") return (
    <svg viewBox="0 0 40 40" width="52" height="52">
      <path d="M20 4 C20 4 28 12 28 22 C28 28 24 34 20 36 C16 34 12 28 12 22 C12 12 20 4 20 4 Z"
        stroke={color} strokeWidth="1.5" fill="rgba(71,162,72,0.14)" />
      <line x1="20" y1="24" x2="20" y2="36" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="22" r="3" fill={color} opacity="0.8" />
    </svg>
  );
  return null;
}

function FloatingCube() {
  return (
    // cube-wrapper sets perspective: 700px (defined in index.css)
    <div className="cube-wrapper" style={{ width: 140, height: 140 }}>
      {/* cube3d has transform-style:preserve-3d + spin animation (index.css) */}
      <div className="cube3d">
        {CUBE_FACES.map((face) => (
          // .cube-face + .face-front/back/etc. are all in index.css
          <div
            key={face.key}
            className={`cube-face face-${face.key}`}
            style={{
              border:     `1.5px solid ${face.color}70`,
              background: `${face.color}12`,
            }}
          >
            <FaceIcon label={face.label} color={face.color} />
            <span style={{
              fontFamily:    "'Space Mono', monospace",
              fontSize:      9,
              color:         face.color,
              letterSpacing: "0.1em",
              opacity:       0.9,
            }}>
              {face.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FloatingCube;
