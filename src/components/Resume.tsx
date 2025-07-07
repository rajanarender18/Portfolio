import { Download, Calendar, MapPin, Mail, Phone, Award, BookOpen } from 'lucide-react';

const Resume = () => {
  const handleDownloadCV = () => {
    // Create a download link for the CV
    const link = document.createElement('a');
    link.href = '/Rajanarender_Resume.pdf';
    link.download = 'Rajanarender_Resume.pdf';
    link.click();
  };

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Lovely Professional University',
      year: '2023 - 2026',
      gpa: '7.0',
    },
    {
      degree: 'Diploma in Electronics and Communication Engineering',
      institution: 'Government Polytechnic College, Mahabubnagar',
      year: '2020 - 2023',
      gpa: '8.31%',
    },
    {
      degree: 'Matriculation',
      institution: 'SPR School Of Excellence, Hyderabad',
      year: '2016 - 2020',
      gpa: '8.5',
    },
  ];

  const certifications = [
    'Cloud Computing Certification By NPTEL',
    'DevOps-Production for planning (GFG)',
    'Mastering Data Structures and Algorithms using C and C++(Coursera)',
    'Mastering in Computer Networks (Coursera)',
    'Design and Analysis of Algorithms (Coursera)',
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              My <span className="text-orange-500">Resume</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A comprehensive overview of my education and achievements
            </p>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-3">
                    <Mail className="text-orange-500" size={20} />
                  </div>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-orange-500" size={18} />
                    <span className="text-gray-700">rajanarenderchalla@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-orange-500" size={18} />
                    <span className="text-gray-700">+91 9008121614</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-orange-500" size={18} />
                    <span className="text-gray-700">Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </div>
               {/* Certifications */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-3">
                    <Award className="text-orange-500" size={20} />
                  </div>
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              

              
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Education */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-3">
                    <BookOpen className="text-orange-500" size={20} />
                  </div>
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-gray-800 mb-1">{edu.degree}</h4>
                      <p className="text-orange-600 font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center space-x-4 text-gray-600 mb-2">
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.year}
                        </span>
                        <span className="font-medium">Score: {edu.gpa}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;