import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { LiveStream } from "@/components/sections/LiveStream";
import { Process } from "@/components/sections/Process";
import { Specialists } from "@/components/sections/Specialists";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { Pricing } from "@/components/sections/Pricing";
import { SelfTest } from "@/components/sections/SelfTest";
import { Booking } from "@/components/sections/Booking";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BottomDock } from "@/components/BottomDock";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

export default function Home() {
  const reveals = [
    <TrustBar key="trustbar" />,
    <Services key="services" />,
    <LiveStream key="livestream" />,
    <Process key="process" />,
    <Specialists key="specialists" />,
    <Testimonials key="testimonials" />,
    <Comparison key="comparison" />,
    <Pricing key="pricing" />,
    <SelfTest key="selftest" />,
    <Booking key="booking" />,
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
