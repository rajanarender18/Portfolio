import { GraduationCap, Target, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-orange-500">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate final-year student eager to make a meaningful impact in the tech industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8 text-center">
                  <GraduationCap size={80} className="text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Final Year Student</h3>
                  <p className="text-gray-600">Computer Science Engineering</p>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Hello! I'm Rajanarender
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a final-year Computer Science Engineering student with a passion for creating innovative
                solutions through technology. My journey in programming started with curiosity and has evolved
                into a deep commitment to building impactful applications.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. My goal is
                to contribute to meaningful projects that make a difference in people's lives while growing
                professionally in a dynamic environment.
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Target className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Career Objective</h4>
                    <p className="text-gray-600">
                      Seeking internship or entry-level opportunities to apply my skills and contribute to innovative projects
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Heart className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">What I Love</h4>
                    <p className="text-gray-600">
                      Problem-solving, learning new technologies, and creating user-friendly applications
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Award className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Key Strengths</h4>
                    <p className="text-gray-600">
                      Quick learner, team player, analytical thinking, and strong communication skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;