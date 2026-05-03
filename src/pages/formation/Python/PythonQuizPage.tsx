import React from 'react';
import { Link } from 'react-router-dom';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import { PythonModuleQuiz } from '@/components/python/PythonModuleQuiz';
import { fundamentalsQuizQuestions } from '@/data/pythonQuizQuestions';
import { BookOpen, PenTool, ChevronRight, Clock, Target, Code } from 'lucide-react';

const notions = [
  'Librairies',
  'Types fondamentaux',
  'Opérateurs',
  'print()',
  'Fonctions',
  'Listes',
  'Boucle for',
  'Boucle while',
  'Script vs Fonction',
  'Méthode ECG',
];

const PythonQuizPage: React.FC = () => {
  return (
    <PythonModuleLayout>

      {/* ── HERO ── */}
      <div
        className="rounded-2xl overflow-hidden font-dm-sans mb-6"
        style={{ border: '0.5px solid #D8D6CE', background: '#FFFFFF' }}
      >
        {/* Trait orange signature */}
        <div style={{ height: 3, background: '#F4845F' }} />

        <div className="px-8 pt-7 pb-8">
          {/* Badge + label marque */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: '#FDF0EC', color: '#C45A35', letterSpacing: '0.08em' }}
              >
                Module 0
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: '#F7F6F3', color: '#888880', letterSpacing: '0.08em' }}
              >
                Python ECG
              </span>
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-widest hidden sm:block"
              style={{ color: '#F4845F', letterSpacing: '0.08em' }}
            >
              Prépa Rationnelle
            </span>
          </div>

          {/* Titre */}
          <div className="mb-2">
            <p className="text-sm font-medium mb-1" style={{ color: '#888880' }}>
              Quiz de validation
            </p>
            <h1
              className="font-dm-serif leading-tight"
              style={{ fontSize: 36, color: '#1A1A18' }}
            >
              Les Fondamentaux
            </h1>
          </div>

          {/* Trait orange */}
          <div style={{ width: 40, height: 2, background: '#F4845F', marginBottom: 16 }} />

          {/* Description */}
          <p
            className="text-sm leading-relaxed max-w-xl mb-6"
            style={{ color: '#3A3A38' }}
          >
            Teste tes connaissances sur les 12 notions du Module 0.
            Pour chaque question, tape directement ta réponse Python — syntaxe exacte requise.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Target, label: '15 questions' },
              { icon: Clock, label: '~10 minutes' },
              { icon: Code, label: 'Saisie libre' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5" style={{ color: '#F4845F' }} />
                <span className="text-sm font-medium" style={{ color: '#3A3A38' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NOTIONS COUVERTES ── */}
      <div
        className="rounded-2xl overflow-hidden font-dm-sans mb-2"
        style={{ border: '0.5px solid #D8D6CE', background: '#FFFFFF' }}
      >
        <div className="px-6 py-5">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#888880', letterSpacing: '0.08em' }}
          >
            Notions testées
          </p>
          <div className="flex flex-wrap gap-2">
            {notions.map((n) => (
              <span
                key={n}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  background: '#F7F6F3',
                  color: '#3A3A38',
                  border: '0.5px solid #D8D6CE',
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── QUIZ ── */}
      <PythonModuleQuiz
        title="Quiz — Fondamentaux"
        questions={fundamentalsQuizQuestions}
      />

      {/* ── NAVIGATION ── */}
      <div
        className="mt-6 rounded-2xl overflow-hidden font-dm-sans"
        style={{ border: '0.5px solid #D8D6CE', background: '#FFFFFF' }}
      >
        <div
          className="px-6 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          {/* Cours */}
          <Link
            to="/formation/python-fondamentaux"
            className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group"
            style={{ background: '#F7F6F3', border: '0.5px solid #D8D6CE' }}
          >
            <BookOpen className="h-4 w-4 shrink-0" style={{ color: '#F4845F' }} />
            <div>
              <p className="text-xs" style={{ color: '#888880' }}>Retour au</p>
              <p className="text-sm font-semibold" style={{ color: '#1A1A18' }}>Cours — Module 0</p>
            </div>
          </Link>

          {/* Exercices */}
          <Link
            to="/formation/python-fondamentaux-exercices"
            className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group"
            style={{ background: '#F7F6F3', border: '0.5px solid #D8D6CE' }}
          >
            <PenTool className="h-4 w-4 shrink-0" style={{ color: '#F4845F' }} />
            <div>
              <p className="text-xs" style={{ color: '#888880' }}>S'entraîner sur les</p>
              <p className="text-sm font-semibold" style={{ color: '#1A1A18' }}>Exercices — Module 0</p>
            </div>
          </Link>

          {/* Module suivant */}
          <Link
            to="/formation/python-matrices"
            className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-colors"
            style={{ background: '#FDF0EC', border: '0.5px solid #F9C4B0' }}
          >
            <div>
              <p className="text-xs" style={{ color: '#C45A35' }}>Module suivant</p>
              <p className="text-sm font-semibold" style={{ color: '#1A1A18' }}>Module 1 — Matrices</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0" style={{ color: '#F4845F' }} />
          </Link>
        </div>
      </div>

    </PythonModuleLayout>
  );
};

export default PythonQuizPage;
