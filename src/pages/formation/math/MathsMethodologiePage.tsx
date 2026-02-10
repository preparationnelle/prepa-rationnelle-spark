import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Target, ArrowRight, BookOpen, CheckCircle2, BookMarked } from 'lucide-react';

const METHODOLOGIE_ARTICLES = [
  {
    id: 'attentes-concours',
    title: '1. Les attentes du concours',
    description: 'Décoder les attentes des jurys et optimiser votre stratégie de préparation',
    icon: <Target className="h-6 w-6" />,
    link: '/articles/attentes-concours',
    badge: 'Stratégie'
  },
  {
    id: 'colles-ds',
    title: '2. Prépa ECG : colles & DS – le combo gagnant',
    description: "S'organiser, exploiter le feedback et progresser à l'écrit comme à l'oral",
    icon: <BookOpen className="h-6 w-6" />,
    link: '/articles/colles-ds',
    badge: 'Organisation'
  },
  {
    id: 'carnet-erreurs',
    title: '3. Apprendre de ses erreurs : le carnet d\'erreurs',
    description: 'Méthode structurée pour transformer vos erreurs en points aux concours',
    icon: <CheckCircle2 className="h-6 w-6" />,
    link: '/articles/carnet-erreurs',
    badge: 'Progression'
  },
  {
    id: 'routine-maths-beton',
    title: '4. Routine maths béton : discipline et clarté',
    description: 'Construire une routine simple et efficace pour des progrès réguliers',
    icon: <BookOpen className="h-6 w-6" />,
    link: '/articles/routine-maths-beton',
    badge: 'Routine'
  },
  {
    id: 'planning-360',
    title: '5. Intégrer les maths dans un planning chargé — méthode 360°',
    description: 'Répartir intelligemment les maths ECG avec les autres matières',
    icon: <Target className="h-6 w-6" />,
    link: '/articles/planning-360',
    badge: 'Planning'
  },
  {
    id: 'plan-anti-decouragement',
    title: '6. Résister quand les maths deviennent dures : plan anti‑découragement',
    description: 'Régularité, objectifs clairs et analyse pour rebondir',
    icon: <CheckCircle2 className="h-6 w-6" />,
    link: '/articles/plan-anti-decouragement',
    badge: 'Mental'
  },
  {
    id: 'participation-active',
    title: '7. Dominer le cours : participation active, notes qui grimpent',
    description: 'Transformer 50 minutes de cours en maîtrise réelle',
    icon: <BookOpen className="h-6 w-6" />,
    link: '/articles/participation-active',
    badge: 'Cours'
  },
  {
    id: 'cours-maths-maitrise',
    title: '8. Cours maths maîtrisé = notes boostées',
    description: 'Apprendre, comprendre et ancrer les 20 chapitres efficacement',
    icon: <BookOpen className="h-6 w-6" />,
    link: '/articles/cours-maths-maitrise',
    badge: 'Apprentissage'
  },
  {
    id: 'exos-classiques',
    title: '9. Domptez les exos classiques — doublez votre progression',
    description: 'Boucle efficace pour ancrer rigueur, vitesse et créativité',
    icon: <CheckCircle2 className="h-6 w-6" />,
    link: '/articles/exos-classiques',
    badge: 'Entraînement'
  },
  {
    id: 'annales-strategie',
    title: '10. Dompter les annales — quand, pourquoi, comment',
    description: 'Méthode sous contrainte de temps pour transformer les acquis en points',
    icon: <Target className="h-6 w-6" />,
    link: '/articles/annales-strategie',
    badge: 'Concours'
  }
];

const MathsMethodologiePage = () => {
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
            <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Méthodologie</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 rotate-3">
              <BookMarked className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight">
              Méthodologie
            </h1>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Articles et conseils essentiels pour optimiser votre préparation aux concours,
            gagner en efficacité et maximiser vos notes.
          </p>
        </div>

        {/* Points clés */}
        <div className="max-w-5xl mx-auto mb-20 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Target className="h-6 w-6 text-blue-600" />
            Ce qu'il faut retenir
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3 text-blue-700 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <h3>Rigueur</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Annoncez clairement les théorèmes, vérifiez les hypothèses, justifiez chaque étape. Ne bluffez jamais.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 text-blue-700 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <h3>Gestion du temps</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Commencez par les questions accessibles. Ne bloquez pas plus de 5min. Lisez tout le sujet d'abord.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 text-blue-700 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <h3>Présentation</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Structure claire, résultats encadrés, zéro rature. Gardez 3min pour relire et avoir une copie propre.
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10 px-2">
            <h2 className="text-2xl font-bold text-gray-900">Articles détaillés</h2>
            <div className="h-px bg-gray-100 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODOLOGIE_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
                onClick={() => window.location.href = article.link}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-6 -mt-6 group-hover:bg-blue-50 transition-colors duration-300"></div>

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {article.icon}
                  </div>
                  <Badge variant="secondary" className="bg-gray-50 text-gray-500 border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                    {article.badge}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-2">
                  {article.description}
                </p>

                <div className="flex items-center text-blue-600 text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Lire l'article <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathsMethodologiePage;