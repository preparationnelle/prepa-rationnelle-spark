import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Home, ChevronRight, Plane, Globe, TrendingUp, Users, MapPin, DollarSign, Leaf } from 'lucide-react';

const TourismePage = () => {
  const tourismStats = [
    { label: 'Recettes mondiales', value: '1,800 milliards $', share: '7% PIB mondial' },
    { label: 'Emplois directs', value: '10%', note: 'Population active mondiale' },
    { label: 'Touristes domestiques Inde', value: '1 milliard', share: '95% internes' },
    { label: 'Population concernée', value: '75%', note: 'Population mondiale' }
  ];

  const majorDestinations = [
    { region: 'Europe Sud/Méditerranée', visitors: '250 millions', share: '45% arrivées' },
    { region: 'Asie du Sud-Est', visitors: '150 millions', growth: 'Forte croissance' },
    { region: 'États-Unis', visitors: '120 millions', note: 'Marché mature' },
    { region: 'Amérique latine', visitors: '80 millions', trend: 'Émergent' },
    { region: 'Afrique', visitors: '60 millions', potential: 'Fort potentiel' }
  ];

  const emergingCategories = [
    { category: 'Retraités', volume: '250 millions voyages/an', share: '30% du total', growth: '8%/an' },
    { category: 'Classes moyennes BRICS', trend: 'Transition touristique', impact: 'Accélérée post-COVID' },
    { category: 'Tourisme durable', example: 'Costa Rica écotourisme', challenge: 'Risques climatiques' },
    { category: 'Overtourism', cases: 'Venise, Bali', solution: 'Taxes d\'entrée' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-black hover:text-gray-600">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-black hover:text-gray-600">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-black hover:text-gray-600">
            Thèmes centraux
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-black">Tourisme</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-white border border-gray-400">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Plane className="h-8 w-8 text-black" />
              <div>
                <CardTitle className="text-3xl font-bold text-black">Le tourisme mondial</CardTitle>
                <p className="text-black mt-2">
                  Industrie touristique comme facteur géopolitique
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white border border-gray-400 rounded-lg p-3">
                <div className="text-2xl font-bold text-black">1,8T$</div>
                <div className="text-sm text-black">Recettes 2024</div>
              </div>
              <div className="bg-white border border-gray-400 rounded-lg p-3">
                <div className="text-2xl font-bold text-black">75%</div>
                <div className="text-sm text-black">Pop. concernée</div>
              </div>
              <div className="bg-white border border-gray-400 rounded-lg p-3">
                <div className="text-2xl font-bold text-black">250M</div>
                <div className="text-sm text-black">Retraités voyageurs</div>
              </div>
              <div className="bg-white border border-gray-400 rounded-lg p-3">
                <div className="text-2xl font-bold text-black">10%</div>
                <div className="text-sm text-black">Emplois directs</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Définition académique */}
        <Card className="mb-8 bg-white border border-gray-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-black" />
              Définition et enjeux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-4 rounded-lg border border-gray-400 mb-4">
              <p className="text-black italic">
                <strong>Mathis Stock et Rémy Knafou</strong> (2003) : <em>"Un système d'acteurs, de pratiques et d'espaces 
                qui participent de la recréation des individus par le déplacement et l'habitat temporaire hors des lieux du quotidien"</em>
              </p>
            </div>
            <p className="text-black leading-relaxed mb-4">
              En 2024, l'Inde a enregistré <strong>1 milliard de touristes domestiques</strong> (95% internes), 
              illustrant que le tourisme concerne désormais <strong>75% de la population mondiale</strong>. 
              Cette massification transforme les rapports géopolitiques.
            </p>
            <div className="bg-white border border-gray-400 p-3 rounded-lg">
              <p className="text-sm text-black">
                <strong>Philippe Duhamel :</strong> <em>"Une transition touristique mondiale se met en place"</em>, 
                accélérée par la reprise post-COVID avec l'émergence de nouvelles catégories de voyageurs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Chiffres clés */}
        <Card className="mb-8 bg-white border border-gray-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-black" />
              Données économiques 2024
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tourismStats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-400">
                  <div className="text-2xl font-bold text-black">{stat.value}</div>
                  <div className="text-sm font-medium text-black mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.share || stat.note}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Principales destinations */}
          <Card className="bg-white border border-gray-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-black" />
                Principaux pôles récepteurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {majorDestinations.map((dest, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-400">
                    <div>
                      <div className="font-semibold text-black">{dest.region}</div>
                      <div className="text-sm text-gray-600">{dest.growth || dest.note || dest.trend || dest.potential}</div>
                    </div>
                    <div className="font-bold text-black">{dest.visitors}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-white border border-gray-400 rounded-lg">
                <p className="text-sm text-black">
                  <strong>Concentration :</strong> L'Europe maintient sa dominance avec 45% des arrivées mondiales, 
                  mais l'Asie progresse rapidement (+15% post-COVID).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Catégories émergentes */}
          <Card className="bg-white border border-gray-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-black" />
                Nouvelles catégories touristiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergingCategories.map((cat, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-gray-400">
                    <div className="font-semibold text-black mb-1">{cat.category}</div>
                    <div className="text-sm text-black">
                      {cat.volume && <span>{cat.volume} • </span>}
                      {cat.share && <span>{cat.share} • </span>}
                      {cat.growth && <span>Croissance {cat.growth}</span>}
                      {cat.trend && <span>{cat.trend}</span>}
                      {cat.example && <span>{cat.example}</span>}
                      {cat.cases && <span>{cat.cases}</span>}
                    </div>
                    {cat.impact && <div className="text-xs text-gray-600 mt-1">{cat.impact}</div>}
                    {cat.challenge && <div className="text-xs text-gray-600 mt-1">{cat.challenge}</div>}
                    {cat.solution && <div className="text-xs text-gray-600 mt-1">{cat.solution}</div>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analyse géopolitique structurée */}
        <Card className="bg-white border border-gray-400 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-black" />
              Enjeux géopolitiques du tourisme
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Section I */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">I. Concentration et contrôle de l'industrie</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-2">Oligopoles touristiques</h4>
                  <ul className="list-disc list-inside text-sm text-black space-y-1">
                    <li><strong>Hôtellerie :</strong> 7 firmes contrôlent 50% des hôtels mondiaux</li>
                    <li><strong>Transport aérien :</strong> Alliances (Star Alliance, SkyTeam, oneworld)</li>
                    <li><strong>Plateformes numériques :</strong> Airbnb, Booking dominent la réservation</li>
                    <li><strong>Concentration accrue :</strong> Numérisation renforce les leaders</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-2">Dépendance économique</h4>
                  <ul className="list-disc list-inside text-sm text-black space-y-1">
                    <li><strong>Petits États :</strong> Tourisme = 40-60% PIB (Maldives, Caraïbes)</li>
                    <li><strong>Emplois :</strong> 10% emplois directs mondiaux, 20% indirects</li>
                    <li><strong>Vulnérabilité :</strong> Crises sanitaires, géopolitiques, climatiques</li>
                    <li><strong>Devises :</strong> Source majeure de devises étrangères</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section II */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">II. Émergence de nouveaux acteurs</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-2">Transition touristique mondiale</h4>
                  <ul className="list-disc list-inside text-sm text-black space-y-1">
                    <li><strong>Retraités :</strong> 250 millions voyages/an, pouvoir d'achat élevé</li>
                    <li><strong>Classes moyennes BRICS :</strong> Croissance 8%/an, nouvelles destinations</li>
                    <li><strong>Tourisme domestique :</strong> Inde 1 milliard, Chine 6 milliards/an</li>
                    <li><strong>Diversification :</strong> Flux Sud-Sud, réduction dépendance Nord</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-2">Soft power touristique</h4>
                  <ul className="list-disc list-inside text-sm text-black space-y-1">
                    <li><strong>Attractivité culturelle :</strong> Patrimoine UNESCO, événements</li>
                    <li><strong>Image pays :</strong> Tourism branding, diplomatie culturelle</li>
                    <li><strong>Méga-événements :</strong> JO, Coupe du monde, expositions</li>
                    <li><strong>Influence :</strong> Valeurs, mode de vie, consommation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section III */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">III. Défis contemporains et durabilité</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-black bg-white p-4 rounded-r-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-3">
                    <Users className="inline h-4 w-4 mr-2" />
                    Overtourism - Venise et Bali
                  </h4>
                  <div className="text-sm text-black space-y-2">
                    <p><strong>Venise :</strong> 25M visiteurs/an pour 50 000 habitants</p>
                    <p><strong>Saturation :</strong> Dégradation patrimoine, exode résidents</p>
                    <p><strong>Solutions :</strong> Taxes d'entrée (5€), quotas journaliers</p>
                    <p><strong>Bali :</strong> Fermetures temporaires temples, écotaxes</p>
                    <p><strong>Modèle :</strong> Tourisme régulé vs. croissance libre</p>
                  </div>
                </div>

                <div className="border-l-4 border-black bg-white p-4 rounded-r-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-3">
                    <Leaf className="inline h-4 w-4 mr-2" />
                    Tourisme durable - Costa Rica
                  </h4>
                  <div className="text-sm text-black space-y-2">
                    <p><strong>Modèle :</strong> Écotourisme, 25% territoire protégé</p>
                    <p><strong>Certification :</strong> Sustainable Tourism Program (CST)</p>
                    <p><strong>Retombées :</strong> 6% PIB, conservation biodiversité</p>
                    <p><strong>Défis climatiques :</strong> Ouragans, élévation niveau mer</p>
                    <p><strong>Réplication :</strong> Botswana, Norvège, Nouvelle-Zélande</p>
                  </div>
                </div>

                <div className="border-l-4 border-black bg-white p-4 rounded-r-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-3">
                    <DollarSign className="inline h-4 w-4 mr-2" />
                    Impact climatique et adaptation
                  </h4>
                  <div className="text-sm text-black space-y-2">
                    <p><strong>Emissions :</strong> Transport aérien 8% émissions carbone</p>
                    <p><strong>Objectif :</strong> Secteur aérien zéro carbone 2050</p>
                    <p><strong>Adaptation :</strong> Nouvelles destinations (Arctique), saisons</p>
                    <p><strong>Risques :</strong> Îles menacées, stations ski, récifs coralliens</p>
                    <p><strong>Innovation :</strong> Carburants durables, tourisme spatial</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Références */}
        <Card className="mt-8 bg-white border border-gray-400">
          <CardHeader>
            <CardTitle className="text-lg text-black">Références et sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-black space-y-2">
              <p><strong>Mathis Stock et Rémy Knafou</strong> (2003) : Définition systémique du tourisme</p>
              <p><strong>Philippe Duhamel</strong> : <em>"Une transition touristique mondiale se met en place"</em></p>
              <p><strong>OMT</strong> (Organisation mondiale du tourisme) : Données 2024</p>
              <p><strong>WTTC</strong> (World Travel & Tourism Council) : Impact économique</p>
              <p><strong>PNUE</strong> : Rapports tourisme durable et climat</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default TourismePage;