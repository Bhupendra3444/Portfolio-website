import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send, Wand2 } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="owl-post" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Owl Post</span>
          </div>
          <h2 className="font-magical text-4xl md:text-5xl font-bold text-foreground mb-4">
            Send a Magical Message
          </h2>
          <p className="font-parchment text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a quest that needs completing? Send your message via owl post, and I'll respond with the swiftness of a Golden Snitch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm mystical-shadow">
              <CardHeader>
                <CardTitle className="font-magical text-lg flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-primary" />
                  Magical Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">bhupendraupadh24@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Magical Phone</p>
                    <p className="text-muted-foreground">+91 8979159010</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Delhi-NCR, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm mystical-shadow">
              <CardContent className="p-6">
                <h3 className="font-magical font-semibold mb-3">Available for:</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">
                    ✨ Freelance Projects
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start">
                    🏢 Full-time Opportunities
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start">
                    🤝 Collaborative Ventures
                  </Badge>
                 
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/80 backdrop-blur-sm mystical-shadow">
              <CardHeader>
                <CardTitle className="font-magical text-xl">
                  Compose Your Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Your Name *
                      </label>
                      <Input placeholder="Enter your magical name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject *
                    </label>
                    <Input placeholder="What magical project do you have in mind?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Describe your quest in detail... What magical digital experience do you need?"
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full enchanted-glow">
                    <Send className="w-4 h-4 mr-2" />
                    Send Magical Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};