import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Building, Globe, Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';

const DubaiPage = () => {
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
          <span className="text-gray-600">Dubai / The Line</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Building className="h-8 w-8 text-yellow-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Dubai / The Line
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Vision 2030 et NEOM. Diversification économique post-pétrole, hubs touristiques et logistiques.
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
                  <Globe className="h-5 w-5 text-yellow-600" />
                  Présentation géopolitique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  L'Arabie Saoudite, via sa Vision 2030, transforme Dubai (comme hub régional) et des projets comme The Line (ville linéaire de 170 km dans NEOM) en piliers d'une diversification économique post-pétrole, avec des enjeux géopolitiques incluant le tourisme (ciblant 150 millions de visiteurs d'ici 2030), un hub aérien/maritime (via ports comme Djeddah), l'énergie renouvelable (50 % du mix d'ici 2030), l'environnement (zéro carbone pour The Line), et le fonds souverain PIF (1 000 milliards USD d'actifs). Les acteurs clés sont Mohammed bin Salman (MBS) comme architecte de la Vision lancée en 2016, la Chine pour les investissements technologiques, et les Émirats arabes unis pour les partenariats régionaux. Des dates importantes incluent 2016 (lancement Vision 2030) et 2025 (avancées sur The Line malgré retards). Cette étude de cas est pertinente pour les sujets suivants : économie et diversification, tourisme, énergie et transition verte, environnement, fonds souverains, diplomatie (accords Abraham), et hubs logistiques.
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Source :</strong> vision2030.gov.sa
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
                    <h4 className="font-semibold text-gray-900">Mohammed bin Salman (MBS)</h4>
                    <p className="text-gray-700">
                      Architecte de la Vision lancée en 2016.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Chine</h4>
                    <p className="text-gray-700">
                      Investissements technologiques massifs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Émirats arabes unis</h4>
                    <p className="text-gray-700">
                      Partenariats régionaux stratégiques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dates importantes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  Dates importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2016</div>
                      <div className="text-gray-700">Lancement Vision 2030</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2025</div>
                      <div className="text-gray-700">Avancées sur The Line malgré retards</div>
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
                  <TrendingUp className="h-5 w-5 text-yellow-600" />
                  Chiffres clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">150M</div>
                    <div className="text-sm text-gray-600">Visiteurs ciblés d'ici 2030</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">50%</div>
                    <div className="text-sm text-gray-600">Mix énergétique renouvelable</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">1000M$</div>
                    <div className="text-sm text-gray-600">Actifs du fonds souverain PIF</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thématiques pertinentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  Thématiques pertinentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Économie et diversification</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Tourisme</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Énergie et transition verte</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Environnement</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Fonds souverains</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Diplomatie (accords Abraham)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Hubs logistiques</span>
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
                  vision2030.gov.sa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiPage;
