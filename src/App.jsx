import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "../src/components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pro-hockey/company" element={<Company />} />
            <Route path="/pro-hockey/clients" element={<Clients />} />
            <Route path="/pro-hockey/europe" element={<Europe />} />
            <Route path="/college-junior" element={<CollegeJunior />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq/rule" element={<FAQ_Rule />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/branding_marketing" element={<Branding_Marketing />} />
            {/* <Route path="/what-we-do" element={<WhatWeDo />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
