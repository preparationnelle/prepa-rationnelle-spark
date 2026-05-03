import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, Lightbulb, Target, CheckCircle, Book, List } from 'lucide-react';

const UnionEuropeenneAuteursPage = () => {
  const auteurs = [
    {
      auteur: "François Heisbourg",
      ouvrages: [
        {
          titre: "Le Temps Des Prédateurs : La Chine, Les Etats-Unis, La Russie Et Nous",
          annee: "2020",
          theme: "Puissances mondiales",
          important: false,
          description: "Analyse des rapports de force entre les grandes puissances mondiales et leur impact sur l'Europe. Heisbourg analyse comment la montée de la Chine et la Russie, ainsi que l'évolution des États-Unis, redessinent l'ordre international et obligent l'Europe à définir sa propre stratégie dans un monde multipolaire."
        }
      ]
    },
    {
      auteur: "Frédéric Pierucci",
      ouvrages: [
        {
          titre: "Le Piège Américain",
          annee: "2019",
          theme: "Relations transatlantiques",
          important: false,
          description: "Récit autobiographique et analyse critique des relations économiques entre l'Europe et les États-Unis. L'auteur, ancien dirigeant d'Alstom, décrit comment les intérêts américains peuvent parfois entrer en conflit avec ceux de l'Europe, particulièrement dans le domaine industriel et technologique."
        }
      ]
    },
    {
      auteur: "Pierre Rosanvallon",
      ouvrages: [
        {
          titre: "Le siècle du populisme",
          annee: "2020",
          theme: "Populisme européen",
          important: false,
          description: "Étude historique et sociologique du populisme en Europe depuis la fin du XIXe siècle jusqu'aux mouvements contemporains. Rosanvallon analyse les causes profondes du populisme : crise de la représentation démocratique, fractures sociales, et défiance envers les élites européennes."
        }
      ]
    },
    {
      auteur: "Guy Verhofstadt",
      ouvrages: [
        {
          titre: "Le Mal Européen",
          annee: "2016",
          theme: "Polycrise européenne",
          important: true,
          description: "Ancienne figure de proue de l'Union européenne, Verhofstadt analyse les crises multiples qui frappent l'Europe : crise économique, crise migratoire, Brexit, et montée des populismes. L'ouvrage plaide pour une refondation fédéraliste de l'Europe face aux défis contemporains."
        }
      ]
    },
    {
      auteur: "Yves Lacoste",
      ouvrages: [
        {
          titre: "Géopolitique de la Méditerranée",
          annee: "2009",
          theme: "Méditerranée",
          important: true,
          description: "Analyse géopolitique approfondie de l'espace méditerranéen, cœur historique de l'Europe. Lacoste examine les rivalités entre puissances européennes et non-européennes autour de cette mer intérieure, ainsi que les enjeux contemporains liés à l'immigration et aux ressources énergétiques."
        }
      ]
    },
    {
      auteur: "The Economist",
      ouvrages: [
        {
          titre: "On the edge of a precipice",
          annee: "2020",
          theme: "Crise européenne",
          important: false,
          description: "Analyse de l'impact du Brexit sur l'Union européenne, présentée comme un moment critique pouvant mener à l'éclatement du projet européen. L'hebdomadaire britannique examine les vulnérabilités institutionnelles et politiques de l'UE face aux nationalismes."
        },
        {
          titre: "On the blink",
          annee: "2020",
          theme: "Fragilité institutionnelle",
          important: false,
          description: "Examen critique des institutions européennes face aux crises multiples. The Economist souligne la fragilité des mécanismes de décision européens, particulièrement dans un contexte de montée des populismes et de divisions internes."
        },
        {
          titre: "What has gone wrong?",
          annee: "2020",
          theme: "Diagnostique européen",
          important: true,
          description: "Diagnostic approfondi des dysfonctionnements européens : lenteur décisionnelle, déficit démocratique, fractures entre Nord et Sud. L'analyse explique comment ces faiblesses structurelles ont été révélées par les crises successives (dette, migration, Brexit)."
        }
      ]
    },
    {
      auteur: "Ivan Krastev",
      ouvrages: [
        {
          titre: "Le Destin de l'Europe",
          annee: "2017",
          theme: "Divisions européennes",
          important: true,
          description: "Analyse des fractures qui traversent l'Europe contemporaine : Est-Ouest, Nord-Sud, libéraux-conservateurs. Krastev explique comment ces divisions, nées de l'histoire et exacerbées par la crise économique, menacent l'unité européenne et favorisent la montée des populismes."
        }
      ]
    },
    {
      auteur: "Jean-Claude Milner",
      ouvrages: [
        {
          titre: "Considérations sur l'Europe",
          annee: "2019",
          theme: "Destin européen",
          important: true,
          description: "Réflexion philosophique sur l'avenir de l'Europe, entre déclin et renaissance. Milner analyse les défis identitaires et culturels de l'Europe face à la mondialisation, plaidant pour une redéfinition de l'idée européenne au XXIe siècle."
        }
      ]
    },
    {
      auteur: "Albert O. Hirschman",
      ouvrages: [
        {
          titre: "Exit, Voice, and Loyalty",
          annee: "1970",
          theme: "Comportement économique",
          important: false,
          description: "Théorie économique sur les comportements individuels face aux organisations défaillantes. Hirschman distingue trois stratégies : exit (départ), voice (protestation), loyalty (fidélité). Cette grille d'analyse est fréquemment appliquée à l'Union européenne pour comprendre les attitudes des citoyens face aux politiques européennes."
        }
      ]
    },
    {
      auteur: "Hubert Védrine",
      ouvrages: [
        {
          titre: "Sauver l'Europe",
          annee: "2016",
          theme: "Stratégie européenne",
          important: false,
          description: "Ancien ministre français des Affaires étrangères, Védrine plaide pour une Europe plus souveraine face aux défis géopolitiques. L'ouvrage analyse les menaces (Russie, Moyen-Orient, États-Unis) et propose des solutions institutionnelles pour renforcer l'autonomie stratégique de l'Europe."
        }
      ]
    },
    {
      auteur: "Robert Frank",
      ouvrages: [
        {
          titre: "La question de l'Europe : une histoire cyclique",
          annee: "2017",
          theme: "Histoire cyclique",
          important: false,
          description: "Analyse historique des phases d'union et de division européennes depuis l'Antiquité. Frank montre comment l'Europe alterne entre périodes d'intégration et de fragmentation, offrant des clés pour comprendre les crises actuelles dans une perspective longue durée."
        }
      ]
    },
    {
      auteur: "Mario Telò",
      ouvrages: [
        {
          titre: "Europe: A Civilian Power?",
          annee: "2006",
          theme: "Puissance civile",
          important: true,
          description: "Théorie de l'Europe comme 'puissance civile' dans les relations internationales. Telò analyse comment l'Union européenne exerce son influence non pas par la force militaire, mais par le droit, le commerce, et les normes internationales, créant un modèle alternatif aux puissances traditionnelles."
        }
      ]
    },
    {
      auteur: "Bernard Spitz",
      ouvrages: [
        {
          titre: "Merci l'Europe ! Réponse aux sept mensonges populistes",
          annee: "2019",
          theme: "Contre-discours européen",
          important: true,
          description: "Réponse argumentée aux critiques populistes contre l'Europe. Spitz démonte sept idées reçues sur l'Union européenne (bureaucratie, immigration, coût, etc.) et montre les bénéfices concrets de l'intégration européenne pour les citoyens français."
        }
      ]
    },
    {
      auteur: "Robert Kagan",
      ouvrages: [
        {
          titre: "La Puissance et la Faiblesse. Les États-Unis et l'Europe dans le nouvel ordre mondial",
          annee: "2003",
          theme: "Transatlantisme",
          important: true,
          description: "Analyse célèbre des différences culturelles entre États-Unis et Europe dans leur approche des relations internationales. Kagan oppose le 'Mars américain' (usage de la force) au 'Vénus européen' (diplomatie et droit), expliquant les tensions transatlantiques post-11 septembre."
        }
      ]
    },
    {
      auteur: "Régis Debray",
      ouvrages: [
        {
          titre: "L'Europe fantôme",
          annee: "2019",
          theme: "Identité européenne",
          important: true,
          description: "Réflexion sur l'absence d'identité européenne forte face aux nationalismes. Debray analyse comment l'Europe peine à créer un récit commun, laissant le champ libre aux identités nationales et aux populismes. L'ouvrage plaide pour une refondation culturelle de l'Europe."
        }
      ]
    },
    {
      auteur: "Richard Coudenhove-Kalergi",
      ouvrages: [
        {
          titre: "Paneuropa",
          annee: "1923",
          theme: "Fédéralisme européen",
          important: true,
          description: "Ouvrage fondateur du mouvement paneuropéen. Coudenhove-Kalergi, aristocrate austro-hongrois, plaide pour une union fédérale des États européens comme réponse aux guerres nationales. Ce texte visionnaire influença les pères fondateurs de l'Union européenne actuelle."
        }
      ]
    },
    {
      auteur: "François Godement",
      ouvrages: [
        {
          titre: "La Chine à nos portes - Une stratégie pour l'Europe",
          annee: "2018",
          theme: "Chine-Europe",
          important: true,
          description: "Analyse stratégique des relations entre l'Europe et la Chine. Godement examine l'expansion chinoise (Nouvelles Routes de la Soie) et propose une stratégie européenne coordonnée pour faire face à cette puissance émergente, équilibrant commerce et sécurité."
        }
      ]
    },
    {
      auteur: "Guillaume Duval",
      ouvrages: [
        {
          titre: "La France ne sera jamais plus une grande puissance ? Tant mieux !",
          annee: "2015",
          theme: "Déclin français",
          important: false,
          description: "Réflexion iconoclaste sur le déclin de la France comme puissance mondiale. Duval analyse les avantages d'une France 'moyenne puissance' intégrée dans l'Union européenne, libérée des ambitions impériales coûteuses, et concentrée sur son développement interne."
        }
      ]
    },
    {
      auteur: "Peter Sloterdijk",
      ouvrages: [
        {
          titre: "Si l'Europe s'éveille",
          annee: "2003",
          theme: "Renaissance européenne",
          important: true,
          description: "Essai philosophique appelant à un réveil européen face aux défis contemporains. Sloterdijk analyse la crise identitaire de l'Europe et plaide pour une redéfinition de son rôle dans le monde, entre héritage culturel et responsabilités globales."
        }
      ]
    },
    {
      auteur: "Gabriel Arnoux",
      ouvrages: [
        {
          titre: "Les compétences de l'UE. Perceptions et réalités",
          annee: "2017",
          theme: "Compétences européennes",
          important: true,
          description: "Analyse détaillée des domaines de compétence de l'Union européenne selon les traités. Arnoux démystifie les perceptions erronées sur les pouvoirs de l'UE, distinguant ce qui relève des États membres de ce qui est décidé au niveau européen."
        }
      ]
    },
    {
      auteur: "Emmanuel Kant",
      ouvrages: [
        {
          titre: "Zum ewigen Frieden",
          annee: "1795",
          theme: "Paix perpétuelle",
          important: true,
          description: "Traité philosophique fondateur de la paix démocratique. Kant propose une fédération d'États républicains comme garant de la paix perpétuelle. Ce texte visionnaire influença profondément la construction européenne, particulièrement l'idée d'une paix par le droit et les institutions."
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
            <Link to="/formation/geopolitique/union-europeenne" className="hover:text-gray-900 transition-colors">
              Union européenne
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
              Auteurs et ouvrages - Union européenne
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Bibliographie essentielle pour l'étude géopolitique de l'Union européenne.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/union-europeenne" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/chronologie-europe" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/union-europeenne/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                <Target className="w-4 h-4" />
                Flash cards
              </Link>
              <Link to="/formation/geopolitique/union-europeenne/etudes-de-cas" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
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
              <p>• <strong>Approche institutionnelle :</strong> Privilégiez les ouvrages sur les institutions européennes et leur fonctionnement.</p>
              <p>• <strong>Regards croisés :</strong> Comparez les analyses européennes et américaines sur l'Union européenne.</p>
              <p>• <strong>Actualité :</strong> Les ouvrages récents permettent d'analyser les défis contemporains (Brexit, crise migratoire, etc.).</p>
              <p>• <strong>Perspectives historiques :</strong> Comprendre l'évolution depuis les traités fondateurs jusqu'aux élargissements successifs.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UnionEuropeenneAuteursPage;

