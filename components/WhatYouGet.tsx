import Image from "next/image";

interface Card {
  title: string;
  desc: string;
  dark: boolean;
  image: string;
  imagePosition: string;
  tallImage?: boolean;
}

const cards: Card[] = [
  {
    title: "Toastmasters",
    desc: "Build confidence through structured public speaking, a core skill that separates great engineers from good ones.",
    dark: true,
    image: "/images/toastmaster.png",
    imagePosition: "object-[center_25%]",
    tallImage: true,
  },
  {
    title: "Senior Mentoring",
    desc: "Dedicated mentoring sessions with senior engineers. Code reviews, career guidance, and real industry perspective.",
    dark: false,
    image: "/images/mentorship.jpg",
    imagePosition: "object-center",
  },
  {
    title: "Industry Talks",
    desc: "Tech leaders sharing real field insights, not textbook theory. Hear what actually ships.",
    dark: true,
    image: "/images/techtalks.png",
    imagePosition: "object-center",
  },
  {
    title: "Real Projects",
    desc: "Work on actual business problems. Ship features that users interact with.",
    dark: false,
    image: "/images/realprojects.png",
    imagePosition: "object-center",
  },
  {
    title: "Code Crunch",
    desc: "Hackathon-style sprints under real pressure. Build fast, ship faster, learn the most.",
    dark: true,
    image: "/images/Image (1).jpg",
    imagePosition: "object-center",
  },
  {
    title: "Company Placement",
    desc: "Work alongside employees at partner companies. Real work environment, real expectations.",
    dark: false,
    image: "/images/placement.png",
    imagePosition: "object-center",
  },
];

export default function WhatYouGet() {
  return (
    <section id="what" className="py-32">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        <div className="mb-16 reveal">
          <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal tracking-[-0.03em] text-blue leading-[1.08] mb-2">
            What you get
          </h2>
          <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.02em] text-navy leading-[1.2]">
            More than a curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`reveal d${(i % 5) + 1} rounded-xl overflow-hidden border transition-transform duration-200 hover:-translate-y-1 ${
                c.dark
                  ? "bg-navy border-navy text-white"
                  : "bg-white border-border text-navy"
              }`}
            >
              {/* Card Image */}
              {c.image && (
                <div className="relative w-full overflow-hidden h-48">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className={`object-cover ${c.imagePosition}`}
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-8">
                <h3
                  className={`text-[1.125rem] font-bold tracking-[-0.01em] mb-2.5 ${
                    c.dark ? "text-white" : "text-navy"
                  }`}
                >
                  {c.title}
                </h3>
                <p
                  className={`text-[0.9375rem] leading-[1.72] ${
                    c.dark ? "text-white/65" : "text-muted"
                  }`}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
