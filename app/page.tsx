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
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

export default function Home() {
  const reveals = [
    <TrustBar key="trustbar" />,
    <TagMarquee key="tagmarquee" />,
    <Services key="services" />,
    <LiveStream key="livestream" />,
    <About key="about" />,
    <Process key="process" />,
    <WhyUs key="whyus" />,
    <Specialists key="specialists" />,
    <Testimonials key="testimonials" />,
    <Pricing key="pricing" />,
    <PromoBanner key="promo" />,
    <FAQ key="faq" />,
    <Contact key="contact" />,
  ];

  return (
    <>
      <ScrollProgress />
      <div className="app-frame max-w-[680px]">
        <Header />
        <main className="flex-1 pb-28">
          <Hero />
          {reveals.map((node) => (
            <RevealOnScroll key={node.key}>{node}</RevealOnScroll>
          ))}
        </main>
        <Footer />
        <BottomDock />
      </div>
    </>
  );
}
