import type { Metadata } from "next";
import Nav from "../components/concept1/Nav";
import Hero from "../components/concept1/Hero";
import Marquee from "../components/concept1/Marquee";
import ServiceList from "../components/concept1/ServiceList";
import Stats from "../components/concept1/Stats";
import Manifesto from "../components/concept1/Manifesto";
import WorkGrid from "../components/concept1/WorkGrid";
import Process from "../components/concept1/Process";
import Testimonials from "../components/concept1/Testimonials";
import Areas from "../components/concept1/Areas";
import CTABanner from "../components/concept1/CTABanner";
import Contact from "../components/concept1/Contact";
import Footer from "../components/concept1/Footer";

export const metadata: Metadata = {
  title: "Integrity Auto Salon — Performance · Ceramic Coating, Paint Correction, Detail",
  description:
    "Built for the obsessed. Redondo Beach's reference studio for ceramic coating, paint correction, detail, tint and marine care.",
};

export default function Concept1Page() {
  return (
    <main className="relative bg-ink text-off">
      <Nav />
      <Hero />
      <Marquee
        items={[
          "CERAMIC COATING",
          "PAINT CORRECTION",
          "INTERIOR DETAIL",
          "EXTERIOR DETAIL",
          "WINDOW TINT",
          "MARINE CARE",
        ]}
      />
      <ServiceList />
      <Stats />
      <Manifesto />
      <WorkGrid />
      <Process />
      <Testimonials />
      <Areas />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
