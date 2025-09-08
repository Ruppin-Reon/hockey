import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import { Send, Mail, Phone } from "lucide-react";

const ContactForm = ({ type = "general", title, description }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    position: "",
    eliteProspectsLink: "",
    currentAgent: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        position: "",
        eliteProspectsLink: "",
        currentAgent: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-display font-semibold text-foreground">
          {title || (type === "player" ? "Player Registration" : "Contact Us")}
        </CardTitle>
        <CardDescription className="text-muted-foreground font-body">
          {description || (type === "player"
            ? "Tell us about yourself and we'll get in touch to discuss opportunities"
            : "Get in touch with our team for any inquiries"
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6 font-body">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            {type === "player" && (
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  placeholder="18"
                  min="15"
                  max="45"
                />
              </div>
            )}
          </div>

          {type === "player" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Select onValueChange={(value) => handleInputChange("position", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="left-wing">Left Wing</SelectItem>
                    <SelectItem value="right-wing">Right Wing</SelectItem>
                    <SelectItem value="center">Center</SelectItem>
                    <SelectItem value="left-defense">Left Defense</SelectItem>
                    <SelectItem value="right-defense">Right Defense</SelectItem>
                    <SelectItem value="goalie">Goalie</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eliteProspects">Elite Prospects Link</Label>
                <Input
                  id="eliteProspects"
                  value={formData.eliteProspectsLink}
                  onChange={(e) => handleInputChange("eliteProspectsLink", e.target.value)}
                  placeholder="https://www.eliteprospects.com/player/..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentAgent">Current Agent/Advisor</Label>
                <Input
                  id="currentAgent"
                  value={formData.currentAgent}
                  onChange={(e) => handleInputChange("currentAgent", e.target.value)}
                  placeholder="Leave blank if none"
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">
              {type === "player" ? "Additional Information" : "Message"}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder={type === "player"
                ? "Tell us about your hockey background, goals, and any specific questions..."
                : "How can we help you?"
              }
              rows={5}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-body font-semibold px-10 py-4 text-lg"
            size="lg"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground font-body">dwolski@2112hockeyagency.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground font-body">Contact via email for phone</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
