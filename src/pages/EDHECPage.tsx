import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Users,
  Clock,
  Award,
  CheckCircle,
  XCircle,
  Lightbulb,
  Target,
  Zap,
  BookOpen,
  Home,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';

const Section = ({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-16">
    <div className="mb-8">
      <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">{label}</span>
      <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">{title}</h2>
      <hr className="carnet-divider mt-4" />
    </div>
    {children}
  </section>
);

const KeyPoint = ({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) => (
  <div className="bg-white border border-carnet-rule/30 border-l-4 border-l-carnet-red rounded-r-lg p-5 flex items-baseline gap-4">
    <span className="font-lora text-[28px] text-carnet-red leading-none flex-shrink-0">{n}</span>
    <div>
      <h4 className="font-lora text-[17px] text-carnet-ink mb-1">{title}</h4>
      <p className="font-instrument text-[13.5px] text-carnet-ink-soft leading-[1.55]">{desc}</p>
    </div>
  </div>
);

const phases = [
  {
    n: '01',
    label: 'Phase 1 · 5 min',
    title: 'Présentation individuelle + mot imposé',
    color: 'border-l-carnet-red',
    content: `Chaque candidat reçoit un mot tiré au sort (exemples réels : "poésie", "archipel", "vertige", "renaissance"). Il dispose d'1 minute de réflexion silencieuse debout face au jury, puis se présente pendant 4 minutes. Le mot doit être intégré naturellement dans la présentation — pas en sujet central, mais comme fil conducteur ou accroche. Le jury évalue la créativité, l'authenticité, la qualité oratoire et la cohérence du parcours.`,
    items: ['Aucune note autorisée', 'Présentation debout face au jury ET aux 5 autres candidats', '4 min chronométrées'],
  },
  {
    n: '02',
    label: 'Phase 2 · 40-45 min',
    title: 'Travail de groupe sur cas vidéo',
    color: 'border-l-amber-500',
    content: `Le jury présente une vidéo de ~5 minutes sur une entreprise réelle (souvent dirigée par un alumni EDHEC) : secteur, activité, marché, contexte. Une problématique stratégique est posée avec 3 pistes de réflexion. 4 documents supports sont distribués. Les 6 candidats travaillent en totale autonomie pour construire une réponse collective. Le jury n'intervient pas — il observe uniquement. Types de sujets : transformation digitale, internationalisation, IA et emploi, RSE, repositionnement de marque.`,
    items: ['Le jury n\'intervient pas : il observe', 'Restitution collective en fin de phase', 'Évaluation du leadership collaboratif'],
  },
  {
    n: '03',
    label: 'Phase 3 · 20 min',
    title: 'Entretien individuel',
    color: 'border-l-green-600',
    content: `Chaque candidat passe face à un membre du jury. Les 2-3 premières minutes sont systématiquement consacrées à un bilan de la phase collective : "Quel rôle avez-vous joué ? Comment avez-vous vécu l'exercice ?" L'entretien porte ensuite sur les motivations pour l'EDHEC, le projet professionnel, les expériences marquantes (stages, associatif, sport, engagement) et éventuellement une question de culture générale ou d'actualité économique.`,
    items: ['Amorce obligatoire : bilan du travail de groupe', 'Questions sur la connaissance précise de l\'école', 'Projet pro exigé avec secteur + métier + horizon'],
  },
];

const groupErrors = [
  ['Le dominant tyrannique', 'Parler trop, couper les autres, monopoliser l\'espace — très pénalisé.'],
  ['Le fantôme stratégique', 'Rester silencieux par crainte ou calcul — encore plus pénalisé que le dominant.'],
  ['Le duo fermé', 'Former une alliance avec un seul candidat et exclure les autres de la discussion.'],
  ['Confondre leadership et volume', 'L\'EDHEC valorise le leadership collaboratif, pas la prise de parole maximale.'],
  ['Ignorer le temps', 'Arriver à la fin sans conclusion collective — catastrophique pour la restitution.'],
];

const tips = [
  {
    phase: 'Pour la Phase 1',
    icon: Zap,
    items: [
      'Construire une trame souple (3 blocs : qui je suis / ce qui me définit / où je vais) — pas un script.',
      'S\'entraîner à intégrer des mots aléatoires dans sa présentation (faire tirer un mot au hasard par quelqu\'un).',
      'Pratiquer debout, à voix haute, en conditions réelles.',
      'Viser la naturalité : préparer la structure, pas les phrases.',
    ],
  },
  {
    phase: 'Pour la Phase 2',
    icon: Users,
    items: [
      'S\'entraîner à des case studies et débats chronométrés en groupe.',
      'Pratiquer 3 postures : initiateur de structure / facilitateur / avocat du diable constructif.',
      'Travailler la prise de recul : après chaque entraînement, s\'auto-évaluer en 2 minutes.',
      'Lire l\'actu économique et business (Les Échos, HBR, management.fr).',
    ],
  },
  {
    phase: 'Pour la Phase 3',
    icon: Target,
    items: [
      'Préparer 3 motivations EDHEC précisément documentées (campus, MSc, Purposeful Business).',
      'Connaître : les 2 campus principaux (Lille, Nice), 2-3 MSc, la triple accréditation AACSB/EQUIS/AMBA.',
      'Préparer un projet professionnel crédible avec secteur + métier + horizon temporel.',
      'Préparer ses "histoires" d\'engagement, d\'impact, d\'échec transformé (méthode STAR).',
    ],
  },
];

const EDHECPage = () => (
  <div className="relative carnet-paper min-h-screen overflow-hidden">
    <div className="carnet-margin-line" />
    <div className="carnet-hole" style={{ top: 80 }} />
    <div className="carnet-hole" style={{ top: 220 }} />
    <div className="carnet-hole" style={{ top: 360 }} />

    <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-10">
      {/* Breadcrumb */}
      <nav className="mb-10">
        <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute gap-2">
          <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
            <Home className="h-3.5 w-3.5" /><span>Accueil</span>
          </Link>
          <ChevronRight className="h-3 w-3 opacity-50" />
          <Link to="/methodologie/entretiens-personnalite" className="hover:text-carnet-red transition-colors">Entretiens</Link>
          <ChevronRight className="h-3 w-3 opacity-50" />
          <span className="carnet-eyebrow text-[11px]">EDHEC</span>
        </div>
      </nav>

      {/* Back */}
      <div className="mb-10">
        <Link to="/methodologie/entretiens-personnalite">
          <Button variant="ghost" className="group text-carnet-ink-soft hover:text-carnet-red px-3 font-instrument text-[13px] font-semibold uppercase tracking-[0.1em]">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux fiches écoles
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <div className="mb-16 max-w-[760px]">
        <span className="carnet-eyebrow inline-flex items-center gap-2 mb-6">
          <Award className="h-3.5 w-3.5" />
          Fiche école · Ecricome
        </span>
        <h1 className="font-lora text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-5">
          EDHEC{' '}
          <em className="text-carnet-red not-italic">Business School</em>
        </h1>
        <hr className="carnet-divider mb-5" />
        <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft mb-8">
          L'épreuve la plus originale des grandes écoles : un format tripartite de 1h10-1h20 qui évalue le même candidat dans trois contextes radicalement différents.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock, label: 'Durée', value: '1h10–1h20' },
            { icon: Award, label: 'Coefficient', value: '15' },
            { icon: Users, label: 'Format', value: '6 candidats · 3 jurés' },
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

      {/* Section 1 — Structure */}
      <Section label="Section 01 · Structure" title="La Trilogie — 3 phases en 1h20">
        <div className="carnet-card p-7 mb-8">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[20px] text-carnet-ink mb-3">Le format le plus exigeant des concours</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.65]">
                L'EDHEC est la seule grande école du top 5 à utiliser ce format tripartite avec un travail de groupe sur cas vidéo réel.
                Les 3 jurés observent les 6 candidats sur l'intégralité des 3 phases (regards croisés), ce qui rend impossible
                toute préparation "par cœur" et valorise les profils authentiquement adaptables.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 font-instrument text-[13px] text-carnet-ink-soft">
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-carnet-red" strokeWidth={1.8} />Coefficient 15 (le plus élevé Ecricome)</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-carnet-red" strokeWidth={1.8} />Triple accréditation AACSB · EQUIS · AMBA</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-carnet-red" strokeWidth={1.8} />Valeurs officielles : Impact · Engagement · Innovation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {phases.map((ph) => (
            <div key={ph.n} className={`bg-white border border-carnet-rule/30 border-l-4 ${ph.color} rounded-r-lg p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-lora text-[30px] text-carnet-red leading-none">{ph.n}</span>
                <div>
                  <span className="font-instrument text-[10px] font-semibold uppercase tracking-[0.15em] text-carnet-ink-mute">{ph.label}</span>
                  <h4 className="font-lora text-[19px] text-carnet-ink">{ph.title}</h4>
                </div>
              </div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-4">{ph.content}</p>
              <ul className="space-y-1.5">
                {ph.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-instrument text-[13px] text-carnet-ink-soft">
                    <CheckCircle className="w-3.5 h-3.5 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 2 — Valeurs */}
      <Section label="Section 02 · Valeurs" title="Ce que l'EDHEC valorise">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { v: 'Impact', d: 'La capacité à prendre des responsabilités pour transformer positivement son environnement.' },
            { v: 'Engagement', d: 'S\'engager authentiquement et embarquer les autres dans un projet ambitieux et responsable.' },
            { v: 'Innovation', d: 'Le désir et la capacité de réinventer les pratiques — "Purposeful Business".' },
          ].map(({ v, d }) => (
            <div key={v} className="bg-white border border-carnet-rule/30 rounded-lg p-5">
              <h4 className="font-lora text-[18px] text-carnet-ink mb-2">{v}</h4>
              <div className="h-px w-6 bg-carnet-red mb-3" />
              <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-carnet-rule/30 border-l-4 border-l-carnet-red rounded-r-lg p-6">
          <h4 className="font-lora text-[18px] text-carnet-ink mb-3">Le concept "Purposeful Business"</h4>
          <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
            L'EDHEC forme des talents capables de "mettre le monde des affaires au service des générations futures".
            Depuis la création du Centre for Responsible Entrepreneurship (2022), la dimension RSE et entrepreneuriat responsable
            est de plus en plus présente dans les questions d'entretien individuel. Préparez un exemple concret d'action à impact.
          </p>
        </div>
      </Section>

      {/* Section 3 — Erreurs travail de groupe */}
      <Section label="Section 03 · Pièges" title="Les 5 erreurs fatales au travail de groupe">
        <div className="space-y-3">
          {groupErrors.map(([titre, raison], i) => (
            <div key={i} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
              <div className="font-lora text-[28px] text-carnet-red leading-none flex-shrink-0 w-10 text-center">
                {String(i + 1).padStart(2, '0')}
              </div>
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
      </Section>

      {/* Section 4 — Conseils */}
      <Section label="Section 04 · Préparation" title="Conseils par phase">
        <div className="space-y-6">
          {tips.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.phase} className="carnet-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-4 w-4 text-carnet-red" strokeWidth={1.8} />
                  <h4 className="font-lora text-[18px] text-carnet-ink">{t.phase}</h4>
                </div>
                <ul className="space-y-2">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-instrument text-[14px] text-carnet-ink-soft leading-[1.55]">
                      <CheckCircle className="w-4 h-4 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Section 5 — Générateur */}
      <Section label="Section 05 · Entraînement" title="Générateur de mots imposés EDHEC">
        <div className="carnet-card p-7 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <BookOpen className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-2">Entraînez-vous au mot imposé</h3>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6]">
                Faites tirer un mot, donnez-vous 1 minute de réflexion, puis intégrez-le dans votre présentation.
                Répétez jusqu'à ce que l'exercice devienne naturel — c'est la seule vraie préparation à la Phase 1.
              </p>
            </div>
          </div>
          <RandomWordGenerator type="word" />
        </div>
      </Section>

      {/* CTA */}
      <div className="mt-12 carnet-card px-8 py-10 flex flex-col items-start">
        <span className="carnet-eyebrow mb-4">
          <GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />
          Accompagnement
        </span>
        <h3 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink mb-3">Préparez votre Trilogie EDHEC</h3>
        <hr className="carnet-divider w-full mb-5" />
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
          Nos coachs vous préparent aux 3 phases : simulations de présentation avec mot imposé, entraînements en groupe, et mock entretiens individuels.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/methodologie/entretiens-personnalite">
            <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
              Voir toutes les fiches
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="font-instrument font-semibold text-carnet-ink hover:text-carnet-red py-6 px-8">
              Coaching personnalisé →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default EDHECPage;
