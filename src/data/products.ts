
import { Product } from '@/types';

// Helper function to generate random price within a range
const generatePrice = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min) * 100; // Rounded to nearest 100
};

// Helper function to generate descriptions based on product type
const generateDescription = (productName: string, category: string): string => {
  const qualityAdjectives = ['Premium', 'High-quality', 'Superior', 'Durable', 'Reliable'];
  const randomAdjective = qualityAdjectives[Math.floor(Math.random() * qualityAdjectives.length)];
  
  const categoryDescriptions: Record<string, string[]> = {
    'sand': [
      'Perfect for concrete mixing and masonry work.',
      'Ideal for plastering and mortar preparation.',
      'Fine-grained and thoroughly cleaned for construction use.',
      'Essential component for quality construction projects.'
    ],
    'bricks': [
      'Provides excellent thermal insulation and structural strength.',
      'Uniform in size for precise and stable wall construction.',
      'Fire-resistant and weather-proof for lasting durability.',
      'Ideal for both interior and exterior construction needs.'
    ],
    'steel': [
      'High tensile strength for reinforced concrete structures.',
      'Corrosion-resistant and built for longevity.',
      'Manufactured to meet strict industry standards.',
      'Essential for earthquake-resistant building construction.'
    ],
    'wood': [
      'Kiln-dried to prevent warping and cracking.',
      'Perfect for furniture, flooring, and decorative elements.',
      'Natural beauty combined with excellent structural properties.',
      'Sustainably sourced from managed forests.'
    ],
    'stones': [
      'Natural stone with unique patterns and exceptional durability.',
      'Perfect for facades, flooring, and decorative applications.',
      'Weather-resistant and maintains its appearance over time.',
      'Adds elegance and value to any construction project.'
    ],
    'vehicles': [
      'Reliable performance for construction site material transportation.',
      'Fuel-efficient with powerful hauling capabilities.',
      'Designed specifically for construction industry needs.',
      'Easy to operate and maintain, with parts readily available.'
    ]
  };

  const descriptions = categoryDescriptions[category] || categoryDescriptions['bricks'];
  const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
  
  return `${randomAdjective} ${productName}. ${randomDescription}`;
};

