"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "fade" | "scale" | "blur";

const variants: Record<Variant, React.CSSProperties> = {
  up: { opacity: 0, transform: "translateY(16px)" },
  fade: { opacity: 0 },
  scale: { opacity: 0, transform: "scale(0.94)" },
  blur: { opacity: 0, transform: "translateY(10px)", filter: "blur(8px)" },
};

const settled: React.CSSProperties = {
  opacity: 1,
  transform: "none",
  filter: "blur(0px)",
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 700,
  variant = "up",
  ease = "var(--ease-out)",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: Variant;
  ease?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return typeof IntersectionObserver === "undefined";
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{
        ...(visible ? settled : variants[variant]),
        transition: `opacity ${duration}ms ${ease}, transform ${duration}ms ${ease}, filter ${duration}ms ${ease}`,
        transitionDelay: `${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
