import { useState } from 'react';

export default function CaseStudyDetail() {
  const [activeTab, setActiveTab] = useState('overview');

  const caseStudy = {
    id: 1,
    title: "E-Commerce Platform Redesign",
    subtitle: "From Struggling to 45% Conversion Rate Increase",
    client: "TechShop Co.",
    year: 2025,
    role: "Lead Developer & UI/UX Designer",
    image: "https://images.unsplash.com/photo-1611080626919-7cf8b9dbab5b?w=1200&h=600&fit=crop",
    
    challenge: {
      title: "The Challenge",
      description: "The existing e-commerce platform had outdated design, poor user experience, and a 12% conversion rate. Users were abandoning carts mid-checkout, and the site had slow load times.",
      points: [
        "Outdated UI causing user confusion",
        "12% conversion rate (industry avg: 2-3%)",
        "3.5s average load time",
        "Mobile experience was poor",
        "Cart abandonment rate: 78%"
      ]
    },

    solution: {
      title: "Our Solution",
      description: "We completely redesigned the platform with modern UI/UX principles, optimized performance, and streamlined checkout process.",
      points: [
        "Modern, intuitive interface design",
        "Implemented progressive web app technology",
        "Optimized checkout flow (reduced from 7 to 3 steps)",
        "Mobile-first responsive design",
        "Real-time inventory management"
      ]
    },

    results: {
      metrics: [
        { label: "Conversion Rate", before: "12%", after: "45%", icon: "📈" },
        { label: "Load Time", before: "3.5s", after: "1.2s", icon: "⚡" },
        { label: "Cart Abandonment", before: "78%", after: "28%", icon: "🛒" },
        { label: "Mobile Users", before: "15%", after: "62%", icon: "📱" }
      ],
      impact: "Generated $2.3M in additional revenue within 6 months"
    },

    timeline: [
      { phase: "Discovery & Planning", duration: "2 weeks", status: "completed" },
      { phase: "Design & Prototyping", duration: "3 weeks", status: "completed" },
      { phase: "Development", duration: "8 weeks", status: "completed" },
      { phase: "Testing & Optimization", duration: "2 weeks", status: "completed" },
      { phase: "Launch & Monitoring", duration: "1 week", status: "completed" }
    ],

    tech: ["React", "Node.js", "MongoDB", "Stripe API", "AWS", "Redux"],
    team: ["1 Lead Developer", "1 UI/UX Designer", "1 Backend Engineer"]
  };

  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-sm font-bold text-orange-400">Case Study</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-4">
            {caseStudy.title}
          </h1>
          <p className="text-2xl text-gray-400 mb-6">{caseStudy.subtitle}</p>
          
          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-dark-tertiary">
            <div>
              <div className="text-xs text-gray-500 uppercase font-bold">Client</div>
              <div className="text-lg font-semibold text-white">{caseStudy.client}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase font-bold">Year</div>
              <div className="text-lg font-semibold text-white">{caseStudy.year}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase font-bold">Role</div>
              <div className="text-lg font-semibold text-white">{caseStudy.role}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase font-bold">Duration</div>
              <div className="text-lg font-semibold text-white">16 Weeks</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-dark-tertiary shadow-lg shadow-orange-500/10">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-12 border-b border-dark-tertiary overflow-x-auto">
          {['overview', 'challenge', 'solution', 'results', 'timeline'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-semibold whitespace-nowrap transition-all duration-300 border-b-2 ${
                activeTab === tab
                  ? 'text-orange-400 border-orange-400'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Project Overview</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                This project involved a complete redesign and rebuild of an e-commerce platform that was losing revenue due to poor user experience. We conducted extensive user research, implemented modern design patterns, and optimized every step of the customer journey.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.tech.map((tech) => (
                  <div key={tech} className="px-4 py-2 bg-dark-secondary border border-dark-tertiary rounded-lg text-gray-300 hover:border-orange-500/50 transition-all duration-300">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Team</h3>
              <ul className="space-y-2">
                {caseStudy.team.map((member, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center gap-3">
                    <span className="text-orange-400">✓</span> {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'challenge' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">{caseStudy.challenge.title}</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {caseStudy.challenge.description}
            </p>
            <div className="space-y-3">
              {caseStudy.challenge.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-dark-secondary border border-dark-tertiary rounded-lg hover:border-orange-500/50 transition-all duration-300">
                  <span className="text-2xl">⚠️</span>
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'solution' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">{caseStudy.solution.title}</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {caseStudy.solution.description}
            </p>
            <div className="space-y-3">
              {caseStudy.solution.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-dark-secondary border border-dark-tertiary rounded-lg hover:border-orange-500/50 transition-all duration-300">
                  <span className="text-2xl">✨</span>
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">Results & Impact</h2>
            
            {/* Before/After Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {caseStudy.results.metrics.map((metric, idx) => (
                <div key={idx} className="p-6 bg-dark-secondary border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">{metric.icon}</div>
                  <div className="text-sm text-gray-500 mb-3">{metric.label}</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Before</div>
                      <div className="text-3xl font-black text-gray-500">{metric.before}</div>
                    </div>
                    <div className="text-2xl text-orange-400">→</div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">After</div>
                      <div className="text-3xl font-black text-orange-400">{metric.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Highlight */}
            <div className="p-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl">
              <div className="text-2xl font-black text-orange-400">💰 Revenue Impact</div>
              <div className="text-4xl font-black text-white mt-2">{caseStudy.results.impact}</div>
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Project Timeline</h2>
            <div className="space-y-6">
              {caseStudy.timeline.map((phase, idx) => (
                <div key={idx} className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-orange-500 border-4 border-dark mt-1"></div>
                    {idx < caseStudy.timeline.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-orange-500 to-dark-tertiary mt-2"></div>
                    )}
                  </div>
                  
                  {/* Phase Info */}
                  <div className="pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="text-gray-400">Phase {idx + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-dark-tertiary">
          <div className="bg-dark-secondary border border-dark-tertiary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">Let's discuss how we can help transform your business</p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start a Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
