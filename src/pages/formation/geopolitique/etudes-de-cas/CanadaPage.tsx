import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Shield, Globe, Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';

const CanadaPage = () => {
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
          <span className="text-gray-600">Canada - Guerre économique</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Canada - Guerre économique
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Ingérences chinoises et tariffs américains. Sécurité économique exposant 10-20% du PIB.
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
                  Le Canada est au cœur de guerres économiques géopolitiques, confronté à des menaces comme les ingérences chinoises dans ses industries critiques (minéraux rares, technologie) et les tariffs américains sous Trump, avec des enjeux de sécurité économique représentant potentiellement 10-20 % de son PIB exposé aux disruptions de chaînes d'approvisionnement. Les acteurs clés incluent le gouvernement canadien (sous Justin Trudeau puis potentiellement un nouveau leader en 2025), les États-Unis comme allié et rival commercial, la Chine et la Russie comme adversaires, avec des politiques comme la Stratégie indo-pacifique de 2022 et le projet "Canada at Economic War" lancé en 2025 par CIGI. Des dates marquantes sont 2018 (début de la guerre commerciale US-Chine impactant le Canada) et 2025 (impacts de Trump 2.0 sur les tariffs, avec des taux moyens US bas mais ciblés). Cette étude de cas est pertinente pour les sujets suivants : économie et commerce, sécurité nationale, alliances (OTAN, USMCA), ressources critiques, diplomatie, et ingérence étrangère.
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Source :</strong> atlanticcouncil.org
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
                    <h4 className="font-semibold text-gray-900">Gouvernement canadien</h4>
                    <p className="text-gray-700">
                      Sous Justin Trudeau puis potentiellement un nouveau leader en 2025.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">États-Unis</h4>
                    <p className="text-gray-700">
                      Allié et rival commercial, avec des tariffs sous Trump.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Chine et Russie</h4>
                    <p className="text-gray-700">
                      Adversaires avec des stratégies d'ingérence étrangère.
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
                      <div className="font-semibold">2018</div>
                      <div className="text-gray-700">Début de la guerre commerciale US-Chine impactant le Canada</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2022</div>
                      <div className="text-gray-700">Stratégie indo-pacifique du Canada</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2025</div>
                      <div className="text-gray-700">Impacts de Trump 2.0 sur les tariffs</div>
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
                    <div className="text-2xl font-bold text-red-600">10-20%</div>
                    <div className="text-sm text-gray-600">PIB exposé aux disruptions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thématiques pertinentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Thématiques pertinentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Économie et commerce</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Sécurité nationale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Alliances (OTAN, USMCA)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Ressources critiques</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Diplomatie</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Ingérence étrangère</span>
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
                  atlanticcouncil.org
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanadaPage;
