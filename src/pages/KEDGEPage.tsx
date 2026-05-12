import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Users, Clock, Award, CheckCircle, XCircle, Lightbulb,
  Target, Home, ChevronRight, GraduationCap, Layers,
} from 'lucide-react';

const kedgeCards = [
  {
    name: 'Trait d\'Union', color: 'bg-green-50 border-green-300', colorAccent: 'border-l-green-500',
    desc: 'L\'un des 17 ODD de l\'ONU tiré au sort (ex : ODD 4 "Éducation de qualité", ODD 8 "Travail décent", ODD 13 "Changements climatiques"). Sert de cadre de référence obligatoire sur tout l\'entretien. Plus vous établissez de connexions pertinentes, plus votre note est valorisée.',
  },
  {
    name: 'Autoportrait', color: 'bg-blue-50 border-blue-300', colorAccent: 'border-l-blue-500',
    desc: 'Un mot tiré au sort (ex : "résilience", "frontière", "curiosité", "rupture"). Le candidat construit sa présentation personnelle de 3 minutes à partir de ce mot comme miroir. Ne pas faire un CV oral chronologique — construire un récit autour de la notion.',
  },
  {
    name: 'Trait d\'Actions', color: 'bg-red-50 border-red-300', colorAccent: 'border-l-red-500',
    desc: 'Parler d\'actions concrètes et originales déjà menées, en lien avec la compréhension des ODD. Ce n\'est pas "qu\'est-ce que tu voudrais faire" mais "qu\'est-ce que tu as fait". Révèle créativité, esprit entrepreneurial, engagement concret.',
  },
  {
    name: 'Trait de Pensée', color: 'bg-yellow-50 border-yellow-300', colorAccent: 'border-l-yellow-500',
    desc: 'Une affirmation sur la carte (ex : "Le télétravail est une réelle avancée dans la société"). Argumenter POUR ou CONTRE. Tester la capacité d\'analyse, la structuration des idées, la prise de position tranchée.',
  },
  {
    name: 'Trait d\'Esprit', color: 'bg-red-50 border-red-300', colorAccent: 'border-l-red-500',
    desc: 'Un paradoxe sur la carte (ex : "victoire amère"). La carte la plus déstabilisante — réagir en temps réel. Méthode : 1/ reformuler le paradoxe pour montrer qu\'on l\'a compris, 2/ donner un exemple concret, 3/ proposer une résolution ou nuance.',
  },
];

const traps = [
  ['Ignorer ou sous-utiliser l\'ODD', 'Certains candidats traitent les cartes sans jamais faire de lien avec le Trait d\'Union. C\'est éliminatoire sur le 5ème critère d\'évaluation. L\'ODD doit revenir 2-3 fois de façon naturelle.'],
  ['Paniquer face au paradoxe', 'Ne pas chercher "la bonne réponse" — le jury évalue la réactivité. 5 secondes de réflexion visible sont acceptables. Reformuler avant de répondre est une stratégie efficace.'],
  ['Carte Autoportrait trop chronologique', 'Beaucoup de candidats font un CV oral classique. L\'usage du mot tiré au sort doit créer une présentation originale et mémorable.'],
  ['Trait d\'Actions vague et futur', '"Je compte m\'engager dans..." = hors sujet. Cette carte veut des actions passées et concrètes.'],
  ['Trait de Pensée sans position claire', '"Nuancer des deux côtés sans trancher" est la réponse la plus commune et la moins valorisée. KEDGE attend un esprit d\'analyse avec une position défendue.'],
  ['Ne pas utiliser la conclusion de 3 min', 'Ce temps n\'est pas "en bonus" — c\'est l\'occasion de redresser une carte mal traitée, d\'ajouter un élément distinctif, ou de montrer son intérêt pour l\'école.'],
];

const KEDGEPage = () => (
  <div className="relative carnet-paper min-h-screen overflow-hidden">
    <div className="carnet-margin-line" />
    <div className="carnet-hole" style={{ top: 80 }} />
    <div className="carnet-hole" style={{ top: 220 }} />
    <div className="carnet-hole" style={{ top: 360 }} />

    <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-10">
      <nav className="mb-10">
        <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute gap-2">
          <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors"><Home className="h-3.5 w-3.5" /><span>Accueil</span></Link>
          <ChevronRight className="h-3 w-3 opacity-50" />
          <Link to="/methodologie/entretiens-personnalite" className="hover:text-carnet-red transition-colors">Entretiens</Link>
          <ChevronRight className="h-3 w-3 opacity-50" />
          <span className="carnet-eyebrow text-[11px]">KEDGE</span>
        </div>
      </nav>

      <div className="mb-10">
        <Link to="/methodologie/entretiens-personnalite">
          <Button variant="ghost" className="group text-carnet-ink-soft hover:text-carnet-red px-3 font-instrument text-[13px] font-semibold uppercase tracking-[0.1em]">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />Retour aux fiches écoles
          </Button>
        </Link>
      </div>

      <div className="mb-16 max-w-[760px]">
        <span className="carnet-eyebrow inline-flex items-center gap-2 mb-6"><Award className="h-3.5 w-3.5" />Fiche école · Ecricome</span>
        <h1 className="font-lora text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-5">
          KEDGE <em className="text-carnet-red not-italic">Business School</em>
        </h1>
        <hr className="carnet-divider mb-5" />
        <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft mb-8">
          "Le Révélateur" — un format révolutionnaire introduit en 2024 : 5 cartes scénarisées avec un ODD comme fil rouge, en 30 minutes.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock, label: 'Durée', value: '30 minutes' },
            { icon: Award, label: 'Coefficient', value: '14 (56% oral)' },
            { icon: Users, label: 'Jury', value: '2 membres' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="carnet-card px-5 py-3 flex items-center gap-3">
              <Icon className="h-4 w-4 text-carnet-red flex-shrink-0" strokeWidth={1.8} />
              <div>
                <div className="font-instrument text-[11px] text-carnet-ink-mute uppercase tracking-[0.1em]">{label}</div>
                <div className="font-lora text-[17px] text-carnet-ink">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structure */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 01 · Structure</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Le Révélateur — chronologie des 30 minutes</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-6">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-3">Nouveauté 2024 — le questionnaire préalable a été supprimé</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Avant 2024, les candidats remplissaient un questionnaire maison à l'avance. Depuis la session 2024, ce questionnaire a été
                <strong className="text-carnet-ink"> entièrement supprimé</strong> et remplacé par "Le Révélateur". Il n'y a plus de document à remplir en amont.
                Le contenu est entièrement généré en temps réel le jour J par le jeu de cartes.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { t: '1 min · Installation', d: 'Vérification de la pièce d\'identité.' },
            { t: '2 min · Présentation du jury', d: 'Le président et le co-juré se présentent brièvement.' },
            { t: '1 min · Tirage des 5 cartes', d: 'C\'est le PRÉSIDENT DU JURY (pas le candidat) qui tire les 5 cartes au sort. Le candidat prend connaissance des cartes.' },
            { t: '3 min · Carte Autoportrait', d: 'Le candidat construit sa présentation personnelle à partir du mot tiré au sort sur la carte.' },
            { t: '20 min · Les 3 cartes restantes', d: 'Le candidat choisit lui-même l\'ordre. Le jury intervient, relance, questionne. La carte Trait d\'Union (ODD) est un fil rouge permanent.' },
            { t: '3 min · Conclusion', d: 'Le candidat prend la parole librement : sujet non abordé, ou question aux jurés. Temps stratégique à utiliser.' },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
              <div className="flex-shrink-0 w-24 font-instrument text-[12px] text-carnet-ink-mute font-semibold pt-0.5">{t}</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.55]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Les 5 cartes */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 02 · Les cartes</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 5 cartes du Révélateur — en détail</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-4">
          {kedgeCards.map((card) => (
            <div key={card.name} className={`bg-white border border-l-4 ${card.color} ${card.colorAccent} rounded-r-lg p-6`}>
              <h4 className="font-lora text-[19px] text-carnet-ink mb-3">{card.name}</h4>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 carnet-card p-6">
          <div className="flex items-start gap-4">
            <Target className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h4 className="font-lora text-[17px] text-carnet-ink mb-2">Les 5 critères d'évaluation officiels de KEDGE</h4>
              <div className="flex flex-wrap gap-2">
                {['Originalité des propos', 'Qualités oratoires', 'Esprit d\'analyse', 'Esprit concret', 'Capacité à faire du lien avec la culture ODD'].map((c) => (
                  <span key={c} className="bg-carnet-paper-2 border border-carnet-rule/40 rounded-full px-3 py-1 font-instrument text-[12px] text-carnet-ink-soft">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pièges */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 03 · Pièges</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 6 erreurs les plus fréquentes</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-3">
          {traps.map(([titre, raison], i) => (
            <div key={i} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
              <div className="font-lora text-[28px] text-carnet-red leading-none flex-shrink-0 w-10 text-center">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="w-3.5 h-3.5 text-carnet-red flex-shrink-0" strokeWidth={1.8} />
                  <h5 className="font-lora text-[16px] text-carnet-ink">{titre}</h5>
                </div>
                <p className="font-instrument text-[13.5px] text-carnet-ink-soft">{raison}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conseil stratégique ordre des cartes */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 04 · Stratégie</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Ordre des cartes et préparation des ODD</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-4">
          {[
            { n: '01', t: 'Ordre des cartes : commencez par la plus facile', d: 'Le candidat choisit l\'ordre des 3 cartes libres. Commencer par la carte où vous êtes le plus à l\'aise pour installer un rythme, et garder le Trait d\'Esprit (le plus imprévisible) pour la fin, une fois déjà en flow.' },
            { n: '02', t: 'Maîtrisez les 17 ODD avec des exemples personnels', d: 'Apprenez les 17 ODD avec 2-3 exemples concrets personnels ou d\'actualité pour chacun. Entraînez-vous à relier n\'importe quelle expérience à n\'importe quel ODD en 30 secondes.' },
            { n: '03', t: 'Trait de Pensée : entraînez-vous au débat', d: 'Thèmes à préparer : "L\'IA va détruire plus d\'emplois qu\'elle n\'en crée", "Le capitalisme peut être durable", "Il faut interdire les réseaux sociaux aux moins de 16 ans". Défendez le pour ET le contre sur chaque thème.' },
            { n: '04', t: 'Qualité oratoire : critère explicite d\'évaluation', d: 'Évitez "euh", "du coup", "en fait". Maintenez le contact visuel. Parlez avec rythme et enthousiasme. La qualité oratoire est un des 5 critères officiels d\'évaluation.' },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-carnet-rule/30 border-l-4 border-l-carnet-red rounded-r-lg p-5 flex items-baseline gap-4">
              <span className="font-lora text-[28px] text-carnet-red leading-none flex-shrink-0">{s.n}</span>
              <div>
                <h4 className="font-lora text-[17px] text-carnet-ink mb-1">{s.t}</h4>
                <p className="font-instrument text-[13.5px] text-carnet-ink-soft leading-[1.55]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 carnet-card px-8 py-10 flex flex-col items-start">
        <span className="carnet-eyebrow mb-4"><GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />Accompagnement</span>
        <h3 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink mb-3">Préparez votre Révélateur KEDGE</h3>
        <hr className="carnet-divider w-full mb-5" />
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
          Nos coachs vous entraînent aux 5 cartes avec des simulations complètes et une maîtrise des 17 ODD appliquée à votre profil.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/methodologie/entretiens-personnalite">
            <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">Voir toutes les fiches</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="font-instrument font-semibold text-carnet-ink hover:text-carnet-red py-6 px-8">Coaching personnalisé →</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default KEDGEPage;
