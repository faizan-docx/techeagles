import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const CardSpotlight = ({ children, radius = 220, color = 'rgba(255,255,255,0.18)', className, ...props }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className={cn(
        'group/spotlight relative rounded-xl border border-neutral-800 bg-black/90 overflow-hidden',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 60%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 60%
            )
          `
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CardSpotlight;


