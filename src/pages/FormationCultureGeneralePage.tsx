import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Layout, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationCultureGeneralePage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Soft blue bubbles in background */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

      {/* Header */}
      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-blue-700" />
              </div>
              <span className="text-gray-900">Formation <span className="text-blue-700">Culture générale</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Méthode d'analyse des libellés et articles de référence pour construire des copies solides
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Niveau prépa</span>
              <span className="px-4 py-2 border border-gray-200 text-gray-700 rounded-full text-sm font-medium">Articles et méthodes</span>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">Nouveau</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules en tuiles (style formations de langue, full blue) */}
      <section className="py-2 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/formation/culture-generale/articles" className="block">
              <Card className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group">
                <div className="flex flex-col items-start text-left min-h-[220px]">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <Layout className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">Articles</h3>
                  <p className="text-gray-600 text-base">Sujets, pièges de libellés, analyses</p>
                </div>
              </Card>
            </Link>

            <Link to="/formation/culture-generale/methodes" className="block">
              <Card className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group">
                <div className="flex flex-col items-start text-left min-h-[220px]">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <Target className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">Méthodes</h3>
                  <p className="text-gray-600 text-base">Analyser, problématiser, argumenter</p>
                </div>
              </Card>
            </Link>

            <Link to="/formation/culture-generale/programme" className="block">
              <Card className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group">
                <div className="flex flex-col items-start text-left min-h-[220px]">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <Lightbulb className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">Références</h3>
                  <p className="text-gray-600 text-base">Sources, ouvrages, articles</p>
                </div>
              </Card>
            </Link>

            <Link to="/formation/culture-generale/juger" className="block">
              <Card className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group">
                <div className="flex flex-col items-start text-left min-h-[220px]">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <BookOpen className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">Fiche notions : Juger</h3>
                  <p className="text-gray-600 text-base">Termes, définitions, carte conceptuelle</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationCultureGeneralePage;

