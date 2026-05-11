import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const ActeursFonctionsEconomiePage = () => {
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
              <Link to="/formation/esh/premiere-annee" className="hover:text-carnet-red transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">Les acteurs et les grandes fonctions de l'économie</span>
            </div>
          </div>
        </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  Les acteurs et les grandes fonctions de l'économie
                </h1>
                <div className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] font-medium mt-1">Chapitre 1.1 - Module 1</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Comprendre les différents acteurs économiques et leurs rôles dans le système économique
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Les acteurs économiques */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                  <span className="font-lora text-[13px] font-semibold text-carnet-red">1</span>
                </div>
                Les acteurs économiques
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Acteurs privés :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-ink-mute mt-0.5 flex-shrink-0" />
                      <span>Les ménages (consommateurs, épargnants)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-ink-mute mt-0.5 flex-shrink-0" />
                      <span>Les entreprises (producteurs, investisseurs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-ink-mute mt-0.5 flex-shrink-0" />
                      <span>Les banques (intermédiaires financiers)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Acteurs publics :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-ink-mute mt-0.5 flex-shrink-0" />
                      <span>L'État (collecte d'impôts, dépenses publiques)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-ink-mute mt-0.5 flex-shrink-0" />
                      <span>Les administrations publiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-ink-mute mt-0.5 flex-shrink-0" />
                      <span>Les institutions internationales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Les grandes fonctions économiques */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                  <span className="font-lora text-[13px] font-semibold text-carnet-red">2</span>
                </div>
                Les grandes fonctions économiques
              </h2>

              <div className="space-y-4">
                <div className="border-l border-dashed border-[rgba(78,55,30,0.18)] pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Production</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Création de biens et services par les entreprises utilisant facteurs de production (travail, capital, matières premières)</p>
                </div>

                <div className="border-l border-dashed border-[rgba(78,55,30,0.18)] pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Répartition</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Distribution des revenus entre les différents acteurs économiques (salaires, profits, intérêts, loyers)</p>
                </div>

                <div className="border-l border-dashed border-[rgba(78,55,30,0.18)] pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Échange</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Circulation des biens et services sur les marchés via les mécanismes d'offre et de demande</p>
                </div>

                <div className="border-l border-dashed border-[rgba(78,55,30,0.18)] pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Consommation</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Utilisation finale des biens et services par les ménages pour satisfaire leurs besoins</p>
                </div>

                <div className="border-l border-dashed border-[rgba(78,55,30,0.18)] pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Épargne et investissement</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Report de la consommation pour financer les investissements futurs et la croissance économique</p>
                </div>
              </div>
            </div>

            {/* Section 3: Interactions entre acteurs */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                  <span className="font-lora text-[13px] font-semibold text-carnet-red">3</span>
                </div>
                Interactions entre acteurs économiques
              </h2>

              <div className="bg-carnet-paper rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-carnet-ink mb-2">Circuit économique</h3>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  Les acteurs économiques sont interconnectés : les ménages fournissent du travail aux entreprises et consomment leurs productions,
                  les entreprises paient des salaires et vendent aux ménages, l'État prélève des impôts et redistribue via les services publics.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-carnet-paper rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Flux réels</h4>
                  <p className="text-xs text-carnet-ink-soft">Biens, services, travail</p>
                </div>
                <div className="bg-carnet-paper rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Flux financiers</h4>
                  <p className="text-xs text-carnet-ink-soft">Revenus, salaires, impôts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module1/monnaie-financement">
                <Button className="bg-carnet-red hover:bg-carnet-red-deep text-white">
                  Chapitre suivant
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActeursFonctionsEconomiePage;
