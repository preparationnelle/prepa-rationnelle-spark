import React from 'react';
import Navigation from './Navigation';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';
import CourseContentWrapper from '@/components/ai-explain/CourseContentWrapper';
import EducationalSidebar from './navigation/EducationalSidebar';

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-transparent">

      <Navigation />
      <EducationalSidebar />
      <main className={`flex-1 w-full relative z-10 ${isHomePage ? 'pt-0' : 'pt-20 md:pt-16'}`}>
        <div className="w-full max-w-full">
          <CourseContentWrapper>
            {children}
          </CourseContentWrapper>
        </div>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}; 