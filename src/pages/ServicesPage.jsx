import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Rocket, 
  Film, 
  Calculator, 
  PenTool,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Lightbulb
} from 'lucide-react';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Rocket,
      title: "EdTech Leadership & Strategy",
      description: "Transform your educational platform with proven methodologies that have trained 100K+ students and achieved 6K+ IIM converts. From strategy development to implementation, I guide organizations through digital education transformation.",
      features: [
        "Platform Development & Optimization",
        "Growth Strategy & Scaling", 
        "Team Leadership & Management",
        "Educational Innovation & Research",
        "Student Success Optimization",
        "Learning Analytics & Insights"
      ],
      stats: "100K+ Students Trained | 6K+ Success Stories",
      color: "from-[#94e2d5] to-[#3498db]",
      accentColor: "text-[#94e2d5]",
      results: [
        "6000+ IIM Converts Achieved",
        "100K+ Students Successfully Trained",
        "Revolutionary Teaching Methods",
        "Proven Success Track Record"
      ]
    },
    {
      icon: Film,
      title: "AI Filmmaking & Creative Production",
      description: "Pioneering AI-driven cinema and content creation. From viral YouTube content to branded storytelling, I leverage cutting-edge AI tools to create compelling visual narratives that engage and inspire audiences.",
      features: [
        "AI-Generated Video Production",
        "Original Music Composition (Suno AI)",
        "Cinematic Storytelling & Direction",
        "Educational Content Creation",
        "Brand Storytelling & Marketing",
        "YouTube Channel Development"
      ],
      stats: "15+ AI Films Created | Growing Channel",
      color: "from-[#ff9f8a] to-[#f4d03f]",
      accentColor: "text-[#ff9f8a]",
      results: [
        "Viral AI Films Like 'Eywa Rises'",
        "Professional Horror Shorts",
        "Educational Video Content",
        "Better Call ALP YouTube Success"
      ]
    },
    {
      icon: Calculator,
      title: "Mathematical Excellence & Training",
      description: "Master quantitative aptitude and competitive exam preparation with methods that achieved 99.93+ percentile results. I offer personalized training programs for CAT, GMAT, and advanced mathematics.",
      features: [
        "CAT/GMAT Quantitative Preparation",
        "Vedic Mathematics Techniques",
        "Custom Problem-Solving Methods",
        "Mathematical Research & Innovation",
        "Competitive Exam Strategy",
        "One-on-One Mentoring"
      ],
      stats: "99.93+ Percentile | Proven Methods",
      color: "from-[#3498db] to-[#2980b9]",
      accentColor: "text-[#3498db]",
      results: [
        "99.93+ CAT Percentile Achieved",
        "Brahmaganita v1.0 Research",
        "Original Mathematical Theorems",
        "Thousands of Students Guided"
      ]
    },
    {
      icon: PenTool,
      title: "Content Creation & Publishing",
      description: "From bestselling books to comprehensive educational materials, I create compelling content that educates, inspires, and drives results. Specializing in educational publishing and thought leadership content.",
      features: [
        "Book Writing & Publishing",
        "Educational Content Development",
        "Course Material Creation",
        "Thought Leadership Articles",
        "Curriculum Design & Planning",
        "Content Strategy & Marketing"
      ],
      stats: "4 Books Published | Bestselling Author",
      color: "from-[#9b59b6] to-[#8e44ad]",
      accentColor: "text-[#9b59b6]",
      results: [
        "4 Published Books",
        "Educational Materials for Thousands",
        "Thought Leadership Content",
        "Comprehensive Course Development"
      ]
    }
  ];

  const achievements = [
    { icon: Users, label: "100K+ Students Trained", desc: "Across all platforms" },
    { icon: Award, label: "40 Under 40 Winner", desc: "Industry recognition 2024" },
    { icon: TrendingUp, label: "6K+ IIM Converts", desc: "Proven success rate" },
    { icon: BookOpen, label: "Mathematical Innovator", desc: "Original research published" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understanding your goals, challenges, and creating a tailored approach"
    },
    {
      step: "02", 
      title: "Planning & Design",
      description: "Developing comprehensive plans with clear milestones and deliverables"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Executing with precision, monitoring progress, and ensuring quality"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous improvement and scaling for maximum impact and results"
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
            <h1 className="text-page-title font-bold mb-6">My Services</h1>
            <p className="text-body text-lg leading-relaxed">
              Bridging education, technology, and creativity to transform learning experiences and inspire innovation. With <span className="text-accent-trust font-semibold">11+ years of proven expertise</span> and <span className="text-accent-innovation font-semibold">100K+ success stories</span>, I deliver results that matter.
            </p>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="grid-responsive-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card text-center hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#94e2d5]/20 to-[#3498db]/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#94e2d5]" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">
                      {achievement.label}
                    </h3>
                    <p className="text-secondary text-xs">
                      {achievement.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-7xl mx-auto"
          >
            <div className="grid-responsive-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card hover:scale-105 h-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="flex flex-col h-full">
                      {/* Service Header */}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#94e2d5] transition-colors">
                            {service.title}
                          </h3>
                          <Badge className={`text-xs bg-gradient-to-r ${service.color} text-white border-0`}>
                            {service.stats}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-secondary leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-[#94e2d5] flex-shrink-0" />
                              <span className="text-secondary text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="bg-gradient-to-r from-white/5 to-transparent p-4 rounded-lg">
                        <h4 className={`${service.accentColor} font-semibold text-sm mb-2`}>
                          Proven Results:
                        </h4>
                        <div className="space-y-1">
                          {service.results.map((result, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                              <span className="text-secondary text-xs">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-section-title font-bold mb-12 text-center">My Process</h2>
            <div className="grid-responsive-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="glass-card text-center hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#94e2d5] to-[#3498db] flex items-center justify-center font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Card className="glass-card">
              <div className="text-center space-y-6">
                <Zap className="w-16 h-16 mx-auto text-[#94e2d5]" />
                <h2 className="text-section-title font-bold">Ready to Transform Your Vision?</h2>
                <p className="text-body">
                  Whether you need EdTech innovation, AI filmmaking expertise, mathematical training, or content creation, I'm here to help transform your vision into reality with proven methods and <span className="text-accent-trust font-semibold">11+ years of expertise</span>.
                </p>
                <div className="button-group">
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/portfolio')}
                    className="btn-responsive bg-gradient-to-r from-[#94e2d5] to-[#3498db] hover:from-[#3498db] hover:to-[#2980b9] text-white font-semibold"
                  >
                    🎬 View My Work
                  </Button>
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/contact')}
                    className="btn-responsive bg-gradient-to-r from-[#ff9f8a] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#ff9f8a] text-[#2c3e50] font-semibold"
                  >
                    💼 Let's Work Together
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg" 
                    onClick={() => window.open('https://www.youtube.com/@BetterCallALP9', '_blank')}
                    className="btn-responsive border-white/50 text-white hover:bg-white/10"
                  >
                    📺 Better Call ALP
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

export default ServicesPage;
