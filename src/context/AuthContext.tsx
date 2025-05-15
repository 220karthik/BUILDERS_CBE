
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
      setIsAdmin(parsedUser.isAdmin || false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // This is a mock login. In a real app, you would verify credentials with an API
    if (email && password) {
      // Check if the user is admin
      const isAdminUser = email === "karthiksolaisamy5@gmail.com" && password === "Karthik#46";
      
      const mockUser: User = {
        id: '123',
        email,
        name: email.split('@')[0],
        isAdmin: isAdminUser
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      setIsAdmin(isAdminUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      // Redirect admin to admin dashboard, regular users to materials page
      if (isAdminUser) {
        navigate('/admin');
      } else {
        navigate('/materials');
      }
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
