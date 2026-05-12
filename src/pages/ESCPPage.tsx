import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Users, Clock, Award, CheckCircle, XCircle, Lightbulb,
  Target, Home, ChevronRight, GraduationCap, AlertTriangle, Globe,
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

const questions = [
  'Quels sont vos centres d\'intérêt ou activités extrascolaires ?',
  'Citez un projet, une réalisation ou une prise de responsabilités dont vous êtes fier(e).',
  'Avez-vous déjà travaillé ? Quelle expérience avez-vous du monde du travail ?',
  'Quelles sont vos expériences de différentes cultures ?',
  'Décrivez une expérience marquante. Que vous a-t-elle appris sur vous-même ?',
  'Quelles autres informations souhaitez-vous communiquer au jury ?',
];

const campuses = [
  { c: 'Paris', d: 'Hub finance, conseil, luxe — capital européen de référence.' },
  { c: 'Berlin', d: 'Tech, startup ecosystem, politique européenne. Idéal pour profils entrepreneuriaux.' },
  { c: 'Londres', d: 'Finance internationale, City, consulting mondial. Argument géopolitique post-Brexit.' },
  { c: 'Madrid', d: 'Amérique latine comme débouché, marché hispanique, secteur énergie.' },
  { c: 'Turin', d: 'Design, industrie automobile, luxe et mode italiens.' },
  { c: 'Varsovie', d: 'Europe de l\'Est émergente, hub logistique et tech — profil atypique valorisé.' },
];

const traps = [
  ['Le discours générique sur l\'ESCP', '"C\'est une grande école internationale avec un bon réseau." — 0 impact. Citez le séminaire Parlement européen, un campus précis, une association (Blue Factory), une chaire.'],
  ['Le questionnaire surchargé', 'Trop long, trop liste. Chaque élément mentionné doit pouvoir être développé 5 minutes à l\'oral.'],
  ['Incohérence questionnaire/oral', 'Si vous écrivez "passion pour la Chine", vous devrez en parler 20 minutes. Ne mentez pas, n\'embellissez pas.'],
  ['Le projet professionnel inventé', 'Le jury détecte en 2 questions. Mieux vaut dire "je ne suis pas encore fixé mais voilà la direction que j\'explore et pourquoi."'],
  ['Ignorer la dimension européenne', 'Ne pas mentionner l\'Europe dans "pourquoi l\'ESCP" est une erreur élémentaire. L\'européité est l\'identité centrale de l\'ESCP.'],
  ['Paniquer au basculement en anglais', 'Le jury évalue l\'aisance du switch, pas la perfection. Répondre lentement mais avec assurance vaut mieux que bafouiller.'],
];

