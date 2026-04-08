"use client";

import { useState } from "react";

const phases = [
  {
    num: "01",
    period: "Weeks 1\u20134",
    title: "Foundations and First Ship",
    desc: "Learn spec-driven development by doing it. Write your first production specification, build it with AI-powered tools, deploy it, and present it \u2014 all in the first month.",
    tags: ["Spec Writing", "AI Toolchain", "First Deployment", "Demo Day #1"],
  },
  {
    num: "02",
    period: "Weeks 5\u20138",
    title: "Team Project Sprint",
    desc: "Work in a team on a real internal project. Stakeholder interviews, collaborative architecture, agile sprints, code reviews \u2014 the full cycle from problem to deployed solution.",
    tags: ["Team Collaboration", "Agile Sprints", "Code Reviews", "Demo Day #2"],
  },
  {
    num: "03",
    period: "Weeks 9\u201312",
    title: "Advanced AI and LLM Integration",
    desc: "Build AI-powered features into real products. Context engineering, multi-agent orchestration, and production-grade AI systems \u2014 not toy demos.",
    tags: ["Context Engineering", "Multi-Agent Systems", "Production AI", "Demo Day #3"],
  },
  {
    num: "04",
    period: "Weeks 13\u201316",
    title: "Embedded in Development Teams",
    desc: "Join a professional development team. Real tickets, real deadlines, real users. Daily standups, sprint planning, and production deployments \u2014 you\u2019re a contributing team member.",
    tags: ["Production Code", "Cross-Functional Teams", "Feature Ownership"],
  },
  {
    num: "05",
    period: "Weeks 17\u201320",
    title: "Full Stack Ownership",
    desc: "Own a feature or module end-to-end \u2014 from writing the spec to monitoring it in production. Infrastructure, security, performance \u2014 the full picture.",
    tags: ["Cloud Infrastructure", "Security", "Monitoring", "End-to-End Ownership"],
  },
  {
    num: "06",
    period: "Weeks 21\u201324",
    title: "Capstone: Ship and Present",
    desc: "Polish your portfolio, complete your capstone project, and present your work to company leadership and partner organisations. This is your launchpad.",
    tags: ["Portfolio Curation", "Demo Day Final", "Placement"],
    isCapstone: true,
  },
];

const techSkills = [
  { label: "React", color: "green" },
  { label: "TypeScript", color: "green" },
  { label: "Node.js", color: "yellow" },
  { label: "PostgreSQL", color: "blue" },
  { label: "AI Agents", color: "green" },
  { label: "Context Engineering", color: "green" },
  { label: "System Design", color: "white" },
  { label: "Git and CI/CD", color: "yellow" },
  { label: "API Design", color: "blue" },
  { label: "Testing", color: "white" },
  { label: "DevOps", color: "green" },
  { label: "Agile", color: "white" },
];

const skillColors: Record<string, string> = {
  green: "border-green/40 text-green",
  blue: "border-blue/40 text-blue",
  yellow: "border-yellow-400/40 text-yellow-400",
  white: "border-white/20 text-white/60",
};

export default function Curriculum() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="curriculum" className="bg-navy">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] pt-32 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT — info panel */}
          <div>
            {/* Heading — consistent with all sections */}
            <h2 className="reveal text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal tracking-[-0.03em] text-blue leading-[1.08] mb-3">
              6 Month Program Structure
            </h2>
            <h3 className="reveal d1 text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.02em] text-white leading-[1.35] mb-6">
              From zero to{" "}
              <span className="text-green">deployed</span>.
              In sequence.
            </h3>

            {/* Description */}
            <p className="reveal d2 text-[1rem] text-white/60 leading-[1.75] max-w-[420px] mb-10">
              Full-time industrial training. Spec-driven development with AI. Real projects, real teams, real deployment.
            </p>

            {/* Stats row */}
            <div className="reveal d3 flex gap-0 mb-10">
              <div className="pr-7 border-r border-white/10">
                <p className="font-mono text-[0.6rem] text-white/45 tracking-[0.14em] uppercase mb-1.5">Format</p>
                <p className="text-[1.0625rem] font-semibold text-white">Full-Time</p>
              </div>
              <div className="px-7 border-r border-white/10">
                <p className="font-mono text-[0.6rem] text-white/45 tracking-[0.14em] uppercase mb-1.5">Hours</p>
                <p className="text-[1.0625rem] font-semibold text-white">~960</p>
              </div>
              <div className="px-7 border-r border-white/10">
                <p className="font-mono text-[0.6rem] text-white/45 tracking-[0.14em] uppercase mb-1.5">Cohort Size</p>
                <p className="text-[1.0625rem] font-semibold text-white">8-10</p>
              </div>
              <div className="pl-7">
                <p className="font-mono text-[0.6rem] text-white/45 tracking-[0.14em] uppercase mb-1.5">Certification</p>
                <p className="text-[1.0625rem] font-semibold text-white">NAITA SIT</p>
              </div>
            </div>

            {/* Technologies & Skills */}
            <div className="reveal d4">
              <p className="font-mono text-[0.6rem] text-white/45 tracking-[0.14em] uppercase mb-4">
                Technologies and Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill) => (
                  <span
                    key={skill.label}
                    className={`text-[0.8125rem] font-mono tracking-[0.02em] px-3.5 py-1.5 rounded border ${
                      skillColors[skill.color]
                    }`}
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — accordion phases */}
          <div className="flex flex-col gap-3">
            {phases.map((phase, i) => {
              const isOpen = openIdx === i;
              const isCapstone = "isCapstone" in phase;

              return (
                <div
                  key={phase.num}
                  className={`rounded-xl border transition-colors duration-200 ${
                    isOpen
                      ? isCapstone
                        ? "bg-green/[0.08] border-green/20"
                        : "bg-blue/[0.06] border-blue/15"
                      : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.1]"
                  }`}
                >
                  {/* Phase header */}
                  <button
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                  >
                    <span className={`font-mono text-[0.8125rem] font-semibold shrink-0 ${
                      isOpen
                        ? isCapstone ? "text-green" : "text-blue"
                        : "text-white/40"
                    }`}>
                      {phase.num}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p className="text-[1rem] font-semibold text-white tracking-[-0.01em]">
                        {phase.title}
                      </p>
                      <p className="font-mono text-[0.6875rem] text-white/45 tracking-[0.06em] mt-0.5">
                        {phase.period}
                      </p>
                    </div>

                    <svg
                      className={`w-5 h-5 text-white/45 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {/* Expandable content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pl-[52px]">
                      <p className="text-[0.9375rem] text-white/65 leading-[1.72] mb-5">
                        {phase.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {phase.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[0.75rem] font-mono tracking-[0.04em] px-3 py-1.5 rounded-full ${
                              isCapstone
                                ? "bg-green/15 text-green/80 border border-green/20"
                                : "bg-blue/10 text-blue border border-blue/20"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