let products: Product[] = [
  // Sand Products
  {
    id: 'sand-1',
    name: 'River Sand',
    description: generateDescription('River Sand', 'sand'),
    price: generatePrice(800, 1500),
    category: 'sand',
    image: 'https://t3.ftcdn.net/jpg/03/56/35/82/240_F_356358203_4JeLIYvRRHGiuCIL6kQslKeO3ePLX81S.jpg',
    stock: 50
  },
  {
    id: 'sand-2',
    name: 'M-Sand',
    description: generateDescription('M-Sand', 'sand'),
    price: generatePrice(900, 1800),
    category: 'sand',
    image: 'https://www.cfloworld.com/media/c1gndicx/maunfactured-sand-featured-image.jpg',
    stock: 40
  },
  {
    id: 'sand-3',
    name: 'Plastering Sand',
    description: generateDescription('Plastering Sand', 'sand'),
    price: generatePrice(700, 1400),
    category: 'sand',
    image: 'https://t4.ftcdn.net/jpg/11/48/31/57/240_F_1148315718_Gz4CdLGWkGDsQArJmV954EfnwKoU31HZ.jpg',
    stock: 45
  },
  {
    id: 'sand-4',
    name: 'Coarse Sand',
    description: generateDescription('Coarse Sand', 'sand'),
    price: generatePrice(850, 1600),
    category: 'sand',
    image: 'https://t3.ftcdn.net/jpg/12/44/26/76/240_F_1244267694_P2eueCBIeXsGzgMN6l2w7CQoiObOxm2B.jpg',
    stock: 35
  },
  
  // Brick Products
  {
    id: 'bricks-1',
    name: 'Red Clay Bricks',
    description: generateDescription('Red Clay Bricks', 'bricks'),
    price: generatePrice(600, 1100),
    category: 'bricks',
    image: 'https://t3.ftcdn.net/jpg/12/25/11/78/240_F_1225117821_B1D2n6geuBA59N8mk3Pnz3cfPi2QC5YS.jpg',
    stock: 100
  },
  {
    id: 'bricks-2',
    name: 'Fly Ash Bricks',
    description: generateDescription('Fly Ash Bricks', 'bricks'),
    price: generatePrice(700, 1200),
    category: 'bricks',
    image: 'https://t4.ftcdn.net/jpg/03/64/49/15/240_F_364491511_xGTITcEhCPfVm6dJhFAHIj9CZKj8PidC.jpg',
    stock: 80
  },
  {
    id: 'bricks-3',
    name: 'AAC Blocks',
    description: generateDescription('AAC Blocks', 'bricks'),
    price: generatePrice(900, 1500),
    category: 'bricks',
    image: 'https://t3.ftcdn.net/jpg/11/51/05/24/240_F_1151052453_ytnJLVIBZfTdzb5ATaJ9O3daPDXG31ew.jpg',
    stock: 70
  },
  {
    id: 'bricks-4',
    name: 'Concrete Blocks',
    description: generateDescription('Concrete Blocks', 'bricks'),
    price: generatePrice(800, 1400),
    category: 'bricks',
    image: 'https://t4.ftcdn.net/jpg/14/20/25/19/240_F_1420251995_bG6fxvHF8ABSYrm0W0eIPZMs0slCYEEm.jpg',
    stock: 90
  },
  
  // Steel Products
  {
    id: 'steel-1',
    name: 'TMT Steel Bars - 8mm',
    description: generateDescription('TMT Steel Bars - 8mm', 'steel'),
    price: generatePrice(4000, 5500),
    category: 'steel',
    image: 'https://t3.ftcdn.net/jpg/11/98/68/82/240_F_1198688213_g4JRKqaeZePL9psEtsC5cHUx7X2UCJj1.jpg',
    stock: 30
  },
  {
    id: 'steel-2',
    name: 'TMT Steel Bars - 12mm',
    description: generateDescription('TMT Steel Bars - 12mm', 'steel'),
    price: generatePrice(4500, 6000),
    category: 'steel',
    image: 'https://t3.ftcdn.net/jpg/14/22/65/96/240_F_1422659647_Y4m4QJZ34MNdE2jOGRyGwcb5pnHmbNE9.jpg',
    stock: 25
  },
  {
    id: 'steel-3',
    name: 'MS Angles',
    description: generateDescription('MS Angles', 'steel'),
    price: generatePrice(3800, 5200),
    category: 'steel',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrx2o5KhMeJ18orsaAd0RFA4KDT1pUpYhnQ&s',
    stock: 35
  },
  {
    id: 'steel-4',
    name: 'Binding Wire',
    description: generateDescription('Binding Wire', 'steel'),
    price: generatePrice(2000, 3500),
    category: 'steel',
    image: 'https://t3.ftcdn.net/jpg/11/21/79/98/240_F_1121799843_jo8ZAChhy5Ecwpc3s70vaTdvFJzdBhPR.jpg',
    stock: 40
  },
  
  // Wood Products
  {
    id: 'wood-1',
    name: 'Sal Wood',
    description: generateDescription('Sal Wood', 'wood'),
    price: generatePrice(5000, 7000),
    category: 'wood',
    image: 'https://t3.ftcdn.net/jpg/13/15/63/76/240_F_1315637657_9k6EB9loSJj2gDKNXO5PtyluWrBa258Q.jpg',
    stock: 15
  },
  {
    id: 'wood-2',
    name: 'Teak Wood',
    description: generateDescription('Teak Wood', 'wood'),
    price: generatePrice(8000, 12000),
    category: 'wood',
    image: 'https://t4.ftcdn.net/jpg/04/17/86/39/240_F_417863966_iTcNR6ZMzQubS9YENXdB4q1S82dDdwSC.jpg',
    stock: 20
  },
  {
    id: 'wood-3',
    name: 'Pine Wood',
    description: generateDescription('Pine Wood', 'wood'),
    price: generatePrice(4000, 6000),
    category: 'wood',
    image: 'https://t3.ftcdn.net/jpg/03/22/00/78/240_F_322007846_GGAnoCw2vVQ2J9047mIv3QVgIhjkPi0V.jpg',
    stock: 25
  },
  {
    id: 'wood-4',
    name: 'Plywood Sheets',
    description: generateDescription('Plywood Sheets', 'wood'),
    price: generatePrice(2500, 4500),
    category: 'wood',
    image: 'https://t4.ftcdn.net/jpg/11/87/67/03/240_F_1187670325_W69qbbsaWLpx7LJJBjSASStC8sZhN7Gf.jpg',
    stock: 35
  },

  // Stones Products
  {
    id: 'stone-1',
    name: 'Granite',
    description: generateDescription('Granite', 'stones'),
    price: generatePrice(3000, 5000),
    category: 'stones',
    image: 'https://t4.ftcdn.net/jpg/04/73/43/67/240_F_473436771_1HthzsNI769sXT5UML5fVbtLOoMDk85q.jpg',
    stock: 10
  },
  {
    id: 'stone-2',
    name: 'Limestone',
    description: generateDescription('Limestone', 'stones'),
    price: generatePrice(2500, 4000),
    category: 'stones',
    image: 'https://t3.ftcdn.net/jpg/02/30/41/14/240_F_230411427_jiOrXslTaNyKnWNJE2WQCTyXuGVXDGwn.jpg',
    stock: 15
  },
  {
    id: 'stone-3',
    name: 'Marble',
    description: generateDescription('Marble', 'stones'),
    price: generatePrice(3500, 6000),
    category: 'stones',
    image: 'https://t4.ftcdn.net/jpg/03/09/46/43/240_F_309464312_i0oQIQ4467epQxwLJ12SES8DZkKsuBET.jpg',
    stock: 12
  },
  {
    id: 'stone-4',
    name: 'Sandstone',
    description: generateDescription('Sandstone', 'stones'),
    price: generatePrice(2000, 3500),
    category: 'stones',
    image: 'https://t3.ftcdn.net/jpg/12/05/56/06/240_F_1205560605_0C7ETDTZWq0rPdQbypIMCXv0HIvVhbcJ.jpg',
    stock: 18
  },
  {
    id: 'stone-5',
    name: 'Quartzite',
    description: generateDescription('Quartzite', 'stones'),
    price: generatePrice(3200, 5500),
    category: 'stones',
    image: 'https://t3.ftcdn.net/jpg/10/05/32/30/240_F_1005323069_nprSGxxvHmzUMMOmLtDlBkRn0MWEHmA9.jpg',
    stock: 14
  },

  // Vehicles Products
  {
    id: 'vehicles-1',
    name: 'Tractor',
    description: generateDescription('Tractor', 'vehicles'),
    price: generatePrice(15000, 25000),
    category: 'vehicles',
    image: 'https://t4.ftcdn.net/jpg/02/32/95/85/240_F_232958581_JEeIAwgiUk2lxuyRvmHMdGkH1DFbYL4i.jpg',
    stock: 5
  },
  {
    id: 'vehicles-2',
    name: 'Tipper',
    description: generateDescription('Tipper', 'vehicles'),
    price: generatePrice(20000, 35000),
    category: 'vehicles',
    image: 'https://t3.ftcdn.net/jpg/11/03/99/04/240_F_1103990424_73nBz1UQhEXkePBVPzCPdAQjAVIJ8vQy.jpg',
    stock: 3
  },
  {
    id: 'vehicles-3',
    name: 'Concrete Mixer',
    description: generateDescription('Concrete Mixer', 'vehicles'),
    price: generatePrice(10000, 18000),
    category: 'vehicles',
    image: 'https://t4.ftcdn.net/jpg/10/72/66/83/240_F_1072668315_cUTisvrPAWFHO2vSe46t5DBzbf9elN1q.jpg',
    stock: 8
  },
  {
    id: 'vehicles-4',
    name: 'Tata Ace',
    description: generateDescription('Tata Ace', 'vehicles'),
    price: generatePrice(8000, 15000),
    category: 'vehicles',
    image: 'https://t4.ftcdn.net/jpg/10/98/66/35/240_F_1098663582_DlN5dUAj2TOz5cdwMYx4BQsP66sO3Eeb.jpg',
    stock: 6
  },
];

// Product management functions
export const addProduct = (newProduct: Product): void => {
  products = [...products, newProduct];
};

export const updateProductStock = (productId: string, newStock: number): void => {
  products = products.map(product => 
    product.id === productId ? { ...product, stock: newStock } : product
  );
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategories = (): string[] => {
  const categoriesSet = new Set(products.map(product => product.category));
  return Array.from(categoriesSet);
};

export const categoryNames: Record<string, string> = {
  sand: 'Sand',
  bricks: 'Bricks',
  steel: 'Steel',
  wood: 'Wood',
  vehicles: 'Construction Vehicles',
  stones: 'Stones'
};

export const regeneratePricesAndDescriptions = () => {
  products = products.map(product => ({
    ...product,
    price: generatePrice(
      product.category === 'vehicles' ? 8000 : 
      product.category === 'steel' ? 3000 : 
      product.category === 'wood' ? 2500 : 600,
      
      product.category === 'vehicles' ? 35000 :
      product.category === 'steel' ? 6000 :
      product.category === 'wood' ? 12000 : 5000
    ),
    description: generateDescription(product.name, product.category)
  }));
};

export default products;
