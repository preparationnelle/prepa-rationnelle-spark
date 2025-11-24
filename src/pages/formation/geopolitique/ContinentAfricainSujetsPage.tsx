import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, MapPin, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle, List } from 'lucide-react';

const ContinentAfricainSujetsPage = () => {
  const sujets = [
    {
      id: 1,
      theme: "Héritages coloniaux et décolonisation",
      sujets: [
        {
          title: "Les partages coloniaux de Berlin (1884-1885) et leurs conséquences actuelles",
          details: {
            date: "1884-1885",
            figures: "Conférence de Berlin, partage de 90% du continent africain",
            context: "La Conférence de Berlin de 1884-1885 constitue l'un des événements fondateurs de la géopolitique africaine moderne, marquant le début officiel du partage colonial du continent. Réunissant les grandes puissances européennes (France, Royaume-Uni, Allemagne, Belgique, Portugal, Italie), cette conférence établit les règles du jeu colonial : principe de l'occupation effective, liberté de navigation sur le Congo et le Niger, et reconnaissance mutuelle des sphères d'influence. En quelques années, 90% du continent africain fut partagé entre les puissances européennes, ignorant complètement les réalités ethniques, culturelles et politiques locales. Les conséquences actuelles sont dramatiques : frontières artificielles qui traversent des groupes ethniques, conflits frontaliers persistants (Érythrée-Éthiopie, Soudan du Sud), États multiethniques fragiles, et difficultés d'intégration régionale. Cette conférence pose également la question de la responsabilité historique des anciennes puissances coloniales dans les instabilités contemporaines du continent africain."
          }
        },
        {
          title: "La décolonisation africaine : stratégies et acteurs (1950-1970)",
          details: {
            date: "1950-1970",
            figures: "17 pays indépendants en 1960, 54 États aujourd'hui",
            context: "La décolonisation africaine constitue l'une des transformations géopolitiques les plus rapides et massives du XXe siècle, passant de la domination coloniale à l'indépendance de 54 États souverains. Le processus s'accélère après la Seconde Guerre mondiale avec l'affaiblissement des métropoles européennes et l'émergence du panafricanisme. Les stratégies varient selon les contextes : luttes armées au Kenya et en Algérie, négociations pacifiques au Ghana et au Maroc, pressions internationales dans le cas du Congo belge. Les acteurs clés incluent les leaders nationalistes (Nkrumah, Kenyatta, Senghor), les mouvements de libération (FLN, ANC), et les organisations internationales (ONU). Cependant, cette décolonisation précipitée laisse un héritage ambivalent : États-nations fragiles, économies dépendantes, et tensions internes persistantes. L'année 1960, dite 'année africaine' avec 17 indépendances, marque l'apogée du mouvement, mais aussi le début des défis postcoloniaux qui structurent encore la géopolitique africaine contemporaine."
          }
        },
        {
          title: "Les frontières artificielles et les conflits frontaliers",
          details: {
            date: "Depuis 1880s",
            figures: "108 000 km de frontières terrestres, 54 États",
            context: "Les frontières africaines constituent l'un des legs les plus problématiques de la colonisation, créant des lignes de fracture qui structurent encore les conflits contemporains du continent. Dessinées arbitrairement par les puissances européennes lors de la Conférence de Berlin (1884-1885) et des accords subséquents, ces frontières ignorent les réalités ethniques, linguistiques et culturelles locales. Elles traversent souvent des groupes ethniques (Mossi au Burkina Faso et Ghana, Maasai au Kenya et Tanzanie), créant des minorités transfrontalières et des revendications identitaires. Les conflits frontaliers sont nombreux : guerre Érythrée-Éthiopie (1998-2000), tensions entre Soudan et Soudan du Sud, disputes sahariennes (Maroc-Sahara occidental). L'Union africaine tente de résoudre ces problèmes par l'Accord de 1964 sur l'intangibilité des frontières, mais les revendications persistent. Ces frontières artificielles constituent un frein majeur à l'intégration régionale africaine et à la stabilité continentale, révélant la persistance des héritages coloniaux dans la géopolitique actuelle."
          }
        },
        {
          title: "L'impact de la colonisation sur les structures étatiques africaines",
          details: {
            date: "1880s-1960s",
            figures: "54 États postcoloniaux, 1 400 groupes ethniques",
            context: "La colonisation a profondément remodelé les structures étatiques africaines, créant des États-nations artificiels qui peinent encore aujourd'hui à asseoir leur légitimité et leur efficacité. Avant la colonisation, l'Afrique connaissait diverses formes d'organisation politique : empires (Mali, Ashanti), royaumes décentralisés, sociétés segmentaires. Les colonisateurs imposèrent un modèle étatique européen uniforme, centralisé et bureaucratique, ignorant les réalités sociopolitiques locales. Cette imposition créa des États multiethniques fragiles, où les frontières coloniales regroupaient des populations hétérogènes sans cohésion nationale. L'impact se manifeste dans plusieurs domaines : faiblesse institutionnelle, clientélisme politique, corruption, et difficultés de redistribution des ressources. Les indépendances accélérèrent ces problèmes, avec des élites postcoloniales souvent issues des administrations coloniales. Aujourd'hui, de nombreux États africains peinent à assurer la sécurité, la justice sociale et le développement, révélant la persistance de ces structures héritées qui entravent l'émergence d'États véritablement africains et légitimes."
          }
        }
      ]
    },
    {
      id: 2,
      theme: "Organisations régionales africaines",
      sujets: [
        {
          title: "L'Union africaine : évolution et défis institutionnels",
          details: {
            date: "Depuis 2001 (remplace l'OUA)",
            figures: "55 États membres, Commission de 8 commissaires",
            context: "L'Union africaine (UA) constitue l'organisation panafricaine la plus ambitieuse depuis sa création en 2001, remplaçant l'Organisation de l'unité africaine (OUA) fondée en 1963. Issue du contexte post-Guerre Froide et des aspirations à une plus grande intégration continentale, l'UA s'inspire du modèle européen avec des institutions similaires : Commission exécutive, Parlement panafricain, Cour de justice. Ses objectifs principaux incluent l'unité africaine, la paix et la sécurité, le développement économique et la gouvernance démocratique. Cependant, l'UA fait face à des défis majeurs : dépendance financière des États membres et des partenaires extérieurs, faible capacité opérationnelle, divisions internes entre pays francophones et anglophones, et concurrence avec les organisations régionales sous-régionales. La réforme institutionnelle de 2019 vise à renforcer l'intégration avec la Zone de libre-échange continentale africaine (ZLECA), mais les résistances souverainistes persistent. L'UA incarne l'ambition d'unité africaine mais révèle aussi les difficultés d'une intégration continentale dans un contexte de diversité extrême."
          }
        },
        {
          title: "La Communauté économique des États d'Afrique de l'Ouest (CEDEAO)",
          details: {
            date: "Depuis 1975",
            figures: "15 États membres, 400 millions d'habitants",
            context: "La Communauté économique des États d'Afrique de l'Ouest (CEDEAO) constitue l'organisation régionale la plus intégrée d'Afrique, regroupant 15 pays d'Afrique de l'Ouest et centrale avec plus de 400 millions d'habitants. Créée en 1975 pour promouvoir l'intégration économique, elle s'est progressivement transformée en organisation politico-économique complète avec des compétences étendues : union douanière, monnaie commune (ECO), libre circulation des personnes et des biens. La CEDEAO s'est particulièrement illustrée dans la gestion des crises : interventions militaires au Liberia, Sierra Leone, Guinée-Bissau, et sanctions contre les coups d'État au Niger et au Mali. Ses succès incluent la prévention de conflits et la promotion du développement régional. Cependant, des défis persistent : disparités économiques entre pays côtiers et enclavés, lenteur des réformes institutionnelles, et tensions entre intégration économique et souveraineté nationale. La CEDEAO représente un modèle d'intégration régionale africaine efficace, mais confronté aux réalités géopolitiques complexes de l'Afrique de l'Ouest."
          }
        },
        {
          title: "La Communauté de développement de l'Afrique australe (SADC)",
          details: {
            date: "Depuis 1992",
            figures: "16 États membres, 300 millions d'habitants",
            context: "La Communauté de développement de l'Afrique australe (SADC) constitue l'organisation régionale dominante en Afrique australe, regroupant 16 États membres et plus de 300 millions d'habitants. Issue de la transformation de la Communauté de développement de l'Afrique australe (constituée en 1980) en 1992, la SADC a pour objectifs l'intégration économique, le développement durable et la paix régionale. Elle a particulièrement réussi dans la gestion des conflits post-apartheid, facilitant les négociations en Afrique du Sud et en Namibie. La SADC a établi une zone de libre-échange en 2008 et progresse vers une union douanière. Cependant, elle fait face à des défis majeurs : domination économique de l'Afrique du Sud (représentant 70% du PIB régional), conflits internes (Zimbabwe, Madagascar), et lenteur des réformes institutionnelles. La région est également marquée par des tensions géopolitiques : présence chinoise croissante, rivalités entre Afrique du Sud et Angola, et enjeux énergétiques (bassin du Congo). La SADC incarne les ambitions d'intégration régionale mais révèle aussi les difficultés d'équilibrer les intérêts des grands et des petits États."
          }
        },
        {
          title: "Les mécanismes de paix et de sécurité africains",
          details: {
            date: "Depuis 2002",
            figures: "Conseil de paix et sécurité, forces de maintien de paix",
            context: "Les mécanismes de paix et de sécurité africains constituent l'une des innovations majeures de l'Union africaine, marquant la volonté du continent de prendre en charge sa propre sécurité. Créé en 2002, le Conseil de paix et de sécurité (CPS) est l'organe décisionnel principal, composé de 15 membres élus pour des mandats de 2-3 ans. Il peut autoriser des interventions militaires, imposer des sanctions, et coordonner les opérations de maintien de la paix. L'Architecture africaine de paix et de sécurité inclut également des forces régionales (MICOPAX en Afrique centrale, AMISOM en Somalie) et des partenariats avec l'ONU. Ces mécanismes ont permis des succès notables : résolution de crises au Burundi, Somalie, et Soudan. Cependant, des défis persistent : manque de capacités opérationnelles, dépendance logistique des partenaires extérieurs, lenteur des décisions, et critiques sur l'efficacité des interventions. L'Afrique peine encore à financer pleinement ses opérations de paix, révélant les limites de l'autonomie stratégique continentale face aux ambitions des grandes puissances extérieures."
          }
        }
      ]
    },
    {
      id: 3,
      theme: "Défis démographiques et urbains",
      sujets: [
        {
          title: "La transition démographique et le dividende démographique africain",
          details: {
            date: "Depuis 1950s",
            figures: "1,4 milliard d'habitants, 2,5 milliards projetés en 2050",
            context: "La transition démographique africaine constitue l'un des phénomènes démographiques majeurs du XXIe siècle, avec des implications géopolitiques profondes. Depuis les années 1950, l'Afrique est passée d'une démographie traditionnelle (fécondité élevée, mortalité élevée) à une transition accélérée : baisse de la mortalité infantile grâce aux progrès médicaux, maintien d'une fécondité encore élevée dans certaines régions. Le continent compte aujourd'hui 1,4 milliard d'habitants et devrait atteindre 2,5 milliards en 2050, représentant 25% de la population mondiale. Cette 'bulle démographique' offre un 'dividende démographique' potentiel : main-d'œuvre abondante pour le développement économique, innovation et dynamisme social. Cependant, des défis majeurs subsistent : emplois insuffisants pour absorber la jeunesse, pressions sur les ressources (eau, nourriture), et risques sécuritaires liés à la marginalisation urbaine. La réussite de ce dividende dépendra des politiques d'éducation, de santé et d'emploi, déterminant l'avenir géopolitique du continent africain."
          }
        },
        {
          title: "Les mégapoles africaines : Lagos, Kinshasa, Nairobi",
          details: {
            date: "Depuis 1960s",
            figures: "Lagos 25M, Kinshasa 15M, Nairobi 5M d'habitants",
            context: "Les mégapoles africaines incarnent la révolution urbaine du continent, concentrant les opportunités économiques mais aussi les défis majeurs du développement. Lagos (Nigeria) est devenue la plus grande ville d'Afrique avec 25 millions d'habitants, centre économique majeur du golfe de Guinée avec un PIB supérieur à celui du Kenya. Kinshasa (RDC) compte 15 millions d'habitants et constitue le principal pôle urbain d'Afrique centrale, mais souffre d'infrastructures défaillantes et d'instabilité politique. Nairobi (Kenya) avec 5 millions d'habitants représente le 'Silicon Savannah', hub technologique et financier d'Afrique de l'Est. Ces mégapoles connaissent une croissance explosive : Lagos gagne 1 million d'habitants par an, Nairobi attire les investissements étrangers. Cependant, elles font face à des défis critiques : bidonvilles (70% de Lagos), pénuries énergétiques, pollution, criminalité organisée et inégalités extrêmes. Ces villes incarnent la dualité africaine : moteurs de croissance économique et foyers d'instabilité sociale, déterminant l'avenir géopolitique du continent."
          }
        },
        {
          title: "Les migrations internes et l'urbanisation accélérée",
          details: {
            date: "Depuis 1960s",
            figures: "55% urbains en 2020, 60% projetés en 2050",
            context: "L'urbanisation accélérée constitue l'une des transformations les plus spectaculaires de l'Afrique contemporaine, redessinant le paysage démographique et géopolitique du continent. En 1960, seulement 15% des Africains vivaient en ville ; en 2020, ce taux atteint 55% et devrait dépasser 60% en 2050. Cette urbanisation est principalement interne, avec des migrations massives des campagnes vers les villes : jeunes ruraux attirés par les emplois, éducation et services urbains. Les conséquences sont multiples : explosion des bidonvilles (slums), pressions sur les infrastructures (eau, transport, logement), émergence de classes moyennes urbaines, mais aussi tensions sociales et insécurité. L'Afrique subsaharienne urbanise plus vite que l'Asie, mais avec moins de capacités d'absorption. Les mégapoles comme Lagos, Dakar ou Addis-Abeba concentrent les investissements mais aussi les risques : émeutes de la faim, mouvements sociaux, et criminalité. Cette urbanisation accélérée offre des opportunités économiques (marchés intérieurs, innovation) mais nécessite des politiques urbaines ambitieuses pour éviter les 'villes-bidonvilles' et les instabilités sociales."
          }
        },
        {
          title: "La jeunesse africaine : opportunités et défis sécuritaires",
          details: {
            date: "Depuis 1990s",
            figures: "70% de la population africaine a moins de 30 ans",
            context: "La jeunesse africaine constitue l'acteur démographique majeur du continent, représentant 70% de la population totale et déterminant son avenir géopolitique. Avec une moyenne d'âge de 19 ans (contre 40 ans en Europe), cette génération est confrontée à des opportunités sans précédent : révolution numérique, croissance économique, émergence d'une classe moyenne, et diaspora dynamique contribuant au développement. Les succès sont nombreux : entrepreneurs tech (start-ups kenyanes), champions sportifs, leaders politiques jeunes (présidents du Rwanda et du Ghana). Cependant, des défis sécuritaires majeurs subsistent : chômage massif (50-60% chez les jeunes urbains), radicalisation dans les zones de conflit (Sahel, Somalie), migrations irrégulières vers l'Europe, et vulnérabilité aux recrutements par les groupes armés. La jeunesse africaine est à la fois force motrice du développement et source potentielle d'instabilité, selon que les États réussiront à investir dans l'éducation, l'emploi et l'inclusion sociale. L'avenir du continent dépend de cette génération, qui pourrait être moteur de croissance ou ferment de conflits."
          }
        }
      ]
    },
    {
      id: 4,
      theme: "Ressources naturelles et développement",
      sujets: [
        {
          title: "L'exploitation des ressources minières : cobalt, uranium, pétrole",
          details: {
            date: "Depuis 1950s",
            figures: "Afrique détient 90% du cobalt mondial, 50% de l'or",
            context: "L'exploitation des ressources minières constitue l'un des piliers de l'économie africaine mais aussi une source majeure de vulnérabilités géopolitiques. L'Afrique détient 90% des réserves mondiales de cobalt (essentiel pour les batteries électriques), 50% de l'or, 98% du chrome, et des quantités significatives d'uranium et de pétrole. Cette richesse attire les investissements étrangers : multinationales minières, fonds souverains, et puissances émergentes. Cependant, l'exploitation révèle des paradoxes : recettes fiscales importantes pour certains États (Nigéria, Angola) mais dépendance excessive aux matières premières, volatilité des prix, et pillage des ressources par les acteurs armés (coltan en RDC). Les défis incluent la corruption, les impacts environnementaux, et la faible transformation locale des ressources. L'Afrique peine à tirer pleinement parti de ses richesses minérales, restant dépendante des importations alimentaires malgré ses exportations massives de matières premières. Cette exploitation révèle les tensions entre développement économique et souveraineté nationale, entre attractivité des investissements et protection des intérêts africains."
          }
        },
        {
          title: "La malédiction des ressources et les conflits ressources",
          details: {
            date: "Depuis 1990s",
            figures: "60% des guerres civiles liées aux ressources",
            context: "La 'malédiction des ressources' constitue l'un des phénomènes géopolitiques les plus destructeurs en Afrique, expliquant de nombreux conflits contemporains du continent. Selon les estimations, 60% des guerres civiles africaines depuis les années 1990 sont liées à la compétition pour les ressources naturelles : diamants en Sierra Leone, coltan en RDC, pétrole au Soudan du Sud, or au Mali. Cette malédiction se manifeste par plusieurs mécanismes : corruption et détournement des revenus, financiarisation des conflits par les groupes armés, affaiblissement des institutions étatiques, et dépendance économique excessive. Les conséquences sont dramatiques : États faillis (Somalie, République centrafricaine), millions de déplacés, et cycles de violence interminables. L'Afrique détient paradoxalement les plus grandes richesses minières tout en étant le continent le plus pauvre. Les solutions incluent la transparence (Initiative pour la transparence dans les industries extractives), la certification des minerais, et le développement d'économies diversifiées. Cette malédiction révèle les liens étroits entre ressources naturelles, conflits et sous-développement en Afrique."
          }
        },
        {
          title: "L'agriculture africaine face aux changements climatiques",
          details: {
            date: "Depuis 1970s",
            figures: "Agriculture représente 25% du PIB africain, 60% de l'emploi",
            context: "L'agriculture africaine constitue le secteur économique vital du continent mais fait face aux défis majeurs des changements climatiques, menaçant la sécurité alimentaire de 1,4 milliard d'habitants. Représentant 25% du PIB et employant 60% de la population active, l'agriculture africaine est majoritairement pluviale et vulnérable aux aléas climatiques : sécheresses au Sahel, inondations en Afrique de l'Est, cyclones à Madagascar. Les changements climatiques aggravent ces vulnérabilités : augmentation des températures de 1,5°C depuis 1970, désertification accélérée, et modification des régimes pluviaux. Les conséquences sont dramatiques : baisse des rendements agricoles (maïs, sorgho), insécurité alimentaire chronique, migrations climatiques massives, et conflits pour les ressources (eau, pâturages). Cependant, l'Afrique développe des stratégies d'adaptation : semences résistantes, agroforesterie, et politiques de résilience. Les investissements étrangers (agrobusiness) offrent des opportunités mais créent des tensions sur la souveraineté alimentaire. L'agriculture africaine incarne les défis du développement durable face au réchauffement climatique global."
          }
        },
        {
          title: "Les investissements chinois en Afrique : néocolonialisme ou partenariat ?",
          details: {
            date: "Depuis 2000s",
            figures: "200 milliards $ d'investissements chinois depuis 2000",
            context: "Les investissements chinois en Afrique constituent l'une des transformations géopolitiques majeures du continent depuis les années 2000, dépassant les 200 milliards de dollars et redessinant les équilibres mondiaux. La stratégie chinoise s'articule autour des 'Nouvelles Routes de la Soie' avec des infrastructures massives : chemins de fer (Tanzanie), ports (Tanzanie, Djibouti), routes, et bâtiments publics. Les secteurs privilégiés incluent les mines (cobalt en RDC, pétrole en Angola), l'agriculture, et les télécommunications. Cette présence génère des débats : pour certains, c'est un néocolonialisme moderne avec endettement excessif (piège de la dette), main-d'œuvre chinoise, et extraction des ressources sans développement local. Pour d'autres, c'est un partenariat win-win offrant infrastructures vitales, emplois, et transferts technologiques. Les conséquences géopolitiques sont majeures : diversification des partenariats africains, tensions avec les anciennes puissances coloniales (France), et émergence d'une sphère d'influence chinoise. L'Afrique navigue entre opportunités économiques et risques de dépendance, révélant les ambivalences de la multipolarité contemporaine."
          }
        }
      ]
    },
    {
      id: 5,
      theme: "Conflits et fragilités étatiques",
      sujets: [
        {
          title: "Les États faillis : Somalie, République centrafricaine, Soudan du Sud",
          details: {
            date: "Depuis 1990s",
            figures: "Somalie sans État central depuis 1991, RCA 4,4M habitants",
            context: "Les États faillis constituent l'une des expressions les plus dramatiques des fragilités africaines, où l'absence ou la faiblesse des institutions étatiques crée des zones de non-droit propices aux conflits et à l'ingérence étrangère. La Somalie, sans gouvernement central effectif depuis 1991, est contrôlée par des clans et des groupes armés (Al-Shabaab), malgré les efforts de l'Union africaine (AMISOM). La République centrafricaine, avec ses 4,4 millions d'habitants, connaît une instabilité chronique depuis 2013, alternant coups d'État et guerres civiles entre groupes ethniques et religieux. Le Soudan du Sud, indépendant depuis 2011, est ravagé par une guerre civile depuis 2013 opposant le président Salva Kiir et l'ex-vice-président Riek Machar, causant famine et déplacements massifs. Ces États faillis révèlent les limites de l'État-nation postcolonial en Afrique : frontières artificielles, ethnies divisées, économies dépendantes. Les conséquences géopolitiques sont majeures : sanctuaires terroristes, trafics illicites, migrations forcées, et interventions étrangères. La reconstruction de ces États dépend d'une combinaison d'efforts régionaux et internationaux, mais les résistances internes persistent."
          }
        },
        {
          title: "Le terrorisme islamiste : Boko Haram, Al-Shabaab, AQMI",
          details: {
            date: "Depuis 2000s",
            figures: "Boko Haram responsable de 40 000 morts au Nigeria",
            context: "Le terrorisme islamiste constitue l'une des menaces sécuritaires majeures en Afrique, structurant la géopolitique du continent depuis les années 2000. Boko Haram au Nigeria, affilié à Daech depuis 2015, a causé plus de 40 000 morts et contrôlé temporairement un territoire équivalent à la Belgique. Al-Shabaab en Somalie, lié à Al-Qaïda, mène des attentats suicides et contrôle des zones rurales malgré l'intervention kényane et éthiopienne. AQMI (Al-Qaïda au Maghreb islamique) opère dans le Sahel, du Mali au Niger, exploitant les vides sécuritaires post-Guerre Froide. Ces groupes prospèrent sur la pauvreté, la corruption étatique, et les tensions ethniques, recrutant parmi les jeunes marginalisés. Les conséquences sont dramatiques : déplacements massifs (2,5 millions au Sahel), économies dévastées, et extension régionale du terrorisme. Les réponses incluent les opérations militaires (Barkhane française, G5 Sahel) mais aussi les approches de développement. Le terrorisme islamiste révèle les interconnections entre fragilité étatique, radicalisation religieuse et géopolitique mondiale, avec des ramifications au Moyen-Orient et en Europe."
          }
        },
        {
          title: "Les guerres civiles et les interventions étrangères",
          details: {
            date: "Depuis 1960s",
            figures: "Plus de 20 guerres civiles depuis les indépendances",
            context: "Les guerres civiles constituent un trait marquant de la géopolitique africaine postcoloniale, avec plus de 20 conflits majeurs depuis les indépendances des années 1960. Ces guerres révèlent souvent les fractures internes des États multiethniques : compétition pour le pouvoir (Rwanda 1994, Côte d'Ivoire 2011), luttes pour les ressources (RDC, Soudan du Sud), ou tensions identitaires (Burundi, République centrafricaine). Les interventions étrangères sont fréquentes : opérations de maintien de la paix de l'ONU (MINUSCA en RCA, MONUSCO en RDC), interventions régionales (ECOWAS au Liberia), ou interventions unilatérales (France au Mali, Rwanda au Zaïre). Ces interventions ont des motivations mixtes : humanitaires, géopolitiques (lutte antiterroriste), ou économiques (ressources). Cependant, elles créent des dilemmes : souveraineté nationale vs responsabilité de protéger, efficacité opérationnelle vs respect des processus locaux. Les guerres civiles africaines montrent la complexité des conflits contemporains, mêlant dimensions internes (ethniques, économiques) et externes (ingérences étrangères), tout en révélant les limites des interventions internationales dans un contexte de multipolarité croissante."
          }
        },
        {
          title: "La démocratisation africaine : avancées et reculs",
          details: {
            date: "Depuis 1990s",
            figures: "50 pays ont tenu des élections depuis 1990, 30 démocraties",
            context: "La démocratisation africaine constitue l'une des évolutions géopolitiques majeures du continent depuis les années 1990, marquant la transition progressive de régimes autoritaires vers des systèmes démocratiques. Plus de 50 pays ont organisé des élections multipartites depuis 1990, avec environ 30 considérés comme des démocraties selon les indices internationaux. Les avancées sont notables : alternances pacifiques (Ghana, Botswana), sociétés civiles dynamiques, et intégration régionale démocratique. Cependant, des reculs préoccupants subsistent : coups d'État (Mali 2020, Guinée 2021, Soudan 2021), élections contestées (Côte d'Ivoire 2010, Kenya 2017), et dérives autoritaires (Rwanda, Zimbabwe). Les défis incluent la faiblesse institutionnelle, la corruption, et les pressions économiques qui favorisent le clientélisme. La démocratisation africaine révèle les tensions entre aspirations populaires et contraintes structurelles, entre progrès institutionnels et réalités socio-économiques. L'avenir dépendra de la capacité des États à consolider les institutions démocratiques tout en répondant aux demandes de développement et de sécurité de leurs populations."
          }
        }
      ]
    },
    {
      id: 6,
      theme: "Géopolitique des grandes puissances",
      sujets: [
        {
          title: "La présence française en Afrique : bases militaires et influence",
          details: {
            date: "Depuis 1960s",
            figures: "5 000 militaires français déployés, 9 bases permanentes",
            context: "La présence française en Afrique constitue l'un des héritages coloniaux les plus durables, structurant la géopolitique du continent depuis les indépendances des années 1960. Avec 5 000 militaires déployés et 9 bases permanentes (Djibouti, Sénégal, Gabon, Côte d'Ivoire, etc.), la France maintient une influence significative dans ses anciennes colonies. La stratégie 'Françafrique' historique s'est modernisée avec l'opération Barkhane (2013-2022) contre le terrorisme au Sahel, et la création du G5 Sahel avec les pays locaux. Les motivations sont multiples : sécurité nationale (flux migratoires, terrorisme), intérêts économiques (ressources minières, marchés), et influence géopolitique. Cependant, cette présence génère des tensions : accusations de néocolonialisme, contestations populaires (Mali 2022), et concurrence avec d'autres puissances (Russie, Chine). La France peine à adapter son modèle traditionnel aux aspirations souverainistes africaines, révélant les défis de la décolonisation inachevée et les mutations de la multipolarité mondiale."
          }
        },
        {
          title: "La stratégie chinoise : nouvelles routes de la soie africaines",
          details: {
            date: "Depuis 2000s",
            figures: "200 milliards $ d'investissements, 10 000 km de chemins de fer",
            context: "La stratégie chinoise en Afrique constitue l'une des transformations géopolitiques majeures du continent depuis les années 2000, avec plus de 200 milliards de dollars d'investissements cumulés. Les 'Nouvelles Routes de la Soie' africaines s'articulent autour d'infrastructures massives : 10 000 km de chemins de fer (Tanzanie, Kenya, Éthiopie), ports en eau profonde (Tanzanie, Djibouti), routes, et bâtiments publics. La Chine privilégie les partenariats Sud-Sud, offrant des financements sans conditions politiques et une main-d'œuvre chinoise. Les secteurs clés incluent les mines (cobalt en RDC, pétrole en Angola), l'agriculture, et les télécommunications. Cette stratégie crée des dépendances : dette excessive pour certains pays, échanges déséquilibrés, et transferts technologiques limités. Géopolitiquement, elle diversifie les partenariats africains, concurrence les anciennes puissances coloniales, et crée une sphère d'influence chinoise. Les Africains naviguent entre opportunités économiques et risques de dépendance, révélant les ambivalences de la montée en puissance chinoise sur le continent."
          }
        },
        {
          title: "Les États-Unis et l'Afrique : aide au développement et lutte antiterroriste",
          details: {
            date: "Depuis 1990s",
            figures: "8 milliards $ d'aide annuelle, AGOA depuis 2000",
            context: "La politique américaine en Afrique s'articule autour de deux piliers principaux : l'aide au développement et la lutte antiterroriste, structurant la présence des États-Unis sur le continent depuis les années 1990. L'African Growth and Opportunity Act (AGOA) de 2000 offre un accès préférentiel au marché américain pour les produits africains, favorisant le développement économique. L'aide américaine atteint 8 milliards de dollars annuels, ciblant la santé (lutte contre le VIH/sida), l'éducation, et la gouvernance démocratique. La lutte antiterroriste, intensifiée après le 11 septembre 2001, se concentre sur le Sahel et la Corne de l'Afrique avec des opérations spéciales, des partenariats militaires (FLINTLOCK), et des drones. Cependant, la présence américaine reste limitée comparée à la France ou la Chine, avec moins de bases permanentes et d'investissements directs. Les défis incluent la concurrence économique chinoise, les critiques sur l'ingérence, et les priorités changeantes (retrait de l'administration Trump). Les États-Unis cherchent à équilibrer intérêts sécuritaires et développement durable, mais peinent à contrebalancer l'influence croissante des puissances émergentes."
          }
        },
        {
          title: "La Russie en Afrique : mercenaires et contrats miniers",
          details: {
            date: "Depuis 2010s",
            figures: "Plus de 2 000 mercenaires déployés en Afrique centrale",
            context: "Le retour russe en Afrique constitue l'une des évolutions géopolitiques récentes du continent, marqué par l'utilisation de mercenaires et des contrats miniers stratégiques depuis les années 2010. Le Groupe Wagner, société militaire privée liée au Kremlin, a déployé plus de 2 000 mercenaires en Afrique centrale : République centrafricaine (protection du président), Mali (contre les djihadistes), et Libye. Cette présence s'accompagne de contrats miniers lucratifs : or en République centrafricaine, diamants en Angola, uranium au Niger. La stratégie russe repose sur la realpolitik : fourniture d'armes, entraînements militaires, et exploitation des ressources en échange de soutien diplomatique. Elle concurrence directement les anciennes puissances coloniales (France) et offre une alternative aux conditionnalités occidentales. Cependant, elle génère des controverses : violations des droits de l'homme, corruption, et dépendance sécuritaire. Le retour russe révèle les opportunités offertes par la multipolarité aux États africains, mais aussi les risques d'une diplomatie de prédation qui privilégie les intérêts russes sur le développement africain."
          }
        },
        {
          title: "L'Union européenne et le voisinage africain",
          details: {
            date: "Depuis 2000s",
            figures: "30 milliards € d'aide au développement, Accord de Cotonou",
            context: "L'Union européenne constitue l'un des acteurs les plus présents en Afrique, avec une politique de voisinage structurée autour de 30 milliards d'euros d'aide au développement annuel et de partenariats multiples. L'Accord de Cotonou (2000, révisé en 2010) encadre les relations avec 79 pays ACP (Afrique-Caraïbes-Pacifique), combinant aide au développement, échanges commerciaux préférentiels, et dialogue politique. L'UE privilégie des politiques sectorielles : migration (accords de partenariat), sécurité (missions EUTM au Mali), et développement durable (Accord de Paris). Cependant, cette présence génère des tensions : critiques sur les subventions agricoles européennes qui concurrencent les produits africains, lenteur des processus décisionnels, et perception d'une approche paternaliste. Face à la concurrence chinoise et russe, l'UE cherche à moderniser ses relations avec des partenariats plus équilibrés, mais peine à adapter son modèle traditionnel aux aspirations souverainistes africaines. L'avenir des relations UE-Afrique dépendra de la capacité européenne à proposer une alternative crédible aux modèles autoritaires émergents."
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
            <Link to="/formation/geopolitique/continent-africain" className="hover:text-gray-900 transition-colors">
              Continent africain
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
              Études de cas - Continent africain
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Liste complète des études de cas et sujets de dissertation pour le continent africain.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/continent-africain" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/continent-africain/chronologie" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/continent-africain/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
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
              <p>• <strong>Maîtriser les cartes :</strong> L'Afrique compte 54 États avec des frontières complexes héritées de la colonisation.</p>
              <p>• <strong>Comprendre la diversité :</strong> Distinguer Afrique subsaharienne, Afrique du Nord, Afrique de l'Est, etc.</p>
              <p>• <strong>Analyser les acteurs :</strong> Puissances étrangères, organisations régionales, acteurs non-étatiques.</p>
              <p>• <strong>Étudier les cas pratiques :</strong> Conflits au Sahel, développement économique, transitions démocratiques.</p>
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

export default ContinentAfricainSujetsPage;
