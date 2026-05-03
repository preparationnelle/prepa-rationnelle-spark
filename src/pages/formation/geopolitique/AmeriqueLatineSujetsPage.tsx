import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, MapPin, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle, List } from 'lucide-react';

const AmeriqueLatineSujetsPage = () => {
  const sujets = [
    {
      id: 1,
      theme: "Héritages coloniaux et indépendances",
      sujets: [
        {
          title: "L'Amérique latine : de l'Empire espagnol aux indépendances (1808-1825)",
          details: {
            date: "1808-1825",
            figures: "Indépendance de 16 pays, population de 20 millions d'habitants",
            context: "Le processus d'indépendance de l'Amérique latine constitue l'une des plus vastes décolonisations de l'histoire moderne, transformant radicalement la carte géopolitique du continent. L'effondrement de l'Empire espagnol, accéléré par l'invasion napoléonienne de 1808, déclenche une vague révolutionnaire qui touche 16 pays et 20 millions d'habitants. Les indépendances, proclamées entre 1810 (Argentine) et 1825 (Bolivie), sont menées par des élites créoles qui s'inspirent des idéaux libéraux européens tout en préservant les structures coloniales. Ce processus révèle les contradictions de l'indépendance latino-américaine : rupture avec l'Espagne mais maintien des hiérarchies sociales, adoption de constitutions républicaines mais émergence de caudillos autoritaires. Les indépendances créent un vide institutionnel qui favorise les guerres civiles et l'instabilité politique, posant les bases des défis contemporains de l'Amérique latine : faiblesse étatique, inégalités sociales, et dépendance économique persistante."
          }
        },
        {
          title: "Simón Bolívar et la Grande Colombie : unité ou fragmentation ?",
          details: {
            date: "1810-1831",
            figures: "Libération de 6 pays, dissolution de la Grande Colombie en 1831",
            context: "Simón Bolívar incarne l'ambition unitaire de l'indépendance latino-américaine, rêvant d'une Grande Colombie qui réunirait les anciennes colonies espagnoles dans une fédération. Le 'Libertador' libère personnellement six pays (Venezuela, Colombie, Panama, Pérou, Bolivie, Équateur) entre 1810 et 1825, créant une confédération de 2,5 millions de km². Cependant, la Grande Colombie se dissout en 1831 sous la pression des particularismes régionaux et des ambitions rivales. Cette fragmentation révèle les obstacles structurels à l'unité latino-américaine : diversité géographique (Andes, Amazone, côtes), clivages ethniques (métis, indigènes, esclaves affranchis), et intérêts économiques divergents. Bolívar, visionnaire fédéraliste inspiré par les États-Unis, échoue face aux réalités de la fragmentation coloniale espagnole. Son échec pose la question durable de l'unité latino-américaine : tentatives d'intégration (Mercosur, ALBA) alternent avec replis nationalistes, révélant les tensions entre idéal panaméricain et réalités géopolitiques fragmentées."
          }
        },
        {
          title: "Le Brésil : empire portugais et monarchie constitutionnelle",
          details: {
            date: "1808-1889",
            figures: "Empire de 81 ans, superficie de 8,5 millions km²",
            context: "Le Brésil constitue l'exception monarchique de l'indépendance latino-américaine, évoluant d'une colonie portugaise à un empire constitutionnel sans révolution violente. Le transfert de la cour portugaise au Brésil en 1808, pour fuir l'invasion napoléonienne, transforme Rio en capitale impériale. L'indépendance pacifique de 1822, négociée par Dom Pedro Ier, préserve les structures coloniales : maintien de l'esclavage, centralisation administrative, et économie exportatrice. L'empire brésilien (1822-1889) dure 67 ans, plus longtemps que les républiques voisines instables. Cette stabilité relative s'explique par l'absence de guerres civiles destructrices et la continuité institutionnelle portugaise. Cependant, l'empire s'effondre en 1889 sous la pression républicaine, révélant les contradictions internes : abolition de l'esclavage tardive (1888), question sociale non résolue, et montée du positivisme républicain. Le Brésil monarchique révèle les voies alternatives d'indépendance : continuité institutionnelle vs ruptures révolutionnaires, stabilité politique vs dynamismes démocratiques."
          }
        },
        {
          title: "Les caudillos et l'instabilité politique du XIXe siècle",
          details: {
            date: "1820s-1870s",
            figures: "Plus de 50 caudillos identifiés, guerres civiles dans tous les pays",
            context: "L'ère des caudillos constitue l'âge d'or de l'instabilité politique en Amérique latine, caractérisée par des chefs militaires charismatiques qui dominent la vie politique du XIXe siècle. Plus de 50 caudillos sont identifiés dans la région, de Juan Manuel de Rosas (Argentine) à Porfirio Díaz (Mexique), incarnant un mélange de populisme rural, autoritarisme militaire, et clientélisme politique. Ces leaders émergent du vide institutionnel post-indépendances, offrant protection aux populations rurales contre l'anarchie urbaine. Leur pouvoir repose sur des armées privées, des réseaux clientélistes, et une rhétorique nationaliste anti-élitiste. L'ère caudilliste génère une instabilité chronique : guerres civiles, pronunciamientos militaires, et alternances de régimes. Elle révèle les faiblesses des jeunes républiques : absence d'institutions solides, clivages entre libéraux urbains et conservateurs ruraux, et difficultés d'intégration nationale. Les caudillos préfigurent les populismes contemporains latino-américains, montrant comment l'instabilité politique peut devenir une norme institutionnelle dans les sociétés post-coloniales."
          }
        }
      ]
    },
    {
      id: 2,
      theme: "Populismes et nationalismes latino-américains",
      sujets: [
        {
          title: "Le péronisme en Argentine : corporatisme et justice sociale",
          details: {
            date: "1946-1955, retour depuis 2003",
            figures: "Trois présidents péronistes, syndicat CGT 3 millions de membres",
            context: "Le péronisme constitue l'idéologie dominante de l'Argentine contemporaine, mélangeant nationalisme économique, justice sociale, et populisme charismatique. Fondé par Juan Domingo Perón en 1946, il repose sur trois piliers : justice sociale (droits des travailleurs), indépendance économique (nationalisations), et souveraineté politique (troisième position entre capitalisme et communisme). Perón industrialise l'Argentine, crée la sécurité sociale universelle, et mobilise les masses ouvrières à travers sa femme Eva ('Evita'). Le mouvement survit aux exils de Perón (1955-1973) et à la dictature (1976-1983), revenant au pouvoir avec Néstor Kirchner (2003-2007) puis Cristina Fernández (2007-2015). Le péronisme révèle les ambivalences du populisme latino-américain : redistribution sociale vs inflation chronique, mobilisation populaire vs clientélisme, anti-impérialisme vs pragmatisme économique. Il incarne la tension entre justice sociale et stabilité macroéconomique qui structure la politique argentine depuis huit décennies."
          }
        },
        {
          title: "La Révolution cubaine (1959) : castrisme et internationalisme",
          details: {
            date: "1959-présent",
            figures: "Survie du régime 65 ans, influence dans 30 pays africains",
            context: "La Révolution cubaine de 1959 constitue l'événement fondateur du castrisme, transformant une île des Caraïbes en puissance idéologique mondiale. Fidel Castro, Che Guevara, et leurs barbudos renversent le dictateur Batista, établissant le premier État communiste des Amériques. Le castrisme combine marxisme-léninisme, nationalisme anti-impérialiste, et internationalisme tiers-mondiste : réforme agraire radicale, nationalisation des entreprises étrangères, et soutien aux mouvements de libération (Angola, Nicaragua, Grenade). Cuba devient un phare du tiers-monde, formant médecins et enseignants pour 160 pays. Cependant, le régime survit au prix d'un embargo américain de 60 ans, révélant les paradoxes du castrisme : égalitarisme social (gratuité des soins) vs autoritarisme politique, internationalisme vs isolement diplomatique, résistance anti-impérialiste vs dépendance soviétique puis chinoise. La révolution cubaine incarne l'idéal révolutionnaire latino-américain, inspirant générations de militants tout en posant la question de la viabilité d'un socialisme dans un petit État insulaire."
          }
        },
        {
          title: "Le sandinisme au Nicaragua et les révolutions sandinistes",
          details: {
            date: "1979-1990, retour depuis 2006",
            figures: "Révolution de 1979, élections perdues en 1990 puis gagnées en 2006",
            context: "Le sandinisme nicaraguayen incarne la révolution tiers-mondiste latino-américaine, mêlant marxisme, christianisme de libération, et nationalisme anti-impérialiste. Le Front sandiniste de libération nationale (FSLN), fondé en 1961, renverse la dictature Somoza en 1979 avec l'aide cubaine et costaricienne. Le régime sandiniste (1979-1990) nationalise les terres, réforme agraire, et lance une campagne d'alphabétisation massive. Cependant, la Contra américaine, financée par Reagan, déclenche une guerre civile dévastatrice. Les sandinistes perdent les élections de 1990 face à Violeta Chamorro, marquant la fin de la guerre froide. Le FSLN revient au pouvoir en 2006 avec Daniel Ortega, désormais allié des conservateurs. Le sandinisme révèle l'évolution des révolutions latino-américaines : radicalisme initial vs pragmatisme électoral, tiers-mondisme vs intégration régionale, révolution sociale vs préservation du pouvoir. Il incarne les cycles révolutionnaires de l'Amérique latine : enthousiasme initial, guerre civile, et compromis institutionnel."
          }
        },
        {
          title: "Hugo Chávez et le socialisme du XXIe siècle au Venezuela",
          details: {
            date: "1999-2013",
            figures: "14 ans au pouvoir, nationalisations de 1 000 entreprises",
            context: "Hugo Chávez incarne le populisme radical latino-américain du XXIe siècle, fondant le 'socialisme du XXIe siècle' comme alternative au néolibéralisme. Élu en 1998 sur une vague anti-élitiste, Chávez nationalise l'industrie pétrolière (60% des recettes publiques), lance des programmes sociaux (missions bolivariennes), et promeut l'intégration régionale (ALBA). Son charisme télévisuel et son anti-impérialisme séduisent les classes populaires, masquant une dérive autoritaire : réforme constitutionnelle pour se maintenir au pouvoir, répression des opposants, et alliance avec Cuba/Iran. La mort de Chávez (2013) laisse un pays divisé : partisans loyaux vs opposition démocratique. Le chavisme révèle les paradoxes du populisme pétrolier : redistribution massive vs inflation galopante (1 million %), souveraineté énergétique vs dépendance aux prix du pétrole, justice sociale vs clientélisme. Il préfigure les crises contemporaines du Venezuela : hyperinflation, migrations massives, et ingérences internationales, montrant les dangers d'un populisme sans institutions solides."
          }
        }
      ]
    },
    {
      id: 3,
      theme: "Démocratie et autoritarismes",
      sujets: [
        {
          title: "Les dictatures militaires en Amérique latine (1960-1980)",
          details: {
            date: "1960-1980",
            figures: "13 pays sous dictatures militaires, 50 000 desaparecidos",
            context: "L'ère des dictatures militaires constitue l'un des chapitres les plus sombres de l'histoire latino-américaine, marquée par la répression généralisée et les violations massives des droits de l'homme. Treize pays connaissent des coups d'État militaires entre 1960 et 1980 (Brésil 1964, Chili 1973, Argentine 1976, Uruguay 1973, etc.), justifiés par la 'doctrine de sécurité nationale' contre la menace communiste. Ces régimes, souvent soutenus par les États-Unis dans le contexte de la Guerre Froide, pratiquent une répression systématique : tortures, disparitions forcées (50 000 victimes), et guerres sales contre les guérillas. Les dictatures s'accompagnent d'économies néolibérales précoces (Chicago Boys au Chili) et de modernisation autoritaire. Leur chute progressive (Brésil 1985, Argentine 1983) révèle les limites de l'autoritarisme : crises économiques, isolement international, et résistances populaires. Ces régimes laissent un héritage traumatique : sociétés divisées, impunité persistante, et défiance envers les institutions. Ils incarnent les cycles autoritaires de l'Amérique latine : ruptures démocratiques suivies de restaurations autoritaires."
          }
        },
        {
          title: "La transition démocratique au Chili : Pinochet et après",
          details: {
            date: "1973-1990",
            figures: "Dictature de 17 ans, transition pacifique vers la démocratie",
            context: "Le Chili constitue le modèle de transition démocratique latino-américaine, passant d'une dictature brutale à une démocratie consolidée sans guerre civile. Le coup d'État de Pinochet (1973) renverse Salvador Allende, établissant une dictature néolibérale qui privatise l'économie et réprime violemment l'opposition (3 000 morts, 30 000 torturés). Cependant, Pinochet organise un référendum en 1988 qu'il perd, permettant une transition négociée. Le président Patricio Aylwin (1990-1994) instaure la démocratie tout en préservant les réformes économiques pinochetistes. Cette transition réussie s'explique par plusieurs facteurs : défaite électorale de Pinochet, pactes entre élites, et institutions solides préservées. Le Chili devient un modèle de stabilité : croissance économique, alternances démocratiques, et consolidation institutionnelle. Cependant, des tensions persistent : demandes de justice pour les victimes, inégalités sociales, et contestations récentes (mouvement étudiant 2011-2013). La transition chilienne révèle les conditions d'une démocratisation réussie : négociation élitiste, continuité économique, et mémoire historique équilibrée."
          }
        },
        {
          title: "Le Brésil : de la dictature à la démocratie (1964-1985)",
          details: {
            date: "1964-1985",
            figures: "21 ans de dictature, transition via élections directes",
            context: "La transition démocratique brésilienne constitue l'une des plus longues et complexes d'Amérique latine, passant d'une dictature militaire à une démocratie électorale en 21 ans. Le coup d'État de 1964, soutenu par les États-Unis, établit un régime autoritaire qui modernise l'économie (miracle brésilien) mais réprime l'opposition (exil, torture). La dictature s'effondre progressivement sous la pression économique (crise de la dette 1980) et populaire. La transition s'opère par négociation : amnistie générale, élections indirectes (Tancredo Neves 1985), puis directes (Collor de Mello 1990). Le Brésil devient la plus grande démocratie d'Amérique latine, avec alternances pacifiques et institutions solides. Cependant, des défis persistent : corruption endémique (Lula, Temer), inégalités extrêmes, et populisme (Bolsonaro). La transition brésilienne révèle les complexités de la démocratisation : lenteur nécessaire pour consolider les institutions, tensions entre justice et réconciliation, et difficultés d'une démocratie de masse dans un pays continental. Elle montre comment l'autoritarisme peut laisser place à la démocratie sans rupture violente."
          }
        },
        {
          title: "La corruption et les crises institutionnelles contemporaines",
          details: {
            date: "Depuis 2000",
            figures: "Scandales Lava Jato (Brésil), Odebrecht (multi-pays)",
            context: "La corruption constitue l'un des fléaux contemporains les plus destructeurs pour les démocraties latino-américaines, révélant les faiblesses institutionnelles persistantes du continent. Depuis les années 2000, des scandales massifs ont éclaté : Lava Jato au Brésil (emprisonnement de Lula), Odebrecht (pots-de-vin dans 12 pays), et Panama Papers (évasion fiscale). Ces affaires impliquent politiciens, entreprises multinationales, et partis politiques, montrant comment la corruption structure l'économie politique régionale. Elle génère des crises institutionnelles : destitutions (Dilma Rousseff Brésil 2016, Dilma Paraguay 2012), manifestations massives (Pérou 2020), et défiance populaire envers les élites. Les causes sont multiples : clientélisme hérité du colonialisme, faiblesse des institutions de contrôle, et économie informelle généralisée. Les réponses varient : justice indépendante (Brésil), mouvements citoyens (Chili), mais la corruption persiste. Elle révèle les paradoxes latino-américains : croissance économique vs institutions fragiles, démocratie électorale vs qualité démocratique, développement vs impunité. La lutte contre la corruption conditionne l'avenir des démocraties latino-américaines."
          }
        }
      ]
    },
    {
      id: 4,
      theme: "Intégrations régionales et organisations",
      sujets: [
        {
          title: "Le Mercosur : intégration économique sud-américaine",
          details: {
            date: "1991-présent",
            figures: "5 pays membres, PIB combiné 4 000 milliards $, union douanière",
            context: "Le Mercosur constitue la principale organisation d'intégration économique d'Amérique du Sud, regroupant l'Argentine, le Brésil, le Paraguay, l'Uruguay, et le Venezuela (suspendu depuis 2017). Créé en 1991 par le Traité d'Asunción, il vise une intégration progressive : zone de libre-échange (1995), union douanière (1995), puis marché commun. Avec un PIB combiné de 4 000 milliards de dollars, le Mercosur représente 70% du PIB sud-américain et 3% du commerce mondial. Ses succès incluent l'élimination des droits de douane internes et l'harmonisation des politiques commerciales. Cependant, des crises ont freiné l'intégration : crise argentine (2001), tensions Brésil-Argentine, et crise institutionnelle (Paraguay suspendu en 2012). Le Mercosur révèle les difficultés de l'intégration latino-américaine : asymétries économiques (Brésil dominant), souverainismes nationaux, et concurrence des accords bilatéraux (UE, États-Unis). Il incarne l'ambition d'unité sud-américaine face aux défis de la mondialisation, mais doit composer avec les réalités géopolitiques fragmentées du continent."
          }
        },
        {
          title: "L'ALBA : alternative bolivarienne aux accords de libre-échange",
          details: {
            date: "2004-présent",
            figures: "11 pays membres, commerce intra-ALBA 20 milliards $",
            context: "L'Alliance bolivarienne pour les Amériques (ALBA) constitue l'alternative anti-libérale à l'intégration régionale latino-américaine, promue par Hugo Chávez comme contre-modèle aux accords de libre-échange nord-américains. Créée en 2004 par Cuba et Venezuela, elle regroupe 11 pays (Bolivie, Nicaragua, Équateur, etc.) autour de principes alternatifs : commerce équitable, coopération sociale, et souveraineté énergétique. L'ALBA privilégie les échanges compensés (trocs), les monnaies communes (SUCRE), et la mutualisation des ressources. Ses réalisations incluent la gratuité des soins médicaux (opération Miracle) et des programmes sociaux transnationaux. Cependant, l'ALBA peine à concurrencer économiquement le Mercosur ou l'USMCA, souffrant de la dépendance aux prix du pétrole vénézuélien et des divisions internes. Elle révèle les tensions idéologiques latino-américaines : socialisme bolivarien vs libéralisme économique, souveraineté vs intégration marchande. L'ALBA incarne la résistance anti-impérialiste mais doit composer avec les contraintes économiques de ses membres les plus pauvres."
          }
        },
        {
          title: "L'Organisation des États américains (OEA) : multilatéralisme régional",
          details: {
            date: "1948-présent",
            figures: "35 États membres, interventions dans 20 pays",
            context: "L'Organisation des États américains (OEA) constitue le principal forum multilatéral des Amériques, héritière de la doctrine Monroe et du panaméricanisme. Créée en 1948 à Bogotá, elle regroupe 35 États membres autour de principes démocratiques, de sécurité collective, et de coopération économique. L'OEA a joué un rôle clé dans les transitions démocratiques (missions d'observation électorale dans 20 pays) et les interventions de paix (Haïti, Nicaragua). Sa Charte démocratique permet de sanctionner les ruptures constitutionnelles. Cependant, l'OEA est critiquée pour son alignement sur Washington : exclusion de Cuba (1962-2009), soutien aux interventions américaines (République Dominicaine 1965). Depuis les années 2000, les pays progressistes (ALBA) contestent son hégémonie, créant des forums alternatifs. L'OEA révèle les ambivalences du multilatéralisme américain : promotion de la démocratie vs ingérences, unité continentale vs divisions idéologiques. Elle incarne le rêve bolivarien d'unité des Amériques, mais doit naviguer entre hégémonie américaine et aspirations souverainistes."
          }
        },
        {
          title: "L'Union des nations sud-américaines (UNASUR/UNASUL)",
          details: {
            date: "2008-2019",
            figures: "12 pays membres, suspendue en 2019",
            context: "L'Union des nations sud-américaines (UNASUR) incarnait l'ambition d'intégration sud-américaine post-néolibérale, créée en 2008 par les présidents progressistes (Chávez, Lula, Kirchner) comme alternative à l'OEA. Regroupant 12 pays, l'UNASUR visait une intégration politique, économique, et sociale : parlement commun, banque de développement, mécanismes de résolution des conflits. Ses succès incluent la médiation dans la crise bolivienne (2008) et le renforcement des liens Sud-Sud. Cependant, l'UNASUR s'effondre en 2019 sous la pression des virages à droite (Bolsonaro Brésil, Macri Argentine) et des divisions internes. Elle révèle les limites de l'intégration idéologique : dépendance aux majorités progressistes, difficultés institutionnelles, et concurrence avec le Mercosur. La dissolution de l'UNASUR marque la fin du cycle progressiste latino-américain, laissant un vide institutionnel. Elle montre comment les organisations régionales peuvent être instrumentalisées politiquement, reflétant les cycles électoraux plutôt que les intérêts structurels. L'UNASUR préfigure les défis contemporains : nécessité d'institutions supranationales vs souverainetés nationales."
          }
        }
      ]
    },
    {
      id: 5,
      theme: "Défis socio-économiques contemporains",
      sujets: [
        {
          title: "Les inégalités sociales et la pauvreté en Amérique latine",
          details: {
            date: "Depuis 1980s",
            figures: "Indice de Gini 0,5 (plus inégalitaire au monde), 200 millions de pauvres",
            context: "Les inégalités sociales constituent le défi structurel majeur de l'Amérique latine contemporaine, malgré trois décennies de croissance économique. Avec un indice de Gini de 0,5 (le plus élevé au monde), la région concentre les écarts de revenus les plus extrêmes : 1% des plus riches détient 40% de la richesse, tandis que 200 millions de personnes vivent dans la pauvreté. Ces inégalités s'expliquent par l'héritage colonial (concentrations foncières), les politiques néolibérales des années 1980-1990, et la financiarisation de l'économie. Elles génèrent des instabilités sociales : émeutes de la faim (Venezuela 2017), mouvements indigènes (Équateur 2019), et populismes radicaux. Les réponses incluent des politiques redistributives (Bourse familiale Brésil), mais les progrès sont lents. Les inégalités révèlent les paradoxes latino-américains : croissance économique (Brésil, Mexique) vs exclusion sociale massive, démocraties électorales vs sociétés fracturées. Elles conditionnent l'avenir du continent : stabilité sociale ou conflits généralisés."
          }
        },
        {
          title: "Le narcotrafic : cartels mexicains et colombiens",
          details: {
            date: "Depuis 1970s",
            figures: "Trafic annuel 50 milliards $, 150 000 morts au Mexique depuis 2006",
            context: "Le narcotrafic constitue l'une des principales menaces sécuritaires et économiques de l'Amérique latine, transformant des États en narco-États. Au Mexique, les cartels (Sinaloa, Jalisco Nueva Generación) contrôlent des régions entières, générant 50 milliards de dollars annuels et causant 150 000 morts depuis 2006. En Colombie, malgré l'accord de paix (2016), les dissidents des FARC et le Clan du Golfe maintiennent le trafic de cocaïne (premier producteur mondial). Le narcotrafic révèle les interdépendances transnationales : production andine, transit mexicain, consommation nord-américaine. Il génère violence généralisée, corruption institutionnelle, et migrations forcées. Les réponses varient : guerre contre les cartels (Mexique), accords de paix (Colombie), mais les résultats sont mitigés. Le narcotrafic incarne les défis de la guerre contre la drogue : échec des politiques prohibitionnistes, prospérité des économies criminelles, et dilemmes sécuritaires (droits de l'homme vs efficacité). Il structure la géopolitique régionale, influençant les relations avec les États-Unis et l'intégration continentale."
          }
        },
        {
          title: "L'extractivisme : mines, pétrole et environnement en Amazonie",
          details: {
            date: "Depuis 1950s",
            figures: "Déforestation de 20% de l'Amazonie, 500 milliards $ de ressources extraites",
            context: "L'extractivisme constitue le modèle économique dominant de l'Amérique latine, générant prospérité mais destruction environnementale massive. Mines (Chili, Pérou), pétrole (Venezuela, Équateur), et agro-industrie (Brésil, Argentine) représentent 500 milliards de dollars d'exportations annuelles. L'Amazonie, 'poumon de la Terre', subit une déforestation accélérée : 20% détruit depuis 1950, principalement pour le soja brésilien et le bétail. Les impacts sont dramatiques : perte de biodiversité, émissions de CO2, et conflits socio-environnementaux (indigènes Yanomami). Les pays extractivistes connaissent des 'malédictions des ressources' : dépendance économique, corruption, et conflits armés (Colombie). Les alternatives émergent : transition énergétique (Chili solaire), certification environnementale, et économie verte. L'extractivisme révèle les dilemmes latino-américains : développement économique vs préservation environnementale, souveraineté nationale vs responsabilités globales. L'avenir dépend de la capacité à concilier exploitation des ressources et durabilité environnementale."
          }
        },
        {
          title: "Les migrations intra et extra-régionales",
          details: {
            date: "Depuis 1980s",
            figures: "30 millions de Latino-Américains à l'étranger, 7 millions de Vénézuéliens déplacés",
            context: "Les migrations constituent l'un des phénomènes démographiques majeurs de l'Amérique latine contemporaine, révélant les asymétries économiques et sécuritaires du continent. 30 millions de Latino-Américains vivent à l'étranger, principalement aux États-Unis (Mexique, Salvador) et en Espagne (Équateur, Colombie). Les causes sont multiples : pauvreté économique, violence des cartels, et instabilité politique (Venezuela : 7 millions de déplacés). Les migrations intra-régionales augmentent : Colombiens au Chili, Haïtiens au Brésil. Les destinations extra-régionales (États-Unis, Europe) génèrent des tensions sécuritaires : murs frontaliers, politiques anti-immigration, et criminalisation des migrants. Cependant, les remises de fonds (50 milliards de dollars/an) constituent une ressource économique vitale. Les migrations révèlent les interdépendances continentales : fuite des cerveaux vs transferts de compétences, crises humanitaires vs opportunités économiques. Elles posent la question de l'intégration régionale : facilitation des mobilités vs souveraineté nationale, droits humains vs contrôles sécuritaires."
          }
        }
      ]
    },
    {
      id: 6,
      theme: "Géopolitique des grandes puissances",
      sujets: [
        {
          title: "Les États-Unis en Amérique latine : doctrine Monroe et interventions",
          details: {
            date: "1823-présent",
            figures: "Doctrine Monroe (1823), plus de 30 interventions militaires",
            context: "La présence américaine en Amérique latine constitue l'hégémonie la plus durable de l'histoire moderne, fondée sur la doctrine Monroe (1823) proclamant l'hémisphère occidental 'zone d'influence exclusive' des États-Unis. Cette doctrine justifie plus de 30 interventions militaires (Mexique 1846, Nicaragua 1912, Guatemala 1954, Grenade 1983, Panama 1989) et soutient des dictatures (Pinochet Chili, Somoza Nicaragua). Les motivations varient : sécurité (canal de Panama), intérêts économiques (bananes Guatemala), et anti-communisme (Guerre Froide). Depuis les années 1990, l'approche évolue vers le soft power : accords de libre-échange (USMCA), aide au développement, et promotion démocratique. Cependant, les critiques persistent : ingérences passées, politiques migratoires restrictives, et concurrence chinoise. Les États-Unis restent la puissance dominante mais doivent composer avec les aspirations souverainistes latino-américaines, révélant les limites de l'hégémonie unilatérale dans un monde multipolaire."
          }
        },
        {
          title: "La Chine en Amérique latine : investissements et nouvelles routes de la soie",
          details: {
            date: "Depuis 2000s",
            figures: "150 milliards $ d'investissements chinois, 20% du commerce latino-américain",
            context: "La montée de la Chine constitue la transformation géopolitique majeure de l'Amérique latine depuis les années 2000, offrant une alternative à l'hégémonie américaine traditionnelle. Les investissements chinois atteignent 150 milliards de dollars, principalement dans les infrastructures (chemins de fer Pérou, ports Équateur) et les ressources naturelles (cuivre Chili, pétrole Venezuela). La Chine représente 20% du commerce latino-américain, privilégiant les matières premières contre des biens manufacturés. Cette présence génère des opportunités économiques mais aussi des dépendances : dette excessive (Sri Lanka comme avertissement), transferts technologiques limités, et ingérences politiques. Les pays progressistes (Venezuela, Bolivie) voient la Chine comme allié anti-impérialiste, tandis que les conservateurs (Chili, Colombie) l'utilisent pour diversifier leurs partenaires. La Chine révèle les dynamiques multipolaires : déclin relatif des États-Unis, émergence de nouvelles dépendances, et compétition pour l'influence régionale. L'Amérique latine devient un terrain d'affrontement sino-américain."
          }
        },
        {
          title: "La Russie et Cuba : alliance stratégique et coopération militaire",
          details: {
            date: "Depuis 1960",
            figures: "Base navale russe à Tartous (Syrie), alliance Cuba-Russie depuis 1960",
            context: "L'alliance entre la Russie et Cuba constitue l'une des relations bilatérales les plus durables de l'histoire récente, survivant à la Guerre Froide et structurant la géopolitique latino-américaine. Établie en 1960 avec Khrouchtchev et Castro, elle repose sur l'aide militaire soviétique (missiles de 1962, entraînement des forces cubaines) et le soutien diplomatique. Cuba devient le principal allié latino-américain de Moscou, accueillant une base d'espionnage électronique et coopérant militairement. Poutine renforce cette alliance : visites d'État, investissements pétroliers, et ventes d'armes. La Russie utilise Cuba comme tête de pont latino-américaine, concurrençant les États-Unis et la Chine. Cette relation révèle les stratégies russes : soft power idéologique (anti-impérialisme), présence militaire limitée mais symbolique, et exploitation des divisions régionales. Pour Cuba, elle constitue une assurance sécuritaire face à l'hostilité américaine. L'alliance Russie-Cuba incarne la résilience des partenariats hérités de la Guerre Froide dans un monde multipolaire."
          }
        },
        {
          title: "L'Union européenne et l'Amérique latine : accords de partenariat",
          details: {
            date: "Depuis 1990s",
            figures: "Accords UE-Mercosur (2019), aide de 5 milliards €/an",
            context: "L'Union européenne constitue un partenaire alternatif pour l'Amérique latine, promouvant une relation fondée sur les valeurs démocratiques et le développement durable. Depuis les années 1990, l'UE signe des accords de partenariat avec tous les pays latino-américains, culminant avec l'accord UE-Mercosur (2019) créant la plus grande zone de libre-échange au monde. L'aide européenne atteint 5 milliards d'euros annuels, ciblant la démocratie, les droits de l'homme, et la transition environnementale. L'UE soutient les transitions démocratiques (missions d'observation électorale) et les intégrations régionales (appui au Mercosur). Cependant, son influence reste limitée par la distance géographique, les priorités internes (Brexit, crises migratoires), et la concurrence des puissances émergentes (Chine). Les pays progressistes voient l'UE comme modèle, tandis que les conservateurs privilégient les États-Unis. L'Union européenne révèle les limites du soft power européen : promotion de normes vs contraintes budgétaires, multilatéralisme vs réalisme géopolitique."
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
            <Link to="/formation/geopolitique/amerique-latine" className="hover:text-gray-900 transition-colors">
              Amérique latine
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
              Études de cas - Amérique latine
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Liste complète des études de cas et sujets de dissertation pour l'Amérique latine.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/amerique-latine" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/amerique-latine/chronologie" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/amerique-latine/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
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
              <p>• <strong>Comprendre la diversité :</strong> L'Amérique latine comprend 20 pays avec des histoires et des contextes différents.</p>
              <p>• <strong>Maîtriser les cycles :</strong> Alternance entre démocraties, dictatures, populismes et transitions.</p>
              <p>• <strong>Analyser les dépendances :</strong> Relations avec les États-Unis, intégrations régionales, ressources naturelles.</p>
              <p>• <strong>Étudier les cas pratiques :</strong> Cuba, Venezuela, Brésil, Mexique sont des études de cas essentielles.</p>
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

export default AmeriqueLatineSujetsPage;

