
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { generatePDF } from '@/utils/pdfGenerator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  
  // Clear cart when the component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => {
      clearCart();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [clearCart]);

  const handleDownloadInvoice = () => {
    generatePDF(items, getTotalPrice());
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. Your payment has been successfully processed.
          </p>
          
          <div className="space-y-3">
            <Button 
              onClick={handleDownloadInvoice}
              className="w-full flex items-center justify-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Invoice
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/materials')}
              className="w-full"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
