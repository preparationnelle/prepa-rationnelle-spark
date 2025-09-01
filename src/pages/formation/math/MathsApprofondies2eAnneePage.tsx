import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Award } from 'lucide-react';
import ChapterCard from '@/components/maths-appliquees/ChapterCard';
import { mathsApprofondies2eAnneeData } from '@/data/maths-approfondies-2e-annee';

const MathsApprofondies2eAnneePage = () => {
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
            <span className="text-orange-600 font-medium">Maths Approfondies - 2ème année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-8">Maths Approfondies - 2ème année</h1>
        </div>

        {/* Semester 1 */}
        <div className="mb-8">
          <div className="bg-orange-50 rounded-lg p-4 mb-4 text-center border border-orange-200">
            <h2 className="text-xl font-bold mb-2 text-orange-900 flex items-center justify-center gap-2">
              <div className="p-2 rounded-lg bg-orange-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              {mathsApprofondies2eAnneeData.semestre1.title}
            </h2>
            <p className="text-sm text-orange-700">
              {mathsApprofondies2eAnneeData.semestre1.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsApprofondies2eAnneeData.semestre1.chapters.map((chap) => (
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
        <div className="mb-8">
          <div className="bg-orange-50 rounded-lg p-4 mb-4 text-center border border-orange-200">
            <h2 className="text-xl font-bold mb-2 text-orange-900 flex items-center justify-center gap-2">
              <div className="p-2 rounded-lg bg-orange-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              {mathsApprofondies2eAnneeData.semestre2.title}
            </h2>
            <p className="text-sm text-orange-700">
              {mathsApprofondies2eAnneeData.semestre2.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsApprofondies2eAnneeData.semestre2.chapters.map((chap) => (
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


      </div>
    </div>
  );
};

export default MathsApprofondies2eAnneePage;
