import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Users, Clock, Award, CheckCircle, XCircle, Lightbulb,
  Target, Home, ChevronRight, GraduationCap,
} from 'lucide-react';

const questions9 = [
  'De quelle action/réalisation individuelle au sein d\'une organisation êtes-vous le plus fier ? Pourquoi ?',
  'Qu\'attendez-vous du Programme Grande École de NEOMA ?',
  'Qu\'attendez-vous d\'une expérience internationale ? Quelles zones géographiques ou cultures vous attirent ?',
  'Quelle(s) contribution(s) pensez-vous apporter à notre école si vous l\'intégrez ?',
  'Qu\'appréciez-vous le plus, et le moins, dans le travail en équipe ?',
  'Avez-vous déjà fait preuve d\'innovation ou de créativité ? À quelle occasion ?',
  'Décrivez une action collective menée au sein d\'une organisation.',
  'Quel est votre projet professionnel et vos aspirations futures ?',
  'Qu\'est-ce qui vous intéresse dans le management et l\'entreprise ?',
];

const campuses = [
  { c: 'Reims', d: 'Campus historique. MBA Wine & Champagne, Real Estate, accent culture & littérature.' },
  { c: 'Rouen', d: 'Finance, Supply Chain, Droit — campus techniciste et professionnel.' },
  { c: 'Paris', d: 'Essentiellement Executive Education — pas le campus des prépas ECG.' },
];

const traps = [
  ['Sous-estimer le questionnaire', 'Le jury l\'utilise comme base de TOUTE la discussion. Chaque réponse bâclée devient un piège potentiel. Certains candidats recopient leur CV — c\'est la pire erreur.'],
  ['Se relâcher face à un jury bienveillant', 'Le jury NEOMA est doux mais pas inattentif. Des candidats se relâchent et perdent en précision.'],
  ['Ne pas connaître une seule association', 'Ne pas connaître une association NEOMA par nom est rédhibitoire. Le jury vérifie systématiquement.'],
  ['Répondre "Pourquoi NEOMA ?" avec des généralités', '"Belle école, bonne réputation" au lieu des accréditations, campus, spécialisations, partenariats spécifiques.'],
  ['Oublier de relier ses expériences aux 4 valeurs', 'Innovation · Ouverture · Respect · Excellence — chaque anecdote doit s\'ancrer dans au moins une de ces valeurs.'],
  ['Confondre Reims et Rouen', 'Si vous postulez sur un campus spécifique, connaissez ses spécialisations propres. Ne pas intervertir.'],
];

const NEOMAPage = () => (
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
          <span className="carnet-eyebrow text-[11px]">NEOMA</span>
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
          NEOMA <em className="text-carnet-red not-italic">Business School</em>
        </h1>
        <hr className="carnet-divider mb-5" />
        <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft mb-8">
          Un questionnaire de 9 questions (400 caractères max par réponse) comme base d'une discussion bienveillante mais structurée autour du "Responsible Leadership".
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock, label: 'Durée', value: '30 minutes' },
            { icon: Award, label: 'Coefficient', value: '12' },
            { icon: Users, label: 'Jury', value: '2-3 membres' },
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
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 9 questions officielles — 400 caractères max</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-6">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-3">Le questionnaire le plus structuré d'Ecricome</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Disponible en ligne sur le site des admissibles dès la publication des résultats. À remplir au moins 24h avant et à apporter imprimé en plusieurs exemplaires
                (un par membre du jury, soit 2-3 copies). Limite stricte de <strong className="text-carnet-ink">400 caractères maximum par réponse</strong> — concision et précision obligatoires.
              </p>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-instrument text-[13px] text-carnet-ink">
                  <strong>Conseil stratégique :</strong> certaines réponses servent de "portes d'entrée" pour des sujets que vous voulez développer à l'oral.
                  Ne pas tout écrire — garder des éléments à ajouter en entretien.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {questions9.map((q, i) => (
            <div key={i} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
              <span className="font-lora text-[22px] text-carnet-red leading-none flex-shrink-0 w-8 text-center">{i + 1}</span>
              <p className="font-instrument text-[14px] text-carnet-ink leading-[1.6]">{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Campuses */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 02 · Campus</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 3 campus — savoir les distinguer</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {campuses.map(({ c, d }) => (
            <div key={c} className="bg-white border border-carnet-rule/30 rounded-lg p-5">
              <h4 className="font-lora text-[18px] text-carnet-ink mb-2">{c}</h4>
              <div className="h-px w-6 bg-carnet-red mb-3" />
              <p className="font-instrument text-[13px] text-carnet-ink-soft">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 03 · Valeurs</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Ce que NEOMA valorise — "Engage for the Future"</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-5">
          <div className="flex items-start gap-4">
            <Target className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-3">Plan stratégique "Engage for the Future" 2023-2027</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Mission officielle : <em>"Former et accompagner les managers et entrepreneurs de demain, capables d'exercer un leadership responsable."</em>
                Les 4 valeurs officielles : <strong className="text-carnet-ink">Ouverture · Innovation · Respect · Excellence</strong>.
              </p>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Éléments distinctifs à citer : triple accréditation EQUIS + AACSB + AMBA, 97 associations étudiantes, partenariat Mistral AI (2025),
                cours de littérature obligatoire en 1ère année PGE (rentrée 2025), Summer Ventures à Berkeley.
              </p>
            </div>
          </div>
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

      {/* Conseils */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 05 · Préparation</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Conseils de préparation spécifiques NEOMA</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-3">
          {[
            ['Remplir le questionnaire 24h minimum avant', 'Respecter les 400 caractères — ni trop court ni trop long. Orthographe impeccable. Cohérence totale avec ce que vous direz à l\'oral.'],
            ['Identifier 3-4 associations NEOMA par nom', 'BDA, BDS, Bureau des Étudiants, associations thématiques. Le jury vérifie que vous connaissez la vie de l\'école.'],
            ['Préparer un "Pourquoi NEOMA ?" précis', 'Citer accréditations, campus spécifique, MSc, partenariats. Mentionner le partenariat Mistral AI si l\'IA est dans votre projet.'],
            ['Construire ses anecdotes en méthode STAR', 'Situation / Tâche / Action / Résultat — pour chacune des 9 questions, préparer une version de 2-3 minutes.'],
            ['Préparer un projet pro avec direction claire', 'Secteur + métier + horizon temporel + lien avec les ressources réelles de NEOMA (MSc, doubles diplômes, international).'],
          ].map(([t, d]) => (
            <div key={t} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
              <CheckCircle className="w-4 h-4 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <h5 className="font-lora text-[15px] text-carnet-ink mb-1">{t}</h5>
                <p className="font-instrument text-[13.5px] text-carnet-ink-soft">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 carnet-card px-8 py-10 flex flex-col items-start">
        <span className="carnet-eyebrow mb-4"><GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />Accompagnement</span>
        <h3 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink mb-3">Préparez votre entretien NEOMA</h3>
        <hr className="carnet-divider w-full mb-5" />
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
          Nos coachs vous aident à rédiger chaque réponse du questionnaire et à simuler l'entretien complet en conditions réelles.
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

export default NEOMAPage;
