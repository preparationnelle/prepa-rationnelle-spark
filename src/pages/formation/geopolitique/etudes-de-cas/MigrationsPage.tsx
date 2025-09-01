import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Home, ChevronRight, Users, Globe, TrendingUp, AlertTriangle, MapPin, DollarSign } from 'lucide-react';

const MigrationsPage = () => {
  const keyFigures = [
    { label: 'Migrants internationaux', value: '304 millions', year: '2024', change: '+75M depuis 1965' },
    { label: 'Part de la population mondiale', value: '3,7%', year: '2024', change: 'x4 en 60 ans' },
    { label: 'Migrants irréguliers', value: '25-30 millions', year: '2025', change: 'En augmentation' },
    { label: 'Revenus passeurs', value: '5-15 milliards $', year: '2025', change: 'Croissance continue' },
    { label: 'Réfugiés', value: '43,7 millions', year: '2024', change: '+6M Palestiniens' },
    { label: 'Déplacés internes', value: '40 millions', year: '2024', change: '10M Soudan' },
    { label: 'Total déplacés forcés', value: '122 millions', year: '2025', change: 'Record historique' },
    { label: 'Remittances', value: '850 milliards $', year: '2024', change: '50% PIB Tadjikistan' }
  ];

  const topDestinations = [
    { country: 'États-Unis', migrants: '51,9 millions', annual: '1 million/an', rank: '1er' },
    { country: 'Russie', migrants: '11 millions', note: 'Post-URSS', rank: '2e' },
    { country: 'Allemagne', migrants: '10 millions', note: 'Hub européen', rank: '3e' },
    { country: 'Arabie Saoudite', migrants: '13 millions', note: 'Contrats temporaires', rank: '4e' },
    { country: 'France', migrants: '8,5 millions', note: 'Tradition d\'accueil', rank: '6e' }
  ];

  const refugeeHosts = [
    { country: 'Iran', refugees: '3,7 millions', origin: 'Afghans et Irakiens' },
    { country: 'Turquie', refugees: '3,6 millions', origin: 'Syriens et Palestiniens' },
    { country: 'Allemagne', refugees: '2,1 millions', origin: 'Europe et Moyen-Orient' },
    { country: 'Pakistan', refugees: '2,0 millions', origin: 'Afghans principalement' },
    { country: 'Ouganda', refugees: '1,5 millions', origin: 'Afrique de l\'Est' }
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
            Études de cas
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-black">Migrations</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-white border border-gray-400">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-black" />
              <div>
                <CardTitle className="text-3xl font-bold text-black">Migrations internationales</CardTitle>
                <p className="text-black mt-2">
                  Flux migratoires mondiaux et enjeux géopolitiques contemporains
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white border border-gray-400 rounded-lg p-3">
                <div className="text-2xl font-bold text-black">304M</div>
                <div className="text-sm text-black">Migrants internationaux</div>
              </div>
              <div className="bg-white border border-gray-400 rounded-lg p-3">
                <div className="text-2xl font-bold text-black">3,7%</div>
                <div className="text-sm text-black">Population mondiale</div>
              </div>
              <div className="bg-white border border-gray-400 rounded-lg p-3">
                <div className="text-2xl font-bold text-black">122M</div>
                <div className="text-sm text-black">Déplacés forcés</div>
              </div>
              <div className="bg-white border border-gray-400 rounded-lg p-3">
                <div className="text-2xl font-bold text-black">850Md$</div>
                <div className="text-sm text-black">Remittances</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vue d'ensemble */}
        <Card className="mb-8 bg-white border border-gray-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-black" />
              Vue d'ensemble
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-black leading-relaxed mb-4">
              Le nombre de personnes vivant dans un autre pays est passé de <strong>75 millions en 1965</strong> à 
              <strong> 304 millions en 2024</strong> (3,7% de la population mondiale), soit un quadruplement en près de 60 ans. 
              Cette expansion s'accompagne de défis géopolitiques majeurs.
            </p>
            <p className="text-black leading-relaxed">
              Les flux Sud-Sud représentent désormais <strong>40% des migrations</strong> (contre 35% Sud-Nord), 
              témoignant d'une recomposition des « couples migratoires » traditionnels selon L. Carroué : 
              <em>"Le dispositif migratoire s'articule autour de vastes systèmes de voisinage continental"</em>.
            </p>
          </CardContent>
        </Card>

        {/* Chiffres clés */}
        <Card className="mb-8 bg-white border border-gray-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-black" />
              Chiffres clés 2024-2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyFigures.map((figure, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-400">
                  <div className="text-2xl font-bold text-black">{figure.value}</div>
                  <div className="text-sm font-medium text-black mb-1">{figure.label}</div>
                  <div className="text-xs text-gray-600">
                    {figure.year} • {figure.change}
                  </div>
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
                Principales destinations (2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topDestinations.map((dest, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-400">
                    <div>
                      <div className="font-semibold text-black">{dest.country}</div>
                      <div className="text-sm text-gray-600">{dest.note}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-black">{dest.migrants}</div>
                      <div className="text-xs text-gray-600">{dest.rank} mondial</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-white border border-gray-400 rounded-lg">
                <p className="text-sm text-black">
                  <strong>Note :</strong> L'Europe reste limitée malgré les débats sur l'immigration. 
                  La Chine accueille environ 300 000 migrants (10e rang), principalement Vietnamiens et Nord-Coréens.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Top 5 pays d'accueil de réfugiés */}
          <Card className="bg-white border border-gray-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-black" />
                Top 5 pays d'accueil de réfugiés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {refugeeHosts.map((host, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-400">
                    <div>
                      <div className="font-semibold text-black">{host.country}</div>
                      <div className="text-sm text-gray-600">{host.origin}</div>
                    </div>
                    <div className="font-bold text-black">{host.refugees}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-white border border-gray-400 rounded-lg">
                <p className="text-sm text-black">
                  <strong>Important :</strong> Les pays en développement hébergent 73% des réfugiés mondiaux, 
                  tandis que l'Europe n'en accueille qu'environ 7 millions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analyse géopolitique structurée */}
        <Card className="bg-white border border-gray-400 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-black" />
              Analyse géopolitique structurée
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Section I */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">I. Causes et dynamiques migratoires</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-2">Facteurs de déplacement</h4>
                  <ul className="list-disc list-inside text-sm text-black space-y-1">
                    <li><strong>Conflits :</strong> Ukraine (+6M réfugiés), Gaza (2M déplacés), Soudan (10M déplacés internes)</li>
                    <li><strong>Changement climatique :</strong> 200 millions de migrants climatiques estimés d'ici 2050</li>
                    <li><strong>Inégalités économiques :</strong> Recherche d'opportunités (migrations Sud-Nord)</li>
                    <li><strong>Réseaux familiaux :</strong> Chaînes migratoires renforcées par le numérique</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-2">Évolution des flux</h4>
                  <ul className="list-disc list-inside text-sm text-black space-y-1">
                    <li><strong>Diversification :</strong> Flux Sud-Sud en progression (40% vs 35% Sud-Nord)</li>
                    <li><strong>Régionalisation :</strong> Systèmes de voisinage continental (Carroué)</li>
                    <li><strong>Irrégularité :</strong> 25-30 millions de migrants irréguliers générant 5-15Md$ aux passeurs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section II */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">II. Conséquences géopolitiques</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-2">Conséquences démographiques</h4>
                  <ul className="list-disc list-inside text-sm text-black space-y-1">
                    <li><strong>Pays d'accueil :</strong> Canada sélectionne migrants qualifiés (high-skilled programs)</li>
                    <li><strong>Pays émetteurs :</strong> Brain drain persistant en Afrique subsaharienne</li>
                    <li><strong>Vieillissement :</strong> Migrations compensent déclin démographique (Europe, Japon)</li>
                    <li><strong>Intégration :</strong> Défis culturels post-pandémie, tensions identitaires</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-2">Conséquences économiques</h4>
                  <ul className="list-disc list-inside text-sm text-black space-y-1">
                    <li><strong>Remittances :</strong> 850 milliards $ en 2024 (50% PIB Tadjikistan, 35% Kirghizistan)</li>
                    <li><strong>Marché du travail :</strong> Secteurs en tension (santé, agriculture, BTP)</li>
                    <li><strong>Innovation :</strong> Entrepreneurs immigrés (Silicon Valley, start-ups européennes)</li>
                    <li><strong>Coûts d'accueil :</strong> Budgets publics, infrastructure, éducation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section III */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">III. Études de cas encadrées</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-black bg-white p-4 rounded-r-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-3">
                    <AlertTriangle className="inline h-4 w-4 mr-2" />
                    Crise migratoire en Méditerranée
                  </h4>
                  <div className="text-sm text-black space-y-2">
                    <p><strong>Ampleur :</strong> Plus de 100 000 traversées en 2024</p>
                    <p><strong>Facteurs :</strong> Conflits en Libye/Syrie, changement climatique</p>
                    <p><strong>Routes :</strong> Libye-Italie, Maroc-Espagne, Turquie-Grèce</p>
                    <p><strong>Réponses :</strong> Opérations de sauvetage, accords avec pays de transit</p>
                    <p><strong>Enjeux :</strong> Solidarité européenne, externalisation des frontières</p>
                  </div>
                </div>

                <div className="border-l-4 border-black bg-white p-4 rounded-r-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-3">
                    <Globe className="inline h-4 w-4 mr-2" />
                    Migrations climatiques
                  </h4>
                  <div className="text-sm text-black space-y-2">
                    <p><strong>Projections :</strong> 200 millions de migrants climatiques d'ici 2050</p>
                    <p><strong>Cas emblématique :</strong> Îles du Pacifique submergées (Tuvalu, Kiribati)</p>
                    <p><strong>Phénomènes :</strong> Montée des eaux, désertification, événements extrêmes</p>
                    <p><strong>Défis juridiques :</strong> Statut des "réfugiés climatiques" non reconnu</p>
                    <p><strong>Adaptation :</strong> Programmes de relocalisation, villes d'accueil</p>
                  </div>
                </div>

                <div className="border-l-4 border-black bg-white p-4 rounded-r-lg border border-gray-400">
                  <h4 className="font-semibold text-black mb-3">
                    <DollarSign className="inline h-4 w-4 mr-2" />
                    Impact des remittances
                  </h4>
                  <div className="text-sm text-black space-y-2">
                    <p><strong>Volume global :</strong> 850 milliards $ en 2024</p>
                    <p><strong>Cas extrêmes :</strong> 50% PIB Tadjikistan, 35% Kirghizistan</p>
                    <p><strong>Stabilité :</strong> Plus stable que l'aide au développement</p>
                    <p><strong>Effets :</strong> Réduction pauvreté, investissement local, dépendance</p>
                    <p><strong>Innovation :</strong> Transferts numériques, réduction des coûts</p>
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
              <p><strong>Laurent Carroué</strong> (2004) : <em>"Le dispositif migratoire s'articule autour de vastes systèmes de voisinage continental"</em></p>
              <p><strong>HCR</strong> (2024) : Statistiques sur les réfugiés et déplacés</p>
              <p><strong>OIM</strong> (2024) : Rapport sur les migrations mondiales</p>
              <p><strong>Banque mondiale</strong> (2024) : Données sur les remittances</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default MigrationsPage;