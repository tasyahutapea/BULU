
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-slate-900">
      {/* AppBar */}
      <div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-40">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined dark:text-white">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center font-black text-lg mr-8 dark:text-white">About BULU</h2>
      </div>

      <div className="relative aspect-[4/3] w-full">
        <img 
          src="https://picsum.photos/800/600" 
          alt="Team Collaboration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg shadow-primary/30">
          Education 2.0
        </div>
      </div>

      <div className="px-6 py-8 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-black tracking-tighter dark:text-white">Redefining Learning</h1>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            BULU is an interactive educational platform designed to make learning engaging and accessible for everyone. We believe that education should be a seamless experience, breaking down complex barriers through intuitive design.
          </p>
        </div>

        {/* Philosophy Card */}
        <div className="p-6 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
          <h3 className="text-primary font-black text-sm uppercase tracking-widest mb-6">Our Core Philosophy</h3>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
              </div>
              <div>
                <h4 className="font-black dark:text-white">Engagement First</h4>
                <p className="text-slate-500 text-sm">Interactive modules that keep learners motivated and curious throughout the journey.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-indigo-500">devices</span>
              </div>
              <div>
                <h4 className="font-black dark:text-white">Learn Anywhere</h4>
                <p className="text-slate-500 text-sm">A consistent experience across mobile, tablet, and desktop devices for your convenience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <h2 className="text-2xl font-black dark:text-white">The Story</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
            BULU originated as a specialized UI/UX and Front-End development project. It was born from the desire to create a digital learning environment that prioritizes user psychology and aesthetic clarity over traditional cluttered interfaces.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">code</span>
              <span className="font-bold text-sm dark:text-white">Front-End Engineering</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">palette</span>
              <span className="font-bold text-sm dark:text-white">UI/UX Strategy</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 py-12 mt-8 text-center border-t border-slate-100 dark:border-slate-800">
           <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40">
             <span className="material-symbols-outlined text-white text-3xl">school</span>
           </div>
           <div className="flex flex-col gap-1">
             <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Version 5.0.0</span>
             <span className="text-slate-300 text-[10px] font-bold">© 2024 BULU Education Inc.</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
