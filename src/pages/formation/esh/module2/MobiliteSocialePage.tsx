import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Users, TrendingUp } from 'lucide-react';

const MobiliteSocialePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Sticky Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
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
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Mobilité sociale et transformations sociales</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
              <Users className="h-6 w-6 text-blue-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Mobilité sociale et transformations des structures sociales
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Étudier l'évolution des classes sociales et de la mobilité sociale dans les sociétés modernes
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">La mobilité sociale : concepts et enjeux</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La mobilité sociale désigne les changements de position sociale d'un individu ou d'un groupe
                    au sein de la stratification sociale. Elle constitue l'un des indicateurs majeurs de
                    l'égalité des chances dans une société démocratique.
                  </p>
                </div>
              </section>

              {/* Types de mobilité sociale */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Types de mobilité sociale</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Mobilité intergénérationnelle</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Comparaison position sociale enfant/parent</li>
                      <li>• Indicateur d'égalité des chances</li>
                      <li>• Influence du capital culturel et économique</li>
                      <li>• Rôle de l'éducation dans la mobilité</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Mobilité intragénérationnelle</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Évolution de carrière d'un individu</li>
                      <li>• Changements professionnels au cours de la vie</li>
                      <li>• Impact des conjonctures économiques</li>
                      <li>• Formation continue et reconversion</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Facteurs influençant la mobilité sociale */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Facteurs de mobilité sociale</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Capital humain et éducatif</h3>
                    <p className="text-blue-700">
                      L'éducation constitue le principal facteur de mobilité sociale ascendante.
                      L'accès aux études supérieures et la qualité de la formation déterminent
                      largement les trajectoires professionnelles et sociales.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Capital économique et social</h3>
                    <p className="text-blue-700">
                      Le patrimoine familial, les réseaux relationnels et le capital culturel
                      transmis par les parents influencent considérablement les chances de mobilité.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Contexte économique et social</h3>
                    <p className="text-blue-700">
                      Les crises économiques, les politiques sociales et l'évolution du marché
                      du travail impactent les possibilités de mobilité sociale.
                    </p>
                  </div>
                </div>
              </section>

              {/* Transformations des structures sociales */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Transformations des structures sociales</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Évolution des classes sociales</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Passage des classes aux catégories socioprofessionnelles</li>
                      <li>• Emergence des classes moyennes</li>
                      <li>• Précarisation et dualisation sociale</li>
                      <li>• Globalisation et nouvelles inégalités</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-teal-800 mb-3">Nouvelles formes de stratification</h3>
                    <ul className="space-y-2 text-teal-700">
                      <li>• Société de l'information et fracture numérique</li>
                      <li>• Individualisation des trajectoires</li>
                      <li>• Diversification des modes de vie</li>
                      <li>• Impact des migrations internationales</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Politiques de réduction des inégalités */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Politiques de réduction des inégalités</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Mesures de promotion de la mobilité sociale</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Système éducatif et bourses d'études</li>
                    <li>• Politiques fiscales et redistribution</li>
                    <li>• Formation professionnelle et reconversion</li>
                    <li>• Mixité sociale et politiques urbaines</li>
                    <li>• Égalité des chances et discrimination positive</li>
                  </ul>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <Link to="/formation/esh/premiere-annee">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Retour au Module 2
            </Button>
          </Link>
          <Link to="/formation/esh/module2/croissance-economique">
            <Button className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Chapitre 2.1 - La croissance économique
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobiliteSocialePage;
