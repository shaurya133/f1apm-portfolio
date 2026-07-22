
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProjectsSection = () => {
  const { ref: titleRef, animationClass: titleAnimation } = useScrollAnimation(0.2);
  const { ref: projectsRef, animationClass: projectsAnimation } = useScrollAnimation(0.1);

  const projects = [
    {
      title: "TouchBase",
      description: "Never lose track of meaningful connections again. TouchBase helps you store contacts with context, set follow-up reminders, and track conversation history. Built with Lovable.dev in just two days - transforming those casual 'let's stay in touch' moments into lasting relationships.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Lovable.dev", "Local Storage"],
      status: "Live",
      type: "Personal CRM",
      link: "https://touchbase.lovable.app/"
    },
    {
      title: "Dining Concierge Chatbot",
      description: "Skip the endless restaurant review scrolling. Chat with this intelligent bot about your preferences and get personalized restaurant recommendations instantly. Built with serverless AWS architecture, it learns from your conversations to deliver increasingly accurate suggestions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["AWS Lambda", "DynamoDB", "API Gateway", "Lex", "SES"],
      status: "Open Source",
      type: "Chatbot",
      link: "https://github.com/shaurya133/Dining_Concierge"
    },
    {
      title: "NYU All in a Day's Work",
      description: "Breaking into product management as an international student - sharing insights on navigating the PM career path, building relevant skills, and overcoming unique challenges faced by international students in the US tech industry.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Product Management", "Career Advice", "International Students"],
      status: "Live",
      type: "Podcast",
      link: "https://open.spotify.com/episode/2utrdYi8L6WlY580LRNNdR?si=bhi5r1zFQMaORv_-6GgGVA"
    },
    {
      title: "PICT IEEE Podcast",
      description: "Master's in Computer Science from NYU - discussing the journey of pursuing graduate studies in CS, covering application process, coursework, research opportunities, and career prospects for international students.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Computer Science", "Graduate Studies", "NYU"],
      status: "Live",
      type: "Podcast",
      link: "https://www.youtube.com/watch?v=xFLM7eb4XeY&t=1685s"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800";
      case "Beta": return "bg-blue-100 text-blue-800";
      case "Development": return "bg-yellow-100 text-yellow-800";
      case "Open Source": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleProjectClick = (project: any) => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <section id="work" className="pt-10 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleAnimation}`}>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some side projects that I'm happy to showcase, from interesting apps that I've built to podcast appearances that I've done.
          </p>
        </div>

        <div ref={projectsRef} className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${projectsAnimation}`}>
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
