import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Move, Dices, AreaChart, Variable, Grid, Play } from 'lucide-react';

type ModuleCard = {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  exercicesPath: string;
};

const MODULES: ModuleCard[] = [
  {
    id: 1,
    title: 'Application linéaire',
    icon: Move,
    exercicesPath: '/formation/math/premiere-vers-deuxieme/module-1-applications-lineaires-exercices',
  },
  {
    id: 2,
    title: 'Vecteur aléatoire',
    icon: Grid,
    exercicesPath: '/formation/math/premiere-vers-deuxieme/module-2-vecteur-aleatoire-exercices',
  },
  {
    id: 3,
    title: 'Intégrale impropre',
    icon: AreaChart,
    exercicesPath: '/formation/math/premiere-vers-deuxieme/module-3-integrale-impropre-exercices',
  },
  {
    id: 4,
    title: 'Complément de probas',
    icon: Dices,
    exercicesPath: '/formation/math/premiere-vers-deuxieme/module-4-complement-probabilites-exercices',
  },
  {
    id: 5,
    title: 'Variable aléatoire',
    icon: Variable,
    exercicesPath: '/formation/math/premiere-vers-deuxieme/module-5-variable-aleatoire-exercices',
  },
];

const PremiereVersDeuxiemePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F8FF]">
      {/* Fil d'Ariane */}
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
            <span className="text-[#2D5BFF] font-bold">Première → Deuxième année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Première année → Deuxième année (Maths)
            </h1>
            <p className="text-slate-600 text-lg">
              Modules d’exercices incontournables à maîtriser pour aborder l’ECG2 sereinement.
            </p>
          </div>
        </Card>

        {/* Grille modules */}
        <div className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">5 modules d’exercices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <Card key={mod.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
                <CardHeader className="flex flex-row items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    {mod.icon && <mod.icon className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <Badge className="mb-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0 shadow-sm">Module {mod.id}</Badge>
                    <CardTitle className="text-md font-bold text-gray-800 leading-tight">{mod.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <a href={mod.exercicesPath} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 rounded-lg shadow transition-colors">
                      <Play className="w-5 h-5" />
                      Exercices
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiereVersDeuxiemePage;

