import React from 'react';
import { GeopoliticsFlashcardsBase, type GeopoliticsCard } from '@/components/geopolitics/GeopoliticsFlashcardsBase';

const data: GeopoliticsCard[] = [
  {
    term: "Hard power",
    definition: "Selon J. Nye : pouvoir politique, puissance militaire, force économique. Attribut classique de la puissance nationale dans les espaces maritimes.",
    category: "Puissance maritime"
  },
  {
    term: "Thalassocratie",
    definition: "Domination maritime, illustrée par la suprématie britannique avec une large flotte militaire et le 'two power standard'.",
    category: "Puissance maritime"
  },
  {
    term: "Two power standard",
    definition: "Doctrine britannique exigeant que la Royal Navy soit supérieure à la somme des deux plus grandes marines étrangères.",
    category: "Puissance maritime"
  },
  {
    term: "Guerre du Pacifique (1879-1884)",
    definition: "Conflit entre Chili et Pérou/Bolivie. Chili vainqueur, Bolivie privée du littoral d'Atacama, devenant un pays enclavé.",
    category: "Conflits historiques"
  },
  {
    term: "Guerres de la morue",
    definition: "Conflits halieutiques entre Islande et Royaume-Uni (1958-1976) pour l'exploitation des ressources de pêche en Atlantique Nord.",
    category: "Conflits halieutiques"
  },
  {
    term: "Bataille de l'Atlantique",
    definition: "Conflit naval majeur de la Seconde Guerre mondiale entre Alliés et forces de l'Axe, impliquant notamment les U-Boat allemands.",
    category: "Conflits mondiaux"
  },
  {
    term: "Bataille du Pacifique",
    definition: "Théâtre majeur de la Seconde Guerre mondiale opposant États-Unis et Japon après l'attaque de Pearl Harbor (1941).",
    category: "Conflits mondiaux"
  },
  {
    term: "Guerre des Malouines (1982)",
    definition: "Conflit armé entre Royaume-Uni et Argentine pour le contrôle des îles Malouines/Falkland dans l'Atlantique Sud.",
    category: "Conflits contemporains"
  },
  {
    term: "Pavillons de complaisance",
    definition: "Immatriculation de navires sous des drapeaux étrangers (Panama, Îles Marshall) avec des législations de 'dumping' pour attirer les armateurs.",
    category: "Mondialisation maritime"
  },
  {
    term: "Transport maritime mondial",
    definition: "Environ 80% du commerce mondial transite par voie maritime, rôle déterminant dans la mondialisation économique.",
    category: "Mondialisation maritime"
  },
  {
    term: "Convention de Montego Bay (1982)",
    definition: "Convention internationale établissant la Zone Économique Exclusive (ZEE) donnant des droits d'exploitation sur 200 milles marins aux États côtiers.",
    category: "Droit maritime"
  },
  {
    term: "Zone Économique Exclusive (ZEE)",
    definition: "Espace maritime de 200 milles à partir des lignes de base côtières où l'État exerce des droits souverains d'exploitation des ressources.",
    category: "Droit maritime"
  },
  {
    term: "Géopolitique de la Méditerranée",
    definition: "Selon Yves Lacoste : la Méditerranée comme 'carrefour des civilisations' et 'enjeu stratégique majeur' dans les relations internationales.",
    category: "Analyse géopolitique"
  },
  {
    term: "Peak oil",
    definition: "Point où les découvertes de pétrole ne compensent plus l'exploitation (Rapport Meadows, 1972). Accélère la compétition pour les ressources maritimes.",
    category: "Ressources énergétiques"
  },
  {
    term: "Militarisation des espaces maritimes",
    definition: "Déploiement croissant de bases militaires (Djibouti, Diego Garcia) et acquisition de porte-avions pour sécuriser routes commerciales et approvisionnements.",
    category: "Sécurité maritime"
  },
  {
    term: "Spratleys et Paracels",
    definition: "Archipels disputés en Mer de Chine méridionale, objets de revendications territoriales chinoises, vietnamiennes et philippines pour leurs hydrocarbures et position stratégique.",
    category: "Conflits territoriaux"
  },
  {
    term: "Pollution maritime",
    definition: "Problématiques environnementales aggravées dans les embouchures (Gange, Yang-Tsé) nécessitant des révisions des politiques publiques environnementales.",
    category: "Enjeux environnementaux"
  },
  {
    term: "Grands canaux maritimes",
    definition: "Canaux de Suez (1869) et Panama (1914) qui transforment la géopolitique en permettant aux pays enclavés de reculer en influence et aux autres d'accéder aux échanges mondiaux.",
    category: "Infrastructures stratégiques"
  },
  {
    term: "Course aux armements maritimes",
    definition: "Acquisition et modernisation de porte-avions (comme le Charles de Gaulle français) pour maintenir la puissance navale face à la compétition internationale.",
    category: "Armements modernes"
  },
  {
    term: "Dynamiques de conflictualité maritime",
    definition: "Deux dynamiques principales : montée des revendications territoriales (Spratleys) et aggravation des problématiques environnementales (pollution).",
    category: "Prospective géopolitique"
  }
];

export const GeopoliticsFlashcardsMaritimesTensions: React.FC = () => (
  <GeopoliticsFlashcardsBase
    data={data}
    title="Tensions et stratégies maritimes"
    subject="Géopolitique - Tensions maritimes"
    idOffset={100}
  />
);

export default GeopoliticsFlashcardsMaritimesTensions;
