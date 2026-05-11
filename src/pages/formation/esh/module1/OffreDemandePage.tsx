import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PieChart, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, TrendingUp, DollarSign, Target, Users } from 'lucide-react';

const OffreDemandePage = () => {
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
              <span className="carnet-eyebrow text-[11px]">L&apos;offre, la demande et l&apos;équilibre du marché en concurrence parfaite</span>
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
                <PieChart className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  L&apos;offre, la demande et l&apos;équilibre du marché en concurrence parfaite
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 1.7 - Module 1</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Comprendre les mécanismes de détermination des prix et des quantités sur un marché concurrentiel
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: La demande du marché */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                La demande du marché
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Agrégation des demandes individuelles</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    La courbe de demande du marché s'obtient en sommant horizontalement les demandes individuelles
                    à chaque prix. Elle représente la quantité totale demandée par tous les consommateurs.
                  </p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Loi de la demande</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    La demande est une fonction décroissante du prix : plus le prix est élevé,
                    moins les consommateurs sont prêts à acheter le bien.
                  </p>
                  <div className="mt-2 p-3 bg-[rgba(193,68,58,0.08)] rounded border">
                    <p className="text-xs text-carnet-ink-soft">
                      <strong>Facteurs influençant la demande :</strong><br/>
                      • Prix du bien (effet prix)<br/>
                      • Revenus des consommateurs (effet revenu)<br/>
                      • Prix des biens substituables/complémentaires (effet substitution)<br/>
                      • Goûts et préférences<br/>
                      • Population et structure démographique
                    </p>
                  </div>
                </div>

                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h4 className="font-semibold text-carnet-ink mb-2">Elasticité-prix de la demande</h4>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Mesure la sensibilité de la demande aux variations de prix.
                  </p>
                  <div className="mt-2 p-3 bg-carnet-paper-2 rounded border">
                    <p className="text-xs text-carnet-ink-soft font-mono">
                      E_d = (ΔQ/Q) / (ΔP/P) = (dQ/dP) * (P/Q)
                    </p>
                  </div>
                  <ul className="text-xs text-carnet-ink-soft mt-2 space-y-1">
                    <li>• |E_d| &gt; 1 : demande élastique (revenus fiscaux diminuent si augmentation du prix)</li>
                    <li>• |E_d| = 1 : demande unitaires élastique</li>
                    <li>• |E_d| &lt; 1 : demande inélastique (revenus fiscaux augmentent si augmentation du prix)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: L'offre du marché */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                L'offre du marché
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Agrégation des offres individuelles</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    La courbe d'offre du marché s'obtient en sommant horizontalement les offres individuelles
                    à chaque prix. Elle représente la quantité totale offerte par tous les producteurs.
                  </p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Loi de l'offre</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    L'offre est une fonction croissante du prix : plus le prix est élevé,
                    plus les producteurs sont incités à produire et à vendre.
                  </p>
                  <div className="mt-2 p-3 bg-[rgba(193,68,58,0.08)] rounded border">
                    <p className="text-xs text-carnet-ink-soft">
                      <strong>Facteurs influençant l'offre :</strong><br/>
                      • Prix du bien (effet prix direct)<br/>
                      • Coûts de production (salaires, matières premières)<br/>
                      • Progrès technique et productivité<br/>
                      • Prix des facteurs de production<br/>
                      • Nombre de producteurs sur le marché
                    </p>
                  </div>
                </div>

                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h4 className="font-semibold text-carnet-ink mb-2">Elasticité-prix de l'offre</h4>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Mesure la sensibilité de l'offre aux variations de prix.
                  </p>
                  <div className="mt-2 p-3 bg-carnet-paper-2 rounded border">
                    <p className="text-xs text-carnet-ink-soft font-mono">
                      E_s = (ΔQ/Q) / (ΔP/P) = (dQ/dP) * (P/Q)
                    </p>
                  </div>
                  <ul className="text-xs text-carnet-ink-soft mt-2 space-y-1">
                    <li>• Plus l'élasticité est élevée, plus l'offre réagit aux variations de prix</li>
                    <li>• L'élasticité dépend de la mobilité des facteurs de production</li>
                    <li>• L'élasticité est généralement plus faible à court terme qu'à long terme</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: L'équilibre du marché */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                L'équilibre du marché
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Définition de l'équilibre</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Situation où la quantité demandée égale la quantité offerte. Le prix d'équilibre
                    est le prix qui permet cette égalité entre l'offre et la demande.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Prix d'équilibre (P*)</h4>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Prix où Q_d = Q_s</li>
                      <li>• Aucun agent n'a intérêt à changer</li>
                      <li>• Marché automatiquement équilibré</li>
                      <li>• Prix de marché concurrentiel</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Quantité d'équilibre (Q*)</h4>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Quantité effectivement échangée</li>
                      <li>• Intersection des courbes D et S</li>
                      <li>• Volume des transactions</li>
                      <li>• Quantité de marché</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-purple-700 mb-2">Le mécanisme de tâtonnement</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Processus d'ajustement automatique du prix vers l'équilibre (Léon Walras).
                    Si excès de demande : prix ↑ → offre ↑ et demande ↓ jusqu'à l'équilibre.
                    Si excès d'offre : prix ↓ → demande ↑ et offre ↓ jusqu'à l'équilibre.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Les variations de l'équilibre */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/10 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red font-bold text-sm">4</span>
                </div>
                Les variations de l'équilibre
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-carnet-ink">Déplacement de la demande</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Augmentation de la demande</strong> : courbe D se déplace vers la droite</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Diminution de la demande</strong> : courbe D se déplace vers la gauche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Effet : nouveau P* et Q* dans la même direction</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-carnet-ink">Déplacement de l'offre</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Augmentation de l'offre</strong> : courbe S se déplace vers la droite</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Diminution de l'offre</strong> : courbe S se déplace vers la gauche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Effet : P* et Q* varient en sens inverse</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h4 className="font-semibold text-carnet-ink mb-2">Chocs simultanés sur l'offre et la demande</h4>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Quand offre et demande varient simultanément, l'effet sur le prix et la quantité
                    dépend de l'amplitude relative des déplacements des deux courbes.
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div className="bg-carnet-paper-2 rounded p-2">
                      <p className="text-xs font-semibold text-carnet-ink">Prix ambigu</p>
                      <p className="text-xs text-carnet-ink-soft">Dépend de l'élasticité relative</p>
                    </div>
                    <div className="bg-carnet-paper-2 rounded p-2">
                      <p className="text-xs font-semibold text-carnet-ink">Quantité univoque</p>
                      <p className="text-xs text-carnet-ink-soft">Dans le même sens que le déplacement le plus important</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: L'efficience du marché concurrentiel */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/10 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red font-bold text-sm">5</span>
                </div>
                L'efficience du marché concurrentiel
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">L'optimum de Pareto</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Situation où aucune réallocation des ressources ne peut améliorer le bien-être
                    d'un agent économique sans détériorer celui d'un autre.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">Théorème fondamental de l'économie du bien-être</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Sous certaines conditions (concurrence parfaite, information parfaite, absence d'externalités),
                    l'équilibre du marché concurrentiel est Pareto-optimal.
                  </p>
                  <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1 mt-2">
                    <li>• Efficience allocative : ressources allouées aux usages les plus productifs</li>
                    <li>• Efficience productive : production au coût minimal</li>
                    <li>• Efficience dans l'échange : utilités marginales proportionnelles aux prix</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700 mb-2">Limites de l'efficience concurrentielle</h4>
                  <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li>• Présence d'externalités (pollution, éducation)</li>
                    <li>• Biens publics (défense nationale, phares)</li>
                    <li>• Asymétries d'information (aléa moral, sélection adverse)</li>
                    <li>• Pouvoir de marché (monopoles, oligopoles)</li>
                    <li>• Biens méritoires (santé, éducation)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: Les interventions sur le marché */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/10 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red font-bold text-sm">6</span>
                </div>
                Les interventions sur le marché
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-red-700">Prix minimum (soutien)</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Exemple : prix garanti aux agriculteurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Effet : offre ↑, demande ↓, excès d'offre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Conséquence : stockage ou exportation subventionnée</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-red-700">Prix maximum (encadrement)</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Exemple : loyer maximum, prix des médicaments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Effet : offre ↓, demande ↑, pénurie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Conséquence : rationnement, marché noir</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-red-200 pl-4">
                  <h3 className="font-semibold text-red-700 mb-2">Les taxes et subventions</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Interventions indirectes qui modifient les prix relatifs et orientent les comportements.
                  </p>
                  <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1 mt-2">
                    <li>• <strong>Taxe</strong> : augmente le prix payé par les consommateurs, diminue le prix perçu par les producteurs</li>
                    <li>• <strong>Subvention</strong> : diminue le prix payé par les consommateurs, augmente le prix perçu par les producteurs</li>
                    <li>• <strong>Effet sur la quantité</strong> : dépend de l'élasticité-prix de l'offre et de la demande</li>
                  </ul>
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
              <Link to="/formation/esh/module1/defaillances-marche">
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

export default OffreDemandePage;
