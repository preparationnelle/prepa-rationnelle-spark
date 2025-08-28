import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Calculator, BookOpen, Target } from 'lucide-react';
import ChapterCard from '@/components/maths-appliquees/ChapterCard';
import { mathsAppliqueesData, getTotalChaptersCount } from '@/data/maths-appliquees';
import { MATHS_APPLIQUEES_COLORS, MATHS_APPLIQUEES_PATHS } from '@/types/maths-appliquees';

const MathsAppliqueesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formations" className="hover:text-blue-700 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to={MATHS_APPLIQUEES_PATHS.choix} className="hover:text-blue-700 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-green-600 font-medium">Maths Appliquées</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Maths Appliquées</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Formation mathématiques axée sur les applications pratiques pour la prépa ECG, avec focus sur les modèles et l'utilisation des outils informatiques
          </p>
          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50/50">
            Prépa ECG - Voie Appliquée
          </Badge>
        </div>

        {/* Semester 1 */}
        <div className="mb-12">
          <div className="bg-green-50 rounded-xl p-8 mb-8 text-center border-2 border-green-200">
            <h2 className="text-2xl font-bold mb-4 text-green-900 flex items-center justify-center gap-3">
              <div className="p-3 rounded-lg bg-green-600 text-white">
                <Calculator className="h-6 w-6" />
              </div>
              {mathsAppliqueesData.semestre1.title}
            </h2>
            <p className="text-green-700">
              {mathsAppliqueesData.semestre1.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsAppliqueesData.semestre1.chapters.map((chap) => (
              <ChapterCard
                key={chap.id}
                id={chap.id}
                slug={chap.slug}
                title={chap.title}
                icon={chap.icon}
                color={chap.color}
                description={chap.description}
              />
            ))}
          </div>
        </div>

        {/* Semester 2 */}
        <div className="mb-12">
          <div className="bg-green-50 rounded-xl p-8 mb-8 text-center border-2 border-green-200">
            <h2 className="text-2xl font-bold mb-4 text-green-900 flex items-center justify-center gap-3">
              <div className="p-3 rounded-lg bg-green-600 text-white">
                <Calculator className="h-6 w-6" />
              </div>
              {mathsAppliqueesData.semestre2.title}
            </h2>
            <p className="text-green-700">
              {mathsAppliqueesData.semestre2.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsAppliqueesData.semestre2.chapters.map((chap) => (
              <ChapterCard
                key={chap.id}
                id={chap.id}
                slug={chap.slug}
                title={chap.title}
                icon={chap.icon}
                color={chap.color}
                description={chap.description}
              />
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-green-50 rounded-xl p-8 text-center border-2 border-green-200">
            <h2 className="text-2xl font-bold mb-4 text-green-900">Ressources complémentaires</h2>
            <p className="text-green-700 mb-6">
              Chaque chapitre comprend des exercices, quiz interactifs et corrections détaillées
              pour une préparation optimale aux concours ECG.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded border border-green-200">
                <span className="font-medium text-green-900">{getTotalChaptersCount()} chapitres complets</span>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <span className="font-medium text-green-900">Quiz interactifs</span>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <span className="font-medium text-green-900">Exercices corrigés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <Card className="border border-gray-200 bg-white/60 shadow-sm mt-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-800">
              <Calculator className="h-5 w-5 text-green-600" />
              Méthodologie de préparation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-green-600" />
                  Approche pédagogique
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    Démonstrations rigoureuses étape par étape
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    Exercices progressifs de difficulté croissante
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    Focus sur la compréhension des concepts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    Préparation spécifique aux épreuves ECG
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-600" />
                  Objectifs de formation
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    Maîtriser les fondements théoriques
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    Développer l'esprit logique et démonstratif
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    Acquérir des méthodes de résolution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    Réussir les concours des Grandes Écoles
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MathsAppliqueesPage; 