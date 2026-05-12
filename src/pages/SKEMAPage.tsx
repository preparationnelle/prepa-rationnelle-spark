import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Users, Clock, Award, CheckCircle, XCircle, Lightbulb,
  Target, Home, ChevronRight, GraduationCap, FileText, Globe,
} from 'lucide-react';

const campuses = [
  { c: 'Sophia Antipolis', d: 'Campus historique, siège de l\'école' },
  { c: 'Paris (La Défense)', d: 'Hub finance et conseil, centre-ville' },
  { c: 'Lille', d: 'Campus historique' },
  { c: 'Raleigh (USA)', d: 'Caroline du Nord — environnement tech américain' },
  { c: 'Suzhou (Chine)', d: 'Accès au marché asiatique' },
  { c: 'Belo Horizonte (Brésil)', d: 'Marché Amérique latine' },
  { c: 'Stellenbosch (Afrique du Sud)', d: 'Campus africain — Le Cap' },
  { c: 'Dubaï (EAU)', d: 'Inauguré récemment — zone MENA (attention : pas Abu Dhabi)' },
];

const traps = [
  ['Le CV projectif irréaliste', 'Devenir DG d\'un grand groupe à 32 ans sans étapes intermédiaires crédibles. Le jury est composé de professionnels : ils voient immédiatement ce qui est fantasmé.'],
  ['Le manque de cohérence interne', 'Projeter un poste à Shanghai sans mentionner le chinois dans les compétences, ou viser la finance sans aucune expérience dans ce domaine.'],
  ['Oublier SKEMA sur le CV', 'L\'école doit clairement apparaître comme l\'étape de formation dans la trajectoire. Le jury doit voir SKEMA inscrite dans le parcours.'],
  ['Un projet trop vague', '"Je veux travailler dans le marketing" sans préciser secteur, B2B/B2C, géographie, taille d\'entreprise, intitulé de poste.'],
  ['Ne pas connaître SKEMA', 'Répondre "Pourquoi SKEMA ?" avec des généralités s\'appliquant à 10 écoles. Citez un MSc spécifique, un campus, un partenariat entreprise.'],
  ['Apporter trop peu d\'exemplaires', 'Un seul exemplaire pour 3 jurés crée une situation gênante et montre un manque de préparation.'],
];

