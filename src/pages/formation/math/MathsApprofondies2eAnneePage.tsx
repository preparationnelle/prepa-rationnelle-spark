import React from 'react';
import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';
import MathsChapterListRow from '@/components/maths-appliquees/MathsChapterListRow';
import { mathsApprofondies2eAnneeData } from '@/data/maths-approfondies-2e-annee';

const MathsApprofondies2eAnneePage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formation/maths-choix" className="hover:text-foreground transition-colors">
              Choix parcours Maths
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-foreground font-medium">Maths Approfondies - 2ème année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Maths Approfondies - 2ème année</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Formation théorique avancée en mathématiques pour la 2ème année ECG, avec approfondissement de l'algèbre linéaire, des probabilités et de l'analyse multivariée
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-medium text-blue-600">2ème année ECG - Voie Théorique Avancée</span>
          </div>
        </div>

        {/* Semestre 3 */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {mathsApprofondies2eAnneeData.semestre1.title}
              </h2>
              <p className="text-sm text-gray-500">
                {mathsApprofondies2eAnneeData.semestre1.description}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {mathsApprofondies2eAnneeData.semestre1.chapters.map((chapter) => (
              <MathsChapterListRow
                key={chapter.id}
                chapter={chapter}
              />
            ))}
          </div>
        </div>

        {/* Semestre 4 */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {mathsApprofondies2eAnneeData.semestre2.title}
              </h2>
              <p className="text-sm text-gray-500">
                {mathsApprofondies2eAnneeData.semestre2.description}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {mathsApprofondies2eAnneeData.semestre2.chapters.map((chapter) => (
              <MathsChapterListRow
                key={chapter.id}
                chapter={chapter}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathsApprofondies2eAnneePage;
