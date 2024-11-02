import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import Auth from './components/Auth';
import Header from './components/Header';
import Notifications from './components/Notifications';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';
import ProtectedRoute from './components/ProtectedRoute';
import ReviewSystem from './components/ReviewSystem';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import { auth, onAuthStateChanged } from './firebase';

const App = () => {
  const categories = ['Electronics', 'Clothing', 'Home'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuthenticated(true);
        if (window.location.pathname === '/login') {
          navigate('/products', { replace: true });
        }
      } else {
        setIsAuthenticated(false);
        navigate('/login', { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/products', { replace: true });
  };

  return (
    <div className="App">
      <Notifications />
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/login" element={<Auth onLogin={handleLogin} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/products" element={
            <>
              <SearchBar onSearch={handleSearch} />
              <ProductFilter categories={categories} onFilterChange={handleFilterChange} />
              <ProductList selectedCategory={selectedCategory} searchQuery={searchQuery} />
            </>
          } />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:id/reviews" element={<ReviewSystem />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
