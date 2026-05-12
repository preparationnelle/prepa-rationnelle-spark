import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const SoutenabiliteCroissanceModulePage = () => {
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
              <span className="carnet-eyebrow text-[11px]">Module – Soutenabilité de la croissance</span>
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
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">La soutenabilité de la croissance et du développement – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 2.3 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#degradations" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">1) Dégradations</a>
                <a href="#soutenabilite" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">2) Soutenabilité</a>
                <a href="#transition" className="px-3 py-1 rounded-full bg-carnet-paper-2/10 text-white border border-white/20 hover:bg-carnet-paper-2/20 transition">3) Transition & gouvernance</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* 1) Dégradations */}
            <div id="degradations" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">1) Les activités humaines dégradent l’environnement</h2>
              <div className="space-y-5 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Croissance et épuisement des ressources naturelles</h3>
                  <p><strong>1 - Limites naturelles.</strong> Malthus (1798), Ricardo (1817). Les gains de productivité agricole ont invalidé ces prédictions, mais les limites réapparaissent avec Meadows (1972), Halte à la croissance : « la planète n’est pas assez vaste… ». En 2020, Global Footprint Network : il faudrait 1,6 planète pour satisfaire nos besoins.</p>
                  <p><strong>2 - Origine économique.</strong> Ressources non privées, externalités négatives. Samuelson (1954) : biens communs (non‑excluables, rivaux) → surexploitation (Hardin, 1968). Méditerranée : 93 % des stocks de poissons en surpêche. Coût privé &lt; coût social.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Pollutions et réchauffement climatique</h3>
                  <p><strong>1 - Constat.</strong> GIEC : +0,6 °C (monde) et +1 °C (France) depuis la RI ; +2,5 °C à +5 °C d’ici 2100 selon les scénarios.</p>
                  <p><strong>2 - Éclairages économiques.</strong> Rapport Stern (2006) : les dommages attendus excèdent le coût de l’action. FMI (2019) : sans politiques d’atténuation sérieuses, PIB mondial −7,22 % en 2100. Empreinte inégale : les US = 17 % des émissions pour 4 % de la population mondiale.</p>
                </div>
              </div>
            </div>

            {/* 2) Soutenabilité */}
            <div id="soutenabilite" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">2) Soutenabilité de la croissance et développement</h2>
              <div className="space-y-5 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Le développement durable renouvelle l’analyse</h3>
                  <p><strong>1 - Concept.</strong> Années 1980 : remise en cause de la « religion du développement ». Latouche (1986) critique le mimétisme des pays en développement.</p>
                  <p><strong>2 - Définition (Brundtland, 1987).</strong> « Répondre aux besoins présents sans compromettre la capacité des générations futures » ; trois piliers : économique (croissance durable, soutien aux pays pauvres), social (réduction pauvreté/exclusion), environnemental (préservation ressources/biodiversité).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Deux approches : soutenabilité faible vs forte</h3>
                  <p><strong>1 - Cadre général.</strong> Étude des stocks et de la substituabilité des capitaux. Solow (1993) : la croissance est soutenable si elle ne réduit pas de façon définitive le stock de richesse transmis ; intégrer l’environnement au capital total et substituer quand c’est possible (ex : e‑fuels). Indicateurs : IDHP (PNUD, 2020).</p>
                  <p><strong>2 - Soutenabilité faible.</strong> Hartwick (1977) : investir les rentes des ressources épuisables dans le capital technique (fonds souverains, ex : Abu Dhabi). Raréfaction → hausse des prix → substitution (courbe de Kuznets environnementale).</p>
                  <p><strong>3 - Soutenabilité forte.</strong> Non‑substituabilité du capital naturel (irréversibilités) ; nécessité de transformer production/consommation. Décroissance : Latouche (2019) qualifie le « développement durable » d’oxymore ; prône la décroissance.</p>
                </div>
              </div>
            </div>

            {/* 3) Transition & gouvernance */}
            <div id="transition" className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ring-1 ring-blue-100">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-3">3) Les conditions d’un développement durable</h2>
              <div className="space-y-5 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] leading-relaxed">
                <div>
                  <h3 className="font-semibold text-carnet-ink">A) Politiques contraignantes et incitatives</h3>
                  <p><strong>1 - Réglementation.</strong> Protocole de Montréal (1987) : interdiction progressive des gaz fluorés → reconstitution de la couche d’ozone.</p>
                  <p><strong>2 - Fiscalité écologique.</strong> Principe pollueur‑payeur (Pigou, 1920) ; taxes/subventions. France (INSEE, 2018) : 56 Md€ de recettes environnementales (surtout énergie). Stiglitz & Stern : besoin d’une taxe carbone robuste (corrélation négative avec émissions).</p>
                  <p><strong>3 - Quotas et marchés.</strong> Droits à polluer (Coase, 1960). L’UE fixe des plafonds (ex : 1,5 Md t CO2 en 2021). Apprentissage : crise 2005–2013 (prix en chute → sélection adverse) → réformes de marché.</p>
                  <p><strong>4 - Nudges & information.</strong> Thaler & Sunstein (2008) : micro‑incitations et information (ex : affichage GES par opérateurs télécoms). Éducation à l’environnement (éco‑délégués).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-carnet-ink">B) Gouvernance et financement</h3>
                  <p><strong>1 - Biens communs et droits de propriété.</strong> Ostrom (1990) : solutions communautaires (ex : réseau d’eau en Oman géré localement) entre marché et État.</p>
                  <p><strong>2 - Gouvernance mondiale.</strong> Protocole de Kyoto (1997) ; Accord de Paris (COP21, 2015) : maintenir le réchauffement « bien en‑dessous de 2 °C » et viser la neutralité carbone ; responsabilités différenciées. ONU (2015) : 17 ODD.</p>
                </div>
              </div>
            </div>
          </div>
        </div>    </div>
          </div>
);
};

export default SoutenabiliteCroissanceModulePage;


