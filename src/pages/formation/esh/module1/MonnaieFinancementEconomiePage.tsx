import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const MonnaieFinancementEconomiePage = () => {
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
              <span className="carnet-eyebrow text-[11px]">La monnaie et le financement de l'économie</span>
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
              <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
                <DollarSign className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  La monnaie et le financement de l'économie
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 1.2 - Module 1</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Comprendre le rôle de la monnaie et les mécanismes de financement dans l'économie
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Définition et fonctions de la monnaie */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                Définition et fonctions de la monnaie
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-carnet-ink mb-3">Fonctions de la monnaie :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-carnet-red">Unité de compte</strong>
                        <p className="text-xs text-carnet-ink-soft">Mesure la valeur des biens et services</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-carnet-red">Intermédiaire d'échange</strong>
                        <p className="text-xs text-carnet-ink-soft">Facilite les transactions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-carnet-red">Réserve de valeur</strong>
                        <p className="text-xs text-carnet-ink-soft">Permet l'épargne et l'investissement</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-carnet-ink mb-3">Formes de monnaie :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Monnaie fiduciaire (billets, pièces)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Monnaie scripturale (comptes bancaires)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Crypto-monnaies (Bitcoin, etc.)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Système bancaire et création monétaire */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                Système bancaire et création monétaire
              </h2>

              <div className="space-y-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Banque Centrale</h3>
                  <ul className="text-sm space-y-1 text-carnet-ink-soft">
                    <li>• Émet la monnaie et contrôle la masse monétaire</li>
                    <li>• Fixe les taux d'intérêt directeurs</li>
                    <li>• Gère les réserves de change</li>
                    <li>• Assure la stabilité financière</li>
                  </ul>
                </div>

                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Banques Commerciales</h3>
                  <ul className="text-sm space-y-1 text-carnet-ink-soft">
                    <li>• Collectent l'épargne des ménages</li>
                    <li>• Accordent des crédits aux entreprises</li>
                    <li>• Participent à la création monétaire via le multiplicateur</li>
                    <li>• Gèrent les moyens de paiement</li>
                  </ul>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Multiplicateur de crédit</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Mécanisme par lequel les banques commerciales créent de la monnaie en accordant des crédits.
                    Un euro déposé en banque peut générer plusieurs euros de crédit selon le taux de réserve obligatoire.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Financement de l'économie */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                Financement de l'économie
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-carnet-ink mb-3">Financement interne :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Autofinancement des entreprises (profits retenus)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Épargne des ménages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Réserves des banques</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-carnet-ink mb-3">Financement externe :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Émission d'actions et d'obligations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Crédits bancaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Dette publique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/module1/acteurs-fonctions-economie">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module1/courants-pensee-economique">
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

export default MonnaieFinancementEconomiePage;
