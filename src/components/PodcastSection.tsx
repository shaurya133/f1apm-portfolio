
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const PodcastSection = () => {
  const { ref: titleRef, animationClass: titleAnimation } = useScrollAnimation(0.2);
  const { ref: imageRef, animationClass: imageAnimation } = useScrollAnimation(0.3);
  const { ref: contentRef, animationClass: contentAnimation } = useScrollAnimation(0.2);

  return (
    <section id="podcast" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleAnimation}`}>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            F1APM Podcast
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            So you're thinking about becoming a product manager? I'm here to make things clearer by chatting with PMs who share the inside scoop on how they made it happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className={`transition-all duration-1000 delay-200 ${imageAnimation}`}>
            <img 
              src="/lovable-uploads/d93997d7-9d04-4f76-8140-2edb0b9c409c.png" 
              alt="Professional podcast studio setup with microphone and headphones"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          
          <div ref={contentRef} className={`space-y-8 transition-all duration-1000 delay-400 ${contentAnimation}`}>
            <div>
              <Badge className="mb-4 text-sm px-3 py-1">Career-Focused Interviews</Badge>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Real Stories, Real Paths to Product Management
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                It's definitely not the shortest or clearest path, but the journey can be rewarding. Each product manager has a unique story to share, and no two paths are exactly the same. My goal is to help fast-track your journey from considering product management as a career to getting your first break.
              </p>

              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://creators.spotify.com/pod/profile/shaurya-sethi6/', '_blank')}
              >
                <Headphones className="mr-2 h-5 w-5" />
                Listen on Spotify
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-red-50 to-gray-50 border-red-200 transform hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-red-800">🎯 What You'll Discover</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">How PMs actually landed their first role</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Career transition strategies that work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Inside scoop from experienced product managers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Practical advice to fast-track your journey</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary">Career Stories</Badge>
                <Badge variant="secondary">PM Transitions</Badge>
                <Badge variant="secondary">Industry Insights</Badge>
                <Badge variant="secondary">Career Advice</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
