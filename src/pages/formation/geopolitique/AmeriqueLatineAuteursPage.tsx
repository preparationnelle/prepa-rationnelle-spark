import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, Lightbulb, Target, CheckCircle, Book, List } from 'lucide-react';

const AmeriqueLatineAuteursPage = () => {
  const auteurs = [
    {
      auteur: "The Economist",
      ouvrages: [
        {
          titre: "Nobody's backyard, the rise of Latin America",
          annee: "2010",
          theme: "Émergence latino-américaine",
          important: true,
          description: "Analyse de l'émergence économique et politique de l'Amérique latine au début des années 2010. The Economist souligne la croissance remarquable de la région, l'affirmation de ses démocraties et son rôle croissant dans les affaires mondiales. L'ouvrage explique comment le 'modèle latino-américain' (combinaison de ressources naturelles et de politiques sociales) constitue une alternative au néolibéralisme pur."
        },
        {
          titre: "Brésil : le grand bond en arrière",
          annee: "2016",
          theme: "Crise brésilienne",
          important: true,
          description: "Diagnostic critique de la crise institutionnelle et économique du Brésil sous Dilma Rousseff. The Economist analyse l'impeachment de la présidente, la corruption généralisée révélée par l'opération Lava Jato, et les difficultés économiques du géant sud-américain. L'ouvrage explique comment cette crise a freiné l'émergence du Brésil comme puissance mondiale."
        }
      ]
    },
    {
      auteur: "Denise Artaud",
      ouvrages: [
        {
          titre: "Les Etats Unis et leur arrière-cour",
          annee: "1995",
          theme: "Doctrine Monroe",
          important: false,
          description: "Analyse historique des relations entre les États-Unis et l'Amérique latine depuis la doctrine Monroe. Artaud examine comment Washington a exercé son influence sur ses 'voisins du Sud', alternant entre interventions directes et politiques d'endiguement. L'ouvrage souligne la persistance des asymétries de puissance malgré les évolutions démocratiques de la région."
        }
      ]
    },
    {
      auteur: "Joel Garreau",
      ouvrages: [
        {
          titre: "Mexamerica : Les neuf nations de l'Amérique du Nord",
          annee: "1981",
          theme: "Amérique du Nord",
          important: true,
          description: "Vision pionnière des neuf régions culturelles de l'Amérique du Nord. Garreau identifie des entités géopolitiques transfrontalières qui transcendent les frontières nationales : Mexamerica (fusion culturelle États-Unis-Mexique), La Nouvelle-Orléans, etc. Cette analyse préfigure les dynamiques actuelles de régionalisation nord-américaine."
        }
      ]
    },
    {
      auteur: "Raul Prebisch",
      ouvrages: [
        {
          titre: "Les USA et le sous-développement en Amérique latine",
          annee: "1970",
          theme: "Développement inégal",
          important: true,
          description: "Critique fondatrice de l'économiste argentin sur les termes de l'échange défavorables aux pays en développement. Prebisch analyse comment les exportations de matières premières latino-américaines s'effondrent face aux produits manufacturés des pays développés. Cette théorie du 'commerce inégal' fonde la demande d'industrialisation et d'intégration régionale en Amérique latine."
        }
      ]
    },
    {
      auteur: "Olivier Dabène",
      ouvrages: [
        {
          titre: "Street Art and Democracy in Latin America",
          annee: "2019",
          theme: "Art urbain et politique",
          important: true,
          description: "Étude sur le rôle de l'art urbain dans les processus démocratiques latino-américains. Dabène analyse comment le street art exprime les aspirations populaires, critique les pouvoirs établis et participe à la construction d'identités collectives. L'ouvrage montre comment cet art populaire reflète les transformations sociales de l'Amérique latine contemporaine."
        }
      ]
    },
    {
      auteur: "Elisée Reclus",
      ouvrages: [
        {
          titre: "Nouvelle Géographie Universelle",
          annee: "1891",
          theme: "Géographie humaine",
          important: true,
          description: "Œuvre monumentale du géographe anarchiste sur l'Amérique latine. Reclus analyse les sociétés indigènes, les processus coloniaux et l'organisation spatiale de la région. Son approche humaniste et critique des impérialismes européens reste une référence pour comprendre les héritages culturels et territoriaux de l'Amérique latine."
        }
      ]
    },
    {
      auteur: "René Dumont",
      ouvrages: [
        {
          titre: "Le mal-développement en Amérique latine : Mexique, Colombie, Brésil",
          annee: "1981",
          theme: "Développement durable",
          important: true,
          description: "Analyse pionnière du développement destructeur en Amérique latine. Dumont critique les politiques agricoles qui favorisent l'exportation au détriment de la sécurité alimentaire, les déforestations massives et l'endettement croissant. L'ouvrage plaide pour un développement endogène respectueux des équilibres écologiques et sociaux."
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
            <Link to="/formation/geopolitique/amerique-latine" className="hover:text-gray-900 transition-colors">
              Amérique latine
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
              Auteurs et ouvrages - Amérique latine
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Bibliographie essentielle pour l'étude géopolitique de l'Amérique latine.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/amerique-latine" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/amerique-latine/chronologie" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/amerique-latine/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                <Target className="w-4 h-4" />
                Flash cards
              </Link>
              <Link to="/formation/geopolitique/amerique-latine/etudes-de-cas" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
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
              <p>• <strong>Approche historique :</strong> Privilégiez les ouvrages sur la colonisation espagnole/portugaise et les indépendances.</p>
              <p>• <strong>Regards croisés :</strong> Comparez les analyses européennes, nord-américaines et locales sur l'Amérique latine.</p>
              <p>• <strong>Actualité :</strong> Les ouvrages récents permettent d'analyser les transitions démocratiques et les défis contemporains.</p>
              <p>• <strong>Géopolitique des ressources :</strong> Comprendre l'importance des matières premières dans les dynamiques régionales.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AmeriqueLatineAuteursPage;
