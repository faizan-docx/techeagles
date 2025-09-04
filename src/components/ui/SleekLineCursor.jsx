import React, { useEffect, useRef } from 'react';

const SleekLineCursor = ({
  friction = 0.5,
  trails = 20,
  size = 50,
  dampening = 0.25,
  tension = 0.98,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const waveRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const linesRef = useRef([]);

  class Wave {
    constructor({ phase = 0, offset = 285, frequency = 0.0015, amplitude = 85 } = {}) {
      this.phase = phase;
      this.offset = offset;
      this.frequency = frequency;
      this.amplitude = amplitude;
      this._value = 0;
    }
    update() {
      this.phase += this.frequency;
      this._value = this.offset + Math.sin(this.phase) * this.amplitude;
      return this._value;
    }
    value() { return this._value; }
  }

  class Node {
    constructor(x = 0, y = 0) {
      this.x = x; this.y = y; this.vx = 0; this.vy = 0;
    }
  }

  class Line {
    constructor({ spring }) {
      this.spring = spring + 0.1 * Math.random() - 0.02;
      this.friction = friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (let n = 0; n < size; n++) {
        const t = new Node(posRef.current.x, posRef.current.y);
        this.nodes.push(t);
      }
    }
    update() {
      let e = this.spring;
      let t = this.nodes[0];
      const pos = posRef.current;
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (let i = 0; i < this.nodes.length; i++) {
        t = this.nodes[i];
        if (i > 0) {
          const n = this.nodes[i - 1];
          t.vx += (n.x - t.x) * e;
          t.vy += (n.y - t.y) * e;
          t.vx += n.vx * dampening;
          t.vy += n.vy * dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        e *= tension;
      }
    }
    draw(ctx) {
      let e, t;
      let n = this.nodes[0].x;
      let i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      e = this.nodes[this.nodes.length - 2];
      t = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    ctx.running = true;
    ctx.frame = 1;
    waveRef.current = new Wave();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updatePosition = (e) => {
      if (e.touches && e.touches.length) {
        posRef.current.x = e.touches[0].pageX;
        posRef.current.y = e.touches[0].pageY;
      } else {
        posRef.current.x = e.clientX;
        posRef.current.y = e.clientY;
      }
      e.preventDefault?.();
    };

    const onFirstMove = (e) => {
      document.removeEventListener('mousemove', onFirstMove);
      document.removeEventListener('touchstart', onFirstMove);
      document.addEventListener('mousemove', updatePosition, { passive: false });
      document.addEventListener('touchmove', updatePosition, { passive: false });
      document.addEventListener('touchstart', (evt) => {
        if (evt.touches.length === 1) updatePosition(evt);
      }, { passive: false });
      updatePosition(e);
      createLines();
      render();
    };

    const createLines = () => {
      linesRef.current = [];
      for (let e = 0; e < trails; e++) {
        linesRef.current.push(new Line({ spring: 0.4 + (e / trails) * 0.025 }));
      }
    };

    const render = () => {
      if (!ctx.running) return;
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      const hue = Math.round(waveRef.current.update());
      ctx.strokeStyle = `hsla(${hue}, 50%, 50%, 0.2)`;
      ctx.lineWidth = 1;
      for (let t = 0; t < trails; t++) {
        const line = linesRef.current[t];
        if (line) {
          line.update();
          line.draw(ctx);
        }
      }
      ctx.frame = (ctx.frame || 0) + 1;
      window.requestAnimationFrame(render);
    };

    const handleFocus = () => { ctx.running = true; render(); };
    const handleBlur = () => { ctx.running = false; };

    document.addEventListener('mousemove', onFirstMove, { passive: false });
    document.addEventListener('touchstart', onFirstMove, { passive: false });
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    resizeCanvas();

    return () => {
      ctx.running = false;
      document.removeEventListener('mousemove', onFirstMove);
      document.removeEventListener('touchstart', onFirstMove);
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('touchmove', updatePosition);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [dampening, friction, size, tension, trails]);

  return (
    <canvas ref={canvasRef} className={`pointer-events-none fixed inset-0 z-50 ${className}`} />
  );
};

export default SleekLineCursor;


