import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Research = () => {
  const currentFocus = `I'm a Robotics graduate student at Georgia Tech with a background in Aerospace Engineering from IIT Bombay. My current focus is on agile robotics, developing control and learning methods that enable dynamic, fast, and responsive behavior in physical systems. I'm particularly interested in approaches that generalize across tasks and environments, motivated by the belief that solving the challenges of agile control leads to solutions applicable to a wide range of robotics problems. My broader interests include learning-based control, sim-to-real transfer, and decision-making for high-performance autonomous systems.`;

  const researchExperience = [
    {
      title: "Vision-Based Localization for Wheelchair Tennis Robot",
      organization: "CORE Robotics Lab, Georgia Tech",
      location: "Atlanta, GA",
      period: "Jan 2025 – Present",
      description: [
        "Designing a robust localization pipeline using court-line detection and particle filtering for a mobile robot in open, low-feature environments like tennis courts",
        "Adapted and improved netNed (ENet-based) for semantic segmentation of court-lines; improved model performance by integrating focal loss to mitigate extreme class imbalance",
        "Conducted data annotation with CVAT and built a custom image generation pipeline to produce binary and multi-class images for training in limited data (350 images)",
        "Fine-tuned DINOv2 encoder with contrastive loss to compute similarity between observed and particle-projected court images, enhancing measurement update in the particle filters"
      ],
      tags: ["Computer Vision", "Robotics", "Deep Learning", "SLAM"]
    },
    {
      title: "Sim-to-Real Transfer of Agile RL Policies for Tennis Robot",
      organization: "CORE Robotics Lab, Georgia Tech",
      location: "Atlanta, GA", 
      period: "May 2025 – Present",
      description: [
        "Investigating state-of-the-art sim-to-real transfer techniques (domain randomization, residual dynamics learning, system identification) for sim-to-real transfer",
        "Conducting literature review and benchmarking recent RL-based control frameworks for dynamic athletic tasks, focusing on agility, robustness, and transfer efficiency"
      ],
      tags: ["Reinforcement Learning", "Sim-to-Real", "Control Systems"]
    },
    {
      title: "Safety-Aware Control via Margin Framework and Deep RL",
      organization: "Decision and Control Lab, Georgia Tech",
      location: "Atlanta, GA",
      period: "Aug 2024 – Present", 
      description: [
        "Developed a Quadratic Programming-based safety filter using a novel Margin Framework, enabling control policies to maintain safety margins under uncertainty",
        "Demonstrated effective obstacle avoidance using margin-safe controllers in both deterministic and stochastic environments, validated via simulation",
        "Integrating the margin model into a Deep Deterministic Policy Gradient (DDPG) framework to enable reward shaping that enforces safety constraints during RL training"
      ],
      tags: ["Safety-Critical Systems", "Deep RL", "Control Theory", "Optimization"]
    },
    {
      title: "Distributed Stochastic Bilevel Optimization with Linear Convergence Guarantees",
      organization: "Systems & Control Group, IIT Bombay",
      location: "Mumbai, India",
      period: "May 2024 – Jan 2025",
      description: [
        "Developed the BDASG algorithm for solving bilevel distributed optimization problems over undirected networks using stochastic gradient aggregation with exponential convergence",
        "Proved linear convergence in expectation under the weakest known assumptions (PL inequality on global cost function), without requiring convexity of local functions",
        "Conducted numerical experiments on distributed networks and rank-deficient linear regression to validate convergence and robustness across topologies (ring, star)"
      ],
      tags: ["Optimization", "Distributed Systems", "Control Theory"]
    },
    {
      title: "Decentralized Collision Avoidance for 3D Fixed-Wing Flocking",
      organization: "Autonomous & Multi-Robot Systems Lab, IIT Bombay", 
      location: "Mumbai, India",
      period: "Aug 2023 – May 2024",
      description: [
        "Developed a decentralized 3D flocking algorithm for fixed-wing UAVs with non-holonomic dynamics and actuator saturation, ensuring robust inter-agent collision avoidance and group tracking",
        "Designed a leader-follower formation control strategy using Platonic solids and sigmoid-based switching to ensure safe flock evolution and yaw alignment",
        "Implemented distributed consensus protocols (agent count and fixed-time average) for neighborhood-based leader trajectory estimation without global communication",
        "Validated algorithm via Monte Carlo simulations (200+ randomized tests) with zero collisions and strict constraint satisfaction across all agents"
      ],
      tags: ["Multi-Agent Systems", "UAV", "Formation Control", "Consensus"]
    }
  ];

  const projects = [
    {
      title: "Safe Policy Adaptation in Learning from Demonstrations",
      period: "Jan 2025 – Apr 2025",
      description: [
        "Explored integration of margin-based safety representations into Adversarial Inverse Reinforcement Learning (AIRL) to learn explicit safety-aware reward functions from demonstrations",
        "Abandoned AIRL due to instability and recursive dependencies in margin features, shifting focus to Behavior Cloning (BC) and post-hoc safety filtering",
        "Developed a Quadratic Programming-based safety filter to project unsafe actions onto margin-compliant alternatives during long-horizon planning; achieving safety in unseen environments",
        "Applied filter-guided BC finetuning for adaptation; ensured safe behaviors but observed limited task success due to poor goal-directed generalization in novel states"
      ],
      tags: ["Imitation Learning", "Safety", "Reinforcement Learning"]
    },
    {
      title: "Learning-Based Control and Prediction for Tethered Quadrotor Payload Systems",
      period: "Jan 2025 – Apr 2025", 
      description: [
        "Trained a transformer-based model to predict full payload states from onboard quadrotor state history, enabling latent payload inference in underactuated settings",
        "Designed a partially observable PPO agent using only quadrotor states and inferred payload states from the trained transformer model to achieve inverted pendulum stabilization of the payload",
        "Awarded Best Project Award among 30+ teams for innovation in combining deep learning and RL for dynamics-aware aerial manipulation"
      ],
      tags: ["Deep Learning", "Control", "Transformers", "PPO"]
    },
    {
      title: "ROS2-Based TurtleBot3 Navigation",
      period: "Aug 2024 – Dec 2024",
      description: [
        "Engineered and deployed a ROS2-based navigation and perception stack on TurtleBot3 for autonomous maze traversal in unknown environments",
        "Implemented vision-based object tracking and robust object detection using OpenCV, enabling real-time response to visual cues",
        "Integrated sensor data from LiDAR and odometry for obstacle detection and avoidance, ensuring smooth and safe path execution"
      ],
      tags: ["ROS2", "Navigation", "Computer Vision", "SLAM"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Research
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              {currentFocus}
            </p>
          </div>
        </div>

        {/* Research Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Research Experience</h2>
          <div className="space-y-6">
            {researchExperience.map((experience, index) => (
              <Card key={index} className="gradient-card border-border shadow-card transition-smooth hover:shadow-glow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium text-base">
                        {experience.organization}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((point, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-2">•</span>
                        <span className="flex-1 text-justify">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-card border-border shadow-card transition-smooth hover:shadow-glow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <CardTitle className="text-xl text-foreground">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-2">•</span>
                        <span className="flex-1 text-justify">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;