import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, MapPin, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle, List } from 'lucide-react';

const AsieSujetsPage = () => {
  const sujets = [
    {
      id: 1,
      theme: "La Chine : ascension et puissance globale",
      sujets: [
        {
          title: "La République populaire de Chine : de Mao à Xi Jinping",
          details: {
            date: "1949-présent",
            figures: "1,4 milliard d'habitants, 18% du PIB mondial",
            context: "La République populaire de Chine constitue l'événement géopolitique majeur du XXIe siècle, transformant un État communiste isolé en superpuissance économique et militaire. Fondée en 1949 par Mao Zedong après la victoire communiste, la RPC traverse des périodes contrastées : révolution culturelle chaotique (1966-1976), réformes économiques de Deng Xiaoping (1978) ouvrant le socialisme de marché, et consolidation autoritaire sous Xi Jinping depuis 2012. Xi Jinping incarne le retour à un leadership fort, supprimant les limites de mandats présidentiels et promouvant le 'rêve chinois'. La Chine représente désormais 18% du PIB mondial, 1,4 milliard d'habitants, et une influence globale croissante. Cependant, elle fait face à des défis internes : vieillissement démographique, inégalités régionales, et contestations ethniques (Tibet, Xinjiang). L'évolution de Mao à Xi révèle la synthèse chinoise unique : communisme autoritaire et capitalisme d'État, tradition impériale et modernité technologique."
          }
        },
        {
          title: "Le modèle économique chinois : socialisme de marché et croissance",
          details: {
            date: "1978-présent",
            figures: "Croissance moyenne 9,5% par an, 500 millions sortis de la pauvreté",
            context: "Le modèle économique chinois constitue l'une des plus grandes réussites économiques de l'histoire moderne, combinant planification étatique et marché capitaliste. Les réformes de Deng Xiaoping (1978) inaugurent le 'socialisme de marché' : entreprises d'État réformées, zones économiques spéciales (Shenzhen), et ouverture progressive aux investissements étrangers. Cette synthèse permet une croissance moyenne de 9,5% par an, sortant 500 millions de personnes de la pauvreté et transformant la Chine en 'usine du monde'. Les secteurs clés incluent la manufacture, les hautes technologies (Huawei, TikTok), et les infrastructures massives. Cependant, le modèle révèle des vulnérabilités : dette élevée (300% du PIB), surcapacités industrielles, et dépendance aux exportations. La Chine est devenue le premier exportateur mondial et le deuxième importateur, mais doit désormais passer d'une économie d'exportation à une consommation intérieure. Ce modèle hybride défie les catégories occidentales : capitalisme sans démocratie, autoritarisme efficace économiquement."
          }
        },
        {
          title: "La Belt and Road Initiative : nouvelles routes de la soie",
          details: {
            date: "2013-présent",
            figures: "140 pays participants, 1 000 milliards $ d'investissements",
            context: "La Belt and Road Initiative (BRI), lancée par Xi Jinping en 2013, constitue la plus ambitieuse stratégie d'infrastructure de l'histoire, recréant les anciennes routes de la soie pour le XXIe siècle. La BRI comprend deux axes : la 'Belt' terrestre (chemins de fer, routes, pipelines reliant la Chine à l'Europe via l'Asie centrale) et la 'Road' maritime (ports et routes maritimes vers l'Afrique et l'Europe). 140 pays participent, représentant 60% de la population mondiale et 30% du PIB global. Les investissements dépassent 1 000 milliards de dollars : chemins de fer en Asie centrale, ports au Pakistan (Gwadar) et en Tanzanie, et corridors économiques multiples. La BRI vise à sécuriser les approvisionnements énergétiques chinois, diversifier les routes commerciales, et étendre l'influence géopolitique. Cependant, elle génère des critiques : 'piège de la dette' pour les pays emprunteurs, normes environnementales faibles, et militarisation des routes (ports stratégiques). La BRI révèle l'ambition chinoise : créer un ordre économique centré sur Pékin, concurrençant l'hégémonie américaine."
          }
        },
        {
          title: "La puissance militaire chinoise et les tensions en mer de Chine",
          details: {
            date: "Depuis 2000s",
            figures: "Budget militaire 250 milliards $, 2e flotte mondiale",
            context: "La puissance militaire chinoise constitue l'un des piliers de l'ascension globale de la Chine, transformant l'Armée populaire de libération en force moderne et technologique. Depuis les années 2000, la Chine a modernisé massivement ses forces : aviation de pointe, marine de haute mer (2e flotte mondiale), missiles balistiques, et cybercapacités. Le budget militaire atteint 250 milliards de dollars, derrière seulement les États-Unis. Cette militarisation s'accompagne de tensions territoriales en mer de Chine méridionale, où la Chine revendique 90% de la mer et a construit des îles artificielles militarisées. Les Philippines, Vietnam, Malaisie et Brunei contestent ces revendications, entraînant des incidents maritimes réguliers. La Chine justifie sa présence par des arguments historiques et sécuritaires, mais inquiète ses voisins et les États-Unis. Ces tensions révèlent les ambitions chinoises : contrôle des routes maritimes vitales (80% du commerce chinois passe par ces eaux), affirmation régionale, et préparation à une éventuelle confrontation avec les États-Unis. La militarisation chinoise transforme l'équilibre sécuritaire asiatique."
          }
        }
      ]
    },
    {
      id: 2,
      theme: "L'Inde : démocratie et émergence",
      sujets: [
        {
          title: "L'Inde post-indépendance : démocratie parlementaire et fédéralisme",
          details: {
            date: "1947-présent",
            figures: "1,4 milliard d'habitants, 28 États et 8 territoires",
            context: "L'Inde post-indépendance constitue l'une des plus grandes expériences démocratiques du monde, maintenant la stabilité institutionnelle malgré d'énormes défis. L'indépendance de 1947, négociée pacifiquement par Gandhi et Nehru, crée une démocratie parlementaire inspirée du modèle britannique : Constitution de 1950, élections libres, multipartisme, et fédéralisme complexe (28 États, 8 territoires). Cette stabilité contraste avec les dictatures environnantes, mais repose sur des institutions solides : Cour suprême indépendante, Commission électorale, et alternances pacifiques (BJP depuis 2014). Le fédéralisme indien gère une diversité extrême : 22 langues officielles, religions multiples, et clivages ethniques. Cependant, des défis persistent : corruption, inégalités sociales, et populisme hindou sous Modi. L'Inde révèle le paradoxe démocratique asiatique : démocratie électorale massive (1,4 milliard d'habitants) mais défis socio-économiques persistants, fédéralisme inclusif mais tensions identitaires. Cette réussite institutionnelle fait de l'Inde un modèle pour les démocraties émergentes."
          }
        },
        {
          title: "L'économie indienne : services, technologies et agriculture",
          details: {
            date: "1991-présent",
            figures: "3e économie mondiale, 65% de la population en agriculture",
            context: "L'économie indienne constitue l'un des moteurs de croissance émergents, combinant tradition agricole et modernité technologique dans un modèle unique. Les réformes de 1991 libéralisent l'économie, ouvrant à la mondialisation : privatisation partielle, ouverture aux investissements étrangers, et secteur privé dynamique. L'Inde est devenue la 3e économie mondiale avec 8% de croissance annuelle moyenne. Les secteurs clés incluent les services (55% du PIB : IT, BPO), les technologies (Tata, Infosys), et l'agriculture (65% de la population active, mais seulement 15% du PIB). L'émergence de la classe moyenne (300 millions de personnes) transforme la société indienne. Cependant, des défis persistent : pauvreté rurale massive, infrastructures insuffisantes, et dualisme économique (enclaves high-tech vs campagnes pauvres). L'Inde doit gérer la transition d'une économie agricole à une économie de services, tout en réduisant les inégalités. Cette économie hybride révèle les opportunités et contraintes du développement indien."
          }
        },
        {
          title: "Les relations indo-pakistanaises : conflit du Cachemire",
          details: {
            date: "1947-présent",
            figures: "4 guerres majeures, 200 000 morts depuis 1947",
            context: "Les relations indo-pakistanaises constituent l'un des conflits les plus durables et dangereux du monde, structuré autour du Cachemire disputé. La partition de 1947 crée deux États antagonistes : Inde laïque et Pakistan islamique, divisant le Cachemire selon des lignes religieuses. Quatre guerres (1947-48, 1965, 1971, 1999) et conflits armés incessants ont fait 200 000 morts. Le Cachemire, région himalayenne divisée en trois (Inde, Pakistan, Chine), symbolise les tensions : revendications nationalistes cachemires, armes nucléaires depuis 1998, et terrorism transfrontalier. L'Inde contrôle Jammu-et-Cachemire, le Pakistan Azad Cachemire, tandis que les Cachemirs réclament l'indépendance. Les attentats terroristes (Mumbai 2008, Pulwama 2019) radicalisent les positions. Malgré les négociations sporadiques, le conflit persiste : course aux armements, tensions frontalières, et risque d'escalade nucléaire. Ce conflit révèle les déterminants religieux et territoriaux de la géopolitique sud-asiatique, empêchant toute intégration régionale."
          }
        },
        {
          title: "L'Inde dans l'océan Indien : stratégie maritime et influence régionale",
          details: {
            date: "Depuis 2000s",
            figures: "Marine indienne : 140 navires, présence dans 40 pays",
            context: "L'Inde constitue une puissance maritime émergente dans l'océan Indien, développant une stratégie 'Look East' pour affirmer son influence régionale. Avec 140 navires, la marine indienne est la 5e mondiale et contrôle des routes commerciales vitales (80% du pétrole indien transite par l'océan Indien). La stratégie maritime inclut des bases navales (îles Andaman, Seychelles), des partenariats (Vietnam, Japon, Australie) via le Quad, et des opérations antiterroristes (piraterie somalienne). L'Inde sécurise ses intérêts : protection des routes commerciales, contrepoids à la Chine (qui développe sa présence à Djibouti et au Pakistan), et influence dans l'océan Indien. Cependant, des contraintes existent : rivalité sino-indienne, capacités limitées vs ambitions, et tensions avec le Pakistan. L'émergence maritime indienne révèle les ambitions de Delhi : puissance régionale complète, sécurisation des approvisionnements énergétiques, et rôle stabilisateur. L'océan Indien devient un espace de compétition sino-indienne, avec l'Inde comme contrepoids démocratique."
          }
        }
      ]
    },
    {
      id: 3,
      theme: "L'Asie du Sud-Est : diversité et intégrations",
      sujets: [
        {
          title: "L'ASEAN : construction régionale et défis institutionnels",
          details: {
            date: "1967-présent",
            figures: "10 pays membres, 650 millions d'habitants, 3 000 milliards $ de PIB",
            context: "L'ASEAN constitue l'organisation régionale la plus réussie d'Asie, promouvant la coopération pacifique dans une région historiquement conflictuelle. Créée en 1967 par 5 pays fondateurs (Indonésie, Malaisie, Philippines, Singapour, Thaïlande), elle s'élargit à 10 membres (plus Brunei, Cambodge, Laos, Myanmar, Vietnam) représentant 650 millions d'habitants et 3 000 milliards de dollars de PIB. L'ASEAN privilégie le consensus ('ASEAN Way'), l'intégration économique (AEC depuis 2015), et la sécurité non-interventionniste. Ses succès incluent la paix régionale durable et la croissance économique collective. Cependant, des défis persistent : faiblesse institutionnelle (pas de sanctions contraignantes), divisions internes (Myanmar depuis 2021), et tensions maritimes (mer de Chine méridionale). L'ASEAN doit gérer l'équilibre délicat entre grandes puissances (Chine, États-Unis, Japon) tout en préservant son unité. Cette organisation révèle les spécificités asiatiques : diplomatie consensuelle, interdépendance économique, et stabilité malgré la diversité."
          }
        },
        {
          title: "Le Vietnam : communisme, réforme doi moi et émergence",
          details: {
            date: "1975-présent",
            figures: "98 millions d'habitants, croissance 6-7% par an",
            context: "Le Vietnam constitue l'un des succès économiques les plus remarquables d'Asie, transformant un État communiste isolé en puissance émergente. Après la réunification de 1975 et les guerres sino-vietnamienne (1979) et cambodgienne, le Vietnam lance la réforme 'doi moi' (1986) : ouverture économique, privatisation partielle, et intégration internationale. Cette synthèse du communisme et du marché permet une croissance de 6-7% par an, sortant 30 millions de personnes de la pauvreté. Le Vietnam devient un hub manufacturier (textiles, électronique), attire 20 milliards de dollars d'IDE annuel, et adhère à l'OMC (2007). Cependant, le Parti communiste maintient le monopole politique, réprimant l'opposition. Le Vietnam navigue entre influences : partenaire économique chinois, allié stratégique américain, et rivalité régionale. Cette émergence révèle le modèle vietnamien : communisme adaptatif, nationalisme anti-chinois, et succès économique malgré l'autoritarisme. Le Vietnam incarne l'intégration réussie d'un pays communiste dans l'économie mondiale."
          }
        },
        {
          title: "L'Indonésie : archipel, islam et stabilité démocratique",
          details: {
            date: "1998-présent (démocratie)",
            figures: "270 millions d'habitants, 17 000 îles, 87% musulmans",
            context: "L'Indonésie constitue la plus grande démocratie musulmane du monde, gérant une diversité extrême dans un archipel de 17 000 îles. La chute de Suharto (1998) après 32 ans de dictature militaire inaugure une transition démocratique réussie : élections libres, multipartisme, et institutions consolidées. L'Indonésie est 87% musulmane mais maintient la laïcité, avec l'islam modéré comme norme sociale. Cette stabilité démocratique contraste avec les prédictions de chaos post-Suharto, grâce à des élites consensuelles et une économie dynamique (croissance 5% par an). Cependant, des défis persistent : corruption endémique, séparatismes (Papouasie, Aceh), et inégalités régionales. L'Indonésie affirme son leadership régional : ASEAN, G20, et diplomatie active (médiation Myanmar). Cette réussite révèle le modèle indonésien : démocratie islamique inclusive, unité nationale malgré la diversité ethnique (300 groupes), et émergence économique pacifique. L'Indonésie incarne l'espoir démocratique en Asie du Sud-Est."
          }
        },
        {
          title: "Singapour : city-État, économie et soft power asiatique",
          details: {
            date: "1965-présent",
            figures: "6 millions d'habitants, PIB/habitant 60 000 $, 1er port mondial",
            context: "Singapour constitue l'exemple ultime du développement asiatique réussi, transformant une cité-État pauvre en modèle économique et social. Indépendant en 1965 malgré le scepticisme international, Singapour adopte un capitalisme d'État autoritaire sous Lee Kuan Yew : corruption éradiquée, éducation d'excellence, et planification urbaine rigoureuse. Avec un PIB par habitant de 60 000 dollars (plus élevé que les États-Unis), Singapour est le 1er port mondial, hub financier asiatique, et leader technologique. Cette réussite repose sur le mériteocratie, la discipline sociale, et l'adaptation constante. Singapour exerce un soft power régional : modèle de gouvernance, forums diplomatiques (Sommet Asie-Europe), et influence culturelle. Cependant, des critiques émergent : autoritarisme (lois anti-LGBTQ+, contrôle média), dépendance aux importations, et inégalités sociales. Singapour révèle le paradoxe asiatique : prospérité économique et autoritarisme politique, excellence urbaine et conformisme social. Cette cité-État incarne l'ambition de perfection institutionnelle."
          }
        }
      ]
    },
    {
      id: 4,
      theme: "L'Asie centrale et le Moyen-Orient asiatique",
      sujets: [
        {
          title: "Les républiques d'Asie centrale post-soviétiques",
          details: {
            date: "1991-présent",
            figures: "5 pays : Kazakhstan, Kirghizistan, Ouzbékistan, Tadjikistan, Turkménistan",
            context: "Les républiques d'Asie centrale constituent l'héritage le plus instable de l'URSS, naviguant entre influences russe et chinoise dans un espace stratégique. Indépendantes en 1991, les cinq pays (Kazakhstan, Kirghizistan, Ouzbékistan, Tadjikistan, Turkménistan) héritent d'économies planifiées, de frontières artificielles soviétiques, et de sociétés multiethniques. Leur évolution suit des trajectoires contrastées : autoritarismes présidentiels, transitions économiques douloureuses (chute du PIB de 50%), et dépendance aux ressources naturelles. La Russie maintient une influence historique (bases militaires, OTSC), mais la Chine émerge comme partenaire économique dominant via la BRI (chemins de fer, pipelines). Des tensions persistent : conflits frontaliers (Kirghizistan-Ouzbékistan), islam radical (Tadjikistan), et transitions présidentielles chaotiques (Kazakhstan 2022). Ces pays révèlent les défis post-soviétiques : construction nationale dans des États artificiels, équilibre entre grandes puissances, et transition vers des économies diversifiées."
          }
        },
        {
          title: "Le Kazakhstan : ressources énergétiques et stabilité",
          details: {
            date: "1991-présent",
            figures: "19 millions d'habitants, 2e producteur de pétrole d'Asie centrale",
            context: "Le Kazakhstan constitue le modèle de stabilité relative en Asie centrale, combinant ressources énergétiques abondantes et autoritarisme modernisateur. Indépendant en 1991 sous Nursultan Nazarbayev, le pays développe ses hydrocarbures (2e producteur d'Asie centrale) et devient un hub énergétique eurasien. La stabilité repose sur un autoritarisme paternaliste : redistribution sociale, multiculturalisme (Kazakh, Russes, Ouïghours), et diplomatie équilibrée (multivectorielle). Cependant, la transition post-Nazarbayev (2019) révèle des fragilités : manifestations de 2022 contre la corruption, révélant des tensions sociales. Le Kazakhstan intègre l'OCS (Organisation de Shanghai) et développe des relations avec la Chine (BRI), tout en maintenant des liens russes (OTSC). Cette stabilité énergétique contraste avec l'instabilité régionale, mais dépend de la volatilité des prix du pétrole. Le Kazakhstan incarne l'équilibre délicat entre autoritarisme et développement économique en Eurasie."
          }
        },
        {
          title: "L'Ouzbékistan et le Tadjikistan : islam et autoritarismes",
          details: {
            date: "1991-présent",
            figures: "Ouzbékistan 34M habitants, Tadjikistan 10M, guerres civiles dans les deux pays",
            context: "L'Ouzbékistan et le Tadjikistan illustrent les défis de l'islam et de l'autoritarisme en Asie centrale, oscillant entre stabilité autoritaire et menaces islamistes. L'Ouzbékistan, sous Islam Karimov (1989-2016), impose un autoritarisme laïc répressif contre l'islam politique, évitant les dérives fondamentalistes. Le Tadjikistan subit une guerre civile (1992-1997) entre communistes et islamistes, laissant des cicatrices profondes. Les deux pays maintiennent des régimes autoritaires : contrôle social strict, répression des opposants, et économies étatiques. Cependant, des évolutions émergent : ouverture économique ouzbèke depuis 2016, reconstruction tadjike. Les défis incluent l'islam radical (Tadjikistan frontalier avec l'Afghanistan), les migrations économiques, et les tensions frontalières. Ces pays révèlent les paradoxes centre-asiatiques : autoritarismes comme garde-fous contre l'islamisme, mais freins au développement démocratique. Leur stabilité dépend de la gestion équilibrée entre répression et inclusion sociale."
          }
        },
        {
          title: "L'Iran : puissance régionale et sanctions internationales",
          details: {
            date: "1979-présent",
            figures: "85 millions d'habitants, 4e armée du Moyen-Orient",
            context: "L'Iran constitue une puissance régionale pivotale en Asie occidentale, combinant révolution islamique et ambitions nucléaires sous sanctions internationales. La révolution de 1979 établit une république islamique duale : président élu et Guide suprême (ayatollah Khamenei depuis 1989). L'Iran développe une influence régionale via des proxies (Hezbollah Liban, Houthis Yémen, milices Irak), contestant l'ordre sunnite (Arabie saoudite). Le programme nucléaire, malgré l'accord de 2015 (JCPOA), attire des sanctions massives des États-Unis et européennes, isolant économiquement Téhéran. Cependant, l'Iran maintient une économie résistante et une société dynamique (jeunesse urbaine). Les défis incluent les manifestations (2022 contre le régime), l'inflation élevée, et les tensions avec les voisins. L'Iran révèle les paradoxes moyen-orientaux : puissance chiite dans un monde sunnite, révolutionnaire mais pragmatique, sanctionné mais influent. Son avenir dépend de la levée des sanctions et de réformes internes."
          }
        }
      ]
    },
    {
      id: 5,
      theme: "L'Asie orientale : puissances établies et émergentes",
      sujets: [
        {
          title: "Le Japon : déflation, vieillissement et puissance technologique",
          details: {
            date: "1990s-présent",
            figures: "126 millions d'habitants, 3e économie mondiale, espérance de vie 84 ans",
            context: "Le Japon constitue une puissance technologique établie confrontée aux défis du vieillissement et de la stagnation économique. Après le 'miracle économique' (croissance 10% par an de 1950 à 1990), le Japon entre dans une période de déflation (depuis 1990) et de stagnation démographique. La population vieillit rapidement (28% de plus de 65 ans, espérance de vie 84 ans), créant des contraintes budgétaires (dette publique 250% du PIB). Cependant, le Japon maintient sa puissance technologique : Toyota, Sony, Nintendo, et recherche en robotique/IA. La diplomatie 'omnidirectionnelle' équilibre relations sino-américaines, malgré des tensions territoriales (Senkaku/Diaoyu). Les défis incluent la sécurité (menace nord-coréenne, débat sur la Constitution pacifiste) et l'immigration (société homogène résistante). Le Japon révèle les limites du modèle développemental asiatique : succès technologique mais blocages structurels, puissance économique mais contraintes démographiques. Cette puissance établie doit s'adapter à une Asie multipolaire."
          }
        },
        {
          title: "La Corée du Sud : miracle économique et division coréenne",
          details: {
            date: "1945-présent",
            figures: "52 millions d'habitants, 10e économie mondiale, division depuis 1953",
            context: "La Corée du Sud incarne le miracle économique asiatique, transformant un pays dévasté en puissance technologique globale malgré la division coréenne. Après la guerre de Corée (1950-1953), Séoul adopte un modèle étatiste : chaebol (conglomérats Samsung, Hyundai), éducation d'excellence, et industrialisation forcée. La croissance atteint 8% par an, créant la 10e économie mondiale. La division avec le Nord (armistice 1953, pas de traité de paix) structure la géopolitique : alliance américano-sud-coréenne (29 000 GI's), tensions permanentes, et course aux armements nucléaires. Séoul développe une diplomatie active (Sommet intercoréen 2018) tout en gérant les menaces nord-coréennes. Les défis incluent l'inégalité sociale, le vieillissement, et la dépendance aux exportations. La Corée du Sud révèle le succès du capitalisme étatiste asiatique, mais aussi les coûts de la division : militarisation (conscription obligatoire), unification incertaine, et vulnérabilités sécuritaires."
          }
        },
        {
          title: "Taïwan : démocratie, semi-conducteurs et tensions sino-taïwanaises",
          details: {
            date: "1949-présent",
            figures: "24 millions d'habitants, 80% des semi-conducteurs mondiaux",
            context: "Taïwan constitue l'une des démocraties les plus dynamiques d'Asie, mais confrontée aux tensions sino-taïwanaises existentielles. Indépendant de facto depuis 1949 (fuite du Kuomintang face aux communistes), Taïwan développe une démocratie parlementaire robuste malgré l'isolement diplomatique. Son miracle économique repose sur les semi-conducteurs : TSMC produit 80% des puces mondiales, base de l'économie numérique globale. Cette prospérité permet une société civile active et des institutions démocratiques solides. Cependant, la Chine considère Taïwan comme province rebelle, menaçant d'une invasion (loi anti-sécession 2005). Les tensions s'intensifient : survols militaires chinois quotidiens, pressions diplomatiques (seulement 14 alliés), et guerre hybride. Taïwan révèle le paradoxe asiatique : démocratie avancée dans un environnement autoritaire, puissance technologique dépendante de la stabilité régionale. Son avenir dépend de l'équilibre sino-américain et de sa résilience démocratique face aux menaces."
          }
        },
        {
          title: "La Mongolie : entre Russie et Chine",
          details: {
            date: "1990-présent (démocratie)",
            figures: "3 millions d'habitants, PIB par habitant 4 000 $, enclavé entre Russie et Chine",
            context: "La Mongolie constitue un État enclavé stratégique entre Russie et Chine, naviguant entre influences concurrentes dans une démocratie fragile. Après 70 ans de communisme soviétique, la révolution démocratique de 1990 instaure le multipartisme et l'économie de marché. Cependant, la transition est chaotique : hyperinflation, pauvreté rurale, et dépendance aux matières premières (cuivre, charbon). La Mongolie adopte une diplomatie 'troisième voisin' pour équilibrer Russie et Chine : adhésion à l'ONU, partenariats occidentaux, et intégration asiatique. Les contraintes géographiques (pas d'accès à la mer) et économiques (90% des exportations vers la Chine) créent des dépendances. Les défis incluent la corruption, les inégalités urbaines/rurales, et les tensions ethniques (Mongols, Kazakhs). Cette démocratie insulaire révèle les difficultés des petits États en Eurasie : souveraineté limitée, développement contraint, et équilibre délicat entre grandes puissances. La Mongolie incarne la résilience démocratique dans un environnement géopolitique hostile."
          }
        }
      ]
    },
    {
      id: 6,
      theme: "Enjeux maritimes et conflits territoriaux",
      sujets: [
        {
          title: "La mer de Chine méridionale : revendications et militarisation",
          details: {
            date: "Depuis 1940s",
            figures: "3 500 milliards $ de commerce annuel, 11 pays revendiquants",
            context: "La mer de Chine méridionale constitue l'un des conflits maritimes les plus explosifs d'Asie, cristallisant les tensions sino-américaines et régionales. Cette mer stratégique (3 500 milliards de dollars de commerce annuel) voit s'affronter 11 pays revendiquants autour des îles Paracels et Spratleys. La Chine revendique 90% de la mer via la 'ligne en neuf traits', construisant des îles artificielles militarisées (bases aériennes, ports) depuis 2014. Les Philippines, Vietnam, Malaisie, Brunei et Taïwan contestent ces prétentions, tandis que les États-Unis défendent la liberté de navigation (opérations FONOPS). Les tensions incluent des incidents navals réguliers et une course aux armements maritimes. Cette militarisation révèle l'importance stratégique : routes commerciales vitales (pétrole du Golfe), ressources halieutiques, et contrôle des détroits. Le conflit oppose visions juridiques (droit international vs souveraineté historique) et reflète la montée en puissance chinoise face à l'ordre américain établi."
          }
        },
        {
          title: "La mer de Chine orientale : Senkaku/Diaoyu et tensions sino-japonaises",
          details: {
            date: "Depuis 1970s",
            figures: "Îles Senkaku/Diaoyu : 7 km², gisements gaziers estimés",
            context: "La mer de Chine orientale cristallise les tensions sino-japonaises autour des îles Senkaku/Diaoyu, révélant les contentieux historiques persistants. Ces îles inhabitées de 7 km², contrôlées par le Japon depuis 1972, sont revendiquées par la Chine comme Diaoyu depuis des siècles. Les tensions s'intensifient depuis 2012 : incursions chinoises dans les eaux territoriales japonaises, survols militaires, et démonstrations navales. Le conflit oppose arguments historiques (Chine) et droit international (Japon), avec des implications économiques (gisements gaziers) et stratégiques (contrôle maritime). Le Japon renforce ses défenses (bases militaires, alliance américaine), tandis que la Chine militarise les îles. Ces tensions affectent la stabilité régionale : escalade possible accidentelle, impact sur le commerce (routes maritimes vitales), et remise en question des alliances asiatiques. Le conflit révèle les difficultés de gestion des contentieux territoriaux en Asie : poids de l'histoire, interdépendances économiques, et montée des nationalismes."
          }
        },
        {
          title: "Le détroit de Taïwan : équilibre des forces et statu quo",
          details: {
            date: "Depuis 1949",
            figures: "Détroit 180 km de large, 1 000 avions militaires chinois en 2023",
            context: "Le détroit de Taïwan constitue la ligne de fracture la plus dangereuse d'Asie, opposant démocratie taïwanaise et autoritarisme chinois dans un statu quo fragile. Depuis la retraite nationaliste à Taïwan (1949), le détroit sépare deux systèmes antagonistes : démocratie prospère (24 millions d'habitants) et régime communiste continental. La Chine considère Taïwan comme province rebelle, menaçant d'une unification par la force (loi anti-sécession 2005). Les tensions s'intensifient : survols militaires quotidiens (1 000 avions chinois en 2023), exercices navals, et pressions diplomatiques. Les États-Unis maintiennent l'équilibre via la loi Taïwan (1979) : ventes d'armes, présence navale informelle, et dissuasion nucléaire. Ce statu quo repose sur la dissuasion mutuelle : capacité taïwanaise de résistance asymétrique, crainte chinoise d'une guerre totale. Cependant, les risques d'escalade croissent avec l'assertivité chinoise et le populisme taïwanais. Le détroit révèle les dynamiques de puissance en Asie : équilibre des forces fragile, importance des perceptions, et risques de guerre accidentelle."
          }
        },
        {
          title: "L'Arctique asiatique : Russie, Chine et nouvelles routes maritimes",
          details: {
            date: "Depuis 2000s",
            figures: "Route maritime du Nord : 6 000 km, fonte des glaces 13% par décennie",
            context: "L'Arctique asiatique devient un nouvel espace de compétition géopolitique, où Russie et Chine développent des stratégies maritimes face au changement climatique. La Russie, côtière arctique majeure, modernise sa Route maritime du Nord (6 000 km) avec des brise-glaces nucléaires et des bases militaires, sécurisant ses ressources énergétiques (gaz Yamal). La fonte des glaces (13% par décennie) ouvre de nouvelles routes commerciales, réduisant de 40% la distance Europe-Asie. La Chine, non-arctique, investit massivement : observatoire sur l'archipel du Svalbard norvégien, partenariat russe, et présence navale croissante. Les enjeux incluent ressources minières, biodiversité, et souveraineté (plateau continental étendu). Les tensions émergent : militarisation russe, intérêts chinois contestés par les Occidentaux, et impacts environnementaux. L'Arctique asiatique révèle l'extension des rivalités sino-russes vers le Grand Nord : coopération énergétique vs compétition stratégique, exploitation économique vs protection environnementale. Cette région incarne les transformations géopolitiques induites par le climat."
          }
        }
      ]
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSujet, setSelectedSujet] = useState(null);

  const openModal = (sujet) => {
    setSelectedSujet(sujet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSujet(null);
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
            <Link to="/formation/geopolitique/deuxieme-annee" className="hover:text-gray-900 transition-colors">
              Deuxième Année
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique/asie" className="hover:text-gray-900 transition-colors">
              Asie
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Études de cas</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-4 bg-green-600 rounded-full">
              <List className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Études de cas - Asie
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Liste complète des études de cas et sujets de dissertation pour l'Asie.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/asie" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/asie/chronologie" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/asie/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                <Target className="w-4 h-4" />
                Flash cards
              </Link>
            </div>
          </div>
        </div>

        {/* Liste des sujets par thème */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {sujets.map((theme, themeIndex) => (
            <Card key={theme.id} className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {themeIndex + 1}
                  </div>
                  {theme.theme}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {theme.sujets.map((sujet, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-green-200 hover:shadow-md transition-shadow cursor-pointer"
                         onClick={() => openModal(sujet)}>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">
                            {sujet.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                            Sujet {themeIndex + 1}.{index + 1}
                          </Badge>
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
        <Card className="mt-12 bg-gradient-to-r from-green-100 to-emerald-100 border-green-300">
          <CardContent className="p-8 text-center">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">{sujets.length}</div>
                <div className="text-green-700">Thèmes principaux</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">
                  {sujets.reduce((total, theme) => total + theme.sujets.length, 0)}
                </div>
                <div className="text-green-700">Études de cas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">100%</div>
                <div className="text-green-700">Couverture du programme</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Note méthodologique */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-blue-800 mb-4">
              <Lightbulb className="h-5 w-5" />
              <h3 className="font-semibold">Conseils méthodologiques</h3>
            </div>
            <div className="text-blue-700 space-y-2">
              <p>• <strong>Comprendre la multipolarité :</strong> L'Asie est le continent le plus peuplé avec des puissances très diverses.</p>
              <p>• <strong>Maîtriser les cartes :</strong> Frontières terrestres et maritimes, mégalopoles, ressources sont essentiels.</p>
              <p>• <strong>Analyser les rivalités :</strong> Chine/États-Unis, Inde/Pakistan, Corée du Nord/Corée du Sud sont des conflits majeurs.</p>
              <p>• <strong>Étudier les intégrations :</strong> ASEAN, Shanghai Cooperation Organization montrent les dynamiques régionales.</p>
            </div>
          </CardContent>
        </Card>

        {/* Modal for Case Study Details */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-gray-900">{selectedSujet?.title}</DialogTitle>
              <DialogDescription className="text-gray-600 mt-2">
                Détails de l'étude de cas
              </DialogDescription>
            </DialogHeader>
            {selectedSujet && (
              <div className="mt-6 space-y-4 text-lg text-gray-800">
                <p><strong>Période:</strong> {selectedSujet.details.date}</p>
                <p><strong>Chiffres clés:</strong> {selectedSujet.details.figures}</p>
                <p><strong>Contexte:</strong> {selectedSujet.details.context}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AsieSujetsPage;

