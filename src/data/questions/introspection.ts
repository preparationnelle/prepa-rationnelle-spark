
import { Question } from './types';

export const introspectionQuestions: Question[] = [
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
  },
  {
    id: "core-value",
    text: "Quelle est la valeur qui vous guide le plus ?",
    exampleAnswer: "La curiosité. Depuis le collège, je me fixe chaque année l'objectif d'apprendre une compétence en dehors du programme : montage vidéo, programmation Python, cuisine japonaise… Cette curiosité m'a permis de mieux comprendre les autres disciplines, de créer des passerelles entre elles et d'apporter des idées originales dans les projets d'équipe.",
    tips: "Choisissez UNE valeur centrale ; évitez les listes. Illustrez-la par un acte concret récurrent (pas un coup d'éclat isolé). Montrez l'impact : en quoi votre valeur a aidé d'autres personnes ou amélioré un résultat."
  },
  {
    id: "three-qualities",
    text: "Quelles sont vos trois principales qualités ?",
    exampleAnswer: "Persévérant – j'ai couru mon premier semi-marathon après six mois d'entraînement quotidien ; organisé – je gère un agenda Kanban pour équilibrer prépa et bénévolat ; empathique – j'anime chaque semaine un tutorat bénévole et sais adapter mes explications au niveau de l'élève.",
    tips: "2 – 3 qualités maximum. Associez chaque qualité à une preuve (chiffre, fait, anecdote). Variez les domaines : académique, extra-scolaire, social."
  },
  {
    id: "current-flaw",
    text: "Quel défaut travaillez-vous actuellement ?",
    exampleAnswer: "J'ai tendance à vouloir tout faire moi-même. Cette année, j'ai délégué la logistique d'un événement caritatif à un binôme ; ça m'a prouvé que la confiance et la clarté des rôles augmentent l'efficacité.",
    tips: "Sélectionnez un défaut non éliminatoire mais réel. Expliquez la stratégie de progrès déjà engagée. Montrez un résultat concret ou une amélioration mesurable."
  },
  {
    id: "stress-reaction",
    text: "Comment réagissez-vous au stress ?",
    exampleAnswer: "J'utilise la méthode 10-3-10 : 10 respirations profondes, 3 minutes pour lister mes priorités, puis 10 minutes pour attaquer la première tâche. Cette routine m'a permis de conserver un rythme régulier en période de concours blancs.",
    tips: "Décrivez une méthode précise (pas 'je gère bien'). Donnez un contexte réel : colle, compétition sportive, deadline. Soulignez l'effet mesurable : productivité, note, sérénité."
  },
  {
    id: "prep-school-learning",
    text: "Qu'avez-vous appris de plus utile en classe préparatoire ?",
    exampleAnswer: "La rigueur dans la formulation d'arguments : une idée = une phrase, une preuve chiffrée par argument. Cette discipline me sert autant en dissertation qu'en négociation associative.",
    tips: "Sortez du cliché 'capacité de travail' ; soyez spécifique. Reliez l'apprentissage à un bénéfice futur en école ou en entreprise."
  },
  {
    id: "group-convincing",
    text: "Décrivez une situation où vous avez dû convaincre un groupe.",
    exampleAnswer: "Au BDE, nous hésitions entre deux artistes pour la soirée de gala ; j'ai réalisé un mini-sondage auprès de 150 étudiants, présenté les résultats avec un budget comparatif et obtenu un vote quasi-unanime.",
    tips: "Structurez façon 'STAR' : Situation – Tâche – Action – Résultat. Soulignez vos outils de persuasion : données, écoute, compromis. Concluez sur le résultat quantifié (économie, satisfaction, etc.)."
  },
  {
    id: "friends-description",
    text: "Comment vos amis vous décriraient-ils en trois mots ?",
    exampleAnswer: "'Énergique', parce que je motive la team de volley à l'échauffement ; 'fiable', car on me confie la trésorerie de l'asso ; 'créatif', je trouve souvent des accroches originales pour nos posts Instagram.",
    tips: "Utilisez des sources externes (témoignages, responsabilités confiées). Montrez la cohérence avec les qualités que vous revendiquez vous-même."
  },
  {
    id: "recent-feedback",
    text: "Quel feedback (critique) avez-vous reçu récemment ? Qu'en avez-vous fait ?",
    exampleAnswer: "Mon tuteur de stage m'a reproché des slides trop denses. J'ai suivi un MOOC sur le visual storytelling, refait le template en hiérarchisant titres et graphiques ; au brief suivant, le taux de validation est passé de 60 % à 90 %.",
    tips: "Choisissez un feedback récent et concret (pas un souvenir vague). Décrivez la mise en action et le résultat mesurable. Montrez que vous recherchez activement le feedback, pas seulement que vous le subissez."
  },
  {
    id: "difficult-decision",
    text: "Quelle décision difficile avez-vous dû prendre ?",
    exampleAnswer: "J'ai quitté le comité d'organisation d'un forum alors que j'étais coordinateur, car la charge de travail menaçait ma santé ; j'ai formé mon successeur, documenté chaque procédure pour garantir la continuité, puis concentré mes efforts sur la prépa.",
    tips: "Privilégiez un conflit de priorités ou de valeurs, pas un dilemme anecdotique. Montrez la réflexion (critères, alternatives) et l'assumation de la décision. Mentionnez l'apprentissage : gestion du temps, priorisation, assertivité."
  },
  {
    id: "role-model",
    text: "Quel modèle (personne réelle) vous inspire ? Pourquoi ?",
    exampleAnswer: "Je m'inspire d'Anne-Laure Kiechel, fondatrice de Global Sovereign Advisory : sa capacité à concilier excellence technique en finance et souci d'impact sociétal incarne le type de leadership responsable auquel j'aspire.",
    tips: "Sélectionnez un profil cohérent avec votre projet professionnel ou vos valeurs. Expliquez précisément l'élément d'inspiration (compétence, parcours, valeur). Concluez sur la mise en pratique : comment vous traduisez cet exemple dans votre quotidien."
  }
];
