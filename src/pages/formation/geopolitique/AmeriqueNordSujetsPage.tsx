import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, MapPin, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle, List } from 'lucide-react';

const AmeriqueNordSujetsPage = () => {
  const sujets = [
    {
      id: 1,
      theme: "La puissance américaine : hyperpuissance et déclin relatif",
      sujets: [
        {
          title: "Les États-Unis : première puissance mondiale depuis 1945",
          details: {
            date: "1945-présent",
            figures: "24% du PIB mondial, 800 bases militaires à l'étranger",
            context: "Les États-Unis constituent la première puissance mondiale depuis la fin de la Seconde Guerre mondiale, dominant tous les domaines de la puissance : économique (24% du PIB mondial), militaire (budget de défense de 800 milliards de dollars), technologique et culturel. Cette hégémonie s'est construite sur les ruines de la guerre, avec la création du système monétaire de Bretton Woods centré sur le dollar, et l'établissement d'alliances militaires (OTAN, traités asiatiques). La fin de la Guerre Froide (1991) a consacré les États-Unis comme 'hyperpuissance' unique, capable d'intervenir militairement partout dans le monde. Cependant, ce leadership fait face à des défis croissants : montée en puissance de la Chine, multipolarisation du monde, et contestation interne de l'ordre libéral américain. Les États-Unis restent la puissance de référence, mais doivent composer avec des contraintes budgétaires et une opinion publique de plus en plus isolationniste, révélant les limites de l'unipolarité américaine."
          }
        },
        {
          title: "Le soft power américain : culture, médias et influence globale",
          details: {
            date: "Depuis 1945",
            figures: "Hollywood produit 70% des films mondiaux, 500 millions d'utilisateurs Facebook",
            context: "Le soft power américain constitue l'un des piliers de l'influence globale des États-Unis, reposant sur l'attractivité culturelle et l'exportation de valeurs démocratiques plutôt que sur la coercition militaire. Hollywood produit 70% des films mondiaux, diffusant l'American way of life à travers des blockbusters qui touchent des milliards de spectateurs. Les géants du numérique (Google, Facebook, Netflix) comptent des centaines de millions d'utilisateurs mondiaux, façonnant les comportements culturels et les opinions publiques. Les universités américaines attirent les élites mondiales, formant les dirigeants de demain. Cette influence culturelle s'accompagne d'une diplomatie des valeurs : promotion de la démocratie, des droits de l'homme, et du libre-échange. Cependant, ce soft power est contesté : critiques sur l'impérialisme culturel, la domination linguistique anglaise, et les ingérences dans les affaires intérieures d'autres pays. Face à la montée des nationalismes et des contre-modèles autoritaires (Chine, Russie), les États-Unis doivent adapter leur stratégie d'influence pour maintenir leur leadership culturel."
          }
        },
        {
          title: "La puissance militaire : bases, alliances et interventions",
          details: {
            date: "Depuis 1945",
            figures: "800 bases militaires dans 80 pays, budget de 800 milliards $",
            context: "La puissance militaire américaine constitue l'instrument principal de l'hégémonie mondiale des États-Unis, reposant sur une capacité de projection globale sans équivalent. Avec 800 bases militaires réparties dans 80 pays et un budget annuel de 800 milliards de dollars (plus que les 10 pays suivants combinés), les États-Unis maintiennent une présence militaire mondiale. Cette architecture repose sur des alliances multilatérales (OTAN, traités asiatiques) et bilatérales, permettant une présence permanente dans toutes les régions stratégiques. Les interventions militaires, de la Corée (1950) à l'Irak (2003), démontrent la capacité américaine à remodeler l'ordre international par la force. Cependant, cette suprématie est remise en question : guerres coûteuses en Afghanistan et Irak, montée des dépenses chinoises, et contraintes budgétaires internes. Les États-Unis doivent désormais composer avec des puissances régionales (Russie en Europe de l'Est, Iran au Moyen-Orient) qui contestent leur domination, révélant les limites de la puissance militaire dans un monde multipolaire."
          }
        },
        {
          title: "Les défis intérieurs : dette, inégalités et divisions politiques",
          details: {
            date: "Depuis 2008",
            figures: "Dette publique 33 000 milliards $, PIB 25 000 milliards $",
            context: "Les défis intérieurs constituent la principale vulnérabilité de la puissance américaine, menaçant sa capacité à maintenir son leadership global. La dette publique atteint 33 000 milliards de dollars (130% du PIB), conséquence des guerres coûteuses, des baisses d'impôts, et de la crise de 2008. Les inégalités sociales se creusent : les 1% les plus riches détiennent 30% de la richesse nationale, tandis que 40 millions d'Américains vivent sous le seuil de pauvreté. Les divisions politiques atteignent un niveau historique : bipartisme bloqué au Congrès, montée du populisme (élection de Trump en 2016), et contestation des institutions démocratiques (attaque du Capitole en 2021). Ces fractures internes affaiblissent la cohésion nationale et limitent la capacité d'action internationale des États-Unis. Face à ces défis, le pays peine à réformer son système économique et social, révélant les contradictions entre l'idéal démocratique américain et ses réalités socio-économiques. La stabilité intérieure devient un impératif pour maintenir la puissance globale."
          }
        }
      ]
    },
    {
      id: 2,
      theme: "Le Canada : entre américanisation et affirmation identitaire",
      sujets: [
        {
          title: "Le Canada et les États-Unis : intégration économique (ALENA/USMCA)",
          details: {
            date: "1989-2018 (ALENA), 2020 (USMCA)",
            figures: "75% des exportations canadiennes vers les États-Unis",
            context: "L'intégration économique entre le Canada et les États-Unis constitue l'un des piliers de la puissance nord-américaine, créant la plus grande zone de libre-échange au monde. L'Accord de libre-échange nord-américain (ALENA, 1989-1994) puis l'Accord Canada-États-Unis-Mexique (USMCA, 2020) ont éliminé la plupart des barrières tarifaires, favorisant les échanges commerciaux massifs. 75% des exportations canadiennes sont destinées aux États-Unis, principalement des ressources naturelles (pétrole, bois, minerais). Cette interdépendance économique crée une relation asymétrique : le Canada dépend du marché américain pour sa prospérité, tandis que les États-Unis voient le Canada comme un partenaire fiable mais secondaire. Les tensions commerciales (droits compensateurs sur l'acier, bois d'œuvre) révèlent les vulnérabilités canadiennes face à la politique protectionniste américaine. Le Canada navigue entre bénéfices économiques évidents et risques de dépendance excessive, cherchant à diversifier ses partenaires commerciaux (Asie-Pacifique) tout en préservant cette relation privilégiée."
          }
        },
        {
          title: "Le Québec et la question nationale : souverainisme et fédéralisme",
          details: {
            date: "Depuis 1960",
            figures: "Référendums de 1980 (40% Oui) et 1995 (49,4% Oui)",
            context: "La question nationale québécoise constitue l'un des défis identitaires majeurs du Canada contemporain, opposant souverainistes et fédéralistes dans un débat sur l'avenir du Québec au sein de la Confédération. Né de la Révolution tranquille (1960), le mouvement souverainiste vise l'indépendance du Québec pour préserver sa langue française et sa culture distincte. Les référendums de 1980 (40% pour le Oui) et 1995 (49,4% pour le Oui, défaite par 54 000 voix) ont marqué les esprits, révélant la division profonde de la société québécoise. Le fédéralisme canadien, incarné par des politiques d'accommodement (Charte de la langue française, bilinguisme officiel), cherche à maintenir l'unité nationale tout en reconnaissant la spécificité québécoise. Cette tension structure la politique canadienne : partis souverainistes (Parti Québécois, Bloc Québécois) vs fédéralistes, négociations constitutionnelles complexes. La question révèle les défis du multiculturalisme canadien : comment concilier unité nationale et diversité culturelle, entre centralisation et décentralisation. L'avenir du Québec reste ouvert, influencé par les évolutions démographiques et économiques."
          }
        },
        {
          title: "Le multiculturalisme canadien et les politiques d'immigration",
          details: {
            date: "Depuis 1971",
            figures: "400 000 immigrants par an, 22% de la population née à l'étranger",
            context: "Le multiculturalisme canadien constitue un modèle unique d'intégration des immigrés, reposant sur la reconnaissance officielle de la diversité culturelle comme richesse nationale. Adoptée en 1971 par Pierre Trudeau, la politique multiculturaliste affirme que tous les citoyens, indépendamment de leur origine, sont égaux et que les cultures immigrées doivent être préservées. Le Canada accueille environ 400 000 immigrants par an, soit 22% de sa population née à l'étranger, avec une politique sélective favorisant les compétences professionnelles. Cette approche contraste avec l'assimilationnisme français ou le melting-pot américain, permettant aux communautés de maintenir leurs langues et traditions tout en s'intégrant à la société canadienne. Cependant, des défis émergent : tensions identitaires (débat sur les accommodements raisonnables), intégration économique différenciée selon les origines, et montée des populismes anti-immigration. Le multiculturalisme canadien révèle les réussites mais aussi les limites d'un modèle d'intégration inclusive dans une société post-industrielle."
          }
        },
        {
          title: "Le Canada dans l'Arctique : souveraineté et changements climatiques",
          details: {
            date: "Depuis 1953",
            figures: "40% de la côte arctique mondiale, fonte des glaces de 12% par décennie",
            context: "Le Canada constitue l'une des principales puissances arctiques, avec 40% de la côte arctique mondiale et d'importantes revendications territoriales dans cette région en pleine transformation. Depuis 1953, Ottawa affirme sa souveraineté sur l'Arctique avec des patrouilles militaires régulières, des stations de recherche, et des investissements infrastructurels (route de glace, ports en eau profonde). Les changements climatiques accélèrent ces enjeux : fonte des glaces de 12% par décennie ouvre de nouvelles routes maritimes (passage du Nord-Ouest) et révèle des ressources minières abondantes. Cette évolution attire les grandes puissances (États-Unis, Russie, Chine) intéressées par les hydrocarbures et les nouvelles routes commerciales. Le Canada doit défendre ses intérêts face à ces concurrents : militarisation de l'Arctique, partenariats scientifiques internationaux, et politiques environnementales. La région révèle les tensions entre exploitation économique, protection environnementale, et souveraineté nationale, dans un contexte de compétition géopolitique croissante pour le contrôle de l'Arctique."
          }
        }
      ]
    },
    {
      id: 3,
      theme: "Le Mexique : entre dépendance et émergence",
      sujets: [
        {
          title: "Le Mexique et les États-Unis : migrations et sécurité frontalière",
          details: {
            date: "Depuis 1994 (ALENA)",
            figures: "12 millions de Mexicains aux États-Unis, frontière de 3 200 km",
            context: "Les relations migratoires entre le Mexique et les États-Unis constituent l'un des dossiers géopolitiques les plus sensibles d'Amérique du Nord, révélant les asymétries de puissance et les interdépendances humaines. Environ 12 millions de Mexicains vivent aux États-Unis, représentant la plus grande diaspora mexicaine au monde et contribuant massivement à l'économie américaine (remises de fonds de 50 milliards de dollars par an). Cette migration est poussée par la pauvreté mexicaine, l'instabilité économique, et attirée par les opportunités nord-américaines. La frontière de 3 200 km est devenue une ligne de fracture : murs frontaliers, patrouilles, et politiques de refoulement. L'administration Trump (2017-2021) a radicalisé cette approche avec sa politique 'Remain in Mexico', forçant les demandeurs d'asile à attendre au Mexique. Le Mexique navigue entre souveraineté nationale et contraintes géographiques, cherchant à négocier des accords migratoires plus équitables tout en gérant les pressions sécuritaires internes. Cette relation révèle les tensions entre sécurité nationale américaine et droits humains."
          }
        },
        {
          title: "Le narcotrafic et la violence organisée au Mexique",
          details: {
            date: "Depuis 2006",
            figures: "300 000 morts depuis 2006, cartels contrôlant 40% du territoire",
            context: "Le narcotrafic constitue l'une des plus grandes menaces sécuritaires du Mexique contemporain, transformant le pays en champ de bataille entre cartels organisés et forces gouvernementales. Depuis la déclaration de guerre aux cartels par Felipe Calderón en 2006, plus de 300 000 personnes ont été tuées dans ce conflit, faisant du Mexique l'un des pays les plus violents au monde. Les cartels (Sinaloa, Jalisco Nueva Generación, Zetas) contrôlent environ 40% du territoire national, gérant un trafic annuel de drogues estimé à 30 milliards de dollars vers les États-Unis. Cette violence s'accompagne de corruption généralisée, d'enlèvements, et de déplacements forcés. Le gouvernement mexicain alterne entre stratégies militaires et approches sociales, mais peine à contenir cette économie criminelle prospère. Le narcotrafic révèle les liens étroits entre pauvreté, corruption institutionnelle, et demande nord-américaine pour les stupéfiants. La lutte contre les cartels nécessite une approche régionale coordonnée entre Mexique, États-Unis et Canada, mais se heurte aux souverainetés nationales et aux intérêts économiques divergents."
          }
        },
        {
          title: "L'économie mexicaine : maquiladoras et dépendance commerciale",
          details: {
            date: "Depuis 1965",
            figures: "80% des exportations vers les États-Unis, 4 millions d'emplois dans les maquiladoras",
            context: "L'économie mexicaine est profondément intégrée à l'économie nord-américaine, créant une dépendance commerciale qui structure sa géopolitique. Les maquiladoras, usines d'assemblage installées près de la frontière américaine depuis 1965, emploient 4 millions de personnes et produisent principalement pour l'exportation. 80% des exportations mexicaines sont destinées aux États-Unis, principalement des produits manufacturés et automobiles. Cette intégration économique apporte croissance et emplois, mais génère des vulnérabilités : dépendance aux cycles économiques américains, pressions salariales (salaires mexicains 10 fois inférieurs aux américains), et transferts technologiques limités. Les chaînes de valeur nord-américaines (automobile, électronique) créent une interdépendance bénéfique mais asymétrique. Face aux menaces protectionnistes (Trump a menacé de quitter l'USMCA), le Mexique cherche à diversifier ses partenaires (Asie, Europe), mais reste prisonnier de sa proximité géographique avec le marché américain. Cette économie révèle les ambivalences du développement : croissance rapide mais développement inégal, industrialisation mais dépendance persistante."
          }
        },
        {
          title: "La transition démocratique et les institutions mexicaines",
          details: {
            date: "Depuis 2000",
            figures: "Alternance politique depuis 2000, PRI au pouvoir 71 ans (1929-2000)",
            context: "La transition démocratique mexicaine constitue l'une des évolutions politiques majeures d'Amérique latine, marquant la fin de 71 ans de domination ininterrompue du Parti révolutionnaire institutionnel (PRI). Depuis l'alternance de 2000 (victoire de Vicente Fox), le Mexique a connu plusieurs alternances pacifiques : PAN (2000-2012), retour du PRI (2012-2018), puis MORENA de gauche (2018-présent). Cette démocratisation s'accompagne de réformes institutionnelles : indépendance de la Banque centrale, réforme électorale, lutte contre la corruption (sous López Obrador). Cependant, des défis persistent : faiblesse des institutions (justice corrompue, forces de sécurité infiltrées par les cartels), inégalités sociales extrêmes, et populisme croissant. La démocratie mexicaine révèle les difficultés de consolidation démocratique dans un contexte de violence organisée et d'inégalités structurelles. Le pays navigue entre progrès institutionnels (liberté de presse, société civile active) et reculs autoritaires, influencé par les pressions nord-américaines et les dynamiques internes complexes."
          }
        }
      ]
    },
    {
      id: 4,
      theme: "Sécurité et défense en Amérique du Nord",
      sujets: [
        {
          title: "L'OTAN et la sécurité nord-américaine",
          details: {
            date: "1949-présent",
            figures: "29 pays membres, budget collectif 1 000 milliards $",
            context: "L'OTAN constitue le pilier de la sécurité nord-américaine, liant les États-Unis et le Canada dans une alliance défensive transatlantique. Créée en 1949 pour contrer la menace soviétique, l'OTAN assure la sécurité collective de 29 pays membres avec un budget collectif dépassant 1 000 milliards de dollars. Pour l'Amérique du Nord, l'OTAN garantit la protection américaine contre les menaces européennes et asiatiques, tout en permettant aux États-Unis d'influencer les politiques européennes. Le Canada, membre fondateur, contribue militairement (opérations en Afghanistan, Lettonie) et politiquement à l'alliance. Cependant, l'OTAN génère des tensions : partage du fardeau budgétaire (les États-Unis paient 70% du budget), stratégies divergentes (Trump critiquait l'OTAN), et extension à l'Est (adhésions post-1991). Face aux nouvelles menaces (Russie, terrorisme, cybersécurité), l'OTAN doit s'adapter, révélant l'équilibre délicat entre leadership américain et intérêts européens/canadiens. Pour l'Amérique du Nord, l'OTAN reste essentielle mais doit composer avec les priorités continentales."
          }
        },
        {
          title: "Le NORAD : défense aérienne et antimissile",
          details: {
            date: "1958-présent",
            figures: "Commandement binational États-Unis/Canada, couverture 21 millions km²",
            context: "Le NORAD (North American Aerospace Defense Command) constitue l'instrument opérationnel de la sécurité aérienne et spatiale nord-américaine, symbolisant l'intégration militaire entre États-Unis et Canada. Créé en 1958 pour contrer la menace soviétique, le NORAD coordonne la surveillance et la défense aérienne de l'espace aérien nord-américain (21 millions de km²) avec des radars, satellites, et intercepteurs. Depuis 2006, il inclut la défense antimissile balistique, avec des bases au Canada et aux États-Unis. Cette coopération révèle l'asymétrie de puissance : commandement américain, contribution canadienne technologique et territoriale. Le NORAD a évolué face aux nouvelles menaces : terrorisme (post-11 septembre), cyberattaques, et missiles nord-coréens. Cependant, des tensions émergent : débat sur la souveraineté canadienne, coûts budgétaires, et modernisation technologique. Le NORAD incarne la réussite de l'intégration sécuritaire nord-américaine, mais doit s'adapter aux défis contemporains dans un contexte de compétition sino-américaine croissante."
          }
        },
        {
          title: "La frontière américano-mexicaine : murs et contrôles migratoires",
          details: {
            date: "Depuis 1994",
            figures: "3 200 km de frontière, 700 km de murs construits",
            context: "La frontière américano-mexicaine constitue l'une des lignes de démarcation les plus militarisées au monde, cristallisant les enjeux migratoires et sécuritaires nord-américains. Longue de 3 200 km, elle sépare deux mondes économiques contrastés : prospérité américaine vs instabilité mexicaine. Depuis 1994 (ALENA), les flux migratoires ont explosé, poussés par la pauvreté mexicaine et attirés par les opportunités nord-américaines. Les États-Unis ont répondu par une militarisation progressive : 700 km de murs/barrières, drones de surveillance, patrouilles frontalières (20 000 agents), et technologies biométriques. L'administration Trump (2017-2021) a radicalisé cette approche avec sa politique 'Build the Wall', ajoutant 450 km de barrières. Cependant, cette frontière révèle les limites du contrôle : tunnels de trafiquants, passages clandestins, et pressions humanitaires (familles séparées). Le Mexique subit les conséquences : criminalisation des migrants, ingérences américaines. Cette frontière incarne les tensions entre sécurité nationale, droits humains, et interdépendances économiques dans un espace intégré."
          }
        },
        {
          title: "Le terrorisme et les menaces intérieures post-11 septembre",
          details: {
            date: "2001-présent",
            figures: "Attentats du 11 septembre : 3 000 morts, Patriot Act adopté",
            context: "Les attentats du 11 septembre 2001 ont profondément transformé la sécurité nord-américaine, initiant une ère de lutte antiterroriste qui structure encore les politiques intérieures et extérieures du continent. Les attaques, perpétrées par Al-Qaïda, ont fait 3 000 morts et révélé les vulnérabilités du territoire américain. La réponse a été massive : création du Department of Homeland Security, adoption du Patriot Act (surveillance accrue), invasions de l'Afghanistan et de l'Irak. Au Canada, des mesures similaires ont été adoptées malgré l'absence d'attentats directs. Cette lutte antiterroriste a généré des dérives : surveillance généralisée, atteintes aux libertés civiles, et stigmatisation des communautés musulmanes. Les menaces intérieures persistent : extrémisme domestique (attaques de Christchurch 2019), cyberterrorisme, et radicalisation en ligne. L'Amérique du Nord doit équilibrer sécurité et libertés démocratiques, révélant les tensions entre efficacité sécuritaire et préservation des droits fondamentaux dans un contexte de peur post-traumatique."
          }
        }
      ]
    },
    {
      id: 5,
      theme: "Économie et intégration régionale",
      sujets: [
        {
          title: "L'USMCA (ex-ALENA) : commerce et investissements nord-américains",
          details: {
            date: "1994-2018 (ALENA), 2020 (USMCA)",
            figures: "PIB combiné 25 000 milliards $, échanges annuels 1 300 milliards $",
            context: "L'Accord États-Unis-Mexique-Canada (USMCA) constitue le cadre institutionnel de l'intégration économique nord-américaine, créant la plus grande zone de libre-échange au monde. Succédant à l'ALENA de 1994, l'USMCA (2020) renforce l'intégration commerciale entre trois économies complémentaires : États-Unis (services et technologie), Canada (ressources naturelles), Mexique (manufacture). Avec un PIB combiné de 25 000 milliards de dollars et des échanges annuels de 1 300 milliards de dollars, cette zone représente 28% du PIB mondial. L'accord modernise les règles : protection des travailleurs mexicains, règlement des différends commerciaux, et adaptation numérique. Cependant, des tensions persistent : droits compensateurs américains sur l'acier canadien, pressions protectionnistes de Trump, et vulnérabilités aux crises globales (pandémie COVID-19). L'USMCA révèle les réussites de l'intégration régionale tout en montrant les difficultés d'une coopération triangulaire dans un contexte d'asymétries de puissance. Le Canada et le Mexique doivent naviguer entre bénéfices économiques et contraintes imposées par leur puissant voisin."
          }
        },
        {
          title: "Les mégalopoles nord-américaines : New York, Los Angeles, Toronto",
          details: {
            date: "Depuis 1950s",
            figures: "New York 19M habitants, Los Angeles 13M, Toronto 6M",
            context: "Les mégalopoles nord-américaines constituent les moteurs économiques et culturels du continent, concentrant innovation, finance, et créativité dans des espaces urbains densément peuplés. New York (19 millions d'habitants) reste le centre financier mondial avec Wall Street, malgré la concurrence asiatique. Los Angeles (13 millions) domine l'industrie du divertissement (Hollywood) et les hautes technologies. Toronto (6 millions) émerge comme hub financier canadien et centre d'innovation technologique. Ces villes génèrent des PIB équivalents à des pays moyens : New York produit plus que la Suisse, Los Angeles plus que l'Arabie saoudite. Elles attirent talents mondiaux et investissements étrangers, mais font face à des défis : gentrification, inégalités sociales, pénuries de logement, et vulnérabilités climatiques (ouragans, incendies). Ces mégalopoles incarnent la prospérité nord-américaine mais aussi ses fractures : entre quartiers aisés et banlieues défavorisées, entre innovation et exclusion sociale. Leur compétition mondiale (vs Shanghai, Londres) révèle l'importance des politiques urbaines pour maintenir l'attractivité nord-américaine."
          }
        },
        {
          title: "L'innovation technologique : Silicon Valley et recherche spatiale",
          details: {
            date: "Depuis 1970s",
            figures: "Silicon Valley : 40% des startups technologiques mondiales",
            context: "L'innovation technologique nord-américaine constitue l'un des piliers de la puissance globale des États-Unis et du Canada, dominée par la Silicon Valley californienne. Créée dans les années 1970 autour des universités Stanford et Berkeley, la Silicon Valley abrite 40% des startups technologiques mondiales et génère des géants comme Apple, Google, Facebook, et Tesla. Cette concentration d'innovation repose sur un écosystème unique : capitaux-risques abondants, main-d'œuvre hautement qualifiée, et culture entrepreneuriale. Le Canada contribue avec ses centres de recherche (Toronto, Vancouver) et des succès comme Shopify ou Research In Motion. La recherche spatiale, dominée par la NASA américaine, place les États-Unis en tête des explorations lunaires et martiennes. Cependant, des défis émergent : dépendance à la Chine pour les terres rares, cybersécurité, et régulation antitrust (procès contre les GAFA). Cette innovation révèle les forces nord-américaines (créativité, recherche-développement) mais aussi ses vulnérabilités dans un monde de plus en plus multipolaire."
          }
        },
        {
          title: "Les chaînes de valeur globales et la dépendance aux importations",
          details: {
            date: "Depuis 1990s",
            figures: "80% des importations électroniques des États-Unis viennent d'Asie",
            context: "Les chaînes de valeur globales structurent l'économie nord-américaine, créant des interdépendances complexes mais aussi des vulnérabilités stratégiques. L'intégration nord-américaine via l'USMCA a créé des chaînes de valeur régionales : automobiles (détails mexicains, assemblage américain), électronique (composants asiatiques assemblés au Mexique). Cependant, l'Amérique du Nord reste dépendante des importations asiatiques : 80% des importations électroniques américaines viennent de Chine, Taiwan, et Corée du Sud. Cette dépendance s'est révélée critique pendant la pandémie COVID-19 (pénuries de masques, médicaments) et les tensions sino-américaines. Les États-Unis cherchent à 'reshorer' certaines productions (semiconducteurs, batteries), mais les coûts élevés limitent ces efforts. Le Canada et le Mexique sont pris entre leur intégration nord-américaine et les pressions de diversification. Ces chaînes de valeur révèlent les avantages de la mondialisation (efficacité, coûts réduits) mais aussi ses risques : ruptures d'approvisionnement, chantage économique, et dépendance stratégique envers des concurrents géopolitiques."
          }
        }
      ]
    },
    {
      id: 6,
      theme: "Enjeux environnementaux et énergétiques",
      sujets: [
        {
          title: "Les États-Unis et le changement climatique : retraits et engagements",
          details: {
            date: "Depuis 1992",
            figures: "Retrait de l'Accord de Paris (2017-2021), réadhésion en 2021",
            context: "La politique américaine face au changement climatique révèle les contradictions internes de la première puissance mondiale, alternant entre leadership environnemental et négationnisme climatique. Signataire du protocole de Kyoto (1997) puis de l'Accord de Paris (2015), les États-Unis ont émis 25% des gaz à effet de serre historiques. L'administration Obama a engagé le pays dans la transition énergétique, mais Trump a retiré les États-Unis de l'Accord de Paris (2017), privilégiant l'exploitation des énergies fossiles. Biden a réadhéré en 2021, fixant des objectifs ambitieux : neutralité carbone en 2050, investissements de 2 000 milliards de dollars dans les renouvelables. Cependant, les divisions partisanes persistent : républicains climatosceptiques vs démocrates engagés. Cette ambivalence affecte la diplomatie climatique : pressions sur la Chine et l'Inde, mais crédibilité réduite. Les États-Unis doivent concilier puissance économique (secteur pétrolier majeur) et impératifs environnementaux mondiaux, révélant les tensions entre intérêts nationaux et responsabilité globale."
          }
        },
        {
          title: "L'exploitation des hydrocarbures : schiste, pétrole de l'Alberta",
          details: {
            date: "Depuis 2008 (révolution du schiste)",
            figures: "États-Unis : 13 millions barils/jour, Canada : 4 millions barils/jour",
            context: "L'exploitation des hydrocarbures nord-américains constitue un pilier de l'énergie mondiale, révolutionnée par les avancées technologiques et les enjeux géopolitiques. La révolution du schiste aux États-Unis (depuis 2008) a transformé le pays en premier producteur mondial (13 millions de barils/jour), réduisant la dépendance énergétique et influençant les prix mondiaux. Au Canada, les sables bitumineux de l'Alberta produisent 4 millions de barils/jour, mais avec un impact environnemental majeur (émissions élevées, destruction de forêts boréales). Ces exploitations créent des emplois et des revenus importants, mais génèrent des controverses : pollution de l'eau, séismes induits, et émissions de CO2. Les tensions commerciales (oléoducs canadiens bloqués par des manifestations écologiques) et les pressions environnementales poussent vers la transition énergétique. L'exploitation nord-américaine révèle les dilemmes énergétiques contemporains : abondance énergétique vs contraintes climatiques, prospérité économique vs durabilité environnementale, dans un contexte de compétition mondiale pour les ressources."
          }
        },
        {
          title: "L'Arctique nord-américain : fonte des glaces et nouvelles routes maritimes",
          details: {
            date: "Depuis 2007",
            figures: "Fonte des glaces : 13% par décennie, Passage du Nord-Ouest navigable",
            context: "L'Arctique nord-américain constitue un espace en pleine transformation géopolitique, où le changement climatique ouvre de nouvelles opportunités économiques et sécuritaires. La fonte accélérée des glaces (13% par décennie depuis 2007) rend le Passage du Nord-Ouest navigable pendant l'été, créant une route maritime alternative entre Atlantique et Pacifique. Cette évolution révèle des ressources abondantes : hydrocarbures, minerais rares, et pêcheries. Le Canada revendique la souveraineté sur ces eaux, mais les États-Unis contestent cette interprétation (droit de passage inoffensif). La militarisation s'accélère : bases canadiennes et américaines, patrouilles navales, et exercices militaires conjoints. La Chine s'intéresse à la région via la Route de la Soie polaire. Ces transformations créent des opportunités (commerce, tourisme) mais aussi des risques : accidents écologiques, conflits territoriaux, et course aux ressources. L'Arctique nord-américain révèle l'impact du changement climatique sur la géopolitique : nouvelles routes commerciales vs souverainetés contestées, exploitation économique vs protection environnementale."
          }
        },
        {
          title: "La gestion de l'eau : Grands Lacs et Rio Grande",
          details: {
            date: "Depuis 1909",
            figures: "Grands Lacs : 20% de l'eau douce mondiale, Rio Grande : frontière de 2 000 km",
            context: "La gestion de l'eau constitue un enjeu géopolitique croissant en Amérique du Nord, où les ressources hydriques sont partagées mais inégalement distribuées. Les Grands Lacs, frontière naturelle entre États-Unis et Canada, contiennent 20% de l'eau douce mondiale douce accessible. Leur gestion, régie par le Traité des eaux limitrophes de 1909, implique partage équitable, protection environnementale, et prévention de la pollution. Cependant, des tensions émergent : prélèvements excessifs, espèces invasives, et impacts du changement climatique (niveaux fluctuants). Le Rio Grande, frontière américano-mexicaine de 2 000 km, est au cœur des tensions migratoires et hydriques. Les États-Unis contrôlent les barrages en amont, limitant les débits vers le Mexique, exacerbant les conflits locaux. Le changement climatique aggrave ces enjeux : sécheresses accrues, tempêtes plus violentes. La gestion de l'eau révèle les interdépendances nord-américaines : coopération nécessaire entre pays aux intérêts divergents, entre développement économique et préservation environnementale. Ces ressources vitales deviennent des enjeux de sécurité nationale dans un contexte de stress hydrique croissant."
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
            <Link to="/formation/geopolitique/amerique-nord" className="hover:text-gray-900 transition-colors">
              Amérique du Nord
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
              Études de cas - Amérique du Nord
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Liste complète des études de cas et sujets de dissertation pour l'Amérique du Nord.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/amerique-nord" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/amerique-nord/chronologie" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/amerique-nord/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
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
              <p>• <strong>Comprendre l'asymétrie :</strong> Les États-Unis dominent largement l'Amérique du Nord économiquement et militairement.</p>
              <p>• <strong>Analyser les interdépendances :</strong> Intégration économique, sécurité commune, migrations sont des thèmes essentiels.</p>
              <p>• <strong>Étudier les identités :</strong> Canada, Québec, Mexique ont des spécificités culturelles et politiques.</p>
              <p>• <strong>Maîtriser les cartes :</strong> Frontières, mégalopoles, ressources naturelles sont des éléments géographiques clés.</p>
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

export default AmeriqueNordSujetsPage;

