import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/About/AboutSection";
import EyeshadowSection from "./components/Eyeshadow/EyeshadowSection";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
import FAQSection from "./components/FAQ/FAQSection";
import FindMoreSection from "./components/FindMore/FindMoreSection";
import HeroSlider from "./components/Hero/HeroSlider";
import Countdown from "./components/Countdown/Countdown";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <EyeshadowSection />
        <TestimonialsSection />
        <FAQSection />
        <Countdown />
        <FindMoreSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
