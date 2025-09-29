import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { portfolioData } from '../data/portfolio-data';
import { CountUp } from 'countup.js';
import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  GraduationCap,
  Target,
  Lightbulb,
  Heart
} from 'lucide-react';

const NumberCard = ({ stat, index }) => {
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (countRef.current && !hasStarted) {
      setHasStarted(true);
      const countUp = new CountUp(countRef.current, stat.number, {
        duration: 2.5,
        suffix: stat.suffix,
        useEasing: true,
        useGrouping: true,
      });
      
      setTimeout(() => {
        countUp.start();
      }, index * 200);
    }
  }, [hasStarted, stat.number, stat.suffix, index]);

  const getIconComponent = (iconString) => {
    const iconMap = {
      '🎓': GraduationCap,
      '👨‍🎓': Users,
      '🏆': Award,
      '🎬': Target,
      '📚': BookOpen
    };
    return iconMap[iconString] || Target;
  };

  const IconComponent = getIconComponent(stat.icon);

  return (
    <Card className="glass-card text-center hover:scale-105 transition-all duration-300 min-h-[200px] flex flex-col justify-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#94e2d5]/20 to-[#3498db]/20 flex items-center justify-center">
        <IconComponent className="w-8 h-8 text-[#94e2d5]" />
      </div>
      <div 
        ref={countRef}
        className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading"
      >
        0{stat.suffix}
      </div>
      <p className="text-secondary font-medium">{stat.label}</p>
    </Card>
  );
};

const AboutPage = () => {
  const navigate = useNavigate();

  const achievements = [
    "40 Under 40 Industry Leader",
    "100K+ Students Trained",
    "6K+ IIM Converts",
    "AI Filmmaking Pioneer", 
    "Mathematical Researcher",
    "Multi-Published Author",
    "EdTech Innovation Leader",
    "99.93+ CAT Percentile",
    "Bestselling Books",
    "YouTube Content Creator"
  ];

  const journeyMilestones = [
    {
      year: "2013-2018",
      title: "Foundation Years",
      description: "Started journey in mathematics education, achieving 99.93+ percentile in CAT multiple times",
      icon: "🎯"
    },
    {
      year: "2018-2020", 
      title: "EdTech Innovation",
      description: "Joined iQuanta and began revolutionizing online education with innovative teaching methods",
      icon: "🚀"
    },
    {
      year: "2020-2023",
      title: "Scaling Success", 
      description: "Grew platform to 100K+ students with 6K+ IIM converts, published mathematical research",
      icon: "📈"
    },
    {
      year: "2023-Present",
      title: "AI Pioneer",
      description: "Launched AI filmmaking journey with 'Better Call ALP', became 40 Under 40 winner",
      icon: "🎬"
    }
  ];

  const personalValues = [
    {
      icon: Heart,
      title: "Student Success",
      description: "Every student's success is my personal victory"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries with new ideas"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality"
    }
  ];

  return (
    <div className="page-container">
      <div className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-page-title font-bold mb-6">About Me</h1>
            <p className="text-body text-lg leading-relaxed">
              Award-winning EdTech leader, AI filmmaker, and mathematical innovator transforming education through creativity, technology, and proven methodologies that have helped <span className="text-accent-trust font-semibold">100,000+ students</span> achieve their dreams.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid-responsive-5">
              {portfolioData.stats.map((stat, index) => (
                <NumberCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-section-title font-bold mb-12 text-center">My Journey</h2>
            <div className="grid-responsive-2">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="glass-card hover:scale-105"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{milestone.icon}</div>
                    <div className="flex-1">
                      <div className="text-accent-innovation font-bold text-sm mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-section-title font-bold mb-12 text-center">My Values</h2>
            <div className="grid-responsive-3">
              {personalValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card text-center hover:scale-105"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#ff9f8a]/20 to-[#f4d03f]/20 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-[#ff9f8a]" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">
                      {value.title}
                    </h3>
                    <p className="text-secondary">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-section-title font-bold mb-12 text-center">Key Achievements</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge className="text-sm px-4 py-2 bg-gradient-to-r from-[#94e2d5]/20 to-[#3498db]/20 text-white border border-[#94e2d5]/40 hover:border-[#94e2d5]/60 transition-all duration-300">
                    {achievement}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card">
              <h2 className="text-section-title font-bold mb-6 text-center">My Story</h2>
              <div className="space-y-6 text-body text-center">
                <p>
                  My journey began with a simple belief: <span className="text-accent-trust font-semibold">education should be accessible, engaging, and transformative</span>. After achieving 99.93+ percentile in CAT multiple times, I realized that traditional teaching methods weren't reaching every student effectively.
                </p>
                <p>
                  This led me to <span className="text-accent-innovation font-semibold">iQuanta</span>, where I've spent over 11 years developing innovative teaching methodologies that have helped <span className="text-accent-trust font-semibold">100,000+ students</span> and resulted in <span className="text-accent-trust font-semibold">6,000+ IIM converts</span>.
                </p>
                <p>
                  Recently, I've ventured into <span className="text-accent-innovation font-semibold">AI filmmaking</span> through my "Better Call ALP" YouTube channel, combining creativity with education. Being recognized as a <span className="text-accent-trust font-semibold">40 Under 40 award winner</span> validates my commitment to innovation in education.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-section-title font-bold mb-6">Let's Create Impact Together</h2>
            <p className="text-body mb-8">
              Ready to explore innovative education solutions, cutting-edge AI filmmaking, or collaborative opportunities? I'm here to help transform ideas into reality.
            </p>
            <div className="button-group">
              <Button 
                size="lg" 
                onClick={() => navigate('/services')}
                className="btn-responsive bg-gradient-to-r from-[#94e2d5] to-[#3498db] hover:from-[#3498db] hover:to-[#2980b9] text-white font-semibold"
              >
                🚀 My Services
              </Button>
              <Button 
                size="lg" 
                onClick={() => navigate('/portfolio')}
                className="btn-responsive bg-gradient-to-r from-[#ff9f8a] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#ff9f8a] text-[#2c3e50] font-semibold"
              >
                🎬 View Portfolio
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                onClick={() => navigate('/contact')}
                className="btn-responsive border-white/50 text-white hover:bg-white/10"
              >
                💼 Work Together
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
