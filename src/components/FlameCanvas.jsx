import { useEffect, useRef } from "react";

export default function FlameCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // 🔥 WHITE HEAT PARTICLES
    const flames = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: h + Math.random() * 200,
      r: Math.random() * 1.6 + 0.4,
      speed: Math.random() * 0.6 + 0.3,
      alpha: Math.random() * 0.45 + 0.2,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.shadowBlur = 0;

      for (let f of flames) {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);

        // 🤍 PURE WHITE FLAME
        ctx.fillStyle = `rgba(255, 255, 255, ${f.alpha})`;
        ctx.shadowColor = "rgba(255,255,255,0.65)";
        ctx.shadowBlur = 14;

        ctx.fill();

        // movement
        f.y -= f.speed;
        f.x += Math.sin(f.y * 0.05) * 0.35;

        // recycle
        if (f.y < -20) {
          f.y = h + Math.random() * 200;
          f.x = Math.random() * w;
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
