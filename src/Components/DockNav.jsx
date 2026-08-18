
import { useState } from 'react';

const links = [
  { label: 'Home',     href: '/',        icon: '🏠' },
  { label: 'About',    href: '/about',   icon: '👤' },
  { label: 'Projects', href: '/projects',icon: '💼' },
  { label: 'Contact',  href: '/contact', icon: '✉️' },
];

export default function DockNav() {
  const [hovered, setHovered] = useState(null);

  const getScale = (i) => {
    if (hovered === null) return 'none';
    const dist = Math.abs(i - hovered);
    if (dist === 0) return 'translateY(-14px)';
    if (dist === 1) return 'translateY(-7px)';
    if (dist === 2) return 'translateY(-3px)';
    return 'none';
  };

  const getSize = (i) => {
    if (hovered === null) return 52;
    const dist = Math.abs(i - hovered);
    if (dist === 0) return 76;
    if (dist === 1) return 62;
    if (dist === 2) return 55;
    return 52;
  };

  return (
    <div className="flex items-end justify-center gap-1 py-4">
      {links.map((link, i) => {
        const size = getSize(i);
        return (
          <a
            key={link.label}
            href={link.href}
            className="flex flex-col items-center gap-1.5 px-1 cursor-pointer"
            style={{
              transform: getScale(i),
              transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
              transformOrigin: 'bottom center',
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="flex items-center justify-center
                         bg-white border border-gray-200 text-2xl"
              style={{
                width: size,
                height: size,
                borderRadius: Math.round(size * 0.25),
                transition:
                  'width 0.25s cubic-bezier(0.34,1.56,0.64,1),' +
                  'height 0.25s cubic-bezier(0.34,1.56,0.64,1),' +
                  'border-radius 0.25s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              {link.icon}
            </div>
            <span
              className="text-[11px] font-medium text-gray-500"
              style={{
                opacity: hovered === i ? 1 : 0,
                transform: hovered === i
                  ? 'translateY(0)' : 'translateY(4px)',
                transition: 'opacity 0.18s ease, transform 0.18s ease',
              }}
            >
              {link.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
