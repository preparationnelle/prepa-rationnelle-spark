import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PieChart, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const EquilibreMicroModulePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formations" className="hover:text-foreground transition-colors">Toutes les formations</Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">Formation ESH ECG</Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">Première année</Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Module – Équilibre micro-économique</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la première année
              </Button>
            </Link>
          </div>

          {/* Hero */}
          <div className="mb-8">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 shadow-md">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  <PieChart className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">L’équilibre micro-économique du producteur et du consommateur – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 1.4 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#secA" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">A) Utilité & indifférence</a>
                <a href="#secB" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">B) Équilibre du consommateur</a>
                <a href="#secElasticites" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">2) Élasticités</a>
                <a href="#secProd" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">3) Choix du producteur</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* A */}
            <div id="secA" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Hypothèse de rationalité des individus. A - L’utilité et les courbes d’indifférence</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p><strong>1 - Raisonnement marginaliste et utilité marginale.</strong> Les néoclassiques réhabilitent la théorie des classiques comme Say : la valeur d’un bien pour un individu repose sur son utilité. L’utilité marginale est l’utilité tirée de la dernière unité consommée.</p>
                <p>Approche cardinale de l’utilité (l’individu chiffre l’utilité) → Pareto, Manuel d’économie politique (1890), retient une approche <em>ordinale</em> plus cohérente (classement par préférences).</p>
              </div>
            </div>

            {/* B */}
            <div id="secB" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">B - L’équilibre du consommateur (revenu et prix)</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p><strong>1 - Contrainte budgétaire.</strong> Le consommateur est soumis à une contrainte : R = revenu, p<sub>x</sub> = prix du bien x, p<sub>y</sub> = prix du bien y.</p>
                <p>La combinaison optimale (équilibre du consommateur) est le point de tangence entre la droite de budget et une courbe d’indifférence.</p>
                <p><strong>3 - Effets revenu et substitution.</strong> Quand le revenu augmente, la droite de budget se déplace vers la droite et un nouvel optimum apparaît. Deux effets lors d’une variation de prix : effet substitution (le bien devient relativement plus cher → remplacement) et effet revenu (baisse du pouvoir d’achat → demande globale plus faible).</p>
              </div>
            </div>

            {/* 2 Élasticités */}
            <div id="secElasticites" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">2) Les élasticités : concepts et applications</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p><strong>A - Mesure des réactions.</strong> L'élasticité mesure comment la demande ou l'offre réagit aux variations de prix.</p>
                <p>Pour la plupart des biens « typiques », l’élasticité-prix de la demande est négative. Pour des biens « atypiques » : <em>Veblen</em> (luxe, 1899) → élasticité positive ; biens de <em>Giffen</em> (première nécessité) → comportements particuliers.</p>
                <p><strong>2 - Élasticités et formation des prix.</strong> La sensibilité des consommateurs (élasticité-prix de la demande) et la capacité d’ajustement des producteurs (élasticité-prix de l’offre) conditionnent l’ampleur des variations de quantités et de prix.</p>
              </div>
            </div>

            {/* 3 Producteur */}
            <div id="secProd" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">3) Le choix du producteur</h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A - Facteurs de production et rendements (fonction de production)</h3>
                  <p><strong>1 - Fonction de production.</strong> Relation entre la quantité produite (output) et les quantités de facteurs (inputs).</p>
                  <p><strong>2 - Productivités moyenne et marginale.</strong> À court terme, le capital est fixe : la production varie avec le travail (productivité moyenne et marginale du travail). À long terme : mêmes notions pour le capital.</p>
                  <p><strong>3 - Rendements d’échelle.</strong> Variation de la production quand tous les facteurs varient.</p>
                  <p><strong>4 - Isoquantes et TMST.</strong> La convexité des isoquantes explique la décroissance du taux marginal de substitution technique ; l’isoquante représente les combinaisons travail-capital donnant un même niveau de production.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B - Coûts de production (firme/produit)</h3>
                  <p>À court terme : coûts fixes (indépendants des quantités) et coûts variables (salaires, matières premières...). À long terme : tous les coûts sont ajustables ; le coût marginal est la dérivée du coût total.</p>
                  <p><strong>Courbe enveloppe.</strong> Le coût moyen de long terme (sans coûts fixes) est l’enveloppe des coûts moyens de court terme.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C - Équilibre du producteur</h3>
                  <p><strong>Objectif :</strong> atteindre l’isoquante la plus élevée possible compte tenu de la contrainte de coût (droite d’isocoût) — tangence isoquante/isocoût.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquilibreMicroModulePage;


