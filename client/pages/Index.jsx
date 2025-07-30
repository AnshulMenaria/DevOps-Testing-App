import React from 'react';

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
    }
  ];

  const technologies = [
    {
      name: "Docker",
      description: "Containerization platform for consistent deployments",
      color: "text-blue-600",
      icon: "📦"
    },
    {
      name: "Kubernetes",
      description: "Container orchestration for scalable applications",
      color: "text-purple-600",
      icon: "⚙️"
    },
    {
      name: "Jenkins",
      description: "Automation server for CI/CD pipelines",
      color: "text-orange-600",
      icon: "🔧"
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
                <span className="text-white text-xl">⚡</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">DevOps Central</h1>
                <p className="text-sm text-slate-600">Professional DevOps & Testing</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden md:flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                ✅ Production Ready
              </span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
                Subscribe
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-6">
              🚀 Latest in DevOps
            </div>
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
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg flex items-center justify-center">
                ⭐ Explore Articles
              </button>
              <button className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-lg flex items-center justify-center">
                🛡️ Testing Guide
              </button>
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
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-slate-300">
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-slate-100 flex items-center justify-center text-2xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-slate-600">{tech.description}</p>
                </div>
              </div>
            ))}
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
            <span className="hidden md:flex items-center px-3 py-1 border border-slate-300 rounded-full text-sm">
              ⭐ Editor's Choice
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200 group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-2 flex items-center">
                    🕒 {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <span className="text-slate-400 group-hover:text-blue-600 transition-all transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200 my-8"></div>

      {/* Recent Posts */}
      <section className="py-16 bg-white/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Recent Articles</h2>
            <p className="text-slate-600">Stay updated with the latest DevOps practices and tutorials</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-slate-300 border group">
                <div className="flex gap-2 flex-wrap mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{post.date}</span>
                  <span className="text-slate-400">{post.readTime}</span>
                </div>
              </div>
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
              <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-lg flex items-center justify-center">
                👥 Join Community
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg flex items-center justify-center">
                🔀 View on GitHub
              </button>
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
                <span className="text-white">⚡</span>
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
