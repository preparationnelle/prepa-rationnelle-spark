import React from 'react';
import TeacherSidebar from './TeacherSidebar';

interface TeacherLayoutProps {
  children: React.ReactNode;
}

const TeacherLayout: React.FC<TeacherLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <TeacherSidebar />
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default TeacherLayout;