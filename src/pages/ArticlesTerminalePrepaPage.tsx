import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Calculator,
  Compass,
  Clock,
  BookOpenCheck,
  Brain,
  Target,
  GraduationCap,
  Sparkles,
  ListChecks,
  AlertTriangle,
  CheckCircle2,
  Home,
  ChevronRight,
  Code,
  Languages,
  Globe,
  BookOpen,
  FileText,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const methodes = [
  {
    icon: Clock,
    title: 'Organisation & gestion du temps',
    description:
      "Apprends à structurer tes journées comme en prépa : créneaux de DM, plages de travail profond, planning hebdomadaire réaliste.",
    points: [
      "Planning type d'une semaine de prépa",
      'Comment équilibrer cours, DM et révisions',
      'Gérer fatigue et concentration sur la durée',
    ],
  },
  {
    icon: Brain,
    title: 'Méthodes de travail',
    description:
      "Les techniques qui distinguent un élève qui décroche d'un élève qui progresse : ficher, refaire, espacer.",
    points: [
      'Ficher un cours intelligemment',
      'Refaire les exercices, pas les lire',
      'Répétitions espacées et flashcards',
    ],
  },
  {
    icon: BookOpenCheck,
    title: 'Bases mathématiques solides',
    description:
      "Avant la rentrée, consolide les chapitres clés du programme du lycée pour ne pas être largué dès septembre.",
    points: [
      'Calculs, sommes et produits',
      'Fonctions, dérivées, intégrales, limites',
      'Probabilités et matrices',
    ],
  },
  {
    icon: Compass,
    title: 'Mentalité prépa',
    description:
      "La prépa est un sport d'endurance : poser un cadre mental, accepter de se planter, viser la régularité.",
    points: [
      'Gérer l\'échec et les premiers DS difficiles',
      'Travailler avec et non contre les autres',
      'Rester aligné avec ton objectif d\'école',
    ],
  },
];

const pointsCles = [
  {
    title: 'Le rythme change radicalement',
    description:
      'En prépa, tu fais en une semaine ce que tu faisais en un mois en Terminale. La régularité dès la première semaine est non-négociable.',
  },
  {
    title: 'Le cours ne suffit plus',
    description:
      "Comprendre en classe est une condition nécessaire mais largement insuffisante. Il faut refaire, ficher, et s'entraîner sur des exercices.",
  },
  {
    title: "Les notes baissent (et c'est normal)",
    description:
      'Passer de 18/20 en Terminale à 8/20 au premier DS est très fréquent. La barre est plus haute, les attentes différentes.',
  },
  {
    title: "L'écrit ET l'oral comptent",
    description:
      "Les colles hebdomadaires (oraux) prennent autant de poids que les écrits. Il faut s'y préparer mentalement dès le départ.",
  },
];

const offresAVenir = [
  'Programme estival "Du bac à la prépa" (juin → septembre)',
  'Cours collectifs en visio + suivi individuel',
  'Module mathématiques complet : 7 chapitres + exercices + flashcards',
  'Coaching méthode et organisation par Dimitar',
];

const autresModules = [
  {
    title: 'Anglais',
    icon: Languages,
    description: 'Grammaire, thèmes, versions et essais pour l\'écrit et l\'oral.',
    link: '/formation/anglais',
  },
  {
    title: 'Allemand',
    icon: Languages,
    description: 'Déclinaisons, structures complexes et expression écrite.',
    link: '/formation/allemand',
  },
  {
    title: 'Espagnol',
    icon: Languages,
    description: 'Conjugaison, thèmes, versions et expression orale.',
    link: '/formation/espagnol',
  },
  {
    title: 'Culture Générale',
    icon: BookOpen,
    description: 'Méthodes de synthèse et d\'essai, analyse de textes.',
    link: '/formation/culture-generale',
  },
  {
    title: 'Géopolitique',
    icon: Globe,
    description: 'Enjeux contemporains et méthodes d\'analyse stratégique.',
    link: '/formation/geopolitique',
  },
  {
    title: 'ESH',
    icon: GraduationCap,
    description: 'Première et deuxième année, études de cas concrètes.',
    link: '/formation/esh',
  },
  {
    title: 'Python',
    icon: Code,
    description: '4 modules progressifs avec exercices pratiques.',
    link: '/formation',
  },
  {
    title: 'Synthèse de Texte',
    icon: FileText,
    description: 'Méthodologie détaillée 4h et types de sujets.',
    link: '/formation/synthese-texte',
  },
];

