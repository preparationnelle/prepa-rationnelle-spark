import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, BarChart3 } from 'lucide-react';

const CroissanceEconomiquePage = () => {
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
              <span className="carnet-eyebrow text-[11px]">La croissance économique</span>
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
                Retour au Module 2
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
                <BarChart3 className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  La croissance économique
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 2.1 - Module 2</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Comprendre les mécanismes et les facteurs de la croissance économique depuis le XIXe siècle
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Définition de la croissance économique */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red font-bold text-sm">1</span>
                </div>
                Définition et mesure de la croissance
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Définition</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    La croissance économique désigne l'augmentation durable de la production de biens et services dans une économie,
                    mesurée généralement par l'évolution du Produit Intérieur Brut (PIB).
                  </p>
                </div>

                <div className="bg-carnet-paper rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Mesure de la croissance :</h3>
                  <ul className="text-sm space-y-1 text-carnet-ink-soft">
                    <li>• <strong className="text-carnet-red">PIB nominal</strong> : Valeur des biens et services à prix courants</li>
                    <li>• <strong className="text-carnet-red">PIB réel</strong> : Valeur des biens et services à prix constants</li>
                    <li>• <strong className="text-carnet-red">Taux de croissance</strong> : Variation annuelle du PIB réel</li>
                    <li>• <strong className="text-carnet-red">PIB par habitant</strong> : PIB réel divisé par la population</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Facteurs de croissance */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red font-bold text-sm">2</span>
                </div>
                Facteurs de la croissance économique
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-carnet-ink mb-3">Facteurs quantitatifs :</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-carnet-red">Accumulation du capital</strong>
                        <p className="text-xs text-carnet-ink-soft">Investissement dans les équipements et infrastructures</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-carnet-red">Croissance démographique</strong>
                        <p className="text-xs text-carnet-ink-soft">Augmentation de la population active</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-carnet-ink mb-3">Facteurs qualitatifs :</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-carnet-red">Progrès technique</strong>
                        <p className="text-xs text-carnet-ink-soft">Innovations et améliorations technologiques</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-carnet-red">Amélioration de l'éducation</strong>
                        <p className="text-xs text-carnet-ink-soft">Formation et qualification de la main-d'œuvre</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Les grandes phases de la croissance */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red font-bold text-sm">3</span>
                </div>
                Grandes phases de la croissance depuis le XIXe siècle
              </h2>

              <div className="space-y-4">
                <div className="bg-carnet-paper rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">XIXe siècle - Révolution industrielle</h3>
                  <ul className="text-sm space-y-1 text-carnet-ink-soft">
                    <li>• Passage d'une économie agricole à une économie industrielle</li>
                    <li>• Développement des chemins de fer et des télécommunications</li>
                    <li>• Croissance démographique importante</li>
                    <li>• Taux de croissance : <span className="text-carnet-red font-medium">2-3% par an</span></li>
                  </ul>
                </div>

                <div className="bg-carnet-paper rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">XXe siècle - Trente Glorieuses (1945-1975)</h3>
                  <ul className="text-sm space-y-1 text-carnet-ink-soft">
                    <li>• Reconstruction d'après-guerre</li>
                    <li>• État-providence et politiques keynésiennes</li>
                    <li>• Révolution technologique (informatique, nucléaire)</li>
                    <li>• Taux de croissance : <span className="text-carnet-red font-medium">4-5% par an</span></li>
                  </ul>
                </div>

                <div className="bg-carnet-paper rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Fin XXe - début XXIe siècle</h3>
                  <ul className="text-sm space-y-1 text-carnet-ink-soft">
                    <li>• Globalisation et ouverture des marchés</li>
                    <li>• Révolution numérique et internet</li>
                    <li>• Croissance plus modérée mais plus durable</li>
                    <li>• Taux de croissance : <span className="text-carnet-red font-medium">2-3% par an</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Modèles de croissance */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red font-bold text-sm">4</span>
                </div>
                Modèles théoriques de croissance
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Modèle de <span className="text-carnet-red">Solow</span> (1956)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    La croissance dépend de l'accumulation du capital physique et humain, ainsi que du progrès technique.
                    Dans le long terme, la croissance par habitant dépend uniquement du progrès technique.
                  </p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Théories <span className="text-carnet-red">endogènes</span> de la croissance</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Le progrès technique n'est pas exogène mais résulte des investissements en R&D,
                    en éducation et en capital humain.
                  </p>
                </div>

                <div className="bg-carnet-paper rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Limites de la croissance</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    La croissance économique peut être limitée par l'épuisement des ressources naturelles,
                    la dégradation de l'environnement, ou les contraintes démographiques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 2
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module2/inegalites-developpement">
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

export default CroissanceEconomiquePage;
