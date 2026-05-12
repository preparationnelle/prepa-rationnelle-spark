import type { BanqueCategory } from './banque-questions-types';

export const BANQUE_PART2: BanqueCategory[] = [
  {
    id: 'interets',
    label: "Centres d'intérêts",
    tag: '04',
    questions: [
      {
        id: 38,
        question: "Qu'est-ce qui vous passionne en dehors de vos études ?",
        hint: "La passion révèle un caractère — montrer comment elle forge des compétences transférables.",
        jury: "Le jury veut voir si vous existez en dehors de votre dossier. Une passion authentique dit beaucoup sur votre façon d'apprendre, d'insister, de vous améliorer. Pas besoin d'une passion 'noble' — besoin d'une passion vraie.",
        structure: [
          "Nommer la passion avec précision : pas 'le sport' mais quel sport, depuis quand, à quel niveau, avec quels résultats.",
          "Ce qu'elle vous apporte concrètement — pas 'ça me détend' mais une compétence ou un enseignement précis.",
          "Le lien avec votre projet ou votre façon de travailler.",
        ],
        ancrage: "Sport de compétition, musique pratiquée sérieusement, engagement associatif durable, curiosité intellectuelle construite — la profondeur prime sur la diversité. Quelqu'un qui fait une chose intensément dit plus qu'un dossier avec cent activités superficielles.",
        phrasesCles: [
          "« Ma passion principale, c'est [passion]. Ce que ça m'a vraiment appris, c'est [compétence transférable] — pas dans un cours, dans le réel. Et c'est la même posture que j'essaie d'avoir dans mes études. »",
        ],
      },
      {
        id: 39,
        question: "Quelles autres études auriez-vous aimé faire ?",
        hint: "Curiosité intellectuelle — montrer une vraie hésitation et ce qui a fait pencher la balance.",
        jury: "Le jury évalue la profondeur de votre curiosité intellectuelle et la solidité de votre choix de l'école de commerce. Un candidat qui n'a aucune alternative à citer manque de curiosité. Un candidat qui explique son arbitrage est mûr.",
        structure: [
          "Nommer une alternative crédible que vous avez vraiment envisagée — pas une réponse de façade.",
          "Expliquer ce qui vous attirait dans cette voie — ce que l'école de commerce n'offre pas de la même façon.",
          "Expliquer pourquoi vous avez finalement choisi l'école de commerce — le raisonnement qui a fait la différence.",
        ],
        ancrage: "Dauphine, Sciences Po, une école d'ingénieurs, une fac de droit — ces alternatives sont toutes crédibles. L'important est de pouvoir expliquer l'arbitrage : qu'est-ce que l'école de commerce offre que ces voies n'offrent pas de la même façon ?",
        phrasesCles: [
          "« J'ai longuement hésité avec [alternative]. Ce qui m'attirait, c'était [raison précise]. Ce qui m'a finalement convaincu de l'école de commerce, c'est [argument décisif]. Et je ne regrette pas ce choix. »",
        ],
      },
      {
        id: 40,
        question: "Sur quel sujet êtes-vous totalement intarissable ?",
        hint: "Choisir un vrai sujet de passion — montrer une connaissance en profondeur, pas en largeur.",
        jury: "Le jury veut voir une passion vive et profonde. Ce qui captive, c'est quelqu'un qui peut parler d'un sujet pendant 10 minutes sans se répéter, qui connaît des aspects moins connus, qui a des questions ouvertes.",
        structure: [
          "Nommer le sujet avec précision — pas 'l'économie' mais un aspect précis de l'économie.",
          "Montrer la profondeur : un angle moins connu, une question ouverte, quelque chose qui vous a surpris.",
          "Faire le lien avec votre projet si possible — mais pas forcément obligatoire.",
        ],
        ancrage: "Les sujets les plus convaincants sont souvent ceux où le candidat va au-delà de ce qu'on attend : pas juste l'IA en général, mais l'impact de l'IA sur les biais cognitifs dans la prise de décision financière. La précision crédibilise.",
        phrasesCles: [
          "« Si vous voulez m'arrêter, dites-le moi — parce que sur [sujet], je peux parler longtemps. Ce qui me fascine, c'est [aspect précis]. La question qui m'obsède en ce moment, c'est [question ouverte]. »",
        ],
      },
      {
        id: 41,
        question: "De quel talent ou activité créative êtes-vous le plus fier ?",
        hint: "Montrer une dimension humaine et créative — l'apprentissage hors cadre scolaire.",
        jury: "Le jury cherche la dimension humaine du candidat. Un talent artistique ou créatif dit comment vous apprenez en dehors du cadre — et souvent révèle des qualités (persévérance, sensibilité, rigueur) qu'on ne voit pas dans les dossiers.",
        structure: [
          "Nommer l'activité ou le talent avec honnêteté — y compris si c'est un 'petit' talent.",
          "Raconter comment vous l'avez développé : apprentissage, pratique, progrès, difficultés.",
          "Ce qu'il vous a appris sur vous-même ou sur une façon de travailler.",
        ],
        ancrage: "Si vous n'avez pas de talent artistique traditionnel, valoriser ce qui est créatif dans un sens large : cuisiner, organiser, écrire, improviser, mémoriser. La cuisine en particulier — surtout si elle est ancrée dans une culture — est un excellent vecteur de récit.",
        phrasesCles: [
          "« Mon talent, c'est [activité]. Ce n'est peut-être pas le plus impressionnant — mais c'est quelque chose que j'ai vraiment travaillé. Et ce que ça m'a appris, c'est [qualité transférable]. »",
        ],
      },
      {
        id: 42,
        question: "Quel est votre prochain voyage prévu ?",
        hint: "Curiosité pour le monde — montrer une façon de voyager qui révèle un caractère.",
        jury: "Le jury teste l'ouverture et la curiosité sur le monde. La question n'est pas 'où allez-vous' mais 'comment vous voyagez et pourquoi'. Quelqu'un qui dit 'je vais à [destination] parce que [raison précise]' dit plus que quelqu'un qui cite une destination exotique.",
        structure: [
          "Nommer la destination et la raison — pas juste 'pour me reposer'.",
          "Expliquer comment vous organisez vos voyages : avec ou sans plan fixe, seul ou en groupe, comment vous découvrez vraiment.",
          "Ce que vous attendez en tirer — rencontre, compréhension culturelle, aventure.",
        ],
        ancrage: "Un road trip organisé par soi-même (itinéraire, transports, hébergements) révèle de l'autonomie et de l'initiative. Un retour aux racines culturelles révèle un attachement à l'identité. Un voyage exploratoire révèle la curiosité. Chaque façon de voyager dit quelque chose.",
        phrasesCles: [
          "« Mon prochain voyage, c'est [destination]. Ce que j'attends de ce voyage, c'est [objectif précis — pas juste 'me reposer']. J'aime voyager [façon de voyager] parce que c'est là que j'apprends le plus vite sur [ce que vous apprenez en voyageant]. »",
        ],
      },
      {
        id: 43,
        question: "Qu'avez-vous prévu pour les prochains mois ?",
        hint: "Vitalité et organisation — montrer une vie en dehors des concours.",
        jury: "Le jury cherche à voir si vous avez une vie au-delà de la prépa. Quelqu'un qui n'a 'rien de prévu' semble épuisé ou désengagé. Quelqu'un qui a des projets montre de la vitalité.",
        structure: [
          "Citer un ou deux projets concrets — voyage, engagement, projet personnel.",
          "Montrer l'intention derrière : pas juste 'me reposer', mais 'découvrir', 'créer', 'avancer sur'.",
          "Relier si possible à un intérêt ou une valeur évoqués pendant l'entretien.",
        ],
        ancrage: "Un voyage qui renoue avec des racines culturelles, un projet associatif à lancer, une compétence à approfondir, un road trip planifié de façon autonome — tout ça dit quelque chose sur qui vous êtes quand les cours s'arrêtent.",
        phrasesCles: [
          "« Dans les prochains mois, j'ai prévu [projet concret]. Ce n'est pas juste pour décompresser — c'est aussi parce que [raison qui dit quelque chose sur vous]. »",
        ],
      },
    ],
  },
  {
    id: 'personnalite',
    label: 'Personnalité & Valeurs',
    tag: '05',
    questions: [
      {
        id: 44,
        question: "Quelle est votre devise personnelle ?",
        hint: "Une devise qui vous appartient vraiment — pas un proverbe générique récité.",
        jury: "La devise est une porte d'entrée sur votre façon de voir le monde. Ce qui compte, c'est pourquoi vous l'avez choisie — pas la devise elle-même.",
        structure: [
          "Choisir une devise qui vous appartient vraiment — pas un proverbe que tout le monde cite.",
          "Expliquer d'où elle vient : une expérience, une lecture, une figure inspirante.",
          "Illustrer comment elle guide une décision ou un comportement concret.",
        ],
        ancrage: "'Labor omnia vincit' (le travail triomphe de tout) est puissant si vous pouvez le relier à une expérience précise où le travail a effectivement tout résolu. Une devise construite dans l'expérience personnelle est encore plus mémorable qu'une citation connue.",
        phrasesCles: [
          "« Ma devise pourrait se résumer à [devise]. Ce n'est pas un beau principe abstrait — c'est quelque chose que j'ai appris par [expérience précise]. Et chaque fois que j'ai suivi ce principe, même dans les moments difficiles, ça a fini par produire quelque chose. »",
        ],
      },
      {
        id: 45,
        question: "Sur quel principe ou quelle valeur ne transigerez-vous jamais ?",
        hint: "Une valeur de fond — nommée précisément, ancrée dans une expérience réelle.",
        jury: "Le jury teste la solidité des valeurs et la capacité à les défendre sans dogmatisme. Une valeur sans exemple est un slogan. Une valeur illustrée est une conviction.",
        structure: [
          "Nommer la valeur avec précision — 'justice' est mieux que 'être bon'.",
          "Illustrer avec une situation où vous avez défendu cette valeur, même au prix d'un inconfort.",
          "Montrer les nuances : comment cette valeur se traduit dans des situations concrètes et complexes.",
        ],
        ancrage: "La justice — agir en fonction de ce qui est juste dans chaque situation — est une valeur puissante qui renvoie à la déontologie (Kant) et au rôle du délégué ou du médiateur. Mais elle doit être incarnée dans un exemple précis pour convaincre.",
        phrasesCles: [
          "« La valeur sur laquelle je ne transige pas, c'est [valeur]. En [situation précise], j'aurais pu prendre le chemin plus facile. Je ne l'ai pas fait parce que [raison]. Et je pense que c'est le type de décision qui dit qui on est vraiment. »",
        ],
      },
      {
        id: 46,
        question: "Pour quelle cause seriez-vous prêt à descendre dans la rue ?",
        hint: "Nommer une cause réelle avec conviction — sans être extrémiste dans la formulation.",
        jury: "Le jury cherche de l'engagement et de la conviction — pas du militantisme aveugle. Quelqu'un qui dit 'aucune cause' inquiète. Quelqu'un qui peut nommer une cause et l'argumenter calmement impressionne.",
        structure: [
          "Nommer la cause avec précision — pas 'l'injustice' en général.",
          "Expliquer pourquoi cette cause vous touche personnellement — ce qui la rend non-abstraite.",
          "Montrer que vous comprenez les positions contraires sans les valider.",
        ],
        ancrage: "La politique migratoire, la liberté de la presse et les lanceurs d'alerte (Julian Assange, WikiLeaks), la transition écologique, l'égalité des chances dans l'éducation — des causes qui peuvent être défendues avec nuance et connaissance du dossier.",
        phrasesCles: [
          "« Je descenrais dans la rue pour [cause précise]. Ce n'est pas une posture — c'est parce que [raison personnelle ou conviction construite]. Je comprends que d'autres voient les choses différemment, mais sur ce sujet, ma conviction est assez forte pour agir. »",
        ],
      },
      {
        id: 47,
        question: "Qu'est-ce qui vous révolte profondément ?",
        hint: "Nommer une injustice précise — pas un catalogue de grands maux de la société.",
        jury: "Le jury cherche à voir si vous avez des convictions, pas des opinions génériques. 'L'injustice' comme réponse vague dit très peu. Ce qui parle, c'est une injustice précise, un mécanisme compris.",
        structure: [
          "Choisir une révolte précise — pas un catalogue.",
          "La connecter à une expérience personnelle ou à un engagement concret.",
          "Montrer ce que vous faites ou voulez faire — la révolte sans action est une posture.",
        ],
        ancrage: "L'inégalité des chances dans l'accès à l'éducation, le plafond de verre, l'injustice de traitement entre groupes — des révoltes qui peuvent être ancrées dans des expériences personnelles et reliées à un projet professionnel concret.",
        phrasesCles: [
          "« Ce qui me révolte, c'est [injustice précise]. Non pas de manière abstraite — mais parce que j'ai vu ou compris [mécanisme concret]. Et c'est aussi une des raisons pour lesquelles je veux construire un projet professionnel qui y répond d'une façon ou d'une autre. »",
        ],
      },
      {
        id: 48,
        question: "Que faites-vous si votre entreprise prend une décision contraire à vos valeurs ?",
        hint: "Méthode en plusieurs étapes — comprendre avant de réagir, agir avant de partir.",
        jury: "Le jury évalue la maturité et le pragmatisme. Quelqu'un qui dit 'je démissionne' immédiatement est impulsif. Quelqu'un qui dit 'je me tais et j'obéis' n'a pas de colonne vertébrale. La bonne réponse est une méthode.",
        structure: [
          "D'abord comprendre la décision : qu'est-ce que je ne sais pas encore ? Quels éléments manquent ?",
          "Ensuite exprimer son désaccord : en interne, en privé, de façon constructive et argumentée.",
          "Enfin évaluer la suite : si rien ne change, jusqu'où aller — et quand partir.",
        ],
        ancrage: "La plupart des décisions éthiquement discutables en entreprise viennent d'une pression économique ou d'un compromis mal négocié — pas d'une volonté de mal faire. Comprendre d'abord le pourquoi permet souvent de trouver une voie de dialogue.",
        phrasesCles: [
          "« Ma première réaction serait de comprendre la décision avant de réagir — il y a souvent des éléments que je n'ai pas. Ensuite, si mon désaccord tient, je l'exprimerai en interne, en privé, avec des arguments. Si rien ne change, j'évaluerai si la ligne rouge est franchie — et si oui, je ferai les choix qui s'imposent. »",
        ],
      },
      {
        id: 49,
        question: "Jusqu'où iriez-vous pour réussir dans la vie ?",
        hint: "Définir ses propres lignes rouges — la réussite sans compromis est un signe de caractère.",
        jury: "Le jury veut voir si vous avez des limites. Quelqu'un qui dit 'je ferais tout pour réussir' est inquiétant. Quelqu'un qui nomme ce à quoi il ne renoncera jamais montre qu'il a réfléchi à ses valeurs.",
        structure: [
          "Définir ce que signifie 'réussir' pour vous — sans ça, la question n'a pas de réponse honnête.",
          "Nommer ce à quoi vous ne renonceriez pas : relations, éthique, santé, temps pour les proches.",
          "Reconnaître la tension entre ambition et ces limites — et comment vous la gérez.",
        ],
        ancrage: "La réussite sans équilibre personnel n'est pas une réussite durable. La vraie question est : votre indicateur de réussite est-il compatible avec une vie que vous voulez vraiment vivre ?",
        phrasesCles: [
          "« Pour réussir, je suis prêt à travailler dur, à sortir de ma zone de confort, à prendre des risques. Mais il y a des choses pour lesquelles je ne transige pas : [exemples précis]. Ce n'est pas une faiblesse — c'est une condition pour que la réussite en vaille la peine. »",
        ],
      },
      {
        id: 50,
        question: "Sur quoi fondez-vous une amitié ?",
        hint: "2-3 fondements avec de la profondeur — pas une liste exhaustive.",
        jury: "Le jury évalue l'intelligence relationnelle et les valeurs humaines. Ce qui convainc, c'est quelqu'un qui a une vision personnelle et construite de l'amitié — pas une liste de vertus.",
        structure: [
          "Choisir 2-3 fondements essentiels — pas tout ce qui fait 'une bonne amitié'.",
          "Illustrer chacun avec un exemple ou une situation concrète.",
          "Reconnaître ce que la vraie amitié exige de soi — pas seulement de l'autre.",
        ],
        ancrage: "La confiance construite dans l'adversité, la complémentarité (des valeurs communes + des façons d'être différentes), la capacité à se dire les choses sans ménager — ce sont des fondements qui disent quelque chose de profond sur ce qu'on attend des autres et de soi-même.",
        phrasesCles: [
          "« Ce qui fonde une vraie amitié pour moi, c'est d'abord [premier fondement], parce que [raison concrète]. Et ensuite [deuxième fondement] — ça semble évident, mais je sais que c'est ce qui fait tenir une amitié dans la durée. »",
        ],
      },
      {
        id: 51,
        question: "Décrivez votre meilleur ami en quelques mots.",
        hint: "Révéler ses propres valeurs à travers la description de l'autre.",
        jury: "La façon dont on décrit son meilleur ami révèle ce qu'on valorise vraiment chez les autres — et donc chez soi. Le jury écoute autant ce que vous dites de lui que la façon dont vous en parlez.",
        structure: [
          "Choisir 2-3 traits qui le définissent vraiment — y compris ses défauts s'ils sont attachants.",
          "Raconter une situation qui illustre un de ces traits.",
          "Dire ce que cette amitié vous apporte — et ce qu'elle exige de vous.",
        ],
        ancrage: "Un meilleur ami différent de soi sur les façons d'être mais identique sur les valeurs est un profil d'amitié particulièrement intéressant — il dit quelque chose sur votre capacité à accueillir la différence sans la peur de perdre ce qui compte.",
        phrasesCles: [
          "« Mon meilleur ami est [trait 1], [trait 2] — et très différent de moi sur [aspect]. On s'est soudés autour de [expérience commune]. Ce que j'apprécie le plus chez lui, c'est [qualité précise] — parce que c'est ce qui manque à beaucoup de relations : [ce que cette qualité apporte]. »",
        ],
      },
      {
        id: 52,
        question: "Quelle est votre place naturelle dans un travail d'équipe ?",
        hint: "Connaître sa tendance naturelle et montrer sa capacité à s'adapter.",
        jury: "Le jury évalue la connaissance de soi et la flexibilité. Quelqu'un qui dit 'je suis toujours le leader' manque de nuance. Quelqu'un qui dit 'ça dépend' sans préciser ne dit rien.",
        structure: [
          "Identifier la tendance naturelle : leader, facilitateur, expert, médiateur, exécutant.",
          "Illustrer avec une situation concrète où ce rôle s'est manifesté.",
          "Montrer la flexibilité : dans quelles situations jouez-vous un rôle différent ?",
        ],
        ancrage: "La meilleure réponse identifie une tendance ET montre une adaptabilité. Quelqu'un qui sait qu'il tend vers le leadership mais qui peut consciemment s'effacer quand quelqu'un d'autre est plus légitime — c'est une maturité réelle.",
        phrasesCles: [
          "« Naturellement, je tends vers [rôle]. J'ai vu ça dans [situation]. Mais j'ai aussi appris que ce n'est pas toujours le rôle le plus utile — et dans [autre situation], j'ai consciemment choisi de [autre rôle] parce que [raison]. »",
        ],
      },
      {
        id: 53,
        question: "Préférez-vous travailler seul ou en équipe ?",
        hint: "Avoir une vraie préférence et l'assumer — pas la neutralité par défaut.",
        jury: "Le jury teste la capacité à une vraie introspection. La réponse 'les deux, ça dépend' est acceptable uniquement si elle est précisée avec des exemples réels.",
        structure: [
          "Avoir une vraie préférence — et l'assumer.",
          "Nuancer avec les conditions : en équipe sous quelle condition ? Seul pour quoi ?",
          "Ancrer dans une expérience : comment la préférence s'est confirmée ou compliquée dans le réel.",
        ],
        ancrage: "L'émulation collective, la synergie dans une équipe qu'on connaît bien — ce sont des arguments pour l'équipe qui sont crédibles et spécifiques. La peur d'être seul n'est pas un argument. L'énergie que l'équipe génère en est un.",
        phrasesCles: [
          "« Ma préférence va à l'équipe — non par peur de travailler seul, mais parce que je suis meilleur quand il y a de l'émulation. Une équipe que je connais bien, avec qui j'ai confiance, me tire vers le haut. Seul, je peux produire — mais pas au même niveau. »",
        ],
      },
      {
        id: 54,
        question: "Comment réagissez-vous face à un conflit dans un groupe ?",
        hint: "Médiateur — montrer une méthode construite, ni fuite ni affrontement.",
        jury: "Le jury évalue la maturité relationnelle. Quelqu'un qui 'évite les conflits' inquiète. Quelqu'un qui 'affronte direct' peut aussi inquiéter. Ce qui rassure, c'est une méthode nuancée ancrée dans l'expérience.",
        structure: [
          "Décrire sa réaction naturelle avec honnêteté.",
          "Expliquer la méthode : écouter les deux parties avant de juger, comprendre la position de chacun.",
          "Donner un exemple concret — idéalement un conflit que vous avez réellement médié.",
        ],
        ancrage: "Le rôle de délégué de classe ou de capitaine d'équipe est un terrain d'apprentissage de la médiation. Les conflits qu'on a résolus en prépa ou dans une équipe sont souvent les exemples les plus crédibles.",
        phrasesCles: [
          "« Ma première réaction est de comprendre ce qui se passe vraiment avant d'intervenir. Dans [situation], j'ai servi de médiateur entre [parties] — et ce qui a fonctionné, c'est d'avoir pris le temps d'écouter les deux versions avant de proposer quoi que ce soit. »",
        ],
      },
      {
        id: 55,
        question: "Quel type de manager tirerait le meilleur de vous ?",
        hint: "Connaître ses conditions optimales de performance — et les articuler avec précision.",
        jury: "Le jury évalue la connaissance de soi et la capacité à gérer vers le haut (managing up). Quelqu'un qui sait ce dont il a besoin pour être au meilleur de sa forme est plus facile à manager.",
        structure: [
          "Nommer les conditions qui vous font performer : autonomie, feedback régulier, challenge intellectuel, liberté de proposer.",
          "Expliquer pourquoi — ancré dans une expérience où ces conditions étaient présentes (ou absentes).",
          "Montrer que vous pouvez aussi vous adapter à d'autres styles de management.",
        ],
        ancrage: "Un manager qui sait écouter les idées de son équipe et qui crée un espace pour les propositions (managing up) est souvent ce qui permet aux meilleurs profils de s'épanouir vraiment. Ce n'est pas de la faiblesse — c'est de l'intelligence relationnelle.",
        phrasesCles: [
          "« Le manager qui tirerait le meilleur de moi, c'est quelqu'un qui sait passionner et qui est ouvert aux propositions de son équipe. J'ai besoin de sentir que mes idées ont une chance d'être entendues — même si elles ne sont pas toutes retenues. Dans ces conditions, je donne tout. »",
        ],
      },
      {
        id: 56,
        question: "Quelle première impression laissez-vous à quelqu'un qui vous rencontre ?",
        hint: "Conscience de soi — ce que les autres voient avant qu'on parle.",
        jury: "Le jury évalue la conscience de soi et l'authenticité. Ce qu'on dit ici doit être cohérent avec ce que le jury observe depuis le début de l'entretien.",
        structure: [
          "Nommer l'impression que vous pensez laisser — avec honnêteté.",
          "L'illustrer avec une situation concrète où cette impression s'est manifestée.",
          "Reconnaître la part d'incertitude : on ne contrôle pas totalement l'image qu'on renvoie.",
        ],
        ancrage: "L'autorité naturelle, la fiabilité, la discrétion — des premières impressions qui peuvent être cohérentes avec un profil de candidat sérieux. Ce qui est intéressant, c'est de noter l'écart entre l'image qu'on pense donner et l'image qu'on donne vraiment.",
        phrasesCles: [
          "« L'impression que je laisse généralement, c'est [impression]. Je le sais parce que [situation où ça m'a été dit ou que j'ai observé]. Ce qui peut surprendre les gens ensuite, c'est [trait moins visible à première vue]. »",
        ],
      },
      {
        id: 57,
        question: "Comment vos proches vous décriraient-ils ?",
        hint: "Le regard extérieur sur soi — cohérence avec ce qui a été dit dans l'entretien.",
        jury: "Le jury teste si vous avez une vision juste de l'image que vous renvoyez. Quelqu'un qui se décrit exactement comme il voudrait être vu manque de recul. Quelqu'un qui peut nommer un décalage est mature.",
        structure: [
          "Citer une qualité qu'ils voient clairement — et que vous pouvez illustrer.",
          "Citer un défaut ou une limite qu'ils mentionneraient — ça rend la réponse crédible.",
          "Commenter ce décalage éventuel entre leur regard et votre propre perception.",
        ],
        ancrage: "La cohérence entre ce qu'on dit de soi et ce que les autres voient est un signe de maturité. L'incohérence — si elle est consciente et commentée — est encore plus intéressante : elle dit quelque chose sur les efforts de progression.",
        phrasesCles: [
          "« Mes proches diraient probablement [qualité 1] et [qualité 2]. Et honnêtement, ils mentionneraient aussi [limite]. Ce qui est intéressant, c'est que [limite] est justement quelque chose que je travaille — et ils le voient. »",
        ],
      },
      {
        id: 58,
        question: "Savez-vous dire non ?",
        hint: "Assertivité — donner un exemple concret où dire non était la bonne décision.",
        jury: "Le jury évalue l'assertivité et la capacité à fixer des limites. Quelqu'un qui dit 'je n'ai aucun mal à dire non' semble inflexible. Quelqu'un qui donne un exemple précis montre qu'il a vraiment réfléchi.",
        structure: [
          "Oui — et nommer les situations où c'est nécessaire.",
          "Donner un exemple concret de non dit : à qui, pour quelle raison, et comment.",
          "Montrer ce que le non a produit — dans la relation et dans la situation.",
        ],
        ancrage: "Dire non à ses parents sur une orientation, dire non à un stage qui ne correspond pas au projet, dire non à une demande qui franchit une limite éthique — ces exemples sont tous crédibles et révélateurs.",
        phrasesCles: [
          "« Oui, je sais dire non — mais je le fais quand j'ai des raisons solides, pas par principe. Dans [situation], j'ai dit non parce que [raison]. Et je suis convaincu que c'était la bonne décision, même si sur le moment ce n'était pas facile. »",
        ],
      },
      {
        id: 59,
        question: "Êtes-vous quelqu'un d'audacieux ?",
        hint: "Distinguer l'audace réfléchie de la témérité — donner des preuves concrètes.",
        jury: "Le jury ne veut pas entendre 'oui, j'aime prendre des risques'. Il veut des preuves. Et il veut voir la distinction entre audace (risque calculé) et témérité (risque aveugle).",
        structure: [
          "Donner une définition personnelle de l'audace — pas celle du dictionnaire.",
          "Citer deux exemples : un où l'audace a payé, un où ça n'a pas fonctionné comme prévu.",
          "Montrer que l'audace se cultive — ce n'est pas un trait inné mais une posture apprise.",
        ],
        ancrage: "L'audace dans le sport (choisir un défi hors norme, pratiquer une discipline difficile), dans les études (choisir la prépa), dans les projets (lancer quelque chose sans garantie) — tous ces exemples valent. L'important : les prises de risque étaient calculées, pas impulsives.",
        phrasesCles: [
          "« Je me considère audacieux, avec une nuance : l'audace que je valorise implique une vraie mesure du risque. Ce n'est pas sauter dans l'inconnu les yeux fermés — c'est décider d'aller là où les autres hésitent, en sachant exactement pourquoi. »",
        ],
      },
      {
        id: 60,
        question: "Aimez-vous le changement ?",
        hint: "Adaptabilité — distinguer le goût du changement de la fuite de la stabilité.",
        jury: "Le jury évalue la flexibilité et le rapport à l'inconfort. Quelqu'un qui dit 'j'adore le changement' peut sembler instable. Quelqu'un qui dit 'j'ai appris à l'aimer' est plus crédible.",
        structure: [
          "Nuancer : aimer le changement vs. ne pas avoir peur du changement — ce n'est pas la même chose.",
          "Citer une expérience de changement important que vous avez bien géré.",
          "Montrer comment l'adaptabilité est devenue une compétence construite, pas juste un trait.",
        ],
        ancrage: "Un changement de discipline sportive, un déménagement entre deux pays, un changement d'environnement culturel — des expériences qui prouvent une capacité à s'adapter et à trouver sa place dans un nouveau contexte.",
        phrasesCles: [
          "« Je n'ai pas naturellement 'adoré' le changement — mais j'ai appris à ne pas en avoir peur. Le changement le plus difficile que j'ai vécu était [changement précis]. Et ce qui m'a le plus frappé, c'est la rapidité avec laquelle on s'adapte quand on n'a pas le choix. »",
        ],
      },
      {
        id: 61,
        question: "Avez-vous confiance en vous ?",
        hint: "La vraie confiance intègre le doute — distinguer confiance construite et confiance aveugle.",
        jury: "La question piège : répondre 'oui' de façon platement affirmative. Le jury cherche quelqu'un qui a réfléchi à ce que ça signifie vraiment — et qui comprend que le doute productif est une qualité.",
        structure: [
          "Distinguer la confiance aveugle (qui n'apprend rien) et la confiance construite (qui intègre le doute).",
          "Montrer que la confiance est dans ses capacités à apprendre et à s'adapter, pas dans l'absence d'erreurs.",
          "Citer un moment de doute qui a débouché sur une meilleure décision.",
        ],
        ancrage: "Se connaître, c'est avoir confiance en soi — pas la confiance d'un ego qui ne se remet pas en question, mais la confiance de quelqu'un qui sait qui il est et ce qu'il lui reste à construire. Le doute de Descartes comme méthode, pas comme paralysie.",
        phrasesCles: [
          "« J'ai confiance en moi — mais ce n'est pas une confiance aveugle. Ce que j'appelle vraiment avoir confiance, c'est savoir se porter des questions, accepter de se remettre en cause, et rester capable d'agir malgré l'incertitude. La confiance aveugle n'apprend rien. »",
          "« Rien ne m'inquiète plus que quelqu'un qui ne doute jamais de lui-même. Le doute bien utilisé, c'est ce qui m'a le plus fait progresser. »",
        ],
      },
      {
        id: 62,
        question: "Croyez-vous au destin ?",
        hint: "Philosophie de vie — le destin comme point d'arrivée ou comme direction à construire ?",
        jury: "Question philosophique légère. Le jury évalue la nuance et la capacité à articuler une vision du monde personnelle sans dogmatisme.",
        structure: [
          "Prendre position avec nuance — ni fatalisme pur ni pur déterminisme.",
          "Expliquer votre vision du rapport entre ce qu'on choisit et ce qui nous arrive.",
          "Illustrer avec un moment de votre parcours où vous avez senti ce rapport.",
        ],
        ancrage: "Y croire modérément — non pas comme fatalité mais comme direction à construire. Le destin comme ligne directrice qu'on trace soi-même, pas comme scénario écrit à l'avance. Les modèles qui nous inspirent (sportifs, entrepreneurs) ont souvent cette conviction que leur trajectoire n'était pas tracée, mais qu'ils l'ont construite par la passion et l'effort.",
        phrasesCles: [
          "« J'y crois modérément — non pas comme fatalité, mais comme direction. Je pense que certaines rencontres et certaines coïncidences ne sont pas neutres. Mais ce qui compte, c'est ce qu'on en fait. Le destin, pour moi, c'est moins ce qui arrive que ce qu'on construit à partir de ce qui arrive. »",
        ],
      },
      {
        id: 63,
        question: "Que signifie réussir sa vie pour vous ?",
        hint: "Distinguer 'réussir dans la vie' (externe) et 'réussir sa vie' (interne).",
        jury: "Question philosophique — le jury cherche une réponse personnelle et construite. La distinction entre réussir dans la vie (reconnaissance) et réussir sa vie (cohérence) est le pivot de la bonne réponse.",
        structure: [
          "Commencer par la distinction — montrer que vous avez pensé à la formulation exacte de la question.",
          "Nommer ce qui constitue votre définition — en incluant les dimensions non-professionnelles.",
          "Montrer comment votre candidature s'inscrit dans ce projet de vie plus large.",
        ],
        ancrage: "Réussir sa vie, c'est construire une cohérence entre ce qu'on fait, ce qu'on valorise et ce qu'on est. Ce n'est pas l'accumulation de titres ou de salaire — c'est avoir construit quelque chose qui tient quand on enlève l'extérieur.",
        phrasesCles: [
          "« Réussir sa vie, pour moi, c'est ne pas avoir à choisir entre qui je suis et ce que je fais. C'est trouver un travail qui m'engage vraiment, des relations qui me nourrissent, et assez de recul pour mesurer ce qui compte vraiment. »",
        ],
      },
      {
        id: 64,
        question: "Le stress vous galvanise-t-il ou vous fait-il perdre vos moyens ?",
        hint: "Honnêteté sur les deux effets — et méthode concrète pour gérer.",
        jury: "Le jury évalue la gestion des émotions sous pression. Quelqu'un qui dit 'le stress me galvanise toujours' n'est pas crédible. Quelqu'un qui reconnaît les deux effets et explique sa méthode de régulation l'est.",
        structure: [
          "Reconnaître les deux effets — le stress comme carburant dans certains contextes, comme frein dans d'autres.",
          "Décrire les conditions qui font basculer d'un côté à l'autre.",
          "Expliquer la méthode de régulation : préparation, rituel, respiration, recadrage cognitif.",
        ],
        ancrage: "En compétition sportive ou aux concours, le stress produit souvent de meilleures performances qu'à l'entraînement ou pendant l'année. Apprendre à se préparer à l'état de stress — et non à l'éliminer — est une compétence clé.",
        phrasesCles: [
          "« Les deux, honnêtement. Plutôt galvanisé — j'ai souvent été meilleur en compétition qu'à l'entraînement. Mais j'ai aussi vécu des situations où le stress m'a paralysé. Ce que j'ai appris, c'est que ça dépend de ma préparation : plus je suis préparé, plus le stress devient un carburant plutôt qu'un frein. »",
        ],
      },
      {
        id: 65,
        question: "Comment définiriez-vous votre caractère en 3 mots ?",
        hint: "3 mots vrais et précis — pas les 3 mots les plus communs (curieux, rigoureux, motivé).",
        jury: "Le jury évalue la précision de l'introspection. 3 mots génériques disent peu. 3 mots inattendus, illustrés brièvement, disent beaucoup.",
        structure: [
          "Choisir des mots qui disent quelque chose d'inattendu ou de personnel — pas les adjectifs les plus courants.",
          "Illustrer brièvement chaque mot avec une situation ou un trait concret.",
          "S'assurer que ces 3 mots sont cohérents avec ce qui a été dit pendant l'entretien.",
        ],
        ancrage: "Tenace, curieux structurel, discret-mais-décidé — ce type de formulation est bien plus mémorable que 'motivé, rigoureux, créatif'. L'inattendu d'un mot bien choisi reste après l'entretien.",
        phrasesCles: [
          "« Je dirais [mot 1] — parce que [illustration]. [Mot 2] — parce que [illustration]. Et [mot 3], qui est peut-être le plus difficile à expliquer mais qui se manifeste dans [situation concrète]. »",
        ],
      },
    ],
  },
];
