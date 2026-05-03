import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Sword, Handshake, TrendingUp } from 'lucide-react';

const ContinentAfricainChronologiePage = () => {
  const events = [
    {
      year: 1885,
      title: "Congrès de Berlin",
      description: "Le congrès de Berlin organise le partage de l'Afrique noire entre les puissances européennes",
      category: "colonial",
      importance: "major"
    },
    {
      year: 1890,
      title: "Accords franco-britanniques",
      description: "Accords franco-britanniques pour le contrôle du Sahara",
      category: "colonial",
      importance: "medium"
    },
    {
      year: 1898,
      title: "Crise de Fachoda",
      description: "Crise de Fachoda au Soudan entre la France et les Britanniques",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 1911,
      title: "Protectorat français",
      description: "Protectorat français sur le Maroc et la Tunisie",
      category: "colonial",
      importance: "medium"
    },
    {
      year: 1924,
      title: "Plan Sarraut",
      description: "1er grand plan de développement des colonies françaises en Afrique",
      category: "economique",
      importance: "medium"
    },
    {
      year: 1942,
      title: "Opération Torch",
      description: "Débarquement des forces anglaises/américaines qui s'emparent de l'Algérie, constituant le GPRF",
      category: "conflit",
      importance: "major"
    },
    {
      year: 1945,
      title: "Création du Franc CFA",
      description: "Création du Franc CFA",
      category: "economique",
      importance: "major"
    },
    {
      year: 1947,
      title: "L'Italie renonce à la Libye",
      description: "L'Italie renonce à ses droits sur la Libye",
      category: "independence",
      importance: "medium"
    },
    {
      year: 1947,
      title: "Révolte à Madagascar",
      description: "Révolte et répression à Madagascar, alors colonie française. Un des signes avant-coureurs de la décolonisation",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 1949,
      title: "Indépendance de la Libye et Somalie",
      description: "Indépendance proclamée par l'ONU sur la Libye et la Somalie",
      category: "independence",
      importance: "medium"
    },
    {
      year: 1952,
      title: "Révolte des Mau-Mau",
      description: "Révolte des Mau-Mau au Kenya",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 1954,
      title: "Début guerre d'Algérie",
      description: "Début de la guerre d'Algérie, Attentats du FLN",
      category: "conflit",
      importance: "major"
    },
    {
      year: 1955,
      title: "Indépendance du Soudan",
      description: "Indépendance du Soudan",
      category: "independence",
      importance: "medium"
    },
    {
      year: 1956,
      title: "Loi Defferre",
      description: "Loi Defferre qui accorde une large autonomie à l'Algérie",
      category: "politique",
      importance: "medium"
    },
    {
      year: 1959,
      title: "Nkrumah président du Ghana",
      description: "Nkrumah devient président du Ghana, indépendantiste",
      category: "independence",
      importance: "medium"
    },
    {
      year: 1960,
      title: "Année de l'Afrique",
      description: "17 États accèdent à l'indépendance (Afrique Française + Nigeria)",
      category: "independence",
      importance: "major"
    },
    {
      year: 1961,
      title: "République d'Afrique du Sud",
      description: "Retrait de l'ADS du Commonwealth et proclamation de la République d'Afrique du Sud",
      category: "politique",
      importance: "medium"
    },
    {
      year: 1962,
      title: "Accords d'Évian",
      description: "Accords d'Évian qui mettent fin à la guerre d'Algérie",
      category: "independence",
      importance: "major"
    },
    {
      year: 1962,
      title: "Indépendance du Rwanda",
      description: "Indépendance du Rwanda",
      category: "independence",
      importance: "medium"
    },
    {
      year: 1963,
      title: "Création de l'OUA",
      description: "Création de l'OUA, Organisation de l'unité africaine",
      category: "cooperation",
      importance: "major"
    },
    {
      year: 1963,
      title: "Intangibilité des frontières",
      description: "Dogme de l'intangibilité des frontières décrété par l'Organisation de l'unité Africaine",
      category: "cooperation",
      importance: "medium"
    },
    {
      year: 1966,
      title: "Coups d'État",
      description: "Coup d'État au Nigeria, arrivée au pouvoir en Centre-Afrique de Bokassa",
      category: "politique",
      importance: "medium"
    },
    {
      year: "1967-1970",
      title: "Guerre du Biafra",
      description: "Guerre du Biafra. Le Biafra (région riche en pétrole) déclare son indépendance de la République fédérale du Nigeria. Débute alors une guerre sanglante, et naissent de profondes rivalités. En 1970, le Biafra est vaincu et revient sous le contrôle du Nigeria. Mort de 2 millions de personnes dans la crise humanitaire (famine, épidémies…). Cette guerre est largement médiatisée, et aura pour conséquence la création de Médecins Sans Frontières.",
      category: "conflit",
      importance: "major"
    },
    {
      year: 1967,
      title: "Discours d'Arusha",
      description: "Discours d'Arusha de 1967 de Julius Nyerere, président de la Tanzanie",
      category: "politique",
      importance: "medium"
    },
    {
      year: 1969,
      title: "Coup d'État en Somalie",
      description: "Coup d'État en Somalie, le nouveau gouvernement ouvre ses bases aux soviétiques",
      category: "politique",
      importance: "medium"
    },
    {
      year: 1971,
      title: "Amin Dada en Ouganda",
      description: "Arrivée du Dictateur Amin Dada en Ouganda, dictature raciste et hostile aux asiatiques",
      category: "politique",
      importance: "medium"
    },
    {
      year: 1974,
      title: "Renversement d'Hailé Sélassié",
      description: "En Éthiopie, Hailé Sélassié est renversé par des communistes prosoviétiques",
      category: "politique",
      importance: "medium"
    },
    {
      year: 1974,
      title: "Guerre Civile en Angola",
      description: "Guerre Civile en Angola pour l'indépendance du pays sous l'impulsion du MPLA armé par l'URSS et soutien de Cuba",
      category: "conflit",
      importance: "major"
    },
    {
      year: 1975,
      title: "Indépendance de l'Angola",
      description: "Indépendance de l'Angola après la révolution des œillets au Portugal",
      category: "independence",
      importance: "medium"
    },
    {
      year: 1975,
      title: "Convention de Lomé I",
      description: "Convention de Lomé I (accords ACP) entre la CEE et 46 pays d'Afrique, Caraïbe et Pacifique. Mise en place du STABEX, le système de stabilisation réparti par le Fonds européen de développement (le FED) qui compense la perte des recettes à l'exportation subie par tous les pays ACP. 1979 : Lomé II met en place le SYSMIN, qui couvre huit produits miniers et intervient si la baisse des cours menace l'outil de production",
      category: "economique",
      importance: "major"
    },
    {
      year: 1975,
      title: "Annexion du Sahara occidental",
      description: "Annexion du Sahara occidental par le Maroc",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 1977,
      title: "Création de la CEDEAO",
      description: "Entrée en vigueur de la CEDEAO, Communauté Économique des États de l'Afrique de l'Ouest",
      category: "cooperation",
      importance: "medium"
    },
    {
      year: 1980,
      title: "Création du Zimbabwe",
      description: "Création du Zimbabwe",
      category: "independence",
      importance: "medium"
    },
    {
      year: 1983,
      title: "Création de la CEEAC",
      description: "Création de la CEEAC, Communauté économique des États d'Afrique centrale",
      category: "cooperation",
      importance: "medium"
    },
    {
      year: 1988,
      title: "Émeutes d'octobre en Algérie",
      description: "Émeutes d'octobre en Algérie qui débouchent sur une guerre civile",
      category: "conflit",
      importance: "medium"
    },
    {
      year: "1989-2003",
      title: "Guerre du Libéria",
      description: "Guerre du Libéria",
      category: "conflit",
      importance: "major"
    },
    {
      year: 1990,
      title: "Discours de La Baule",
      description: "Discours de La Baule par Mitterrand, l'aide de la France sera désormais conditionnée à la démocratisation et à la « bonne gouvernance »",
      category: "politique",
      importance: "major"
    },
    {
      year: "1991-2002",
      title: "Guerre civile au Sierra-Leone",
      description: "Guerre civile au Sierra-Leone",
      category: "conflit",
      importance: "major"
    },
    {
      year: 1992,
      title: "Programme Restore Hope",
      description: "Programme Restore Hope des US en Somalie",
      category: "intervention",
      importance: "medium"
    },
    {
      year: 1993,
      title: "Création de la COMESA",
      description: "Création de la COMESA entre 14 pays, Le Marché commun de l'Afrique orientale et australe, pour renforcer un accord de libre-échange en place depuis 1981",
      category: "cooperation",
      importance: "medium"
    },
    {
      year: 1994,
      title: "Génocide du Rwanda",
      description: "Génocide du Rwanda. La guerre civile au Rwanda débute en 1990 et se termine en 1993. L'assassinat du président Rwandais Juvénal Habyarimana sert de prétexte aux Hutus pour mener à bien leur objectif génocidaire. Selon l'ONU, 800 000 morts. La France mène l'opération Turquoise pour mettre en place des camps pour réfugiés, mais sans réel impact.",
      category: "conflit",
      importance: "major"
    },
    {
      year: 1994,
      title: "Organisation de l'UEMOA et CEMAC",
      description: "Organisation de l'UEMOA, Union économique et monétaire ouest-africain, et de la CEMAC, Communauté économique et monétaire en Afrique Centrale",
      category: "cooperation",
      importance: "medium"
    },
    {
      year: 1996,
      title: "Guerres du Congo",
      description: "Guerres du Congo",
      category: "conflit",
      importance: "major"
    },
    {
      year: 2000,
      title: "Mise en place de l'AGOA",
      description: "Mise en place de l'AGOA par les US, Loi sur la croissance et les possibilités en Afrique, législation permettant à 37 pays d'Afrique d'exporter aux USA sans droits de douanes",
      category: "economique",
      importance: "medium"
    },
    {
      year: 2000,
      title: "Accords de Cotonou",
      description: "Accords de Cotonou au Bénin après l'expiration de la convention de Lomé. Conclu pour 20 ans, cet accord, révisé tous les 5 ans, réunit les 79 États du groupe ACP et a pour objectif de rétablir les équilibres macro-économiques, de développer le secteur privé, d'améliorer les services sociaux, de favoriser l'intégration régionale, de promouvoir l'égalité des chances hommes-femmes, de protéger l'environnement et d'abolir de manière progressive et réciproque les entraves aux échanges commerciaux",
      category: "economique",
      importance: "major"
    },
    {
      year: 2003,
      title: "Attentats terroristes au Maroc",
      description: "Attentats terroristes au Maroc à Casablanca et Tanger",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 2003,
      title: "Début du conflit du Darfour",
      description: "Début du conflit du Darfour",
      category: "conflit",
      importance: "major"
    },
    {
      year: 2007,
      title: "Naissance d'AQMI",
      description: "Naissance d'AQMI",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 2009,
      title: "Naissance d'AQPA",
      description: "Naissance d'AQPA",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 2011,
      title: "Afrique zone d'intérêts vitaux US",
      description: "Les US proclament l'Afrique « Zone d'intérêts vitaux des États-Unis d'Amérique »",
      category: "politique",
      importance: "major"
    },
    {
      year: 2011,
      title: "Mouvement du 20-Février au Maroc",
      description: "Mouvement du 20-Février au Maroc. Grandes protestations dans les rues pour plus de démocratie et du changement. Printemps Arabe Light",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2011,
      title: "Indépendance du Sud-Soudan",
      description: "Indépendance du Sud-Soudan. Conflits avec le Nord",
      category: "independence",
      importance: "major"
    },
    {
      year: 2011,
      title: "Conflits en Somalie",
      description: "Conflits en Somalie",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 2011,
      title: "Barrage de la Renaissance",
      description: "Construction du barrage de la Renaissance en Éthiopie, plus grand que celui d'Assouan",
      category: "economique",
      importance: "medium"
    },
    {
      year: 2013,
      title: "Accord barrage du Grand Inga",
      description: "La RDC et le Congo signent un accord pour la création du barrage du Grand Inga",
      category: "economique",
      importance: "medium"
    },
    {
      year: 2013,
      title: "Décès de Nelson Mandela",
      description: "Décès et funérailles d'État de l'ancien président sud-africain Nelson Mandela",
      category: "politique",
      importance: "major"
    },
    {
      year: 2013,
      title: "Guerre civile en Centrafrique",
      description: "Intensification de la guerre civile en République centrafricaine",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 2014,
      title: "Épidémie d'Ebola",
      description: "Épidémie d'Ebola en Afrique de l'Ouest, la plus grave depuis l'identification du virus, tuant plus de 11 000 personnes",
      category: "sanitaire",
      importance: "major"
    },
    {
      year: 2014,
      title: "Enlèvement des filles de Chibok",
      description: "Enlèvement des filles de Chibok par Boko Haram au Nigeria",
      category: "conflit",
      importance: "major"
    },
    {
      year: 2015,
      title: "Attaques de Boko Haram",
      description: "Attaques terroristes de Boko Haram au nord du Nigeria, tuant plus de 2 000 personnes",
      category: "conflit",
      importance: "major"
    },
    {
      year: 2015,
      title: "Attentat de Garissa",
      description: "Attentat de l'université de Garissa au Kenya par Al-Shabaab, tuant 148 personnes",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 2016,
      title: "Crise électorale en Gambie",
      description: "Crise électorale en Gambie, menant à l'éviction du président Yahya Jammeh",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2017,
      title: "Attentat de Mogadiscio",
      description: "Attentat à la bombe à Mogadiscio en Somalie attribué à Al-Shabaab, tuant 587 personnes, l'un des attentats les plus meurtriers de l'histoire moderne",
      category: "conflit",
      importance: "major"
    },
    {
      year: 2017,
      title: "Coup d'État au Zimbabwe",
      description: "Coup d'État au Zimbabwe, renversant le président Robert Mugabe après 37 ans au pouvoir",
      category: "politique",
      importance: "major"
    },
    {
      year: 2018,
      title: "Accord de paix Éthiopie-Érythrée",
      description: "Accord de paix entre l'Éthiopie et l'Érythrée, mettant fin à un conflit de deux décennies",
      category: "cooperation",
      importance: "medium"
    },
    {
      year: 2018,
      title: "Élection présidentielle en RDC",
      description: "Élection présidentielle en République démocratique du Congo, transfert pacifique du pouvoir après le départ de Joseph Kabila",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2019,
      title: "Révolution au Soudan",
      description: "Révolution au Soudan, renversant le président Omar el-Béchir après 30 ans au pouvoir",
      category: "politique",
      importance: "major"
    },
    {
      year: 2019,
      title: "Mouvement Hirak en Algérie",
      description: "Mouvement Hirak en Algérie, menant à la démission du président Abdelaziz Bouteflika",
      category: "politique",
      importance: "major"
    },
    {
      year: 2019,
      title: "Zone de libre-échange africaine",
      description: "Accord sur la Zone de libre-échange continentale africaine (AfCFTA) signé par les pays africains",
      category: "cooperation",
      importance: "major"
    },
    {
      year: 2020,
      title: "Pandémie de COVID-19",
      description: "Pandémie de COVID-19 frappe l'Afrique, avec une réponse continentale mieux que prévu malgré les défis économiques",
      category: "sanitaire",
      importance: "major"
    },
    {
      year: 2020,
      title: "Guerre du Tigré",
      description: "Début de la guerre du Tigré en Éthiopie, menant à une crise humanitaire majeure",
      category: "conflit",
      importance: "major"
    },
    {
      year: 2021,
      title: "Premiers vaccins COVAX",
      description: "Livraison des premiers vaccins COVAX au Ghana, marquant le début de la campagne vaccinale en Afrique",
      category: "sanitaire",
      importance: "medium"
    },
    {
      year: 2021,
      title: "Coup d'État en Guinée",
      description: "Coup d'État en Guinée, renversant le président Alpha Condé",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2021,
      title: "Coup d'État au Soudan",
      description: "Coup d'État au Soudan en octobre, interrompant la transition démocratique",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2021,
      title: "Prix Nobel de littérature",
      description: "Abdulrazak Gurnah, originaire de Tanzanie, remporte le prix Nobel de littérature",
      category: "culture",
      importance: "medium"
    },
    {
      year: 2022,
      title: "Coups d'État au Burkina Faso",
      description: "Deux coups d'État au Burkina Faso, marquant une instabilité croissante dans le Sahel",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2022,
      title: "Retrait des troupes françaises du Mali",
      description: "Retrait des troupes françaises du Mali après des tensions avec la junte militaire",
      category: "intervention",
      importance: "major"
    },
    {
      year: 2022,
      title: "COP27 en Égypte",
      description: "COP27 organisée en Égypte, focalisée sur le climat et les impacts en Afrique",
      category: "environnement",
      importance: "medium"
    },
    {
      year: 2022,
      title: "Élections au Kenya",
      description: "Élections présidentielles au Kenya, William Ruto élu président",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2023,
      title: "Coup d'État au Niger",
      description: "Coup d'État au Niger, renversant le président Mohamed Bazoum",
      category: "politique",
      importance: "major"
    },
    {
      year: 2023,
      title: "Guerre civile au Soudan",
      description: "Début de la guerre civile au Soudan entre les Forces armées soudanaises et les Forces de soutien rapide, causant une crise humanitaire massive",
      category: "conflit",
      importance: "major"
    },
    {
      year: 2023,
      title: "Coup d'État au Gabon",
      description: "Coup d'État au Gabon, renversant le président Ali Bongo",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2023,
      title: "Élections au Nigeria",
      description: "Élections présidentielles au Nigeria, Bola Tinubu élu président",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2023,
      title: "Cyclones dévastateurs",
      description: "Cyclones dévastateurs au Malawi et au Mozambique, tuant des centaines et déplaçant des milliers",
      category: "environnement",
      importance: "medium"
    },
    {
      year: 2024,
      title: "Élections au Sénégal",
      description: "Élections présidentielles au Sénégal, Bassirou Diomaye Faye élu président",
      category: "politique",
      importance: "medium"
    },
    {
      year: 2024,
      title: "Élections en Afrique du Sud",
      description: "Élections générales en Afrique du Sud, l'ANC perd sa majorité absolue et forme une coalition",
      category: "politique",
      importance: "major"
    },
    {
      year: 2024,
      title: "Égypte et Éthiopie aux BRICS",
      description: "Égypte et Éthiopie rejoignent les BRICS",
      category: "cooperation",
      importance: "major"
    },
    {
      year: 2024,
      title: "Accord Éthiopie-Somaliland",
      description: "Accord entre l'Éthiopie et le Somaliland pour l'utilisation du port de Berbera",
      category: "economique",
      importance: "medium"
    },
    {
      year: 2024,
      title: "Violences du M23 en RDC",
      description: "Intensification des violences impliquant le M23 en République démocratique du Congo",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 2025,
      title: "Exercice African Lion 2025",
      description: "Exercice militaire African Lion 2025, le plus grand exercice annuel en Afrique impliquant plus de 50 nations et 10 000 troupes",
      category: "cooperation",
      importance: "medium"
    },
    {
      year: 2025,
      title: "Escalade des violences",
      description: "Escalade des enlèvements islamistes au Cameroun et des violences en RDC (janvier)",
      category: "conflit",
      importance: "medium"
    },
    {
      year: 2025,
      title: "Poursuite des conflits",
      description: "Poursuite des conflits en cours au Soudan, au Sahel et en Éthiopie, avec des crises humanitaires persistantes",
      category: "conflit",
      importance: "major"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'colonial': return <MapPin className="h-4 w-4" />;
      case 'conflit': return <Sword className="h-4 w-4" />;
      case 'independence': return <Users className="h-4 w-4" />;
      case 'cooperation': return <Handshake className="h-4 w-4" />;
      case 'economique': return <TrendingUp className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'colonial': return 'bg-slate-100 text-slate-800';
      case 'conflit': return 'bg-red-100 text-red-800';
      case 'independence': return 'bg-green-100 text-green-800';
      case 'cooperation': return 'bg-blue-100 text-blue-800';
      case 'economique': return 'bg-purple-100 text-purple-800';
      case 'politique': return 'bg-orange-100 text-orange-800';
      case 'intervention': return 'bg-yellow-100 text-yellow-800';
      case 'sanitaire': return 'bg-pink-100 text-pink-800';
      case 'environnement': return 'bg-emerald-100 text-emerald-800';
      case 'culture': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImportanceStyle = (importance: string) => {
    switch (importance) {
      case 'major': return 'border-l-4 border-blue-500 bg-blue-50';
      case 'medium': return 'border-l-4 border-gray-300 bg-gray-50';
      default: return 'border-l-4 border-gray-200 bg-white';
    }
  };

  const groupEventsByDecade = () => {
    const grouped: { [key: string]: typeof events } = {};
    events.forEach(event => {
      const year = typeof event.year === 'string' ? parseInt(event.year.split('-')[0]) : event.year;
      const decade = Math.floor(year / 10) * 10;
      const decadeKey = `${decade}-${decade + 9}`;
      if (!grouped[decadeKey]) {
        grouped[decadeKey] = [];
      }
      grouped[decadeKey].push(event);
    });
    return grouped;
  };

  const groupedEvents = groupEventsByDecade();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* En-tête */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie du Continent Africain
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Une chronologie complète des événements marquants de l'histoire africaine contemporaine, 
            de la colonisation européenne aux défis actuels du XXIe siècle.
          </p>
        </div>

        {/* Légende des catégories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Catégories d'événements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <Badge className="bg-slate-100 text-slate-800 flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                Colonial
              </Badge>
              <Badge className="bg-red-100 text-red-800 flex items-center gap-2">
                <Sword className="h-3 w-3" />
                Conflits
              </Badge>
              <Badge className="bg-green-100 text-green-800 flex items-center gap-2">
                <Users className="h-3 w-3" />
                Indépendances
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 flex items-center gap-2">
                <Handshake className="h-3 w-3" />
                Coopération
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 flex items-center gap-2">
                <TrendingUp className="h-3 w-3" />
                Économique
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Chronologie par décennies */}
        <div className="space-y-8">
          {Object.entries(groupedEvents).sort().map(([decade, decadeEvents]) => (
            <Card key={decade} className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <CardTitle className="text-2xl text-blue-900">
                  {decade.replace('-', ' - ')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {decadeEvents.map((event, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${getImportanceStyle(event.importance)}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="font-bold text-base">
                              {event.year}
                            </Badge>
                            <Badge className={getCategoryColor(event.category)}>
                              <div className="flex items-center gap-1">
                                {getCategoryIcon(event.category)}
                                <span className="capitalize">{event.category}</span>
                              </div>
                            </Badge>
                            {event.importance === 'major' && (
                              <Badge className="bg-blue-600 text-white">
                                Événement majeur
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistiques */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Statistiques de la chronologie</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{events.length}</div>
                <div className="text-sm text-gray-600">Événements</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {events.filter(e => e.importance === 'major').length}
                </div>
                <div className="text-sm text-gray-600">Événements majeurs</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">140</div>
                <div className="text-sm text-gray-600">Années couvertes</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {Object.keys(groupedEvents).length}
                </div>
                <div className="text-sm text-gray-600">Décennies</div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default ContinentAfricainChronologiePage;