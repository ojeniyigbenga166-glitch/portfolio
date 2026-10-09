import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { backupServices } from '../data/servicesData';

// Skeleton card
function ServiceSkeleton() {
  return (
    <div className="p-6 bg-dark-secondary border border-dark-tertiary rounded-2xl animate-pulse space-y-4">
      <div className="w-12 h-12 bg-dark-tertiary rounded-xl"></div>
      <div className="h-6 bg-dark-tertiary rounded w-2/3"></div>
      <div className="space-y-2">
        <div className="h-3 bg-dark-tertiary rounded w-full"></div>
        <div className="h-3 bg-dark-tertiary rounded w-5/6"></div>
      </div>
    </div>
  );
}

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setServices(data && data.length > 0 ? data : backupServices);
      } catch (err) {
        console.error('Error fetching services, using backup data:', err);
        setServices(backupServices);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-dark-secondary/20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">What I Offer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Services & <span className="text-orange-400">Solutions</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            Empowering businesses with modern web engineering, e-commerce systems, and AI automation.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => <ServiceSkeleton key={i} />)}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && services.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No services found.</p>
          </div>
        )}

        {/* Services Grid */}
        {!loading && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group p-6 sm:p-8 bg-dark-secondary border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                    {service.icon_name || service.icon || '🚀'}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Badges */}
                  {service.features && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dark-tertiary/70 text-gray-300 text-xs rounded-lg border border-dark-tertiary group-hover:border-orange-500/30 transition-colors duration-300"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Inquire CTA Button */}
                <div className="pt-4 border-t border-dark-tertiary/60">
                  <a
                    href={`https://wa.me/2348147574404?text=${encodeURIComponent(`Hi Olugbenga, I'm interested in discussing your ${service.title} service.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-300 group-hover:translate-x-1 transform"
                  >
                    <span>Inquire Service</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
