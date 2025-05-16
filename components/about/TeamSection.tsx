import { User, Database, BarChart, Zap, LineChart, Palette } from "lucide-react"

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Daniel Levy",
      role: "Founder & CEO",
      bio: "Former data scientist with 12+ years experience in digital marketing. Led growth at two tech unicorns before founding QuantumPulse.",
      icon: <User className="h-12 w-12" />,
    },
    {
      name: "Sarah Chen",
      role: "Chief Strategy Officer",
      bio: "Digital marketing veteran with expertise in scaling e-commerce and SaaS businesses. Previously led marketing at major retail brands.",
      icon: <BarChart className="h-12 w-12" />,
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Analytics",
      bio: "Data analytics expert with background in machine learning. Specializes in attribution modeling and predictive analytics for marketing.",
      icon: <Database className="h-12 w-12" />,
    },
    {
      name: "Aisha Patel",
      role: "Head of Paid Media",
      bio: "Paid advertising specialist with experience managing $50M+ in ad spend across Google, Meta, and emerging platforms.",
      icon: <Zap className="h-12 w-12" />,
    },
    {
      name: "Thomas Weber",
      role: "Head of CRO",
      bio: "Conversion rate optimization expert with background in UX design. Passionate about creating data-driven user experiences that convert.",
      icon: <LineChart className="h-12 w-12" />,
    },
    {
      name: "Olivia Kim",
      role: "Creative Director",
      bio: "Award-winning creative director with expertise in brand strategy and performance-focused creative development.",
      icon: <Palette className="h-12 w-12" />,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the experts behind QuantumPulse</h2>
          <p className="text-xl text-muted-foreground">
            Our team combines expertise in data science, marketing strategy, and creative execution to deliver
            exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="p-6">
                <div className="bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-primary font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
