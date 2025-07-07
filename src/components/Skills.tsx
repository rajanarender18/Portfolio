import { Code, Database, Globe, Server, Palette, Zap,} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-400 to-blue-600',
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-400 to-green-600',
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'from-purple-400 to-purple-600',
      skills: ['MongoDB', 'PostgreSQL', 'Git/GitHub', 'Docker', 'AWS Basics'],
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-orange-400 to-orange-600',
      skills: ['JavaScript', 'Java', 'C++', 'SQL', 'C'],
    },
  ];

  const expertiseAreas = [
    { name: 'Web Development', level: 'Advanced', icon: '🌐' },
    { name: 'Problem Solving', level: 'Expert', icon: '🧩' },
    { name: 'API Development', level: 'Advanced', icon: '🔗' },
    { name: 'Cloud Services', level: 'Advanced', icon: '☁️' },
    { name: 'Database Design', level: 'Intermediate', icon: '🗄️' },
  ];

  const softSkills = [
    { name: 'Team Leadership', icon: '👑'},
    { name: 'Communication', icon: '💬'},
    { name: 'Quick Learning', icon: '⚡'},
    { name: 'Problem Solving', icon: '🧩'},
    { name: 'Time Management', icon: '⏰'},
    { name: 'Collaboration', icon: '🤝'},
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            {/* Main heading with enhanced typography */}
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-orange-500 to-gray-800 mb-6 tracking-tight leading-tight">
                Technical
                <span className="block text-6xl md:text-8xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-extrabold">
                  Expertise
                </span>
              </h2>
              
              {/* Decorative background text */}
              <div className="absolute inset-0 -z-10 opacity-5">
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                  Technical
                  <span className="block text-6xl md:text-8xl font-extrabold">
                    Expertise
                  </span>
                </h2>
              </div>
            </div>

            {/* Subtitle with elegant styling */}
            <div className="relative max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Crafting digital experiences through
                <span className="font-semibold text-orange-500 mx-2">innovative technologies</span>
                and
                <span className="font-semibold text-orange-500 mx-2">creative solutions</span>
              </p>
              
              {/* Decorative underline */}
              <div className="mt-4 flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Technical Skills - Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    {/* Header with gradient background */}
                    <div className={`bg-gradient-to-r ${category.color} rounded-xl p-4 mb-6 text-center`}>
                      <IconComponent className="text-white mx-auto mb-2" size={32} />
                      <h3 className="text-white font-bold text-lg">{category.title}</h3>
                    </div>
                    
                    {/* Skills as tags */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-gray-50 rounded-lg px-4 py-2 text-center font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expertise Levels */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
              <Zap className="text-orange-500 mr-3" size={28} />
              Expertise Areas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{area.icon}</span>
                    <span className="font-semibold text-gray-800">{area.name}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    area.level === 'Expert' ? 'bg-green-100 text-green-700' :
                    area.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                    area.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {area.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
              <Palette className="text-orange-500 mr-3" size={28} />
              Personal Qualities & Soft Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-orange-50 hover:to-orange-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                    <h4 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{skill.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;