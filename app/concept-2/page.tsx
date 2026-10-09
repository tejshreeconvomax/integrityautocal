import type { Metadata } from "next";
import Nav from "../components/concept2/Nav";
import Hero from "../components/concept2/Hero";
import ServiceEditorial from "../components/concept2/ServiceEditorial";
import StudioFeature from "../components/concept2/StudioFeature";
import ProcessEditorial from "../components/concept2/Process";
import Journal from "../components/concept2/Journal";
import Areas from "../components/concept2/Areas";
import Contact from "../components/concept2/Contact";
import Footer from "../components/concept2/Footer";

export const metadata: Metadata = {
  title: "Integrity Auto Salon — Editorial · The Art of Automotive Perfection",
  description:
    "An editorial look at Integrity Auto Salon — ceramic coating, paint correction and detail in Redondo Beach, California.",
};

export default function Concept2Page() {
  return (
    <main className="relative bg-ink text-off">
      <Nav />
      <Hero />
      <ServiceEditorial />
      <StudioFeature />
      <ProcessEditorial />
      <Journal />
      <Areas />
      <Contact />
      <Footer />
    </main>
  );
}
