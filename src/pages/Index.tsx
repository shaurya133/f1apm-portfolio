
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PodcastSection } from "@/components/PodcastSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PodcastSection />
        <NewsletterSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
