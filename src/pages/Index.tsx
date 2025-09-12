const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
          {/* Left content - Text */}
          <div className="flex-1 max-w-4xl space-y-6 order-2 lg:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              I am a Robotics student at Georgia Tech, advised by Prof. Matthew Gombolay. I am part of the Cognitive Optimization and Robotics (CORE) Lab, where I focus on agile robotic control and decision-making under uncertainty. My research interests lie at the intersection of control theory, machine learning, and robotics, particularly in developing fast, adaptive controllers that enable high-performance robotic behaviors in dynamic and constrained environments.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Before joining Georgia Tech, I completed my undergraduate degree in Aerospace Engineering at IIT Bombay. During that time, I worked on a range of research problems, from multi-agent flocking algorithms under nonholonomic and actuation constraints, advised by Prof. Shashi Ranjan Kumar and Leela Vacchani, to bilevel distributed optimization with stochastic gradients under the mentorship of Prof. Mayank Baranwal. I also collaborated with Prof. Hugh Liu during a MITACS research internship at the University of Toronto, where I modeled hydrodynamic disturbances on a quadrotor-payload system designed for water sampling applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Across these projects, I've consistently explored how to build control algorithms that are both theoretically grounded and practically viable. My work is motivated by the belief that solving hard control problems in agile robotics can lead to generalizable solutions across a wide range of domains.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Outside of research, I'm a highly disciplined individual with strong personal interests in fitness, nutrition, and dance. These passions keep me balanced and focused.
            </p>

            <div className="mt-8">
              <p className="text-lg text-foreground font-semibold">
                Research Interests:
              </p>
              <p className="text-lg text-muted-foreground text-justify">
                Agile robotic control, optimal control, learning-based decision-making, optimization.
              </p>
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-border">
              <img 
                src="/lovable-uploads/6ef13518-d1aa-4f52-a0c1-fb0da9ffa892.png" 
                alt="Pratik Shah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
