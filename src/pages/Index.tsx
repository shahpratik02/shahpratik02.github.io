const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
          {/* Left content - Text */}
          <div className="flex-1 max-w-4xl space-y-6 order-2 lg:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              I am a second-year Master's student at Georgia Tech specializing in Machine Learning, with a strong focus on building scalable AI systems and exploring reinforcement learning and robotics. My greatest strength is my ability to learn and adapt quickly. I began studying Mechanical Engineering at IIT Bombay, one of India's premier institutions, but through projects, coursework, and robotics, I was drawn to AI, particularly reinforcement learning, and pursued it alongside my main degree. By the end of my undergraduate studies, I achieved Department Rank 5 in Mechanical Engineering and published two A* journal papers in reinforcement learning.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Most recently, at Nutanix, I developed RANGER, a repository-scale code retrieval agent that combines knowledge graph construction with Monte Carlo Tree Search traversal. This system enables multi-hop reasoning across large codebases, outperformed baseline models on multiple benchmarks, and has a provisional patent filed with a submission under preparation to ICLR 2026. At Microsoft, I built and deployed a serverless retrieval-augmented generation pipeline on Azure using GPT-3.5 to generate and translate personalized health tips at scale, reducing production time from two weeks to 30 minutes.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              As a Graduate Research Assistant at Georgia Tech's PACE initiative, I am building an AI inference server that routes requests through a LiteLLM gateway to vLLM servers scheduled on HPC GPUs via Slurm. At Georgia Tech's STAR Lab under Prof. Harish Ravichandar, I am working on Koopman operator-based visual imitation learning for dexterous manipulation. My interest in robotics began during my undergraduate studies at IIT Bombay, where I was part of the Autonomous Underwater Vehicle Team developing the Matsya series and representing India in the international RoboSub competition.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Across these experiences, my core strength has been quickly learning and applying new technologies. Outside of work, I am an ambitious and disciplined individual with personal interests in fitness, football, and dance, which help me stay balanced and focused.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-lg text-foreground font-semibold">
                  Skills:
                </p>
                <p className="text-lg text-muted-foreground text-justify">
                  AWS Certified Cloud Practitioner, Python, C++, SQL, Azure, Spark, Java, CUDA, Linux, Neo4j, Git, Slurm, Docker, Bash
                </p>
              </div>
              
              <div>
                <p className="text-lg text-foreground font-semibold">
                  Frameworks:
                </p>
                <p className="text-lg text-muted-foreground text-justify">
                  PyTorch, TensorFlow, vLLM, LiteLLM, mcp[cli], LangChain, LlamaIndex, HuggingFace, openai, Gym, RLlib, torchrun, TensorRT, deepspeed, uvicron, spacy, pandas
                </p>
              </div>
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
