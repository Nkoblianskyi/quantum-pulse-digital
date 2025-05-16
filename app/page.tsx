import ImpactHero from "@/components/home/ImpactHero"
import AssessmentBlock from "@/components/home/AssessmentBlock"
import ServiceGrid from "@/components/home/ServiceGrid"
import BeforeAfterCarousel from "@/components/home/BeforeAfterCarousel"
import CaseStudySnapshot from "@/components/home/CaseStudySnapshot"
import MarketInsights from "@/components/home/MarketInsights"
import BlogPreview from "@/components/home/BlogPreview"
import FaqSection from "@/components/home/FaqSection"
import VisualCta from "@/components/home/VisualCta"
import DataVisualization from "@/components/home/DataVisualization"
import ClientJourney from "@/components/home/ClientJourney"
import OrganizationSchema from "./schema"
import FounderInterview from "@/components/home/FounderInterview"

export default function Home() {
  return (
    <>
      <OrganizationSchema />

      {/* 1. Impact Hero - Unique, non-templated hero section */}
      <ImpactHero />

      {/* 2. Quick Assessment Block - Interactive section */}
      <AssessmentBlock />

      {/* 3. Service Systems Grid - Unique presentation of services */}
      <ServiceGrid />

      {/* 4. Data Visualization Section - NEW SECTION */}
      <DataVisualization />

      {/* 5. Before & After Carousel */}
      <BeforeAfterCarousel />

      {/* 6. Case Study Snapshot */}
      <CaseStudySnapshot />

      {/* 7. Client Journey Map - NEW SECTION */}
      <ClientJourney />

      {/* 8. Founder Interview - NEW SECTION */}
      <FounderInterview />

      {/* 9. Market Insights / Signals */}
      <MarketInsights />

      {/* 10. Blog Preview */}
      <BlogPreview />

      {/* 11. FAQ Section */}
      <FaqSection />

      {/* 12. Visual CTA Footer */}
      <VisualCta />
    </>
  )
}
