import React from 'react';
import { Briefcase, CheckCircle, AlertTriangle, Target, Lightbulb, Award, TrendingUp } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const categories = [
  {
    t: "Stages et jobs étudiants",
    l: ["Stage en entreprise (même court)", "Job d'été ou job étudiant", "Alternance ou mission freelance", "Observation professionnelle"],
  },
  {
    t: "Engagements associatifs",
    l: ["Président ou responsable d'association", "Membre actif avec mission précise", "Création d'une association ou d'un projet", "Bénévolat régulier avec impact mesurable"],
  },
  {
    t: "Projets personnels",
    l: ["Blog, podcast, chaîne YouTube", "Application, site web ou projet tech", "Compétition entrepreneuriale (start-up weekend…)", "Œuvre artistique ou culturelle"],
  },
  {
    t: "Réussites sportives & culturelles",
    l: ["Sport de haut niveau ou compétition", "Instrument de musique (niveau avancé)", "Apprentissage autodidacte d'une langue", "Voyage long et structurant"],
  },
];

const methodeVALO = [
  { n: "01", t: "Contextualisez rapidement", d: "Nommez l'entreprise/l'asso, le secteur, la durée. 2 phrases max — ne perdez pas le jury dans les détails." },
  { n: "02", t: "Précisez votre rôle exact", d: "Évitez « j'ai participé à ». Dites « j'étais responsable de », « j'ai géré », « j'ai créé ». Le verbe d'action est crucial." },
  { n: "03", t: "Quantifiez les résultats", d: "Un chiffre vaut mille mots : 50 bénévoles gérés, 30% d'augmentation, 500 personnes touchées, 3 mois de projet livré à temps." },
  { n: "04", t: "Tirez l'apprentissage", d: "Quelle compétence clé cette expérience vous a-t-elle donnée ? Faites le lien avec votre projet professionnel ou les valeurs de l'école." },
];

const poncifs = [
  ["« J'ai appris à travailler en équipe »", "Trop générique — précisez : comment, dans quel contexte, avec quelle difficulté surmontée."],
  ["« C'était une super expérience »", "Aucune valeur ajoutée — développez toujours ce que vous en avez retiré de concret."],
  ["Réciter son CV chronologiquement", "Le jury l'a lu. Racontez, ne listez pas — choisissez 2-3 expériences clés à développer."],
  ["Minimiser une expérience", "Ne dites jamais « ce n'était qu'un petit stage ». Chaque expérience a quelque chose à valoriser."],
  ["Ne pas faire le lien avec l'école", "Chaque expérience doit être connectée à votre projet ou aux valeurs de l'école cible."],
] as const;

const exemple = {
  mauvais: "J'ai fait un stage dans une start-up cet été. C'était intéressant, j'ai appris beaucoup de choses sur le fonctionnement d'une entreprise.",
  bon: "J'ai passé 2 mois chez [Start-up X], une start-up FinTech de 15 personnes, en tant que chargé de marketing digital. J'ai été seul responsable du lancement de leur campagne Instagram — résultat : +800 abonnés en 6 semaines et un taux d'engagement multiplié par 2,5. Cette expérience m'a appris à travailler en totale autonomie et à piloter un budget de 1 500€ — deux compétences directement liées à mon projet de créer une start-up.",
};

const ValoriserExperiencesPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 15"
    icon={Briefcase}
    titlePrefix="Valoriser"
    titleAccent="ses Expériences"
    intro="Apprenez à présenter vos stages, associations et projets personnels avec un impact maximal — chaque expérience devient un argument de poids."
    cta={{
      title: "Valorisez votre profil avec nos coachs",
      text: "Nos coachs vous aident à identifier et à mettre en scène vos meilleures expériences pour convaincre le jury.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Quelle expérience est valorisable ?">
      <p className="mb-3">
        Toutes les expériences sont valorisables — à condition de les présenter avec la bonne structure.
        Un job dans un fast-food bien raconté vaut parfois mieux qu'un stage en cabinet mal présenté.
        C'est la narration qui fait la différence.
      </p>
      <p className="font-medium text-carnet-ink mb-2">Les critères de sélection :</p>
      <ul className="space-y-2">
        {[
          ["Pertinence", "en quoi cette expérience soutient-elle votre projet ou votre candidature ?"],
          ["Responsabilité", "quel était votre rôle réel, pas votre rôle officiel ?"],
          ["Résultat mesurable", "y a-t-il un impact concret que vous pouvez chiffrer ?"],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-carnet-ink">{k} :</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Les 4 types d'expériences valorisables" icon={Award}>
      <div className="grid md:grid-cols-2 gap-5">
        {categories.map((g) => (
          <div key={g.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
            <h4 className="font-dm-serif text-lg text-carnet-ink mb-2">{g.t}</h4>
            <div className="h-px w-8 bg-red-600 mb-4" />
            <ul className="space-y-2 text-sm text-carnet-ink-soft">
              {g.l.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="Méthode VALO : structurer en 4 étapes" icon={Target}>
      <p className="text-carnet-ink-soft mb-6">Une structure universelle pour présenter n'importe quelle expérience en moins de 2 minutes.</p>
      <div className="space-y-4">
        {methodeVALO.map((s) => (
          <div key={s.n} className="bg-carnet-paper-2 border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-5 flex items-baseline gap-4">
            <span className="font-dm-serif text-3xl text-red-600 leading-none">{s.n}</span>
            <div>
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-1">{s.t}</h4>
              <p className="text-sm text-carnet-ink-soft">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Avant / après : l'impact de la narration" icon={TrendingUp}>
      <div className="bg-carnet-paper-2 border border-carnet-rule/30 rounded-lg p-7">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 px-2 py-1 rounded">
            Même expérience, deux présentations
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-carnet-paper rounded p-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700">Version faible</span>
            <p className="mt-3 text-sm text-carnet-ink-soft italic leading-relaxed">{exemple.mauvais}</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r p-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700">Version percutante</span>
            <p className="mt-3 text-sm text-carnet-ink-soft italic leading-relaxed">{exemple.bon}</p>
          </div>
        </div>
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Les 5 poncifs à éviter" icon={AlertTriangle}>
      <div className="space-y-3">
        {poncifs.map(([err, explication], i) => (
          <div key={i} className="bg-carnet-paper-2 border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
            <div className="font-dm-serif text-3xl text-red-600 leading-none flex-shrink-0 w-12 text-center">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-carnet-ink mb-1">{err}</h5>
              <p className="text-sm text-carnet-ink-mute">{explication}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default ValoriserExperiencesPage;
