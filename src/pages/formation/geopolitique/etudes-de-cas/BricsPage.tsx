import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Globe, Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';

const BricsPage = () => {
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
          <span className="text-gray-600">BRICS</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              BRICS
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            10 membres, 55% population mondiale. Multipolarité, dé-dollarisation et contrepoids au G7.
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
                  <Globe className="h-5 w-5 text-orange-600" />
                  Présentation géopolitique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Les BRICS, élargis à 10 membres en 2025 (Brésil, Russie, Inde, Chine, Afrique du Sud, Égypte, Éthiopie, Indonésie, Iran, Émirats arabes unis), représentent 55 % de la population mondiale et 46 % du PIB (PPA), avec des enjeux de multipolarité, dé-dollarisation (via la New Development Bank) et contrepoids au G7. Les acteurs clés incluent la Chine (leader économique) et la Russie (présidence 2024), avec des expansions en 2024 (5 nouveaux) et 2025 (Indonésie). Des dates importantes : 2009 (fondation), 2023 (invitations d'expansion), et 2025 (sommet au Brésil). Cette étude de cas est pertinente pour les sujets suivants : gouvernance globale, économie émergente, diplomatie Sud-Sud, commerce, finance (banque alternative), et sécurité (alliances non-occidentales).
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Sources :</strong> Sources diverses
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
                    <h4 className="font-semibold text-gray-900">Chine</h4>
                    <p className="text-gray-700">
                      Leader économique et moteur de l'expansion.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Russie</h4>
                    <p className="text-gray-700">
                      Présidence 2024, rôle diplomatique important.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Nouveaux membres (2024)</h4>
                    <p className="text-gray-700">
                      Égypte, Éthiopie, Iran, Émirats arabes unis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Indonésie</h4>
                    <p className="text-gray-700">
                      Nouveau membre en 2025.
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
                      <div className="font-semibold">2009</div>
                      <div className="text-gray-700">Fondation des BRICS</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2023</div>
                      <div className="text-gray-700">Invitations d'expansion</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2024</div>
                      <div className="text-gray-700">Admission de 5 nouveaux membres</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2025</div>
                      <div className="text-gray-700">Sommet au Brésil, admission Indonésie</div>
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
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  Chiffres clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">10</div>
                    <div className="text-sm text-gray-600">Membres</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">55%</div>
                    <div className="text-sm text-gray-600">Population mondiale</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">46%</div>
                    <div className="text-sm text-gray-600">PIB (PPA)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thématiques pertinentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Thématiques pertinentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Gouvernance globale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Économie émergente</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Diplomatie Sud-Sud</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Commerce</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Finance (banque alternative)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Sécurité (alliances non-occidentales)</span>
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
                  Sources diverses
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BricsPage;
