export default function FAQHero() {
  return (
    <section className="relative py-20 overflow-hidden animated-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Frequently Asked Questions</h1>
          <p className="text-xl mb-8 text-black">
            Find answers to common questions about our services, processes, and how we can help your business achieve
            measurable results.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
              />
              <button className="absolute right-2 top-2 bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full transition-colors duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-20 bg-background"
        style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)" }}
      ></div>
    </section>
  )
}
