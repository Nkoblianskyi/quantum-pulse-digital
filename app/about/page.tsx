import AboutHero from "@/components/about/AboutHero"
import OurStory from "@/components/about/OurStory"
import CoreValues from "@/components/about/CoreValues"
import TeamSection from "@/components/about/TeamSection"
import Achievements from "@/components/about/Achievements"
import ClientTestimonials from "@/components/about/ClientTestimonials"
import JoinTeam from "@/components/about/JoinTeam"
import CTASection from "@/components/services/CTASection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | QuantumPulse Digital",
  description:
    "Learn about QuantumPulse Digital's story, our team of marketing experts, and the values that drive our data-driven approach to digital marketing.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <CoreValues />
      <TeamSection />
      <Achievements />
      <ClientTestimonials />
      <JoinTeam />
      <CTASection />
    </>
  )
}
