import React from 'react';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { BookOpen, Languages } from 'lucide-react';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const features = [
  'IA de correction',
  'Phrases spécialisées',
  'Progression détaillée',
  'Phrases similaires',
];

const ThemeGrammarGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <GeneratorHero
            badge="Langues"
            badgeIcon={Languages}
            title="Thème"
            highlight="Grammatical"
            subtitle="Générateur et correcteur de thèmes de traduction : notation détaillée instantanée."
            breadcrumb="Thème grammatical"
          />
        </div>

        {/* Tutoriel vidéo */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
            <div className="h-[3px] w-full bg-pr-orange" />
            <div className="px-6 py-4 border-b border-pr-gray-light flex items-center gap-2.5 bg-pr-gray-bg">
              <BookOpen className="h-4 w-4 text-pr-orange-dark" />
              <span className="font-dm-sans text-sm font-semibold text-pr-black uppercase tracking-[0.04em]">
                Tutoriel vidéo · utiliser le thème grammatical
              </span>
            </div>
            <div className="p-3">
              <div className="relative w-full rounded-xl overflow-hidden bg-pr-gray-bg" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.loom.com/embed/c35033e64c444cf29a516b673e039c11?sid=03d4d734-d00b-4ab6-8426-077b9a83b999"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="Tutoriel Thème Grammatical"
                />
              </div>
            </div>
            <div className="px-6 py-4 bg-pr-orange-pale border-t border-pr-orange/30">
              <p className="text-pr-orange-dark text-sm font-dm-sans">
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
              className="bg-pr-orange-pale text-pr-orange-dark px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] font-dm-sans"
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
