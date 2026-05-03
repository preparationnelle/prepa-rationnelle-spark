import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, Lightbulb, Target, CheckCircle, Book, List } from 'lucide-react';

const AsieAuteursPage = () => {
  const auteurs = [
    {
      auteur: "Anne Cheng",
      ouvrages: [
        {
          titre: "La Chine pense-t-elle ?",
          annee: "2008",
          theme: "Pensée chinoise",
          important: true,
          description: "Analyse profonde de la pensée chinoise classique et de son influence sur la stratégie contemporaine de la Chine. Cheng explique comment la tradition confucéenne, taoïste et légiste continue d'informer les décisions politiques chinoises. L'ouvrage montre comment la Chine pense différemment de l'Occident, privilégiant l'harmonie à long terme plutôt que la confrontation immédiate."
        }
      ]
    },
    {
      auteur: "Christophe Jaffrelot",
      ouvrages: [
        {
          titre: "L'Inde de Modi : National-populisme et démocratie ethnique",
          annee: "2019",
          theme: "Inde contemporaine",
          important: true,
          description: "Analyse du tournant national-populiste en Inde sous Narendra Modi. Jaffrelot examine comment le BJP a transformé la démocratie indienne en favorisant l'identité hindoue, marginalisant les minorités musulmanes et chrétiennes. L'ouvrage analyse les risques pour la démocratie pluraliste indienne et les conséquences régionales de cette évolution."
        }
      ]
    },
    {
      auteur: "Foreign Affairs",
      ouvrages: [
        {
          titre: "The New Cold War",
          annee: "2021",
          theme: "Nouvelle Guerre Froide",
          important: true,
          description: "Analyse de l'émergence d'une nouvelle Guerre Froide entre les États-Unis et la Chine. La revue diplomatique américaine examine comment la rivalité sino-américaine restructure l'ordre international, opposant démocraties libérales et autoritarismes émergents. L'article analyse les implications pour l'Asie et le monde entier."
        }
      ]
    },
    {
      auteur: "Alain Peyrefitte",
      ouvrages: [
        {
          titre: "Quand la Chine s'éveillera…le monde tremblera",
          annee: "1973",
          theme: "Réveil chinois",
          important: true,
          description: "Vision prémonitoire du réveil de la Chine comme puissance mondiale. Peyrefitte, ancien ministre français, analyse la Révolution culturelle et prédit l'émergence chinoise. L'ouvrage explique comment la Chine, après deux siècles d'humiliation, retrouve sa place centrale dans l'ordre mondial, défiant l'Occident."
        }
      ]
    },
    {
      auteur: "Zhao Tingyang",
      ouvrages: [
        {
          titre: "Tianxia, tout sous un même ciel",
          annee: "2016",
          theme: "Ordre mondial chinois",
          important: true,
          description: "Proposition philosophique chinoise pour un nouvel ordre mondial. Zhao oppose le concept traditionnel chinois de Tianxia (tout sous le ciel) à l'ordre westphalien des États-nations. L'ouvrage plaide pour une gouvernance mondiale inclusive où la Chine jouerait un rôle central, basée sur l'harmonie plutôt que sur la compétition."
        }
      ]
    },
    {
      auteur: "Kaname Akamatsu",
      ouvrages: [
        {
          titre: "Théorie du vol des oies sauvages",
          annee: "1937",
          theme: "Développement économique",
          important: true,
          description: "Théorie économique japonaise expliquant le développement industriel en Asie de l'Est. Akamatsu décrit comment les économies suivent un modèle en V : importation de technologies, développement d'industries légères puis lourdes, exportation finale. Cette théorie explique le 'miracle économique' des pays asiatiques (Japon, Corée, Taïwan, Chine)."
        }
      ]
    },
    {
      auteur: "Gunnar Myrdal",
      ouvrages: [
        {
          titre: "Le drame Asiatique",
          annee: "1968",
          theme: "Sous-développement asiatique",
          important: true,
          description: "Analyse pionnière du sous-développement asiatique par le prix Nobel d'économie. Myrdal critique les politiques occidentales qui perpétuent la pauvreté en Asie du Sud-Est. L'ouvrage analyse les cercles vicieux du sous-développement : faible productivité, malnutrition, faible épargne, et plaide pour des politiques de développement endogène."
        }
      ]
    },
    {
      auteur: "Okakura Kakuzô",
      ouvrages: [
        {
          titre: "Les idéaux d'Orient",
          annee: "1903",
          theme: "Identité asiatique",
          important: true,
          description: "Manifeste intellectuel pour l'identité asiatique face à l'impérialisme occidental. Okakura défend l'unité spirituelle et culturelle de l'Asie, opposant la 'voie asiatique' (harmonie, contemplation) à la 'voie occidentale' (conquête, matérialisme). L'ouvrage influença le mouvement pan-asiatique et la pensée anti-impérialiste."
        }
      ]
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOuvrage, setSelectedOuvrage] = useState(null);

  const openModal = (ouvrage) => {
    setSelectedOuvrage(ouvrage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOuvrage(null);
  };

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
            <Link to="/formation/geopolitique/deuxieme-annee" className="hover:text-gray-900 transition-colors">
              Deuxième Année
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique/asie" className="hover:text-gray-900 transition-colors">
              Asie
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Auteurs et ouvrages</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-4 bg-green-600 rounded-full">
              <Book className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Auteurs et ouvrages - Asie
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Bibliographie essentielle pour l'étude géopolitique de l'Asie.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/asie" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/asie/chronologie" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/asie/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                <Target className="w-4 h-4" />
                Flash cards
              </Link>
              <Link to="/formation/geopolitique/asie/etudes-de-cas" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                <List className="w-4 h-4" />
                Études de cas
              </Link>
            </div>
          </div>
        </div>


        {/* Liste des auteurs par thème (vide pour le moment) */}
        {auteurs.length > 0 && (
          <div className="space-y-8 max-w-6xl mx-auto mt-12">
            {auteurs.map((auteur, index) => (
              <Card key={index} className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    {auteur.auteur}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-1 gap-4">
                    {auteur.ouvrages.map((ouvrage, ouvrageIndex) => (
                      <div key={ouvrageIndex} className="bg-white p-4 rounded-lg border border-green-200 hover:shadow-md transition-shadow cursor-pointer"
                           onClick={() => openModal(ouvrage)}>
                        <div className="flex items-start gap-3">
                          {ouvrage.important ? (
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900 mb-1">
                                  "{ouvrage.titre}"
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                  {ouvrage.annee}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                  {ouvrage.theme}
                                </Badge>
                                {ouvrage.important && (
                                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                                    Essentiel
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Statistiques (masquées si vide) */}
        {auteurs.length > 0 && (
          <Card className="mt-12 bg-gradient-to-r from-green-100 to-emerald-100 border-green-300">
            <CardContent className="p-8 text-center">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-800 mb-2">{auteurs.length}</div>
                  <div className="text-green-700">Auteurs référencés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-800 mb-2">
                    {auteurs.reduce((total, auteur) => total + auteur.ouvrages.length, 0)}
                  </div>
                  <div className="text-green-700">Ouvrages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-800 mb-2">
                    {auteurs.reduce((total, auteur) => total + auteur.ouvrages.filter(o => o.important).length, 0)}
                  </div>
                  <div className="text-green-700">Ouvrages essentiels</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Modal for Book Details */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                "{selectedOuvrage?.titre}"
              </DialogTitle>
              <DialogDescription className="text-gray-600 mt-2">
                {selectedOuvrage?.annee} • {selectedOuvrage?.theme}
                {selectedOuvrage?.important && " • Ouvrage essentiel"}
              </DialogDescription>
            </DialogHeader>
            {selectedOuvrage && (
              <div className="mt-4 text-base text-gray-800 leading-relaxed">
                {selectedOuvrage.description}
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Note méthodologique */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-blue-800 mb-4">
              <Lightbulb className="h-5 w-5" />
              <h3 className="font-semibold">Conseils méthodologiques</h3>
            </div>
            <div className="text-blue-700 space-y-2">
              <p>• <strong>Regards croisés :</strong> Comparez les analyses occidentales, chinoises et indiennes sur l'Asie.</p>
              <p>• <strong>Approche historique :</strong> Privilégiez les ouvrages sur les empires asiatiques et les décolonisations.</p>
              <p>• <strong>Actualité :</strong> Les ouvrages récents permettent d'analyser la rivalité sino-américaine et l'essor indien.</p>
              <p>• <strong>Concepts asiatiques :</strong> Comprendre les notions de Tianxia, soft power et développement endogène.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AsieAuteursPage;
