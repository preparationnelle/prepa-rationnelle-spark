import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const EuropeSocialePage = () => {
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
              <span className="carnet-eyebrow text-[11px]">L'Europe sociale</span>
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
                <Users className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  L'Europe sociale
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 3.9 - Module 3</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Étudier les politiques sociales européennes et leurs enjeux contemporains
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                Les droits sociaux européens
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Charte des droits fondamentaux (2000)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Droits sociaux, économiques et politiques, valeur juridique contraignante depuis Lisbonne</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Libre circulation des travailleurs</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Droits sociaux attachés à la citoyenneté européenne, coordination des systèmes sociaux</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Directive travailleurs détachés</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Protection sociale minimale pour les travailleurs européens dans un autre État membre</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Convention européenne des droits de l'homme</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Protection des droits sociaux et syndicaux, mécanisme de contrôle du Conseil de l'Europe</p>
                </div>
              </div>
            </div>

            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                Les politiques sociales européennes
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Politique de l'emploi :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Stratégie Europe 2020</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Fonds Social Européen (FSE)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Initiative pour l'emploi des jeunes</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Politique sociale :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Lutte contre la pauvreté</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Protection sociale et santé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Inclusion sociale</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-carnet-ink mb-3">Politique d'éducation et formation :</h3>
                <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                    <span>Programme Erasmus+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                    <span>Espace européen de l'éducation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                    <span>Reconnaissance des qualifications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                Défis et perspectives de l'Europe sociale
              </h2>

              <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-carnet-ink mb-2">Convergence sociale dans une Europe élargie</h3>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  Disparités importantes entre pays membres, difficultés d'harmonisation des systèmes sociaux,
                  rôle des fonds structurels dans la réduction des écarts
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Vieillissement démographique</h4>
                  <p className="text-xs text-carnet-ink-soft">Réforme des systèmes de retraite, soutenabilité des dépenses sociales</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Migration et intégration</h4>
                  <p className="text-xs text-carnet-ink-soft">Politique d'asile commune, intégration des migrants</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Numérisation du travail</h4>
                  <p className="text-xs text-carnet-ink-soft">Transformation du marché du travail, formation professionnelle</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Économie verte</h4>
                  <p className="text-xs text-carnet-ink-soft">Transition écologique, emplois verts, justice sociale</p>
                </div>
              </div>

              <div className="mt-4 bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                <h3 className="font-semibold text-carnet-ink mb-2">Pacte européen pour le climat</h3>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  Objectif neutralité carbone 2050, transition juste pour les travailleurs et régions affectés
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/module3/europe-economique-monetaires">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module5/equilibre-micro">
                <Button className="bg-carnet-red hover:bg-carnet-red-deep text-white">
                  Module suivant
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>    </div>
          </div>
);
};

export default EuropeSocialePage;
