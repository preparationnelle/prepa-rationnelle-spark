
export type QuestionCategory = {
  id: string;
  title: string;
  icon: string;
  description: string;
  questions: Question[];
};

export type Question = {
  id: string;
  text: string;
  exampleAnswer: string;
  tips: string;
};

export const questionCategories: QuestionCategory[] = [
  {
    id: "introspection",
    title: "Questions d'introspection et de connaissance de soi",
    icon: "brain",
    description: "Ces questions visent à évaluer votre capacité à vous auto-évaluer et à vous connaître.",
    questions: [
      {
        id: "personality",
        text: "Comment décririez-vous votre personnalité en trois mots ?",
        exampleAnswer: "Je me décrirais comme persévérant, adaptable et empathique. Ma persévérance me permet de surmonter les obstacles, mon adaptabilité de m'intégrer dans divers environnements, et mon empathie de comprendre les besoins des autres pour mieux collaborer.",
        tips: "Choisissez des qualités authentiques, mais qui reflètent aussi les attentes du jury. Illustrez chaque trait par une brève anecdote ou situation concrète."
      },
      {
        id: "strengths-weaknesses",
        text: "Quelles sont vos principales qualités et vos principaux défauts ?",
        exampleAnswer: "Ma principale qualité est ma rigueur analytique qui me permet d'anticiper les problèmes et de structurer mon travail efficacement. En revanche, mon perfectionnisme peut parfois me faire perdre du temps sur des détails. J'ai appris à mieux gérer cette tendance en établissant des priorités claires.",
        tips: "Pour les défauts, mentionnez une qualité qui peut devenir un défaut et précisez comment vous travaillez à l'améliorer."
      },
      {
        id: "greatest-strength",
        text: "Quelle est votre plus grande force ?",
        exampleAnswer: "Ma plus grande force est ma capacité à fédérer les équipes autour d'un objectif commun. Lors de mon projet associatif, j'ai réussi à coordonner différentes personnalités et expertises pour créer une dynamique collective efficace malgré des opinions initiales divergentes.",
        tips: "Appuyez votre réponse sur une expérience concrète qui démontre cette force en action."
      },
      {
        id: "greatest-weakness",
        text: "Quelle est votre plus grande faiblesse ?",
        exampleAnswer: "Ma plus grande faiblesse était mon anxiété face à la prise de parole en public. J'ai décidé d'affronter cette difficulté en rejoignant un club de débat et en m'imposant progressivement des situations d'expression orale. Aujourd'hui, c'est une compétence en développement plutôt qu'une faiblesse.",
        tips: "Montrez comment vous avez pris conscience de cette faiblesse et les actions concrètes entreprises pour la surmonter."
      },
      {
        id: "proudest-achievement",
        text: "De quoi êtes-vous le plus fier dans votre parcours ?",
        exampleAnswer: "Je suis particulièrement fier d'avoir créé une association d'aide aux devoirs dans mon quartier. Partant d'une simple idée, j'ai dû convaincre des bénévoles, trouver des financements et organiser la logistique. Aujourd'hui, plus de 30 enfants en bénéficient chaque semaine.",
        tips: "Choisissez un accomplissement qui démontre vos valeurs et compétences. Détaillez votre rôle précis et l'impact mesurable de votre action."
      }
    ]
  },
  {
    id: "motivation",
    title: "Questions sur les motivations et les objectifs",
    icon: "target",
    description: "Ces questions évaluent votre projet professionnel et vos ambitions.",
    questions: [
      {
        id: "why-this-path",
        text: "Pourquoi avez-vous choisi cette voie ou ce projet ?",
        exampleAnswer: "J'ai choisi la finance durable car elle me permet de concilier mon intérêt pour l'analyse quantitative et mon engagement environnemental. Suite à mon stage dans un fonds d'investissement traditionnel, j'ai réalisé que je pouvais utiliser ces compétences financières pour contribuer à l'émergence de projets à impact positif.",
        tips: "Montrez la cohérence entre votre parcours, vos valeurs personnelles et votre choix d'orientation."
      },
      {
        id: "professional-aspirations",
        text: "Quelles sont vos aspirations professionnelles à court, moyen et long terme ?",
        exampleAnswer: "À court terme, je souhaite consolider mon expertise technique dans le conseil en transformation digitale. À moyen terme, je vise à développer des compétences managériales pour mener des équipes projet. À long terme, j'ambitionne de créer ma structure spécialisée dans l'accompagnement des PME vers leur transition numérique.",
        tips: "Présentez un plan progressif et réaliste qui montre votre réflexion stratégique tout en restant flexible."
      },
      {
        id: "five-year-plan",
        text: "Où vous voyez-vous dans 5 ou 10 ans ?",
        exampleAnswer: "Dans 5 ans, je me vois évoluer vers un poste de chef de produit dans le secteur de la santé connectée, après avoir acquis une solide expérience opérationnelle. Dans 10 ans, je souhaiterais diriger une business unit, idéalement à l'international, pour développer des solutions innovantes répondant aux enjeux de santé publique.",
        tips: "Montrez une vision claire mais adaptable, en lien avec les compétences que vous souhaitez développer dans la formation visée."
      },
      {
        id: "inspiration",
        text: "Quelles sont les personnes qui vous inspirent, et pourquoi ?",
        exampleAnswer: "Je suis particulièrement inspiré par Esther Duflo, économiste franco-américaine et prix Nobel. Sa manière de combiner rigueur scientifique et impact social concret en développant des approches expérimentales pour lutter contre la pauvreté correspond à ma vision de l'engagement professionnel utile et basé sur des preuves.",
        tips: "Privilégiez des modèles en lien avec votre projet professionnel et expliquez précisément ce qui vous inspire chez ces personnes."
      },
      {
        id: "morning-motivation",
        text: "Qu'est-ce qui vous motive à vous lever chaque matin ?",
        exampleAnswer: "Ce qui me motive chaque matin, c'est l'opportunité d'apprendre quelque chose de nouveau et de contribuer positivement à mon environnement. Que ce soit en résolvant un problème technique complexe ou en aidant un camarade à comprendre un concept, je trouve ma motivation dans ce sentiment d'utilité et de progression constante.",
        tips: "Partagez vos motivations profondes et donnez des exemples concrets de ce qui vous anime au quotidien."
      }
    ]
  },
  {
    id: "interpersonal",
    title: "Questions sur les relations interpersonnelles et le travail en équipe",
    icon: "users",
    description: "Ces questions évaluent votre capacité à travailler avec les autres et à communiquer efficacement.",
    questions: [
      {
        id: "team-solo",
        text: "Préférez-vous travailler seul ou en équipe ?",
        exampleAnswer: "J'apprécie les deux modalités de travail pour des raisons différentes. Le travail en équipe me stimule par la diversité des perspectives et l'émulation collective, comme lors de notre projet entrepreneurial où la complémentarité des profils a été déterminante. Le travail individuel me permet quant à lui de me concentrer intensément sur des tâches analytiques complexes.",
        tips: "Montrez votre adaptabilité et votre compréhension des avantages de chaque approche selon les contextes et les objectifs."
      },
      {
        id: "constructive-criticism",
        text: "Comment réagissez-vous face à une critique constructive ?",
        exampleAnswer: "Je considère les critiques constructives comme des opportunités d'amélioration précieuses. Récemment, suite aux retours de mon responsable sur ma présentation, j'ai pris le temps d'analyser ses commentaires, de demander des précisions et d'établir un plan d'action pour renforcer mes compétences en communication orale.",
        tips: "Illustrez votre réponse par une situation concrète où vous avez utilisé une critique pour progresser."
      },
      {
        id: "team-contribution",
        text: "Qu'apportez-vous à une équipe ?",
        exampleAnswer: "J'apporte à une équipe ma capacité à structurer le travail collectif et à faciliter la communication entre ses membres. Dans notre association étudiante, j'ai mis en place des outils collaboratifs et des points réguliers qui ont permis de décloisonner les différents pôles et d'améliorer notre efficacité collective de 30%.",
        tips: "Identifiez vos contributions spécifiques à la dynamique d'équipe et appuyez-les sur des exemples concrets et mesurables."
      },
      {
        id: "conflict-management",
        text: "Comment gérez-vous les conflits ou les tensions ?",
        exampleAnswer: "Face aux conflits, j'adopte une approche en trois temps : d'abord l'écoute active des différentes parties pour comprendre les positions et intérêts de chacun, puis la recherche de points de convergence, et enfin la proposition de solutions pragmatiques. Cette méthode m'a permis de résoudre un désaccord important lors de notre projet tutoré sur la stratégie à adopter.",
        tips: "Présentez votre méthode de résolution de conflit et illustrez-la par un exemple où vous avez aidé à désamorcer une situation tendue."
      }
    ]
  },
  {
    id: "creative",
    title: "Questions créatives et inattendues",
    icon: "puzzle",
    description: "Ces questions évaluent votre créativité, votre spontanéité et votre capacité à penser différemment.",
    questions: [
      {
        id: "magic-wand",
        text: "Si vous aviez une baguette magique, que feriez-vous ?",
        exampleAnswer: "Si j'avais une baguette magique, je créerais un système d'éducation universel où chaque enfant pourrait développer ses talents uniques grâce à des méthodes personnalisées. Cette vision reflète ma conviction que l'éducation est le principal levier de développement individuel et collectif, et explique mon intérêt pour l'edtech.",
        tips: "Utilisez cette question pour révéler vos valeurs profondes et faire un lien avec votre projet professionnel, tout en montrant votre capacité à penser de manière ambitieuse et créative."
      },
      {
        id: "superpower",
        text: "Quel superpouvoir aimeriez-vous avoir, et pourquoi ?",
        exampleAnswer: "J'aimerais pouvoir comprendre et parler instantanément toutes les langues. Au-delà de l'aspect pratique, ce pouvoir symbolise pour moi l'importance de la communication et de la compréhension mutuelle dans un monde globalisé. C'est d'ailleurs ce qui me motive à apprendre le mandarin actuellement, malgré sa difficulté.",
        tips: "Choisissez un pouvoir qui reflète vos aspirations et explique indirectement votre personnalité ou vos ambitions professionnelles."
      },
      {
        id: "object",
        text: "Si vous étiez un objet, lequel seriez-vous ?",
        exampleAnswer: "Je serais un caméléon, capable de m'adapter à différents environnements tout en gardant mon identité. Cette adaptabilité m'a permis de m'intégrer rapidement lors de mes expériences à l'étranger et de collaborer efficacement avec des personnes de cultures diverses, tout en restant fidèle à mes valeurs fondamentales.",
        tips: "Choisissez un objet dont les caractéristiques reflètent vos qualités professionnelles, et expliquez clairement la métaphore."
      }
    ]
  },
  {
    id: "values",
    title: "Questions sur les valeurs et les choix personnels",
    icon: "values",
    description: "Ces questions évaluent vos principes éthiques et votre processus de prise de décision.",
    questions: [
      {
        id: "core-values",
        text: "Quelles sont les valeurs qui vous tiennent le plus à cœur ?",
        exampleAnswer: "L'intégrité, l'excellence et l'ouverture d'esprit sont mes valeurs fondamentales. L'intégrité guide mes décisions quotidiennes et professionnelles, comme lorsque j'ai refusé de participer à une stratégie marketing trompeuse malgré la pression. L'excellence me pousse à me dépasser constamment, tandis que l'ouverture d'esprit m'aide à accueillir des perspectives diverses.",
        tips: "Limitez-vous à 2-3 valeurs essentielles et illustrez chacune par un exemple concret de leur application dans votre vie."
      },
      {
        id: "decision-making",
        text: "Comment prenez-vous des décisions importantes ?",
        exampleAnswer: "Pour les décisions importantes, j'utilise une approche structurée : d'abord une phase d'analyse où je collecte les informations pertinentes, puis une évaluation des alternatives selon des critères objectifs et mes valeurs personnelles. Enfin, je consulte souvent des personnes de confiance pour obtenir des perspectives complémentaires avant de trancher.",
        tips: "Présentez un processus méthodique qui démontre votre rationalité tout en reconnaissant la place des valeurs et de l'intuition."
      },
      {
        id: "moral-dilemma",
        text: "Quel dilemme moral avez-vous déjà rencontré, et comment l'avez-vous résolu ?",
        exampleAnswer: "Lors de mon stage, j'ai découvert qu'un collègue présentait des données légèrement modifiées pour améliorer les résultats. Confronté au dilemme entre loyauté envers l'équipe et intégrité professionnelle, j'ai choisi d'abord de discuter en privé avec ce collègue pour comprendre sa démarche, puis de proposer ensemble une présentation alternative plus transparente.",
        tips: "Choisissez un exemple professionnel pertinent qui montre votre capacité à naviguer des situations complexes avec éthique et diplomatie."
      },
      {
        id: "happiness",
        text: "Qu'est-ce qui vous rend heureux dans la vie ?",
        exampleAnswer: "Trois éléments principaux contribuent à mon bonheur : l'apprentissage constant qui nourrit ma curiosité intellectuelle, les relations profondes avec mes proches qui m'apportent soutien et perspectives, et la sensation d'avoir un impact positif à travers mes projets professionnels et associatifs.",
        tips: "Équilibrez votre réponse entre aspects personnels et professionnels, en montrant comment ces sources de bonheur influencent vos choix de carrière."
      }
    ]
  },
  {
    id: "projection",
    title: "Questions de projection et de mise en situation",
    icon: "search",
    description: "Ces questions évaluent votre capacité à vous adapter et à résoudre des problèmes concrets.",
    questions: [
      {
        id: "challenge",
        text: "Parlez-moi d'une expérience où vous avez dû relever un défi.",
        exampleAnswer: "Lors de mon stage en consulting, j'ai été chargé de réorganiser la chaîne logistique d'un client avec des contraintes serrées de temps et de budget. Face à la complexité du problème, j'ai commencé par cartographier tous les processus existants, puis identifié les goulots d'étranglement par une analyse de données. J'ai ensuite proposé et mis en œuvre trois améliorations prioritaires qui ont réduit les délais de livraison de 15%.",
        tips: "Structurez votre réponse en présentant clairement le contexte, les actions entreprises et les résultats obtenus (méthode CAR : Contexte, Action, Résultat)."
      },
      {
        id: "uninteresting-project",
        text: "Comment réagiriez-vous si vous deviez travailler sur un projet qui ne vous passionne pas ?",
        exampleAnswer: "Face à un projet peu passionnant, j'adopterais plusieurs stratégies : d'abord chercher les aspects qui peuvent néanmoins être enrichissants ou formateurs, puis me fixer des objectifs personnels de développement de compétences. Enfin, j'essaierais d'apporter une valeur ajoutée en proposant des approches innovantes, comme je l'ai fait lors d'une mission administrative initialement routinière que j'ai pu partiellement automatiser.",
        tips: "Montrez votre professionnalisme et votre capacité à trouver de la motivation même dans des situations moins idéales."
      },
      {
        id: "adaptation",
        text: "Comment vous adaptez-vous à un environnement ou à une culture d'entreprise différente ?",
        exampleAnswer: "Pour m'adapter à un nouvel environnement, j'observe d'abord attentivement les codes et pratiques en place. Je pose ensuite des questions ciblées à mes collègues pour mieux comprendre la culture informelle. Lors de mon échange universitaire à Singapour, cette approche m'a permis de naviguer efficacement entre les attentes académiques occidentales et asiatiques, très différentes dans leur expression.",
        tips: "Illustrez votre capacité d'adaptation par des exemples concrets de situations où vous avez dû vous intégrer dans des environnements nouveaux ou multiculturels."
      },
      {
        id: "difficult-decision",
        text: "Décrivez une situation où vous avez dû prendre une décision difficile.",
        exampleAnswer: "En tant que président de l'association étudiante, j'ai dû décider de l'annulation d'un événement majeur après des mois de préparation, en raison d'un problème de sécurité découvert tardivement. Cette décision impliquait des pertes financières et des déceptions. J'ai organisé une réunion d'urgence, présenté clairement les risques, écouté toutes les propositions alternatives, puis tranché en privilégiant la sécurité malgré les conséquences.",
        tips: "Montrez votre processus de prise de décision face à une situation complexe, en expliquant comment vous avez pesé les différents facteurs et assumé les conséquences."
      },
      {
        id: "unexpected-changes",
        text: "Comment gérez-vous les imprévus ou les changements de dernière minute ?",
        exampleAnswer: "Face aux imprévus, j'applique une méthode en trois étapes : évaluation rapide de la situation et des priorités, réallocation des ressources, et communication transparente avec toutes les parties prenantes. Lors de la défection d'un intervenant clé pour notre conférence étudiante, cette approche m'a permis de trouver une alternative de qualité en moins de 48 heures tout en maintenant l'organisation générale de l'événement.",
        tips: "Démontrez votre agilité et votre calme sous pression en décrivant votre méthodologie face à l'imprévu, illustrée par un exemple concret."
      }
    ]
  }
];
