import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Users, Clock, Award, CheckCircle, XCircle, Lightbulb,
  Target, Zap, Home, ChevronRight, GraduationCap, AlertTriangle,
} from 'lucide-react';

const phases = [
  {
    n: '01', label: 'Phase 1 · 5 min', title: 'Pitch personnel libre',
    content: 'Le candidat se présente librement pendant 5 minutes, sans support, sans guide. C\'est lui qui choisit entièrement ce qu\'il met en avant. Le jury écoute attentivement chaque mot — tout ce que vous dites devient une cible potentielle pour la suite de l\'entretien. Préparez-le structuré mais délivrez-le naturellement.',
    items: ['Sans support ni aide-mémoire', 'Choisir 3 points clés qui vous définissent vraiment', 'Préparer la structure, pas les phrases'],
  },
  {
    n: '02', label: 'Phase 2 · ~25 min', title: 'Conversation libre approfondie',
    content: 'Le jury rebondit sur chaque élément de votre pitch et creuse dans le moindre détail. Si vous parlez de piano, attendez-vous à "Quelles œuvres préférez-vous jouer ?" ; si vous mentionnez un séjour à l\'étranger, ils creusent la culture du pays, votre ressenti, ce que ça a changé en vous. Le jury valide la sincérité et la profondeur de tout ce que vous dites.',
    items: ['Le jury rebondit sur tout ce que vous avez dit', 'Aucun élément du pitch n\'est à l\'abri', 'Style bienveillant mais parfois délibérément déstabilisant'],
  },
  {
    n: '03', label: 'Phase 3 · ~15 min', title: 'Mise en situation',
    content: 'Une situation concrète inspirée de la vie associative ou professionnelle est soumise au candidat à froid, sans préparation. Types de sujets réels tombés : "Vous êtes secrétaire du BDS et devez traiter 100 mails pour un événement, que faites-vous ?" ou "Si demain vous organisiez une course de vélo à Cergy avec des jeunes des quartiers, comment feriez-vous ?" Il n\'y a pas de bonne réponse — le jury évalue le raisonnement.',
    items: ['Aucune préparation — réaction à chaud', 'Le raisonnement compte plus que la solution', 'Structurez votre réponse et défendez-la'],
  },
];

const values = [
  { v: 'Humanisme', d: 'Lien entre vie économique et société, formation de managers responsables et engagés.' },
  { v: 'Innovation', d: 'Esprit entrepreneurial, créativité, incubateurs, chaires de recherche.' },
  { v: 'Responsabilité', d: 'Développement durable, entrepreneuriat social, diversité et inclusion.' },
  { v: 'Excellence', d: 'Rigueur académique, corps professoral de rang mondial, rigueur intellectuelle.' },
];

const traps = [
  ['Mentir ou exagérer', 'Le jury est formé pour détecter l\'incohérence. Si vous citez un auteur, un livre, une expérience — vous devez pouvoir développer 5 minutes dessus.'],
  ['Réciter un texte appris', 'Un discours trop rodé sonne faux immédiatement. Le jury est très sensible à la spontanéité — préparez la structure, pas les phrases.'],
  ['Ignorer les valeurs ESSEC', 'Un profil purement "finance/business" sans dimension humaine ou engagée passe très mal. Humanisme et responsabilité sont au cœur de l\'ADN ESSEC.'],
  ['Confondre l\'ESSEC avec d\'autres écoles', 'Dire "j\'aime l\'ESSEC car elle est dans le top 3" est rédhibitoire. Connaissez le campus de Cergy, la chaire d\'entrepreneuriat social, les associations, Singapour.'],
  ['Être passif à la mise en situation', 'Hésiter longuement ou rendre une réponse vague. Le jury ne cherche pas la bonne réponse — il cherche une réaction structurée et assumée.'],
  ['Sous-estimer l\'étudiant dans le jury', 'L\'élève fin de cursus pose souvent les questions les plus précises sur la vie associative. C\'est lui qui détecte le mieux si le candidat "fait semblant".'],
];

