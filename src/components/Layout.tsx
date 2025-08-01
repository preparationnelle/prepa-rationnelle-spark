import React from 'react';
import Navigation from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background bubbles */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-orange-100 rounded-full opacity-5 animate-pulse-slow"></div>
      <div className="fixed bottom-40 right-10 w-80 h-80 bg-blue-50 rounded-full opacity-5 animate-pulse"></div>
      <div className="fixed top-1/3 right-20 w-72 h-72 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="fixed bottom-1/4 left-20 w-96 h-96 bg-orange-100 rounded-full opacity-5 animate-pulse"></div>
      <div className="fixed top-3/4 right-1/3 w-48 h-48 bg-blue-100 rounded-full opacity-5 animate-pulse-slow"></div>
      <div className="fixed top-1/2 left-1/4 w-56 h-56 bg-orange-50 rounded-full opacity-5 animate-pulse"></div>
      
      <Navigation />
      <main className="flex-1 pt-20 w-full relative z-10">
        <div className="w-full max-w-full">
          {children}
        </div>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}; 