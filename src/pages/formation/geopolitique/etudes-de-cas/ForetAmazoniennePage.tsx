import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, TreePine, Globe, Users, Calendar, TrendingUp, Shield, DollarSign } from 'lucide-react';

const ForetAmazoniennePage = () => {
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
          <span className="text-gray-600">Forêt Amazonienne</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <TreePine className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Forêt Amazonienne
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            "Poumon de la planète" face à des enjeux géopolitiques majeurs liés à la déforestation,
            au changement climatique et à la perte de biodiversité.
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
                  <Globe className="h-5 w-5 text-green-600" />
                  Présentation géopolitique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  La forêt amazonienne, souvent qualifiée de "poumon de la planète", fait face à des enjeux géopolitiques majeurs liés à la déforestation accélérée, au changement climatique et à la perte de biodiversité, avec environ 20 % de sa surface déjà déboisée et 6 % supplémentaire hautement dégradée, contribuant à 10-15 % des émissions mondiales de CO2. Les acteurs clés incluent le gouvernement brésilien sous Lula da Silva, qui a réduit la déforestation de 50 % en 2023 mais autorise des projets controversés comme une autoroute traversant des zones protégées pour la COP30 en 2025, ainsi que des ONG internationales comme WWF et des puissances étrangères impliquées dans l'exploitation minière illégale (Chine, États-Unis). Des dates marquantes incluent la Conférence de Belém en 2025 pour la COP30, et l'accord de 2023 sur la protection de l'Amazonie par huit pays sud-américains. Cette étude de cas est pertinente pour les sujets suivants : environnement et climat, économie (agriculture et extraction), droits indigènes, diplomatie internationale, sécurité (crime organisé), et développement durable.
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Source :</strong> impactful.ninjab bc.com
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
                    <h4 className="font-semibold text-gray-900">Gouvernement brésilien</h4>
                    <p className="text-gray-700">
                      Sous Lula da Silva, réduction de 50 % de la déforestation en 2023 mais autorisation
                      de projets controversés comme une autoroute traversant des zones protégées pour la COP30 en 2025.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ONG internationales</h4>
                    <p className="text-gray-700">
                      WWF et autres organisations environnementales luttant contre la déforestation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Puissances étrangères</h4>
                    <p className="text-gray-700">
                      Chine et États-Unis impliqués dans l'exploitation minière illégale.
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
                      <div className="font-semibold">2025</div>
                      <div className="text-gray-700">Conférence de Belém pour la COP30</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2023</div>
                      <div className="text-gray-700">Accord sur la protection de l'Amazonie par huit pays sud-américains</div>
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
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Chiffres clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">20%</div>
                    <div className="text-sm text-gray-600">Surface déboisée</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">10-15%</div>
                    <div className="text-sm text-gray-600">Émissions CO2 mondiales</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">6%</div>
                    <div className="text-sm text-gray-600">Surface dégradée</div>
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
                    <span>Environnement et climat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Économie (agriculture et extraction)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Droits indigènes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Diplomatie internationale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Sécurité (crime organisé)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Développement durable</span>
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
                  impactful.ninjab<br/>
                  bbc.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForetAmazoniennePage;
