import React from 'react';
import { GeopoliticsFlashcardsBase, type GeopoliticsCard } from '@/components/geopolitics/GeopoliticsFlashcardsBase';

const data: GeopoliticsCard[] = [
  {
    term: "Ressources stratégiques",
    definition: "Ressources essentielles au développement économique et à la puissance des États : productions agricoles, minerais (or, argent, étain, zinc), métaux rares (cobalt, lithium, terres rares), ressources énergétiques (charbon, hydrocarbures), eau.",
    category: "Typologie"
  },
  {
    term: "Terres rares",
    definition: "17 éléments chimiques essentiels aux technologies modernes (éoliennes, véhicules électriques, panneaux solaires). La Chine contrôle 60% de la production mondiale et 98% du raffinage.",
    category: "Métaux stratégiques"
  },
  {
    term: "Malédiction des ressources",
    definition: "Paradoxe où les pays riches en ressources naturelles connaissent souvent corruption, conflits armés et instabilité économique due aux rentes pétrolières/gazières.",
    category: "Géopolitique des ressources"
  },
  {
    term: "Rivalités pour les ressources",
    definition: "Conflits à toutes les échelles pour le contrôle des ressources : guerres locales, contrôle de populations, outils de négociation. Les ressources utilisées comme leviers d'indépendance ou instruments de conflit.",
    category: "Conflits et ressources"
  },
  {
    term: "Coopération dans les ressources",
    definition: "Aucun acteur n'étant autosuffisant, les interdépendances économiques favorisent la coopération malgré les tensions. Forums et associations régionales stabilisent marchés et flux.",
    category: "Coopération"
  },
  {
    term: "Répartition inégale des ressources",
    definition: "Les ressources sont inégalement réparties géographiquement. Approche historique : tournant avec les révolutions industrielles et conquêtes coloniales.",
    category: "Caractéristiques"
  },
  {
    term: "Pressions accrues sur les ressources",
    definition: "Besoins en hausse dus à l'industrialisation, émergences et croissance démographique. Défi environnemental (Rapport Meadows, 1972) et risques d'épuisement.",
    category: "Tendances contemporaines"
  },
  {
    term: "Interdépendances économiques",
    definition: "Économies imbriquées nécessitent des coopérations sur les flux et la sécurité d'approvisionnement. Instabilités et conflits perturbent l'approvisionnement et l'exploitation.",
    category: "Économie mondiale"
  },
  {
    term: "3e révolution industrielle",
    definition: "Selon Jeremy Rifkin : transition énergétique rendant stratégiques de nouveaux matériaux, rebattant les hiérarchies géopolitiques mondiales.",
    category: "Transition énergétique"
  },
  {
    term: "Guerre des métaux rares",
    definition: "Selon Guillaume Pitron (2018) : prépondérance chinoise sur les gisements et le raffinage crée des tensions géopolitiques accrues pour l'appropriation des ressources.",
    category: "Géoéconomie"
  },
  {
    term: "Transition énergétique verte",
    definition: "La décarbonation exige extraction plus intense de ressources, avec impacts environnementaux potentiellement supérieurs aux énergies fossiles.",
    category: "Enjeux environnementaux"
  },
  {
    term: "Climat et ressources",
    definition: "Changements climatiques, épuisement et démographie renforcent simultanément les risques de conflits et les besoins de coopération internationale.",
    category: "Facteurs globaux"
  },
  {
    term: "Bassin permien",
    definition: "Gisement majeur de schistes aux États-Unis (Texas/Nouveau-Mexique). Collusions politico-industrielles, remodelage économique et environnemental (fracturation hydraulique, risques sismiques, pollution).",
    category: "Études de cas"
  },
  {
    term: "Orpaillage en Guyane",
    definition: "Exploitation illégale représentant 9 000 orpailleurs. Déboisement, pollutions (mercure), trafics clandestins. Production légale en baisse malgré protections environnementales.",
    category: "Études de cas"
  },
  {
    term: "Front pionnier égyptien",
    definition: "Projet agricole pour maîtriser foncier et eau face à la croissance démographique (104 M habitants en 2021). Villages ex nihilo, irrigation de précision, objectif de diversification agricole.",
    category: "Études de cas"
  },
  {
    term: "Syndrome hollandais",
    definition: "Maladie économique où la rente des ressources naturelles (pétrole, gaz) affaiblit les autres secteurs économiques et crée des dépendances structurelles (Venezuela, Angola).",
    category: "Impacts économiques"
  },
  {
    term: "Ressources et développement",
    definition: "Les ressources peuvent être des freins au développement en raison de la volatilité des prix, de la corruption et de la dépendance aux marchés internationaux.",
    category: "Économie du développement"
  },
  {
    term: "Sécurité énergétique",
    definition: "Capacité d'un État à assurer son approvisionnement énergétique de manière stable et prévisible, face aux risques géopolitiques et aux fluctuations des marchés.",
    category: "Stratégies nationales"
  }
];

export const GeopoliticsFlashcardsRessources: React.FC = () => (
  <GeopoliticsFlashcardsBase
    data={data}
    title="Vocabulaire des ressources stratégiques"
    subject="Géopolitique - Ressources stratégiques"
    idOffset={700}
  />
);

export default GeopoliticsFlashcardsRessources;
