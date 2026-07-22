import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const metrics = [
  { target: 5, suffix: "+", label: "Years in Product" },
  { target: 15, suffix: "K+", label: "Community Audience" },
  { target: 50, suffix: "+", label: "University Partners" },
  { target: 350, suffix: "K+", label: "Gifts Raised for Graduates" },
];

const timeline = [
  {
    company: "MediaMath",
    years: "2020 – 2022",
    industry: "Adtech",
    color: "bg-blue-500",
    badge: "bg-blue-100 text-blue-800",
    win: "Optimized RTB algorithms across 100M bid opportunities",
  },
  {
    company: "Boostr",
    years: "2022 – 2023",
    industry: "CRM / Adtech",
    color: "bg-violet-500",
    badge: "bg-violet-100 text-violet-800",
    win: "Automated RFP workflow · cut media planning time in half",
  },
  {
    company: "Tassel",
    years: "2023 – Present",
    industry: "Edtech",
    color: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-800",
    win: "50+ university partners · $350K+ in gifts raised for graduates",
  },
  {
    company: "F1APM",
    years: "2022 – Present",
    industry: "Creator",
    color: "bg-amber-500",
    badge: "bg-amber-100 text-amber-800",
    win: "15K+ community · 1.5M impressions in the last 6 months",
  },
];

const CounterCard = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target);
  return (
    <Card ref={ref} className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
      <CardContent className="p-0">
        <div className="text-3xl font-bold text-primary mb-2">
          {count}{suffix}
        </div>
        <div className="text-gray-600 text-sm">{label}</div>
      </CardContent>
    </Card>
  );
};

export const AboutSection = () => {
  const { ref: titleRef, animationClass: titleAnimation } = useScrollAnimation(0.2);
  const { ref: imageRef, animationClass: imageAnimation } = useScrollAnimation(0.3);
  const { ref: contentRef, animationClass: contentAnimation } = useScrollAnimation(0.2);
  const { ref: timelineRef, animationClass: timelineAnimation } = useScrollAnimation(0.1);
  const { ref: achievementsRef, animationClass: achievementsAnimation } = useScrollAnimation(0.1);

  const skills = [
    "Product Strategy", "Agile Methodologies", "Data Analytics",
    "User Research", "Roadmap Planning", "Adtech"
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
                  I also write and podcast as F1APM, sharing job-search and networking strategies for international students and career changers breaking into product management. The community has grown to 15K+ with 1.5M impressions in the last six months.
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

        {/* Career Timeline */}
        <div ref={timelineRef} className={`mt-20 transition-all duration-1000 ${timelineAnimation}`}>
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-12 text-center">Career Arc</h3>
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-3 lg:text-center group">
                  {/* Dot */}
                  <div className={`relative z-10 w-10 h-10 rounded-full ${item.color} flex-shrink-0 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  {/* Content */}
                  <div className="lg:mt-1">
                    <p className="font-bold text-gray-900 text-lg leading-tight">{item.company}</p>
                    <p className="text-gray-400 text-xs mb-2">{item.years}</p>
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${item.badge}`}>
                      {item.industry}
                    </span>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.win}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated metric counters */}
        <div ref={achievementsRef} className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-500 ${achievementsAnimation}`}>
          {metrics.map((m, i) => (
            <CounterCard key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};
