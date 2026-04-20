export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>

        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-dark-secondary border border-dark-tertiary rounded-full text-sm font-medium text-orange-400 mb-6 hover:scale-110 transition-transform duration-300">
          Ready to start?
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Let's create something <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            extraordinary together
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Whether you need a complete website redesign, a new application, or performance optimization, I'm here to help bring your vision to life.
        </p>

        {/* CTA Button */}
        <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40">
          Start Your Project
        </button>
      </div>
    </section>
  );
}
