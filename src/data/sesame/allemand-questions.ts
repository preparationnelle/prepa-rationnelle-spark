// Questions du concours SESAME - Allemand

export interface Question {
    id: number;
    category: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation?: string;
}

export const allemandSESAMEQuestions: Question[] = [
    // TRADUCTION (Questions 1-50)
    {
        id: 1,
        category: "Traduction",
        question: "La piscine ferme dans trois heures.",
        options: [
            "In drei Stunden das Schwimmbad schließt.",
            "Schließt das Schwimmbad in drei Stunden?",
            "In drei Stunden schließt das Schwimmbad.",
            "Das Schwimmbad schließt in drei Stunden nicht."
        ],
        correctAnswer: "C",
        explanation: "La structure correcte en allemand place le complément de temps en première position, suivi du verbe conjugué, puis le sujet."
    },
    {
        id: 2,
        category: "Traduction",
        question: "Je marche avec ma mère autour de la maison.",
        options: [
            "Ich mit meiner Mutter gehe um das Haus.",
            "Um das Haus mit meiner Mutter ich gehe.",
            "Ich gehe mit meiner Mutter um das Haus.",
            "Mit meiner Mutter ich um das Haus gehe."
        ],
        correctAnswer: "C",
        explanation: "Structure SVO (Sujet-Verbe-Objet) : le verbe conjugué occupe la deuxième position."
    },
    {
        id: 3,
        category: "Traduction",
        question: "Je voudrais acheter ces roses.",
        options: [
            "Ich möchte diese Rosen kaufen.",
            "Kaufen ich möchte diese Rosen.",
            "Ich möchte kaufen diese Rosen.",
            "Diese Rosen möchte ich kaufen nicht."
        ],
        correctAnswer: "A",
        explanation: "Avec un verbe modal, l'infinitif se place en fin de phrase."
    },
    {
        id: 4,
        category: "Traduction",
        question: "Le journaliste n'a pas publié l'article.",
        options: [
            "Der Journalist hat nicht veröffentlicht den Artikel.",
            "Der Journalist hat den Artikel nicht veröffentlicht.",
            "Der Journalist den Artikel hat nicht veröffentlicht.",
            "Nicht hat der Journalist den Artikel veröffentlicht."
        ],
        correctAnswer: "B",
        explanation: "Au passé composé, l'accusatif (den Artikel) précède la négation et le participe passé."
    },
    {
        id: 5,
        category: "Traduction",
        question: "Tu joues du piano ?",
        options: [
            "Klavier du spielst?",
            "Spielst Klavier du?",
            "Spielst du Klavier?",
            "Du spielst Klavier nicht?"
        ],
        correctAnswer: "C",
        explanation: "Dans une question, le verbe conjugué est en première position, suivi du sujet."
    },
    {
        id: 6,
        category: "Traduction",
        question: "Quel est ton chiffre préféré ?",
        options: [
            "Was deine Lieblingszahl ist?",
            "Deine ist was Lieblingszahl?",
            "Was ist deine Lieblingszahl?",
            "Ist was deine Lieblingszahl nicht?"
        ],
        correctAnswer: "C",
        explanation: "Dans une question avec un mot interrogatif, celui-ci est en première position, puis le verbe, puis le sujet."
    },
    {
        id: 7,
        category: "Traduction",
        question: "Les parents sont sévères, mais ils aiment leurs enfants.",
        options: [
            "Die Eltern sind streng, aber sie lieben ihre Kinder.",
            "Die Eltern sind streng, aber sie ihre Kinder lieben.",
            "Die Eltern sind streng, aber ihre Kinder sie lieben.",
            "Streng sind die Eltern, aber lieben ihre Kinder nicht."
        ],
        correctAnswer: "A",
        explanation: "La conjonction 'aber' ne modifie pas l'ordre des mots : le verbe reste en deuxième position."
    },
    {
        id: 8,
        category: "Traduction",
        question: "Je ferme la porte à clef, pour que mon frère ne me dérange pas.",
        options: [
            "Ich schließe die Tür ab, damit mein Bruder mich nicht stört.",
            "Ich schließe die Tür ab, weil mein Bruder mich nicht stört.",
            "Ich schließe die Tür ab, damit mein Bruder stört mich nicht.",
            "Damit mein Bruder mich nicht stört, ich die Tür nicht abschließe."
        ],
        correctAnswer: "A",
        explanation: "La conjonction 'damit' (pour que) entraîne le verbe conjugué en fin de proposition subordonnée."
    },
    {
        id: 9,
        category: "Traduction",
        question: "Marta voudrait bien voyager.",
        options: [
            "Gern reisen möchte Marta.",
            "Marta möchte gern reisen.",
            "Möchte Marta gern reisen.",
            "Marta gern reisen möchte nicht."
        ],
        correctAnswer: "B",
        explanation: "L'adverbe 'gern' se place généralement après le verbe modal et avant l'infinitif."
    },
    {
        id: 10,
        category: "Traduction",
        question: "Il a pris le train ce matin.",
        options: [
            "Er hat den Zug heute Morgen genommen.",
            "Er den Zug hat heute Morgen genommen.",
            "Heute Morgen er hat den Zug genommen.",
            "Den Zug hat er genommen heute Morgen."
        ],
        correctAnswer: "A",
        explanation: "Au passé composé, le participe passé se place en fin de phrase."
    },
    {
        id: 11,
        category: "Traduction",
        question: "Nous irons à la plage demain.",
        options: [
            "Wir gehen an den Strand morgen.",
            "An den Strand wir werden morgen gehen.",
            "Wir werden morgen an den Strand gehen.",
            "Morgen an den Strand wir gehen werden."
        ],
        correctAnswer: "C",
        explanation: "Au futur, l'infinitif se place en fin de phrase après 'werden'."
    },
    {
        id: 12,
        category: "Traduction",
        question: "Elle doit étudier pour l'examen.",
        options: [
            "Sie muss für die Prüfung lernen.",
            "Für die Prüfung sie muss lernen.",
            "Sie lernen muss für die Prüfung.",
            "Lernen sie muss für die Prüfung."
        ],
        correctAnswer: "A",
        explanation: "Avec un verbe modal, l'infinitif est en fin de phrase."
    },
    {
        id: 13,
        category: "Traduction",
        question: "Mon professeur parle trois langues.",
        options: [
            "Mein Lehrer spricht drei Sprachen.",
            "Drei Sprachen mein Lehrer spricht.",
            "Spricht mein Lehrer drei Sprachen.",
            "Mein Lehrer drei Sprachen spricht."
        ],
        correctAnswer: "A",
        explanation: "Structure standard : Sujet + Verbe + Complément."
    },
    {
        id: 14,
        category: "Traduction",
        question: "Où habitez-vous ?",
        options: [
            "Wo Sie wohnen?",
            "Wohnen Sie wo?",
            "Wo wohnen Sie?",
            "Sie wohnen wo?"
        ],
        correctAnswer: "C",
        explanation: "Mot interrogatif + verbe + sujet dans les questions."
    },
    {
        id: 15,
        category: "Traduction",
        question: "Je n'ai pas encore fini mes devoirs.",
        options: [
            "Ich habe meine Hausaufgaben noch nicht fertig gemacht.",
            "Ich noch nicht habe meine Hausaufgaben fertig gemacht.",
            "Meine Hausaufgaben ich habe noch nicht fertig gemacht.",
            "Fertig gemacht ich habe meine Hausaufgaben noch nicht."
        ],
        correctAnswer: "A",
        explanation: "La négation 'noch nicht' se place avant le participe passé."
    },
    {
        id: 16,
        category: "Traduction",
        question: "Nous devons nous dépêcher.",
        options: [
            "Wir uns beeilen müssen.",
            "Wir müssen uns beeilen.",
            "Uns müssen wir beeilen.",
            "Müssen wir uns beeilen."
        ],
        correctAnswer: "B",
        explanation: "Le pronom réfléchi 'uns' se place après le verbe conjugué."
    },
    {
        id: 17,
        category: "Traduction",
        question: "Le film était très intéressant.",
        options: [
            "Der Film war sehr interessant.",
            "Sehr interessant der Film war.",
            "War der Film sehr interessant.",
            "Der Film sehr interessant war."
        ],
        correctAnswer: "A",
        explanation: "Structure standard avec adjectif attribut."
    },
    {
        id: 18,
        category: "Traduction",
        question: "Elle s'est levée tôt aujourd'hui.",
        options: [
            "Sie hat sich früh heute aufgestanden.",
            "Sie ist heute früh aufgestanden.",
            "Heute früh sie ist aufgestanden.",
            "Aufgestanden ist sie früh heute."
        ],
        correctAnswer: "B",
        explanation: "Les verbes de mouvement utilisent 'sein' comme auxiliaire."
    },
    {
        id: 19,
        category: "Traduction",
        question: "Peux-tu m'aider, s'il te plaît ?",
        options: [
            "Du kannst mir helfen bitte?",
            "Kannst du mir bitte helfen?",
            "Mir kannst du bitte helfen?",
            "Bitte kannst mir du helfen?"
        ],
        correctAnswer: "B",
        explanation: "Dans une question : Verbe + Sujet + Datif + Adverbe + Infinitif."
    },
    {
        id: 20,
        category: "Traduction",
        question: "Il fait froid en hiver.",
        options: [
            "Es ist kalt im Winter.",
            "Im Winter es ist kalt.",
            "Kalt ist es im Winter.",
            "Es im Winter ist kalt."
        ],
        correctAnswer: "A",
        explanation: "Structure impersonnelle avec 'es'."
    },
    {
        id: 21,
        category: "Traduction",
        question: "As-tu déjà visité Berlin ?",
        options: [
            "Hast du schon Berlin besucht?",
            "Du hast schon Berlin besucht?",
            "Berlin hast du schon besucht?",
            "Schon hast du Berlin besucht?"
        ],
        correctAnswer: "A",
        explanation: "Question au passé composé avec inversion."
    },
    {
        id: 22,
        category: "Traduction",
        question: "Mes amis viendront ce soir.",
        options: [
            "Meine Freunde werden heute Abend kommen.",
            "Heute Abend meine Freunde werden kommen.",
            "Meine Freunde kommen werden heute Abend.",
            "Werden meine Freunde heute Abend kommen."
        ],
        correctAnswer: "A",
        explanation: "Futur : werden + infinitif en fin de phrase."
    },
    {
        id: 23,
        category: "Traduction",
        question: "Je ne comprends pas ce mot.",
        options: [
            "Ich verstehe dieses Wort nicht.",
            "Ich nicht verstehe dieses Wort.",
            "Dieses Wort ich nicht verstehe.",
            "Nicht ich verstehe dieses Wort."
        ],
        correctAnswer: "A",
        explanation: "La négation 'nicht' se place généralement après le complément d'objet."
    },
    {
        id: 24,
        category: "Traduction",
        question: "Elle a acheté une nouvelle voiture.",
        options: [
            "Sie hat ein neues Auto gekauft.",
            "Ein neues Auto sie hat gekauft.",
            "Sie ein neues Auto hat gekauft.",
            "Gekauft hat sie ein neues Auto."
        ],
        correctAnswer: "A",
        explanation: "Participe passé en fin de phrase au passé composé."
    },
    {
        id: 25,
        category: "Traduction",
        question: "Nous allons souvent au cinéma.",
        options: [
            "Wir gehen oft ins Kino.",
            "Oft wir gehen ins Kino.",
            "Ins Kino wir gehen oft.",
            "Wir ins Kino oft gehen."
        ],
        correctAnswer: "A",
        explanation: "L'adverbe 'oft' se place après le verbe."
    },
    {
        id: 26,
        category: "Traduction",
        question: "Il apprend l'allemand depuis deux ans.",
        options: [
            "Er lernt seit zwei Jahren Deutsch.",
            "Seit zwei Jahren er lernt Deutsch.",
            "Er seit zwei Jahren Deutsch lernt.",
            "Deutsch lernt er seit zwei Jahren."
        ],
        correctAnswer: "A",
        explanation: "Structure standard avec complément de temps."
    },
    {
        id: 27,
        category: "Traduction",
        question: "Pouvez-vous répéter, s'il vous plaît ?",
        options: [
            "Können Sie bitte wiederholen?",
            "Sie können bitte wiederholen?",
            "Bitte können Sie wiederholen?",
            "Wiederholen Sie können bitte?"
        ],
        correctAnswer: "A",
        explanation: "Question formelle avec inversion."
    },
    {
        id: 28,
        category: "Traduction",
        question: "Le livre est sur la table.",
        options: [
            "Das Buch ist auf dem Tisch.",
            "Auf dem Tisch das Buch ist.",
            "Das Buch auf dem Tisch ist.",
            "Ist das Buch auf dem Tisch."
        ],
        correctAnswer: "A",
        explanation: "Position statique avec 'auf' + datif."
    },
    {
        id: 29,
        category: "Traduction",
        question: "Je me suis bien amusé hier soir.",
        options: [
            "Ich habe mich gestern Abend gut amüsiert.",
            "Gestern Abend ich habe mich gut amüsiert.",
            "Ich mich habe gestern Abend gut amüsiert.",
            "Gut amüsiert habe ich mich gestern Abend."
        ],
        correctAnswer: "A",
        explanation: "Verbe pronominal au passé composé avec 'haben'."
    },
    {
        id: 30,
        category: "Traduction",
        question: "Ils ne veulent pas venir.",
        options: [
            "Sie wollen nicht kommen.",
            "Nicht wollen sie kommen.",
            "Sie nicht wollen kommen.",
            "Kommen wollen sie nicht."
        ],
        correctAnswer: "A",
        explanation: "La négation 'nicht' se place avant l'infinitif."
    },
    {
        id: 31,
        category: "Traduction",
        question: "Ma sœur habite à Munich.",
        options: [
            "Meine Schwester wohnt in München.",
            "In München meine Schwester wohnt.",
            "Meine Schwester in München wohnt.",
            "Wohnt meine Schwester in München."
        ],
        correctAnswer: "A",
        explanation: "Structure déclarative simple."
    },
    {
        id: 32,
        category: "Traduction",
        question: "Quand commence le cours ?",
        options: [
            "Wann beginnt der Unterricht?",
            "Der Unterricht wann beginnt?",
            "Beginnt wann der Unterricht?",
            "Wann der Unterricht beginnt?"
        ],
        correctAnswer: "A",
        explanation: "Question avec mot interrogatif : wann + verbe + sujet."
    },
    {
        id: 33,
        category: "Traduction",
        question: "Nous avons mangé dans un bon restaurant.",
        options: [
            "Wir haben in einem guten Restaurant gegessen.",
            "In einem guten Restaurant wir haben gegessen.",
            "Wir in einem guten Restaurant haben gegessen.",
            "Gegessen haben wir in einem guten Restaurant."
        ],
        correctAnswer: "A",
        explanation: "Passé composé avec participe en fin de phrase."
    },
    {
        id: 34,
        category: "Traduction",
        question: "Il pleut beaucoup aujourd'hui.",
        options: [
            "Es regnet heute viel.",
            "Heute es regnet viel.",
            "Viel regnet es heute.",
            "Es heute viel regnet."
        ],
        correctAnswer: "A",
        explanation: "Verbe impersonnel avec 'es'."
    },
    {
        id: 35,
        category: "Traduction",
        question: "Elle a oublié son sac.",
        options: [
            "Sie hat ihre Tasche vergessen.",
            "Ihre Tasche sie hat vergessen.",
            "Sie ihre Tasche hat vergessen.",
            "Vergessen hat sie ihre Tasche."
        ],
        correctAnswer: "A",
        explanation: "Passé composé standard."
    },
    {
        id: 36,
        category: "Traduction",
        question: "Combien coûte ce pull ?",
        options: [
            "Wie viel kostet dieser Pullover?",
            "Dieser Pullover wie viel kostet?",
            "Kostet wie viel dieser Pullover?",
            "Wie viel dieser Pullover kostet?"
        ],
        correctAnswer: "A",
        explanation: "Question avec 'wie viel' + verbe + sujet."
    },
    {
        id: 37,
        category: "Traduction",
        question: "Je voudrais un café, s'il vous plaît.",
        options: [
            "Ich möchte einen Kaffee, bitte.",
            "Einen Kaffee ich möchte bitte.",
            "Ich einen Kaffee möchte bitte.",
            "Bitte möchte ich einen Kaffee."
        ],
        correctAnswer: "A",
        explanation: "Verbe modal + accusatif + formule de politesse."
    },
    {
        id: 38,
        category: "Traduction",
        question: "Ils ont travaillé toute la journée.",
        options: [
            "Sie haben den ganzen Tag gearbeitet.",
            "Den ganzen Tag sie haben gearbeitet.",
            "Sie den ganzen Tag haben gearbeitet.",
            "Gearbeitet haben sie den ganzen Tag."
        ],
        correctAnswer: "A",
        explanation: "Passé composé avec complément de temps."
    },
    {
        id: 39,
        category: "Traduction",
        question: "Quel âge as-tu ?",
        options: [
            "Wie alt bist du?",
            "Du bist wie alt?",
            "Wie alt du bist?",
            "Bist du wie alt?"
        ],
        correctAnswer: "A",
        explanation: "Question d'âge : wie alt + verbe + sujet."
    },
    {
        id: 40,
        category: "Traduction",
        question: "Le train part à huit heures.",
        options: [
            "Der Zug fährt um acht Uhr ab.",
            "Um acht Uhr der Zug fährt ab.",
            "Der Zug um acht Uhr fährt ab.",
            "Abfährt der Zug um acht Uhr."
        ],
        correctAnswer: "A",
        explanation: "Verbe à particule séparable : particule en fin de phrase."
    },
    {
        id: 41,
        category: "Traduction",
        question: "Nous devons rentrer maintenant.",
        options: [
            "Wir müssen jetzt nach Hause gehen.",
            "Jetzt wir müssen nach Hause gehen.",
            "Wir jetzt müssen nach Hause gehen.",
            "Nach Hause müssen wir jetzt gehen."
        ],
        correctAnswer: "A",
        explanation: "Modal + adverbe + complément + infinitif."
    },
    {
        id: 42,
        category: "Traduction",
        question: "Elle a télé phoné à sa mère.",
        options: [
            "Sie hat ihre Mutter angerufen.",
            "Ihre Mutter sie hat angerufen.",
            "Sie ihre Mutter hat angerufen.",
            "Angerufen hat sie ihre Mutter."
        ],
        correctAnswer: "A",
        explanation: "Verbe à particule au passé composé."
    },
    {
        id: 43,
        category: "Traduction",
        question: "Où sont mes clés ?",
        options: [
            "Wo sind meine Schlüssel?",
            "Meine Schlüssel wo sind?",
            "Sind wo meine Schlüssel?",
            "Wo meine Schlüssel sind?"
        ],
        correctAnswer: "A",
        explanation: "Question avec 'wo' + verbe + sujet."
    },
    {
        id: 44,
        category: "Traduction",
        question: "Il a beaucoup d'amis.",
        options: [
            "Er hat viele Freunde.",
            "Viele Freunde er hat.",
            "Er viele Freunde hat.",
            "Hat er viele Freunde."
        ],
        correctAnswer: "A",
        explanation: "Expression de quantité à l'accusatif."
    },
    {
        id: 45,
        category: "Traduction",
        question: "Je n'ai rien mangé.",
        options: [
            "Ich habe nichts gegessen.",
            "Nichts ich habe gegessen.",
            "Ich nichts habe gegessen.",
            "Gegessen habe ich nichts."
        ],
        correctAnswer: "A",
        explanation: "Négation totale avec 'nichts'."
    },
    {
        id: 46,
        category: "Traduction",
        question: "Ferme la fenêtre, s'il te plaît.",
        options: [
            "Mach bitte das Fenster zu.",
            "Das Fenster mach bitte zu.",
            "Bitte das Fenster mach zu.",
            "Zu mach bitte das Fenster."
        ],
        correctAnswer: "A",
        explanation: "Impératif avec verbe à particule séparable."
    },
    {
        id: 47,
        category: "Traduction",
        question: "Nous sommes allés au parc.",
        options: [
            "Wir sind in den Park gegangen.",
            "In den Park wir sind gegangen.",
            "Wir in den Park sind gegangen.",
            "Gegangen sind wir in den Park."
        ],
        correctAnswer: "A",
        explanation: "Verbe de mouvement avec 'sein' + accusatif (direction)."
    },
    {
        id: 48,
        category: "Traduction",
        question: "Pourquoi es-tu en retard ?",
        options: [
            "Warum bist du spät?",
            "Du bist warum spät?",
            "Warum du bist spät?",
            "Spät bist du warum?"
        ],
        correctAnswer: "A",
        explanation: "Question avec 'warum' + verbe + sujet."
    },
    {
        id: 49,
        category: "Traduction",
        question: "J'ai trouvé ton livre.",
        options: [
            "Ich habe dein Buch gefunden.",
            "Dein Buch ich habe gefunden.",
            "Ich dein Buch habe gefunden.",
            "Gefunden habe ich dein Buch."
        ],
        correctAnswer: "A",
        explanation: "Passé composé avec accusatif."
    },
    {
        id: 50,
        category: "Traduction",
        question: "Elle doit partir demain.",
        options: [
            "Sie muss morgen abfahren.",
            "Morgen sie muss abfahren.",
            "Sie morgen muss abfahren.",
            "Abfahren muss sie morgen."
        ],
        correctAnswer: "A",
        explanation: "Modal + adverbe temporel + infinitif avec particule séparable."
    },

    // ORDRE DES MOTS (Questions 51-100)
    {
        id: 51,
        category: "Ordre des mots",
        question: "Florian arbeitet in einem Büro in Hamburg.",
        options: [
            "Arbeitet Florian in einem Büro in Hamburg?",
            "In einem Büro in Hamburg arbeitet Florian.",
            "Florian arbeitet in einem Büro in Hamburg.",
            "In einem Büro Florian in Hamburg arbeitet."
        ],
        correctAnswer: "C",
        explanation: "Phrase déclarative standard : Sujet + Verbe + Compléments."
    },
    {
        id: 52,
        category: "Ordre des mots",
        question: "Arbeitet Florian in einem Büro in Hamburg?",
        options: [
            "Florian arbeitet in einem Büro in Hamburg.",
            "Arbeitet Florian in einem Büro in Hamburg?",
            "In einem Büro in Hamburg Florian arbeitet.",
            "In einem Büro arbeitet Hamburg Florian."
        ],
        correctAnswer: "B",
        explanation: "Question totale : le verbe est en première position."
    },
    {
        id: 53,
        category: "Ordre des mots",
        question: "Florian arbeitet den ganzen Tag am Computer.",
        options: [
            "Den ganzen Tag am Computer Florian arbeitet.",
            "Florian den ganzen Tag am Computer arbeitet.",
            "Florian arbeitet den ganzen Tag am Computer.",
            "Am Computer arbeitet den ganzen Tag Florian."
        ],
        correctAnswer: "C",
        explanation: "Ordre standard : Sujet + Verbe + Accusatif (temps) + Datif (lieu)."
    },
    {
        id: 54,
        category: "Ordre des mots",
        question: "Den ganzen Tag arbeitet Florian am Computer.",
        options: [
            "Florian arbeitet den ganzen Tag am Computer.",
            "Den ganzen Tag arbeitet Florian am Computer.",
            "Am Computer den ganzen Tag arbeitet Florian.",
            "Den ganzen Tag Florian am Computer arbeitet."
        ],
        correctAnswer: "B",
        explanation: "Le complément de temps en première position entraîne l'inversion : Temps + Verbe + Sujet."
    },
    {
        id: 55,
        category: "Ordre des mots",
        question: "Am Computer arbeitet Florian den ganzen Tag.",
        options: [
            "Florian arbeitet den ganzen Tag am Computer.",
            "Den ganzen Tag arbeitet Florian am Computer.",
            "Am Computer arbeitet Florian den ganzen Tag.",
            "Den ganzen Tag Florian arbeitet am Computer."
        ],
        correctAnswer: "C",
        explanation: "Le complément de lieu en première position : Lieu + Verbe + Sujet + Temps."
    },
    {
        id: 56,
        category: "Ordre des mots",
        question: "Am Wochenende arbeitet Florian selten.",
        options: [
            "Florian arbeitet am Wochenende selten.",
            "Am Wochenende arbeitet Florian selten.",
            "Selten arbeitet Florian am Wochenende.",
            "Florian selten am Wochenende arbeitet."
        ],
        correctAnswer: "B",
        explanation: "Temps en première position : Am Wochenende + Verbe + Sujet + Adverbe."
    },
    {
        id: 57,
        category: "Ordre des mots",
        question: "Florian arbeitet selten am Wochenende.",
        options: [
            "Am Wochenende arbeitet Florian selten.",
            "Florian arbeitet selten am Wochenende.",
            "Selten Florian am Wochenende arbeitet.",
            "Selten arbeitet Florian am Wochenende."
        ],
        correctAnswer: "B",
        explanation: "Ordre standard avec adverbe après le verbe."
    },
    {
        id: 58,
        category: "Ordre des mots",
        question: "Selten arbeitet Florian am Wochenende.",
        options: [
            "Florian arbeitet selten am Wochenende.",
            "Am Wochenende arbeitet Florian selten.",
            "Selten arbeitet Florian am Wochenende.",
            "Florian am Wochenende selten arbeitet."
        ],
        correctAnswer: "C",
        explanation: "Adverbe en première position avec inversion."
    },
    {
        id: 59,
        category: "Ordre des mots",
        question: "Heute arbeitet Florian an einem neuen Projekt.",
        options: [
            "An einem neuen Projekt arbeitet Florian heute.",
            "Florian arbeitet heute an einem neuen Projekt.",
            "Heute Florian an einem neuen Projekt arbeitet.",
            "Heute arbeitet ein neues Projekt Florian."
        ],
        correctAnswer: "B",
        explanation: "Bien que 'heute' soit en tête, la réponse attendue est la forme sans inversion."
    },
    {
        id: 60,
        category: "Ordre des mots",
        question: "An einem neuen Projekt arbeitet Florian heute.",
        options: [
            "Florian arbeitet an einem neuen Projekt heute.",
            "Heute arbeitet Florian an einem neuen Projekt.",
            "An einem neuen Projekt arbeitet Florian heute.",
            "Ein neues Projekt arbeitet heute Florian."
        ],
        correctAnswer: "C",
        explanation: "Complément prépositionnel en première position avec inversion."
    },
    {
        id: 61,
        category: "Ordre des mots",
        question: "Florian arbeitet heute an einem neuen Projekt.",
        options: [
            "Heute arbeitet Florian an einem neuen Projekt.",
            "An einem neuen Projekt heute Florian arbeitet.",
            "Florian heute an einem neuen Projekt arbeitet.",
            "Florian arbeitet an einem neuen Projekt heute."
        ],
        correctAnswer: "A",
        explanation: "La phrase de base se transforme en mettant l'adverbe temporel en tête avec inversion."
    },
    {
        id: 62,
        category: "Ordre des mots",
        question: "Ich gehe morgen ins Kino.",
        options: [
            "Morgen gehe ich ins Kino.",
            "Ins Kino ich gehe morgen.",
            "Ich morgen ins Kino gehe.",
            "Gehe ich morgen ins Kino."
        ],
        correctAnswer: "A",
        explanation: "L'adverbe temporel en première position entraîne l'inversion : Morgen + gehe + ich."
    },
    {
        id: 63,
        category: "Ordre des mots",
        question: "Morgen gehe ich ins Kino.",
        options: [
            "Ich gehe morgen ins Kino.",
            "Ins Kino gehe ich morgen.",
            "Morgen gehe ich ins Kino.",
            "Ich morgen gehe ins Kino."
        ],
        correctAnswer: "C",
        explanation: "Structure correcte avec inversion : Temps + Verbe + Sujet + Lieu."
    },
    {
        id: 64,
        category: "Ordre des mots",
        question: "Sie hat gestern einen Brief geschrieben.",
        options: [
            "Gestern hat sie einen Brief geschrieben.",
            "Einen Brief hat sie gestern geschrieben.",
            "Sie gestern hat einen Brief geschrieben.",
            "Geschrieben hat sie gestern einen Brief."
        ],
        correctAnswer: "A",
        explanation: "Avec inversion temporelle au passé composé."
    },
    {
        id: 65,
        category: "Ordre des mots",
        question: "Wir fahren am Wochenende nach Berlin.",
        options: [
            "Am Wochenende fahren wir nach Berlin.",
            "Nach Berlin wir fahren am Wochenende.",
            "Wir am Wochenende nach Berlin fahren.",
            "Fahren wir am Wochenende nach Berlin?"
        ],
        correctAnswer: "A",
        explanation: "Temps en première position avec inversion."
    },
    {
        id: 66,
        category: "Ordre des mots",
        question: "Er kauft im Supermarkt frisches Obst.",
        options: [
            "Im Supermarkt kauft er frisches Obst.",
            "Frisches Obst kauft er im Supermarkt.",
            "Er im Supermarkt frisches Obst kauft.",
            "Kauft er im Supermarkt frisches Obst?"
        ],
        correctAnswer: "A",
        explanation: "Complément de lieu en tête avec inversion."
    },
    {
        id: 67,
        category: "Ordre des mots",
        question: "Die Kinder spielen im Garten.",
        options: [
            "Im Garten spielen die Kinder.",
            "Spielen die Kinder im Garten?",
            "Die Kinder im Garten spielen.",
            "Im Garten die Kinder spielen."
        ],
        correctAnswer: "A",
        explanation: "Lieu en tête entraîne l'inversion."
    },
    {
        id: 68,
        category: "Ordre des mots",
        question: "Ich muss heute viel arbeiten.",
        options: [
            "Heute muss ich viel arbeiten.",
            "Viel muss ich heute arbeiten.",
            "Ich heute muss viel arbeiten.",
            "Arbeiten muss ich heute viel."
        ],
        correctAnswer: "A",
        explanation: "Adverbe temporel en tête avec modal."
    },
    {
        id: 69,
        category: "Ordre des mots",
        question: "Sie will nächstes Jahr in Deutschland studieren.",
        options: [
            "Nächstes Jahr will sie in Deutschland studieren.",
            "In Deutschland will sie nächstes Jahr studieren.",
            "Sie nächstes Jahr will in Deutschland studieren.",
            "Studieren will sie nächstes Jahr in Deutschland."
        ],
        correctAnswer: "A",
        explanation: "Complément de temps en première position."
    },
    {
        id: 70,
        category: "Ordre des mots",
        question: "Wir haben letzten Sommer eine Reise nach Italien gemacht.",
        options: [
            "Letzten Sommer haben wir eine Reise nach Italien gemacht.",
            "Eine Reise nach Italien haben wir letzten Sommer gemacht.",
            "Wir letzten Sommer haben eine Reise nach Italien gemacht.",
            "Gemacht haben wir letzten Sommer eine Reise nach Italien."
        ],
        correctAnswer: "A",
        explanation: "Temps en tête au passé composé."
    },
    {
        id: 71,
        category: "Ordre des mots",
        question: "Der Student liest jeden Abend ein Buch.",
        options: [
            "Jeden Abend liest der Student ein Buch.",
            "Ein Buch liest der Student jeden Abend.",
            "Der Student jeden Abend ein Buch liest.",
            "Liest der Student jeden Abend ein Buch?"
        ],
        correctAnswer: "A",
        explanation: "Adverbe de temps en tête."
    },
    {
        id: 72,
        category: "Ordre des mots",
        question: "Ich gebe meinem Freund das Buch.",
        options: [
            "Meinem Freund gebe ich das Buch.",
            "Das Buch gebe ich meinem Freund.",
            "Ich meinem Freund das Buch gebe.",
            "Gebe ich meinem Freund das Buch?"
        ],
        correctAnswer: "A",
        explanation: "Datif en première position avec inversion."
    },
    {
        id: 73,
        category: "Ordre des mots",
        question: "Sie kommt aus der Schule nach Hause.",
        options: [
            "Aus der Schule kommt sie nach Hause.",
            "Nach Hause kommt sie aus der Schule.",
            "Sie aus der Schule nach Hause kommt.",
            "Kommt sie aus der Schule nach Hause?"
        ],
        correctAnswer: "A",
        explanation: "Provenance en première position."
    },
    {
        id: 74,
        category: "Ordre des mots",
        question: "Wir treffen uns um 18 Uhr vor dem Kino.",
        options: [
            "Um 18 Uhr treffen wir uns vor dem Kino.",
            "Vor dem Kino treffen wir uns um 18 Uhr.",
            "Wir um 18 Uhr uns vor dem Kino treffen.",
            "Treffen wir uns um 18 Uhr vor dem Kino?"
        ],
        correctAnswer: "A",
        explanation: "Heure en première position."
    },
    {
        id: 75,
        category: "Ordre des mots",
        question: "Er hat seiner Mutter ein Geschenk gekauft.",
        options: [
            "Seiner Mutter hat er ein Geschenk gekauft.",
            "Ein Geschenk hat er seiner Mutter gekauft.",
            "Er seiner Mutter hat ein Geschenk gekauft.",
            "Gekauft hat er seiner Mutter ein Geschenk."
        ],
        correctAnswer: "A",
        explanation: "Datif en tête au passé composé."
    },
    {
        id: 76,
        category: "Ordre des mots",
        question: "Die Lehrerin erklärt den Schülern die Aufgabe.",
        options: [
            "Den Schülern erklärt die Lehrerin die Aufgabe.",
            "Die Aufgabe erklärt die Lehrerin den Schülern.",
            "Die Lehrerin den Schülern die Aufgabe erklärt.",
            "Erklärt die Lehrerin den Schülern die Aufgabe?"
        ],
        correctAnswer: "A",
        explanation: "Datif (den Schülern) en première position."
    },
    {
        id: 77,
        category: "Ordre des mots",
        question: "Ich bin gestern sehr früh aufgestanden.",
        options: [
            "Gestern bin ich sehr früh aufgestanden.",
            "Sehr früh bin ich gestern aufgestanden.",
            "Ich gestern bin sehr früh aufgestanden.",
            "Aufgestanden bin ich gestern sehr früh."
        ],
        correctAnswer: "A",
        explanation: "Temps en première position avec verbe séparable."
    },
    {
        id: 78,
        category: "Ordre des mots",
        question: "Sie ruft ihre Freundin jeden Tag an.",
        options: [
            "Jeden Tag ruft sie ihre Freundin an.",
            "Ihre Freundin ruft sie jeden Tag an.",
            "Sie jeden Tag ihre Freundin anruft.",
            "Anruft sie ihre Freundin jeden Tag."
        ],
        correctAnswer: "A",
        explanation: "Temps en tête avec verbe à particule."
    },
    {
        id: 79,
        category: "Ordre des mots",
        question: "Wir sind mit dem Zug nach München gefahren.",
        options: [
            "Mit dem Zug sind wir nach München gefahren.",
            "Nach München sind wir mit dem Zug gefahren.",
            "Wir mit dem Zug sind nach München gefahren.",
            "Gefahren sind wir mit dem Zug nach München."
        ],
        correctAnswer: "A",
        explanation: "Moyen de transport en première position."
    },
    {
        id: 80,
        category: "Ordre des mots",
        question: "Er gibt dem Kind einen Apfel.",
        options: [
            "Dem Kind gibt er einen Apfel.",
            "Einen Apfel gibt er dem Kind.",
            "Er dem Kind einen Apfel gibt.",
            "Gibt er dem Kind einen Apfel?"
        ],
        correctAnswer: "A",
        explanation: "Datif en tête (dem Kind)."
    },
    {
        id: 81,
        category: "Ordre des mots",
        question: "Ich habe vorgestern meinen Onkel besucht.",
        options: [
            "Vorgestern habe ich meinen Onkel besucht.",
            "Meinen Onkel habe ich vorgestern besucht.",
            "Ich vorgestern habe meinen Onkel besucht.",
            "Besucht habe ich vorgestern meinen Onkel."
        ],
        correctAnswer: "A",
        explanation: "Adverbe de temps en première position."
    },
    {
        id: 82,
        category: "Ordre des mots",
        question: "Sie lernt seit zwei Jahren Deutsch.",
        options: [
            "Seit zwei Jahren lernt sie Deutsch.",
            "Deutsch lernt sie seit zwei Jahren.",
            "Sie seit zwei Jahren Deutsch lernt.",
            "Lernt sie seit zwei Jahren Deutsch?"
        ],
        correctAnswer: "A",
        explanation: "Durée en première position."
    },
    {
        id: 83,
        category: "Ordre des mots",
        question: "Wir gehen oft in dieses Restaurant.",
        options: [
            "Oft gehen wir in dieses Restaurant.",
            "In dieses Restaurant gehen wir oft.",
            "Wir oft in dieses Restaurant gehen.",
            "Gehen wir oft in dieses Restaurant?"
        ],
        correctAnswer: "A",
        explanation: "Adverbe de fréquence en tête."
    },
    {
        id: 84,
        category: "Ordre des mots",
        question: "Er hat mir gestern geholfen.",
        options: [
            "Gestern hat er mir geholfen.",
            "Mir hat er gestern geholfen.",
            "Er mir hat gestern geholfen.",
            "Geholfen hat er mir gestern."
        ],
        correctAnswer: "A",
        explanation: "Temps en première position au passé composé."
    },
    {
        id: 85,
        category: "Ordre des mots",
        question: "Die Touristen besichtigen heute das Museum.",
        options: [
            "Heute besichtigen die Touristen das Museum.",
            "Das Museum besichtigen die Touristen heute.",
            "Die Touristen heute das Museum besichtigen.",
            "Besichtigen die Touristen heute das Museum?"
        ],
        correctAnswer: "A",
        explanation: "Adverbe temporel en tête."
    },
    {
        id: 86,
        category: "Ordre des mots",
        question: "Ich schreibe meiner Oma einen Brief.",
        options: [
            "Meiner Oma schreibe ich einen Brief.",
            "Einen Brief schreibe ich meiner Oma.",
            "Ich meiner Oma einen Brief schreibe.",
            "Schreibe ich meiner Oma einen Brief?"
        ],
        correctAnswer: "A",
        explanation: "Datif en première position."
    },
    {
        id: 87,
        category: "Ordre des mots",
        question: "Sie will nächstes Jahr heiraten.",
        options: [
            "Nächstes Jahr will sie heiraten.",
            "Heiraten will sie nächstes Jahr.",
            "Sie nächstes Jahr will heiraten.",
            "Will sie nächstes Jahr heiraten?"
        ],
        correctAnswer: "A",
        explanation: "Temps en tête avec modal."
    },
    {
        id: 88,
        category: "Ordre des mots",
        question: "Wir haben im Park viele Leute getroffen.",
        options: [
            "Im Park haben wir viele Leute getroffen.",
            "Viele Leute haben wir im Park getroffen.",
            "Wir im Park haben viele Leute getroffen.",
            "Getroffen haben wir im Park viele Leute."
        ],
        correctAnswer: "A",
        explanation: "Lieu en première position au passé composé."
    },
    {
        id: 89,
        category: "Ordre des mots",
        question: "Er fährt jeden Morgen mit dem Bus zur Arbeit.",
        options: [
            "Jeden Morgen fährt er mit dem Bus zur Arbeit.",
            "Mit dem Bus fährt er jeden Morgen zur Arbeit.",
            "Er jeden Morgen mit dem Bus zur Arbeit fährt.",
            "Fährt er jeden Morgen mit dem Bus zur Arbeit?"
        ],
        correctAnswer: "A",
        explanation: "Fréquence temporelle en tête."
    },
    {
        id: 90,
        category: "Ordre des mots",
        question: "Sie hat ihrem Bruder das Auto geliehen.",
        options: [
            "Ihrem Bruder hat sie das Auto geliehen.",
            "Das Auto hat sie ihrem Bruder geliehen.",
            "Sie ihrem Bruder hat das Auto geliehen.",
            "Geliehen hat sie ihrem Bruder das Auto."
        ],
        correctAnswer: "A",
        explanation: "Datif en première position au passé composé."
    },
    {
        id: 91,
        category: "Ordre des mots",
        question: "Ich muss morgen früh aufstehen.",
        options: [
            "Morgen muss ich früh aufstehen.",
            "Früh muss ich morgen aufstehen.",
            "Ich morgen muss früh aufstehen.",
            "Aufstehen muss ich morgen früh."
        ],
        correctAnswer: "A",
        explanation: "Temps en tête avec modal et verbe séparable."
    },
    {
        id: 92,
        category: "Ordre des mots",
        question: "Wir gehen am Abend spazieren.",
        options: [
            "Am Abend gehen wir spazieren.",
            "Spazieren gehen wir am Abend.",
            "Wir am Abend spazieren gehen.",
            "Gehen wir am Abend spazieren?"
        ],
        correctAnswer: "A",
        explanation: "Moment de la journée en première position."
    },
    {
        id: 93,
        category: "Ordre des mots",
        question: "Er zeigt den Gästen das Haus.",
        options: [
            "Den Gästen zeigt er das Haus.",
            "Das Haus zeigt er den Gästen.",
            "Er den Gästen das Haus zeigt.",
            "Zeigt er den Gästen das Haus?"
        ],
        correctAnswer: "A",
        explanation: "Datif (den Gästen) en tête."
    },
    {
        id: 94,
        category: "Ordre des mots",
        question: "Sie ist vor einer Stunde angekommen.",
        options: [
            "Vor einer Stunde ist sie angekommen.",
            "Angekommen ist sie vor einer Stunde.",
            "Sie vor einer Stunde ist angekommen.",
            "Ist sie vor einer Stunde angekommen?"
        ],
        correctAnswer: "A",
        explanation: "Indication temporelle en tête."
    },
    {
        id: 95,
        category: "Ordre des mots",
        question: "Ich erzähle dir später die ganze Geschichte.",
        options: [
            "Später erzähle ich dir die ganze Geschichte.",
            "Dir erzähle ich später die ganze Geschichte.",
            "Ich dir später die ganze Geschichte erzähle.",
            "Erzähle ich dir später die ganze Geschichte?"
        ],
        correctAnswer: "A",
        explanation: "Adverbe temporel en première position."
    },
    {
        id: 96,
        category: "Ordre des mots",
        question: "Wir haben letztes Jahr ein Haus gekauft.",
        options: [
            "Letztes Jahr haben wir ein Haus gekauft.",
            "Ein Haus haben wir letztes Jahr gekauft.",
            "Wir letztes Jahr haben ein Haus gekauft.",
            "Gekauft haben wir letztes Jahr ein Haus."
        ],
        correctAnswer: "A",
        explanation: "Indication d'année en tête."
    },
    {
        id: 97,
        category: "Ordre des mots",
        question: "Er bringt seiner Frau jeden Tag Blumen mit.",
        options: [
            "Jeden Tag bringt er seiner Frau Blumen mit.",
            "Seiner Frau bringt er jeden Tag Blumen mit.",
            "Er jeden Tag seiner Frau Blumen mitbringt.",
            "Mitbringt er seiner Frau jeden Tag Blumen."
        ],
        correctAnswer: "A",
        explanation: "Fréquence en tête avec verbe à particule."
    },
    {
        id: 98,
        category: "Ordre des mots",
        question: "Sie können morgen zu uns kommen.",
        options: [
            "Morgen können sie zu uns kommen.",
            "Zu uns können sie morgen kommen.",
            "Sie morgen können zu uns kommen.",
            "Kommen können sie morgen zu uns."
        ],
        correctAnswer: "A",
        explanation: "Temps en tête avec modal."
    },
    {
        id: 99,
        category: "Ordre des mots",
        question: "Ich habe gestern Abend einen Film gesehen.",
        options: [
            "Gestern Abend habe ich einen Film gesehen.",
            "Einen Film habe ich gestern Abend gesehen.",
            "Ich gestern Abend habe einen Film gesehen.",
            "Gesehen habe ich gestern Abend einen Film."
        ],
        correctAnswer: "A",
        explanation: "Moment précis en première position."
    },
    {
        id: 100,
        category: "Ordre des mots",
        question: "Wir fahren im Sommer nach Spanien.",
        options: [
            "Im Sommer fahren wir nach Spanien.",
            "Nach Spanien fahren wir im Sommer.",
            "Wir im Sommer nach Spanien fahren.",
            "Fahren wir im Sommer nach Spanien?"
        ],
        correctAnswer: "A",
        explanation: "Saison en première position."
    },

    // MODAUX (Questions 101-150)
    {
        id: 101,
        category: "Modaux",
        question: "Du hast doch keinen Führerschein, also [___] du das Auto deines Vaters nicht fahren!",
        options: ["können", "müssen", "wollen", "darfst"],
        correctAnswer: "D",
        explanation: "'darfst' (ne pas être autorisé) est le bon choix car il s'agit d'une interdiction."
    },
    {
        id: 102,
        category: "Modaux",
        question: "Max [___] unbedingt Automechaniker werden: Autos sind seine Leidenschaft.",
        options: ["dürfen", "will", "müssen", "können"],
        correctAnswer: "B",
        explanation: "'will' exprime le désir/la volonté de Max de devenir mécanicien."
    },
    {
        id: 103,
        category: "Modaux",
        question: "Leute, die wir nicht [___], sind uns egal.",
        options: ["können", "dürfen", "mögen", "müssen"],
        correctAnswer: "C",
        explanation: "'mögen' signifie aimer/apprécier quelqu'un."
    },
    {
        id: 104,
        category: "Modaux",
        question: "Morgen [___] das Wetter schön sein: lass uns eine Fahrradtour machen!",
        options: ["können", "soll", "dürfen", "wollen"],
        correctAnswer: "B",
        explanation: "'soll' indique une prévision/probabilité."
    },
    {
        id: 105,
        category: "Modaux",
        question: "Die Schüler [___] täglich ihre Hausaufgaben machen.",
        options: ["dürfen", "können", "müssen", "wollen"],
        correctAnswer: "C",
        explanation: "'müssen' exprime l'obligation."
    },
    {
        id: 106,
        category: "Modaux",
        question: "[___] ihr wirklich diese Prüfung ablegen? Ja, es ist Pflicht.",
        options: ["Dürfen", "Können", "Müssen", "Wollen"],
        correctAnswer: "C",
        explanation: "'Müssen' car c'est obligatoire (Pflicht)."
    },
    {
        id: 107,
        category: "Modaux",
        question: "Am Samstag [___] die Kinder länger fernsehen.",
        options: ["dürfen", "müssen", "sollen", "wollen"],
        correctAnswer: "A",
        explanation: "'dürfen' exprime la permission."
    },
    {
        id: 108,
        category: "Modaux",
        question: "[___] du überhaupt Deutsch?",
        options: ["Müssen", "Wollen", "Können", "Sollen"],
        correctAnswer: "C",
        explanation: "'Können' pour exprimer la capacité de parler allemand."
    },
    {
        id: 109,
        category: "Modaux",
        question: "Karl hatte gestern einen Schnupfen; jetzt [___] er auch noch Ohrenschmerzen haben...",
        options: ["dürfen", "soll", "wollen", "können"],
        correctAnswer: "B",
        explanation: "'soll' exprime la probabilité/supposition."
    },
    {
        id: 110,
        category: "Modaux",
        question: "[___] ihr diesen Film?",
        options: ["Dürfen", "Sollen", "Können", "Mögt"],
        correctAnswer: "D",
        explanation: "'Mögt' pour demander si on aime le film."
    },
    {
        id: 111,
        category: "Modaux",
        question: "Die Kinder [___] nicht so viel Schokolade essen.",
        options: ["sollen", "mögen", "wollen", "können"],
        correctAnswer: "A",
        explanation: "'sollen' exprime une recommandation ou un conseil."
    },
    {
        id: 112,
        category: "Modaux",
        question: "[___] ich hier rauchen?",
        options: ["Muss", "Darf", "Soll", "Mag"],
        correctAnswer: "B",
        explanation: "'Darf' pour demander la permission."
    },
    {
        id: 113,
        category: "Modaux",
        question: "Wir [___] pünktlich zur Schule kommen.",
        options: ["wollen", "mögen", "müssen", "dürfen"],
        correctAnswer: "C",
        explanation: "'müssen' exprime l'obligation."
    },
    {
        id: 114,
        category: "Modaux",
        question: "Er [___] sehr gut Klavier spielen.",
        options: ["muss", "darf", "kann", "soll"],
        correctAnswer: "C",
        explanation: "'kann' exprime la capacité, le savoir-faire."
    },
    {
        id: 115,
        category: "Modaux",
        question: "[___] Sie mir bitte helfen?",
        options: ["Müssen", "Können", "Sollen", "Wollen"],
        correctAnswer: "B",
        explanation: "'Können Sie' est la formule polie pour demander de l'aide."
    },
    {
        id: 116,
        category: "Modaux",
        question: "Ich [___] heute nicht zur Arbeit gehen, ich bin krank.",
        options: ["will", "soll", "kann", "mag"],
        correctAnswer: "C",
        explanation: "'kann nicht' exprime l'impossibilité due à la maladie."
    },
    {
        id: 117,
        category: "Modaux",
        question: "Du [___] dir die Hände waschen vor dem Essen.",
        options: ["kannst", "darfst", "sollst", "magst"],
        correctAnswer: "C",
        explanation: "'sollst' pour une recommandation parentale."
    },
    {
        id: 118,
        category: "Modaux",
        question: "[___] du mir dein Fahrrad leihen?",
        options: ["Musst", "Darfst", "Kannst", "Sollst"],
        correctAnswer: "C",
        explanation: "'Kannst du' pour demander un service."
    },
    {
        id: 119,
        category: "Modaux",
        question: "Sie [___] Gemüse nicht, sie isst nur Fleisch.",
        options: ["kann", "mag", "will", "darf"],
        correctAnswer: "B",
        explanation: "'mag nicht' pour exprimer un dégoût alimentaire."
    },
    {
        id: 120,
        category: "Modaux",
        question: "Wir [___] morgen früh aufstehen, der Zug fährt um 6 Uhr.",
        options: ["wollen", "können", "müssen", "mögen"],
        correctAnswer: "C",
        explanation: "'müssen' car c'est obligatoire pour attraper le train."
    },
    {
        id: 121,
        category: "Modaux",
        question: "Man [___] hier nicht parken, es ist verboten.",
        options: ["kann", "darf", "soll", "muss"],
        correctAnswer: "B",
        explanation: "'darf nicht' pour une interdiction."
    },
    {
        id: 122,
        category: "Modaux",
        question: "[___] ich Ihnen etwas zu trinken anbieten?",
        options: ["Muss", "Darf", "Soll", "Mag"],
        correctAnswer: "B",
        explanation: "'Darf ich' pour proposer quelque chose poliment."
    },
    {
        id: 123,
        category: "Modaux",
        question: "Er [___] nicht schwimmen, er hat Angst vor Wasser.",
        options: ["will", "kann", "darf", "soll"],
        correctAnswer: "B",
        explanation: "'kann nicht' pour exprimer l'incapacité."
    },
    {
        id: 124,
        category: "Modaux",
        question: "Ihr [___] eure Hausaufgaben machen, bevor ihr spielt.",
        options: ["könnt", "wollt", "müsst", "dürft"],
        correctAnswer: "C",
        explanation: "'müsst' pour une obligation."
    },
    {
        id: 125,
        category: "Modaux",
        question: "[___] du Pizza oder lieber Pasta?",
        options: ["Kannst", "Musst", "Magst", "Darfst"],
        correctAnswer: "C",
        explanation: "'Magst du' pour demander les préférences."
    },
    {
        id: 126,
        category: "Modaux",
        question: "Die Schüler [___] in der Bibliothek leise sein.",
        options: ["können", "wollen", "sollen", "mögen"],
        correctAnswer: "C",
        explanation: "'sollen' pour une règle à suivre."
    },
    {
        id: 127,
        category: "Modaux",
        question: "Ich [___] heute Abend ins Kino gehen.",
        options: ["mag", "muss", "möchte", "darf"],
        correctAnswer: "C",
        explanation: "'möchte' exprime un souhait poli."
    },
    {
        id: 128,
        category: "Modaux",
        question: "[___] Sie Deutsch sprechen?",
        options: ["Müssen", "Können", "Sollen", "Mögen"],
        correctAnswer: "B",
        explanation: "'Können Sie' pour demander une capacité."
    },
    {
        id: 129,
        category: "Modaux",
        question: "Wir [___] nicht zu spät kommen, das ist unhöflich.",
        options: ["können", "wollen", "dürfen", "mögen"],
        correctAnswer: "C",
        explanation: "'dürfen nicht' car c'est une règle de politesse."
    },
    {
        id: 130,
        category: "Modaux",
        question: "Du [___] den Arzt anrufen, du siehst sehr krank aus.",
        options: ["kannst", "musst", "solltest", "darfst"],
        correctAnswer: "C",
        explanation: "'solltest' (conditionnel de sollen) pour un conseil appuyé."
    },
    {
        id: 131,
        category: "Modaux",
        question: "[___] ihr uns morgen besuchen kommen?",
        options: ["Müsst", "Könnt", "Sollt", "Mögt"],
        correctAnswer: "B",
        explanation: "'Könnt ihr' pour une invitation."
    },
    {
        id: 132,
        category: "Modaux",
        question: "Sie [___] mehr Sport treiben, sagt der Arzt.",
        options: ["kann", "will", "soll", "mag"],
        correctAnswer: "C",
        explanation: "'soll' pour une recommandation médicale."
    },
    {
        id: 133,
        category: "Modaux",
        question: "Ich [___] nicht lügen, das ist gegen meine Prinzipien.",
        options: ["kann", "will", "darf", "soll"],
        correctAnswer: "B",
        explanation: "'will nicht' exprime un refus personnel."
    },
    {
        id: 134,
        category: "Modaux",
        question: "[___] du mir das Salz reichen?",
        options: ["Musst", "Kannst", "Sollst", "Magst"],
        correctAnswer: "B",
        explanation: "'Kannst du' pour une demande polie."
    },
    {
        id: 135,
        category: "Modaux",
        question: "Man [___] im Museum nicht fotografieren.",
        options: ["kann", "darf", "will", "soll"],
        correctAnswer: "B",
        explanation: "'darf nicht' pour une interdiction du musée."
    },
    {
        id: 136,
        category: "Modaux",
        question: "Wir [___] heute länger schlafen, es ist Sonntag!",
        options: ["müssen", "sollen", "dürfen", "mögen"],
        correctAnswer: "C",
        explanation: "'dürfen' pour exprimer la permission."
    },
    {
        id: 137,
        category: "Modaux",
        question: "Er [___] jeden Tag 10 Kilometer laufen.",
        options: ["darf", "soll", "kann", "mag"],
        correctAnswer: "C",
        explanation: "'kann' pour exprimer la capacité physique."
    },
    {
        id: 138,
        category: "Modaux",
        question: "[___] ich hier sitzen?",
        options: ["Muss", "Darf", "Soll", "Mag"],
        correctAnswer: "B",
        explanation: "'Darf ich' pour demander la permission."
    },
    {
        id: 139,
        category: "Modaux",
        question: "Die Kinder [___] nicht mit Feuer spielen.",
        options: ["können", "dürfen", "wollen", "mögen"],
        correctAnswer: "B",
        explanation: "'dürfen nicht' pour une interdiction de sécurité."
    },
    {
        id: 140,
        category: "Modaux",
        question: "Ich [___] diese Musik nicht, sie ist zu laut.",
        options: ["kann", "will", "mag", "darf"],
        correctAnswer: "C",
        explanation: "'mag nicht' pour exprimer un dégoût."
    },
    {
        id: 141,
        category: "Modaux",
        question: "[___] Sie bitte lauter sprechen?",
        options: ["Müssen", "Können", "Sollen", "Mögen"],
        correctAnswer: "B",
        explanation: "'Können Sie' pour une demande polie."
    },
    {
        id: 142,
        category: "Modaux",
        question: "Du [___] mehr Wasser trinken, es ist gesund.",
        options: ["kannst", "musst", "solltest", "darfst"],
        correctAnswer: "C",
        explanation: "'solltest' pour un conseil de santé."
    },
    {
        id: 143,
        category: "Modaux",
        question: "Wir [___] unbedingt diesen Film sehen!",
        options: ["können", "müssen", "dürfen", "mögen"],
        correctAnswer: "B",
        explanation: "'müssen' exprime une forte envie/nécessité."
    },
    {
        id: 144,
        category: "Modaux",
        question: "[___] du Schokolade oder Vanilleeis?",
        options: ["Kannst", "Musst", "Magst", "Darfst"],
        correctAnswer: "C",
        explanation: "'Magst du' pour demander une préférence."
    },
    {
        id: 145,
        category: "Modaux",
        question: "Sie [___] nicht so viel Geld ausgeben.",
        options: ["kann", "will", "soll", "mag"],
        correctAnswer: "C",
        explanation: "'soll nicht' pour un conseil financier."
    },
    {
        id: 146,
        category: "Modaux",
        question: "Ich [___] morgen nach Paris fliegen, ich habe ein Meeting.",
        options: ["mag", "will", "muss", "darf"],
        correctAnswer: "C",
        explanation: "'muss' car c'est une obligation professionnelle."
    },
    {
        id: 147,
        category: "Modaux",
        question: "[___] ihr schon gehen? Bleibt doch noch!",
        options: ["Müsst", "Könnt", "Sollt", "Mögt"],
        correctAnswer: "A",
        explanation: "'Müsst ihr' pour demander si c'est obligatoire."
    },
    {
        id: 148,
        category: "Modaux",
        question: "Man [___] im Flugzeug das Handy ausschalten.",
        options: ["kann", "muss", "will", "mag"],
        correctAnswer: "B",
        explanation: "'muss' pour une obligation de sécurité."
    },
    {
        id: 149,
        category: "Modaux",
        question: "Du [___] dir keine Sorgen machen, alles wird gut.",
        options: ["kannst", "musst", "sollst", "darfst"],
        correctAnswer: "C",
        explanation: "'sollst nicht' pour rassurer quelqu'un."
    },
    {
        id: 150,
        category: "Modaux",
        question: "[___] du heute Abend zu meiner Party kommen?",
        options: ["Musst", "Kannst", "Sollst", "Magst"],
        correctAnswer: "B",
        explanation: "'Kannst du' pour une invitation."
    },

    // DÉCLINAISONS (Questions 151-200)
    {
        id: 151,
        category: "Déclinaisons",
        question: "Die Katze schläft auf dem Sofa. (auf dem Sofa)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'auf' suivi du datif (dem) indique une position statique."
    },
    {
        id: 152,
        category: "Déclinaisons",
        question: "Der Junge liest ein Buch. (ein Buch)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'ein Buch' est le COD (accusatif) du verbe 'lesen'."
    },
    {
        id: 153,
        category: "Déclinaisons",
        question: "Das Geschenk ist für die Mutter. (die Mutter)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "La préposition 'für' est toujours suivie de l'accusatif."
    },
    {
        id: 154,
        category: "Déclinaisons",
        question: "Wir antworten auf die Frage. (die Frage)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'antworten auf' + accusatif."
    },
    {
        id: 155,
        category: "Déclinaisons",
        question: "Das Bild hängt an der Wand. (an der Wand)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'an' + datif pour une position statique (hängt)."
    },
    {
        id: 156,
        category: "Déclinaisons",
        question: "Sie denkt oft an ihren Freund. (an ihren Freund)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'denken an' + accusatif."
    },
    {
        id: 157,
        category: "Déclinaisons",
        question: "Der Brief liegt auf dem Tisch. (auf dem Tisch)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'auf' + datif pour une position statique (liegt)."
    },
    {
        id: 158,
        category: "Déclinaisons",
        question: "Er geht in die Schule. (in die Schule)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'in' + accusatif pour un mouvement/direction (geht)."
    },
    {
        id: 159,
        category: "Déclinaisons",
        question: "Das Auto gehört meinem Vater. (meinem Vater)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "Le verbe 'gehören' est toujours suivi du datif."
    },
    {
        id: 160,
        category: "Déclinaisons",
        question: "Sie freut sich auf das Wochenende. (auf das Wochenende)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'sich freuen auf' + accusatif."
    },
    {
        id: 161,
        category: "Déclinaisons",
        question: "Der Mantel hängt im Schrank. (im Schrank)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'in' + datif (im = in dem) pour une position statique."
    },
    {
        id: 162,
        category: "Déclinaisons",
        question: "Der Hund spielt mit dem Ball. (mit dem Ball)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "La préposition 'mit' est toujours suivie du datif."
    },
    {
        id: 163,
        category: "Déclinaisons",
        question: "Sie spricht über ihre Reise. (über ihre Reise)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "La préposition 'über' est toujours suivie de l'accusatif."
    },
    {
        id: 164,
        category: "Déclinaisons",
        question: "Der Artikel stammt aus der Zeitung. (aus der Zeitung)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "La préposition 'aus' est toujours suivie du datif."
    },
    {
        id: 165,
        category: "Déclinaisons",
        question: "Er wartet auf den Bus. (auf den Bus)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'warten auf' + accusatif."
    },
    {
        id: 166,
        category: "Déclinaisons",
        question: "Das Buch von meinem Bruder ist neu. (von meinem Bruder)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "D",
        explanation: "'von' + datif exprime la possession (alternative au génitif), mais ici on indique le génitif car c'est le sens possessif."
    },
    {
        id: 167,
        category: "Déclinaisons",
        question: "Wir hören die Musik der Nachbarn. (die Musik der Nachbarn)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'die Musik' est à l'accusatif (COD de hören)."
    },
    {
        id: 168,
        category: "Déclinaisons",
        question: "Die Kinder spielen neben dem Haus. (neben dem Haus)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'neben' + datif pour une position statique."
    },
    {
        id: 169,
        category: "Déclinaisons",
        question: "Ich interessiere mich für die Kunst. (für die Kunst)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'sich interessieren für' + accusatif."
    },
    {
        id: 170,
        category: "Déclinaisons",
        question: "Das Gespräch mit dem Lehrer war hilfreich. (mit dem Lehrer)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "La préposition 'mit' est toujours suivie du datif."
    },
    {
        id: 171,
        category: "Déclinaisons",
        question: "Ich fahre durch die Stadt. (durch die Stadt)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "La préposition 'durch' est toujours suivie de l'accusatif."
    },
    {
        id: 172,
        category: "Déclinaisons",
        question: "Er wohnt bei seinen Eltern. (bei seinen Eltern)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "La préposition 'bei' est toujours suivie du datif."
    },
    {
        id: 173,
        category: "Déclinaisons",
        question: "Wir gehen durch den Park. (durch den Park)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'durch' + accusatif."
    },
    {
        id: 174,
        category: "Déclinaisons",
        question: "Sie kommt aus dem Haus. (aus dem Haus)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'aus' + datif pour la provenance."
    },
    {
        id: 175,
        category: "Déclinaisons",
        question: "Das Buch meines Vaters ist interessant. (meines Vaters)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "D",
        explanation: "Génitif pour exprimer la possession."
    },
    {
        id: 176,
        category: "Déclinaisons",
        question: "Er läuft um das Haus. (um das Haus)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'um' + accusatif pour le mouvement autour."
    },
    {
        id: 177,
        category: "Déclinaisons",
        question: "Ich gehe zur Schule. (zur Schule)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'zu' + datif (zur = zu der)."
    },
    {
        id: 178,
        category: "Déclinaisons",
        question: "Das Auto fährt gegen die Mauer. (gegen die Mauer)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'gegen' + accusatif."
    },
    {
        id: 179,
        category: "Déclinaisons",
        question: "Wir sitzen zwischen den Stühlen. (zwischen den Stühlen)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'zwischen' + datif pour une position statique."
    },
    {
        id: 180,
        category: "Déclinaisons",
        question: "Er stellt die Lampe zwischen die Stühle. (zwischen die Stühle)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'zwischen' + accusatif pour un mouvement/direction."
    },
    {
        id: 181,
        category: "Déclinaisons",
        question: "Sie geht ohne ihren Bruder. (ohne ihren Bruder)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'ohne' + accusatif."
    },
    {
        id: 182,
        category: "Déclinaisons",
        question: "Das ist das Auto des Lehrers. (des Lehrers)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "D",
        explanation: "Génitif pour la possession."
    },
    {
        id: 183,
        category: "Déclinaisons",
        question: "Ich komme nach der Schule. (nach der Schule)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'nach' + datif pour le temps."
    },
    {
        id: 184,
        category: "Déclinaisons",
        question: "Er arbeitet während des Tages. (während des Tages)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "D",
        explanation: "'während' + génitif."
    },
    {
        id: 185,
        category: "Déclinaisons",
        question: "Sie geht trotz des Regens spazieren. (trotz des Regens)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "D",
        explanation: "'trotz' + génitif."
    },
    {
        id: 186,
        category: "Déclinaisons",
        question: "Wir fahren um den See. (um den See)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'um' + accusatif."
    },
    {
        id: 187,
        category: "Déclinaisons",
        question: "Das Haus steht hinter dem Baum. (hinter dem Baum)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'hinter' + datif pour une position."
    },
    {
        id: 188,
        category: "Déclinaisons",
        question: "Er geht hinter das Haus. (hinter das Haus)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'hinter' + accusatif pour un mouvement."
    },
    {
        id: 189,
        category: "Déclinaisons",
        question: "Ich bin seit einem Jahr hier. (seit einem Jahr)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'seit' + datif."
    },
    {
        id: 190,
        category: "Déclinaisons",
        question: "Wegen des Wetters bleiben wir zu Hause. (wegen des Wetters)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "D",
        explanation: "'wegen' + génitif."
    },
    {
        id: 191,
        category: "Déclinaisons",
        question: "Er läuft über die Brücke. (über die Brücke)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'über' + accusatif pour un mouvement."
    },
    {
        id: 192,
        category: "Déclinaisons",
        question: "Die Lampe hängt über dem Tisch. (über dem Tisch)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'über' + datif pour une position statique."
    },
    {
        id: 193,
        category: "Déclinaisons",
        question: "Sie antwortet auf meine Frage. (auf meine Frage)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'antworten auf' + accusatif."
    },
    {
        id: 194,
        category: "Déclinaisons",
        question: "Ich glaube an dich. (an dich)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'glauben an' + accusatif."
    },
    {
        id: 195,
        category: "Déclinaisons",
        question: "Er arbeitet für seine Familie. (für seine Familie)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'für' + accusatif."
    },
    {
        id: 196,
        category: "Déclinaisons",
        question: "Sie kommt zu ihrer Freundin. (zu ihrer Freundin)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'zu' + datif."
    },
    {
        id: 197,
        category: "Déclinaisons",
        question: "Wir sprechen über die Arbeit. (über die Arbeit)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "B",
        explanation: "'sprechen über' + accusatif."
    },
    {
        id: 198,
        category: "Déclinaisons",
        question: "Er hilft seinem Freund. (seinem Freund)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'helfen' + datif."
    },
    {
        id: 199,
        category: "Déclinaisons",
        question: "Das ist ein Geschenk von meiner Mutter. (von meiner Mutter)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'von' + datif (alternative au génitif)."
    },
    {
        id: 200,
        category: "Déclinaisons",
        question: "Ich träume von meinem Urlaub. (von meinem Urlaub)",
        options: ["Nominatif", "Accusatif", "Datif", "Génitif"],
        correctAnswer: "C",
        explanation: "'träumen von' + datif."
    }
];

// Fonction pour obtenir les questions par catégorie
export const getQuestionsByCategory = (category: string): Question[] => {
    return allemandSESAMEQuestions.filter(q => q.category === category);
};

// Fonction pour obtenir toutes les catégories
export const getCategories = (): string[] => {
    const categories = new Set(allemandSESAMEQuestions.map(q => q.category));
    return Array.from(categories);
};
