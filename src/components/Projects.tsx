import {Github, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Tripify - Travel Platform',
      description: 'Tripify is a full-stack travel platform simplify travel planning by offering personalized recommendations, real-time updates, and easy access to destination information. It aims to provide users with a seamless, budget-friendly, and enjoyable travel experience.',
      image: 'https://res.cloudinary.com/dfjlxm0ib/image/upload/v1751865912/Screenshot_2025-04-18_145429_bq09je.png',
      tech: ['javascript', 'Node.js', 'MongoDB', 'CSS'],
      github: 'https://github.com/rajanarender18/Backend_project_Tripify',
      category: 'Full Stack',
      icon: Globe,
    },
    {
      title: 'Local Sports League Management System',
      description: 'The Local Sports League Management System is a web-based platform designed to streamline and automate the management of local sports leagues. It allows administrators to register teams, schedule matches, record scores, track player statistics, and update league standings in real-time, thereby replacing error-prone manual methods and offering a dynamic experience for players, managers, and fans.',
      image: 'https://res.cloudinary.com/dfjlxm0ib/image/upload/v1751868633/Screenshot_2025-04-27_230844_zdcsno.png',
      tech: ['Laravel', 'MySQL', 'PHP', 'Bootstrap'],
      github: 'https://github.com/rajanarender18/localsportsmanagementsystem',
      category: 'Full Stack',
      icon: Code,
    },
    {
      title: ' Peetzaah (React Project)',
      description: 'Peetzaah is an innovative platform built for pizza enthusiasts, offering curated recipes, expert tips, pizzeria recommendations, and community engagement features. It aims to centralize diverse pizza-related content and provide a personalized, interactive space where users can explore and share their love for pizza.',
      image: 'https://res.cloudinary.com/dfjlxm0ib/image/upload/v1745327529/zujjt39sbowcxpcfv09w.png',
      tech: ['React', 'CSS', 'Bootstrap', 'MongoDB'],
      github: 'https://github.com/rajanarender18/reactproject_peedzah',
      category: 'Frontend',
      icon: Globe,
    },
    {
      title: ' GadgetPedia',
      description: 'GadgetPedia is an online platform designed to provide users with detailed insights, reviews, and specifications of the latest tech gadgets. It helps users explore, compare, and stay updated on various electronic devices through a clean, responsive interface and dynamic content presentation.',
      image: 'https://res.cloudinary.com/dfjlxm0ib/image/upload/v1745348582/k3clykpnahvp0jxov89a.png',
      tech: ['HTML5','CSS', 'Javascript', 'Node.js', 'Express', 'MOngoDB',],
      github: 'https://github.com/rajanarender18/GadgetPedia',
      category: 'Full Stack',
      icon: Smartphone,
    },
    {
      title: 'Portfoilio Website',
      description: 'Interactive dashboard for data visualization with charts, filters, and real-time data updates for business insights.',
      image: 'https://res.cloudinary.com/dfjlxm0ib/image/upload/v1751874113/Screenshot_2025-07-07_115441_y81j8f.png',
      tech: ['React', 'TailwindCSS'],
      github: 'https://github.com/rajanarender18/Portfolio',
      category: 'Frontend',
      icon: Code,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              My <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development, problem-solving, and creative thinking
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="text-orange-500" size={20} />
                    </div>
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
            </p>
            <a
              href="https://github.com/rajanarender18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;