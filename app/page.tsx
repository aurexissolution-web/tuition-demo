import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { ValueProps } from "@/components/sections/ValueProps";
import { ProgramPreview } from "@/components/sections/ProgramPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <ValueProps />
      <ProgramPreview />
      <Testimonials />
      <CtaBand />
    </>
  );
}
