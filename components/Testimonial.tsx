export default function Testimonial() {
  return (
    <section className="py-32 bg-white border-t border-border">
      <div className="max-w-[800px] mx-auto px-[clamp(20px,5vw,64px)] text-center">
        {/* Quote mark */}
        <div className="reveal mb-8">
          <span className="text-blue/20 text-[4.5rem] leading-none font-serif block h-10">
            &ldquo;
          </span>
        </div>

        {/* Quote */}
        <blockquote className="reveal d1 text-[clamp(1.25rem,2.5vw,1.625rem)] font-semibold text-navy leading-[1.45] tracking-[-0.015em] mb-10">
          The supportive, collaborative environment, along with the trust
          and mentorship I received, played a key role in my development
        </blockquote>

        {/* Author */}
        <div className="reveal d2 flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center mb-3">
            <span className="text-blue text-[0.9375rem] font-bold">J</span>
          </div>
          <p className="text-[1rem] font-semibold text-navy">
            Jayath De Silva
          </p>
          <p className="text-[0.875rem] text-muted font-mono tracking-[0.02em]">
            Intern Software Engineer to Software Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
