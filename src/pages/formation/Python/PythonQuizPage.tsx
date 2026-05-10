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
      {/* Hero */}
      <div className="carnet-card overflow-hidden font-instrument mb-6">
        <div className="px-7 pt-6 pb-7">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="carnet-eyebrow text-[10px] px-3 py-1 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] text-carnet-red">
                Module 0
              </span>
              <span className="carnet-eyebrow text-[10px] px-3 py-1 rounded-full bg-[rgba(78,55,30,0.06)] border border-[rgba(78,55,30,0.12)] text-carnet-ink-soft">
                Python ECG
              </span>
            </div>
            <span className="carnet-eyebrow text-[10px] hidden sm:block text-carnet-red">
              Prépa Rationnelle
            </span>
          </div>

          <div className="mb-2">
            <p className="font-instrument text-sm text-carnet-ink-mute mb-1">
              Quiz de validation
            </p>
            <h1 className="font-lora text-[32px] text-carnet-ink leading-tight">
              Les Fondamentaux
            </h1>
          </div>

          <hr className="w-10 h-0.5 bg-carnet-ink border-0 my-4" />

          <p className="font-instrument text-sm text-carnet-ink-soft leading-relaxed max-w-xl mb-6">
            Teste tes connaissances sur les 12 notions du Module 0.
            Pour chaque question, tape directement ta réponse Python — syntaxe exacte requise.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: Target, label: '15 questions' },
              { icon: Clock, label: '~10 minutes' },
              { icon: Code, label: 'Saisie libre' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-carnet-red" />
                <span className="font-instrument text-sm text-carnet-ink">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notions couvertes */}
      <div className="carnet-card overflow-hidden font-instrument mb-2">
        <div className="px-6 py-5">
          <p className="carnet-eyebrow text-[10px] mb-3">Notions testées</p>
          <div className="flex flex-wrap gap-2">
            {notions.map((n) => (
              <span
                key={n}
                className="font-instrument text-xs font-medium px-3 py-1 rounded-full bg-[rgba(78,55,30,0.06)] border border-[rgba(78,55,30,0.12)] text-carnet-ink"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz */}
      <PythonModuleQuiz
        title="Quiz — Fondamentaux"
        questions={fundamentalsQuizQuestions}
      />

      {/* Navigation */}
      <div className="mt-6 carnet-card overflow-hidden font-instrument">
        <div className="px-6 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            to="/formation/python-fondamentaux"
            className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-[rgba(78,55,30,0.04)] border border-[rgba(78,55,30,0.10)] hover:bg-[rgba(193,68,58,0.04)] hover:border-carnet-red/20 transition-colors group"
          >
            <BookOpen className="h-4 w-4 shrink-0 text-carnet-red" />
            <div>
              <p className="font-instrument text-xs text-carnet-ink-mute">Retour au</p>
              <p className="font-instrument text-sm font-semibold text-carnet-ink">Cours — Module 0</p>
            </div>
          </Link>

          <Link
            to="/formation/python-fondamentaux-exercices"
            className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-[rgba(78,55,30,0.04)] border border-[rgba(78,55,30,0.10)] hover:bg-[rgba(193,68,58,0.04)] hover:border-carnet-red/20 transition-colors group"
          >
            <PenTool className="h-4 w-4 shrink-0 text-carnet-red" />
            <div>
              <p className="font-instrument text-xs text-carnet-ink-mute">S'entraîner sur les</p>
              <p className="font-instrument text-sm font-semibold text-carnet-ink">Exercices — Module 0</p>
            </div>
          </Link>

          <Link
            to="/formation/python-matrices"
            className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] hover:bg-[rgba(193,68,58,0.10)] transition-colors"
          >
            <div>
              <p className="font-instrument text-xs text-carnet-red">Module suivant</p>
              <p className="font-instrument text-sm font-semibold text-carnet-ink">Module 1 — Matrices</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-carnet-red" />
          </Link>
        </div>
      </div>
    </PythonModuleLayout>
  );
};

export default PythonQuizPage;
