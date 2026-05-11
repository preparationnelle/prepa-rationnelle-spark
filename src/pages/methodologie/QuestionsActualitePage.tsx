import React from 'react';
import { Newspaper, CheckCircle, AlertTriangle, Target, Lightbulb, BookOpen, Globe } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const themes = [
  {
    t: "Économie & Finance",
    l: ["Inflation et politique monétaire de la BCE", "Marchés financiers et crises récentes", "Mondialisation et commerce international", "Transitions énergétiques et coût économique"],
  },
  {
    t: "Géopolitique",
    l: ["Conflits armés et zones de tension mondiales", "Relations internationales et diplomatie", "Migrations et questions humanitaires", "Institutions mondiales (ONU, UE, G20, OTAN)"],
  },
  {
    t: "Business & Innovation",
    l: ["Intelligence artificielle et disruption sectorielle", "Start-up françaises et licornes émergentes", "RSE et finance durable (ESG)", "Grandes fusions-acquisitions et OPA"],
  },
  {
    t: "Société & Environnement",
    l: ["Transitions écologiques et décarbonation", "Questions de genre, diversité et inclusion", "Santé publique et innovation médicale", "Numérique et fracture sociale"],
  },
];

const methodSteps = [
  { n: "01", t: "Reformulez la question", d: "Reformulez pour vous assurer de bien comprendre et gagner 3 secondes de réflexion : « Si je comprends bien, vous me demandez… »." },
  { n: "02", t: "Annoncez le plan", d: "Dites « Je vais aborder X puis Y » — cela structure l'échange, rassure le jury et vous engage à tenir un fil directeur." },
  { n: "03", t: "Exposez les faits", d: "Commencez par les faits objectifs avant toute analyse : acteurs clés, chiffres de référence, chronologie précise." },
  { n: "04", t: "Analysez avec nuance", d: "Présentez plusieurs angles : court terme vs long terme, avantages vs limites, acteurs gagnants vs perdants." },
  { n: "05", t: "Prenez position", d: "Concluez avec un avis personnel bien argumenté. Évitez la langue de bois — le jury cherche un interlocuteur, pas un présentateur." },
];

const sources = [
  { t: "Quotidiens de référence", l: ["Le Monde (politique, international)", "Les Échos (économie, business)", "Le Figaro Économie", "Financial Times (version anglaise)"] },
  { t: "Hebdomadaires & magazines", l: ["L'Express", "Le Point", "The Economist", "Courrier International"] },
  { t: "Podcasts & radio", l: ["France Culture — Le cours de l'histoire", "BFM Business — Morning", "Le Monde — L'Heure du Monde", "Génération Do It Yourself"] },
];

const traps = [
  { t: "Prendre position politique radicale", d: "Restez factuel et nuancé. Une opinion tranchée sur un sujet politique clivant peut irriter le jury, quelle que soit sa couleur." },
  { t: "Donner des chiffres imprécis", d: "Mieux vaut dire « environ 3% » que donner un chiffre faux. Les ordres de grandeur exacts valent mieux que les précisions inventées." },
  { t: "Confondre des acteurs ou des faits", d: 'Si vous n\'êtes pas sûr, signalez-le : « Si je me souviens bien… » est infiniment préférable à l\'affirmation erronée.' },
  { t: "Éviter totalement la question", d: "Même si vous ignorez le sujet, montrez une méthode d'analyse et votre capacité à raisonner — le jury valorise la démarche autant que le fond." },
] as const;

const QuestionsActualitePage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 10"
    icon={Newspaper}
    titlePrefix="Questions"
    titleAccent="d'Actualité"
    intro="Apprenez à répondre aux questions d'actualité avec méthode et nuance pour démontrer ouverture d'esprit, culture générale et capacité analytique."
    cta={{
      title: "Développez votre culture générale",
      text: "Nos ressources vous aident à suivre l'actualité efficacement et à structurer des analyses percutantes.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Pourquoi les questions d'actualité ?">
      <p className="mb-3">
        Les jurys testent votre curiosité intellectuelle, votre capacité à analyser et votre aptitude
        à prendre position de manière argumentée — des compétences essentielles pour un futur manager.
      </p>
      <p className="font-medium text-carnet-ink mb-2">Ce que le jury évalue réellement :</p>
      <ul className="space-y-2">
        {[
          ["Ouverture d'esprit", "s'intéresse-t-il au monde qui l'entoure ?"],
          ["Rigueur analytique", "distingue-t-il les faits des opinions ?"],
          ["Prise de position", "ose-t-il défendre un avis avec des arguments ?"],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-carnet-ink">{k} :</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Les 4 grands thèmes à maîtriser" icon={Globe}>
      <div className="grid md:grid-cols-2 gap-5">
        {themes.map((g) => (
          <div key={g.t} className="bg-white border border-carnet-rule/30 rounded-lg p-6">
            <h4 className="font-dm-serif text-lg text-carnet-ink mb-2">{g.t}</h4>
            <div className="h-px w-8 bg-red-600 mb-4" />
            <ul className="space-y-2 text-sm text-carnet-ink-soft">
              {g.l.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="Méthode en 5 étapes pour répondre" icon={Target}>
      <p className="text-carnet-ink-soft mb-6">Une structure adaptée à n'importe quelle question d'actualité, quel que soit le sujet.</p>
      <div className="space-y-4">
        {methodSteps.map((s) => (
          <div key={s.n} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-5 flex items-baseline gap-4">
            <span className="font-dm-serif text-3xl text-red-600 leading-none">{s.n}</span>
            <div>
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-1">{s.t}</h4>
              <p className="text-sm text-carnet-ink-soft">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Sources à suivre pour rester informé" icon={BookOpen}>
      <div className="grid md:grid-cols-3 gap-5">
        {sources.map((s) => (
          <div key={s.t} className="bg-white border border-carnet-rule/30 rounded-lg p-6">
            <h4 className="font-dm-serif text-lg text-carnet-ink mb-2">{s.t}</h4>
            <div className="h-px w-8 bg-red-600 mb-4" />
            <ul className="space-y-2 text-sm text-carnet-ink-soft">
              {s.l.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Pièges et erreurs fréquentes" icon={AlertTriangle}>
      <div className="space-y-3">
        {traps.map(({ t, d }, i) => (
          <div key={i} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
            <div className="font-dm-serif text-3xl text-red-600 leading-none flex-shrink-0 w-12 text-center">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-carnet-ink mb-1">{t}</h5>
              <p className="text-sm text-carnet-ink-mute">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default QuestionsActualitePage;
