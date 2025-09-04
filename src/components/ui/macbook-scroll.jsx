import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const MacbookScroll = ({ src = "/linear.webp", showGradient = false, title, badge, screenTitle, screenSubtitle, screenDescription }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  // Restore animation ranges prior to last change
  const scaleX = useTransform(scrollYProgress, [0, 0.4], [1.15, isMobile ? 1 : 1.4]);
  const scaleY = useTransform(scrollYProgress, [0, 0.4], [0.65, isMobile ? 1 : 1.4]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1300]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.15, 0.4], [-26, -26, 0]);

  return (
    <div ref={ref} className="flex min-h-[160vh] md:min-h-[140vh] shrink-0 transform flex-col items-center justify-start py-10 md:py-40 [perspective:800px]">
      <Lid src={src} scaleX={scaleX} scaleY={scaleY} rotate={rotate} translate={translate} screenTitle={screenTitle} screenSubtitle={screenSubtitle} screenDescription={screenDescription} />
      <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
        <div className="relative h-8 w-full">
          <div className="absolute inset-x-0 mx-auto h-3 w-[75%] rounded-b-xl bg-[#0b0b0b] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-24 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#1f1f1f] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({ scaleX, scaleY, rotate, translate, src, screenTitle, screenSubtitle, screenDescription }) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{ transform: "perspective(800px) rotateX(-25deg) translateZ(0px)", transformOrigin: "bottom", transformStyle: "preserve-3d" }}
        className="relative h-[12rem] w-[32rem] rounded-[1.2rem] bg-[#0a0a0a] p-2"
      >
        <div className="absolute inset-0 rounded-[0.9rem] bg-[#0c0c0c] shadow-[inset_0_2px_0_#1a1a1a,inset_0_-2px_0_#050505]" />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-[#0e0e0e] shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_-1px_1px_rgba(0,0,0,0.6)]" />
      </div>
      <motion.div
        style={{ scaleX: scaleX, scaleY: scaleY, rotateX: rotate, translateY: translate, transformStyle: "preserve-3d", transformOrigin: "top" }}
        className="absolute inset-0 h-96 w-[32rem] rounded-[1.2rem] bg-[#0a0a0a] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#111214]" />
        <div className="absolute inset-0 rounded-lg pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06),_transparent_60%)]" />
        {(screenTitle || screenSubtitle || screenDescription) && (
          <div className="absolute inset-0 rounded-lg flex flex-col items-center justify-center text-center px-6">
            {screenTitle && (
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg">{screenTitle}</h3>
            )}
            {screenSubtitle && (
              <p className="mt-2 text-sm md:text-base text-cyan-200 font-medium">{screenSubtitle}</p>
            )}
            {screenDescription && (
              <p className="mt-4 text-xs md:text-sm text-gray-200 max-w-md">{screenDescription}</p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const Trackpad = () => <div className="mx-auto my-1 h-32 w-[40%] rounded-xl" style={{ boxShadow: "0px 0px 1px 1px #00000020 inset" }}></div>;

export const Keypad = () => {
  const row1 = ['esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'];
  const row2 = ['~','1','2','3','4','5','6','7','8','9','0','-','='];
  const row3 = ['tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\'];
  const row4 = ['caps','A','S','D','F','G','H','J','K','L',';','\'','return'];
  const row5 = ['shift','Z','X','C','V','B','N','M',',','.','/','shift'];
  const row6 = ['fn','ctrl','opt','cmd','space','cmd','opt','◀','▲','▼','▶'];

  const Key = ({ label, wide }) => (
    <div className={`h-7 ${wide ? 'w-16' : 'w-7'} flex items-center justify-center rounded-md bg-[#0A0A0D] text-[10px] text-neutral-200`}
      style={{ boxShadow: '0px -1px 2px 0 #0D0D0F inset, -1px 0px 2px 0 #0D0D0F inset' }}>
      {label}
    </div>
  );

  const renderRow = (items, widths = {}) => (
    <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
      {items.map((k, idx) => (
        <Key key={idx} label={k} wide={widths[k]} />
      ))}
    </div>
  );

  return (
    <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#0b0b0d] p-1 [will-change:transform]">
      {renderRow(row1)}
      {renderRow(row2)}
      {renderRow(row3, { tab: true, '\\': true })}
      {renderRow(row4, { caps: true, 'return': true })}
      {renderRow(row5, { shift: true })}
      {renderRow(row6, { space: true, cmd: true })}
    </div>
  );
};

export const SpeakerGrid = () => (
  <div className="mt-2 flex h-40 gap-[2px] px-[0.5px]" style={{ backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)", backgroundSize: "3px 3px" }}></div>
);

export default MacbookScroll;




