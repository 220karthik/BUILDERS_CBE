
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-12 flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-construction-600">KMT Building Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your one-stop solution for high-quality construction materials in India. 
            Building dreams, one material at a time.
          </p>
          
          <Button 
            onClick={() => navigate('/login')} 
            className="bg-construction-600 hover:bg-construction-700 text-white px-8 py-6 text-lg rounded-lg transition-all transform hover:scale-105"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Welcome;