const SKEMAPage = () => (
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
          <span className="carnet-eyebrow text-[11px]">SKEMA</span>
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
          SKEMA <em className="text-carnet-red not-italic">Business School</em>
        </h1>
        <hr className="carnet-divider mb-5" />
        <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft mb-8">
          Le coefficient le plus élevé de toutes les écoles, et une épreuve unique : un CV fictif projetant votre carrière dans 10 ans.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock, label: 'Durée', value: '25 minutes' },
            { icon: Award, label: 'Coefficient', value: '20 (66% oral)' },
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

      {/* CV Projectif */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 01 · Le CV Projectif</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Votre carrière dans 10 ans — en 1 page</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-6">
          <div className="flex items-start gap-4">
            <FileText className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-3">Le principe : un CV hybride mi-réel, mi-fictif</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Le CV projectif est la signature pédagogique de SKEMA. Le candidat se projette dans sa vie professionnelle
                <strong className="text-carnet-ink"> à 10 ans</strong> (vers 32-33 ans) et rédige un CV comme si ce futur était déjà accompli.
                Il est préparé <strong className="text-carnet-ink">chez soi à l'avance</strong> et apporté le jour J —
                <strong className="text-carnet-ink"> un exemplaire par membre du jury</strong> (2 à 3 copies).
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-instrument text-[13px] text-carnet-ink font-semibold mb-1">Code couleur obligatoire</p>
                <p className="font-instrument text-[13px] text-carnet-ink-soft">
                  <strong className="text-carnet-ink">Noir / bleu foncé</strong> = tout ce qui est réel et déjà accompli.
                  <strong className="text-carnet-ink"> Rouge / violet</strong> = tout ce qui est projeté, fictif.
                  Cette distinction visuelle est impérative — le jury doit distinguer immédiatement réel et fictif.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { n: '01', t: 'État civil & formation', d: 'Bac (filière, mention, lycée), SKEMA Business School obligatoirement inscrite avec le MSc envisagé, éventuellement une année à l\'étranger.' },
            { n: '02', t: '3 postes projetés sur 6-7 ans', d: 'Poste junior (18 mois-2 ans) → Poste senior (2 ans) → Poste de direction (2-3 ans). Progression logique et crédible, cohérence sectorielle et géographique.' },
            { n: '03', t: 'Compétences', d: 'Langues (niveaux actuels + projetés), outils, compétences techniques. Si un poste est à Shanghai : le chinois doit apparaître ici.' },
            { n: '04', t: 'Centres d\'intérêt & engagements', d: 'Associatif, sportif, culturel — en lien avec votre personnalité réelle. SKEMA apprécie les profils complets.' },
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

      {/* Structure */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 02 · Structure</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Déroulement en 3 phases</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-4">
          {[
            { n: '01', t: 'Pitch + présentation du CV (~10 min)', d: 'Le candidat pitche son parcours en 2-3 min (D\'où je viens → Pourquoi SKEMA → Où je vais), puis le jury rebondit sur les éléments du CV projectif.' },
            { n: '02', t: 'Questions de personnalité (~10 min)', d: 'Le jury quitte le CV pour explorer la personnalité profonde : échecs, réussites, place dans un groupe, gestion du stress, expériences marquantes.' },
            { n: '03', t: 'Motivation SKEMA & échanges libres (~5 min)', d: '"Pourquoi SKEMA et pas une autre école du même rang ?" "Quel campus souhaiteriez-vous et pourquoi ?" Questions du candidat sur l\'école.' },
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
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 03 · Campus</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 8 campus — "At home worldwide"</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {campuses.map(({ c, d }) => (
            <div key={c} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-3">
              <Globe className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <h4 className="font-lora text-[16px] text-carnet-ink">{c}</h4>
                <p className="font-instrument text-[12.5px] text-carnet-ink-soft">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pièges */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 04 · Pièges</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 6 erreurs à ne pas commettre</h2>
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
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 05 · Conseils</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Comment construire un CV projectif convaincant</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-3">
          {[
            ['Recherchez des profils LinkedIn d\'alumni SKEMA', 'Dans votre secteur cible, pour repérer les trajectoires réelles à 10 ans de diplôme. C\'est la meilleure source de crédibilité.'],
            ['Préparez une justification pour chaque ligne', 'Chaque poste, chaque entreprise, chaque compétence doit pouvoir être défendu oralement pendant 3 minutes.'],
            ['Contactez 2-3 alumni SKEMA avant l\'oral', 'Mentionner ces échanges en entretien est très valorisé par le jury — signal fort d\'engagement réel pour l\'école.'],
            ['Imprimez 3 exemplaires minimum', 'Pour un jury de 2 + votre propre copie de référence. Vérifiez que le code couleur est immédiatement lisible.'],
            ['Préparez un "Pourquoi SKEMA" différenciant', 'Un MSc particulier, un campus méconnu (Stellenbosch, Belo Horizonte), une spécificité pédagogique — pas des généralités.'],
          ].map(([t, d], i) => (
            <div key={i} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
              <CheckCircle className="w-4 h-4 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <h5 className="font-lora text-[15px] text-carnet-ink mb-1">{t}</h5>
                <p className="font-instrument text-[13.5px] text-carnet-ink-soft">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guide CV projectif */}
      <div className="mb-8 bg-white border border-carnet-rule/30 border-l-4 border-l-carnet-red rounded-r-lg p-6">
        <h4 className="font-lora text-[18px] text-carnet-ink mb-2">Guide complet : le CV projectif SKEMA</h4>
        <p className="font-instrument text-[14px] text-carnet-ink-soft mb-4">Découvrez notre guide pas à pas pour construire un CV projectif convaincant, avec des exemples annotés.</p>
        <Link to="/cv-projectif">
          <Button variant="outline" className="border-carnet-rule/60 bg-transparent text-carnet-ink hover:text-carnet-red hover:border-carnet-red font-instrument font-semibold rounded-md">
            Voir le guide CV projectif →
          </Button>
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-12 carnet-card px-8 py-10 flex flex-col items-start">
        <span className="carnet-eyebrow mb-4"><GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />Accompagnement</span>
        <h3 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink mb-3">Préparez votre entretien SKEMA</h3>
        <hr className="carnet-divider w-full mb-5" />
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
          Nos coachs vous aident à construire un CV projectif cohérent et à préparer la défense de chaque ligne face au jury.
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

export default SKEMAPage;
