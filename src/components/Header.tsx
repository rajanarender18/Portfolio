import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, FileText, Mail, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Update scrolled state for header styling
      setScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Animated background overlay */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 z-50">
        <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>

      <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-orange-100' 
          : 'bg-gradient-to-b from-white/90 via-white/70 to-transparent backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
  <div className="flex items-center space-x-2">
    <Sparkles className="animate-pulse" size={20} />
    <span
      style={{ fontFamily: 'Times New Roman, serif' }}
      className="text-xl font-bold tracking-tight"
    >
      Raj<span className="text-orange-200">anarender</span>
    </span>
  </div>
</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Animated background for active state */}
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl animate-pulse opacity-20"></div>
                    )}
                    
                    {/* Icon with hover animation */}
                    <IconComponent 
                      size={18} 
                      className={`transition-transform duration-300 group-hover:rotate-12 ${
                        activeSection === item.id ? 'text-white' : ''
                      }`} 
                    />
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Hover indicator */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${
                      activeSection === item.id ? 'w-full' : ''
                    }`}></div>
                  </button>
                );
              })}
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative group p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
            >
              <div className="relative z-10">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200"></div>
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6">
              {/* Animated backdrop */}
              <div className="absolute inset-x-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {navItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`group flex flex-col items-center space-y-2 p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                            activeSection === item.id
                              ? 'text-white bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg'
                              : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                          }`}
                          style={{ 
                            animationDelay: `${index * 0.1}s`,
                            animation: 'fadeInUp 0.5s ease-out forwards'
                          }}
                        >
                          {/* Icon container */}
                          <div className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${
                            activeSection === item.id 
                              ? 'bg-white/20' 
                              : 'bg-orange-100 group-hover:bg-orange-200'
                          }`}>
                            <IconComponent 
                              size={20} 
                              className={`transition-transform duration-300 group-hover:rotate-12 ${
                                activeSection === item.id ? 'text-white' : 'text-orange-600'
                              }`}
                            />
                          </div>
                          <span className="text-sm">{item.label}</span>
                          
                          {/* Active indicator */}
                          {activeSection === item.id && (
                            <div className="w-6 h-1 bg-white/50 rounded-full"></div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-50"></div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
