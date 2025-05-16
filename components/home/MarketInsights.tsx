import Link from "next/link"
import { ArrowRight, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"

const MarketInsights = () => {
  const insights = [
    {
      id: "insight-1",
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Meta CPMs grew 11% in Q1 2025",
      description:
        "Rising ad costs mean businesses need more efficient targeting and creative strategies to maintain ROAS.",
      link: "/blog/meta-cpm-trends-2025",
    },
    {
      id: "insight-2",
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Google's Smart Bidding is now default",
      description: "The shift to automated bidding requires new approaches to campaign structure and optimization.",
      link: "/blog/google-smart-bidding-strategies",
    },
    {
      id: "insight-3",
      icon: <Lightbulb className="h-6 w-6" />,
      title: "60% of users bounce in first 2.3s",
      description: "Page speed and first impressions are more critical than ever for conversion optimization.",
      link: "/blog/page-speed-conversion-impact",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Insights</h2>
          <p className="text-xl text-muted-foreground">
            Stay ahead with our latest observations on digital marketing trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {insight.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
              <p className="text-muted-foreground mb-4">{insight.description}</p>

              <Link href={insight.link} className="inline-flex items-center text-primary hover:underline font-medium">
                Read analysis
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketInsights
