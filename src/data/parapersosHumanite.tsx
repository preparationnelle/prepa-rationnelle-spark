import React from 'react';

export type Paraperso = {
  slug: string;
  number: number;
  title: string;
  glose: string;
  sousTheme: string;
  date: string;
  references: string[];
  body: React.ReactNode;
};

export const parapersosHumanite: Paraperso[] = [
  {
    slug: 'humanite-miroir-etranger',
    number: 1,
    title: "L'humanité se révèle dans le miroir de l'étranger",
    glose:
      "l'humain ne se connaît qu'en se regardant à travers le regard de l'autre",
    sousTheme: "Définir l'humanité / Frontières de l'humanité",
    date: '27 avril 2026',
    references: [
      'Montesquieu, Les Lettres persanes (1721)',
      'Lévi-Strauss, Race et histoire (1952)',
    ],
    body: (
      <p>
        L'humanité ne s'éprouve jamais aussi nettement qu'au moment où elle est
        regardée du dehors. C'est l'étranger qui révèle ce que nous croyions
        naturel. Vu de l'intérieur, chaque société tient ses coutumes pour
        évidentes. Elle confond ses habitudes avec la nature humaine. Or rien
        n'est plus relatif que ce qui paraît immédiat. Pour saisir l'humanité
        dans sa pluralité, il faut un détour. Il faut accepter de voir nos
        propres mœurs comme étranges. C'est précisément le geste qu'invente
        Montesquieu dans <em>Les Lettres persanes</em>, 1721. Deux voyageurs
        persans, Usbek et Rica, parcourent la France et écrivent à leurs amis
        restés à Ispahan. Sous leur regard, Paris devient absurde. Les juges
        vendent leurs sentences, les femmes gouvernent en cachette, et le roi
        accomplit des miracles avec des bouts de papier qu'il appelle monnaie.
        La fameuse exclamation «&nbsp;Comment peut-on être Persan&nbsp;?&nbsp;»
        devient alors le révélateur de notre propre ethnocentrisme. Ce n'est
        pas le Persan qui est étrange. C'est notre incapacité à nous voir
        nous-mêmes. L'humanité ne se reconnaît qu'au prix de ce dépaysement.
        Cette intuition trouvera sa formulation savante deux siècles plus tard.
        Dans <em>Race et histoire</em>, 1952, Lévi-Strauss montre que le
        réflexe le plus universel des hommes est de refuser l'humanité à ceux
        qui ne leur ressemblent pas. Le barbare, c'est toujours d'abord celui
        qui croit à la barbarie. Renoncer à ce préjugé exige un effort
        intellectuel constant. Ainsi l'humanité n'apparaît jamais en première
        personne. Elle se découvre seulement quand on accepte d'être, pour un
        instant, l'étranger de soi-même.
      </p>
    ),
  },
  {
    slug: 'barbarie-possibilite-ordinaire',
    number: 2,
    title: "La barbarie comme possibilité ordinaire de l'humain",
    glose:
      "l'inhumanité ne vient pas du dehors, elle gît au cœur même de l'humain",
    sousTheme: "L'inhumanité au cœur de l'humain",
    date: '25 avril 2026',
    references: ['Hannah Arendt, Eichmann à Jérusalem (1963)'],
    body: (
      <p>
        La barbarie n'est pas l'envers extérieur de la civilisation. Elle en
        est la possibilité interne. Longtemps on a pensé que le criminel de
        masse devait être un fanatique extraordinaire, un démon. Comme si la
        cruauté à grande échelle exigeait une nature exceptionnelle. Cette
        intuition rassurante s'effondre au procès de Jérusalem en 1961. Hannah
        Arendt, dans <em>Eichmann à Jérusalem</em> (1963), forge alors la
        formule décisive&nbsp;: la «&nbsp;banalité du mal&nbsp;». Eichmann
        n'est pas un sadique. C'est un fonctionnaire médiocre, ponctuel,
        soucieux de bien faire son travail. Il a organisé la déportation de
        millions de Juifs sans haine particulière, simplement en obéissant aux
        ordres. Ce qui frappe Arendt, ce n'est pas la monstruosité d'Eichmann.
        C'est sa parfaite normalité. Le mal radical ne suppose ni perversité
        ni idéologie ardente. Il suffit d'une absence de pensée, d'un refus de
        juger par soi-même. Or cette absence de pensée n'est pas une anomalie.
        C'est une tentation permanente, inscrite dans la condition humaine
        elle-même. L'être humain est le seul animal capable de renoncer à sa
        propre humanité tout en restant biologiquement humain. C'est
        précisément parce qu'il est libre qu'il peut choisir de ne plus
        penser, de se fondre dans l'obéissance, de déléguer sa conscience à
        une institution. L'inhumain n'est donc pas un monstre tapi à
        l'extérieur de la cité. C'est une potentialité ordinaire, que chaque
        individu porte en lui et que seul l'exercice du jugement permet de
        tenir à distance.
      </p>
    ),
  },
  {
    slug: 'deshumanisation-langage',
    number: 3,
    title: 'La déshumanisation par le langage',
    glose:
      "l'humain se définit par la pensée, et la pensée se définit par le langage — détruire l'un, c'est détruire l'autre",
    sousTheme: "Le langage comme condition de l'humanité",
    date: '25 avril 2026',
    references: [
      'George Orwell, 1984 (1949)',
      'Hannah Arendt, Eichmann à Jérusalem (1963)',
    ],
    body: (
      <p>
        L'humanité n'est pas seulement une condition biologique. Elle est une
        condition langagière. L'être humain est le seul animal qui pense par
        les mots, qui structure le réel à travers le langage, qui accède à
        lui-même par le discours intérieur. Supprimer les mots, c'est donc
        supprimer la pensée. Et supprimer la pensée, c'est supprimer l'homme.
        C'est précisément le projet que George Orwell met en scène dans{' '}
        <em>1984</em> (1949) à travers l'invention de la Novlangue. Le Parti
        n'interdit pas directement de penser. Il fait plus subtil et plus
        radical&nbsp;: il réduit progressivement le vocabulaire jusqu'à rendre
        la dissidence linguistiquement impossible. Comme l'explique Syme, le
        lexicographe enthousiaste chargé de compiler le dictionnaire de
        Novlangue&nbsp;: le but n'est pas de remplacer les mauvais mots par de
        bons, mais de supprimer des mots tout court. Un jour, la crimepensée
        sera littéralement impensable, faute de mots pour la formuler.
        L'humanité de Winston ne tient qu'à un fil&nbsp;: son journal, ses
        mots encore anciens, sa capacité à écrire «&nbsp;À bas Big
        Brother&nbsp;». Le jour où ce vocabulaire disparaîtra, Winston
        disparaîtra avec lui — non pas physiquement, mais en tant qu'homme. Ce
        projet rejoint ce qu'Arendt identifiait dans{' '}
        <em>Eichmann à Jérusalem</em>&nbsp;: c'est toujours l'abolition de la
        pensée qui précède l'abolition de l'humain. La Novlangue est la
        version systématique et institutionnelle de ce que la bureaucratie
        nazie accomplissait par la routine. Dans les deux cas, l'ennemi n'est
        pas l'individu. C'est le jugement.
      </p>
    ),
  },
  {
    slug: 'lachete-angoisse-existentielle',
    number: 4,
    title: "La lâcheté comme réponse à l'angoisse existentielle",
    glose:
      "ce n'est pas la méchanceté qui produit l'inhumain — c'est la peur",
    sousTheme: "La peur comme fabrique de l'inhumain",
    date: '25 avril 2026',
    references: [
      'Molière, Le Malade imaginaire (1673)',
      'Pascal, Pensées (1670)',
    ],
    body: (
      <p>
        L'inhumanité n'a pas toujours un visage monstrueux. Elle a parfois un
        visage comique. Et c'est précisément ce que Molière comprend mieux que
        quiconque&nbsp;: le ridicule révèle ce que la tragédie dissimule. Dans{' '}
        <em>Le Malade imaginaire</em> (1673), Argan n'est pas un tyran. C'est
        un homme terrorisé. Terrorisé par la mort, par la maladie, par sa
        propre finitude. Et c'est cette terreur, bien plus que la méchanceté,
        qui le rend inhumain envers les siens. Pour conjurer l'angoisse, il
        accepte tout&nbsp;: les saignées inutiles, les lavements répétés, les
        médecins charlatans qui lui vendent une illusion de maîtrise sur la
        mort. Surtout, il sacrifie sa fille Angélique en la destinant à Thomas
        Diafoirus, jeune médecin stupide, non par cruauté paternelle mais par
        calcul existentiel&nbsp;: avoir un médecin dans la famille, c'est
        avoir la mort à distance. Un être humain libre devient ainsi un pantin
        manœuvré par sa propre peur. Ce mécanisme rejoint ce que Pascal
        formulait dans les <em>Pensées</em>&nbsp;: l'homme ne peut rester en
        repos dans une chambre. Il se distrait, il s'agite, il croit, pour ne
        pas penser à sa condition. Argan croit aux médecins comme d'autres
        croient aux idéologies ou aux institutions — non par conviction, mais
        par besoin désespéré de ne pas regarder en face. Et le spectateur rit.
        Mais ce rire se fige quand il reconnaît en Argan quelque chose de
        lui-même. Car la peur de mourir n'est pas une anomalie. C'est le fond
        commun de l'humanité. Ce qui varie, c'est ce qu'on accepte de
        sacrifier pour l'oublier.
      </p>
    ),
  },
  {
    slug: 'solidarite-acte-humain',
    number: 5,
    title: 'La solidarité comme acte proprement humain',
    glose:
      "l'humain ne se définit pas par le sang — il se définit par ce qu'il choisit d'aimer",
    sousTheme: "La famille choisie comme définition de l'humanité",
    date: '25 avril 2026',
    references: [
      'Hector Malot, Sans Famille (1878)',
      "Jean-Paul Sartre, L'existentialisme est un humanisme (1946)",
    ],
    body: (
      <p>
        L'humanité n'est pas une donnée biologique. Elle est une construction
        volontaire. Les animaux ont des liens de sang, des meutes, des
        hiérarchies instinctives. Seul l'être humain peut choisir ses liens,
        inventer sa famille, décider qui sont les siens en dehors de tout
        déterminisme naturel. C'est précisément ce que donne à voir Hector
        Malot dans <em>Sans Famille</em> (1878). Rémi, enfant abandonné sans
        origine connue, sans nom, sans appartenance, est l'humain réduit à son
        état le plus nu. Il ne lui reste rien — ni famille, ni argent, ni
        statut. Et c'est dans ce dénuement radical qu'apparaît l'essentiel.
        Vitalis, vieux musicien ambulant sans obligation envers personne,
        choisit de prendre Rémi sous sa protection. Ce geste n'a aucune
        justification naturelle ni intérêt calculé. Il est gratuit. Et c'est
        précisément sa gratuité qui en fait un acte humain au sens plein.
        Vitalis finira par mourir de froid en tentant de protéger l'enfant —
        sacrifice ultime d'un homme libre qui a choisi d'aimer. Ce que Malot
        montre, c'est que la famille n'est pas un fait de nature mais un acte
        de volonté. L'humain est le seul animal qui invente ses appartenances,
        qui décide qui mérite sa loyauté, qui construit du lien là où la
        nature n'en a mis aucun. Cette thèse rejoint Sartre&nbsp;:
        l'existence précède l'essence. Rémi n'est pas défini par ce qu'il est
        — bâtard, indigent, errant. Il est défini par ce qu'il choisit d'être
        et par ceux qui choisissent de l'aimer. La famille de Rémi est la plus
        humaine qui soit&nbsp;: elle n'a pas été héritée. Elle a été méritée.
      </p>
    ),
  },
  {
    slug: 'identite-masque',
    number: 6,
    title: "L'identité comme masque — quand jouer un rôle devient perdre son âme",
    glose:
      "la servitude sociale ne contraint pas seulement le corps, elle dissout l'être",
    sousTheme: "La servitude sociale comme dissolution de l'être",
    date: '25 avril 2026',
    references: [
      'Jean Genet, Les Bonnes (1947)',
      "Jean-Paul Sartre, L'Être et le Néant (1943)",
    ],
    body: (
      <p>
        L'humanité n'est pas un acquis. Elle est une conquête permanente
        contre les forces qui cherchent à nous réduire à un rôle, à une
        fonction, à une place assignée. Jean Genet, dans <em>Les Bonnes</em>{' '}
        (1947), met en scène Claire et Solange, deux domestiques qui, en
        l'absence de leur maîtresse, jouent à être elle. L'une incarne Madame,
        l'autre la bonne, dans un rituel qui tourne à l'obsession. Ce jeu
        n'est pas innocent. C'est une tentative désespérée d'échapper à leur
        condition en habitant celle de l'autre. Mais plus elles jouent, plus
        elles se perdent. Le masque finit par coller au visage. Aucune des
        deux ne sait plus très bien qui elle est en dehors du rôle que la
        société lui a imposé. Ce que Genet révèle, c'est que la domination la
        plus radicale n'est pas celle qui enchaîne le corps. C'est celle qui
        colonise l'imaginaire au point que la victime ne peut plus se penser
        en dehors de sa servitude. On reconnaît ici ce que Sartre décrivait
        dans <em>L'Être et le Néant</em> à travers le garçon de café&nbsp;:
        l'être humain en mauvaise foi joue à être une chose pour fuir
        l'angoisse de sa liberté. Mais chez Genet, la mauvaise foi n'est pas
        un choix. Elle est une prison sociale. Claire et Solange ne fuient pas
        leur liberté par confort. Elles ont été si profondément formées par le
        regard de Madame qu'elles ne savent plus ce que serait exister sans
        lui. L'inhumanité n'est donc pas seulement dans le bourreau. Elle est
        dans le système qui fabrique des individus incapables de se concevoir
        comme libres.
      </p>
    ),
  },
  {
    slug: 'tour-de-babel-hubris',
    number: 7,
    title: "La tour de Babel comme figure de l'hubris collectif",
    glose:
      "l'humain se détruit lui-même quand il prétend abolir sa propre limite",
    sousTheme: "L'orgueil comme destruction de l'unité humaine",
    date: '25 avril 2026',
    references: ['Genèse 11, 1-9', 'George Orwell, 1984 (1949)'],
    body: (
      <p>
        L'humanité a une tentation permanente&nbsp;: se prendre pour Dieu. Non
        par méchanceté, mais par excès de puissance. C'est précisément ce que
        raconte le mythe de Babel, dans la <em>Genèse</em> (11, 1-9). Au
        commencement, les hommes parlent une seule langue. Ils sont un. Et
        cette unité leur donne une puissance sans précédent&nbsp;: ensemble,
        ils entreprennent de construire une tour qui atteindrait le ciel. Le
        projet n'est pas criminel. Il est grandiose. Mais il est aussi
        vertigineux&nbsp;: l'humanité veut se faire l'égale du divin, abolir
        la frontière entre le fini et l'infini, entre la créature et le
        créateur. C'est cet orgueil — <em>hubris</em> au sens grec — que Dieu
        punit non par la mort ni par la souffrance, mais par quelque chose de
        plus radical&nbsp;: la confusion des langues. Les hommes ne se
        comprennent plus. Ils se dispersent. L'unité humaine se fragmente. Et
        avec elle disparaît la possibilité même du projet commun. Ce que le
        mythe dit avec une profondeur saisissante, c'est que le langage n'est
        pas seulement un outil de communication. Il est le fondement de
        l'unité humaine. Tant que les hommes parlent la même langue, ils
        forment un seul corps, une seule humanité. Quand le langage se
        fracture, c'est l'humanité elle-même qui se fracture. Ce diagnostic
        résonne directement avec Orwell&nbsp;: dans <em>1984</em>, la
        Novlangue ne détruit pas seulement la pensée individuelle — elle
        brise la possibilité d'une communauté humaine fondée sur le sens
        partagé. Babel et la Novlangue disent la même chose par des chemins
        opposés&nbsp;: construire ou détruire le langage commun, c'est
        construire ou détruire l'humanité elle-même. L'hubris de Babel n'est
        donc pas simplement un péché religieux. C'est une leçon
        anthropologique&nbsp;: l'humain qui prétend tout pouvoir finit par
        perdre ce qui le définit.
      </p>
    ),
  },
];

export const getParapersoBySlug = (slug?: string): Paraperso | undefined =>
  parapersosHumanite.find((p) => p.slug === slug);
