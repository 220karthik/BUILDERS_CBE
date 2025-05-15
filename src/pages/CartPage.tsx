
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import QuantitySelector from '@/components/QuantitySelector';
import { Button } from '@/components/ui/button';
import { Trash2, CreditCard, Download, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { generatePDF } from '@/utils/pdfGenerator';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!paymentMethod) {
      toast.error('Please select a payment method');
      return;
    }

    // In a real app, this would redirect to an actual payment gateway
    toast.success(`Proceeding to ${paymentMethod} payment...`);
    
    // For demo purposes, we'll just simulate success after 2 seconds
    setTimeout(() => {
      navigate('/payment-success');
    }, 2000);
  };

  const handleDownloadBill = () => {
    generatePDF(items, getTotalPrice());
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center flex-1">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Button 
            onClick={() => navigate('/materials')} 
            className="bg-construction-600 hover:bg-construction-700"
          >
            Continue Shopping
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {items.map((item) => (
                <div 
                  key={item.product.id} 
                  className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 items-center sm:items-start"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.product.description.substring(0, 80)}...</p>
                    <div className="text-construction-600 font-bold">₹{item.product.price.toLocaleString()}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <QuantitySelector 
                      quantity={item.quantity}
                      setQuantity={(quantity) => updateQuantity(item.product.id, quantity)}
                    />
                    
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <span className="text-gray-600">
                      {item.product.name} x {item.quantity}
                    </span>
                    <span className="font-medium">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
                
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Payment Method</h3>
                
                <div className="grid grid-cols-1 gap-2">
                  {['UPI', 'Cash On Delivery', 'Card'].map((method) => (
                    <Button
                      key={method}
                      variant={paymentMethod === method ? "default" : "outline"}
                      className={`justify-start ${paymentMethod === method ? 'bg-construction-600 hover:bg-construction-700' : ''}`}
                      onClick={() => setPaymentMethod(method)}
                    >
                      {method === 'UPI' && (
                        <div className="mr-2">🇮🇳</div>
                      )}
                      {method === 'Cash On Delivery' && (
                        <div className="mr-2">💰</div>
                      )}
                      {method === 'Card' && (
                        <CreditCard className="h-4 w-4 mr-2" />
                      )}
                      {method}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-construction-600 hover:bg-construction-700"
                  onClick={handlePayment}
                >
                  Proceed to Payment
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleDownloadBill}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Invoice
                </Button>
              </div>
              
              {/* Contact Information Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Contact Information</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-construction-600" />
                    <span>Do.no:6, Amman nagar, Saravanampatti, Coimbatore-641035</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-construction-600" />
                    <span>+91 9345587584</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-construction-600" />
                    <span>karthiksolaisamy5@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CartPage;
