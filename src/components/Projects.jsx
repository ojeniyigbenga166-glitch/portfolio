import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// ── Device Mockup Components ──────────────────────────────────────────────────
function DesktopMockup({ image }) {
  return (
    <div className="relative w-full h-52 sm:h-64 mx-auto scale-90 hover:scale-100 transition-transform duration-300">
      <div className="bg-gray-900 rounded-2xl shadow-2xl border-8 border-gray-800 relative">
        <div className="bg-black rounded-t-lg overflow-hidden">
          <img src={image} alt="Desktop Preview" className="w-full h-36 sm:h-40 object-cover" />
        </div>
        <div className="bg-gray-900 h-2 flex justify-center">
          <div className="w-32 h-2 bg-gray-900 rounded-b-xl"></div>
        </div>
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-3 rounded-b-2xl"></div>
      </div>
    </div>
  );
}

function MobileMockup({ image }) {
  return (
    <div className="relative w-28 sm:w-32 h-56 sm:h-64 mx-auto scale-90 hover:scale-100 transition-transform duration-300">
      <div className="bg-black rounded-3xl shadow-2xl border-8 border-gray-800 relative overflow-hidden h-full">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-3xl z-10"></div>
        <img src={image} alt="Mobile Preview" className="w-full h-full object-cover pt-2" />
      </div>
    </div>
  );
}

function TabletMockup({ image }) {
  return (
    <div className="relative w-44 sm:w-52 h-40 sm:h-48 mx-auto scale-90 hover:scale-100 transition-transform duration-300">
      <div className="bg-gray-900 rounded-xl shadow-2xl border-4 border-gray-800 relative overflow-hidden h-full">
        <img src={image} alt="Tablet Preview" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-700"></div>
      </div>
    </div>
  );
}

// ── Skeleton Loader ───────────────────────────────────────────────────────────
function ProjectSkeleton() {
  return (
    <div className="bg-dark-secondary border border-dark-tertiary rounded-2xl overflow-hidden animate-pulse">
      <div className="bg-dark-tertiary/50 h-52 sm:h-64"></div>
      <div className="p-4 sm:p-6 space-y-3">
        <div className="h-4 bg-dark-tertiary rounded w-1/4"></div>
        <div className="h-6 bg-dark-tertiary rounded w-3/4"></div>
        <div className="h-4 bg-dark-tertiary rounded w-full"></div>
        <div className="flex gap-2 mt-2">
          <div className="h-6 w-16 bg-dark-tertiary rounded-full"></div>
          <div className="h-6 w-20 bg-dark-tertiary rounded-full"></div>
          <div className="h-6 w-14 bg-dark-tertiary rounded-full"></div>
        </div>
        <div className="h-10 bg-dark-tertiary rounded-lg mt-4"></div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects.');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  // Derive unique categories from DB tags
  const allTags = projects.flatMap((p) => p.tags || []);
  const uniqueCategories = ['All', ...new Set(allTags)];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => (p.tags || []).includes(activeCategory));

  const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 2);

  const getMockup = (mockupType, image) => {
    switch (mockupType) {
      case 'mobile':
        return <MobileMockup image={image} />;
      case 'tablet':
        return <TabletMockup image={image} />;
      default:
        return <DesktopMockup image={image} />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Featured <span className="text-orange-400">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
            Explore my latest work showcasing modern design, clean code, and impactful results
          </p>
        </div>

        {/* Category Filter — only show when data is loaded */}
        {!loading && uniqueCategories.length > 1 && (
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => { setActiveCategory(category); setShowMore(false); }}
                className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/50'
                    : 'bg-dark-tertiary text-gray-300 hover:text-orange-400 hover:border-orange-500/50 border border-dark-tertiary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <ProjectSkeleton />
            <ProjectSkeleton />
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="text-center py-16 text-red-400">
            <p className="text-lg font-semibold">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">No projects found.</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && filteredProjects.length > 0 && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-dark-secondary border border-dark-tertiary rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 flex flex-col relative"
                >
                  {/* Project Number Badge */}
                  <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-orange-400 text-xs font-black">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  {/* Mockup / Image */}
                  <div className="bg-dark-tertiary/50 p-4 sm:p-6 flex items-center justify-center min-h-52 sm:min-h-64 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {project.image_url
                      ? getMockup(project.mockup_type || 'desktop', project.image_url)
                      : (
                        <div className="w-full h-40 bg-dark-tertiary rounded-xl flex items-center justify-center">
                          <span className="text-gray-600 text-sm">No image</span>
                        </div>
                      )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {(project.tags || []).map((tag) => (
                        <span key={tag} className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-5 flex-grow">
                      {project.description}
                    </p>

                    {/* Action Button */}
                    {project.link && (
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center text-sm"
                        >
                          🔗 View Live
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Show More / Less */}
            {filteredProjects.length > 2 && (
              <div className="mt-10 sm:mt-12 text-center">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
                >
                  {showMore ? '← Show Less' : 'View More Projects →'}
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}
