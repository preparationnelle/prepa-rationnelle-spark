import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Ship, Globe, Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';

const SuezPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-slate-600 hover:text-slate-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-slate-600 hover:text-slate-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-slate-600 hover:text-slate-800">
            Études de cas
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Canal de Suez</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Ship className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Canal de Suez
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Chokepoint vital pour 12% du commerce mondial. Sécurité maritime et enjeux historiques.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-6">
            {/* Présentation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Présentation géopolitique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Le Canal de Suez, reliant la Méditerranée à la Mer Rouge depuis son ouverture en 1869, est un chokepoint géopolitique vital pour 12 % du commerce mondial (50 000 navires/an, 1 milliard de tonnes de fret), avec des enjeux passés liés à l'impérialisme (crise de 1956) et présents à la sécurité maritime (blocage Ever Given en 2021 causant 9 milliards USD/jour de pertes). Les acteurs clés incluent l'Égypte (propriétaire depuis la nationalisation de 1956 par Nasser), le Royaume-Uni et la France (anciens contrôles), Israël (fermetures pendant les guerres arabes-israéliennes 1967-1975), et des puissances comme les États-Unis et la Chine pour la sécurisation. Des dates marquantes sont 1869 (ouverture), 1956 (crise de Suez), et 2021 (incident Ever Given). Cette étude de cas est pertinente pour les sujets suivants : commerce international, histoire coloniale, sécurité maritime, économie globale, conflits militaires, et diplomatie régionale.
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Source :</strong> suezcanal.gov.eg
                </p>
              </CardContent>
            </Card>

            {/* Acteurs clés */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Acteurs clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Égypte</h4>
                    <p className="text-gray-700">
                      Propriétaire depuis la nationalisation de 1956 par Nasser.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Anciens contrôles</h4>
                    <p className="text-gray-700">
                      Royaume-Uni et France (anciens contrôles), Israël (fermetures pendant les guerres 1967-1975).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Puissances actuelles</h4>
                    <p className="text-gray-700">
                      États-Unis et Chine pour la sécurisation des routes commerciales.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dates marquantes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  Dates marquantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">1869</div>
                      <div className="text-gray-700">Ouverture du canal</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">1956</div>
                      <div className="text-gray-700">Crise de Suez et nationalisation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2021</div>
                      <div className="text-gray-700">Incident Ever Given - blocage du canal</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne latérale */}
          <div className="space-y-6">
            {/* Chiffres clés */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Chiffres clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">12%</div>
                    <div className="text-sm text-gray-600">Commerce mondial</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">50 000</div>
                    <div className="text-sm text-gray-600">Navires par an</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">9M$</div>
                    <div className="text-sm text-gray-600">Pertes/jour (Ever Given)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thématiques pertinentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ship className="h-5 w-5 text-blue-600" />
                  Thématiques pertinentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Commerce international</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Histoire coloniale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Sécurité maritime</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Économie globale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Conflits militaires</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Diplomatie régionale</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-gray-600" />
                  Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  suezcanal.gov.eg
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuezPage;
