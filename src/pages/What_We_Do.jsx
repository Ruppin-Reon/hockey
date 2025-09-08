import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Trophy, 
  GraduationCap, 
  Target, 
  BookOpen,
  Video,
  Users,
  TrendingUp,
  Award
} from "lucide-react";
import Play from "../assets/expect to play.jpeg"

const What_We_Do = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Camp Selection",
      description: "This is a key part to what 2112 Hockey will do for you. First of all get you many camp invites all over North America and then decide which camps and teams fit you best.",
      features: ["Strategic camp placement", "Nationwide opportunities", "Personalized recommendations", "Exposure maximization"]
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Name, Image, Likeness (NIL)",
      description: "CHFA Hockey is learning the NIL process on a daily basis. This is very confusing and CHFA Hockey can help you with any questions you may have.",
      features: ["NIL compliance guidance", "Marketing opportunities", "Brand development", "Legal navigation"]
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Our Goal",
      description: "Without a doubt our number one goal is for our clients to keep moving forward. After playing college hockey we want to help players play pro hockey in North America and or Europe.",
      features: ["Career advancement", "Professional pathways", "International opportunities", "Long-term success"]
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Education Specialist",
      description: "CHFA Hockey has an education specialist to assist you with the confusing path to NCAA or USPORTS. Krista Anderson can help our clients and parents with what questions you may have.",
      features: ["NCAA eligibility", "USPORTS guidance", "Academic planning", "Compliance support"]
    }
  ];

  const videoSamples = [
    {
      position: "Goalie",
      url: "https://www.youtube.com/watch?v=59Pa_XKmlVU",
      description: "Professional goaltending analysis and technique improvement"
    },
    {
      position: "Defence", 
      url: "https://www.youtube.com/watch?v=zrEisXRbQ8w",
      description: "Defensive positioning and decision-making coaching"
    },
    {
      position: "Forward",
      url: "https://www.youtube.com/watch?v=JUUnXdfNCCo", 
      description: "Offensive skills and tactical awareness development"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight">
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              What We Do
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-medium leading-relaxed">
            Comprehensive hockey development services designed to advance your career 
            from junior levels to professional leagues worldwide.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-navy-deep">Our Core Services</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-body font-medium">
              Dedicated to your hockey success at every level
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-6 mb-6">
                    {service.icon}
                    <CardTitle className="text-3xl font-heading font-semibold text-foreground tracking-wide">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm font-body font-medium py-2 px-3">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Video Coaching Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 flex items-center justify-center space-x-4 text-navy-deep">
                <Video className="h-12 w-12 text-primary" />
                <span className="text-foreground tracking-tight">Video Coaching Samples</span>
              </h3>
              <p className="text-xl text-muted-foreground font-body font-medium">
                Professional video analysis and coaching for all positions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {videoSamples.map((sample, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading font-bold text-foreground tracking-wide text-center">{sample.position} Coaching</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-8 font-body leading-relaxed">
                      {sample.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <a href={sample.url} target="_blank" rel="noopener noreferrer">
                        Watch Sample Video
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <img
            src={Play}
            alt="Expect to Play"
            className="rounded-lg shadow-lg max-w-full h-auto mb-4 border border-border"
            style={{ maxWidth: 700 }}
          />
          <span className="text-muted-foreground text-sm font-body">Expect to play</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Ready to Advance Your Career?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body font-medium">
            Let our experienced team guide you through every step of your hockey journey
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="font-body font-semibold px-10 py-4 text-lg" asChild>
              <a href="https://college-hockey-family-advisor.appointedd.com/app/600d297a4bd55d1ee6392262" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
            <Button variant="outline" size="lg" className="font-body font-semibold px-10 py-4 text-lg" asChild>
              <a href="/contact">
                Contact Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default What_We_Do;
