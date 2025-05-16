export default function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-violet-800 to-purple-800 py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Let's Create Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
            Remarkable
          </span>{" "}
          Together
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Have a project in mind or questions about our services? Our team of experts is ready to help you achieve your
          marketing goals.
        </p>
      </div>
    </section>
  )
}
