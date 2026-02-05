
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Lesson: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-slate-900 max-w-[480px] mx-auto shadow-2xl">
      {/* AppBar */}
      <div className="flex items-center p-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50">
        <button onClick={() => navigate('/courses')} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
          <span className="material-symbols-outlined dark:text-white">arrow_back_ios</span>
        </button>
        <div className="flex flex-col ml-2">
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Home > Courses > HTML</span>
          <h2 className="font-black text-lg dark:text-white leading-tight">HTML Basics</h2>
        </div>
        <button className="ml-auto p-2">
          <span className="material-symbols-outlined dark:text-white">more_horiz</span>
        </button>
      </div>

      {/* Progress Section */}
      <div className="p-6 border-b border-slate-50 dark:border-slate-800">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-300">Progress</span>
          <span className="text-sm font-black text-primary">40%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: '40%' }}></div>
        </div>
        <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wide">Lesson 4 of 10</p>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <h1 className="text-3xl font-black dark:text-white tracking-tighter mb-4">Understanding Tags</h1>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          HTML tags are the building blocks of web pages. They tell the browser how to display content. Most tags come in pairs: an opening tag and a closing tag.
        </p>

        {/* Code Example */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border-l-4 border-primary mb-8">
          <span className="text-[10px] font-black uppercase text-primary tracking-widest mb-3 block">Example Code</span>
          <code className="text-sm font-mono text-slate-800 dark:text-slate-200 block space-y-1">
            <p>&lt;h1&gt;Hello World&lt;/h1&gt;</p>
            <p>&lt;p&gt;This is a paragraph.&lt;/p&gt;</p>
          </code>
        </div>

        {/* Checkpoints */}
        <h3 className="font-black dark:text-white mb-4">Key Components:</h3>
        <div className="flex flex-col gap-3">
          {[
            'Opening Tag (e.g., <p>)',
            'Content inside tags',
            'Closing Tag (e.g., </p>)'
          ].map((item, idx) => (
            <label key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary dark:bg-transparent dark:border-slate-700" defaultChecked={idx === 0} />
              <span className="text-sm font-bold dark:text-slate-200">{item}</span>
            </label>
          ))}
        </div>

        {/* Modules List */}
        <div className="mt-12">
          <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6">Module Lessons</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/20">
              <span className="material-symbols-outlined text-primary">play_circle</span>
              <span className="flex-1 font-black text-primary text-sm">1.4 Understanding Tags</span>
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent opacity-60">
              <span className="material-symbols-outlined text-slate-400">lock</span>
              <span className="flex-1 font-bold text-slate-500 text-sm">1.5 Attributes & Values</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky bottom-0 z-50 flex gap-4">
        <button 
          onClick={() => navigate('/courses')}
          className="flex-1 flex items-center justify-center gap-2 h-14 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-black hover:bg-slate-50 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">chevron_left</span>
          Previous
        </button>
        <Link 
          to={`/quiz/${id}`}
          className="flex-1 flex items-center justify-center gap-2 h-14 rounded-2xl bg-primary text-white font-black shadow-xl shadow-primary/30 hover:bg-primary/90 active:scale-95 transition-all"
        >
          Next
          <span className="material-symbols-outlined">chevron_right</span>
        </Link>
      </div>
    </div>
  );
};

export default Lesson;
