import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, AlertTriangle, Zap, DollarSign, Globe, Shield, TrendingUp } from 'lucide-react';

const CriminalitePage = () => {
  const mafiaOrganizations = [
    { name: 'Bratva (Russie)', revenue: '10 milliards $/an', activity: 'Héroïne, trafics', influence: 'Europe de l\'Est, Occident' },
    { name: 'Yamaguchi-gumi (Japon)', revenue: '9 milliards $/an', activity: 'Prostitution, racket', influence: 'Asie-Pacifique' },
    { name: 'Camorra (Italie)', revenue: '5 milliards $/an', activity: 'Armes, drogue', influence: 'Méditerranée, Europe' },
    { name: '\'Ndrangheta (Italie)', revenue: '5 milliards $/an', activity: 'Drogue, déchets', influence: 'Cocaïne mondiale' },
    { name: 'Cartels mexicains', revenue: '3-5 milliards $/an', activity: 'Drogue, migration', influence: 'Amériques' },
    { name: 'Triades chinoises', revenue: '3 milliards $/an', activity: 'Cyber, contrefaçon', influence: 'Asie, diaspora' }
  ];

  const illicitFlows = [
    { category: 'Drogues', value: '400-600 milliards $', detail: '2e marché mondial', example: 'Afghanistan 80% opium', trend: 'Fentanyl, synthétiques' },
    { category: 'Armes', value: '1 500 milliards $', detail: 'Majorité illégale', example: 'Anvers plaque Europe', trend: 'Armes légères, cyber' },
    { category: 'Paradis fiscaux', value: '100 milliards $ offshore', detail: '50 paradis fiscaux', example: 'Panama Papers', trend: 'Cryptomonnaies' },
    { category: 'Traite humaine', value: '150 milliards $/an', detail: '50 millions victimes', example: 'Travail forcé, prostitution', trend: 'Migration climatique' },
    { category: 'Cybercriminalité', value: '8 000 milliards $ dégâts', detail: 'Croissance exponentielle', example: 'Ransomwares, cryptage', trend: 'IA, deepfakes' },
    { category: 'Contrefaçon', value: '500 milliards $/an', detail: '2,5% commerce mondial', example: 'Médicaments, luxe', trend: 'E-commerce, 3D' }
  ];

  const geopoliticalImpacts = [
    { region: 'Afrique', impact: '1 000 Mds$ perdus 1970-2020', details: 'Fraude, crime, fuite capitaux', consequences: 'Sous-développement chronique' },
    { region: 'Amérique Latine', impact: '200 000 morts/an', details: 'Violence cartels, féminicides', consequences: 'Instabilité démocratique' },
    { region: 'Europe', impact: '110 Mds€ blanchiment/an', details: 'Immobilier, paradis fiscaux', consequences: 'Distorsion concurrence' },
    { region: 'Asie', impact: 'Hub mondial contrefaçon', details: 'Chine 80% faux produits', consequences: 'Perte innovation, santé' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-foreground transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique/etudes-de-cas" className="hover:text-foreground transition-colors">
              Thèmes centraux essentiels
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Criminalité organisée</span>
          </div>
        </div>
      </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Criminalité organisée et flux illicites</CardTitle>
                <p className="text-red-100 mt-2">
                  Mafias, trafics et géopolitique du crime
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2000Md$</div>
                <div className="text-sm text-red-100">Économie criminelle</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">1,5%</div>
                <div className="text-sm text-red-100">PIB mondial</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">8%</div>
                <div className="text-sm text-red-100">Exports mondiales</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">50M</div>
                <div className="text-sm text-red-100">Victimes traite</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analyse géopolitique */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          <AccordionItem value="organizations">
            <AccordionTrigger className="text-xl text-red-700">
              I. Organisations criminelles mondiales
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-800">
                      <DollarSign className="h-5 w-5" />
                      Poids économique global de la criminalité
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-red-100 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-red-800 mb-2">Dimensions économiques (UNODC)</h4>
                      <ul className="text-sm text-red-700 space-y-2">
                        <li><strong>1,5% PIB mondial</strong> (2 000 milliards $) - Équivalent économie italienne</li>
                        <li><strong>8% exports</strong> marchandises mondiales touchées par criminalité</li>
                        <li><strong>Laurent Carroué (2002) :</strong> "Enjeu géoéconomique de plus en plus influent"</li>
                        <li><strong>Paradoxe :</strong> "Libéralisation marchés et criminalisation font bon ménage"</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-red-800">Principales organisations criminelles</h4>
                      {mafiaOrganizations.map((org, index) => (
                        <div key={index} className="p-4 bg-red-100 rounded-lg border border-red-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-red-600 text-white font-semibold">
                                  {org.name}
                                </Badge>
                                <span className="font-bold text-red-800">{org.revenue}</span>
                              </div>
                              <div className="text-sm text-red-700">
                                <div><strong>Activités :</strong> {org.activity}</div>
                                <div><strong>Influence :</strong> {org.influence}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="flows">
            <AccordionTrigger className="text-xl text-orange-700">
              II. Flux illicites mondiaux 2024
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-800">
                      <Zap className="h-5 w-5" />
                      Cartographie des trafics contemporains
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-orange-100 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-orange-800 mb-2">Volume global et tendances</h4>
                      <ul className="text-sm text-orange-700 space-y-2">
                        <li><strong>500-1 000 milliards $</strong> flux illicites totaux annuels</li>
                        <li><strong>Pierre-Arnaud Chouvy (2002) :</strong> "Espaces narcotiques réappropriés par acteurs étatiques/non-étatiques"</li>
                        <li><strong>Digitalisation :</strong> Cybercriminalité devient secteur dominant</li>
                        <li><strong>Innovation UK :</strong> Intègre drogue/prostitution au PIB (1% environ)</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      {illicitFlows.map((flow, index) => (
                        <div key={index} className="p-4 bg-orange-100 rounded-lg border border-orange-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-orange-600 text-white font-semibold">
                                  {flow.category}
                                </Badge>
                                <span className="font-bold text-orange-800">{flow.value}</span>
                              </div>
                              <div className="text-sm text-orange-700 space-y-1">
                                <div><strong>Statut :</strong> {flow.detail}</div>
                                <div><strong>Exemple :</strong> {flow.example}</div>
                                <div><strong>Tendance 2024 :</strong> {flow.trend}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Hubs géographiques des trafics</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-blue-800 mb-2">Plaques tournantes</h5>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• <strong>Anvers :</strong> Port d'entrée cocaïne Europe</li>
                            <li>• <strong>Dubai :</strong> Blanchiment or, cryptomonnaies</li>
                            <li>• <strong>Singapour :</strong> Contrefaçon, cyber</li>
                            <li>• <strong>Panama :</strong> Évasion fiscale, narco</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-800 mb-2">Zones de production</h5>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• <strong>Afghanistan :</strong> 80% opium mondial</li>
                            <li>• <strong>Colombie :</strong> 60% cocaïne mondiale</li>
                            <li>• <strong>Chine :</strong> 80% faux produits</li>
                            <li>• <strong>Nigeria :</strong> Hub cybercriminalité Afrique</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="geopolitics">
            <AccordionTrigger className="text-xl text-purple-700">
              III. Impact géopolitique et réponses institutionnelles
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-800">
                      <Globe className="h-5 w-5" />
                      Déstabilisation et contre-mesures
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <h4 className="font-semibold text-purple-800">Impact régional de la criminalité</h4>
                      {geopoliticalImpacts.map((impact, index) => (
                        <div key={index} className="p-4 bg-purple-100 rounded-lg border border-purple-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-purple-600 text-white font-semibold">
                                  {impact.region}
                                </Badge>
                                <span className="font-bold text-purple-800">{impact.impact}</span>
                              </div>
                              <div className="text-sm text-purple-700 space-y-1">
                                <div><strong>Détails :</strong> {impact.details}</div>
                                <div><strong>Conséquences :</strong> {impact.consequences}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Shield className="h-5 w-5" />
                      Coopération internationale anti-criminalité
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3">Organisations multilatérales</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-green-100 rounded-lg">
                            <div className="font-semibold text-green-800 mb-1">UNODC</div>
                            <div className="text-sm text-green-700">
                              Office Nations Unies Drogues et Crime. Coordination globale, 
                              statistiques mondiales, assistance technique.
                            </div>
                          </div>
                          <div className="p-3 bg-green-100 rounded-lg">
                            <div className="font-semibold text-green-800 mb-1">INTERPOL</div>
                            <div className="text-sm text-green-700">
                              194 pays membres. Coopération policière, bases données, 
                              notices internationales, cybercriminalité.
                            </div>
                          </div>
                          <div className="p-3 bg-green-100 rounded-lg">
                            <div className="font-semibold text-green-800 mb-1">GAFI/FATF</div>
                            <div className="text-sm text-green-700">
                              Groupe Action Financière. Standards anti-blanchiment, 
                              listes grises/noires, sanctions financières.
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3">Initiatives régionales</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                            <div className="font-semibold text-blue-800 mb-1">Europol (UE)</div>
                            <div className="text-sm text-blue-700">
                              Agence européenne police. Coordination enquêtes, 
                              renseignement criminalité, cybersécurité.
                            </div>
                          </div>
                          <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-200">
                            <div className="font-semibold text-yellow-800 mb-1">DEA (États-Unis)</div>
                            <div className="text-sm text-yellow-700">
                              Drug Enforcement Administration. Lutte antidrogue, 
                              coopération bilatérale, intervention Amérique latine.
                            </div>
                          </div>
                          <div className="p-3 bg-orange-100 rounded-lg border border-orange-200">
                            <div className="font-semibold text-orange-800 mb-1">ASEANAPOL</div>
                            <div className="text-sm text-orange-700">
                              Coopération policière ASEAN. Lutte terrorisme, 
                              trafic drogue, cybercriminalité régionale.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">
                        <TrendingUp className="inline h-4 w-4 mr-2" />
                        Défis contemporains
                      </h4>
                      <ul className="text-sm text-red-700 space-y-2">
                        <li><strong>Technologie :</strong> Cryptomonnaies, darknet, IA compliquent traçabilité</li>
                        <li><strong>Souveraineté :</strong> Tensions coopération vs. juridictions nationales</li>
                        <li><strong>Ressources :</strong> Moyens limités face richesse organisations criminelles</li>
                        <li><strong>Corruption :</strong> Infiltration institutions, États faillis ou complices</li>
                        <li><strong>Adaptation :</strong> Criminalité évolue plus vite que cadres légaux</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        {/* Références */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">Références et sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Laurent Carroué (2002)</strong> : <em>"Géoéconomie criminelle"</em> - Enjeu géoéconomique influent</p>
              <p><strong>Pierre-Arnaud Chouvy (2002)</strong> : <em>"Espaces narcotiques"</em> - Réappropriation territoriale</p>
              <p><strong>UNODC</strong> : Rapports criminalité organisée transnationale 2024</p>
              <p><strong>INTERPOL</strong> : Statistiques criminalité internationale</p>
              <p><strong>GAFI/FATF</strong> : Standards anti-blanchiment et financement terrorisme</p>
              <p><strong>Global Financial Integrity</strong> : Flux financiers illicites</p>
              <p><strong>Transparency International</strong> : Indices corruption mondiale</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default CriminalitePage;