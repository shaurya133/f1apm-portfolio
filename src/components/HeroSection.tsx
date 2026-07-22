
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const HeroSection = () => {
  const { ref: heroRef, animationClass: heroAnimation } = useScrollAnimation(0.2);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div ref={heroRef} className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${heroAnimation}`}>
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          A Curious
          <span className="block text-4xl md:text-6xl mt-2 text-white/90">
            Product Manager
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto leading-relaxed text-white/90">
          Curiosity takes you places conventional education cannot.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => scrollToSection('podcast')}
          >
            Explore My Work
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-transparent px-10 py-4 text-lg font-medium transition-all duration-300 underline-offset-4 hover:underline"
            onClick={() => scrollToSection('about')}
          >
            About Me
          </Button>
        </div>
      </div>
      
      {/* Name in bottom right */}
      <div className="absolute bottom-8 right-8 z-10">
        <p className="text-white/80 text-lg font-medium">Shaurya Sethi</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};
