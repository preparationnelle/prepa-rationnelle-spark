import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ChevronRight, ArrowRight, PenTool, BookOpen, Languages, ListChecks, Layers } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

type Module = {
  number: number;
  title: string;
  description: string;
  to: string;
  exercicesTo?: string;
};

const modules: Module[] = [
  { number: 1, title: 'Conjugaison et Temps Verbaux', description: 'Temps complexes : subjonctif, conditionnel, impératif et tous les temps de l’indicatif', to: '/formation/espagnol/grammaire/conjugaison', exercicesTo: '/formation/espagnol/grammaire/conjugaison/exercices' },
  { number: 2, title: 'Syntaxe et Structures Complexes', description: 'Structures syntaxiques sophistiquées pour enrichir l’expression écrite et orale', to: '/formation/espagnol/grammaire/syntaxe-structures-complexes', exercicesTo: '/formation/espagnol/grammaire/syntaxe-structures-complexes/exercices' },
  { number: 3, title: 'Ser vs Estar et Constructions', description: 'Maîtrisez les nuances entre ser et estar, constructions spéciales et verbes d’état', to: '/formation/espagnol/grammaire/ser-estar', exercicesTo: '/formation/espagnol/grammaire/ser-estar/exercices' },
  { number: 4, title: 'Prépositions et Locutions', description: 'Emploi précis des prépositions et locutions prépositionnelles en espagnol', to: '/formation/espagnol/grammaire/prepositions', exercicesTo: '/formation/espagnol/grammaire/prepositions/exercices' },
  { number: 5, title: 'Questions et Interrogatifs', description: 'Maîtrisez la formulation des questions et l’usage des mots interrogatifs', to: '/formation/espagnol/grammaire/questions', exercicesTo: '/formation/espagnol/grammaire/questions/exercices' },
  { number: 6, title: 'Négations', description: 'Maîtrisez les formes négatives et leurs emplois en espagnol', to: '/formation/espagnol/grammaire/negations', exercicesTo: '/formation/espagnol/grammaire/negations/exercices' },
  { number: 7, title: 'Vocabulaire Temporel : Dates et Heures', description: 'Maîtrisez l’expression du temps, des dates et des heures en espagnol', to: '/formation/espagnol/grammaire/temporal', exercicesTo: '/formation/espagnol/grammaire/temporal/exercices' },
  { number: 8, title: 'Pronoms', description: 'Maîtrisez l’usage des pronoms personnels, possessifs et démonstratifs', to: '/formation/espagnol/grammaire/pronouns', exercicesTo: '/formation/espagnol/grammaire/pronouns/exercices' },
  { number: 9, title: 'Verbes Particuliers et Tournures Affectives', description: 'Maîtrisez les verbes comme gustar et les constructions affectives', to: '/formation/espagnol/grammaire/affective-verbs', exercicesTo: '/formation/espagnol/grammaire/affective-verbs/exercices' },
  { number: 10, title: 'Adjectifs et Adverbes', description: 'Maîtrisez l’accord des adjectifs, les adverbes et leurs emplois', to: '/formation/espagnol/grammaire/adjectives-adverbs', exercicesTo: '/formation/espagnol/grammaire/adjectives-adverbs/exercices' },
  { number: 11, title: 'Le Subjonctif', description: 'Formation, déclencheurs et test de décision indicatif / subjonctif — l’attendu n°1 des correcteurs', to: '/formation/espagnol/grammaire/subjonctif' },
  { number: 12, title: 'Concordance des Temps', description: 'Axe du présent, axe du passé : accorder le temps de la subordonnée sur la principale', to: '/formation/espagnol/grammaire/concordance-temps' },
  { number: 13, title: 'Conditionnelles & Hypothèse', description: 'Les trois types de « si » et le système hypothétique sans faute de mode', to: '/formation/espagnol/grammaire/conditionnelles' },
  { number: 14, title: 'Style Indirect', description: 'Discours rapporté : transposition des temps, des personnes et des déictiques', to: '/formation/espagnol/grammaire/style-indirect' },
  { number: 15, title: 'Subordonnées Relatives', description: 'que, quien, el cual, cuyo, lo que : choisir le bon relatif et traduire « dont »', to: '/formation/espagnol/grammaire/relatives' },
  { number: 16, title: 'Por vs Para', description: 'La confusion n°1 des correcteurs : valeurs, paires contrastives et locutions figées', to: '/formation/espagnol/grammaire/por-para' },
  { number: 17, title: 'Périphrases Verbales', description: 'ir a, acabar de, volver a, llevar + gérondif… pour enrichir l’expression', to: '/formation/espagnol/grammaire/periphrases-verbales' },
  { number: 18, title: 'Comparatifs & Superlatifs', description: 'Comparatifs, irréguliers (mejor, peor, mayor) et superlatif absolu en -ísimo', to: '/formation/espagnol/grammaire/comparatifs-superlatifs' },
  { number: 19, title: 'Connecteurs Logiques', description: 'La boîte à outils de l’argumentation pour structurer synthèse et dissertation', to: '/formation/espagnol/grammaire/connecteurs-logiques' },
  { number: 20, title: 'Thème Grammatical', description: 'Techniques de traduction français → espagnol avec pièges classiques et méthodologie', to: '/formation/espagnol/grammaire/theme' },
];

