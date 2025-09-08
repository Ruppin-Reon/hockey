import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Mail, Phone } from "lucide-react";

const Staff = () => {
  const staffMembers = [
    { 
      name: "Darryl Wolski", 
      role: "Advisor", 
      email: "dwolski@chfahockey.com",
      description: "Experienced hockey advisor with extensive knowledge of collegiate pathways."
    },
    { 
      name: "Ladislav Kohn", 
      role: "Advisor", 
      email: "lkohn29@hotmail.com",
      description: "Strategic advisor specializing in European hockey opportunities."
    },
    { 
      name: "Mario Lamoureux", 
      role: "Advisor", 
      email: "mario.lamoureux9@gmail.com",
      description: "Hockey development specialist with focus on player advancement."
    },
    { 
      name: "Marcel Bacik", 
      role: "Advisor", 
      email: "hockey.mcorporation@gmail.com",
      description: "International hockey consultant with European league expertise."
    },
    { 
      name: "Peter Quenneville", 
      role: "Promotional Videos", 
      email: "pq.hockey@hotmail.com",
      description: "Professional video production for player promotion and scouting."
    },
    { 
      name: "Neil Manning", 
      role: "Video Coaching", 
      email: "neil@hockeyvideotraining.com",
      description: "Expert video analysis and coaching for all positions."
    },
    { 
      name: "Pete Fry", 
      role: "Mental Coaching", 
      email: "",
      description: "Sports psychology and mental performance coaching specialist."
    },
    { 
      name: "Tim Turk", 
      role: "CHFA Combine Camp", 
      email: "",
      description: "Director of College Hockey Family Advisor combine camps."
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
              Our Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-medium leading-relaxed">
            Meet the experienced professionals dedicated to advancing your hockey career. 
            Our team combines decades of hockey knowledge with proven success in player development.
          </p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-24 bg-gradient-subtle border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <CardTitle className="text-xl font-display font-semibold text-foreground">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  {member.email && (
                    <div className="flex items-center space-x-2 text-primary">
                      <Mail className="h-4 w-4" />
                      <a 
                        href={`mailto:${member.email}`} 
                        className="text-sm hover:underline font-body"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
