
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isLessonPage = location.pathname.includes('/lesson/') || location.pathname.includes('/quiz/');

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 max-w-[100vw] overflow-x-hidden pb-20 md:pb-0">
      <main className="flex-1 w-full max-w-7xl mx-auto">
        {children}
      </main>

      {/* Mobile Bottom Navigation - Hidden on lesson/quiz pages or desktop */}
      {!isLessonPage && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 flex justify-around items-center py-3 pb-6 md:hidden z-50">
          <NavLink 
            to="/" 
            className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <span className={`material-symbols-outlined ${location.pathname === '/' ? 'fill' : ''}`}>explore</span>
            <span className="text-[10px] font-bold">Explore</span>
          </NavLink>
          <NavLink 
            to="/courses" 
            className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <span className={`material-symbols-outlined ${location.pathname === '/courses' ? 'fill' : ''}`}>book</span>
            <span className="text-[10px] font-bold">Courses</span>
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <span className={`material-symbols-outlined ${location.pathname === '/about' ? 'fill' : ''}`}>info</span>
            <span className="text-[10px] font-bold">About</span>
          </NavLink>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default Layout;
