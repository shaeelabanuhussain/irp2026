const MICROSOFT_FORMS_URL = "https://forms.office.com/r/kM2prJrNgg";

export default function ApplySection() {
  return (
    <section id="apply" className="py-32 bg-off border-t border-border">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="reveal">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal tracking-[-0.03em] text-blue leading-[1.08] mb-3">
              Start here
            </h2>
            <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.02em] text-navy leading-[1.35] mb-6">
              Apply to the{" "}
              <span className="text-green">programme.</span>
            </h3>
            <p className="text-[1rem] text-muted leading-[1.78] max-w-[480px] mb-3">
              Takes under 5 minutes. We review every application
              individually and respond within 7 days.
            </p>
            <p className="text-[0.875rem] text-muted/60 leading-[1.7]">
              Programme fee and instalment options are shared after your
              application is reviewed.
            </p>
          </div>

          {/* Right — CTA Card */}
          <div className="reveal d1">
            <div className="bg-white rounded-2xl border border-border p-12 text-center shadow-sm">
              {/* Icon — arrow pointing right */}
              <div className="w-16 h-16 rounded-xl bg-green/10 flex items-center justify-center mx-auto mb-7">
                <svg
                  className="w-7 h-7 text-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Ready to start?
              </h3>
              <p className="text-[0.9375rem] text-muted leading-[1.7] mb-9 max-w-[340px] mx-auto">
                Fill out our short application form. We&apos;ll review it
                and get back to you within a week.
              </p>
              <a
                href={MICROSOFT_FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy text-white text-[1rem] font-semibold px-8 py-4 rounded-lg hover:bg-navy/90 transition w-full justify-center"
              >
                Open Application Form
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
              <p className="text-[0.8125rem] text-muted/50 mt-5 font-mono">
                Opens in Microsoft Forms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
