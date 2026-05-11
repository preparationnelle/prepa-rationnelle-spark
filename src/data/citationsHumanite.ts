export type Citation = {
  slug: string;
  citation: string;
  auteur: string;
  oeuvre: string;
  date: string;
  glose: string;
  sousTheme: SousThemeKey;
  parapersoSlug?: string;
};

export type SousThemeKey =
  | 'definir'
  | 'construction'
  | 'inhumanite'
  | 'nature'
  | 'technique'
  | 'solidarite'
  | 'frontieres'
  | 'liberte-finitude';

export const sousThemesCitations: { key: SousThemeKey; label: string; description: string }[] = [
  {
    key: 'definir',
    label: "Définir l'humanité",
    description: "Essence, nature, ce qui distingue l'humain — ou son absence d'essence fixe.",
  },
  {
    key: 'construction',
    label: "L'humanité comme construction",
    description: "Langage, éducation, travail, perfectibilité : l'humain comme tâche.",
  },
  {
    key: 'inhumanite',
    label: "L'inhumanité au cœur de l'humain",
    description: "Barbarie, mal banal, déshumanisation, peur, conformisme.",
  },
  {
    key: 'nature',
    label: "L'humanité face à la nature",
    description: "Animal, Anthropocène, écologie, rapport au vivant.",
  },
  {
    key: 'technique',
    label: "L'humanité à l'épreuve de la technique",
    description: "Outil, machine, posthumain, désenchantement.",
  },
  {
    key: 'solidarite',
    label: "Solidarité, dignité, hospitalité",
    description: "Devoir envers autrui, fraternité, droits, reconnaissance.",
  },
  {
    key: 'frontieres',
    label: "Frontières et altérité",
    description: "Étranger, barbare, ethnocentrisme, regard d'autrui.",
  },
  {
    key: 'liberte-finitude',
    label: "Liberté, finitude, dépassement",
    description: "Liberté, mort, inconscient, révolte, désenchantement, anti-humanisme.",
  },
];

