import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, DollarSign, Globe, Users, Calendar, TrendingUp } from 'lucide-react';

const GuerreEconomiquePage = () => {
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
          <span className="text-gray-600">Guerre économique</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-8 w-8 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Guerre économique
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Sanctions, tariffs et chokepoints. Déstabilisation des chaînes d'approvisionnement globales.
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
                  <Globe className="h-5 w-5 text-red-600" />
                  Présentation géopolitique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  La guerre économique désigne les stratégies étatiques pour affaiblir l'économie adverse via sanctions, tariffs et chokepoints, avec des enjeux comme la déstabilisation de chaînes d'approvisionnement (ex. : Russie-Ukraine impactant 20 % du blé mondial) et la montée des risques géopolitiques mesurés par des indices comme le GPR (spikes lors des guerres mondiales). Les acteurs principaux sont les États-Unis (leader en sanctions depuis la Guerre froide), la Chine et la Russie comme cibles/répliquants, avec des exemples comme les tariffs Trump (2018-2025) ou les embargos sur l'Iran. Des dates clés incluent 1945 (début Guerre froide économique) et 2022 (sanctions post-invasion Ukraine). Cette étude de cas est pertinente pour les sujets suivants : économie internationale, sécurité, commerce, diplomatie, ressources critiques, et ingérence cyber.
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Source :</strong> ebsco.com
                </p>
              </CardContent>
            </Card>

            {/* Acteurs principaux */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Acteurs principaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">États-Unis</h4>
                    <p className="text-gray-700">
                      Leader en sanctions depuis la Guerre froide.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Chine et Russie</h4>
                    <p className="text-gray-700">
                      Cibles/répliquants des sanctions occidentales.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Exemples historiques</h4>
                    <p className="text-gray-700">
                      Tariffs Trump (2018-2025), embargos sur l'Iran.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dates clés */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  Dates clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">1945</div>
                      <div className="text-gray-700">Début Guerre froide économique</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2018-2025</div>
                      <div className="text-gray-700">Tariffs Trump</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2022</div>
                      <div className="text-gray-700">Sanctions post-invasion Ukraine</div>
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
                  <TrendingUp className="h-5 w-5 text-red-600" />
                  Chiffres clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">20%</div>
                    <div className="text-sm text-gray-600">Béton mondial impacté</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thématiques pertinentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  Thématiques pertinentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Économie internationale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Sécurité</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Commerce</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Diplomatie</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Ressources critiques</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Ingérence cyber</span>
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
                  ebsco.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuerreEconomiquePage;
