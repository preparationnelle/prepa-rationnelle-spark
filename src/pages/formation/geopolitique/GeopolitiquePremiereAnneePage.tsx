import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, BookOpen, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeopolitiquePremiereAnneePage = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: "Module 1 - Les grandes mutations du monde (1913 à nos jours)",
      description: "Panorama géopolitique et économique du XXe siècle au XXIe siècle",
      chapters: [
        "Géopolitique et relations internationales",
        "Tableaux géopolitiques (1913, 1939, 1945)",
        "Géopolitique de la guerre froide",
        "Décolonisation et conflits",
        "Le monde depuis les années 1990",
        "Croissance et développement",
        "Économie 1913-1945 (pays occidentaux)",
        "Modèles de croissance depuis 1945"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Module 2 - La mondialisation contemporaine",
      description: "Rapports de force et enjeux de la mondialisation",
      chapters: [
        "Acteurs et stratégies de la mondialisation",
        "Nouvelles frontières et territoires",
        "Dynamiques et espaces",
        "Limites de la mondialisation",
        "Défis géopolitiques du développement durable",
        "Ressources : enjeu stratégique",
        "Sciences et Technologies dans le Monde Contemporain : Des Enjeux Géopolitiques ?",
        "Changement climatique",
        "La France : puissance en mutations"
      ],
      color: "indigo"
    }
  ];

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
            <Link to="/formation/geopolitique" className="hover:text-gray-900 transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Première Année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Géopolitique - Première Année</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Découvrez les modules 1 et 2 du programme officiel ECG : fondamentaux de géopolitique, 
          panorama historique du XXe siècle et enjeux de la mondialisation contemporaine.
        </p>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {modules.map((module) => (
            <Card 
              key={module.id}
              className="p-6 hover:shadow-lg transition-all duration-200 bg-white border-l-4 border-blue-500"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-${module.color}-100 rounded-full flex items-center justify-center`}>
                    <BookOpen className={`w-6 h-6 text-${module.color}-600`} />
                  </div>
                  <div>
                    <CardTitle className={`text-xl text-${module.color}-600 mb-2`}>{module.title}</CardTitle>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {module.chapters.map((chapter, i) => {
                    const isClickable = chapter === "Sciences et Technologies dans le Monde Contemporain : Des Enjeux Géopolitiques ?";
                    const content = (
                      <div className="flex items-start gap-2">
                        <CheckCircle className={`h-4 w-4 text-${module.color}-600 mt-0.5 flex-shrink-0`} />
                        <span className="text-sm font-medium">{chapter}</span>
                      </div>
                    );
                    
                    if (isClickable) {
                      return (
                        <Link 
                          key={i} 
                          to="/formation/geopolitique/sciences-technologies"
                          className="p-3 border rounded-lg bg-gray-50 hover:bg-indigo-100 transition-colors cursor-pointer border-indigo-200"
                        >
                          {content}
                        </Link>
                      );
                    }
                    
                    return (
                      <div key={i} className="p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        {content}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className={`border border-${module.color}-500 text-${module.color}-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-${module.color}-50 transition-colors cursor-pointer`}>
                    Accéder au cours
                  </div>
                  <div className="border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    Exercices
                  </div>
                  <div className="border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    Flashcards
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Outils supplémentaires */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Outils et ressources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Générateur Géopolitique</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow text-sm">
                  Créez des analyses et des fiches personnalisées à partir de vos cours et sources.
                </p>
                <Link to="/generator/geopolitics" className="border border-green-500 text-green-600 font-semibold py-2 px-4 rounded-lg text-center hover:bg-green-50 transition-colors block">
                  Utiliser le générateur
                </Link>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Cartes de révision</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow text-sm">
                  50 concepts géopolitiques essentiels avec définitions et exemples.
                </p>
                <div className="border border-purple-500 text-purple-600 font-semibold py-2 px-4 rounded-lg text-center hover:bg-purple-50 transition-colors">
                  Réviser les concepts
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Quiz interactifs</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow text-sm">
                  Testez vos connaissances avec des QCM adaptés au programme.
                </p>
                <div className="border border-orange-500 text-orange-600 font-semibold py-2 px-4 rounded-lg text-center hover:bg-orange-50 transition-colors">
                  Commencer un quiz
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeopolitiquePremiereAnneePage;