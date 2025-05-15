
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import QuantitySelector from './QuantitySelector';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Check if we have enough stock
    const stock = product.stock || 0;
    if (stock < quantity) {
      toast.error(`Sorry, only ${stock} items available in stock`);
      return;
    }
    
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding to cart
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Card className="product-card overflow-hidden border border-gray-200 h-full flex flex-col">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <p className="text-lg font-bold text-construction-600">₹{product.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500">In Stock: {product.stock || 0}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row items-center gap-3">
        <div className="w-full sm:w-auto">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
        <Button 
          className="w-full sm:w-auto bg-construction-600 hover:bg-construction-700 text-white"
          onClick={handleAddToCart}
          disabled={!product.stock || product.stock <= 0}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
