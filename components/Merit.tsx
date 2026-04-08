const tiers = [
  {
    label: "Top 10%",
    value: "100% waiver",
    highlight: true,
  },
  {
    label: "Top 25%",
    value: "50% waiver",
    highlight: false,
  },
  {
    label: "Scholarship programme",
    value: "Open",
    highlight: false,
  },
];

export default function Merit() {
  return (
    <section id="merit" className="py-32">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left */}
          <div className="reveal lg:sticky lg:top-[80px] lg:self-start">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal tracking-[-0.03em] text-blue leading-[1.08] mb-3">
              Performance rewards
            </h2>
            <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.02em] text-navy leading-[1.35] mb-6">
              Your output determines
              <br />
              <span className="text-green">your investment.</span>
            </h3>
            <p className="text-[1rem] text-muted leading-[1.78] max-w-[520px]">
              At the 12-week midpoint, every participant is evaluated on technical output, AI proficiency, collaboration, and consistency. Your performance decides your fee.
            </p>
          </div>

          {/* Right */}
          <div className="reveal d1">
            <div className="flex flex-col gap-3">
              {tiers.map((tier) => (
                <div
                  key={tier.label}
                  className={`flex items-center justify-between px-7 py-6 rounded-lg border ${
                    tier.highlight
                      ? "bg-green/[0.06] border-green/25"
                      : "bg-off border-border"
                  }`}
                >
                  <span className="text-[1rem] font-medium text-navy">
                    {tier.label}
                  </span>
                  <span
                    className={`font-mono text-[0.875rem] font-semibold tracking-[-0.01em] ${
                      tier.highlight ? "text-green" : "text-navy"
                    }`}
                  >
                    {tier.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[0.8125rem] text-muted mt-5 font-mono tracking-[0.02em]">
              Waivers applied automatically at the 12-week midpoint evaluation. No separate application needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
