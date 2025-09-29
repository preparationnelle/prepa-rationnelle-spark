import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Leaf, Users, TrendingUp, AlertTriangle, Globe, Baby, UserMinus, MapPin, Thermometer, Calendar, Target } from 'lucide-react';

const DeveloppementDurablePage = () => {
  const demographicStats = [
    { year: '1974', population: '4 milliards', growth: '1,9% (1970)', context: 'Boom démographique' },
    { year: '2025', population: '8,2 milliards', growth: '0,85%', context: 'Ralentissement continu' },
    { year: '2084', population: '10,3 milliards (pic)', growth: 'Puis déclin', context: 'Basculement historique' }
  ];

  const fertilityByRegion = [
    { region: 'Afrique subsaharienne', rate: '4,1 enfants/femme', trend: '2,5% croissance', examples: 'Nigeria 2,6%, Mali 3%' },
    { region: 'Europe', rate: '1,6 enfants/femme', trend: 'Vieillissement', examples: 'Italie 1,2, Espagne 1,3' },
    { region: 'Asie', rate: '2,2 enfants/femme', trend: 'Stabilisation', examples: 'Thaïlande 1,3, Inde 1,9' },
    { region: 'Amérique Latine', rate: '1,9 enfants/femme', trend: 'Transition achevée', examples: 'Brésil 2, Tunisie 2' }
  ];

  const youthBulgeFactors = [
    { factor: 'Population jeune', stat: '60% <25 ans Afrique sub.', impact: 'Dividende démographique potentiel' },
    { factor: 'Projection 2030', stat: '42% jeunes mondiaux', impact: 'Concentration africaine' },
    { factor: 'Risques', stat: 'Chômage jeunes', impact: 'Conflits Sahel, instabilité' },
    { factor: 'Opportunités', stat: 'Éducation/emplois', impact: 'Croissance économique' }
  ];

  const agingEurope = [
    { metric: 'Âge médian Europe', value: '44 ans', comparison: 'vs 19 ans Afrique' },
    { metric: 'Pénuries main-d\'œuvre', impact: 'Secteurs clés touchés', solution: 'Immigration qualifiée' },
    { metric: 'Politiques natalistes', examples: 'France incitations', result: 'Résultats mitigés' },
    { metric: 'Immigration', strategy: 'Allemagne qualifiée', goal: 'Contrer vieillissement' }
  ];

  const chinaIndiaCase = [
    { country: 'Chine', policy: 'Enfant unique (abandonnée 2016)', current: 'Fécondité 1,0 (2024)', challenge: 'Vieillissement accéléré' },
    { country: 'Inde', status: 'Nation la plus peuplée', current: 'Fécondité 1,9', advantage: 'Dividende démographique' }
  ];

  const climateImpacts = [
    { region: 'Afrique subsaharienne', threat: 'Sécheresse', consequence: 'Ralentissement croissance' },
    { region: 'Pays riches', opportunity: 'Attraction migrants', consequence: 'Pression migratoire accrue' },
    { region: 'Zones côtières', threat: 'Montée eaux', consequence: 'Migrations forcées' },
    { region: 'Sahel', threat: 'Désertification', consequence: 'Exode rural massif' }
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
            <span className="text-foreground font-medium">Développement durable</span>
          </div>
        </div>
      </nav>

        <Card className="mb-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Leaf className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Développement durable</CardTitle>
                <p className="text-green-100 mt-2">
                  Croissance démographique et défis environnementaux globaux
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">8,2Md</div>
                <div className="text-sm text-green-100">Population 2025</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2,2</div>
                <div className="text-sm text-green-100">Fécondité mondiale</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2084</div>
                <div className="text-sm text-green-100">Pic démographique</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">42%</div>
                <div className="text-sm text-green-100">Jeunes Afrique 2030</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analyse démographique */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          <AccordionItem value="demographic-transition">
            <AccordionTrigger className="text-xl text-blue-700">
              I. Transition démographique mondiale (1974-2084)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                
                {/* Évolution historique */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <TrendingUp className="h-5 w-5" />
                      Évolution de la croissance démographique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-100 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-blue-800 mb-2">Tendance générale</h4>
                      <ul className="text-sm text-blue-700 space-y-2">
                        <li><strong>Ralentissement continu :</strong> Taux croissance toujours positif mais décroissant</li>
                        <li><strong>Fécondité globale :</strong> 2,2 enfants/femme (2024) vs seuil remplacement 2,1</li>
                        <li><strong>Transition achevée :</strong> Partout la fécondité baisse ou a déjà baissé</li>
                        <li><strong>Inertie démographique :</strong> Structure par âge maintient la croissance</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      {demographicStats.map((stat, index) => (
                        <div key={index} className="p-4 bg-blue-100 rounded-lg border border-blue-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-blue-600 text-white font-semibold">
                                  {stat.year}
                                </Badge>
                                <span className="font-bold text-blue-800">{stat.population}</span>
                              </div>
                              <div className="text-sm text-blue-700">
                                <div><strong>Croissance :</strong> {stat.growth}</div>
                                <div><strong>Contexte :</strong> {stat.context}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Fécondité par région */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-purple-600" />
                      Fécondité différenciée par région
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {fertilityByRegion.map((region, index) => (
                        <div key={index} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-purple-600 text-white font-semibold">
                                  {region.region}
                                </Badge>
                                <span className="font-bold text-purple-800">{region.rate}</span>
                              </div>
                              <div className="text-sm text-purple-700">
                                <div><strong>Tendance :</strong> {region.trend}</div>
                                <div><strong>Exemples :</strong> {region.examples}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Constat :</strong> Le schéma "2 enfants par famille" s'impose partout sauf en Afrique subsaharienne, 
                        créant une forte différenciation démographique mondiale.
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="africa-youth-bulge">
            <AccordionTrigger className="text-xl text-orange-700">
              II. Le "Youth Bulge" africain : Opportunités et défis
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-800">
                      <Baby className="h-5 w-5" />
                      Jeunesse africaine : dividende démographique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-orange-100 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-orange-800 mb-2">Ampleur du phénomène</h4>
                      <ul className="text-sm text-orange-700 space-y-2">
                        <li><strong>Afrique subsaharienne :</strong> Plus de 60% population sous 25 ans</li>
                        <li><strong>Projection 2030 :</strong> 42% des jeunes mondiaux seront africains</li>
                        <li><strong>Croissance :</strong> 2,5% en Afrique sub. (Nigeria 2,6%, Mali 3%)</li>
                        <li><strong>Potentiel :</strong> Dividende démographique si investissements adaptés</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      {youthBulgeFactors.map((factor, index) => (
                        <div key={index} className="p-3 bg-orange-100 rounded-lg border border-orange-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <span className="font-semibold text-orange-800">{factor.factor}</span>
                                <Badge className="bg-orange-600 text-white text-xs">
                                  {factor.stat}
                                </Badge>
                              </div>
                              <div className="text-sm text-orange-700">
                                <strong>Impact :</strong> {factor.impact}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">
                        <AlertTriangle className="inline h-4 w-4 mr-2" />
                        Risques géopolitiques
                      </h4>
                      <ul className="text-sm text-red-700 space-y-2">
                        <li><strong>Chômage des jeunes :</strong> Frustrations, radicalisation potentielle</li>
                        <li><strong>Conflits Sahel :</strong> Youth bulge facteur d'instabilité régionale</li>
                        <li><strong>Migrations :</strong> Pression vers Europe vieillissante</li>
                        <li><strong>Urbanisation :</strong> Bidonvilles, défis d'intégration</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="europe-aging">
            <AccordionTrigger className="text-xl text-gray-700">
              III. Vieillissement européen : Adaptations et politiques
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                <Card className="bg-gray-50 border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-800">
                      <UserMinus className="h-5 w-5" />
                      Déclin démographique européen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Indicateurs du vieillissement</h4>
                        <div className="space-y-3">
                          {agingEurope.map((metric, index) => (
                            <div key={index} className="p-3 bg-gray-100 rounded-lg">
                              <div className="font-semibold text-gray-800">{metric.metric}</div>
                              <div className="text-sm text-gray-700 mt-1">
                                {metric.value && <div><strong>{metric.value}</strong></div>}
                                {metric.comparison && <div>{metric.comparison}</div>}
                                {metric.impact && <div>{metric.impact}</div>}
                                {metric.examples && <div><strong>Ex :</strong> {metric.examples}</div>}
                                {metric.strategy && <div><strong>Stratégie :</strong> {metric.strategy}</div>}
                                {metric.result && <div><strong>Résultat :</strong> {metric.result}</div>}
                                {metric.solution && <div><strong>Solution :</strong> {metric.solution}</div>}
                                {metric.goal && <div><strong>Objectif :</strong> {metric.goal}</div>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Fécondité européenne</h4>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li><strong>Moyenne UE :</strong> 1,6 enfants/femme</li>
                            <li><strong>Italie :</strong> 1,2 (plus bas mondial)</li>
                            <li><strong>Espagne :</strong> 1,3</li>
                            <li><strong>Seuil remplacement :</strong> 2,1 (non atteint)</li>
                          </ul>
                        </div>
                        
                        <h4 className="font-semibold text-gray-800 mb-3">Contraste Afrique-Europe</h4>
                        <div className="space-y-2">
                          <div className="p-2 bg-blue-100 rounded text-sm">
                            <strong>Europe :</strong> Âge médian 44 ans, population active vieillissante
                          </div>
                          <div className="p-2 bg-orange-100 rounded text-sm">
                            <strong>Afrique :</strong> Âge médian 19 ans, force de travail jeune
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="china-india-case">
            <AccordionTrigger className="text-xl text-red-700">
              IV. Cas d'étude : Chine vs Inde, trajectoires démographiques
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-800">
                      <Users className="h-5 w-5" />
                      Basculement géopolitique démographique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {chinaIndiaCase.map((country, index) => (
                        <div key={index} className="p-4 bg-red-100 rounded-lg border border-red-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <Badge className="bg-red-600 text-white font-semibold text-lg">
                                  {country.country}
                                </Badge>
                                <span className="font-bold text-red-800">{country.current}</span>
                              </div>
                              <div className="space-y-2 text-sm text-red-700">
                                {country.policy && <div><strong>Politique :</strong> {country.policy}</div>}
                                {country.status && <div><strong>Statut :</strong> {country.status}</div>}
                                {country.challenge && <div><strong>Défi :</strong> {country.challenge}</div>}
                                {country.advantage && <div><strong>Avantage :</strong> {country.advantage}</div>}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">Implications géopolitiques</h4>
                      <ul className="text-sm text-yellow-700 space-y-2">
                        <li><strong>Chine :</strong> Vieillissement accéléré compromet croissance long terme</li>
                        <li><strong>Inde :</strong> Devient la nation la plus peuplée, dividende démographique</li>
                        <li><strong>Inversion :</strong> L'Inde prend le relais de la Chine comme moteur démographique asiatique</li>
                        <li><strong>Économie :</strong> Pénuries main-d'œuvre Chine vs surplus Inde</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="climate-demography">
            <AccordionTrigger className="text-xl text-green-700">
              V. Changement climatique et démographie : Nouvelles dynamiques
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Thermometer className="h-5 w-5" />
                      Impact climatique sur croissance démographique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-100 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-green-800 mb-2">Nouveaux défis</h4>
                      <ul className="text-sm text-green-700 space-y-2">
                        <li><strong>Ralentissement attendu :</strong> Afrique subsaharienne face au stress climatique</li>
                        <li><strong>Migrations forcées :</strong> Sécheresse, montée des eaux, désertification</li>
                        <li><strong>Attraction :</strong> Pays riches attirent plus de migrants climatiques</li>
                        <li><strong>Reshaping :</strong> Climat redistribue les populations mondiales</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      {climateImpacts.map((impact, index) => (
                        <div key={index} className="p-4 bg-green-100 rounded-lg border border-green-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-green-600 text-white font-semibold">
                                  {impact.region}
                                </Badge>
                                <span className="text-sm text-green-700 font-medium">{impact.threat || impact.opportunity}</span>
                              </div>
                              <div className="text-sm text-green-700">
                                <strong>Conséquence :</strong> {impact.consequence}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Target className="h-5 w-5" />
                      Thèse du basculement démographique mondial (2084)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Projection 2084</h4>
                        <div className="bg-blue-100 p-4 rounded-lg">
                          <ul className="text-sm text-blue-700 space-y-2">
                            <li><strong>Pic démographique :</strong> 10,3 milliards d'habitants</li>
                            <li><strong>Après 2084 :</strong> Début du déclin démographique mondial</li>
                            <li><strong>Moteur africain :</strong> L'Afrique devient le centre de croissance humaine</li>
                            <li><strong>Inversion :</strong> Sud jeune vs Nord vieillissant</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Reshaping géopolitique</h4>
                        <div className="bg-blue-100 p-4 rounded-lg">
                          <ul className="text-sm text-blue-700 space-y-2">
                            <li><strong>Puissance démographique :</strong> Afrique poids mondial croissant</li>
                            <li><strong>Jeunesse dynamique :</strong> Innovation, entrepreneuriat, consommation</li>
                            <li><strong>Défis :</strong> Éducation, emplois, gouvernance</li>
                            <li><strong>Opportunités :</strong> Marchés, technologies, développement</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-indigo-100 rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-800 mb-2">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Vision prospective
                      </h4>
                      <p className="text-sm text-indigo-700">
                        Le pic démographique de 2084 marque un <strong>basculement historique</strong> où l'Afrique, 
                        par sa jeunesse dynamique, devient le principal moteur de la croissance humaine mondiale, 
                        reshapeant l'ordre géopolitique global face à un Nord vieillissant et en déclin démographique.
                      </p>
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
              <p><strong>Nations Unies</strong> : World Population Prospects 2024</p>
              <p><strong>INED</strong> : Institut National d'Études Démographiques</p>
              <p><strong>Population Reference Bureau</strong> : Datasheet démographique mondiale</p>
              <p><strong>UNFPA</strong> : État de la population mondiale 2024</p>
              <p><strong>Banque mondiale</strong> : Indicateurs démographiques par pays</p>
              <p><strong>OMS</strong> : Rapports santé reproductive et fécondité</p>
              <p><strong>OCDE</strong> : Perspectives démographiques pays développés</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default DeveloppementDurablePage;