const FormationEspagnolGrammairePage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/espagnol/grammaire"
        title="Grammaire Espagnole ECG · Prépa Rationnelle"
        description="Formation complète de grammaire espagnole pour les concours ECG : 20 fiches structurées (subjonctif, concordance, por/para, périphrases…) avec exercices."
      />

      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formations" className="hover:text-carnet-red transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Grammaire</span>
          </div>
        </div>
      </nav>

      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">Espagnol · Module 02</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Languages className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                Grammaire <em className="font-lora italic text-carnet-red">espagnole</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Formation <span className="carnet-hl font-lora italic">complète</span> de grammaire espagnole — 20 fiches structurées pour maîtriser les épreuves des concours des Grandes Écoles de Commerce.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Languages className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">20 fiches</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Cours · Quiz · Flashcards · Concours ECG</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ choisis ton chapitre
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="space-y-4">
            {modules.map((m, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={m.number}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                  className={tilt}
                >
                  <div className="carnet-card group p-6 sm:p-7 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                    <div className="flex items-start gap-5">
                      <span className="carnet-hand text-[42px] text-carnet-red leading-none font-semibold flex-shrink-0">
                        {String(m.number).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <Link to={m.to} className="block">
                          <h3 className="font-lora text-[22px] sm:text-[24px] leading-[1.2] text-carnet-ink mb-2 group-hover:text-carnet-red transition-colors">
                            {m.title}
                          </h3>
                        </Link>
                        <hr className="w-8 h-0.5 bg-carnet-ink border-0 mb-3" />
                        <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-4">
                          {m.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Link to={m.to}>
                            <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-10 px-5 text-[13px] border-0 transition-colors">
                              <BookOpen className="mr-2 h-4 w-4" />
                              Accéder au module
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                          {m.exercicesTo && (
                            <Link to={m.exercicesTo}>
                              <Button variant="outline" className="bg-carnet-paper-2 border-dashed border-[rgba(78,55,30,0.25)] text-carnet-ink-soft hover:border-carnet-red hover:text-carnet-red font-instrument font-semibold rounded-full h-10 px-5 text-[13px]">
                                <PenTool className="mr-2 h-4 w-4" />
                                Exercices
                              </Button>
                            </Link>
                          )}
                          <Link to={`${m.to}/quiz`}>
                            <Button variant="outline" className="bg-carnet-paper-2 border-[rgba(78,55,30,0.2)] text-carnet-ink-soft hover:border-carnet-red hover:text-carnet-red font-instrument font-semibold rounded-full h-10 px-5 text-[13px]">
                              <ListChecks className="mr-2 h-4 w-4" />
                              Quiz
                            </Button>
                          </Link>
                          <Link to={`${m.to}/flashcards`}>
                            <Button variant="outline" className="bg-carnet-paper-2 border-[rgba(78,55,30,0.2)] text-carnet-ink-soft hover:border-carnet-red hover:text-carnet-red font-instrument font-semibold rounded-full h-10 px-5 text-[13px]">
                              <Layers className="mr-2 h-4 w-4" />
                              Flashcards
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationEspagnolGrammairePage;
