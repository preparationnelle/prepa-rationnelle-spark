import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Users, Clock, Award, CheckCircle, XCircle, Lightbulb,
  Target, Home, ChevronRight, GraduationCap, MessageSquare, Newspaper,
} from 'lucide-react';

const inverseErrors = [
  ['Le questionnaire mécanique', 'Arriver avec 20 questions préparées et les poser une à une sans écouter les réponses. L\'échange devient un interrogatoire, pas une conversation.'],
  ['L\'absence de rebond', 'Ne pas saisir les "perches" que tend le jury dans ses réponses. Ne pas rebondir = signal d\'écoute superficielle.'],
  ['Choisir le jury "le plus souriant"', 'Tous les candidats font pareil — ce jury-là sera fatigué, moins engagé. Choisir le plus austère ou l\'inattendu est souvent plus payant.'],
  ['La synthèse chronologique', 'Résumer ce qui a été dit ("d\'abord vous m\'avez dit X, puis Y..."). La synthèse attendue est analytique : dégager 1-2 qualités profondes à partir des informations recueillies.'],
  ['Les questions fermées ou factuelles', '"Quel est votre salaire ?", "Combien d\'employés ?" — tuent la conversation immédiatement.'],
  ['Poser des questions en lien avec l\'exposé', 'Hors cadre — l\'entretien inversé est une phase distincte.'],
];

