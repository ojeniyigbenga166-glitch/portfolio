export default function CV() {
  const experience = [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "2021 - Present",
      achievements: [
        "Led development of high-traffic web applications",
        "Improved application performance by 60% through optimization",
        "Mentored junior developers"
      ]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Solutions Co.",
      duration: "2019 - 2021",
      achievements: [
        "Built responsive UI components used across 8 projects",
        "Reduced load time by 45% with code splitting",
        "Implemented design system for consistency"
      ]
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "StartUp Ventures",
      duration: "2018 - 2019",
      achievements: [
        "Developed client websites from scratch",
        "Fixed bugs and performance issues",
        "Collaborated with design and backend teams"
      ]
    }
  ];

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "Figma", "VS Code", "AWS"]
    },
    {
      category: "CMS",
      skills: ["WordPress", "Shopify", "Wix", "Webflow", "Squarespace"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Physics Electronics",
      institution: "Federal University of Technology, Akure",
      year: "2018",
      certifications: ["AWS Certified Developer", "Google Cloud Professional"]
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      field: "Web Development",
      institution: "Code Academy",
      year: "2017",
      certifications: ["React Advanced", "Node.js Mastery"]
    }
  ];

  return (
    <section id="cv" className="py-24 px-6 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto">

        {/* EXPERIENCE SECTION */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-white">Work </span>
              <span className="text-orange-400">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="group p-8 bg-dark border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-orange-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-400 md:text-right">
                    {exp.duration}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-orange-400 font-bold flex-shrink-0">▸</span>
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>

                {/* Hover line */}
                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-12 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-white">Technical </span>
              <span className="text-orange-400">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="group p-6 bg-dark border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                {/* Category Title */}
                <h3 className="text-lg font-bold text-orange-400 mb-4 group-hover:text-orange-300 transition-colors duration-300">
                  {skillGroup.category}
                </h3>

                {/* Skills List */}
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

                {/* Hover line */}
                <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-8 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <div>
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-white">Education & </span>
              <span className="text-orange-400">Certifications</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="group p-8 bg-dark border border-dark-tertiary rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                {/* Degree Info */}
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

                {/* Certifications */}
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

                {/* Hover line */}
                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-12 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
