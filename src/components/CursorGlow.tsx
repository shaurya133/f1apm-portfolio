import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let raf: number;
    let x = 0, y = 0;
    let tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.style.opacity = "1";
    };

    const onLeave = () => {
      glow.style.opacity = "0";
    };

    const animate = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-50 w-72 h-72 rounded-full opacity-0 transition-opacity duration-500 hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)",
        filter: "blur(4px)",
      }}
    />
  );
};
