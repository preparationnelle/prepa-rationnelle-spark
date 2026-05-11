import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Euro, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const EuropeEconomiqueMonetairePage = () => {
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
              <Link to="/formations" className="hover:text-carnet-red transition-colors">
                Toutes les formations
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh" className="hover:text-carnet-red transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh/deuxieme-annee" className="hover:text-carnet-red transition-colors">
                Deuxième année
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">L'Europe économique et monétaire</span>
            </div>
          </div>
        </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/formation/esh/deuxieme-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 3
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
                <Euro className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  L'Europe économique et monétaire
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 3.8 - Module 3</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Comprendre l'Union économique et monétaire et ses institutions européennes
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                Les institutions européennes
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Parlement Européen</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Pouvoir législatif élu au suffrage universel, contrôle démocratique des institutions</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Conseil Européen</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Chef d'État et de gouvernement, orientations stratégiques de l'Union</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Commission Européenne</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Pouvoir exécutif, proposition et exécution des politiques européennes</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Conseil de l'Union Européenne</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Représentation des États membres, adoption des actes législatifs</p>
                </div>
              </div>
            </div>

            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                La Banque Centrale Européenne (BCE)
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Objectifs :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Stabilité des prix (inflation &lt; 2%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Soutien des politiques économiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Stabilité financière</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Instruments :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Taux directeurs (refinancement)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Opérations d'open market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Réserves obligatoires</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-carnet-ink mb-3">Indépendance de la BCE :</h3>
                <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                    <span>Protection contre les pressions politiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                    <span>Mandat clair et limité à la stabilité des prix</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                    <span>Transparence et responsabilité</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                Les politiques européennes
              </h2>

              <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-carnet-ink mb-2">Politique économique commune</h3>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  Coordination des politiques budgétaires, critères de convergence, pacte de stabilité et de croissance
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Politique agricole commune (PAC)</h4>
                  <p className="text-xs text-carnet-ink-soft">Soutien aux agriculteurs, marchés agricoles européens</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Politique de cohésion</h4>
                  <p className="text-xs text-carnet-ink-soft">Fonds structurels pour réduire les disparités régionales</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Politique commerciale commune</h4>
                  <p className="text-xs text-carnet-ink-soft">Négociations commerciales internationales</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Politique de concurrence</h4>
                  <p className="text-xs text-carnet-ink-soft">Lutte contre les monopoles et aides d'État</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/module3/construction-europeenne">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module3/europe-sociale">
                <Button className="bg-carnet-red hover:bg-carnet-red-deep text-white">
                  Chapitre suivant
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>    </div>
          </div>
);
};

export default EuropeEconomiqueMonetairePage;
