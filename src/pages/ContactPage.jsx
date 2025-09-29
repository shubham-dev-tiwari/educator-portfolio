import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { Card } from '../components/ui/card.jsx';
import { Input } from '../components/ui/input.jsx';
import { Textarea } from '../components/ui/textarea.jsx';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Youtube, 
  Instagram,
  Send,
  CheckCircle,
  Zap,
  Film,
  Calculator,
  GraduationCap
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      content: "abhishek@iquanta.in",
      link: "mailto:abhishek@iquanta.in",
      color: "text-[#94e2d5]"
    },
    {
      icon: Phone,
      title: "Phone", 
      content: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "New Delhi, India",
      link: "#",
      color: "text-yellow-400"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-leela-pandey-ab7b4543",
      color: "text-blue-600"
    },
    {
      icon: Youtube,
      name: "Better Call ALP",
      url: "https://www.youtube.com/@BetterCallALP9",
      color: "text-red-600"
    },
    {
      icon: Instagram,
      name: "@better_call_alp",
      url: "https://www.instagram.com/better_call_alp",
      color: "text-pink-600"
    }
  ];

  const collaborationAreas = [
    {
      icon: Zap,
      title: "EdTech Consulting",
      description: "Platform development, growth strategy, educational innovation"
    },
    {
      icon: Film,
      title: "AI Filmmaking", 
      description: "Creative projects, video production, music composition"
    },
    {
      icon: Calculator,
      title: "Mathematical Training",
      description: "CAT/GMAT prep, Vedic mathematics, problem-solving techniques"
    },
    {
      icon: GraduationCap,
      title: "Speaking Engagements",
      description: "Conferences, workshops, educational seminars"
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
            <h1 className="text-page-title font-bold mb-6">Let's Work Together</h1>
            <p className="text-body text-lg leading-relaxed">
              Ready to collaborate on <span className="text-accent-trust font-semibold">EdTech innovation</span>, <span className="text-accent-innovation font-semibold">AI filmmaking</span>, or educational transformation? 
              I'm always excited to work on projects that make a real impact.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="grid-responsive-3">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card text-center hover:scale-105 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <a href={method.link} className="block space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-white/10 to-white/20 flex items-center justify-center">
                        <IconComponent className={`w-8 h-8 ${method.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{method.title}</h3>
                        <p className="text-secondary">{method.content}</p>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid-responsive-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Card className="glass-card">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    size="lg"
                    className={`w-full ${
                      submitted ? 'bg-green-500 hover:bg-green-500' : 'bg-gradient-to-r from-[#94e2d5] to-[#3498db] hover:from-[#3498db] hover:to-[#2980b9]'
                    } text-white font-semibold`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </span>
                    ) : submitted ? (
                      <span className="flex items-center justify-center">
                        <CheckCircle size={20} className="mr-2" />
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send size={20} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Collaboration Areas */}
              <Card className="glass-card">
                <h2 className="text-2xl font-bold text-white mb-6">Collaboration Areas</h2>
                <div className="space-y-4">
                  {collaborationAreas.map((area, index) => {
                    const IconComponent = area.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#94e2d5]/20 to-[#3498db]/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-[#94e2d5]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{area.title}</h3>
                          <p className="text-secondary text-sm">{area.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="glass-card">
                <h2 className="text-2xl font-bold text-white mb-6">Connect Online</h2>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start space-x-3 hover:bg-white/10 border-white/30 text-white"
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <IconComponent className={`w-5 h-5 ${social.color}`} />
                        <span>{social.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="glass-card bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/30 text-white hover:bg-white/10"
                    onClick={() => navigate('/portfolio')}
                  >
                    🎬 View My Work
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/30 text-white hover:bg-white/10"
                    onClick={() => window.open('https://iquanta.in', '_blank')}
                  >
                    🎓 Visit iQuanta
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/30 text-white hover:bg-white/10"
                    onClick={() => navigate('/services')}
                  >
                    ⚡ View Services
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="glass-card text-center bg-green-500/20 border-green-500/30">
              <p className="text-white">
                <span className="font-semibold">Response Time:</span> I typically respond within 24 hours. 
                For urgent inquiries, feel free to reach out via LinkedIn or phone.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
