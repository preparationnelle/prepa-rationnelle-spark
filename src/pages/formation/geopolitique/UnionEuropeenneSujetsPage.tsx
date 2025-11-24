import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, MapPin, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle, List } from 'lucide-react';

const UnionEuropeenneSujetsPage = () => {
  const sujets = [
    {
      id: 1,
      theme: "Construction historique de l'Union européenne",
      sujets: [
        {
          title: "Les traités fondateurs de l'Union européenne (1945-1992)",
          details: {
            date: "1945-1992",
            figures: "Traités de Paris (1951), Rome (1957), Maastricht (1992)",
            context: "La période de 1945 à 1992 fut cruciale pour la genèse de l'Union européenne. Elle débute par les efforts de reconstruction d'après-guerre et la volonté de créer une paix durable sur le continent. Le Traité de Paris, signé en 1951, institua la Communauté Européenne du Charbon et de l'Acier (CECA), jetant les bases d'une intégration sectorielle. Par la suite, les Traités de Rome de 1957 donnèrent naissance à la Communauté Économique Européenne (CEE) et à l'Euratom, posant les jalons d'un marché commun et d'une coopération économique plus large. Enfin, le Traité de Maastricht, signé en 1992, marqua un tournant décisif en créant l'Union européenne (UE) et en établissant les piliers d'une union politique et monétaire, intégrant ainsi les avancées précédentes dans une structure plus ambitieuse."
          }
        },
        {
          title: "La construction institutionnelle : de la CECA à l'Union européenne",
          details: {
            date: "1951-1992",
            figures: "CECA, CEE, Euratom, Acte unique européen",
            context: "L'architecture institutionnelle de l'Union européenne s'est construite progressivement depuis la création de la CECA en 1951. Cette première communauté, limitée au secteur du charbon et de l'acier, institua des organes de décision supranationaux comme la Haute Autorité et la Cour de justice. Les Traités de Rome de 1957 élargirent cette logique à l'ensemble de l'économie avec la CEE et à l'énergie nucléaire avec Euratom, créant une structure institutionnelle plus complexe avec le Conseil, la Commission et l'Assemblée parlementaire. L'Acte unique européen de 1986 accéléra l'intégration en instaurant le marché intérieur et en renforçant les pouvoirs du Parlement. Cette évolution institutionnelle reflète l'approfondissement progressif de l'intégration européenne, passant d'une logique sectorielle à une gouvernance politique complète."
          }
        },
        {
          title: "Les élargissements successifs et leurs enjeux géopolitiques",
          details: {
            date: "1973-présent",
            figures: "6 à 28 membres (avant Brexit)",
            context: "Les élargissements successifs de l'Union européenne constituent l'un des phénomènes géopolitiques majeurs de la fin du XXe siècle et du début du XXIe siècle. Commencé en 1973 avec le premier élargissement incluant le Royaume-Uni, l'Irlande et le Danemark, ce processus s'est accéléré après la chute du mur de Berlin. Les grands élargissements de 2004 (10 pays d'Europe centrale et orientale) et 2007 (Bulgarie et Roumanie) ont profondément modifié l'équilibre géopolitique européen, intégrant des pays anciennement communistes et étendant l'influence de l'UE vers l'Est. Ces élargissements ont généré des défis majeurs : tensions sur les fonds structurels, résistances internes aux réformes, et repositionnement géopolitique face à la Russie. Ils ont également renforcé la stabilité démocratique en Europe, tout en créant de nouvelles lignes de fracture entre anciens et nouveaux membres."
          }
        },
        {
          title: "Du Marché commun à l'Union économique et monétaire",
          details: {
            date: "1957-1999",
            figures: "Création de l'euro (1999)",
            context: "L'évolution de l'intégration économique européenne constitue l'un des succès majeurs de la construction communautaire. Né avec les Traités de Rome en 1957 sous la forme d'un Marché commun, ce projet initial visait l'union douanière et l'harmonisation progressive des politiques économiques. L'Acte unique européen de 1986 accéléra cette dynamique en instaurant le marché intérieur unique, supprimant les barrières non-tarifaires. Le Traité de Maastricht de 1992 posa les bases de l'Union économique et monétaire (UEM), créant une Banque centrale européenne indépendante et définissant des critères de convergence stricts. L'introduction de l'euro en 1999 comme monnaie unique pour 11 pays marqua l'achèvement de cette intégration monétaire, renforçant la stabilité économique de la zone euro tout en créant de nouveaux défis de gouvernance et de solidarité entre États membres aux situations économiques contrastées."
          }
        }
      ]
    },
    {
      id: 2,
      theme: "Institutions et gouvernance européennes",
      sujets: [
        {
          title: "Le triangle institutionnel : Commission, Conseil, Parlement européen",
          details: {
            date: "Depuis 1950s",
            figures: "Règlement, directive, décision",
            context: "Le système institutionnel européen repose sur un équilibre subtil entre trois acteurs principaux formant le 'triangle institutionnel'. La Commission européenne, organe exécutif indépendant, détient le monopole de l'initiative législative et veille à l'application du droit communautaire. Le Conseil de l'Union européenne, représentant les États membres, constitue le pouvoir décisionnel principal avec des formations spécialisées selon les domaines. Le Parlement européen, élu au suffrage universel direct depuis 1979, exerce un contrôle démocratique croissant et participe pleinement au processus législatif. Cette architecture complexe permet de concilier les intérêts nationaux et supranationaux, avec des procédures de décision variées : la codécision pour les textes législatifs majeurs, la consultation pour les politiques plus techniques, et l'unanimité pour les questions sensibles touchant aux intérêts vitaux des États."
          }
        },
        {
          title: "La Cour de justice de l'Union européenne et l'État de droit",
          details: {
            date: "Depuis 1952",
            figures: "Arrêts emblématiques (Van Gend en Loos, Costa contre Enel)",
            context: "La Cour de justice de l'Union européenne (CJUE) constitue le garant suprême du droit communautaire et de l'État de droit européen. Créée en 1952 comme juridiction de la CECA, elle s'est progressivement affirmée comme un acteur central de l'intégration européenne. Ses arrêts fondateurs, comme Van Gend en Loos (1963) établissant la primauté du droit communautaire sur le droit national, ou Costa contre ENEL (1964) affirmant l'effet direct des traités, ont révolutionné l'ordre juridique européen. La CJUE veille au respect des principes fondamentaux de l'UE : liberté, démocratie, respect des droits de l'homme et État de droit. Elle peut sanctionner les États membres en cas de violation du droit européen, comme l'illustre la procédure de l'article 7 du Traité sur l'Union européenne. Cette fonction juridictionnelle contribue à l'homogénéisation des standards démocratiques et juridiques au sein de l'Union, tout en suscitant parfois des tensions avec les souverainetés nationales."
          }
        },
        {
          title: "Le Conseil européen et la présidence tournante",
          details: {
            date: "Depuis 1974",
            figures: "Sommets réguliers, décisions stratégiques",
            context: "Le Conseil européen représente l'instance politique suprême de l'Union européenne, composée des chefs d'État ou de gouvernement des États membres et du président de la Commission. Institué en 1974 pour donner une impulsion politique au processus d'intégration, il définit les grandes orientations stratégiques et tranche les questions majeures bloquées au niveau des institutions ordinaires. Ses sommets, initialement informels, sont devenus des rendez-vous institutionnalisés où se décident les nominations clés et les orientations politiques de long terme. La présidence tournante, exercée par roulement semestriel entre les États membres, assure la continuité et l'équilibre entre grands et petits pays. Cette présidence organise les travaux du Conseil et représente l'UE sur la scène internationale pendant son mandat. Le Conseil européen incarne ainsi la dimension intergouvernementale de l'Union, permettant aux dirigeants nationaux d'exercer un contrôle politique sur le processus d'intégration tout en préservant leurs intérêts nationaux."
          }
        },
        {
          title: "Les politiques communes : agriculture, cohésion, environnement",
          details: {
            date: "Depuis 1960s",
            figures: "PAC, Fonds de cohésion, Green Deal",
            context: "Les politiques communes constituent l'un des piliers concrets de l'intégration européenne, touchant directement la vie quotidienne des citoyens. La Politique agricole commune (PAC), créée en 1962, représente historiquement le poste budgétaire le plus important de l'UE, garantissant la sécurité alimentaire et le soutien aux agriculteurs européens. Elle a évolué vers une approche plus durable et équitable, intégrant des préoccupations environnementales et de développement rural. La politique de cohésion, financée par les Fonds structurels et d'investissement européens, vise à réduire les disparités régionales entre États membres et régions, avec des investissements massifs dans les infrastructures, l'éducation et l'innovation. La politique environnementale, renforcée par le Pacte vert européen adopté en 2019, ambitionne la neutralité carbone d'ici 2050 et impose des standards élevés en matière de protection de l'environnement. Ces politiques communes créent une solidarité financière entre États membres mais génèrent aussi des tensions redistributives, opposant contributeurs nets et bénéficiaires nets."
          }
        }
      ]
    },
    {
      id: 3,
      theme: "Intégrations et fragmentations territoriales",
      sujets: [
        {
          title: "L'espace Schengen et la libre circulation",
          details: {
            date: "Depuis 1985",
            figures: "26 pays membres",
            context: "L'espace Schengen représente l'une des réalisations les plus concrètes de l'intégration européenne, abolissant les contrôles aux frontières intérieures entre 26 pays européens. Initié par l'accord de Schengen de 1985 entre cinq pays fondateurs, cet espace s'est progressivement étendu pour couvrir la quasi-totalité de l'Union européenne. La libre circulation des personnes, biens, services et capitaux constitue le quatrième liberté fondamentale du marché intérieur, facilitant les échanges économiques et sociaux. Cependant, cette intégration territoriale s'accompagne de défis sécuritaires majeurs : la gestion commune des frontières extérieures, la lutte contre l'immigration irrégulière et le terrorisme, et l'harmonisation des politiques d'asile. L'espace Schengen incarne ainsi la dialectique entre ouverture et sécurité, entre facilitation des échanges et protection des citoyens, tout en révélant les tensions entre États membres sur la responsabilité partagée de la protection des frontières."
          }
        },
        {
          title: "L'euro et la zone euro : intégration monétaire",
          details: {
            date: "Depuis 1999",
            figures: "19 pays, 340 millions d'habitants",
            context: "L'introduction de l'euro en 1999 constitue l'aboutissement de l'Union économique et monétaire (UEM), unifiant la monnaie de 19 pays européens et de plus de 340 millions d'habitants. Cette intégration monétaire apporte des avantages indéniables : élimination des risques de change, facilitation du commerce intra-européen, transparence des prix et stabilité économique renforcée. La Banque centrale européenne (BCE), indépendante et chargée de maintenir la stabilité des prix, constitue le pilier institutionnel de cette construction. Cependant, l'euro génère aussi des défis majeurs : absence de politique budgétaire commune, divergences économiques entre pays du Nord et du Sud, et crises successives (dette souveraine de 2010, COVID-19, inflation récente). Ces tensions révèlent les limites d'une intégration monétaire sans intégration fiscale et politique complète, créant des dynamiques de convergence et de divergence au sein de la zone euro. L'euro incarne ainsi l'ambition mais aussi les contraintes de l'intégration européenne."
          }
        },
        {
          title: "Les régions ultrapériphériques et les DOM-TOM",
          details: {
            date: "Depuis 1957",
            figures: "9 RUP, 13 PTOM",
            context: "Les régions ultrapériphériques (RUP) et pays et territoires d'outre-mer (PTOM) constituent une dimension particulière de l'intégration territoriale européenne, révélant les défis de l'unité dans la diversité. Les 9 RUP (Açores, Canaries, Guyane, Guadeloupe, Martinique, Mayotte, La Réunion, Saint-Martin, Madeira) sont des régions européennes intégrées à part entière dans l'Union, mais leur éloignement géographique et leurs spécificités socio-économiques nécessitent des politiques d'accompagnement spécifiques. Les 13 PTOM, quant à eux, bénéficient d'un statut d'association sans être pleinement intégrés à l'UE. Ces territoires, souvent situés dans les océans Atlantique, Indien et Pacifique, font face à des contraintes communes : insularité, dépendance économique, vulnérabilité environnementale et éloignement des centres de décision européens. L'UE leur accorde des aides structurelles importantes et des dérogations aux règles communes (PAC, fiscalité), mais cette différenciation territoriale crée des tensions entre solidarité européenne et égalité de traitement, tout en posant la question de l'unité territoriale de l'Union face à sa diversité géographique extrême."
          }
        },
        {
          title: "Brexit : causes, conséquences et leçons géopolitiques",
          details: {
            date: "2016-2020",
            figures: "Référendum 51.9% Leave, -15% échanges GB-UE",
            context: "Le Brexit constitue l'événement géopolitique majeur de l'histoire récente de l'Union européenne, révélant les fractures internes du projet européen. Le référendum du 23 juin 2016, remporté à 51,9% par les partisans du Leave, fut motivé par des facteurs multiples : souverainisme, immigration, déficit démocratique perçu de l'UE, et crise économique post-2008. Les négociations complexes aboutirent à l'accord de retrait du 31 janvier 2020, créant une période de transition jusqu'à la fin 2020. Les conséquences sont multiples : perte d'un contributeur budgétaire net, réduction des échanges commerciaux de 15%, incertitudes sur l'avenir de l'Irlande du Nord, et repositionnement géopolitique du Royaume-Uni. Pour l'UE, le Brexit a accéléré les réflexions sur l'approfondissement de l'intégration entre les 27, renforcé la cohésion interne, mais aussi révélé les limites du fédéralisme européen face aux aspirations nationales. Cette crise constitue une leçon majeure sur les tensions entre ouverture et souveraineté, entre intégration et démocratie nationale."
          }
        }
      ]
    },
    {
      id: 4,
      theme: "Défis sécuritaires et géopolitiques",
      sujets: [
        {
          title: "L'Union européenne face à la Russie : sanctions et dépendances énergétiques",
          details: {
            date: "Depuis 2014",
            figures: "Sanctions sectorielles, 40% dépendance gaz russe (avant 2022)",
            context: "Les relations entre l'Union européenne et la Russie constituent l'un des dossiers géopolitiques les plus complexes du continent européen. Depuis l'annexion de la Crimée en 2014, l'UE a adopté une stratégie de sanctions économiques ciblées contre la Russie, touchant ses secteurs bancaire, énergétique et technologique. Cette politique de sanctions, renouvelée régulièrement malgré les divisions internes entre États membres, vise à modifier le comportement russe sans rompre complètement les liens économiques. Cependant, l'UE fait face à une dépendance énergétique critique : avant 2022, 40% de ses importations de gaz naturel provenaient de Russie, créant une vulnérabilité stratégique majeure. L'invasion de l'Ukraine en février 2022 a accéléré la diversification énergétique européenne, avec des investissements massifs dans les renouvelables et de nouveaux partenariats gaziers. Cette crise révèle les tensions entre intérêts économiques et valeurs démocratiques, entre sécurité énergétique et solidarité avec les pays frontaliers, tout en redessinant l'architecture de sécurité européenne."
          }
        },
        {
          title: "La guerre en Ukraine et la nouvelle architecture de sécurité européenne",
          details: {
            date: "Depuis 2022",
            figures: "Aide militaire UE de milliards d'euros, 2 pays candidats",
            context: "L'invasion russe de l'Ukraine en février 2022 constitue un tournant majeur dans l'histoire de la sécurité européenne, révélant les limites de l'ordre européen post-Guerre Froide. Pour la première fois, l'Union européenne a démontré une solidarité sans précédent : aide humanitaire massive, sanctions économiques dévastatrices contre la Russie, et soutien militaire coordonné aux forces ukrainiennes s'élevant à plusieurs milliards d'euros. Cette crise a accéléré les candidatures ukrainienne et moldave à l'adhésion, tout en révélant les divisions internes de l'UE sur la rapidité de l'intégration. Elle a également impulsé une véritable révolution dans la politique de défense européenne : création d'un fonds européen de défense de 7,9 milliards d'euros, mutualisation des achats d'armement, et renforcement de la PESC. Cependant, ces avancées masquent des fractures persistantes entre pays de l'Est (plus prudents) et de l'Ouest (plus engagés), tout en posant la question de l'autonomie stratégique européenne face aux États-Unis et à l'OTAN."
          }
        },
        {
          title: "Les migrations et la crise des réfugiés : politiques européennes",
          details: {
            date: "Depuis 2015",
            figures: "Plus d'un million de demandeurs d'asile (2015), Pacte Asile et Migration",
            context: "La crise migratoire de 2015 constitue l'un des défis les plus structurants de l'Union européenne contemporaine, révélant les tensions entre solidarité humanitaire et souveraineté nationale. L'afflux d'un million de demandeurs d'asile cette année-là, principalement en provenance de Syrie, d'Afghanistan et d'Afrique, a mis en lumière les dysfonctionnements du système européen d'asile : Dublin III inefficace, frontières extérieures poreuses, et absence de mécanisme de répartition équitable. Cette crise a généré des fractures profondes entre États membres, opposant les pays d'arrivée (Italie, Grèce) aux pays de transit et de destination, et a favorisé l'essor des mouvements populistes. L'UE a répondu par le Pacte européen sur la migration et l'asile adopté en 2020, renforçant Frontex, créant des plateformes régionales de débarquement, et instituant un mécanisme de solidarité obligatoire. Cependant, ces réformes restent insuffisantes face aux défis démographiques, climatiques et géopolitiques qui continueront d'alimenter les flux migratoires, tout en révélant les limites de l'intégration européenne face aux questions de souveraineté nationale."
          }
        },
        {
          title: "Le terrorisme islamiste et la coopération antiterroriste",
          details: {
            date: "Depuis 2004",
            figures: "Europol, partage de renseignements",
            context: "Le terrorisme islamiste constitue l'un des défis sécuritaires majeurs de l'Union européenne depuis les attentats de Madrid en 2004 et de Londres en 2005. Ces attaques ont révélé les vulnérabilités des sociétés européennes ouvertes et la nécessité d'une coordination transnationale face à une menace qui ne respecte pas les frontières. L'UE a progressivement construit un arsenal institutionnel et opérationnel : Europol comme centre de coordination du renseignement, Eurojust pour la coopération judiciaire, et des directives harmonisant les législations antiterroristes. Le partage de données passagers (PNR), les listes de surveillance communes, et les opérations conjointes des forces de sécurité témoignent de cette intégration sécuritaire. Cependant, cette coopération se heurte à des contraintes majeures : protection des données personnelles, diversité des traditions juridiques nationales, et débat sur l'équilibre entre sécurité et libertés fondamentales. Les attentats récurrents (Paris 2015, Bruxelles 2016, Nice 2016) montrent que malgré les progrès, l'UE reste vulnérable face à la radicalisation interne et aux menaces extérieures, tout en révélant les tensions entre efficacité sécuritaire et préservation de l'État de droit."
          }
        }
      ]
    },
    {
      id: 5,
      theme: "Politiques extérieures et voisinage",
      sujets: [
        {
          title: "La Politique étrangère et de sécurité commune (PESC)",
          details: {
            date: "Depuis 1993",
            figures: "Haut représentant, Service européen pour l'action extérieure",
            context: "La Politique étrangère et de sécurité commune (PESC) incarne l'ambition de l'Union européenne de devenir un acteur géopolitique de premier plan sur la scène internationale. Introduite par le Traité de Maastricht en 1993, elle vise à doter l'UE d'une voix unique et cohérente en matière de relations extérieures, tout en préservant la souveraineté des États membres dans ce domaine hautement sensible. Le Haut représentant pour les affaires étrangères et la politique de sécurité, poste occupé par Josep Borrell depuis 2019, coordonne cette politique avec l'aide du Service européen pour l'action extérieure (SEAE). La PESC s'appuie sur des instruments variés : déclarations communes, sanctions ciblées, missions civiles et militaires de gestion de crise. Cependant, son efficacité reste limitée par l'unanimité requise pour les décisions majeures et les divergences stratégiques entre États membres (interventionnistes français vs prudents allemands). Face aux crises majeures (Syrie, Libye, Ukraine), l'UE peine souvent à parler d'une seule voix, révélant les tensions entre ambitions fédérales et réalités intergouvernementales."
          }
        },
        {
          title: "L'élargissement à l'Est : enjeux et résistances",
          details: {
            date: "2004, 2007, 2013",
            figures: "10 nouveaux membres en 2004",
            context: "L'élargissement à l'Est constitue l'une des transformations géopolitiques majeures de l'Union européenne depuis la chute du mur de Berlin. Les grands élargissements de 2004 (10 pays : Pologne, Hongrie, République tchèque, Slovaquie, Slovénie, Estonie, Lettonie, Lituanie, Chypre, Malte) et 2007 (Bulgarie, Roumanie) ont intégré des pays anciennement communistes, étendant l'influence de l'UE jusqu'aux frontières russes et ukrainiennes. Ces adhésions ont généré des bénéfices mutuels : stabilisation démocratique des nouveaux membres, approfondissement du marché intérieur pour les anciens, et projection de valeurs européennes vers l'Est. Cependant, elles ont aussi créé des résistances internes : craintes migratoires, concurrence économique des pays à bas coûts salariaux, et augmentation des contributions budgétaires. Les défis persistent : corruption résiduelle, État de droit fragile dans certains pays, et tensions sur la redistribution des fonds européens. L'élargissement à l'Est révèle ainsi la dialectique entre extension et approfondissement de l'intégration, entre solidarité et intérêts nationaux."
          }
        },
        {
          title: "Les partenariats méditerranéens et africains",
          details: {
            date: "Depuis 1995 (Processus de Barcelone)",
            context: "Les partenariats méditerranéens et africains constituent l'un des volets essentiels de la politique de voisinage de l'Union européenne, révélant l'importance stratégique du pourtour sud de l'Europe. Lancé en 1995, le Processus de Barcelone visait à créer une zone de paix, de stabilité et de prospérité partagée autour de la Méditerranée, associant les pays du Maghreb et du Machrek. L'Union pour la Méditerranée (UpM), créée en 2008, a élargi cette coopération à des projets concrets dans les domaines économique, social et culturel. La Stratégie Afrique-UE de 2015, quant à elle, reconnaît l'importance géopolitique du continent africain pour la sécurité et la prospérité européennes, avec des partenariats dans le développement, l'investissement et la migration. Ces politiques visent à prévenir l'instabilité régionale, à favoriser le développement économique et à gérer les flux migratoires. Cependant, elles se heurtent à des défis majeurs : asymétrie des relations, persistance des conflits régionaux, et concurrence avec d'autres acteurs (Turquie, Russie, Chine). Ces partenariats révèlent ainsi les limites de la 'soft power' européenne face aux réalités géopolitiques complexes du voisinage méridional."
          }
        },
        {
          title: "L'Union européenne puissance globale : commerce et multilatéralisme",
          details: {
            date: "Depuis 1990s",
            figures: "Premier bloc commercial mondial, OMC",
            context: "L'Union européenne s'affirme progressivement comme une puissance globale dans le système commercial international et la gouvernance multilatérale mondiale. Premier bloc commercial de la planète avec 18% du commerce mondial, l'UE défend une approche fondée sur des règles, le multilatéralisme et des standards élevés en matière sociale et environnementale. Ses accords de libre-échange (CETA avec le Canada, JEFTA avec le Japon) et ses politiques commerciales communes constituent des leviers majeurs d'influence géopolitique. Au sein de l'OMC, l'UE milite pour une libéralisation ordonnée du commerce et contre les pratiques protectionnistes. Face aux défis contemporains (crise du multilatéralisme, ascension de la Chine, protectionnisme américain), l'UE cherche à défendre ses intérêts tout en promouvant ses valeurs : développement durable, droits de l'homme, lutte contre le changement climatique. Cependant, cette ambition se heurte à des contraintes internes (divisions entre États membres) et externes (concurrence des grandes puissances). L'UE incarne ainsi un modèle alternatif de puissance, privilégiant l'attractivité normative et économique plutôt que la domination militaire, tout en révélant les tensions entre souveraineté nationale et action collective sur la scène mondiale."
          }
        }
      ]
    },
    {
      id: 6,
      theme: "Défis internes contemporains",
      sujets: [
        {
          title: "La montée des populismes et de l'euroscepticisme",
          details: {
            date: "Depuis 2000s",
            figures: "Hausse des partis anti-UE, faible participation électorale",
            context: "La montée des populismes et de l'euroscepticisme constitue l'un des défis internes majeurs de l'Union européenne depuis la crise financière de 2008. Les partis populistes, souvent nationalistes et souverainistes, ont enregistré des scores électoraux significatifs dans de nombreux pays européens (France, Italie, Hongrie, Pologne), contestant le modèle d'intégration supranationale au nom de la souveraineté nationale et de la protection des identités culturelles. L'euroscepticisme s'exprime aussi dans la faible participation aux élections européennes (42% en moyenne) et les succès référendaires anti-européens (Brexit, rejet de la Constitution européenne en 2005). Ces mouvements prospèrent sur les frustrations socio-économiques, les peurs migratoires et le sentiment de déficit démocratique de l'UE. Face à cette contestation, l'UE a adopté des stratégies de rétablissement de la confiance : renforcement du contrôle parlementaire, politiques sociales plus visibles, et communication plus efficace. Cependant, ces réponses institutionnelles peinent à convaincre une opinion publique de plus en plus sceptique, révélant les tensions entre l'idéal fédéral européen et les aspirations nationales contemporaines."
          }
        },
        {
          title: "La crise de la dette souveraine et le sauvetage des banques",
          details: {
            date: "2010-2012",
            figures: "Fonds de sauvetage (MES), renforcement de la gouvernance économique",
            context: "La crise de la dette souveraine de 2010-2012 constitue l'un des moments les plus critiques de l'histoire de la zone euro, révélant les fragilités de l'intégration monétaire incomplète. Déclenchée par la faillite de la Grèce en 2009, cette crise s'est propagée aux pays périphériques (Portugal, Irlande, Espagne, Italie) en raison de l'interconnexion des marchés financiers européens. L'UE a répondu par des mécanismes d'urgence : création du Fonds européen de stabilité financière (FESF) en 2010, puis du Mécanisme européen de stabilité (MES) en 2012, capables de mobiliser 700 milliards d'euros pour sauver les États en difficulté. Cette crise a également impulsé des réformes structurelles profondes : Pacte budgétaire européen imposant des règles de discipline fiscale, Mécanisme de surveillance unique pour les banques (MSU), et renforcement des pouvoirs de la BCE. Cependant, ces mesures ont généré des tensions entre rigueur budgétaire et croissance économique, entre solidarité nord-sud et responsabilité nationale, tout en révélant les limites d'une union monétaire sans union politique et fiscale. La crise de 2010-2012 a ainsi marqué un tournant dans l'approfondissement de la gouvernance économique européenne."
          }
        },
        {
          title: "Les inégalités territoriales et le développement régional",
          details: {
            date: "Depuis 1975",
            figures: "Fonds structurels et d'investissement, politique de cohésion",
            context: "Les inégalités territoriales constituent l'un des défis structurels les plus anciens et persistants de l'Union européenne, révélant les tensions entre unité et diversité au sein d'un espace économique intégré. Depuis la création des Fonds structurels en 1975, l'UE consacre environ un tiers de son budget (plus de 300 milliards d'euros pour 2021-2027) à la politique de cohésion, visant à réduire les écarts de développement entre régions riches et pauvres. Cette politique s'articule autour de trois objectifs : convergence pour les régions les plus défavorisées, compétitivité régionale, et coopération territoriale européenne. Cependant, malgré ces investissements massifs, les disparités persistent : le PIB par habitant varie de 1 à 10 entre régions européennes, avec des poches de pauvreté persistantes dans certaines zones rurales ou industrielles en déclin. Les défis contemporains (transition numérique, écologique, démographique) accentuent ces fractures territoriales, opposant métropoles dynamiques et périphéries en difficulté. La politique de cohésion révèle ainsi les limites de l'approche redistributive face aux dynamiques économiques globales, tout en incarnant l'ambition solidaire de l'intégration européenne."
          }
        },
        {
          title: "La transition écologique et énergétique de l'Union",
          details: {
            date: "Depuis 1990s (accéléré après 2019)",
            figures: "Pacte vert européen, objectifs de réduction CO2 (-55% en 2030)",
            context: "La transition écologique et énergétique constitue l'un des défis les plus ambitieux et structurants de l'Union européenne contemporaine, révélant sa capacité à devenir un leader mondial dans la lutte contre le changement climatique. Initiée dans les années 1990 avec des politiques environnementales pionnières, cette transition a pris un tournant décisif avec le Pacte vert européen adopté en 2019, fixant l'objectif de neutralité carbone d'ici 2050 et de réduction des émissions de CO2 de 55% d'ici 2030. L'UE investit massivement dans les énergies renouvelables (solaire, éolien), l'efficacité énergétique, et la mobilité durable, tout en promouvant une économie circulaire. Cependant, cette transition génère des défis majeurs : coûts socio-économiques élevés, résistances des secteurs industriels traditionnels (charbon, acier), et disparités entre États membres dans leur capacité d'adaptation. Les crises énergétiques successives (2021-2022) ont accéléré la diversification énergétique, réduisant la dépendance aux importations russes. La transition écologique révèle ainsi les tensions entre ambitions environnementales et réalités économiques, entre leadership européen et compétitivité globale, tout en posant la question de la justice sociale dans cette transformation profonde."
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
            <Link to="/formation/geopolitique/union-europeenne" className="hover:text-gray-900 transition-colors">
              Union européenne
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
              Études de cas - Union européenne
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Liste complète des études de cas et sujets de dissertation pour l'Union européenne.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/union-europeenne" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/chronologie-europe" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/union-europeenne/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
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
              <p>• <strong>Analyser les cartes :</strong> L'Union européenne est un objet géographique complexe avec des intégrations différenciées.</p>
              <p>• <strong>Maîtriser la chronologie :</strong> Distinguer les différentes phases de construction européenne depuis 1945.</p>
              <p>• <strong>Comprendre les enjeux :</strong> L'UE est à la fois une puissance économique et un acteur géopolitique en devenir.</p>
              <p>• <strong>Étudier les cas pratiques :</strong> Brexit, crise des migrants, guerre en Ukraine sont des études de cas essentielles.</p>
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

export default UnionEuropeenneSujetsPage;
