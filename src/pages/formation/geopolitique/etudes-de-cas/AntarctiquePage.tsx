import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Snowflake, Globe, Users, Calendar, TrendingUp, Shield, DollarSign } from 'lucide-react';

const AntarctiquePage = () => {
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
          <span className="text-gray-600">Antarctique</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Snowflake className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Antarctique
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Ressources potentielles et traité de 1959. Tensions croissantes avec expansion chinoise et russe.
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
                  L'Antarctique représente un enjeu géopolitique crucial en raison de ses ressources potentielles (pétrole, minéraux, eau douce) et de son rôle dans la recherche scientifique et le changement climatique, avec des revendications territoriales gelées par le Traité sur l'Antarctique de 1959, qui promeut la paix et la coopération mais fait face à des tensions croissantes dues à l'expansion des bases chinoises et russes. Les acteurs principaux sont les sept pays revendicateurs (Argentine, Australie, Chili, France, Norvège, Nouvelle-Zélande, Royaume-Uni), les États-Unis et la Russie en tant que puissances non-revendicatrices influentes, et la Chine qui investit massivement depuis 2010 pour sécuriser des intérêts stratégiques. Des chiffres clés incluent 90 % des réserves d'eau douce mondiale et une superficie de 14 mill ions de km² ; des dates importantes sont 1959 (signature du Traité) et 1991 (Protocole de Madrid interdisant l'exploitation minière jusqu'en 2048). Cette étude de cas est pertinente pour les sujets suivants : droit international, environnement et climat, ressources naturelles, diplomatie multilatérale, sécurité (militarisation potentielle), et recherche scientifique.
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Sources :</strong> rfi.fr discoveringantarctica.org.uk
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
                    <h4 className="font-semibold text-gray-900">Sept pays revendicateurs</h4>
                    <p className="text-gray-700">
                      Argentine, Australie, Chili, France, Norvège, Nouvelle-Zélande, Royaume-Uni.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Puissances influentes</h4>
                    <p className="text-gray-700">
                      États-Unis et Russie en tant que puissances non-revendicatrices influentes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Chine</h4>
                    <p className="text-gray-700">
                      Investit massivement depuis 2010 pour sécuriser des intérêts stratégiques.
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
                  Dates importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">1959</div>
                      <div className="text-gray-700">Signature du Traité sur l'Antarctique</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">1991</div>
                      <div className="text-gray-700">Protocole de Madrid interdisant l'exploitation minière jusqu'en 2048</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2010</div>
                      <div className="text-gray-700">Début des investissements massifs chinois</div>
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
                    <div className="text-2xl font-bold text-blue-600">90%</div>
                    <div className="text-sm text-gray-600">Réserves d'eau douce mondiale</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">14 millions</div>
                    <div className="text-sm text-gray-600">km² de superficie</div>
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
                    <span>Droit international</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Environnement et climat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Ressources naturelles</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Diplomatie multilatérale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Sécurité (militarisation potentielle)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Recherche scientifique</span>
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
                  rfi.fr<br/>
                  discoveringantarctica.org.uk
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntarctiquePage;
