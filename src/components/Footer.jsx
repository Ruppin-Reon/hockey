import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo2112 from "../assets/2112-logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/2112hockey", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/2112hockey", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com/2112hockeyagency", label: "Facebook" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/darryl-wolski", label: "LinkedIn" }
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Pro Hockey", href: "/pro-hockey" },
        { name: "College & Junior", href: "/college-junior" },
        { name: "Play in Europe", href: "/europe" },
        { name: "Career Consulting", href: "/services" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Current Clients", href: "/clients" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "FAQ", href: "/faq" },
        { name: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-card border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={Logo2112} alt="2112 Hockey Agency" className="h-10 w-10" />
              <span className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                2112 Hockey Agency
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Elite hockey representation connecting players to opportunities worldwide. 
              Professional guidance from junior leagues to international contracts.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:dwolski@2112hockeyagency.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  dwolski@2112hockeyagency.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Contact via email for consultation
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors group"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-background/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>© 2024 2112 Hockey Agency. All rights reserved.</p>
              <p className="mt-1">
                Owned and Operated by{" "}
                <span className="text-primary font-medium">2112 Hockey Group</span>
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
