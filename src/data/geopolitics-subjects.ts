export const geopoliticsSubjects = [
    // AFRIQUE
    "L'Afrique dans la mondialisation depuis 1990",
    "Les ressources naturelles en Afrique : atout ou malédiction ?",
    "La Chine en Afrique : nouvelle colonisation ou partenariat gagnant-gagnant ?",
    "Les défis démographiques de l'Afrique",
    "L'intégration régionale en Afrique",

    // ASIE
    "La Chine, une superpuissance en devenir ?",
    "Les tensions en mer de Chine méridionale",
    "L'Inde dans la mondialisation",
    "Le Japon face au déclin démographique",
    "L'ASEAN : vers une intégration régionale ?",

    // EUROPE
    "L'Union européenne : puissance ou impuissance ?",
    "Le Brexit : causes et conséquences géopolitiques",
    "L'élargissement de l'OTAN depuis 1990",
    "L'Allemagne, leader de l'Europe ?",
    "La politique de voisinage de l'Union européenne",

    // AMÉRIQUES
    "Les États-Unis, gendarme du monde ?",
    "Le déclin de l'hégémonie américaine",
    "L'intégration régionale en Amérique latine",
    "Le Mexique entre États-Unis et émergence",
    "Le Brésil, géant aux pieds d'argile ?",

    // MOYEN-ORIENT
    "Le Moyen-Orient, un espace de conflits",
    "L'eau au Moyen-Orient : enjeu géopolitique majeur",
    "L'Iran, puissance régionale contestée",
    "Le conflit israélo-palestinien : impasse géopolitique ?",
    "Les printemps arabes : échec ou transformation ?",

    // RUSSIE
    "La Russie, une puissance révisionniste ?",
    "L'énergie, arme géopolitique de la Russie",
    "La Russie en Afrique : retour d'une grande puissance",
    "L'espace post-soviétique : chasse gardée russe ?",

    // FRANCE
    "La France, une puissance moyenne à vocation mondiale",
    "La francophonie, outil de puissance français",
    "La politique africaine de la France",
    "La France dans l'Indo-Pacifique",

    // THÈMES TRANSVERSAUX - PUISSANCE
    "La puissance économique suffit-elle à faire une grande puissance ?",
    "Le hard power et le soft power sont-ils complémentaires ?",
    "Les nouvelles formes de puissance au XXIe siècle",
    "La maîtrise des espaces communs, enjeu de puissance",

    // ÉNERGIES & ENVIRONNEMENT
    "La transition énergétique, nouveau grand jeu géopolitique",
    "Les énergies renouvelables modifient-elles les rapports de force ?",
    "Le changement climatique, multiplicateur de menaces",
    "La géopolitique de l'eau",

    // MIGRATIONS
    "Les migrations internationales : défi ou opportunité ?",
    "Les réfugiés, enjeu géopolitique du XXIe siècle",
    "Les migrations Sud-Sud",

    // MONDIALISATION
    "La démondialisation est-elle inéluctable ?",
    "Les firmes transnationales, acteurs de la mondialisation",
    "Les zones d'intégration régionale face à la mondialisation",

    // TERRITOIRES & FRONTIÈRES
    "Les frontières sont-elles encore pertinentes au XXIe siècle ?",
    "La mer, nouvel espace de conflictualité",
    "L'Arctique, nouveau terrain de confrontation",
    "L'espace, dernier territoire de conquête",

    // CONFLITS & SÉCURITÉ
    "Les guerres du XXIe siècle ont-elles changé de nature ?",
    "Le terrorisme international menace-t-il l'ordre mondial ?",
    "Les armes nucléaires garantissent-elles la paix ?",
    "Les opérations de maintien de la paix de l'ONU sont-elles efficaces ?",
];

export const subjectsByCategory = {
    afrique: geopoliticsSubjects.slice(0, 5),
    asie: geopoliticsSubjects.slice(5, 10),
    europe: geopoliticsSubjects.slice(10, 15),
    ameriques: geopoliticsSubjects.slice(15, 20),
    moyenOrient: geopoliticsSubjects.slice(20, 25),
    russie: geopoliticsSubjects.slice(25, 29),
    france: geopoliticsSubjects.slice(29, 33),
    puissance: geopoliticsSubjects.slice(33, 37),
    energie: geopoliticsSubjects.slice(37, 41),
    migrations: geopoliticsSubjects.slice(41, 44),
    mondialisation: geopoliticsSubjects.slice(44, 47),
    territoires: geopoliticsSubjects.slice(47, 51),
    conflits: geopoliticsSubjects.slice(51, 55),
};

export const getCategoryName = (category: keyof typeof subjectsByCategory): string => {
    const names: Record<keyof typeof subjectsByCategory, string> = {
        afrique: "🌍 Afrique",
        asie: "🏯 Asie",
        europe: "🇪🇺 Europe",
        ameriques: "🌎 Amériques",
        moyenOrient: "🕌 Moyen-Orient",
        russie: "🇷🇺 Russie",
        france: "🇫🇷 France",
        puissance: "⚡ Puissance",
        energie: "🔋 Énergies & Environnement",
        migrations: "👥 Migrations",
        mondialisation: "🌐 Mondialisation",
        territoires: "🗺️ Territoires & Frontières",
        conflits: "⚔️ Conflits & Sécurité",
    };
    return names[category];
};
