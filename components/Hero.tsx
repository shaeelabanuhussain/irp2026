const stats = [
  { value: "24", label: "Weeks" },
  { value: "Full-Time", label: "40 Hrs / Week" },
  { value: "\u223C960", label: "Total Hours" },
  { value: "NAITA", label: "SIT Eligible" },
  { value: "8\u201310", label: "Per Cohort" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Image — DO NOT TOUCH position */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/DSC05043.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 10%" }}
      />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,14,20,0.25)] via-[rgba(10,14,20,0.4)] to-[rgba(10,14,20,0.75)]" />

      {/* Content — pushed down with extra top margin */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[clamp(16px,4vw,48px)] text-center flex flex-col items-center pb-8 mt-auto">
        {/* Spacer to push text lower */}
        <div className="flex-1 min-h-[45vh]" />

        {/* Heading */}
        <h1 className="reveal text-white text-[clamp(2rem,4.5vw,2.75rem)] font-bold leading-[1.18] tracking-[-0.025em] max-w-[580px] mb-5">
          Graduate with a Portfolio
          <br />
          <span className="text-green">not just a transcript.</span>
        </h1>

        {/* Subheading */}
        <p className="reveal d1 text-white/65 text-[0.875rem] leading-[1.6] max-w-[460px] mb-7">
          Hearts Academy&apos;s Industry Readiness Program takes undergraduates and
          school leavers from classroom theory to deployed, production-grade
          software in 24 weeks. Real projects. Real mentors. Real placement.
        </p>

        {/* CTAs */}
        <div className="reveal d2 flex flex-wrap gap-3 justify-center mb-10">
          <a
            href="https://forms.office.com/r/kM2prJrNgg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-white text-[0.8125rem] font-semibold px-5 py-2.5 rounded-[7px] tracking-[-0.01em] hover:brightness-110 transition inline-flex items-center gap-1.5"
          >
            Get Started
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#curriculum"
            className="border border-white/30 text-white/85 text-[0.8125rem] font-medium px-5 py-2.5 rounded-[7px] tracking-[-0.01em] hover:bg-white/10 transition backdrop-blur-sm"
          >
            See the 6-month track
          </a>
        </div>

        {/* Stats — clean like Figma reference: no big blur box, just numbers with thin dividers */}
        <div className="reveal d3 flex justify-center items-baseline w-full max-w-[520px]">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="flex flex-col items-center px-5">
                <span className="text-white text-[1.5rem] font-bold tracking-[-0.02em] leading-none mb-1">
                  {s.value}
                </span>
                <span className="font-mono text-[0.5rem] text-white/40 tracking-[0.16em] uppercase">
                  {s.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <span className="w-px h-7 bg-white/15" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
