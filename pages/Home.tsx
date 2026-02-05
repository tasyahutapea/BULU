
import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary font-bold">auto_stories</span>
          </div>
          <span className="font-black text-2xl tracking-tight dark:text-white">BULU</span>
        </div>
        <Link 
          to="/courses" 
          className="bg-primary text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"
        >
          Start Learning
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-primary font-black text-xs uppercase tracking-widest">Interactive Education 2.0</span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight dark:text-white">
              Learn Smarter <br/>with <span className="text-primary relative inline-block">
                BULU
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-accent opacity-60 -z-10 rounded-full"></div>
              </span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-md leading-relaxed">
              Master new skills with interactive lessons designed for modern learners. Start your journey today with bite-sized content.
            </p>
          </div>
          <div className="flex gap-3">
            <Link 
              to="/courses" 
              className="bg-primary text-white font-black px-6 py-3.5 rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-center flex-1 md:flex-none"
            >
              Explore Courses
            </Link>
            <Link 
              to="/about" 
              className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-bold px-6 py-3.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-center flex-1 md:flex-none"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3KPDFLgHWS_hcSkF6NmnSMydMRdiZ_smN9qr5s9bAPWW0F7f2f-7QDC-c3I8RA9hicn38Rm-C4ppZyqaEzvRG4UfNPt8CzU2pbKLDcGnbiX8BiSXVl8ghfBpl5zElOnZFKpsyI3zJ0doeC-7YNECqy3fYf_kBBWMycyPnUN_Fmj4wvGqs-KiJVvqpQ8BZXbJBXbddu9phETfMIUXqRPlAEz4cJZF-Z0eECWTZltKr1mSNC3LW2zTnYViJB1zpc14sVjlrcaYH8JZK"
            alt="Student Learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="px-4 py-12 bg-slate-50 dark:bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-black dark:text-white">Popular Courses</h2>
              <p className="text-slate-500 text-sm mt-1">Handpicked for you based on current trends</p>
            </div>
            <Link to="/courses" className="text-primary font-bold text-sm hover:underline">View all</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COURSES.slice(0, 3).map((course) => (
              <Link 
                key={course.id} 
                to={`/courses`}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {course.tag && (
                    <span className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-black uppercase ${
                      course.tag === 'Featured' ? 'bg-primary text-white' : 
                      course.tag === 'Popular' ? 'bg-indigo-500 text-white' : 'bg-accent text-slate-900'
                    }`}>
                      {course.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-black text-lg dark:text-white mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-700">
                    <div className="flex items-center gap-1 text-accent">
                      <span className="material-symbols-outlined text-sm fill">star</span>
                      <span className="text-xs font-black text-slate-800 dark:text-white">{course.rating}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400">{course.level} • {course.lessonsCount} lessons</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black dark:text-white mb-4">Why Choose BULU?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Experience the future of education with a platform that puts the learner first with interactive modules.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-3xl">play_circle</span>
            </div>
            <h3 className="text-xl font-black dark:text-white mb-3">Interactive Learning</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Practice as you learn with real-time feedback and engaging exercises tailored for your speed.</p>
          </div>
          <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-accent text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
              <span className="material-symbols-outlined text-3xl">space_dashboard</span>
            </div>
            <h3 className="text-xl font-black dark:text-white mb-3">Simple UI</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Focus on what matters. Our minimalist interface removes all distractions for deep focus sessions.</p>
          </div>
          <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-indigo-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
              <span className="material-symbols-outlined text-3xl">schedule</span>
            </div>
            <h3 className="text-xl font-black dark:text-white mb-3">Learn Anytime</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Sync across all devices. Study on the bus, at home, or during a lunch break without losing progress.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary font-bold">auto_stories</span>
                <span className="font-black text-2xl">BULU</span>
              </div>
              <p className="text-slate-400 text-sm">Empowering learners worldwide through interactive and accessible education since 2024.</p>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-6">Platform</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link to="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
                <li><Link to="/mentors" className="hover:text-primary transition-colors">Mentors</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-6">Support</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-6">Newsletter</h4>
              <p className="text-slate-400 text-xs mb-4">Stay updated with the latest courses and features.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-slate-800 border-none rounded-xl px-4 py-3 text-sm flex-1 focus:ring-2 focus:ring-primary" />
                <button className="bg-primary p-3 rounded-xl hover:bg-primary/90"><span className="material-symbols-outlined">send</span></button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-[10px] uppercase tracking-widest font-bold">
            © 2024 BULU Interactive Education Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
