export default function FounderInterview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Story Behind QuantumPulse Digital</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A conversation with our founder about the journey of building a data-driven marketing agency
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <div className="space-y-8">
            {/* Interview questions and answers */}
            <div className="interview-item">
              <p className="font-medium text-gray-800 mb-2">
                <span className="text-teal-600 font-bold">Q:</span> What inspired you to start QuantumPulse Digital?
              </p>
              <p className="pl-6 text-gray-700">
                <span className="text-teal-600 font-bold">A:</span> The digital marketing landscape was becoming
                increasingly complex, yet most agencies were still using outdated methodologies. I saw a gap between
                data science and marketing execution. Our clients were drowning in data but starving for insights. I
                wanted to build an agency that truly bridged that gap—where every campaign decision is backed by robust
                data analysis, and where creativity is enhanced by technology, not replaced by it.
              </p>
            </div>

            <div className="interview-item">
              <p className="font-medium text-gray-800 mb-2">
                <span className="text-teal-600 font-bold">Q:</span> What were the biggest challenges in the early days?
              </p>
              <p className="pl-6 text-gray-700">
                <span className="text-teal-600 font-bold">A:</span> Convincing clients to move away from vanity metrics
                was our biggest hurdle. Many were comfortable with the old way of reporting—impressions, clicks, basic
                conversion tracking. We had to demonstrate that diving deeper into customer journey analytics and
                attribution modeling would actually improve their bottom line. We started with small pilot projects,
                proving our approach with data, and gradually earned their trust to manage larger portions of their
                marketing budgets.
              </p>
            </div>

            <div className="interview-item">
              <p className="font-medium text-gray-800 mb-2">
                <span className="text-teal-600 font-bold">Q:</span> How has your approach to digital marketing evolved
                since founding the company?
              </p>
              <p className="pl-6 text-gray-700">
                <span className="text-teal-600 font-bold">A:</span> We've become much more focused on the entire
                customer lifecycle. Initially, we were primarily acquisition-focused, but we quickly realized that
                retention and lifetime value optimization were equally important. We've also embraced more sophisticated
                testing methodologies. Where we once ran simple A/B tests, we now implement multi-variate testing across
                channels with Bayesian analysis to make faster, more accurate decisions about campaign performance.
              </p>
            </div>

            <div className="interview-item">
              <p className="font-medium text-gray-800 mb-2">
                <span className="text-teal-600 font-bold">Q:</span> What sets QuantumPulse Digital apart from other
                marketing agencies?
              </p>
              <p className="pl-6 text-gray-700">
                <span className="text-teal-600 font-bold">A:</span> Our integration of data science into every aspect of
                marketing strategy is our key differentiator. We don't just have a data team that works separately from
                our marketing specialists—every team member is trained to think analytically. We've also developed
                proprietary tools that allow us to identify market opportunities faster than our competitors. But
                perhaps most importantly, we're transparent about results. We don't hide behind complex reports; we
                clearly communicate what's working, what isn't, and how we're adapting.
              </p>
            </div>

            <div className="interview-item">
              <p className="font-medium text-gray-800 mb-2">
                <span className="text-teal-600 font-bold">Q:</span> Where do you see the future of digital marketing
                heading?
              </p>
              <p className="pl-6 text-gray-700">
                <span className="text-teal-600 font-bold">A:</span> We're moving toward hyper-personalization at scale.
                The companies that can deliver truly personalized experiences while respecting privacy will win.
                First-party data strategies are becoming essential as third-party cookies disappear. AI will continue to
                transform campaign optimization, but human creativity and strategic thinking will become even more
                valuable. The agencies that can balance technological innovation with human insight will thrive in this
                new landscape.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="italic text-gray-600">
              "Our mission remains unchanged: to deliver measurable growth through data-driven marketing strategies that
              adapt to the ever-changing digital landscape."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
