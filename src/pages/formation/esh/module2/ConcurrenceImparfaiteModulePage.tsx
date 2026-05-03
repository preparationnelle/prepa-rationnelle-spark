import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const ConcurrenceImparfaiteModulePage = () => {
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
              <span className="text-foreground font-medium">Module – Concurrence imparfaite et stratégies des firmes</span>
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
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">Concurrence imparfaite et stratégies des firmes – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 2.8 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#pouvoir" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">1) Pouvoir de marché</a>
                <a href="#monopole" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">2) Monopole</a>
                <a href="#oligopole" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">3) Oligopole</a>
                <a href="#polconcu" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">4) Politique de concurrence</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* 1) Pouvoir de marché */}
            <div id="pouvoir" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">1) La recherche du pouvoir de marché</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Contrôler l’offre</h3>
                  <p><strong>1 - Contrainte moindre qu’en CPP.</strong> En CPP (Knight, 1921) la firme est price taker. Si une condition manque → concurrence imparfaite.</p>
                  <p><strong>2 - Dépendance à la demande.</strong> Même « price maker », la firme reste tributaire de la demande, d’autant plus si l’élasticité‑prix de la demande est forte.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Dissuader l’entrée</h3>
                  <p><strong>1 - Barrières à l’entrée.</strong> Structurelles (coûts fixes, énergie) ou stratégiques (prix prédateurs). Baumol (1982) : sans barrières, marchés contestables → la menace discipline les firmes.</p>
                  <p><strong>2 - Crédibilité des menaces.</strong> Un monopole doit accepter des baisses de prix importantes (pertes temporaires) pour être crédible.</p>
                  <p><strong>3 - Fidéliser la demande.</strong> Différenciation verticale (qualité) et horizontale (préférences). Exemple : élasticité‑prix croisée cola ~0,7 (Pepsi/Coca) → substituabilité imparfaite.</p>
                </div>
              </div>
            </div>

            {/* 2) Monopole */}
            <div id="monopole" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">2) Concurrence imparfaite et optimum social : le cas du monopole</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Formes de monopoles</h3>
                  <p><strong>1 - Monopole légal.</strong> Public ou lié à l’innovation.</p>
                  <p><strong>2 - Monopole naturel.</strong> Barrières naturelles (coûts fixes élevés).</p>
                  <p><strong>3 - Monopole d’exploitation.</strong> Accès exclusif à une ressource.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Stratégies du monopole</h3>
                  <p>Maximisation du profit au point Cm = Rm, mais prix fixé au‑dessus du niveau concurrentiel. La demande adressée au monopole est la demande totale.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C) Rente et coût social</h3>
                  <p>Prix plus élevés, quantités plus faibles qu’en CPP → perte sèche et incitation à l’intervention publique (tarification au coût marginal/moyen, régulation).</p>
                </div>
              </div>
            </div>

            {/* 3) Oligopole */}
            <div id="oligopole" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">3) L’oligopole et les comportements stratégiques</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Oligopole non coopératif</h3>
                  <p>Interdépendance stratégique : actions d’une firme influencent les autres. Prix relativement rigides (Sweezy, 1939) – anticipations de riposte.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Duopole : Cournot vs Bertrand</h3>
                  <p><strong>Cournot (1838).</strong> Concurrence par les quantités (technologies/prix identiques) – meilleure réponse en quantités.</p>
                  <p><strong>Bertrand (1883).</strong> Concurrence par les prix – pas de leader/follower ; possibilité de guerre des prix.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C) Cartels et collusion</h3>
                  <p>Ententes formelles/informelles au détriment du consommateur. Ex : 2020, 12 industriels de la charcuterie condamnés (93 M€). Clémence pour le premier dénonciateur (ex : « cartel du yaourt » 2015).</p>
                </div>
              </div>
            </div>

            {/* 4) Politique de concurrence */}
            <div id="polconcu" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">4) Préserver la concurrence : politique de la concurrence</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Pratiques et sanctions</h3>
                  <p>2019 : 270 contrôles de concentration, 632 M€ d’amendes (FR). Objectif : lutter contre positions dominantes et favoriser la « destruction créatrice ».</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Structures de marché</h3>
                  <p>Références : CPP (Sherman Act, 1890) ; marchés contestables (Baumol) – petits nombres acceptables si performance/coûts/innovation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C) Marché unique européen</h3>
                  <p>Traité de Rome (1957) : compétences de la Commission. Loi NRE (2001). Ex : 2019, Alstom/Siemens refusé ; amende Google Shopping.</p>
                  <p>Ouverture à la concurrence (services, énergie ; TGV 2021).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">D) Révolution numérique</h3>
                  <p>Plateformes et nouveaux marchés ; parts de marché élevées (ex : Amazon 38 % e‑commerce US en 2022) → enjeux de régulation et contestabilité.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcurrenceImparfaiteModulePage;


