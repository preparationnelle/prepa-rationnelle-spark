import React from 'react';
import { GeopoliticsFlashcardsBase, type GeopoliticsCard } from '@/components/geopolitics/GeopoliticsFlashcardsBase';

const data: GeopoliticsCard[] = [
  {
    term: "Transition énergétique",
    definition: "Processus de passage d'un système énergétique basé sur les fossiles vers des sources renouvelables et bas carbone, marqué par des incertitudes technologiques, coûts élevés et défis de coordination internationale.",
    category: "Transition énergétique"
  },
  {
    term: "Terres rares",
    definition: "Minerais essentiels aux technologies bas carbone (éoliennes, véhicules électriques, panneaux solaires). L'Union Européenne dépend à plus de 98% des importations chinoises. Découverte majeure en Suède (LKAB, 2023).",
    category: "Matières premières critiques"
  },
  {
    term: "Cuivre stratégique",
    definition: "Métal essentiel pour les renouvelables, représentant 75% des exportations du Panama. Fermeture de la mine de Cobre Panamá (2022) a impacté l'approvisionnement mondial.",
    category: "Matières premières critiques"
  },
  {
    term: "Géothermie au Kenya",
    definition: "Deuxième source d'électricité après l'hydroélectricité. Centrale d'Olkaria (8e mondiale) produit de l'énergie renouvelable via la chaleur terrestre.",
    category: "Énergies renouvelables"
  },
  {
    term: "Nucléaire au Japon",
    definition: "Relance post-Fukushima sous Fumio Kishida pour atteindre la neutralité carbone, malgré l'opposition publique persistante à l'énergie nucléaire.",
    category: "Énergie nucléaire"
  },
  {
    term: "Uranium kazakh",
    definition: "Kazakhstan = 1er producteur mondial (42% en 2019). Pour la France (41% d'électricité nucléaire), sécurisation des approvisionnements avec Orano présent via KATCO.",
    category: "Énergie nucléaire"
  },
  {
    term: "RePowerEU",
    definition: "Plan européen (mai 2022) pour se passer des fossiles russes d'ici 2027 via sobriété énergétique, diversification des sources et développement des renouvelables.",
    category: "Politique énergétique UE"
  },
  {
    term: "Dépendance énergétique russe",
    definition: "Avant la guerre d'Ukraine : 40% des importations de gaz européen. Réduite à 13% en novembre 2022 grâce à la diversification.",
    category: "Politique énergétique UE"
  },
  {
    term: "Next Generation EU",
    definition: "Plan de relance européen de 750 milliards d'euros post-COVID, priorisant climat et numérique pour la transition énergétique.",
    category: "Politique énergétique UE"
  },
  {
    term: "Paquet Fit for 55",
    definition: "Législation européenne visant -55% d'émissions de GES en 2030 vs 1990 et neutralité carbone en 2050.",
    category: "Politique énergétique UE"
  },
  {
    term: "Gazoducs alternatifs",
    definition: "Nouveaux projets pour acheminer hydrocarbures d'Asie centrale vers l'Europe : Turkménistan→Turquie→Europe et Kazakhstan prêt à exporter 20 Mt via la voie transcaspienne.",
    category: "Diversification énergétique"
  },
  {
    term: "Économie de guerre énergétique",
    definition: "Utilisation des ressources énergétiques comme arme économique, comme accusé la Chine par Lynas (Australie) en 2019 pour sa domination sur les terres rares.",
    category: "Géoéconomie énergétique"
  },
  {
    term: "Sobriété énergétique",
    definition: "Réduction volontaire de la consommation d'énergie. En Europe, demande d'électricité diminuée de 19% entre août 2022 et janvier 2023.",
    category: "Gestion de crise"
  },
  {
    term: "Justice climatique",
    definition: "Principe de responsabilité différenciée dans la transition énergétique, reconnaissant que les pays développés ont historiquement émis plus de GES.",
    category: "Transition énergétique"
  },
  {
    term: "Décarbonation",
    definition: "Processus de réduction des émissions de CO2 dans l'économie, nécessitant investissements massifs dans les technologies vertes et la restructuration industrielle.",
    category: "Transition énergétique"
  }
];

export const GeopoliticsFlashcardsEnergies: React.FC = () => (
  <GeopoliticsFlashcardsBase
    data={data}
    title="Vocabulaire de la géopolitique des énergies"
    subject="Géopolitique - Énergies"
    idOffset={200}
  />
);

export default GeopoliticsFlashcardsEnergies;
