import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 bg-card clip-path-diagonal-reverse">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our team is ready to provide personalized answers to your specific questions and help you understand how our
          services can benefit your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-transparent hover:bg-card border border-primary text-primary hover:text-primary-light font-medium rounded-full transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
