import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ChevronRight, Calculator, Home, BookOpen, GraduationCap } from 'lucide-react';
import MathsChapterListRow from '@/components/maths-appliquees/MathsChapterListRow';
import { mathsAppliqueesData } from '@/data/maths-appliquees';

const MathsAppliqueesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 relative overflow-hidden">
      {/* Floating elements - Refined & Sober */}
      <div className="absolute -z-10 top-20 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-40 right-1/4 w-72 h-72 bg-blue-50/80 rounded-full blur-2xl"></div>

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-xs font-medium text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-300" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-300" />
            <Link to="/formation/maths-choix" className="hover:text-gray-900 transition-colors">
              Parcours Maths
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-300" />
            <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Maths Appliquées 1A</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 rotate-3">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight">
              Maths Appliquées
            </h1>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Une approche concrète et rigoureuse des mathématiques pour la prépa ECG,
            axée sur la modélisation et l'informatique.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
            <GraduationCap className="h-4 w-4 text-blue-600" />
            <span>1ère année ECG</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 mx-1"></span>
            <span className="text-blue-600">Voie Appliquée</span>
          </div>
        </div>

        {/* Semestre 1 */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="flex items-start md:items-center gap-4 mb-6 px-1">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20 text-white font-bold text-lg">
              1
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                {mathsAppliqueesData.semestre1.title}
              </h2>
              <p className="text-gray-500 font-medium">
                {mathsAppliqueesData.semestre1.description}
              </p>
            </div>
          </div>

          <div className="space-y-3 pl-0 md:pl-14">
            {mathsAppliqueesData.semestre1.chapters.map((chapter) => (
              <MathsChapterListRow
                key={chapter.id}
                chapter={chapter}
              />
            ))}
          </div>
        </div>

        {/* Semestre 2 */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="flex items-start md:items-center gap-4 mb-6 px-1">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-600/20 text-white font-bold text-lg">
              2
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                {mathsAppliqueesData.semestre2.title}
              </h2>
              <p className="text-gray-500 font-medium">
                {mathsAppliqueesData.semestre2.description}
              </p>
            </div>
          </div>

          <div className="space-y-3 pl-0 md:pl-14">
            {mathsAppliqueesData.semestre2.chapters.map((chapter) => (
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

export default MathsAppliqueesPage;