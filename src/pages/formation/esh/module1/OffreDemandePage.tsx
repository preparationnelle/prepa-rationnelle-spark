import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PieChart, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, TrendingUp, DollarSign, Target, Users } from 'lucide-react';

const OffreDemandePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Sticky Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formations" className="hover:text-foreground transition-colors">
                Toutes les formations
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">L&apos;offre, la demande et l&apos;équilibre du marché en concurrence parfaite</span>
            </div>
          </div>
        </nav>

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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <PieChart className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  L&apos;offre, la demande et l&apos;équilibre du marché en concurrence parfaite
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 1.7 - Module 1</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprendre les mécanismes de détermination des prix et des quantités sur un marché concurrentiel
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: La demande du marché */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">1</span>
                </div>
                La demande du marché
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Agrégation des demandes individuelles</h3>
                  <p className="text-sm text-gray-600">
                    La courbe de demande du marché s'obtient en sommant horizontalement les demandes individuelles
                    à chaque prix. Elle représente la quantité totale demandée par tous les consommateurs.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Loi de la demande</h3>
                  <p className="text-sm text-gray-600">
                    La demande est une fonction décroissante du prix : plus le prix est élevé,
                    moins les consommateurs sont prêts à acheter le bien.
                  </p>
                  <div className="mt-2 p-3 bg-blue-50 rounded border">
                    <p className="text-xs text-gray-600">
                      <strong>Facteurs influençant la demande :</strong><br/>
                      • Prix du bien (effet prix)<br/>
                      • Revenus des consommateurs (effet revenu)<br/>
                      • Prix des biens substituables/complémentaires (effet substitution)<br/>
                      • Goûts et préférences<br/>
                      • Population et structure démographique
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Elasticité-prix de la demande</h4>
                  <p className="text-sm text-gray-600">
                    Mesure la sensibilité de la demande aux variations de prix.
                  </p>
                  <div className="mt-2 p-3 bg-white rounded border">
                    <p className="text-xs text-gray-600 font-mono">
                      E_d = (ΔQ/Q) / (ΔP/P) = (dQ/dP) * (P/Q)
                    </p>
                  </div>
                  <ul className="text-xs text-gray-600 mt-2 space-y-1">
                    <li>• |E_d| &gt; 1 : demande élastique (revenus fiscaux diminuent si augmentation du prix)</li>
                    <li>• |E_d| = 1 : demande unitaires élastique</li>
                    <li>• |E_d| &lt; 1 : demande inélastique (revenus fiscaux augmentent si augmentation du prix)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: L'offre du marché */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                L'offre du marché
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Agrégation des offres individuelles</h3>
                  <p className="text-sm text-gray-600">
                    La courbe d'offre du marché s'obtient en sommant horizontalement les offres individuelles
                    à chaque prix. Elle représente la quantité totale offerte par tous les producteurs.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Loi de l'offre</h3>
                  <p className="text-sm text-gray-600">
                    L'offre est une fonction croissante du prix : plus le prix est élevé,
                    plus les producteurs sont incités à produire et à vendre.
                  </p>
                  <div className="mt-2 p-3 bg-blue-50 rounded border">
                    <p className="text-xs text-gray-600">
                      <strong>Facteurs influençant l'offre :</strong><br/>
                      • Prix du bien (effet prix direct)<br/>
                      • Coûts de production (salaires, matières premières)<br/>
                      • Progrès technique et productivité<br/>
                      • Prix des facteurs de production<br/>
                      • Nombre de producteurs sur le marché
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Elasticité-prix de l'offre</h4>
                  <p className="text-sm text-gray-600">
                    Mesure la sensibilité de l'offre aux variations de prix.
                  </p>
                  <div className="mt-2 p-3 bg-white rounded border">
                    <p className="text-xs text-gray-600 font-mono">
                      E_s = (ΔQ/Q) / (ΔP/P) = (dQ/dP) * (P/Q)
                    </p>
                  </div>
                  <ul className="text-xs text-gray-600 mt-2 space-y-1">
                    <li>• Plus l'élasticité est élevée, plus l'offre réagit aux variations de prix</li>
                    <li>• L'élasticité dépend de la mobilité des facteurs de production</li>
                    <li>• L'élasticité est généralement plus faible à court terme qu'à long terme</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: L'équilibre du marché */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">3</span>
                </div>
                L'équilibre du marché
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Définition de l'équilibre</h3>
                  <p className="text-sm text-gray-600">
                    Situation où la quantité demandée égale la quantité offerte. Le prix d'équilibre
                    est le prix qui permet cette égalité entre l'offre et la demande.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Prix d'équilibre (P*)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Prix où Q_d = Q_s</li>
                      <li>• Aucun agent n'a intérêt à changer</li>
                      <li>• Marché automatiquement équilibré</li>
                      <li>• Prix de marché concurrentiel</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Quantité d'équilibre (Q*)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Quantité effectivement échangée</li>
                      <li>• Intersection des courbes D et S</li>
                      <li>• Volume des transactions</li>
                      <li>• Quantité de marché</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-purple-700 mb-2">Le mécanisme de tâtonnement</h3>
                  <p className="text-sm text-gray-600">
                    Processus d'ajustement automatique du prix vers l'équilibre (Léon Walras).
                    Si excès de demande : prix ↑ → offre ↑ et demande ↓ jusqu'à l'équilibre.
                    Si excès d'offre : prix ↓ → demande ↑ et offre ↓ jusqu'à l'équilibre.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Les variations de l'équilibre */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                Les variations de l'équilibre
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">Déplacement de la demande</h3>
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
                    <h3 className="font-semibold text-gray-800">Déplacement de l'offre</h3>
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

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Chocs simultanés sur l'offre et la demande</h4>
                  <p className="text-sm text-gray-600">
                    Quand offre et demande varient simultanément, l'effet sur le prix et la quantité
                    dépend de l'amplitude relative des déplacements des deux courbes.
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div className="bg-white rounded p-2">
                      <p className="text-xs font-semibold text-gray-800">Prix ambigu</p>
                      <p className="text-xs text-gray-600">Dépend de l'élasticité relative</p>
                    </div>
                    <div className="bg-white rounded p-2">
                      <p className="text-xs font-semibold text-gray-800">Quantité univoque</p>
                      <p className="text-xs text-gray-600">Dans le même sens que le déplacement le plus important</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: L'efficience du marché concurrentiel */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">5</span>
                </div>
                L'efficience du marché concurrentiel
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">L'optimum de Pareto</h3>
                  <p className="text-sm text-gray-600">
                    Situation où aucune réallocation des ressources ne peut améliorer le bien-être
                    d'un agent économique sans détériorer celui d'un autre.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">Théorème fondamental de l'économie du bien-être</h3>
                  <p className="text-sm text-gray-600">
                    Sous certaines conditions (concurrence parfaite, information parfaite, absence d'externalités),
                    l'équilibre du marché concurrentiel est Pareto-optimal.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Efficience allocative : ressources allouées aux usages les plus productifs</li>
                    <li>• Efficience productive : production au coût minimal</li>
                    <li>• Efficience dans l'échange : utilités marginales proportionnelles aux prix</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700 mb-2">Limites de l'efficience concurrentielle</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
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
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">6</span>
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
                  <p className="text-sm text-gray-600">
                    Interventions indirectes qui modifient les prix relatifs et orientent les comportements.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• <strong>Taxe</strong> : augmente le prix payé par les consommateurs, diminue le prix perçu par les producteurs</li>
                    <li>• <strong>Subvention</strong> : diminue le prix payé par les consommateurs, augmente le prix perçu par les producteurs</li>
                    <li>• <strong>Effet sur la quantité</strong> : dépend de l'élasticité-prix de l'offre et de la demande</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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
