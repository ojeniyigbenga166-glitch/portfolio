export default function Expertise() {
  const features = [
    {
      number: "01",
      title: "Bespoke Web Design",
      description: "Custom-tailored designs that reflect your brand identity and engage your target audience. Every pixel crafted with precision and purpose."
    },
    {
      number: "02",
      title: "Frontend Development",
      description: "High-performance React applications with seamless user experiences. Built with modern practices and optimized for speed."
    },
    {
      number: "03",
      title: "Full-Stack Solutions",
      description: "Complete web applications from database to deployment. Scalable, secure, and maintainable code architecture."
    },
    {
      number: "04",
      title: "Performance Optimization",
      description: "Transforming slow sites into lightning-fast experiences. Strategic optimization for conversion and user satisfaction."
    },
    {
      number: "05",
      title: "E-Commerce Integration",
      description: "Powerful online stores with seamless checkout flows. Integrated payments, inventory, and analytics systems."
    }
  ];

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE - STICKY */}
          <div className="lg:sticky lg:top-32 h-fit">
            {/* Label */}
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
                Our Expertise
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-white">Specialized</span>
              <br />
              <span className="text-white">Solutions for</span>
              <br />
              <span className="text-orange-400">Hyper-Growth</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-md">
              We combine strategic thinking, modern design, and cutting-edge technology to deliver results that exceed expectations and drive sustainable business growth.
            </p>

            {/* Feature Card */}
            <div className="p-6 bg-dark-secondary border border-dark-tertiary rounded-2xl hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center flex-shrink-0 border border-orange-500/30 hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-orange-400 transition-colors duration-300">
                    Conversion-First Approach
                  </h3>
                  <p className="text-sm text-gray-400">
                    Every design decision optimized for user engagement and business results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="space-y-6 lg:h-[700px] lg:overflow-y-auto lg:pr-4 scrollbar-thin">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group p-8 bg-dark-secondary border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-105"
              >
                {/* Number Background */}
                <div className="text-7xl font-black text-gray-900/40 mb-4 leading-none group-hover:text-gray-800/60 transition-colors duration-300">
                  {feature.number}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-12 transition-all duration-300"></div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.3);
          border-radius: 3px;
          transition: background 0.3s ease;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.6);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
