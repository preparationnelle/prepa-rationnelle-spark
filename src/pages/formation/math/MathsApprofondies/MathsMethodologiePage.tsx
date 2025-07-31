import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Target, ArrowRight, BookOpen, Play } from 'lucide-react';

const METHODOLOGIE_ARTICLES = [
  {
    id: 'attentes-concours',
    title: 'Les attentes du concours ?',
    description: 'Décoder les attentes des jurys et optimiser votre stratégie de préparation',
    icon: <Target className="h-6 w-6" />,
    color: 'bg-white',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
    link: '/articles/attentes-concours',
    badge: 'Article'
  }
];

const MathsMethodologiePage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Méthodologie</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 mb-8">
          <div className="p-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Méthodologie
              </h1>
              <p className="text-orange-700 text-lg mt-2">
                Articles et conseils pour optimiser votre préparation aux concours
              </p>
            </div>
          </div>
        </Card>

        {/* Grille d'articles */}
        <div className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-8 text-orange-600 text-center">Articles de Méthodologie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {METHODOLOGIE_ARTICLES.map((article) => (
              <Card 
                key={article.id}
                className={`group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 bg-white cursor-pointer ${article.color}`}
                onClick={() => window.location.href = article.link}
              >
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center ${article.textColor}`}>
                      {article.icon}
                    </div>
                    <Badge className="text-xs bg-orange-500 text-white px-2 py-1 rounded">
                      {article.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-600 font-medium group-hover:underline">
                      Lire l'article
                    </span>
                    <ArrowRight className="h-4 w-4 text-orange-600 group-hover:scale-110 transition-transform" />
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

export default MathsMethodologiePage; 