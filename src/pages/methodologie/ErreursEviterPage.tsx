import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, Lightbulb, Shield, Eye, MessageSquare } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const errorCategories = [
  {
    icon: Shield,
    title: "Erreurs de préparation",
    items: [
      {
        bad: "Manque de connaissance de l'école",
        list: ["Ne pas connaître le programme spécifique", "Confondre avec une autre école", "Ignorer les spécialisations offertes", "Ne pas connaître les partenariats"],
        sol: "Passez 2h minimum sur le site officiel, lisez les actualités récentes, participez aux JPO.",
      },
      {
        bad: "Projet professionnel flou",
        list: ['"Je veux faire du business"', '"Tout m\'intéresse"', "Projet incohérent avec le parcours", "Aucune expérience validante"],
        sol: "Définissez un secteur précis, justifiez par des expériences, montrez la cohérence.",
      },
    ],
  },
  {
    icon: Eye,
    title: "Erreurs d'attitude et de comportement",
    items: [
      {
        bad: "Arrogance et prétention",
        list: ['"Je suis le meilleur candidat"', "Dénigrer les autres écoles", "Critiquer ses professeurs / camarades", "Afficher sa supériorité intellectuelle"],
        sol: "Restez humble, valorisez votre environnement, montrez votre capacité d'écoute.",
      },
      {
        bad: "Manque de confiance excessif",
        list: ["Voix tremblante et hésitante", "Éviter le contact visuel", "S'excuser constamment", "Minimiser ses réussites"],
        sol: "Entraînez-vous, préparez vos exemples, assumez vos réussites avec simplicité.",
      },
    ],
  },
  {
    icon: MessageSquare,
    title: "Erreurs de communication",
    items: [
      {
        bad: "Réponses inappropriées",
        list: ["Réponses trop courtes (monosyllabes)", "Réponses interminables sans structure", "Hors-sujet complet", "Langue de bois et clichés"],
        sol: "Structurez vos réponses (intro-développement-conclusion), restez authentique et concret.",
      },
      {
        bad: "Expression orale défaillante",
        list: ['Langage familier ("ouais", "du coup")', "Tics de langage répétitifs", "Débit trop rapide ou trop lent", "Mots de liaison parasites"],
        sol: "Enregistrez-vous, travaillez l'articulation, variez le rythme, soignez le vocabulaire.",
      },
    ],
  },
];

const top10 = [
  ["Arriver en retard sans excuse valable", "Montre un manque de respect et d'organisation"],
  ["Mentir sur son CV ou ses expériences", "Perte totale de crédibilité si découvert"],
  ["Critiquer violemment ses professeurs ou son établissement", "Révèle un manque de maturité et de loyauté"],
  ["Dire qu'on postule partout « au cas où »", "Montre un manque de motivation spécifique"],
  ["Avoir un téléphone qui sonne pendant l'entretien", "Distraction majeure et manque de professionnalisme"],
  ["Prétendre que l'argent ne compte pas du tout", "Naïveté et déconnexion de la réalité business"],
  ["Ne poser aucune question au jury", "Manque d'intérêt et de curiosité apparent"],
  ["Adopter une posture trop décontractée", "Manque de respect du cadre formel"],
  ["Répondre « je ne sais pas » sans réfléchir", "Manque d'effort et de réactivité"],
  ["Contredire agressivement le jury", "Conflit et manque d'intelligence relationnelle"],
] as const;

const traps = [
  {
    t: "« Parlez-moi de vous »",
    bad: ["Réciter son CV chronologiquement", "Parler de sa vie privée / familiale", "Être trop long (plus de 3 minutes)", "Manquer de structure claire"],
    good: ["Structurer : parcours → projet → motivation école", "Mettre en avant les expériences clés", "Rester synthétique (2-3 minutes max)", "Créer des ponts vers ses qualités"],
  },
  {
    t: "Questions sur l'actualité",
    bad: ['"Je ne suis pas l\'actualité"', "Positions politiques tranchées", "Informations erronées ou datées", "Analyse trop superficielle"],
    good: ["Rester factuel et nuancé", "Montrer sa capacité d'analyse", "Faire des liens avec le business", "Reconnaître les limites de son analyse"],
  },
  {
    t: "« Avez-vous des questions ? »",
    bad: ['"Non, tout était très clair"', "Questions sur les notes de frais", '"Quelles sont mes chances ?"', "Questions trouvables sur Internet"],
    good: ["Questions sur les projets innovants", "Évolution pédagogique de l'école", "Conseils pour réussir la première année", "Spécificités qui différencient l'école"],
  },
];

