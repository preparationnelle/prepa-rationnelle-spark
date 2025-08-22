import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, Calendar, Clock, MapPin, Users, Coins, Shield } from 'lucide-react';

const ChronologieEuropePage = () => {
  const events = [
    {
      year: "1648",
      title: "Traités de Westphalie",
      description: "Redessinent la carte de l'Europe et ses frontières",
      category: "Politique",
      importance: "high"
    },
    {
      year: "1885",
      title: "Congrès de Berlin",
      description: "Organise le partage de l'Afrique noire entre les puissances européennes. Il aboutit principalement à édicter les règles officielles de colonisation par les puissances européennes.",
      category: "Colonial",
      importance: "medium"
    },
    {
      year: "1923",
      title: "Mouvement paneuropéen",
      description: "Fondé par le comte autrichien Coudenhove-Kalergi",
      category: "Idéologique",
      importance: "medium"
    },
    {
      year: "1929",
      title: "Projet Briand d'union fédérale",
      description: "Propose un projet d'« États-Unis d'Europe »",
      category: "Idéologique",
      importance: "medium"
    },
    {
      year: "1948",
      title: "Congrès de La Haye",
      description: "Pose les fondements du fédéralisme européen. Pose les bases d'une union européenne et appelle à la réunion des grandes puissances de l'Europe. Débouche sur la déclaration Schuman.",
      category: "Politique",
      importance: "high"
    },
    {
      year: "1948",
      title: "Création de l'OECE",
      description: "Organisation européenne de coopération économique pour répartir l'aide américaine du Plan Marshall de la reconstruction. Favorise l'entrée dans le libre-échange et le renforcement de la coopération européenne.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "1949",
      title: "Création du Conseil de l'Europe",
      description: "Regroupe 47 États démocratiques d'Europe et siège à Strasbourg. Son objectif est de promouvoir la démocratie et de protéger les droits de l'homme en Europe.",
      category: "Politique",
      importance: "high"
    },
    {
      year: "1949",
      title: "Création de l'OTAN",
      description: "Création d'une organisation militaire intégrée permanente en 1950 avec le déclenchement de la guerre de Corée, qui constitue encore actuellement la marque distinctive de l'OTAN. En 2017, budget militaire : 1,29 milliard d'euros, budget civil : 234 millions d'euros.",
      category: "Militaire",
      importance: "high"
    },
    {
      year: "1949",
      title: "Création du CAEM",
      description: "Conseil d'assistance économique mutuelle (Comecon en anglais) : réponse soviétique à la création de l'OECE (URSS, Bulgarie, Pologne, RDA, Tchécoslovaquie, + Cuba, Mongolie, Viêt Nam), destiné à stimuler les échanges au sein du bloc soviétique (favorise la dépendance à l'URSS). Chaque pays de l'Est doit se spécialiser dans une production particulière, la Roumanie dans le pétrole, la Pologne dans le charbon, la Hongrie dans les transports…",
      category: "Économique",
      importance: "high"
    },
    {
      year: "1950",
      title: "Déclaration Schuman",
      description: "Relative à l'institution d'une Communauté européenne du charbon et de l'acier (CECA)",
      category: "Économique",
      importance: "high"
    },
    {
      year: "1951",
      title: "Accords de Paris - CECA",
      description: "Les accords de Paris instaurent la CECA, Communauté Européenne du Charbon et de l'Acier (France, Allemagne, Italie, Benelux) sous la présidence de Jean Monnet",
      category: "Économique",
      importance: "high"
    },
    {
      year: "1954",
      title: "Rejet de la CED",
      description: "Rejet par le Parlement français du traité instituant une Communauté européenne de défense (CED) issu du Plan Pleven",
      category: "Militaire",
      importance: "medium"
    },
    {
      year: "1955",
      title: "Conférence de Messine",
      description: "Paul-Henri Spaak, père de l'Europe et socialiste belge, propose la mise en place d'une communauté économique fondée non seulement sur le libre-échange mais également sur la coopération et une politique commune. Début du processus de création de la CEE.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "1955",
      title: "Création de la Bundeswehr",
      description: "L'Allemagne crée la Bundeswehr",
      category: "Militaire",
      importance: "medium"
    },
    {
      year: "1955",
      title: "Pacte de Varsovie",
      description: "Création du Pacte de Varsovie, traité d'assistance mutuelle entre l'URSS, la République démocratique allemande, la Pologne, la Hongrie, la Tchécoslovaquie, la Roumanie, la Bulgarie et l'Albanie.",
      category: "Militaire",
      importance: "high"
    },
    {
      year: "1955",
      title: "L'Allemagne rejoint l'OTAN",
      description: "L'Allemagne (la RFA) rejoint l'OTAN",
      category: "Militaire",
      importance: "high"
    },
    {
      year: "1957",
      title: "Traités de Rome",
      description: "Signature des Traités de Rome créant la Communauté économique européenne (CEE) et la Communauté européenne de l'énergie atomique (Euratom). Mise en place d'une zone de libre-échange, d'une union douanière et d'un Tarif Extérieur Commun. Création du Conseil des ministres, de la Commission, du Parlement Européen, de la Cour de Justice.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "1958",
      title: "Fonds social européen",
      description: "Création du Fonds social européen (FSE) qui vise à lutter contre le chômage naissant en améliorant la qualification de la main d'œuvre (aides à des programmes de formation) et à stimuler l'esprit d'entreprise (en facilitant les liens PMI-PME).",
      category: "Social",
      importance: "medium"
    },
    {
      year: "1958",
      title: "Conférence de Stresa",
      description: "Met en place les modalités d'instauration de la PAC, et du FEOGA (Fonds européen d'orientation et de garantie agricole).",
      category: "Économique",
      importance: "medium"
    },
    {
      year: "1962",
      title: "Création de la PAC",
      description: "Création de la PAC, Politique Agricole Commune et du FEOGA. Garantie des prix pour les produits de base, subventions aux exportations, développement des productions.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "1963",
      title: "Accords de Yaoundé",
      description: "La première convention qui, valable pour cinq ans, confirme l'association Europe-Afrique sur la base d'une liberté des échanges commerciaux et d'une aide financière des Six.",
      category: "International",
      importance: "medium"
    },
    {
      year: "1963",
      title: "Traité de l'Élysée",
      description: "Prévoit des réunions régulières entre les chefs d'État français et allemand, et la création de l'OFAJ, l'office Franco-Allemand pour la Jeunesse. C'est la naissance véritable du couple franco-allemand.",
      category: "Politique",
      importance: "high"
    },
    {
      year: "1965",
      title: "Crise de la « chaise vide »",
      description: "Blocage mené par le gouvernement De Gaulle qui refuse le renforcement du FEOGA et la modification du principe d'unanimité dans la prise de décision. Il suspend la France dans la participation de la CEE, 1er blocage structurel.",
      category: "Politique",
      importance: "high"
    },
    {
      year: "1966",
      title: "Compromis de Luxembourg",
      description: "La France impose la règle de l'unanimité (jusqu'en 1986) : toute décision doit être votée par l'ensemble des pays membres. Déblocage de la CEE.",
      category: "Politique",
      importance: "high"
    },
    {
      year: "1968",
      title: "Union douanière",
      description: "L'union douanière est mise en place entre les six pays de la CEE : le libre-échange est acté.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "1969",
      title: "Conférence de La Haye",
      description: "Proclame l'achèvement du marché commun, dans le domaine de la PAC en particulier et des conditions à l'élargissement prochain : les nouveaux pays devront accepter en bloc les accords et traités de la CEE.",
      category: "Économique",
      importance: "medium"
    },
    {
      year: "1972",
      title: "Serpent Monétaire européen",
      description: "Les accords de Bâle mettent en place le Serpent Monétaire européen en réponse à la fin de Bretton Woods. Oscillation des monnaies dans un tunnel de 1,125%.",
      category: "Monétaire",
      importance: "medium"
    },
    {
      year: "1973",
      title: "Premier élargissement",
      description: "Premier élargissement au Danemark, à l'Irlande et au Royaume-Uni.",
      category: "Élargissement",
      importance: "high"
    },
    {
      year: "1973",
      title: "Création de l'OSCE",
      description: "Création de l'OSCE, l'Organisation pour la sécurité et la coopération en Europe pour garantir la paix en Europe.",
      category: "Sécurité",
      importance: "medium"
    },
    {
      year: "1974",
      title: "Sommet de Paris",
      description: "Créant le Conseil Européen et prévoyant l'élection du Parlement européen au suffrage universel direct.",
      category: "Institutionnel",
      importance: "high"
    },
    {
      year: "1974",
      title: "Révolution des Œillets",
      description: "Révolution des Œillets au Portugal contre la dictature imposée par Salazar 48 ans plus tôt.",
      category: "Politique",
      importance: "medium"
    },
    {
      year: "1975",
      title: "Mort de Franco",
      description: "Mort de Franco, arrivée de Juan Carlos, avènement de la démocratie en Espagne.",
      category: "Politique",
      importance: "medium"
    },
    {
      year: "1975",
      title: "Convention de Lomé I",
      description: "Accords ACP entre la CEE et 46 pays d'Afrique, Caraïbe et Pacifique. Mise en place du STABEX, le système de stabilisation réparti par le Fonds européen de développement (le FED) qui compense la perte des recettes à l'exportation subie par tous les pays ACP. 1979 : Lomé II met en place le SYSMIN, qui couvre huit produits miniers et intervient si la baisse des cours menace l'outil de production.",
      category: "International",
      importance: "medium"
    },
    {
      year: "1975",
      title: "Instauration du FEDER",
      description: "Fonds européen de développement économique et régional afin de financer la modernisation et la reconversion des zones défavorisées. Il vient compléter le Fonds social européen.",
      category: "Économique",
      importance: "medium"
    },
    {
      year: "1979",
      title: "Crise des Euromissiles",
      description: "L'OTAN prévoit la modernisation de ses forces nucléaires, avec le déploiement en Europe de fusées Pershing-2 et de missiles de croisière, découplage stratégique. Mitterrand : « Je suis moi aussi contre les euromissiles, seulement je constate que les pacifistes sont à l'Ouest et les euromissiles à l'Est. ». La crise s'apaise en 1987 avec le traité de Washington.",
      category: "Militaire",
      importance: "high"
    },
    {
      year: "1979",
      title: "Système monétaire européen",
      description: "Création du Système monétaire européen (SME) à la suite du congrès de Brême de 1978 qui coordonne la valeur des différentes monnaies de la CEE autour de l'ECU (European Currency Unit), les devises nationales peuvent fluctuer dans des marges très étroites de 2,25%. Mais remis en cause par les mésententes franco-allemandes et le choc pétrolier. Il n'est stabilisé qu'en 1986 après 11 réajustements.",
      category: "Monétaire",
      importance: "high"
    },
    {
      year: "1979",
      title: "Première élection du Parlement européen",
      description: "Première élection du Parlement européen, la française Simone Veil en est la présidente.",
      category: "Institutionnel",
      importance: "high"
    },
    {
      year: "1981",
      title: "Entrée de la Grèce",
      description: "Entrée de la Grèce dans la CEE.",
      category: "Élargissement",
      importance: "medium"
    },
    {
      year: "1984",
      title: "Sommet de Fontainebleau",
      description: "Réforme la PAC avec un système de répartition par quotas.",
      category: "Économique",
      importance: "medium"
    },
    {
      year: "1985",
      title: "Accords de Schengen",
      description: "Signature des accords de Schengen, de libre-circulation des personnes dans ce qui deviendra l'UE, effective en 1995.",
      category: "Circulation",
      importance: "high"
    },
    {
      year: "1986",
      title: "Acte unique européen",
      description: "Signature de l'Acte unique européen qui vise à la réalisation véritable du Marché intérieur (qui sera mis en place en 93), une réforme des instances de la CEE (le vote à la majorité qualifiée devient la règle au Conseil des ministres).",
      category: "Institutionnel",
      importance: "high"
    },
    {
      year: "1986",
      title: "Élargissement ibérique",
      description: "Entrée du Portugal et de l'Espagne dans la CEE.",
      category: "Élargissement",
      importance: "medium"
    },
    {
      year: "1989",
      title: "Chute du mur de Berlin",
      description: "Chute du mur de Berlin (9 novembre).",
      category: "Politique",
      importance: "high"
    },
    {
      year: "1990",
      title: "Création de la BERD",
      description: "Qui aide financièrement les PECO dans leur transition vers l'économie de marché.",
      category: "Économique",
      importance: "medium"
    },
    {
      year: "1990",
      title: "Fragmentation de la Yougoslavie",
      description: "Mort de Tito, fragmentation de la Yougoslavie. Début de la guerre des Balkans.",
      category: "Conflit",
      importance: "high"
    },
    {
      year: "1991",
      title: "Chute de l'URSS",
      description: "Chute de l'URSS, fin de la guerre froide.",
      category: "Géopolitique",
      importance: "high"
    },
    {
      year: "1991",
      title: "Guerre des Balkans",
      description: "Affrontements ethniques dans les Balkans, massacres de populations civiles, purification ethnique.",
      category: "Conflit",
      importance: "high"
    },
    {
      year: "1992",
      title: "Traité de Maastricht",
      description: "Signature du traité de Maastricht : vers l'Union économique et monétaire : piliers sur la Politique étrangère et de sécurité commune (PESC), sur la coopération en matière de police, de justice, lutte contre l'immigration clandestine, politique commune d'asile ; sur la mise en place d'un Union économique et monétaire (UEM).",
      category: "Institutionnel",
      importance: "high"
    },
    {
      year: "1993",
      title: "Naissance de l'Union européenne",
      description: "Naissance de l'Union européenne, création du marché unique.",
      category: "Institutionnel",
      importance: "high"
    },
    {
      year: "1993",
      title: "Exception culturelle européenne",
      description: "Combat pour l'exception culturelle européenne dans le cadre de l'Uruguay Round.",
      category: "Culturel",
      importance: "medium"
    },
    {
      year: "1993",
      title: "Sommet de Copenhague",
      description: "Création d'une agence européenne pour l'environnement, aide à l'intégration des pays de l'Est.",
      category: "Environnement",
      importance: "medium"
    },
    {
      year: "1995",
      title: "Élargissement nordique",
      description: "Entrée de l'Autriche, de la Finlande et de la Suède dans l'UE. Les accords de Schengen entrent en vigueur.",
      category: "Élargissement",
      importance: "medium"
    },
    {
      year: "1995",
      title: "Accords de Dayton",
      description: "Accords de Dayton sous l'égide des US pour mettre fin à la crise des Balkans.",
      category: "Conflit",
      importance: "medium"
    },
    {
      year: "1995",
      title: "Partenariat euro-méditerranéen",
      description: "Signature du Partenariat euro-méditerranéen (Euromed) mis en place sous le nom de Processus de Barcelone, effectif en 2005.",
      category: "International",
      importance: "medium"
    },
    {
      year: "1997",
      title: "Traité d'Amsterdam",
      description: "Signature du traité d'Amsterdam pour une Europe « sociale », et pour l'amélioration du fonctionnement des institutions européennes.",
      category: "Institutionnel",
      importance: "medium"
    },
    {
      year: "1997",
      title: "Dévolution britannique",
      description: "La « Dévolution » britannique donne à l'Écosse, à l'Irlande du Nord et au Pays de Galles un parlement élu et un exécutif régional.",
      category: "Politique",
      importance: "medium"
    },
    {
      year: "1998-1999",
      title: "Guerre du Kosovo",
      description: "Guerre du Kosovo opposant l'armée yougoslave à l'Armée de libération du Kosovo et l'Organisation du traité de l'Atlantique nord (OTAN).",
      category: "Conflit",
      importance: "medium"
    },
    {
      year: "1998",
      title: "Sommet de Saint-Malo",
      description: "Entre la France et la Grande Bretagne, décrit comme le point de départ de la Politique Européenne de sécurité et de défense (PESD).",
      category: "Militaire",
      importance: "medium"
    },
    {
      year: "1998",
      title: "Création de la BCE",
      description: "Pouvoir supranational, banque centrale des dix-neuf pays de l'Union européenne qui ont adopté l'euro. A pour principale mission de maintenir la stabilité des prix dans la zone euro, l'inflation entre 2 et 4% et à préserver ainsi le pouvoir d'achat de la monnaie unique.",
      category: "Monétaire",
      importance: "high"
    },
    {
      year: "1999",
      title: "Naissance de l'euro",
      description: "Naissance de l'euro, utilisé sur les marchés financiers en remplacement des monnaies nationales (11 pays l'adoptent alors : Allemagne, Autriche, Belgique, Espagne, Finlande, France, Irlande, Italie, Luxembourg, Pays-Bas et Portugal). Entre dans l'économie le 1er janvier 2002.",
      category: "Monétaire",
      importance: "high"
    },
    {
      year: "1999",
      title: "SDEC",
      description: "Adoption du SDEC (Schéma de Développement de l'Espace Communautaire) pour dépasser les limites de la politique régionale.",
      category: "Aménagement",
      importance: "low"
    },
    {
      year: "2000",
      title: "Accords de Cotonou",
      description: "Au Bénin après l'expiration de la convention de Lomé. Conclu pour 20 ans, cet accord, révisé tous les 5 ans, réunit les 79 États du groupe ACP et a pour objectif de rétablir les équilibres macro-économiques, de développer le secteur privé, d'améliorer les services sociaux, de favoriser l'intégration régionale, de promouvoir l'égalité des chances hommes-femmes, de protéger l'environnement et d'abolir de manière progressive et réciproque les entraves aux échanges commerciaux.",
      category: "International",
      importance: "medium"
    },
    {
      year: "2000",
      title: "Groupe de Vilnius",
      description: "Création du Groupe de Vilnius afin de mettre en place une coopération de pays voulant intégrer l'OTAN.",
      category: "Militaire",
      importance: "medium"
    },
    {
      year: "2001",
      title: "Traité de Nice",
      description: "Signature du traité de Nice qui fixe les principes et les méthodes d'évolution du système institutionnel au fur et à mesure que l'UE s'élargit avec l'entrée des Pays d'Europe centrale et orientale.",
      category: "Institutionnel",
      importance: "medium"
    },
    {
      year: "2001",
      title: "Déclaration de Laeken",
      description: "Sur l'avenir de l'Union européenne. L'UE déclare sa volonté d'assumer de nouvelles responsabilités dans le monde en jouant le rôle d'une puissance stabilisatrice résolument pacifiste.",
      category: "Politique",
      importance: "medium"
    },
    {
      year: "2002",
      title: "Euro fiduciaire",
      description: "L'euro remplace les monnaies nationales dans 12 pays d'Europe (les 11 de départ rejoints par la Grèce).",
      category: "Monétaire",
      importance: "high"
    },
    {
      year: "2003",
      title: "Indépendance de la Géorgie",
      description: "Indépendance de la Géorgie.",
      category: "Géopolitique",
      importance: "medium"
    },
    {
      year: "2004",
      title: "Constitution européenne",
      description: "Signature du traité établissant une constitution pour l'Europe. Élargissement à huit pays d'Europe centrale et orientale (pays baltes, Pologne, République tchèque, Slovaquie, Hongrie, Slovénie) et à deux îles méditerranéennes (Malte et Chypre).",
      category: "Élargissement",
      importance: "high"
    },
    {
      year: "2004",
      title: "Révolution Orange",
      description: "Indépendance de l'Ukraine après la Révolution Orange contre le régime en place.",
      category: "Géopolitique",
      importance: "medium"
    },
    {
      year: "2005",
      title: "Rejet de la Constitution",
      description: "Rejet par la France et les Pays-Bas du traité constitutionnel (contre la constitution de l'UE). Non à 55% en France. Crise ouverte.",
      category: "Institutionnel",
      importance: "high"
    },
    {
      year: "2007",
      title: "Traité de Lisbonne",
      description: "Adoption du traité de Lisbonne qui dote l'UE d'un double visage « exécutif » : Herman Van Rompuy, président du Conseil européen (aujourd'hui Charles Michel), et Catherine Ashton, Haut représentant de l'Union « pour les Affaires étrangères et la politique de sécurité » (aujourd'hui Josep Borrell), et renforce le rôle du Parlement Européen.",
      category: "Institutionnel",
      importance: "high"
    },
    {
      year: "2007",
      title: "Élargissement balkanique",
      description: "Élargissement à la Roumanie et la Bulgarie. La Slovénie devient le 13e membre de la zone euro.",
      category: "Élargissement",
      importance: "medium"
    },
    {
      year: "2008",
      title: "Crise des Subprimes",
      description: "Crise des Subprimes. Crise de la dette souveraine en Europe.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "2008",
      title: "Indépendance du Kosovo",
      description: "Indépendance du Kosovo.",
      category: "Géopolitique",
      importance: "medium"
    },
    {
      year: "2008",
      title: "Union pour la Méditerranée",
      description: "Création de l'UPM, Union pour la Méditerranée, lors du sommet de Paris pour la Méditerranée, rassemble 43 pays (les 28 États membres de l'Union européenne et 15 pays méditerranéens partenaires d'Afrique du Nord, du Moyen-Orient et d'Europe du Sud-Est).",
      category: "International",
      importance: "medium"
    },
    {
      year: "2009",
      title: "Crise grecque",
      description: "Banqueroute de la Grèce : le pays annonce une possible insolvabilité à court terme.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "2009",
      title: "Entrée en vigueur de Lisbonne",
      description: "Le traité de Lisbonne entre en vigueur au 1er décembre. Le Belge Herman Van Rompuy devient le président du Conseil européen. Il est assisté d'un haut représentant à la politique étrangère, la britannique Catherine Ashton. UE décide d'adopter une nouvelle stratégie de relance : Europe 2020. Objectif central = croissance durable grâce à innovation, emploi, inclusion sociale tout en respectant l'environnement.",
      category: "Institutionnel",
      importance: "high"
    },
    {
      year: "2010",
      title: "Zone de libre-échange euro-méditerranéenne",
      description: "Proposition de mise en place d'une zone de libre-échange euro-méditerranéenne.",
      category: "International",
      importance: "low"
    },
    {
      year: "2010",
      title: "FESF",
      description: "Mise en place du FESF, Fonds Européen de stabilisation financière (Fonds de secours Européen), avec un budget de 440 milliards d'euros en réponse à la crise de la zone euro.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "2010",
      title: "Accords de Bâle III",
      description: "Des propositions de réglementation bancaire, qui fixe notamment à 8% les fonds propres des banques. Régulation des banques dans le cadre de la crise de la dette.",
      category: "Économique",
      importance: "medium"
    },
    {
      year: "2011",
      title: "Pacte de Compétitivité",
      description: "Mise en place du Pacte de Compétitivité pour l'harmonisation fiscale en France, la baisse des charges sociales et l'homogénéité en matière de politique économique qui vise à redonner aux entreprises qui opèrent en France les moyens de se repositionner de manière offensive et durable dans la compétition internationale, tout en concourant à la compétitivité de l'économie nationale.",
      category: "Économique",
      importance: "medium"
    },
    {
      year: "2012-2013",
      title: "Union bancaire",
      description: "Union bancaire et création du Mécanisme Européen de Stabilité (MES) avec un budget de 500 milliards, rachète de la dette. Il remplace le Mécanisme européen de stabilité financière (MESF) et le Fonds européen de stabilité financière (FESF).",
      category: "Économique",
      importance: "high"
    },
    {
      year: "2013",
      title: "Entrée de la Croatie",
      description: "Entrée de la Croatie dans l'UE.",
      category: "Élargissement",
      importance: "medium"
    },
    {
      year: "2014",
      title: "Réforme institutionnelle",
      description: "Réduction du nombre de commissaires européens au sein de la commission (18). Entrée en vigueur du nouveau système de vote à la majorité qualifiée proposée par le traité de Lisbonne (55% des États représentant 65% de la population) avec des limitations pendant une période transitoire jusqu'au 31 mars 2017. Nouvel exécutif européen : Juncker (Commission)-Tusk (Conseil)-Mogherini (Affaires étrangères).",
      category: "Institutionnel",
      importance: "medium"
    },
    {
      year: "2014",
      title: "Crise en Ukraine",
      description: "Elle débute en novembre 2013 à la suite de la décision du gouvernement ukrainien de ne pas signer l'accord d'association avec l'Union européenne.",
      category: "Géopolitique",
      importance: "high"
    },
    {
      year: "2014",
      title: "Crise des migrants",
      description: "Crise des migrants sur les côtes Européennes. 200 000 réfugiés sont arrivés dans l'Union européenne selon l'UNHCR, 20 fois plus qu'en 2010.",
      category: "Migration",
      importance: "high"
    },
    {
      year: "2015",
      title: "Quantitative Easing",
      description: "Début de la politique de Quantitative Easing ou assouplissement quantitatif de rachat de la dette par la BCE à hauteur de 60 milliards d'euros, alors que la menace d'une déflation se fait de plus en plus précise et qui s'explique par la rigueur. Politique reconduite en 2016, augmentant son volume à 80 milliards d'euros par mois. L'idée d'un hélicoptère monétaire est mise sur la table, créer de la monnaie et la distribuer aux citoyens. Politique totale de 2000 milliards d'euros.",
      category: "Monétaire",
      importance: "high"
    },
    {
      year: "2015",
      title: "Lituanie et aide à la Grèce",
      description: "Entrée de la Lituanie dans la zone euro, après la Lettonie. Troisième plan d'aide à la Grèce.",
      category: "Monétaire",
      importance: "medium"
    },
    {
      year: "2015",
      title: "Annexion de la Crimée",
      description: "Annexion de la Crimée par la Russie.",
      category: "Géopolitique",
      importance: "high"
    },
    {
      year: "2016",
      title: "Brexit",
      description: "Référendum sur le Brexit : Le Royaume-Uni vote pour quitter l'Union européenne (51,9% pour le Leave).",
      category: "Élargissement",
      importance: "high"
    },
    {
      year: "2017",
      title: "Crise catalane",
      description: "Les indépendantistes catalans déclarent l'indépendance de la région, mais elle est rapidement suspendue par les autorités espagnoles.",
      category: "Politique",
      importance: "medium"
    },
    {
      year: "2017",
      title: "Macron président",
      description: "La France élit Emmanuel Macron président, renforçant l'axe franco-allemand avec Angela Merkel.",
      category: "Politique",
      importance: "medium"
    },
    {
      year: "2018",
      title: "RGPD",
      description: "Entrée en vigueur du Règlement général sur la protection des données (RGPD), harmonisant la protection des données personnelles dans l'UE.",
      category: "Numérique",
      importance: "medium"
    },
    {
      year: "2018",
      title: "Schengen élargi",
      description: "La Slovénie et Malte rejoignent pleinement l'espace Schengen.",
      category: "Circulation",
      importance: "low"
    },
    {
      year: "2019",
      title: "Von der Leyen Commission",
      description: "Élections européennes : Ursula von der Leyen devient présidente de la Commission européenne, marquant un tournant vers des priorités vertes et numériques.",
      category: "Institutionnel",
      importance: "medium"
    },
    {
      year: "2019",
      title: "Green Deal",
      description: "Début des négociations sur le Green Deal européen, visant la neutralité carbone d'ici 2050.",
      category: "Environnement",
      importance: "high"
    },
    {
      year: "2020",
      title: "Brexit effectif",
      description: "Le Royaume-Uni quitte officiellement l'UE le 31 janvier, suivi d'une période de transition jusqu'à la fin de l'année.",
      category: "Élargissement",
      importance: "high"
    },
    {
      year: "2020",
      title: "COVID-19",
      description: "Pandémie de COVID-19 frappe l'Europe, menant à des confinements massifs, une récession économique et la mise en place du plan de relance NextGenerationEU de 750 milliards d'euros.",
      category: "Santé",
      importance: "high"
    },
    {
      year: "2021",
      title: "NextGenerationEU",
      description: "Lancement du Fonds de relance européen pour soutenir la reprise post-COVID, avec un accent sur la transition écologique et numérique.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "2021",
      title: "Croatie vers l'euro",
      description: "La Croatie adopte l'euro et rejoint la zone euro en 2023.",
      category: "Monétaire",
      importance: "medium"
    },
    {
      year: "2022",
      title: "Guerre en Ukraine",
      description: "Invasion russe de l'Ukraine : L'UE impose des sanctions massives contre la Russie, accélère l'aide militaire à l'Ukraine et lance des efforts pour réduire la dépendance énergétique au gaz russe.",
      category: "Conflit",
      importance: "high"
    },
    {
      year: "2022",
      title: "Adhésion OTAN nordique",
      description: "La Finlande et la Suède demandent à rejoindre l'OTAN, marquant la fin de leur neutralité historique ; elles adhèrent en 2023 et 2024 respectivement.",
      category: "Militaire",
      importance: "high"
    },
    {
      year: "2023",
      title: "Statut de candidat Ukraine",
      description: "L'UE accorde le statut de candidat à l'Ukraine et à la Moldavie, accélérant les perspectives d'élargissement.",
      category: "Élargissement",
      importance: "high"
    },
    {
      year: "2023",
      title: "Crise énergétique",
      description: "Crise énergétique persistante due à la guerre en Ukraine, avec des hausses de prix et des efforts pour diversifier les sources d'énergie.",
      category: "Énergie",
      importance: "high"
    },
    {
      year: "2024",
      title: "Élections européennes 2024",
      description: "Renforcement des partis verts et centristes ; Ursula von der Leyen réélue présidente de la Commission.",
      category: "Institutionnel",
      importance: "medium"
    },
    {
      year: "2024",
      title: "Schengen complet",
      description: "La Bulgarie et la Roumanie rejoignent pleinement l'espace Schengen.",
      category: "Circulation",
      importance: "medium"
    },
    {
      year: "2024",
      title: "Sommet OTAN Vilnius",
      description: "Renforcement des engagements de défense, avec un objectif de 2% du PIB pour les dépenses militaires.",
      category: "Militaire",
      importance: "medium"
    },
    {
      year: "2025",
      title: "Soutien continu à l'Ukraine",
      description: "Poursuite de la guerre en Ukraine, avec l'UE augmentant son soutien financier et militaire, totalisant plus de 100 milliards d'euros d'aide cumulée.",
      category: "Conflit",
      importance: "high"
    },
    {
      year: "2025",
      title: "Pacte Migration et Asile",
      description: "Lancement du pacte sur la migration et l'asile de l'UE, visant à réformer les politiques d'immigration pour une répartition plus équitable des réfugiés.",
      category: "Migration",
      importance: "high"
    },
    {
      year: "2025",
      title: "Nouvelles crises de dette",
      description: "Crise économique en Grèce et en Italie due à la dette persistante, menant à de nouvelles négociations sur la réforme du pacte de stabilité et de croissance.",
      category: "Économique",
      importance: "high"
    },
    {
      year: "2025",
      title: "Politique monétaire BCE",
      description: "La BCE ajuste ses taux d'intérêt pour lutter contre une inflation persistante autour de 3%, tout en soutenant la transition verte.",
      category: "Monétaire",
      importance: "medium"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Politique': return <Users className="h-4 w-4" />;
      case 'Économique': return <Coins className="h-4 w-4" />;
      case 'Militaire': return <Shield className="h-4 w-4" />;
      case 'Institutionnel': return <Users className="h-4 w-4" />;
      case 'Élargissement': return <MapPin className="h-4 w-4" />;
      case 'Monétaire': return <Coins className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Politique': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Économique': return 'bg-green-100 text-green-800 border-green-200';
      case 'Militaire': return 'bg-red-100 text-red-800 border-red-200';
      case 'Institutionnel': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Élargissement': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Monétaire': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Conflit': return 'bg-red-200 text-red-900 border-red-300';
      case 'Géopolitique': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-orange-500 bg-orange-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-gray-900 transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Chronologie de l'Europe</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chronologie de l'Europe
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des traités de Westphalie à nos jours : les grandes étapes de la construction européenne
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">377 ans</div>
              <div className="text-sm text-gray-600">De 1648 à 2025</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{events.length}</div>
              <div className="text-sm text-gray-600">Événements majeurs</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">27</div>
              <div className="text-sm text-gray-600">États membres UE</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">447M</div>
              <div className="text-sm text-gray-600">Citoyens européens</div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Calendar className="h-8 w-8 text-blue-600" />
              Chronologie complète
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className={`border-l-4 pl-6 pb-6 ${getImportanceColor(event.importance)}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="outline" className="font-bold text-lg px-3 py-1">
                      {event.year}
                    </Badge>
                    <Badge className={`flex items-center gap-1 ${getCategoryColor(event.category)}`}>
                      {getCategoryIcon(event.category)}
                      {event.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Légende */}
        <Card className="mt-8 bg-gray-100">
          <CardHeader>
            <CardTitle className="text-lg">Légende des catégories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Politique', 'Économique', 'Militaire', 'Institutionnel', 
                'Élargissement', 'Monétaire', 'Conflit', 'Géopolitique'
              ].map((category) => (
                <div key={category} className="flex items-center gap-2">
                  <Badge className={`flex items-center gap-1 ${getCategoryColor(category)}`}>
                    {getCategoryIcon(category)}
                    {category}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChronologieEuropePage;