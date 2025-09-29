import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Play, Award, Users, BookOpen, TrendingUp, ArrowRight, Sparkles, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const HomePage = () => {
  const navigate = useNavigate();

  // Psychology-based achievement stats with enhanced colors
  const quickStats = [
    { 
      icon: Award, 
      label: '40 Under 40 Winner', 
      color: 'text-yellow-300',
      emotion: 'Success & Achievement',
      bgGradient: 'from-yellow-400/20 to-orange-400/20'
    },
    { 
      icon: Users, 
      label: '100K+ Students', 
      color: 'text-[#94e2d5]',
      emotion: 'Trust & Community',
      bgGradient: 'from-[#94e2d5]/20 to-cyan-400/20'
    },
    { 
      icon: TrendingUp, 
      label: '6K+ IIM Converts', 
      color: 'text-green-300',
      emotion: 'Growth & Success',
      bgGradient: 'from-green-400/20 to-emerald-400/20'
    },
    { 
      icon: BookOpen, 
      label: '4 Books Published', 
      color: 'text-purple-300',
      emotion: 'Knowledge & Wisdom',
      bgGradient: 'from-purple-400/20 to-indigo-400/20'
    },
  ];

  // Trust indicators with enhanced styling
  const trustIndicators = [
    { text: '11+ Years Experience', icon: '✓', color: 'text-emerald-400' },
    { text: '100K+ Students Trusted', icon: '✓', color: 'text-[#94e2d5]' },
    { text: 'Award-Winning Innovation', icon: '✓', color: 'text-yellow-400' },
    { text: 'Proven Success Record', icon: '✓', color: 'text-purple-400' }
  ];

  return (
    <div className="page-container">
      <div className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
        >
          {/* Profile Section - Perfectly Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            {/* Enhanced Profile Image */}
            <motion.div
              className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              {/* Trust-building gradient ring with animation */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#94e2d5] via-[#3498db] to-[#2980b9] rounded-full p-2 sm:p-3 shadow-2xl"
                style={{ 
                  animation: 'trustPulse 4s ease-in-out infinite',
                  background: 'conic-gradient(from 0deg, #94e2d5, #3498db, #2980b9, #94e2d5)'
                }}
              >
                <div className="w-full h-full bg-white rounded-full p-1 sm:p-2">
                  <img
                    src={portfolioData.profile.profileImage}
                    alt={portfolioData.profile.name}
                    className="w-full h-full object-cover rounded-full shadow-xl"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
                    }}
                  />
                </div>
              </div>
              
              {/* Achievement Badge with Enhanced Design */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-[#f4d03f] to-[#f39c12] text-[#2c3e50] text-xs sm:text-sm font-bold px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg border-2 border-white/80"
                animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-1">
                  <Star size={12} className="fill-current" />
                  <span>40 Under 40</span>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 text-2xl"
                animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                🎓
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 text-2xl"
                animate={{ y: [10, -10, 10], rotate: [0, -360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                🚀
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Heading Section with Color Psychology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
          >
            <h1 className="text-hero font-bold font-heading mb-6">
              {/* Warm, welcoming greeting - Light blue for openness */}
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 font-normal"
                    style={{ 
                      color: ' #a57edc', /* Sky blue - openness, friendliness */
                      textShadow: '2px 2px 8px rgba(135, 206, 235, 0.3)' 
                    }}>
                Hi, I'm
              </span>
              
              {/* Name with stunning gradient - Trust + Innovation */}
              <span className="leading-tight block"
                    style={{
                      background: 'linear-gradient(135deg,  #7340a6 0%,  #8659c0 30%, #a57edc 70%, #cba6f7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundSize: '200% 200%',
                      animation: 'gradientText 4s ease infinite',
                      textShadow: 'none'
                    }}>
                Abhishek Leela Pandey
              </span>
            </h1>
            
            {/* Professional Tagline - Trust-building teal */}
            <h2 className="mb-4 px-4 max-w-4xl font-semibold text-lg sm:text-xl md:text-2xl"
                style={{
                  color: '#94e2d5', /* Mint-aqua for trust and professionalism */
                  textShadow: '1px 1px 3px rgba(148, 226, 213, 0.5)'
                }}>
              EdTech Leader × AI Filmmaker × Mathematician × Author
            </h2>
            
            {/* Value Proposition with warm coral accent */}
            <p className="text-body max-w-4xl mx-auto mb-6 px-4 text-sm sm:text-base md:text-lg">
              <span className="font-semibold"
                    style={{ 
                      color: '#ff9f8a', /* Soft coral for creativity and warmth */
                      textShadow: '1px 1px 2px rgba(255, 159, 138, 0.4)'
                    }}>
                Trusted by 100K+ students
              </span>
              <span className="text-white/90"> • </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                {portfolioData.profile.tagline}
              </span>
            </p>
          </motion.div>

          {/* Achievement Stats - Color Psychology Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid-responsive-4">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${stat.bgGradient} flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-xs" style={{ color: stat.color.replace('text-', '#') }}>
                      {stat.emotion}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Action Buttons - Psychology-based Colors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="button-group"
          >
            <Button 
              size="lg" 
              onClick={() => navigate('/portfolio')}
              className="btn-responsive font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #94e2d5 0%, #3498db 100%)', /* Trust gradient */
                color: '#ffffff'
              }}
            >
              <Play size={18} className="mr-2" />
              <span>View AI Films</span>
            </Button>
            
            <Button 
              size="lg"
              onClick={() => window.open(portfolioData.profile.youtubeChannel, '_blank')}
              className="btn-responsive font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #ff9f8a 0%, #f4d03f 100%)', /* Innovation gradient */
                color: '#2c3e50'
              }}
            >
              <Play size={18} className="mr-2" />
              <span>Better Call ALP</span>
            </Button>
          </motion.div>

          {/* Navigation Cards - Enhanced Color Psychology */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid-responsive-3">
              {[
                { 
                  title: 'About Me', 
                  desc: 'My journey & achievements', 
                  path: '/about',
                  icon: '👨‍💼',
                  psychology: 'Trust & Professionalism',
                  gradient: 'from-blue-500/20 to-cyan-500/20',
                  titleColor: '#94e2d5', /* Trust */
                  psychologyColor: '#3498db'
                },
                { 
                  title: 'My Work', 
                  desc: 'AI films & EdTech projects', 
                  path: '/portfolio',
                  icon: '🎬',
                  psychology: 'Innovation & Creativity',
                  gradient: 'from-purple-500/20 to-pink-500/20',
                  titleColor: '#ff9f8a', /* Innovation */
                  psychologyColor: '#e74c3c'
                },
                { 
                  title: 'Get in Touch', 
                  desc: 'Let\'s work together', 
                  path: '/contact',
                  icon: '💼',
                  psychology: 'Collaboration & Growth',
                  gradient: 'from-green-500/20 to-emerald-500/20',
                  titleColor: '#2ecc71', /* Growth */
                  psychologyColor: '#27ae60'
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="glass-card cursor-pointer hover:scale-105"
                  onClick={() => navigate(card.path)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center text-3xl`}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: card.titleColor }}>
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base mb-3">
                    {card.desc}
                  </p>
                  <p className="text-xs font-medium mb-4" style={{ color: card.psychologyColor }}>
                    {card.psychology}
                  </p>
                  <div className="flex items-center justify-center group-hover:text-white transition-colors"
                       style={{ color: card.titleColor }}>
                    <span className="text-sm font-medium mr-2">Explore</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators - Enhanced Colors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 text-center max-w-4xl mx-auto"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 font-medium text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
                style={{ color: indicator.color }}
              >
                <span className="font-bold text-base">{indicator.icon}</span>
                <span>{indicator.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
