const items = [
  {
    num: "01",
    title: "Production software, not exercises",
    desc: "REST APIs, LLM integrations, deployed services. You will graduate with a GitHub portfolio that proves you can ship.",
  },
  {
    num: "02",
    title: "Fluency in the tools the industry uses",
    desc: "Orchestration frameworks, RAG pipelines, CI/CD, cloud deployment. The actual stack companies hire for.",
  },
  {
    num: "03",
    title: "Placed, not just certified",
    desc: "Partner companies, senior mentors, and a Demo Day built to open doors. We do not hand out certificates. We get you hired.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-32 bg-off border-t border-border">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left */}
          <div className="reveal">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal tracking-[-0.03em] text-blue leading-[1.08] mb-3">
              What Hearts Academy provides
            </h2>
            <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.02em] text-navy leading-[1.35] mb-6">
              A structured path from
              <br />
              <span className="text-green">student to engineer.</span>
            </h3>
            <p className="text-[1rem] text-muted leading-[1.78] max-w-[520px]">
              This is a portfolio based programme. Every phase produces
              artifacts: code, documentation, presentations, that
              compound into professional proof of competence.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col">
            {items.map((item, i) => (
              <div
                key={item.num}
                className={`reveal d${i + 1} grid grid-cols-[20px_1fr] gap-5 py-8 border-t border-border ${
                  i === items.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-mono text-[0.6875rem] text-muted/40 pt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-[1.0625rem] font-semibold text-navy tracking-[-0.01em] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[0.9375rem] text-muted leading-[1.72]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
