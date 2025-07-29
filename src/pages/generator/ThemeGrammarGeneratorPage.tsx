
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
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Thème Grammatical
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Générateur et correcteur de thèmes de traduction : notation détaillée instantanée
        </p>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-800">500+</div>
              <div className="text-sm text-purple-600">Phrases spécialisées</div>
            </CardContent>
          </Card>
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-800">3</div>
              <div className="text-sm text-orange-600">Langues supportées</div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-800">10/10</div>
              <div className="text-sm text-green-600">Notation détaillée</div>
            </CardContent>
          </Card>
        </div>

        {/* Vidéo Loom explicative améliorée */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-purple-800">
                📺 Tutoriel vidéo : Comment utiliser le thème grammatical
              </h2>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.loom.com/embed/c35033e64c444cf29a516b673e039c11?sid=03d4d734-d00b-4ab6-8426-077b9a83b999"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                title="Tutoriel Thème Grammatical"
              />
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg border border-purple-200">
              <p className="text-purple-700 text-sm">
                <strong>💡 Conseil :</strong> Regardez cette vidéo pour découvrir comment maximiser votre entraînement avec notre outil de thème grammatical.
              </p>
            </div>
          </div>
        </div>

        {/* Badges de fonctionnalités */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            ✨ IA de correction
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            🎯 Phrases spécialisées
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            📊 Progression détaillée
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            🔄 Phrases similaires
          </Badge>
        </div>
      </div>

      <ThemeGrammaticalGenerator />
    </div>
  );
};

export default ThemeGrammarGeneratorPage;
