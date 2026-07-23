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
              src="/F1APM NEW LOGO.png"
              alt="F1APM Podcast cover art"
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

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary">Career Stories</Badge>
              <Badge variant="secondary">PM Transitions</Badge>
              <Badge variant="secondary">Industry Insights</Badge>
              <Badge variant="secondary">Career Advice</Badge>
            </div>
          </div>
        </div>

        {/* Full-width episode embeds */}
        <div className="mt-10">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-3">Featured Episodes</p>
          <div className="grid grid-cols-2 gap-4">
            <iframe
              src="https://anchor.fm/shaurya-sethi6/embed/episodes/Leveraging-Domain-Knowledge-to-Break-into-PM-with-Rajas-Kshirsagar-e1p6cu2"
              height="102"
              width="100%"
              style={{ border: 0, borderRadius: "8px" }}
              title="Leveraging Domain Knowledge to Break into PM"
            />
            <iframe
              src="https://anchor.fm/shaurya-sethi6/embed/episodes/Getting-multiple-PM-Internships-and-a-return-offer-with-Deekshit-e1ro7v1"
              height="102"
              width="100%"
              style={{ border: 0, borderRadius: "8px" }}
              title="Getting multiple PM Internships and a return offer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
