import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Skeleton card
function ServiceSkeleton() {
  return (
    <div className="p-6 bg-dark-secondary border border-dark-tertiary rounded-2xl animate-pulse space-y-4">
      <div className="w-10 h-10 bg-dark-tertiary rounded-lg"></div>
      <div className="h-5 bg-dark-tertiary rounded w-2/3"></div>
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
        setServices(data || []);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services.');
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => <ServiceSkeleton key={i} />)}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-12 text-red-400">
            <p>{error}</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && services.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No services found.</p>
          </div>
        )}

        {/* Services Grid */}
        {!loading && !error && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group p-6 bg-dark-secondary border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:bg-dark-secondary/80"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                  {service.icon_name || '🚀'}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover line */}
                <div className="mt-4 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
