import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, BookOpen, Globe, MapPin, Quote, AlertTriangle, Lightbulb, Zap, Users, BarChart, Thermometer, Clock, Calendar } from 'lucide-react';

const ProcheMoyenOrientPage = () => {
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
            <span className="text-gray-900 font-bold">Proche et Moyen-Orient</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Le Proche et Moyen-Orient</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Une région aux frontières floues, épicentre des tensions mondiales entre puissances régionales et enjeux stratégiques
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-purple-700 border-purple-300">
              États et territoires
            </Badge>
            <Badge variant="outline" className="text-purple-700 border-purple-300">
              Cultures et sociétés
            </Badge>
            <Badge variant="outline" className="text-purple-700 border-purple-300">
              Géopolitique et conflits
            </Badge>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Introduction */}
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-purple-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                
                {/* 1. Définir la zone */}
                <AccordionItem value="definition-zone">
                  <AccordionTrigger className="text-lg font-semibold">1. Définir la zone : une région aux frontières floues</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold text-blue-800 mb-2">Définition à apprendre par cœur</h4>
                        <div className="flex items-start gap-3">
                          <Quote className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 italic">
                            Le Moyen-Orient est une région aux frontières fluctuantes, englobant l'Asie occidentale et l'Afrique du Nord, 
                            où se rencontrent des enjeux énergétiques, religieux et stratégiques majeurs. Il est marqué par la rivalité 
                            entre puissances régionales (Iran, Turquie, Arabie Saoudite), l'intervention des grandes puissances et des 
                            conflits récurrents, faisant de cette zone un épicentre des tensions mondiales.
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-800 mb-3">Terminologies et délimitations :</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold text-gray-800">Moyen-Orient (Middle East)</p>
                            <p className="text-gray-700 text-sm">Expression occidentale, popularisée après la Seconde Guerre mondiale.</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Proche-Orient</p>
                            <p className="text-gray-700 text-sm">Terme d'origine européenne, désignant les territoires du Levant (Liban, Syrie, Palestine, Irak).</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">MENA (Middle East and North Africa)</p>
                            <p className="text-gray-700 text-sm">Intègre les pays d'Afrique du Nord (Maroc, Algérie, Tunisie, Égypte).</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Grand Moyen-Orient (Great Middle East)</p>
                            <p className="text-gray-700 text-sm">Vision stratégique américaine élargie incluant l'Afghanistan, la Mauritanie et le Pakistan (Bush, 2004).</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Arc de crises</p>
                            <p className="text-gray-700 text-sm">Concept géopolitique désignant une zone d'instabilité s'étendant de l'Afrique du Nord jusqu'à l'Asie centrale.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Les puissances régionales */}
                <AccordionItem value="puissances-regionales">
                  <AccordionTrigger className="text-lg font-semibold">2. Les puissances régionales du Moyen-Orient</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-800 mb-3">Trois grandes puissances régionales non arabes :</h4>
                        <div className="space-y-3">
                          <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                            <p className="font-semibold text-gray-800">Turquie</p>
                            <p className="text-gray-700 text-sm">Puissance militaire et économique, ambition néo-ottomane sous Erdogan.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                            <p className="font-semibold text-gray-800">Iran</p>
                            <p className="text-gray-700 text-sm">Puissance chiite, influence en Irak, Syrie, Liban et Yémen.</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                            <p className="font-semibold text-gray-800">Égypte</p>
                            <p className="text-gray-700 text-sm">Puissance démographique et militaire, rôle central dans le monde arabe.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-800 mb-3">Les autres acteurs majeurs :</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                            <p className="font-semibold text-gray-800">Arabie Saoudite</p>
                            <p className="text-gray-700 text-sm">Leader du monde sunnite, puissance pétrolière, rival de l'Iran.</p>
                          </div>
                          <div className="bg-indigo-50 p-3 rounded border-l-4 border-indigo-400">
                            <p className="font-semibold text-gray-800">Israël</p>
                            <p className="text-gray-700 text-sm">Puissance militaire et technologique, alliances stratégiques avec les États-Unis et les pays du Golfe.</p>
                          </div>
                          <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
                            <p className="font-semibold text-gray-800">Qatar, EAU</p>
                            <p className="text-gray-700 text-sm">Influence diplomatique et financière (soft power, Al Jazeera, investissements).</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Typologie des crises */}
                <AccordionItem value="typologie-crises">
                  <AccordionTrigger className="text-lg font-semibold">3. Typologie des crises au Moyen-Orient</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Instabilités internes
                        </h4>
                        <div className="space-y-2">
                          <div>
                            <p className="font-semibold text-gray-800">Guerres civiles et conflits ethniques</p>
                            <p className="text-gray-700 text-sm">Syrie, Yémen, Libye, Irak.</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Crises économiques et mal-développement</p>
                            <p className="text-gray-700 text-sm">Liban (effondrement économique), Irak (corruption, infrastructures défaillantes).</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Inégalités sociales et contestations</p>
                            <p className="text-gray-700 text-sm">Printemps arabes (2011), révoltes au Soudan, en Iran.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          Instabilités externes
                        </h4>
                        <div className="space-y-2">
                          <div>
                            <p className="font-semibold text-gray-800">Conflits interétatiques et interventions étrangères</p>
                            <p className="text-gray-700 text-sm">Guerre Iran-Irak (1980-1988), invasion américaine de l'Irak (2003).</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Influence des grandes puissances</p>
                            <p className="text-gray-700 text-sm">Rôle des États-Unis, de la Russie et de la Chine dans la région.</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Rivalités entre puissances régionales</p>
                            <p className="text-gray-700 text-sm">Iran vs Arabie Saoudite, Israël vs Iran, Turquie vs Égypte.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Maghreb et Machrek */}
                <AccordionItem value="maghreb-machrek">
                  <AccordionTrigger className="text-lg font-semibold">4. Maghreb et Machrek : deux sous-ensembles différenciés</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                          <h4 className="font-semibold text-orange-800 mb-3">Maghreb (Afrique du Nord)</h4>
                          <div className="space-y-2">
                            <p className="text-gray-700 text-sm"><strong>Pays :</strong> Maroc, Algérie, Tunisie, Libye, Mauritanie</p>
                            <p className="text-gray-700 text-sm"><strong>Caractéristiques :</strong></p>
                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                              <li>• Influence historique de l'Europe</li>
                              <li>• Faible intégration régionale (échec de l'UMA)</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                          <h4 className="font-semibold text-emerald-800 mb-3">Machrek (Orient arabe)</h4>
                          <div className="space-y-2">
                            <p className="text-gray-700 text-sm"><strong>Pays :</strong> Égypte, Levant, Irak, péninsule Arabique</p>
                            <p className="text-gray-700 text-sm"><strong>Caractéristiques :</strong></p>
                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                              <li>• Poids du pétrole et des tensions géopolitiques</li>
                              <li>• Fragmentation politique</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Paradoxes et problématiques */}
                <AccordionItem value="paradoxes-problematiques">
                  <AccordionTrigger className="text-lg font-semibold">5. Paradoxes et problématiques</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Paradoxe 1 */}
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          1. Une région stratégique, instable et convoitée
                        </h4>
                        <div className="space-y-2">
                          <p className="text-gray-700"><strong>Constat :</strong> Le Moyen-Orient est une zone de tensions majeures, avec des conflits récurrents et des ingérences étrangères.</p>
                          <p className="text-gray-700"><strong>Paradoxe :</strong> Malgré son instabilité chronique, il reste un espace central dans la géopolitique mondiale et l'économie énergétique.</p>
                          <p className="text-purple-700 font-semibold"><strong>Problématique :</strong> La région est-elle condamnée à être une poudrière mondiale ou peut-elle stabiliser ses rivalités internes et externes ?</p>
                        </div>
                      </div>

                      {/* Paradoxe 2 */}
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-800 mb-2">2. Les ingérences étrangères : stabilisation ou chaos ?</h4>
                        <div className="space-y-2">
                          <p className="text-gray-700"><strong>Constat :</strong> Les puissances occidentales ont historiquement cherché à façonner l'ordre régional, des accords Sykes-Picot à l'intervention américaine en Irak.</p>
                          <p className="text-gray-700"><strong>Paradoxe :</strong> Les interventions étrangères prétendent rétablir la stabilité mais génèrent souvent plus de désordre, tandis que leur absence favorise l'essor des acteurs non étatiques (milices, terrorisme).</p>
                          <p className="text-purple-700 font-semibold"><strong>Problématique :</strong> L'ingérence est-elle une cause de l'instabilité du Moyen-Orient ou la seule alternative pour éviter l'anarchie ?</p>
                        </div>
                      </div>

                      {/* Paradoxe 3 */}
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-800 mb-2">3. Le pétrole : une richesse qui freine le développement</h4>
                        <div className="space-y-2">
                          <p className="text-gray-700"><strong>Constat :</strong> Le Moyen-Orient détient plus de 50 % des réserves mondiales de pétrole et 40 % des réserves de gaz, assurant un poids géostratégique considérable.</p>
                          <p className="text-gray-700"><strong>Paradoxe :</strong> La rente pétrolière n'a pas permis un développement homogène : les pays les plus riches sont ceux où la redistribution est la plus inégalitaire.</p>
                          <p className="text-purple-700 font-semibold"><strong>Problématique :</strong> Pourquoi le Moyen-Orient, malgré son potentiel économique, ne parvient-il pas à émerger durablement ?</p>
                        </div>
                      </div>

                      {/* Paradoxe 4 */}
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-800 mb-2">4. Une région entre opulence et mal-développement</h4>
                        <div className="space-y-2">
                          <p className="text-gray-700"><strong>Constat :</strong> Certains États affichent des niveaux de richesse spectaculaires (Dubaï, Doha), tandis que d'autres s'effondrent sous le poids des guerres et des crises économiques (Yémen, Syrie, Liban).</p>
                          <p className="text-gray-700"><strong>Paradoxe :</strong> L'opulence des monarchies pétrolières coexiste avec une pauvreté extrême et des tensions sociales qui menacent la stabilité régionale.</p>
                          <p className="text-purple-700 font-semibold"><strong>Problématique :</strong> Le développement du Moyen-Orient est-il réellement durable ou repose-t-il sur des bases fragiles et artificielles ?</p>
                        </div>
                      </div>

                      {/* Autres paradoxes - version condensée */}
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-800 mb-3">Autres paradoxes majeurs :</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>5. Nouvel ordre régional ou fragmentation ?</strong> Recomposition autour de nouvelles alliances (Accords d'Abraham) vs conflits persistants.</p>
                          <p><strong>6. La Méditerranée :</strong> Un pont historique devenu fossé géopolitique entre Europe et monde arabe.</p>
                          <p><strong>7. Relations avec l'Occident :</strong> Critique des régimes autoritaires vs partenariats stratégiques maintenus.</p>
                          <p><strong>8. Intégration économique :</strong> Pleinement intégré aux flux mondiaux mais reste une périphérie dominée.</p>
                          <p><strong>9. Vulnérabilité alimentaire :</strong> Grande productrice d'énergie mais dépendante des importations alimentaires.</p>
                          <p><strong>10. Autonomie vs dépendance :</strong> Affirmation des puissances régionales mais dépendance aux alliances extérieures.</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </CardContent>
          </Card>

          {/* Plan de la dissertation */}
          <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-indigo-600" />
                Plan de la dissertation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                
                {/* Partie I */}
                <AccordionItem value="partie-1">
                  <AccordionTrigger className="text-xl font-semibold text-indigo-800">
                    I. Une région historiquement marquée par les ingérences et l'instabilité
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <Card className="border border-indigo-200">
                        <CardContent className="p-4">
                          <Accordion type="single" collapsible>
                            <AccordionItem value="i-a">
                              <AccordionTrigger className="text-lg font-semibold">
                                A. Une région stratégique convoitée dès la révolution industrielle
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-6">
                                  
                                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                    <p className="text-gray-800 font-semibold mb-2">Le Moyen-Orient, une région au cœur des intérêts des grandes puissances</p>
                                    <p className="text-gray-700">
                                      Le Moyen-Orient suscite l'attention des grandes puissances depuis la révolution industrielle, en raison de son 
                                      emplacement stratégique et de ses ressources énergétiques. Cette convoitise a donné lieu à des alliances et 
                                      des partenariats historiques, mais surtout à des ingérences répétées, faisant du Moyen-Orient une région de 
                                      rivalités et d'instabilité chronique.
                                    </p>
                                  </div>

                                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <p className="text-gray-800 font-semibold mb-2">Problématique centrale :</p>
                                    <p className="text-gray-700">
                                      Le Moyen-Orient occupe une position géographique centrale et dispose de ressources énergétiques majeures, 
                                      ce qui en fait un enjeu crucial pour les grandes puissances depuis la révolution industrielle. Son histoire 
                                      est marquée par une structuration politique sous l'Empire ottoman, suivie d'un partage entre puissances 
                                      coloniales au XXe siècle, créant des frontières artificielles sources de tensions actuelles.
                                    </p>
                                  </div>

                                  {/* 1. Position géographique */}
                                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                      <MapPin className="h-5 w-5" />
                                      1. Une position géographique au cœur des dynamiques mondiales
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-2">Un carrefour entre trois continents</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• Situé à l'interface de l'Europe, de l'Afrique et de l'Asie, le Moyen-Orient est un espace clé pour les échanges économiques et politiques mondiaux</li>
                                          <li>• Il contrôle des routes commerciales stratégiques, comme la route maritime de l'Asie vers l'Europe</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                        <p className="text-green-800 font-semibold mb-2">L'importance des infrastructures de transport</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Canal de Suez (1869) :</strong> devient un axe essentiel reliant la Méditerranée à l'océan Indien, réduisant le temps de trajet entre l'Europe et l'Asie</li>
                                          <li><strong>Contrôle égyptien :</strong> son rôle géopolitique est renforcé lors de la crise de Suez (1956)</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* 2. Ressources énergétiques */}
                                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                      <Zap className="h-5 w-5" />
                                      2. Des ressources énergétiques majeures qui attirent les convoitises
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-2">Un centre névralgique du pétrole et du gaz</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• Le Moyen-Orient détient <strong>plus de 40 % des réserves mondiales de pétrole</strong> et une part significative des ressources gazières</li>
                                          <li>• Dès la révolution industrielle, les grandes puissances cherchent à sécuriser leur approvisionnement énergétique</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                        <p className="text-yellow-800 font-semibold mb-2">Le partage des ressources entre puissances occidentales</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Accords d'Achnacarry (1928) :</strong> les compagnies pétrolières occidentales (Shell, Exxon, BP) établissent un cartel pour se partager l'exploitation des gisements et éviter la concurrence</li>
                                          <li><strong>Pacte de Quincy (1945) :</strong> accord entre les États-Unis et l'Arabie Saoudite garantissant la protection du régime saoudien en échange d'un accès privilégié au pétrole</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* 3. Interventions extérieures */}
                                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                      <Globe className="h-5 w-5" />
                                      3. Un territoire façonné par les interventions extérieures
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-2">Le démembrement de l'Empire ottoman</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• Avant 1914, la région est sous domination ottomane, garantissant une certaine unité politique</li>
                                          <li>• La défaite ottomane lors de la Première Guerre mondiale entraîne son démantèlement et la redistribution des territoires sous contrôle occidental</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                                        <p className="text-slate-800 font-semibold mb-2">Le partage du Moyen-Orient entre puissances européennes</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Accords Sykes-Picot (1916) :</strong> la France et le Royaume-Uni préparent le découpage de la région avant même la fin du conflit mondial</li>
                                          <li><strong>Traité de Sèvres (1920) :</strong> officialise le partage des territoires, plaçant plusieurs États sous mandat européen</li>
                                          <li><strong>Conférence de San Remo (1920) :</strong> confirme ces mandats sous l'égide de la Société des Nations (SDN)</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-2">Des frontières artificielles sources de tensions</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• La création de nouveaux États sans tenir compte des réalités ethniques et religieuses entraîne des divisions profondes</li>
                                          <li><strong>Pierre Blanc et Jean-Paul Chagnollaud</strong> parlent d'une <em>« invention tragique »</em> du Moyen-Orient (<em>L'invention tragique du Moyen-Orient</em>, 2017), illustrant la fragmentation territoriale et ses conséquences</li>
                                          <li><strong>Exemple :</strong> L'absence d'un État pour les Kurdes, répartis entre quatre pays (Turquie, Iran, Irak, Syrie), est un exemple de ces tensions</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Transition */}
                                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-3">Transition</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                      Le Moyen-Orient est depuis plus d'un siècle un espace de convoitise pour les puissances étrangères, d'abord européennes, 
                                      puis américaines. Sa position stratégique et ses ressources énergétiques majeures ont entraîné son partage entre États 
                                      occidentaux après la Première Guerre mondiale, créant des frontières artificielles et des rivalités persistantes. 
                                      Cette structuration historique pose les bases des ingérences et des tensions qui caractérisent aujourd'hui la région.
                                    </p>
                                  </div>

                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="i-b">
                              <AccordionTrigger className="text-lg font-semibold">
                                B. Le Moyen-Orient : une région marquée par une polycrise
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-6">
                                  
                                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                    <p className="text-gray-800 font-semibold mb-2">Une région où se croisent divers facteurs de tensions</p>
                                    <p className="text-gray-700">
                                      Le Moyen-Orient est une région où se croisent divers facteurs de tensions. Instabilité politique, rivalités 
                                      régionales, conflits armés, mal-développement et dépendance aux ressources naturelles en font un espace où 
                                      les crises s'enchevêtrent. <strong>Dominique Moïsi</strong>, dans <em>La géopolitique de l'émotion</em> (2009), 
                                      souligne que le Moyen-Orient est marqué par un sentiment d'humiliation collective, nourri par des conflits 
                                      récurrents et des ingérences étrangères.
                                    </p>
                                  </div>

                                  {/* A. Instabilité chronique */}
                                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                      <AlertTriangle className="h-5 w-5" />
                                      A. Une instabilité chronique alimentée par des conflits internes et des rivalités régionales
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-2">Une absence de puissance stabilisatrice</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• Contrairement à d'autres régions où une puissance dominante impose un équilibre (ex : États-Unis en Amérique), le Moyen-Orient est fragmenté entre plusieurs acteurs cherchant à asseoir leur influence</li>
                                          <li>• <strong>L'Arabie Saoudite et l'Iran</strong> s'affrontent dans une guerre froide régionale (guerres par procuration en Syrie, au Yémen, au Liban)</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                        <p className="text-yellow-800 font-semibold mb-2">Un territoire morcelé et des revendications territoriales non résolues</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Conflit israélo-palestinien :</strong> demeure un facteur majeur d'instabilité depuis la Nakba de 1948</li>
                                          <li><strong>Question kurde :</strong> répartis entre la Turquie, l'Irak, l'Iran et la Syrie, une source de tensions persistantes</li>
                                          <li><strong>Cas du Yémen :</strong> pays éclaté entre différents groupes armés (Houthis soutenus par l'Iran, gouvernement reconnu soutenu par l'Arabie Saoudite)</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-2">Des guerres civiles qui s'éternisent</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Syrie (depuis 2011) :</strong> la guerre civile oppose le régime de Bachar al-Assad, les rebelles et des groupes djihadistes, avec des interventions extérieures (Russie, Iran, Turquie)</li>
                                          <li><strong>Libye :</strong> après la chute de Kadhafi en 2011, le pays est en proie à une guerre entre factions rivales</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* B. Mal-développement */}
                                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                      <Zap className="h-5 w-5" />
                                      B. Un mal-développement et une économie fragile malgré des ressources majeures
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-2">Un paradoxe économique : des ressources mais un développement limité</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• Malgré la rente pétrolière, de nombreux pays peinent à assurer une croissance durable et inclusive</li>
                                          <li>• <strong>La malédiction des matières premières</strong> (Resource Curse, Richard Auty, 1993) frappe plusieurs États, où les richesses naturelles servent à financer des régimes autoritaires sans générer un développement industriel ou technologique</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-2">Dépendance aux hydrocarbures et diversification difficile</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Arabie Saoudite et monarchies du Golfe :</strong> tentent de diversifier leur économie avec des projets comme Vision 2030 (Mohammed Ben Salmane)</li>
                                          <li><strong>Iran :</strong> souffre des sanctions économiques et peine à se diversifier</li>
                                          <li><strong>Égypte :</strong> dépourvue de grandes ressources énergétiques, est dépendante du tourisme et du canal de Suez</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                                        <p className="text-gray-800 font-semibold mb-2">Des inégalités sociales exacerbées</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Taux de chômage élevé des jeunes :</strong> en Tunisie, en Égypte, au Liban, le chômage dépasse 30 % chez les jeunes diplômés</li>
                                          <li><strong>Disparités urbain/rural :</strong> Dubaï et Riyad sont des vitrines modernes, mais de nombreux pays de la région souffrent de pauvreté et de précarité</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* C. Ingérences étrangères */}
                                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                      <Globe className="h-5 w-5" />
                                      C. Le rôle des ingérences étrangères : stabilisation ou facteur d'instabilité ?
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-2">Un espace convoité par les grandes puissances</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>États-Unis :</strong> intervention en Irak (2003), soutien aux monarchies du Golfe, retrait d'Afghanistan (2021)</li>
                                          <li><strong>Russie :</strong> alliée du régime syrien, présence militaire en Méditerranée (base de Tartous en Syrie)</li>
                                          <li><strong>Chine :</strong> investissements croissants dans les infrastructures et l'énergie (initiative des Nouvelles Routes de la Soie)</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-2">Paradoxe des ingérences</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Intervention en Irak (2003) :</strong> l'intervention occidentale a déstabilisé le pays et favorisé la montée de groupes terroristes comme Daech</li>
                                          <li><strong>Retrait d'Afghanistan (2021) :</strong> le retrait des États-Unis a laissé place aux Talibans, posant la question de la responsabilité des puissances extérieures</li>
                                          <li><strong>Absence d'ingérence :</strong> dans certains conflits (Syrie en 2011, Yémen) a laissé place à un chaos prolongé</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Conclusion partielle */}
                                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-3">Conclusion partielle</h4>
                                    <div className="text-gray-700 leading-relaxed space-y-3">
                                      <p>
                                        Le Moyen-Orient est une région où s'entrelacent conflits, crises économiques et rivalités géopolitiques. 
                                        Le morcellement territorial, la dépendance aux ressources naturelles et les interventions extérieures ont 
                                        empêché l'émergence d'une stabilité durable.
                                      </p>
                                      <p>
                                        Les tentatives d'unification et de coopération ont souvent échoué, et l'absence de puissance hégémonique 
                                        accentue l'instabilité. Cette situation pose la question de l'avenir du Moyen-Orient : une stabilisation 
                                        endogène est-elle possible ou la région restera-t-elle dépendante des équilibres imposés par les puissances extérieures ?
                                      </p>
                                    </div>
                                  </div>

                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="i-c">
                              <AccordionTrigger className="text-lg font-semibold">
                                C. Les ingérences au Moyen-Orient : une région convoitée et instrumentalisée
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-6">
                                  
                                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                    <p className="text-gray-800 font-semibold mb-2">Une région stratégique pour les grandes puissances</p>
                                    <p className="text-gray-700">
                                      Le Moyen-Orient a toujours été une région stratégique pour les grandes puissances, à la fois en raison de sa 
                                      position géographique, de ses ressources naturelles et de ses dynamiques politiques internes. L'histoire de 
                                      la région est marquée par des interventions extérieures successives, d'abord coloniales, puis impérialistes et 
                                      néo-impérialistes, avec une multiplication des acteurs exogènes depuis la fin de la Guerre froide. Aujourd'hui, 
                                      alors que les États-Unis réévaluent leur présence dans la région, la Chine adopte une stratégie d'implantation 
                                      progressive, redéfinissant les rapports de force.
                                    </p>
                                  </div>

                                  {/* A. Région historiquement convoitée */}
                                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                      <MapPin className="h-5 w-5" />
                                      A. Une région historiquement convoitée : l'empreinte des grandes puissances
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-2">Le Moyen-Orient, un espace stratégique du « Grand Jeu »</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• Dès le XIXe siècle, le Moyen-Orient est au cœur de la rivalité entre la Grande-Bretagne et la Russie dans la lutte pour le contrôle des routes vers l'Inde et l'Asie centrale</li>
                                          <li>• <strong>Ressources stratégiques :</strong> le Moyen-Orient devient un espace incontournable avec la découverte du pétrole au début du XXe siècle, renforçant son poids géopolitique</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                        <p className="text-green-800 font-semibold mb-2">L'empreinte coloniale et la recomposition des frontières</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Accords Sykes-Picot (1916)</strong> et <strong>conférence de San Remo (1920)</strong> redessinent la région après la chute de l'Empire ottoman, plaçant plusieurs territoires sous mandat britannique et français</li>
                                          <li>• <strong>Traité de Sèvres (1920)</strong> démantèle l'Empire ottoman et pose les bases des tensions géopolitiques actuelles (question kurde, rivalités territoriales)</li>
                                          <li>• <strong>Pacte de Quincy (1945)</strong> établit un partenariat clé entre les États-Unis et l'Arabie Saoudite, échangeant protection militaire contre accès privilégié aux ressources pétrolières</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-2">Le Moyen-Orient pendant la Guerre froide : une zone de conflits par procuration</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Nationalisation du canal de Suez (1956)</strong> par Nasser : opposition entre logiques impérialistes (France, Royaume-Uni) et nouvelle réalité géopolitique (montée du panarabisme et influence américaine)</li>
                                          <li><strong>Guerres israélo-arabes</strong> (1948, 1956, 1967, 1973) et interventionnisme soviétique et américain dans la région</li>
                                          <li><strong>Guerre Iran-Irak</strong> (1980-1988) : soutien occidental à Saddam Hussein pour contrer la révolution islamique iranienne</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* B. Ingérence toujours actuelle */}
                                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                      <Globe className="h-5 w-5" />
                                      B. Une ingérence toujours actuelle : redéfinition des rapports de force
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-2">La présence persistante des États-Unis et la politique d'intervention</p>
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Trois piliers de la stratégie américaine au Moyen-Orient (Hudson) :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>1. Protection d'Israël</li>
                                              <li>2. Contrôle du pétrole</li>
                                              <li>3. Lutte contre le communisme puis contre le terrorisme</li>
                                            </ul>
                                          </div>
                                          <p className="text-gray-700">
                                            <strong>La doctrine du Wilsonisme botté</strong> (Pierre Hassner) : après 2001, les États-Unis tentent d'imposer un modèle démocratique par la force (Irak, Afghanistan), avec des résultats mitigés.
                                          </p>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                        <p className="text-yellow-800 font-semibold mb-2">Échecs et désengagement progressif :</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Irak (2003) :</strong> guerre qui déstabilise durablement la région, montée de Daech</li>
                                          <li><strong>Afghanistan (2021) :</strong> retrait américain et retour des Talibans</li>
                                          <li><strong>Stratégie du « leading from behind »</strong> sous Obama (Libye, Syrie)</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Émergence de la Chine */}
                                  <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                                    <p className="text-emerald-800 font-semibold mb-2">L'émergence de la Chine : un acteur incontournable mais prudent</p>
                                    
                                    <div className="space-y-3">
                                      <div>
                                        <p className="text-gray-800 font-semibold">Une diplomatie économique et pragmatique</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• <strong>Port de Gwadar (Pakistan) :</strong> accès stratégique pour la Chine sur l'océan Indien</li>
                                          <li>• <strong>Base militaire chinoise à Djibouti :</strong> premier point d'ancrage militaire chinois en Afrique</li>
                                          <li>• <strong>Sommet Chine-Arabie Saoudite</strong> (décembre 2022) : accords économiques majeurs</li>
                                        </ul>
                                      </div>
                                      
                                      <div>
                                        <p className="text-gray-800 font-semibold">Des investissements stratégiques</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• <strong>Pétrole et gaz :</strong> Pékin sécurise ses approvisionnements avec des contrats à long terme avec Riyad et Téhéran</li>
                                          <li>• <strong>Projets de haute technologie :</strong> accords entre la Chine et les pays du Golfe pour des infrastructures numériques et énergétiques</li>
                                        </ul>
                                      </div>
                                      
                                      <div>
                                        <p className="text-gray-800 font-semibold">Un soft power grandissant sans ingérence politique directe</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• La Chine soutient le <strong>consensus de Pékin</strong> (non-ingérence, souveraineté absolue des États)</li>
                                          <li>• <strong>Rapprochement avec l'Iran et Israël :</strong> Pékin évite de prendre parti dans les conflits régionaux</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* C. Conséquences des ingérences */}
                                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                      <AlertTriangle className="h-5 w-5" />
                                      C. Conséquences des ingérences : instabilité chronique et reconfiguration des alliances
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-2">Le paradoxe des interventions étrangères : stabilisation ou chaos ?</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• L'intervention américaine en Irak (2003) a favorisé l'essor de Daech et la radicalisation régionale</li>
                                          <li>• Le retrait américain d'Afghanistan (2021) a laissé un vide exploité par les Talibans</li>
                                          <li>• L'absence d'intervention occidentale en Syrie a permis à la Russie et à l'Iran de renforcer leur influence</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-2">Des alliances mouvantes et des rivalités exacerbées</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li><strong>Accords d'Abraham (2020) :</strong> rapprochement entre Israël et plusieurs pays arabes (Émirats arabes unis, Bahreïn, Soudan, Maroc)</li>
                                          <li><strong>Montée en puissance</strong> de l'axe Iran-Russie-Chine face aux alliances occidentales et sunnites</li>
                                          <li><strong>Arabie Saoudite :</strong> un acteur pivot qui oscille entre les États-Unis et la Chine</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                                        <p className="text-slate-800 font-semibold mb-2">Vers une recomposition géopolitique incertaine</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• Les puissances occidentales en retrait, les acteurs régionaux plus influents</li>
                                          <li>• Montée en puissance des nouvelles alliances (Chine-Monde arabe, Russie-Iran)</li>
                                          <li>• Le Moyen-Orient, toujours une zone clé de la géopolitique mondiale, entre dépendances, ingérences et résistances locales</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Conclusion partielle */}
                                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                                    <h4 className="text-lg font-semibold text-purple-800 mb-3">Conclusion partielle</h4>
                                    <div className="text-gray-700 leading-relaxed space-y-3">
                                      <p>
                                        Le Moyen-Orient reste un espace où les grandes puissances extérieures s'affrontent indirectement, influençant 
                                        durablement la stabilité de la région. Si les États-Unis ont longtemps dominé la scène géopolitique, leur 
                                        désengagement progressif ouvre la voie à de nouveaux acteurs comme la Chine.
                                      </p>
                                      <p>
                                        Cependant, l'absence de puissance hégémonique régionale et les rivalités internes entravent tout projet 
                                        d'unification ou de stabilisation.
                                      </p>
                                      <div className="bg-white p-4 rounded border-l-4 border-purple-400 mt-4">
                                        <p className="text-purple-800 font-semibold">Question prospective :</p>
                                        <p className="text-gray-700 italic">
                                          La région peut-elle sortir de cette logique d'ingérence pour développer un ordre propre, ou restera-t-elle 
                                          un terrain d'affrontement entre puissances rivales ?
                                        </p>
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
                  </AccordionContent>
                </AccordionItem>

                {/* Partie II */}
                <AccordionItem value="partie-2">
                  <AccordionTrigger className="text-xl font-semibold text-indigo-800">
                    II. Les facteurs d'instabilité structurelle au Moyen-Orient
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <Card className="border border-indigo-200">
                        <CardContent className="p-4">
                          <Accordion type="single" collapsible>
                            <AccordionItem value="ii-a">
                              <AccordionTrigger className="text-lg font-semibold">
                                A. Une dépendance énergétique des pays importateurs de pétrole du Moyen-Orient source de tensions
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-6">
                                  
                                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                    <p className="text-gray-800 font-semibold mb-2">Une interdépendance complexe entre producteurs et importateurs</p>
                                    <p className="text-gray-700">
                                      La dépendance mutuelle entre les pays exportateurs (Moyen-Orient, Afrique) et les importateurs 
                                      (États-Unis, Europe, Chine) engendre des stratégies, oscillant entre alliances, rivalités et 
                                      reconfigurations des marchés.
                                    </p>
                                  </div>

                                  {/* A. Dépendance des pays importateurs */}
                                  <div className="bg-white p-5 rounded-lg border border-blue-200">
                                    <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                                      <Zap className="h-5 w-5" />
                                      A. La dépendance des pays importateurs : entre sécurisation des approvisionnements et diversification
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">1. Les États-Unis et la volonté de réduire leur dépendance énergétique au Moyen-Orient</p>
                                        <div className="space-y-2">
                                          <p className="text-gray-700">
                                            <strong>Shale revolution :</strong> indépendance énergétique américaine depuis 2010 grâce à 
                                            l'exploitation du pétrole et du gaz de schiste.
                                          </p>
                                          <p className="text-gray-700">
                                            <strong>Pivot vers l'Asie :</strong> désengagement progressif du Moyen-Orient (Irak, Afghanistan) 
                                            au profit d'une stratégie de containment de la Chine.
                                          </p>
                                          <p className="text-gray-700">
                                            <strong>Contradictions :</strong> si les États-Unis réduisent leur dépendance au pétrole du Golfe, 
                                            ils restent impliqués dans la sécurité régionale (présence militaire en Arabie Saoudite, base 
                                            d'Al Udeid au Qatar).
                                          </p>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                        <p className="text-green-800 font-semibold mb-3">2. L'Europe et la crise de l'approvisionnement énergétique</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Dépendance au gaz russe</strong> remise en question depuis l'invasion de l'Ukraine en 2022</li>
                                          <li>• <strong>Alternative méditerranéenne :</strong> projet EastMed (Israël, Chypre, Grèce) pour diversifier les sources d'énergie</li>
                                          <li>• <strong>Tensions avec la Turquie :</strong> provocations en Méditerranée orientale (Oruç Reis en 2020), Ankara cherchant à étendre sa ZEE pour exploiter les ressources sous-marines</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                        <p className="text-yellow-800 font-semibold mb-3">3. La Chine, premier importateur mondial de pétrole, sécurise ses approvisionnements</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Stratégie des Nouvelles Routes de la Soie (BRI)</strong> pour garantir un accès stable aux hydrocarbures (investissements dans le Golfe et en Afrique)</li>
                                          <li>• <strong>Port de Gwadar (Pakistan) :</strong> corridor stratégique pour éviter le détroit de Malacca</li>
                                          <li>• <strong>Accords stratégiques</strong> avec l'Arabie Saoudite et l'Iran (contrat de 400 milliards USD avec l'Iran en 2021)</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* B. Dépendance des pays exportateurs */}
                                  <div className="bg-white p-5 rounded-lg border border-blue-200">
                                    <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                                      <Globe className="h-5 w-5" />
                                      B. La dépendance des pays exportateurs : rente énergétique et instabilité interne
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">1. L'Iran : un "Rogue State" sous pression économique et géopolitique</p>
                                        <div className="space-y-2">
                                          <p className="text-gray-700">
                                            <strong>Ressources :</strong> 2e réserves mondiales de gaz, 4e de pétrole.
                                          </p>
                                          <p className="text-gray-700">
                                            <strong>Embargo occidental et sanctions économiques :</strong> pression maximale des États-Unis sur le régime iranien.
                                          </p>
                                          <p className="text-gray-700">
                                            <strong>Stratégie de contournement :</strong> exportations vers la Chine, renforcement de l'axe Iran-Russie-Chine.
                                          </p>
                                          <p className="text-gray-700">
                                            <strong>Instabilité interne :</strong> contestations sociales, affaiblissement économique malgré la rente pétrolière.
                                          </p>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                        <p className="text-green-800 font-semibold mb-3">2. L'Arabie Saoudite et la diversification économique face à la fin du pétrole</p>
                                        <div className="space-y-2">
                                          <p className="text-gray-700">
                                            <strong>Vision 2030</strong> de Mohammed Ben Salmane : transformation du modèle économique saoudien.
                                          </p>
                                          <p className="text-gray-700">
                                            <strong>Investissements</strong> dans les nouvelles technologies et les énergies renouvelables.
                                          </p>
                                          <div>
                                            <p className="text-gray-800 font-semibold">Relations ambivalentes avec les États-Unis et la Chine :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• Visite de Xi Jinping à Riyad (2022) : accords énergétiques majeurs</li>
                                              <li>• Refus d'augmenter la production de pétrole malgré les pressions américaines</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                        <p className="text-purple-800 font-semibold mb-3">3. L'Afrique : une dépendance économique aux matières premières</p>
                                        <div className="space-y-2">
                                          <p className="text-gray-700">
                                            <strong>L'Algérie</strong>, fournisseur stratégique de l'Europe : opportunité post-Ukraine pour diversifier les importations de gaz.
                                          </p>
                                          <div>
                                            <p className="text-gray-800 font-semibold">Le Sénégal et le pétrole : entre dépendance et volonté de diversification</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• Forte dépendance aux importations alimentaires et énergétiques</li>
                                              <li>• Relations stratégiques avec la Russie et la Chine</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* C. Instabilité géopolitique */}
                                  <div className="bg-white p-5 rounded-lg border border-blue-200">
                                    <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                                      <AlertTriangle className="h-5 w-5" />
                                      C. Une instabilité géopolitique exacerbée par les tensions énergétiques
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-3">1. L'exportation des tensions régionales : de l'énergie à la guerre</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Le Golfe persique, point chaud du pétrole mondial :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Détroit d'Ormuz :</strong> 30 % du pétrole mondial y transite</li>
                                              <li>• <strong>Attaques sur les infrastructures saoudiennes</strong> par les Houthis du Yémen (2019, Aramco)</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Méditerranée orientale : un nouveau front énergétique</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Gisements de Tamar, Leviathan, Zohr, Aphrodite :</strong> Israël, Égypte et Chypre face à la Turquie</li>
                                              <li>• <strong>Projet EastMed et opposition turque</strong> (contestation des frontières maritimes)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">2. Les stratégies d'adaptation des États face à cette double dépendance</p>
                                        
                                        <div className="space-y-3">
                                          <p className="text-gray-700">
                                            <strong>Projet de "politique des tubes"</strong> (Philippe Rekacewicz, 2011), mettant en évidence 
                                            le maillage des pipelines et son impact géopolitique.
                                          </p>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">L'essor des énergies renouvelables comme réponse partielle :</p>
                                            <ul className="text-gray-700 ml-4 space-y-2">
                                              <li>• <strong>Arabie Saoudite et le solaire</strong> (Neom, The Line)</li>
                                              <li>• <strong>Hydrogène vert :</strong> un potentiel pour remplacer les énergies fossiles</li>
                                              <li>• <strong>Investissements africains</strong> (Sénégal, Maroc) pour réduire la dépendance aux hydrocarbures</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Conclusion partielle */}
                                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Conclusion partielle</h4>
                                    <div className="text-gray-700 leading-relaxed space-y-3">
                                      <p>
                                        La dépendance énergétique est une arme à double tranchant, créant une interdépendance complexe entre 
                                        producteurs et importateurs. Si certains pays cherchent à diversifier leurs sources ou à investir 
                                        dans les renouvelables, la transition énergétique reste un enjeu majeur, influençant les équilibres 
                                        géopolitiques du XXIe siècle.
                                      </p>
                                      <div className="bg-white p-4 rounded border-l-4 border-blue-400 mt-4">
                                        <p className="text-blue-800 font-semibold">Question prospective :</p>
                                        <p className="text-gray-700 italic">
                                          Le Moyen-Orient et l'Afrique pourront-ils réduire leur dépendance à la rente énergétique pour 
                                          garantir une stabilité durable, ou resteront-ils otages des fluctuations des prix du pétrole et du gaz ?
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="ii-b">
                              <AccordionTrigger className="text-lg font-semibold">
                                B. Power Diffusion au Moyen-Orient : Une Complexification des Enjeux Géopolitiques
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-6">
                                  
                                  <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                                    <p className="text-gray-800 font-semibold mb-2">Une dispersion croissante du pouvoir</p>
                                    <p className="text-gray-700">
                                      La région du Moyen-Orient est marquée par une <strong>"power diffusion"</strong> (Joseph Nye, <em>Future of Power</em>, 2011), 
                                      illustrant la dispersion croissante du pouvoir entre divers acteurs sans qu'aucune hégémonie stable ne se dégage. 
                                      Contrairement à une simple "power transition", où une puissance prend le relais d'une autre, cette dispersion 
                                      entraîne un morcellement des influences et des logiques conflictuelles.
                                    </p>
                                  </div>

                                  {/* I. Prolifération des acteurs */}
                                  <div className="bg-white p-5 rounded-lg border border-indigo-200">
                                    <h4 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                                      <Users className="h-5 w-5" />
                                      I. Une Prolifération des Acteurs Impactant les Équilibres Régionaux
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">A. Une Multiplication des Acteurs Externes</p>
                                        <p className="text-gray-700 mb-3">
                                          La complexité de la géopolitique au Moyen-Orient réside dans l'implication croissante d'acteurs exogènes 
                                          traditionnels et non-traditionnels :
                                        </p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Acteurs traditionnels :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>États-Unis :</strong> historiquement impliqués via le Pacte de Quincy (1945), puis via leurs interventions militaires (Irak 2003, Syrie 2014-2019)</li>
                                              <li>• <strong>Russie :</strong> retour en force depuis 2015 avec le soutien au régime syrien de Bachar el-Assad</li>
                                              <li>• <strong>Union Européenne :</strong> présente à travers des accords économiques et des interventions diplomatiques (Accords de Vienne sur le nucléaire iranien, 2015)</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Nouveaux acteurs :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Chine :</strong> influence économique grandissante via les Nouvelles Routes de la Soie et la coopération énergétique avec les monarchies du Golfe</li>
                                              <li>• <strong>Groupes paramilitaires et mercenaires :</strong> Wagner en Syrie, soutien indirect à Bachar el-Assad et contrebalancement de l'influence occidentale</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                        <p className="text-green-800 font-semibold mb-3">B. Une Multiplication des Acteurs Internes</p>
                                        <p className="text-gray-700 mb-3">
                                          La fragmentation du pouvoir se traduit également par une prolifération d'acteurs internes traditionnels et non-traditionnels :
                                        </p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Acteurs étatiques traditionnels :</p>
                                            <p className="text-gray-700 ml-4">
                                              Turquie, Iran, Arabie Saoudite, Israël, Égypte, qui cherchent à projeter leur puissance régionale.
                                            </p>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Acteurs non-étatiques :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Milices et groupes terroristes :</strong> Hezbollah (Liban), AQPA (Al-Qaïda dans la Péninsule Arabique, Yémen), État Islamique (Irak-Syrie)</li>
                                              <li>• <strong>Entités politiques non reconnues :</strong> Le Rojava kurde en Syrie, contesté par la Turquie</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* II. Power Diffusion et Complexification des Conflits */}
                                  <div className="bg-white p-5 rounded-lg border border-indigo-200">
                                    <h4 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                                      <AlertTriangle className="h-5 w-5" />
                                      II. Power Diffusion et Complexification des Conflits : L'Exemple Syrien
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">A. Une Guerre Civile Inextinguible</p>
                                        <p className="text-gray-700 mb-3">
                                          Depuis 2011, la Syrie est le théâtre d'un conflit où se superposent luttes internes et interventions étrangères :
                                        </p>
                                        
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>État central syrien (Bachar el-Assad) :</strong> soutenu par la Russie et l'Iran</li>
                                          <li>• <strong>Opposition rebelle :</strong> soutenue par la Turquie et, à certaines périodes, par les États-Unis et les monarchies du Golfe</li>
                                          <li>• <strong>Kurdes (PYD, YPG, PKK) :</strong> alliés ponctuels des Occidentaux contre Daech, mais menacés par la Turquie</li>
                                          <li>• <strong>État Islamique :</strong> acteur déterritorialisé, actif dans la région malgré la chute de son "califat" en 2019</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-3">B. Une Guerre d'Usure et un Statu Quo</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Bilan humain et migratoire :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• 1,6 million de morts depuis 2011</li>
                                              <li>• 13 millions de déplacés internes et externes</li>
                                              <li>• 7 millions de Syriens ont fui leur pays</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Équilibre fragile et interventions étrangères persistantes :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Opération "Griffe Épée"</strong> (Turquie) contre les forces kurdes</li>
                                              <li>• <strong>Présence de Wagner</strong>, soutien russe aux forces d'Assad</li>
                                              <li>• <strong>Retrait partiel des États-Unis</strong> sous Trump, laissant le champ libre à la Russie et à l'Iran</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                                        <p className="text-gray-800 font-semibold mb-3">C. Un Piège de Kindleberger : Pas d'Hégémonie Stabilisatrice</p>
                                        <p className="text-gray-700 mb-3">
                                          Le piège de Kindleberger explique qu'en l'absence d'une puissance hégémonique capable de stabiliser un ordre, 
                                          le système s'effondre dans le chaos. Au Moyen-Orient :
                                        </p>
                                        
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Les États-Unis se désengagent</strong>, réduisant leur influence militaire mais conservant une présence économique et stratégique</li>
                                          <li>• <strong>La Russie et la Chine</strong> comblent partiellement le vide, mais sans réelle volonté de stabilisation durable</li>
                                          <li>• <strong>Les acteurs locaux</strong> sont trop fragmentés pour imposer un ordre régional, laissant place à une instabilité structurelle</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* III. Autres Théâtres de Power Diffusion */}
                                  <div className="bg-white p-5 rounded-lg border border-indigo-200">
                                    <h4 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                                      <MapPin className="h-5 w-5" />
                                      III. Autres Théâtres de Power Diffusion : Yémen et Libye
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                        <p className="text-yellow-800 font-semibold mb-3">A. Le Yémen : Une Guerre par Procuration</p>
                                        
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Opposition</strong> entre Houthistes (soutenus par l'Iran) et gouvernement yéménite (soutenu par l'Arabie Saoudite)</li>
                                          <li>• <strong>Stratégie de la tension autour de Bab el-Mandeb :</strong> un point stratégique du commerce mondial</li>
                                          <li>• <strong>Unification en 1990</strong>, mais éclatement post-Guerre Froide : retour à une fragmentation Nord-Sud</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                        <p className="text-purple-800 font-semibold mb-3">B. La Libye : Un État Failli et un Nouvel Enjeu Géopolitique</p>
                                        
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Effondrement de Kadhafi (2011)</strong> → guerre civile prolongée</li>
                                          <li>• <strong>Présence de Wagner</strong>, soutien de la Russie à Khalifa Haftar</li>
                                          <li>• <strong>Ingérences turques et européennes</strong> (France, Italie)</li>
                                          <li>• <strong>Fractionnement des territoires</strong> et prolifération de milices autonomes</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Conclusion */}
                                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                                    <h4 className="text-lg font-semibold text-indigo-800 mb-3">Conclusion</h4>
                                    <div className="text-gray-700 leading-relaxed space-y-3">
                                      <p>
                                        La power diffusion au Moyen-Orient illustre l'incapacité de tout acteur, interne ou externe, à imposer 
                                        une hégémonie stabilisatrice. Loin d'un simple basculement vers l'Asie, le Moyen-Orient reste une zone 
                                        de compétition géopolitique où prolifèrent États, milices et puissances exogènes.
                                      </p>
                                      <p>
                                        Le chaos syrien, la guerre yéménite et l'effondrement libyen témoignent d'un système multipolaire 
                                        incontrôlé, renforçant la fragmentation de la région.
                                      </p>
                                    </div>
                                  </div>

                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="ii-c">
                              <AccordionTrigger className="text-lg font-semibold">
                                C. La Guerre Économique au Moyen-Orient : Un Levier de Puissance et de Conflits
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-6">

                                  {/* A. Région Stratégiquement Dépendante */}
                                  <div className="bg-white p-5 rounded-lg border border-red-200">
                                    <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                                      <Zap className="h-5 w-5" />
                                      A. Une Région Stratégiquement Dépendante des Matières Premières
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-3">Double dépendance énergétique :</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Pays importateurs :</strong> Dépendance au pétrole et au gaz du Moyen-Orient (exemple des États-Unis avant le boom du pétrole de schiste)</li>
                                          <li>• <strong>Pays exportateurs :</strong> Dépendance aux revenus des hydrocarbures (exemple de l'Arabie Saoudite et de l'Iran)</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">Fluctuations des prix du pétrole</p>
                                        <p className="text-gray-700">
                                          Un facteur de crise politique et économique dans les États rentiers.
                                        </p>
                                      </div>
                                      
                                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                        <p className="text-yellow-800 font-semibold mb-3">Exemple de l'Iran :</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• Polycrise interne liée aux sanctions économiques</li>
                                          <li>• Incapacité à diversifier son économie</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* B. Sanctions Économiques */}
                                  <div className="bg-white p-5 rounded-lg border border-red-200">
                                    <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                                      <AlertTriangle className="h-5 w-5" />
                                      B. Les Sanctions Économiques : Une Arme de Guerre Économique
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">Loi Amato-Kennedy (1996)</p>
                                        <p className="text-gray-700">
                                          Sanctions contre l'Iran et la Libye, stratégie d'asphyxie économique.
                                        </p>
                                      </div>
                                      
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">Extraterritorialité du droit américain :</p>
                                        <div className="space-y-2">
                                          <p className="text-gray-800 font-semibold">Exemples :</p>
                                          <ul className="text-gray-700 ml-4 space-y-1">
                                            <li>• <strong>Sanctions contre BNP Paribas (2014) :</strong> 8,9 milliards de dollars d'amendes pour transactions avec l'Iran</li>
                                            <li>• <strong>Pression sur les entreprises européennes</strong> pour limiter les investissements au Moyen-Orient</li>
                                          </ul>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                                        <p className="text-gray-800 font-semibold mb-3">Impact des sanctions :</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• Inflation, chômage, mécontentement populaire, révoltes internes (Iran, 2022)</li>
                                          <li>• Asphyxie des États visés, mais renforcement des régimes autoritaires</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* C. Géopolitique des Infrastructures */}
                                  <div className="bg-white p-5 rounded-lg border border-red-200">
                                    <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                                      <MapPin className="h-5 w-5" />
                                      C. Géopolitique des Infrastructures et Contrôle des Routes Commerciales
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">Hydrocarbures et contrôle des routes stratégiques :</p>
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Canal de Suez :</strong> Essentiel pour le commerce mondial</li>
                                          <li>• <strong>Détroit d'Ormuz :</strong> 30% du trafic pétrolier mondial, enjeu majeur entre l'Iran et les puissances occidentales</li>
                                          <li>• <strong>Détroit de Bab el-Mandeb :</strong> Axe clé entre la mer Rouge et l'océan Indien</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                        <p className="text-green-800 font-semibold mb-3">Nouvelles routes de la soie chinoises :</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• <strong>Port de Gwadar (Pakistan)</strong> et influence en Iran (port de Chabahar)</li>
                                          <li>• Développement d'infrastructures énergétiques pour contourner l'influence occidentale</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* D. Reconfiguration des Alliances Économiques */}
                                  <div className="bg-white p-5 rounded-lg border border-red-200">
                                    <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                                      <Globe className="h-5 w-5" />
                                      D. Vers une Reconfiguration des Alliances Économiques ?
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                                        <p className="text-emerald-800 font-semibold mb-3">Arabie Saoudite et diversification économique (Vision 2030) :</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• Investissements dans les énergies renouvelables</li>
                                          <li>• Partenariat avec la Chine et la Russie pour réduire la dépendance aux États-Unis</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                        <p className="text-purple-800 font-semibold mb-3">Les nouveaux pôles économiques du Golfe :</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• <strong>Dubaï, Abu Dhabi, Doha :</strong> Hubs financiers et commerciaux</li>
                                          <li>• <strong>Fonds souverains (QIA, KIA, PIF) :</strong> Moteurs de la diversification économique</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-3">Guerre économique entre puissances régionales :</p>
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• Rivalité Arabie Saoudite/Iran autour des hydrocarbures</li>
                                          <li>• Concurrence pour le leadership économique régional : Émirats vs Arabie Saoudite</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Conclusion */}
                                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                                    <h4 className="text-lg font-semibold text-red-800 mb-3">Conclusion : Une Région Clé des Rivalités Géopolitiques et Géoéconomiques</h4>
                                    <div className="text-gray-700 leading-relaxed space-y-3">
                                      <p>
                                        Le Moyen-Orient reste un espace structuré par la rente pétrolière, mais en mutation face aux nouvelles 
                                        dynamiques énergétiques et technologiques.
                                      </p>
                                      <p>
                                        Les tensions économiques se doublent de tensions géopolitiques, où sanctions, infrastructures et alliances 
                                        reconfigurent le jeu des puissances.
                                      </p>
                                      <p>
                                        Les acteurs régionaux cherchent à diversifier leur modèle économique, mais restent pris dans les logiques 
                                        de dépendance et de rivalité.
                                      </p>
                                    </div>
                                  </div>

                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Partie III */}
                <AccordionItem value="partie-3">
                  <AccordionTrigger className="text-xl font-semibold text-indigo-800">
                    III. Entre mal-développement et stratégies de diversification : quelles perspectives ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <Card className="border border-indigo-200">
                        <CardContent className="p-4">
                          <Accordion type="single" collapsible>
                            <AccordionItem value="iii-a">
                              <AccordionTrigger className="text-lg font-semibold">
                                A. Une émergence relative et inégalitaire au Moyen-Orient
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-6">
                                  
                                  <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                                    <p className="text-gray-800 font-semibold mb-2">Une région marquée par une forte hétérogénéité de développement</p>
                                    <p className="text-gray-700">
                                      Le Moyen-Orient est une région marquée par une forte hétérogénéité en matière de développement. Si certains États 
                                      connaissent une forte émergence économique et une diversification progressive de leur économie, d'autres restent 
                                      englués dans des crises économiques, politiques et sociales. Cette partie vise à illustrer cette dualité entre 
                                      les pôles d'émergence et les inégalités structurelles qui persistent au sein de la région.
                                    </p>
                                  </div>

                                  {/* A. Écarts de développement */}
                                  <div className="bg-white p-5 rounded-lg border border-slate-200">
                                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                                      <BarChart className="h-5 w-5" />
                                      A. Des écarts de développement considérables entre les pays et au sein des sociétés
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">Un contraste entre pays riches et pays pauvres</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">L'Indice de Développement Humain (IDH) au Moyen-Orient illustre ces écarts :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Israël (0,91, 18e mondial)</strong> : seul pays du MO dans l'OCDE</li>
                                              <li>• <strong>Qatar (0,85, 45e) et EAU (0,86, 31e)</strong> : des pétromonarchies qui investissent dans la diversification</li>
                                              <li>• <strong>Yémen (0,48, 153e)</strong> : en guerre et marqué par une pauvreté extrême</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Des situations économiques opposées :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Les pétromonarchies</strong> investissent dans la transition économique (Vision 2030 en AS, Horizon 2030 au Qatar)</li>
                                              <li>• <strong>Israël et les Émirats Arabes Unis</strong> ont su diversifier leur économie en se tournant vers les nouvelles technologies</li>
                                              <li>• À l'inverse, <strong>l'Algérie, l'Iran ou l'Irak</strong> restent piégés dans la malédiction des matières premières</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">Les inégalités à l'intérieur des États</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Inégalités socio-économiques :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Coefficient de Gini élevé :</strong> Iran (42 en 2020)</li>
                                              <li>• <strong>70% de la population des Émirats et 86% du Qatar</strong> sont des travailleurs étrangers précaires</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Inégalités de genre :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Yémen (162e sur 189</strong> au classement de l'égalité des sexes)</li>
                                              <li>• <strong>Kafala :</strong> système qui réduit les travailleurs immigrés à une main-d'œuvre exploitée, souvent assimilé à une forme d'esclavage moderne</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* B. Stratégies de diversification économique */}
                                  <div className="bg-white p-5 rounded-lg border border-slate-200">
                                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                                      <Globe className="h-5 w-5" />
                                      B. Les stratégies de diversification économique : des succès et des limites
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                        <p className="text-green-800 font-semibold mb-3">Des pétromonarchies qui cherchent à sortir de la rente pétrolière</p>
                                        <p className="text-gray-700 mb-3">
                                          <strong>Caroline Piquet</strong>, <em>Les pays du Golfe, de la perle à l'économie de la connaissance</em> :
                                        </p>
                                        
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• <strong>Développement du secteur tertiaire</strong> (tourisme, finance, innovation)</li>
                                          <li>• <strong>Investissements massifs dans la culture</strong> (ex : Louvre Abou Dhabi)</li>
                                          <li>• <strong>Happening sportif</strong> avec la Coupe du monde 2022 au Qatar</li>
                                          <li>• <strong>Qatar Investment Authority (QIA) :</strong> investissements mondiaux</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">Dubaï, un modèle de diversification réussi</p>
                                        <p className="text-gray-700 mb-3">
                                          (Mike Davis, <em>Le stade Dubaï du capitalisme</em>, 2007) :
                                        </p>
                                        
                                        <ul className="text-gray-700 space-y-1">
                                          <li>• <strong>DP World, Emirates</strong> : hubs logistiques, industrie financière</li>
                                          <li>• <strong>Migration de talents</strong> et traders internationaux</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">Les revers de la diversification économique</p>
                                        
                                        <div className="space-y-3">
                                          <p className="text-gray-700">
                                            <strong>Des conditions de travail déplorables :</strong> 6500 morts liés aux chantiers de la Coupe du monde.
                                          </p>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Dépendance persistante aux hydrocarbures :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Qatar :</strong> exploitation du North Field/South Pars partagé avec l'Iran</li>
                                              <li>• <strong>Arabie Saoudite :</strong> diversification freinée par la dépendance au pétrole</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Défis environnementaux et climatiques :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• Désertification, épuisement des ressources en eau</li>
                                              <li>• Pollution et surconsommation énergétique des villes nouvelles</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* C. États faillis et en crise */}
                                  <div className="bg-white p-5 rounded-lg border border-slate-200">
                                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                                      <AlertTriangle className="h-5 w-5" />
                                      C. Des États faillis et en crise : l'envers de l'émergence
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-3">L'Iran : une puissance en crise</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Échec de la diversification et crise économique :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Inflation à 40%</strong> en 2021</li>
                                              <li>• <strong>Accords de Vienne</strong> au point mort</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Répression des libertés fondamentales :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Durcissement du régime</strong> sous Raïssi</li>
                                              <li>• <strong>Manifestations</strong> contre la police des mœurs</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">Les États faillis : Syrie, Yémen, Libye</p>
                                        
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Syrie :</strong> Guerre civile inextinguible, économie détruite</li>
                                          <li>• <strong>Yémen :</strong> Catastrophe humanitaire, 80% de la population en insécurité alimentaire</li>
                                          <li>• <strong>Libye :</strong> État morcelé, absence d'autorité centrale</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Conclusion */}
                                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg border border-slate-200">
                                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Conclusion : Une émergence sélective et fragile</h4>
                                    <div className="text-gray-700 leading-relaxed space-y-3">
                                      <p>
                                        Une modernisation économique visible mais limitée à quelques pôles (Golfe, Israël).
                                      </p>
                                      <p>
                                        Des inégalités persistantes à toutes les échelles (pays développés vs États en guerre, 
                                        travailleurs immigrés exploités).
                                      </p>
                                      <p>
                                        Des stratégies de diversification incomplètes et un modèle économique encore largement 
                                        dépendant des hydrocarbures.
                                      </p>
                                    </div>
                                  </div>

                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="iii-b">
                              <AccordionTrigger className="text-lg font-semibold">
                                B. Un retrait progressif des puissances occidentales et une recomposition de l'ordre régional
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-6">
                                  
                                  <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                                    <p className="text-gray-800 font-semibold mb-2">Un rééquilibrage géopolitique majeur</p>
                                    <p className="text-gray-700">
                                      Le Moyen-Orient connaît un rééquilibrage géopolitique majeur, marqué par le désengagement progressif des États-Unis 
                                      et des puissances occidentales, laissant place à des acteurs régionaux plus influents et à une montée en puissance 
                                      des puissances extra-régionales comme la Chine et la Russie. L'absence d'un hégémon régional stable favorise une 
                                      fragmentation des alliances et une multiplication des conflits locaux.
                                    </p>
                                  </div>

                                  {/* A. Désengagement progressif */}
                                  <div className="bg-white p-5 rounded-lg border border-slate-200">
                                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                                      <Users className="h-5 w-5" />
                                      A. Un désengagement progressif des États-Unis et des puissances occidentales
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">1. Un retrait motivé par une redéfinition des priorités stratégiques américaines</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Vision stratégique et pivot géopolitique :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Brzezinski et l'arc de crise :</strong> vision stratégique des États-Unis sur la zone</li>
                                              <li>• <strong>Pivot vers l'Asie sous Obama :</strong> volonté de recentrer les ressources sur la compétition avec la Chine</li>
                                              <li>• <strong>Wilsonisme botté</strong> (Pierre Hassner) : interventionnisme post-11 septembre (Afghanistan 2001, Irak 2003) qui a entraîné un coût humain et financier énorme</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Fatigue des guerres :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>1 000 milliards de dollars</strong> dépensés en Afghanistan</li>
                                              <li>• <strong>Retrait d'Irak en 2011</strong>, puis d'Afghanistan en 2021</li>
                                              <li>• <strong>Désengagement partiel</strong> en Syrie et en Libye</li>
                                              <li>• <strong>Les Européens suivent les États-Unis :</strong> retrait des troupes françaises et allemandes d'Afghanistan</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                                        <p className="text-gray-800 font-semibold mb-3">2. Une région sans maître ?</p>
                                        
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Le Moyen-Orient comme "Las Vegas des relations internationales"</strong> (Serge Sur) : absence de cadre juridique stable et non-respect du droit international</li>
                                          <li>• <strong>Dominique Moïsi</strong> parle d'"une région sans maître", où les grandes puissances peinent à s'imposer durablement</li>
                                          <li>• <strong>Un vide géopolitique</strong> qui ouvre la voie à de nouveaux rapports de force régionaux</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* B. Recomposition de l'ordre régional */}
                                  <div className="bg-white p-5 rounded-lg border border-slate-200">
                                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                                      <Globe className="h-5 w-5" />
                                      B. Une recomposition de l'ordre régional : vers de nouveaux leaderships ?
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">1. Un basculement du leadership régional</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">La chute des anciens leaders régionaux :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>L'Égypte</strong> marginalisée après la chute de Moubarak (2011)</li>
                                              <li>• <strong>La Syrie</strong> en guerre civile</li>
                                              <li>• <strong>L'Irak</strong> en décomposition après l'intervention américaine</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">De nouvelles puissances régionales émergent :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Iran :</strong> expansionnisme régional (Syrie, Liban, Irak, Yémen)</li>
                                              <li>• <strong>Arabie Saoudite :</strong> Mohammed Ben Salmane veut s'imposer comme leader du Golfe et du monde sunnite</li>
                                              <li>• <strong>Turquie :</strong> retour du néo-ottomanisme avec Erdogan</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                        <p className="text-green-800 font-semibold mb-3">2. Des alliances qui se redessinent</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">La normalisation avec Israël :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Accords d'Abraham (2020) :</strong> Émirats arabes unis, Bahreïn, Maroc, Soudan reconnaissent Israël</li>
                                              <li>• <strong>Un axe anti-Iran</strong> se met en place : rapprochement stratégique entre Israël et les pétromonarchies</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Un basculement du regard vers l'Asie :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Chine-Arabie Saoudite (2022) :</strong> visite de Xi Jinping à Riyad, accords pour 30 milliards de dollars</li>
                                              <li>• <strong>Diversification des partenariats</strong> des pays du Golfe (BRI, projets 2030, énergie, tech)</li>
                                              <li>• <strong>Émergence d'un bloc anti-occidental</strong> Chine-Iran-Russie</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* C. Émergence de nouveaux acteurs régionaux */}
                                  <div className="bg-white p-5 rounded-lg border border-slate-200">
                                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                                      <MapPin className="h-5 w-5" />
                                      C. L'émergence de nouveaux acteurs régionaux et le début d'un ordre moyen-oriental multipolaire
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                        <p className="text-purple-800 font-semibold mb-3">1. Une montée en puissance des acteurs régionaux</p>
                                        
                                        <ul className="text-gray-700 space-y-2">
                                          <li>• <strong>Iran :</strong> acteur clé, détenant la 2e réserve mondiale de gaz, soutien aux milices chiites (Hezbollah, Houthis, milices irakiennes)</li>
                                          <li>• <strong>Arabie Saoudite :</strong> modernisation économique (Vision 2030), renforcement militaire, rapprochement avec Israël</li>
                                          <li>• <strong>Turquie :</strong> puissance néo-ottomane, intervention en Libye, Syrie, tensions en Méditerranée orientale</li>
                                        </ul>
                                      </div>
                                      
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">2. La Turquie, un acteur de plus en plus incontournable</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Concepts clés :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Mavi Vatan (patrie bleue) :</strong> ambition turque de contrôle maritime en Méditerranée</li>
                                              <li>• <strong>Néo-ottomanisme :</strong> influence culturelle et politique en Afrique du Nord et dans les Balkans</li>
                                              <li>• <strong>Politique multidirectionnelle :</strong> dialogue avec la Russie, l'Occident et le monde musulman</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Tensions régionales :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Chypre et la Méditerranée orientale :</strong> exploitation du gaz contestée par la Grèce</li>
                                              <li>• <strong>Conflits avec la France :</strong> boycott des produits français en 2020 après les caricatures de Charlie Hebdo</li>
                                              <li>• <strong>Soutien aux Frères musulmans :</strong> tensions avec l'Arabie Saoudite et l'Égypte</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                                        <p className="text-emerald-800 font-semibold mb-3">3. Une multipolarité naissante avec de nouvelles coopérations</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Exemple : Forum du Néguev (mars 2022)</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Rencontre</strong> entre Israël, Bahreïn, Émirats, Maroc, Égypte et les États-Unis pour une nouvelle architecture sécuritaire régionale</li>
                                              <li>• <strong>Objectif :</strong> contenir l'influence de l'Iran et favoriser la coopération économique</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Un nouveau jeu d'alliances se dessine :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Turquie-Qatar</strong> vs <strong>Arabie Saoudite-Égypte</strong></li>
                                              <li>• <strong>Iran et ses alliés chiites</strong> vs <strong>bloc sunnite pro-occidental</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Conclusion */}
                                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg border border-slate-200">
                                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Conclusion : Un Moyen-Orient en transition, sans stabilité durable</h4>
                                    <div className="text-gray-700 leading-relaxed space-y-3">
                                      <p>
                                        Les États-Unis et l'Europe se retirent progressivement, laissant place à une recomposition des forces régionales.
                                      </p>
                                      <p>
                                        Les puissances régionales montent en puissance mais sans véritable leadership hégémonique.
                                      </p>
                                      <p>
                                        L'avenir du Moyen-Orient dépendra de la capacité de ces nouveaux acteurs à structurer un ordre régional viable, 
                                        ou à sombrer dans une fragmentation accrue.
                                      </p>
                                    </div>
                                  </div>

                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="iii-c">
                              <AccordionTrigger className="text-lg font-semibold">
                                C. Les nouveaux défis du Moyen-Orient : écologie, ressources et stratégies des États
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-6">
                                  
                                  <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                                    <p className="text-gray-800 font-semibold mb-2">Une transformation profonde face aux nouveaux enjeux</p>
                                    <p className="text-gray-700">
                                      Le Moyen-Orient est confronté à une transformation profonde, dictée par des enjeux environnementaux, des mutations 
                                      économiques et des stratégies d'adaptation aux crises à venir. Si la région a historiquement été façonnée par ses 
                                      ressources naturelles et les rivalités géopolitiques, elle doit aujourd'hui faire face à des contraintes climatiques 
                                      et hydriques majeures, tout en préparant une diversification de ses économies pour s'affranchir d'une dépendance 
                                      excessive aux hydrocarbures.
                                    </p>
                                  </div>

                                  {/* A. Vulnérabilité climatique */}
                                  <div className="bg-white p-5 rounded-lg border border-green-200">
                                    <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                                      <Thermometer className="h-5 w-5" />
                                      A. Un Moyen-Orient vulnérable face au réchauffement climatique
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                        <p className="text-red-800 font-semibold mb-3">1. Une des régions les plus exposées au changement climatique</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Rapport de l'Institut Max Planck (2020) :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>D'ici 2100 :</strong> températures de 50°C le jour et 30°C la nuit</li>
                                              <li>• <strong>Réchauffement de 3,5°C</strong>, rendant certaines zones inhabitables</li>
                                              <li>• <strong>L'Algérie, l'Égypte, l'Arabie Saoudite et la Turquie</strong> parmi les pays les plus touchés</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Problème du stress hydrique :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Moins de 7% de la population mondiale</strong> pour seulement 1% des réserves d'eau douce</li>
                                              <li>• <strong>Intensification des conflits pour l'eau</strong>, notamment autour du Nil, du Tigre et de l'Euphrate</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">2. S'adapter au changement climatique : des projets d'adaptation ambitieux</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Wedian, la nouvelle capitale de l'Égypte :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Déplacement du Caire</strong> vers une zone désertique pour décongestionner la ville et mieux gérer les ressources</li>
                                              <li>• <strong>Réduction des risques</strong> liés à l'élévation des températures et à la pollution</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Projets d'agriculture durable :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>New Valley Project</strong> en Égypte pour étendre les terres cultivables</li>
                                              <li>• <strong>Initiatives de désalinisation</strong> de l'eau pour réduire la dépendance aux ressources naturelles</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Gestion de l'eau et conflits hydriques :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Barrage de la Renaissance</strong> en Éthiopie, qui impacte directement l'accès à l'eau de l'Égypte et du Soudan</li>
                                              <li>• <strong>Tensions croissantes</strong> entre la Turquie, la Syrie et l'Irak sur l'utilisation des fleuves Tigre et Euphrate</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* B. Économies en quête de diversification */}
                                  <div className="bg-white p-5 rounded-lg border border-green-200">
                                    <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                                      <Zap className="h-5 w-5" />
                                      B. Des économies dépendantes des ressources fossiles en quête de diversification
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <p className="text-orange-800 font-semibold mb-3">1. La transition énergétique : entre ambition et dépendance persistante</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Une dépendance structurelle aux hydrocarbures :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Près de 70% du PIB</strong> des pays du Golfe provient encore du pétrole et du gaz</li>
                                              <li>• <strong>L'Arabie Saoudite et l'Iran</strong> parmi les premiers producteurs mondiaux</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Des plans de diversification ambitieux :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Vision 2030 (Arabie Saoudite) :</strong> investissement massif dans le tourisme, les technologies et les énergies renouvelables</li>
                                              <li>• <strong>Horizon 2030 (Qatar) :</strong> développement des NTIC et des industries hors hydrocarbures</li>
                                              <li>• <strong>Dubaï :</strong> modèle de transition avec une forte tertiarisation (Emirates, DP World, tourisme de luxe)</li>
                                              <li>• <strong>Fonds souverains puissants :</strong> ADIA (580 Mds $) et KIA (533 Mds $)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">2. L'émergence de nouvelles stratégies industrielles</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Industrie pétrochimique :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Sabic</strong> en Arabie Saoudite, leader mondial de la chimie pétrochimique</li>
                                              <li>• <strong>Création de hubs industriels</strong> spécialisés (Jubail, Yanbu)</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Le défi des énergies renouvelables :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Investissement dans l'énergie solaire</strong> (exemple : projet Noor au Maroc)</li>
                                              <li>• <strong>Développement du nucléaire civil</strong> en Iran, aux Émirats Arabes Unis et en Arabie Saoudite</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Le secteur de l'eau et des infrastructures :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Désalinisation massive</strong> de l'eau de mer pour compenser la rareté des ressources</li>
                                              <li>• <strong>Construction de mégaprojets</strong> comme The Line en Arabie Saoudite (ville futuriste sans voiture et autosuffisante en énergie)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* C. Stratégies des États pour faire face aux défis */}
                                  <div className="bg-white p-5 rounded-lg border border-green-200">
                                    <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                                      <Lightbulb className="h-5 w-5" />
                                      C. Les stratégies des États pour faire face aux défis à venir
                                    </h4>
                                    
                                    <div className="space-y-4">
                                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                        <p className="text-purple-800 font-semibold mb-3">1. Anticiper la transition post-pétrole</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Développement du tourisme :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Qatar, Dubaï et l'Arabie Saoudite</strong> investissent dans les hubs touristiques (hôtels de luxe, événements sportifs, expositions universelles)</li>
                                              <li>• <strong>Coupe du Monde 2022 au Qatar</strong>, un happening sportif pour attirer les investissements</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Industrie de défense et influence géopolitique :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>L'Arabie Saoudite et les Émirats Arabes Unis</strong> se dotent d'industries militaires locales</li>
                                              <li>• <strong>L'objectif :</strong> réduire leur dépendance aux États-Unis et à l'Europe pour leur sécurité</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                                        <p className="text-emerald-800 font-semibold mb-3">2. Construire de nouveaux pôles économiques et technologiques</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Neom (Arabie Saoudite) :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Projet de ville intelligente et écologique</strong> visant à transformer l'Arabie Saoudite en un hub mondial d'innovation</li>
                                              <li>• <strong>Objectif :</strong> zéro émission de carbone et une énergie 100% propre</li>
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <p className="text-gray-800 font-semibold">Cap sur l'intelligence artificielle et la Fintech :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Développement de centres financiers et technologiques</strong> à Abou Dhabi, Riyad et Doha</li>
                                              <li>• <strong>Montée en puissance des startups</strong> dans le domaine du numérique et de la cybersécurité</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-800 font-semibold mb-3">3. La montée en puissance des fonds souverains et l'investissement international</p>
                                        
                                        <div className="space-y-3">
                                          <div>
                                            <p className="text-gray-800 font-semibold">Des États qui investissent massivement à l'étranger :</p>
                                            <ul className="text-gray-700 ml-4 space-y-1">
                                              <li>• <strong>Le KIA (Kuwait Investment Authority) et l'ADIA</strong> (Abu Dhabi Investment Authority) parmi les plus grands investisseurs mondiaux</li>
                                              <li>• <strong>Investissements massifs</strong> en Europe, en Afrique et en Asie pour diversifier les revenus</li>
                                              <li>• <strong>Qatar Investment Authority</strong> propriétaire du PSG, de centres financiers et d'infrastructures européennes</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Conclusion */}
                                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                                    <h4 className="text-lg font-semibold text-green-800 mb-3">Conclusion : Un Moyen-Orient en mutation, mais des défis persistants</h4>
                                    <div className="text-gray-700 leading-relaxed space-y-3">
                                      <p>
                                        La transition énergétique et économique est en marche, mais la dépendance aux hydrocarbures reste forte.
                                      </p>
                                      <p>
                                        L'adaptation au changement climatique nécessitera des investissements massifs pour éviter des crises 
                                        humanitaires et sécuritaires.
                                      </p>
                                      <p>
                                        Les États du Golfe apparaissent comme les mieux préparés à ces mutations, tandis que d'autres pays 
                                        (Yémen, Syrie, Irak) restent empêtrés dans des crises endémiques.
                                      </p>
                                      <p>
                                        L'avenir du Moyen-Orient se jouera dans sa capacité à stabiliser ses conflits internes, à renforcer 
                                        ses coopérations régionales et à réussir sa transition vers un modèle économique durable.
                                      </p>
                                    </div>
                                  </div>

                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </CardContent>
          </Card>

          {/* Chronologie */}
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Clock className="h-6 w-6 text-purple-600" />
                Chronologie du Proche et Moyen-Orient
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-6">
                  Les événements clés qui ont façonné cette région stratégique, de l'incident d'Aqaba aux conflits contemporains.
                </p>
                
                <div className="space-y-3 max-h-96 overflow-y-auto bg-white p-4 rounded-lg border border-purple-200">
                  {[
                    { year: "1906", event: "Incident d'Aqaba. Crise diplomatique quant au tracé du chemin de fer dans la région du Hedjaz." },
                    { year: "1914", event: "Les Britanniques placent le Koweït sous protectorat, prennent la ville de Bassorah" },
                    { year: "1915", event: "Génocide Arménien : entre 800 000 et 1 200 000 morts" },
                    { year: "1915", event: "Opération Navale contre les Dardanelles de la part des Britanniques, premier échec dans la région pour les occidentaux" },
                    { year: "1916", event: "Protectorat Britannique sur le Qatar." },
                    { year: "1916", event: "Accords de Sykes-Picot qui partage la région en zones d'occupations et confère des mandats aux puissances occidentales" },
                    { year: "1917", event: "Déclaration de Balfour : l'Angleterre est favorable à la création d'un Etat hébreu en Palestine" },
                    { year: "1920", event: "Conférence de San Remo, puis traité de Sèvres pour fixer le sort des provinces de l'Empire Ottoman" },
                    { year: "1922", event: "Indépendance de l'Egypte" },
                    { year: "1927", event: "Traité de Djeddah, La Grande Bretagne reconnait l'indépendance de l'Arabie Saoudite" },
                    { year: "1928", event: "Accords d'Achnacarry de la ligne rouge, accords de cartellisation et de redistribution du Proche et Moyen Orient entre les Majors, les « sept sœurs pétrolières »." },
                    { year: "1932", event: "Le Royaume-Uni reconnait l'indépendance de l'Irak" },
                    { year: "1945", event: "Création de la Ligue Arabe" },
                    { year: "1945", event: "Pacte du Quincy : Alliance de Washington et de l'Arabie Saoudite" },
                    { year: "1948", event: "L'ONU déclare la création de l'Etat d'Israël en Palestine" },
                    { year: "1948-1949", event: "Guerre Israélo-Arabe suite à la déclaration de l'ONU" },
                    { year: "1952", event: "La Turquie intègre l'Otan" },
                    { year: "1952", event: "Nationalisation du Pétrole par Mossadegh en Iran" },
                    { year: "1955", event: "Pacte de Bagdad signé par l'Irak, la Turquie, le Pakistan, l'Iran et le Royaume-Uni. Les États-Unis rejoignent le comité militaire de l'alliance en 1958. Il a pour but de limiter la montée en puissance communiste soviétique dans la région, avec la mise en place d'un « Cordon sanitaire »" },
                    { year: "1956", event: "Nationalisation de la compagnie gérant le Canal de Suez par Nasser : « Le canal est désormais à nous, bien à nous » (Nasser)." },
                    { year: "1956", event: "Guerre de Suez en réponse à la nationalisation du canal, Opération Kadesh qui oppose l'Egypte à l'alliance du Protocole de Sèvres (Israël (guerre préventive), France, GB). Malgré la victoire de l'alliance, la pression des US et de l'URSS les poussent à battre en retraite. Les soviétiques menacent d'une frappe nucléaire et d'une intervention militaire. Cet évènement montre que l'impératif d'une relative stabilité de l'ordre mondial entre les deux « géants » ne peut être remis en cause, même par d'anciennes grandes puissances comme la France et le Royaume-Uni. Véritable tournant dans la position d'ingérence occidentale." },
                    { year: "1958", event: "La République Arabe Unie est créée sous l'égide du parti Baas et de son fondateur Michel Aflak ainsi que de Nasser, alors président de l'Egypte. Cet immense territoire de plus d'un million de km² naît de l'union de l'Egypte et de la Syrie, notamment pour parer à la menace communiste et à l'influence américaine. Nasser annonce la dissolution de la RAU en 1961" },
                    { year: "1958", event: "Ephémère union hachémite de la Jordanie et de l'Irak" },
                    { year: "1959", event: "1er congrès du Pétrole au Caire sur la concertation des pays producteurs de pétrole, acte de naissance de l'OPEP" },
                    { year: "1960", event: "Création de l'OPEP" },
                    { year: "1960", event: "Coup d'Etat militaire avec l'arrivée au pouvoir du général Gürsel qui fixe la Turquie dans le camp américain/occidental. Défend l'héritage Kémaliste, d'un Etat dirigiste, laïque." },
                    { year: "1961", event: "Indépendance du Koweït. L'Irak masse son armée à la frontière et veut s'emparer de sa « 19ème province ». Les Britanniques envoient des troupes pour protéger cette indépendance." },
                    { year: "1964", event: "Création de l'OLP, Organisation de Libération de la Palestine qui fédère autour du FATAH les forces palestiniennes. Revendique la « Destruction d'Israël » comme un objectif fondamental." },
                    { year: "1967", event: "Guerre des Six jours qui oppose Israël à l'Egypte, la Jordanie et la Syrie. Les Israéliens s'emparent du Sinaï, du Golan, de la Bande de Gaza et de la Cisjordanie. Seulement 300 morts Israéliens contre 6000 Égyptiens, Jordaniens et Syriens." },
                    { year: "1967", event: "La Résolution 242 qui prévoit l'évacuation des territoires occupés par Israël est rejetée par le pays" },
                    { year: "1968", event: "Création de l'OPAEP, l'Organisation des pays arabes exportateurs de pétrole" },
                    { year: "1973", event: "Guerre du Kippour : L'Egypte et la Syrie attaquent par surprise Israël, en lançant l'opération Badr dans la région du Canal de Suez. La ligne Bar-Lev est détruite. Soviétiques et Américains fournissent les armes à leurs alliés respectifs." },
                    { year: "1973", event: "Premier choc pétrolier" },
                    { year: "1975", event: "Début de la Guerre Civile au Liban. Elle est le fruit de la non résolution Israélo-Palestinienne. C'est un conflit autour de la place des Palestiniens au Liban." },
                    { year: "1978", event: "Accords de Camp David : Accords-cadres signés à Washington par Jimmy Carter, président des États-Unis, Anouar el-Sadate, chef de l'État égyptien, et Menahem Begin, Premier ministre d'Israël, qui prévoit la restitution du Sinaï à L'Egypte." },
                    { year: "1979", event: "Chute du Shah d'Iran , remplacé par Khomeini, révolution islamiste" },
                    { year: "1979", event: "L'URSS envahit l'Afghanistan, occupation qui dure jusqu'en 1989. Elle a le sentiment de perdre la zone face à l'Islamisme." },
                    { year: "1979", event: "2ème choc pétrolier" },
                    { year: "1979", event: "Soulèvement de la Mecque" },
                    { year: "1980-1988", event: "Guerre Iran-Irak : Saddam Hussein déclare la guerre à l'Iran, soutenu par les US et la France qui financent l'effort de guerre Irakien. Guerre de front et d'usure, apogée en 1986 lorsque l'Iran s'empare de Fao, port d'embarquement de pétrole et commence l'offensive sur Bassora. La guerre a renforcé l'importance du régime khomeynisme en Iran" },
                    { year: "1987", event: "Première Intifada : Jets de pierre sur l'armée Tsahal, début de l'insurrection Palestinienne. Médiatisation du conflit par l'OLP. De cet évènement découle la création du HAMAS." },
                    { year: "1990", event: "Invasion du Koweït par l'Irak : 1ère guerre du Golfe (Koweït : 9% des réserves mondiales de pétrole)" },
                    { year: "1991", event: "Opération Tempête du désert menée par les US dans le cadre de l'ONU au Koweït face à l'invasion de l'Irak. Lancement de missiles SCUD par Saddam Hussein, missiles soviétiques. Début de la stratégie Shock & Awe américain : prise de contrôle de l'espace aérien et destruction des capacités de l'adversaire avant toute intervention sur le terrain." },
                    { year: "1993", event: "Accords d'Oslo : Négociations pour la paix entre Arafat et Rabin. L'OLP reconnait Israël et son droit à l'existence. Reconnaissance de l'OLP comme représentant légitime du peuple Palestinien" },
                    { year: "1994", event: "Création des QIZ (Qualified Industrial Zones) par les US en Egypte, des zones franches favorisant l'ouverture de la région et l'instauration du libre-échange." },
                    { year: "1996", event: "Loi D'Amato Kennedy qui sanctionne toute firme américaine travaillant en relation avec le nucléaire iranien" },
                    { year: "1996", event: "Mise en place à Kaboul d'un régime Taliban." },
                    { year: "1998", event: "Netanyahou annonce le retrait des forces Israéliennes du Liban." },
                    { year: "1999", event: "Mort du roi Hussein, remplacé par son fils Abdallah en Jordanie." },
                    { year: "2000", event: "Seconde Intifada" },
                    { year: "2000", event: "Attentat du USS Cole dans le Golfe d'Aden" },
                    { year: "2001", event: "Intervention Américaine en Afghanistan pour rechercher Oussama Ben Laden, le commanditaire du 11 Septembre." },
                    { year: "2002", event: "Boom des matières premières" },
                    { year: "2003", event: "Les US interviennent en IRAK. Guerre contre le terrorisme et ses effets." },
                    { year: "2007", event: "Crise navale majeure entre l'Iran et les Etats-Unis : cinq patrouilleurs des pasdarans (gardiens de la révolution) et trois navires américains menacent de s'affronter" },
                    { year: "2008", event: "Le prix du pétrole dépasse les 147$ le baril" },
                    { year: "2008-2009", event: "Israël envahit la bande de Gaza dans le cadre de l'opération Plomb Durci" },
                    { year: "2009", event: "Grandes émeutes étudiantes Iraniennes contre le régime en place. Riposte du premier ministre Ahmadinejad" },
                    { year: "2011", event: "Début des Printemps Arabes : Situations de guerres civiles d'intensité variable en Afrique du Nord, avec des changements de régimes plus ou moins crédibles (Tunisie, Libye et Egypte), au Moyen-Orient (Syrie, Yémen). En Arabie saoudite, au Koweït comme à Oman, les mouvements de contestation sont rapidement désamorcés" },
                    { year: "2011", event: "Chute de Moubarak en Egypte (Mohammed Morsi est élu en 2012)" },
                    { year: "2011", event: "Début de la guerre civile en Syrie" },
                    { year: "2012", event: "Israël envahit à nouveau la bande de Gaza dans le cadre de l'opération Pilier de Défense" },
                    { year: "2013", event: "Coup d'État en Égypte, Abdel Fattah al-Sissi prend le pouvoir après la destitution de Morsi" },
                    { year: "2014", event: "Montée en puissance de l'État islamique (EI) en Irak et en Syrie, proclamation du califat" },
                    { year: "2014", event: "Intervention de la coalition internationale contre l'EI en Syrie et en Irak" },
                    { year: "2015", event: "Guerre au Yémen, Opération Tempête décisive menée par l'Arabie saoudite contre les Houthis" },
                    { year: "2015", event: "Accords Américains avec l'Iran sur le nucléaire (JCPOA)" },
                    { year: "2017", event: "L'Arabie saoudite, les Emirats arabes unis, Bahreïn, le Yémen, les Maldives et l'Egypte rompent leurs relations avec le Qatar, jugé trop près de la Russie et de l'Iran" },
                    { year: "2017", event: "Trump annonce le déplacement de l'ambassade d'Israël à Jérusalem" },
                    { year: "2018", event: "Les États-Unis se retirent de l'accord sur le nucléaire iranien (JCPOA) et réimposent des sanctions" },
                    { year: "2018", event: "Assassinat du journaliste saoudien Jamal Khashoggi dans le consulat saoudien à Istanbul" },
                    { year: "2019", event: "Grandes manifestations antigouvernementales en Irak, au Liban et en Iran, réprimées violemment" },
                    { year: "2019", event: "Attaques contre des installations pétrolières saoudiennes, attribuées à l'Iran ou aux Houthis" },
                    { year: "2020", event: "Assassinat du général iranien Qasem Soleimani par un drone américain à Bagdad" },
                    { year: "2020", event: "Accords d'Abraham : Normalisation des relations entre Israël et les Émirats arabes unis, Bahreïn, Soudan et Maroc" },
                    { year: "2020", event: "Explosion massive au port de Beyrouth au Liban, causant plus de 200 morts et des dégâts massifs" },
                    { year: "2021", event: "Retrait des troupes américaines d'Afghanistan, prise de Kaboul par les Talibans" },
                    { year: "2021", event: "Conflit de 11 jours entre Israël et le Hamas à Gaza" },
                    { year: "2021", event: "Élection d'Ebrahim Raisi comme président de l'Iran" },
                    { year: "2022", event: "Grandes manifestations en Iran suite à la mort de Mahsa Amini en détention, mouvement pour les droits des femmes" },
                    { year: "2022", event: "Guerre Russie-Ukraine impacte les prix de l'énergie et renforce le rôle des pays du Golfe dans l'approvisionnement mondial" },
                    { year: "2023", event: "Séisme dévastateur en Turquie et en Syrie, tuant plus de 50 000 personnes" },
                    { year: "2023", event: "Attaque du Hamas contre Israël le 7 octobre, tuant environ 1 200 personnes et prenant des otages, début de la guerre à Gaza" },
                    { year: "2023", event: "Négociations pour une normalisation entre l'Arabie saoudite et Israël, interrompues par le conflit à Gaza" },
                    { year: "2023", event: "Restauration des relations diplomatiques entre l'Arabie saoudite et l'Iran, négociée par la Chine" },
                    { year: "2024", event: "Guerre à Gaza se poursuit, avec plus de 40 000 morts palestiniens selon les autorités locales, et escalade avec le Hezbollah au Liban" },
                    { year: "2024", event: "Échanges directs de missiles entre l'Iran et Israël, première confrontation ouverte" },
                    { year: "2024", event: "Chute du régime de Bachar al-Assad en Syrie, prise de Damas par les rebelles en décembre" },
                    { year: "2024", event: "Israël frappe plus de cibles en Iran, incluant des sites nucléaires suspects" },
                    { year: "2025", event: "Ceasefire entre Israël et le Hamas à Gaza, négocié avec la médiation des États-Unis et de l'Égypte, mais fragile avec des violations sporadiques" },
                    { year: "2025", event: "Retour de Donald Trump à la présidence des États-Unis, renforçant les alliances avec Israël et les pays du Golfe contre l'Iran" },
                    { year: "2025", event: "Syrie post-Assad : Formation d'un gouvernement de transition, avec influence accrue de la Turquie et des groupes islamistes" },
                    { year: "2025", event: "Israël et États-Unis lancent des frappes aériennes sur des sites nucléaires iraniens en juin, menant à des échanges de missiles et un bref conflit direct" },
                    { year: "2025", event: "Crises économiques persistantes dans la région, exacerbées par les conflits, avec haute inflation et chômage en Égypte, Liban et Irak" },
                    { year: "2025", event: "Intensification des tensions régionales avec l'Iran, qui accélère son programme nucléaire en réponse aux sanctions américaines renouvelées" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start border-b border-gray-100 pb-2">
                      <span className="flex-shrink-0 w-20 text-sm font-semibold text-purple-700 mr-3">
                        {item.year}
                      </span>
                      <p className="flex-grow text-gray-700 text-sm leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-purple-100 rounded-lg border border-purple-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <p className="font-semibold text-purple-800">Chronologie complète</p>
                  </div>
                  <p className="text-sm text-purple-700">
                    Cette chronologie présente les événements majeurs de 1906 à 2025. Pour une version plus détaillée avec 
                    catégorisation et analyse, consultez la page dédiée.
                  </p>
                  <Link 
                    to="/formation/geopolitique/proche-moyen-orient/chronologie" 
                    className="inline-flex items-center mt-2 text-purple-600 hover:text-purple-800 font-medium text-sm"
                  >
                    Voir la chronologie détaillée →
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-gray-600" />
                Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-6 rounded-lg text-center border border-slate-200">
                <p className="text-gray-600 italic">
                  [Contenu en attente - Veuillez fournir la conclusion de la dissertation]
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default ProcheMoyenOrientPage;