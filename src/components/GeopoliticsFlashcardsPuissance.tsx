import React from 'react';
import { GeopoliticsFlashcardsBase, type GeopoliticsCard } from '@/components/geopolitics/GeopoliticsFlashcardsBase';

const data: GeopoliticsCard[] = [
  {
    term: "Puissance",
    definition: "Capacité d'action des acteurs sur la scène internationale, entendue comme le moyen d'imposer sa volonté à un autre acteur (Serge Sur, 1995).",
    category: "Définitions"
  },
  {
    term: "Impuissance de la puissance",
    definition: "Thèse de Bertrand Badie (2004) : maîtriser tous les attributs de puissance n'exclut pas l'échec (exemple : USA en Afghanistan).",
    category: "Limites"
  },
  {
    term: "Puissance relative",
    definition: "Se mesure à l'aune des autres acteurs. France et GB plus riches et mieux équipés qu'au XIXe siècle, mais poids relatif moindre.",
    category: "Caractéristiques"
  },
  {
    term: "Puissance évolutive",
    definition: "Aucune suprématie n'est pérenne. Successions historiques : Pays-Bas → Espagne → France/GB → USA → Chine ?",
    category: "Caractéristiques"
  },
  {
    term: "Hard power",
    definition: "Puissance militaire et économique (Joseph Nye, 1990) permettant de contraindre directement un acteur.",
    category: "Types de puissance"
  },
  {
    term: "Soft power",
    definition: "Puissance d'attraction via valeurs, universités, culture (Joseph Nye, 1990) permettant d'influencer indirectement.",
    category: "Types de puissance"
  },
  {
    term: "Smart power",
    definition: "Articulation intelligente du hard et soft power (Suzanne Nossel).",
    category: "Types de puissance"
  },
  {
    term: "Sharp power",
    definition: "Usage trompeur de l'information à des fins hostiles (Christopher Walker et Jessica Ludwig).",
    category: "Types de puissance"
  },
  {
    term: "Critères militaires",
    definition: "Effectifs moins décisifs que qualité/sophistication technologique (IA), C2 efficace et interopérabilité. Dilemme de sécurité : plus de sécurité nationale = insécurité globale accrue.",
    category: "Critères"
  },
  {
    term: "Puissance démographique",
    definition: "Population importante = marché intérieur et poids international (Chine). Double tranchant : vieillissement (politique de l'enfant unique), revanche des berceaux (Canada FR vs colons anglais).",
    category: "Critères"
  },
  {
    term: "Puissance territoriale",
    definition: "Maîtrise du territoire et pôles de compétitivité (facteur K). Russie/Sibérie comme avantage géographique.",
    category: "Critères"
  },
  {
    term: "Ressources naturelles",
    definition: "Pétrole et rente du Golfe (OPEP) vs pays riches sans ressources (Japon, Corée du Sud). Risque 'syndrome hollandais' (Venezuela, Angola).",
    category: "Critères"
  },
  {
    term: "Puissance économique",
    definition: "Critère majeur avec temporalité : puissance éco → stratégique (et inversement). Chine (montée), Singapour (éco sans poids démographique), Russie (limites).",
    category: "Critères"
  },
  {
    term: "Maîtrise technologique",
    definition: "Industries d'avenir = knowledge (facteur K d'Alvin Toffler). NTIC → inégalités (fracture numérique). USA (GAFA), Chine (BATX, big data).",
    category: "Critères"
  },
  {
    term: "Éducation et formation",
    definition: "Brain drain vers les USA comme source de puissance et d'influence.",
    category: "Critères"
  },
  {
    term: "Cohésion nationale",
    definition: "Ciment de la résilience et de la projection internationale.",
    category: "Critères"
  },
  {
    term: "Extraterritorialité du droit",
    definition: "Extension du droit américain comme arme de guerre économique (Ali Laïdi, 2021).",
    category: "Critères"
  },
  {
    term: "Contrôle des espaces",
    definition: "Maîtrise des espaces maritimes/terrestres : 'qui commande la mer commande le commerce' (Raleigh), Heartland (Mackinder), Rimland (Spykman).",
    category: "Critères"
  },
  {
    term: "Hyperpuissance",
    definition: "Domination exclusive des États-Unis (1991-2001) selon Hubert Védrine.",
    category: "Concepts connexes"
  },
  {
    term: "Hégémonie",
    definition: "Domination non consentie (vs leadership consenti).",
    category: "Concepts connexes"
  },
  {
    term: "Finlandisation",
    definition: "Influence d'une grande puissance sur un voisin sans occupation militaire directe.",
    category: "Concepts connexes"
  },
  {
    term: "Complexe militaro-industriel",
    definition: "Interdépendance entre forces armées, industries d'armement et décideurs politiques aux États-Unis.",
    category: "Aspects institutionnels"
  },
  {
    term: "Souveraineté énergétique",
    definition: "Indépendance dans l'approvisionnement énergétique vs dépendance stratégique.",
    category: "Aspects contemporains"
  }
];

export const GeopoliticsFlashcardsPuissance: React.FC = () => (
  <GeopoliticsFlashcardsBase
    data={data}
    title="Vocabulaire de la puissance"
    subject="Géopolitique - La puissance"
    idOffset={600}
  />
);

export default GeopoliticsFlashcardsPuissance;
