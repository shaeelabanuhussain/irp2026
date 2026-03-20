import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import WhatYouGet from "@/components/WhatYouGet";
import Solution from "@/components/Solution";
import Testimonial from "@/components/Testimonial";
import Curriculum from "@/components/Curriculum";
import Merit from "@/components/Merit";
import ApplySection from "@/components/ApplySection";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";

export default function Home() {
  return (
    <RevealProvider>
      <Navbar />
      <Hero />
      <WhySection />
      <WhatYouGet />
      <Solution />
      <Testimonial />
      <Curriculum />
      <Merit />
      <ApplySection />
      <FAQs />
      <Footer />
    </RevealProvider>
  );
}
