import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code, Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start free and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6">Get Started</Button>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Up to 5 APIs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Basic testing tools</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Auto-generated docs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Community support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-accent relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For growing teams and projects</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6">Start Free Trial</Button>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Up to 50 APIs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Advanced testing suite</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Real-time monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full mb-6 bg-transparent">
                  Contact Sales
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Unlimited APIs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Advanced security</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-3" />
                    <span className="text-sm">SLA guarantee</span>
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
