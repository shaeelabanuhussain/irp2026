import Image from "next/image";

const columns = [
  {
    title: "Programme",
    links: [
      { label: "What We Offer", href: "#what" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Scholarship", href: "#merit" },
    ],
  },
  {
    title: "Apply",
    links: [
      { label: "Application", href: "#apply" },
      { label: "FAQs", href: "#faqs" },
    ],
  },
  {
    title: "Hearts Academy",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy py-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Hearts Academy"
                width={100}
                height={30}
                className="h-6 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-[0.8125rem] text-white/40 leading-[1.6]">
              Industry Readiness Program.
              <br />
              From classroom to career.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[0.6875rem] text-white/30 tracking-[0.1em] uppercase mb-5">
                {col.title}
              </p>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[0.875rem] text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[0.75rem] text-white/30 font-mono tracking-[0.04em]">
            2026 Hearts Academy. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-white/20 font-mono tracking-[0.04em]">
            Ship real software.
          </p>
        </div>
      </div>
    </footer>
  );
}
