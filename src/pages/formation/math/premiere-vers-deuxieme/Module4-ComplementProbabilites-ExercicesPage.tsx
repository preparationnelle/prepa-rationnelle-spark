import React from 'react';
import { Card } from '@/components/ui/card';
import { Home, ChevronRight, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const Module4ComplementProbabilitesExercicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">Toutes les formations</Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/math/premiere-vers-deuxieme" className="hover:text-[#1e3a8a] transition-colors">Première → Deuxième année</Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Module 4 Exercices - Complément de probabilités</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Module 4 - exercice (Complément de probabilités)
            </h1>
            <p className="text-slate-600">Contenu en construction.</p>
          </div>
        </Card>

        <Card className="border-0 shadow-lg">
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contenu en construction</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">Les exercices seront créés spécifiquement pour ce module. Les anciens exercices liés à une autre formation ont été supprimés.</p>
            <Link to="/formation/math/premiere-vers-deuxieme" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Retourner aux chapitres
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Module4ComplementProbabilitesExercicesPage;


