
import React from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ 
  quantity, 
  setQuantity, 
  min = 1, 
  max = 100
}) => {
  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex items-center">
      <Button 
        variant="outline" 
        size="sm"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="h-9 w-9 rounded-r-none"
      >
        <MinusIcon className="h-4 w-4" />
      </Button>
      
      <input 
        type="text"
        value={quantity}
        onChange={handleChange}
        className="quantity-input h-9 w-12 border text-center"
      />
      
      <Button 
        variant="outline" 
        size="sm"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="h-9 w-9 rounded-l-none"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default QuantitySelector;
