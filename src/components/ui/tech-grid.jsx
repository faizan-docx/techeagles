import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Lightweight animated tech grid background
// - Uses only divs and CSS gradients for performance
// - Subtle parallax drift to feel alive without heavy GPU cost
export const TechGridBackground = ({
  className = '',
  dark = false,
}) => {
  const baseColor = dark ? 'rgba(34,211,238,0.10)' : 'rgba(124,58,237,0.10)';
  const dotColor = dark ? 'rgba(34,211,238,0.18)' : 'rgba(124,58,237,0.18)';
  const lineColor = dark ? 'rgba(34,211,238,0.12)' : 'rgba(124,58,237,0.12)';

  // Memoize background styles
  const gridStyle = useMemo(() => ({
    backgroundImage: `
      radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 1.2px),
      linear-gradient(${lineColor} 1px, transparent 1px),
      linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
    `,
    backgroundSize: '22px 22px, 88px 88px, 88px 88px',
    backgroundPosition: '0 0, 0 0, 0 0',
  }), [dotColor, lineColor]);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Base subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: dark
            ? 'radial-gradient(1200px 600px at 50% -10%, rgba(34,211,238,0.12), transparent 60%)'
            : 'radial-gradient(1200px 600px at 50% -10%, rgba(124,58,237,0.12), transparent 60%)',
        }}
      />

      {/* Animated grid layer */}
      <motion.div
        className="absolute inset-0"
        style={gridStyle}
        initial={{ x: 0, y: 0, opacity: 0.85 }}
        animate={{ x: [-6, 6, -6], y: [-4, 4, -4], opacity: 0.85 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Parallax accent lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(90deg, ${baseColor}, ${baseColor} 2px, transparent 2px, transparent 12px)`,
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
        }}
        initial={{ x: 0 }}
        animate={{ x: [0, -12, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default TechGridBackground;


