"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can I work or study while in the programme?",
    a: "Yes. The programme requires 15 to 20 hours per week and is designed around a flexible schedule. Most participants balance it alongside university coursework or part-time work.",
  },
  {
    q: "Do I need to know how to code before joining?",
    a: "Yes, basic coding ability is required. You should be comfortable writing simple programs in at least one language. We will build from there.",
  },
  {
    q: "What is the programme investment?",
    a: "The programme fee is LKR 90,000. Flexible instalments available: 3 payments of LKR 30,000, 6 payments of LKR 15,000, or 9 payments of LKR 10,000.",
  },
  {
    q: "Is there financial support available?",
    a: "Yes. We believe talent should never be limited by finances. Scholarship support is available, reach out and we will work on it.",
  },
  {
    q: "How does the performance based fee waiver work?",
    a: "After the 3 months foundation track, every participant is evaluated on technical output, collaboration, and consistency. Top 10% receive a full waiver. Top 25% receive 50%. Applied automatically.",
  },
  {
    q: "What happens after the programme ends?",
    a: "You will have a production portfolio, partner company referrals, alumni network access, and direct placement support. We stay invested in your career beyond the programme.",
  },
];

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-32 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
          {/* Left */}
          <div className="reveal lg:sticky lg:top-[80px] lg:self-start">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal tracking-[-0.03em] text-blue leading-[1.08] mb-3">
              FAQs
            </h2>
            <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.02em] text-navy leading-[1.35] mb-5">
              Questions,{" "}
              <span className="text-green">answered.</span>
            </h3>
            <p className="text-[0.9375rem] text-muted leading-[1.7]">
              If yours is not here, reach out. We respond within 48
              hours.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  className="reveal border-t border-border last:border-b cursor-pointer"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between py-6 gap-4">
                    <span className="text-[1rem] font-medium text-navy">
                      {faq.q}
                    </span>
                    <span
                      className={`text-muted/40 text-lg shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-45 !text-green" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    <p className="text-[0.9375rem] text-muted leading-[1.72] pb-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
