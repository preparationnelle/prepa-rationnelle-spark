import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const OffreDemandeModulePage = () => {
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
              <span className="carnet-eyebrow text-[11px]">Module – Offre, demande et équilibre</span>
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
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">L'offre, la demande et l'équilibre du marché – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 1.5 • Concurrence pure et parfaite</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#intro" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">Intro</a>
                <a href="#fonctions" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">1) Fonctions O/D</a>
                <a href="#equilibre" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">2) Équilibre marché</a>
                <a href="#prix" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">Prix réglementés</a>
                <a href="#general" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">3) Équilibre général</a>
                <a href="#limites" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">4) Limites CPP</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* Intro */}
            <div id="intro" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">5) L’offre, la demande et l’équilibre du marché en concurrence pure et parfaite</h2>
              <div className="space-y-3 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <p>Le marché est le lieu de rencontre entre l’offre et la demande. Il existe autant de marchés que de produits. En général, la demande est une fonction décroissante du prix, l’offre une fonction croissante du prix.</p>
                <p>Les néoclassiques (1870) montrent qu’en situation de concurrence pure et parfaite (CPP) le marché permet l’équilibre offre/demande. Pour les libéraux, ce mécanisme conduit à une situation optimale pour la collectivité.</p>
              </div>
            </div>

            {/* 1 Fonctions */}
            <div id="fonctions" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">1) Les fonctions de demande et d’offre</h2>
              <div className="space-y-4 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A - Demande : fonction décroissante du prix</h3>
                  <p><strong>1 - Demande individuelle.</strong> Elle diminue quand le prix augmente.</p>
                  <p>Effet <strong>substitution</strong> : à utilité constante, la baisse de p<sub>x</sub> entraîne une hausse de x et une baisse de y. Effet <strong>revenu</strong> : hausse du pouvoir d’achat → plus de x et/ou y, utilité plus élevée.</p>
                  <p>La <strong>demande totale</strong> d’un bien est la somme des demandes individuelles.</p>
                  <p><strong>3 - Biens atypiques.</strong> Biens de <em>Veblen</em> (1899, luxe) : élasticité-prix positive ; biens de <em>Giffen</em> (première nécessité). Akerlof : effet de marque, prix élevé perçu comme gage de qualité.</p>
                  <p><strong>4 - Déplacements de la demande.</strong> Revenu (→ droite si ↑), anticipations de hausse des prix (→ droite), biens substituables (ex : ↑ prix viande → ↑ demande de poisson).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B - Offre : fonction croissante du prix</h3>
                  <p><strong>1 - Offre individuelle.</strong> En CPP, le producteur est « price taker ». Le prix de vente tend vers le coût marginal. Avec des rendements décroissants, le coût marginal augmente au-delà d’un certain volume : un prix plus élevé permet d’offrir davantage. Profit si p ≥ minimum du coût moyen.</p>
                  <p><strong>2 - Déplacements de l’offre.</strong> Progrès technique (→ droite), réglementation moins contraignante (→ droite), baisse des coûts (intrants, impôts) (→ droite).</p>
                </div>
              </div>
            </div>

            {/* 2 Équilibre du marché */}
            <div id="equilibre" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">2) L’équilibre du marché en situation concurrentielle</h2>
              <div className="space-y-4 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Concurrence pure et parfaite</h3>
                  <p>CPP = atomicité, homogénéité, libre entrée/sortie, transparence, fluidité (pas d’entrave aux échanges).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Flexibilité des prix et équilibre</h3>
                  <p><strong>1 - Équilibre du marché.</strong> Quantités offertes = quantités demandées. L’<em>équilibre partiel</em> concerne un marché donné, indépendamment des autres.</p>
                  <p>Walras : processus de <em>tâtonnement</em> par un « commissaire-priseur » ajustant les prix jusqu’à l’équilibre.</p>
                  <p><strong>2 - Variations de prix</strong> expliquées par les déplacements des droites d’offre et de demande. En cas de déséquilibre, le marché converge vers un nouveau prix d’équilibre.</p>
                  <p><strong>3 - Efficacité.</strong> Le prix est un signal qui oriente les ressources ; à l’équilibre, les agents réalisent un <em>surplus</em>.</p>
                </div>
              </div>
            </div>

            {/* Prix réglementés */}
            <div id="prix" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">C) Effets des interventions réglementaires</h2>
              <div className="space-y-4 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">1 - Prix plancher et prix plafond</h3>
                  <p>Les <strong>prix plafond</strong> visent à protéger les consommateurs (pénurie, ex : gel hydroalcoolique). Les <strong>prix plancher</strong> protègent les producteurs (ex : agriculture) ; sur le marché du travail, le SMIC est un salaire plancher.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">2 - Inconvénients</h3>
                  <p>Un prix plafond peut entraîner une pénurie, une baisse de qualité, un marché noir → surplus total réduit. Un prix plancher peut provoquer une surproduction, des coûts collectifs et des incitations illégales → surplus total réduit.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">3 - Quotas et contrôle des quantités</h3>
                  <p>Les pouvoirs publics peuvent fixer un quota (quantité maximale autorisée). Exemples : rationnement alimentaire en France durant la Seconde Guerre mondiale (marché noir), quotas d’émissions de CO2 en Europe.</p>
                </div>
              </div>
            </div>

            {/* 3 Équilibre général */}
            <div id="general" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">3) L’équilibre général</h2>
              <div className="space-y-3 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <p><strong>Walras</strong> : équilibre général possible (interdépendance des marchés), difficile à étudier mais conceptuellement atteignable.</p>
                <p><strong>Pareto</strong> : l’équilibre général concurrentiel est efficace (utilisation optimale des ressources) et socialement désirable (bien-être maximal, au sens de Pareto).</p>
              </div>
            </div>

            {/* 4 Limites */}
            <div id="limites" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">4) Limites du modèle concurrentiel</h2>
              <div className="space-y-3 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <p><strong>A - Hypothèses contestables.</strong> Les marchés réels sont souvent en concurrence imparfaite ; transparence limitée ; rigidités de prix (Keynes).</p>
                <p><strong>B - Équilibre partiel/général non garanti.</strong> Le commissaire-priseur de Walras est une fiction ; peu de marchés fonctionnent comme des enchères.</p>
                <p><strong>C - Biens hors marché.</strong> Biens publics, santé, éducation : interventions publiques nécessaires.</p>
              </div>
            </div>
          </div>
        </div>    </div>
          </div>
);
};

export default OffreDemandeModulePage;


