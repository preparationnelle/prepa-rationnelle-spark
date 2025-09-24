import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Building } from 'lucide-react';

const ChinePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-red-600 hover:text-red-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-red-600 hover:text-red-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-red-600 hover:text-red-800">
            Thèmes centraux
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Chine</span>
        </nav>

        <Card className="mb-8 bg-gradient-to-r from-red-600 to-yellow-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Building className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Chine</CardTitle>
                <p className="text-red-100 mt-2">Puissance émergente globale</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">PIB x8</div>
                <div className="text-sm text-red-100">En 30 ans</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">15%</div>
                <div className="text-sm text-red-100">Exports mondiaux</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">3000Md$</div>
                <div className="text-sm text-red-100">Réserves change</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">5%</div>
                <div className="text-sm text-red-100">Croissance 2024</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contenu en développement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Cette page de thème central est en cours de développement. Le contenu détaillé sera ajouté prochainement.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChinePage;