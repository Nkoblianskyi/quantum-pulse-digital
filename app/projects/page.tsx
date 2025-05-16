import ProjectsHero from "@/components/projects/ProjectsHero"
import ProjectCard from "@/components/projects/ProjectCard"
import CTASection from "@/components/services/CTASection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | QuantumPulse Digital",
  description:
    "Explore our portfolio of successful digital marketing projects and see how we've helped businesses achieve measurable growth and ROI.",
}

export default function ProjectsPage() {
  const projects = [
    {
      id: "ecommerce-ppc-optimization",
      title: "E-commerce PPC Campaign Optimization",
      client: "Fashion Retailer",
      industry: "E-commerce",
      service: "PPC Management",
      image: "/a8139697757c32af4a2d58078b8079da.jpg",
      results: [
        { metric: "ROAS", value: "3.8x", change: "+217%" },
        { metric: "Conversion Rate", value: "4.7%", change: "+112%" },
        { metric: "CPA", value: "$28.50", change: "-38%" },
      ],
      tags: ["Goog", "Met", "E-commerce"],
      featured: true,
    },
    {
      id: "saas-conversion-funnel",
      title: "SaaS Conversion Funnel Redesign",
      client: "B2B Software Company",
      industry: "SaaS",
      service: "Conversion Optimization",
      image: "/76d631d86b984e363bda1781f433d6cb.jpg",
      results: [
        { metric: "Trial Signups", value: "+86%", change: "+86%" },
        { metric: "Trial-to-Paid", value: "32%", change: "+45%" },
        { metric: "CAC", value: "$420", change: "-35%" },
      ],
      tags: ["CRO", "UX Design", "SaaS"],
      featured: true,
    },
    {
      id: "b2b-lead-generation",
      title: "B2B Lead Generation Campaign",
      client: "Professional Services Firm",
      industry: "B2B Services",
      service: "Marketing Automation",
      image: "/1ac3d20c84f7717f653c02f975465785.jpg",
      results: [
        { metric: "Qualified Leads", value: "+124%", change: "+124%" },
        { metric: "Cost Per Lead", value: "$68", change: "-42%" },
        { metric: "Lead-to-Sale", value: "12%", change: "+50%" },
      ],
      tags: ["Link", "Email Automation", "B2B"],
      featured: false,
    },
    {
      id: "analytics-implementation",
      title: "Cross-Platform Analytics Implementation",
      client: "Multi-Channel Retailer",
      industry: "Retail",
      service: "Analytics Setup",
      image: "/3258ba78fe7753b8e04ab66e72384b8a.jpg",
      results: [
        { metric: "Data Accuracy", value: "98%", change: "+32%" },
        { metric: "Marketing ROI", value: "+45%", change: "+45%" },
        { metric: "Decision Speed", value: "3 days", change: "-70%" },
      ],
      tags: ["GA4", "Data Studio", "Retail"],
      featured: false,
    },
    {
      id: "content-strategy",
      title: "Content Marketing Strategy",
      client: "Financial Services Provider",
      industry: "Finance",
      service: "Content Strategy",
      image: "/2be5e0ab3b71d0320a82afa98fd77be5.jpg",
      results: [
        { metric: "Organic Traffic", value: "+215%", change: "+215%" },
        { metric: "Lead Quality", value: "+40%", change: "+40%" },
        { metric: "Content ROI", value: "320%", change: "+180%" },
      ],
      tags: ["SEO", "Content Marketing", "Finance"],
      featured: false,
    },
    {
      id: "social-media-campaign",
      title: "Social Media Growth Campaign",
      client: "Consumer Brand",
      industry: "Consumer Goods",
      service: "Social Media Management",
      image: "/56a46fe5df960ea7cbf37768d1e0572b.jpg",
      results: [
        { metric: "Engagement", value: "+186%", change: "+186%" },
        { metric: "Followers", value: "+112K", change: "+340%" },
        { metric: "Social Revenue", value: "+78%", change: "+78%" },
      ],
      tags: ["In", "Tik", "Consumer"],
      featured: false,
    },
  ]

  return (
    <>
      <ProjectsHero />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Success Stories</h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              Explore our portfolio of successful projects and see how we've helped businesses achieve measurable
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
