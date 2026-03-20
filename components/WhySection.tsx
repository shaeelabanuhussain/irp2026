"use client";

import { useEffect, useRef, useState } from "react";

const AIM_TEXT =
  "Our Aim is to give every aspiring developer the opportunity to become an industry-ready software engineer in the Agentic AI era";

const GREEN_WORDS = ["industry-ready", "software", "engineer"];
const BLUE_WORDS = ["Agentic", "AI", "era"];

const stats = [
  { value: "48,000+", label: "IT graduates annually in Sri Lanka", note: "Source: UGC" },
  { value: "12%", label: "Employer-ready at graduation", note: "Industry average" },
  { value: "6 months", label: "Average time to first dev role", note: "Without structured support" },
  { value: "3x", label: "Higher placement with mentorship", note: "Industry Readiness Program" },
];

const reasons = [
  {
    num: "01",
    title: "No Real Projects",
    desc: "College assignments prepare you for exams, not engineering. You graduate with zero experience shipping code that real users depend on.",
  },
  {
    num: "02",
    title: "AI Is Here. Are You?",
    desc: "The agentic era demands more than prompt engineering. You need to understand context engineering, multi-agent orchestration, and how to lead AI-powered teams.",
  },
  {
    num: "03",
    title: "No Mentorship Pipeline",
    desc: "Finding a mentor who has actually built at scale is nearly impossible as a student. We pair you with senior engineers, architects and mentors who care about your growth.",
  },
];

export default function WhySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visibleStats, setVisibleStats] = useState<boolean[]>(new Array(stats.length).fill(false));

  // Scroll-highlight progress
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const h = scrollRef.current.offsetHeight;
      const vh = window.innerHeight;
      const start = vh * 0.75;
      const end = -h + vh * 0.35;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, raw)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stats reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.statIdx);
            setVisibleStats((prev) => { const next = [...prev]; next[idx] = true; return next; });
          }
        });
      },
      { threshold: 0.3 }
    );
    const els = statsRef.current?.querySelectorAll("[data-stat-idx]");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const words = AIM_TEXT.split(" ");
  const totalWords = words.length;

  return (
    <section id="why" className="bg-off border-t border-border">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">

        {/* 1. Label + Scroll-highlighted aim text */}
        <div ref={scrollRef} className="pt-32 pb-20 text-center flex flex-col items-center">
          <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal tracking-[-0.02em] text-blue leading-[1.08] mb-10 reveal">
            Why Hearts?
          </h2>

          <p className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.2] tracking-[-0.03em] max-w-[820px]">
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
                  style={{ color: isLit ? litColor : "rgba(27, 40, 56, 0.12)" }}
                >
                  {word}{" "}
                </span>
              );
            })}
          </p>
        </div>

        {/* 2. Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-stat-idx={i}
              className={`p-8 lg:p-10 bg-white transition-all duration-700 ${
                i < stats.length - 1 ? "border-r border-border" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-border" : ""}`}
              style={{
                opacity: visibleStats[i] ? 1 : 0,
                transform: `translateY(${visibleStats[i] ? 0 : 16}px)`,
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <p className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-navy tracking-[-0.03em] mb-2">
                {stat.value}
              </p>
              <p className="text-[0.9375rem] text-muted leading-[1.5] mb-2">
                {stat.label}
              </p>
              <p className="text-[0.75rem] text-muted/50 font-mono tracking-[0.02em]">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* 3. Reasons — vertical list with accent left border */}
        <div className="max-w-[720px] mx-auto pb-32">
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className={`reveal d${i + 1} flex gap-6 py-10 ${
                i < reasons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-[2rem] font-extrabold text-blue/25 tracking-[-0.03em] leading-none shrink-0 w-12 pt-0.5">
                {r.num}
              </span>
              <div>
                <h3 className="text-[1.125rem] font-bold text-navy tracking-[-0.015em] mb-2">
                  {r.title}
                </h3>
                <p className="text-[0.9375rem] text-muted leading-[1.72]">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
