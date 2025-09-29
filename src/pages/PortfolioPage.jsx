import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ExternalLink, 
  Play, 
  Star, 
  Eye, 
  Calendar,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  Youtube,
  Zap,
  Lightbulb,
  Target
} from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 h-full flex flex-col group">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl mb-6">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-56 bg-gradient-to-r from-[#94e2d5]/20 to-[#3498db]/20 flex items-center justify-center">
              <div className="text-center">
                <Target className="w-12 h-12 text-[#94e2d5] mx-auto mb-2" />
                <p className="text-white text-sm">{project.title}</p>
              </div>
            </div>
          )}
          
          {/* Overlay with play button */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-white">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">View Project</span>
                </div>
                {project.link.includes('youtube') && (
                  <div className="bg-red-600 p-2 rounded-full">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                className="text-xs bg-gradient-to-r from-[#94e2d5]/20 to-[#3498db]/20 text-[#94e2d5] border border-[#94e2d5]/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Title */}
          <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#94e2d5] transition-colors">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-secondary leading-relaxed mb-6 flex-1">
            {project.description}
          </p>
          
          {/* Highlights */}
          {project.highlights && (
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm mb-3">Key Highlights:</h4>
              <div className="grid grid-cols-1 gap-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                    <span className="text-secondary text-xs">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Action Button */}
          <Button
            onClick={() => window.open(project.link, '_blank')}
            className="w-full bg-gradient-to-r from-[#94e2d5] to-[#3498db] hover:from-[#3498db] hover:to-[#2980b9] text-white font-semibold transition-all duration-300"
          >
            <ExternalLink size={16} className="mr-2" />
            {project.link.includes('youtube') ? 'Watch on YouTube' : 'View Project'}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const filters = [
    { key: 'all', label: 'All Projects', icon: Target, count: portfolioData.projects.length },
    { key: 'filmmaking', label: 'AI Films', icon: Play, count: portfolioData.projects.filter(p => p.category === 'filmmaking').length },
    { key: 'edtech', label: 'EdTech', icon: Lightbulb, count: portfolioData.projects.filter(p => p.category === 'edtech').length },
    { key: 'research', label: 'Research', icon: BookOpen, count: portfolioData.projects.filter(p => p.category === 'research').length }
  ];

  const achievements = [
    { icon: Play, label: '15+ AI Films Created', color: 'text-red-400' },
    { icon: Users, label: '100K+ Students Impacted', color: 'text-[#94e2d5]' },
    { icon: Award, label: '40 Under 40 Winner', color: 'text-yellow-400' },
    { icon: TrendingUp, label: '6K+ Success Stories', color: 'text-green-400' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeFilter);

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
            <h1 className="text-page-title font-bold mb-6">My Portfolio</h1>
            <p className="text-body text-lg leading-relaxed">
              Showcasing innovation across <span className="text-accent-trust font-semibold">EdTech leadership</span>, <span className="text-accent-innovation font-semibold">AI filmmaking</span>, mathematical research, and creative content creation. Each project represents a commitment to excellence and transformative impact.
            </p>
          </motion.div>

          {/* Achievement Stats */}
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
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-white/10 to-white/20 flex items-center justify-center">
                      <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <p className="text-white font-semibold text-sm">{achievement.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* YouTube Channel Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <Youtube className="w-12 h-12 text-red-500" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Better Call ALP</h2>
                    <p className="text-red-300 font-medium">Official YouTube Channel</p>
                  </div>
                </div>
                
                <p className="text-white/90 max-w-2xl mx-auto">
                  Discover my latest AI filmmaking projects including viral hits like <span className="text-red-300 font-semibold">"Eywa Rises"</span> and <span className="text-red-300 font-semibold">"HR Manager"</span>. Experience the future of AI-driven cinema and educational content.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge className="bg-red-500 text-white border-0">15+ AI Films</Badge>
                  <Badge className="bg-red-500 text-white border-0">Growing Subscriber Base</Badge>
                  <Badge className="bg-red-500 text-white border-0">Viral Content</Badge>
                </div>
                
                <Button 
                  size="lg"
                  onClick={() => window.open('https://www.youtube.com/@BetterCallALP9', '_blank')}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                >
                  <Youtube size={20} className="mr-2" />
                  Visit YouTube Channel
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <Button
                    key={filter.key}
                    variant={activeFilter === filter.key ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`space-x-2 ${
                      activeFilter === filter.key
                        ? 'bg-gradient-to-r from-[#94e2d5] to-[#3498db] text-white'
                        : 'border-white/50 text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{filter.label}</span>
                    <Badge className="bg-white/20 text-white border-0 text-xs">
                      {filter.count}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="w-full max-w-7xl mx-auto"
          >
            {filteredProjects.length > 0 ? (
              <div className="grid-responsive-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={`${project.title}-${activeFilter}`} project={project} index={index} />
                ))}
              </div>
            ) : (
              <Card className="glass-card text-center py-12">
                <Target className="w-16 h-16 mx-auto mb-4 text-[#94e2d5]" />
                <h3 className="text-white font-bold text-xl mb-2">No Projects Found</h3>
                <p className="text-secondary">Try selecting a different category to view projects.</p>
              </Card>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Card className="glass-card">
              <div className="space-y-6">
                <Zap className="w-16 h-16 mx-auto text-[#94e2d5]" />
                <h2 className="text-section-title font-bold">Interested in Collaborating?</h2>
                <p className="text-body">
                  I'm always excited to work on innovative projects that combine education, technology, and creativity. Whether you need <span className="text-accent-trust font-semibold">EdTech solutions</span>, <span className="text-accent-innovation font-semibold">AI filmmaking</span>, or educational content, let's create something amazing together.
                </p>
                <div className="button-group">
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/contact')}
                    className="btn-responsive bg-gradient-to-r from-[#94e2d5] to-[#3498db] hover:from-[#3498db] hover:to-[#2980b9] text-white font-semibold"
                  >
                    💼 Let's Work Together
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
                    onClick={() => navigate('/testimonials')}
                    className="btn-responsive border-white/50 text-white hover:bg-white/10"
                  >
                    ⭐ See Reviews
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

export default PortfolioPage;
