import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Radio, 
  Video, 
  Megaphone, 
  TrendingUp,
  Play,
  ExternalLink,
  Star,
  Users
} from "lucide-react";

const Branding_Marketing = () => {
  const brandingServices = [
    {
      icon: <Radio className="h-12 w-12 text-primary" />,
      title: "XM Radio Commercials",
      description: "Professional radio advertising to promote our players and services across major sports networks.",
      url: "https://www.youtube.com/watch?v=7ughrG3JWms",
      type: "Audio Marketing"
    },
    {
      icon: <Video className="h-12 w-12 text-primary" />,
      title: "Player Success Stories",
      description: "Compelling video content showcasing player journeys and achievements through our programs.",
      url: "https://www.youtube.com/watch?v=7wHf5UExkYE&t=4s",
      type: "Video Content"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight">
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Branding & Marketing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-medium leading-relaxed">
            Professional marketing and branding services that get players noticed. We combine traditional media with modern digital strategies for maximum impact.
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Featured Content */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Megaphone className="h-8 w-8 text-primary" />
                  <h2 className="text-4xl font-bold">Featured Marketing Content</h2>
                </div>
                <p className="text-xl text-muted-foreground">
                  Examples of our professional marketing and promotional work
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {brandingServices.map((service, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        {service.icon}
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <Badge variant="secondary" className="mt-2">{service.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button asChild className="w-full">
                        <a href={service.url} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-2" />
                          Watch Example
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Branding_Marketing;
