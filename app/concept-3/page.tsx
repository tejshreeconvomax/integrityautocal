import type { Metadata } from "next";
import Nav from "../components/concept3/Nav";
import Hero from "../components/concept3/Hero";
import DataStrip from "../components/concept3/DataStrip";
import Modules from "../components/concept3/Modules";
import Protocol from "../components/concept3/Protocol";
import GridSection from "../components/concept3/Grid";
import Contact from "../components/concept3/Contact";
import Footer from "../components/concept3/Footer";

export const metadata: Metadata = {
  title: "Integrity Auto Salon — Technical · Vehicle Protection System",
  description:
    "Protection, engineered for the paint. Redondo Beach ceramic coating and paint correction studio operating like a lab.",
};

export default function Concept3Page() {
  return (
    <main className="relative bg-ink text-off">
      <Nav />
      <Hero />
      <DataStrip />
      <Modules />
      <Protocol />
      <GridSection />
      <Contact />
      <Footer />
    </main>
  );
}