const ESCPPage = () => {
  const { trackPageVisit } = useProgress();
  useEffect(() => { trackPageVisit('school'); }, [trackPageVisit]);

  return (
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
            <span className="carnet-eyebrow text-[11px]">ESCP</span>
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
          <span className="carnet-eyebrow inline-flex items-center gap-2 mb-6"><Award className="h-3.5 w-3.5" />Fiche école · BCE</span>
          <h1 className="font-lora text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-5">
            ESCP <em className="text-carnet-red not-italic">Business School</em>
          </h1>
          <hr className="carnet-divider mb-5" />
          <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft mb-8">
            L'école multicampus européenne par excellence — 6 campus, une note éliminatoire, et un questionnaire qui structure tout l'entretien.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Clock, label: 'Durée', value: '30 minutes' },
              { icon: Award, label: 'Coefficient', value: '12 (~40% oral)' },
              { icon: AlertTriangle, label: 'Note éliminatoire', value: '< 7/20 = éliminé' },
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

        {/* Questionnaire */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 01 · Questionnaire</span>
            <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Le questionnaire — trame de tout l'entretien</h2>
            <hr className="carnet-divider mt-4" />
          </div>
          <div className="carnet-card p-7 mb-6">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
              <div>
                <h3 className="font-lora text-[18px] text-carnet-ink mb-3">Format physique : 1 page recto, 3 exemplaires agrafés + photo</h3>
                <hr className="carnet-divider mb-4" />
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-4">
                  Le questionnaire est fourni avec les résultats d'admissibilité. Vous le remplissez chez vous, apportez
                  <strong className="text-carnet-ink"> 3 exemplaires agrafés</strong> (un par membre du jury) avec une
                  <strong className="text-carnet-ink"> photo d'identité</strong> collée en haut à droite. Le jury le lit avant votre entrée dans la salle —
                  l'entretien est donc personnalisé depuis le premier instant.
                </p>
                <p className="font-instrument text-[13px] text-carnet-ink-mute">
                  Note éliminatoire depuis 2026 : toute note {'<'} 7/20 entraîne l'élimination automatique du concours, quels que soient vos autres résultats.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {questions.map((q, i) => (
              <div key={i} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
                <span className="font-lora text-[24px] text-carnet-red leading-none flex-shrink-0 w-8 text-center">{i + 1}</span>
                <p className="font-instrument text-[14px] text-carnet-ink leading-[1.6]">{q}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-white border border-carnet-rule/30 border-l-4 border-l-amber-500 rounded-r-lg p-5">
            <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
              <strong className="text-carnet-ink">La question 6 est stratégique</strong> : c'est votre espace de valorisation libre. Mentionnez un projet entrepreneurial,
              un engagement associatif, une distinction sportive ou une expérience atypique qui vous différencie vraiment.
            </p>
          </div>
        </section>

        {/* Structure entretien */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 02 · Structure</span>
            <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Déroulement en 5 phases</h2>
            <hr className="carnet-divider mt-4" />
          </div>
          <div className="space-y-4">
            {[
              { n: '01', t: 'Parcours & personnalité (~10-12 min)', d: 'Le jury rebondit sur les éléments du questionnaire. Dialogue construit depuis vos écrits — pas de question générique.' },
              { n: '02', t: 'Motivations & projet (~8-10 min)', d: 'Pourquoi l\'ESCP spécifiquement ? Quels campus et pourquoi ? Quel projet professionnel ? Cohérence du choix.' },
              { n: '03', t: 'Actualité (~3-5 min)', d: 'Une ou deux questions sur l\'actualité récente. Le jury teste la pensée spontanée — pas de récitation, une réflexion en direct.' },
              { n: '04', t: 'Question en anglais (~2-3 min)', d: 'Systématiquement en fin d\'entretien. Souvent une question de personnalité reformulée. Le jury observe l\'aisance du basculement, pas la perfection grammaticale.' },
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

        {/* Campuses */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 03 · Les campus</span>
            <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Valoriser les 6 campus intelligemment</h2>
            <hr className="carnet-divider mt-4" />
          </div>
          <div className="carnet-card p-6 mb-5">
            <div className="flex items-start gap-4">
              <Globe className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Ne pas lister les campus mécaniquement. Construire un récit : <em>"J'ai choisi Berlin en M1 car mon projet dans la greentech nécessite d'être au cœur de l'écosystème startup européen, et Madrid en M2 pour ouvrir ce marché vers l'Amérique latine."</em>
                Mentionner le séminaire "Designing Europe" au Parlement européen = signal fort de connaissance réelle de l'école.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {campuses.map(({ c, d }) => (
              <div key={c} className="bg-white border border-carnet-rule/30 rounded-lg p-4">
                <h4 className="font-lora text-[17px] text-carnet-ink mb-1">{c}</h4>
                <p className="font-instrument text-[13px] text-carnet-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pièges */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 04 · Pièges</span>
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

        {/* CTA */}
        <div className="mt-12 carnet-card px-8 py-10 flex flex-col items-start">
          <span className="carnet-eyebrow mb-4"><GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />Accompagnement</span>
          <h3 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink mb-3">Préparez votre entretien ESCP</h3>
          <hr className="carnet-divider w-full mb-5" />
          <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
            Nos coachs vous aident à rédiger chaque réponse du questionnaire, préparer le switch anglais et simuler l'entretien complet.
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
};

export default ESCPPage;
