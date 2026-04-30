import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { TagMarquee } from "@/components/sections/TagMarquee";
import { Services } from "@/components/sections/Services";
import { LiveStream } from "@/components/sections/LiveStream";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Specialists } from "@/components/sections/Specialists";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BottomDock } from "@/components/BottomDock";

export default function Home() {
  return (
    <div className="app-frame max-w-[680px]">
      <Header />
      <main className="flex-1 pb-28">
        <Hero />
        <TrustBar />
        <TagMarquee />
        <Services />
        <LiveStream />
        <About />
        <Process />
        <WhyUs />
        <Specialists />
        <Testimonials />
        <Pricing />
        <PromoBanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BottomDock />
    </div>
  );
}
