import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Plane, Ship, Globe, TrendingUp, MapPin, Container, Anchor } from 'lucide-react';

const TransportsPage = () => {
  const maritimeStats = [
    { label: 'Capacité de la flotte', value: '11 milliards tonnes', change: 'x30 depuis 1955' },
    { label: 'Navires en activité', value: '130 000', share: '90% trafic marchandises' },
    { label: 'Croissance annuelle', value: '4%/an', note: 'Flotte x5 en 50 ans' },
    { label: 'Concentration portuaire', value: '25 ports', share: '60% des flux mondiaux' }
  ];

  const topPorts = [
    { rank: 1, name: 'Shanghai', country: 'Chine', teu: '49 millions TEU' },
    { rank: 2, name: 'Singapour', country: 'Singapour', teu: '39 millions TEU' },
    { rank: 3, name: 'Ningbo-Zhoushan', country: 'Chine', teu: '36 millions TEU' },
    { rank: 4, name: 'Shenzhen', country: 'Chine', teu: '30 millions TEU' },
    { rank: 5, name: 'Qingdao', country: 'Chine', teu: '26 millions TEU' }
  ];

  const topAirports = [
    { rank: 1, name: 'Atlanta', country: 'États-Unis', passengers: '110 millions' },
    { rank: 2, name: 'Dubaï', country: 'EAU', passengers: '90 millions' },
    { rank: 3, name: 'Dallas/Fort Worth', country: 'États-Unis', passengers: '85 millions' },
    { rank: 4, name: 'Londres Heathrow', country: 'Royaume-Uni', passengers: '80 millions' },
    { rank: 5, name: 'Tokyo Haneda', country: 'Japon', passengers: '78 millions' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-purple-600 hover:text-purple-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-purple-600 hover:text-purple-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-purple-600 hover:text-purple-800">
            Thèmes centraux
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Transports</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Réseaux de transport mondiaux</CardTitle>
                <p className="text-purple-100 mt-2">
                  Transport maritime, aérien et logistique globale
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">11Md t</div>
                <div className="text-sm text-purple-100">Capacité maritime</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm text-purple-100">Commerce mondial</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">130K</div>
                <div className="text-sm text-purple-100">Navires actifs</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">8/10</div>
                <div className="text-sm text-purple-100">Ports asiatiques</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transport maritime */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ship className="h-5 w-5 text-blue-600" />
              Transport maritime
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Évolution de la flotte mondiale</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  De 1955 à 2024, la capacité de la flotte mondiale a été <strong>multipliée par 30</strong>, 
                  atteignant 11 milliards de tonnes transportées en 2024. L'innovation du conteneur depuis 1956 
                  a révolutionné le transport, avec des navires atteignant 24 000 TEU et une vitesse de 25 nœuds.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>L. Carroué :</strong> <em>"Le transport du conteneur assure sécurité, fiabilité, vitesse et intermodalité"</em>
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {maritimeStats.map((stat, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-800">{stat.label}</span>
                      <span className="font-bold text-blue-700">{stat.value}</span>
                    </div>
                    <div className="text-xs text-blue-600 mt-1">{stat.change || stat.share || stat.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Répartition par type</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 30% marchandises diverses</li>
                  <li>• 25% tankers (hydrocarbures)</li>
                  <li>• 20% vraciers</li>
                  <li>• 15% conteneurs</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">New Panamax</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 15 000-18 000 TEU</li>
                  <li>• 366 m de longueur</li>
                  <li>• 15 m tirant d'eau</li>
                  <li>• Nouvelle génération</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Hydrocarbures</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 3 milliards tonnes (2024)</li>
                  <li>• Routes stratégiques</li>
                  <li>• Détroits sensibles</li>
                  <li>• Vulnérabilités géopolitiques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Top 10 ports conteneurs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Container className="h-5 w-5 text-green-600" />
                Top 10 ports conteneurs (2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topPorts.map((port, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {port.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-green-800">{port.name}</div>
                        <div className="text-sm text-green-600">{port.country}</div>
                      </div>
                    </div>
                    <div className="font-bold text-green-700">{port.teu}</div>
                  </div>
                ))}
                <div className="bg-green-100 p-3 rounded-lg border border-green-300">
                  <p className="text-sm text-green-800">
                    <strong>9.</strong> Rotterdam, Pays-Bas : 15 millions TEU
                  </p>
                  <p className="text-sm text-green-800">
                    <strong>10.</strong> Dubaï, EAU : 15 millions TEU
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Dominance asiatique :</strong> 8 ports asiatiques sur 10, avec une forte concentration chinoise. 
                  Rotterdam reste stratégique pour l'Europe (8% PIB néerlandais, 350 000 emplois).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Top 10 aéroports passagers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-blue-600" />
                Top 10 aéroports passagers (2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topAirports.map((airport, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {airport.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-blue-800">{airport.name}</div>
                        <div className="text-sm text-blue-600">{airport.country}</div>
                      </div>
                    </div>
                    <div className="font-bold text-blue-700">{airport.passengers}</div>
                  </div>
                ))}
                <div className="bg-blue-100 p-3 rounded-lg border border-blue-300">
                  <p className="text-sm text-blue-800">
                    <strong>6-10 :</strong> Denver (77M), Istanbul (76M), Los Angeles (75M), Chicago O'Hare (73M), Paris CDG (72M)
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Répartition :</strong> 5 aéroports américains et 3 asiatiques dans le top 10. 
                  Les 25 premiers aéroports concentrent 70% du trafic passagers mondial.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analyse géopolitique */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-indigo-600" />
              Analyse géopolitique des transports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="maritime">
                <AccordionTrigger className="text-lg">
                  I. Dominance du transport maritime
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Concentration géographique</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                        <li><strong>Asie dominante :</strong> 8 des 10 premiers ports conteneurs (Chine en tête)</li>
                        <li><strong>Armateurs principaux :</strong> Maersk (Danemark), MSC (Suisse), COSCO (Chine)</li>
                        <li><strong>Spécialisation :</strong> Rotterdam 10e en tonnage total (500 millions tonnes)</li>
                        <li><strong>Révolution conteneur :</strong> Standardisation et intermodalité depuis 1956</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Enjeux stratégiques</h4>
                      <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                        <li><strong>Points de passage obligés :</strong> Suez, Panama, Malacca, Hormuz</li>
                        <li><strong>Vulnérabilités :</strong> Blocage Ever Given (Suez 2021), conflits Mer Rouge (2024)</li>
                        <li><strong>Nouvelles routes :</strong> Arctique avec fonte des glaces</li>
                        <li><strong>Sécurisation :</strong> Escortes navales, assurances, détournements</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="aviation">
                <AccordionTrigger className="text-lg">
                  II. Transport aérien et connectivité mondiale
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Concentration du trafic</h4>
                      <ul className="list-disc list-inside text-sm text-purple-700 space-y-1">
                        <li><strong>Hubs majeurs :</strong> 25 premiers aéroports = 70% trafic passagers</li>
                        <li><strong>Top 5 :</strong> 35% des flux mondiaux concentrés</li>
                        <li><strong>Alliances :</strong> Star Alliance, SkyTeam, oneworld dominent</li>
                        <li><strong>Fret aérien :</strong> Hong Kong 1er, Memphis, Shanghai, Incheon, Dubaï</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Évolutions récentes</h4>
                      <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                        <li><strong>Low-cost asiatique :</strong> Expansion rapide (AirAsia, Cebu Pacific)</li>
                        <li><strong>Hubs du Golfe :</strong> Dubaï, Doha, Abu Dhabi comme plateformes intercontinentales</li>
                        <li><strong>Défis environnementaux :</strong> Objectifs zéro carbone d'ici 2050</li>
                        <li><strong>Post-COVID :</strong> Reprise différenciée, business travel transformé</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="crises">
                <AccordionTrigger className="text-lg">
                  III. Crises et vulnérabilités
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-red-800 mb-3">
                        <Anchor className="inline h-4 w-4 mr-2" />
                        Blocage du canal de Suez (2021)
                      </h4>
                      <div className="text-sm text-red-700 space-y-2">
                        <p><strong>Événement :</strong> Ever Given échoué 6 jours, bloquant 12% du commerce mondial</p>
                        <p><strong>Impact :</strong> 400 navires en attente, perturbations chaînes d'approvisionnement</p>
                        <p><strong>Coût :</strong> 9,6 milliards $ par jour de blocage</p>
                        <p><strong>Leçons :</strong> Fragilité des routes commerciales, alternatives nécessaires</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-400 bg-orange-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-orange-800 mb-3">
                        <Globe className="inline h-4 w-4 mr-2" />
                        Conflits en Mer Rouge (2024)
                      </h4>
                      <div className="text-sm text-orange-700 space-y-2">
                        <p><strong>Context :</strong> Tensions géopolitiques affectant trafic Suez-Mer Rouge</p>
                        <p><strong>Détournements :</strong> Route du Cap, allongement voyages +40%</p>
                        <p><strong>Coûts :</strong> Hausse frets, assurances, délais livraison</p>
                        <p><strong>Solutions :</strong> Escortes navales internationales, diversification routes</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">
                        <Plane className="inline h-4 w-4 mr-2" />
                        Résilience et adaptation
                      </h4>
                      <div className="text-sm text-blue-700 space-y-2">
                        <p><strong>Diversification :</strong> Multiplication des routes alternatives</p>
                        <p><strong>Technologie :</strong> Tracking temps réel, optimisation IA</p>
                        <p><strong>Stocks stratégiques :</strong> Reconstitution après COVID-19</p>
                        <p><strong>Nearshoring :</strong> Rapprochement production-consommation</p>
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
              <p><strong>Laurent Carroué</strong> : <em>Géographie de la mondialisation</em> - "Le transport du conteneur assure sécurité, fiabilité, vitesse et intermodalité"</p>
              <p><strong>UNCTAD</strong> (2024) : Review of Maritime Transport</p>
              <p><strong>Ports & Harbors</strong> (2024) : Statistiques portuaires mondiales</p>
              <p><strong>ACI World</strong> (2024) : Airport Traffic Statistics</p>
              <p><strong>ISL</strong> (Institut für Seeverkehrswirtschaft) : Données transport maritime</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default TransportsPage;