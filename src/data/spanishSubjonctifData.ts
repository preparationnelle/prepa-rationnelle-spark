import type { ConjugationSection } from '@/data/spanishConjugationData';

export const subjonctifSections: ConjugationSection[] = [
  {
    id: 'subj-present-formation',
    title: 'Formation du présent du subjonctif',
    description: 'La règle du « radical de la 1re personne + terminaisons inversées »',
    level: 'Intermédiaire',
    content: {
      rules: [
        'Méthode infaillible : on part de la 1re personne du présent de l\'indicatif (yo), on enlève le -o final, on ajoute les terminaisons.',
        'Verbes en -AR : -e, -es, -e, -emos, -éis, -en (hablar → hable, hables, hable...).',
        'Verbes en -ER / -IR : -a, -as, -a, -amos, -áis, -an (comer → coma ; vivir → viva).',
        'Les verbes irréguliers à la 1re personne (tengo, pongo, salgo, conozco...) gardent cette irrégularité à toutes les personnes du subjonctif (tenga, ponga, salga, conozca).',
        'Les diphtongues et affaiblissements suivent le présent : poder → pueda ; pedir → pida (et pidamos, pidáis).',
      ],
      examples: [
        { spanish: 'hablar → hable, hables, hable, hablemos, habléis, hablen', french: 'que je parle, que tu parles...', explanation: 'Terminaisons en -e pour les verbes en -AR.' },
        { spanish: 'tener → tengo → tenga, tengas, tenga, tengamos, tengáis, tengan', french: 'que j\'aie, que tu aies...', explanation: 'L\'irrégularité de « tengo » se propage à tout le subjonctif.' },
        { spanish: 'conocer → conozco → conozca', french: 'que je connaisse', explanation: 'Vaut aussi pour parecer (parezca), nacer (nazca), conducir (conduzca).' },
        { spanish: 'pedir → pida, pidas, pida, pidamos, pidáis, pidan', french: 'que je demande', explanation: 'L\'affaiblissement e→i des verbes en -IR touche TOUTES les personnes, y compris nosotros/vosotros.' },
      ],
      irregularities: [
        { verb: 'ser', pattern: 'totalement irrégulier', examples: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'] },
        { verb: 'ir', pattern: 'radical vay-', examples: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'] },
        { verb: 'haber', pattern: 'radical hay-', examples: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'] },
        { verb: 'saber', pattern: 'radical sep-', examples: ['sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'] },
        { verb: 'dar / estar', pattern: 'accents à surveiller', examples: ['dé, des, dé...', 'esté, estés, esté...'] },
      ],
      tips: [
        'Retenez les 6 irréguliers purs par l\'acrostiche DISHES : Dar, Ir, Ser, Haber, Estar, Saber.',
        'Si vous savez conjuguer le « yo » du présent, vous savez 95 % des subjonctifs : c\'est le réflexe à automatiser.',
        'Aux concours, une erreur de subjonctif présent coûte cher : c\'est l\'attendu n°1 des correcteurs en thème.',
      ],
    },
  },
  {
    id: 'subj-imparfait',
    title: 'Imparfait du subjonctif (-ra / -se)',
    description: 'Le temps clé du passé hypothétique et de la concordance',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'Base de formation : la 3e personne du pluriel du passé simple, on enlève -ron, on ajoute les terminaisons.',
        'Deux formes équivalentes : -ra (hablara) et -se (hablase). La forme en -ra est plus fréquente à l\'oral et à l\'écrit moderne.',
        'Terminaisons -ra : -ra, -ras, -ra, -´ramos, -rais, -ran (accent écrit sur le nosotros : habláramos).',
        'Tout verbe irrégulier au passé simple l\'est aussi à l\'imparfait du subjonctif (tuvieron → tuviera ; fueron → fuera ; pidieron → pidiera).',
        'Emploi central : après un verbe principal au passé/conditionnel, et dans les hypothèses « si + imparfait du subjonctif ».',
      ],
      examples: [
        { spanish: 'hablar → hablaron → hablara / hablase', french: 'que je parlasse', explanation: 'Les deux formes sont correctes et interchangeables.' },
        { spanish: 'tener → tuvieron → tuviera, tuvieras, tuviera, tuviéramos...', french: 'que j\'eusse', explanation: 'L\'irrégularité du passé simple se conserve.' },
        { spanish: 'Si tuviera tiempo, viajaría más.', french: 'Si j\'avais le temps, je voyagerais plus.', explanation: 'Hypothèse irréelle du présent : si + imparfait subj. → conditionnel.' },
        { spanish: 'Me pidió que viniera pronto.', french: 'Il m\'a demandé de venir vite.', explanation: 'Concordance : principal au passé → subordonnée à l\'imparfait du subjonctif.' },
      ],
      irregularities: [
        { verb: 'ser / ir', pattern: 'forme commune fue-', examples: ['fuera / fuese', 'fueras', 'fuéramos'] },
        { verb: 'poder', pattern: 'pud-', examples: ['pudiera', 'pudieras', 'pudiéramos'] },
        { verb: 'decir', pattern: 'dij- (sans i)', examples: ['dijera', 'dijeras', 'dijeran'] },
        { verb: 'haber', pattern: 'hub-', examples: ['hubiera', 'hubieras', 'hubiéramos'] },
      ],
      tips: [
        'Astuce concours : « hubiera + participe » = plus-que-parfait du subjonctif (si hubiera sabido = si j\'avais su).',
        'Privilégiez la forme en -ra à l\'écrit : elle est plus naturelle et attendue.',
        'N\'oubliez jamais l\'accent sur la 1re personne du pluriel (tuviéramos, fuéramos, dijéramos).',
      ],
    },
  },
  {
    id: 'subj-declencheurs',
    title: 'Les déclencheurs du subjonctif',
    description: 'Volonté, émotion, doute, jugement : la grille WEIRDO',
    level: 'Intermédiaire',
    content: {
      rules: [
        'Volonté / influence : querer que, pedir que, exigir que, aconsejar que, prohibir que, esperar que.',
        'Émotion / sentiment : alegrarse de que, temer que, lamentar que, sorprenderse de que, gustar que.',
        'Doute / négation de certitude : dudar que, no creer que, no pensar que, es posible que.',
        'Jugement de valeur (tournures impersonnelles) : es importante que, es necesario que, es lógico que, conviene que.',
        'Règle d\'or : il faut un changement de sujet entre la principale et la subordonnée, sinon on utilise l\'infinitif (Quiero ir vs Quiero que vayas).',
      ],
      examples: [
        { spanish: 'Quiero que estudies más.', french: 'Je veux que tu étudies plus.', explanation: 'Volonté + changement de sujet → subjonctif.' },
        { spanish: 'Me alegro de que estés aquí.', french: 'Je suis content que tu sois là.', explanation: 'Émotion → subjonctif.' },
        { spanish: 'No creo que sea verdad.', french: 'Je ne crois pas que ce soit vrai.', explanation: 'Negation de certitude → subjonctif (mais « creo que es verdad » → indicatif).' },
        { spanish: 'Es necesario que reaccionemos.', french: 'Il est nécessaire que nous réagissions.', explanation: 'Tournure impersonnelle de jugement → subjonctif.' },
      ],
      tips: [
        'Mnémotechnique anglo-saxonne utile : WEIRDO = Wishes, Emotions, Impersonal, Recommendations, Doubt, Ojalá.',
        'Piège : « decir que » + indicatif (affirmation) MAIS « decir que » + subjonctif (ordre) : Dice que vienes / Dice que vengas.',
        'Sans changement de sujet → infinitif obligatoire : « Espero aprobar » et non « Espero que apruebe » (si c\'est le même sujet).',
      ],
    },
  },
  {
    id: 'subj-subordonnees',
    title: 'Subjonctif dans les subordonnées circonstancielles',
    description: 'Temps, but, concession, condition : quand le futur impose le subjonctif',
    level: 'Avancé',
    content: {
      rules: [
        'Subordonnées temporelles tournées vers le futur : cuando, en cuanto, hasta que, mientras, una vez que + SUBJONCTIF.',
        'Si l\'action temporelle est habituelle ou passée → indicatif (Cuando llego, como vs Cuando llegue, comeré).',
        'But : para que, a fin de que, de modo que (intention) + subjonctif.',
        'Concession : aunque + subjonctif quand l\'information est non assumée comme vraie ou hypothétique (Aunque llueva = même s\'il pleuvait).',
        'Condition / manière : sin que, a condición de que, con tal de que, antes de que + subjonctif (toujours).',
      ],
      examples: [
        { spanish: 'Cuando llegues, llámame.', french: 'Quand tu arriveras, appelle-moi.', explanation: 'Action future → subjonctif (et non « cuando llegarás »).' },
        { spanish: 'Te lo explico para que lo entiendas.', french: 'Je te l\'explique pour que tu comprennes.', explanation: 'But avec changement de sujet → subjonctif.' },
        { spanish: 'Aunque sea difícil, lo intentaré.', french: 'Même si c\'est difficile, j\'essaierai.', explanation: 'Concession hypothétique → subjonctif.' },
        { spanish: 'Antes de que sea tarde, actuemos.', french: 'Avant qu\'il ne soit trop tard, agissons.', explanation: '« antes de que » impose toujours le subjonctif.' },
      ],
      tips: [
        'Le déclencheur le plus testé aux concours : « cuando + futur » se traduit par « cuando + subjonctif ».',
        'aunque + indicatif = fait réel concédé (Aunque es difícil = bien que ce soit difficile, et ça l\'est) ; + subjonctif = hypothèse.',
        'Réflexe : si l\'événement n\'a pas encore eu lieu au moment où l\'on parle → subjonctif.',
      ],
    },
  },
  {
    id: 'subj-ojala-comosi',
    title: 'Ojalá, quizás, tal vez, como si',
    description: 'Souhait, probabilité et comparaison hypothétique',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'Ojalá + subjonctif présent = souhait réalisable (Ojalá apruebe = pourvu que je réussisse).',
        'Ojalá + imparfait du subjonctif = souhait peu probable / irréel (Ojalá tuviera más tiempo).',
        'Quizás / tal vez / posiblemente + subjonctif marquent le doute ; + indicatif marquent une probabilité plus forte.',
        'Como si + imparfait ou plus-que-parfait du subjonctif TOUJOURS (comparaison irréelle).',
        'Acaso, probablemente suivent la même logique de gradation doute/certitude.',
      ],
      examples: [
        { spanish: 'Ojalá vengan a la fiesta.', french: 'Pourvu qu\'ils viennent à la fête.', explanation: 'Souhait réalisable → subjonctif présent.' },
        { spanish: 'Ojalá hubiera estudiado más.', french: 'Si seulement j\'avais étudié plus.', explanation: 'Regret / irréel du passé → plus-que-parfait du subjonctif.' },
        { spanish: 'Quizás tengas razón.', french: 'Peut-être as-tu raison.', explanation: 'Doute → subjonctif (nuance plus assurée avec l\'indicatif : quizás tienes razón).' },
        { spanish: 'Habla como si lo supiera todo.', french: 'Il parle comme s\'il savait tout.', explanation: '« como si » → imparfait du subjonctif obligatoire.' },
      ],
      tips: [
        '« como si » ne se construit JAMAIS avec le présent : como si fuera, como si hubiera (jamais « como si es »).',
        'Ojalá vient de l\'arabe « wa-šā\' allāh » (si Dieu le veut) : pur marqueur de subjonctif, sans « que ».',
        'Placer le verbe à l\'indicatif après quizás/tal vez = affirmer une probabilité forte ; nuance stylistique appréciée en expression écrite.',
      ],
    },
  },
  {
    id: 'subj-vs-indicatif',
    title: 'Subjonctif vs indicatif : le test de décision',
    description: 'Un protocole en 3 questions pour ne plus se tromper',
    level: 'Avancé',
    content: {
      rules: [
        'Question 1 : y a-t-il une subordonnée introduite par « que » (ou cuando/aunque/para que...) ? Sinon, pas de subjonctif.',
        'Question 2 : la principale exprime-t-elle volonté, émotion, doute, jugement, ou une projection dans le futur ? Si oui → subjonctif.',
        'Question 3 : y a-t-il changement de sujet ? Si non et que c\'est de la volonté/émotion → infinitif, pas de subjonctif.',
        'Affirmation / constat de réalité (creo que, es verdad que, está claro que) → indicatif.',
        'Antécédent indéfini ou inexistant dans une relative → subjonctif (Busco un libro que sea útil vs Tengo un libro que es útil).',
      ],
      examples: [
        { spanish: 'Creo que viene. / No creo que venga.', french: 'Je crois qu\'il vient. / Je ne crois pas qu\'il vienne.', explanation: 'Certitude → indicatif ; doute → subjonctif.' },
        { spanish: 'Busco una casa que tenga jardín.', french: 'Je cherche une maison qui ait un jardin.', explanation: 'Antécédent indéfini/recherché → subjonctif.' },
        { spanish: 'Tengo una casa que tiene jardín.', french: 'J\'ai une maison qui a un jardin.', explanation: 'Antécédent réel et identifié → indicatif.' },
        { spanish: 'Es evidente que mientes.', french: 'Il est évident que tu mens.', explanation: 'Jugement de réalité assumé → indicatif (≠ es posible que mientas).' },
      ],
      tips: [
        'Réflexe correcteur : indicatif = je présente comme réel/certain ; subjonctif = je présente comme virtuel/souhaité/incertain.',
        'Les tournures impersonnelles de certitude (es seguro que, es cierto que) → indicatif ; de probabilité/jugement → subjonctif.',
        'En version comme en thème, identifiez d\'abord le verbe principal : c\'est lui qui commande le mode.',
      ],
    },
  },
];

export default subjonctifSections;
