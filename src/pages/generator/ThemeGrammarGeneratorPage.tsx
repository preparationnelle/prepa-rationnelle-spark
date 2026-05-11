import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { BookOpen, Languages, Home, ChevronRight } from 'lucide-react';

const features = [
  'IA de correction',
  'Phrases spécialisées',
  'Progression détaillée',
  'Phrases similaires',
];

const ThemeGrammarGeneratorPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/generator" className="hover:text-carnet-red transition-colors">Générateurs</Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Thème grammatical</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        {/* Hero */}
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Feedback IA · Langues</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Languages className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Thème <em className="font-lora italic text-carnet-red">Grammatical</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Générateur et correcteur de thèmes de traduction — <span className="carnet-hl font-lora italic">notation détaillée instantanée</span>.
          </p>
        </header>

        {/* Tutoriel vidéo — carnet card */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="carnet-card overflow-hidden">
            <div className="px-6 py-4 border-b border-dashed border-[rgba(78,55,30,0.18)] flex items-center gap-2.5 bg-carnet-paper-2">
              <BookOpen className="h-4 w-4 text-carnet-red" />
              <span className="carnet-eyebrow text-[11px]">
                Tutoriel vidéo · utiliser le thème grammatical
              </span>
            </div>
            <div className="p-3">
              <div className="relative w-full rounded-md overflow-hidden bg-carnet-paper-2" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.loom.com/embed/c35033e64c444cf29a516b673e039c11?sid=03d4d734-d00b-4ab6-8426-077b9a83b999"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="Tutoriel Thème Grammatical"
                />
              </div>
            </div>
            <div className="px-6 py-4 bg-[rgba(193,68,58,0.06)] border-t border-dashed border-[rgba(193,68,58,0.25)]">
              <p className="text-carnet-red text-sm font-instrument">
                <strong>Conseil :</strong> regarde cette vidéo pour découvrir comment maximiser ton entraînement.
              </p>
            </div>
          </div>
        </div>

        {/* Chips de fonctionnalités */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {features.map((f) => (
            <span
              key={f}
              className="bg-[rgba(193,68,58,0.06)] text-carnet-red px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] font-instrument border border-[rgba(193,68,58,0.2)]"
            >
              {f}
            </span>
          ))}
        </div>

        <ThemeGrammaticalGenerator />
      </div>
    </div>
  );
};

export default ThemeGrammarGeneratorPage;
