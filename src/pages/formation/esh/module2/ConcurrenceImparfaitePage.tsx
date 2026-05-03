import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Target, PieChart } from 'lucide-react';

const ConcurrenceImparfaitePage = () => {
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
              <span className="text-foreground font-medium">Concurrence imparfaite</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
              <Target className="h-6 w-6 text-blue-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Concurrence imparfaite et stratégies des firmes
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Analyser les stratégies des entreprises dans un contexte de concurrence imparfaite
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">La concurrence imparfaite : réalités et enjeux</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Contrairement au modèle théorique de concurrence parfaite, les marchés réels sont
                    caractérisés par diverses formes de concurrence imparfaite. Les entreprises développent
                    alors des stratégies spécifiques pour maintenir ou accroître leur position concurrentielle.
                  </p>
                </div>
              </section>

              {/* Formes de concurrence imparfaite */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Formes de concurrence imparfaite</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Monopole</h3>
                    <p className="text-blue-700 text-sm">
                      Un seul offreur sur le marché. Pouvoir de marché important,
                      fixation autonome des prix.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Oligopole</h3>
                    <p className="text-blue-700 text-sm">
                      Quelques offreurs dominants. Interdépendance stratégique
                      entre les concurrents.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Monopole naturel</h3>
                    <p className="text-blue-700 text-sm">
                      Structure de coût favorisant un seul producteur efficace.
                      Réglementation nécessaire.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sources de pouvoir de marché */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sources de pouvoir de marché</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Avantages en coût</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Économies d'échelle et d'expérience</li>
                      <li>• Accès privilégié aux ressources</li>
                      <li>• Innovation technologique</li>
                      <li>• Efficacité productive supérieure</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Différenciation des produits</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Marques et réputation</li>
                      <li>• Qualité perçue supérieure</li>
                      <li>• Service après-vente</li>
                      <li>• Marketing et publicité</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Barrières à l'entrée</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Investissements importants requis</li>
                      <li>• Protection par brevets</li>
                      <li>• Contrôle des canaux de distribution</li>
                      <li>• Réglementation favorable</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Stratégies concurrentielles */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Stratégies concurrentielles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Stratégies de domination par les coûts</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Leadership en coût</li>
                      <li>• Optimisation de la chaîne de valeur</li>
                      <li>• Économies d'échelle</li>
                      <li>• Rationalisation des processus</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-teal-800 mb-3">Stratégies de différenciation</h3>
                    <ul className="space-y-2 text-teal-700">
                      <li>• Innovation produit</li>
                      <li>• Marketing de marque</li>
                      <li>• Service client supérieur</li>
                      <li>• Positionnement unique</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Théories des organisations industrielles */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Théories des organisations industrielles</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Théorie de la concurrence contestable</h3>
                    <p className="text-blue-700">
                      Même en situation de monopole, la menace d'entrée de nouveaux concurrents
                      discipline le comportement du monopoleur et maintient des prix proches des coûts.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Théorie des marchés contestables</h3>
                    <p className="text-blue-700">
                      L'absence de barrières à l'entrée et à la sortie permet aux marchés
                      d'être efficients même avec peu de concurrents, grâce à la discipline
                      exercée par la menace de la concurrence potentielle.
                    </p>
                  </div>
                </div>
              </section>

              {/* Politiques de concurrence */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Politiques de concurrence et régulation</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Les interventions publiques</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Autorités de concurrence et contrôle des fusions-acquisitions</li>
                    <li>• Lutte contre les abus de position dominante</li>
                    <li>• Réglementation sectorielle (télécommunications, transports, énergie)</li>
                    <li>• Protection des consommateurs et transparence des prix</li>
                    <li>• Promotion de l'innovation et de la concurrence loyale</li>
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
              <PieChart className="h-4 w-4" />
              Chapitre 2.1 - La croissance économique
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConcurrenceImparfaitePage;
