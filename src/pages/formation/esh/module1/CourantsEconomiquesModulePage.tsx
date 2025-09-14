import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const CourantsEconomiquesModulePage = () => {
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
              <span className="text-foreground font-medium">Module – Grands courants de la pensée économique</span>
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

          {/* Hero bleu */}
          <div className="mb-8">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 shadow-md">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">Les grands courants de la pensée économique – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 1.3 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#sec1" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">1) Précurseurs</a>
                <a href="#sec2" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">2) Classiques</a>
                <a href="#sec3" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">3) Révolution keynésienne</a>
                <a href="#sec4" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">4) Évolutions récentes</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* 1 Précurseurs */}
            <div id="sec1" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">1</span>
                Les précurseurs : mercantilistes et physiocrates
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Mercantilistes (dès le 15ème)</h3>
                  <p><strong>Le commerce assure la richesse des nations.</strong> Les mercantilistes affirment que l’État s’enrichit grâce aux profits du commerce colonial. Dans son Traité d’économie politique (1615), Montchrestien montre que les États peuvent se procurer des métaux précieux grâce au commerce. Le commerce international est un jeu à somme nulle : « nul ne perd ce que l’autre ne gagne ».</p>
                  <p><strong>Intervention de l’État.</strong> Politiques protectionnistes (droits de douane), favoriser les exportations. Ex : Corn Laws (1773, Angleterre). Encourager la croissance démographique pour accroître la main-d’œuvre. J. Bodin : « il n’est de richesses ni de forces que d’hommes » ; lois sur les pauvres (1601) en Angleterre.</p>
                  <p><strong>Abondance de monnaie et prix.</strong> Bodin (1568) : l’inflation vient de l’afflux de métaux précieux (intuition de la TQM de Fisher).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Physiocrates (18ème)</h3>
                  <p><strong>Source de la richesse : l’agriculture.</strong> Trois classes : producteurs, stérile (artisans), propriétaires. Pour développer l’agriculture, lever les entraves aux échanges intérieurs : Gournay – « laissez-faire, laissez-passer » – pour maintenir des prix du blé élevés et stimuler la production.</p>
                  <p><strong>Intuition du circuit économique.</strong> F. Quesnay, Tableau économique (1757) – préfigure la comptabilité nationale (voir tableau p.48).</p>
                </div>
              </div>
            </div>

            {/* 2 Classiques */}
            <div id="sec2" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">2</span>
                Développement de la pensée libérale au 19ème siècle – les classiques
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Fondements de l’école classique</h3>
                  <p>Deux principes : non-intervention de l’État ; les mécanismes de marché ramènent l’équilibre (main invisible).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Les classiques anglais et les sources de la croissance</h3>
                  <p><strong>A. Smith.</strong> Recherche sur la nature et les causes de la Richesse des Nations (1776). Valeur créée par la production matérielle ; État gendarme (fonctions régaliennes). Division du travail et libre-échange (avantage absolu). Valeur d’usage vs valeur d’échange (travail) : « le travail est le fondement et l’essence des richesses ».</p>
                  <p><strong>Ricardo.</strong> Des principes de l’économie politique et de l'impôt (1817). Monnaie neutre ; répartition des revenus entre salariés, capitalistes, propriétaires. Rente différentielle ; dynamique vers l’<em>état stationnaire</em> ; libre-échange et <em>avantage comparatif</em>.</p>
                  <p><strong>Malthus.</strong> Essai sur le principe de population (1798) – loi de population, croissance géométrique de la population vs arithmétique des denrées ; critique des « poor laws » ; remise en cause de la loi des débouchés (épargne non dépensée).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C) L’école classique française</h3>
                  <p><strong>J.-B. Say.</strong> Traité d’économie politique (1803) : valeur fondée sur l’utilité ; monnaie-voile ; loi des débouchés (« l’offre crée sa propre demande »), pas de crises durables, seulement des déséquilibres temporaires.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">D) Karl Marx, critique du libéralisme</h3>
                  <p><strong>Le Capital</strong> (1867) : héritier des classiques anglais. Valeur-travail (temps de travail moyen). Conflit capital/travail : « l’histoire de toute société [...] est l’histoire de lutte de classes ».</p>
                  <p>Plus-value = production des ouvriers – coût de la force de travail ; taux de profit = plus-value / capital.</p>
                  <p><strong>Contradictions majeures :</strong> (1) baisse tendancielle du taux de profit (hausse du capital constant), (2) paupérisation via « armée industrielle de réserve », (3) crises récurrentes (suraccumulation et sous-consommation).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">E) Renouveau classique : les néoclassiques</h3>
                  <p><strong>Raisonnement à la marge.</strong> Robbins (1932) : choix rationnels sous rareté. Individu « homo oeconomicus ».</p>
                  <p><strong>Valeur-utilité.</strong> Utilité cardinale (puis ordinale chez Pareto). Utilité marginale décroissante ; Walras (1874) ajoute la rareté.</p>
                  <p><strong>Équilibre général.</strong> Walras/Pareto : équilibre sur tous les marchés sous CPP ; optimum de Pareto.</p>
                </div>
              </div>
            </div>

            {/* 3 Révolution keynésienne */}
            <div id="sec3" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">3</span>
                Révolution keynésienne : remise en cause de l’analyse classique
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Concepts clés remis en cause</h3>
                  <p>1 - Incertitude constitutive ; anticipations mimétiques, pas d’homo oeconomicus.</p>
                  <p>2 - Court terme prioritaire : « À long terme nous serons tous morts ».</p>
                  <p>3 - Primat de la macroéconomie (no bridge) ; Keynes raisonne sur les agrégats.</p>
                  <p>4 - Monnaie non neutre : motifs de détention (transaction, précaution, spéculation).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Économie représentée en circuit</h3>
                  <p>1 - Le circuit se substitue à l’équilibre général ; contestation de la loi de Say : épargne possible ≠ I ; déséquilibres.</p>
                  <p>2 - Insuffisance de la demande effective explique le chômage (dépend de C et I anticipés).</p>
                  <p>3 - Rôle central de l’État : politique budgétaire pour relancer la croissance ; État providence.</p>
                </div>
              </div>
            </div>

            {/* 4 Évolutions récentes */}
            <div id="sec4" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">4</span>
                Évolutions récentes : ruptures et continuités
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Convergences classiques/keynésiens</h3>
                  <p>1 - Synthèse IS/LM (Hicks, Hansen) : équilibre global de sous-emploi ; politiques actives possibles.</p>
                  <p>2 - Théorie du déséquilibre (Clower, Leijonhufvud, Malinvaud) : prix rigides à court terme ; rationnements de quantités.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Réaffirmation libérale</h3>
                  <p><strong>Monétaristes (Friedman).</strong> TQM ; inflation = phénomène monétaire ; illusions puis anticipations adaptatives (revenu permanent) ⇒ politiques de relance inefficaces.</p>
                  <p><strong>Économie de l’offre.</strong> Réhabilitation de la loi de Say ; critique de la fiscalité et de la redistribution ; Courbe de Laffer (« trop d’impôt tue l’impôt »).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C) Nouvelle école classique (NEC)</h3>
                  <p>Anticipations rationnelles (Muth, Sargent, Lucas) ; monnaie neutre court et long terme ; cycles d’équilibre ; politiques conjoncturelles inutiles.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">D) Nouvelle école keynésienne (NEK)</h3>
                  <p>Rationalité admise mais information imparfaite ; pas de retour automatique à l’équilibre.</p>
                  <p>Prix rigides en concurrence imparfaite ; monnaie non neutre ; salaires rigides (salaire d’efficience, sélection adverse – Weiss 1980 ; contrats implicites – Azariadis 1975).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourantsEconomiquesModulePage;


