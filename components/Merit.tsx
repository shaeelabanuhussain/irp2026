export default function Merit() {
  return (
    <section id="merit" className="bg-navy py-32">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        {/* Heading — centered for impact */}
        <div className="reveal text-center mb-20">
          <p className="font-mono text-[0.6875rem] text-green/60 tracking-[0.14em] uppercase mb-4">
            Performance Rewards
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.03em] text-white leading-[1.15] mb-4">
            Prove it. We&apos;ll pay for it.
          </h2>
          <p className="text-[1rem] text-white/40 leading-[1.75] max-w-[520px] mx-auto">
            At the 12-week midpoint, every participant is evaluated on
            technical output, AI proficiency, collaboration, and consistency.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto mb-8">
          {/* Top 10% — highlighted */}
          <div className="reveal d1 rounded-2xl border-2 border-green/30 bg-green/[0.06] p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-green" />
            <p className="font-mono text-[0.6875rem] text-green tracking-[0.12em] uppercase mb-3">
              Top 10%
            </p>
            <p className="text-[2.5rem] font-bold text-white tracking-[-0.03em] leading-none mb-2">
              100%
            </p>
            <p className="text-[0.9375rem] text-white/50">
              fee waiver
            </p>
            <p className="text-[0.8125rem] text-white/25 mt-4">
              Full waiver on remaining monthly fees
            </p>
          </div>

          {/* Top 25% */}
          <div className="reveal d2 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="font-mono text-[0.6875rem] text-blue tracking-[0.12em] uppercase mb-3">
              Top 25%
            </p>
            <p className="text-[2.5rem] font-bold text-white tracking-[-0.03em] leading-none mb-2">
              50%
            </p>
            <p className="text-[0.9375rem] text-white/50">
              fee waiver
            </p>
            <p className="text-[0.8125rem] text-white/25 mt-4">
              Half of remaining monthly fees waived
            </p>
          </div>

          {/* Scholarship */}
          <div className="reveal d3 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="font-mono text-[0.6875rem] text-white/40 tracking-[0.12em] uppercase mb-3">
              Financial Support
            </p>
            <p className="text-[2.5rem] font-bold text-white tracking-[-0.03em] leading-none mb-2">
              Open
            </p>
            <p className="text-[0.9375rem] text-white/50">
              scholarship
            </p>
            <p className="text-[0.8125rem] text-white/25 mt-4">
              Talent should never be limited by finances
            </p>
          </div>
        </div>

        <p className="reveal d4 text-center text-[0.8125rem] text-white/25 font-mono tracking-[0.02em]">
          Waivers applied automatically. No separate application needed.
        </p>
      </div>
    </section>
  );
}
