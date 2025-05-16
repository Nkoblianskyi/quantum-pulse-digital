import Image from "next/image"

const OurStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-border">
              <Image
                src="/ceab709feb73cb2dae2e4f2d59c3bdfe.jpg"
                alt="QuantumPulse Digital team working together"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl border border-border shadow-xl">
              <div className="text-3xl font-bold gradient-text">2019</div>
              <div className="text-sm text-muted-foreground">Founded in Tel Aviv</div>
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From data analysts to marketing innovators</h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                QuantumPulse Digital was founded in 2019 by a team of data scientists and marketing strategists who saw
                a fundamental problem in the digital marketing industry: decisions were being made based on intuition
                rather than data.
              </p>

              <p>
                What began as a small consultancy helping businesses make sense of their marketing data has evolved into
                a full-service digital marketing agency with a difference: everything we do is rooted in data,
                measurement, and systematic optimization.
              </p>

              <p>
                Today, we're a team of 28 specialists across analytics, paid media, conversion optimization, and
                creative development. We've helped over 120 businesses transform their digital marketing performance and
                build sustainable growth systems.
              </p>

              <p>
                Our mission remains the same as day one: to replace marketing guesswork with data-driven certainty, and
                to build marketing systems that deliver predictable, measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
