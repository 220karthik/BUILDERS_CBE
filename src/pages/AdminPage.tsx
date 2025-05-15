
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import products, { getCategories, categoryNames, addProduct, updateProductStock } from '@/data/products';
import { ProductFormData } from '@/types';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { Info } from 'lucide-react';

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState<'products' | 'add' | 'stats'>('stats');
  
  // Create inventory data for chart
  const inventoryData = useMemo(() => {
    const categoryTotals = products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += product.stock || 0;
      return acc;
    }, {} as Record<string, number>);

    return Object.keys(categoryTotals).map(category => ({
      name: categoryNames[category] || category,
      value: categoryTotals[category],
      category: category
    }));
  }, [products]);

  const barColors = [
    "#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c", 
    "#d0ed57", "#ffc658", "#ff8042", "#ff6361", "#bc5090"
  ];

  // Define the chart configuration
  const chartConfig = {
    'Stock Quantity': { 
      color: "#8884d8",
      label: "Stock Quantity"
    }
  };

  // Create a product form using react-hook-form
  const form = useForm<ProductFormData>({
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      category: 'bricks',
      stock: 0,
    },
  });

  const handleAddProduct = (data: ProductFormData) => {
    try {
      // Add the product to our products state
      addProduct({
        id: `${data.category}-${Date.now()}`,
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        image: '/placeholder.svg',
        stock: data.stock
      });
      
      toast.success('Product added successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to add product.');
    }
  };

  const handleStockUpdate = (productId: string, newStock: number) => {
    try {
      updateProductStock(productId, newStock);
      toast.success('Stock updated successfully!');
    } catch (error) {
      toast.error('Failed to update stock.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="flex gap-2 mb-6">
          <Button 
            variant={selectedTab === 'stats' ? 'default' : 'outline'} 
            onClick={() => setSelectedTab('stats')}
          >
            Statistics
          </Button>
          <Button 
            variant={selectedTab === 'products' ? 'default' : 'outline'} 
            onClick={() => setSelectedTab('products')}
          >
            Manage Products
          </Button>
          <Button 
            variant={selectedTab === 'add' ? 'default' : 'outline'} 
            onClick={() => setSelectedTab('add')}
          >
            Add New Product
          </Button>
        </div>

        {selectedTab === 'stats' && (
          <Card>
            <CardHeader>
              <CardTitle>Inventory Overview</CardTitle>
              <CardDescription>Stock levels across different product categories</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-[400px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={inventoryData} margin={{ top: 20, right: 30, left: 30, bottom: 60 }}>
                      <XAxis 
                        dataKey="name" 
                        angle={-45}
                        textAnchor="end"
                        height={80}
                        tick={{fontSize: 12}}
                      />
                      <YAxis label={{ value: 'Stock Quantity', angle: -90, position: 'insideLeft' }} />
                      <ChartTooltip
                        content={(props) => {
                          if (props.active && props.payload && props.payload.length) {
                            return (
                              <ChartTooltipContent 
                                active={props.active}
                                payload={props.payload}
                                label={props.label}
                              />
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="value" name="Stock Quantity">
                        {inventoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mr-2" />
                <span>The chart shows total stock quantity for each product category</span>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedTab === 'products' && (
          <Card>
            <CardHeader>
              <CardTitle>Product Inventory</CardTitle>
              <CardDescription>Manage product stock levels</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price (₹)</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{categoryNames[product.category] || product.category}</TableCell>
                      <TableCell>{product.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <Input 
                          type="number" 
                          defaultValue={product.stock || 0}
                          className="w-20"
                          min={0}
                          onChange={(e) => handleStockUpdate(product.id, parseInt(e.target.value, 10))}
                        />
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {selectedTab === 'add' && (
          <Card>
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
              <CardDescription>Create a new product in the inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleAddProduct)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter product name" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter product description" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price (₹)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Enter price" 
                              {...field} 
                              onChange={e => field.onChange(parseFloat(e.target.value))}
                              required
                              min={0}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="stock"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stock Quantity</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Enter stock quantity" 
                              {...field}
                              onChange={e => field.onChange(parseInt(e.target.value, 10))}
                              required
                              min={0}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                            required
                          >
                            {getCategories().map(category => (
                              <option key={category} value={category}>
                                {categoryNames[category] || category}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">Add Product</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminPage;
