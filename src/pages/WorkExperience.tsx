import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const WorkExperience = () => {
  const workExperience = [
    {
      title: "Graduate Research Assistant",
      organization: "Georgia Tech HPC Center (PACE)",
      organizationLink: "https://pace.gatech.edu/",
      location: "Atlanta, GA",
      period: "Jan '25 - Present",
      description: [
        "Developing a multimodal AI inference server running GPT-OSS-120B, InternVL-3.5, and SD-XL, using vLLM for LLM/VLM tasks and TensorRT-engine Triton server for image generation, unified by a custom OpenAI-style API wrapper for LiteLLM integration",
        "Orchestrated LiteLLM request routing across ephemeral Slurm-scheduled GPU nodes running Apptainer-based inference servers, and built a cron-driven self-healing system for automated service discovery and failover in a non-Kubernetes HPC environment",
        "Working on the AI Makerspace, a campus initiative, leading tutorials like implementing FlashAttention in CUDA from scratch"
      ],
      tags: ["AI Inference Server", "LiteLLM", "vLLM", "HPC", "Slurm", "TensorRT", "Triton", "Apptainer", "CUDA", "FlashAttention"],
    },
    {
      title: "Intern, Member of Technical Staff",
      organization: "Nutanix",
      location: "San Jose, CA",
      period: "May '25 - Aug '25",
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
      title: "Data Science Intern",
      organization: "Microsoft",
      location: "Hyderabad, India",
      period: "May '23 - Jun '23",
      description: [
        "Automated personalized health tips generation using OpenAI GPT Models on MSN health pages data | In Production",
        "Implemented an automated RAG pipeline from scratch using serverless Azure Functions, created REST APIs to retrieve contextual data from Azure SQL, and leveraged the OpenAI Completions API to interact with GPT-3.5 for generating tips",
        "Reduced the tip generation time from 2 weeks to 30 minutes for 100 tips and attained a per-tip cost of ~$0.0015",
        "Created a GPT-3.5 based translation pipeline, expanding coverage from 14 English to all 24 markets, including non-English ones"
      ],
      tags: ["OpenAI API", "Azure", "Azure Functions", "RAG", "REST APIs", "Azure SQL", "GPT-3.5", "Translation"],
    },
    {
      title: "Data Science Intern",
      organization: "Data Axle",
      location: "Pune, India",
      period: "May '22 - Jul '22",
      description: [
        "Consolidated 50,000 job titles into 1,000 standardized titles using NLP and clustering for the company's lead generation service",
        "Applied tokenization, GloVe vectorization, dimensionality reduction (PCA, t-SNE), and K-means clustering to group job titles"
      ],
      tags: ["NLP", "GloVe", "PCA", "t-SNE", "K-means"],
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Work Experience
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              My professional journey spans across leading technology companies, from doing cutting-edge research at Nutanix to building production-ready GenAI solutions at Microsoft. I've worked on diverse projects including repository-scale code intelligence, automated content generation, high-performance computing infrastructure, and data processing pipelines.
            </p>
          </div>
        </div>

        {/* Work Experience */}
        <section>
          <div className="space-y-6">
            {workExperience.map((experience, index) => (
              <Card key={index} className="gradient-card border-border shadow-card transition-smooth hover:shadow-glow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium text-base flex items-center gap-2">
                        {experience.organizationLink ? (
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
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
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
                        <span className="text-primary mr-2 leading-relaxed">•</span>
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

export default WorkExperience;
