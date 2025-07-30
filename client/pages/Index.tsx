import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Docker, 
  Server, 
  GitBranch, 
  Shield, 
  Rocket, 
  Users, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function Index() {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Docker Containerization: From Development to Production",
      excerpt: "Learn how to build, optimize, and deploy Docker containers with best practices for scalability and security.",
      readTime: "8 min read",
      date: "Nov 15, 2024",
      tags: ["Docker", "Containers", "DevOps"],
      featured: true
    },
    {
      id: 2,
      title: "Kubernetes Orchestration: Advanced Deployment Strategies",
      excerpt: "Explore rolling updates, canary deployments, and blue-green strategies in production Kubernetes environments.",
      readTime: "12 min read",
      date: "Nov 12, 2024",
      tags: ["Kubernetes", "Orchestration", "Production"],
      featured: true
    },
    {
      id: 3,
      title: "Jenkins CI/CD Pipeline: Testing & Automation Best Practices",
      excerpt: "Build robust testing pipelines with Jenkins, including automated testing, security scanning, and deployment strategies.",
      readTime: "10 min read",
      date: "Nov 8, 2024",
      tags: ["Jenkins", "CI/CD", "Testing"],
      featured: false
    },
    {
      id: 4,
      title: "Multi-Platform Testing with Docker Compose",
      excerpt: "Set up comprehensive testing environments using Docker Compose for microservices architecture.",
      readTime: "6 min read",
      date: "Nov 5, 2024",
      tags: ["Docker", "Testing", "Microservices"],
      featured: false
    },
    {
      id: 5,
      title: "Kubernetes Security: Hardening Your Cluster",
      excerpt: "Essential security practices for production Kubernetes clusters, including RBAC, network policies, and secrets management.",
      readTime: "15 min read",
      date: "Nov 1, 2024",
      tags: ["Kubernetes", "Security", "Production"],
      featured: false
    },
    {
      id: 6,
      title: "Advanced Jenkins Pipelines: Parallel Testing & Deployment",
      excerpt: "Optimize your CI/CD workflows with parallel execution, matrix builds, and intelligent test distribution.",
      readTime: "9 min read",
      date: "Oct 28, 2024",
      tags: ["Jenkins", "Pipelines", "Optimization"],
      featured: false
    }
  ];

  const technologies = [
    {
      name: "Docker",
      icon: Docker,
      description: "Containerization platform for consistent deployments",
      color: "text-blue-600"
    },
    {
      name: "Kubernetes",
      icon: Server,
      description: "Container orchestration for scalable applications",
      color: "text-purple-600"
    },
    {
      name: "Jenkins",
      icon: GitBranch,
      description: "Automation server for CI/CD pipelines",
      color: "text-orange-600"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">DevOps Central</h1>
                <p className="text-sm text-slate-600">Professional DevOps & Testing</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="hidden md:flex">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Production Ready
              </Badge>
              <Button size="sm">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Rocket className="w-3 h-3 mr-1" />
              Latest in DevOps
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Professional
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> DevOps </span>
              & Testing Solutions
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Master Docker containerization, Kubernetes orchestration, and Jenkins automation 
              with comprehensive guides, best practices, and real-world testing scenarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Star className="w-4 h-4 mr-2" />
                Explore Articles
              </Button>
              <Button size="lg" variant="outline">
                <Shield className="w-4 h-4 mr-2" />
                Testing Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Technologies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Deep dive into the essential tools that power modern DevOps workflows
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <Card key={tech.name} className="border-2 hover:shadow-lg transition-all duration-300 hover:border-slate-300">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-slate-100 flex items-center justify-center ${tech.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                    <CardDescription className="text-base">{tech.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Articles</h2>
              <p className="text-slate-600">In-depth guides for professional DevOps practices</p>
            </div>
            <Badge variant="outline" className="hidden md:flex">
              <Star className="w-3 h-3 mr-1" />
              Editor's Choice
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs whitespace-nowrap ml-2">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.date}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Recent Posts */}
      <section className="py-16 bg-white/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Recent Articles</h2>
            <p className="text-slate-600">Stay updated with the latest DevOps practices and tutorials</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-slate-300">
                <CardHeader>
                  <div className="flex gap-2 flex-wrap mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{post.date}</span>
                    <span className="text-slate-400">{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Level Up Your DevOps Skills?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join thousands of professionals mastering Docker, Kubernetes, and Jenkins 
              with our comprehensive testing and deployment guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
                <Users className="w-4 h-4 mr-2" />
                Join Community
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <GitBranch className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <Server className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">DevOps Central</p>
                <p className="text-slate-400 text-sm">Professional DevOps & Testing</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <span>© 2024 DevOps Central</span>
              <span>•</span>
              <span>Docker • Kubernetes • Jenkins</span>
              <span>•</span>
              <span>Production Ready</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
