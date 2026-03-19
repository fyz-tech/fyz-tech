import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Apply from "./pages/Apply";
import MarketingDetails from "./pages/MarketingDetails";
import Marketing from "./components/Marketing";
import Contact from "./components/Contact";
import Internship from "./components/Internship";
import CaseStudies from "./pages/CaseStudies";
import WebsiteService from "./components/WebsiteService";


export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      
      <Background />

      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Apply" element={<Apply />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/marketing-details" element={<MarketingDetails />} />
          <Route path="/website" element={<WebsiteService />} />
        </Routes>

      </div>
    </div>
  );
}