"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AccredianEdge } from "@/components/sections/AccredianEdge";
import { CatFramework } from "@/components/sections/CatFramework";
import { Clients } from "@/components/sections/Clients";
import { CourseSegmentation } from "@/components/sections/CourseSegmentation";
import { DomainExpertise } from "@/components/sections/DomainExpertise";
import { Faqs } from "@/components/sections/Faqs";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SkillEnhancement } from "@/components/sections/SkillEnhancement";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadModal } from "@/components/ui/LeadModal";

export default function Home() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const openLeadModal = () => setIsLeadModalOpen(true);
  const closeLeadModal = () => setIsLeadModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex flex-col gap-18 sm:gap-24 md:gap-28">
        <Hero onEnquire={openLeadModal} />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <SkillEnhancement />
        <CatFramework />
        <HowItWorks />
        <Faqs onEnquire={openLeadModal} />
        <Testimonials />
        <FinalCta onEnquire={openLeadModal} />
      </main>
      <Footer onEnquire={openLeadModal} />
      <LeadModal isOpen={isLeadModalOpen} onClose={closeLeadModal} />
    </div>
  );
}
