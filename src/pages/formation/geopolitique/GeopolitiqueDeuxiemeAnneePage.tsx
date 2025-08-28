import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, BookOpen, Globe, CheckCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeopolitiqueDeuxiemeAnneePage = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 3,
      title: "Module 3 - Union européenne, Afrique, Proche et Moyen-Orient",
      description: "Géodynamiques régionales : Europe, Afrique et Moyen-Orient",
      sections: [
        {
          title: "Union européenne",
          chapters: [
            "UE et ses territoires : intégrations/fragmentations",
            "UE et voisinage proche : Russie et Méditerranée",
            "UE dans le monde"
          ]
        },
        {
          title: "Continent africain",
          chapters: [
            "États et territoires africains",
            "Cultures et sociétés",
            "Développement : politiques et enjeux",
            "Géopolitique du continent africain"
          ]
        },
        {
          title: "Proche et Moyen-Orient",
          chapters: [
            "États et territoires",
            "Cultures et sociétés",
            "Géopolitique du Proche et Moyen-Orient",
            "Conflits et recompositions"
          ]
        }
      ],
      color: "orange",
      caseStudies: [
        "Brexit et ses conséquences",
        "Guerre en Ukraine",
        "Élargissement de l'UE",
        "Sahel et terrorisme",
        "Afrique du Sud post-apartheid",
        "Corne de l'Afrique",
        "Conflit israélo-palestinien",
        "Iran et puissances régionales",
        "Printemps arabes"
      ]
    },
    {
      id: 4,
      title: "Module 4 - Géodynamique des Amériques et de l'Asie",
      description: "Géodynamiques continentales : Amériques et Asie",
      sections: [
        {
          title: "Amérique du Nord",
          chapters: [
            "États-Unis : société, politique et puissance",
            "Géopolitique de l'Amérique du Nord",
            "Relations États-Unis/Canada/Mexique"
          ]
        },
        {
          title: "Amérique latine",
          chapters: [
            "Amérique latine : émergences et crises",
            "Géopolitique des Amériques",
            "Intégrations régionales"
          ]
        },
        {
          title: "Asie",
          chapters: [
            "Géopolitique d'une région multipolaire",
            "Espaces asiatiques dans la mondialisation",
            "Chine : puissance mondiale",
            "Inde : puissance émergente",
            "Autres géants asiatiques"
          ]
        }
      ],
      color: "red",
      caseStudies: [
        "Guerre commerciale USA-Chine",
        "ASEAN et intégration",
        "Venezuela et crise",
        "Nouvelles routes de la soie",
        "Tensions en mer de Chine",
        "Inde face au Pakistan",
        "ALENA/USMCA",
        "Brésil puissance émergente",
        "Corées : division et tensions"
      ]
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
            <span className="text-gray-900 font-bold">Deuxième Année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Géopolitique - Deuxième Année</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explorez les modules 3 et 4 du programme officiel ECG : géodynamiques régionales 
          de l'Union européenne, l'Afrique, le Proche et Moyen-Orient, les Amériques et l'Asie.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Union européenne */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white border-t-4 border-blue-500">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-600">Union européenne</CardTitle>
              </div>
              <p className="text-gray-600 mb-4">
                Intégrations, fragmentations et géopolitique européenne face aux défis contemporains.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">UE et ses territoires : intégrations/fragmentations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">UE et voisinage proche : Russie et Méditerranée</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">UE dans le monde</span>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 text-sm mb-2">Études de cas clés :</h4>
                <div className="space-y-1">
                  <div className="text-xs text-blue-700">• Brexit et ses conséquences</div>
                  <div className="text-xs text-blue-700">• Guerre en Ukraine</div>
                  <div className="text-xs text-blue-700">• Élargissement de l'UE</div>
                </div>
              </div>

              <div className="space-y-2">
                <Link to="/formation/geopolitique/union-europeenne" className="block border border-blue-500 text-blue-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-50 transition-colors cursor-pointer text-sm">
                  Accéder au cours →
                </Link>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Flashcards
                  </div>
                  <Link to="/formation/geopolitique/chronologie-europe" className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Chronologie
                  </Link>
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Dissertations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continent africain */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white border-t-4 border-green-500">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-600">Continent africain</CardTitle>
              </div>
              <p className="text-gray-600 mb-4">
                États, territoires, cultures, développement et enjeux géopolitiques de l'Afrique contemporaine.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">États et territoires africains</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Cultures et sociétés</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Développement : politiques et enjeux</span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 text-sm mb-2">Études de cas clés :</h4>
                <div className="space-y-1">
                  <div className="text-xs text-green-700">• Sahel et terrorisme</div>
                  <div className="text-xs text-green-700">• Afrique du Sud post-apartheid</div>
                  <div className="text-xs text-green-700">• Corne de l'Afrique</div>
                </div>
              </div>

              <div className="space-y-2">
                <Link to="/formation/geopolitique/continent-africain" className="block border border-green-500 text-green-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-green-50 transition-colors cursor-pointer text-sm">
                  Accéder au cours →
                </Link>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Flashcards
                  </div>
                  <Link to="/formation/geopolitique/continent-africain/chronologie" className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Chronologie
                  </Link>
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Dissertations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proche et Moyen-Orient */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white border-t-4 border-purple-500">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-600">Proche et Moyen-Orient</CardTitle>
              </div>
              <p className="text-gray-600 mb-4">
                États, territoires, cultures et géopolitique d'une région au cœur des enjeux mondiaux.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">États et territoires</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Cultures et sociétés</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Conflits et recompositions</span>
                </div>
              </div>

              <div className="bg-purple-50 p-3 rounded-lg mb-4">
                <h4 className="font-semibold text-purple-800 text-sm mb-2">Études de cas clés :</h4>
                <div className="space-y-1">
                  <div className="text-xs text-purple-700">• Conflit israélo-palestinien</div>
                  <div className="text-xs text-purple-700">• Iran et puissances régionales</div>
                  <div className="text-xs text-purple-700">• Printemps arabes</div>
                </div>
              </div>

              <div className="space-y-2">
                <Link to="/formation/geopolitique/proche-moyen-orient" className="block border border-purple-500 text-purple-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-purple-50 transition-colors cursor-pointer text-sm">
                  Accéder au cours →
                </Link>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Flashcards
                  </div>
                  <Link to="/formation/geopolitique/proche-moyen-orient/chronologie" className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Chronologie
                  </Link>
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Dissertations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Amérique du Nord */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white border-t-4 border-red-500">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl text-red-600">Amérique du Nord</CardTitle>
              </div>
              <p className="text-gray-600 mb-4">
                États-Unis, Canada, Mexique : société, politique et puissance dans un espace intégré.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">États-Unis : société, politique et puissance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Géopolitique de l'Amérique du Nord</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Relations États-Unis/Canada/Mexique</span>
                </div>
              </div>

              <div className="bg-red-50 p-3 rounded-lg mb-4">
                <h4 className="font-semibold text-red-800 text-sm mb-2">Études de cas clés :</h4>
                <div className="space-y-1">
                  <div className="text-xs text-red-700">• ALENA/USMCA</div>
                  <div className="text-xs text-red-700">• Guerre commerciale USA-Chine</div>
                  <div className="text-xs text-red-700">• Immigration et frontières</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="border border-red-500 text-red-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-red-50 transition-colors cursor-pointer text-sm">
                  Accéder au cours →
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Flashcards
                  </div>
                  <Link to="/formation/geopolitique/amerique-nord/chronologie" className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Chronologie
                  </Link>
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Dissertations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Amérique latine */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white border-t-4 border-yellow-500">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl text-yellow-600">Amérique latine</CardTitle>
              </div>
              <p className="text-gray-600 mb-4">
                Émergences, crises, intégrations régionales et géopolitique du sous-continent latino-américain.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Émergences et crises</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Géopolitique des Amériques</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Intégrations régionales</span>
                </div>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                <h4 className="font-semibold text-yellow-800 text-sm mb-2">Études de cas clés :</h4>
                <div className="space-y-1">
                  <div className="text-xs text-yellow-700">• Venezuela et crise</div>
                  <div className="text-xs text-yellow-700">• Brésil puissance émergente</div>
                  <div className="text-xs text-yellow-700">• Mercosur et intégration</div>
                </div>
              </div>

              <div className="space-y-2">
                <Link to="/formation/geopolitique/amerique-latine" className="block border border-yellow-500 text-yellow-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-yellow-50 transition-colors cursor-pointer text-sm">
                  Accéder au cours →
                </Link>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Flashcards
                  </div>
                  <Link to="/formation/geopolitique/amerique-latine/chronologie" className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Chronologie
                  </Link>
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Dissertations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Asie */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white border-t-4 border-orange-500">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-orange-600">Asie</CardTitle>
              </div>
              <p className="text-gray-600 mb-4">
                Géopolitique d'une région multipolaire : Chine, Inde, puissances émergentes et mondialisation asiatique.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Géopolitique d'une région multipolaire</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Chine : puissance mondiale</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">Inde : puissance émergente</span>
                </div>
              </div>

              <div className="bg-orange-50 p-3 rounded-lg mb-4">
                <h4 className="font-semibold text-orange-800 text-sm mb-2">Études de cas clés :</h4>
                <div className="space-y-1">
                  <div className="text-xs text-orange-700">• ASEAN et intégration</div>
                  <div className="text-xs text-orange-700">• Nouvelles routes de la soie</div>
                  <div className="text-xs text-orange-700">• Tensions en mer de Chine</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="border border-orange-500 text-orange-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-orange-50 transition-colors cursor-pointer text-sm">
                  Accéder au cours →
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Flashcards
                  </div>
                  <Link to="/formation/geopolitique/asie/chronologie" className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Chronologie
                  </Link>
                  <div className="border border-gray-300 text-gray-600 py-1.5 px-2 rounded text-center hover:bg-gray-50 transition-colors cursor-pointer text-xs font-medium">
                    Dissertations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Outils avancés */}
        <div className="mt-12 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Outils avancés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Générateur Unifié</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow text-sm">
                  Pipeline complet pour générer cours, sujets de dissertation et veille géopolitique.
                </p>
                <Link to="/generator/geopolitics-unified" className="border border-blue-500 text-blue-600 font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-50 transition-colors block">
                  Utiliser le générateur
                </Link>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Dossiers pays/régions</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow text-sm">
                  Fiches complètes et actualisées sur les principales puissances et régions.
                </p>
                <div className="border border-green-500 text-green-600 font-semibold py-2 px-4 rounded-lg text-center hover:bg-green-50 transition-colors">
                  Consulter les dossiers
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Simulations de crises</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow text-sm">
                  Jeux de rôle géopolitiques pour comprendre les enjeux contemporains.
                </p>
                <div className="border border-purple-500 text-purple-600 font-semibold py-2 px-4 rounded-lg text-center hover:bg-purple-50 transition-colors">
                  Participer aux simulations
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeopolitiqueDeuxiemeAnneePage;