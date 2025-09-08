import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import ContactForm from "../components/ContactForm";
import { Users, Globe, Trophy, Mail } from "lucide-react";

const Company = () => {
  const agents = [
    {
      name: "Darryl Wolski",
      email: "dwolski@2112hockeyagency.com",
      bio: "Lead Agent with 20+ years in professional hockey representation"
    },
    {
      name: "Mario Lamoureux",
      email: "mario.lamoureux9@gmail.com",
      bio: "International hockey specialist focusing on European leagues"
    },
    {
      name: "Ladislav Kohn",
      email: "lkohn29@hotmail.com",
      bio: "Player development and contract negotiation expert"
    }
  ];

  const globalAssociates = [
    { name: "Sergei Isakov", region: "Russia", email: "Serg-sport@mail.ru" },
    { name: "Lars Wunsche", region: "Germany & Europe", email: "43-lw@arcor.de" },
    { name: "Carson Shields", region: "North America", company: "Wingman Hockey Group" },
    { name: "Kyle Gagnon", region: "Advisory", company: "Monarch Advisory Group" },
    { name: "Walter Olsson", region: "Sweden", email: "" },
    { name: "Marcel Bacik", region: "Slovakia", email: "" },
    { name: "Renata Machakova", region: "Slovakia", email: "" }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight">
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              OUR COMPANY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-medium leading-relaxed">
            Professional hockey agency with global reach and local expertise
          </p>
        </div>
      </section>
      {/* Our Company */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Agents */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-navy-deep">Our Agents</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {agents.map((agent, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-display font-semibold text-primary">{agent.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground font-body">{agent.bio}</p>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${agent.email}`} className="text-primary hover:underline font-body">
                        {agent.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Global Associates */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-navy-deep">Global Associates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalAssociates.map((associate, index) => (
                <Card key={index} className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <h4 className="font-display font-semibold text-lg mb-2">{associate.name}</h4>
                    <Badge variant="secondary" className="mb-2">{associate.region}</Badge>
                    {associate.company && (
                      <p className="text-sm text-muted-foreground font-body mb-2">{associate.company}</p>
                    )}
                    {associate.email && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-3 w-3 text-primary" />
                        <a href={`mailto:${associate.email}`} className="text-primary hover:underline text-xs font-body">
                          {associate.email}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Services Preview */}
          <div className="text-center bg-gradient-card rounded-lg p-12 mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-navy-deep">2112 Services</h3>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body font-medium">
              Comprehensive representation services including contract negotiation, 
              career planning, marketing, and global placement opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-5 mb-8">
              <Badge variant="outline" className="text-lg py-2 px-4 font-body">Player Placement Services North America Europe Russia Asia</Badge>
              <Badge variant="outline" className="text-lg py-2 px-4 font-body">Branding / Marketing / Sponsorship Opportunities For 2112 Clients</Badge>
              <Badge variant="outline" className="text-lg py-2 px-4 font-body">Tax & Immigration Assistance</Badge>
              <Badge variant="outline" className="text-lg py-2 px-4 font-body">Financial Planning Recommendations</Badge>
              <Badge variant="outline" className="text-lg py-2 px-4 font-body">Social Media Planning And Guidance</Badge>
            </div>
            <Button size="lg" className="font-body font-semibold px-10 py-4 text-lg">Learn More About Our Services</Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl text-muted-foreground">
              Connect with our professional hockey representation team
            </p>
          </div>
          <ContactForm 
            type="player"
            title="Professional Player Registration"
            description="Tell us about your professional hockey background and career goals"
          />
        </div>
      </section>
    </div>
  );
};

export default Company;
