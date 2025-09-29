import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { 
  Home, User, Briefcase, FolderOpen, MessageSquare, Phone, Youtube, Menu
} from 'lucide-react';
import { portfolioData } from '../../data/portfolio-data';
// Import the logo
import betterCallAlpLogo from '../../assets/bettercallalp.jpg';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/portfolio', label: 'Portfolio', icon: FolderOpen },
    { path: '/testimonials', label: 'Reviews', icon: MessageSquare },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  const navigateToPage = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-[#94e2d5]/20 to-[#181825]/80 backdrop-blur-md shadow-2xl border-b border-[#94e2d5]/30' 
          : 'bg-gradient-to-r from-[#94e2d5]/10 to-[#181825]/40 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Smaller navbar height - compact but still accommodates logo */}
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-20 xl:h-20">
          
          {/* Logo Section with Big Logo in Compact Navbar */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigateToPage('/')}
          >
            {/* Big Logo in Smaller Navbar */}
            <div className="relative flex-shrink-0">
              <img
                src={betterCallAlpLogo}
                alt="Better Call ALP Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 object-contain"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                  backgroundColor: 'transparent'
                }}
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.outerHTML = `
                    <div class="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 bg-gradient-to-br from-[#94e2d5] to-[#3498db] rounded-xl flex items-center justify-center shadow-lg">
                      <span class="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">ALP</span>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Compact Brand Text */}
            <div className="hidden sm:block min-w-0 flex-1">
              <div className="flex flex-col">
                {/* Name - Compact but readable */}
                <h1 className="text-white font-bold font-heading leading-tight truncate
                  text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  Abhishek Leela Pandey
                </h1>
                
                {/* Tagline - Compact */}
                <p className="text-[#94e2d5] font-medium leading-tight truncate
                  text-xs sm:text-sm md:text-sm lg:text-base xl:text-base">
                  EdTech Leader × AI Filmmaker
                </p>
              </div>
            </div>
            
            {/* Mobile compact text */}
            <div className="block sm:hidden">
              <div className="flex flex-col">
                <h1 className="text-white font-bold text-sm leading-tight">ALP</h1>
                <p className="text-[#94e2d5] text-xs">Creator</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Compact buttons */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  className={`flex items-center space-x-2 transition-all duration-300 px-3 py-2
                    text-xs
                    ${isActive 
                      ? 'bg-[#94e2d5] text-[#181825] hover:bg-[#94e2d5]/90 shadow-lg font-semibold' 
                      : 'text-white border-white/30 hover:bg-white/10 hover:border-[#94e2d5]/50'
                    }`}
                  onClick={() => navigateToPage(item.path)}
                >
                  <IconComponent size={14} />
                  <span className="hidden xl:inline">{item.label}</span>
                  <span className="xl:hidden">{item.label.substring(0, 4)}</span>
                </Button>
              );
            })}
          </div>

          {/* Right Side Actions - Compact */}
          <div className="flex items-center space-x-2">
            {/* YouTube Button - Compact */}
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white shadow-lg px-3 py-2 text-xs"
              onClick={() => window.open(portfolioData.profile.youtubeChannel, '_blank')}
            >
              <Youtube className="w-3 h-3" />
              <span className="hidden md:inline">YouTube</span>
              <span className="md:hidden">YT</span>
            </Button>

            {/* Mobile menu button - Compact */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden text-white border-white/30 hover:bg-white/10 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className="lg:hidden overflow-hidden rounded-lg mt-2"
          style={{
            background: 'linear-gradient(135deg, rgba(148, 226, 213, 0.2) 0%, rgba(24, 24, 37, 0.9) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(148, 226, 213, 0.3)'
          }}
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 border-t border-[#94e2d5]/20">
            
            {/* Mobile logo section */}
            <div className="flex items-center justify-center pb-4 border-b border-white/10">
              <img
                src={betterCallAlpLogo}
                alt="Better Call ALP"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                style={{ backgroundColor: 'transparent' }}
              />
              <div className="ml-3 text-left">
                <div className="text-white font-bold text-lg">Abhishek Leela Pandey</div>
                <div className="text-[#94e2d5] text-base">EdTech Leader × AI Filmmaker</div>
              </div>
            </div>
            
            {/* Navigation items */}
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  className={`w-full justify-start space-x-3 py-3 text-sm transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#94e2d5] text-[#181825] hover:bg-[#94e2d5]/90 font-semibold' 
                      : 'text-white border-white/30 hover:bg-white/10'
                  }`}
                  onClick={() => navigateToPage(item.path)}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
            
            {/* YouTube button in mobile menu */}
            <Button
              variant="default"
              size="sm"
              className="w-full justify-start space-x-3 mt-4 py-3 text-sm bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open(portfolioData.profile.youtubeChannel, '_blank')}
            >
              <Youtube className="w-5 h-5" />
              <span>Visit YouTube Channel</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
