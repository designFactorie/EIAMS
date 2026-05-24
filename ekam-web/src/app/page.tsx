import { AlliedHealthcare } from "@/components/AlliedHealthcare";
import { CampusStrip } from "@/components/CampusStrip";
import { CTA } from "@/components/CTA";
import { DegreePrograms } from "@/components/DegreePrograms";
import { FooterLight } from "@/components/FooterLight";
import { Foundation } from "@/components/Foundation";
import { Hero } from "@/components/Hero";
import { NavigationLight } from "@/components/NavigationLight";
import { Partnership } from "@/components/Partnership";
import { Pulse } from "@/components/Pulse";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SpecialtyShowcase } from "@/components/SpecialtyShowcase";
import { Voice } from "@/components/Voice";

export default function Home() {
  return (
    <div className="theme-light bg-[#fafbfd] min-h-screen">
      <SmoothScroll />
      <NavigationLight />
      <main className="relative bg-bg text-ink">
        <Hero />
        <Partnership />
        <Foundation />
        <SpecialtyShowcase />
        <AlliedHealthcare />
        <DegreePrograms />
        <CampusStrip />
        <Pulse />
        <Voice />
        <CTA />
      </main>
      <FooterLight />
    </div>
  );
}
