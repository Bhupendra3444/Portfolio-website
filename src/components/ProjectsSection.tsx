import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const spellsAndPotions = [
  {
    title: "An Crypt - Cryptocurrency Tracker",
    description: "A mystical cryptocurrency tracking application built with React.js and Material-UI, achieving 95% user satisfaction. Features real-time market data and personalized watchlists for 500+ users.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=250&fit=crop",
    technologies: ["React.js", "Material-UI", "Firebase", "Cryptocurrency APIs"],
    achievements: [
      "95% user satisfaction rate",
      "40% increase in app usage",
      "500+ users with personalized watchlists"
    ],
    liveUrl: "https://ancrypt.onrender.com/",
    githubUrl: "https://github.com/Bhupendra3444/An-Crypt",
    type: "Web Application"
  },
  {
    title: "KIET MUN Website",
    description: "A responsive Model United Nations website crafted with HTML, CSS, and JavaScript magic. Features dynamic updates and countdown timers, achieving 30% increase in event registrations.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    achievements: [
      "30% increase in event registrations",
      "25% improvement in user engagement",
      "50% faster load times"
    ],
    liveUrl: "https://kiet-mun.vercel.app/",
    githubUrl: "https://github.com/Bhupendra3444/KIET-MUN",
    type: "KIETMUN Website"
  },
  {
    title: "Student Feedback System",
    description: "A full-stack student feedback portal built with PHP, MySQL, and CSS, enabling students to securely submit course feedback online with admin login and session-based access control.",
    image: "https://images.unsplash.com/photo-1584697964154-9433b8020f9b?w=400&h=250&fit=crop",
    technologies: ["PHP", "MySQL", "CSS", "XAMPP"],
    achievements: [
      "Secure session-managed admin login system",
      "Deployed on localhost using Apache (XAMPP)",
      "User-friendly feedback submission interface"
    ],
    liveUrl: "#", // Localhost project — no public live URL
    githubUrl: "https://github.com/Bhupendra3444/Feedback-System",
    type: "Feedback System"
  },
  {
    title: "Harry Potter-Themed Portfolio Website",
    description: "A magical fullstack portfolio website using React.js, shadcn/ui, Tailwind CSS, and Lucide Icons to showcase projects, skills, and experience in an immersive Harry Potter theme.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "shadcn/ui", "Lucide Icons"],
    achievements: [
      "100% Lighthouse scores in performance, accessibility, SEO",
      "40% boost in recruiter interactions",
      "Smooth navigation with modular reusable components"
    ],
    liveUrl: "https://portfolio-website-bhupendra-upadhyays-projects.vercel.app/",
    githubUrl: "https://github.com/Bhupendra3444/Portfolio-website",
    type: "Portfolio Website"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="spells-potions" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Spells & Potions</span>
          </div>
          <h2 className="font-magical text-4xl md:text-5xl font-bold text-foreground mb-4">
            Magical Creations
          </h2>
          <p className="font-parchment text-lg text-muted-foreground max-w-2xl mx-auto">
            Behold the digital artifacts I've conjured through careful study and powerful incantations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spellsAndPotions.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card/80 backdrop-blur-sm mystical-shadow hover:shadow-magical transition-all duration-300 group magical-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
                  {project.type}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="font-magical text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="font-parchment text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full" disabled={project.liveUrl === "#"}>
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Magic
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <Github className="w-3 h-3 mr-2" />
                      Spellbook
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