const GEMPage = () => (
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
          <span className="carnet-eyebrow text-[11px]">GEM</span>
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
          GEM <em className="text-carnet-red not-italic">Grenoble</em>
        </h1>
        <hr className="carnet-divider mb-5" />
        <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft mb-8">
          L'entretien le plus original des grandes écoles : un exposé préparé, puis 10 minutes où c'est vous qui interviewez le jury, suivi d'un échange classique.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock, label: 'Durée', value: '30 minutes' },
            { icon: Award, label: 'Coefficient', value: '10 (50% oral)' },
            { icon: Users, label: 'Jury', value: '3 membres' },
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
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">3 phases en 30 minutes</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-6">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-3">Test de personnalité pré-entretien (~15 min)</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Avant d'entrer en salle, les candidats remplissent un test de personnalité. Le jury l'utilise comme base pour la phase d'échange classique (phase 3).
                Répondez honnêtement — le jury s'en sert pour creuser de façon authentique. Pas de "bonne" réponse, mais une incongruence entre le test et l'entretien est immédiatement signalée.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {[
            {
              n: '01', label: 'Phase 1 · 5 min', title: 'Exposé d\'actualité préparé chez soi',
              content: 'Le sujet est choisi librement par le candidat (thématique géopolitique, économique, ou management de la technologie/innovation), avec moins de 2 ans d\'actualité. Aucun temps de préparation supplémentaire le jour J. L\'exposé est présenté sans support, pendant 5 minutes exactement. Suivi de questions du jury pour challenger votre analyse.',
              items: ['Choisissez un sujet original — les jurys voient IA, transition énergétique tous les jours', 'Structure claire : contexte → enjeux → analyse personnelle → prise de position', 'Entraînez-vous à tenir 5 minutes exactement'],
            },
            {
              n: '02', label: 'Phase 2 · 10 min', title: 'Entretien inversé — vous interviewez le jury',
              content: '1. Présentation rapide des jurés (prénom, nom, métier). 2. Le candidat choisit un membre du jury (pas le président). 3. 9 minutes d\'interview où c\'est le candidat qui pose des questions. 4. 1 minute de synthèse orale : le candidat restitue les informations recueillies — pas un résumé chronologique, mais une lecture analytique dégageant 1-2 qualités profondes de l\'interlocuteur.',
              items: ['Préparez des thématiques de questions, pas une liste fixe', '9 minutes passent vite — gérez le temps sans regarder votre montre', 'La synthèse d\'1 minute est la partie la plus sous-préparée'],
            },
            {
              n: '03', label: 'Phase 3 · 15 min', title: 'Échange classique basé sur le test de personnalité',
              content: 'Le jury reprend la main et pose des questions à partir des résultats du test de personnalité. Questions sur le parcours personnel, les expériences, les centres d\'intérêt, les valeurs, qualités/défauts, projets, et motivation pour GEM. Le jury peut aussi rebondir sur l\'exposé ou ce qui a émergé de l\'entretien inversé.',
              items: ['Répondre honnêtement au test — le jury creuse, l\'incongruence est immédiatement repérée', 'Connaître GEM en détail : Société à Mission, MTI, campus internationaux, TIM LIVE Academy', '"Qu\'est-ce que le Responsible Leadership ?" — préparez une réponse concrète'],
            },
          ].map((ph) => (
            <div key={ph.n} className="bg-white border border-carnet-rule/30 border-l-4 border-l-carnet-red rounded-r-lg p-6">
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
                    <CheckCircle className="w-3.5 h-3.5 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Questions pour l'entretien inversé */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 02 · Entretien inversé</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Questions à préparer pour interviewer le jury</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { registre: 'Parcours professionnel', qs: ['Quel a été le choix structurant de votre carrière ?', 'Qu\'est-ce qui vous a amené à ce métier ?', 'Qu\'avez-vous appris de plus important au cours de votre carrière ?'] },
            { registre: 'Conseil & vision', qs: ['Que conseilleriez-vous à un jeune voulant exercer votre métier ?', 'Comment voyez-vous l\'évolution de votre secteur dans 10 ans ?', 'Qu\'est-ce qui vous donne encore de l\'énergie au quotidien ?'] },
            { registre: 'GEM & formation', qs: ['Qu\'est-ce que GEM vous a apporté dans votre parcours ?', 'Comment le management de la technologie a-t-il changé dans votre secteur ?', 'Que retenez-vous de votre passage à GEM ?'] },
            { registre: 'Dimension humaine', qs: ['Quelles sont les qualités indispensables pour exercer votre métier ?', 'Qu\'est-ce que vous feriez différemment avec le recul ?', 'Qu\'est-ce qui vous passionne en dehors du travail ?'] },
          ].map(({ registre, qs }) => (
            <div key={registre} className="bg-white border border-carnet-rule/30 rounded-lg p-5">
              <h4 className="font-lora text-[16px] text-carnet-ink mb-3">{registre}</h4>
              <ul className="space-y-2">
                {qs.map((q) => (
                  <li key={q} className="flex items-start gap-2 font-instrument text-[13px] text-carnet-ink-soft italic">
                    <MessageSquare className="w-3.5 h-3.5 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />{q}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-6 bg-white border border-carnet-rule/30 border-l-4 border-l-carnet-red rounded-r-lg p-6">
          <h4 className="font-lora text-[17px] text-carnet-ink mb-3">Guide complet : questions pour l'entretien inversé GEM</h4>
          <p className="font-instrument text-[14px] text-carnet-ink-soft mb-4">Découvrez toutes nos questions classées par profil de jury pour l'entretien inversé.</p>
          <Link to="/entretien-inverse-gem">
            <Button variant="outline" className="border-carnet-rule/60 bg-transparent text-carnet-ink hover:text-carnet-red hover:border-carnet-red font-instrument font-semibold rounded-md">
              Voir le guide complet →
            </Button>
          </Link>
        </div>
      </section>

      {/* Erreurs entretien inversé */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 03 · Pièges</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">6 erreurs fatales à l'entretien inversé</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-3">
          {inverseErrors.map(([titre, raison], i) => (
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

      {/* Valeurs GEM */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 04 · Valeurs</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Ce que GEM valorise — "Responsible Leadership"</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { t: '1ère Business School française "Société à Mission"', d: 'Depuis 2021 (loi PACTE) — raison d\'être autour des transitions écologique, sociétale et économique. Label DD & RS.' },
            { t: 'ADN : Management de la Technologie & de l\'Innovation', d: 'Ce qui distingue GEM de ses concurrentes. TIM LIVE Academy lancée en 2025. Campus Chine ouverture 2026.' },
            { t: 'Valeurs officielles', d: 'Responsabilité · Excellence · Bienveillance. Triple accréditation AACSB · EQUIS · AMBA.' },
            { t: 'Dimension internationale forte', d: 'Grenoble et Paris + Berlin, Singapour, Pékin, Cambridge, McGill, Georgetown. 130+ nationalités sur le campus. Investissement 32M€ sur 4 projets stratégiques (2025).' },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white border border-carnet-rule/30 rounded-lg p-5">
              <h4 className="font-lora text-[16px] text-carnet-ink mb-2">{t}</h4>
              <p className="font-instrument text-[13px] text-carnet-ink-soft">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 carnet-card px-8 py-10 flex flex-col items-start">
        <span className="carnet-eyebrow mb-4"><GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />Accompagnement</span>
        <h3 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink mb-3">Préparez votre entretien GEM</h3>
        <hr className="carnet-divider w-full mb-5" />
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
          Nos coachs vous entraînent aux 3 phases : exposé d'actualité, entretien inversé avec simulations réelles, et échange classique.
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

export default GEMPage;
