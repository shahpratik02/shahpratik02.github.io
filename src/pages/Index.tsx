import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-card border-2 border-border">
                <img 
                  src="/lovable-uploads/6ef13518-d1aa-4f52-a0c1-fb0da9ffa892.png" 
                  alt="Ajay Tak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Ajay Tak
                </h1>
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-medium text-foreground">
                    Robotics Researcher
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Georgia Institute of Technology
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Developing next-generation control and learning methods for agile robotics. 
                  Passionate about creating systems that are dynamic, fast, and responsive 
                  while generalizing across tasks and environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Research Focus
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Specializing in agile robotics with a focus on learning-based control, 
            sim-to-real transfer, and safety-critical systems for autonomous robots.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="gradient-card border-border shadow-card transition-smooth hover:shadow-glow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Agile Robotics</h3>
                <p className="text-sm text-muted-foreground">
                  Dynamic control systems for fast, responsive robot behavior
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border shadow-card transition-smooth hover:shadow-glow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🧠</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Learning-Based Control</h3>
                <p className="text-sm text-muted-foreground">
                  AI-driven approaches for adaptive robot control systems
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border shadow-card transition-smooth hover:shadow-glow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Safety-Critical Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Ensuring safe operation in uncertain environments
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
