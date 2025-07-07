import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Smartphone, Wand2 } from "lucide-react";

const magicalAbilities = [
  {
    category: "Frontend Sorcery",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "React.js Enchantments", level: 90  },
      { name: "JavaScript Spells", level: 88  },
      { name: "HTML & CSS Magic", level: 92  },
      { name: "Material-UI Charms", level: 85 },
    ]
  },
  {
    category: "Backend Alchemy",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js Potions", level: 85  },
      { name: "Express.js Spells", level: 88  },
      { name: "RESTful API Craft", level: 90  },
      { name: "OAuth 2.0 Protection", level: 80 },
    ]
  },
  {
    category: "Database Divination",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "MongoDB Mysteries", level: 85  },
      { name: "SQLite Secrets", level: 80 },
      { name: "Firebase Flames", level: 88},
      { name: "Query Optimization", level: 85 },
    ]
  },
  {
    category: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "JavaScript Mastery", level: 90  },
      { name: "Python Serpents", level: 80 },
      { name: "C/C++ Foundations", level: 75  },
      { name: "Git Version Control", level: 88 },
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="magical-abilities" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Wand2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Magical Abilities</span>
          </div>
          <h2 className="font-magical text-4xl md:text-5xl font-bold text-foreground mb-4">
            Spells & Enchantments
          </h2>
          <p className="font-parchment text-lg text-muted-foreground max-w-2xl mx-auto">
            Years of practice in the mystical arts of web development have granted me these magical abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {magicalAbilities.map((category, index) => (
            <Card 
              key={category.category} 
              className="bg-card/80 backdrop-blur-sm mystical-shadow magical-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-magical text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-parchment font-medium text-foreground">
                        {skill.name}
                      </span>
                      
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                    <div className="text-right text-xs text-muted-foreground">
                      {skill.level}% Mastery
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};