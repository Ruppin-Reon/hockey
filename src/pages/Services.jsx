import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { FileText, Users, Globe2, TrendingUp, Shield, Handshake } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Contract Negotiation",
      description: "Expert negotiation of professional hockey contracts worldwide",
      features: ["Salary optimization", "Performance bonuses", "Trade clauses", "Insurance coverage"]
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Career Development", 
      description: "Strategic career planning and pathway guidance",
      features: ["Career roadmapping", "Skills assessment", "Training recommendations", "Performance tracking"]
    },
    {
      icon: <Globe2 className="h-10 w-10 text-primary" />,
      title: "Global Placement",
      description: "Connections to leagues and teams worldwide", 
      features: ["European leagues", "North American leagues", "Team connections", "Cultural support"]
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Marketing & Branding",
      description: "Building your personal brand and marketability",
      features: ["Social media strategy", "Sponsorship deals", "Media training", "Brand partnerships"]
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Legal Protection",
      description: "Comprehensive legal support and representation",
      features: ["Contract review", "Dispute resolution", "Regulatory compliance", "Rights protection"]
    },
    {
      icon: <Handshake className="h-10 w-10 text-primary" />,
      title: "Relationship Management",
      description: "Building lasting relationships with teams and leagues",
      features: ["Team introductions", "League connections", "Ongoing communication", "Opportunity alerts"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-body font-medium">
            Comprehensive hockey representation services designed to maximize 
            your potential and secure your future in professional hockey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 group-hover:animate-glow-pulse">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-display font-semibold mb-4">{service.title}</CardTitle>
                  <p className="text-muted-foreground font-body">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Process */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-navy-deep">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Initial Consultation", desc: "Free consultation to understand your goals and assess your situation" },
                { step: 2, title: "Strategy Development", desc: "Create a customized roadmap for your career advancement" },
                { step: 3, title: "Active Representation", desc: "Negotiate contracts and manage your professional relationships" },
                { step: 4, title: "Ongoing Support", desc: "Continuous career guidance and opportunity development" },
              ].map((process, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-gradient-card rounded-lg p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-navy-deep">Our Specializations</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["NHL Contracts", "European Leagues", "AHL/ECHL", "International Transfers", "Endorsement Deals", "Retirement Planning"].map((badge, i) => (
                <Badge key={i} variant="outline" className="text-lg py-2 px-6">{badge}</Badge>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body font-medium">
              We provide comprehensive representation across all levels of professional hockey, 
              from entry-level contracts to multi-million dollar deals.
            </p>
            <Button size="lg" className="font-body font-semibold px-10 py-4 text-lg">Get Started Today</Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$50M+", label: "Total Contracts Negotiated" },
              { value: "98%", label: "Client Satisfaction Rate" },
              { value: "25+", label: "Countries Represented" },
              { value: "20+", label: "Years of Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-body font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
