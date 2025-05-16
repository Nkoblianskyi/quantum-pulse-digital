"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const ClientTestimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const testimonials = [
    {
      id: 1,
      quote:
        "The QuantumPulse team completely transformed our approach to digital marketing. Their data-driven methodology and systematic optimization process delivered results beyond our expectations.",
      author: "Alex Johnson",
      position: "CMO",
      company: "TechNova Solutions",
      image: "/about/testimonial-1.png",
    },
    {
      id: 2,
      quote:
        "What sets QuantumPulse apart is their ability to translate complex data into actionable insights. They don't just report numbers – they tell you what they mean and what to do about them.",
      author: "Sophia Rodriguez",
      position: "Director of Growth",
      company: "Elevate Commerce",
      image: "/about/testimonial-2.png",
    },
    {
      id: 3,
      quote:
        "Working with QuantumPulse has been a game-changer for our business. Their team's expertise in both analytics and creative execution has helped us achieve consistent growth quarter after quarter.",
      author: "David Chen",
      position: "Founder & CEO",
      company: "Horizon Fitness",
      image: "/about/testimonial-3.png",
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What our clients say about us</h2>
        </div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-xl border border-border p-8 relative">
                    <Quote className="text-primary/20 absolute top-6 left-6" size={48} />
                    <div className="relative z-10">
                      <p className="text-xl mb-8 pt-8 pl-8">"{testimonial.quote}"</p>

                      <div className="flex items-center">
                        <div>
                          <div className="font-bold">{testimonial.author}</div>
                          <div className="text-primary">{testimonial.position}</div>
                          <div className="text-muted-foreground">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full border border-border hover:bg-card transition-colors z-10"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full border border-border hover:bg-card transition-colors z-10"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeSlide === index ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonials
