
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { getCategories, categoryNames } from '@/data/products';

const categoryIcons: Record<string, string> = {
  sand: '🏝️',
  bricks: '🧱',
  steel: '⚙️',
  wood: '🪵',
  stones: '🪨',
  vehicles: '🚚',
};

const Materials = () => {
  const categories = getCategories();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Construction Materials</h1>
        <p className="text-gray-600 mb-8">Select a category to explore our high-quality construction materials</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category}`} key={category}>
              <Card className="product-card hover:border-construction-500 cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">
                    {categoryIcons[category] || '📦'}
                  </div>
                  <h2 className="text-xl font-semibold">{categoryNames[category]}</h2>
                  <p className="text-gray-500 mt-2">Browse {categoryNames[category]}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Materials;
