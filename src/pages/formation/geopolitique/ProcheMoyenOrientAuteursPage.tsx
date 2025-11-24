import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, Lightbulb, Target, CheckCircle, Book, List } from 'lucide-react';

const ProcheMoyenOrientAuteursPage = () => {
  const auteurs = [
    {
      auteur: "Gilles Kepel",
      ouvrages: [
        {
          titre: "Jihad. Expansion et déclin de l'islamisme",
          annee: "2000",
          theme: "Islamisme",
          important: true,
          description: "Analyse majeure de l'évolution de l'islamisme depuis les années 1970 jusqu'aux attentats du 11 septembre 2001. Kepel montre comment l'islamisme, né comme réponse aux échecs du nationalisme arabe, évolue de la révolution iranienne à Al-Qaïda, en passant par les Frères musulmans et le Hamas. L'ouvrage explique l'expansion mondiale du djihadisme et ses limites, préfigurant les évolutions actuelles du terrorisme islamiste."
        },
        {
          titre: "Le Prophète et le président. La révolution islamique iranienne",
          annee: "1993",
          theme: "Iran",
          important: true,
          description: "Étude approfondie de la révolution iranienne de 1979 et de ses conséquences géopolitiques. Kepel analyse la synthèse entre islamisme chiite et révolution populaire qui renverse le Shah, créant la première république islamique. L'ouvrage explique l'évolution de Khomeiny et l'impact régional de la révolution sur le Moyen-Orient, influençant les mouvements islamistes sunnites et chiites."
        }
      ]
    },
    {
      auteur: "Henry Laurens",
      ouvrages: [
        {
          titre: "La question de Palestine",
          annee: "1999-2015",
          theme: "Conflit israélo-palestinien",
          important: true,
          description: "Somme historique exhaustive sur le conflit israélo-palestinien en 5 volumes. Laurens retrace l'évolution du conflit depuis les origines ottomanes jusqu'à nos jours, analysant les négociations de paix, les guerres et les dynamiques internationales. L'ouvrage offre une perspective française équilibrée sur les responsabilités respectives et les enjeux actuels de la résolution du conflit."
        },
        {
          titre: "L'Orient arabe à l'heure américaine",
          annee: "2004",
          theme: "Puissance américaine",
          important: true,
          description: "Analyse de la domination américaine au Moyen-Orient après les attentats du 11 septembre 2001. Laurens examine comment les États-Unis imposent leur vision stratégique, des invasions d'Afghanistan et d'Irak aux pressions sur l'Iran. L'ouvrage critique les dérives de l'unilatéralisme américain et ses conséquences sur la stabilité régionale."
        }
      ]
    },
    {
      auteur: "Olivier Roy",
      ouvrages: [
        {
          titre: "L'échec de l'islam politique",
          annee: "1992",
          theme: "Islam politique",
          important: true,
          description: "Analyse pionnière du divorce entre islamisme et démocratisation. Roy montre comment les mouvements islamistes, nés dans les années 1970, échouent à créer des sociétés islamiques viables, évoluant vers le radicalisme ou l'intégration politique. L'ouvrage explique l'émergence du djihadisme comme réponse à ces échecs, influençant durablement la compréhension de l'islamisme contemporain."
        },
        {
          titre: "Le croissant et le chaos",
          annee: "2007",
          theme: "Islam et mondialisation",
          important: true,
          description: "Exploration des transformations de l'islam dans la mondialisation. Roy analyse comment l'islam se détache de ses racines culturelles pour devenir une identité globale, créant des communautés diasporiques et des mouvements radicaux. L'ouvrage explique les Printemps arabes comme expression de cette globalisation islamique et ses conséquences sur le Moyen-Orient."
        }
      ]
    },
    {
      auteur: "Pierre-Jean Luizard",
      ouvrages: [
        {
          titre: "Laïcités autoritaires en terres d'islam",
          annee: "2008",
          theme: "Laïcité et autoritarisme",
          important: true,
          description: "Étude comparative des régimes autoritaires dans le monde musulman. Luizard analyse comment les États comme la Turquie kémaliste, l'Égypte nassérienne ou la Syrie baathiste imposent une laïcité autoritaire contre l'islam politique. L'ouvrage explique les paradoxes de ces régimes : modernisateurs mais répressifs, et leur vulnérabilité face aux révolutions islamiques."
        },
        {
          titre: "Le piège Daech",
          annee: "2015",
          theme: "Terrorisme",
          important: true,
          description: "Analyse de l'émergence de Daech et des réponses occidentales inadaptées. Luizard explique comment l'État islamique exploite les divisions sectaires et les interventions étrangères pour créer un califat territorial. L'ouvrage critique les stratégies militaires occidentales et plaide pour une approche politique régionale incluant les acteurs locaux."
        }
      ]
    },
    {
      auteur: "Jean-Pierre Filiu",
      ouvrages: [
        {
          titre: "Gaza. La victoire dans la défaite",
          annee: "2012",
          theme: "Conflit israélo-palestinien",
          important: false,
          description: "Analyse de la stratégie du Hamas à Gaza face à l'occupation israélienne. Filiu montre comment le mouvement islamiste transforme la défaite militaire en victoire politique, utilisant la résistance asymétrique et le contrôle social. L'ouvrage éclaire les dynamiques internes palestiniennes et les limites de la stratégie israélienne."
        },
        {
          titre: "Les Arabes, leur destin et le nôtre",
          annee: "2015",
          theme: "Printemps arabes",
          important: true,
          description: "Synthèse sur les révolutions arabes et leurs échecs. Filiu analyse comment les mouvements populaires de 2011 ont été récupérés par les islamistes ou réprimés par les régimes autoritaires. L'ouvrage explique les causes profondes des révolutions : frustrations économiques, aspirations démocratiques, et rôle des réseaux sociaux dans la mobilisation."
        }
      ]
    },
    {
      auteur: "Jean-François Lyotard",
      ouvrages: [
        {
          titre: "La guerre du Golfe n'a pas eu lieu",
          annee: "1991",
          theme: "Guerre du Golfe",
          important: false,
          description: "Essai polémique sur la médiatisation de la Guerre du Golfe de 1991. Lyotard critique la 'guerre propre' présentée comme un jeu vidéo, masquant les réalités humaines. L'ouvrage interroge la place des médias dans la perception des conflits moyen-orientaux et l'impact des nouvelles technologies sur la guerre moderne."
        }
      ]
    },
    {
      auteur: "François Burgat",
      ouvrages: [
        {
          titre: "L'islamisme en face",
          annee: "1995",
          theme: "Islamisme",
          important: true,
          description: "Étude de terrain sur l'islamisme en Algérie et au Moyen-Orient. Burgat analyse l'émergence des mouvements islamistes comme réponse aux échecs du développement et du nationalisme arabe. L'ouvrage offre une perspective nuancée, distinguant islamismes modérés et radicaux, et leurs interactions avec les sociétés locales."
        },
        {
          titre: "Comprendre l'islam politique",
          annee: "2016",
          theme: "Islam politique",
          important: true,
          description: "Synthèse accessible sur l'islam politique contemporain. Burgat explique l'évolution des Frères musulmans, du salafisme et du djihadisme, en les replaçant dans leurs contextes historiques et sociaux. L'ouvrage déconstruit les clichés occidentaux sur l'islamisme et plaide pour une approche compréhensive des phénomènes religieux."
        }
      ]
    },
    {
      auteur: "Benjamin Stora",
      ouvrages: [
        {
          titre: "Les trois exils. Juifs d'Algérie",
          annee: "2006",
          theme: "Diaspora juive",
          important: false,
          description: "Récit personnel et historique sur l'exil des Juifs d'Algérie. Stora analyse les trois exils : ottoman, colonial français, et post-indépendance algérienne. L'ouvrage éclaire les complexités identitaires du Maghreb et les relations judéo-arabes dans un contexte colonial."
        },
        {
          titre: "La guerre des mémoires",
          annee: "2007",
          theme: "Mémoire historique",
          important: false,
          description: "Analyse des conflits de mémoire au Moyen-Orient. Stora examine comment les guerres d'Algérie, les guerres israélo-arabes et les génocides structurent les mémoires collectives. L'ouvrage plaide pour une reconnaissance mutuelle des souffrances historiques comme préalable à la réconciliation."
        }
      ]
    },
    {
      auteur: "Bassma Kodmani-Darwish",
      ouvrages: [
        {
          titre: "La Syrie au présent",
          annee: "1996",
          theme: "Syrie",
          important: false,
          description: "Analyse de la Syrie baathiste sous Hafez al-Assad. Kodmani-Darwish examine l'équilibre fragile entre autoritarisme et stabilité sociale, et les tensions internes du régime. L'ouvrage préfigure les évolutions actuelles de la Syrie vers la guerre civile."
        }
      ]
    },
    {
      auteur: "Pierre Razoux",
      ouvrages: [
        {
          titre: "La guerre Iran-Irak",
          annee: "2013",
          theme: "Conflit Iran-Irak",
          important: true,
          description: "Histoire exhaustive de la guerre Iran-Irak (1980-1988), conflit majeur du Moyen-Orient contemporain. Razoux analyse les origines de la guerre, son déroulement, et ses conséquences géopolitiques : affaiblissement mutuel des deux pays, émergence de Saddam Hussein, et reconfiguration des alliances régionales."
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
            <Link to="/formation/geopolitique/proche-moyen-orient" className="hover:text-gray-900 transition-colors">
              Proche et Moyen-Orient
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
              Auteurs et ouvrages - Proche et Moyen-Orient
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Bibliographie essentielle pour l'étude géopolitique du Proche et Moyen-Orient.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/proche-moyen-orient" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/proche-moyen-orient/chronologie" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/proche-moyen-orient/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                <Target className="w-4 h-4" />
                Flash cards
              </Link>
              <Link to="/formation/geopolitique/proche-moyen-orient/etudes-de-cas" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                <List className="w-4 h-4" />
                Études de cas
              </Link>
            </div>
          </div>
        </div>

        {/* Liste des auteurs par thème */}
        <div className="space-y-8 max-w-6xl mx-auto">
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

        {/* Statistiques */}
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
              <p>• <strong>Approche historique :</strong> Privilégiez les ouvrages sur l'Empire ottoman et les décolonisations.</p>
              <p>• <strong>Regards croisés :</strong> Comparez les analyses occidentales et locales sur le conflit israélo-palestinien.</p>
              <p>• <strong>Actualité :</strong> Les ouvrages récents permettent d'analyser les Printemps arabes et le terrorisme islamiste.</p>
              <p>• <strong>Géopolitique énergétique :</strong> Comprendre l'importance du pétrole et du gaz dans les rivalités régionales.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProcheMoyenOrientAuteursPage;