import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Cpu, Globe, Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';

const NvidiaPage = () => {
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
          <span className="text-gray-600">NVIDIA - IA</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              NVIDIA - IA
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Leader en puces IA. Guerre technologique US-Chine, 80% du marché des GPU IA.
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
                  <Globe className="h-5 w-5 text-purple-600" />
                  Présentation géopolitique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  NVIDIA, leader en IA via ses GPU comme Blackwell, est au centre d'enjeux géopolitiques avec une capitalisation boursière dépassant 4 000 milliards USD en 2025, représentant 80 % du marché des puces IA et exposée à la guerre tech US-Chine (restrictions d'exportations depuis 2022). Les acteurs clés incluent Jensen Huang (CEO), le gouvernement US pour les contrôles d'export, et la Chine (via concurrents comme Huawei), avec des politiques comme les sanctions américaines amplifiées en 2023-2025. Des chiffres incluent 30 milliards USD de revenus Q2 2025, dont 26 milliards en data centers ; dates importantes : 2022 (boom IA post-ChatGPT) et 2025 (GTC conference). Cette étude de cas est pertinente pour les sujets suivants : technologie et innovation, économie (semi-conducteurs), sécurité nationale, guerre commerciale, diplomatie tech, et éthique IA.
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Source :</strong> ainvest.com
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
                    <h4 className="font-semibold text-gray-900">Jensen Huang</h4>
                    <p className="text-gray-700">
                      CEO et visionnaire de NVIDIA.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gouvernement US</h4>
                    <p className="text-gray-700">
                      Contrôles d'exportations et sanctions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Chine</h4>
                    <p className="text-gray-700">
                      Concurrents comme Huawei, cible des restrictions.
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
                      <div className="font-semibold">2022</div>
                      <div className="text-gray-700">Boom IA post-ChatGPT</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2023-2025</div>
                      <div className="text-gray-700">Sanctions américaines amplifiées</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">2025</div>
                      <div className="text-gray-700">GTC conference</div>
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
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  Chiffres clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">4000M$</div>
                    <div className="text-sm text-gray-600">Capitalisation boursière</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">80%</div>
                    <div className="text-sm text-gray-600">Marché des puces IA</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">30M$</div>
                    <div className="text-sm text-gray-600">Revenus Q2 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thématiques pertinentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-blue-600" />
                  Thématiques pertinentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Technologie et innovation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Économie (semi-conducteurs)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Sécurité nationale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Guerre commerciale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Diplomatie tech</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Éthique IA</span>
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
                  ainvest.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NvidiaPage;
