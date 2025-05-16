"use client"

import { useState } from "react"

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    "All",
    "Data & Analytics",
    "Paid Media",
    "Conversion Optimization",
    "Content Strategy",
    "Social Media",
    "Marketing Automation",
  ]

  return (
    <section className="py-10 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Browse by Category</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-background border border-border hover:bg-card-foreground/5"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryFilter
