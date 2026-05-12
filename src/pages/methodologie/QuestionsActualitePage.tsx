import React from 'react';
import { Newspaper, CheckCircle, AlertTriangle, Target, Lightbulb, BookOpen, Globe } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const questionForms = [
  {
    n: "01",
    t: "Le jury vous demande votre fait d'actualité",
    d: "Il vous invite à présenter un fait d'actualité de votre choix, en lien ou non avec votre parcours. C'est l'occasion de valoriser un sujet que vous avez réellement travaillé et qui vous correspond.",
  },
  {
    n: "02",
    t: "Le jury vous soumet un fait à commenter",
    d: "Il impose un événement ou un thème et vous demande de l'analyser. Il est essentiel d'avoir préparé plusieurs sujets variés et de savoir rebondir vers d'autres faits connexes.",
  },
];

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
            <CheckCircle className="w-4 h-4 text-carnet-red mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-carnet-ink">{k} :</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Bien choisir son fait d'actualité" icon={Target}>
      <p className="font-instrument text-[16px] text-carnet-ink-soft leading-[1.65] mb-6">
        Le fait d'actualité que vous préparez doit vous concerner — avoir un lien avec votre personnalité,
        vos centres d'intérêt ou votre parcours. Un jury perçoit immédiatement la différence entre
        un sujet choisi par conviction et un sujet choisi par défaut.
      </p>
      <div className="carnet-card p-5 mb-8 border-l-4 border-l-carnet-red">
        <p className="font-instrument text-[15px] text-carnet-ink leading-[1.65]">
          <span className="carnet-hand text-[18px] mr-2">→</span>
          <strong>Exemple :</strong> un candidat passionné de sport aura tout intérêt à évoquer
          les Jeux Olympiques plutôt qu'un sujet quelconque — il en parlera avec bien plus d'aisance
          et de conviction.
        </p>
      </div>
      <h4 className="font-lora text-[20px] text-carnet-ink mb-5">Les deux formes de la question</h4>
      <div className="space-y-4">
        {questionForms.map((s) => (
          <div key={s.n} className="carnet-card p-5 flex items-baseline gap-5">
            <span className="carnet-hand text-[36px] text-carnet-red leading-none flex-shrink-0">{s.n}</span>
            <div>
              <h5 className="font-lora text-[18px] text-carnet-ink mb-1">{s.t}</h5>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6]">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="Les 4 grands thèmes à maîtriser" icon={Globe}>
      <div className="grid md:grid-cols-2 gap-5">
        {themes.map((g) => (
          <div key={g.t} className="carnet-card p-6">
            <h4 className="font-lora text-[20px] text-carnet-ink mb-2">{g.t}</h4>
            <hr className="carnet-divider mb-4" />
            <ul className="space-y-2">
              {g.l.map((item) => (
                <li key={item} className="flex items-start gap-2 font-instrument text-[14px] text-carnet-ink-soft leading-[1.55]">
                  <span className="carnet-hand text-[18px] leading-none mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Sources à suivre pour rester informé" icon={BookOpen}>
      <div className="grid md:grid-cols-3 gap-5">
        {sources.map((s) => (
          <div key={s.t} className="carnet-card p-6">
            <h4 className="font-lora text-[20px] text-carnet-ink mb-2">{s.t}</h4>
            <hr className="carnet-divider mb-4" />
            <ul className="space-y-2">
              {s.l.map((item) => (
                <li key={item} className="flex items-start gap-2 font-instrument text-[14px] text-carnet-ink-soft leading-[1.55]">
                  <span className="carnet-hand text-[18px] leading-none mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Pièges et erreurs fréquentes" icon={AlertTriangle}>
      <div className="space-y-3">
        {traps.map(({ t, d }, i) => (
          <div key={i} className="carnet-card p-5 flex items-start gap-5">
            <div className="carnet-hand text-[36px] text-carnet-red leading-none flex-shrink-0 w-10 text-center">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1 border-l border-dashed border-[rgba(78,55,30,0.18)] pl-5">
              <h5 className="font-lora text-[18px] text-carnet-ink mb-1">{t}</h5>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6]">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default QuestionsActualitePage;
