
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutSection = () => {
  const { ref: titleRef, animationClass: titleAnimation } = useScrollAnimation(0.2);
  const { ref: imageRef, animationClass: imageAnimation } = useScrollAnimation(0.3);
  const { ref: contentRef, animationClass: contentAnimation } = useScrollAnimation(0.2);
  const { ref: achievementsRef, animationClass: achievementsAnimation } = useScrollAnimation(0.1);

  const skills = [
    "Product Strategy", "Agile Methodologies", "Data Analytics", 
    "User Research", "Roadmap Planning", "Adtech"
  ];

  const achievements = [
    {
      metric: "4+",
      label: "Years in Product Management"
    },
    {
      metric: "15K",
      label: "Social Media Audience"
    },
    {
      metric: "250",
      label: "Newsletter Subscribers"
    },
    {
      metric: "Top 20%",
      label: "Podcast Viewership on Spotify"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className={`transition-all duration-1000 delay-200 ${imageAnimation}`}>
            <img 
              src="/lovable-uploads/926fa662-fe64-4c6a-a20b-2d315ae739f5.png" 
              alt="Product manager professional photo"
              className="rounded-lg shadow-2xl w-full object-contain"
            />
          </div>
          
          <div className="space-y-8">
            <div ref={titleRef} className={`transition-all duration-1000 ${titleAnimation}`}>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
            </div>
            
            <div ref={contentRef} className={`transition-all duration-1000 delay-300 ${contentAnimation}`}>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I'm a product manager with five years across Adtech, CRM, and Edtech, always landing in spaces where data does the heavy lifting. At Tassel, I built a graduate gifting platform that onboarded 50+ university partners and generated $350K+ in revenue. At Boostr, I automated an RFP workflow that cut media planning time in half. Before that, I was optimizing real-time bidding algorithms across 100 million bid opportunities at MediaMath.
                </p>
                <p>
                  I also write and podcast as F1APM, sharing job-search and networking strategies for international students and career changers breaking into product management. The community has grown to 12K with 1.5M impressions in the last six months.
                </p>
                <p>
                  What actually drives the work is wanting to understand why a system behaves the way it does before deciding what to build. That thread runs from HCI in grad school through every workflow redesign I've gravitated toward since. Design, psychology, and a CS background all feed into it.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={achievementsRef} className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-500 ${achievementsAnimation}`}>
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">
                  {achievement.metric}
                </div>
                <div className="text-gray-600 text-sm">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
