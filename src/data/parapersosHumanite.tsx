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
  {
    slug: 'perfectibilite-rousseau',
    number: 8,
    title: "La perfectibilité comme propre de l'homme",
    glose:
      "l'humain n'est pas ce qu'il est, mais ce qu'il peut indéfiniment devenir",
    sousTheme: "La perfectibilité comme moteur de l'humanité",
    date: '3 mai 2026',
    references: [
      "Rousseau, Discours sur l'origine de l'inégalité parmi les hommes (1755)",
      "Condorcet, Esquisse d'un tableau historique des progrès de l'esprit humain (1795)",
    ],
    body: (
      <p>
        L'humain ne naît pas humain. Il le devient. Tous les autres animaux
        suivent le même destin, génération après génération. L'oiseau bâtit son
        nid comme l'oiseau d'il y a dix mille ans. La fourmi creuse comme
        creusait sa lointaine ancêtre. Seul l'être humain modifie sa propre
        condition. Seul il transforme ses outils, ses lois, ses idées, ses
        passions. Cette capacité unique a un nom. Rousseau la nomme la
        perfectibilité dans son{' '}
        <em>Discours sur l'origine de l'inégalité parmi les hommes</em>, 1755.
        Elle n'est pas, prévient-il, une simple inclination au progrès. C'est
        la faculté indéfinie de se transformer soi-même, pour le meilleur comme
        pour le pire. La perfectibilité fait l'inventeur, l'artiste, le
        législateur. Mais elle fait aussi le corrompu, l'esclave, le tyran.
        Rien ne garantit que l'humain devienne meilleur en se transformant.
        Tout indique seulement qu'il ne peut pas rester en place. Cette
        intuition, Condorcet la radicalise dans son{' '}
        <em>Esquisse d'un tableau historique des progrès de l'esprit humain</em>,
        1795. Caché et traqué pendant la Terreur, il écrit pourtant un livre
        solaire. L'humanité, soutient-il, marche d'un pas inégal mais certain
        vers son émancipation. Les Lumières finiront par dissiper les
        superstitions, les inégalités, les violences. Au moment même où l'on
        prépare son arrestation, Condorcet affirme que l'humain peut s'élever.
        Ce pari fou définit l'humanité plus exactement que toute essence
        figée. L'humain n'est pas un être achevé. C'est un être en mouvement.
        Ainsi être humain, ce n'est pas habiter une nature reçue. C'est porter
        en soi la possibilité d'une nature à venir.
      </p>
    ),
  },
  {
    slug: 'animal-machine-descartes',
    number: 9,
    title: "L'animal-machine ou le piège de la distinction radicale",
    glose:
      "l'humain s'est défini contre l'animal, mais ce geste l'a peut-être rendu plus aveugle à lui-même",
    sousTheme: 'Frontière humain / animal',
    date: '3 mai 2026',
    references: [
      'Descartes, Discours de la méthode (1637)',
      'Diderot, Le Neveu de Rameau (1762, publié 1805)',
    ],
    body: (
      <p>
        L'humain s'est longtemps défini par ce qu'il n'est pas. Et il a choisi
        pour repoussoir l'animal. Penser l'humanité, ce fut d'abord tracer une
        frontière, marquer une rupture, affirmer une supériorité. Le geste
        fondateur en revient à Descartes. Dans le{' '}
        <em>Discours de la méthode</em>, 1637, il forge la thèse de
        l'animal-machine. Les bêtes, soutient-il, ne pensent pas. Elles n'ont
        ni langage articulé, ni jugement, ni conscience. Elles fonctionnent
        comme des automates parfaitement réglés. Aboyer, fuir,
        chasser&nbsp;: autant de mouvements mécaniques, sans intériorité. Seul
        l'être humain, doté de la pensée, échappe à ce déterminisme aveugle.
        Cette rupture est nette. Trop nette, peut-être. Car l'animal-machine
        n'est pas une description neutre. C'est une stratégie philosophique. En
        reléguant la bête au rang d'horloge, Descartes purifie l'humain de
        toute animalité. Il fonde la dignité de l'homme sur sa différence
        absolue. Mais ce geste a un prix. Il rend invisible une part de
        nous-mêmes. C'est ce que Diderot pressent dans{' '}
        <em>Le Neveu de Rameau</em>, écrit vers 1762. Le Neveu n'est ni un
        sage ni un fou. C'est un être hybride, instinctif et lucide, vil et
        brillant, plus proche du singe que du philosophe. À travers lui,
        Diderot suggère que l'humain ne se distingue pas de l'animal par une
        nature séparée. Il s'en distingue par une instabilité, par une
        pluralité interne, par cette part bestiale qu'aucune raison ne dompte
        vraiment. La frontière entre l'humain et l'animal n'est donc pas un
        fait. C'est une décision morale, sans cesse renégociée. Tracer cette
        ligne trop nette, c'est risquer de manquer ce qui fait notre
        singularité véritable&nbsp;: non pas l'absence d'animalité, mais la
        conscience de la porter en soi.
      </p>
    ),
  },
  {
    slug: 'honte-promethienne-anders',
    number: 10,
    title: "La honte prométhéenne ou l'humain dépassé par ses machines",
    glose:
      "l'humain a fabriqué des outils si parfaits qu'il en vient à rougir d'être seulement humain",
    sousTheme: "Le transhumanisme et la honte de l'humain",
    date: '3 mai 2026',
    references: ["Günther Anders, L'Obsolescence de l'homme (1956)"],
    body: (
      <p>
        L'humain a longtemps été défini par ses outils. Aujourd'hui, ce sont
        ses outils qui le redéfinissent. Le rapport s'est inversé. La machine
        n'est plus le prolongement de l'homme. C'est l'homme qui devient le
        maillon faible de ses propres machines. Cette inversion vertigineuse,
        un philosophe l'a saisie avant tous les autres. Günther Anders, dans{' '}
        <em>L'Obsolescence de l'homme</em>, 1956, forge un concept
        saisissant&nbsp;: la honte prométhéenne. Prométhée, dans le mythe
        grec, vole le feu pour élever l'humanité. Anders renverse l'image.
        L'humain contemporain, écrit-il, n'est plus fier de ses créations. Il
        en a honte. Honte d'être seulement né, alors que ses produits sont
        fabriqués. Honte d'être périssable, alors que ses machines durent.
        Honte d'avoir un corps lent, alors que ses ordinateurs calculent à la
        vitesse de la lumière. Anders observe ce phénomène dès l'après-guerre,
        à propos de l'homme face à la bombe atomique. Comment continuer à se
        penser souverain quand on a fabriqué un objet plus puissant que
        soi&nbsp;? Comment assumer son humanité quand elle apparaît, au regard
        de la technique, comme un défaut de fabrication&nbsp;? Cette honte
        n'est pas un fantasme. Elle nourrit aujourd'hui le projet
        transhumaniste. Augmenter le corps, prolonger la vie, fusionner avec
        la machine. Autant de manières de fuir la condition humaine plutôt
        que de l'habiter. Et c'est précisément le danger. À force de vouloir
        dépasser l'humain, on risque d'abolir ce qui en faisait la
        valeur&nbsp;: sa finitude, sa fragilité, sa capacité à mourir et à
        aimer. Ainsi la question n'est plus de savoir si la technique va
        sauver l'humanité. Elle est de savoir s'il restera quelque chose
        d'humain à sauver.
      </p>
    ),
  },
  {
    slug: 'visage-autrui-levinas',
    number: 11,
    title: "Le visage d'autrui, fondement de toute humanité",
    glose:
      "l'humain n'est pas seul avec lui-même, il est d'abord celui qui répond à l'appel d'un autre",
    sousTheme: "L'altérité et le visage d'autrui",
    date: '3 mai 2026',
    references: ['Emmanuel Levinas, Totalité et infini (1961)'],
    body: (
      <p>
        L'humanité n'est pas une donnée intérieure. Elle naît dans la
        rencontre. Avant tout discours sur la nature humaine, il y a un fait
        premier&nbsp;: un autre se tient devant moi. Et cet autre, par sa
        seule présence, m'oblige. Cette intuition fonde la philosophie
        d'Emmanuel Levinas. Dans <em>Totalité et infini</em>, 1961, il forge
        un concept central&nbsp;: le visage. Le visage, ce n'est pas un objet,
        ni une image, ni même un trait physique. C'est ce qui, dans l'autre,
        échappe à toute saisie. Quand un autre humain me regarde, je ne peux
        pas le réduire à un concept, à une fonction, à une utilité. Quelque
        chose en lui me résiste absolument. Et cette résistance silencieuse
        contient un commandement. Le visage me dit&nbsp;: tu ne tueras pas.
        Sans qu'il prononce un mot. Sans qu'il revendique un droit. Sa simple
        présence appelle ma responsabilité. Levinas écrit alors une formule
        décisive&nbsp;: l'éthique précède l'ontologie. Avant de me demander ce
        que je suis, je dois reconnaître ce que l'autre exige de moi. Cette
        inversion bouleverse la tradition philosophique. Depuis Descartes, on
        partait du sujet pensant, isolé, fondateur de tout. Levinas part de
        l'autre. L'humain n'est plus celui qui dit «&nbsp;je
        pense&nbsp;». C'est celui qui dit «&nbsp;me voici&nbsp;». Cette pensée
        prend tout son poids quand on se rappelle qui parle. Levinas est
        lituanien, juif, marqué par la Shoah. Toute sa famille a été
        assassinée. Il sait, dans sa chair, ce que produit un monde où le
        visage de l'autre n'oblige plus. Ainsi être humain, ce n'est pas
        exister en premier. C'est répondre à l'appel d'un visage avant même
        d'avoir choisi.
      </p>
    ),
  },
  {
    slug: 'dignite-kant',
    number: 12,
    title: 'La dignité comme valeur sans prix',
    glose:
      "l'humain n'est pas négociable, il vaut absolument et non relativement",
    sousTheme: "La dignité comme fondement de l'humanité",
    date: '3 mai 2026',
    references: ['Kant, Fondements de la métaphysique des mœurs (1785)'],
    body: (
      <p>
        L'humain ne se vend pas. Cette intuition élémentaire, tout le monde la
        partage. Mais qu'est-ce qui la fonde&nbsp;? Pourquoi un être humain
        ne peut-il pas être traité comme une chose, échangé comme une
        marchandise, réduit à sa simple utilité&nbsp;? La réponse la plus
        rigoureuse appartient à Kant. Dans les{' '}
        <em>Fondements de la métaphysique des mœurs</em>, 1785, il opère une
        distinction décisive. Tout, dans le monde, a soit un prix, soit une
        dignité. Une chose a un prix&nbsp;: on peut lui trouver un équivalent,
        la remplacer par autre chose, la mesurer en argent. Une personne a une
        dignité&nbsp;: elle n'a pas d'équivalent. Elle vaut absolument, non
        relativement. C'est précisément ce qui distingue l'humain de tout le
        reste. La pierre, l'outil, l'animal s'évaluent. L'humain, lui, ne
        s'évalue pas. Il s'estime. De cette distinction découle l'impératif
        catégorique dans sa formule la plus célèbre&nbsp;: «&nbsp;Agis de
        telle sorte que tu traites l'humanité, en ta personne comme en celle
        d'autrui, toujours comme une fin, jamais simplement comme un
        moyen.&nbsp;» Toute la morale moderne tient dans cette phrase. Elle
        interdit l'esclavage, la torture, la marchandisation des corps,
        l'instrumentalisation de l'autre. Elle fonde aussi l'idée même de
        droits humains. Un droit n'est pas une faveur que l'État accorderait.
        C'est la reconnaissance d'une dignité antérieure à toute loi. Kant ne
        dit pas que l'humain est sacré. Il dit qu'il est sa propre fin. Cette
        différence est immense. Elle laïcise la dignité, sans la fragiliser.
        Ainsi la dignité ne se mérite pas. Elle ne se gagne pas. Elle est ce
        qui demeure de l'humain quand tout le reste lui a été arraché.
      </p>
    ),
  },
  {
    slug: 'revolte-camus',
    number: 13,
    title: "La révolte comme acte fondateur de l'humain",
    glose: "dire non, c'est dire oui à une humanité commune",
    sousTheme: "La révolte comme construction de l'humanité",
    date: '3 mai 2026',
    references: ["Albert Camus, L'Homme révolté (1951)"],
    body: (
      <p>
        L'humanité ne se découvre pas dans le consentement. Elle se découvre
        dans le refus. C'est le geste de dire non qui révèle, soudain, ce
        qu'on partage avec tous les autres. Camus, dans{' '}
        <em>L'Homme révolté</em>, 1951, construit toute sa philosophie autour
        de cette intuition. Il prend l'exemple de l'esclave. Cet esclave a
        obéi pendant des années. Il a accepté les ordres, encaissé les
        humiliations, courbé l'échine. Un jour, soudainement, il dit non. Que
        se passe-t-il à cet instant précis&nbsp;? Il ne se contente pas de
        refuser une nouvelle injustice. Il affirme qu'il existe en lui quelque
        chose qui ne peut plus être bafoué. Une frontière. Une part
        irréductible. Camus écrit cette formule décisive&nbsp;: «&nbsp;Je me
        révolte, donc nous sommes.&nbsp;» L'inversion du «&nbsp;je pense, donc
        je suis&nbsp;» de Descartes est volontaire. Pour Descartes, l'humain
        se découvre seul, par l'intériorité. Pour Camus, il se découvre dans
        la solidarité, par le refus. Quand l'esclave dit non, il ne parle pas
        seulement pour lui. Il parle pour tous ceux qui pourraient subir la
        même humiliation. Le «&nbsp;je&nbsp;» se transforme aussitôt en
        «&nbsp;nous&nbsp;». La révolte fonde donc une éthique. Elle reconnaît
        dans chaque humain ce que personne n'a le droit de violer. Mais Camus
        ajoute une exigence redoutable. La révolte authentique doit refuser la
        révolution qui tue au nom du futur. Elle pose une limite. Elle
        affirme la valeur de chaque vie humaine présente, sans la sacrifier à
        un absolu. Ainsi l'humain ne se définit ni par ce qu'il pense, ni par
        ce qu'il possède. Il se définit par ce qu'il refuse, et par tous ceux
        que ce refus, soudain, fait apparaître à ses côtés.
      </p>
    ),
  },
  {
    slug: 'travail-aliene-marx',
    number: 14,
    title: 'Le travail, entre humanisation et aliénation',
    glose: "ce qui devait élever l'humain peut aussi le détruire",
    sousTheme: "Le travail comme condition contradictoire de l'humanité",
    date: '3 mai 2026',
    references: ['Karl Marx, Manuscrits de 1844'],
    body: (
      <p>
        L'humain est un animal qui travaille. Mais qu'est-ce que travailler
        veut dire&nbsp;? Pour la tradition philosophique, le travail est ce
        qui distingue l'humain de l'animal. L'abeille construit sa ruche par
        instinct. L'humain, lui, conçoit son ouvrage avant de le réaliser. Il
        imprime sa pensée dans la matière. Le travail est donc l'acte par
        lequel l'humain s'humanise, en transformant le monde et en se
        transformant lui-même. Marx accepte cette définition. Mais il y
        ajoute, dans ses <em>Manuscrits de 1844</em>, une nuance
        bouleversante. Le travail n'est humanisant que sous certaines
        conditions. Quand il est libre. Quand il permet à l'humain de se
        reconnaître dans ce qu'il produit. Quand il fonde un lien entre les
        hommes. Or l'industrie capitaliste retourne le travail contre celui
        qui l'accomplit. L'ouvrier ne possède pas ses outils. Il ne choisit
        pas le rythme. Il ne reconnaît rien de lui-même dans la marchandise
        produite. Marx forge alors le concept central d'aliénation. Le
        travailleur est étranger à son propre travail. Il y perd sa liberté,
        ses forces, son temps. Plus il produit, plus il s'appauvrit. Plus il
        enrichit l'autre, plus il s'efface lui-même. Le travail, qui devait
        être le lieu de l'accomplissement humain, devient le lieu de sa
        déshumanisation. Cette analyse, écrite il y a près de deux siècles,
        n'a rien perdu de sa force. Les caissières scannées par leurs propres
        machines, les livreurs notés par une application, les employés
        mesurés à la seconde près redécouvrent chaque jour ce que Marx avait
        pressenti. Ainsi le travail n'est pas humanisant par nature. Il l'est
        par destination. Quand cette destination se perd, ce qui devait
        fonder l'humain se met à le défaire.
      </p>
    ),
  },
  {
    slug: 'memoire-temoignage-levi',
    number: 15,
    title: 'Le devoir de témoigner, ou la mémoire comme combat humain',
    glose:
      "l'humain ne se prouve pas seulement par la vie, il se prouve par le souvenir des morts",
    sousTheme: 'La mémoire comme exigence humaine',
    date: '3 mai 2026',
    references: [
      "Primo Levi, Si c'est un homme (1947)",
      'Primo Levi, Les Naufragés et les Rescapés (1986)',
    ],
    body: (
      <p>
        L'oubli n'est pas neutre. Il est la seconde mort des victimes. C'est
        pourquoi la mémoire n'est pas un simple exercice culturel. Elle est un
        combat éthique. Quand un système entier s'organise pour effacer des
        hommes, le souvenir devient une résistance. Personne ne l'a mieux dit
        que Primo Levi. Survivant d'Auschwitz, il publie en 1947{' '}
        <em>Si c'est un homme</em>. Le titre est un avertissement. Le camp
        n'a pas seulement tué. Il a méthodiquement défait l'humain dans ceux
        qu'il n'a pas tués. Numéros tatoués, vêtements identiques,
        alimentation calibrée pour produire des cadavres en sursis. Tout, dans
        l'organisation concentrationnaire, vise à arracher à la victime
        jusqu'à la possibilité de se sentir homme. Témoigner devient alors la
        dernière manière de récupérer ce qui a été volé. Mais Primo Levi ne
        s'arrête pas là. Quarante ans plus tard, dans{' '}
        <em>Les Naufragés et les Rescapés</em>, 1986, il revient à la charge
        avec une lucidité plus sombre encore. Les vrais témoins, écrit-il, ne
        sont pas les rescapés. Ce sont les noyés. Ceux qui ont touché le fond.
        Ceux qui ne sont jamais revenus. Le rescapé porte donc une
        responsabilité écrasante&nbsp;: parler à la place de ceux qui ne
        peuvent plus parler. Cette responsabilité ne se transmet pas
        mécaniquement. Chaque génération doit la reprendre. Chaque
        négationnisme, chaque banalisation, chaque comparaison frivole
        l'effrite. Levi finira sa vie en 1987 en s'effondrant dans une cage
        d'escalier. Suicide ou chute, on ne le saura jamais. Mais son œuvre
        demeure comme un veilleur. Ainsi être humain, ce n'est pas seulement
        vivre parmi les vivants. C'est porter, en soi, la mémoire de ceux
        qu'on a voulu rayer de l'humanité.
      </p>
    ),
  },
  {
    slug: 'surhomme-nietzsche',
    number: 16,
    title: "Le surhomme, ou l'humanité comme dépassement de soi",
    glose:
      "l'humain ne se contente pas d'être ce qu'il est, il est cet animal qui veut se franchir",
    sousTheme: 'Le dépassement de soi comme vocation humaine',
    date: '3 mai 2026',
    references: [
      'Friedrich Nietzsche, Ainsi parlait Zarathoustra (1883-1885)',
      "Pic de la Mirandole, Discours de la dignité de l'homme (1486)",
    ],
    body: (
      <p>
        L'humain n'est pas un point d'arrivée. Il est un passage. L'animal n'a
        aucun pouvoir sur ce qu'il est. L'humain, lui, est ce vivant étrange
        qui peut se haïr, se réformer, se franchir. Il porte en lui une
        exigence permanente d'auto-dépassement. Nul ne l'a formulé avec plus
        de force que Nietzsche. Dans <em>Ainsi parlait Zarathoustra</em>,
        écrit entre 1883 et 1885, il fait dire à son prophète une phrase
        devenue célèbre. L'humain est une corde tendue entre l'animal et le
        surhomme. Une corde au-dessus d'un abîme. Ce qui définit l'humain
        n'est pas son état présent. C'est sa capacité à devenir autre que
        lui-même. Le surhomme n'est pas un mutant biologique, malgré les
        contresens qu'on lui a infligés. C'est l'être qui invente ses propres
        valeurs. Qui n'attend plus de Dieu, de la tradition ou de la foule
        qu'on lui dise comment vivre. Qui assume entièrement la création de
        son existence. Nietzsche radicalise ainsi une intuition née à la
        Renaissance. Dans son <em>Discours de la dignité de l'homme</em>,
        1486, Pic de la Mirandole imaginait déjà Dieu disant à Adam qu'il
        était libre de se faire ce qu'il voulait être, sans limite. Ce que
        Pic situe dans une création divine, Nietzsche le pose dans un monde
        sans Dieu. La dignité humaine ne vient plus d'en haut. Elle se
        conquiert. Cette pensée a une exigence terrible. Elle refuse les
        consolations religieuses, les fuites idéologiques, les pseudo-essences
        qui rassurent. Elle laisse l'humain face à sa propre liberté. Ainsi
        être humain, ce n'est pas habiter un palier. C'est risquer la
        traversée. C'est cet être qui, seul de tous, n'est jamais
        entièrement lui-même, parce qu'il porte en lui l'exigence de se
        franchir.
      </p>
    ),
  },
  {
    slug: 'hospitalite-kant-hugo',
    number: 17,
    title: "L'hospitalité comme test de l'humanité",
    glose:
      "la manière dont une société accueille l'étranger révèle ce qu'elle reste capable d'humanité",
    sousTheme: "L'hospitalité, mesure de l'humain",
    date: '3 mai 2026',
    references: [
      'Kant, Vers la paix perpétuelle (1795)',
      'Victor Hugo, Les Misérables (1862)',
    ],
    body: (
      <p>
        L'humanité d'une civilisation se mesure à sa porte. À ce qu'elle
        laisse entrer ou rejette. À la manière dont elle traite celui qui
        frappe sans avoir été invité. C'est l'épreuve de l'hospitalité. Kant
        lui consacre un texte décisif. Dans <em>Vers la paix perpétuelle</em>,
        1795, il pose un droit qui dépasse les frontières nationales. Il
        l'appelle le droit de visite. Tout être humain, simplement parce
        qu'il est humain, doit pouvoir se présenter sur le sol d'un autre
        pays sans être traité en ennemi. Ce droit n'est ni une faveur, ni
        une charité. Il découle de la rotondité de la Terre, écrit Kant avec
        une formule magnifique. Puisque la Terre est ronde, aucun humain ne
        peut s'éloigner indéfiniment d'un autre. Tous, à terme, finissent par
        se rencontrer. L'hospitalité minimale est donc la condition même de
        la coexistence humaine. Cette exigence prend une chair romanesque
        chez Hugo. Dans <em>Les Misérables</em>, 1862, Jean Valjean, ancien
        forçat, frappe à toutes les portes. Toutes se ferment. Une seule
        s'ouvre, celle de l'évêque Myriel. L'évêque ne se contente pas de
        l'accueillir. Quand Valjean lui vole ses couverts d'argent, Myriel
        ment aux gendarmes pour le sauver. Il lui offre les chandeliers en
        plus. Cet acte gratuit transforme un homme. Valjean, pour la première
        fois, se voit traité en humain. Et c'est cette reconnaissance, plus
        que toute punition, qui le rachète. Hugo dit ainsi ce que Kant
        pensait. L'hospitalité ne sauve pas seulement l'étranger. Elle sauve
        aussi l'hôte, en l'arrachant à la peur et au calcul. Ainsi une
        société qui ferme ses portes ne protège pas son humanité. Elle
        commence à la perdre.
      </p>
    ),
  },
];

export const getParapersoBySlug = (slug?: string): Paraperso | undefined =>
  parapersosHumanite.find((p) => p.slug === slug);
