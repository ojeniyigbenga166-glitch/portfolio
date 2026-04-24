import portraitImage from '../assets/images/mr gbenga.png';

export default function About() {
  const technologies = ["React.js", "TypeScript", "Next.js"];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-dark via-dark to-orange-950/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT SIDE – IMAGE & BADGES */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Main Image Container */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Glow Background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-2xl opacity-50 -z-10"></div>

              {/* Image */}
              <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl h-[380px] sm:h-[480px] lg:h-[560px] bg-dark-secondary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30">
                <img
                  src={portraitImage}
                  alt="Professional portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Tech Badges – positioned safely within image width */}
              <div className="absolute top-6 -right-2 sm:-right-4 space-y-2 z-10">
                {technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="group cursor-default"
                    style={{
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-dark-secondary border border-orange-500/50 rounded-full backdrop-blur-md hover:border-orange-400 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-semibold text-orange-300 whitespace-nowrap">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – TEXT CONTENT */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            {/* Label */}
            <div className="inline-block mb-4 sm:mb-6 w-fit mx-auto lg:mx-0">
              <span className="text-xs font-black tracking-widest text-orange-400 uppercase">
                The Architect
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 sm:mb-8">
              <span className="text-white">I bridge the gap between</span>
              <br />
              <span className="italic text-white">Code</span>
              <span className="text-white"> and </span>
              <span className="text-orange-400">Capital</span>
              <span className="text-white">.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              With over 8 years of experience, I've moved past simply "coding websites." I focus on building technical assets that solve real business bottlenecks. Every project is an opportunity to create scalable, beautiful solutions that drive measurable growth.
            </p>

            {/* Additional Description */}
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
              I combine strategic thinking with modern development practices to deliver products that don't just look exceptional—they perform at the highest level and deliver ROI.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40">
                Let's Work Together
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
