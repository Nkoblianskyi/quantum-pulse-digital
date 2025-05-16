"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, TrendingDown, BarChart2, Layers, Users } from "lucide-react"

const AssessmentBlock = () => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)

  const issues = [
    {
      id: "roas",
      title: "Low ROAS",
      icon: <TrendingDown className="h-6 w-6" />,
      description:
        "Your ad spend isn't generating enough return. We've helped clients increase ROAS by 40-120% through funnel optimization and audience refinement.",
      cta: "See our ROAS recovery approach",
      link: "/services/ppc-management",
    },
    {
      id: "scaling",
      title: "Scaling plateau",
      icon: <BarChart2 className="h-6 w-6" />,
      description:
        "You've hit a growth ceiling. Our scaling systems have helped businesses break through plateaus and achieve sustainable growth.",
      cta: "Explore our scaling methodology",
      link: "/services/conversion-optimization",
    },
    {
      id: "funnel",
      title: "Broken funnel",
      icon: <Layers className="h-6 w-6" />,
      description:
        "Your traffic isn't converting. Our funnel diagnostics identify exactly where and why users drop off, then fix the leaks.",
      cta: "Learn about our funnel repair process",
      link: "/services/analytics-setup",
    },
    {
      id: "icp",
      title: "Undefined ICP",
      icon: <Users className="h-6 w-6" />,
      description:
        "You're targeting too broadly. We'll help you define your Ideal Customer Profile and align your marketing to reach the right audience.",
      cta: "Discover our ICP development framework",
      link: "/services/marketing-automation",
    },
  ]

  return (
    <section id="assessment" className="py-20 bg-card clip-path-diagonal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">What's your current struggle?</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Select your biggest challenge and we'll show you how we've solved it before.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {issues.map((issue) => (
              <button
                key={issue.id}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedIssue === issue.id
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/50 hover:bg-card-foreground/5"
                }`}
                onClick={() => setSelectedIssue(issue.id)}
              >
                <div className="flex items-center mb-3">
                  <div
                    className={`p-2 rounded-lg mr-3 ${
                      selectedIssue === issue.id ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {issue.icon}
                  </div>
                  <h3 className="text-xl font-bold">{issue.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {selectedIssue && (
            <div className="mt-8 p-6 rounded-xl border border-border bg-card-foreground/5 animate-fade-in">
              <p className="text-lg mb-4">{issues.find((issue) => issue.id === selectedIssue)?.description}</p>
              <Link
                href={issues.find((issue) => issue.id === selectedIssue)?.link || "/services"}
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                {issues.find((issue) => issue.id === selectedIssue)?.cta}
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AssessmentBlock
