"use client";

import { useState } from "react";

const phases = [
  {
    num: "01",
    period: "Months 1-2",
    title: "Foundations and AI Toolchain Setup",
    desc: "Set up your development environment, learn LLM fundamentals, and establish Git workflows that everything else rests on.",
    tags: ["Dev Environment", "LLM Fundamentals", "AI Ecosystem", "Git Workflows"],
  },
  {
    num: "02",
    period: "Month 2-3",
    title: "Context Engineering and LLM Integration",
    desc: "Master context engineering, chain of thought reasoning, and connect LLMs to real applications via APIs and RAG pipelines.",
    tags: ["Context Engineering", "Chain of Thought", "API Integration", "RAG Pipelines", "Structured Output"],
  },
  {
    num: "03",
    period: "Month 3-4",
    title: "Agentic Workflows and Multi Agent Systems",
    desc: "Design autonomous agents, build multi agent systems, implement tool use, and add observability to your AI workflows.",
    tags: ["Agent Design", "Orchestration", "Tool Use", "Task Delegation", "Observability"],
  },
  {
    num: "04",
    period: "Month 4-5",
    title: "AI Driven Full Stack Development",
    desc: "Build production frontends with React, RESTful APIs, PostgreSQL databases, authentication systems, and CI/CD pipelines, all powered by AI tooling.",
    tags: ["React / Frontend", "RESTful APIs", "PostgreSQL", "Auth and Security", "CI/CD"],
  },
  {
    num: "05",
    period: "Month 5-6",
    title: "Capstone: Ship Your Product",
    desc: "Plan your product, execute sprints, deploy to production, and present at Demo Day. This is where everything comes together.",
    tags: ["Product Planning", "Sprint Execution", "Deployment", "Demo Day", "Career Prep"],
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
            <p className="reveal d2 text-[1rem] text-white/45 leading-[1.75] max-w-[420px] mb-10">
              Intensive, project based cohort designed to transform undergraduates into production capable developers who lead with AI Agents.
            </p>

            {/* Stats row */}
            <div className="reveal d3 flex gap-0 mb-10">
              <div className="pr-7 border-r border-white/10">
                <p className="font-mono text-[0.6rem] text-white/30 tracking-[0.14em] uppercase mb-1.5">Format</p>
                <p className="text-[1.0625rem] font-semibold text-white">Intensive</p>
              </div>
              <div className="px-7 border-r border-white/10">
                <p className="font-mono text-[0.6rem] text-white/30 tracking-[0.14em] uppercase mb-1.5">Duration</p>
                <p className="text-[1.0625rem] font-semibold text-white">6 Months</p>
              </div>
              <div className="pl-7">
                <p className="font-mono text-[0.6rem] text-white/30 tracking-[0.14em] uppercase mb-1.5">Cohort Size</p>
                <p className="text-[1.0625rem] font-semibold text-white">8-10</p>
              </div>
            </div>

            {/* Technologies & Skills */}
            <div className="reveal d4">
              <p className="font-mono text-[0.6rem] text-white/30 tracking-[0.14em] uppercase mb-4">
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
              const isCapstone = i === phases.length - 1;

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
                        : "text-white/25"
                    }`}>
                      {phase.num}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p className="text-[1rem] font-semibold text-white tracking-[-0.01em]">
                        {phase.title}
                      </p>
                      <p className="font-mono text-[0.6875rem] text-white/30 tracking-[0.06em] mt-0.5">
                        {phase.period}
                      </p>
                    </div>

                    <svg
                      className={`w-5 h-5 text-white/30 shrink-0 transition-transform duration-300 ${
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
                      <p className="text-[0.9375rem] text-white/50 leading-[1.72] mb-5">
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
