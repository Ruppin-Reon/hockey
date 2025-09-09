import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Logo2112 from "../assets/2112-logo.png";
import Prohockey from "../assets/brand1.jpeg";

const Ncaa_Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showingDropdown, setShowingDropdown] = useState(false);
  const dropdownTimeout = useRef(null);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Staff", path: "/ncaa-hockey/staff" },
    {
      name: "What We Do", 
      path: "/ncaa-hockey/whatwedo",
      dropdown: {
        columns: [
          {
            title: "What we do",
            links: [
              { name: "Core Services", path: "/whatwedo/services" },
              { name: "Video Coaching", path: "/whatwedo/video" },
              { name: "Where Can You Expect To Play", path: "/whatwedo/expect" },
            ],
          },
        ],
        image: {
          src: Prohockey,
          title: "Ncaa Hockey Collection",
          link: "/Ncaa-hockey/collection",
        },
      },
    },
    { name: "Testimonials", 
      path: "/ncaa-hockey/testimonials",
      dropdown: {
        columns: [
          {
            title: "Testimonials",
            links: [
              { name: "Coaches Testimonials", path: "/testimonials/coaches" },
              { name: "Parents Testimonials", path: "/testimonials/parents" },
            ],
          },
        ],
        image: {
          src: Prohockey,
          title: "Ncaa Hockey Collection",
          link: "/Ncaa-hockey/collection",
        },
      },
    },
    { 
      name: "FAQ", 
      path: "/ncaa-hockey/faq/rule",
      dropdown: {
        columns: [
          {
            title: "CHL NCAA Rule",
            links: [
              { name: "CHL Eligibility", path: "/faq/rule" },
              { name: "NHL And Professional Team", path: "/faq/data" },
            ],
          },
          {
            title: "NCAA Data",
            links: [
              { name: "Data", path: "/faq/rule" },
            ],
          },
          {
            title: "NCAA Eligibility",
            links: [
              { name: "Academics", path: "/faq/rule" },
              { name: "Amateurism", path: "/faq/data" },
              { name: "NCAA Resources", path: "/faq/eligibility" },
              { name: "The NCAA Eligibility Center", path: "/faq/eligibility" },
            ],
          },
        ],
        image: {
          src: Prohockey,
          title: "Ncaa Hockey Collection",
          link: "/Ncaa-hockey/collection",
        },
      },
    },
    // { name: "College/Junior", path: "/college-junior" },
    // { name: "Europe", path: "/europe" },
    { name: "Contact", path: "/ncaa-hockey/contact" },
    { name: "Branding & Marketing", path: "/ncaa-hockey/branding_marketing" },
  ];

  // Dropdown handlers with animation
  const handleDropdownEnter = (name) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
    setDropdownVisible(true);
    setShowingDropdown(true);
  };
  const handleDropdownLeave = (name) => {
    dropdownTimeout.current = setTimeout(() => {
      // Only hide if not hovering another dropdown
        setActiveDropdown(name);
        setDropdownVisible(false);
    }, 250); // match fade-out duration
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="container mx-auto relative px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo2112} alt="2112 Hockey Agency" className="h-8 w-8" />
            <span className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              2112 Hockey Agency
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="py-5"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                onMouseLeave={() => item.dropdown && handleDropdownLeave(item.name)}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>

                {item.dropdown && activeDropdown === item.name && showingDropdown && (
                  <div
                    className={`
                      absolute left-0 mt-4 w-screen max-w-5xl bg-white dark:bg-background shadow-xl rounded-xl p-8 z-50
                      ${dropdownVisible
                        ? "animate-dropdown-fade-in"
                        : "animate-dropdown-fade-out"
                      }
                      grid gap-8
                    `}
                    style={{
                      minWidth: "100%",
                      border: "1px solid var(--border)",
                      transition:
                        "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
                      pointerEvents: dropdownVisible ? "auto" : "none",
                      gridTemplateColumns: `repeat(${item.dropdown.columns.length + (item.dropdown.image ? 1 : 0)}, minmax(0, 1fr))`,
                    }}
                  >
                    {/* Render all columns except image */}
                    {item.dropdown.columns.map((col, i) => (
                      <div key={i}>
                        <h4 className="font-bold mb-2 border-b border-border pb-1">
                          {col.title}
                        </h4>
                        <ul className="space-y-2">
                          {col.links.map((link, idx) => (
                            <li key={idx}>
                              <Link
                                to={link.path}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {/* Always render image column last if present */}
                    {item.dropdown.image && (
                      <div className="flex flex-col items-end justify-center">
                        <Link to={item.dropdown.image.link}>
                          <img
                            src={item.dropdown.image.src}
                            alt={item.dropdown.image.title}
                            className="rounded-md mb-2 max-h-32 object-cover"
                          />
                        </Link>
                        <span className="text-sm text-center">
                          {item.dropdown.image.title}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Dropdown animation keyframes */}
      <style>
        {`
        @keyframes dropdown-fade-in {
          0% { opacity: 0; transform: translateY(16px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes dropdown-fade-out {
          0% { opacity: 1; transform: translateY(0);}
          100% { opacity: 0; transform: translateY(16px);}
        }
        .animate-dropdown-fade-in {
          animation: dropdown-fade-in 0.25s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .animate-dropdown-fade-out {
          animation: dropdown-fade-out 0.25s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        `}
      </style>
    </nav>
  );
};

export default Ncaa_Navigation;