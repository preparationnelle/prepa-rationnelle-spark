import React from 'react';
import { GeopoliticsFlashcardsBase, type GeopoliticsCard } from '@/components/geopolitics/GeopoliticsFlashcardsBase';

const data: GeopoliticsCard[] = [
  {
    term: "Migration internationale",
    definition: "Déplacement de populations entre pays, distincte de la migration interne au sein d'un même pays. Environ 280 millions de migrants internationaux en 2022, soit 3,5% de la population mondiale.",
    category: "Définitions"
  },
  {
    term: "Dynamiques push/pull",
    definition: "Facteurs repoussoirs (push : guerres, pauvreté, catastrophes) et facteurs attracteurs (pull : emplois, sécurité, opportunités) qui déterminent les flux migratoires.",
    category: "Mécanismes"
  },
  {
    term: "Crise migratoire de 2015",
    definition: "Arrivée incontrôlée d'environ 1,5 million de migrants du Moyen-Orient et d'Afrique subsaharienne en Europe, révélant l'incapacité des États membres de l'UE à adopter une réponse commune.",
    category: "Événements majeurs"
  },
  {
    term: "Afrique subsaharienne",
    definition: "Zone où les migrations économiques sont nombreuses, avec plus de 80% de flux intra-africains vers des pays comme l'Afrique du Sud, le Nigeria et le Kenya.",
    category: "Zones migratoires"
  },
  {
    term: "Conflits et migrations",
    definition: "Printemps arabe (2011) et guerres civiles (Syrie avec 8 millions de déplacés) génèrent d'importants flux migratoires forcés vers l'Europe et les pays voisins.",
    category: "Causes politiques"
  },
  {
    term: "Amérique latine",
    definition: "Migrations issues de violences (Honduras, Venezuela). Crise au Venezuela (2019) a généré 4 millions de migrants, principalement vers la Colombie.",
    category: "Zones migratoires"
  },
  {
    term: "Mondialisation et migrations",
    definition: "Accroissement des mobilités humaines dû à la désactivation relative des frontières et à l'accélération des échanges économiques mondiaux.",
    category: "Facteurs globaux"
  },
  {
    term: "Chine et migrations",
    definition: "Système Hukou assoupli avec l'ouverture économique, générant plus de 200 millions de 'mingongs' (travailleurs migrants) vers les zones économiques spéciales.",
    category: "Migrations internes"
  },
  {
    term: "Gouvernance migratoire",
    definition: "Ensemble des politiques et institutions régulant les flux migratoires. L'UE et la Turquie ont établi un Pacte (2016) avec financement européen contre le contrôle des migrants.",
    category: "Politiques"
  },
  {
    term: "Populismes et migrations",
    definition: "Montée des mouvements populistes (USA 2016, Brexit, AfD, Italie) souvent liée à la peur de l'immigration et à la surestimation des parts de migrants dans la population.",
    category: "Réactions politiques"
  },
  {
    term: "Effets contrastés des migrations",
    definition: "Opportunités économiques (Erasmus avec 12 millions de participants), démographiques (remplacement en Allemagne), culturelles, mais aussi rejets xénophobes et populistes.",
    category: "Impacts"
  },
  {
    term: "Programme Erasmus",
    definition: "Depuis 1987, plus de 12 millions de participants, budget de 26 milliards d'euros, ayant généré environ 1 million de 'bébés Erasmus' (enfants nés d'unions transnationales).",
    category: "Politiques européennes"
  },
  {
    term: "Diaspora indienne",
    definition: "Environ 30 millions de personnes dans 130 pays, représentant un soft power et un lobbying efficace, avec la communauté indienne aux USA comme plus haut revenu ethnique.",
    category: "Diasporas"
  },
  {
    term: "Pacte de Marrakech",
    definition: "Adopté par 160 pays en 2018, vise des 'migrations sûres, ordonnées et régulières' mais reste non contraignant et renforce seulement l'action de l'UNHCR.",
    category: "Gouvernance internationale"
  },
  {
    term: "Harraga",
    definition: "Terme maghrébin désignant les migrants clandestins traversant la Méditerranée. Entre 2010 et 2020, environ 20 000 morts en Méditerranée.",
    category: "Migrations clandestines"
  },
  {
    term: "Passeports inégaux",
    definition: "Hiérarchie mondiale des passeports : Japon et Singapour offrent accès à 192 pays sans visa, l'Afghanistan seulement à 26 pays, selon le Henley Passport Index 2022.",
    category: "Liberté de circulation"
  },
  {
    term: "Justice climatique",
    definition: "Principe de responsabilité différenciée dans les migrations climatiques, reconnaissant que les pays développés ont historiquement émis plus de GES.",
    category: "Migrations environnementales"
  },
  {
    term: "Banque mondiale",
    definition: "Prévoit 216 millions de migrants climatiques d'ici 2050, avec des effets sur les littoraux (élévation de 20 cm du niveau marin pouvant déplacer 200 millions de personnes).",
    category: "Projections climatiques"
  },
  {
    term: "Démographie du Sahel",
    definition: "Région à forte croissance démographique risquant d'accroître les flux migratoires, avec un 'dividende démographique' conditionné aux capacités d'éducation et d'emploi.",
    category: "Facteurs démographiques"
  },
  {
    term: "Flux migratoires contemporains",
    definition: "Combinaison de facteurs économiques, politiques, environnementaux et démographiques dans un contexte de mondialisation accélérée.",
    category: "Tendances actuelles"
  }
];

export const GeopoliticsFlashcardsMigrations: React.FC = () => (
  <GeopoliticsFlashcardsBase
    data={data}
    title="Vocabulaire des migrations"
    subject="Géopolitique - Migrations"
    idOffset={500}
  />
);

export default GeopoliticsFlashcardsMigrations;
