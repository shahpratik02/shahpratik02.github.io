import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-foreground">Ajay Tak</h1>
            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-6">
                <Link to="/research" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Publications
                </Link>
                <Link to="/research" className="text-muted-foreground hover:text-foreground transition-smooth">
                  News
                </Link>
                <Link to="/cv" className="text-muted-foreground hover:text-foreground transition-smooth">
                  CV
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-smooth">
                  <Github size={20} />
                </a>
                <a href="mailto:your.email@gatech.edu" className="text-muted-foreground hover:text-foreground transition-smooth">
                  <Mail size={20} />
                </a>
                <a href="https://scholar.google.com" className="text-muted-foreground hover:text-foreground transition-smooth">
                  <GraduationCap size={20} />
                </a>
                <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-smooth">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left content - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Robotics student at Georgia Tech, advised by Prof. Matthew Gombolay. I am part of the Cognitive Optimization and Robotics (CORE) Lab, where I focus on agile robotic control and decision-making under uncertainty. My research interests lie at the intersection of control theory, machine learning, and robotics, particularly in developing fast, adaptive controllers that enable high-performance robotic behaviors in dynamic and constrained environments.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Before joining Georgia Tech, I completed my undergraduate degree in Aerospace Engineering at IIT Bombay. During that time, I worked on a range of research problems, from multi-agent flocking algorithms under nonholonomic and actuation constraints, advised by Prof. Shashi Ranjan Kumar and Leela Vacchani, to bilevel distributed optimization with stochastic gradients under the mentorship of Prof. Mayank Baranwal. I also collaborated with Prof. Hugh Liu during a MITACS research internship at the University of Toronto, where I modeled hydrodynamic disturbances on a quadrotor-payload system designed for water sampling applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Across these projects, I've consistently explored how to build control algorithms that are both theoretically grounded and practically viable. My work is motivated by the belief that solving hard control problems in agile robotics can lead to generalizable solutions across a wide range of domains.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of research, I'm a highly disciplined individual with strong personal interests in fitness, nutrition, and dance. These passions keep me balanced and focused.
            </p>

            <div className="mt-8">
              <p className="text-lg text-foreground font-semibold">
                Research Interests:
              </p>
              <p className="text-lg text-muted-foreground">
                Agile robotic control, optimal control, learning-based decision-making, optimization.
              </p>
            </div>
          </div>

          {/* Right content - 1/3 width for profile image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-card border border-border overflow-hidden">
                <img 
                  src="/lovable-uploads/6ef13518-d1aa-4f52-a0c1-fb0da9ffa892.png" 
                  alt="Ajay Tak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
