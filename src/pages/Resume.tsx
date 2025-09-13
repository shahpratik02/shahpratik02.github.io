import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  const resumePdfPath = '/pratik_resume_final_gatech.pdf'; // PDF file in the public folder
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdfPath;
    link.download = 'Pratik_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(resumePdfPath, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Download Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Resume
            </h1>
            
          </div>
          
          <div className="flex gap-3">
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleOpenInNewTab}
              className="border-border hover:bg-muted"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in New Tab
            </Button>
            <Button 
              size="lg" 
              onClick={handleDownload}
              className="gradient-primary shadow-glow transition-smooth hover:scale-105"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden border border-border">
          <iframe
            src={resumePdfPath}
            width="100%"
            height="800px"
            style={{ border: 'none' }}
            title="Resume PDF"
            className="w-full"
          >
            <div className="p-8 text-center">
              <p className="text-muted-foreground mb-4">
                Your browser doesn't support PDF viewing. Please download the resume instead.
              </p>
              <Button onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </iframe>
        </div>

        {/* Fallback message for mobile or unsupported browsers */}
        <div className="mt-6 p-4 bg-muted rounded-lg text-center sm:hidden">
          <p className="text-muted-foreground mb-4">
            For the best viewing experience on mobile, please download or open in a new tab.
          </p>
          <div className="flex gap-2 justify-center">
            <Button size="sm" variant="outline" onClick={handleOpenInNewTab}>
              <ExternalLink className="h-4 w-4 mr-1" />
              Open
            </Button>
            <Button size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;