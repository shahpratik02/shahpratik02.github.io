import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Research = () => {
  const currentFocus = `I'm a Machine Learning graduate student at Georgia Tech, and my research interests span Reinforcement Learning, Natural Language Processing, and Robotics.`;

  const publications = [
    {
      title: "RANGER: Repository-Scale Agent for Graph-Enhanced Retrieval",
      status: "Preparing for Submission",
      venue: "ICLR 2026",
      venueType: "conference",
      authors: "P. Shah et al.",
      year: "2026",
      link: null,
    },
    {
      title: "Lagrangian Index Policy for Restless Bandits with Average Reward",
      status: "Submitted",
      venue: "Queueing Systems Journal",
      venueType: "journal",
      authors: "K. Avrachenkov, V.S. Borkar, P. Shah",
      year: "2024",
      link: "https://arxiv.org/abs/2412.12641",
      arxiv: "arXiv:2412.12641"
    },
    {
      title: "Reinforcement Learning in non-Markovian Environments",
      status: "Published",
      venue: "Systems and Control Letters, vol. 185, 105751",
      venueType: "journal",
      authors: "S. Chandak, P. Shah, V. S. Borkar, P. Dodhia",
      year: "2024",
      link: "https://www.sciencedirect.com/science/article/pii/S0167691124000392"
    }
  ];

  const researchExperience = [
    {
      title: "RANGER: Repository-scale Agent for Graph-Enhanced Retrieval",
      organization: "Nutanix",
      period: "May '25 - Present",
      description: [
        "Developed RANGER a repository-scale agent utilising RL-enhanced GraphRAG for code tasks | Provisional Patent & ICLR '26",
        "Created a Monte Carlo Tree Search (MCTS) based graph retrieval algorithm fusing bi-encoder speed with cross-encoder precision",
        "Built an AST-based tool to construct Neo4j knowledge graphs of entire repos, capturing hierarchical and cross-file dependencies",
        "Developed a dual-stage retriever combining text2cypher for entity lookup with the novel MCTS algorithm for graph traversal",
        "Beat Qwen-3-8B (SOTA) semantic retrieval, scoring 6% higher NDCG@10 on CodeSearchNet (NL→Code benchmark). Got 6% higher exact match on CrossCodeEval and 5% higher accuracy on RepoBench for code completion and retrieval over baselines"
      ],
      tags: ["Retrieval Agent", "SWE Agent", "GraphRAG", "MCTS", "AST", "Neo4j", "Reinforcement Learning", "NLP"],
    },
    {
      title: "Lagrangian Index Policy for Restless Bandits With Average Reward",
      organization: "Guides: Prof. Vivek Borkar, EE, IIT Bombay, Prof. Konstantin Avrachenkov, INRIA",
      professorLinks: [
        { name: "Prof. Vivek Borkar, EE, IIT Bombay", url: "https://www.ee.iitb.ac.in/web/people/vivek-shripad-borkar/" },
        { name: "Prof. Konstantin Avrachenkov, INRIA", url: "https://www-sop.inria.fr/members/Konstantin.Avratchenkov/me.html" }
      ],
      period: "Jul '23 - Dec '24",
      description: [
        "Designed an index policy for restless bandits to optimize long-run rewards, with applications in resource allocation and scheduling",
        "LIP requires no indexability conditions and the proposed tabular and NN-based reinforcement learning schemes for model-free setting require significantly less memory and time than the Whittle Index Policy (WIP), which is the standard in this domain",
        "The new policy is asymptotically optimal and applicable to both Whittle Indexable and Non-Whittle Indexable problems"
      ],
      tags: ["Restless Bandits", "Index Policy", "Reinforcement Learning", "Optimization", "Resource Allocation", "Scheduling"]
    },
    {
      title: "Reinforcement Learning in Non-Markovian Environments",
      organization: "Guides: Prof. Vivek Borkar, EE, IIT Bombay",
      professorLinks: [
        { name: "Prof. Vivek Borkar, EE, IIT Bombay", url: "https://www.ee.iitb.ac.in/web/people/vivek-shripad-borkar/" }
      ],
      period: "Dec '22 - Sep '23",
      description: [
        "Designed a new RL agent, the Non-Markovian Q Agent (NMQ), to tackle environments where past information is crucial",
        "The NMQ agent uses an autoencoder-based scheme to tackle non-Markovianity by learning a latent state space for a Deep Q-Network (DQN). Modified OpenAI Gym environments like CartPole to be partially observable for testing the agent",
        "The NMQ agent outperformed the standard DQN agent in partially observable environments and Non-Markovian random walks"
      ],
      tags: ["Reinforcement Learning", "Non-Markovian", "Deep Q-Network", "Autoencoder", "OpenAI Gym", "Q-Learning"]
    },
    {
      title: "Matsya, Autonomous Underwater Vehicle",
      organization: "AUV-IITB | Student Technical Team",
      organizationLink: "https://www.auv-iitb.org/",
      period: "Jan '21 - May '24",
      description: [
        "Accolades: IEEE Young Researchers' Prize awardee; 4th place in Robosub 2024 out of 40+ universities from 8 countries",
        "Developed an RL controller that reduced target state achievement time by 8% compared to a PID controller in simulations",
        "Led an 11-member team in AUV-IITB and L&T Defence's technology transfer project to develop an ROV for defense purposes",
        "Conceptualized a towfish design for underwater pipeline inspection in collaboration with an oil consortium led by ONGC"
      ],
      tags: ["Autonomous Underwater Vehicle", "Reinforcement Learning", "Control Systems", "Robotics", "Team Leadership", "Computer Vision"],
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

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Publications</h2>
          <div className="space-y-4">
            {publications.map((publication, index) => (
              <Card key={index} className="gradient-card border-border shadow-card transition-smooth hover:shadow-glow">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground flex-1">
                        {publication.link ? (
                          <a 
                            href={publication.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors flex items-center gap-2"
                          >
                            {publication.title}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          publication.title
                        )}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="secondary"
                        >
                          {publication.status}
                        </Badge>
                        {publication.highlight && (
                          <Badge variant="default" className="bg-blue-100 text-blue-800 border-blue-200">
                            {publication.highlight}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      <span className="font-medium">{publication.authors}</span>
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="text-muted-foreground">
                        <span className="font-medium italic">{publication.venue}</span>
                        {publication.arxiv && (
                          <span className="ml-2">
                            <a 
                              href={publication.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {publication.arxiv}
                            </a>
                          </span>
                        )}
                      </p>
                      <span className="text-sm text-muted-foreground">{publication.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
                        {experience.professorLinks ? (
                          <div className="flex flex-col gap-1">
                            <span>Guides:</span>
                            <div className="flex flex-wrap gap-2">
                              {experience.professorLinks.map((prof, idx) => (
                                <span key={idx}>
                                  <a 
                                    href={prof.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:underline text-primary flex items-center gap-1"
                                  >
                                    {prof.name}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                  {idx < experience.professorLinks.length - 1 && <span className="text-muted-foreground">;</span>}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : experience.organizationLink ? (
                          <a 
                            href={experience.organizationLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1"
                          >
                            {experience.organization}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          experience.organization
                        )}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.period}
                      </div>
                    </div>
                  </div>
                  {experience.highlights && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {experience.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="default" className="bg-green-100 text-green-800 border-green-200">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  )}
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

      </div>
    </div>
  );
};

export default Research;