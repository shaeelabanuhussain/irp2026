import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Hearts Academy",
  description: "Send us your CV or just say hello.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* ── CV Section ── */}
      <section className="bg-navy pt-[140px] pb-20 px-[clamp(16px,4vw,48px)]">
        <div className="max-w-[600px] mx-auto">
          <p className="font-mono text-[0.6875rem] text-white/30 tracking-[0.1em] uppercase mb-4">
            Interested?
          </p>
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white mb-5">
            Send us your CV, or just say hello.
          </h1>
          <p className="text-[0.9375rem] text-white/65 leading-[1.7] mb-3">
            No cover letter needed. Just your CV and a line about what excites
            you about this internship. Don&apos;t have a CV yet? We can help you
            put one together.
          </p>
          <p className="text-[0.8125rem] text-white/50 italic mb-10">
            We read every application.
          </p>

          <div className="flex flex-wrap gap-3">
            {/* Email Button */}
            <a
              href="mailto:heartsacademy@bistecglobal.com?subject=CV%20%E2%80%93%20Hearts%20Academy%20Internship&body=Hi%20Hearts%20Academy%2C%0A%0AI%E2%80%99m%20interested%20in%20the%20internship%20program.%20Please%20find%20my%20CV%20attached.%0A%0AWhat%20excites%20me%20about%20this%20internship%3A%20"
              className="inline-flex items-center gap-2.5 bg-white text-navy text-[0.875rem] font-semibold px-6 py-3 rounded-[8px] hover:bg-white/90 transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d93025"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              heartsacademy@bistecglobal.com
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/94768030944?text=Hi%20Hearts%20Academy%2C%20I%E2%80%99m%20interested%20in%20the%20internship%20program.%20I%E2%80%99d%20like%20to%20send%20my%20CV."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-transparent text-white text-[0.875rem] font-semibold px-6 py-3 rounded-[8px] border border-white/20 hover:border-white/50 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +94 76 803 0944
            </a>
          </div>
        </div>
      </section>

      {/* ── Address ── */}
      <section className="py-16 px-[clamp(16px,4vw,48px)]">
        <div className="max-w-[600px] mx-auto">
          <div className="w-10 h-px bg-border mb-10" />
          <p className="text-[0.875rem] text-muted leading-[1.7]">
            No: 14, Sir Baron Jayathilake Mawatha,
            <br />
            Colombo 01, Sri Lanka
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
