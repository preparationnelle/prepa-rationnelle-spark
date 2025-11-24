import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, MapPin, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle, Book } from 'lucide-react';

const ContinentAfricainAuteursPage = () => {
  const auteurs = [
    {
      auteur: "Sylvie Brunel",
      ouvrages: [
        {
          titre: "L'Afrique. Un continent en réserve de développement",
          annee: "2004",
          theme: "Développement",
          important: true,
          description: "Ouvrage majeur de Sylvie Brunel qui analyse l'Afrique comme un continent aux ressources abondantes mais aux potentialités sous-exploitées. L'auteur souligne les richesses naturelles exceptionnelles (minerais, terres arables, biodiversité) mais critique les politiques de développement inadaptées et les dépendances extérieures. Cette analyse préfigure le débat sur la 'malédiction des ressources' et plaide pour une approche endogène du développement africain, combinant exploitation rationnelle des ressources et développement humain durable."
        },
        {
          titre: "L'Afrique est-elle si bien partie ?",
          annee: "2014",
          theme: "Développement",
          important: true,
          description: "Analyse critique des évolutions africaines depuis le tournant du millénaire. Sylvie Brunel nuance le discours optimiste sur l'émergence africaine en pointant les défis structurels persistants : instabilité politique, dépendance aux matières premières, inégalités sociales. L'ouvrage met en garde contre les illusions du 'miracle africain' et insiste sur la nécessité de réformes institutionnelles profondes pour transformer les richesses naturelles en développement humain durable."
        }
      ]
    },
    {
      auteur: "The Economist",
      ouvrages: [
        {
          titre: "The hopeless continent",
          annee: "2000",
          theme: "Perception internationale",
          important: true,
          description: "Article emblématique du pessimisme occidental sur l'Afrique à l'aube du XXIe siècle. The Economist dresse un tableau sombre du continent ravagé par les guerres civiles, la corruption et les épidémies (VIH/sida). Cette perception négative reflète le désengagement international des années 1990 et contribue à marginaliser l'Afrique dans l'agenda global. L'article illustre comment les représentations médiatiques peuvent influencer les politiques de développement et renforcer les stéréotypes sur le 'continent perdu'."
        },
        {
          titre: "Africa Rising : A hopeful Continent",
          annee: "2011",
          theme: "Développement",
          important: true,
          description: "Couverture emblématique marquant le tournant optimiste sur l'Afrique. The Economist annonce l'émergence économique du continent, citant la croissance chinoise, les investissements étrangers et l'essor de la classe moyenne. L'article souligne les opportunités démographiques (dividende démographique) et les progrès en matière de gouvernance. Cette analyse influence les politiques internationales et contribue au regain d'intérêt pour l'investissement en Afrique, bien qu'elle soit critiquée pour minimiser les défis persistants."
        },
        {
          titre: "Aspiring Africa",
          annee: "2013",
          theme: "Développement",
          important: true,
          description: "Analyse nuancée des aspirations africaines et des défis à relever. The Economist reconnaît les progrès économiques mais insiste sur la nécessité de réformes institutionnelles profondes. L'article met l'accent sur l'importance de l'éducation, de la lutte contre la corruption et du développement des infrastructures pour transformer l'optimisme en réalités durables. Cette approche équilibrée reflète l'évolution du discours occidental sur l'Afrique, passant du pessimisme au réalisme optimiste."
        },
        {
          titre: "The new scramble for Africa",
          annee: "2019",
          theme: "Géopolitique",
          important: true,
          description: "Analyse de la nouvelle compétition géopolitique en Afrique au XXIe siècle. The Economist compare la 'ruée vers l'Afrique' actuelle à la Conférence de Berlin de 1884-1885, opposant désormais la Chine, les États-Unis, la Russie, l'Inde et l'Union européenne. L'article souligne les investissements massifs chinois, les intérêts sécuritaires américains et les stratégies européennes, tout en pointant les risques pour les États africains : endettement, dépendances multiples et perte de souveraineté. Cette analyse met en lumière les dynamiques multipolaires contemporaines."
        }
      ]
    },
    {
      auteur: "Harry S. Truman",
      ouvrages: [
        {
          titre: "Discours sur l'état de l'Union",
          annee: "1949",
          theme: "Politique internationale",
          important: true,
          description: "Discours fondateur de la politique américaine d'après-guerre annonçant le Plan Marshall et la doctrine Truman. Ce texte marque le tournant de la Guerre Froide, opposant le 'monde libre' au communisme soviétique. Truman y affirme l'engagement américain pour la reconstruction européenne et le développement international, posant les bases de l'aide au développement. Pour l'Afrique, ce discours préfigure les politiques d'assistance technique et les programmes de lutte contre la pauvreté qui influenceront les politiques coloniales européennes."
        }
      ]
    },
    {
      auteur: "Pierre-Noël Giraud",
      ouvrages: [
        {
          titre: "La mondialisation, émergences et fragmentations",
          annee: "2010",
          theme: "Mondialisation",
          important: true,
          description: "Analyse théorique majeure des dynamiques géo-économiques contemporaines. Pierre-Noël Giraud montre comment la mondialisation crée simultanément des processus d'émergence (pays se développant rapidement) et de fragmentation (marginalisation de régions exclues). Pour l'Afrique, l'ouvrage explique les difficultés d'insertion dans les chaînes de valeur globales et plaide pour des politiques de développement endogènes. Cette analyse théorique éclaire les paradoxes africains : croissance économique sans développement humain durable."
        }
      ]
    },
    {
      auteur: "Jean-Joseph Boillot et Stanislas Dembinski",
      ouvrages: [
        {
          titre: "Chindiafrique : La Chine, l'Inde et l'Afrique feront le monde de demain",
          annee: "2013",
          theme: "Relations Chine-Afrique",
          important: true,
          description: "Ouvrage prospectif analysant l'émergence du trio Chine-Inde-Afrique comme nouveau centre de gravité mondial. Les auteurs montrent comment ces trois acteurs, représentant 60% de la population mondiale, redessinent l'économie globale. Pour l'Afrique, l'ouvrage souligne les opportunités (investissements chinois massifs, débouchés indiens) mais aussi les risques de dépendance et de concurrence. Cette analyse préfigure le débat actuel sur l'avenir multipolaire du monde."
        }
      ]
    },
    {
      auteur: "Deborah Brautigam",
      ouvrages: [
        {
          titre: "The Dragon's Gift. The Real Story of China in Africa",
          annee: "2011",
          theme: "Relations Chine-Afrique",
          important: true,
          description: "Analyse nuancée et documentée des relations sino-africaines, contestant les discours alarmistes sur l'impérialisme chinois. Deborah Brautigam montre que la coopération chinoise n'est pas une 'colonisation' mais un partenariat commercial mutuellement bénéfique. L'ouvrage détaille les projets d'infrastructure, les échanges commerciaux et les mécanismes de financement chinois. Pour l'Afrique, l'auteure souligne les avantages (développement des infrastructures) mais aussi les défis (endettement, concurrence avec les industries locales)."
        }
      ]
    },
    {
      auteur: "Bertrand Badie",
      ouvrages: [
        {
          titre: "L'Etat importé",
          annee: "1987",
          theme: "État et société",
          important: true,
          description: "Ouvrage fondateur de la sociologie des relations internationales sur l'importation des modèles étatiques occidentaux dans les sociétés non-occidentales. Bertrand Badie analyse comment les États africains, créés artificiellement par la colonisation, peinent à asseoir leur légitimité. L'ouvrage montre les tensions entre les structures étatiques importées (administration centralisée, bureaucratie) et les réalités sociétales africaines (solidarités communautaires, autorités traditionnelles). Cette analyse éclaire les crises étatiques africaines et plaide pour des modèles politiques hybrides."
        }
      ]
    },
    {
      auteur: "Jean-François Bayart",
      ouvrages: [
        {
          titre: "L'état en Afrique (la politique du ventre)",
          annee: "1989",
          theme: "État et société",
          important: false,
          description: "Analyse classique des mécanismes de pouvoir en Afrique subsaharienne. Jean-François Bayart montre comment l'État africain fonctionne selon une 'politique du ventre' : accumulation personnelle du pouvoir et redistribution clientéliste plutôt que politiques publiques rationnelles. L'ouvrage critique les analyses essentialistes de l'État africain et plaide pour une compréhension contextualisée des pratiques politiques africaines, influençant durablement les études africanistes."
        }
      ]
    },
    {
      auteur: "René Dumont",
      ouvrages: [
        {
          titre: "L'Afrique noire est mal partie",
          annee: "1962",
          theme: "Développement",
          important: false,
          description: "Premier ouvrage critique sur le développement africain post-indépendance. René Dumont, agronome français, analyse les politiques agricoles inadaptées et les erreurs de planification soviétique en Afrique. L'ouvrage pionnier critique l'urbanisation excessive et plaide pour un développement rural endogène. Ce texte fondateur influence les débats sur le développement durable en Afrique et marque le début de la pensée critique sur l'aide internationale."
        }
      ]
    },
    {
      auteur: "Clea Koff",
      ouvrages: [
        {
          titre: "La mémoire des os",
          annee: "2006",
          theme: "Histoire/Rwanda",
          important: false,
          description: "Récit poignant sur le génocide rwandais de 1994 et ses conséquences. Clea Koff, travaillant pour le Tribunal pénal international pour le Rwanda, décrit la collecte d'ossements et de témoignages pour établir la vérité judiciaire. L'ouvrage explore les traumatismes du génocide, la justice internationale et la reconstruction post-conflit. Ce témoignage personnel éclaire les mécanismes des génocides africains et l'importance de la mémoire collective."
        }
      ]
    },
    {
      auteur: "Gunnar Myrdal",
      ouvrages: [
        {
          titre: "Asian Drama",
          annee: "1968",
          theme: "Développement",
          important: false,
          description: "Ouvrage monumental analysant les défis du développement asiatique. Gunnar Myrdal, prix Nobel d'économie, critique les politiques de développement inadaptées et plaide pour une approche institutionnelle du développement. Bien que centré sur l'Asie, l'ouvrage influence les théories du développement africain en soulignant l'importance des réformes institutionnelles et de l'investissement humain pour sortir de la pauvreté."
        }
      ]
    },
    {
      auteur: "Thierry Pouch",
      ouvrages: [
        {
          titre: "La guerre des terres",
          annee: "2012",
          theme: "Agriculture/Terres",
          important: false,
          description: "Analyse des conflits fonciers en Afrique liés aux accaparements de terres par les investisseurs étrangers. Thierry Pouch décrit comment les États africains cèdent des millions d'hectares à des entreprises étrangères pour l'agro-industrie, souvent au détriment des populations locales. L'ouvrage critique les politiques de 'land grabbing' et leurs conséquences sociales et environnementales, plaidant pour une souveraineté alimentaire africaine."
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
            <Link to="/formation/geopolitique/continent-africain" className="hover:text-gray-900 transition-colors">
              Continent africain
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
              Auteurs et ouvrages - Continent africain
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Bibliographie essentielle pour l'étude géopolitique du continent africain.
          </p>
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

        {/* Note méthodologique */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-blue-800 mb-4">
              <Lightbulb className="h-5 w-5" />
              <h3 className="font-semibold">Conseils méthodologiques</h3>
            </div>
            <div className="text-blue-700 space-y-2">
              <p>• <strong>Ouvrages essentiels :</strong> Priorisez les ouvrages marqués comme "Essentiel" pour une compréhension approfondie.</p>
              <p>• <strong>Approche chronologique :</strong> Les textes du XXe siècle permettent de comprendre les évolutions depuis la décolonisation.</p>
              <p>• <strong>Regards croisés :</strong> Comparez les analyses occidentales (The Economist, Sylvie Brunel) avec les perspectives africaines.</p>
              <p>• <strong>Actualité :</strong> Les articles récents permettent d'analyser les mutations contemporaines du continent.</p>
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
      </div>
    </div>
  );
};

export default ContinentAfricainAuteursPage;