const ESSECPage = () => (
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
          <span className="carnet-eyebrow text-[11px]">ESSEC</span>
        </div>
      </nav>

      <div className="mb-10">
        <Link to="/methodologie/entretiens-personnalite">
          <Button variant="ghost" className="group text-carnet-ink-soft hover:text-carnet-red px-3 font-instrument text-[13px] font-semibold uppercase tracking-[0.1em]">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux fiches écoles
          </Button>
        </Link>
      </div>

      <div className="mb-16 max-w-[760px]">
        <span className="carnet-eyebrow inline-flex items-center gap-2 mb-6"><Award className="h-3.5 w-3.5" />Fiche école · BCE</span>
        <h1 className="font-lora text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-5">
          ESSEC <em className="text-carnet-red not-italic">Business School</em>
        </h1>
        <hr className="carnet-divider mb-5" />
        <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft mb-8">
          L'entretien le plus long et le plus exigeant des grandes écoles — 45 minutes pour montrer toute l'étendue de votre personnalité.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock, label: 'Durée', value: '45 minutes' },
            { icon: Award, label: 'Coefficient', value: '10' },
            { icon: Users, label: 'Jury', value: '3 membres dont 1 étudiant' },
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
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">3 phases en 45 minutes</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-8">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[20px] text-carnet-ink mb-3">Le questionnaire a été supprimé depuis 2025</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.65]">
                Avant 2025, les candidats remplissaient un questionnaire écrit (5 à 7 questions) que le jury lisait avant l'entretien.
                Ce questionnaire a été <strong className="text-carnet-ink">définitivement supprimé</strong> depuis la session 2025.
                C'est désormais le pitch oral de 5 minutes qui remplace cette fonction de "prise de contact".
              </p>
              <div className="mt-4 flex flex-wrap gap-4 font-instrument text-[13px] text-carnet-ink-soft">
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-carnet-red" strokeWidth={1.8} />Le plus long entretien : 45 minutes</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-carnet-red" strokeWidth={1.8} />Jury : 1 prof + 1 représentant éco + 1 étudiant fin de cursus</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-carnet-red" strokeWidth={1.8} />Tests psychotechniques séparés (coeff. 10 aussi)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {phases.map((ph) => (
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

      {/* Valeurs */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 02 · Valeurs</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Ce que l'ESSEC valorise</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-6">
          <div className="flex items-start gap-4">
            <Target className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-3">"Leadership for Impact" — plan stratégique Transcend</h3>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                La raison d'être de l'ESSEC : <em>"donner du sens au leadership de demain"</em>.
                L'école cherche des candidats <strong className="text-carnet-ink">cohérents dans leur profil</strong>, avec un projet défini et argumenté,
                un engagement sincère (associatif, sportif, humanitaire, entrepreneurial) et un potentiel de leadership — pas forcément un meneur né,
                mais quelqu'un qui sait prendre position, décider, et assumer.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {values.map(({ v, d }) => (
            <div key={v} className="bg-white border border-carnet-rule/30 rounded-lg p-5">
              <h4 className="font-lora text-[18px] text-carnet-ink mb-2">{v}</h4>
              <div className="h-px w-6 bg-carnet-red mb-3" />
              <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pièges */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 03 · Pièges</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 6 erreurs les plus pénalisantes</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-3">
          {traps.map(([titre, raison], i) => (
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
      </section>

      {/* Conseils */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 04 · Préparation</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Comment préparer l'ESSEC</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-4">
          {[
            { n: '01', t: 'Introspection approfondie', d: 'Cartographiez votre parcours sous forme de story-telling cohérent. Identifiez 3 à 5 "blocs" de votre vie : passion, engagement, projet pro, qualité clé, expérience fondatrice. Chaque bloc doit tenir 5 minutes de conversation.' },
            { n: '02', t: 'Le pitch de 5 minutes', d: 'Structurez-le, chronométrez-le, enregistrez-vous. Il doit sonner naturel tout en étant précis. Préparez une version longue et une version courte de chaque élément mentionné.' },
            { n: '03', t: 'Maîtrisez ce que vous citez', d: 'Si vous mentionnez un auteur, un livre, une association, une actualité — soyez capable de développer 3 minutes dessus. Ne citez jamais quelque chose que vous ne pouvez pas défendre.' },
            { n: '04', t: 'Connaissez l\'ESSEC en profondeur', d: 'Campus de Cergy et Singapour, associations phares (BDE, BDS), chaires de recherche, Bootcamp entrepreneuriat, doubles diplômes, alumni célèbres. Connaissez les spécificités, pas juste le classement.' },
            { n: '05', t: 'Entraînez-vous à la mise en situation', d: '2-3 exercices de type "vous êtes responsable de X, il se passe Y, que faites-vous ?" Structurez en 3 minutes. Le jury évalue le raisonnement, pas la solution parfaite.' },
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

      {/* Témoignage */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 05 · Témoignage</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Ce que dit le jury ESSEC</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="bg-white border border-carnet-rule/30 border-l-4 border-l-carnet-red rounded-r-lg p-7">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] italic mb-4">
                "Le candidat doit être le plus possible lui-même, sans inventer un personnage. Reconnaître ne pas savoir vaut mieux que prétendre avoir réponse à tout.
                L'incertitude dans certains domaines peut être signe de lucidité, d'ouverture et de modestie devant la réalité."
              </p>
              <p className="font-instrument text-[12px] text-carnet-ink-mute uppercase tracking-[0.1em]">Recommandation officielle du jury ESSEC</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 carnet-card px-8 py-10 flex flex-col items-start">
        <span className="carnet-eyebrow mb-4"><GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />Accompagnement</span>
        <h3 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink mb-3">Préparez votre entretien ESSEC</h3>
        <hr className="carnet-divider w-full mb-5" />
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
          Nos coachs vous aident à construire votre pitch, préparer vos réponses aux mises en situation et simuler l'intégralité des 45 minutes.
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

export default ESSECPage;
