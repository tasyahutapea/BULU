
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { COURSES } from '../constants.tsx';

const CATEGORIES = ['All', 'Programming', 'Math', 'Design', 'Strategy'];

const Courses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-slate-900">
      {/* AppBar */}
      <div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-40">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined dark:text-white">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center font-black text-lg mr-8 dark:text-white">Courses</h2>
      </div>

      {/* Headline */}
      <div className="px-6 py-8">
        <h1 className="text-3xl font-black tracking-tight dark:text-white mb-2">Choose a topic and start learning</h1>
        <p className="text-slate-500 dark:text-slate-400">Explore our wide range of interactive courses designed for your career growth.</p>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 px-6 pb-6 overflow-x-auto no-scrollbar scroll-smooth">
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="px-6 flex flex-col gap-6 pb-20 md:grid md:grid-cols-2 lg:grid-cols-3">
        {COURSES.map(course => (
          <div 
            key={course.id} 
            className="group flex flex-col bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-50 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {course.tag && (
                <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                  {course.tag}
                </div>
              )}
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-black text-xl dark:text-white group-hover:text-primary transition-colors">{course.title}</h3>
                <div className="flex items-center gap-1 text-accent">
                  <span className="material-symbols-outlined text-[14px] fill">star</span>
                  <span className="text-xs font-black text-slate-800 dark:text-white">{course.rating}</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm mb-6 flex-1">{course.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black text-slate-300 tracking-widest">{course.level}</span>
                  <span className="text-xs font-bold text-slate-400">{course.lessonsCount} Lessons</span>
                </div>
                <Link 
                  to={`/course/${course.id}/lesson/1`}
                  className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-primary/90 shadow-md shadow-primary/10 active:scale-95 transition-all"
                >
                  View Lessons
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
