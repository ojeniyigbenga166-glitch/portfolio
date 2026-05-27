import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// ── Skeleton ──────────────────────────────────────────────────────────────────
function ExpSkeleton() {
  return (
    <div className="p-8 bg-dark border border-dark-tertiary rounded-2xl animate-pulse space-y-4">
      <div className="h-6 bg-dark-tertiary rounded w-1/2"></div>
      <div className="h-4 bg-dark-tertiary rounded w-1/3"></div>
      <div className="space-y-2 mt-4">
        <div className="h-3 bg-dark-tertiary rounded w-full"></div>
        <div className="h-3 bg-dark-tertiary rounded w-5/6"></div>
      </div>
    </div>
  );
}

// ── Hardcoded skills (not in DB — kept static) ────────────────────────────────
const skillCategories = [
  { category: 'Frontend',  skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
  { category: 'Backend',   skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase'] },
  { category: 'Tools',     skills: ['Git', 'Docker', 'Figma', 'VS Code', 'AWS'] },
  { category: 'CMS',       skills: ['WordPress', 'Shopify', 'Wix', 'Webflow', 'Squarespace'] },
];

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    field: 'Physics Electronics',
    institution: 'Federal University of Technology, Akure',
    year: '2018',
    certifications: ['AWS Certified Developer', 'Google Cloud Professional'],
  },
  {
    id: 2,
    degree: 'Full Stack Web Development Bootcamp',
    field: 'Web Development',
    institution: 'Code Academy',
    year: '2017',
    certifications: ['React Advanced', 'Node.js Mastery'],
  },
];

// ── Helper: format date range ─────────────────────────────────────────────────
function formatDuration(start, end) {
  if (!start) return '';
  const fmt = (d) => {
    if (!d || d === 'Present' || d === 'present') return 'Present';
    const date = new Date(d);
    if (isNaN(date.getTime())) return d; // return raw string if not a valid date
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };
  return `${fmt(start)} – ${fmt(end)}`;
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function CV() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExperience() {
      try {
        const { data, error } = await supabase
          .from('experience')
          .select('*')
          .order('start_date', { ascending: false });
        if (error) throw error;
        setExperience(data || []);
      } catch (err) {
        console.error('Error fetching experience:', err);
        setError('Failed to load experience.');
      } finally {
        setLoading(false);
      }
    }
    fetchExperience();
  }, []);

  return (
    <section id="cv" className="py-24 px-6 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto">

        {/* ── EXPERIENCE ── */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-white">Work </span>
              <span className="text-orange-400">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </div>

          {loading && (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => <ExpSkeleton key={i} />)}
            </div>
          )}

          {!loading && error && (
            <div className="text-center py-8 text-red-400"><p>{error}</p></div>
          )}

          {!loading && !error && experience.length === 0 && (
            <div className="text-center py-8 text-gray-500"><p>No experience entries found.</p></div>
          )}

          {!loading && !error && experience.length > 0 && (
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="group p-8 bg-dark border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {exp.job_title}
                      </h3>
                      <p className="text-orange-400 font-semibold">{exp.company_name}</p>
                    </div>
                    <div className="text-sm text-gray-400 md:text-right whitespace-nowrap">
                      {formatDuration(exp.start_date, exp.end_date)}
                    </div>
                  </div>

                  {exp.description && (
                    <div className="space-y-2">
                      {exp.description.split('\n').filter(Boolean).map((line, idx) => (
                        <div key={idx} className="flex gap-3">
                          <span className="text-orange-400 font-bold flex-shrink-0">▸</span>
                          <p className="text-gray-300">{line}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-12 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── SKILLS (static) ── */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-white">Technical </span>
              <span className="text-orange-400">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="group p-6 bg-dark border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <h3 className="text-lg font-bold text-orange-400 mb-4 group-hover:text-orange-300 transition-colors duration-300">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="inline-block px-4 py-2 bg-dark-secondary border border-dark-tertiary rounded-lg text-gray-300 text-sm hover:border-orange-500/50 hover:text-orange-300 hover:scale-110 hover:bg-orange-500/10 transition-all duration-300 cursor-default mr-2 mb-2"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-8 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ── EDUCATION (static) ── */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-white">Education & </span>
              <span className="text-orange-400">Certifications</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="group p-8 bg-dark border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-orange-400 font-semibold">{edu.field}</p>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-3">
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-300 mb-3">Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-orange-500/15 border border-orange-500/30 rounded-full text-orange-300 text-xs font-medium hover:border-orange-500/50 hover:bg-orange-500/25 hover:scale-110 transition-all duration-300"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-12 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