const actionPlan = [
  {
    t: "Préparation",
    sub: "2-3 semaines avant",
    l: ["Recherche approfondie sur l'école", "Clarification du projet professionnel", "Préparation d'exemples concrets", "Suivi de l'actualité ciblée"],
  },
  {
    t: "Entraînement",
    sub: "1 semaine avant",
    l: ["Simulations avec proches", "Enregistrement vidéo / audio", "Travail de l'expression orale", "Préparation de questions au jury"],
  },
  {
    t: "Jour J",
    sub: "Pendant l'entretien",
    l: ["Arriver 15 min en avance", "Écouter attentivement les questions", "Prendre 2-3 secondes pour réfléchir", "Rester positif jusqu'à la fin"],
  },
];

const ErreursEviterPage = () => {
  return (
    <MethodologyShell
      moduleLabel="Méthodologie · Module 06"
      icon={AlertTriangle}
      titlePrefix="Erreurs à"
      titleAccent="Éviter"
      intro="Identifiez et évitez les pièges les plus fréquents en entretien pour maximiser vos chances de réussite aux concours des grandes écoles."
      cta={{
        title: "Évitez tous ces pièges avec notre coaching",
        text: "Nos simulations d'entretien vous permettent d'identifier et corriger vos erreurs avant le jour J.",
      }}
    >
      <MethodIntroCard icon={Lightbulb} title="Pourquoi connaître les erreurs courantes ?">
        En entretien, certaines erreurs peuvent ruiner instantanément vos chances, même avec un excellent
        dossier. Connaître ces pièges vous permet de les éviter et de vous démarquer positivement des autres
        candidats qui tombent dans ces travers classiques.
      </MethodIntroCard>

      {/* Catégories */}
      <MethodSection label="Section 01" title="Les erreurs fatales par catégorie" icon={XCircle}>
        <div className="space-y-5">
          {errorCategories.map((cat) => (
            <div key={cat.title} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-orange rounded-r-lg p-6">
              <h4 className="font-dm-serif text-xl text-pr-black mb-5 flex items-center gap-2">
                <cat.icon className="w-5 h-5 text-pr-orange-dark" strokeWidth={1.6} />
                {cat.title}
              </h4>
              <div className="grid md:grid-cols-2 gap-5">
                {cat.items.map((it) => (
                  <div key={it.bad} className="bg-pr-gray-bg rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-4 h-4 text-pr-orange-dark" strokeWidth={1.8} />
                      <h5 className="font-medium text-pr-black">{it.bad}</h5>
                    </div>
                    <ul className="space-y-1 text-sm text-pr-gray-dark mb-4">
                      {it.list.map((l) => <li key={l}>— {l}</li>)}
                    </ul>
                    <div className="bg-white border-l-4 border-pr-orange rounded-r p-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-pr-orange-dark mb-1">Solution</p>
                      <p className="text-sm text-pr-gray-dark">{it.sol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Top 10 */}
      <MethodSection label="Section 02" title="Top 10 des erreurs qui éliminent instantanément" icon={AlertTriangle}>
        <div className="space-y-3">
          {top10.map(([err, cons], i) => (
            <div key={i} className="bg-white border border-pr-gray-light rounded-lg p-4 flex items-start gap-4">
              <div className="font-dm-serif text-3xl text-pr-orange leading-none flex-shrink-0 w-12 text-center">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-pr-black mb-1">{err}</h5>
                <p className="text-sm text-pr-gray-mid">{cons}</p>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Pièges */}
      <MethodSection label="Section 03" title="Situations pièges et comment les éviter" icon={Shield}>
        <div className="space-y-5">
          {traps.map((tr) => (
            <div key={tr.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
              <h4 className="font-dm-serif text-xl text-pr-black mb-5">{tr.t}</h4>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-pr-gray-bg rounded p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                    À éviter
                  </span>
                  <ul className="mt-3 space-y-1.5 text-sm text-pr-gray-dark">
                    {tr.bad.map((b) => <li key={b}>— {b}</li>)}
                  </ul>
                </div>
                <div className="bg-pr-orange-pale rounded p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-white px-2 py-1 rounded">
                    Bonne approche
                  </span>
                  <ul className="mt-3 space-y-1.5 text-sm text-pr-gray-dark">
                    {tr.good.map((g) => <li key={g}>— {g}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Plan d'action */}
      <MethodSection label="Section 04" title="Plan d'action anti-erreurs" icon={CheckCircle}>
        <div className="grid md:grid-cols-3 gap-5">
          {actionPlan.map((step, i) => (
            <div key={step.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
              <span className="font-dm-serif text-3xl text-pr-orange">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="font-dm-serif text-lg text-pr-black mt-1">{step.t}</h4>
              <p className="text-xs uppercase tracking-wider text-pr-gray-mid mb-3">{step.sub}</p>
              <div className="h-px w-8 bg-pr-orange mb-4" />
              <ul className="space-y-2 text-sm text-pr-gray-dark">
                {step.l.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-pr-orange mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>
    </MethodologyShell>
  );
};

export default ErreursEviterPage;
