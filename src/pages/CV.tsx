import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';

const CV = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Curriculum Vitae
          </h1>
          <p className="text-lg text-muted-foreground">
            Download my complete academic and professional background
          </p>
        </div>

        {/* Contact Info Card */}
        <Card className="gradient-card border-border shadow-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>ajytak@gatech.edu</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>404-429-8599</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Globe className="h-5 w-5 mr-3 text-primary" />
                <span>linkedin.com/in/ajytak</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>Atlanta, GA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Section */}
        <Card className="gradient-card border-border shadow-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Download Resume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Get the most up-to-date version of my resume with detailed information about my 
                education, research experience, publications, and technical skills.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary shadow-glow transition-smooth hover:scale-105"
                disabled
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV (PDF)
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Resume link will be available soon
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Overview */}
        <Card className="gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Quick Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Education</h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-foreground">M.S. in Robotics</p>
                    <p className="text-sm text-muted-foreground">Georgia Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">GPA: 4.0/4.0 • Aug 2024 – Present</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">B.Tech in Aerospace Engineering</p>
                    <p className="text-sm text-muted-foreground">Indian Institute of Technology, Bombay</p>
                    <p className="text-sm text-muted-foreground">GPA: 8.95/10.0 • Aug 2020 – May 2024</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Research Interests</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Agile Robotics</li>
                  <li>• Learning-based Control</li>
                  <li>• Sim-to-Real Transfer</li>
                  <li>• Multi-Agent Systems</li>
                  <li>• Safety-Critical Systems</li>
                  <li>• Computer Vision for Robotics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CV;