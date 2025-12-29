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
          <div className="flex items-center text-xs text-orange-600">
            <Link to="/" className="flex items-center gap-1 hover:text-orange-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-orange-400 mx-1" />
            <Link to="/formations" className="hover:text-orange-700 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-orange-400 mx-1" />
            <Link to={MATHS_APPLIQUEES_PATHS.choix} className="hover:text-orange-700 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-orange-400 mx-1" />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-medium">Maths Appliquées</span>
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
          <Badge variant="outline" className="text-orange-600 border-orange-300 bg-orange-50">
            Prépa ECG - Voie Appliquée
          </Badge>
        </div>

        {/* Semester 1 */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-2xl p-8 mb-8 text-center border-2 border-orange-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center justify-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md">
                <Calculator className="h-6 w-6" />
              </div>
              {mathsAppliqueesData.semestre1.title}
            </h2>
            <p className="text-gray-700 font-medium">
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
                symbol={chap.symbol}
                description={chap.description}
              />
            ))}
          </div>
        </div>

        {/* Semester 2 */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-2xl p-8 mb-8 text-center border-2 border-orange-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center justify-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md">
                <Calculator className="h-6 w-6" />
              </div>
              {mathsAppliqueesData.semestre2.title}
            </h2>
            <p className="text-gray-700 font-medium">
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
                symbol={chap.symbol}
                description={chap.description}
              />
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-2xl p-8 text-center border-2 border-orange-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Ressources complémentaires</h2>
            <p className="text-gray-700 mb-6 font-medium">
              Chaque chapitre comprend des exercices, quiz interactifs et corrections détaillées
              pour une préparation optimale aux concours ECG.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-xl border-2 border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="font-semibold text-orange-600">{getTotalChaptersCount()} chapitres complets</span>
              </div>
              <div className="bg-white p-4 rounded-xl border-2 border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="font-semibold text-orange-600">Quiz interactifs</span>
              </div>
              <div className="bg-white p-4 rounded-xl border-2 border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="font-semibold text-orange-600">Exercices corrigés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <Card className="border-2 border-orange-200 bg-white shadow-lg rounded-2xl mt-12 max-w-4xl mx-auto overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100/50">
            <CardTitle className="text-xl flex items-center gap-2 text-gray-800">
              <div className="p-2 rounded-lg bg-orange-500 text-white">
                <Calculator className="h-5 w-5" />
              </div>
              Méthodologie de préparation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <div className="p-1.5 rounded bg-orange-100">
                    <BookOpen className="h-4 w-4 text-orange-600" />
                  </div>
                  Approche pédagogique
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">✓</span>
                    Démonstrations rigoureuses étape par étape
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">✓</span>
                    Exercices progressifs de difficulté croissante
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">✓</span>
                    Focus sur la compréhension des concepts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">✓</span>
                    Préparation spécifique aux épreuves ECG
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <div className="p-1.5 rounded bg-orange-100">
                    <Target className="h-4 w-4 text-orange-600" />
                  </div>
                  Objectifs de formation
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">✓</span>
                    Maîtriser les fondements théoriques
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">✓</span>
                    Développer l'esprit logique et démonstratif
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">✓</span>
                    Acquérir des méthodes de résolution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">✓</span>
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