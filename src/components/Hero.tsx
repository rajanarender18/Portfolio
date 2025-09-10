import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
  <div className="w-72 h-72 mx-auto rounded-full overflow-hidden shadow-2xl">
    <img
      src="https://res.cloudinary.com/dfjlxm0ib/image/upload/v1757481128/IMG_0208_xxp9ng.jpg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>





          {/* Name and Title */}
          <h1
  className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
  style={{ fontFamily: 'Times New Roman, serif' }}
>
  Hi, I'm <span className="text-orange-500">Rajanarender</span>
</h1>

<p
  className="text-xl md:text-2xl text-gray-600 mb-6"
  style={{ fontFamily: 'Times New Roman, serif' }}
>
  Passionate <span className="text-orange-500 font-semibold">Full Stack Developer</span> & Final Year Student
</p>

{/* Description */}
<p
  className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
  style={{ fontFamily: 'Times New Roman, serif' }}
>
  In search of chances to make a meaningful contribution to initiatives that revolve around technology and innovation.
  Packed with new ideas and ready to give my all to your team.
</p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/rajanarender18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rajanarenderreddy-challa-a30397235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rajanarenderchalla@email.com"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+919908121614"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
            >
              <Phone size={24} />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-orange-500 hover:text-orange-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
