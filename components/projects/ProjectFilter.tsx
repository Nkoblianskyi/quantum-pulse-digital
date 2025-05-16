"use client"

import { useState } from "react"

const ProjectFilter = () => {
  const [activeIndustry, setActiveIndustry] = useState("All")
  const [activeService, setActiveService] = useState("All")

  const industries = ["All", "E-commerce", "SaaS", "B2B", "Finance", "Retail", "Consumer Goods"]
  const services = [
    "All",
    "PPC Management",
    "Conversion Optimization",
    "Analytics Setup",
    "Marketing Automation",
    "Content Strategy",
    "Social Media Management",
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Our Success Stories</h2>
          <p className="text-muted-foreground">
            Filter by industry or service to find the most relevant case studies for your business.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={activeIndustry}
            onChange={(e) => setActiveIndustry(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="" disabled>
              Industry
            </option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>

          <select
            value={activeService}
            onChange={(e) => setActiveService(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="" disabled>
              Service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeIndustry === "All"
              ? "bg-primary text-white"
              : "bg-card border border-border hover:bg-card-foreground/5"
          }`}
          onClick={() => setActiveIndustry("All")}
        >
          All Industries
        </button>
        {industries.slice(1).map((industry) => (
          <button
            key={industry}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeIndustry === industry
                ? "bg-primary text-white"
                : "bg-card border border-border hover:bg-card-foreground/5"
            }`}
            onClick={() => setActiveIndustry(industry)}
          >
            {industry}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeService === "All"
              ? "bg-primary text-white"
              : "bg-card border border-border hover:bg-card-foreground/5"
          }`}
          onClick={() => setActiveService("All")}
        >
          All Services
        </button>
        {services.slice(1).map((service) => (
          <button
            key={service}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeService === service
                ? "bg-primary text-white"
                : "bg-card border border-border hover:bg-card-foreground/5"
            }`}
            onClick={() => setActiveService(service)}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProjectFilter
