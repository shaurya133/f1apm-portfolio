import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const { ref: titleRef, animationClass: titleAnimation } = useScrollAnimation(0.2);
  const { ref: formRef, animationClass: formAnimation } = useScrollAnimation(0.3);
  const { ref: cardsRef, animationClass: cardsAnimation } = useScrollAnimation(0.2);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open('https://shauryas.substack.com/', '_blank');
      toast({
        title: "Redirecting to Substack!",
        description: "You'll be taken to the F1APM newsletter to subscribe.",
      });
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleAnimation}`}>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            F1APM Newsletter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm Shaurya, a product manager at an Ad-tech startup helping aspiring PMs make the switch! 
            Weekly actionable advice to fast-track your journey from discovering PM to landing your first role.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={formRef} className={`transition-all duration-1000 delay-200 ${formAnimation}`}>
            <Card className="gradient-bg text-white p-8 transform hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <Badge className="bg-white text-gray-900 w-fit mb-4">For Aspiring PMs</Badge>
                <CardTitle className="text-3xl font-bold mb-4">
                  From Discovery to Your First PM Role
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  After talking to 100+ PMs, interviewing with 30+ companies, and navigating my own PM journey, 
                  I'm sharing the insights that matter. No fluff, just actionable advice.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Career discovery & validation strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Networking tips that actually work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Product breakdowns & mental models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Job search motivation & guidance</span>
                  </div>
                </div>
                
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-gray-900"
                    required
                  />
                  <Button type="submit" className="w-full bg-white text-gray-900 hover:bg-gray-100">
                    Subscribe on Substack
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div ref={cardsRef} className={`space-y-8 transition-all duration-1000 delay-400 ${cardsAnimation}`}>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why This Newsletter?</h3>
              
              <Card className="mb-6 border-blue-200 bg-blue-50 transform hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <Badge className="bg-blue-600 text-white w-fit mb-2">Real Experience</Badge>
                  <CardTitle className="text-xl text-blue-800">
                    No Linear Path to PM Success
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700 text-base">
                    I've broken into PM as a new grad, through internal transitions, and by leveraging 
                    domain expertise. Each path taught me valuable lessons I'm sharing with you.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="mb-6 border-purple-200 bg-purple-50 transform hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <Badge className="bg-purple-600 text-white w-fit mb-2">Perfect For</Badge>
                  <CardTitle className="text-xl text-purple-800">
                    International Students & Aspiring PMs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-700 text-base">
                    Whether you're an F1 student (see what I did there? 🎓), career changer, or 
                    curious about PM - this newsletter will fast-track your journey.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50 transform hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <Badge className="bg-green-600 text-white w-fit mb-2">Weekly Value</Badge>
                  <CardTitle className="text-xl text-green-800">
                    Actionable Insights, Zero Fluff
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-700 text-base">
                    Having access to your inbox is an honor I take seriously. Expect thoughtful, 
                    actionable advice that moves you closer to your PM goals every week.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest font-medium">Already curious?</p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://shauryas.substack.com/', '_blank')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Read the Newsletter
            <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
          </Button>
          <p className="text-gray-400 text-sm mt-3">Opens on Substack · Free to read</p>
        </div>
      </div>
    </section>
  );
};
