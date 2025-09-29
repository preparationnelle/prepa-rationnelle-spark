import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Globe } from 'lucide-react';

const RussiePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-foreground transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique/etudes-de-cas" className="hover:text-foreground transition-colors">
              Thèmes centraux essentiels
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Russie</span>
          </div>
        </div>
      </nav>

        <Card className="mb-8 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Russie</CardTitle>
                <p className="text-red-100 mt-2">Puissance énergétique eurasiatique</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">15%</div>
                <div className="text-sm text-red-100">Gaz mondial</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">10%</div>
                <div className="text-sm text-red-100">Pétrole mondial</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">150Md$</div>
                <div className="text-sm text-red-100">Excédent commercial</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">80M t</div>
                <div className="text-sm text-red-100">Céréales</div>
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

export default RussiePage;