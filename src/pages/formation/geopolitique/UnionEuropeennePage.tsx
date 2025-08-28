import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, BookOpen, Globe, MapPin, Quote, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';

const UnionEuropeennePage = () => {
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
            <span className="text-gray-900 font-bold">Union européenne</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Flag className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Union européenne
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Intégrations, fragmentations et géopolitique européenne face aux défis contemporains.
          </p>
          
          {/* Objectifs du chapitre */}
          <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Objectifs d'apprentissage
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-blue-700">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">UE et ses territoires : intégrations/fragmentations</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">UE et voisinage proche : Russie et Méditerranée</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <Users className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">UE dans le monde</span>
              </div>
            </div>
          </div>
        </div>

        {/* Études de cas clés */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-blue-600" />
              Études de cas clés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Brexit et ses conséquences</h4>
                <p className="text-sm text-gray-600">Analyse des impacts politiques, économiques et géopolitiques</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Guerre en Ukraine</h4>
                <p className="text-sm text-gray-600">Défis sécuritaires et énergétiques pour l'UE</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Élargissement de l'UE</h4>
                <p className="text-sm text-gray-600">Enjeux et perspectives d'intégration</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers ressources */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link to="/formation/geopolitique/chronologie-europe">
            <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-blue-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Quote className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-semibold mb-2">Chronologie</h3>
                <p className="text-sm text-gray-600">Histoire européenne de 1648 à nos jours</p>
              </CardContent>
            </Card>
          </Link>
          
          <Card className="h-full border-2 border-gray-200 opacity-75">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-500">Dissertations</h3>
              <p className="text-sm text-gray-400">Sujets et corrigés (à venir)</p>
            </CardContent>
          </Card>

          <Card className="h-full border-2 border-gray-200 opacity-75">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-500">Flashcards</h3>
              <p className="text-sm text-gray-400">Révision interactive (à venir)</p>
            </CardContent>
          </Card>
        </div>

        {/* Partie I */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Globe className="h-6 w-6 text-blue-600" />
              I. Historique de la construction européenne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="i1">
                <AccordionTrigger className="text-lg">
                  I.1. L'idée de la construction européenne
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    {/* 1/ La nécessité d'établir la paix */}
                    <div className="bg-white p-6 rounded-lg border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        1. La nécessité d'établir la paix fait émerger l'idée d'une Europe unie
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Une idée ancienne</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Emmanuel Kant (1795)</strong> - <em>Vers la paix perpétuelle</em></p>
                              <p className="text-gray-600 italic">Projet de paix perpétuelle</p>
                            </div>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Coudenhove Kalergi (1923)</strong> - <em>Paneuropa</em></p>
                              <p className="text-gray-600 italic">Un projet européen, s'unir pour éviter la guerre</p>
                            </div>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Stefan Zweig (1941)</strong> - <em>Le monde d'hier, souvenirs d'un Européen</em></p>
                              <p className="text-gray-600 italic">Un regard rétrospectif sur l'Europe : Excès de puissance en Europe en 1913 cause de la PGM</p>
                              <blockquote className="bg-gray-100 p-3 rounded italic text-gray-700 mt-2">
                                « Les États, les villes avaient acquis trop vite leur puissance, et le sentiment de leur force incite toujours les hommes, comme les États, à en user ou en abuser. »
                              </blockquote>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                          <h5 className="font-semibold text-orange-800 mb-2">Héritage d'un passé récent de guerres et destructions</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Robert Kagan (2002)</strong> - <em>La puissance et la faiblesse</em></p>
                              <p className="text-gray-600">Pour les Européens : volonté de puissance = porteuse de chaos → « longue guerre civile européenne »</p>
                              <p className="text-xs text-gray-500 mt-1">
                                <em>La guerre civile européenne est une construction historique a posteriori selon laquelle les conflits européens de la première moitié du XXe siècle sont en réalité un seul et même conflit</em>
                              </p>
                            </div>
                            
                            <div className="bg-gray-100 p-3 rounded">
                              <p className="italic text-gray-700">Abdiquer de la puissance militaire, Europe paradis, grâce aux USA...</p>
                              <p className="font-medium text-gray-800 mt-2">« Les Européens sont de Vénus, les Américains de Mars »</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">Émergence de l'idée de gouvernance européenne/mondiale</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border border-gray-200 p-3 rounded bg-white">
                              <h6 className="font-semibold mb-2">📋 Étude de cas : La Société des Nations (SDN)</h6>
                              <ul className="space-y-1 text-xs">
                                <li>• Proposée par W. Wilson : les 14 points</li>
                                <li>• Refus par le sénat américain</li>
                                <li>• <em>« La SDN est très efficace quand les moineaux crient, mais plus du tout quand les aigles attaquent »</em> - Mussolini, 1935</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Ce que l'Europe permet aux États */}
                    <div className="bg-white p-6 rounded-lg border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        2. Construire l'Europe : ce que l'Europe permet aux États
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">La réincarnation de la France, rédemption de l'Allemagne</h5>
                          <blockquote className="bg-white p-3 rounded italic text-gray-700 border-l-2 border-purple-300">
                            « À travers l'Europe, la France vise la réincarnation, l'Allemagne la rédemption »
                            <footer className="text-sm text-gray-600 mt-1">— Zbigniew Brzezinski</footer>
                          </blockquote>
                          <p className="text-sm text-gray-700 mt-2">
                            Le projet européen représente effectivement, pour les Allemands, une formidable opportunité de se donner une deuxième chance en se construisant une nouvelle identité.
                          </p>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Réponse au déclin relatif des puissances européennes</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <blockquote className="bg-white p-3 rounded italic border-l-2 border-yellow-300">
                              « L'Allemagne est trop grande pour l'Europe, trop petite pour le monde »
                              <footer className="text-sm text-gray-600 mt-1">— Henry Kissinger</footer>
                            </blockquote>
                            
                            <blockquote className="bg-white p-3 rounded italic border-l-2 border-yellow-300">
                              « La France est une grande puissance moyenne »
                            </blockquote>
                            
                            <p className="font-medium">L'Europe, quel numéro ?</p>
                            
                            <div className="border border-gray-200 p-3 rounded bg-white">
                              <h6 className="font-semibold mb-2">📋 Étude de cas : Le canal de Suez</h6>
                              <p className="text-xs text-gray-600">Voir le livre de Mathieu pour une synthèse sur l'établissement relatif de l'Europe</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Différentes visions */}
                    <div className="bg-white p-6 rounded-lg border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        3. Différentes visions sur l'Europe en fonction des pères fondateurs
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                          <h5 className="font-semibold text-indigo-800 mb-2">Chacun a sa propre vision de l'Europe</h5>
                          <p className="text-sm text-gray-700 mb-3">Projet de paix et de prospérité de l'Europe</p>
                          
                          <blockquote className="bg-white p-3 rounded italic text-gray-700 border-l-2 border-indigo-300">
                            « On ne sort de l'ambiguïté qu'à son détriment »
                            <footer className="text-sm text-gray-600 mt-1">— Cardinal de Retz</footer>
                          </blockquote>
                          
                          <p className="text-sm text-gray-700 mt-2 font-medium">
                            La construction européenne serait-elle finalement l'histoire d'un malentendu ?
                          </p>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">📋 Étude de cas : Le couple franco-allemand</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p><strong>La construction européenne : histoire d'un malentendu ? (2019)</strong></p>
                            
                            <p>Des divergences au sein du couple franco-allemand :</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                              <li>Sur le plafonnement des prix du gaz</li>
                              <li>Sur diverses politiques européennes</li>
                            </ul>
                            
                            <div className="border border-gray-200 p-3 rounded bg-white">
                              <p><strong>Hirschman</strong> - <em>Exit, Voice, and Loyalty</em> (1970)</p>
                            </div>
                            
                            <p className="font-medium text-red-800">
                              Une vision pragmatique des pères fondateurs que l'on retrouve de nos jours face à des ennemis communs fédérateurs : 
                              L'Europe, in fine n'a-t-elle pas besoin d'un ennemi commun fédérateur pour exister ?
                            </p>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-3">Les trois approches des pères fondateurs</h5>
                          
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-green-700 mb-2">1. Pragmatisme</h6>
                              <p className="text-xs text-gray-600">Par des réalisations concrètes et le functional spillover, paix et fédération créées</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-blue-700 mb-2">2. Fédéralisme</h6>
                              <p className="text-xs text-gray-600">Pro-européen, vision ambitieuse d'intégration</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-orange-700 mb-2">3. Unionisme</h6>
                              <p className="text-xs text-gray-600">Coopération intergouvernementale</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">9 mai 1950 : Discours de l'horloge</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p className="text-xs text-gray-600">(Lendemain de la commémoration de l'armistice, aujourd'hui journée de l'Europe)</p>
                            
                            <blockquote className="bg-white p-3 rounded italic border-l-2 border-blue-300">
                              « L'Europe ne se fera pas d'un coup, ni dans une construction d'ensemble : elle ne se fera par des réalisations concrètes créant d'abord une solidarité de fait. »
                              <footer className="text-sm text-gray-600 mt-1">— Robert Schuman</footer>
                            </blockquote>
                            
                            <div className="space-y-2">
                              <p><strong>Schuman</strong> : Européen par sa biographie, expérience des 2 guerres mondiales</p>
                              <p><strong>Monnet</strong> : Commissaire au Plan, qui souffle à Schuman l'idée d'une coopération ambitieuse de planification des industries du charbon et de l'acier pour la France et l'Allemagne</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p className="font-medium">Une Europe à petits pas : Maastricht et la réunification (Mitterrand)</p>
                              <p className="text-xs">Maastricht et le compromis sur l'Europe</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                          <h5 className="font-semibold text-gray-800 mb-2">Synthèse</h5>
                          <p className="text-sm text-gray-700">
                            <strong>L'Europe est une oscillation entre fédéralisme et unionisme</strong> : les événements historiques importants permettent de faire la salve de dates historiques et d'illustrer les réalisations concrètes : « l'Europe à petits pas » (Monnet).
                          </p>
                          <p className="text-sm text-gray-700 mt-2">
                            Par des réalisations concrètes et le <em>functional spillover</em>, paix et fédération créées.
                          </p>
                          <p className="text-sm text-gray-700 mt-2">
                            Pères fondateurs = hommes marqués par les 2 guerres mondiales et extrêmement ambitieux dans le fédéralisme (vu comme la voie de la paix).
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="i2">
                <AccordionTrigger className="text-lg">
                  I.2. Coopération, rivalités, ingérences et voisinage
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    {/* 1/ Les échecs de la stabilisation des marges de l'UE */}
                    <div className="bg-white p-6 rounded-lg border border-red-200">
                      <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        1. Les échecs de la stabilisation des marges de l'UE
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">« Ring of Fire » - L'anneau de feu européen</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>The Economist (2014)</strong> - <em>« Ring of Fire »</em></p>
                              <p className="text-gray-600 italic">Échec des politiques de voisinage, anneau de feu autour de l'Europe</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold mb-2 text-red-700">🗺️ Carte du voisinage instable de l'Europe</h6>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-red-100 p-2 rounded">
                                  <p><strong>Guerre en Syrie</strong> (2014-...)</p>
                                </div>
                                <div className="bg-red-100 p-2 rounded">
                                  <p><strong>Haut-Karabakh</strong> (2020)</p>
                                </div>
                                <div className="bg-red-100 p-2 rounded">
                                  <p><strong>Révolutions arabes</strong> (2011)</p>
                                </div>
                                <div className="bg-red-100 p-2 rounded">
                                  <p><strong>Ukraine</strong> (2014-... 2022-...)</p>
                                </div>
                              </div>
                              <div className="mt-2 bg-orange-100 p-2 rounded">
                                <p className="text-xs"><strong>Crise des réfugiés</strong> - Conséquence directe de l'instabilité</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Stratégies de l'UE pour pacifier son voisinage</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <p><strong>PEV (Politique Européenne de Voisinage)</strong> : Stratégie de l'Union Européenne pour pacifier et gérer son voisinage</p>
                              
                              <div className="border border-gray-200 p-3 rounded bg-white">
                                <p><strong>UPM (Union pour la Méditerranée)</strong></p>
                                <p className="text-xs text-gray-600">Voisinage crisogène, suite de la conférence de Barcelone</p>
                              </div>
                              
                              <div className="space-y-1">
                                <p><strong>Autres stratégies :</strong></p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                  <li>Élargissements successifs</li>
                                  <li>Décarbonation des économies</li>
                                  <li>Coopération sécuritaire</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Dépendance sécuritaire aux États-Unis</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-yellow-700">70%</p>
                                <p className="text-xs">des coûts de la guerre Ukraine financés par les USA</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-yellow-700">70%</p>
                                <p className="text-xs">du financement de l'OTAN par les USA</p>
                              </div>
                            </div>
                            <p className="font-medium text-yellow-800">
                              Hausse stratégique des budgets de défense : l'Europe ne peut plus se contenter d'être sous le parapluie américain
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                          <h5 className="font-semibold text-gray-800 mb-2">📋 Focus : Le programme Frontex</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p className="italic">Montre que l'UE veut mettre un terme aux migrations illégales (fait partie de l'Europe forteresse)</p>
                            
                            <div className="space-y-2">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>2005</strong> : Entrée en fonction, siège à Varsovie</p>
                                <p className="text-xs text-gray-600">Mise en commun des moyens policiers pour contrôler les frontières</p>
                              </div>
                              
                              <div className="bg-white p-3 rounded border">
                                <p><strong>2010</strong> : Déploiement à la frontière Grèce-Turquie</p>
                              </div>
                              
                              <div className="bg-white p-3 rounded border">
                                <p><strong>2013</strong> : Mise en place d'Eurosur</p>
                                <p className="text-xs text-gray-600">Nouveau système de surveillance des frontières, mis en réseau, partagé en temps réel avec caméras haute résolution, satellites, drones</p>
                              </div>
                              
                              <div className="bg-white p-3 rounded border">
                                <p><strong>2014</strong> : Programme Triton</p>
                                <p className="text-xs text-gray-600">Remplace le programme Mare Nostrum (1 an) au large des côtes italiennes</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Les ingérences */}
                    <div className="bg-white p-6 rounded-lg border border-orange-200">
                      <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        2. Les ingérences en Europe et de l'Europe dans le monde
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                          <h5 className="font-semibold text-orange-800 mb-2">Ingérences de l'Europe dans le monde</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>Guerre en Libye</strong></p>
                                <p className="text-xs text-gray-600">Intervention européenne</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>La France en Afrique</strong></p>
                                <p className="text-xs text-gray-600">Guinée et enjeux pétroliers</p>
                              </div>
                            </div>
                            
                            <div className="border border-gray-200 p-3 rounded bg-white">
                              <h6 className="font-semibold mb-2">📋 Étude de cas : Les Balkans</h6>
                              <p className="text-xs text-gray-600">Exemple parfait des ingérences européennes et des liens complexes</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Ingérences extérieures en Europe</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>François Godement</strong> - <em>La Chine à nos portes - Une stratégie pour l'Europe</em> (2018)</p>
                              <p className="text-gray-600 italic">Analyse de l'influence chinoise croissante en Europe</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ La coopération internationale */}
                    <div className="bg-white p-6 rounded-lg border border-green-200">
                      <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        3. La coopération à l'échelle internationale
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">L'Europe et ses partenaires économiques</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>L'Europe a des partenaires économiques divers</p>
                            <p><strong>Enjeu des accords commerciaux</strong></p>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Thierry Chopin</strong> - <em>La dérive des continents</em></p>
                              <p className="text-gray-600 italic">Analyse des recompositions géoéconomiques</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-3">Les accords commerciaux européens</h5>
                          
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded border border-blue-200">
                              <h6 className="font-semibold text-blue-700 mb-2">🇯🇵 JETA (2018) - Accord UE-Japon</h6>
                              <div className="space-y-2 text-sm">
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-blue-100 p-2 rounded">
                                    <p className="font-semibold">1/3</p>
                                    <p className="text-xs">du PIB mondial</p>
                                  </div>
                                  <div className="bg-blue-100 p-2 rounded">
                                    <p className="font-semibold">+40%</p>
                                    <p className="text-xs">des échanges mondiaux</p>
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <p>• <strong>85%</strong> des produits alimentaires européens peuvent pénétrer le marché japonais</p>
                                  <p>• En contrepartie : accès facilité pour les automobiles japonaises</p>
                                  <p>• Moins d'opposition (plus de normes au Japon)</p>
                                  <p>• <strong>Défense du libre-échange</strong></p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded border border-green-200">
                              <h6 className="font-semibold text-green-700 mb-2">🇨🇦 CETA (2016) - Accord UE-Canada</h6>
                              <div className="space-y-2 text-sm">
                                <p><strong>Accord de 3ème génération avec le Canada</strong></p>
                                
                                <div className="bg-gray-100 p-3 rounded">
                                  <p className="font-semibold text-gray-800 mb-1">Générations d'accords :</p>
                                  <ul className="list-disc list-inside text-xs space-y-1">
                                    <li><strong>1G</strong> : Désarmement douanier</li>
                                    <li><strong>2G</strong> : Étendre les secteurs concernés</li>
                                    <li><strong>3G</strong> : Coopération sur les normes</li>
                                  </ul>
                                </div>
                                
                                <div className="space-y-1">
                                  <p>• En vigueur provisoirement en 2017</p>
                                  <p>• Ratifié par 12 pays sur 27</p>
                                  <p>• <strong>Enjeu des normes sanitaires</strong> : La France défend le « normative power » de l'UE</p>
                                  <p>• Macron s'indigne que seulement 20 des 27 pays soutiennent les normes sanitaires</p>
                                  <p>• Controverse sur les hormones</p>
                                  <p>• Peu contraignant sur les normes sanitaires pour éviter le conflit avec la société civile</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">💡 À mettre en perspective avec l'actualité</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>L'Europe subit l'Inflation Reduction Act (IRA)</strong></p>
                              <p className="text-xs text-gray-600">Visite de Macron aux États-Unis : dénonciation d'une concurrence déloyale</p>
                            </div>
                            
                            <div className="bg-yellow-100 p-3 rounded border border-yellow-400">
                              <p className="font-medium text-yellow-800">💡 Conseil méthodologique :</p>
                              <p className="text-xs">Si le sujet a une forte dimension économique, en faire une sous-partie et inclure la géoéconomie</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="i3">
                <AccordionTrigger className="text-lg">
                  I.3. Modèle et puissance de l'Europe : mythe/réalité
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    {/* Référence principale */}
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-indigo-600" />
                        <h5 className="font-semibold text-indigo-800">Référence principale</h5>
                      </div>
                      <p className="text-sm text-indigo-700">
                        <strong>Bastien Nivet</strong> - <em>Mythe et Réalités</em> (2020)
                      </p>
                    </div>

                    {/* 1/ Une vision originale de la puissance (mythe) */}
                    <div className="bg-white p-6 rounded-lg border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        1. Une vision originale de la puissance de l'UE (mythe)
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">La norme sans la force</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Ian Manners</strong> - <em>« Normative Power »</em></p>
                              <p className="text-gray-600 italic">Loi / réglementation / négociation / coopération entre nations</p>
                            </div>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>« Civilian Power »</strong> - Ian Manners</p>
                              <p className="text-gray-600 italic">Une vision originale de la puissance, au-delà de la puissance traditionnelle</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p className="font-medium text-blue-800">L'Europe : une puissance singulière</p>
                              <p className="text-xs text-gray-600">Interroger les spécificités du modèle de la puissance européenne</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                          <h5 className="font-semibold text-orange-800 mb-2">Typologie des puissances européennes</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Robert Kagan</strong> - <em>Puissance et Faiblesse : Gulliver Désarmé</em> (2003)</p>
                              <p className="text-gray-600 italic">Analyse de la faiblesse européenne face aux enjeux de puissance</p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                              <div className="bg-white p-2 rounded border text-center">
                                <p className="text-xs font-semibold">Soft Power</p>
                              </div>
                              <div className="bg-white p-2 rounded border text-center">
                                <p className="text-xs font-semibold">Civilian Power</p>
                              </div>
                              <div className="bg-white p-2 rounded border text-center">
                                <p className="text-xs font-semibold">Puissance Éco</p>
                              </div>
                              <div className="bg-white p-2 rounded border text-center">
                                <p className="text-xs font-semibold">Normative Power</p>
                              </div>
                            </div>
                            
                            <p className="italic text-orange-700">
                              Pas tous les leviers de la puissance : faiblesse dans la guerre économique
                            </p>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Ali Laïdi</strong> : Puissance civile / normative / tranquille / au-delà de la puissance</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Limites économiques du modèle</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Mouhoub Mouhoud</strong> : Artefacte statistique</p>
                              <p className="text-gray-600">1% PIB, PAC, secteurs stratégiques sous-investis</p>
                            </div>
                            
                            <p>Mise en place de stratégies seulement au moment des crises</p>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Macron</strong> - <em>« Pour une renaissance de l'Europe »</em></p>
                              <p className="text-xs text-gray-600">Lettre ouverte pour une Europe puissance militaire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Incompatibilité avec le contexte actuel */}
                    <div className="bg-white p-6 rounded-lg border border-red-200">
                      <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        2. Une incompatibilité avec le contexte actuel (réalité)
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">L'exception française dans un ensemble fragile</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>
                              <strong>Bastien Nivet</strong> : Une exception française, un véritable acteur sur la scène internationale, 
                              c'est le seul pays [européen avec cette ambition]
                            </p>
                            
                            <div className="space-y-2">
                              <p className="font-medium">Dépendances structurelles :</p>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                <li>Dépendance aux USA</li>
                                <li>Pas les moyens du choix de la puissance</li>
                                <li>Dépendances technologique, énergétique, financière</li>
                              </ul>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p className="italic text-red-700">
                                Incapacité d'atteindre l'Europe puissance : plus on mobilise ce concept, moins la notion est précise
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">Incompatibilité du modèle avec les rivalités actuelles</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p className="font-medium text-purple-800 mb-1">Question centrale :</p>
                              <p className="italic">
                                Le modèle de puissance de l'UE est-il compatible avec la nature des rivalités et rapports de force actuels ?
                              </p>
                            </div>
                            
                            <p><strong>Transition :</strong> Un retour à la géopolitique devient nécessaire</p>
                            
                            <div className="bg-gray-100 p-3 rounded">
                              <p className="font-semibold mb-2">Paradoxe du modèle de puissance de l'UE :</p>
                              <div className="space-y-1 text-xs">
                                <p>• Manifestement l'UE est créée dans la quête d'un abandon de la puissance traditionnelle</p>
                                <p>• Un « empire de la paix » fondé sur un rejet de la puissance</p>
                                <p>• Constat : atouts majeurs pour diffuser sa puissance, originale mais des atouts</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Obstacles internes et externes</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <p><strong>Désunion interne :</strong></p>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                <li>Pas le pouvoir d'agir en temps de paix</li>
                                <li>Difficultés à agir face aux crises (exogènes, endogènes)</li>
                                <li>Obstacles de tout type</li>
                                <li>Interroge l'idée même d'une puissance européenne</li>
                              </ul>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p className="italic text-yellow-700">
                                Cependant ce modèle de puissance n'est pas viable dans un monde avec un retour indéniable des rapports de force
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                          <h5 className="font-semibold text-gray-800 mb-2">Désillusion et retour à la géopolitique</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>
                              La désillusion de l'Europe : pas le pouvoir de poursuivre le projet de paix, 
                              mais retour à la géopolitique, pas de paix perpétuelle
                            </p>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Soderborn</strong> - <em>« Soft imperialism »</em></p>
                              <p className="text-gray-600">Renonce à la puissance, mais une quête dans certains points de puissance</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Partage du fardeau :</strong></p>
                              <p className="text-xs">2% est l'objectif, sauf la Hongrie, rupture attentiste F35 POLOGNE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Réorientation stratégique */}
                    <div className="bg-white p-6 rounded-lg border border-green-200">
                      <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        3. Une réorientation stratégique inéluctable
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">Vers une boussole stratégique</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>Une boussole stratégique, un réveil stratégique, un type de puissance nouvelle</p>
                            <p className="font-medium">Carrefour entre deux modèles, nouveaux domaines stratégiques :</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-blue-700">💻 Numérique</p>
                                <p className="text-xs">Cloud européen, souveraineté avec RGPD</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-red-700">🛡️ Militaire</p>
                                <p className="text-xs">Défense européenne autonome</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-green-700">🌱 Environnement</p>
                                <p className="text-xs">Transition écologique comme levier</p>
                              </div>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p className="italic text-green-700">
                                Si bien que l'UE doit se montrer résiliente et se réinventer pour être une puissance globale 
                                dans le monde et défendre ses intérêts.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Études de cas (EDC) */}
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-3">📋 Études de cas (EDC)</h5>
                          
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded border">
                              <h6 className="font-semibold text-blue-700 mb-2">EDC 1 : Paix ou faiblesse ? Prix Nobel de la paix</h6>
                              <div className="space-y-2 text-sm text-gray-700">
                                <p>
                                  <strong>2012</strong> : Europe prix Nobel de la paix, qui couronne un demi-siècle d'action de paix 
                                  dans le monde et la réconciliation des peuples d'Europe.
                                </p>
                                <p>
                                  L'UE préfère influencer par l'exemple et les valeurs plutôt que par le hard power
                                </p>
                                <div className="bg-gray-100 p-2 rounded">
                                  <p className="italic text-xs">
                                    Question : Signe d'impuissance ou rétablissement de la paix ?
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded border">
                              <h6 className="font-semibold text-orange-700 mb-2">EDC 2 : L'Europe garde un normative power (écologie) dans la mondialisation</h6>
                              <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-medium">Montrer que les intérêts économiques priment sur la puissance normative UE</p>
                                
                                <div className="bg-red-100 p-3 rounded border border-red-300">
                                  <p><strong>Novembre 2017</strong> : La Commission européenne autorise le renouvellement de l'utilisation du glyphosate, herbicide cancérigène, pour les 5 prochaines années.</p>
                                </div>
                                
                                <div className="space-y-1">
                                  <p>• Dilution du modèle avec les USA</p>
                                  <p>• Viande bovine USA, hormones...</p>
                                  <p>• Oppositions internes (seuls 18 pays votent contre, passe très mal en France)</p>
                                </div>
                                
                                <div className="bg-gray-100 p-2 rounded">
                                  <p className="italic text-xs">
                                    Enjeu : puissance normative ou compétitivité dans la mondialisation ?
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded border">
                              <h6 className="font-semibold text-purple-700 mb-2">EDC 3 : Changement de paradigme - Allemagne</h6>
                              <div className="space-y-2 text-sm text-gray-700">
                                <p>
                                  Plus de certitude de vivre dans un monde post-stratégique et post-conflictuel (post-Clausewitzian)
                                </p>
                                
                                <div className="border-l-2 border-purple-300 pl-3">
                                  <p><strong>« Wandel Durch Handel »</strong> (Changement par le commerce)</p>
                                  <p className="text-xs text-gray-600">Doctrine allemande traditionnelle</p>
                                </div>
                                
                                <div className="space-y-1 text-xs">
                                  <p>• Le dialogue avec la Russie avant la guerre en Ukraine (Merkel)</p>
                                  <p>• Étude de cas Schröder : son retrait et l'image pour le SPD</p>
                                </div>
                                
                                <div className="bg-yellow-100 p-2 rounded">
                                  <p className="font-medium text-yellow-800 text-xs">
                                    EDC : Changements dus à la guerre en Ukraine
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Partie II */}
        <Card className="mt-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              II. Les défis contemporains de l'Union européenne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="ii1">
                <AccordionTrigger className="text-lg">
                  II.1. Les dépendances de l'Europe
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    {/* Structure logique */}
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-orange-600" />
                        <h5 className="font-semibold text-orange-800">Démarche logique de la IIe partie</h5>
                      </div>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-semibold text-orange-700">II.A</p>
                          <p className="text-xs">Une dépendance préjudiciable</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="font-semibold text-orange-700">II.B</p>
                          <p className="text-xs">La polycrise de l'Europe</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="font-semibold text-orange-700">II.C</p>
                          <p className="text-xs">Une désunion de l'Europe</p>
                        </div>
                      </div>
                      <p className="text-xs text-orange-600 mt-2 italic">
                        Et aussi des facteurs divers à exploiter en fonction des sujets
                      </p>
                    </div>

                    {/* 1/ Dépendance énergétique */}
                    <div className="bg-white p-6 rounded-lg border border-red-200">
                      <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        1. Une dépendance énergétique
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-3">📋 EDC : L'Allemagne au cœur de multiples dépendances</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-3 gap-3">
                              <div className="bg-white p-3 rounded border border-red-200">
                                <p className="font-semibold text-red-700 mb-1">🇷🇺 Dépendance Russie</p>
                                <p className="text-xs">Gaz pour le mix énergétique</p>
                              </div>
                              <div className="bg-white p-3 rounded border border-yellow-200">
                                <p className="font-semibold text-yellow-700 mb-1">🇨🇳 Dépendance Chine</p>
                                <p className="text-xs">1er partenaire économique</p>
                              </div>
                              <div className="bg-white p-3 rounded border border-blue-200">
                                <p className="font-semibold text-blue-700 mb-1">🇺🇸 Dépendance militaire</p>
                                <p className="text-xs">Sous-investissement depuis la SGM</p>
                              </div>
                            </div>
                            
                            <div className="bg-gray-100 p-3 rounded">
                              <p className="font-semibold text-gray-800 mb-1">Réponses allemandes :</p>
                              <div className="space-y-1 text-xs">
                                <p>• <strong>100 milliards €</strong> pour l'armée</p>
                                <p>• Piège de l'Allemagne : exportations vers la Chine</p>
                                <p>• Gaz russe (55% des besoins énergétiques)</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Géopolitique des tubes</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Philippe Rekacewicz</strong> - Géopolitique des tubes</p>
                              <p className="text-gray-600 italic">Importance des sources d'approvisionnement d'hydrocarbures dans les rapports de force mondiaux</p>
                            </div>
                            
                            <div className="space-y-2">
                              <p><strong>Enjeux des gazoducs :</strong></p>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                <li>Tracé des gazoducs</li>
                                <li>Les clients et destinations</li>
                                <li>Force de Sibérie</li>
                                <li>La Russie est obligée de suivre le tracé des gazoducs</li>
                              </ul>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>55%</strong> des besoins énergétiques européens venaient de Russie</p>
                              <p className="text-xs text-gray-600 mt-1">Nécessité de diversification énergétique et développement durable</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Dépendance économique */}
                    <div className="bg-white p-6 rounded-lg border border-yellow-200">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                        <Coins className="h-5 w-5" />
                        2. Une dépendance économique
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Fin de la culture de la retenue</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Ampelkoalition</strong> (Coalition feu tricolore allemande)</p>
                              <p className="text-gray-600">Réarmer alors que Verts au pouvoir, une Realpolitik</p>
                            </div>
                            
                            <p>Prise de conscience que la Chine est un <strong>rival systémique</strong></p>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>L'Europe dans la guerre économique mondiale</strong></p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">📋 Étude de cas : KUKA AG</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>Rachat du fleuron allemand de la robotique par la Chine</p>
                            <p className="text-xs text-gray-600 italic">
                              Exemple emblématique de la dépendance économique et technologique européenne
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Dépendance militaire */}
                    <div className="bg-white p-6 rounded-lg border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        3. Une dépendance militaire des États-Unis
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Dépendance structurelle à l'OTAN</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <p><strong>Hausse du budget dédié à l'armement</strong></p>
                              <p>Une dépendance de l'OTAN, des USA</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p className="font-semibold text-blue-700">70%</p>
                              <p className="text-xs">des dépenses de l'OTAN sont financées par les USA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4/ Dépendance technologique */}
                    <div className="bg-white p-6 rounded-lg border border-purple-200">
                      <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        4. Une dépendance technologique
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">L'Europe n'est pas Schumpeterienne</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Daniel Cohen</strong> - Article Le Monde (2002)</p>
                              <p className="text-gray-600 italic">Analyse du retard technologique européen</p>
                            </div>
                            
                            <p className="italic">
                              L'Europe manque d'innovation destructrice et de dynamisme entrepreneurial à la Schumpeter
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                          <h5 className="font-semibold text-gray-800 mb-3">📋 Études de cas technologiques</h5>
                          
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-gray-700 mb-1">KUKA AG</h6>
                              <p className="text-xs text-gray-600">
                                Rachat du leader allemand de la robotique par la Chine - Perte d'un champion technologique
                              </p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-gray-700 mb-1">Photovoltaïque</h6>
                              <p className="text-xs text-gray-600">
                                Concurrence déloyale de la Chine, l'Europe n'est plus price maker mais price taker
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Synthèse */}
                    <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-500">
                      <h5 className="font-semibold text-gray-800 mb-2">💡 Synthèse des dépendances européennes</h5>
                      <div className="text-sm text-gray-700 space-y-2">
                        <p>
                          L'Europe fait face à un <strong>quadruple défi de dépendance</strong> qui fragilise sa souveraineté :
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                          <li><strong>Énergétique</strong> : 55% du gaz russe, géopolitique des tubes</li>
                          <li><strong>Économique</strong> : Guerre économique mondiale, rachat d'actifs stratégiques</li>
                          <li><strong>Militaire</strong> : 70% OTAN financé par les USA, sous-investissement chronique</li>
                          <li><strong>Technologique</strong> : Retard innovation, perte de champions (KUKA, photovoltaïque)</li>
                        </ul>
                        <p className="italic text-gray-600 mt-2">
                          Ces dépendances croisées appellent une réorientation stratégique pour reconquérir l'autonomie européenne.
                        </p>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ii2">
                <AccordionTrigger className="text-lg">
                  II.2. Une polycrise : typologie des défis de l'Europe
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    {/* Référence polycrise */}
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                        <h5 className="font-semibold text-orange-800">Concept de « Polycrise »</h5>
                      </div>
                      <p className="text-sm text-orange-700">
                        <strong>Guy Verhofstadt</strong> - Député européen belge, <em>Le mal européen</em> (2016)
                      </p>
                      <p className="text-xs text-orange-600 mt-1 italic">
                        Une crise dans tous les domaines, une crise complexe et globale
                      </p>
                    </div>

                    {/* Typologie des 6 crises */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                        <h5 className="font-semibold text-red-800 mb-2">💰 1. Économique</h5>
                        <p className="text-xs text-red-700">Crise de la dette souveraine, Grexit</p>
                      </div>
                      <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                        <h5 className="font-semibold text-blue-800 mb-2">🏛️ 2. Identitaire</h5>
                        <p className="text-xs text-blue-700">Désunion Ouest/Est, singularités nationales</p>
                      </div>
                      <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                        <h5 className="font-semibold text-yellow-800 mb-2">🚶‍♂️ 3. Migratoire</h5>
                        <p className="text-xs text-yellow-700">Voisinage instable, 1,5M en 2015</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                        <h5 className="font-semibold text-green-800 mb-2">⚡ 4. Énergétique</h5>
                        <p className="text-xs text-green-700">Dépendance gaz russe, diversification</p>
                      </div>
                      <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                        <h5 className="font-semibold text-purple-800 mb-2">⚔️ 5. Guerre</h5>
                        <p className="text-xs text-purple-700">Ukraine, retour de la géopolitique</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <h5 className="font-semibold text-gray-800 mb-2">👥 6. Démographique</h5>
                        <p className="text-xs text-gray-700">« Suicide démographique » (Godet)</p>
                      </div>
                    </div>

                    {/* Étude de cas : Crise migratoire */}
                    <div className="bg-white p-6 rounded-lg border border-yellow-200">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        📋 Étude de cas : La crise migratoire (2015-2017)
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Origines et ampleur</h5>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>La crise migratoire prend racine dans :</p>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                              <li>Les printemps arabes de 2011</li>
                              <li>La fragilité des États africains</li>
                              <li>Les conflits au Proche et Moyen-Orient</li>
                            </ul>
                            
                            <div className="bg-white p-3 rounded border mt-3">
                              <p><strong>Routes migratoires :</strong></p>
                              <p className="text-xs">Route marocaine, route libyenne, route turque</p>
                            </div>
                            
                            <div className="bg-red-100 p-3 rounded border">
                              <p><strong>2015 :</strong> 1,5 million de personnes pénétrant l'espace Schengen</p>
                              <p className="text-xs">Intensification due à la guerre civile syrienne</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Groupe de Visegrád (V4)</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Pologne (2016) :</strong> 586 000 permis de résidence</p>
                              <p className="text-xs">Soit 20% du total de l'Union européenne</p>
                            </div>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>V4</strong> - Formé en 1991 (Hongrie, Pologne, République tchèque, Slovaquie)</p>
                              <p className="text-xs text-gray-600">Initialement pour faciliter l'intégration OTAN</p>
                              <p className="text-xs mt-1">Maintenant : défense de la souveraineté face à « Bruxelles »</p>
                            </div>
                            
                            <blockquote className="bg-gray-100 p-3 rounded italic text-gray-700">
                              « Ils n'ont pas confiance dans le modèle occidental d'une société multiculturelle »
                              <footer className="text-xs text-gray-600 mt-1">— Jacques Rupnik</footer>
                            </blockquote>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Conséquences : Montée de l'extrême-droite</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p><strong>Pays touchés :</strong> Espagne, Autriche, Finlande, Pays-Bas</p>
                            
                            <div className="space-y-2">
                              <p><strong>Mesures restrictives :</strong></p>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                <li><strong>2018 - Danemark :</strong> Loi « anti-ghettos »</li>
                                <li><strong>2021 - Suède :</strong> Réduction durée permis de séjour</li>
                                <li>Construction de murs aux frontières</li>
                                <li>Camps « fermés et à accès contrôlé »</li>
                              </ul>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Fractures interétatiques :</strong></p>
                              <p className="text-xs">Tensions France-Italie (Ocean Viking), V4 vs règlement Dublin III</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ii3">
                <AccordionTrigger className="text-lg">
                  II.3. Désillusions européennes
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    {/* 1/ Désunion européenne */}
                    <div className="bg-white p-6 rounded-lg border border-red-200">
                      <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        1. La désunion européenne : l'Europe, un artefact statistique ?
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Une harmonie impossible ?</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Henry Kissinger</strong> (1970), Secrétaire d'État américain :</p>
                              <blockquote className="bg-white p-3 rounded italic border-l-2 border-red-300 mt-2">
                                « When I want to call Europe, what number do I dial? »<br/>
                                <span className="text-xs">(« Quand je veux appeler l'Europe, quel numéro dois-je composer ? »)</span>
                              </blockquote>
                              <p className="text-xs text-gray-600 mt-1">
                                Critique du manque d'unité et de la difficulté à parler d'une seule voix
                              </p>
                            </div>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>El Mouhoub Mouhoud</strong> :</p>
                              <p className="italic">« L'UE est un artefact statistique : sans crise, pas de fédéralisme européen »</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Euroscepticisme */}
                    <div className="bg-white p-6 rounded-lg border border-orange-200">
                      <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        2. L'euroscepticisme : le moment critique de l'UE
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                          <h5 className="font-semibold text-orange-800 mb-2">Définition et portée</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>
                              <strong>L'euroscepticisme</strong> est un courant de pensée qui critique l'Union européenne 
                              et ses institutions, et qui remet en question la pertinence de l'intégration européenne.
                            </p>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Régis Debray :</strong></p>
                              <p className="italic">« Plus l'économie se globalise, plus le politique se provincialise »</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Partis eurosceptiques en Europe</h5>
                          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇫🇷 France :</strong> Rassemblement National (RN)</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇩🇪 Allemagne :</strong> Alternative für Deutschland (AfD)</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇮🇹 Italie :</strong> Mouvement 5 étoiles, Ligue du Nord (Salvini)</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇬🇧 Royaume-Uni :</strong> UKIP</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇦🇹 Autriche :</strong> FPÖ</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>Groupe V4 :</strong> Opposition systématique</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Moments clés de l'euroscepticisme</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>2005 :</strong> Non au traité constitutionnel par référendum</p>
                              <p className="text-xs text-gray-600">France et Pays-Bas - Distance entre populations et construction européenne</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>« Opting out » :</strong> Europe à géométrie variable</p>
                              <p className="text-xs text-gray-600">Certaines politiques ne s'appliquent pas dans tous les pays</p>
                            </div>
                            
                            <div className="bg-gray-100 p-3 rounded">
                              <p className="italic text-blue-700">
                                Une Europe difficile à percevoir de l'extérieur
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Populisme en Europe */}
                    <div className="bg-white p-6 rounded-lg border border-purple-200">
                      <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        📋 Étude de cas : Populisme en Europe
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">Héritages et divergences</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Ivan Krastev et Stephen Holmes</strong> - <em>Le moment illibéral</em> (2020)</p>
                              <p className="text-gray-600 italic">
                                L'histoire des PECO, longtemps sous le giron d'empires, se traduit par une volonté 
                                accrue d'indépendance alors que celle-ci reste fraîchement acquise
                              </p>
                            </div>
                            
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Pierre Rosanvallon</strong> - <em>Le Siècle du populisme</em> (2020)</p>
                              <p className="text-gray-600 italic">
                                L'illibéralisme est « une culture politique qui disqualifie en son principe la vision libérale »
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Cas Viktor Orbán (Hongrie)</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <blockquote className="bg-white p-3 rounded italic border-l-2 border-red-300">
                              « Bâtir un État non libéral... Il ne fait pas de cette idéologie un élément central de l'organisation de l'État. Il applique une approche spécifique et nationale. »
                            </blockquote>
                            <p className="text-xs text-gray-600">
                              Discours à l'université de Baile Tusnad - Référence aux modèles de Singapour, Chine, Inde, Turquie, Russie
                            </p>
                            
                            <div className="bg-yellow-100 p-3 rounded border border-yellow-300">
                              <p><strong>Conséquences :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1">
                                <li>Article 7 par le Parlement européen contre la Hongrie (procédure d'exclusion)</li>
                                <li>Critiques contre la Pologne et la Roumanie</li>
                                <li>Fragmentations politiques nombreuses en Europe</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4/ Facteurs de déclin */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        4. Facteurs de déclin européen
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                          <h5 className="font-semibold text-gray-800 mb-2">Typologie du déclin</h5>
                          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded border">
                                <p><strong>📉 Démographie :</strong> "Suicide démographique"</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🏭 Désindustrialisation :</strong> Perte de compétitivité</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🌍 Déclin géopolitique :</strong> Marginalisation</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇪🇺 Désunion :</strong> Absence d'unité stratégique</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Le "Temps des prédateurs"</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>François Heisbourg</strong> - "Tiersmondialisation de l'UE"</p>
                              <p className="text-gray-600 italic">L'Europe risque de devenir un acteur de second plan</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Colonisation numérique :</strong></p>
                              <div className="grid grid-cols-2 gap-2 mt-2">
                                <p className="text-xs"><strong>GAFAM</strong> (Google, Apple, Facebook, Amazon, Microsoft)</p>
                                <p className="text-xs"><strong>BATX</strong> (Baidu, Alibaba, Tencent, Xiaomi)</p>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <p><strong>Découplage USA-Europe :</strong> Années Trump</p>
                              <p><strong>Pascal Duchamps :</strong> Pas d'armée EU mais des progrès (SCARF MALE, 100M ALL)</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Atouts européens restants</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <p><strong>Green Power :</strong> Originalité européenne dans la transition écologique</p>
                              <p><strong>Todorov :</strong> "Puissance tranquille de l'UE"</p>
                              <p><strong>Bela Balassa :</strong> "La ZIR (Zone d'Intégration Régionale) la plus intégrée au monde"</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Déficits structurels</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <ul className="list-disc list-inside space-y-1 text-xs">
                              <li>Divisions internes, pas d'unité stratégique</li>
                              <li>Pas de politique stratégique commune</li>
                              <li>Manque de récit de l'UE</li>
                              <li>Pas de liens entre récit, légitimité et puissance</li>
                              <li>Structure hybride, pas de réalité hors de l'économie</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Focus : Déclin économique */}
                    <div className="bg-white p-6 rounded-lg border border-orange-200">
                      <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                        <Coins className="h-5 w-5" />
                        📋 Focus : Le déclin économique européen
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                          <h5 className="font-semibold text-orange-800 mb-2">L'Europe n'est plus schumpeterienne</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Daniel Cohen</strong> (économiste français) - <em>Le Monde</em> (2002)</p>
                              <p className="text-gray-600 italic">« Le déclin de l'Europe »</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p className="font-medium mb-2">Mise à mal par :</p>
                              <ul className="list-disc list-inside text-xs space-y-1">
                                <li>Le vieillissement démographique</li>
                                <li>La croissance américaine (logique schumpeterienne)</li>
                                <li>Révolution des NTIC</li>
                                <li>Capacité d'innovation réduite</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Retard technologique</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>2002 :</strong> Les USA déposent <strong>2 fois plus de brevets</strong> que l'Europe dans les domaines de hautes technologies</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p>Brevets HT essentiellement en <strong>Chine</strong> et aux <strong>États-Unis</strong></p>
                            </div>
                            
                            <div className="bg-gray-100 p-3 rounded">
                              <p className="italic">L'Europe était schumpeterienne au XIXe siècle (machine à vapeur, moteur à explosion...)</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Logiques de croissance</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-blue-700 mb-1">🇺🇸 Logique Schumpeterienne</p>
                                <p className="text-xs">Renouvellement constant des techniques, R&D</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-orange-700 mb-1">🇪🇺 Logique Smithienne</p>
                                <p className="text-xs">Prospérité indexée à la taille du marché</p>
                              </div>
                            </div>
                            
                            <div className="bg-gray-100 p-3 rounded">
                              <p className="italic text-blue-700">
                                Daniel Cohen : "L'Europe trouve peut-être son compte à être légèrement en retard, 
                                cela permet de faire le bon choix après coup"
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Focus : Crise démographique */}
                    <div className="bg-white p-6 rounded-lg border border-purple-200">
                      <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        📋 Focus : La crise démographique européenne
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">"Suicide démographique" de l'Europe</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Michel Godet et Jean-Michel Boussemart</strong> (Janvier 2018)</p>
                              <p className="text-gray-600 italic">Étude : « Europe 2050 : suicide démographique et croissance molle »</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Projection 2050 :</strong></p>
                              <p className="text-xs">Population européenne devrait <strong>diminuer</strong> à l'inverse des autres continents</p>
                            </div>
                            
                            <div className="bg-red-100 p-3 rounded border border-red-300">
                              <p><strong>Recommandation :</strong></p>
                              <p className="text-xs">Nécessité de repenser la politique familiale en UE face à la pression migratoire croissante</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">Politiques familiales comparées</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border border-blue-200">
                                <h6 className="font-semibold text-blue-700 mb-2">🇫🇷 France : Modèle intégré</h6>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li>Congés maternité étendus</li>
                                  <li>Enfants pris en charge toute la journée</li>
                                  <li>Centres de loisirs, crèches</li>
                                  <li>Écoles maternelles pour tous</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-green-200">
                                <h6 className="font-semibold text-green-700 mb-2">🇩🇪 Allemagne : "Kinderzeit"</h6>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li>7 dernières années : bilan positif</li>
                                  <li>Contribution des migrants</li>
                                  <li>Mesures familiales efficaces</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="bg-red-100 p-3 rounded border border-red-300">
                              <h6 className="font-semibold text-red-700 mb-2">🇧🇬 Bulgarie : Exemple négatif</h6>
                              <ul className="list-disc list-inside text-xs space-y-1">
                                <li>Listes d'attente pour les services</li>
                                <li>Manque de places en crèches</li>
                                <li>Difficile d'avoir et élever un enfant</li>
                                <li>Éducation insuffisante</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="iii1">
                <AccordionTrigger className="text-lg">
                  III.1. Une Europe plurielle : confrontée aux crises de manière différente
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    {/* Introduction : L'Europe diverse */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-5 w-5 text-blue-600" />
                        <h5 className="font-semibold text-blue-800">L'Europe est diverse</h5>
                      </div>
                      <p className="text-sm text-blue-700">
                        Une pluralité de réponses face aux défis contemporains, révélant des fractures profondes au sein de l'Union européenne.
                      </p>
                    </div>

                    {/* 1/ Leadership et divergences économiques */}
                    <div className="bg-white p-6 rounded-lg border border-green-200">
                      <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <Coins className="h-5 w-5" />
                        1. Leadership et divergences économiques
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">Leadership économique européen</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🇩🇪 Allemagne :</strong> Moteur économique de l'UE</p>
                                <p className="text-xs text-gray-600">Excédent commercial, industrie exportatrice</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🇱🇺 Luxembourg :</strong> Place financière européenne</p>
                                <p className="text-xs text-gray-600">PIB/habitant le plus élevé d'Europe</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">📋 Étude de cas : La Bulgarie (pays en retard)</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Situation économique :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-2">
                                <li>PIB/habitant le plus faible de l'UE</li>
                                <li>Forte émigration vers l'Europe de l'Ouest</li>
                                <li>Dépendance aux fonds structurels européens</li>
                                <li>Corruption endémique</li>
                              </ul>
                            </div>
                            
                            <div className="bg-yellow-100 p-3 rounded border border-yellow-300">
                              <p><strong>Conséquences :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1">
                                <li>Difficultés d'intégration dans l'espace Schengen</li>
                                <li>Déficit démocratique et état de droit fragilisé</li>
                                <li>Écart croissant avec les pays fondateurs</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">📋 Étude de cas : Un pays riche (Luxembourg/Allemagne)</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Avantages économiques :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-2">
                                <li>Bénéficiaires nets du marché unique</li>
                                <li>Capacité d'influence sur les politiques européennes</li>
                                <li>Attractivité pour les investissements</li>
                                <li>Innovation et recherche développées</li>
                              </ul>
                            </div>
                            
                            <div className="bg-green-100 p-3 rounded border border-green-300">
                              <p><strong>Position dans les crises :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1">
                                <li>Capacité de résistance aux chocs économiques</li>
                                <li>Influence sur les décisions de politique monétaire</li>
                                <li>Leadership dans les négociations européennes</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                          <h5 className="font-semibold text-gray-800 mb-2">Focus : Les Balkans</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Situation particulière :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-2">
                                <li>Processus d'adhésion long et complexe</li>
                                <li>Instabilité politique persistante</li>
                                <li>Économies en transition fragiles</li>
                                <li>Influence géopolitique de la Russie et de la Chine</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Radicalisation politique */}
                    <div className="bg-white p-6 rounded-lg border border-orange-200">
                      <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        2. Une radicalisation politique de l'Europe
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                          <h5 className="font-semibold text-orange-800 mb-2">Montée des populismes</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🇭🇺 Hongrie (Fidesz) :</strong></p>
                                <p className="text-xs">État illibéral, opposition à l'immigration</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🇵🇱 Pologne (PiS) :</strong></p>
                                <p className="text-xs">Réforme judiciaire, conflits avec Bruxelles</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🇮🇹 Italie (Lega, FdI) :</strong></p>
                                <p className="text-xs">Euroscepticisme, politique migratoire</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🇫🇷 France (RN) :</strong></p>
                                <p className="text-xs">Frexit, souverainisme</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Conséquences sur l'UE</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <ul className="list-disc list-inside text-xs space-y-1">
                              <li>Blocage des réformes institutionnelles</li>
                              <li>Remise en question de l'état de droit</li>
                              <li>Polarisation du débat européen</li>
                              <li>Affaiblissement de la solidarité européenne</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Visions divergentes de l'Europe */}
                    <div className="bg-white p-6 rounded-lg border border-purple-200">
                      <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        3. Visions divergentes de l'Europe : jusqu'où aller dans l'intégration ?
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">Trois modèles d'intégration</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-3 gap-3">
                              <div className="bg-white p-3 rounded border border-blue-200">
                                <h6 className="font-semibold text-blue-700 mb-1">🇪🇺 Fédéralistes</h6>
                                <p className="text-xs">États-Unis d'Europe, intégration poussée</p>
                                <p className="text-xs text-gray-500">France, Allemagne, Benelux</p>
                              </div>
                              <div className="bg-white p-3 rounded border border-green-200">
                                <h6 className="font-semibold text-green-700 mb-1">🏛️ Intergouvernementalistes</h6>
                                <p className="text-xs">Europe des Nations, coopération</p>
                                <p className="text-xs text-gray-500">Royaume-Uni (ex), certains pays nordiques</p>
                              </div>
                              <div className="bg-white p-3 rounded border border-red-200">
                                <h6 className="font-semibold text-red-700 mb-1">🚫 Souverainistes</h6>
                                <p className="text-xs">Retour aux souverainetés nationales</p>
                                <p className="text-xs text-gray-500">Hongrie, Pologne, partis populistes</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Dissonances qui perdurent</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🏦 Union bancaire :</strong> Résistances allemandes et nordiques</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>💰 Budget européen :</strong> Contributeurs nets vs bénéficiaires</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🛡️ Défense européenne :</strong> Atlantistes vs Européens</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>⚖️ État de droit :</strong> Valeurs vs souveraineté</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4/ Divergences des intérêts : la crise migratoire */}
                    <div className="bg-white p-6 rounded-lg border border-yellow-200">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        📋 Étude de cas : Divergences face à la crise migratoire
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Réponses non univoques apportées</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border border-green-200">
                                <h6 className="font-semibold text-green-700 mb-2">🤝 Pays d'accueil</h6>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li><strong>🇩🇪 Allemagne :</strong> "Wir schaffen das" (Merkel)</li>
                                  <li><strong>🇸🇪 Suède :</strong> Politique d'ouverture</li>
                                  <li><strong>🇮🇹 Italie :</strong> Porte d'entrée forcée</li>
                                  <li><strong>🇬🇷 Grèce :</strong> Frontière externe sous pression</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-red-200">
                                <h6 className="font-semibold text-red-700 mb-2">🚫 Groupe de Visegrád (V4)</h6>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li><strong>🇭🇺 Hongrie :</strong> Mur anti-migrants</li>
                                  <li><strong>🇵🇱 Pologne :</strong> Refus des quotas</li>
                                  <li><strong>🇨🇿 Tchéquie :</strong> Opposition systématique</li>
                                  <li><strong>🇸🇰 Slovaquie :</strong> Solidarité rejetée</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Divisions profondes de l'UE</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🏛️ Institutionnel :</strong></p>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li>Échec du système de Dublin</li>
                                  <li>Mécanisme de relocalisation non appliqué</li>
                                  <li>Blocage au Conseil européen</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🗺️ Géographique :</strong></p>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li>Fracture Est-Ouest</li>
                                  <li>Opposition Nord-Sud</li>
                                  <li>Pays frontières vs pays intérieurs</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white p-3 rounded border">
                                <p><strong>💭 Idéologique :</strong></p>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li>Conception de la solidarité européenne</li>
                                  <li>Identité nationale vs valeurs européennes</li>
                                  <li>Sécurité vs humanitaire</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                          <h5 className="font-semibold text-gray-800 mb-2">Conséquences durables</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <ul className="list-disc list-inside text-xs space-y-1">
                              <li>Remise en question de l'espace Schengen</li>
                              <li>Renforcement des contrôles aux frontières intérieures</li>
                              <li>Polarisation des opinions publiques européennes</li>
                              <li>Affaiblissement de la confiance mutuelle entre États membres</li>
                              <li>Émergence d'une "Europe à géométrie variable"</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="iii2">
                <AccordionTrigger className="text-lg">
                  III.2. La stratégie de l'UE : le tournant actuel
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    {/* 1/ Prise de conscience des élites européennes */}
                    <div className="bg-white p-6 rounded-lg border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        1. Prise de conscience relative des élites européennes
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Discours fondateurs du tournant</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Ursula von der Leyen</strong> - État de l'Union (14 septembre 2022)</p>
                              <p className="text-xs text-gray-600 italic">
                                "L'UE unie plus que jamais du fait de la guerre russo-ukrainienne"
                              </p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>Emmanuel Macron :</strong></p>
                                <p className="text-xs">"Europe souveraine"</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>Josep Borrell :</strong></p>
                                <p className="text-xs">"Europe capable de parler le langage de la puissance"</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Catalyseurs du changement</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>🔥 Guerre russo-ukrainienne :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-2">
                                <li>Renaissance de l'idée d'Europe de la défense</li>
                                <li>Renforcement de l'alliance militaire OTAN (sortie de "mort cérébrale")</li>
                              </ul>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>⛽ Dépendances stratégiques identifiées :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-2">
                                <li>Hydrocarbures russes</li>
                                <li>Commerce avec la Chine (rivale systémique)</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">Méthode incrémentale européenne</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Approche incrémentale :</strong></p>
                              <p className="text-xs mt-1">Produire davantage à chaque étape, stratégie des petits pas</p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>📈 Fonctionnalisme :</strong></p>
                                <p className="text-xs">Réalisations concrètes progressives</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🔄 Spillover :</strong></p>
                                <p className="text-xs">Effet d'entraînement entre secteurs</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Incohérences stratégiques passées */}
                    <div className="bg-white p-6 rounded-lg border border-orange-200">
                      <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        2. Incohérences de la stratégie européenne passée
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                          <h5 className="font-semibold text-orange-800 mb-2">📋 Cas Alstom-Siemens (Février 2019)</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Objectif :</strong></p>
                              <p className="text-xs">Créer un géant industriel européen face à l'ogre chinois CRRC</p>
                            </div>
                            
                            <div className="bg-red-100 p-3 rounded border border-red-300">
                              <p><strong>Refus de la Commission européenne :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-1">
                                <li>Risque de monopole</li>
                                <li>Conséquences sur les prix des trains et billets</li>
                                <li>Politique de concurrence freine face à la Chine</li>
                              </ul>
                            </div>
                            
                            <div className="bg-yellow-100 p-3 rounded border border-yellow-300">
                              <p><strong>Paradoxe :</strong></p>
                              <p className="text-xs">Règles internes empêchent la compétitivité externe</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">📋 Nord Stream 2 : le "Wandel durch Handel"</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Stratégie allemande (Merkel) :</strong></p>
                              <p className="text-xs">"Wandel durch Handel" (changement par le commerce)</p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Conséquences :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-1">
                                <li>Dépendance énergétique critique</li>
                                <li>Vulnérabilité géopolitique</li>
                                <li>Naïveté stratégique face à la Russie</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Stratégies face aux crises : Jean Monnet actualisé */}
                    <div className="bg-white p-6 rounded-lg border border-purple-200">
                      <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                        <Quote className="h-5 w-5" />
                        3. Stratégies face aux crises : l'Europe se construit dans l'urgence
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">Principe fondateur</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Jean Monnet (1954) :</strong></p>
                              <p className="text-xs italic">
                                "L'Europe se fera dans les crises et elle sera la somme des solutions apportées à ces crises"
                              </p>
                            </div>
                            
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Dominique Moïsi - Les Echos :</strong></p>
                              <p className="text-xs italic">
                                "L'Europe a retrouvé son récit fondateur"
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">💰 Révolution économique</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border border-red-200">
                                <h6 className="font-semibold text-red-700 mb-1">❌ Avant</h6>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li>Hésitation à intervenir en Grèce</li>
                                  <li>Crise de la dette souveraine</li>
                                  <li>Pays frugaux : RU, Danemark, Suède</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-green-200">
                                <h6 className="font-semibold text-green-700 mb-1">✅ Après</h6>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li>Brexit (simplification)</li>
                                  <li>Next Generation EU</li>
                                  <li>750 milliards de plan de relance</li>
                                  <li>Mutualisation de la dette</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4/ Vers une autonomie stratégique */}
                    <div className="bg-white p-6 rounded-lg border border-green-200">
                      <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        4. Vers une autonomie stratégique européenne ?
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Définition de l'autonomie stratégique</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Discours de la Sorbonne (Macron) :</strong></p>
                              <p className="text-xs">"Capacité de prendre des décisions de manière unilatérale"</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">🛡️ Europe de la défense</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Article 42.7 UE :</strong></p>
                              <p className="text-xs">Défense mutuelle européenne (parallèle Article 5 OTAN)</p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>✈️ SCAF :</strong></p>
                                <p className="text-xs">Système de Combat Aérien du Futur (France, Allemagne, Espagne) - 2040</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🚁 MALE :</strong></p>
                                <p className="text-xs">Drone européen (France, Allemagne, Espagne, Italie)</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🚗 EMBT :</strong></p>
                                <p className="text-xs">Char européen du futur</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>💰 Bundeswehr :</strong></p>
                                <p className="text-xs">100 milliards d'investissement allemand</p>
                              </div>
                            </div>
                            
                            <div className="bg-blue-100 p-3 rounded border border-blue-300">
                              <p><strong>Fonds européen de défense :</strong></p>
                              <p className="text-xs">60 milliards de projets pour 2026, budgets en hausse</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">💻 Souveraineté numérique</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>📋 RGPD (2015) :</strong></p>
                                <p className="text-xs">Protection des données, Schrems I-II</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🔌 Guerre économique :</strong></p>
                                <p className="text-xs">Chargeur universel Apple vs UE</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>☁️ Gaia-X :</strong></p>
                                <p className="text-xs">"Schengen de la donnée"</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>💾 Chips Act :</strong></p>
                                <p className="text-xs">Souveraineté technologique</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">🏥 Nouveaux secteurs d'intégration</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🏥 Europe de la santé :</strong> Renforcement post-COVID</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>⚡ Europe des ressources :</strong> Terres rares, hydrogène (pays respectant valeurs UE)</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🔬 Nanotechnologies :</strong> "Colbertisme high-tech"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5/ Tensions avec les USA */}
                    <div className="bg-white p-6 rounded-lg border border-red-200">
                      <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                        <ExternalLink className="h-5 w-5" />
                        5. USA-UE : quelle autonomie stratégique ?
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Trois reproches américains à l'UE</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>💰 INSTEX :</strong></p>
                                <p className="text-xs">Système de troc avec l'Iran (Federica Mogherini), contournement du dollar</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🛡️ Défense :</strong></p>
                                <p className="text-xs">Dépenses insuffisantes pour la défense (objectif 2% PIB)</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>⛽ Nord Stream 2 :</strong></p>
                                <p className="text-xs">Dépendance énergétique russe</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                          <h5 className="font-semibold text-gray-800 mb-2">Limites de la clairvoyance européenne</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <ul className="list-disc list-inside text-xs space-y-1">
                              <li>Difficulté à cerner ses intérêts dans la guerre économique mondiale</li>
                              <li>Entreprises européennes évincées de la donne géopolitique</li>
                              <li>Commission européenne entre protection et libéralisme</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 6/ Zones d'ombre : ZMO */}
                    <div className="bg-white p-6 rounded-lg border border-yellow-200">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        6. Nuances : les limites de l'intégration économique
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Zone Monétaire Optimale (Robert Mundell)</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>❌ Déficits structurels :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-1">
                                <li>Mobilité des travailleurs trop faible</li>
                                <li>Disparités entre pays persistantes</li>
                                <li>Pas de budget commun significatif</li>
                                <li>19/27 pays dans la zone euro</li>
                              </ul>
                            </div>
                            
                            <div className="bg-green-100 p-3 rounded border border-green-300">
                              <p><strong>✅ Progrès récents :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-1">
                                <li>Mutualisation partielle de la dette (Next Generation EU)</li>
                                <li>Mécanisme de solidarité renforcé</li>
                                <li>Union bancaire en construction</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="iii3">
                <AccordionTrigger className="text-lg">
                  III.3. L'Europe à géométrie variable : défis du XXIème siècle
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    {/* Introduction conceptuelle */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-5 w-5 text-blue-600" />
                        <h5 className="font-semibold text-blue-800">L'Union européenne supranationale</h5>
                      </div>
                      <div className="space-y-2 text-sm text-blue-700">
                        <p><strong>Guy Verhofstadt</strong> (Président ADLE) : "Groupement supranational de 27 pays"</p>
                        <p><strong>Pierre Maillet et Dario Velo :</strong> Concept d'"Europe à géométrie variable"</p>
                      </div>
                    </div>

                    {/* 1/ Typologie de l'Europe à géométrie variable */}
                    <div className="bg-white p-6 rounded-lg border border-purple-200">
                      <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        1. L'Europe à géométrie variable : une réalité institutionnelle
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">Cercles concentriques européens</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-3 gap-3">
                              <div className="bg-white p-3 rounded border border-blue-200">
                                <h6 className="font-semibold text-blue-700 mb-2">🇪🇺 Union européenne</h6>
                                <p className="text-xs mb-2"><strong>27 pays membres</strong></p>
                                <p className="text-xs">Marché unique, politiques communes, institutions supranationales</p>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-yellow-200">
                                <h6 className="font-semibold text-yellow-700 mb-2">💶 Zone Euro</h6>
                                <p className="text-xs mb-2"><strong>19/27 pays</strong></p>
                                <p className="text-xs">Monnaie unique, politique monétaire commune (BCE)</p>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-green-200">
                                <h6 className="font-semibold text-green-700 mb-2">🛂 Espace Schengen</h6>
                                <p className="text-xs mb-2"><strong>22/27 pays UE + autres</strong></p>
                                <p className="text-xs">Libre circulation des personnes, suppression contrôles frontaliers</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                          <h5 className="font-semibold text-gray-800 mb-2">Logique de différenciation</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🏛️ Coopération renforcée :</strong> Mécanisme permettant à 9 États minimum d'approfondir l'intégration</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>⚖️ Opt-out :</strong> Clauses de non-participation (Danemark, Pologne)</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🔄 Intégration différenciée :</strong> Rythmes d'adhésion variables selon les domaines</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Les 5 défis du XXIème siècle */}
                    <div className="bg-white p-6 rounded-lg border border-orange-200">
                      <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        2. Les défis du XXIème siècle et la capacité de réponse de l'UE
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                          <h5 className="font-semibold text-orange-800 mb-2">Typologie des défis majeurs</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                              <div className="bg-white p-3 rounded border border-purple-200">
                                <h6 className="font-semibold text-purple-700 mb-1">💻 Numérique</h6>
                                <p className="text-xs">Souveraineté technologique, GAFAM, IA</p>
                              </div>
                              <div className="bg-white p-3 rounded border border-red-200">
                                <h6 className="font-semibold text-red-700 mb-1">💰 Guerre économique</h6>
                                <p className="text-xs">Commerce, sanctions, compétitivité</p>
                              </div>
                              <div className="bg-white p-3 rounded border border-green-200">
                                <h6 className="font-semibold text-green-700 mb-1">🌱 Écologie</h6>
                                <p className="text-xs">Transition énergétique, Green Deal</p>
                              </div>
                              <div className="bg-white p-3 rounded border border-blue-200">
                                <h6 className="font-semibold text-blue-700 mb-1">🏭 Industrie</h6>
                                <p className="text-xs">Réindustrialisation, autonomie stratégique</p>
                              </div>
                              <div className="bg-white p-3 rounded border border-yellow-200">
                                <h6 className="font-semibold text-yellow-700 mb-1">💪 Puissance</h6>
                                <p className="text-xs">Géopolitique, défense, influence</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">Pressions contemporaines</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Défis auxquels l'UE est confrontée :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-1">
                                <li>Crise économique persistante</li>
                                <li>Pressions migratoires</li>
                                <li>Changement climatique</li>
                                <li>Tensions avec les pays voisins</li>
                                <li>Incertitudes géopolitiques</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Livre Blanc de Juncker : 5 scénarios */}
                    <div className="bg-white p-6 rounded-lg border border-green-200">
                      <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        3. Prospective : Livre Blanc de Jean-Claude Juncker
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">Les 5 scénarios pour l'avenir de l'Europe</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded border border-gray-200">
                                <h6 className="font-semibold text-gray-700 mb-1">1️⃣ Continuité</h6>
                                <p className="text-xs">Maintien du statu quo, réformes graduelles dans le cadre existant</p>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-blue-200">
                                <h6 className="font-semibold text-blue-700 mb-1">2️⃣ Marché unique seulement</h6>
                                <p className="text-xs">Recentrage sur le marché intérieur, moins d'intégration politique</p>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-yellow-200">
                                <h6 className="font-semibold text-yellow-700 mb-1">3️⃣ Ceux qui en veulent plus font plus</h6>
                                <p className="text-xs">Europe à plusieurs vitesses, coopération renforcée pour certains</p>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-orange-200">
                                <h6 className="font-semibold text-orange-700 mb-1">4️⃣ Faire moins mais plus efficacement</h6>
                                <p className="text-xs">Concentration sur quelques priorités, moins de domaines d'action</p>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-purple-200">
                                <h6 className="font-semibold text-purple-700 mb-1">5️⃣ Faire beaucoup plus ensemble</h6>
                                <p className="text-xs">Approfondissement fédéraliste, États-Unis d'Europe</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">Tendance actuelle</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Scénario 3 dominant :</strong> "Ceux qui en veulent plus font plus"</p>
                              <p className="text-xs mt-1">Europe à géométrie variable de facto, avec des avant-gardes sectorielles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4/ Prospective stratégique d'Ursula von der Leyen */}
                    <div className="bg-white p-6 rounded-lg border border-teal-200">
                      <h4 className="text-lg font-semibold text-teal-800 mb-4 flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        4. Rapport de prospective stratégique : nouvelles alternatives
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                          <h5 className="font-semibold text-teal-800 mb-2">Discours d'Ursula von der Leyen : enjeux énergétiques</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>⚡ Alternatives énergétiques :</strong></p>
                                <ul className="list-disc list-inside text-xs space-y-1 mt-1">
                                  <li>GNL (Gaz Naturel Liquéfié)</li>
                                  <li>Énergies renouvelables</li>
                                  <li>Hydrogène vert</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🔬 Matériaux stratégiques :</strong></p>
                                <ul className="list-disc list-inside text-xs space-y-1 mt-1">
                                  <li>Terres rares</li>
                                  <li>Métaux critiques</li>
                                  <li>Semi-conducteurs</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="bg-green-100 p-3 rounded border border-green-300">
                              <p><strong>🌱 Décarbonation de l'Europe :</strong></p>
                              <p className="text-xs">Objectif neutralité carbone 2050, Green Deal européen</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">Constat de perturbation</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>⚠️ Fragilités majeures identifiées :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1 mt-1">
                                <li>Dépendance énergétique externe</li>
                                <li>Chaînes d'approvisionnement vulnérables</li>
                                <li>Retard technologique dans certains secteurs</li>
                                <li>Capacités de défense insuffisantes</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-semibold text-purple-800 mb-2">Résilience : deux conceptions de la puissance</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border border-blue-200">
                                <h6 className="font-semibold text-blue-700 mb-1">🕊️ Puissance normative</h6>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li>Influence par l'exemple</li>
                                  <li>Soft power européen</li>
                                  <li>Standards internationaux</li>
                                  <li>Valeurs démocratiques</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white p-3 rounded border border-red-200">
                                <h6 className="font-semibold text-red-700 mb-1">⚔️ Puissance géopolitique</h6>
                                <ul className="list-disc list-inside text-xs space-y-1">
                                  <li>Capacités militaires</li>
                                  <li>Autonomie stratégique</li>
                                  <li>Rapports de force</li>
                                  <li>Géoéconomie offensive</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="bg-gray-100 p-3 rounded border">
                              <p className="text-xs italic text-center">
                                Tension entre l'Europe "puissance tranquille" et l'Europe "géopolitique"
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5/ Bilan : cohérence et efficacité */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        5. Bilan : capacité de l'UE à aborder les défis avec cohérence
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">✅ Réussites européennes</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🌱 Écologie :</strong></p>
                                <p className="text-xs">Leadership mondial, Green Deal, taxonomie verte</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>💻 Numérique :</strong></p>
                                <p className="text-xs">RGPD, DMA, DSA, régulation des GAFAM</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>💰 Économie :</strong></p>
                                <p className="text-xs">Plan de relance, mutualisation dette</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p><strong>🛡️ Défense :</strong></p>
                                <p className="text-xs">Fonds européen, projets industriels</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-semibold text-red-800 mb-2">❌ Limites et défis persistants</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <ul className="list-disc list-inside text-xs space-y-1">
                                <li><strong>Fragmentation :</strong> 27 intérêts nationaux différents</li>
                                <li><strong>Lenteur décisionnelle :</strong> Processus complexes, vetos possibles</li>
                                <li><strong>Manque de moyens :</strong> Budget limité (1% PIB européen)</li>
                                <li><strong>Dépendances externes :</strong> Énergies, technologies, défense</li>
                                <li><strong>Concurrence interne :</strong> Politiques nationales contradictoires</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">🔮 Prospective</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Tendance :</strong> Europe à géométrie variable comme solution pragmatique</p>
                              <p className="text-xs mt-1">
                                Les pays volontaires avancent sur des projets spécifiques, 
                                les autres peuvent rejoindre ultérieurement
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Note de développement */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-yellow-800">
              <AlertTriangle className="h-5 w-5" />
              <p className="font-semibold">Développement en cours</p>
            </div>
            <p className="text-yellow-700 mt-2 text-sm">
              Cette page présente le développement complet des parties I (Historique) et II (Défis contemporains). La partie III sera ajoutée progressivement selon le programme de géopolitique européenne.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UnionEuropeennePage;