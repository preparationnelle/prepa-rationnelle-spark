import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Leaf, Globe, TrendingUp, Building, Wheat, Factory } from 'lucide-react';

const AgroalimentairePage = () => {
  const agriStats = [
    { label: 'Exploitations mondiales', value: '600 millions', concentration: '3/4 en Asie' },
    { label: 'Grandes exploitations', value: '6%', share: '70% des terres' },
    { label: 'Croissance exports', value: 'x3,5', period: 'depuis 2000' },
    { label: 'Part PED', value: '45%', sector: 'Commerce agricole' }
  ];

  const topExporters = [
    { product: 'Blé', leaders: 'Russie, US, Canada, France, Australie' },
    { product: 'Maïs', leaders: 'US, Brésil, Argentine, Ukraine, France' },
    { product: 'Riz', leaders: 'Inde, Thaïlande, Vietnam, Pakistan, US' },
    { product: 'Soja', leaders: 'Brésil, US, Argentine, Paraguay, Canada' },
    { product: 'Viande bovine', leaders: 'Brésil, Australie, US, Inde, Argentine' }
  ];

  const topCompanies = [
    { company: 'Nestlé', country: 'Suisse', ca: '100 milliards $', sector: 'Aliments transformés' },
    { company: 'PepsiCo', country: 'US', sector: 'Boissons, snacks' },
    { company: 'Unilever', country: 'UK/NL', sector: 'Biens consommation' },
    { company: 'Coca-Cola', country: 'US', sector: 'Boissons' },
    { company: 'Mars', country: 'US', sector: 'Confiserie' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-yellow-600 hover:text-yellow-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-yellow-600 hover:text-yellow-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-yellow-600 hover:text-yellow-800">
            Études de cas
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Système agroalimentaire</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Wheat className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Système agroalimentaire mondial</CardTitle>
                <p className="text-yellow-100 mt-2">
                  Agriculture, alimentation et sécurité alimentaire mondiales
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">600M</div>
                <div className="text-sm text-yellow-100">Exploitations</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">x3,5</div>
                <div className="text-sm text-yellow-100">Exports depuis 2000</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm text-yellow-100">Exploitations Asie</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm text-yellow-100">Terres (6% exploitations)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Structure agricole */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-yellow-600" />
              Structure agricole mondiale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>3/4 des 600 millions d'exploitations</strong> se trouvent en Asie (35% Chine, 25% Inde). 
              Paradoxalement, seulement <strong>6% des exploitations</strong> de plus de 5 ha contrôlent 
              <strong>70% des terres agricoles</strong>, illustrant la concentration foncière mondiale.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">Tailles moyennes</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• États-Unis : 180 ha</li>
                  <li>• France : 60 ha</li>
                  <li>• Argentine : 600 ha</li>
                                      <li>• Chine : {'<'}1 ha</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Grandes exploitations</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                                      <li>• Philippines : Dole {'>'}10 000 ha</li>
                    <li>• US : 60 000 farms {'>'}1M$ (65% production)</li>
                  <li>• France : Vignes Champagne 1M€/ha</li>
                  <li>• Concentration croissante</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">Firmes agroalimentaires</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Monsanto (Bayer) : 15Md$ CA</li>
                  <li>• Nestlé : 100Md$ CA leader</li>
                  <li>• Transformation alimentaire</li>
                  <li>• Contrôle semences</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Principaux exportateurs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Principaux exportateurs (2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topExporters.map((export_, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-800 mb-1">{export_.product}</div>
                    <div className="text-sm text-green-700">{export_.leaders}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Évolution :</strong> Exports x3,5 depuis 2000. PED représentent 45% du commerce agricole. 
                  Chine devient 2e exportateur mondial.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Top firmes agroalimentaires */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="h-5 w-5 text-blue-600" />
                Top 5 firmes agroalimentaires (2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topCompanies.map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <div className="font-semibold text-blue-800">{company.company}</div>
                      <div className="text-sm text-blue-600">{company.country} • {company.sector}</div>
                    </div>
                    {company.ca && <div className="font-bold text-blue-700">{company.ca}</div>}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Agrochimiques :</strong> Bayer, Corteva, Syngenta, BASF, FMC dominent 
                  les semences et pesticides mondiaux.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analyse géopolitique */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              Enjeux géopolitiques agroalimentaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="security">
                <AccordionTrigger className="text-lg">
                  I. Sécurité alimentaire et dépendances
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Paradoxes alimentaires</h4>
                      <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                        <li><strong>Thaïlande :</strong> Export riz mais sous-alimentation interne</li>
                        <li><strong>Brésil :</strong> 1er exportateur soja, 33M personnes sous-alimentées</li>
                        <li><strong>Inde :</strong> Stocks énormes, malnutrition persistante</li>
                        <li><strong>Concentration :</strong> 4 firmes contrôlent 70% commerce céréales</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Vulnérabilités géopolitiques</h4>
                      <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                        <li><strong>Ukraine :</strong> "Grenier Europe" perturbé par guerre (2022-)</li>
                        <li><strong>Fertilisants :</strong> Russie 20% exports, sanctions impactent production</li>
                        <li><strong>Routes commerciales :</strong> Mer Noire, détroits sensibles</li>
                        <li><strong>Climat :</strong> Sécheresses (Corne Afrique), inondations (Pakistan)</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="land">
                <AccordionTrigger className="text-lg">
                  II. Accaparement des terres (Land Grabbing)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Acteurs et stratégies</h4>
                      <ul className="list-disc list-inside text-sm text-purple-700 space-y-1">
                        <li><strong>États-Unis :</strong> 100 contrats, diversification Afrique/Amérique latine</li>
                        <li><strong>Chine :</strong> 90 contrats, focus sécurité alimentaire</li>
                        <li><strong>Inde :</strong> 60 contrats, principalement Afrique (Mozambique)</li>
                        <li><strong>Malaisie :</strong> Expansion palmiers Indonésie, Liberia</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Cas emblématique : Madagascar (2008)</h4>
                      <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                        <li><strong>Contrat :</strong> Daewoo (Corée Sud) 1 million ha - 99 ans</li>
                        <li><strong>Objectif :</strong> Maïs, huile palme pour export Corée</li>
                        <li><strong>Opposition :</strong> Manifestations, chute président Ravalomanana</li>
                        <li><strong>Annulation :</strong> Nouveau gouvernement annule accord</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="technology">
                <AccordionTrigger className="text-lg">
                  III. Technologies et durabilité
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-green-800 mb-3">
                        <Leaf className="inline h-4 w-4 mr-2" />
                        OGM et sécurité alimentaire
                      </h4>
                      <div className="text-sm text-green-700 space-y-2">
                        <p><strong>Adoption :</strong> 190M ha cultivés (USA, Brésil, Argentine leaders)</p>
                        <p><strong>Avantages :</strong> Résistance sécheresse, rendements +20-30%</p>
                        <p><strong>Controverses :</strong> Dépendance semenciers, impacts environnement</p>
                        <p><strong>Géopolitique :</strong> UE restrictive vs. Amériques permissives</p>
                        <p><strong>Afrique :</strong> Débats souveraineté alimentaire vs. productivité</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">
                        <Building className="inline h-4 w-4 mr-2" />
                        Agriculture de précision et numérique
                      </h4>
                      <div className="text-sm text-blue-700 space-y-2">
                        <p><strong>Technologies :</strong> GPS, drones, capteurs IoT, satellites</p>
                        <p><strong>Objectifs :</strong> Optimisation intrants, réduction impact environnemental</p>
                        <p><strong>Leaders :</strong> John Deere, Trimble, firmes tech (Google, Microsoft)</p>
                        <p><strong>Fracture :</strong> Agriculteurs connectés vs. traditionnels</p>
                        <p><strong>Données :</strong> Propriété information agricole, vie privée</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-yellow-800 mb-3">
                        <Globe className="inline h-4 w-4 mr-2" />
                        Sylvie Brunel : Fin du Tiers-Monde agricole
                      </h4>
                      <div className="text-sm text-yellow-700 space-y-2">
                        <p><strong>Thèse :</strong> <em>"Le Tiers-Monde n'existe plus. Les trajectoires de l'Afrique, l'Asie, l'Amérique latine se sont largement différenciées"</em></p>
                        <p><strong>Émergents :</strong> Brésil, Argentine agroexportateurs concurrencent USA, UE</p>
                        <p><strong>Asie :</strong> Révolution verte, intensification (Inde, Chine autosuffisantes)</p>
                        <p><strong>Afrique :</strong> Hétérogène, potentiel énorme mais sous-exploitation</p>
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
              <p><strong>FAO</strong> : État de la sécurité alimentaire mondiale 2024</p>
              <p><strong>Sylvie Brunel</strong> : <em>"Une aubaine pour le Sud ?"</em> - Différenciation trajectoires</p>
              <p><strong>USDA</strong> : Données production et commerce agricoles</p>
              <p><strong>GRAIN</strong> : Rapports accaparement terres</p>
              <p><strong>OCDE-FAO</strong> : Perspectives agricoles 2024-2033</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AgroalimentairePage;