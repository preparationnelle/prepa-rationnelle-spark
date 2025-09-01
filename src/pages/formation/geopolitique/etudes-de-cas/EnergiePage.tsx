import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Zap, Globe, TrendingUp, AlertTriangle, Fuel, Wind, Sun } from 'lucide-react';

const EnergiePage = () => {
  const energyMix = [
    { source: 'Pétrole', percentage: '31%', trend: 'Baisse depuis 1990', note: 'Énergie mondiale' },
    { source: 'Charbon', percentage: '29%', trend: 'Stable', note: 'Chine dominante' },
    { source: 'Gaz naturel', percentage: 'Stable', trend: 'Régional', note: 'Routes stratégiques' },
    { source: 'Hydraulique', percentage: '15%', trend: 'Chine 30%', note: 'Trois Gorges' }
  ];

  const oilProducers = [
    { country: 'États-Unis', production: '13 millions b/j', share: '20%' },
    { country: 'Arabie Saoudite', production: '9 millions b/j', share: '12%' },
    { country: 'Russie', production: '10 millions b/j', share: '11%' },
    { country: 'Chine', production: '4 millions b/j', share: '5%' },
    { country: 'Canada', production: '5 millions b/j', share: '6%' }
  ];

  const nuclearCountries = [
    { country: 'États-Unis', reactors: '92', share: '23%' },
    { country: 'France', reactors: '56', share: '13%' },
    { country: 'Chine', reactors: '55', share: '13%' },
    { country: 'Russie', reactors: '37', share: '8%' },
    { country: 'Japon', reactors: '33', share: '7%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-orange-600 hover:text-orange-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-orange-600 hover:text-orange-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-orange-600 hover:text-orange-800">
            Études de cas
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Énergie</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Géopolitique énergétique</CardTitle>
                <p className="text-orange-100 mt-2">
                  Production, consommation et transitions énergétiques mondiales
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">31%</div>
                <div className="text-sm text-orange-100">Part du pétrole</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">29%</div>
                <div className="text-sm text-orange-100">Part du charbon</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">440</div>
                <div className="text-sm text-orange-100">Réacteurs nucléaires</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">80$</div>
                <div className="text-sm text-orange-100">Prix baril 2025</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mix énergétique mondial */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fuel className="h-5 w-5 text-orange-600" />
              Mix énergétique mondial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Répartition énergétique 2024</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Le pétrole reste la première source d'énergie mondiale avec <strong>31%</strong>, 
                  bien qu'en baisse depuis 1990. Le charbon représente <strong>29%</strong> 
                  (principalement en Chine), tandis que les renouvelables progressent.
                </p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Consommation :</strong> Volume x1.6 en 25 ans. Chine 24% (charbon), US 17% (gaz-pétrole), BRICS 40%.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {energyMix.map((energy, index) => (
                  <div key={index} className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-orange-800">{energy.source}</span>
                      <span className="font-bold text-orange-700">{energy.percentage}</span>
                    </div>
                    <div className="text-xs text-orange-600 mt-1">{energy.trend} • {energy.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Principaux producteurs de pétrole */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-5 w-5 text-red-600" />
                Producteurs de pétrole (2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {oilProducers.map((producer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <div className="font-semibold text-red-800">{producer.country}</div>
                      <div className="text-sm text-red-600">{producer.share} mondial</div>
                    </div>
                    <div className="font-bold text-red-700">{producer.production}</div>
                  </div>
                ))}
                <div className="bg-red-100 p-3 rounded-lg border border-red-300">
                  <p className="text-sm text-red-800">
                    <strong>Iran :</strong> 3 millions b/j • <strong>Exportations :</strong> Arabie Saoudite 20% exports pétrole
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Géopolitique :</strong> Pétrole = 15% échanges mondiaux. 
                  Demande asiatique +100% depuis 2000. Baril ~80$ en 2025.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Énergie nucléaire */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Énergie nucléaire mondiale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {nuclearCountries.map((country, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <div className="font-semibold text-blue-800">{country.country}</div>
                      <div className="text-sm text-blue-600">{country.share} mondial</div>
                    </div>
                    <div className="font-bold text-blue-700">{country.reactors} réacteurs</div>
                  </div>
                ))}
                <div className="bg-blue-100 p-3 rounded-lg border border-blue-300">
                  <p className="text-sm text-blue-800">
                    <strong>Total :</strong> 440 réacteurs dans 32 pays • <strong>Production :</strong> 10% électricité mondiale
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Débats :</strong> Allemagne sortie en 2023, Japon relance post-Fukushima. 
                  OCDE concentre 80% des réacteurs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Énergies renouvelables */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wind className="h-5 w-5 text-green-600" />
              Énergies renouvelables et marines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-800">Énergies marines</h4>
                </div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Usine de la Rance : 240 MW/an</li>
                  <li>• Sihwa (Corée Sud) leader</li>
                  <li>• Houlomotrice : Mutriku (Espagne)</li>
                  <li>• Hydrothermique : Hawaï, Japon</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <Wind className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Éolien offshore</h4>
                </div>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• UK : 40% production mondiale</li>
                  <li>• Danemark : 15%</li>
                  <li>• Chine : 12%</li>
                  <li>• Europe du Nord leader</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-semibold text-yellow-800">Autres renouvelables</h4>
                </div>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Hydroélectricité : 15% mondial</li>
                  <li>• Chine : 30% (Trois Gorges)</li>
                  <li>• Géothermie : US 25%</li>
                  <li>• Hydrogène vert en développement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analyse géopolitique */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              Enjeux géopolitiques énergétiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="dependances">
                <AccordionTrigger className="text-lg">
                  I. Dépendances et flux énergétiques
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Hydrocarbures stratégiques</h4>
                      <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                        <li><strong>Pétrole :</strong> 15% échanges mondiaux, routes maritimes sensibles</li>
                        <li><strong>Gaz :</strong> Commerce régional, pipelines et GNL</li>
                        <li><strong>Vulnérabilités :</strong> Détroits (Hormuz, Malacca), canaux (Suez)</li>
                        <li><strong>Réserves :</strong> Concentrées au Moyen-Orient (pétrole), Russie (gaz)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Producteurs d'uranium</h4>
                      <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                        <li><strong>Kazakhstan :</strong> 43% production mondiale</li>
                        <li><strong>Canada :</strong> 13% (mines Saskatchewan)</li>
                        <li><strong>Australie :</strong> 12% (Olympic Dam)</li>
                        <li><strong>Namibie :</strong> 7% • <strong>Russie :</strong> 6%</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="geopolitique">
                <AccordionTrigger className="text-lg">
                  II. Géopolitique des transitions énergétiques
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Sécurisation des approvisionnements</h4>
                      <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                        <li><strong>Chine :</strong> Protection oléoducs en Afrique, diversification sources</li>
                        <li><strong>Iran :</strong> Escorte tankers, contournement sanctions</li>
                        <li><strong>Europe :</strong> Dépendance gaz russe, recherche alternatives</li>
                        <li><strong>Stocks stratégiques :</strong> Réserves d'urgence (AIE, SPR américain)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Transition énergétique</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                        <li><strong>Hydrogène vert :</strong> Europe face aux tensions géopolitiques</li>
                        <li><strong>Terres rares :</strong> Dépendance chinoise pour éoliennes/batteries</li>
                        <li><strong>Lithium :</strong> Triangle ABC (Argentine-Bolivie-Chili)</li>
                        <li><strong>Coopération :</strong> Accords climat vs. sécurité énergétique</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="crises">
                <AccordionTrigger className="text-lg">
                  III. Crises et recompositions
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-red-800 mb-3">
                        <AlertTriangle className="inline h-4 w-4 mr-2" />
                        Crise énergétique européenne (2022-2024)
                      </h4>
                      <div className="text-sm text-red-700 space-y-2">
                        <p><strong>Déclencheur :</strong> Guerre Ukraine, sanctions sur gaz russe</p>
                        <p><strong>Impact :</strong> Prix énergétiques x5, inflation, récession</p>
                        <p><strong>Réponses :</strong> REPowerEU, diversification fournisseurs</p>
                        <p><strong>Nouveaux partenaires :</strong> GNL américain, gaz norvégien, solaire</p>
                        <p><strong>Leçons :</strong> Vulnérabilité dépendance unique, accélération transition</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">
                        <Zap className="inline h-4 w-4 mr-2" />
                        Débats nucléaires
                      </h4>
                      <div className="text-sm text-blue-700 space-y-2">
                        <p><strong>Divergences :</strong> Allemagne sortie (2023) vs. France maintien</p>
                        <p><strong>Japon :</strong> Relance post-Fukushima pour indépendance énergétique</p>
                        <p><strong>Nouveaux entrants :</strong> Émirats, Pologne, programmes nucléaires</p>
                        <p><strong>Enjeux :</strong> Sécurité vs. décarbonation, gestion déchets</p>
                        <p><strong>Géopolitique :</strong> Technologie nucléaire comme levier influence</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-green-800 mb-3">
                        <Wind className="inline h-4 w-4 mr-2" />
                        Course aux renouvelables
                      </h4>
                      <div className="text-sm text-green-700 space-y-2">
                        <p><strong>Leadership chinois :</strong> 70% panneaux solaires, batteries</p>
                        <p><strong>Europe :</strong> Green Deal, objectif neutralité carbone 2050</p>
                        <p><strong>États-Unis :</strong> Inflation Reduction Act, investissements massifs</p>
                        <p><strong>Tensions :</strong> Guerre commerciale green tech, dumping chinois</p>
                        <p><strong>Innovation :</strong> Hydrogène, stockage, réseaux intelligents</p>
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
              <p><strong>AIE</strong> (Agence internationale de l'énergie) : World Energy Outlook 2024</p>
              <p><strong>BP</strong> : Statistical Review of World Energy 2024</p>
              <p><strong>IRENA</strong> : Global Energy Transformation 2024</p>
              <p><strong>AIEA</strong> : Power Reactor Information System (PRIS)</p>
              <p><strong>WNA</strong> (World Nuclear Association) : Données nucléaires mondiales</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default EnergiePage;