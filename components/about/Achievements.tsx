import { Trophy, Users, Globe, BarChart2 } from "lucide-react"

const Achievements = () => {
  const stats = [
    {
      icon: <Trophy className="h-8 w-8" />,
      value: "120+",
      label: "Clients Served",
      description: "Across 14 different industries and 22 countries",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "28",
      label: "Team Members",
      description: "Specialists across analytics, paid media, and creative",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: "$42M+",
      label: "Ad Spend Managed",
      description: "With an average ROAS improvement of 127%",
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      value: "4.9/5",
      label: "Client Satisfaction",
      description: "Based on 78 client reviews and testimonials",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-background rounded-full text-primary font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The numbers that define our journey</h2>
          <p className="text-xl text-muted-foreground">
            Since our founding in 2019, we've achieved significant milestones and delivered exceptional results for our
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center"
            >
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
              <div className="text-lg font-bold mb-2">{stat.label}</div>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
