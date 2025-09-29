import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import ThreeBackground from './components/common/ThreeBackground';
import Loading from './components/common/Loading';
import Navigation from './components/layout/Navigation';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    // Preload critical resources
    const preloadImages = [
      'https://media.iquanta.in/ui_images/gmat/Abhishek%20Sir.png'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <AnimatePresence mode="wait">
          {isLoading && <Loading key="loading" />}
        </AnimatePresence>
        
        {!isLoading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ThreeBackground />
            <Navigation />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        )}
      </div>
    </Router>
  );
}

export default App;
