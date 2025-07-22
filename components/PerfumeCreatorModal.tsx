
import React, { useState, useCallback } from 'react';
import { X, Wand2, Loader, Sparkles, Leaf, Droplets, FlaskConical } from 'lucide-react';
import { generateFragranceProfile } from '../services/geminiService';
import type { FragranceProfile } from '../types';
import Button from './ui/Button';
import Badge from './ui/Badge';
import PerfumeQuiz from './PerfumeQuiz';
import RecipeDisplay from './RecipeDisplay';

interface PerfumeCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'quiz' | 'text';
}

const PerfumeCreatorModal: React.FC<PerfumeCreatorModalProps> = ({ isOpen, onClose, initialView = 'text' }) => {
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<FragranceProfile | null>(null);
  const [view, setView] = useState<'text' | 'quiz' | 'result'>(initialView);

  const handleTextSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) {
      setError('Please describe yourself or your desired scent.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const generatedProfile = await generateFragranceProfile(userInput);
      setProfile(generatedProfile);
      setView('result');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [userInput]);

  const handleQuizSubmit = useCallback(async (answers: Record<string, string>) => {
    setIsLoading(true);
    setError(null);
    try {
      const generatedProfile = await generateFragranceProfile(answers);
      setProfile(generatedProfile);
      setView('result');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setUserInput('');
      setProfile(null);
      setError(null);
      setIsLoading(false);
      setView(initialView);
    }, 300);
  }

  if (!isOpen) return null;

  const NoteSection: React.FC<{ title: string; notes: string[]; icon: React.ElementType }> = ({ title, notes, icon: Icon }) => (
    <div>
      <h4 className="font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2 mb-2">
        <Icon className="h-4 w-4" />
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {notes.map((note, i) => (
          <Badge key={i} variant="note">{note}</Badge>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (view) {
      case 'text':
        return (
          <form onSubmit={handleTextSubmit}>
            <textarea
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="e.g., 'I love walking in a forest after it rains, the smell of wet earth, and reading old books by a fireplace...'"
              className="w-full h-32 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400 focus:outline-none transition"
              disabled={isLoading}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <Button type="submit" variant="primary" size="md" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader className="h-5 w-5 mr-3 animate-spin" />
                  Crafting...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-3" />
                  Generate My Profile
                </>
              )}
            </Button>
          </form>
        );
      case 'quiz':
        return <PerfumeQuiz onSubmit={handleQuizSubmit} isLoading={isLoading} />;
      case 'result':
        if (!profile) return null;
        return (
          <div className="text-left animate-in fade-in space-y-6">
            <div className="text-center p-6 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <h3 className="text-2xl font-light bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-500 bg-clip-text text-transparent">{profile.fragranceName}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 italic">"{profile.story}"</p>
            </div>
            
            <div className="space-y-4">
              <NoteSection title="Top Notes" notes={profile.topNotes} icon={Leaf} />
              <NoteSection title="Middle Notes" notes={profile.middleNotes} icon={Droplets} />
              <NoteSection title="Base Notes" notes={profile.baseNotes} icon={FlaskConical} />
            </div>

            {profile.recipe && <RecipeDisplay recipe={profile.recipe} />}

            <div>
              <h4 className="font-medium text-slate-600 dark:text-slate-400 mb-2">Personality</h4>
              <div className="flex flex-wrap gap-2">
                {profile.personalityTraits.map((trait, i) => (
                  <Badge key={i}>{trait}</Badge>
                ))}
              </div>
            </div>

            <Button variant="secondary" size="md" className="w-full" onClick={() => setView(initialView)}>
              Create Another
            </Button>
          </div>
        );
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in"
      onClick={handleClose}
      role="dialog"
    >
      <div 
        className="relative bg-slate-50 dark:bg-slate-900 rounded-3xl shadow-2xl w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto p-8 border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in-95"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors" aria-label="close">
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <Wand2 className="h-8 w-8 text-white dark:text-slate-900" />
            </div>
            <h2 className="text-3xl font-light text-slate-900 dark:text-slate-100">Create Your Scent</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              {view === 'quiz' ? 'Answer a few questions to discover your unique scent DNA.' : 'Describe yourself, a memory, or a feeling, and our AI will craft your unique fragrance profile.'}
            </p>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default PerfumeCreatorModal;
