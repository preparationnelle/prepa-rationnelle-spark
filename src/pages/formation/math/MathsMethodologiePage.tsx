import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Target, ArrowRight, BookOpen, Play, CheckCircle2 } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-gray-900 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Méthodologie</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <div className="p-8 border-l-4 border-orange-500">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
                Méthodologie
              </h1>
              <p className="text-gray-700 text-lg mt-2">
                Articles et conseils pour optimiser votre préparation aux concours
              </p>
            </div>
          </div>
        </Card>

        {/* Points clés à retenir */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <div className="p-8 bg-gray-50 border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-orange-600 mb-6">Ce qu'il faut retenir :</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 text-orange-500 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Rigueur du raisonnement :</h3>
                  <p className="text-gray-700">
                    Annoncez clairement les théorèmes utilisés, vérifiez les hypothèses, justifiez chaque étape, ne bluffez pas.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-orange-500 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Gestion du temps :</h3>
                  <p className="text-gray-700">
                    Commencez par les questions les plus accessibles, ne vous bloquez pas plus de 4-5 minutes sur une difficulté, lisez d'abord tout le sujet.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-orange-500 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Propreté et lisibilité de la copie :</h3>
                  <p className="text-gray-700">
                    Structure claire, résultats encadrés, pas de rature, relecture systématique à la fin (« copie propre » = 3 minutes de vérification).
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200 text-gray-700">
              <p>
                Appliquez cette stratégie dès votre prochain devoir surveillé ou en travaillant une annale. Les bonnes habitudes se prennent maintenant, pas le jour du concours.
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
                className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 bg-white cursor-pointer"
                onClick={() => window.location.href = article.link}
              >
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-700">
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