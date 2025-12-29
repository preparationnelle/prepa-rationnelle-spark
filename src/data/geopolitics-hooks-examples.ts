export interface HookExample {
    subject: string;
    hook: string;
    type: 'actualité' | 'citation' | 'chiffre' | 'historique' | 'paradoxe' | 'géographique';
}

export const hookExamples: HookExample[] = [
    // AFRIQUE
    {
        subject: "L'Afrique dans la mondialisation depuis 1990",
        hook: 'The Economist titrait en 2013 "The New Scramble for Africa", faisant écho au partage colonial du continent à la fin du XIXᵉ siècle. Cette nouvelle ruée vers l\'Afrique traduit une reconfiguration des influences internationales, où les anciennes puissances coloniales doivent composer avec des acteurs émergents comme la Chine, la Russie ou la Turquie.',
        type: 'actualité'
    },
    {
        subject: "Les ressources naturelles en Afrique : atout ou malédiction ?",
        hook: 'Le Nigeria, premier producteur de pétrole d\'Afrique, compte 70% de sa population sous le seuil de pauvreté. Cette contradiction illustre le "resource curse" théorisé par l\'économiste Richard Auty : l\'abondance des ressources naturelles se révèle souvent un piège pour le développement des États africains.',
        type: 'paradoxe'
    },
    {
        subject: "La Chine en Afrique : nouvelle colonisation ou partenariat gagnant-gagnant ?",
        hook: '"Quand la Chine construit des routes en Afrique, l\'Occident construit des leçons", déclarait le président kenyan Uhuru Kenyatta en 2018. Cette phrase révèle la rivalité croissante entre Beijing et les puissances occidentales pour l\'influence sur le continent africain.',
        type: 'citation'
    },
    {
        subject: "Les défis démographiques de l'Afrique",
        hook: 'En 2050, l\'Afrique comptera 2,5 milliards d\'habitants, soit 26% de la population mondiale contre 17% aujourd\'hui. Cette explosion démographique, couplée à une population dont l\'âge médian sera de 25 ans, fait du continent un enjeu géopolitique majeur du XXIᵉ siècle.',
        type: 'chiffre'
    },
    {
        subject: "L'intégration régionale en Afrique",
        hook: 'Le 1ᵉʳ janvier 2021, la Zone de libre-échange continentale africaine (ZLECAF) est entrée en vigueur, créant le plus grand espace commercial au monde avec 1,3 milliard d\'habitants. Cette initiative marque-t-elle l\'émergence d\'une Afrique unie ou se heurte-t-elle aux mêmes obstacles que les précédentes tentatives d\'intégration ?',
        type: 'actualité'
    },

    // ASIE
    {
        subject: "La Chine, une superpuissance en devenir ?",
        hook: 'En 1978, Deng Xiaoping affirmait : "Peu importe qu\'un chat soit blanc ou noir, pourvu qu\'il attrape les souris". Cette maxime pragmatique a guidé l\'ouverture économique chinoise qui a fait du pays la deuxième puissance mondiale, contestant désormais l\'hégémonie américaine.',
        type: 'citation'
    },
    {
        subject: "Les tensions en mer de Chine méridionale",
        hook: 'Six États revendiquent tout ou partie de la mer de Chine méridionale, espace maritime de 3,5 millions de km² par lequel transite un tiers du commerce maritime mondial. Cette mer fermée cristallise les rivalités entre Chine, États-Unis et nations de l\'ASEAN, faisant craindre un embrasement régional.',
        type: 'géographique'
    },
    {
        subject: "L'Inde dans la mondialisation",
        hook: 'Avec 1,4 milliard d\'habitants, l\'Inde est devenue en 2023 le pays le plus peuplé du monde, dépassant la Chine. Mais cette masse démographique constitue-t-elle un atout ou un handicap pour s\'imposer comme puissance mondiale face à son rival asiatique ?',
        type: 'chiffre'
    },
    {
        subject: "Le Japon face au déclin démographique",
        hook: 'En 2023, le Japon comptait 125 millions d\'habitants, soit 2 millions de moins qu\'en 2010. Avec 29% de sa population âgée de plus de 65 ans, l\'archipel fait face à un vieillissement sans précédent qui menace sa puissance économique et son influence régionale.',
        type: 'chiffre'
    },
    {
        subject: "L'ASEAN : vers une intégration régionale ?",
        hook: 'Fondée en 1967 en pleine Guerre froide pour contenir l\'expansion communiste, l\'ASEAN rassemble aujourd\'hui 10 pays et 680 millions d\'habitants. Mais cette organisation peut-elle devenir un acteur géopolitique cohérent face aux pressions de la Chine et des États-Unis ?',
        type: 'historique'
    },

    // EUROPE
    {
        subject: "L'Union européenne : puissance ou impuissance ?",
        hook: 'L\'ancien ministre des Affaires étrangères belge Mark Eyskens qualifiait l\'UE de "géant économique, nain politique et ver de terre militaire". Trente ans après cette formule, l\'Union européenne peine toujours à convertir son poids économique en influence géopolitique.',
        type: 'citation'
    },
    {
        subject: "Le Brexit : causes et conséquences géopolitiques",
        hook: 'Le 23 juin 2016, 52% des Britanniques votaient pour quitter l\'Union européenne, provoquant le choc politique le plus violent dans l\'histoire de la construction européenne. Ce divorce révèle les fractures profondes de l\'intégration européenne et remet en question l\'idée d\'une marche inéluctable vers le fédéralisme.',
        type: 'actualité'
    },
    {
        subject: "L'élargissement de l'OTAN depuis 1990",
        hook: 'En 1990, l\'OTAN comptait 16 membres. Aujourd\'hui, après sept vagues d\'élargissement, l\'Alliance atlantique en rassemble 32, dont la Finlande et la Suède rejointes en 2023-2024. Cette expansion vers l\'Est cristallise les tensions avec une Russie qui y voit une menace existentielle.',
        type: 'chiffre'
    },
    {
        subject: "L'Allemagne, leader de l'Europe ?",
        hook: '"Nous, Allemands, devons assumer davantage de responsabilités", déclarait la chancelière Angela Merkel en 2013. Cette affirmation marquait un tournant pour un pays longtemps réticent à exercer un leadership politique en Europe, traumatisé par son passé nazi.',
        type: 'citation'
    },
    {
        subject: "La politique de voisinage de l'Union européenne",
        hook: 'De la Biélorussie au Maroc, 16 pays sont concernés par la politique européenne de voisinage (PEV), initiative lancée en 2004 pour créer un "cercle d\'amis" autour de l\'UE. Mais vingt ans plus tard, ce projet d\'influence se heurte à la rivalité russe à l\'Est et aux crises migratoires au Sud.',
        type: 'historique'
    },

    // AMÉRIQUES
    {
        subject: "Les États-Unis, gendarme du monde ?",
        hook: 'Les États-Unis maintiennent 750 bases militaires dans 80 pays, dépensent plus de 800 milliards de dollars par an en défense et projettent leur puissance sur tous les océans. Cette omniprésence militaire fait-elle toujours des États-Unis le "gendarme du monde" à l\'ère du repli stratégique ?',
        type: 'chiffre'
    },
    {
        subject: "Le déclin de l'hégémonie américaine",
        hook: 'En 1945, les États-Unis représentaient 50% du PIB mondial. En 2024, cette part est tombée à 25%. Ce recul relatif marque-t-il la fin du "siècle américain" théorisé par Henry Luce en 1941, ou simplement une normalisation après une suprématie exceptionnelle ?',
        type: 'chiffre'
    },
    {
        subject: "L'intégration régionale en Amérique latine",
        hook: 'Simon Bolivar rêvait en 1826 d\'une "Grande Colombie" unissant l\'Amérique latine. Deux siècles plus tard, le continent compte une dizaine d\'organisations régionales (MERCOSUR, ALBA, CELAC...) aux objectifs contradictoires, témoignant de l\'échec de l\'unité latino-américaine.',
        type: 'historique'
    },
    {
        subject: "Le Mexique entre États-Unis et émergence",
        hook: 'Le Mexique partage 3200 km de frontière avec les États-Unis, son premier partenaire commercial qui absorbe 80% de ses exportations. Cette proximité géographique constitue-t-elle une bénédiction ou une malédiction pour un pays aspirant à devenir une puissance émergente autonome ?',
        type: 'géographique'
    },
    {
        subject: "Le Brésil, géant aux pieds d'argile ?",
        hook: '"Le Brésil est le pays de l\'avenir et le restera toujours", raille l\'adage popularisé par Stefan Zweig. Cinquième pays du monde par sa superficie et sa population, première économie d\'Amérique latine, le Brésil oscille entre ambitions de grandeur et crises récurrentes.',
        type: 'citation'
    },

    // MOYEN-ORIENT
    {
        subject: "Le Moyen-Orient, un espace de conflits",
        hook: 'Yémen, Syrie, Irak, Libye, Palestine... Aucune autre région au monde ne concentre autant de conflits actifs. Cette instabilité chronique du Moyen-Orient s\'explique-t-elle uniquement par les rivalités régionales ou est-elle le produit des interventions des grandes puissances ?',
        type: 'paradoxe'
    },
    {
        subject: "L'eau au Moyen-Orient : enjeu géopolitique majeur",
        hook: 'Avec moins de 1000 m³ d\'eau douce par habitant et par an, le Moyen-Orient est la région la plus aride du monde. Le contrôle du Tigre, de l\'Euphrate et du Jourdain alimente des tensions entre Turquie, Syrie, Irak, Jordanie et Israël, faisant de l\'eau une arme géopolitique.',
        type: 'chiffre'
    },
    {
        subject: "L'Iran, puissance régionale contestée",
        hook: '"L\'Iran représente la principale menace pour la paix au Moyen-Orient", affirmait Benjamin Netanyahu en 2018. Cette diabolisation de la République islamique masque-t-elle la réalité d\'une puissance régionale cherchant légitimement à défendre ses intérêts face aux monarchies du Golfe et à Israël ?',
        type: 'citation'
    },
    {
        subject: "Le conflit israélo-palestinien : impasse géopolitique ?",
        hook: 'Depuis les Accords d\'Oslo de 1993, promesse d\'une paix imminente, la colonisation israélienne en Cisjordanie a triplé, passant de 250 000 à 700 000 colons. Cette expansion met-elle définitivement fin à l\'espoir d\'un État palestinien viable ?',
        type: 'chiffre'
    },
    {
        subject: "Les printemps arabes : échec ou transformation ?",
        hook: 'Mohamed Bouazizi s\'immolait par le feu le 17 décembre 2010 à Sidi Bouzid, déclenchant une vague révolutionnaire qui allait ébranler tout le monde arabe. Plus de dix ans après, seule la Tunisie préservait sa transition démocratique, avant le coup de force présidentiel de 2021.',
        type: 'historique'
    },

    // RUSSIE
    {
        subject: "La Russie, une puissance révisionniste ?",
        hook: '"La Russie n\'a pas de frontières, elle n\'a que des horizons", affirmait le ministre des Affaires étrangères Sergueï Lavrov. Cette phrase résume l\'ambition de Moscou de restaurer son influence sur l\'espace post-soviétique, quitte à remettre en cause l\'ordre international établi en 1991.',
        type: 'citation'
    },
    {
        subject: "L'énergie, arme géopolitique de la Russie",
        hook: 'La Russie fournissait avant 2022 40% du gaz naturel consommé en Europe, donnant à Moscou un puissant levier d\'influence. La guerre en Ukraine et les sanctions occidentales ont-elles mis fin à cette "arme du gaz" ou Poutine conserve-t-il des cartes à jouer ?',
        type: 'chiffre'
    },
    {
        subject: "La Russie en Afrique : retour d'une grande puissance",
        hook: 'De la Centrafrique au Mali, du Soudan au Mozambique, les mercenaires du groupe Wagner étendent l\'influence russe en Afrique. Ce retour en force sur un continent délaissé depuis la fin de l\'URSS marque-t-il l\'émergence d\'un nouvel acteur géopolitique africain ?',
        type: 'actualité'
    },
    {
        subject: "L'espace post-soviétique : chasse gardée russe ?",
        hook: 'Vladimir Poutine qualifiait en 2005 la chute de l\'URSS de "plus grande catastrophe géopolitique du XXᵉ siècle". Cette nostalgie impériale explique-t-elle la volonté de Moscou de maintenir son influence exclusive sur les 15 anciennes républiques soviétiques ?',
        type: 'citation'
    },

    // FRANCE
    {
        subject: "La France, une puissance moyenne à vocation mondiale",
        hook: 'Avec 13 millions de km² de zone économique exclusive répartis sur tous les océans, la France possède le deuxième domaine maritime mondial. Cette présence ultramarrine lui confère une influence géopolitique sans commune mesure avec sa taille métropolitaine.',
        type: 'géographique'
    },
    {
        subject: "La francophonie, outil de puissance français",
        hook: 'En 2070, le français pourrait être parlé par 750 millions de personnes, principalement en Afrique. Face au recul de l\'influence française sur le continent, la langue peut-elle demeurer un vecteur efficace de soft power ?',
        type: 'chiffre'
    },
    {
        subject: "La politique africaine de la France",
        hook: 'Le sommet de Montpellier d\'octobre 2021 promettait un "partenariat renouvelé" entre la France et l\'Afrique. Deux ans plus tard, Paris était chassé du Mali, du Burkina Faso et du Niger, témoignant de l\'effondrement de la "Françafrique" au Sahel.',
        type: 'actualité'
    },
    {
        subject: "La France dans l'Indo-Pacifique",
        hook: 'Nouvelle-Calédonie, Polynésie française, La Réunion, Mayotte : 1,65 million de Français vivent dans l\'Indo-Pacifique où Paris déploie 7000 militaires. Cette présence fait-elle de la France une puissance régionale crédible face à la Chine ?',
        type: 'chiffre'
    },

    // THÈMES TRANSVERSAUX - PUISSANCE
    {
        subject: "La puissance économique suffit-elle à faire une grande puissance ?",
        hook: 'Le Japon et l\'Allemagne, respectivement troisième et quatrième puissances économiques mondiales, demeurent des "nains politiques" selon la formule consacrée. Cette contradiction illustre les limites d\'une puissance fondée uniquement sur la prospérité économique.',
        type: 'paradoxe'
    },
    {
        subject: "Le hard power et le soft power sont-ils complémentaires ?",
        hook: 'Joseph Nye théorisait en 1990 le concept de "soft power", capacité d\'influencer par l\'attraction culturelle plutôt que par la coercition militaire. Mais l\'invasion russe de l\'Ukraine en 2022 a rappelé que le hard power conserve toute sa pertinence.',
        type: 'citation'
    },
    {
        subject: "Les nouvelles formes de puissance au XXIe siècle",
        hook: 'Cyberattaques, manipulation de l\'information, contrôle des données, maîtrise des technologies : la puissance au XXIᵉ siècle ne se mesure plus seulement en divisions blindées et porte-avions. Ces nouvelles armes redéfinissent-elles les rapports de force mondiaux ?',
        type: 'actualité'
    },
    {
        subject: "La maîtrise des espaces communs, enjeu de puissance",
        hook: 'Océans, espace, cyberespace, Arctique : les espaces communs représentent 60% de la surface du globe. Leur contrôle est devenu un enjeu stratégique majeur entre grandes puissances, redessinant les équilibres géopolitiques du XXIᵉ siècle.',
        type: 'chiffre'
    },

    // ÉNERGIES & ENVIRONNEMENT
    {
        subject: "La transition énergétique, nouveau grand jeu géopolitique",
        hook: 'La production d\'une voiture électrique nécessite 6 fois plus de minéraux que celle d\'un véhicule thermique. Lithium, cobalt, terres rares : la transition énergétique déplace les dépendances du pétrole vers les métaux stratégiques, redessinant la carte des puissances.',
        type: 'chiffre'
    },
    {
        subject: "Les énergies renouvelables modifient-elles les rapports de force ?",
        hook: 'L\'Arabie saoudite, premier exportateur de pétrole, investit 500 milliards de dollars dans le solaire avec le projet NEOM. Ce virage des monarchies du Golfe vers les renouvelables annonce-t-il la fin de leur rente pétrolière et de leur influence géopolitique ?',
        type: 'paradoxe'
    },
    {
        subject: "Le changement climatique, multiplicateur de menaces",
        hook: 'Le Pentagone qualifie le changement climatique de "threat multiplier", multipliant les risques de conflits pour l\'accès aux ressources. Sahel, Darfour, Syrie : la désertification et les sécheresses sont déjà des facteurs d\'instabilité.',
        type: 'citation'
    },
    {
        subject: "La géopolitique de l'eau",
        hook: 'Le barrage Renaissance sur le Nil Bleu, construit par l\'Éthiopie, retient 74 milliards de m³ d\'eau, menaçant l\'approvisionnement de l\'Égypte et du Soudan. Ce conflit hydraulique rappelle que l\'eau est devenue une arme géopolitique au XXIᵉ siècle.',
        type: 'actualité'
    },

    // MIGRATIONS
    {
        subject: "Les migrations internationales : défi ou opportunité ?",
        hook: '272 millions de personnes vivaient hors de leur pays de naissance en 2019, soit 3,5% de la population mondiale. Ces flux migratoires, souvent perçus comme une menace en Occident, constituent-ils un défi sécuritaire ou une chance démographique et économique ?',
        type: 'chiffre'
    },
    {
        subject: "Les réfugiés, enjeu géopolitique du XXIe siècle",
        hook: 'L\'accueil de 1 million de réfugiés syriens en 2015 a provoqué la montée des populismes en Europe et fragilisé l\'espace Schengen. La crise migratoire révèle-t-elle les limites de la solidarité européenne face aux bouleversements géopolitiques ?',
        type: 'actualité'
    },
    {
        subject: "Les migrations Sud-Sud",
        hook: 'Contrairement aux idées reçues, 40% des migrations internationales sont des migrations Sud-Sud, entre pays en développement. Ces flux migratoires intra-régionaux, souvent ignorés, transforment-ils les équilibres géopolitiques régionaux ?',
        type: 'chiffre'
    },

    // MONDIALISATION
    {
        subject: "La démondialisation est-elle inéluctable ?",
        hook: 'Le commerce international, qui représentait 61% du PIB mondial en 2008, n\'en représente plus que 57% en 2023. Ce recul marque-t-il le début d\'une démondialisation ou un simple ralentissement après l\'hypermondialisation des années 1990-2000 ?',
        type: 'chiffre'
    },
    {
        subject: "Les firmes transnationales, acteurs de la mondialisation",
        hook: 'Apple capitalise 3000 milliards de dollars, soit plus que le PIB de la France. Cette puissance économique des FTN en fait-elle de nouveaux acteurs géopolitiques capables de rivaliser avec les États ?',
        type: 'chiffre'
    },
    {
        subject: "Les zones d'intégration régionale face à la mondialisation",
        hook: 'UE, MERCOSUR, ASEAN, ZLECAF : tous les continents se dotent d\'organisations d\'intégration régionale. Ce "régionalisme" constitue-t-il une étape vers la mondialisation ou une alternative protectrice face à ses excès ?',
        type: 'paradoxe'
    },

    // TERRITOIRES & FRONTIÈRES
    {
        subject: "Les frontières sont-elles encore pertinentes au XXIe siècle ?",
        hook: 'À l\'heure des flux transnationaux et du cyberespace, Régis Debray affirmait en 2010 : "L\'éloge des frontières est devenu aussi incongru aujourd\'hui que pouvait l\'être leur critique il y a trente ans". Le retour des murs frontaliers contredit-il l\'idée d\'un monde sans frontières ?',
        type: 'citation'
    },
    {
        subject: "La mer, nouvel espace de conflictualité",
        hook: '90% du commerce mondial transite par voie maritime, 30% de la production pétrolière est offshore et 95% des communications numériques passent par des câbles sous-marins. Cette maritimisation de la mondialisation fait des océans un espace de compétition stratégique.',
        type: 'chiffre'
    },
    {
        subject: "L'Arctique, nouveau terrain de confrontation",
        hook: 'Le réchauffement climatique ouvre des routes maritimes et rend accessibles les 13% des réserves pétrolières mondiales présentes en Arctique. Cette fonte des glaces transforme une zone de coopération scientifique en terrain de rivalité entre Russie, États-Unis, Canada et pays européens.',
        type: 'actualité'
    },
    {
        subject: "L'espace, dernier territoire de conquête",
        hook: '"L\'espace est le nouveau domaine de guerre", déclarait le président Trump en 2018 en créant la Space Force. Satellites militaires, armes antisatellites, projets de bases lunaires : l\'espace extra-atmosphérique devient un champ de bataille stratégique.',
        type: 'citation'
    },

    // CONFLITS & SÉCURITÉ
    {
        subject: "Les guerres du XXIe siècle ont-elles changé de nature ?",
        hook: 'Guerres asymétriques, terrorisme, cyberattaques, conflits hybrides : les affrontements du XXIᵉ siècle ne ressemblent plus aux guerres interétatiques du XXᵉ siècle. Cette transformation remet-elle en cause les concepts traditionnels de la guerre et de la paix ?',
        type: 'actualité'
    },
    {
        subject: "Le terrorisme international menace-t-il l'ordre mondial ?",
        hook: 'Les attentats du 11 septembre 2001 ont tué 3000 personnes et déclenché une "guerre contre le terrorisme" qui a coûté 8000 milliards de dollars et causé 900 000 morts selon le projet Costs of War. Cette réponse était-elle proportionnée à la menace ?',
        type: 'chiffre'
    },
    {
        subject: "Les armes nucléaires garantissent-elles la paix ?",
        hook: 'Depuis Hiroshima en 1945, aucune arme nucléaire n\'a été utilisée en conflit, validant la théorie de la "dissuasion nucléaire". Mais la prolifération vers 9 puissances atomiques et les tensions actuelles ne risquent-elles pas de briser ce "long équilibre de la terreur" ?',
        type: 'historique'
    },
    {
        subject: "Les opérations de maintien de la paix de l'ONU sont-elles efficaces ?",
        hook: 'L\'ONU déploie 87 000 Casques bleus dans 12 missions pour un budget de 6,5 milliards de dollars. Pourtant, les échecs au Rwanda en 1994 et à Srebrenica en 1995 révèlent les limites structurelles du maintien de la paix onusien face aux grandes puissances.',
        type: 'chiffre'
    }
];

// Fonction pour obtenir des exemples d'accroches par sujet
export const getHookExamplesBySubject = (subject: string): HookExample | undefined => {
    return hookExamples.find(example => example.subject === subject);
};

// Fonction pour obtenir des exemples d'accroches par type
export const getHookExamplesByType = (type: HookExample['type']): HookExample[] => {
    return hookExamples.filter(example => example.type === type);
};

// Fonction pour obtenir un exemple aléatoire
export const getRandomHookExample = (): HookExample => {
    return hookExamples[Math.floor(Math.random() * hookExamples.length)];
};
