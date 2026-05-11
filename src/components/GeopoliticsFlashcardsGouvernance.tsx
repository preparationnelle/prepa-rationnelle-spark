import React from 'react';
import { GeopoliticsFlashcardsBase, type GeopoliticsCard } from '@/components/geopolitics/GeopoliticsFlashcardsBase';

const data: GeopoliticsCard[] = [
  {
    term: "Gouvernance mondiale",
    definition: "Ensemble des règles qui permettent d'assurer le bon fonctionnement d'un État, d'une institution ou d'une organisation à l'échelle planétaire. Volonté d'ordonner le monde dans un schéma supranational.",
    category: "Définitions"
  },
  {
    term: "Diplomatie de connivence",
    definition: "Selon Bertrand Badie : 'diplomatie de clubs' (G8, G20) risquant d'établir une oligarchie mondiale avec une 'noblesse occidentale' utilisant la démocratie comme critère de distinction.",
    category: "Analyse critique"
  },
  {
    term: "Égoïsmes sacrés",
    definition: "Selon Bertrand Badie : 'égoïsmes sacrés' qui menacent la gouvernance mondiale, dans son ouvrage 'Le retournement du monde'.",
    category: "Analyse critique"
  },
  {
    term: "Conseil de sécurité (ONU)",
    definition: "Organe exécutif de l'ONU avec droit de veto pour les 5 membres permanents. Aucun acteur africain, Brésil non permanent, candidats : Japon, Allemagne, Russie écartée.",
    category: "Limites institutionnelles"
  },
  {
    term: "FMI et Banque mondiale",
    definition: "Institutions de Bretton Woods (1944). Vécues comme instruments de contrainte avec des coûts sociaux (Grèce, troïka, Amérique latine).",
    category: "Limites institutionnelles"
  },
  {
    term: "Guerre d'Irak (1990-1991)",
    definition: "Succès de la gouvernance : coalition internationale contre Saddam Hussein sous l'égide de l'ONU.",
    category: "Réussites"
  },
  {
    term: "OMC",
    definition: "Organisation Mondiale du Commerce dotée de l'ORD (Organisme de Règlement des Différends). Adhésion Chine (2001) et Russie (2012).",
    category: "Réussites"
  },
  {
    term: "OMS et Covax",
    definition: "Dispositif Covax et devoir de solidarité internationale pendant la crise COVID-19.",
    category: "Réussites"
  },
  {
    term: "G7 - Taxe minimale",
    definition: "Accord historique sur la taxation minimale de 15% pour les multinationales.",
    category: "Réussites"
  },
  {
    term: "Bretton Woods (1944)",
    definition: "Accords monétaires et financiers : création de la BIRD (Banque mondiale) et du FMI.",
    category: "Architecture historique"
  },
  {
    term: "GATT puis OMC",
    definition: "Accord Général sur les Tarifs Douaniers et le Commerce (1947) devenu Organisation Mondiale du Commerce (1995).",
    category: "Architecture historique"
  },
  {
    term: "ONU et OTAN",
    definition: "Charte de San Francisco (1945) pour l'ONU, traité de l'Atlantique Nord (1949) pour l'OTAN.",
    category: "Architecture historique"
  },
  {
    term: "Accords environnementaux",
    definition: "Rio (1992), Kyoto (2005), Paris (2015/COP21), Initiative PPTE (1996), Objectifs du Millénaire/Objectifs de Développement Durable (ONU, 2000).",
    category: "Environnement et social"
  },
  {
    term: "Club de Paris",
    definition: "Institution financière informelle chargée de la restructuration de la dette des pays en développement.",
    category: "Architecture historique"
  },
  {
    term: "Multipolarité vs Unipolarité",
    definition: "Évolution du monde de l'unipolarité américaine (1991) vers la multipolarité voire apolarité, complexifiant les rapports de force mondiaux.",
    category: "Contextes géopolitiques"
  },
  {
    term: "Mercosur",
    definition: "Zone de libre-échange régionale en Amérique latine ayant acquis une certaine maturité institutionnelle.",
    category: "Gouvernance régionale"
  },
  {
    term: "Union Européenne",
    definition: "Exemple de gouvernance régionale mature avec des institutions supranationales développées.",
    category: "Gouvernance régionale"
  },
  {
    term: "Paix perpétuelle",
    definition: "Idée philosophique de Kant (XVIIIe siècle) sur l'établissement d'une paix durable entre nations.",
    category: "Origines intellectuelles"
  },
  {
    term: "Société des Nations (SDN)",
    definition: "Première tentative d'organisation internationale (1919), inaboutie en raison de l'absence des États-Unis et de l'échec face à l'agression japonaise en Mandchourie.",
    category: "Origines institutionnelles"
  },
  {
    term: "Kofi Annan",
    definition: "Échec du Secrétaire général de l'ONU dans la réunification de Chypre malgré ses efforts diplomatiques.",
    category: "Limites institutionnelles"
  }
];

export const GeopoliticsFlashcardsGouvernance: React.FC = () => (
  <GeopoliticsFlashcardsBase
    data={data}
    title="Vocabulaire de la gouvernance mondiale"
    subject="Géopolitique - Gouvernance mondiale"
    idOffset={300}
  />
);

export default GeopoliticsFlashcardsGouvernance;
