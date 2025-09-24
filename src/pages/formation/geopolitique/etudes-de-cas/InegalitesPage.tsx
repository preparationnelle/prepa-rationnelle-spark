import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Users, TrendingDown, AlertTriangle, MapPin, BarChart, Percent, Activity } from 'lucide-react';

const InegalitesPage = () => {
  const inequalityIndicators = [
    { indicator: 'IDH', definition: 'Indice développement humain', composition: 'Santé/éducation/vie' },
    { indicator: 'Pauvreté absolue', definition: 'Seuil minimum subsistance', threshold: '&lt;2,15$/jour' },
    { indicator: 'IPH', definition: 'Indice pauvreté humaine', focus: 'Exclusions multiples' },
    { indicator: 'IPM', definition: 'Indice pauvreté multidimensionnelle', method: 'Cumul privations' },
    { indicator: 'Coefficient Gini', definition: 'Répartition richesse', scale: '0 (égalité) - 1 (inégalité)' }
  ];

  const povertyByRegion = [
    { region: 'Afrique', percentage: '50%', detail: 'Population touchée', examples: 'RDC 80%, Libéria 75%' },
    { region: 'Asie', total: '300 millions', countries: 'Inde/Chine', example: 'Bangladesh 30%' },
    { region: 'Amérique Latine', example: 'Nicaragua 20%', trend: 'Inégalités persistantes' }
  ];

  const healthStats = [
    { metric: 'Mortalité infantile <5 ans', current: '5 millions/an', past: '17 millions (1970)', improvement: 'Division par 3' },
    { metric: 'Espérance de vie', current: '73 ans', past: '46 ans (1950)', progress: '+27 ans' },
    { metric: 'Écart mortalité infantile', best: 'Islande 2‰', worst: 'Centrafrique 80‰', ratio: 'x40 différence' }
  ];

  const slumsData = [
    { region: 'Afrique', share: '55%', trend: 'Croissance rapide' },
    { region: 'Asie du Sud', share: '30%', evolution: 'Stabilisation' },
    { region: 'Chine', progress: 'Réduction à 20%', policy: 'Logements abordables' },
    { region: 'Inde', achievement: '-50 millions', period: 'Depuis 2000' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-red-600 hover:text-red-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-red-600 hover:text-red-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-red-600 hover:text-red-800">
            Thèmes centraux
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Inégalités sociales</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Inégalités sociales au monde</CardTitle>
                <p className="text-red-100 mt-2">
                  Pauvreté, exclusions et disparités mondiales
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">900M</div>
                <div className="text-sm text-red-100">Pauvreté absolue</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">11%</div>
                <div className="text-sm text-red-100">Population mondiale</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">1Md</div>
                <div className="text-sm text-red-100">Bidonvilles 2024</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">73 ans</div>
                <div className="text-sm text-red-100">Espérance vie</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indicateurs de mesure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-blue-600" />
              Comment mesurer les inégalités ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              Les inégalités mondiales se mesurent par plusieurs indicateurs complémentaires, 
              chacun révélant des aspects différents de la pauvreté et des exclusions.
            </p>
            
            <div className="space-y-4">
              {inequalityIndicators.map((indicator, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-blue-600 text-white font-semibold">
                          {indicator.indicator}
                        </Badge>
                        <span className="font-semibold text-blue-800">{indicator.definition}</span>
                      </div>
                      <div className="text-sm text-blue-700">
                        {indicator.composition && <span><strong>Composition :</strong> {indicator.composition}</span>}
                        {indicator.threshold && <span><strong>Seuil :</strong> {indicator.threshold}</span>}
                        {indicator.focus && <span><strong>Focus :</strong> {indicator.focus}</span>}
                        {indicator.method && <span><strong>Méthode :</strong> {indicator.method}</span>}
                        {indicator.scale && <span><strong>Échelle :</strong> {indicator.scale}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Évolution pauvreté absolue */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-green-600" />
              Pauvreté absolue : progrès et stagnation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3">Progrès historiques</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li><strong>2024 :</strong> 900 millions &lt;2,15$/jour (11% mondial)</li>
                  <li><strong>1990 :</strong> 25% population mondiale en pauvreté</li>
                  <li><strong>Amélioration :</strong> Division par plus de 2 en 34 ans</li>
                  <li><strong>Tendance :</strong> Stagnation post-COVID depuis 2020</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-3">Défis persistants</h4>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li><strong>COVID-19 :</strong> Ralentissement des progrès</li>
                  <li><strong>Concentration :</strong> Principalement Afrique et Asie</li>
                  <li><strong>Objectif ODD :</strong> Élimination pauvreté 2030 compromis</li>
                  <li><strong>Climat :</strong> Nouveaux risques pour populations vulnérables</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Répartition géographique de la pauvreté</h4>
              {povertyByRegion.map((region, index) => (
                <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-red-800">{region.region}</div>
                      <div className="text-sm text-red-700 mt-1">
                        {region.percentage && <span>{region.percentage} {region.detail} • </span>}
                        {region.total && <span>{region.total} ({region.countries}) • </span>}
                        {region.examples && <span><strong>Exemples :</strong> {region.examples}</span>}
                        {region.example && <span><strong>Exemple :</strong> {region.example}</span>}
                        {region.trend && <span> • {region.trend}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Inégalités sanitaires */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                Inégalités sanitaires
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthStats.map((stat, index) => (
                  <div key={index} className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="font-semibold text-purple-800 mb-1">{stat.metric}</div>
                    <div className="text-sm text-purple-700">
                      <div><strong>Actuel :</strong> {stat.current}</div>
                      <div><strong>Passé :</strong> {stat.past}</div>
                      <div className="text-xs text-purple-600 mt-1">
                        {stat.improvement || stat.progress || stat.ratio}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Paradoxe :</strong> Malgré les progrès globaux, les écarts entre pays 
                  riches et pauvres restent énormes (facteur 40 pour la mortalité infantile).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bidonvilles urbains */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-600" />
                Bidonvilles et habitat précaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-4">
                <h4 className="font-semibold text-orange-800 mb-2">Situation mondiale 2024</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li><strong>Population :</strong> 1 milliard personnes (+200M depuis 2000)</li>
                  <li><strong>Proportion :</strong> 20% des urbains mondiaux</li>
                  <li><strong>Croissance :</strong> +25% en 24 ans malgré urbanisation</li>
                  <li><strong>Tendance :</strong> Concentration en Afrique et Asie</li>
                </ul>
              </div>

              <div className="space-y-3">
                {slumsData.map((slum, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div>
                      <div className="font-semibold text-yellow-800">{slum.region}</div>
                      <div className="text-sm text-yellow-700">
                        {slum.trend || slum.evolution || slum.policy || slum.period}
                      </div>
                    </div>
                    <div className="font-bold text-yellow-700">
                      {slum.share || slum.progress || slum.achievement}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analyse géopolitique */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-indigo-600" />
              Enjeux géopolitiques des inégalités
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="land">
                <AccordionTrigger className="text-lg">
                  I. Accès à la terre et paradoxes alimentaires
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Paradoxes de la sécurité alimentaire</h4>
                      <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                        <li><strong>Thaïlande :</strong> Premier exportateur riz mondial mais sous-alimentation persistante</li>
                        <li><strong>Brésil :</strong> Géant agro-exportateur, 33 millions de sous-alimentés</li>
                        <li><strong>Inde :</strong> Stocks céréaliers énormes, malnutrition infantile 35%</li>
                        <li><strong>Concentration :</strong> Grandes exploitations exportent, petits paysans s'appauvrissent</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Land grabbing : accaparement des terres</h4>
                      <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                        <li><strong>États-Unis :</strong> 100 contrats, diversification Afrique/Amérique latine</li>
                        <li><strong>Chine :</strong> 90 contrats, sécurité alimentaire priorité</li>
                        <li><strong>Inde :</strong> 60 contrats, focus Afrique (Mozambique)</li>
                        <li><strong>Malaisie :</strong> Expansion palmiers à huile Indonésie</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="madagascar">
                <AccordionTrigger className="text-lg">
                  II. Cas emblématique : Madagascar 2008
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-red-800 mb-3">
                        <AlertTriangle className="inline h-4 w-4 mr-2" />
                        Daewoo-Madagascar : échec du land grabbing
                      </h4>
                      <div className="text-sm text-red-700 space-y-2">
                        <p><strong>Accord initial :</strong> Daewoo (Corée Sud) obtient 1 million ha (99 ans)</p>
                        <p><strong>Objectif :</strong> Maïs et huile de palme pour exportation vers Corée</p>
                        <p><strong>Opposition :</strong> Manifestations populaires, critique "néo-colonialisme"</p>
                        <p><strong>Conséquences :</strong> Chute président Ravalomanana, annulation contrat</p>
                        <p><strong>Leçon :</strong> Résistance sociale face accaparement terres agricoles</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Impact géopolitique</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                        <li><strong>Souveraineté alimentaire :</strong> Priorité sur exportations</li>
                        <li><strong>Régulation :</strong> Encadrement international investissements fonciers</li>
                        <li><strong>Limitation :</strong> &lt;20% terres pour cultures non-alimentaires</li>
                        <li><strong>Alternatives :</strong> Partenariats équitables vs. accaparement</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="differentiation">
                <AccordionTrigger className="text-lg">
                  III. Différenciation du "Tiers-Monde" (Sylvie Brunel)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-3">
                        <Percent className="inline h-4 w-4 mr-2" />
                        Thèse Sylvie Brunel : "Une aubaine pour le Sud ?"
                      </h4>
                      <blockquote className="text-sm text-green-700 italic border-l-4 border-green-400 pl-4">
                        "Le Tiers-Monde n'existe plus. Les trajectoires de l'Afrique, l'Asie, l'Amérique latine 
                        se sont largement différenciées depuis deux décennies."
                      </blockquote>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-800 mb-2">Asie : Émergence</h5>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• Chine : Classe moyenne 400M</li>
                          <li>• Inde : Hub technologique</li>
                          <li>• Corée, Singapour : Développés</li>
                          <li>• Pauvreté résiduelle localisée</li>
                        </ul>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-yellow-800 mb-2">Amérique latine : Inégalités</h5>
                        <ul className="text-xs text-yellow-700 space-y-1">
                          <li>• Brésil, Mexique : Puissances régionales</li>
                          <li>• Classes moyennes émergentes</li>
                          <li>• Inégalités internes fortes</li>
                          <li>• Venezuela, Nicaragua : Crises</li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-orange-800 mb-2">Afrique : Hétérogène</h5>
                        <ul className="text-xs text-orange-700 space-y-1">
                          <li>• Afrique Sud, Botswana : Revenus intermédiaires</li>
                          <li>• Nigeria : Géant économique instable</li>
                          <li>• Sahel : Crises multiples</li>
                          <li>• 50% population sous seuil pauvreté</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </CardContent>
        </Card>

        {/* Références */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">Références et sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Banque mondiale</strong> : Poverty and Shared Prosperity Report 2024</p>
              <p><strong>PNUD</strong> : Rapport sur le développement humain 2024</p>
              <p><strong>Sylvie Brunel</strong> : <em>"Une aubaine pour le Sud ?"</em> - Différenciation trajectoires développement</p>
              <p><strong>UN-Habitat</strong> : State of the World's Cities 2024</p>
              <p><strong>OMS</strong> : Statistiques sanitaires mondiales 2024</p>
              <p><strong>OXFAM</strong> : Rapports inégalités mondiales</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default InegalitesPage;