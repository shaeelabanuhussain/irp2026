"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who can apply?",
    a: "University undergraduates and school leavers are both welcome. We select on aptitude and mindset, not just credentials. All applicants go through an aptitude test and interview \u2014 that\u2019s what determines selection.",
  },
  {
    q: "How does the selection process work?",
    a: "Apply via our online form (under 5 minutes). If shortlisted, you\u2019ll be invited to sit for an aptitude test and interview \u2014 there\u2019s a LKR 5,000 fee to cover the assessment. We evaluate mindset, problem-solving ability, and willingness to learn. Selected candidates are notified within 7 days.",
  },
  {
    q: "Do I need to know how to code before joining?",
    a: "You should have basic programming ability \u2014 comfortable writing simple programs in at least one language and some exposure to web development. You don\u2019t need a degree or years of experience. The aptitude test is what matters most.",
  },
  {
    q: "Is this a full-time programme?",
    a: "Yes. 40 hours per week, Monday to Friday \u2014 structured as a professional industrial training placement. This cannot be done alongside regular university classes. Most university students take this during their internship semester.",
  },
  {
    q: "What is the programme investment?",
    a: "LKR 5,000 aptitude test fee (paid before the test), LKR 60,000 registration fee (paid upon selection), and LKR 15,000 per month for 6 months during the programme. Total: LKR 155,000.",
  },
  {
    q: "Do I need to bring my own laptop?",
    a: "Yes, you\u2019ll need a laptop for the programme. If you don\u2019t have one, we can provide a suitable development machine for an additional LKR 50,000 \u2014 payable upfront or in instalments alongside your programme fees. Let us know when you register and we\u2019ll have it ready for day one.",
  },
  {
    q: "Will this count as my university internship?",
    a: "The programme is structured to meet NAITA Special Industrial Training requirements \u2014 24 weeks full-time, ~960 total hours, formal supervision, daily training diary, and assessments at 12 and 24 weeks. This is accepted by most Sri Lankan universities as completion of the industrial training requirement. Confirm with your university\u2019s training coordinator before enrolling.",
  },
  {
    q: "Is there financial support available?",
    a: "Yes. We believe talent should never be limited by finances. Scholarship support is available \u2014 reach out and we will work on it.",
  },
  {
    q: "How does the performance-based fee waiver work?",
    a: "At the 12-week midpoint, every participant is evaluated on technical output, AI proficiency, collaboration, and consistency. Top 10% receive a full waiver on remaining monthly fees. Top 25% receive 50%. Applied automatically \u2014 no separate application needed.",
  },
  {
    q: "What happens after the programme ends?",
    a: "You graduate with a production portfolio on GitHub, merged PRs on real codebases, NAITA SIT certification, and placement recommendations from our architect, tech leads, and programme lead. You\u2019ll also have alumni network access and ongoing career support. Top performers on the Startup Track will additionally have a live product.",
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
