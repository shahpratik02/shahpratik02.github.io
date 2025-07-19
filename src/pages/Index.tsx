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
                  I am a Robotics student at Georgia Tech, advised by Prof. Matthew Gombolay. I am part of the Cognitive Optimization and Robotics (CORE) Lab, where I focus on agile robotic control and decision-making under uncertainty. My research interests lie at the intersection of control theory, machine learning, and robotics, particularly in developing fast, adaptive controllers that enable high-performance robotic behaviors in dynamic and constrained environments.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Before joining Georgia Tech, I completed my undergraduate degree in Aerospace Engineering at IIT Bombay. During that time, I worked on a range of research problems, from multi-agent flocking algorithms under nonholonomic and actuation constraints, advised by Prof. Shashi Ranjan Kumar and Leela Vacchani, to bilevel distributed optimization with stochastic gradients under the mentorship of Prof. Mayank Baranwal. I also collaborated with Prof. Hugh Liu during a MITACS research internship at the University of Toronto, where I modeled hydrodynamic disturbances on a quadrotor-payload system designed for water sampling applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Across these projects, I've consistently explored how to build control algorithms that are both theoretically grounded and practically viable. My work is motivated by the belief that solving hard control problems in agile robotics can lead to generalizable solutions across a wide range of domains.
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
