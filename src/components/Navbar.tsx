
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={isAuthenticated ? "/materials" : "/"} className="flex items-center space-x-2">
          <span className="font-bold text-construction-600 text-2xl">KMT Building Solutions</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          {/* Always visible links */}
          <Link to="/about" className="text-gray-600 hover:text-construction-600 transition-colors">
            About Us
          </Link>

          {isAuthenticated && (
            <>
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="outline" size="sm">Admin Dashboard</Button>
                </Link>
              )}
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-construction-600 transition-colors" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-construction-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              
              <div className="relative group">
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <User className="h-5 w-5" />
                  <span>{user?.email} ({isAdmin ? 'Admin' : 'User'})</span>
                </Button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                  <div className="py-2">
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {!isAuthenticated && (
            <div className="flex space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="default" size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
