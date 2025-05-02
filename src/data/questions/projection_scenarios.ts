
import { Question } from './types';

export const projectionScenariosQuestions: Question[] = [
  {
    id: "project-behind-schedule",
    text: "Demain, vous prenez la tête d'un projet qui a 6 semaines de retard ; que faites-vous dans les 48 h ?",
    exampleAnswer: "Je commence par un audit flash : points bloquants, ressources restantes, dépendances externes. Vendredi 12 h, je réunis l'équipe pour une stand-up : chacun note son obstacle majeur sur un post-it. On classe ces freins en trois catégories : technique, logistique, humain. J'attribue un lead à chaque catégorie et fixe un plan de rattrapage en trois sprints d'une semaine, avec livrables \"minima viables\". Le lundi matin, je présente au sponsor un diagramme Gantt révisé, plus court de dix jours grâce à la suppression d'un module marketing non critique. Cette démarche m'a déjà sauvé un hackathon étudiant (retard de trois jours, bouclé à temps avec un prototype fonctionnel).",
    tips: "• 90-Day thinking : priorités, rythme. \n• Citer méthode visuelle (Kanban, Gantt) + décision tough (scope). \n• Rapporter à une réussite passée (stage, job)."
  },
  {
    id: "failed-presentation",
    text: "Votre équipe rate sa présentation la veille d'un pitch investisseurs : réaction ?",
    exampleAnswer: "J'instaure un \"night-shift positif\" : pizza, playlist calme, et revue ligne-à-ligne des slides. Chaque slide doit répondre à \"quoi, pourquoi, preuve\". Nous enregistrons une répétition vidéo, repérons deux longueurs superflues (−4 min). Je confie la partie finance, ma force, à un co-équipier plus à l'aise sur scène et prends le Q&A. Bilan : pitch raccourci, storytelling renforcé, closing à 150 k€ le lendemain.",
    tips: "• Montrer sang-froid + plan d'action. \n• Insister sur leadership partagé. \n• Donner un résultat chiffré (levée, note, vente)."
  },
  {
    id: "million-euros-project",
    text: "On vous accorde 1 M€ pour un projet durable sur le campus ; que faites-vous ?",
    exampleAnswer: "Je lancerais \"Zero-Waste Hub\" : un micro-incubateur pour valoriser tous les rebuts (papier, textilerie, biodéchets). 150 k€ iraient à une presse à briques papier, 300 k€ à un atelier couture employant 4 étudiants boursiers, 400 k€ à un digesteur biogaz raccordé à la cafétéria. Les 150 k€ restants financeraient un concours annuel d'innovations circulaires. Objectif : −60 % de déchets et +3 emplois étudiants pérennes la première année.",
    tips: "• Commencez par un impact mesurable (CO₂, emplois, €). \n• Découpez le budget en postes clairs. \n• Prévoyez un pilot + KPI."
  },
  {
    id: "values-conflict",
    text: "Votre manager change de stratégie et cela va contre vos valeurs ; que faites-vous ?",
    exampleAnswer: "Je demande un entretien : j'expose d'abord les objectifs que nous partageons, puis le point précis de divergence (dumping social envisagé pour baisser les coûts). Je propose deux alternatives chiffrées : relocaliser partiellement chez un partenaire certifié ou écourter la gamme produit. Si aucune n'est retenue, je trace un plan de sortie assumé en transmettant mes dossiers pour ne pas pénaliser l'équipe. J'ai vécu un dilemme semblable en association : nous avons décidé de doubler le prix d'entrée pour équilibrer le budget, j'ai négocié des billets \"solidaires\" pour les publics étudiants.",
    tips: "• Montrez assertivité + loyauté. \n• Toujours proposer solutions avant la rupture. \n• Soulignez la cohérence valeur/acte."
  },
  {
    id: "ai-automation",
    text: "Une IA automatise 70 % de votre mission de stage ; comment rester utile ?",
    exampleAnswer: "Je mappe les tâches résiduelles non couvertes : relation client et paramétrage fin. Je crée un chatbot de coaching pour aider les commerciaux à interpréter les rapports IA. Puis je conçois un tableau de bord \"time-saved\" démontrant +30 % de productivité. Résultat : je passe de simple analyste à product owner de la brique d'IA-service.",
    tips: "• Identifier complémentarité humaine (créativité, empathie). \n• Proposer outil ou process nouveau."
  },
  {
    id: "convince-mayor",
    text: "Vous devez convaincre un maire d'accueillir un festival étudiant qui va gêner le voisinage. Pitch en 2 min.",
    exampleAnswer: "Madame la Maire, ce festival n'est pas un simple concert ; c'est 85 k€ de retombées locales, 20 commerçants partenaires et 35 heures de bénévolat étudiant pour rénover le skate-park municipal. Nous finançons une navette nocturne gratuite et un comité voisinage qui valide chaque créneau décibel. Nous visons \"zéro plainte\" ; pari tenu l'an dernier à Ville-Neuve. Vous gagnez en attractivité et vos administrés profitent d'infrastructures rénovées.",
    tips: "• Structure \"problème - solution - preuve - bénéfice\". \n• Chiffres + précédent réussi."
  },
  {
    id: "create-elective-course",
    text: "Créez un cours électif pour votre future école.",
    exampleAnswer: "\"Business x Climate Tech Lab\". 30 heures en anglais, cas réels avec trois start-ups greentech. Évaluation : 40 % sur un rapport d'impact CO₂, 30 % pitch investisseurs, 30 % peer-review. Objectif : doter 40 étudiants/an d'une première ligne sur leur CV liée à la tech climat. J'ai déjà animé un atelier pilote avec 15 lycéens et un ingénieur climat : 4 prototypes de filtres low-cost sont sortis.",
    tips: "• Nom accrocheur + format + évaluation + output. \n• Mentionnez un prototype/test déjà fait."
  },
  {
    id: "startup-credibility",
    text: "Vous rejoignez une start-up, manquez d'expérience ; comment devenir crédible en 3 mois ?",
    exampleAnswer: "J'adopte la règle \"30-60-90 days\". 30 j : absorption d'info (shadowing, lectures sectorielles). 60 j : micro-victoire – créer un dashboard clients automatisé. 90 j : conduite d'un premier A/B test qui augmente le taux de conversion de 8 %. Ces quick-wins, présentés lors d'un Lunch & Learn, montrent que je génère déjà de la valeur.",
    tips: "• Fixer jalons et quick-wins chiffrés. \n• Illustrer apprentissage auto-dirigé."
  },
  {
    id: "ten-second-pitch",
    text: "Un investisseur vous donne 10 sec pour expliquer votre projet ; que dites-vous ?",
    exampleAnswer: "\"Une appli qui transforme chaque ticket resto inutilisé en repas solidaire local ; on touche 1€ de commission par transaction, marché : 700 M€ dormants/an, pilote signé avec La Croix-Rouge.\"",
    tips: "• Formule Problem – Solution – Business – Traction."
  },
  {
    id: "key-client-leaving",
    text: "Un client clé menace de partir à la concurrence ce soir ; quelles trois actions immédiates ?",
    exampleAnswer: "1) Appel dans l'heure pour comprendre la frustration prioritaire. 2) Envoi d'un plan écrit 3 points : correctif court terme, geste commercial, calendrier de fonctionnalités. 3) Invitation à une table d'écoute trimestrielle avec le CTO pour coconstruire la feuille de route. J'ai retenu un sponsor running de cette manière : −40 % de churn sur 6 mois.",
    tips: "• Montrer urgence, plan écrit, co-construction."
  }
];
