import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronRight, Home, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chapitre11ApplicationsLineairesEtStructuresVectoriellesExercicesPage = () => {
  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-approfondies" className="hover:text-[#1e3a8a] transition-colors">
              Maths Approfondies
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 11</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 11 : Applications linéaires & structures vectorielles
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices du chapitre 11
            </p>
          </div>
        </Card>

        {/* Message temporaire */}
        <Card className="border-0 shadow-lg">
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contenu en construction
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Les exercices du chapitre 11 seront disponibles prochainement. 
              Nous travaillons actuellement à la création d'exercices adaptés 
              aux concepts de ce chapitre.
            </p>
            <Link 
              to="/formation/maths-approfondies"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retourner aux chapitres
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre11ApplicationsLineairesEtStructuresVectoriellesExercicesPage;
