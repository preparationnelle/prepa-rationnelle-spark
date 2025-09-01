import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ChevronRight, Home, Construction } from 'lucide-react';

const Chapitre22TheorieDesGraphesApprofondieQuizPage = () => {
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
            <Link to="/formation/maths-appliquees" className="hover:text-[#1e3a8a] transition-colors">Maths Appliquées</Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-green-600 font-bold">Chapitre 22 - Théorie des graphes</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              La théorie des graphes approfondie
            </h1>
            <p className="text-slate-600 text-lg">Quiz - Chapitre 22 : Théorie approfondie et applications pratiques</p>
          </div>
        </Card>

        <Card className="border-0 shadow-lg">
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quiz en cours de construction</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Le quiz sur la théorie des graphes approfondie sera disponible prochainement.
              Nous travaillons actuellement à la création de questions interactives adaptées aux besoins spécifiques de la voie appliquée en prépa ECG.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/formation/maths-theorie-des-graphes-approfondie" className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">Cours</Link>
              <Link to="/formation/maths-theorie-des-graphes-approfondie-exercices" className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">Exercices</Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre22TheorieDesGraphesApprofondieQuizPage;
