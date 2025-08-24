import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Code, FileText, Zap, CheckCircle, Monitor, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">API Buddy</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Powerful Features for Modern API Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to build, test, document, and manage your APIs efficiently
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>API Testing</CardTitle>
                <CardDescription>Comprehensive testing tools for all your API endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Automated test generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Load testing capabilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Response validation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Auto-generated, interactive API documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    OpenAPI specification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Interactive examples
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Custom themes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Real-time Monitoring</CardTitle>
                <CardDescription>Monitor API performance and uptime 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Uptime monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Performance metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Alert notifications
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Security Testing</CardTitle>
                <CardDescription>Comprehensive security analysis for your APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Vulnerability scanning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Authentication testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    OWASP compliance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Version Control</CardTitle>
                <CardDescription>Track changes and manage API versions effortlessly</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Version history
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Change tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Rollback capabilities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>Work together seamlessly with your development team</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Shared workspaces
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Role-based access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Comment system
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
