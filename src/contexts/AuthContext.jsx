import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [farmer, setFarmer] = useState(null);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check for stored farmer data on mount
    const storedFarmer = localStorage.getItem('farmer');
    if (storedFarmer) {
      const farmerData = JSON.parse(storedFarmer);
      setFarmer(farmerData);
      // Set language based on farmer's preference
      if (farmerData.preferred_language) {
        i18n.changeLanguage(farmerData.preferred_language);
      }
    }
    setLoading(false);
  }, [i18n]);

  const login = (farmerData) => {
    setFarmer(farmerData);
    localStorage.setItem('farmer', JSON.stringify(farmerData));
    // Set language based on farmer's preference
    if (farmerData.preferred_language) {
      i18n.changeLanguage(farmerData.preferred_language);
    }
  };

  const logout = () => {
    setFarmer(null);
    localStorage.removeItem('farmer');
    i18n.changeLanguage('en');
  };

  const value = {
    farmer,
    isAuthenticated: !!farmer,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};