import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Alex delivered an exceptional website for our startup. The design is clean, the performance is outstanding, and he was a pleasure to work with.",
      author: "Sarah Mitchell",
      role: "Founder, TechStart",
      avatar: "🧑‍💼"
    },
    {
      id: 2,
      quote: "The attention to detail and technical expertise was impressive. Our conversion rate increased by 40% after the redesign.",
      author: "James Chen",
      role: "CEO, Digital Solutions",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      quote: "Professional, responsive, and incredibly talented. Alex transformed our vision into reality. Highly recommended!",
      author: "Emma Rodriguez",
      role: "Marketing Director, Growth Co",
      avatar: "👩‍💼"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            What clients are saying about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group p-8 bg-dark-secondary border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-105"
            >
              {/* Stars */}
              <div className="text-yellow-400 text-lg mb-4 group-hover:scale-110 transition-transform duration-300">⭐⭐⭐⭐⭐</div>

              {/* Quote */}
              <p className="text-gray-300 text-base leading-relaxed mb-6 italic group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-dark-tertiary group-hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-3xl group-hover:scale-125 transition-transform duration-300">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
