import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Star, Trophy, Quote } from "lucide-react";

const Clients = () => {
  const activeClients = [
    { name: "Alexander Petrov", position: "Center", team: "KHL Moscow", league: "KHL" },
    { name: "Marcus Johnson", position: "Defense", team: "Springfield Thunderbirds", league: "AHL" },
    { name: "Erik Lindqvist", position: "Goalie", team: "Färjestad BK", league: "SHL" },
    { name: "Jake Mitchell", position: "Right Wing", team: "Toledo Walleye", league: "ECHL" },
    { name: "Pavel Novak", position: "Left Wing", team: "HC Dynamo Pardubice", league: "Czech Extraliga" }
  ];

  const retiredClients = [
    { name: "Robert Davis", position: "Defense", career: "NHL (15 years)", teams: "Toronto Maple Leafs, Boston Bruins" },
    { name: "Michael Thompson", position: "Center", career: "AHL/NHL (12 years)", teams: "Various NHL teams" },
    { name: "Andreas Mueller", position: "Goalie", career: "European Leagues (18 years)", teams: "DEL, SHL, NLA" }
  ];

  const testimonials = [
    {
      name: "Mike Hedden",
      quote: "Working with 2112 Hockey Agency transformed my career. Their guidance helped me secure opportunities I never thought possible.",
      position: "Former Professional Player"
    },
    {
      name: "Sarah Mitchell",
      quote: "As a parent, I appreciated their transparent communication and dedication to my son's development both on and off the ice.",
      position: "Parent of Current Client"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight">
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Our Clients
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-medium leading-relaxed">
            Representing elite hockey talent across professional leagues worldwide. See the success stories of players who trusted us with their careers.
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Client Tabs */}
          <section className="pb-24 bg-background">
            <div className="container mx-auto px-6">
              <Tabs defaultValue="active" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
                  <TabsTrigger value="active">Active Clients</TabsTrigger>
                  <TabsTrigger value="retired">Alumni</TabsTrigger>
                  <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                </TabsList>

                <TabsContent value="active">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Current Active Clients</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body font-medium">
                      Professional players currently under representation across various leagues
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeClients.map((client, index) => (
                      <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                        <CardHeader>
                          <div className="flex items-center space-x-2 mb-2">
                            <Trophy className="h-5 w-5 text-primary" />
                            <Badge variant="secondary">{client.league}</Badge>
                          </div>
                          <CardTitle className="text-xl">{client.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-muted-foreground">
                            <span className="font-medium">Position:</span> {client.position}
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Team:</span> {client.team}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <p className="text-muted-foreground font-body mb-6">
                      This represents a sample of our active roster. We represent 150+ professional players worldwide.
                    </p>
                    <Button size="lg" className="font-body font-semibold px-10 py-4 text-lg">Contact Us About Representation</Button>
                  </div>
                </TabsContent>

                <TabsContent value="retired">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Retired Client Alumni</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body font-medium">
                      Celebrating successful careers of players who achieved their professional hockey dreams
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {retiredClients.map((client, index) => (
                      <Card key={index} className="bg-gradient-card border-border/50">
                        <CardHeader>
                          <div className="flex items-center space-x-2 mb-2">
                            <Star className="h-5 w-5 text-primary" />
                            <Badge variant="outline">Alumni</Badge>
                          </div>
                          <CardTitle className="text-xl">{client.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-muted-foreground">
                            <span className="font-medium">Position:</span> {client.position}
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Career:</span> {client.career}
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Teams:</span> {client.teams}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="testimonials">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Client Testimonials</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body font-medium">
                      Hear directly from players and families about their experience with 2112 Hockey Agency
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                      <Card key={index} className="bg-gradient-card border-border/50">
                        <CardContent className="p-8">
                          <Quote className="h-8 w-8 text-primary mb-4" />
                          <blockquote className="text-lg italic mb-6 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="border-t border-border/50 pt-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Video Testimonials */}
                  <div className="text-center">
                    <h3 className="text-2xl font-display font-bold mb-6 text-navy-deep">Video Testimonials</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <Card className="bg-gradient-card border-border/50">
                        <CardContent className="p-6 text-center">
                          <h4 className="text-xl font-semibold mb-4">Mike Hedden Story</h4>
                          <Button asChild variant="outline" className="w-full">
                            <a href="https://www.youtube.com/watch?v=7wHf5UExkYE&t=4s" target="_blank" rel="noopener noreferrer">
                              Watch Video
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-card border-border/50">
                        <CardContent className="p-6 text-center">
                          <h4 className="text-xl font-semibold mb-4">XM Radio Commercial</h4>
                          <Button asChild variant="outline" className="w-full">
                            <a href="https://www.youtube.com/watch?v=7ughrG3JWms" target="_blank" rel="noopener noreferrer">
                              Listen Now
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Clients;
