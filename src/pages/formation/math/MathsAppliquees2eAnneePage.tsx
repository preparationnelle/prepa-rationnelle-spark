import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Calculator, BookOpen, Target, Award } from 'lucide-react';
import ChapterCard from '@/components/maths-appliquees/ChapterCard';
import { mathsAppliquees2eAnneeData, getTotalChaptersCount2eAnnee } from '@/data/maths-appliquees-2e-annee';
import { MATHS_APPLIQUEES_COLORS, MATHS_APPLIQUEES_PATHS } from '@/types/maths-appliquees';

const MathsAppliquees2eAnneePage = () => {
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
            <Link to="/formation/maths-choix" className="hover:text-blue-700 transition-colors">
              Choix parcours Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-emerald-600 font-medium">Maths Appliquées - 2ème année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Maths Appliquées - 2ème année</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Formation avancée en mathématiques appliquées pour la 2ème année ECG, avec focus sur les applications industrielles et la recherche appliquée
          </p>
          <div className="flex justify-center gap-3 mb-4">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50">
              2ème année ECG
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50">
              Voie Appliquée Avancée
            </Badge>
          </div>
        </div>

        {/* Semester 1 */}
        <div className="mb-12">
          <div className="bg-blue-50 rounded-xl p-8 mb-8 text-center border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center justify-center gap-3">
              <div className="p-3 rounded-lg bg-blue-600 text-white">
                <Award className="h-6 w-6" />
              </div>
              {mathsAppliquees2eAnneeData.semestre1.title}
            </h2>
            <p className="text-blue-700">
              {mathsAppliquees2eAnneeData.semestre1.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsAppliquees2eAnneeData.semestre1.chapters.map((chap) => (
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
          <div className="bg-blue-50 rounded-xl p-8 mb-8 text-center border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center justify-center gap-3">
              <div className="p-3 rounded-lg bg-blue-600 text-white">
                <Award className="h-6 w-6" />
              </div>
              {mathsAppliquees2eAnneeData.semestre2.title}
            </h2>
            <p className="text-blue-700">
              {mathsAppliquees2eAnneeData.semestre2.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsAppliquees2eAnneeData.semestre2.chapters.map((chap) => (
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
          <div className="bg-blue-50 rounded-xl p-8 text-center border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Programme de 2ème année avancée</h2>
            <p className="text-blue-700 mb-6">
              Chaque chapitre comprend des exercices avancés, projets appliqués et corrections détaillées
              pour une préparation optimale aux concours ECG de niveau expert.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded border border-blue-200">
                <span className="font-medium text-blue-900">{getTotalChaptersCount2eAnnee()} chapitres avancés</span>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <span className="font-medium text-blue-900">Projets industriels</span>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <span className="font-medium text-blue-900">Applications recherche</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <Card className="border border-gray-200 bg-white/60 shadow-sm mt-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-800">
              <Calculator className="h-5 w-5 text-blue-600" />
              Méthodologie de 2ème année
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  Approche pédagogique avancée
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Concepts mathématiques complexes et rigoureux
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Applications industrielles et recherche
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Projets appliqués et simulations numériques
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Préparation concours niveau expert
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  Objectifs de formation ECG2
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Maîtriser les concepts avancés des maths appliquées
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Développer l'expertise en modélisation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Acquérir des compétences en recherche appliquée
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Réussir les concours ECG de haut niveau
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

export default MathsAppliquees2eAnneePage;