const SectionHead: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}> = ({ eyebrow, title, subtitle, align = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
    className={`max-w-[760px] mb-12 ${align === 'center' ? 'mx-auto text-center' : ''}`}
  >
    {eyebrow && <div className="carnet-eyebrow mb-5">{eyebrow}</div>}
    <h2 className="font-lora text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] text-carnet-ink tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p
        className={`font-instrument text-[16px] lg:text-[17px] leading-[1.6] text-carnet-ink-soft mt-5 max-w-[600px] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

const ArticlesTerminalePrepaPage: React.FC = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/articles/terminale-prepa"
        title="Terminale → Prépa : réussir la transition vers la prépa ECG"
        description="Conseils, méthodes de travail et ressources pour réussir le passage de la Terminale à la prépa ECG : organisation, points clés à anticiper et bases mathématiques solides."
      />

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Terminale → Prépa</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Transition lycée → prépa
            </div>

            <h1 className="font-lora text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Terminale{' '}
              <em className="font-lora italic text-carnet-red">→ Prépa</em>.
            </h1>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[680px] mb-8">
              Conseils et ressources pour réussir la transition entre la Terminale et la prépa ECG :{' '}
              <span className="carnet-hl font-lora italic">méthodes de travail</span>,{' '}
              <span className="carnet-hl font-lora italic">organisation</span>, et{' '}
              <span className="carnet-hl font-lora italic">points clés à anticiper</span>.
            </p>

            <div className="flex flex-wrap gap-3 mb-6 items-center">
              <div className="relative inline-block">
                {/* Déclic annotation */}
                <div
                  className="carnet-hand absolute hidden md:flex items-center gap-1 pointer-events-none"
                  style={{
                    top: '-2.6rem',
                    left: '-0.5rem',
                    fontSize: 18,
                    color: '#C1443A',
                    transform: 'rotate(-3deg)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  commencer mtn →
                </div>
                <Link to="/contact">
                  <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                    Être prévenu de l'offre
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <Link to="/formation/math/terminale-vers-prepa">
                <Button
                  variant="outline"
                  className="border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument font-semibold py-6 px-8 rounded-full"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Module Maths
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi anticiper la transition */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SectionHead
            eyebrow="Pourquoi anticiper"
            title={
              <>
                Le grand <em className="font-lora italic text-carnet-red">choc</em> de la rentrée.
              </>
            }
            subtitle="Chaque année, les meilleurs élèves de Terminale arrivent en prépa et se prennent un mur. Pas par manque d'intelligence — par manque de préparation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pointsCles.map((point, idx) => {
              const tilt = idx % 2 === 0 ? 'carnet-tilt-l' : 'carnet-tilt-r';
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={tilt}
                >
                  <div className="carnet-card p-7 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow h-full">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="carnet-hand text-[36px] text-carnet-red font-semibold leading-none flex-shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-carnet-red flex-shrink-0" />
                          <h3 className="font-lora text-[20px] sm:text-[22px] leading-[1.25] text-carnet-ink">
                            {point.title}
                          </h3>
                        </div>
                        <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-3" />
                        <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Méthodes / 4 piliers */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SectionHead
            eyebrow="4 piliers"
            title={
              <>
                Ce qu'il faut <em className="font-lora italic text-carnet-red">travailler dès maintenant</em>.
              </>
            }
            subtitle="Les piliers que tu peux installer cet été pour arriver en prépa avec une longueur d'avance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {methodes.map((methode, idx) => {
              const tilt = idx === 1 ? 'carnet-tilt-r' : idx === 2 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={methode.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={tilt}
                >
                  <div className="carnet-card p-8 h-full group hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                    <div className="carnet-hand text-[44px] font-semibold text-carnet-red leading-none mb-3">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] flex items-center justify-center">
                        <methode.icon className="h-4 w-4 text-carnet-red" />
                      </div>
                      <h3 className="font-lora text-[22px] leading-[1.25] text-carnet-ink">
                        {methode.title}
                      </h3>
                    </div>
                    <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.55] mb-5">
                      {methode.description}
                    </p>
                    <ul className="space-y-2 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                      {methode.points.map((p, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 font-instrument text-[13px] text-carnet-ink-soft"
                        >
                          <span className="carnet-hand text-[18px] leading-none mt-0.5">→</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Module Maths existant */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SectionHead
            eyebrow="Ressource gratuite"
            title={
              <>
                Module <em className="font-lora italic text-carnet-red">Mathématiques</em>.
              </>
            }
            subtitle="7 chapitres fondamentaux pour combler le fossé entre le programme de Terminale et celui de prépa ECG."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="carnet-card p-8 sm:p-10 lg:p-12 max-w-5xl"
          >
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] flex items-center justify-center">
                    <Calculator className="h-5 w-5 text-carnet-red" />
                  </div>
                  <h3 className="font-lora text-[24px] sm:text-[28px] text-carnet-ink leading-[1.2]">
                    7 chapitres clés
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Calculs',
                    'Sommes, suites et produits',
                    'Fonctions',
                    'Dérivées',
                    'Intégrales',
                    'Probabilités',
                    'Matrices',
                  ].map((chapitre) => (
                    <li
                      key={chapitre}
                      className="flex items-center gap-3 font-instrument text-[15px] text-carnet-ink-soft"
                    >
                      <CheckCircle2 className="h-4 w-4 text-carnet-red flex-shrink-0" />
                      <span>{chapitre}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] flex items-center justify-center">
                    <ListChecks className="h-5 w-5 text-carnet-red" />
                  </div>
                  <h3 className="font-lora text-[24px] sm:text-[28px] text-carnet-ink leading-[1.2]">
                    Pour chaque chapitre
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Cours détaillé avec exemples',
                    "Exercices d'application progressifs",
                    'Quiz pour valider la maîtrise',
                    'Flashcards pour mémoriser',
                    'Méthodes adaptées aux attentes prépa',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-instrument text-[15px] text-carnet-ink-soft"
                    >
                      <CheckCircle2 className="h-4 w-4 text-carnet-red flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="font-instrument text-[14px] text-carnet-ink-mute">
                Accès libre — pensé pour les futurs prépas ECG.
              </div>
              <Link to="/formation/math/terminale-vers-prepa">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                  Accéder au module
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Autres matières */}
      <section className="relative py-20 lg:py-24 bg-[rgba(78,55,30,0.02)] border-y border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SectionHead
            eyebrow="Toutes nos matières"
            title={
              <>
                Tout notre contenu est adapté à la <em className="font-lora italic text-carnet-red">prépa</em>.
              </>
            }
            subtitle="Anglais, Allemand, Géopolitique... Explore nos autres modules. Tout le contenu du site a été pensé pour le niveau d'exigence de la prépa ECG."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {autresModules.map((module, idx) => (
              <Link key={module.title} to={module.link}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="carnet-card p-5 h-full hover:shadow-[0_8px_24px_rgba(78,55,30,0.08)] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] flex items-center justify-center">
                      <module.icon className="h-4 w-4 text-carnet-red" />
                    </div>
                    <h3 className="font-lora text-[18px] text-carnet-ink leading-[1.2] group-hover:text-carnet-red transition-colors">
                      {module.title}
                    </h3>
                  </div>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.5]">
                    {module.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Offre à venir */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative bg-carnet-ink rounded-lg p-8 sm:p-12 lg:p-16 overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none"></div>
            <div
              className="carnet-hand absolute hidden lg:block"
              style={{ top: 32, right: 64, fontSize: 28, color: '#C1443A', transform: 'rotate(6deg)' }}
            >
              ↗ pré-inscris-toi !
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <Sparkles className="h-4 w-4 text-carnet-red" />
                <span className="carnet-eyebrow text-carnet-red">Bientôt disponible</span>
              </div>

              <h2 className="font-lora text-[32px] sm:text-[40px] lg:text-[52px] text-carnet-paper leading-[1.1] mb-5">
                Une <em className="font-lora italic text-carnet-red">offre dédiée</em> aux futurs prépas.
              </h2>

              <p className="font-instrument text-[16px] sm:text-[17px] text-[rgba(251,246,234,0.78)] leading-[1.7] mb-8 max-w-2xl">
                Un programme complet pour transformer ton été en accélérateur prépa : méthode, maths, mindset, organisation. Inscris-toi pour être prévenu·e du lancement.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {offresAVenir.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 font-instrument text-[14px] text-[rgba(251,246,234,0.9)]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-carnet-red flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                    Être prévenu de l'offre
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/formations">
                  <Button
                    variant="outline"
                    className="border-[rgba(251,246,234,0.3)] bg-transparent text-carnet-paper hover:bg-[rgba(251,246,234,0.08)] hover:text-carnet-paper hover:border-[rgba(251,246,234,0.6)] font-instrument font-semibold py-6 px-8 rounded-full"
                  >
                    Voir toutes nos formations
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer rappel */}
      <section className="relative py-12 border-t border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] flex items-center justify-center">
                <Target className="h-4 w-4 text-carnet-red" />
              </div>
              <div>
                <div className="font-lora text-[18px] text-carnet-ink">Une question ?</div>
                <div className="font-instrument text-[13px] text-carnet-ink-mute">
                  Dimitar te répond personnellement sous 24h.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/contact">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full border-0">
                  Nous contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors px-3 py-2"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesTerminalePrepaPage;
