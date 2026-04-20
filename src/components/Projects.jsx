import { useState } from 'react';

// Device Mockup Components
function DesktopMockup({ image }) {
  return (
    <div className="relative w-full h-64 mx-auto scale-90 hover:scale-100 transition-transform duration-300">
      {/* MacBook Frame */}
      <div className="bg-gray-900 rounded-2xl shadow-2xl border-8 border-gray-800 relative">
        {/* Screen */}
        <div className="bg-black rounded-t-lg overflow-hidden">
          <img src={image} alt="Desktop Preview" className="w-full h-40 object-cover" />
        </div>
        {/* Notch */}
        <div className="bg-gray-900 h-2 flex justify-center">
          <div className="w-32 h-2 bg-gray-900 rounded-b-xl"></div>
        </div>
        {/* Base */}
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-3 rounded-b-2xl"></div>
      </div>
    </div>
  );
}

function MobileMockup({ image }) {
  return (
    <div className="relative w-32 h-64 mx-auto scale-90 hover:scale-100 transition-transform duration-300">
      {/* iPhone Frame */}
      <div className="bg-black rounded-3xl shadow-2xl border-8 border-gray-800 relative overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-b-3xl z-10"></div>
        {/* Screen */}
        <img src={image} alt="Mobile Preview" className="w-full h-full object-cover pt-2" />
      </div>
    </div>
  );
}

function TabletMockup({ image }) {
  return (
    <div className="relative w-52 h-48 mx-auto scale-90 hover:scale-100 transition-transform duration-300">
      {/* iPad Frame */}
      <div className="bg-gray-900 rounded-xl shadow-2xl border-6 border-gray-800 relative">
        {/* Screen */}
        <img src={image} alt="Tablet Preview" className="w-full h-full object-cover rounded-lg" />
        {/* Home Button */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-700"></div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showMore, setShowMore] = useState(false);

  const categories = ['All', 'Web', 'Mobile', 'Design'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web",
      shortDescription: "Modern shopping experience with real-time inventory",
      fullDescription: "Complete e-commerce solution with product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1611080626919-7cf8b9dbab5b?w=600&h=400&fit=crop",
      mockupType: "desktop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      metrics: {
        conversion: "45%",
        loadTime: "1.2s",
        users: "10K+"
      },
      links: {
        live: "https://example-ecommerce.com",
        github: "https://github.com/yourusername/ecommerce",
        caseStudy: "#case-study-1"
      }
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      category: "Web",
      shortDescription: "Real-time data visualization for business insights",
      fullDescription: "Comprehensive analytics dashboard with interactive charts, reports, and real-time data updates.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      mockupType: "desktop",
      technologies: ["React", "D3.js", "PostgreSQL", "WebSocket"],
      metrics: {
        dataPoints: "1M+",
        updateSpeed: "Real-time",
        users: "500+"
      },
      links: {
        live: "https://example-dashboard.com",
        github: "https://github.com/yourusername/dashboard",
        caseStudy: "#case-study-2"
      }
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      category: "Mobile",
      shortDescription: "Track workouts, nutrition, and health goals",
      fullDescription: "Full-featured fitness tracking app with workout logging, nutrition tracking, and social features.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      mockupType: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      metrics: {
        downloads: "50K+",
        rating: "4.8★",
        activeUsers: "15K+"
      },
      links: {
        live: "https://apps.apple.com/app/fitness-tracker",
        github: "https://github.com/yourusername/fitness-app",
        caseStudy: "#case-study-3"
      }
    },
    {
      id: 4,
      title: "Brand Redesign",
      category: "Design",
      shortDescription: "Complete visual identity and branding package",
      fullDescription: "Full brand overhaul including logo, color palette, typography, and design system.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      mockupType: "desktop",
      technologies: ["Figma", "Adobe XD", "Branding", "UI/UX"],
      metrics: {
        designs: "50+",
        components: "100+",
        timeframe: "3 months"
      },
      links: {
        live: "https://behance.net/yourprofile/brand-redesign",
        github: "#",
        caseStudy: "#case-study-4"
      }
    },
    {
      id: 5,
      title: "Learning Platform",
      category: "Web",
      shortDescription: "Interactive online courses with progress tracking",
      fullDescription: "Comprehensive e-learning platform with video lessons, quizzes, and student management.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=600&h=400&fit=crop",
      mockupType: "desktop",
      technologies: ["React", "Express", "MongoDB", "AWS"],
      metrics: {
        courses: "50+",
        students: "5K+",
        completion: "92%"
      },
      links: {
        live: "https://example-learning.com",
        github: "https://github.com/yourusername/learning-platform",
        caseStudy: "#case-study-5"
      }
    },
    {
      id: 6,
      title: "Social Media App",
      category: "Mobile",
      shortDescription: "Connect with friends and share moments",
      fullDescription: "Social networking app with real-time messaging, post sharing, and notifications.",
      image: "https://images.unsplash.com/photo-1611532736a7-6b91e1b0b307?w=600&h=400&fit=crop",
      mockupType: "mobile",
      technologies: ["React Native", "Firebase", "TypeScript"],
      metrics: {
        users: "100K+",
        messages: "10M+/day",
        uptime: "99.9%"
      },
      links: {
        live: "https://apps.apple.com/app/social-connect",
        github: "https://github.com/yourusername/social-app",
        caseStudy: "#case-study-6"
      }
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 2);

  const getMockup = (mockupType, image) => {
    switch(mockupType) {
      case 'mobile':
        return <MobileMockup image={image} />;
      case 'tablet':
        return <TabletMockup image={image} />;
      default:
        return <DesktopMockup image={image} />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Portfolio</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-4">Featured <span className="text-orange-400">Projects</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Explore my latest work showcasing modern design, clean code, and impactful results
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-dark-tertiary text-gray-300 hover:text-orange-400 hover:border-orange-500/50 border border-dark-tertiary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-secondary border border-dark-tertiary rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 flex flex-col"
            >
              {/* Mockup Container */}
              <div className="bg-dark-tertiary/50 p-6 flex items-center justify-center min-h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {getMockup(project.mockupType, project.image)}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-tertiary text-gray-300 text-xs rounded-full border border-dark-tertiary group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    🔗 View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More CTA */}
        {filteredProjects.length > 2 && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              {showMore ? '← Show Less' : 'View More Projects →'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
