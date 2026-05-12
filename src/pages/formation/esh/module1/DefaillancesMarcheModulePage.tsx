import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const DefaillancesMarcheModulePage = () => {
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
              <Link to="/formations" className="hover:text-carnet-red transition-colors">Toutes les formations</Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh" className="hover:text-carnet-red transition-colors">Formation ESH ECG</Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-carnet-red transition-colors">Première année</Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">Module – Défaillances du marché</span>
            </div>
          </div>
        </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
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
            <div className="rounded-2xl bg-gradient-to-r from-carnet-red to-pr-black text-white p-8 shadow-md">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-carnet-paper-2/15 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">Les défaillances du marché – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 1.6 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#intro" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">Intro</a>
                <a href="#defaillances" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">1) Défaillances</a>
                <a href="#etat" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">2) Intervention de l'État</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* Intro */}
            <div id="intro" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">6) Les défaillances du marché</h2>
              <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                Grâce à la « main invisible » le marché est le mode d’allocation des ressources le plus efficace et assure son équilibre. Or, dans certaines situations, cela ne suffit pas :
                monopoles, externalités, biens collectifs, asymétries d’information. L’État doit alors intervenir pour se substituer à la main invisible et maximiser le bien‑être collectif.
              </p>
            </div>

            {/* 1 Défaillances */}
            <div id="defaillances" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">1) Les défaillances de marché et l’allocation des ressources</h2>
              <div className="space-y-5 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Les biens collectifs ne sont pas produits par le marché</h3>
                  <p><strong>1 - Demande sociale.</strong> Les biens collectifs n’ont pas d’offre et de demande et sont d’une forte utilité sociale. Samuelson : « un bien dont tous peuvent bénéficier en commun, c'est‑à‑dire dont la consommation par individu ne diminue en rien la quantité disponible de ce bien pour n’importe quel autre individu ».</p>
                  <p>Deux critères : <em>exclusion</em> et <em>rivalité</em>. Rival → la consommation d’un agent empêche celle d’un autre ; Excluable → accès réservé à ceux qui paient.</p>
                  <p><strong>2 - Régulation par le marché impossible</strong> pour les biens non‑exclusifs et non‑rivaux.</p>
                  <p><strong>3 - Biens communs.</strong> Rivaux mais non‑exclusifs : tout le monde peut en profiter sans payer → ressources naturelles. Hardin (1968), « tragédie des biens communs ». Biens publics mondiaux : non‑rivaux et non‑excluables (ex : climat). Coase (1960) : coûts de transaction et droits de propriété.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Monopoles naturels et structure des marchés</h3>
                  <p><strong>1 - Monopoles naturels.</strong> Rendements d’échelle très importants (coûts fixes élevés) → barrières à l’entrée. Risque de frein au dynamisme.</p>
                  <p><strong>2 - Allocation paradoxale.</strong> Le monopole est <em>price maker</em> (rente de monopole), situation sous‑optimale. Mais un monopole naturel peut avoir des coûts plus faibles qu’en CPP, donc des prix potentiellement plus bas.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">C) Externalités et sous‑allocation</h3>
                  <p><strong>1 - Deux types.</strong> Pigou (1920). Externalité positive (ex : vaccination – Krugman & Wells, 2009) ; externalité négative (ex : nuisances sonores).</p>
                  <p><strong>2 - Non prise en compte par le marché.</strong> Négative → coût privé &lt; coût social ; Positive → production/consommation sous‑optimale (bénéfice social &gt; bénéfice privé).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">D) Asymétries d’information et transparence</h3>
                  <p><strong>1 - Sélection adverse.</strong> Akerlof (1970), <em>The Market for Lemons</em> : « les mauvais produits chassent les bons » (voitures d’occasion, assurances, crédit).</p>
                  <p><strong>2 - Aléa moral.</strong> Comportements opportunistes après contrat (« ex‑post »). Stiglitz & Shapiro (1984) : modèle du « tire‑au‑flanc » ; contrôle coûteux → incertitude persistante.</p>
                </div>
              </div>
            </div>

            {/* 2 Intervention de l'État */}
            <div id="etat" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">2) L’État intervient pour corriger les défaillances</h2>
              <div className="space-y-5 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Production des biens collectifs</h3>
                  <p><strong>1 - Substitution au marché.</strong> Biens collectifs purs → fonctions régaliennes (Smith). Délégation à des opérateurs privés via marchés publics / DSP (ex : eau) avec cahier des charges. Santé/éducation : prise en charge partielle (externalités positives, justice sociale).</p>
                  <p><strong>2 - Biens communs.</strong> Préserver tout en permettant l’usage : privatisation et/ou réglementation (ex : droit de pêche).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Réglementer les monopoles naturels</h3>
                  <p>Le monopoleur étant <em>price maker</em>, l’État peut imposer la tarification au coût marginal, subventionner si CM &gt; Cm, ou imposer la vente au coût moyen (Croissant & Vornetti, 2003) – nécessite la connaissance des coûts.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">C) Internaliser les externalités</h3>
                  <p>Réglementations directes (seuils, interdictions). <strong>Taxes/subventions</strong> pigouviennes (Pigou, 1920). Protection de la recherche (brevets) – Mankiw & Taylor (1998) : la R&D génère des externalités positives.</p>
                  <p><strong>Marchés de droits.</strong> Création d’un marché (droits à polluer) : Dales (1968) – réduction au moindre coût (ex : Clean Air Act 1990 aux USA ; ETS européen depuis 2005).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">D) Réduire les asymétries d’information</h3>
                  <p><strong>1 - Révélation d’information.</strong> Cas de sélection adverse : l’État peut se porter caution pour rassurer les banques et éviter l’éviction des « bons » emprunteurs.</p>
                  <p><strong>2 - Limiter l’aléa moral.</strong> Incitations (rémunération variable, salaires d’efficience), contrats plus détaillés (Williamson, 1985) – restent incomplets ; renégociations possibles mais coûteuses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>    </div>
          </div>
);
};

export default DefaillancesMarcheModulePage;


