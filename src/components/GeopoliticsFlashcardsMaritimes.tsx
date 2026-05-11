import React from 'react';
import { GeopoliticsFlashcardsBase, type GeopoliticsCard } from '@/components/geopolitics/GeopoliticsFlashcardsBase';

const data: GeopoliticsCard[] = [
  {
    term: "Territorialisation des espaces maritimes",
    definition: "Processus d'appropriation croissante des espaces maritimes par les États, conduisant à multiplier les frontières maritimes et transformant ces espaces en territoires propices aux rivalités.",
    category: "Concept fondamental"
  },
  {
    term: "Mare Liberum",
    definition: "Doctrine juridique défendue par Hugo Grotius en 1609 affirmant que la mer est un espace de liberté ne pouvant être confisqué par quiconque.",
    category: "Conceptions juridiques"
  },
  {
    term: "Mare Clausum",
    definition: "Doctrine juridique défendue par John Selden en 1635 affirmant la souveraineté britannique sur les mers environnantes.",
    category: "Conceptions juridiques"
  },
  {
    term: "Plateau continental",
    definition: "Notion juridique originaire d'une déclaration du président Truman en 1945, codifiée par la convention de Genève de 1958, permettant l'exploitation des ressources du fond marin.",
    category: "Droit de la mer"
  },
  {
    term: "Convention de Montego Bay (1982)",
    definition: "Convention signée par 166 États introduisant le principe de Zone Économique Exclusive (ZEE) à 200 milles des lignes de base.",
    category: "Droit de la mer"
  },
  {
    term: "Zone Économique Exclusive (ZEE)",
    definition: "Zone maritime s'étendant jusqu'à 200 milles des lignes de base où l'État côtier exerce des droits souverains sur l'exploitation des ressources.",
    category: "Droit de la mer"
  },
  {
    term: "Maritimité",
    definition: "Façons de s'approprier la mer (relations économiques, culturelles entre les sociétés et la mer). Nouvelle maritimité fin XXe siècle : sports nautiques, tourisme maritime, reconquête urbaine des espaces portuaires.",
    category: "Économie maritime"
  },
  {
    term: "Maritimisation",
    definition: "Processus d'accroissement des échanges internationaux par voie maritime qui s'accélère depuis les années 1970, liée à la littoralisation et à la mondialisation.",
    category: "Économie maritime"
  },
  {
    term: "Ressources halieutiques",
    definition: "Ressources de pêche : 2 100 catégories d'espèces exploitées commercialement, assurant 10% des exportations agricoles mondiales et générant 200 millions d'emplois.",
    category: "Ressources maritimes"
  },
  {
    term: "Ressources énergétiques marines",
    definition: "20% des réserves de pétrole et 25% des réserves de gaz se trouvent en mer. L'offshore profond représenterait 7% des réserves mondiales selon Total.",
    category: "Ressources maritimes"
  },
  {
    term: "Énergies marines renouvelables",
    definition: "Potentiel de 20 à 40 000 TWh/an (1 à 2 fois la consommation annuelle mondiale d'électricité) : éoliennes offshore, hydroliennes.",
    category: "Ressources maritimes"
  },
  {
    term: "OMI (Organisation Maritime Internationale)",
    definition: "Organisation regroupant 160 pays chargée de la régulation du commerce maritime dans un cadre libéral.",
    category: "Gouvernance"
  },
  {
    term: "Thalassocratie",
    definition: "Domination maritime, illustrée par la suprématie britannique renforcée par le 'two-power standard' en 1889.",
    category: "Puissance navale"
  },
  {
    term: "Two-power standard",
    definition: "Doctrine britannique de 1889 exigeant que la Royal Navy soit supérieure à la somme des deux plus grandes marines étrangères.",
    category: "Puissance navale"
  },
  {
    term: "Seapower vs Landpower",
    definition: "Théorie de Mackinder suggérant un possible déclin du pouvoir maritime face aux puissances terrestres (chemins de fer), mais domination de l'US Navy après 1945.",
    category: "Puissance navale"
  },
  {
    term: "Mahan (doctrine)",
    definition: "Théoricien américain affirmant la nécessité de la suprématie maritime pour les États-Unis.",
    category: "Puissance navale"
  },
  {
    term: "Transport maritime",
    definition: "Circulation marchande : 2,5 milliards de tonnes en 1970 → 8,4 milliards de tonnes en 2012. Flottes de commerce : 49 000 navires pour 1,6 milliard de tonnes.",
    category: "Économie maritime"
  },
  {
    term: "Équivalent Vingt Pieds (EVP)",
    definition: "Unité de mesure des conteneurs inventés par McLean en 1956, permettant de réduire les temps de rupture de charge.",
    category: "Transport maritime"
  },
  {
    term: "Eco-Ships",
    definition: "Navires de nouvelle génération plus sobres écologiquement. Exemple : Classe Triple E de Maersk (-37% de fioul lourd et -50% de GES).",
    category: "Environnement"
  },
  {
    term: "Porte-avions",
    definition: "Atout majeur des grandes puissances maritimes. US Navy : 11 porte-avions. Chine : Liaoning (2017), Shandong, Fujian (2022).",
    category: "Flottes militaires"
  },
  {
    term: "Sous-marins nucléaires",
    definition: "SNA (attaque) : USA 56, Russie 17, Chine 8, Royaume-Uni 6, France 6. SNLE (dissuasion) : USA 14, Russie 10, Chine 5, Royaume-Uni 4, France 4, Inde 1.",
    category: "Flottes militaires"
  },
  {
    term: "Frontières chaudes",
    definition: "Selon Michel Foucher, délimitations maritimes pouvant former des zones de conflit. Georges Labrecque recense 450 zones de chevauchement.",
    category: "Conflits"
  },
  {
    term: "Accord ONU 2023",
    definition: "Accord historique du 4 mars 2023 sur la conservation et l'utilisation durable de la biodiversité marine des zones ne relevant pas de la juridiction nationale (haute mer).",
    category: "Gouvernance"
  },
  {
    term: "Résolution ONU 2017",
    definition: "Résolution visant à combler le vide juridique de Montego Bay concernant la haute mer, objectif de préserver 45% de la surface du globe comme res nullius.",
    category: "Gouvernance"
  }
];

export const GeopoliticsFlashcardsMaritimes: React.FC = () => (
  <GeopoliticsFlashcardsBase
    data={data}
    title="Vocabulaire des espaces maritimes"
    subject="Géopolitique - Espaces maritimes"
    idOffset={1}
  />
);

export default GeopoliticsFlashcardsMaritimes;
