import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "FlashAttention-2 CUDA Kernels & LLM Inference",
      period: "Sep '25 - Dec '25",
      repoLink: "https://github.com/shahpratik02/flashattention-llm-inference-cuda",
      description: [
        "Implemented FlashAttention-2 CUDA kernels using block-tiling and online softmax; 2.59× faster than PyTorch on H100",
        "Optimized autoregressive decoding with KV-cache update & FlashAttention-2 decode kernel, achieving 3.1× lower TBT latency",
        "Built an end-to-end LLM inference engine with RoPE embeddings, lazy KV initialization and dedicated prefill/decode kernels"
      ],
      tags: ["CUDA", "FlashAttention-2", "LLM Inference", "KV Cache", "RoPE", "H100", "PyTorch"],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Projects
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              A collection of my personal projects.
            </p>
          </div>
        </div>

        {/* Projects */}
        <section>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-card border-border shadow-card transition-smooth hover:shadow-glow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                      {project.repoLink && (
                        <CardDescription className="text-primary font-medium text-base">
                          <a 
                            href={project.repoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </CardDescription>
                      )}
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 leading-relaxed">•</span>
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

export default Projects;