export const citationsHumanite: Citation[] = [
  // ─── Définir l'humanité ───────────────────────────────────────────
  {
    slug: 'pic-mirandole-libre-arbitre',
    citation:
      "Tu ne seras retenu par aucune limite, tu te détermineras toi-même selon ton libre arbitre.",
    auteur: 'Pic de la Mirandole',
    oeuvre: 'Discours de la dignité de l’homme',
    date: '1486',
    glose:
      "Dieu s'adresse à Adam. L'humain n'a pas de place assignée : il se définit par l'indétermination même.",
    sousTheme: 'definir',
  },
  {
    slug: 'sartre-existence-essence',
    citation: "L'existence précède l'essence.",
    auteur: 'Jean-Paul Sartre',
    oeuvre: "L'existentialisme est un humanisme",
    date: '1946',
    glose:
      "L'humain n'est rien de fixé d'avance. Il est ce qu'il fait, et il devient ce qu'il choisit.",
    sousTheme: 'definir',
    parapersoSlug: 'liberte-condamnation-sartre',
  },
  {
    slug: 'pascal-roseau-pensant',
    citation:
      "L'homme n'est qu'un roseau, le plus faible de la nature, mais c'est un roseau pensant.",
    auteur: 'Blaise Pascal',
    oeuvre: 'Pensées',
    date: '1670',
    glose:
      "Grandeur et misère : la fragilité physique de l'humain est compensée par la dignité de la pensée.",
    sousTheme: 'definir',
  },
  {
    slug: 'aristote-animal-politique',
    citation: "L'homme est par nature un animal politique.",
    auteur: 'Aristote',
    oeuvre: 'Politique',
    date: 'IVe siècle avant notre ère',
    glose:
      "L'humain ne s'accomplit qu'au sein de la cité : vivre seul, c'est être ou bête ou dieu, mais pas humain.",
    sousTheme: 'definir',
  },
  {
    slug: 'terence-rien-humain-etranger',
    citation:
      "Je suis homme, et rien de ce qui est humain ne m'est étranger.",
    auteur: 'Térence',
    oeuvre: "L'Heautontimoroumenos",
    date: '163 avant notre ère',
    glose:
      "Formule d'universalisme : aucun humain ne peut se déclarer extérieur à la condition d'un autre.",
    sousTheme: 'definir',
  },
  {
    slug: 'pascal-homme-passe-homme',
    citation: "L'homme passe infiniment l'homme.",
    auteur: 'Blaise Pascal',
    oeuvre: 'Pensées',
    date: '1670',
    glose:
      "L'humain n'est jamais à la mesure de lui-même : il est toujours dépassé par ce qu'il porte en lui.",
    sousTheme: 'definir',
  },

  // ─── L'humanité comme construction ────────────────────────────────
  {
    slug: 'kant-creature-eduquee',
    citation: "L'homme est la seule créature qui doive être éduquée.",
    auteur: 'Emmanuel Kant',
    oeuvre: "Réflexions sur l'éducation",
    date: '1803',
    glose:
      "L'humanité n'est pas donnée par la naissance, elle est conquise par la transmission.",
    sousTheme: 'construction',
    parapersoSlug: 'education-humanisation-kant-itard',
  },
  {
    slug: 'aristote-parole-propre',
    citation: "L'homme est le seul des animaux qui possède la parole.",
    auteur: 'Aristote',
    oeuvre: 'Politique',
    date: 'IVe siècle avant notre ère',
    glose:
      "Le langage distingue l'humain : il permet de dire le juste et l'injuste, pas seulement le plaisir et la peine.",
    sousTheme: 'construction',
    parapersoSlug: 'deshumanisation-langage',
  },
  {
    slug: 'marx-rapports-sociaux',
    citation: "L'essence humaine est l'ensemble des rapports sociaux.",
    auteur: 'Karl Marx',
    oeuvre: 'Thèses sur Feuerbach',
    date: '1845',
    glose:
      "L'humain n'a pas d'essence isolable : il est tissé par les relations économiques, politiques, culturelles qui le traversent.",
    sousTheme: 'construction',
    parapersoSlug: 'travail-aliene-marx',
  },
  {
    slug: 'rousseau-emile',
    citation:
      "Tout est bien sortant des mains de l'Auteur des choses, tout dégénère entre les mains de l'homme.",
    auteur: 'Jean-Jacques Rousseau',
    oeuvre: 'Émile, ou De l’éducation',
    date: '1762',
    glose:
      "Paradoxe rousseauiste : l'humain a besoin d'éducation, mais l'éducation est aussi ce qui le corrompt.",
    sousTheme: 'construction',
  },
  {
    slug: 'arendt-hommes-pluriel',
    citation:
      "Les hommes, et non l'Homme, vivent sur la terre et habitent le monde.",
    auteur: 'Hannah Arendt',
    oeuvre: "Condition de l'homme moderne",
    date: '1958',
    glose:
      "L'humanité n'existe qu'au pluriel : c'est la pluralité qui définit l'humain, pas l'unité d'une nature abstraite.",
    sousTheme: 'construction',
  },
  {
    slug: 'rousseau-perfectibilite',
    citation:
      "La faculté de se perfectionner, faculté qui, à l'aide des circonstances, développe successivement toutes les autres.",
    auteur: 'Jean-Jacques Rousseau',
    oeuvre: "Discours sur l'origine de l'inégalité parmi les hommes",
    date: '1755',
    glose:
      "Ce qui distingue l'humain de l'animal n'est pas une qualité, mais une capacité : celle de se transformer.",
    sousTheme: 'construction',
    parapersoSlug: 'perfectibilite-rousseau',
  },

  // ─── L'inhumanité au cœur de l'humain ────────────────────────────
  {
    slug: 'pascal-ange-bete',
    citation: "Qui veut faire l'ange fait la bête.",
    auteur: 'Blaise Pascal',
    oeuvre: 'Pensées',
    date: '1670',
    glose:
      "Vouloir s'arracher à la condition humaine, c'est s'effondrer en deçà : l'humain se perd quand il se rêve pur.",
    sousTheme: 'inhumanite',
  },
  {
    slug: 'arendt-banalite-mal',
    citation: "La banalité du mal.",
    auteur: 'Hannah Arendt',
    oeuvre: 'Eichmann à Jérusalem',
    date: '1963',
    glose:
      "Le mal radical ne suppose pas un monstre, mais un fonctionnaire qui a cessé de penser.",
    sousTheme: 'inhumanite',
    parapersoSlug: 'barbarie-possibilite-ordinaire',
  },
  {
    slug: 'levi-considerez-homme',
    citation: "Considérez si c'est un homme.",
    auteur: 'Primo Levi',
    oeuvre: "Si c'est un homme",
    date: '1947',
    glose:
      "Le camp ne tue pas seulement les corps : il dépouille l'humain de tout ce qui le faisait reconnaître comme tel.",
    sousTheme: 'inhumanite',
  },
  {
    slug: 'hobbes-loup',
    citation: "L'homme est un loup pour l'homme.",
    auteur: 'Thomas Hobbes',
    oeuvre: 'Le Citoyen',
    date: '1642',
    glose:
      "Sans pacte civil, la défiance et la peur réciproques rendent l'humain dangereux pour son semblable.",
    sousTheme: 'inhumanite',
    parapersoSlug: 'lachete-angoisse-existentielle',
  },
  {
    slug: 'antelme-espece-humaine',
    citation:
      "Il n'y a pas d'espèces humaines, il y a une espèce humaine.",
    auteur: 'Robert Antelme',
    oeuvre: "L'Espèce humaine",
    date: '1947',
    glose:
      "Contre l'entreprise nazie de séparer les humains en sous-espèces : le déporté reste irréductiblement le semblable du bourreau.",
    sousTheme: 'inhumanite',
  },
  {
    slug: 'arendt-droit-obeir',
    citation: "Personne n'a le droit d'obéir.",
    auteur: 'Hannah Arendt',
    oeuvre: "Du mensonge à la violence",
    date: '1972',
    glose:
      "Obéir aveuglément n'est pas une excuse mais une démission : la responsabilité humaine ne se délègue pas.",
    sousTheme: 'inhumanite',
  },

  // ─── L'humanité face à la nature ─────────────────────────────────
  {
    slug: 'jonas-permanence-vie',
    citation:
      "Agis de façon que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine sur terre.",
    auteur: 'Hans Jonas',
    oeuvre: 'Le Principe responsabilité',
    date: '1979',
    glose:
      "Réécriture de l'impératif kantien à l'âge écologique : l'éthique doit s'étendre aux générations futures.",
    sousTheme: 'nature',
    parapersoSlug: 'anthropocene-jonas-descola',
  },
  {
    slug: 'descartes-maitres-possesseurs',
    citation: "Nous rendre comme maîtres et possesseurs de la nature.",
    auteur: 'René Descartes',
    oeuvre: 'Discours de la méthode',
    date: '1637',
    glose:
      "Programme fondateur de la modernité technique. Souvent retourné aujourd'hui pour diagnostiquer la crise écologique.",
    sousTheme: 'nature',
  },
  {
    slug: 'levi-strauss-monde-sans-homme',
    citation:
      "Le monde a commencé sans l'homme et il s'achèvera sans lui.",
    auteur: 'Claude Lévi-Strauss',
    oeuvre: 'Tristes Tropiques',
    date: '1955',
    glose:
      "Décentrement radical : l'humain n'est ni au commencement ni à la fin du monde. Il en est un épisode.",
    sousTheme: 'nature',
  },
  {
    slug: 'latour-jamais-modernes',
    citation: "Nous n'avons jamais été modernes.",
    auteur: 'Bruno Latour',
    oeuvre: "Nous n'avons jamais été modernes",
    date: '1991',
    glose:
      "La séparation moderne entre humains et non-humains n'a jamais vraiment fonctionné. Tout est déjà hybride.",
    sousTheme: 'nature',
    parapersoSlug: 'anthropocene-jonas-descola',
  },
  {
    slug: 'descartes-animaux-machines',
    citation:
      "Ce sont des automates qui se meuvent par la disposition de leurs organes.",
    auteur: 'René Descartes',
    oeuvre: 'Discours de la méthode',
    date: '1637',
    glose:
      "Thèse de l'animal-machine : la frontière humain/animal est posée comme absolue. À discuter et à dépasser.",
    sousTheme: 'nature',
    parapersoSlug: 'animal-machine-descartes',
  },

  // ─── L'humanité à l'épreuve de la technique ──────────────────────
  {
    slug: 'rabelais-science-conscience',
    citation: "Science sans conscience n'est que ruine de l'âme.",
    auteur: 'François Rabelais',
    oeuvre: 'Pantagruel',
    date: '1532',
    glose:
      "Avertissement humaniste : le savoir technique sans réflexion morale détruit ce qu'il prétendait servir.",
    sousTheme: 'technique',
  },
  {
    slug: 'heidegger-essence-technique',
    citation:
      "L'essence de la technique n'est rien de technique.",
    auteur: 'Martin Heidegger',
    oeuvre: 'La Question de la technique',
    date: '1953',
    glose:
      "La technique n'est pas un simple outil neutre. Elle est une manière de penser et de rapporter le monde à l'humain.",
    sousTheme: 'technique',
  },
  {
    slug: 'anders-honte-promethienne',
    citation:
      "La honte prométhéenne, c'est la honte qui s'empare de l'homme face à l'humiliante qualité des choses qu'il a lui-même fabriquées.",
    auteur: 'Günther Anders',
    oeuvre: "L'Obsolescence de l'homme",
    date: '1956',
    glose:
      "L'humain se sent dépassé par ses machines : il a honte de ne plus être à la hauteur de ses propres produits.",
    sousTheme: 'technique',
    parapersoSlug: 'honte-promethienne-anders',
  },
  {
    slug: 'weber-desenchantement',
    citation:
      "Le destin de notre époque, c'est le désenchantement du monde.",
    auteur: 'Max Weber',
    oeuvre: 'Le Savant et le politique',
    date: '1919',
    glose:
      "La science a vidé le monde de ses mystères. L'humain moderne maîtrise techniquement mais ne comprend plus spirituellement.",
    sousTheme: 'technique',
    parapersoSlug: 'desenchantement-weber-eliade',
  },

  // ─── Solidarité, dignité, hospitalité ────────────────────────────
  {
    slug: 'kant-fin-jamais-moyen',
    citation:
      "Agis de telle sorte que tu traites l'humanité, aussi bien dans ta personne que dans la personne de tout autre, toujours en même temps comme une fin, jamais simplement comme un moyen.",
    auteur: 'Emmanuel Kant',
    oeuvre: 'Fondements de la métaphysique des mœurs',
    date: '1785',
    glose:
      "Formule canonique de la dignité : aucun humain ne peut être instrumentalisé sans être réduit en deçà de son humanité.",
    sousTheme: 'solidarite',
    parapersoSlug: 'dignite-kant',
  },
  {
    slug: 'levinas-visage-tuer',
    citation: "Le visage est ce qui ne peut être tué.",
    auteur: 'Emmanuel Levinas',
    oeuvre: 'Totalité et infini',
    date: '1961',
    glose:
      "Le visage d'autrui résiste avant tout meurtre : il oppose à la violence l'interdit éthique du « tu ne tueras pas ».",
    sousTheme: 'solidarite',
    parapersoSlug: 'visage-autrui-levinas',
  },
  {
    slug: 'camus-revolte-nous-sommes',
    citation: "Je me révolte, donc nous sommes.",
    auteur: 'Albert Camus',
    oeuvre: "L'Homme révolté",
    date: '1951',
    glose:
      "Réécriture du cogito cartésien : la révolte n'est pas individuelle, elle pose en même temps une humanité partagée.",
    sousTheme: 'solidarite',
    parapersoSlug: 'revolte-camus',
  },
  {
    slug: 'saint-exupery-responsable',
    citation: "Être homme, c'est précisément être responsable.",
    auteur: 'Antoine de Saint-Exupéry',
    oeuvre: 'Terre des hommes',
    date: '1939',
    glose:
      "L'humanité ne se mesure pas à ce qu'on est, mais à ce qu'on prend en charge pour les autres.",
    sousTheme: 'solidarite',
  },
  {
    slug: 'malraux-homme-fait',
    citation: "L'homme est ce qu'il fait.",
    auteur: 'André Malraux',
    oeuvre: 'La Condition humaine',
    date: '1933',
    glose:
      "Contre toute essence préalable : l'humain se définit par ses actes, en particulier ses actes engagés.",
    sousTheme: 'solidarite',
  },
  {
    slug: 'hugo-ecole-prison',
    citation:
      "Ouvrir une école, c'est fermer une prison.",
    auteur: 'Victor Hugo',
    oeuvre: 'Discours et écrits politiques',
    date: 'XIXe siècle',
    glose:
      "L'éducation est l'investissement le plus humanisant : elle prévient la violence en faisant advenir le jugement.",
    sousTheme: 'solidarite',
  },

  // ─── Frontières et altérité ──────────────────────────────────────
  {
    slug: 'montaigne-barbarie-usage',
    citation:
      "Chacun appelle barbarie ce qui n'est pas de son usage.",
    auteur: 'Michel de Montaigne',
    oeuvre: 'Essais, « Des cannibales »',
    date: '1580',
    glose:
      "L'ethnocentrisme est la maladie la plus universelle. Reconnaître l'humanité de l'autre commence par soupçonner ses propres évidences.",
    sousTheme: 'frontieres',
    parapersoSlug: 'humanite-miroir-etranger',
  },
  {
    slug: 'levi-strauss-barbare',
    citation:
      "Le barbare, c'est d'abord l'homme qui croit à la barbarie.",
    auteur: 'Claude Lévi-Strauss',
    oeuvre: 'Race et histoire',
    date: '1952',
    glose:
      "Refuser l'humanité d'un autre, c'est commencer à perdre la sienne. La barbarie est dans le regard avant d'être dans le geste.",
    sousTheme: 'frontieres',
    parapersoSlug: 'humanite-miroir-etranger',
  },
  {
    slug: 'sartre-enfer-autres',
    citation: "L'enfer, c'est les autres.",
    auteur: 'Jean-Paul Sartre',
    oeuvre: 'Huis clos',
    date: '1944',
    glose:
      "Souvent mal lue : pas une misanthropie, mais la prison du regard d'autrui qui me fige dans une image.",
    sousTheme: 'frontieres',
    parapersoSlug: 'identite-masque',
  },
  {
    slug: 'levinas-responsable-agresse',
    citation:
      "Je suis responsable d'autrui même lorsqu'il m'agresse.",
    auteur: 'Emmanuel Levinas',
    oeuvre: 'Éthique et infini',
    date: '1982',
    glose:
      "L'éthique est asymétrique : la responsabilité pour autrui précède toute réciprocité, toute négociation.",
    sousTheme: 'frontieres',
    parapersoSlug: 'visage-autrui-levinas',
  },
  {
    slug: 'montesquieu-persan',
    citation: "Comment peut-on être Persan ?",
    auteur: 'Charles-Louis de Montesquieu',
    oeuvre: 'Lettres persanes',
    date: '1721',
    glose:
      "Question prêtée à un Parisien. Le regard étranger révèle l'arbitraire de nos propres mœurs.",
    sousTheme: 'frontieres',
    parapersoSlug: 'humanite-miroir-etranger',
  },

  // ─── Liberté, finitude, dépassement ──────────────────────────────
  {
    slug: 'sartre-condamne-libre',
    citation: "L'homme est condamné à être libre.",
    auteur: 'Jean-Paul Sartre',
    oeuvre: "L'existentialisme est un humanisme",
    date: '1946',
    glose:
      "La liberté n'est pas un cadeau, c'est une charge. On ne peut pas ne pas choisir, même refuser de choisir est un choix.",
    sousTheme: 'liberte-finitude',
    parapersoSlug: 'liberte-condamnation-sartre',
  },
  {
    slug: 'nietzsche-surmonter',
    citation:
      "L'homme est quelque chose qui doit être surmonté.",
    auteur: 'Friedrich Nietzsche',
    oeuvre: 'Ainsi parlait Zarathoustra',
    date: '1883',
    glose:
      "L'humanité n'est pas un terme, c'est un pont. Elle se justifie par ce qu'elle ouvre au-delà d'elle-même.",
    sousTheme: 'liberte-finitude',
    parapersoSlug: 'surhomme-nietzsche',
  },
  {
    slug: 'epicure-mort',
    citation:
      "Quand la mort est là, nous n'y sommes plus, et quand nous y sommes, elle n'y est pas.",
    auteur: 'Épicure',
    oeuvre: 'Lettre à Ménécée',
    date: 'IIIe siècle avant notre ère',
    glose:
      "Tentative de désamorcer l'angoisse de mourir par un raisonnement logique : la mort n'est jamais présente à nous.",
    sousTheme: 'liberte-finitude',
    parapersoSlug: 'mort-finitude-heidegger-epicure',
  },
  {
    slug: 'freud-maitre-maison',
    citation:
      "Le moi n'est pas maître dans sa propre maison.",
    auteur: 'Sigmund Freud',
    oeuvre: 'Introduction à la psychanalyse',
    date: '1916',
    glose:
      "La troisième blessure narcissique : l'humain ne se maîtrise pas, même de l'intérieur. L'inconscient le travaille.",
    sousTheme: 'liberte-finitude',
    parapersoSlug: 'inconscient-freud',
  },
  {
    slug: 'foucault-visage-sable',
    citation:
      "L'homme s'effacerait, comme à la limite de la mer un visage de sable.",
    auteur: 'Michel Foucault',
    oeuvre: 'Les Mots et les choses',
    date: '1966',
    glose:
      "Si l'homme est une invention récente, il peut aussi disparaître. L'humanisme n'est qu'une figure historique.",
    sousTheme: 'liberte-finitude',
    parapersoSlug: 'anti-humanisme-foucault',
  },
  {
    slug: 'camus-revolte-non',
    citation:
      "Qu'est-ce qu'un homme révolté ? Un homme qui dit non.",
    auteur: 'Albert Camus',
    oeuvre: "L'Homme révolté",
    date: '1951',
    glose:
      "L'humain commence là où il refuse. La révolte trace une frontière entre ce qu'on supporte et ce qu'on ne peut plus supporter.",
    sousTheme: 'liberte-finitude',
    parapersoSlug: 'revolte-camus',
  },
  {
    slug: 'marx-transformer-monde',
    citation:
      "Les philosophes n'ont fait qu'interpréter le monde, il s'agit maintenant de le transformer.",
    auteur: 'Karl Marx',
    oeuvre: 'Thèses sur Feuerbach',
    date: '1845',
    glose:
      "La pensée seule ne suffit pas à l'humain. C'est par l'action transformatrice qu'il s'accomplit vraiment.",
    sousTheme: 'liberte-finitude',
  },
  {
    slug: 'hegel-reconnaissance',
    citation:
      "La conscience de soi n'atteint sa vérité que dans une autre conscience de soi.",
    auteur: 'Georg Wilhelm Friedrich Hegel',
    oeuvre: "Phénoménologie de l'esprit",
    date: '1807',
    glose:
      "On ne devient pleinement humain qu'en étant reconnu par un autre humain. La conscience seule reste vide.",
    sousTheme: 'liberte-finitude',
    parapersoSlug: 'reconnaissance-hegel',
  },
  {
    slug: 'bergson-rire-humain',
    citation:
      "Il n'y a pas de comique en dehors de ce qui est proprement humain.",
    auteur: 'Henri Bergson',
    oeuvre: 'Le Rire',
    date: '1900',
    glose:
      "Le rire est exclusivement humain. Rire d'un animal, c'est lui prêter quelque chose d'humain.",
    sousTheme: 'liberte-finitude',
  },
  {
    slug: 'rousseau-renoncer-liberte',
    citation:
      "Renoncer à sa liberté, c'est renoncer à sa qualité d'homme.",
    auteur: 'Jean-Jacques Rousseau',
    oeuvre: 'Du contrat social',
    date: '1762',
    glose:
      "La liberté n'est pas un droit parmi d'autres : c'est le critère même de l'humanité. La perdre, c'est cesser d'être humain.",
    sousTheme: 'liberte-finitude',
  },
];

export const getCitationsBySousTheme = (key: SousThemeKey): Citation[] =>
  citationsHumanite.filter((c) => c.sousTheme === key);
