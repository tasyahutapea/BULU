
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QUIZ_QUESTIONS } from '../constants.tsx';

const Quiz: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[0];
  const isCorrect = selectedIdx === currentQuestion.correctIndex;

  const handleSubmit = () => {
    if (selectedIdx !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-slate-900 max-w-[480px] mx-auto shadow-2xl">
      {/* AppBar */}
      <div className="flex items-center p-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
          <span className="material-symbols-outlined dark:text-white">arrow_back_ios</span>
        </button>
        <h2 className="flex-1 text-center font-black text-lg dark:text-white pr-8">Quiz: HTML Basics</h2>
      </div>

      {/* Progress */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-black dark:text-slate-300">Quiz Progress</span>
          <span className="text-sm font-black text-primary">4 of 5</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: '80%' }}></div>
        </div>
      </div>

      {/* Question */}
      <div className="px-6 py-4">
        <h3 className="text-2xl font-black dark:text-white leading-tight mb-8">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = selectedIdx === idx;
            const showResult = isSubmitted;
            const isOptionCorrect = idx === currentQuestion.correctIndex;
            
            let borderClass = 'border-slate-200 dark:border-slate-800';
            let bgClass = 'hover:border-primary';
            
            if (isSelected) {
              borderClass = 'border-primary border-2';
              bgClass = 'bg-primary/5';
            }
            
            if (showResult) {
               if (isSelected && !isOptionCorrect) {
                 borderClass = 'border-red-500 border-2';
                 bgClass = 'bg-red-50 dark:bg-red-950/20';
               } else if (isOptionCorrect) {
                 borderClass = 'border-green-500 border-2';
                 bgClass = 'bg-green-50 dark:bg-green-950/20';
               }
            }

            return (
              <button 
                key={idx}
                disabled={isSubmitted}
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${borderClass} ${bgClass}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSelected ? 'border-primary bg-primary' : 'border-slate-300 dark:border-slate-700'
                }`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </div>
                <span className="font-bold dark:text-slate-200">{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Overlay */}
      {isSubmitted && (
        <div className="px-6 py-4">
          <div className={`flex gap-4 p-5 rounded-2xl border ${
            isCorrect ? 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800'
          }`}>
            <span className={`material-symbols-outlined ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
              {isCorrect ? 'check_circle' : 'cancel'}
            </span>
            <div>
              <p className={`font-black text-sm ${isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </p>
              <p className={`text-xs mt-1 leading-relaxed ${isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                {isCorrect ? currentQuestion.explanation : `The correct answer was "${currentQuestion.options[currentQuestion.correctIndex]}".`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Submit / Results */}
      <div className="mt-auto p-6 flex flex-col gap-8">
        {!isSubmitted ? (
          <button 
            onClick={handleSubmit}
            disabled={selectedIdx === null}
            className={`w-full h-16 rounded-2xl font-black text-lg transition-all shadow-xl ${
              selectedIdx === null 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' 
              : 'bg-primary text-white shadow-primary/30 hover:bg-primary/90 active:scale-95'
            }`}
          >
            Submit Answer
          </button>
        ) : (
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center gap-6">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">Current Score</span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-black text-primary">3</span>
                <span className="text-2xl font-bold text-slate-300">/ 5</span>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <button onClick={() => { setIsSubmitted(false); setSelectedIdx(null); }} className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-sm dark:text-white">
                <span className="material-symbols-outlined text-lg">refresh</span>
                Retry
              </button>
              <button onClick={() => navigate('/courses')} className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 font-bold text-sm dark:text-white">
                <span className="material-symbols-outlined text-lg">menu_book</span>
                Courses
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="h-8"></div>
    </div>
  );
};

export default Quiz;
