import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2, Github, Linkedin, Heart } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-12 px-6 bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-card/80 backdrop-blur-sm mystical-shadow p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Wand2 className="w-6 h-6 text-primary magical-float" />
                <span className="font-magical text-xl font-bold text-foreground">
                  Magical Portfolio
                </span>
              </div>
              <p className="font-parchment text-muted-foreground">
                Crafting digital magic with modern web technologies. 
                Every project is a new adventure in the realm of code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-magical text-lg font-semibold text-foreground">
                Quick Spells
              </h3>
              <div className="space-y-2">
                {[
                  { label: 'About the Wizard', id: 'about' },
                  { label: 'Magical Abilities', id: 'magical-abilities' },
                  { label: 'Spell Portfolio', id: 'spells-potions' },
                  { label: 'Send Owl Post', id: 'owl-post' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block font-parchment text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-magical text-lg font-semibold text-foreground">
                Magical Networks
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Bhupendra3444"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="outline" className="p-2">
                    <Github className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/bhupendrau/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="outline" className="p-2">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>
              </div>
              <p className="font-parchment text-sm text-muted-foreground">
                Follow my magical journey across the digital realm
              </p>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="font-parchment text-muted-foreground flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-primary" /> 
              <Wand2 className="w-4 h-4 text-accent" />
            </p>
          </div>
        </Card>
      </div>
    </footer>
  );
};
