import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Star, 
  Quote, 
  Award, 
  Users, 
  TrendingUp, 
  BookOpen,
  GraduationCap,
  Heart,
  Lightbulb,
  Target,
  Zap,
  CheckCircle
} from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="h-full"
    >
      <Card className="glass-card hover:scale-105 transition-all duration-500 h-full relative overflow-hidden">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-[#94e2d5]/30" />
        
        <div className="flex flex-col h-full space-y-6">
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-[#94e2d5] object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop";
                }}
              />
              <div className="absolute -bottom-1 -right-1 bg-[#94e2d5] rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
              <p className="text-[#94e2d5] font-medium text-sm">{testimonial.role}</p>
              {testimonial.company && (
                <p className="text-secondary text-xs">{testimonial.company}</p>
              )}
            </div>
          </div>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white/60 text-sm ml-2">(5.0)</span>
          </div>
          
          {/* Testimonial Text */}
          <blockquote className="text-white/90 italic text-lg leading-relaxed flex-1">
            "{testimonial.text}"
          </blockquote>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-[#94e2d5] to-[#3498db] rounded-full"></div>
        </div>
      </Card>
    </motion.div>
  );
};

const TestimonialsPage = () => {
  const navigate = useNavigate();

  const stats = [
    { 
      number: "100K+", 
      label: "Students Trained", 
      description: "Across all platforms",
      icon: Users,
      color: "text-[#94e2d5]"
    },
    { 
      number: "6K+", 
      label: "IIM Converts", 
      description: "Success stories",
      icon: TrendingUp,
      color: "text-green-400"
    },
    { 
      number: "99.93%", 
      label: "CAT Percentile", 
      description: "Personal achievement",
      icon: Target,
      color: "text-purple-400"
    },
    { 
      number: "40U40", 
      label: "Award Winner", 
      description: "Industry recognition",
      icon: Award,
      color: "text-yellow-400"
    }
  ];

  const categories = [
    {
      title: "EdTech Excellence",
      description: "What students and educators say about my teaching methodology and platform development",
      icon: GraduationCap,
      color: "from-[#94e2d5]/20 to-[#3498db]/20",
      accentColor: "text-[#94e2d5]"
    },
    {
      title: "Creative Innovation", 
      description: "Reviews of my AI filmmaking projects and creative content creation",
      icon: Lightbulb,
      color: "from-[#ff9f8a]/20 to-[#f4d03f]/20",
      accentColor: "text-[#ff9f8a]"
    },
    {
      title: "Professional Impact",
      description: "Industry recognition and peer testimonials about collaborative work",
      icon: Heart,
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-400"
    }
  ];

  const recognitions = [
    {
      title: "Best Educator Award",
      year: "2024",
      organization: "EdTech Excellence Awards",
      description: "Recognized for innovative teaching methodologies"
    },
    {
      title: "40 Under 40 Winner",
      year: "2024", 
      organization: "Industry Leadership",
      description: "Outstanding contribution to education technology"
    },
    {
      title: "Top Performer",
      year: "2023",
      organization: "iQuanta Platform",
      description: "Highest student success rate and satisfaction"
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
          {/* Header */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-page-title font-bold mb-6">Student Success Stories</h1>
            <p className="text-body text-lg leading-relaxed">
              Hear from the <span className="text-accent-trust font-semibold">students, colleagues, and industry leaders</span> who have experienced the impact of my work firsthand. These testimonials represent over <span className="text-accent-innovation font-semibold">11 years of dedication</span> to educational excellence and innovation.
            </p>
          </motion.div>

          {/* Success Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid-responsive-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card text-center hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-white/10 to-white/20 flex items-center justify-center">
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 font-heading">
                      {stat.number}
                    </div>
                    <p className="text-white font-semibold mb-1">{stat.label}</p>
                    <p className="text-secondary text-sm">{stat.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-section-title font-bold mb-12 text-center">Areas of Excellence</h2>
            <div className="grid-responsive-3">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card text-center hover:scale-105"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <IconComponent className={`w-10 h-10 ${category.accentColor}`} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{category.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{category.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-section-title font-bold mb-12 text-center">What People Say</h2>
            <div className="grid-responsive-2 gap-8">
              {portfolioData.testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Recognition Awards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="glass-card bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center space-x-3">
                  <Award className="w-12 h-12 text-yellow-400" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Industry Recognition</h2>
                    <p className="text-yellow-300">Awards and Achievements</p>
                  </div>
                </div>
                
                <div className="grid-responsive-3 gap-6">
                  {recognitions.map((recognition, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <div className="text-yellow-400 font-bold text-lg mb-1">
                        {recognition.title}
                      </div>
                      <div className="text-white font-semibold text-sm mb-1">
                        {recognition.organization} • {recognition.year}
                      </div>
                      <p className="text-white/80 text-xs">
                        {recognition.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Social Proof Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card text-center">
              <h3 className="text-white font-bold text-2xl mb-6">Trusted by Thousands</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#94e2d5] mb-1">100K+</div>
                  <div className="text-white text-sm">Students Taught</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">6K+</div>
                  <div className="text-white text-sm">Success Stories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">11+</div>
                  <div className="text-white text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-1">99.9%</div>
                  <div className="text-white text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Card className="glass-card">
              <div className="space-y-6">
                <Zap className="w-16 h-16 mx-auto text-[#94e2d5]" />
                <h2 className="text-section-title font-bold">Ready to Join the Success Stories?</h2>
                <p className="text-body">
                  Whether you're preparing for competitive exams, looking to innovate in EdTech, interested in AI filmmaking, or seeking educational transformation, I'm here to help you achieve your goals with <span className="text-accent-trust font-semibold">proven methods</span> and <span className="text-accent-innovation font-semibold">personalized guidance</span>.
                </p>
                <div className="button-group">
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/contact')}
                    className="btn-responsive bg-gradient-to-r from-[#94e2d5] to-[#3498db] hover:from-[#3498db] hover:to-[#2980b9] text-white font-semibold"
                  >
                    💼 Get Started
                  </Button>
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/services')}
                    className="btn-responsive bg-gradient-to-r from-[#ff9f8a] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#ff9f8a] text-[#2c3e50] font-semibold"
                  >
                    ⚡ View Services
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg" 
                    onClick={() => window.open('https://iquanta.in', '_blank')}
                    className="btn-responsive border-white/50 text-white hover:bg-white/10"
                  >
                    🎓 Visit iQuanta
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
