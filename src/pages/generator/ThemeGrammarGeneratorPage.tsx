
import React from 'react';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Target, TrendingUp, Award } from 'lucide-react';

const ThemeGrammarGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header amélioré avec statistiques */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">
          Thème Grammatical
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Générateur et correcteur de thèmes de traduction : notation détaillée instantanée
        </p>


        {/* Vidéo Loom explicative améliorée */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="h-7 w-7 text-orange-600" />
              <h2 className="text-2xl font-semibold text-orange-800">
                Tutoriel vidéo : Comment utiliser le thème grammatical
              </h2>
            </div>
            <div className="relative w-full mb-6" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.loom.com/embed/c35033e64c444cf29a516b673e039c11?sid=03d4d734-d00b-4ab6-8426-077b9a83b999"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                title="Tutoriel Thème Grammatical"
              />
            </div>
            <div className="bg-white p-6 rounded-xl border border-orange-200 shadow-md">
              <p className="text-orange-700 text-base">
                <strong>Conseil :</strong> Regardez cette vidéo pour découvrir comment maximiser votre entraînement avec notre outil de thème grammatical.
              </p>
            </div>
          </div>
        </div>

        {/* Badges de fonctionnalités */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium text-sm shadow-md border border-orange-300">
            IA de correction
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium text-sm shadow-md border border-orange-300">
            Phrases spécialisées
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium text-sm shadow-md border border-orange-300">
            Progression détaillée
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium text-sm shadow-md border border-orange-300">
            Phrases similaires
          </div>
        </div>
      </div>

      <ThemeGrammaticalGenerator />
    </div>
  );
};

export default ThemeGrammarGeneratorPage;
