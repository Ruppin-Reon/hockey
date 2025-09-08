import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import ContactForm from "../components/ContactForm";
import { GraduationCap, Users, Video, BookOpen } from "lucide-react";

const CollegeJunior = () => {
  const staff = [
    { name: "Darryl Wolski", role: "Advisor", email: "dwolski@chfahockey.com" },
    { name: "Ladislav Kohn", role: "Advisor", email: "lkohn29@hotmail.com" },
    { name: "Mario Lamoureux", role: "Advisor", email: "mario.lamoureux9@gmail.com" },
    { name: "Marcel Bacik", role: "Advisor", email: "hockey.mcorporation@gmail.com" },
    { name: "Peter Quenneville", role: "Promotional Videos", email: "pq.hockey@hotmail.com" },
    { name: "Neil Manning", role: "Video Coaching", email: "neil@hockeyvideotraining.com" },
    { name: "Pete Fry", role: "Mental Coaching", email: "" },
    { name: "Tim Turk", role: "CHFA Combine Camp", email: "" }
  ];

  const services = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Camp Selection",
      description: "Strategic camp selection across North America. We secure invites and help you choose the best opportunities for your development and exposure."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Name, Image, Likeness (NIL)",
      description: "Navigate the complex NIL landscape. Our team stays current with regulations and helps maximize your earning potential within compliance."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Education Specialist",
      description: "Krista Anderson guides families through NCAA and USPORTS eligibility requirements, ensuring academic and athletic success."
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Video Coaching",
      description: "Professional video analysis and coaching for goalies, defense, and forwards. Improve your game with expert feedback."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              College Hockey
            </span>
            <br />
            Family Advisor
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-body font-medium mb-8">
            Navigate CHL, NCAA D1 & D3, USPORTS, Junior, Prep, and ACHA with expert guidance. 
            Your pathway to collegiate hockey success starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="font-body font-semibold px-10 py-4 text-lg" asChild>
              <a href="https://college-hockey-family-advisor.appointedd.com/app/600d297a4bd55d1ee6392262" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
            <Button variant="outline" size="lg" className="font-body font-semibold px-10 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Our Goal</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-body font-medium">
              Without a doubt, our number one goal is for our clients to keep moving forward. 
              After playing college hockey, we want to help players transition to professional 
              hockey in North America and Europe.
            </p>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-navy-deep">What We Do</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      {service.icon}
                      <CardTitle className="text-xl font-display font-semibold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Coaching Samples */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-navy-deep">Video Coaching Samples</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-4">Goalie Coaching</h4>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.youtube.com/watch?v=59Pa_XKmlVU" target="_blank" rel="noopener noreferrer">
                      Watch Sample
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-4">Defense Coaching</h4>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.youtube.com/watch?v=zrEisXRbQ8w" target="_blank" rel="noopener noreferrer">
                      Watch Sample
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-4">Forward Coaching</h4>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.youtube.com/watch?v=JUUnXdfNCCo" target="_blank" rel="noopener noreferrer">
                      Watch Sample
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Staff */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-navy-deep">Our Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staff.map((member, index) => (
                <Card key={index} className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <h4 className="font-display font-semibold text-lg mb-2">{member.name}</h4>
                    <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                    {member.email && (
                      <p className="text-sm text-primary font-body">
                        <a href={`mailto:${member.email}`} className="hover:underline">
                          {member.email}
                        </a>
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Ready to Start Your Journey?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body font-medium">
            Book a free consultation to discuss your hockey goals and pathway options
          </p>
          <Button size="lg" asChild className="mb-8 font-body font-semibold px-10 py-4 text-lg">
            <a href="https://college-hockey-family-advisor.appointedd.com/app/600d297a4bd55d1ee6392262" target="_blank" rel="noopener noreferrer">
              Book Free Call Now
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <ContactForm 
            type="player"
            title="Submit Your Information"
            description="Tell us about your hockey background and goals"
          />
        </div>
      </section>
    </div>
  );
};

export default CollegeJunior;