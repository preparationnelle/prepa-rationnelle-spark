import type { ConjugationSection } from '@/data/spanishConjugationData';

export const connectorsSections: ConjugationSection[] = [
  {
    id: 'con-addition-organisation',
    title: 'Addition et organisation du discours',
    description: 'Ouvrir, énumérer, structurer une argumentation',
    level: 'Intermédiaire',
    content: {
      rules: [
        'Ouvrir : en primer lugar, para empezar, ante todo, de entrada.',
        'Ajouter : además, asimismo, igualmente, por otra parte, no solo... sino también.',
        'Énumérer : por un lado... por otro (lado), primero... luego... finalmente.',
        'Conclure une étape : en definitiva, en resumen, en pocas palabras, total que.',
        'Ces connecteurs structurent une synthèse ou une dissertation : ils sont attendus par les correcteurs.',
      ],
      examples: [
        { spanish: 'En primer lugar, conviene definir el concepto.', french: 'En premier lieu, il convient de définir le concept.', explanation: 'Ouverture d\'argumentation.' },
        { spanish: 'No solo es eficaz, sino también económico.', french: 'Non seulement c\'est efficace, mais aussi économique.', explanation: 'Addition forte : no solo... sino también.' },
        { spanish: 'Por un lado..., por otro lado...', french: 'D\'une part..., d\'autre part...', explanation: 'Structuration en deux temps.' },
        { spanish: 'En definitiva, la respuesta es matizada.', french: 'En définitive, la réponse est nuancée.', explanation: 'Bilan / clôture.' },
      ],
      tips: [
        'Construisez votre plan avec ces balises : un correcteur repère immédiatement une copie structurée.',
        'Variez : alterner « además / asimismo / por otra parte » évite la répétition pénalisée.',
      ],
    },
  },
  {
    id: 'con-cause-consequence',
    title: 'Cause et conséquence',
    description: 'Expliquer pourquoi et en tirer les effets',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'Cause : porque (+ ind.), ya que, puesto que, dado que, debido a (que), a causa de, gracias a.',
        'Conséquence : por lo tanto, por consiguiente, en consecuencia, así que, de modo que, por eso, de ahí que (+ subj.).',
        '« como » exprimant la cause se place en tête de phrase (Como llovía, no salimos).',
        '« de ahí que » + subjonctif (= d\'où le fait que).',
        'porque (cause) ≠ por qué (pourquoi, interrogatif) ≠ porqué (le pourquoi, nom).',
      ],
      examples: [
        { spanish: 'Como no había clase, me quedé en casa.', french: 'Comme il n\'y avait pas cours, je suis resté à la maison.', explanation: '« como » causal en tête.' },
        { spanish: 'No estudió; por lo tanto, suspendió.', french: 'Il n\'a pas étudié ; donc il a échoué.', explanation: 'Conséquence : por lo tanto.' },
        { spanish: 'Mintió; de ahí que nadie lo crea.', french: 'Il a menti ; d\'où le fait que personne ne le croit.', explanation: '« de ahí que » + subjonctif.' },
        { spanish: 'Lo logró gracias a su esfuerzo.', french: 'Il a réussi grâce à son effort.', explanation: 'Cause positive : gracias a.' },
      ],
      tips: [
        'Distinguez à l\'écrit : por qué (pourquoi ?), porque (parce que), el porqué (la raison).',
        '« debido a la crisis » (à cause de la crise) est plus soutenu que « por la crisis » en dissertation.',
      ],
    },
  },
  {
    id: 'con-opposition-concession',
    title: 'Opposition et concession',
    description: 'Nuancer, objecter, concéder',
    level: 'Avancé',
    content: {
      rules: [
        'Opposition : pero, sin embargo, no obstante, en cambio, por el contrario, ahora bien.',
        'Concession : aunque, a pesar de (que), pese a (que), si bien, aun cuando.',
        'aunque + indicatif = fait réel concédé ; aunque + subjonctif = hypothèse / non assumé.',
        'a pesar de + infinitif/nom ; a pesar de que + verbe conjugué.',
        '« sino » corrige une négation (no... sino) ; « sino que » devant un verbe conjugué.',
      ],
      examples: [
        { spanish: 'Es caro, sin embargo lo compraré.', french: 'C\'est cher, cependant je l\'achèterai.', explanation: 'Opposition soutenue : sin embargo.' },
        { spanish: 'Aunque es difícil, lo logra.', french: 'Bien que ce soit difficile, il y arrive.', explanation: 'aunque + indicatif = fait réel.' },
        { spanish: 'Aunque sea difícil, lo lograré.', french: 'Même si c\'est difficile, j\'y arriverai.', explanation: 'aunque + subjonctif = hypothèse.' },
        { spanish: 'No es tonto, sino prudente.', french: 'Il n\'est pas bête, mais prudent.', explanation: 'Correction d\'une négation : no... sino.' },
      ],
      tips: [
        'Ne confondez pas « pero » (mais, opposition) et « sino » (mais au contraire, après négation).',
        'L\'alternance aunque + indicatif/subjonctif est un classique de thème : voir aussi la fiche « Subjonctif ».',
      ],
    },
  },
  {
    id: 'con-but-condition-reformulation',
    title: 'But, condition, reformulation, exemplification',
    description: 'Les connecteurs qui complètent l\'argumentation',
    level: 'Avancé',
    content: {
      rules: [
        'But : para que (+ subj.), a fin de que (+ subj.), con el objetivo/propósito de.',
        'Condition : siempre que, con tal de que, a menos que, en caso de que (+ subj.).',
        'Reformulation : es decir, o sea, dicho de otro modo, en otras palabras.',
        'Exemplification / illustration : por ejemplo, tal como, así, en concreto, a saber.',
        'Insistance / mise en relief : de hecho, en realidad, cabe destacar que, conviene subrayar que.',
      ],
      examples: [
        { spanish: 'Lo repito para que quede claro.', french: 'Je le répète pour que ce soit clair.', explanation: 'But : para que + subjonctif.' },
        { spanish: 'Es decir, la cuestión es política.', french: 'C\'est-à-dire que la question est politique.', explanation: 'Reformulation.' },
        { spanish: 'De hecho, los datos lo confirman.', french: 'De fait, les données le confirment.', explanation: 'Insistance / renforcement.' },
        { spanish: 'Cabe destacar que el fenómeno es reciente.', french: 'Il convient de souligner que le phénomène est récent.', explanation: 'Mise en relief soutenue (très valorisée en dissertation).' },
      ],
      tips: [
        'Constituez une « boîte à outils » de 15-20 connecteurs à réutiliser en synthèse et dissertation.',
        'Les tournures « cabe destacar / conviene subrayar que » donnent un ton académique apprécié des jurys.',
      ],
    },
  },
];

export default connectorsSections;
