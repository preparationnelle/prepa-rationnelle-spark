import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Building } from 'lucide-react';

const UrbanisationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
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
            Thèmes centraux
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Urbanisation</span>
        </nav>

        <Card className="mb-8 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Building className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Urbanisation mondiale</CardTitle>
                <p className="text-slate-100 mt-2">Métropolisation et mégalopolisation</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">4,7Md</div>
                <div className="text-sm text-slate-100">Urbains 2025</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">58%</div>
                <div className="text-sm text-slate-100">Population mondiale</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">Tokyo 37M</div>
                <div className="text-sm text-slate-100">Plus grande agglo</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">+70M/an</div>
                <div className="text-sm text-slate-100">Croissance urbaine</div>
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

export default UrbanisationPage;