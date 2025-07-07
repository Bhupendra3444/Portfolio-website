import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wand2, Sparkles, Star } from "lucide-react";
import hogwartsHero from "@/assets/hogwarts-hero.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hogwartsHero})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Floating magical elements */}
      <div className="absolute top-20 left-10 magical-float">
        <Wand2 className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-40 right-20 magical-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-40 left-20 magical-float" style={{ animationDelay: '2s' }}>
        <Star className="w-7 h-7 text-primary" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <Card className="bg-card/90 backdrop-blur-sm p-8 mystical-shadow magical-fade-in">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Wand2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Magical Portfolio</span>
            </div>
          </div>
          
          <h1 className="font-magical text-5xl md:text-7xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Bhupendra Upadhyay
            </span>
          </h1>
          
          <p className="font-parchment text-xl md:text-2xl text-muted-foreground mb-4">
            Wizard of Code & Keeper of Digital Magic
          </p>
          
          <p className="font-parchment text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            Software Engineer crafting enchanting digital experiences with React spells, Node.js potions, and full-stack sorcery. 
            Currently pursuing Computer Science at KIET while mastering the mystical arts of web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="enchanted-glow"
              onClick={() => scrollToSection('magical-abilities')}
            >
              <Wand2 className="w-4 h-4 mr-2" />
              Explore My Magic
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('owl-post')}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Send Owl Post
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};