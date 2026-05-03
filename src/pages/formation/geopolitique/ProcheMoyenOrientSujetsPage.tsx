import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronRight, Home, BookOpen, Globe, MapPin, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle, List } from 'lucide-react';

const ProcheMoyenOrientSujetsPage = () => {
  const sujets = [
    {
      id: 1,
      theme: "Héritage ottoman et construction des États-nations",
      sujets: [
        {
          title: "Le démantèlement de l'Empire ottoman et les accords Sykes-Picot (1916)",
          details: {
            date: "1916-1922",
            figures: "Accords Sykes-Picot, Traité de Sèvres (1920), Traité de Lausanne (1923)",
            context: "Le démantèlement de l'Empire ottoman constitue l'un des événements fondateurs de la géopolitique moyen-orientale moderne. Après la défaite de l'Empire ottoman lors de la Première Guerre mondiale, les accords Sykes-Picot de 1916, négociés secrètement entre la France et le Royaume-Uni, redessinent arbitrairement les frontières de la région. Ces accords divisent le Moyen-Orient en zones d'influence française et britannique, ignorant complètement les réalités ethniques, religieuses et tribales locales. Le Traité de Sèvres (1920) tente d'officialiser ce partage mais est rejeté par la Turquie kémaliste, conduisant au Traité de Lausanne (1923) qui reconnaît l'indépendance turque. Ces accords créent des États artificiels (Syrie, Liban, Irak, Jordanie, Palestine) dont les frontières ne correspondent pas aux identités culturelles, posant les bases des conflits futurs. Ils révèlent également les contradictions du colonialisme européen : promotion de l'autodétermination wilsonienne vs partage impérialiste des territoires ottomans."
          }
        },
        {
          title: "La création d'Israël (1948) et le conflit israélo-arabe",
          details: {
            date: "1948",
            figures: "Plan de partage ONU (1947), Guerre de 1948, 750 000 réfugiés palestiniens",
            context: "La création de l'État d'Israël en 1948 constitue l'événement fondateur du conflit israélo-arabe et l'une des crises géopolitiques majeures du XXe siècle. Suite à la Shoah et au mouvement sioniste, l'ONU adopte en novembre 1947 un plan de partage de la Palestine mandataire britannique, prévoyant la création de deux États (juif et arabe) et l'internationalisation de Jérusalem. Ce plan est accepté par les dirigeants juifs mais rejeté par les Arabes palestiniens et les pays arabes voisins. Le 14 mai 1948, David Ben Gourion proclame l'indépendance d'Israël, déclenchant immédiatement la guerre israélo-arabe. Les combats se soldent par une victoire israélienne, l'État hébreu contrôlant 78% du territoire palestinien (contre 56% prévu par l'ONU) et provoquant l'exode de 750 000 Palestiniens (Nakba). Ce conflit pose les bases de la question palestinienne, avec l'émergence du problème des réfugiés et l'hostilité structurelle des pays arabes envers Israël, structurant la géopolitique moyen-orientale jusqu'à aujourd'hui."
          }
        },
        {
          title: "Les monarchies pétrolières du Golfe : évolution et stabilité",
          details: {
            date: "Depuis 1930s",
            figures: "6 monarchies du CCG, 40% des réserves pétrolières mondiales",
            context: "Les monarchies pétrolières du Golfe constituent l'un des systèmes politiques les plus stables du Moyen-Orient malgré les turbulences régionales. Les six pays du Conseil de coopération du Golfe (Arabie saoudite, Émirats arabes unis, Qatar, Bahreïn, Koweït, Oman) détiennent 40% des réserves pétrolières mondiales, base de leur prospérité économique et de leur stabilité politique. Leur évolution depuis les années 1930 suit un modèle similaire : découverte du pétrole, constitution de rentes pétrolières massives, modernisation accélérée sans démocratisation. Ces monarchies absolues maintiennent leur légitimité par la redistribution sociale (État-providence), la répression politique contrôlée, et les alliances stratégiques avec les puissances occidentales. Cependant, elles font face à des défis contemporains : volatilité des prix du pétrole, pressions démocratiques internes, rivalités régionales (Arabie saoudite/Iran), et transitions générationnelles. Le Golfe incarne le paradoxe moyen-oriental : prospérité économique extrême couplée à un autoritarisme politique persistant, dans une région en proie aux révolutions et aux guerres civiles."
          }
        },
        {
          title: "Le kémalisme et la laïcité en Turquie",
          details: {
            date: "1923-1938",
            figures: "République proclamée en 1923, Constitution de 1924",
            context: "Le kémalisme constitue l'idéologie fondatrice de la Turquie moderne, marquant une rupture radicale avec l'héritage ottoman et islamique. Mustafa Kemal Atatürk, vainqueur de la Guerre d'indépendance (1919-1922), proclame la République en 1923 et entreprend une révolution culturelle profonde : abolition du califat, adoption de l'alphabet latin, réforme vestimentaire, émancipation des femmes. La Constitution de 1924 établit un État laïc, séparant religion et politique, avec un contrôle étatique sur les institutions islamiques. Le kémalisme repose sur six principes : républicanisme, nationalisme, laïcité, populisme, étatism, et révolutionnarisme. Cette doctrine assure la stabilité de la Turquie pendant des décennies, modernisant le pays et le positionnant comme puissance régionale. Cependant, elle génère aussi des tensions : répression des identités kurde et islamiste, débat sur la laïcité face à la montée de l'islam politique. Le kémalisme révèle les défis de la construction nationale dans un pays multiethnique et multireligieux, entre occidentalisation forcée et aspirations identitaires locales."
          }
        }
      ]
    },
    {
      id: 2,
      theme: "Le conflit israélo-palestinien",
      sujets: [
        {
          title: "Les guerres israélo-arabes (1948-1973) et leurs conséquences territoriales",
          details: {
            date: "1948-1973",
            figures: "5 guerres majeures, agrandissement territorial israélien de 20 000 km²",
            context: "Les guerres israélo-arabes de 1948 à 1973 constituent les épisodes fondateurs du conflit israélo-arabe, redessinant complètement la carte territoriale du Moyen-Orient. La Guerre de 1948 (Guerre d'indépendance israélienne) voit la création de l'État d'Israël et l'exode palestinien. La crise de Suez (1956) confirme l'alliance israélo-franco-britannique contre l'Égypte nassérienne. La Guerre des Six Jours (1967) constitue un tournant décisif : Israël conquiert le Sinaï égyptien, le Golan syrien, la Cisjordanie jordanienne et Jérusalem-Est, triplant son territoire. La Guerre du Kippour (1973), déclenchée par l'Égypte et la Syrie, se solde par une victoire tactique israélienne malgré des pertes initiales. Ces guerres ont des conséquences territoriales majeures : expansion continue d'Israël, occupation de territoires palestiniens, création de la question des réfugiés, et militarisation régionale. Elles révèlent également l'émergence d'Israël comme puissance militaire régionale et les divisions arabes, posant les bases du conflit israélo-palestinien contemporain."
          }
        },
        {
          title: "Les accords d'Oslo (1993) et le processus de paix",
          details: {
            date: "1993-2000",
            figures: "Accords Oslo I (1993), Oslo II (1995), Autorité palestinienne créée",
            context: "Les accords d'Oslo de 1993 constituent le moment le plus ambitieux du processus de paix israélo-palestinien depuis 1948, marquant une reconnaissance mutuelle historique entre les deux peuples. Négociés secrètement à Oslo entre les représentants israéliens (Shimon Peres, Yitzhak Rabin) et palestiniens (Yasser Arafat), Oslo I reconnaît l'OLP comme représentant légitime du peuple palestinien et établit un cadre de négociations pour l'autonomie palestinienne. Oslo II (1995) crée l'Autorité palestinienne et définit des zones de contrôle territorial (A, B, C). Ces accords ouvrent une période d'optimisme avec la création de l'Autorité palestinienne à Gaza et en Cisjordanie, le retour d'Arafat en Palestine, et des avancées économiques. Cependant, ils échouent face aux obstacles structurels : poursuite de la colonisation israélienne, attentats palestiniens, divisions internes, et absence de solution pour Jérusalem et les réfugiés. L'assassinat de Rabin (1995) et l'échec des négociations de Camp David (2000) marquent la fin du processus Oslo, révélant les difficultés d'une paix négociée dans un contexte d'asymétrie de puissance et de méfiance historique profonde."
          }
        },
        {
          title: "La colonisation israélienne et le statut de Jérusalem",
          details: {
            date: "Depuis 1967",
            figures: "700 000 colons israéliens, 140 colonies en Cisjordanie",
            context: "La colonisation israélienne constitue l'un des obstacles majeurs au processus de paix israélo-palestinien, transformant le conflit territorial en réalité démographique irréversible. Depuis la Guerre des Six Jours (1967), Israël a établi plus de 140 colonies en Cisjordanie occupée et à Jérusalem-Est, abritant environ 700 000 colons israéliens. Cette politique, initialement justifiée par des raisons sécuritaires, vise à créer des faits accomplis territoriaux et à fragmenter le territoire palestinien. Les colonies israéliennes contrôlent 42% de la Cisjordanie, rendant impossible la création d'un État palestinien viable et contigu. Le statut de Jérusalem constitue un autre point de blocage : unifiée par Israël en 1980, la ville est revendiquée comme capitale par les deux peuples, avec des lieux saints (Mur des Lamentations, Esplanade des Mosquées) symbolisant l'enjeu religieux. Cette colonisation crée une réalité d'apartheid de facto, avec des routes réservées aux Israéliens et des enclaves palestiniennes isolées. Elle révèle les tensions entre sécurité israélienne, droit international, et aspirations palestiniennes à l'autodétermination."
          }
        },
        {
          title: "Le Hamas et le Hezbollah : acteurs non-étatiques du conflit",
          details: {
            date: "Depuis 1987 (Hamas), 1982 (Hezbollah)",
            figures: "Hamas contrôle Gaza, Hezbollah 100 000 combattants",
            context: "Le Hamas et le Hezbollah incarnent l'émergence des acteurs non-étatiques comme forces majeures dans les conflits moyen-orientaux, contestant la suprématie des États-nations traditionnels. Le Hamas, créé en 1987 pendant la Première Intifada, combine islamisme sunnite, nationalisme palestinien et charité sociale. Vainqueur des élections palestiniennes de 2006, il contrôle la bande de Gaza depuis 2007 et mène une stratégie de résistance armée contre Israël tout en assurant la gouvernance locale. Le Hezbollah, fondé en 1982 par l'Iran chiite pendant l'invasion israélienne du Liban, est devenu une puissance militaire régionale avec 100 000 combattants, des missiles balistiques, et une présence politique au Liban. Ces mouvements prospèrent sur les échecs des acteurs étatiques : corruption de l'OLP, occupation israélienne persistante, ingérences étrangères. Ils utilisent le terrorisme asymétrique, les médias sociaux, et les réseaux transnationaux, défiant les équilibres régionaux traditionnels. Leur émergence révèle la fragmentation de l'autorité étatique au Moyen-Orient et les limites de la diplomatie interétatique face aux acteurs hybrides."
          }
        }
      ]
    },
    {
      id: 3,
      theme: "L'énergie et la géopolitique pétrolière",
      sujets: [
        {
          title: "L'OPEP et le contrôle des prix du pétrole",
          details: {
            date: "Depuis 1960",
            figures: "13 pays membres, 40% de la production mondiale",
            context: "L'Organisation des pays exportateurs de pétrole (OPEP), créée en 1960 à Bagdad, constitue l'un des cartels les plus influents de l'histoire économique moderne, contrôlant 40% de la production pétrolière mondiale. Initialement créée pour contrer les compagnies pétrolières occidentales (les 'Sept Sœurs'), l'OPEP utilise le contrôle des quotas de production pour influencer les prix mondiaux. Les chocs pétroliers de 1973 et 1979 permettent aux pays membres d'augmenter considérablement leurs revenus, finançant des politiques de développement et de puissance régionale. L'OPEP évolue face aux défis contemporains : arrivée de producteurs non-OPEP (Russie, États-Unis), tensions internes entre pays à bas coûts (Arabie saoudite) et à hauts coûts (Iran, Venezuela), et pressions environnementales. Les décisions de l'OPEP impactent directement l'économie mondiale, révélant l'interdépendance entre producteurs du Sud et consommateurs du Nord. L'organisation incarne la capacité des pays en développement à utiliser leurs ressources naturelles comme levier géopolitique, tout en révélant les tensions entre coopération et compétition au sein du cartel."
          }
        },
        {
          title: "Les routes maritimes : détroit d'Ormuz, canal de Suez",
          details: {
            date: "Depuis 1869 (canal de Suez)",
            figures: "40% du pétrole mondial passe par Ormuz, Suez traite 10% du commerce mondial",
            context: "Les routes maritimes du Moyen-Orient constituent les artères vitales de l'économie mondiale, concentrant des enjeux géopolitiques majeurs autour de l'énergie et du commerce international. Le détroit d'Ormuz, entre l'Iran et Oman, est le passage le plus stratégique : 40% du pétrole mondial (20 millions de barils/jour) transite par ces 3 km de largeur, reliant le Golfe au Golfe d'Oman. Le canal de Suez, inauguré en 1869, traite 10% du commerce maritime mondial et constitue un raccourci essentiel entre Méditerranée et océan Indien. Ces chokepoints sont sources de vulnérabilités : menaces iraniennes de fermer Ormuz lors des tensions nucléaires, blocage de Suez par le navire Ever Given (2021). Ils structurent les alliances régionales : protection américaine des routes, rivalité sino-américaine pour le contrôle maritime. Les pays riverains (Iran, Égypte, Arabie saoudite) utilisent ces routes comme levier géopolitique, entre taxation des passages et menaces de fermeture. Ces détroits révèlent l'importance des infrastructures maritimes dans la géopolitique énergétique contemporaine."
          }
        },
        {
          title: "Les guerres du Golfe (1990-1991, 2003) et leurs enjeux",
          details: {
            date: "1990-1991, 2003",
            figures: "Première Guerre : 100 000 morts, Deuxième : 200 000 morts",
            context: "Les guerres du Golfe de 1990-1991 et 2003 constituent les interventions militaires les plus importantes depuis la Guerre Froide, redessinant les équilibres géopolitiques moyen-orientaux. La première guerre, déclenchée par l'invasion irakienne du Koweït (août 1990), voit une coalition internationale menée par les États-Unis libérer le pays en février 1991. Cette guerre révèle l'émergence de l'hyperpuissance américaine post-Guerre Froide, la vulnérabilité des monarchies du Golfe, et les divisions arabes (soutien syrien à la coalition contre l'Irak). La deuxième guerre (2003), justifiée par les armes de destruction massive irakiennes, conduit à l'invasion de l'Irak et à la chute de Saddam Hussein, mais débouche sur un chaos sécuritaire avec l'émergence de Daech. Ces guerres ont des conséquences majeures : affaiblissement de l'Irak comme contrepoids régional, ascension de l'Iran chiite, instabilité généralisée, et centaines de milliers de morts. Elles révèlent les risques de l'ingérence occidentale dans les affaires moyen-orientales et les difficultés de reconstruction post-conflit."
          }
        },
        {
          title: "La transition énergétique et l'avenir du pétrole moyen-oriental",
          details: {
            date: "Depuis 2015",
            figures: "Accords de Paris (2015), objectif -55% CO2 d'ici 2030 pour l'UE",
            context: "La transition énergétique mondiale constitue un défi majeur pour les économies pétrolières du Moyen-Orient, menaçant leur modèle de développement centré sur les hydrocarbures. Les accords de Paris (2015) et les politiques climatiques européennes visent à réduire les émissions de CO2 de 55% d'ici 2030, accélérant le passage aux énergies renouvelables. Cette transition impacte directement le Golfe : chute des prix du pétrole depuis 2014, diversification économique forcée (Vision 2030 saoudienne), et investissements massifs dans le solaire et l'éolien. Les pays du Golfe investissent des milliards dans les renouvelables tout en maintenant leur leadership pétrolier, mais font face à des défis : dépendance budgétaire aux prix élevés, compétition avec les producteurs américains (schiste), et pressions internationales pour la décarbonation. L'avenir du pétrole moyen-oriental dépendra de la vitesse de la transition : maintien d'un rôle central si la demande reste forte (transport, industrie), ou déclin progressif vers une économie post-pétrolière. Cette transition révèle les vulnérabilités des économies rentiers face aux impératifs climatiques mondiaux."
          }
        }
      ]
    },
    {
      id: 4,
      theme: "Islamismes et radicalisation",
      sujets: [
        {
          title: "L'Iran après 1979 : révolution islamique et nucléaire",
          details: {
            date: "1979-présent",
            figures: "Révolution islamique (1979), Programme nucléaire depuis 1980s",
            context: "La révolution islamique iranienne de 1979 constitue l'événement fondateur de l'islamisme chiite moderne, transformant radicalement la géopolitique moyen-orientale. Le renversement du Shah Reza Pahlavi par l'ayatollah Khomeiny et ses partisans établit la première république islamique, combinant théocratie chiite, anti-impérialisme, et exportation de la révolution. Le régime iranien, dirigé par un Guide suprême et un président élu, maintient sa légitimité par le nationalisme religieux et la redistribution sociale, malgré des répressions internes. Le programme nucléaire, développé depuis les années 1980 malgré les sanctions internationales, constitue un levier géopolitique majeur, permettant à l'Iran de devenir puissance régionale. Les tensions avec les États-Unis (rupture diplomatique depuis 1980, sanctions massives) et l'Arabie saoudite (rivalité sunnite-chiite) structurent la région. L'Iran incarne le paradoxe moyen-oriental : modernité technologique et archaïsme théocratique, puissance régionale contestée mais influente par procuration (Hezbollah, milices irakiennes)."
          }
        },
        {
          title: "Les Frères musulmans et l'islam politique sunnite",
          details: {
            date: "Depuis 1928",
            figures: "Frères musulmans fondés en 1928 par Hassan al-Banna",
            context: "Les Frères musulmans constituent l'organisation islamiste sunnite la plus ancienne et influente, fondée en 1928 en Égypte par Hassan al-Banna comme réponse à la laïcisation forcée du monde musulman. Leur idéologie combine islam politique, activisme social, et rejet du colonialisme, inspirant des générations de militants à travers le monde arabe. L'organisation évolue entre légalisme (participation électorale) et radicalisme (résistance armée), selon les contextes nationaux. Elle influence profondément la politique égyptienne depuis les années 1930, alternant entre répression et participation gouvernementale. Les Frères musulmans sont présents dans plus de 80 pays, adaptant leur message aux réalités locales : charité sociale en Jordanie, opposition démocratique en Tunisie, insurrection en Syrie. Leur succès révèle les aspirations populaires à une alternative islamique aux régimes autoritaires laïcs, mais aussi leurs divisions internes entre modérés et radicaux. L'organisation incarne l'ambivalence de l'islamisme sunnite : force de contestation politique et acteur de stabilité sociale, entre démocratisation et théocratisation."
          }
        },
        {
          title: "Daesh : État islamique, territorialité et défaite (2014-2019)",
          details: {
            date: "2014-2019",
            figures: "Califat contrôlant 8 millions d'habitants sur 200 000 km²",
            context: "L'État islamique (Daesh) constitue l'expression la plus extrême du djihadisme contemporain, créant un califat territorial sans précédent depuis le Moyen Âge. Né de la fusion entre Al-Qaïda en Irak et d'autres groupes djihadistes en 2006, Daesh exploite le chaos irakien et syrien post-2011 pour conquérir un territoire de 200 000 km² abritant 8 millions d'habitants (Mossoul, Raqqa). Son idéologie salafiste-djihadiste, proclamant le califat universel, attire des milliers de combattants étrangers (40 000 selon certaines estimations). Daesh utilise les médias sociaux, les exécutions spectaculaires, et les revenus pétroliers pour sa propagande, défiant les frontières étatiques traditionnelles. Sa défaite en 2019, sous les coups de la coalition internationale, révèle les limites du terrorisme étatique : vulnérabilité aux frappes aériennes, difficultés de gouvernance, et rejet populaire. Cependant, Daesh survit sous forme décentralisée, révélant la résilience du djihadisme et les difficultés de la contre-terrorisme occidentale au Moyen-Orient."
          }
        },
        {
          title: "Le terrorisme islamiste et les interventions occidentales",
          details: {
            date: "Depuis 2001",
            figures: "Attentats du 11 septembre 2001, invasions Irak/Afghanistan",
            context: "Le terrorisme islamiste constitue l'une des menaces sécuritaires majeures du XXIe siècle, structurant les interventions occidentales au Moyen-Orient depuis les attentats du 11 septembre 2001. Al-Qaïda, créé par Oussama ben Laden en 1988, incarne le djihadisme global, utilisant le terrorisme asymétrique contre les 'infidèles' occidentaux et leurs alliés régionaux. Les attentats du 11 septembre déclenchent une 'guerre contre le terrorisme' : invasion de l'Afghanistan (2001) et de l'Irak (2003), malgré l'absence de liens directs entre Saddam Hussein et Al-Qaïda. Ces interventions déstabilisent la région : effondrement étatique irakien, émergence de Daech, chaos syrien. Elles révèlent les paradoxes de l'approche occidentale : justification humanitaire vs réalisme géopolitique, lutte antiterroriste vs ingérences impérialistes. Le terrorisme islamiste prospère sur les frustrations locales (chômage, humiliation nationale), les réseaux transnationaux, et les technologies modernes. Les interventions occidentales, coûteuses en vies et en ressources, montrent les limites de la puissance militaire face aux acteurs non-étatiques."
          }
        }
      ]
    },
    {
      id: 5,
      theme: "Printemps arabes et transitions démocratiques",
      sujets: [
        {
          title: "Les révolutions arabes (2010-2012) : causes et diversité",
          details: {
            date: "2010-2012",
            figures: "Révolutions dans 6 pays, 4 chefs d'État renversés",
            context: "Les révolutions arabes de 2010-2012 constituent la vague démocratique la plus importante depuis les indépendances, secouant les régimes autoritaires du monde arabe. Déclenchées par l'immolation de Mohamed Bouazizi en Tunisie (décembre 2010), ces révolutions partagent des causes communes : corruption généralisée, chômage massif des jeunes (25% en moyenne), répression politique, et aspiration à la dignité. Elles se propagent par les réseaux sociaux et la contagion régionale, renversant quatre chefs d'État (Tunisie, Égypte, Libye, Yémen). Cependant, chaque révolution présente des spécificités : transition démocratique réussie en Tunisie, contre-révolution militaire en Égypte, guerre civile en Libye et Syrie, statu quo au Maroc et en Jordanie. Les révolutions révèlent la diversité du monde arabe : clivages urbains/ruraux, forces sociales variées (jeunesse, classes moyennes, islamistes), et poids des institutions militaires. Elles montrent également les limites de l'exceptionnalisme arabe : aspiration universelle à la démocratie mais contraintes géopolitiques régionales (rivalités sunnite-chiite, ingérences étrangères)."
          }
        },
        {
          title: "La Syrie : guerre civile, ingérences étrangères et réfugiés",
          details: {
            date: "Depuis 2011",
            figures: "600 000 morts, 6,6 millions de déplacés internes, 5,6 millions de réfugiés",
            context: "La guerre civile syrienne, déclenchée en 2011 par le soulèvement populaire contre Bachar al-Assad, constitue l'un des conflits les plus destructeurs du XXIe siècle et un laboratoire des ingérences étrangères modernes. Initialement mouvement pacifique réprimé violemment, le conflit évolue vers une guerre complexe mêlant acteurs étatiques et non-étatiques : régime Assad soutenu par Russie et Iran, rebelles soutenus par Turquie et pays du Golfe, djihadistes de Daech et Al-Qaïda. Les ingérences étrangères sont massives : frappes russes depuis 2015, troupes turques au nord, présence iranienne, soutien américain aux Kurdes. Le conflit génère une catastrophe humanitaire : 600 000 morts, 6,6 millions de déplacés internes, 5,6 millions de réfugiés, et destruction massive des infrastructures. Il révèle les limites de la realpolitik au Moyen-Orient : priorisation des intérêts nationaux sur les principes démocratiques, fragmentation territoriale, et émergence de nouvelles lignes de faille. La Syrie incarne l'échec des révolutions arabes et les dangers des guerres par procuration dans un monde multipolaire."
          }
        },
        {
          title: "L'Égypte : coup d'État de 2013 et nouveau régime autoritaire",
          details: {
            date: "2013-présent",
            figures: "Coup d'État du 3 juillet 2013, 30 000 prisonniers politiques",
            context: "L'Égypte constitue l'exemple le plus emblématique de la contre-révolution post-Printemps arabe, avec un retour à l'autoritarisme militaire après une brève parenthèse démocratique. La révolution de 2011 renverse Hosni Moubarak après 30 ans de dictature, ouvrant une période de transition chaotique : élections présidentielles remportées par Mohamed Morsi (Frères musulmans) en 2012, puis coup d'État militaire du 3 juillet 2013 mené par Abdel Fattah al-Sissi. Ce putsch, justifié par l'instabilité et le terrorisme, restaure l'ordre autoritaire : répression massive des Frères musulmans (dizaines de milliers d'arrestations), loi antiterroriste draconienne, et contrôle total des médias. Le régime Sissi maintient sa légitimité par la stabilité apparente et le soutien économique des monarchies du Golfe, mais au prix d'une répression généralisée : 30 000 prisonniers politiques, torture systématique, et économie en difficulté. L'Égypte révèle les limites des transitions démocratiques au Moyen-Orient : poids des institutions militaires, divisions sociétales profondes, et préférence pour la stabilité sur la liberté."
          }
        },
        {
          title: "La Libye : effondrement étatique et chaos sécuritaire",
          details: {
            date: "Depuis 2011",
            figures: "Intervention de l'OTAN (2011), 3 gouvernements concurrents",
            context: "La Libye incarne l'effondrement étatique le plus spectaculaire du Printemps arabe, transformant un pays riche en pétrole en zone de chaos sécuritaire permanent. L'intervention de l'OTAN en 2011, justifiée par la protection des civils contre Kadhafi, conduit à la chute du régime mais laisse un vide de pouvoir fatal. Le pays se fragmente en trois entités rivales : gouvernement de Tripoli (reconnu internationalement), autorité de l'Est (général Haftar soutenu par Égypte/Russie), et groupes islamistes dans le Sud. Cette division génère une instabilité chronique : combats intermilices, trafic d'êtres humains et d'armes, présence de mercenaires russes (Wagner), et ingérences étrangères (Turquie, Émirats, Qatar). L'économie pétrolière s'effondre malgré les réserves abondantes, et la société libyenne souffre de divisions tribales exacerbées. La Libye révèle les dangers des interventions militaires occidentales sans stratégie de reconstruction : création d'États faillis, prolifération du terrorisme (branche locale de Daech), et migration irrégulière massive vers l'Europe. Elle constitue un avertissement sur les conséquences imprévisibles des changements de régime forcés."
          }
        }
      ]
    },
    {
      id: 6,
      theme: "Puissances régionales et influences extérieures",
      sujets: [
        {
          title: "L'Iran et l'Arabie saoudite : rivalité sunnite-chiite",
          details: {
            date: "Depuis 1979",
            figures: "Rivalité sunnite-chiite, Guerre du Yémen depuis 2015",
            context: "La rivalité entre l'Iran chiite et l'Arabie saoudite sunnite constitue l'axe structurant de la géopolitique moyen-orientale contemporaine, opposant les deux grandes puissances régionales dans une lutte d'influence multipolaire. La révolution islamique iranienne de 1979 cristallise ce clivage religieux et idéologique : l'Iran promeut l'islam révolutionnaire chiite contre le wahhabisme saoudien conservateur. Cette rivalité se manifeste sur tous les théâtres : guerre du Yémen (intervention saoudienne contre les Houthis pro-iraniens depuis 2015), Syrie (soutien iranien à Assad contre opposition sunnite), Irak (influence iranienne post-2003), Liban (Hezbollah pro-iranien). Les stratégies divergent : diplomatie de l'ombre iranienne (réseaux chiites) vs puissance financière saoudienne (subventions aux alliés sunnites). Cette rivalité révèle les fractures internes de l'islam : sunnites (85% des musulmans) vs chiites (15%), mais aussi les ambitions hégémoniques régionales. Elle complique les efforts de paix (Yémen) et favorise les ingérences étrangères (Russie soutenant Assad, États-Unis équilibrant les deux)."
          }
        },
        {
          title: "La Turquie d'Erdogan : néo-ottomanisme et puissance régionale",
          details: {
            date: "Depuis 2002",
            figures: "Président Erdogan depuis 2003, Ambitions régionales croissantes",
            context: "La Turquie sous Recep Tayyip Erdogan incarne l'émergence d'une puissance régionale ambitieuse, combinant néo-ottomanisme et islamisme conservateur dans un pays à cheval entre Europe et Asie. Depuis l'arrivée au pouvoir de l'AKP en 2002, Erdogan transforme la Turquie kémaliste laïque en acteur régional proactif : interventions militaires (Syrie, Libye, Azerbaïdjan), diplomatie active (rapprochement avec Russie/Iran), et affirmation identitaire (mosquées géantes, références ottomanes). La Turquie utilise ses atouts stratégiques : armée puissante (2e de l'OTAN), position géographique (contrôle des détroits), et économie dynamique. Cependant, cette politique génère des tensions : brouille avec les États-Unis (achat de missiles russes S-400), conflit avec l'UE (question kurde, migrants), et rivalités régionales (Grèce, Égypte). Erdogan navigue entre Occident et Orient, utilisant l'islam politique pour renforcer sa légitimité intérieure tout en menant une diplomatie multidirectionnelle. La Turquie révèle l'évolution des équilibres moyen-orientaux : déclin des puissances arabes traditionnelles et ascension d'acteurs périphériques."
          }
        },
        {
          title: "Israël : puissance nucléaire et alliances stratégiques",
          details: {
            date: "Depuis 1948",
            figures: "Arme nucléaire présumée, Alliance avec États-Unis depuis 1960s",
            context: "Israël constitue l'une des puissances militaires les plus sophistiquées du Moyen-Orient, compensant son isolement diplomatique par une supériorité technologique et stratégique. Puissance nucléaire présumée depuis les années 1960 (bien que non déclarée), Israël maintient une capacité de dissuasion régionale malgré sa taille réduite. Son armée, Tsahal, est considérée comme la plus efficace du Moyen-Orient, avec des succès retentissants (Guerre des Six Jours 1967, destruction du réacteur irakien 1981). Les alliances stratégiques sont cruciales : partenariat privilégié avec les États-Unis (aide militaire annuelle de 3 milliards $, veto automatique à l'ONU), normalisation récente avec pays arabes (Accords d'Abraham 2020 avec EAU/Bahreïn/Maroc). Cependant, Israël fait face à des menaces persistantes : programme nucléaire iranien, groupes armés palestiniens (Hezbollah, Hamas), et isolement diplomatique relatif. L'État hébreu incarne le paradoxe moyen-oriental : démocratie libérale dans un environnement autoritaire, puissance technologique dans une région pauvre, et succès militaire malgré un environnement hostile."
          }
        },
        {
          title: "Les États-Unis et la Russie au Moyen-Orient",
          details: {
            date: "Depuis 1991 (post-Guerre Froide)",
            figures: "Présence militaire américaine permanente, Retour russe depuis 2015",
            context: "Les États-Unis et la Russie constituent les deux grandes puissances extérieures structurant la géopolitique moyen-orientale depuis la fin de la Guerre Froide. Les États-Unis, hégémon post-1991, maintiennent une présence militaire massive : bases au Qatar/Bahreïn/Koweït, flotte du 5e Fleet, et alliances stratégiques (Israël, Arabie saoudite, Turquie). Leur stratégie évolue : retrait partiel d'Irak/Afghanistan, pivot vers l'Asie, mais maintien d'intérêts vitaux (pétrole, sécurité d'Israël, lutte antiterroriste). La Russie, revenue en force depuis son intervention en Syrie (2015), utilise des leviers asymétriques : ventes d'armes, mercenaires (Wagner), et diplomatie multidirectionnelle. Les deux puissances coopèrent (lutte contre Daech) mais s'opposent sur la Syrie, l'Iran, et l'Ukraine. Cette bipolarité révèle l'affaiblissement relatif des États-Unis face à l'assertivité russe, mais aussi les contraintes budgétaires occidentales. Le Moyen-Orient devient un terrain d'affrontement entre grandes puissances, où les pays locaux utilisent ces rivalités pour maximiser leur autonomie."
          }
        },
        {
          title: "La Chine et les nouvelles routes de la soie",
          details: {
            date: "Depuis 2013",
            figures: "Initiative Belt and Road (2013), Investissements de 200 milliards $",
            context: "La Chine constitue l'acteur extérieur émergent au Moyen-Orient, transformant les équilibres régionaux à travers son initiative des Nouvelles Routes de la Soie. Lancée en 2013 par Xi Jinping, cette stratégie vise à connecter l'Asie à l'Europe via le Moyen-Orient, avec des investissements massifs dans les infrastructures : port de Gwadar (Pakistan), chemin de fer Chine-Iran-Turquie, et participation au développement du Golfe. La Chine adopte une approche non-interventionniste : commerce sans conditionnalités politiques, investissements dans l'énergie (15% des importations chinoises viennent du Golfe), et partenariats équilibrés avec tous les acteurs (Iran, Arabie saoudite, Israël). Cette présence économique croissante (200 milliards de dollars d'investissements) concurrence les influences traditionnelles occidentales, offrant aux pays moyen-orientaux une alternative aux pressions démocratiques. Cependant, elle génère des inquiétudes : dépendance technologique, présence de travailleurs chinois, et projection de puissance navale. La Chine révèle l'émergence d'un monde multipolaire où l'économie prime sur l'idéologie, redessinant les alliances moyen-orientales."
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
            <Link to="/formation/geopolitique/proche-moyen-orient" className="hover:text-gray-900 transition-colors">
              Proche et Moyen-Orient
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
              Études de cas - Proche et Moyen-Orient
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Liste complète des études de cas et sujets de dissertation pour le Proche et Moyen-Orient.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/proche-moyen-orient" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/proche-moyen-orient/chronologie" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/proche-moyen-orient/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
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
              <p>• <strong>Comprendre la complexité :</strong> Le Moyen-Orient est une région multipolaire avec de nombreux acteurs étatiques et non-étatiques.</p>
              <p>• <strong>Maîtriser les clivages :</strong> Sunnites/chiites, arabes/perses, laïcs/islamistes sont des fractures essentielles.</p>
              <p>• <strong>Analyser les ressources :</strong> Le pétrole et le gaz sont au cœur de la géopolitique régionale.</p>
              <p>• <strong>Étudier les conflits :</strong> Conflit israélo-arabe, guerres civiles, terrorismes sont des cas d'étude majeurs.</p>
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

export default ProcheMoyenOrientSujetsPage;

