import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Trophy, Users, Wand2 } from "lucide-react";

const educationData = {
  degree: "Bachelor of Technology",
  institution: "KIET Group of Institutions (AKTU)",
  field: "Computer Science and Information Technology",
  duration: "2022-26",
  percentage: "72% (Till 4th Semester)"
};

const experienceData = [
  {
    title: "Software Engineer",
    company: "Brilliantryx.Solutions",
    location: "Ghaziabad",
    duration: "Nov 2024 – Dec 2024",
    achievements: [
      "Optimized website performance, reducing load times by 40% (from 5s to 2s)",
      "Improved user experience leading to 25% increase in user engagement",
      "Redesigned UI components ensuring 100% responsiveness across devices"
    ]
  },
  {
    title: "Backend Intern",
    company: "PMA Solutions Pvt. Ltd.",
    location: "Remote",
    duration: "Feb 2024 – Oct 2024",
    achievements: [
      "Developed and optimized RESTful APIs, reducing response times by 30%",
      "Improved query performance by 50% through indexing and caching strategies",
      "Deployed containerized applications using Docker, reducing deployment time by 20%",
      "Integrated OAuth 2.0 for secure authentication"
    ]
  }
];

const leadershipData = [
  {
    role: "Ex-President",
    organization: "KIETMUN Society",
    description: "Led the Model United Nations society, organizing events and managing team activities"
  },
  {
    role: "Volunteer",
    organization: "Smart India Hackathon (SIH) 24",
    description: "Supported event logistics and coordination at college's Nodal Centre"
  },
  {
    role: "Member",
    organization: "GDSC KIET",
    description: "Active member of Google Developer Student Club"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About the Wizard</span>
          </div>
          <h2 className="font-magical text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Journey of Magic
          </h2>
          <p className="font-parchment text-lg text-muted-foreground max-w-2xl mx-auto">
            From the halls of KIET to the mystical realm of software development, 
            here's the tale of my magical journey through code and creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="bg-card/80 backdrop-blur-sm mystical-shadow magical-fade-in">
            <CardHeader>
              <CardTitle className="font-magical text-xl flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                Magical Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-parchment font-semibold text-lg text-foreground">
                  {educationData.degree}
                </h3>
                <p className="text-primary font-medium">{educationData.institution}</p>
                <p className="text-muted-foreground">{educationData.field}</p>
                <div className="flex justify-between items-center mt-2">
                  <Badge variant="outline">{educationData.duration}</Badge>
                  <Badge variant="secondary">{educationData.percentage}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership */}
          <Card className="bg-card/80 backdrop-blur-sm mystical-shadow magical-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="font-magical text-xl flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                Leadership & Community
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {leadershipData.map((item, index) => (
                <div key={index} className="pb-3 border-b border-border last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-2 mb-1">
                    <Trophy className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-parchment font-semibold text-foreground">{item.role}</h4>
                      <p className="text-primary text-sm font-medium">{item.organization}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <h3 className="font-magical text-3xl font-bold text-center text-foreground mb-8">
            <Wand2 className="w-8 h-8 text-primary inline mr-3" />
            Magical Experience
          </h3>
          
          {experienceData.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm mystical-shadow magical-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader>
                <CardTitle className="font-magical text-xl flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company} - {exp.location}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0">
                        {exp.duration}
                      </Badge>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2">
                      <span className="text-accent mt-1 flex-shrink-0">✨</span>
                      <span className="font-parchment text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};