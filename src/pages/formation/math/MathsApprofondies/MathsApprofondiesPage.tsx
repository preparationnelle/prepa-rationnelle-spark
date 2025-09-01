import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Award } from 'lucide-react';
import ChapterCard from '@/components/maths-appliquees/ChapterCard';
import { mathsApprofondies1ereAnneeData } from '@/data/maths-approfondies-1ere-annee';



const MathsApprofondiesPage = () => {
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
            <span className="text-orange-600 font-medium">Maths Approfondies - 1ère année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Maths Approfondies - 1ère année</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Formation théorique avancée en mathématiques pour la 1ère année ECG, avec focus sur les concepts fondamentaux et les démonstrations rigoureuses
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-medium text-blue-600">1ère année ECG - Voie Théorique Avancée</span>
          </div>
        </div>

        {/* Semestre 1 */}
        <div className="mb-8">
          <div className="bg-orange-50 rounded-lg p-4 mb-4 text-center border border-orange-200">
            <h2 className="text-xl font-bold mb-2 text-orange-900 flex items-center justify-center gap-2">
              <div className="p-2 rounded-lg bg-orange-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              {mathsApprofondies1ereAnneeData.semestre1.title}
            </h2>
            <p className="text-sm text-orange-700">
              {mathsApprofondies1ereAnneeData.semestre1.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsApprofondies1ereAnneeData.semestre1.chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                id={chapter.id}
                slug={chapter.slug}
                title={chapter.title}
                icon={chapter.icon}
                color={chapter.color}
                description={chapter.description}
              />
            ))}
          </div>
        </div>

        {/* Semestre 2 */}
        <div className="mb-8">
          <div className="bg-orange-50 rounded-lg p-4 mb-4 text-center border border-orange-200">
            <h2 className="text-xl font-bold mb-2 text-orange-900 flex items-center justify-center gap-2">
              <div className="p-2 rounded-lg bg-orange-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              {mathsApprofondies1ereAnneeData.semestre2.title}
            </h2>
            <p className="text-sm text-orange-700">
              {mathsApprofondies1ereAnneeData.semestre2.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsApprofondies1ereAnneeData.semestre2.chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                id={chapter.id}
                slug={chapter.slug}
                title={chapter.title}
                icon={chapter.icon}
                color={chapter.color}
                description={chapter.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathsApprofondiesPage; 