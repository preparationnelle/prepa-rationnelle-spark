import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, Globe, Quote, AlertTriangle, CheckCircle, Cpu, Atom, Rocket, Shield, TrendingUp, Users, Zap, Brain } from 'lucide-react';

const SciencesTechnologiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-indigo-600 hover:text-indigo-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/premiere-annee" className="text-indigo-600 hover:text-indigo-800">
            Première Année
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Sciences et Technologies</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Cpu className="h-8 w-8" />
              <div>
                <CardTitle className="text-2xl font-bold">Sciences et Technologies dans le Monde Contemporain</CardTitle>
                <p className="text-indigo-100 mt-2">
                  Des Enjeux Géopolitiques ?
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">1945</div>
                <div className="text-sm text-indigo-100">Nucléaire</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm text-indigo-100">IA & Quantique</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">42B$</div>
                <div className="text-sm text-indigo-100">Investissements quantiques</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">G2</div>
                <div className="text-sm text-indigo-100">USA-Chine</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accroche */}
        <Card className="mb-8 border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Quote className="h-6 w-6 text-indigo-600" />
              Accroche
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="bg-white p-6 rounded-lg border border-indigo-200 italic text-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                "En 2025, alors que l'ONU déclare l'Année Internationale des Sciences Quantiques et Technologies, 
                la rivalité sino-américaine sur l'IA et le quantique illustre comment les avancées scientifiques 
                ne sont plus seulement des outils de progrès, mais des armes géopolitiques décisives, 
                redéfinissant les équilibres mondiaux au-delà des conflits traditionnels."
              </p>
            </blockquote>
          </CardContent>
        </Card>

        {/* Définitions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Définitions des termes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Enjeu</h4>
                  <p className="text-sm text-gray-700">
                    Ce qui est "en jeu" dans un affrontement ; ce que l'on gagne à contrôler ou ce qui a des effets majeurs sur le fonctionnement du système géopolitique.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Technologie</h4>
                  <p className="text-sm text-gray-700">
                    Forme de savoir technique sophistiqué, impliquant une capacité de mise en œuvre (par opposition à une simple technique).
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Science</h4>
                  <p className="text-sm text-gray-700">
                    Forme de savoir non technique, indépendant de son application pratique. Principalement réservé aux sciences naturelles et physiques.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Classe créative (Richard Florida)</h4>
                  <p className="text-sm text-gray-700">
                    Groupe social composé d'individus innovants (scientifiques, ingénieurs, artistes) qui génèrent de la valeur économique et technologique.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Paradoxe et Problématique */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                Paradoxe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Bien que les sciences et technologies circulent rapidement dans un monde globalisé, 
                favorisant un rattrapage apparent des puissances émergentes, leur contrôle reste 
                concentré entre quelques acteurs dominants (États-Unis, Chine, Europe), renforçant 
                paradoxalement les inégalités géopolitiques plutôt que de les atténuer.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Brain className="h-6 w-6 text-purple-600" />
                Problématique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Comment les sciences et technologies, en tant que facteurs de puissance et de contrôle, 
                redéfinissent-elles les enjeux géopolitiques dans le monde contemporain, depuis la 
                nucléarisation post-1945 jusqu'aux rivalités actuelles sur l'IA, le quantique et les technologies vertes ?
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chronologie */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Rocket className="h-6 w-6 text-blue-600" />
              Chronologie Sélective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-blue-700 mb-2">1945</div>
                  <p className="text-sm text-gray-700">Bombe atomique et fin de la Seconde Guerre mondiale ; émergence de la dissuasion nucléaire</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-blue-700 mb-2">1957-1969</div>
                  <p className="text-sm text-gray-700">Course à l'espace (Spoutnik 1957, Apollo 1969) symbolise la rivalité URSS-USA</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-blue-700 mb-2">1970s</div>
                  <p className="text-sm text-gray-700">Chocs pétroliers ; montée de la géo-économie où la technologie domine la valeur ajoutée</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-blue-700 mb-2">1980-1990s</div>
                  <p className="text-sm text-gray-700">Fin de la Guerre froide ; essor d'Internet et du soft power technologique (Silicon Valley)</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-blue-700 mb-2">2000s</div>
                  <p className="text-sm text-gray-700">Mondialisation numérique ; défis écologiques nécessitant innovations technologiques</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-blue-700 mb-2">2010-2020</div>
                  <p className="text-sm text-gray-700">IA, big data, biotechnologies ; tensions sino-américaines sur la 5G et les semi-conducteurs</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-blue-700 mb-2">2020-2025</div>
                  <p className="text-sm text-gray-700">Pandémie COVID-19 ; boom de l'IA ; ONU déclare 2025 Année des Sciences Quantiques</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-blue-700 mb-2">2025</div>
                  <p className="text-sm text-gray-700">Intensification "tech war" US-Chine ; investissements quantiques 42B$ ; AI Act européen</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Développement de la dissertation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              Développement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="i">
                <AccordionTrigger className="text-lg">
                  I. La Géopolitique Mondiale Marquée par l'Enjeu des Sciences et Technologies
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
                      <h4 className="font-semibold text-indigo-800 mb-4">Utilisation de cette partie dans une copie</h4>
                      <div className="space-y-3 text-sm text-indigo-700">
                        <p>• Montrer que la technologie, historiquement centrale pour le hard power, devient décisive dans un monde nucléarisé</p>
                        <p>• Illustrer comment les enjeux économiques et informationnels renforcent le rôle géopolitique des sciences et technologies</p>
                        <p>• Analyser l'évolution du rôle des sciences et technologies de la dissuasion nucléaire au soft power contemporain</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-red-200 pb-2">
                        A. Contrôle des Technologies Militaires : Décisif dans un Monde Nucléarisé
                      </h4>
                      
                      <div className="ml-4">
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Dissuasion nucléaire post-1945</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Arsenal nucléaire des superpuissances (USA, URSS/Russie, Chine)</li>
                              <li>Équilibre de la terreur pendant la Guerre froide</li>
                              <li>Prolifération comme levier géopolitique (Corée du Nord, Iran)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Technologies militaires modernes (2020-2025)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Missiles hypersoniques et cyberarmes</li>
                              <li>Attaques cyber russes en Ukraine (2022-2025)</li>
                              <li>Cyberespionnage intensifié (1/3 des CEOs craignent la perte d'informations, WEF 2025)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        B. Affirmation des Enjeux Économiques : Technologie comme Facteur de Puissance
                      </h4>
                      
                      <div className="ml-4">
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Géo-économisation depuis 1970</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Révolution informatique dominée par les USA</li>
                              <li>Exportations high-tech (Japon, Corée du Sud)</li>
                              <li>Contrôle de la valeur ajoutée mondiale par les pays technologiques</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Guerre commerciale tech US-Chine (2024-2025)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Restrictions US sur exportations de semi-conducteurs vers la Chine</li>
                              <li>Impact sur Huawei et industrie chinoise</li>
                              <li>Fragmentation des chaînes d'approvisionnement (terres rares pour batteries vertes)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                        C. Monde Informationnel : Contrôle des Sciences pour le Soft Power
                      </h4>
                      
                      <div className="ml-4">
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Soft power technologique</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Attractivité des États-Unis via Hollywood et Silicon Valley</li>
                              <li>Influence chinoise via TikTok et Huawei</li>
                              <li>Diplomatie scientifique (vaccins COVID)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">IA comme outil géopolitique (2025)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Diplomatie vaccinale post-COVID</li>
                              <li>IA comme soft power dans le Global South</li>
                              <li>Diffusion culturelle via tech (réseaux sociaux)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ii">
                <AccordionTrigger className="text-lg">
                  II. Renforcement de l'Importance Géopolitique des Sciences et Technologies
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-semibold text-orange-800 mb-4">Utilisation de cette partie dans une copie</h4>
                      <div className="space-y-3 text-sm text-orange-700">
                        <p>• Démontrer que les défis contemporains exigent une maîtrise technologique</p>
                        <p>• Analyser comment la circulation rapide des technologies redéfinit la géographie mondiale</p>
                        <p>• Illustrer que la technologie constitue un avantage comparatif préservable dans la concurrence globale</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        A. Défis Contemporains : Écologiques et Ressources Résolus par la Science/Technologie
                      </h4>
                      
                      <div className="ml-4">
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Transition énergétique</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Technologies renouvelables (éolien, solaire)</li>
                              <li>OGM pour la sécurité alimentaire</li>
                              <li>Géopolitique des terres rares (Chine contrôle 60-70% pour batteries EV)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Enjeux géopolitiques climatiques (2023-2025)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Trade defense actions sur green tech (UE vs. Chine sur panneaux solaires)</li>
                              <li>Accords climatiques (COP) comme arènes de puissance</li>
                              <li>Contrôle des technologies vertes comme facteur de domination</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-200 pb-2">
                        B. Circulation Rapide : Redéfinition Permanente de la Géographie Mondiale
                      </h4>
                      
                      <div className="ml-4">
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Centres d'innovation mondiaux</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Silicon Valley, Shenzhen comme pôles technologiques</li>
                              <li>Transferts technologiques via mondialisation</li>
                              <li>Rattrapage des émergents (Inde en IT)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Course spatiale et quantique (2024-2025)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Space race US-Chine (Chine vise retour sur Lune avant USA)</li>
                              <li>Investissements quantiques globaux (42B$ en 2023, Chine en tête)</li>
                              <li>Risques d'espionnage industriel (affaire Huawei)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                        C. Concurrence Globale : Avantage Comparatif Préservable
                      </h4>
                      
                      <div className="ml-4">
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Investissements en R&D</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>USA : 3% du PIB en R&D</li>
                              <li>Attractivité de la "classe créative" (Richard Florida)</li>
                              <li>Brain drain vers les pôles innovants</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Fragmentation technologique (2025)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Croissance limitée des jobs quantiques (4.4% en 2024)</li>
                              <li>Brain drain vers USA/Chine</li>
                              <li>Protectionnisme (sanctions US sur chips chinois)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="iii">
                <AccordionTrigger className="text-lg">
                  III. Concurrence et Hiérarchisation Autour du Contrôle des Sciences et Technologies
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 mb-4">Utilisation de cette partie dans une copie</h4>
                      <div className="space-y-3 text-sm text-purple-700">
                        <p>• Analyser la vraie compétition entre acteurs pour acquérir et contrôler les technologies</p>
                        <p>• Montrer la primauté du contrôle scientifique sur les technologies éphémères</p>
                        <p>• Démontrer que la maîtrise technologique constitue un facteur décisif de hiérarchisation des puissances</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-red-200 pb-2">
                        A. Concurrence Globale pour le Contrôle
                      </h4>
                      
                      <div className="ml-4">
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Guerre commerciale USA-Chine</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Semi-conducteurs comme enjeu stratégique</li>
                              <li>Alliances technologiques (Quad pour Indo-Pacifique tech)</li>
                              <li>Restrictions US sur AI chips vers Chine/Malaisie (2025)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Échelles de compétition</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Locale (villes innovantes) à globale (OMC sur brevets)</li>
                              <li>Rôle croissant de l'UE (AI Act 2024)</li>
                              <li>Émergence du Global South dans l'IA mais reste en marge</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        B. Primauté du Contrôle Scientifique
                      </h4>
                      
                      <div className="ml-4">
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Science vs. Technologie</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Investissements en recherche quantique (USA, Chine)</li>
                              <li>Prix Nobel comme indicateurs de puissance scientifique</li>
                              <li>UN Year of Quantum 2025 souligne les rivalités</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Avantage durable</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Science génère innovations durables</li>
                              <li>Technologies deviennent obsolètes rapidement</li>
                              <li>Quantum comme "course technologique du siècle" (Bank of America 2025)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                        C. Hiérarchisation des Puissances : Facteur Décisif
                      </h4>
                      
                      <div className="ml-4">
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Domination établie</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>USA/Europe dominent (capital historique, attractivité créative)</li>
                              <li>Émergents rattrapent mais inégalités persistent</li>
                              <li>Chine vise parité spatiale d'ici 2030</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Conséquences géopolitiques</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Puissances tech (G7) vs. pays dépendants</li>
                              <li>"Classe créative" comme atout (migration des talents)</li>
                              <li>Global South émerge dans l'IA mais reste marginalisé (2025)</li>
                            </ul>
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

      </div>
    </div>
  );
};

export default SciencesTechnologiesPage;