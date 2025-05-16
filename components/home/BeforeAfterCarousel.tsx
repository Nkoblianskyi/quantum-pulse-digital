"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

const BeforeAfterCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const slides = [
    {
      id: "slide-1",
      title: "E-commerce Landing Page Optimization",
      before: {
        metric: "1.8%",
        description: "Conversion Rate",
      },
      after: {
        metric: "4.7%",
        description: "Conversion Rate",
      },
      improvement: "+161%",
      image: "/4b0bc5b5ee6462adc42d0644cdea9880.jpg",
    },
    {
      id: "slide-2",
      title: "SaaS Ad Campaign Performance",
      before: {
        metric: "1.2",
        description: "ROAS",
      },
      after: {
        metric: "3.8",
        description: "ROAS",
      },
      improvement: "+217%",
      image: "/258348d15cdda74cb9bfb74bdfe69b14.jpg",
    },
    {
      id: "slide-3",
      title: "B2B Lead Generation Funnel",
      before: {
        metric: "12%",
        description: "Conversion Rate",
      },
      after: {
        metric: "32%",
        description: "Conversion Rate",
      },
      improvement: "+167%",
      image: "/bb588b960b9f4c002589c341e860cf7c.jpg",
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovering])

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Before & After Transformation</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the measurable impact our data-driven strategies have on our clients' marketing performance.
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden rounded-xl border border-border shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="relative">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent flex items-end">
                      <div className="p-8 w-full">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">{slide.title}</h3>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                          <div className="text-center p-6 bg-card/90 backdrop-blur-sm rounded-xl border border-border w-full md:w-auto">
                            <div className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Before</div>
                            <div className="text-3xl md:text-4xl font-bold">{slide.before.metric}</div>
                            <div className="text-sm text-muted-foreground mt-1">{slide.before.description}</div>
                          </div>

                          <div className="text-center">
                            <div className="text-3xl md:text-5xl font-bold text-primary bg-primary/10 px-6 py-3 rounded-xl">
                              {slide.improvement}
                            </div>
                            <div className="text-sm text-muted-foreground mt-2">Improvement</div>
                          </div>

                          <div className="text-center p-6 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 w-full md:w-auto">
                            <div className="text-primary text-sm uppercase tracking-wider mb-2">After</div>
                            <div className="text-3xl md:text-4xl font-bold">{slide.after.metric}</div>
                            <div className="text-sm text-muted-foreground mt-1">{slide.after.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full border border-border hover:bg-card transition-colors z-10"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full border border-border hover:bg-card transition-colors z-10"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeSlide === index ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            View all case studies
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterCarousel
