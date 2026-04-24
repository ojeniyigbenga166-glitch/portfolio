export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Beautiful, modern designs that captivate your audience and reflect your brand",
      icon: "🎨"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "React, Vue, and vanilla JS for interactive, responsive web experiences",
      icon: "⚙️"
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Complete web application development from database to deployment",
      icon: "🚀"
    },
    {
      id: 4,
      title: "Performance Optimization",
      description: "Speed up your site. Optimize images, code splitting, and caching strategies",
      icon: "⚡"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-6 bg-dark-secondary border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:bg-dark-secondary/80"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover line */}
              <div className="mt-4 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
