import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, TrendingUp, PieChart, Target, Users } from 'lucide-react';

const DefaillancesMarchePage = () => {
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
              <span className="text-foreground font-medium">Les défaillances de marché</span>
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
                <DollarSign className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Les défaillances de marché
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 1.8 - Module 1</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Analyser les situations où le marché ne conduit pas à une allocation optimale des ressources
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Définition des défaillances de marché */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                Définition des défaillances de marché
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Qu'est-ce qu'une défaillance de marché ?</h3>
                  <p className="text-sm text-gray-600">
                    Situation où le mécanisme de marché ne conduit pas à une allocation optimale des ressources.
                    L'équilibre du marché n'est pas Pareto-optimal, c'est-à-dire qu'il serait possible
                    d'améliorer le bien-être d'au moins un agent sans détériorer celui des autres.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Hypothèses de la concurrence parfaite</h3>
                  <p className="text-sm text-gray-600">
                    Pour que le marché fonctionne de manière optimale, plusieurs conditions doivent être réunies :
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mt-2">
                    <li>• Atomicité : nombreux acheteurs et vendeurs (aucun pouvoir de marché)</li>
                    <li>• Homogénéité : biens identiques et parfaitement substituables</li>
                    <li>• Information parfaite : tous les agents connaissent prix et qualités</li>
                    <li>• Mobilité parfaite : facteurs de production parfaitement mobiles</li>
                    <li>• Absence d'externalités : pas d'effets externes positifs ou négatifs</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Conséquences des défaillances</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Inefficacité allocative : ressources mal distribuées</li>
                    <li>• Gaspillage social : coût supérieur au bénéfice collectif</li>
                    <li>• Inégalités accrues : aggravation des disparités sociales</li>
                    <li>• Nécessité d'intervention étatique pour corriger le marché</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Les externalités */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                Les externalités
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-green-200 pl-4">
                  <h3 className="font-semibold text-green-700 mb-2">Définition</h3>
                  <p className="text-sm text-gray-600">
                    Effets externes positifs ou négatifs d'une activité économique sur des tiers
                    non parties prenantes à la transaction. Ces effets ne sont pas pris en compte
                    dans les décisions des agents économiques.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-green-700">Externalités négatives</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Pollution industrielle</strong> : coûts de santé pour la population</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Congestion routière</strong> : perte de temps pour les autres usagers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Tabagisme passif</strong> : effets sur la santé des non-fumeurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Bruit des avions</strong> : nuisance sonore pour riverains</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-green-700">Externalités positives</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Éducation</strong> : bénéfices pour la société entière</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Recherche fondamentale</strong> : avancées technologiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Vaccination</strong> : protection collective (effet troupeau)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Jardinage</strong> : embellissement du quartier</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Correction des externalités</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Taxes pigouviennes</strong> : internalisation du coût social (pollution)</li>
                    <li>• <strong>Subventions</strong> : encouragement des externalités positives (éducation)</li>
                    <li>• <strong>Droits de propriété</strong> : Coase - négociation entre parties</li>
                    <li>• <strong>Réglementation</strong> : normes et interdictions (limites de pollution)</li>
                    <li>• <strong>Internalisation</strong> : intégration des effets externes dans les prix</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Les biens publics */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                Les biens publics
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-purple-700 mb-2">Caractéristiques des biens publics</h3>
                  <p className="text-sm text-gray-600">
                    Les biens publics se caractérisent par deux propriétés simultanées :
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mt-2">
                    <li>• <strong>Non-rivalité</strong> : la consommation par un individu n'empêche pas les autres d'en bénéficier</li>
                    <li>• <strong>Non-exclusion</strong> : il est impossible ou très coûteux d'exclure quelqu'un de la consommation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-purple-700 mb-2">Exemples de biens publics</h3>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <h4 className="font-semibold text-purple-700 text-sm mb-1">Biens publics purs</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Défense nationale</li>
                        <li>• Phares et balises</li>
                        <li>• Recherche fondamentale</li>
                        <li>• Justice et ordre public</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <h4 className="font-semibold text-purple-700 text-sm mb-1">Biens publics impurs</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Routes et autoroutes</li>
                        <li>• Parcs et espaces verts</li>
                        <li>• Programmes TV (en partie)</li>
                        <li>• Logiciels open source</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-purple-700 mb-2">Le problème du passager clandestin</h3>
                  <p className="text-sm text-gray-600">
                    Les individus ont tendance à ne pas révéler leurs préférences réelles pour les biens publics,
                    espérant bénéficier de la consommation sans contribuer au financement (free-riding).
                    Cela conduit à une sous-production des biens publics par le marché.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Solutions au problème des biens publics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Financement étatique</strong> : impôts et taxes obligatoires</li>
                    <li>• <strong>Taxes d'exclusion</strong> : péages, droits d'entrée (pour biens impurs)</li>
                    <li>• <strong>Subventions croisées</strong> : financement par d'autres activités</li>
                    <li>• <strong>Partenariats public-privé</strong> : délégation à des entreprises privées</li>
                    <li>• <strong>Contributions volontaires</strong> : dons et mécénat (efficacité limitée)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Les asymétries d'information */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                Les asymétries d'information
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Définition</h3>
                  <p className="text-sm text-gray-600">
                    Situation où une partie possède plus d'informations que l'autre dans une transaction.
                    Cette asymétrie empêche le bon fonctionnement du marché et peut conduire à des décisions sous-optimales.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">L'aléa moral (moral hazard)</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Une partie prend des risques excessifs après la transaction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Exemple</strong> : assuré qui prend moins de précautions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Exemple</strong> : emprunteur qui investit dans projets risqués</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">La sélection adverse (adverse selection)</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Les agents de mauvaise qualité chassent les bons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Exemple</strong> : marché des voitures d'occasion (Akerlof)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Exemple</strong> : assurance santé (anti-sélection)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Solutions aux asymétries d'information</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Signaling</strong> : l'agent informé envoie un signal (diplôme, garantie)</li>
                    <li>• <strong>Screening</strong> : l'agent non informé teste l'autre partie (contrats multiples)</li>
                    <li>• <strong>Réglementation</strong> : normes de qualité, labels, certifications</li>
                    <li>• <strong>Intermédiaires</strong> : experts, agences de notation, courtiers</li>
                    <li>• <strong>Assurance obligatoire</strong> : couverture minimale pour tous les risques</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: Le pouvoir de marché */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">5</span>
                </div>
                Le pouvoir de marché
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">Définition du pouvoir de marché</h3>
                  <p className="text-sm text-gray-600">
                    Capacité d'une entreprise ou d'un groupe d'entreprises à influencer les prix du marché
                    à son avantage, en s'écartant des conditions de concurrence parfaite.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <h4 className="font-semibold text-indigo-700 text-sm mb-1">Monopole</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Un seul vendeur</li>
                      <li>• Barrière à l'entrée</li>
                                              <li>• Prix &gt; coût marginal</li>
                      <li>• Production sous-optimale</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <h4 className="font-semibold text-indigo-700 text-sm mb-1">Oligopole</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Quelques vendeurs</li>
                      <li>• Interdépendance stratégique</li>
                      <li>• Prix supérieurs au coût</li>
                      <li>• Concurrence non-prix</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <h4 className="font-semibold text-indigo-700 text-sm mb-1">Monopole naturel</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Coûts décroissants</li>
                      <li>• Économies d'échelle</li>
                      <li>• Régulation nécessaire</li>
                      <li>• Prix administrés</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">Sources du pouvoir de marché</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• <strong>Barrières à l'entrée</strong> : brevets, licences, économies d'échelle, contrôle des ressources</li>
                    <li>• <strong>Différenciation des produits</strong> : marques, qualité, innovation, marketing</li>
                    <li>• <strong>Contrôle des réseaux</strong> : distribution, plateformes technologiques</li>
                    <li>• <strong>Fusion-acquisition</strong> : concentration horizontale ou verticale</li>
                    <li>• <strong>Externalités de réseau</strong> : effet de club croissant avec la taille</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700 mb-2">Politiques de concurrence</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Contrôle des concentrations</strong> : autorisation préalable des fusions</li>
                    <li>• <strong>Lutte contre les abus de position dominante</strong> : prix prédateurs, pratiques discriminatoires</li>
                    <li>• <strong>Promotion de la concurrence</strong> : ouverture des marchés, privatisation</li>
                    <li>• <strong>Protection des consommateurs</strong> : information, transparence des prix</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: Les biens méritoires */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">6</span>
                </div>
                Les biens méritoires
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-teal-200 pl-4">
                  <h3 className="font-semibold text-teal-700 mb-2">Définition</h3>
                  <p className="text-sm text-gray-600">
                    Biens dont la consommation individuelle apporte des bénéfices à la société entière,
                    mais que les individus sous-estiment ou ne peuvent pas financer.
                    L'État juge nécessaire d'encourager leur consommation.
                  </p>
                </div>

                <div className="border-l-4 border-teal-200 pl-4">
                  <h3 className="font-semibold text-teal-700 mb-2">Exemples de biens méritoires</h3>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-teal-50 rounded-lg p-3">
                      <h4 className="font-semibold text-teal-700 text-sm mb-1">Éducation</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Formation professionnelle</li>
                        <li>• Capital humain</li>
                        <li>• Mobilité sociale</li>
                        <li>• Innovation et progrès</li>
                      </ul>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-3">
                      <h4 className="font-semibold text-teal-700 text-sm mb-1">Santé</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Prévention des épidémies</li>
                        <li>• Couverture universelle</li>
                        <li>• Recherche médicale</li>
                        <li>• Espérance de vie</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-teal-50 rounded-lg p-3">
                      <h4 className="font-semibold text-teal-700 text-sm mb-1">Culture et sports</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Patrimoine national</li>
                        <li>• Cohésion sociale</li>
                        <li>• Bien-être collectif</li>
                      </ul>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-3">
                      <h4 className="font-semibold text-teal-700 text-sm mb-1">Environnement</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Biodiversité</li>
                        <li>• Climat et ressources</li>
                        <li>• Développement durable</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-700 mb-2">Politiques publiques pour les biens méritoires</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Subventions directes</strong> : bourses d'études, couverture santé universelle</li>
                    <li>• <strong>Taxation négative</strong> : crédits d'impôt, allocations familiales</li>
                    <li>• <strong>Offre publique</strong> : écoles publiques, hôpitaux d'État</li>
                    <li>• <strong>Incitation fiscale</strong> : déductions pour dons culturels ou environnementaux</li>
                    <li>• <strong>Campagnes d'information</strong> : sensibilisation aux bienfaits individuels et collectifs</li>
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
              <Link to="/formation/esh/module1/courants-sociologiques">
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

export default DefaillancesMarchePage;
