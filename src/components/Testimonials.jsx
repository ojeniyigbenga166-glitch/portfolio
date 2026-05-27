import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

function TestimonialSkeleton() {
  return (
    <div className="p-8 bg-dark-secondary border border-dark-tertiary rounded-2xl animate-pulse space-y-4">
      <div className="h-4 bg-dark-tertiary rounded w-24"></div>
      <div className="space-y-2">
        <div className="h-3 bg-dark-tertiary rounded w-full"></div>
        <div className="h-3 bg-dark-tertiary rounded w-full"></div>
        <div className="h-3 bg-dark-tertiary rounded w-4/5"></div>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-dark-tertiary">
        <div className="w-10 h-10 bg-dark-tertiary rounded-full"></div>
        <div className="space-y-2">
          <div className="h-3 bg-dark-tertiary rounded w-24"></div>
          <div className="h-3 bg-dark-tertiary rounded w-32"></div>
        </div>
      </div>
    </div>
  );
}

function StarRating({ rating = 5 }) {
  const stars = Math.min(5, Math.max(1, Math.round(rating)));
  return (
    <div className="text-yellow-400 text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
      {'⭐'.repeat(stars)}
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        setTestimonials(data || []);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials.');
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            What clients are saying about working with me
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => <TestimonialSkeleton key={i} />)}
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-12 text-red-400"><p>{error}</p></div>
        )}

        {!loading && !error && testimonials.length === 0 && (
          <div className="text-center py-12 text-gray-500"><p>No testimonials yet.</p></div>
        )}

        {!loading && !error && testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="group p-8 bg-dark-secondary border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-105"
              >
                <StarRating rating={t.rating} />
                <p className="text-gray-300 text-base leading-relaxed mb-6 italic group-hover:text-gray-200 transition-colors duration-300">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-dark-tertiary group-hover:border-orange-500/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold text-sm flex-shrink-0">
                    {t.client_name?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                  <div>
                    <p className="font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{t.client_name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
