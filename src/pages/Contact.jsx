import ContactForm from "../components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "dwolski@2112hockeyagency.com",
      description: "Primary contact for all inquiries"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Consultation",
      details: "Available by appointment",
      description: "Schedule via email for phone discussions"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We respond to all inquiries promptly"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Global Reach",
      details: "25+ Countries",
      description: "Representing players worldwide"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      {/* <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-body font-medium">
            Ready to take the next step in your hockey career? 
            Get in touch with our professional representation team.
          </p>
        </div>
      </section> */}

      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight">
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-medium leading-relaxed">
            Ready to take the next step in your hockey career? 
            Get in touch with our professional representation team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 text-center hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl font-display font-semibold">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary font-body mb-2">{info.details}</p>
                  <p className="text-sm text-muted-foreground font-body">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Forms */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Player Registration */}
            <div>
              <ContactForm 
                type="player"
                title="Player Registration"
                description="Are you a hockey player looking for representation? Tell us about yourself and your goals."
              />
            </div>

            {/* General Inquiries */}
            <div>
              <ContactForm 
                type="general"
                title="General Inquiries"
                description="Have questions about our services, want to discuss opportunities, or need more information?"
              />
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-navy-deep">Other Ways to Connect</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Work With Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Interested in joining our team? Send your resume and CV to get started.
                  </p>
                  <p className="text-sm text-primary">
                    Careers: dwolski@2112hockeyagency.com
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Media Inquiries</h3>
                  <p className="text-muted-foreground mb-6">
                    Press, interviews, and media requests are welcome. Contact our main office.
                  </p>
                  <p className="text-sm text-primary">
                    Media: dwolski@2112hockeyagency.com
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Partnership Opportunities</h3>
                  <p className="text-muted-foreground mb-6">
                    Teams, leagues, and organizations interested in partnerships.
                  </p>
                  <p className="text-sm text-primary">
                    Partners: dwolski@2112hockeyagency.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Hours */}
          <div className="mt-16 text-center bg-gradient-card rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-navy-deep">Office Information</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM (EST)<br/>
                  Saturday: By appointment<br/>
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
                <p className="text-muted-foreground">
                  For urgent player matters during games or critical situations, 
                  please email with "URGENT" in the subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
