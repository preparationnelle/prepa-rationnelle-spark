import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PieChart, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const EquilibreMicroModulePage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
              <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
                <Home className="h-3.5 w-3.5" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formations" className="hover:text-carnet-red transition-colors">Toutes les formations</Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh" className="hover:text-carnet-red transition-colors">Formation ESH ECG</Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-carnet-red transition-colors">Première année</Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">Module – Équilibre micro-économique</span>
            </div>
          </div>
        </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
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
            <div className="rounded-2xl bg-gradient-to-r from-carnet-red to-pr-black text-white p-8 shadow-md">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-carnet-paper-2/15 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  <PieChart className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">L’équilibre micro-économique du producteur et du consommateur – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 1.4 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#secA" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">A) Utilité & indifférence</a>
                <a href="#secB" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">B) Équilibre du consommateur</a>
                <a href="#secElasticites" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">2) Élasticités</a>
                <a href="#secProd" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">3) Choix du producteur</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* A */}
            <div id="secA" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">Hypothèse de rationalité des individus. A - L’utilité et les courbes d’indifférence</h2>
              <div className="space-y-3 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <p><strong>1 - Raisonnement marginaliste et utilité marginale.</strong> Les néoclassiques réhabilitent la théorie des classiques comme Say : la valeur d’un bien pour un individu repose sur son utilité. L’utilité marginale est l’utilité tirée de la dernière unité consommée.</p>
                <p>Approche cardinale de l’utilité (l’individu chiffre l’utilité) → Pareto, Manuel d’économie politique (1890), retient une approche <em>ordinale</em> plus cohérente (classement par préférences).</p>
              </div>
            </div>

            {/* B */}
            <div id="secB" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">B - L’équilibre du consommateur (revenu et prix)</h2>
              <div className="space-y-3 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <p><strong>1 - Contrainte budgétaire.</strong> Le consommateur est soumis à une contrainte : R = revenu, p<sub>x</sub> = prix du bien x, p<sub>y</sub> = prix du bien y.</p>
                <p>La combinaison optimale (équilibre du consommateur) est le point de tangence entre la droite de budget et une courbe d’indifférence.</p>
                <p><strong>3 - Effets revenu et substitution.</strong> Quand le revenu augmente, la droite de budget se déplace vers la droite et un nouvel optimum apparaît. Deux effets lors d’une variation de prix : effet substitution (le bien devient relativement plus cher → remplacement) et effet revenu (baisse du pouvoir d’achat → demande globale plus faible).</p>
              </div>
            </div>

            {/* 2 Élasticités */}
            <div id="secElasticites" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">2) Les élasticités : concepts et applications</h2>
              <div className="space-y-3 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <p><strong>A - Mesure des réactions.</strong> L'élasticité mesure comment la demande ou l'offre réagit aux variations de prix.</p>
                <p>Pour la plupart des biens « typiques », l’élasticité-prix de la demande est négative. Pour des biens « atypiques » : <em>Veblen</em> (luxe, 1899) → élasticité positive ; biens de <em>Giffen</em> (première nécessité) → comportements particuliers.</p>
                <p><strong>2 - Élasticités et formation des prix.</strong> La sensibilité des consommateurs (élasticité-prix de la demande) et la capacité d’ajustement des producteurs (élasticité-prix de l’offre) conditionnent l’ampleur des variations de quantités et de prix.</p>
              </div>
            </div>

            {/* 3 Producteur */}
            <div id="secProd" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">3) Le choix du producteur</h2>
              <div className="space-y-4 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A - Facteurs de production et rendements (fonction de production)</h3>
                  <p><strong>1 - Fonction de production.</strong> Relation entre la quantité produite (output) et les quantités de facteurs (inputs).</p>
                  <p><strong>2 - Productivités moyenne et marginale.</strong> À court terme, le capital est fixe : la production varie avec le travail (productivité moyenne et marginale du travail). À long terme : mêmes notions pour le capital.</p>
                  <p><strong>3 - Rendements d’échelle.</strong> Variation de la production quand tous les facteurs varient.</p>
                  <p><strong>4 - Isoquantes et TMST.</strong> La convexité des isoquantes explique la décroissance du taux marginal de substitution technique ; l’isoquante représente les combinaisons travail-capital donnant un même niveau de production.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B - Coûts de production (firme/produit)</h3>
                  <p>À court terme : coûts fixes (indépendants des quantités) et coûts variables (salaires, matières premières...). À long terme : tous les coûts sont ajustables ; le coût marginal est la dérivée du coût total.</p>
                  <p><strong>Courbe enveloppe.</strong> Le coût moyen de long terme (sans coûts fixes) est l’enveloppe des coûts moyens de court terme.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">C - Équilibre du producteur</h3>
                  <p><strong>Objectif :</strong> atteindre l’isoquante la plus élevée possible compte tenu de la contrainte de coût (droite d’isocoût) — tangence isoquante/isocoût.</p>
                </div>
              </div>
            </div>
          </div>
        </div>    </div>
          </div>
);
};

export default EquilibreMicroModulePage;


