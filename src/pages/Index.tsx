import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-primary bg-clip-text text-transparent">
                    Ajay Tak
                  </span>
                </h1>
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    Robotics Researcher
                  </h2>
                  <p className="text-lg text-primary font-medium">
                    Georgia Institute of Technology
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Developing next-generation control and learning methods for agile robotics. 
                  Passionate about creating systems that are dynamic, fast, and responsive 
                  while generalizing across tasks and environments.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gradient-primary shadow-glow transition-smooth hover:scale-105">
                  <Link to="/research">
                    View Research
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                  <Link to="/cv">
                    Download CV
                    <Download className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Research Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">2</p>
                  <p className="text-sm text-muted-foreground">Institutions</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-sm text-muted-foreground">Publication</p>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <Card className="gradient-card border-border shadow-card w-80 h-96">
                <CardContent className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-3xl text-primary">👨‍🔬</span>
                    </div>
                    <p className="text-muted-foreground">
                      Profile photo will be added here
                    </p>
                  </div>
                </CardContent>
              </Card>
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
