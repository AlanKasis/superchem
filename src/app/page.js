'use client'

import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LandingBanner from "@/components/LandingBanner";
import MarketsSection from "@/components/MarketsSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import { useWindowScroll } from "@uidotdev/usehooks";

export default function Home() {
  const [{ x, y }, scrollTo] = useWindowScroll();

  return (
    <>
      <Navbar showBackground={y > 50} />
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <LandingBanner />
        <MarketsSection />
        <ServicesSection />
        <ClientsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
