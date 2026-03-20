"use client";

import { useEffect, useRef, useState } from "react";

const AIM_TEXT =
  "Give every aspiring developer the opportunity to become an industry-ready software engineer in the Agentic AI era";

const GREEN_WORDS = ["industry-ready", "software", "engineer"];
const BLUE_WORDS = ["Agentic", "AI", "era"];

export default function AimSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.75;
      const end = -sectionHeight + viewportHeight * 0.35;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = AIM_TEXT.split(" ");
  const totalWords = words.length;

  return (
    <section ref={sectionRef} className="py-36 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        {/* Label */}
        <div className="reveal mb-10">
          <p className="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-green font-medium">
            Our Aim
          </p>
        </div>

        {/* Scroll-highlighted text */}
        <p className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.25] tracking-[-0.025em] max-w-[880px]">
          {words.map((word, i) => {
            const wordProgress = i / totalWords;
            const isLit = progress > wordProgress;
            const clean = word.toLowerCase().replace(/[.,]/g, "");
            const isGreen = GREEN_WORDS.some((w) => clean === w.toLowerCase());
            const isBlue = BLUE_WORDS.some((w) => clean === w.toLowerCase());

            let litColor = "var(--navy)";
            if (isGreen) litColor = "var(--green)";
            if (isBlue) litColor = "var(--blue)";

            return (
              <span
                key={i}
                className="transition-colors duration-300 ease-out"
                style={{
                  color: isLit ? litColor : "rgba(27, 40, 56, 0.12)",
                }}
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
