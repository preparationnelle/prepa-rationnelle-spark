import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Terminal, BookOpen, Clock, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
import { CarnetHero } from '@/components/carnet';

const PourquoiPythonPrepaECGPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('python-article');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen carnet-paper">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16 py-3">
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
            <span className="carnet-eyebrow text-[11px]">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        <CarnetHero
          eyebrow="Méthodo · Stratégie"
          title="Pourquoi travailler"
          accent="Python"
          tagline="Analyse stratégique d'une matière souvent sous-estimée — et pourtant levier décisif aux concours."
          highlight="sous-estimée"
          handNote={'↘ ne le\nnéglige pas'}
        />

        <div className="mb-10">
          <PythonNavigationTabs />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Colonne principale */}
          <div className="lg:col-span-8 space-y-10">
            <section className="carnet-card p-8 sm:p-10">
              <p className="font-instrument text-[16px] text-carnet-ink-soft leading-[1.7]">
                Python est souvent perçu par les étudiants de prépa ECG comme une <strong className="text-carnet-ink">contrainte secondaire</strong>, loin derrière les mathématiques ou l'ESH/HGG. C'est une <strong className="text-carnet-ink">erreur stratégique majeure</strong>. Dans un concours où chaque décimale compte, l'informatique est l'un des leviers les plus efficaces pour sécuriser son admissibilité et faire la différence aux oraux.
              </p>
            </section>

            {/* Point 1 */}
            <section className="mb-2">
              <div className="flex items-baseline gap-4 mb-5">
                <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">01</span>
                <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
                <h2 className="font-lora text-[28px] sm:text-[30px] text-carnet-ink leading-tight flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-carnet-red flex-shrink-0" />
                  Un rapport temps/points imbattable
                </h2>
              </div>
              <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
                <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
                  Aux écrits (EDHEC, EM Lyon, Parisiennes), les questions d'informatique représentent une part non négligeable du barème. Contrairement aux questions de fin de problème en mathématiques, souvent très abstraites et discriminantes, les questions Python sont techniques mais <strong className="text-carnet-ink">prévisibles</strong>.
                </p>
                <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mt-4">
                  Maîtriser la syntaxe de base et les algorithmes classiques (boucles, listes, matrices) permet de glaner des points précieux rapidement, là où d'autres candidats laisseront copie blanche.
                </p>
              </div>
            </section>

            {/* Point 2 */}
            <section className="mb-2">
              <div className="flex items-baseline gap-4 mb-5">
                <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">02</span>
                <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
                <h2 className="font-lora text-[28px] sm:text-[30px] text-carnet-ink leading-tight flex items-center gap-3">
                  <Award className="h-6 w-6 text-carnet-red flex-shrink-0" />
                  L'exigence des <em className="font-lora italic text-carnet-red">oraux</em>
                </h2>
              </div>
              <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
                <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
                  Si l'écrit permet parfois de « limiter la casse » sans Python, l'<strong className="text-carnet-ink">oral ne pardonne pas</strong>. Dans les épreuves de mathématiques des meilleures écoles (HEC, ESCP), une question d'informatique est quasi-systématique.
                </p>
                <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mt-4">
                  Être à l'aise avec le code face au jury démontre une rigueur et une complétude de profil qui rassurent et valorisent votre candidature. À l'inverse, un blocage total sur une fonction simple peut gâcher une excellente prestation mathématique.
                </p>
              </div>
            </section>

            {/* Point 3 */}
            <section className="mb-2">
              <div className="flex items-baseline gap-4 mb-5">
                <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">03</span>
                <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
                <h2 className="font-lora text-[28px] sm:text-[30px] text-carnet-ink leading-tight flex items-center gap-3">
                  <Terminal className="h-6 w-6 text-carnet-red flex-shrink-0" />
                  Une compétence clé pour l'École
                </h2>
              </div>
              <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
                <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
                  La prépa n'est qu'une étape. En école de commerce, Python est devenu le <strong className="text-carnet-ink">standard</strong> pour la Finance, la Data Science et le Marketing Digital. Arriver avec des bases solides, c'est se faciliter grandement la vie pour les cours de statistiques et d'analyse de données qui vous attendent dès la première année.
                </p>
              </div>
            </section>

            {/* CTA modules */}
            <section className="pt-6">
              <div className="carnet-eyebrow mb-5">Comment s'y mettre concrètement ?</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link
                  to="/formation/python-fondamentaux"
                  className="group block carnet-card p-6 hover:bg-carnet-paper transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-lora text-[18px] text-carnet-ink">Les Fondamentaux</span>
                    <ArrowRight className="h-4 w-4 text-carnet-ink-mute group-hover:text-carnet-red transition-colors" />
                  </div>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft">Syntaxe, boucles et fonctions de base.</p>
                </Link>
                <Link
                  to="/formation/python-matrices"
                  className="group block carnet-card p-6 hover:bg-carnet-paper transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-lora text-[18px] text-carnet-ink">Matrices & NumPy</span>
                    <ArrowRight className="h-4 w-4 text-carnet-ink-mute group-hover:text-carnet-red transition-colors" />
                  </div>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft">Manipulation de tableaux et algèbre linéaire.</p>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-5">
            <div className="carnet-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-4 w-4 text-carnet-red" />
                <span className="carnet-eyebrow text-[11px]">Temps de lecture</span>
              </div>
              <p className="font-lora text-[22px] text-carnet-ink">3 minutes</p>
            </div>

            <div className="carnet-card p-6">
              <h3 className="font-lora text-[20px] text-carnet-ink mb-4">Ressources associées</h3>
              <hr className="carnet-divider mb-4" />
              <ul className="space-y-3 font-instrument text-[14px]">
                <li>
                  <Link to="/python-reference" className="flex items-center gap-2 text-carnet-ink-soft hover:text-carnet-red transition-colors">
                    <BookOpen className="h-4 w-4" />
                    <span>Fiche de référence Python</span>
                  </Link>
                </li>
                <li>
                  <Link to="/flashcards" className="flex items-center gap-2 text-carnet-ink-soft hover:text-carnet-red transition-colors">
                    <Award className="h-4 w-4" />
                    <span>Flashcards de révision</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PourquoiPythonPrepaECGPage;
