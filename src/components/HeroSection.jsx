import { Link } from "react-router-dom";
import { ArrowRight, Users, Trophy, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import HeroImage from "../assets/splash-banner.png";

const HeroSection = () => {
  const services = [
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Pro Hockey",
      description: "Elite representation for professional hockey players worldwide",
      link: "/pro-hockey"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "College & Junior",
      description: "Navigate CHL, NCAA D1 & D3, USPORTS, Junior, Prep, and ACHA",
      link: "/college-junior"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Play in Europe",
      description: "Opportunities across European leagues with complete support",
      link: "/europe"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="relative min-h-[150vh] flex items-center justify-center bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(30,40,60,0.25) 0%, rgba(30,40,60,0.15) 100%), url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-10">
            Elite Hockey Representation
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl px-8 py-4 text-lg font-semibold uppercase tracking-wide"
            >
              <Link to="/pro-hockey">
                CLICK HERE FOR PRO HOCKEY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/80 text-foreground shadow-xl px-8 py-4 text-lg font-semibold uppercase tracking-wide"
            >
              <Link to="/college-junior">
                CLICK HERE FOR NCAA - USPORTS - JUNIOR AND PREP
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div> */}
        {/* Overlay for readability, subtle */}
        {/* <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}
      </section>

      {/* Services Grid */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your hockey level to explore tailored services and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 group-hover:animate-glow-pulse">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-primary/90"
                  >
                    <Link to={service.link}>
                      Explore Options
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground font-body font-medium">Active Clients</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground font-body font-medium">Countries Represented</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground font-body font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;