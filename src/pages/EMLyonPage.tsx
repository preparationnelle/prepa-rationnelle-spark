import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Users, Clock, Award, CheckCircle, XCircle, Lightbulb,
  Target, Home, ChevronRight, GraduationCap, Zap,
} from 'lucide-react';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';

const cards = [
  { theme: 'Expérience', color: 'bg-blue-50 border-blue-200', desc: 'Votre vécu, vos anecdotes, ce que vous avez traversé', examples: ['"Racontez une expérience où vous vous êtes senti(e) utile."', '"Quelle est la chose la plus difficile que vous ayez dû affronter ?"', '"Avec quel entrepreneur aimeriez-vous passer une journée et pourquoi ?"'] },
  { theme: 'Personnalité', color: 'bg-purple-50 border-purple-200', desc: 'Qui vous êtes, vos traits de caractère, vos valeurs', examples: ['"Si votre personnalité était un logo, lequel serait-il ?"', '"Quelle est la chose la plus folle que vous ayez faite ?"', '"Aimez-vous ne rien faire ?"'] },
  { theme: 'Créativité', color: 'bg-amber-50 border-amber-200', desc: 'Votre imagination, votre capacité à penser hors des sentiers battus', examples: ['"Si vous étiez un parfum, quel serait votre nom ?"', '"Inventez un concept de téléréalité qui favoriserait la créativité."', '"Vous avez 1 million d\'euros — dans quelle startup investissez-vous ?"'] },
  { theme: 'Projet', color: 'bg-green-50 border-green-200', desc: 'Votre vision d\'avenir, vos ambitions, votre projet professionnel', examples: ['"Quel serait le titre de votre biographie ?"', '"Si vous pouviez envoyer une lettre à votre vous de dans 10 ans, que diriez-vous ?"', '"Quel est votre plus grand rêve et que faites-vous pour le réaliser ?"'] },
];

const traps = [
  ['Paraître "trop préparé"', 'Emlyon conçoit délibérément le format pour que les réponses apprises par cœur sonnent faux. Préparez des idées et des anecdotes, pas des textes.'],
  ['Improviser dans le vide', 'L\'inverse du premier piège. S\'il faut avoir l\'air naturel, cela ne veut pas dire improviser sans structure. Une réponse bien pensée mais formulée naturellement est l\'objectif.'],
  ['Ignorer le juré observateur', 'Un juré parle, l\'autre observe. Les candidats s\'adressent uniquement au juré qui parle — erreur fatale. Maintenez le contact visuel avec les deux.'],
  ['Le pitch trop "CV"', 'Énumérer ses notes et distinctions académiques pendant 2 minutes. Le jury veut voir une personnalité, pas un relevé de notes.'],
  ['Réponses trop courtes aux cartes créativité', 'Ces questions semblent légères mais mesurent la richesse intellectuelle. Une réponse banale révèle un manque de profondeur.'],
  ['Méconnaître l\'école', 'Ne pas savoir ce qu\'est un "early maker" ou ne pas connaître les spécificités du PGE emlyon (makers\' labs, cursus hybridé) = signal négatif lors de la phase libre.'],
];

const EMLyonPage = () => (
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
          <span className="carnet-eyebrow text-[11px]">EM Lyon</span>
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
          emlyon <em className="text-carnet-red not-italic">business school</em>
        </h1>
        <hr className="carnet-divider mb-5" />
        <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft mb-8">
          L'entretien "early makers" : 25 minutes, 4 cartes tirées au sort, un tirage totalement aléatoire — la créativité et la spontanéité sont testées en temps réel.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock, label: 'Durée', value: '25 minutes' },
            { icon: Award, label: 'Coefficient', value: '9 (60% oral)' },
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
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 4 étapes en 25 minutes</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-8">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-3">Le jury emlyon : 1 juré interrogateur + 1 juré observateur</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Un membre du jury pose les questions, l'autre prend des notes et observe la communication non-verbale.
                Regardez les deux jurés en alternance tout au long de l'entretien.
                Le tirage des cartes est <strong className="text-carnet-ink">totalement aléatoire</strong> — aucun choix possible pour le candidat.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { n: '01', t: 'Pitch de 1-2 minutes', d: 'Le jury se présente brièvement, puis le candidat fait son pitch. Structure recommandée : Personnalité (1-2 qualités clés) → Parcours (anecdotes qui illustrent ces qualités) → Projet (ambitions + pourquoi emlyon). Ne pas réciter un CV — le jury veut une personnalité.' },
            { n: '02', t: 'Tirage des 4 cartes', d: 'Le candidat tire lui-même 4 cartes au hasard dans le jeu. Les 4 thèmes sont fixes : Expérience, Personnalité, Créativité, Projet. Mais chaque carte contient une question spécifique et imprévisible.' },
            { n: '03', t: 'Réponses aux 4 cartes (~15 min)', d: 'Aucun temps de préparation entre le tirage et les réponses. Le candidat choisit l\'ordre dans lequel il traite les cartes. Le jury peut relancer sur chaque réponse.' },
            { n: '04', t: 'Échange libre (~5 min)', d: 'Le jury reprend la main : parcours académique, projet pro, motivations pour emlyon, engagement associatif/sportif. Une question de fond sur l\'école peut intervenir ici.' },
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

      {/* 4 cartes */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 02 · Les cartes</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 4 thèmes — exemples réels</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-4">
          {cards.map((card) => (
            <div key={card.theme} className={`bg-white border rounded-lg p-6 ${card.color}`}>
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-lora text-[20px] text-carnet-ink mb-1">{card.theme}</h4>
                  <p className="font-instrument text-[13px] text-carnet-ink-mute mb-4">{card.desc}</p>
                  <ul className="space-y-2">
                    {card.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 font-instrument text-[13.5px] text-carnet-ink-soft italic">
                        <CheckCircle className="w-3.5 h-3.5 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />{ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pièges */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 03 · Pièges</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 6 erreurs qui pénalisent</h2>
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

      {/* Valeurs */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 04 · Valeurs</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">La philosophie "early makers"</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-6">
          <div className="flex items-start gap-4">
            <Target className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-3">"Make to learn, learn to make"</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Un early maker est un individu acteur de sa propre existence — conscient des enjeux contemporains,
                entrepreneur au sens large de sa propre vie. Emlyon valorise les <strong className="text-carnet-ink">profils atypiques</strong>,
                capables de penser hors des sentiers battus avec une trajectoire singulière et cohérente.
              </p>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Les 5 valeurs officielles : <strong className="text-carnet-ink">Exigence · Responsabilité · Intégrité · Diversité · Solidarité</strong>. Le jury cherche à les évaluer dans chaque réponse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Générateur */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 05 · Entraînement</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Générateur de questions EM Lyon</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7">
          <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-6">
            Tirez une question aléatoire, donnez-vous 0 secondes de préparation, et répondez à voix haute. Répétez jusqu'à ce que l'exercice devienne naturel.
          </p>
          <RandomWordGenerator type="emlyon" />
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 carnet-card px-8 py-10 flex flex-col items-start">
        <span className="carnet-eyebrow mb-4"><GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />Accompagnement</span>
        <h3 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink mb-3">Préparez votre entretien EM Lyon</h3>
        <hr className="carnet-divider w-full mb-5" />
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
          Nos coachs vous entraînent aux cartes : banque d'anecdotes, structure des réponses et simulations complètes en conditions réelles.
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

export default EMLyonPage;
