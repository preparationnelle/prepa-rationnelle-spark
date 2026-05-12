import type { BanqueCategory } from './banque-questions-types';

export const BANQUE_PART1: BanqueCategory[] = [
  {
    id: 'parcours',
    label: 'Parcours & Identité',
    tag: '01',
    questions: [
      {
        id: 1,
        question: "Présentez-vous en une minute.",
        hint: "La question qui ouvre 90 % des entretiens — avoir un fil conducteur, pas une liste de dates.",
        jury: "Le jury teste la clarté et la fluidité à l'oral. Il cherche un candidat qui sait synthétiser son parcours avec un fil conducteur — pas quelqu'un qui récite son CV. La première impression se joue ici.",
        structure: [
          "Origine et formation en 2-3 phrases max — aller vite, aller à l'essentiel.",
          "L'expérience ou l'engagement le plus révélateur de votre personnalité.",
          "Pourquoi cette école maintenant — en une phrase d'ouverture qui donne envie d'aller plus loin.",
        ],
        ancrage: "Le pitch doit être travaillé mais sonner naturel. Préparez trois versions (30s, 1 min, 2 min) pour s'adapter. La dernière phrase est la plus importante — elle ouvre la suite de l'entretien.",
        phrasesCles: [
          "« Je suis [formation], passionné par [domaine], avec en parallèle [expérience marquante]. Ce qui m'a amené jusqu'ici, c'est [fil conducteur clair]. Et ce que je cherche en intégrant votre école, c'est [objectif précis]. »",
        ],
      },
      {
        id: 2,
        question: "Qu'est-ce qui vous a conduit jusqu'ici ?",
        hint: "La cohérence du parcours — pas les dates, le 'pourquoi'.",
        jury: "Le jury cherche un fil conducteur, pas une liste d'événements. Il veut comprendre la logique interne de votre parcours — ce qui vous a poussé à chaque choix, pas juste ce que vous avez fait.",
        structure: [
          "Identifier le moment-charnière de votre trajectoire — le choix qui a tout déclenché.",
          "Montrer la progression logique : comment un intérêt a mené à un autre, comment un défi a ouvert une nouvelle direction.",
          "Ancrer dans le présent : pourquoi cet entretien est la suite naturelle de ce parcours.",
        ],
        ancrage: "La meilleure réponse raconte une histoire avec une tension — pas un parcours lisse. Le moment où vous avez douté, changé de direction, ou découvert quelque chose d'inattendu est souvent ce qui rend le parcours mémorable.",
        phrasesCles: [
          "« Ce qui m'a conduit jusqu'ici, c'est moins un plan que [élément déclencheur]. À partir de là, j'ai compris que [prise de conscience] — et ça a orienté chacun de mes choix depuis. »",
        ],
      },
      {
        id: 3,
        question: "Qu'est-ce qui pourrait jouer contre votre candidature ?",
        hint: "Question piège — transformer une limite réelle en argument pour l'école.",
        jury: "Le jury vérifie votre lucidité et votre résistance à la pression. Il cherche quelqu'un qui reconnaît ses limites sans se dévaloriser — et qui sait en faire un levier plutôt qu'une excuse.",
        structure: [
          "Optionnel : une touche d'humour contextuel (timing, concurrence) — seulement si elle vient naturellement.",
          "Nommer une vraie limite, précise et honnête — pas un défaut déguisé en qualité.",
          "Pivot immédiat : montrez que c'est précisément ce que l'école vous permettra de combler.",
        ],
        ancrage: "Le manque d'expérience directe en entreprise dans le secteur business est la limite la plus crédible pour un candidat de prépa. Elle est réelle, légitime, et se retourne facilement en argument pro-école.",
        phrasesCles: [
          "« La limite principale de ma candidature, c'est peut-être mon manque d'expérience directe en entreprise dans ce domaine. Mais c'est précisément pour cela que je candidate : votre école m'apportera les stages et le réseau que mon parcours de prépa n'a pas pu me donner. »",
          "« Si je dois être honnête, certains candidats ont déjà des expériences que je n'ai pas encore. Ce n'est pas un regret — c'est ce qui me motive à intégrer une école qui offre précisément ces opportunités. »",
        ],
      },
      {
        id: 4,
        question: "Êtes-vous fier de votre parcours ?",
        hint: "Fierté nuancée — valoriser la progression et les obstacles surmontés, pas la perfection.",
        jury: "Le jury cherche l'authenticité et la maturité. Un candidat qui dit 'oui, tout s'est bien passé' est creux. Un candidat qui montre qu'il a construit quelque chose malgré les difficultés est mémorable.",
        structure: [
          "Oui, avec nuance — la fierté porte sur la progression, pas sur les résultats.",
          "Ancrer dans un transfert concret : ce qu'une expérience difficile (sport, déménagement, échec) a apporté à la suite.",
          "Reconnaître ce qui reste à construire — la fierté ne signifie pas que tout est accompli.",
        ],
        ancrage: "La richesse d'un parcours non-linéaire : une double culture, une transition sport-études, des moments de doute surmontés. Ce n'est pas la droiture du parcours qui impressionne — c'est la cohérence qu'on lui donne après coup.",
        phrasesCles: [
          "« Oui, je suis fier de mon parcours — non pas parce qu'il est parfait, mais parce que chaque difficulté que j'ai rencontrée m'a conduit à me dépasser. »",
          "« Ce dont je suis le plus fier, c'est d'avoir su transformer des obstacles en sources d'apprentissage. Ça ne s'apprend pas dans les manuels — ça se construit dans le réel. »",
        ],
      },
      {
        id: 5,
        question: "Quel est votre plus grand succès ?",
        hint: "Choisir un succès qui révèle un caractère, pas forcément le plus brillant sur le papier.",
        jury: "Le jury ne cherche pas un palmarès. Il veut comprendre ce que vous valorisez vraiment. Un succès qui implique la résilience vaut dix fois un résultat brillant sans friction.",
        structure: [
          "Choisir un succès qui révèle un trait de caractère — pas forcément le plus grand au sens scolaire.",
          "Structurer en tension : quel était l'obstacle ? Qu'avez-vous fait précisément ? Qu'est-ce que ça a changé ?",
          "Option : un 'bel échec' transformé en réussite inattendue — souvent plus mémorable qu'un succès lisse.",
        ],
        ancrage: "Un échec qui s'est retourné en quelque chose de plus grand que prévu est souvent le meilleur 'succès' à raconter. Ou simplement : être là, aujourd'hui, après ce parcours — humble mais vrai.",
        phrasesCles: [
          "« Mon plus grand succès n'est peut-être pas celui qu'on attendrait. C'est d'avoir rebondi après [expérience difficile] et d'avoir trouvé dans cet échec la motivation pour construire quelque chose de plus solide. »",
          "« Je serais tenté de dire que mon plus grand succès, c'est d'être assis ici aujourd'hui — non par arrogance, mais parce que le chemin pour y arriver a demandé de surmonter [obstacle concret]. »",
        ],
      },
      {
        id: 6,
        question: "Quelle est la situation la plus stressante que vous ayez dû gérer ?",
        hint: "Montrer que le stress peut être un carburant — pas seulement un handicap à surmonter.",
        jury: "Le jury évalue votre rapport au stress et à la pression — pas votre capacité à prétendre ne pas stresser. Il cherche quelqu'un qui reconnaît le stress, le comprend et sait le transformer.",
        structure: [
          "Décrire la situation avec précision : quoi, enjeux, pourquoi c'était stressant.",
          "Ce que vous avez fait concrètement — pas 'j'ai pris sur moi' mais la méthode réelle.",
          "Ce que ça vous a appris sur votre gestion du stress — avec transfert vers l'avenir.",
        ],
        ancrage: "Une situation où les enjeux dépassaient l'individuel (équipe, compétition, examen en conditions difficiles), où vous avez performé malgré la pression. La clé : comment avez-vous changé de méthode après un premier blocage ?",
        phrasesCles: [
          "« La situation la plus stressante m'a surtout appris une chose : le stress, bien canalisé, peut être un carburant. Ce n'est pas l'absence de pression qui m'a permis de m'en sortir — c'est d'avoir appris à travailler avec elle. »",
        ],
      },
      {
        id: 7,
        question: "Qu'est-ce que votre formation vous a apporté concrètement ?",
        hint: "Au-delà du programme — les compétences transversales et la transformation personnelle.",
        jury: "Le jury veut voir si vous êtes capable de prendre du recul sur votre propre formation — pas réciter un syllabus. La prépa forme des qualités qui ne sont pas dans les cours : gestion de l'échec, endurance, méthode.",
        structure: [
          "Distinguer les acquis académiques (méthodes, rigueur) des acquis humains (gestion de la pression, persévérance).",
          "S'appuyer sur un exemple concret de transfert : une compétence acquise qui a servi dans un autre contexte.",
          "Montrer ce que la formation ne vous a pas donné — et comment l'école complètera.",
        ],
        ancrage: "La prépa apprend à travailler dans l'incertitude et à accepter l'échec comme information. Ce mécanisme — se remettre en question, changer de méthode, recommencer — est plus précieux que n'importe quel cours.",
        phrasesCles: [
          "« Ce que ma formation m'a vraiment appris, ce n'est pas dans le programme — c'est la capacité à me confronter à l'échec, à l'analyser et à l'utiliser pour progresser. »",
          "« La prépa m'a donné une méthode de travail rigoureuse, mais surtout elle m'a appris que l'endurance intellectuelle se construit dans la durée, pas dans un sprint. »",
        ],
      },
      {
        id: 8,
        question: "Pourquoi avoir choisi la classe préparatoire ?",
        hint: "Montrer un choix raisonné — pas seulement 'pour aller en école de commerce'.",
        jury: "Le jury vérifie que vous avez choisi la prépa et non subi la prépa. Un candidat qui ne sait pas pourquoi il est là inspire peu confiance.",
        structure: [
          "Expliquer le raisonnement — pourquoi la prépa plutôt qu'une licence, un BUT, une école directe post-bac.",
          "Ce que la prépa offre que les autres voies n'offrent pas de la même façon.",
          "Être honnête sur les débouchés visés — sans prétendre que la prépa est 'une fin en soi'.",
        ],
        ancrage: "La prépa est un choix de méthode autant qu'un choix de débouché. Choisir la prépa, c'est choisir une façon d'apprendre — intensive, exigeante — pour accéder à des formations qui forment des profils polyvalents.",
        phrasesCles: [
          "« J'ai choisi la prépa parce que je voulais un défi intellectuel sérieux avant d'intégrer une école de commerce. Ce n'était pas uniquement pour les débouchés — c'était pour construire une méthode de travail que je n'aurais pas développée ailleurs. »",
        ],
      },
      {
        id: 9,
        question: "Avez-vous envisagé de vous réorienter en cours de route ?",
        hint: "La persévérance du choix dit quelque chose — mais un doute assumé aussi.",
        jury: "Le jury cherche à comprendre la solidité de votre projet. Quelqu'un qui n'a jamais douté n'est pas forcément plus crédible que quelqu'un qui a douté et choisi de continuer.",
        structure: [
          "Si non : expliquer pourquoi le doute ne s'est pas installé — et ce qui vous a maintenu dans la voie.",
          "Si oui : raconter le doute honnêtement, ce qui l'a causé, et la décision de poursuivre — c'est plus fort qu'une certitude aveugle.",
          "Dans tous les cas : montrer que le choix actuel est assumé, pas subi.",
        ],
        ancrage: "Un candidat qui a traversé le doute et choisi de rester est souvent plus convaincant qu'un candidat qui n'a jamais remis en question sa trajectoire. Le doute surmonté est une preuve de détermination.",
        phrasesCles: [
          "« Je n'ai pas vraiment envisagé de me réorienter — non pas par manque de questionnement, mais parce que chaque fois que j'ai pesé les alternatives, j'ai confirmé que cette voie correspondait le mieux à ce que je voulais construire. »",
        ],
      },
      {
        id: 10,
        question: "Quel est votre plus bel échec ?",
        hint: "Le 'bel' échec révèle un caractère — choisir celui qui dit quelque chose de fort sur vous.",
        jury: "Le jury veut voir si vous comprenez la notion : un bel échec n'est pas un petit échec, c'est un échec qui révèle quelque chose, qui a une suite, qui a transformé. Les réponses trop lisses ne convainquent pas.",
        structure: [
          "'Bel' au sens grand ou paradoxal : ce qui semblait catastrophique et s'est révélé fondateur.",
          "Décrire l'échec avec honnêteté — pas pour s'excuser, pour montrer que vous l'avez vraiment vécu.",
          "Ce qui en est sorti : une réorientation, une prise de conscience, un rebond concret.",
        ],
        ancrage: "L'échec le plus 'beau' est souvent celui dont les conséquences ont dépassé l'échec lui-même. Une défaite dans quelque chose qui comptait beaucoup, qui a débouché sur quelque chose de meilleur ou d'inattendu.",
        phrasesCles: [
          "« Mon plus bel échec est celui qui m'a le plus surpris dans ses conséquences. Sur le moment, c'était une vraie déception — et ce qu'il a déclenché ensuite est ce qui m'a le plus construit. »",
          "« Ce que j'appelle un 'bel échec', c'est un échec dont je ne voudrais pas effacer la trace — parce que sans lui, je ne serais pas là où j'en suis aujourd'hui. »",
        ],
      },
      {
        id: 11,
        question: "Avez-vous des regrets ou des remords ?",
        hint: "Distinction subtile — regret (avoir fait) vs remords (ne pas avoir fait). Montrer qu'on a réfléchi.",
        jury: "Le jury évalue votre rapport à votre propre histoire. La distinction regret/remords est philosophiquement riche et montre une réflexion mûre si elle est bien utilisée.",
        structure: [
          "Utiliser la distinction regret/remords — montrez que vous l'avez pensée.",
          "Nommer un regret ou un remords réel, avec contexte — la généralité ne dit rien.",
          "Ce que vous en faites aujourd'hui : la réflexion sur le passé comme levier pour le présent.",
        ],
        ancrage: "Un remords est souvent plus révélateur qu'un regret : ne pas avoir osé quelque chose, ne pas avoir dit quelque chose à temps. Cela montre une capacité à mesurer l'impact de ses non-choix.",
        phrasesCles: [
          "« Je distingue les deux : j'ai peu de regrets sur ce que j'ai fait, parce que j'ai agi en cohérence avec ce que j'étais à ce moment-là. En revanche, j'ai des remords sur certaines choses que je n'ai pas osé faire — et c'est ce qui me pousse aujourd'hui à prendre davantage d'initiatives. »",
        ],
      },
      {
        id: 12,
        question: "Quelle est la critique la plus constructive que l'on vous ait faite ?",
        hint: "Choisir une critique qui a d'abord résisté — puis été acceptée. Raconter ce processus.",
        jury: "Le jury cherche à voir si vous savez recevoir un feedback et ce que vous en faites. Une critique trop bénigne sera perçue immédiatement.",
        structure: [
          "Nommer la critique précisément — 'on m'a dit que...' plutôt que 'on m'a dit que j'avais des axes de progrès'.",
          "Le contexte : qui, quand, dans quel cadre — ça rend la critique crédible.",
          "Ce que vous en avez fait : une action concrète mise en place, pas juste 'j'y travaille'.",
        ],
        ancrage: "La critique la plus utile est souvent celle qu'on a d'abord refusé d'entendre. Raconter ce processus — résistance puis acceptation — est bien plus riche qu'une critique acceptée immédiatement.",
        phrasesCles: [
          "« La critique la plus constructive qu'on m'ait faite est celle que j'ai d'abord refusé d'entendre. On m'a dit que j'avais tendance à vouloir tout faire seul plutôt que de déléguer. Sur le moment, je l'ai mal pris — et en y réfléchissant, c'était juste. »",
        ],
      },
      {
        id: 13,
        question: "De quel accomplissement êtes-vous le plus fier ?",
        hint: "Différent du 'plus grand succès' — chercher quelque chose de personnel, pas nécessairement scolaire.",
        jury: "Le jury veut voir ce que vous valorisez vraiment — au-delà des résultats officiels. Un accomplissement personnel ou humain dit souvent plus qu'un diplôme ou une récompense.",
        structure: [
          "Choisir un accomplissement qui dit quelque chose de vos valeurs — pas de vos compétences.",
          "Décrire ce qu'il a fallu surmonter pour l'atteindre.",
          "Expliquer pourquoi il vous rend fier — au fond, qu'est-ce que ça dit de vous ?",
        ],
        ancrage: "Un engagement tenu sur la durée (8 ans de mandat associatif, 5 ans d'un sport difficile, accompagnement d'un proche dans une épreuve) est souvent plus révélateur qu'une victoire ponctuelle.",
        phrasesCles: [
          "« L'accomplissement dont je suis le plus fier, ce n'est pas [résultat brillant]. C'est [accomplissement humain ou durable] — parce que pour y arriver, j'ai dû [obstacle précis], et persévérer alors que la majorité aurait arrêté. »",
        ],
      },
      {
        id: 14,
        question: "Quelle expérience vous a le plus fait grandir ?",
        hint: "Une expérience transformatrice — avec un avant et un après clairement identifiables.",
        jury: "Le jury cherche la profondeur de la réflexion. Ce qui compte, c'est votre capacité à nommer ce qui a changé — pas juste à raconter une anecdote.",
        structure: [
          "Choisir une expérience avec un vrai 'avant/après' dans votre façon de penser ou d'agir.",
          "Nommer précisément ce qui a changé — une conviction, une façon de travailler, un rapport aux autres.",
          "Montrer comment ce changement est visible aujourd'hui dans votre comportement.",
        ],
        ancrage: "Les expériences qui font le plus grandir sont rarement les plus confortables : un échec inattendu, une confrontation avec une culture différente, une responsabilité prise trop tôt. Ce que vous en avez extrait compte plus que l'expérience elle-même.",
        phrasesCles: [
          "« L'expérience qui m'a le plus fait grandir, c'est [expérience]. Avant, je pensais que [conviction initiale]. Après, j'ai compris que [nouvelle conviction]. Et concrètement, ça a changé [comportement précis]. »",
        ],
      },
      {
        id: 15,
        question: "Comment avez-vous développé votre ouverture interculturelle ?",
        hint: "L'international ne se réduit pas aux voyages — raconter un vrai décentrement de regard.",
        jury: "Le jury ne cherche pas un passeport tamponné. Il cherche quelqu'un capable de se décentrer — de voir autrement grâce à un contact avec une autre culture, langue ou façon de penser.",
        structure: [
          "Nommer l'expérience interculturelle concrète : voyage, langue apprise, immersion, famille biculturelle, collègue international.",
          "Ce que ça a changé dans votre regard : une conviction remise en cause, une compréhension nouvelle.",
          "Comment cette ouverture se manifeste aujourd'hui dans votre façon de travailler ou de penser.",
        ],
        ancrage: "Une double culture construite entre deux pays, deux langues, deux systèmes éducatifs est l'une des formes d'interculturalité les plus profondes — elle crée une capacité naturelle à naviguer entre des référentiels différents.",
        phrasesCles: [
          "« Mon rapport à l'interculturalité vient de [expérience concrète]. Ce qui m'a le plus changé, c'est d'avoir réalisé que [conviction remise en cause]. Depuis, j'aborde [situation] différemment — et je sais que c'est un avantage dans un environnement international. »",
        ],
      },
      {
        id: 16,
        question: "En quoi votre parcours vous distingue-t-il des autres candidats ?",
        hint: "Être précis, pas générique — identifier ce qui est vraiment unique dans votre profil.",
        jury: "Le jury cherche une proposition de valeur différenciante. Ce qui différencie un candidat, c'est souvent une combinaison unique — pas une qualité isolée.",
        structure: [
          "Identifier 1-2 éléments vraiment spécifiques : une combinaison rare, un vécu particulier, un engagement profond.",
          "Ne pas sur-jouer la différence — présenter avec naturel, pas avec arrogance.",
          "Montrer comment cette différence crée de la valeur dans une promotion d'école de commerce.",
        ],
        ancrage: "La double culture, un sport de haut niveau mené en parallèle de la prépa, un engagement associatif de plusieurs années, une expérience de vie atypique — ces éléments créent une proposition différente. Pas supérieure, mais différente.",
        phrasesCles: [
          "« Ce qui me distingue probablement, c'est la combinaison [élément 1] + [élément 2]. Ce n'est pas ce qui me rend 'meilleur' — c'est ce qui crée une complémentarité avec le profil standard de votre promotion. »",
        ],
      },
    ],
  },
  {
    id: 'ecole',
    label: 'Motivation & École',
    tag: '02',
    questions: [
      {
        id: 17,
        question: "Pourquoi notre école plutôt qu'une université ou des études à l'étranger ?",
        hint: "Argument construit — pas une liste de classements, un vrai raisonnement personnel.",
        jury: "Le jury entend des centaines de fois 'votre réseau' et 'votre classement'. Ce qui différencie un candidat, c'est la précision de ses raisons — une spécificité concrète qu'il a vraiment creusée.",
        structure: [
          "Partir de son projet et montrer pourquoi cette école y répond mieux qu'une université ou une formation à l'étranger.",
          "Citer deux ou trois spécificités concrètes de l'école (pas le classement) : un programme, une pédagogie, une association, un campus.",
          "Reconnaître ce que les autres voies auraient pu apporter — et expliquer pourquoi la balance a penché ici.",
        ],
        ancrage: "Une école de commerce offre ce qu'une université et une formation à l'étranger n'offrent pas de la même façon : la combinaison vie associative intense + stages structurés + réseau alumni activable dès la sortie.",
        phrasesCles: [
          "« J'ai sérieusement envisagé [autre voie]. Ce qui m'a orienté vers votre école, c'est [spécificité concrète]. Ce n'est pas un classement — c'est une cohérence avec ce que je veux construire. »",
        ],
      },
      {
        id: 18,
        question: "Pourquoi ce secteur ou cette spécialisation ?",
        hint: "Montrer une motivation intrinsèque — pas seulement les débouchés.",
        jury: "Le jury cherche quelqu'un qui sait pourquoi il veut exercer dans ce domaine — pas quelqu'un qui a choisi 'parce que ça paye bien' ou 'parce que mon père fait ça'. La curiosité pour les problèmes de ce secteur doit être visible.",
        structure: [
          "Expliquer l'origine de cet intérêt : quand et comment il est apparu.",
          "Montrer une connaissance concrète du secteur : une actualité, un enjeu, une tendance.",
          "Relier à son expérience personnelle : pourquoi vous, avec votre profil, pouvez apporter quelque chose ici.",
        ],
        ancrage: "L'entrepreneuriat et l'innovation attirent parce qu'ils offrent une façon de construire quelque chose à partir de rien, avec une équipe soudée et un objectif qui dépasse l'individu. Ce n'est pas un secteur — c'est une posture.",
        phrasesCles: [
          "« Ce qui m'attire dans [secteur], c'est [raison précise et personnelle]. J'ai commencé à m'y intéresser quand [déclencheur]. Et plus je creuse, plus je trouve que les problèmes de ce secteur correspondent exactement au type de défis sur lesquels je veux travailler. »",
        ],
      },
      {
        id: 19,
        question: "Pourquoi vous et pas un autre candidat ?",
        hint: "Une proposition de valeur claire et différenciante — pas une liste de qualités génériques.",
        jury: "C'est la question de la valeur ajoutée. Le jury cherche quelqu'un qui sait articuler ce qu'il apporte — ni trop modeste au point d'être invisible, ni arrogant.",
        structure: [
          "Ne pas répondre avec des qualités génériques (sérieux, motivé, curieux — tout le monde dit ça).",
          "Identifier 1-2 traits vraiment spécifiques à son parcours : une combinaison unique, un vécu particulier.",
          "Terminer sur ce qu'on apporte à l'école — pas seulement ce qu'on vient y chercher.",
        ],
        ancrage: "Ce qui rend un candidat mémorable, c'est souvent un détail précis, pas une liste de vertus. Une double culture, un engagement sportif de haut niveau, une expérience atypique — ces éléments créent une proposition différente.",
        phrasesCles: [
          "« Je ne suis pas le candidat le plus brillant de tous les dossiers que vous avez lus. Mais je suis peut-être celui dont la combinaison [élément 1] + [élément 2] crée une valeur ajoutée réelle dans votre promotion. »",
        ],
      },
      {
        id: 20,
        question: "Que comptez-vous apporter à notre école ?",
        hint: "Penser collectif — ce qu'on donne à la promotion, pas seulement ce qu'on vient chercher.",
        jury: "Le jury teste la vision 'donner avant de recevoir'. Un candidat qui parle seulement de ce qu'il veut obtenir de l'école rate cette question. Ce qui convainc, c'est quelqu'un qui a déjà réfléchi à sa contribution.",
        structure: [
          "Identifier deux ou trois contributions concrètes : un projet associatif, un engagement, une compétence à partager.",
          "Montrer que vous avez travaillé l'école : connaître les associations, les projets étudiants, ce qui manque peut-être.",
          "Lier à votre profil spécifique — qu'est-ce que vous et vous seul pouvez apporter ?",
        ],
        ancrage: "Lancer une association qui n'existe pas encore, partager une double culture, accompagner de futurs candidats comme vous avez été accompagné — ce sont des contributions qui ont une valeur réelle pour une promotion.",
        phrasesCles: [
          "« Ce que je veux apporter, c'est [contribution précise]. Non pas parce que c'est ce qu'il faut dire — mais parce que c'est ce qui me tient à coeur et ce que je sais faire. Et j'ai l'intention de le mettre au service de la promotion dès la première année. »",
        ],
      },
      {
        id: 21,
        question: "Êtes-vous sûr de ce que vous voulez faire aujourd'hui ?",
        hint: "L'incertitude bien assumée est plus forte qu'une certitude fabriquée.",
        jury: "Le jury se méfie des candidats qui ont 'tout planifié à 5 ans'. Ils valorisent quelqu'un qui a une direction claire sans être rigide, et qui comprend que l'école est là précisément pour affiner ce projet.",
        structure: [
          "Ne pas prétendre avoir tout résolu — mais ne pas non plus répondre 'je ne sais pas du tout'.",
          "Nommer une direction, une famille de problèmes ou de secteurs qui attire — sans fermer les autres portes.",
          "Expliquer pourquoi l'école aidera à préciser : confrontation au terrain, spécialisations, rencontres.",
        ],
        ancrage: "L'école de commerce est une formation pluridisciplinaire faite pour des gens qui ne sont pas encore sûrs à 100%. L'incertitude justifie le choix de l'école — elle ne le contredit pas.",
        phrasesCles: [
          "« Je suis sûr de ma direction générale — [domaine, type de mission]. En revanche, c'est l'école qui m'aidera à préciser exactement comment y arriver. C'est d'ailleurs une des raisons pour lesquelles je candidate. »",
          "« Si j'étais certain à 100%, je n'aurais peut-être pas besoin d'une école de commerce. C'est justement cette ouverture que je cherche : affiner mon projet à travers les cours, les stages et les rencontres. »",
        ],
      },
      {
        id: 22,
        question: "Racontez-nous vos premiers jours à l'école si vous êtes admis.",
        hint: "Se projeter concrètement — montrer qu'on a travaillé l'école au-delà de la brochure.",
        jury: "Le jury teste si le candidat s'est vraiment projeté dans la vie de l'école — ou s'il a juste lu le site internet. Un candidat qui cite des associations précises, des événements réels, est immédiatement différencié.",
        structure: [
          "Décrire les premières actions concrètes : associations à rejoindre, démarches administratives, rencontres à provoquer.",
          "Mentionner un événement ou programme spécifique à l'école (camp entrepreneurial, forum des assos, première semaine d'intégration).",
          "Montrer l'état d'esprit : curieux, ouvert, prêt à construire quelque chose.",
        ],
        ancrage: "Les premières semaines en école de commerce définissent souvent le réseau des 4 ans. Les candidats qui le savent et qui s'y préparent prennent une avance considérable sur ceux qui attendent que les choses viennent à eux.",
        phrasesCles: [
          "« Mon premier réflexe sera d'aller à la réunion des associations dès le premier jour — j'ai déjà repéré [association précise] qui correspond à [intérêt]. Ensuite, rencontrer le maximum de personnes, pas seulement dans ma promo. »",
        ],
      },
      {
        id: 23,
        question: "Quelle est la devise de notre école ?",
        hint: "Question de préparation pure — l'avoir apprise ET pouvoir expliquer pourquoi elle correspond à votre profil.",
        jury: "Le jury vérifie votre sérieux de préparation. Ne pas connaître la devise est éliminatoire. La connaître sans pouvoir en parler est insuffisant. La relier à son propre projet est ce qui fait la différence.",
        structure: [
          "Citer la devise avec précision.",
          "Expliquer ce qu'elle signifie concrètement pour vous — pas la définition, mais la résonance personnelle.",
          "Montrer comment votre parcours ou votre projet illustre cette devise.",
        ],
        ancrage: "Chaque grande école a une devise qui reflète une philosophie pédagogique. Chez EDHEC : 'Make an impact' — l'impact mesurable sur le réel. Chez em lyon : 'early makers' — l'action avant la théorie. Connaître la devise par cœur ET pouvoir la faire résonner avec son profil est le signe d'une préparation sérieuse.",
        phrasesCles: [
          "« La devise de votre école est [devise]. Ce qui me correspond dans cette formule, c'est [angle personnel]. C'est exactement l'état d'esprit dans lequel je veux construire mes quatre années ici. »",
        ],
      },
      {
        id: 24,
        question: "Si vous pouviez changer quelque chose dans notre école, que changeriez-vous ?",
        hint: "Avoir un avis construit — pas prétendre que tout est parfait, ni critiquer sans avoir d'arguments.",
        jury: "Le jury veut voir si vous pensez de façon critique et constructive. Répondre 'tout est très bien' montre soit un manque de préparation, soit une absence de pensée propre. Critiquer sans arguments est pire.",
        structure: [
          "Reconnaître honnêtement les limites de ce que vous pouvez savoir depuis l'extérieur.",
          "Proposer une idée concrète et justifiée — une association qui manque, une lacune pédagogique, une ouverture possible.",
          "Montrer que la proposition est en cohérence avec votre projet ou vos convictions.",
        ],
        ancrage: "Une proposition autour de la place de la programmation, du sport, de l'engagement citoyen, ou d'une spécialisation peu développée — avec une justification précise et bienveillante — montre à la fois de la préparation et de la créativité.",
        phrasesCles: [
          "« Je serais prudent sur ce point — je n'ai pas encore l'expérience interne pour critiquer ce que je ne connais pas. Mais ce qui m'a frappé en préparant cet entretien, c'est [observation]. Si c'est une lacune, une piste pourrait être [proposition]. »",
        ],
      },
      {
        id: 25,
        question: "Comment avez-vous préparé cet entretien ?",
        hint: "Montrer une préparation à trois niveaux : l'école, le projet, soi-même.",
        jury: "Le jury vérifie si le candidat a vraiment travaillé. La bonne réponse montre une démarche authentique et structurée — pas 'j'ai appris par cœur'.",
        structure: [
          "Préparation sur l'école : au-delà de la brochure (alumni, presse, événements, associations précises).",
          "Préparation sur le projet : clarification du projet professionnel, cohérence du discours.",
          "Préparation sur soi : les questions sur la personnalité, les entretiens-miroirs, la réflexion sur son parcours.",
        ],
        ancrage: "Préparer un entretien de personnalité, c'est souvent la première fois qu'on prend vraiment le temps de réfléchir à ses expériences et de leur donner une cohérence. Ce travail introspectif est en lui-même un enseignement.",
        phrasesCles: [
          "« J'ai préparé cet entretien à trois niveaux : sur votre école (j'ai [action concrète au-delà de la brochure]), sur mon projet (j'ai clarifié ce que je voulais vraiment défendre), et sur moi-même — ce dernier étant le plus difficile et le plus enrichissant. »",
        ],
      },
      {
        id: 26,
        question: "Si vous êtes admis dans deux écoles dont une mieux classée, laquelle choisissez-vous ?",
        hint: "Avoir des critères de choix clairs — le classement seul n'est pas une réponse satisfaisante.",
        jury: "Le jury teste si vous avez réfléchi à ce qui compte vraiment pour vous — ou si vous êtes aveuglément guidé par les classements. Quelqu'un qui a des critères personnels clairs et les défend est mémorable.",
        structure: [
          "Nommer vos critères de décision réels : pédagogie, localisation, spécialisation, réseau dans votre secteur cible.",
          "Expliquer comment ces critères s'appliquent à leur école spécifiquement.",
          "Être honnête si une autre école mieux classée l'emporterait — en l'expliquant avec élégance.",
        ],
        ancrage: "La question est conçue pour tester votre rapport à leur école. Ne répondez pas mécaniquement 'je choisirais toujours la mieux classée' (arrogant) ni 'je choisirais toujours la vôtre' (complaisant). L'honnêteté argumentée est la seule réponse convaincante.",
        phrasesCles: [
          "« Si je suis honnête, mon critère principal n'est pas le classement seul — c'est [critère précis]. Et à ce niveau, votre école [répond mieux/est comparable] parce que [raison]. Si la comparaison était avec [école spécifique], je devrais vraiment peser [éléments précis]. »",
        ],
      },
      {
        id: 27,
        question: "Quel est votre plan B si vous n'intégrez pas cette école ?",
        hint: "Avoir un plan B réel — sans sembler indifférent à la réussite.",
        jury: "Le jury cherche quelqu'un qui a réfléchi à ses alternatives sans paniquer. Un candidat qui dit 'je n'ai pas de plan B' manque de préparation. Un candidat qui a une alternative claire montre de la maturité.",
        structure: [
          "Nommer un plan B crédible : redoublement, admission parallèle, autre école, projet alternatif.",
          "Montrer que ce plan B est une alternative sérieuse, pas une capitulation.",
          "Exprimer l'ambition : le plan B existe, mais ce n'est pas celui qu'on préfère.",
        ],
        ancrage: "Le plan B le plus crédible pour un candidat de prépa : redoubler pour repasser les concours, postuler en admission parallèle sur d'autres écoles du groupe, ou rejoindre une autre école du même rang. Avoir un plan B ne signifie pas anticiper l'échec — ça signifie être préparé.",
        phrasesCles: [
          "« Mon plan B existe — [plan précis]. Mais ce n'est pas le chemin que je préfère. Ce que je préfère, c'est d'être là l'année prochaine avec vous. »",
        ],
      },
    ],
  },
  {
    id: 'projet',
    label: 'Projet Professionnel',
    tag: '03',
    questions: [
      {
        id: 28,
        question: "Quels sont vos moteurs professionnels — classez-les par priorité.",
        hint: "Classer honnêtement : intellectuel, humain, financier — dans quel ordre et pourquoi ?",
        jury: "Le jury cherche à voir si vous connaissez vraiment vos motivations. Quelqu'un qui met l'intellectuel en premier n'est pas 'meilleur' — ce qui compte, c'est la cohérence avec le reste du discours.",
        structure: [
          "Classer les moteurs par ordre de priorité avec honnêteté — le financier n'est pas tabou si c'est vrai.",
          "Illustrer chaque moteur avec un exemple concret du parcours.",
          "Montrer comment ces moteurs s'articulent avec le projet d'école et le projet professionnel.",
        ],
        ancrage: "Trois moteurs classiques : intellectuel (curiosité, apprentissage, complexité), humain (impact sur les gens, équipe, transmission), financier (récompense de l'effort, liberté, ambition). L'ordre est révélateur — et le jury le sait.",
        phrasesCles: [
          "« Mes moteurs, dans l'ordre : d'abord l'intellectuel — j'ai besoin d'être stimulé par des problèmes complexes. Ensuite l'humain — ce que je fais doit avoir un impact sur des gens réels. Le financier vient en troisième, non par indifférence, mais parce que les deux premiers sont plus durables comme source de motivation. »",
        ],
      },
      {
        id: 29,
        question: "Comment votre projet professionnel a-t-il pris forme ?",
        hint: "Raconter le cheminement — pas le projet tel qu'il est aujourd'hui, mais comment il est né.",
        jury: "Le jury veut distinguer le projet authentique du projet construit pour l'entretien. Ce qui convainc, c'est une trajectoire avec des doutes, des découvertes, des ajustements — pas une certitude tombée du ciel.",
        structure: [
          "Identifier le déclencheur : une expérience, une rencontre, une lecture, une frustration.",
          "Montrer le cheminement : les étapes de réflexion, les essais, les confirmations progressives.",
          "Dire où on en est aujourd'hui — et ce qui reste à construire.",
        ],
        ancrage: "Un projet de conseil en stratégie, d'entrepreneuriat ou d'impact ne se construit pas en un jour. Il se forme souvent à partir d'expériences variées — un engagement associatif qui révèle un goût pour la coordination, un stage qui confirme un intérêt, un professeur qui ouvre une perspective.",
        phrasesCles: [
          "« Mon projet a pris forme progressivement. Ce n'était pas une évidence dès le départ — c'est [expérience déclencheur] qui a mis un premier mot sur ce que je cherchais. Et depuis, chaque expérience a soit confirmé, soit affiné cette direction. »",
        ],
      },
      {
        id: 30,
        question: "Qu'est-ce qu'un bon manager selon vous ?",
        hint: "Donner une définition personnelle ancrée dans une expérience — pas un cours de management.",
        jury: "Le jury détecte instantanément les réponses de manuel. Il cherche votre définition personnelle du management, construite par l'expérience — pas en lisant un article LinkedIn.",
        structure: [
          "Ancrer dans une expérience personnelle : avoir été managé, avoir managé quelqu'un, même à petite échelle.",
          "Identifier 2-3 qualités concrètes — avec une préférence pour les qualités qui semblent contradictoires (exigeant ET à l'écoute).",
          "Dire ce qu'un bon manager fait différemment d'un manager ordinaire.",
        ],
        ancrage: "Le management n'est pas un titre — c'est une posture. On peut manager sans titre : comme délégué de classe, capitaine d'équipe, responsable d'asso. La légitimité d'un bon manager n'est pas hiérarchique, elle est construite par la confiance.",
        phrasesCles: [
          "« Un bon manager, selon moi, c'est quelqu'un qui crée les conditions pour que les autres donnent le meilleur d'eux-mêmes. Non pas grâce à lui, mais avec lui. J'ai eu cette expérience quand [situation concrète]. »",
          "« Ce qui différencie un bon manager, c'est sa capacité à écouter vraiment — pas pour valider, mais pour comprendre. J'ai appris ça en [expérience de terrain]. »",
        ],
      },
      {
        id: 31,
        question: "Quel serait l'associé idéal pour vous ?",
        hint: "Chercher la complémentarité — pas la similitude.",
        jury: "Le jury évalue votre intelligence relationnelle et votre compréhension de la dynamique de duo fondateur. Quelqu'un qui veut un associé 'comme lui' n'a pas encore compris ce que crée vraiment une équipe complémentaire.",
        structure: [
          "Identifier les compétences manquantes dans son propre profil — celles que l'associé devrait apporter.",
          "Nommer les valeurs non-négociables qu'il devrait partager — ambition, éthique, façon de travailler.",
          "Expliquer comment ces complémentarités créent quelque chose que ni l'un ni l'autre ne pourrait construire seul.",
        ],
        ancrage: "L'associé idéal n'est pas un clone — c'est quelqu'un qui compense vos angles morts. Si vous êtes créatif et visionnaire, l'associé idéal est souvent rigoureux et opérationnel. Si vous êtes commercial et orienté client, l'associé idéal est souvent technique ou financier.",
        phrasesCles: [
          "« L'associé idéal, pour moi, c'est quelqu'un qui est très différent de moi sur les compétences — notamment [compétence manquante] — mais qui partage exactement les mêmes valeurs sur [valeurs clés]. La complémentarité sur le fond avec la convergence sur les valeurs. »",
        ],
      },
      {
        id: 32,
        question: "Préféreriez-vous travailler dans une grande entreprise ou une start-up ?",
        hint: "Avoir une préférence assumée et argumentée — ne pas jouer la neutralité.",
        jury: "Le jury cherche une opinion. Quelqu'un qui dit 'les deux ont leurs avantages' sans aller plus loin n'a pas réellement réfléchi. Une préférence nette et argumentée est un signe de clarté.",
        structure: [
          "Affirmer une préférence — sans dénigrer l'autre option.",
          "L'argumenter à partir d'une connaissance personnelle, pas d'une théorie.",
          "Reconnaître ce qu'on perd dans ce choix — ça montre qu'on a pesé les deux.",
        ],
        ancrage: "Le choix entre grande entreprise et start-up n'est pas entre 'sécurité' et 'aventure' — c'est entre deux types d'apprentissage. En grande entreprise : processus, ressources, mais risque de tâches limitées. En start-up : autonomie rapide, mais risque de manque de mentor.",
        phrasesCles: [
          "« Ma préférence va à la structure plus petite, au moins pour commencer — parce que j'apprends mieux quand j'ai une vraie responsabilité. Ce n'est pas contre les grandes entreprises — c'est une question de façon dont je fonctionne. »",
        ],
      },
      {
        id: 33,
        question: "Quel métier rêviez-vous d'exercer quand vous aviez 5 ans ?",
        hint: "Question créative — chercher le trait de caractère précoce qui est encore présent aujourd'hui.",
        jury: "Le jury cherche à voir l'enfant derrière le candidat — et si les aspirations profondes de l'enfant ont un lien avec le projet actuel. Même si le métier d'enfance est bizarre ou inattendu, la logique derrière peut être très révélatrice.",
        structure: [
          "Nommer le métier avec naturel — ne pas s'excuser si c'est inhabituel.",
          "Expliquer ce qui fascinait dans ce métier : la complexité, le pouvoir, l'action, le service aux autres.",
          "Faire le pont avec aujourd'hui : ce désir d'enfance se retrouve-t-il quelque part dans le projet actuel ?",
        ],
        ancrage: "Vouloir être chef du métro à 5 ans révèle un désir de coordination et de maîtrise d'un système complexe — ce n'est pas si éloigné du management ou de la stratégie. Le lien entre l'enfance et le projet actuel n'a pas à être littéral — il doit être logique.",
        phrasesCles: [
          "« À 5 ans, je voulais être [métier]. Ce qui me fascinait, c'était [raison précise]. Et à bien y réfléchir, ce désir de [trait de caractère] est encore très présent dans ce que je veux construire aujourd'hui. »",
        ],
      },
      {
        id: 34,
        question: "Que faites-vous si votre projet professionnel n'aboutit pas ?",
        hint: "Montrer la résilience — analyser, ajuster, repartir.",
        jury: "Le jury évalue le rapport à l'échec et la solidité du projet. Quelqu'un qui n'a pas pensé à cette éventualité est fragile. Quelqu'un qui a un plan de rebond est mature.",
        structure: [
          "Nommer les étapes de rebond : prendre du recul, analyser l'échec, identifier ce qui n'a pas fonctionné.",
          "Montrer que l'échec n'est pas la fin — c'est une information sur ce qu'il faut ajuster.",
          "Avoir une alternative concrète : pivoting du projet, domaine connexe, autre voie vers le même objectif.",
        ],
        ancrage: "Le projet professionnel ne doit pas être le seul point d'équilibre — c'est une direction, pas une destination fixe. Les meilleurs entrepreneurs pivotent souvent plusieurs fois avant de trouver leur marché. La résilience se travaille avant l'épreuve, pas après.",
        phrasesCles: [
          "« Si mon projet n'aboutit pas, mon premier réflexe sera de comprendre pourquoi — pas de me précipiter sur le plan B. L'analyse de l'échec est ce qui permet de rebondir intelligemment plutôt que de répéter les mêmes erreurs. »",
        ],
      },
      {
        id: 35,
        question: "Poste passionnant et mal payé ou poste rémunérateur mais ennuyeux ?",
        hint: "La réponse révèle les valeurs — être honnête même si ce n'est pas le choix 'noble'.",
        jury: "Le jury attend une prise de position franche. Répondre 'les deux sont importants' est la pire réponse. Le choix passionnant est attendu — l'intérêt vient de l'argumentation.",
        structure: [
          "Choisir le poste passionnant — avec des arguments économiques, pas seulement idéalistes.",
          "Argumenter : sur le long terme, la passion produit de meilleures performances, qui produisent de meilleures rémunérations.",
          "Ancrer dans un exemple personnel ou familial si possible — quelqu'un qui aime profondément son travail.",
        ],
        ancrage: "Un proche passionné par son métier — qui 'ne travaille jamais' parce qu'il aime ce qu'il fait — est souvent le meilleur argument pour ce choix. Ce n'est pas de l'idéalisme : c'est une observation sur la durabilité de la performance.",
        phrasesCles: [
          "« Je choisis le poste passionnant — non pas pour des raisons idéalistes, mais parce que j'ai observé de près ce que produit un travail qu'on aime : une performance durable, une énergie contagieuse, et souvent, à terme, une reconnaissance financière. »",
        ],
      },
      {
        id: 36,
        question: "Quel est votre projet professionnel à moyen terme ?",
        hint: "Horizon 5-7 ans — avoir une direction sans prétendre tout avoir planifié.",
        jury: "Le jury cherche une cohérence entre le projet court terme (école, stages) et le projet moyen terme. Quelqu'un qui n'a aucune vision à 5 ans inquiète. Quelqu'un qui a tout planifié à l'heure près inquiète aussi.",
        structure: [
          "Nommer une direction à 5-7 ans : un type de poste, un secteur, un type d'impact.",
          "Montrer comment l'école est une étape logique vers ce projet.",
          "Reconnaître ce qui peut changer — la direction est ferme, les détails sont ouverts.",
        ],
        ancrage: "L'entrepreneuriat, le conseil en stratégie, l'investissement, le management d'équipe — des directions claires qui permettent de construire un discours cohérent sans enfermer dans une case.",
        phrasesCles: [
          "« À 5-7 ans, je me vois dans [type de rôle] dans [secteur ou type de structure]. Ce n'est pas figé — mais la direction est claire. Et l'école est l'étape la plus logique pour y arriver, parce que [raison précise]. »",
        ],
      },
      {
        id: 37,
        question: "Pour quelle raison ne pourriez-vous pas être entrepreneur ?",
        hint: "Lucidité sur ses limites — et capacité à les retourner en moteur.",
        jury: "Question qui teste l'honnêteté et la connaissance de soi. Un candidat qui dit 'aucune raison' manque de lucidité. Un candidat qui nomme une vraie limite et montre comment il la travaille est crédible.",
        structure: [
          "Nommer la vraie limite — pas un défaut déguisé en qualité.",
          "Expliquer pourquoi c'est une limite réelle dans le contexte de l'entrepreneuriat.",
          "Montrer ce qu'on fait pour la travailler — et pourquoi elle n'est pas rédhibitoire.",
        ],
        ancrage: "La limite la plus honnête pour un candidat de prépa : le manque d'expérience du monde réel, du client, de la gestion d'équipe. Ces compétences s'acquièrent — mais elles manquent à ce stade. Ce n'est pas une raison de ne pas entreprendre, c'est une raison de se former d'abord.",
        phrasesCles: [
          "« La raison principale qui pourrait jouer contre moi en tant qu'entrepreneur, c'est [limite précise]. C'est une vraie limite — pas une fausse modestie. Et c'est justement une des raisons pour lesquelles je veux d'abord passer par [école ou expérience] avant de me lancer. »",
        ],
      },
    ],
  },
];
