import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "../src/components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Pro_Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Company from "./pages/Company";
import CollegeJunior from "./pages/CollegeJunior";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Europe from "./pages/Europe";
import Contact from "./pages/Contact";
import Staff from "./pages/Staff";
import WhatWeDo from "./pages/What_We_Do";
import Testimonials from "./pages/Testimonials";
import FAQ_Rule from "./pages/FAQ_Rule";
import Branding_Marketing from "./pages/Branding_Marketing";
import NotFound from "./pages/NotFound";
import Pro_hockey from "./layouts/Pro_hockey";
import Ncaa_hockey from "./layouts/Ncaa_hockey";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          {/* <Navigation /> */}
          <Routes>
            <Route element={<Pro_hockey />}>
              <Route path="/" element={<Index />} />
              <Route path="/pro-hockey/company" element={<Company />} />
              <Route path="/pro-hockey/clients" element={<Clients />} />
              <Route path="/pro-hockey/europe" element={<Europe />} />
              {/* <Route path="/college-junior" element={<CollegeJunior />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/whatwedo" element={<WhatWeDo />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq/rule" element={<FAQ_Rule />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/branding_marketing" element={<Branding_Marketing />} /> */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
            
            <Route element={<Ncaa_hockey />}>
              <Route path="/" element={<Index />} />
              {/* <Route path="/pro-hockey/company" element={<Company />} />
              <Route path="/pro-hockey/clients" element={<Clients />} />
              <Route path="/pro-hockey/europe" element={<Europe />} />
              <Route path="/college-junior" element={<CollegeJunior />} /> */}
              <Route path="/ncaa-hockey/staff" element={<Staff />} />
              <Route path="/ncaa-hockey/whatwedo" element={<WhatWeDo />} />
              <Route path="/ncaa-hockey/testimonials" element={<Testimonials />} />
              <Route path="/ncaa-hockey/faq/rule" element={<FAQ_Rule />} />
              <Route path="/ncaa-hockey/contact" element={<Contact />} />
              <Route path="/ncaa-hockey/branding_marketing" element={<Branding_Marketing />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
