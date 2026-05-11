import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const ConcurrenceImparfaiteModulePage = () => {
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
              <span className="carnet-eyebrow text-[11px]">Module – Concurrence imparfaite et stratégies des firmes</span>
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
            <div className="rounded-2xl bg-gradient-to-r from-carnet-red to-pr-orange-dark text-white p-8 shadow-md">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-carnet-paper-2/15 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">Concurrence imparfaite et stratégies des firmes – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 2.8 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#pouvoir" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">1) Pouvoir de marché</a>
                <a href="#monopole" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">2) Monopole</a>
                <a href="#oligopole" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">3) Oligopole</a>
                <a href="#polconcu" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">4) Politique de concurrence</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* 1) Pouvoir de marché */}
            <div id="pouvoir" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">1) La recherche du pouvoir de marché</h2>
              <div className="space-y-5 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Contrôler l’offre</h3>
                  <p><strong>1 - Contrainte moindre qu’en CPP.</strong> En CPP (Knight, 1921) la firme est price taker. Si une condition manque → concurrence imparfaite.</p>
                  <p><strong>2 - Dépendance à la demande.</strong> Même « price maker », la firme reste tributaire de la demande, d’autant plus si l’élasticité‑prix de la demande est forte.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Dissuader l’entrée</h3>
                  <p><strong>1 - Barrières à l’entrée.</strong> Structurelles (coûts fixes, énergie) ou stratégiques (prix prédateurs). Baumol (1982) : sans barrières, marchés contestables → la menace discipline les firmes.</p>
                  <p><strong>2 - Crédibilité des menaces.</strong> Un monopole doit accepter des baisses de prix importantes (pertes temporaires) pour être crédible.</p>
                  <p><strong>3 - Fidéliser la demande.</strong> Différenciation verticale (qualité) et horizontale (préférences). Exemple : élasticité‑prix croisée cola ~0,7 (Pepsi/Coca) → substituabilité imparfaite.</p>
                </div>
              </div>
            </div>

            {/* 2) Monopole */}
            <div id="monopole" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">2) Concurrence imparfaite et optimum social : le cas du monopole</h2>
              <div className="space-y-5 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Formes de monopoles</h3>
                  <p><strong>1 - Monopole légal.</strong> Public ou lié à l’innovation.</p>
                  <p><strong>2 - Monopole naturel.</strong> Barrières naturelles (coûts fixes élevés).</p>
                  <p><strong>3 - Monopole d’exploitation.</strong> Accès exclusif à une ressource.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Stratégies du monopole</h3>
                  <p>Maximisation du profit au point Cm = Rm, mais prix fixé au‑dessus du niveau concurrentiel. La demande adressée au monopole est la demande totale.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">C) Rente et coût social</h3>
                  <p>Prix plus élevés, quantités plus faibles qu’en CPP → perte sèche et incitation à l’intervention publique (tarification au coût marginal/moyen, régulation).</p>
                </div>
              </div>
            </div>

            {/* 3) Oligopole */}
            <div id="oligopole" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">3) L’oligopole et les comportements stratégiques</h2>
              <div className="space-y-5 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Oligopole non coopératif</h3>
                  <p>Interdépendance stratégique : actions d’une firme influencent les autres. Prix relativement rigides (Sweezy, 1939) – anticipations de riposte.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Duopole : Cournot vs Bertrand</h3>
                  <p><strong>Cournot (1838).</strong> Concurrence par les quantités (technologies/prix identiques) – meilleure réponse en quantités.</p>
                  <p><strong>Bertrand (1883).</strong> Concurrence par les prix – pas de leader/follower ; possibilité de guerre des prix.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">C) Cartels et collusion</h3>
                  <p>Ententes formelles/informelles au détriment du consommateur. Ex : 2020, 12 industriels de la charcuterie condamnés (93 M€). Clémence pour le premier dénonciateur (ex : « cartel du yaourt » 2015).</p>
                </div>
              </div>
            </div>

            {/* 4) Politique de concurrence */}
            <div id="polconcu" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">4) Préserver la concurrence : politique de la concurrence</h2>
              <div className="space-y-5 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Pratiques et sanctions</h3>
                  <p>2019 : 270 contrôles de concentration, 632 M€ d’amendes (FR). Objectif : lutter contre positions dominantes et favoriser la « destruction créatrice ».</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Structures de marché</h3>
                  <p>Références : CPP (Sherman Act, 1890) ; marchés contestables (Baumol) – petits nombres acceptables si performance/coûts/innovation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">C) Marché unique européen</h3>
                  <p>Traité de Rome (1957) : compétences de la Commission. Loi NRE (2001). Ex : 2019, Alstom/Siemens refusé ; amende Google Shopping.</p>
                  <p>Ouverture à la concurrence (services, énergie ; TGV 2021).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">D) Révolution numérique</h3>
                  <p>Plateformes et nouveaux marchés ; parts de marché élevées (ex : Amazon 38 % e‑commerce US en 2022) → enjeux de régulation et contestabilité.</p>
                </div>
              </div>
            </div>
          </div>
        </div>    </div>
          </div>
);
};

export default ConcurrenceImparfaiteModulePage;


