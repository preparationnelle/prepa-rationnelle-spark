import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Youtube,
  Target,
  TrendingUp,
  Brain,
  Code,
  Star,
  Users,
  Calendar,
  CheckCircle,
  BookOpen,
  Play,
  Home,
  ChevronRight,
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
import { CarnetHero, CarnetSection, CarnetCallout } from '@/components/carnet';

const PythonArticlePage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('python-article');
  }, [trackPageVisit]);

  const modules = [
    { slug: 'fondamentaux', n: '0', title: 'Fondamentaux', desc: 'Variables, boucles, conditions, fonctions' },
    { slug: 'matrices', n: '1', title: 'Matrices & NumPy', desc: 'Algèbre linéaire, résolution de systèmes' },
    { slug: 'analyse', n: '2', title: 'Analyse & Graphiques', desc: 'Matplotlib, tracer des fonctions, suites' },
    { slug: 'probabilites', n: '3', title: 'Probabilités', desc: 'Simulations, lois, statistiques' },
  ];

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
            <Link to="/formation" className="hover:text-carnet-red transition-colors">
              Formation
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Article · Stratégie</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        <CarnetHero
          eyebrow="Article · Stratégie"
          title="Pourquoi travailler"
          accent="Python en prépa ECG"
          tagline="(et pourquoi mon coaching est ta meilleure option)"
          handNote={'↘ +3 à +5 pts\nfaciles'}
        />

        <PythonNavigationTabs className="mb-10" />

        {/* Vidéo Loom */}
        <section className="mb-10">
          <div className="carnet-eyebrow mb-3 flex items-center gap-2">
            <Youtube className="h-4 w-4" /> L'importance de Python aux concours
          </div>
          <div className="carnet-card p-4 sm:p-6">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.loom.com/embed/bb87a1911d4a494ba229aaca00ee88cb"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Accès direct à la formation */}
        <CarnetSection
          number="00"
          title={<>Accède à la <em className="font-lora italic text-carnet-red">formation</em> Python ECG</>}
          tilt="left"
        >
          <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
            Découvre la formation complète Python structurée en <strong className="text-carnet-ink">4 modules progressifs</strong> avec exercices pratiques :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {modules.map((m) => (
              <Link key={m.slug} to={`/formation/python-${m.slug}`} className="group block">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 transition-colors group-hover:bg-carnet-paper">
                  <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">
                    Module {m.n}
                  </div>
                  <h4 className="font-lora text-[20px] text-carnet-ink mb-2">{m.title}</h4>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft mb-3">{m.desc}</p>
                  <div className="flex items-center gap-2 font-instrument text-[13px] text-carnet-red font-semibold">
                    <Play className="h-3.5 w-3.5" />
                    <span>Commencer →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/formation">
              <Button size="lg" className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper rounded-full px-8 font-instrument font-semibold">
                <BookOpen className="h-4 w-4 mr-2" /> Voir toute la formation
              </Button>
            </Link>
          </div>
        </CarnetSection>

        {/* Témoignage en vedette */}
        <section className="mb-12">
          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <blockquote className="font-lora italic text-[20px] text-carnet-ink leading-[1.5] mb-4">
              « Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à démystifier Python, qui était au départ un gros point faible. Grâce à lui, je suis plus confiante pour traiter les questions Python ! »
            </blockquote>
            <cite className="font-instrument text-[13px] uppercase tracking-[0.16em] text-carnet-red font-semibold not-italic">
              — Léa, 2ᵉ année ECG
            </cite>
          </div>
        </section>

        {/* Section 1 - Le vrai poids de Python */}
        <CarnetSection
          number="01"
          title={
            <span className="flex items-center gap-3">
              <Target className="h-6 w-6 text-carnet-red flex-shrink-0" />
              Le vrai poids de Python aux concours
            </span>
          }
          tilt="left"
        >
          <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
            Depuis la réforme, Python remplace Scilab dans les épreuves de mathématiques appliquées comme approfondies. Résultat :
          </p>
          <ul className="space-y-3 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
              <span><strong className="text-carnet-ink">10 à 20 %</strong> du barème selon les écoles (BCE, Ecricome, EDHEC, EM Lyon, HEC…).</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
              <span><strong className="text-carnet-ink">Présence systématique à l'oral :</strong> impossible de poursuivre l'entretien HEC sans répondre correctement à la question Python.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
              <span><strong className="text-carnet-ink">Questions souvent « cadeaux » :</strong> analyser un script, compléter une fonction, traduire une somme en code.</span>
            </li>
          </ul>
          <CarnetCallout variant="propriete" label="Moralité">
            Même si tu n'es « pas fan d'info », ignorer Python revient à laisser jusqu'à <strong className="text-carnet-ink">5 points</strong> sur la table. Dans une filière où chaque demi-point se paie d'heures de calcul intégral, c'est un luxe que tu ne peux pas te permettre.
          </CarnetCallout>
        </CarnetSection>

        {/* Section 2 - Pourquoi la plupart passent à côté */}
        <CarnetSection
          number="02"
          title={
            <span className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-carnet-red flex-shrink-0" />
              Pourquoi la plupart passent à côté
            </span>
          }
          tilt="right"
        >
          <ul className="space-y-3 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
            <li className="flex items-start gap-3">
              <span className="text-carnet-red font-bold">•</span>
              <span><strong className="text-carnet-ink">Effet de mode inversé :</strong> « tout le monde dit que Python, c'est facile » → personne ne l'approfondit vraiment.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-carnet-red font-bold">•</span>
              <span><strong className="text-carnet-ink">Absence de méthodo :</strong> on survole les commandes en TP, sans vraie feuille de route.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-carnet-red font-bold">•</span>
              <span><strong className="text-carnet-ink">Stress de l'install :</strong> certains n'ont jamais réussi à faire tourner NumPy ; d'autres découvrent Colab la veille du DS.</span>
            </li>
          </ul>
          <CarnetCallout variant="piege" label="Résultat le jour J">
            <strong>80 % des candidats</strong> trébuchent sur trois erreurs classiques : indices hors liste, confusion entre <code>print</code> et <code>return</code>, boucle mal initialisée.
          </CarnetCallout>
        </CarnetSection>

        {/* Section 3 - La stratégie gagnante */}
        <CarnetSection
          number="03"
          title={
            <span className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-carnet-red flex-shrink-0" />
              La stratégie gagnante
            </span>
          }
          tilt="left"
        >
          <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
            Pour engranger les <strong className="text-carnet-ink">+3 à +5 points sûrs</strong>, il suffit de :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {[
              { n: 1, txt: <>Mémoriser les <strong className="text-carnet-ink">54 commandes clés</strong> (import, boucles, NumPy, random, matplotlib).</> },
              { n: 2, txt: <>S'entraîner <strong className="text-carnet-ink">1 h par semaine</strong> sur des questions type-concours.</> },
              { n: 3, txt: <>Recevoir un <strong className="text-carnet-ink">feedback instantané</strong> qui corrige tes erreurs.</> },
            ].map((s) => (
              <div key={s.n} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 text-center">
                <div className="carnet-hand text-[40px] text-carnet-red leading-none mb-2">{s.n}</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">{s.txt}</p>
              </div>
            ))}
          </div>
          <p className="font-instrument italic text-[15px] text-carnet-ink-soft text-center">
            C'est exactement ce que j'ai empaqueté dans mon coaching Python <span className="carnet-hl font-lora italic">premium mais pas trop cher</span>.
          </p>
        </CarnetSection>

        {/* Section 4 - Ce que tu vas maîtriser */}
        <CarnetSection
          number="04"
          title={
            <span className="flex items-center gap-3">
              <Code className="h-6 w-6 text-carnet-red flex-shrink-0" />
              Ce que tu vas maîtriser
            </span>
          }
          tilt="right"
        >
          <div className="overflow-x-auto mb-6">
            <table className="w-full font-instrument text-[14px] text-carnet-ink-soft border-collapse">
              <thead>
                <tr className="border-b-2 border-dashed border-[rgba(193,68,58,0.35)]">
                  <th className="text-left p-3 font-semibold text-carnet-red uppercase tracking-[0.12em] text-[11px]">Bloc</th>
                  <th className="text-left p-3 font-semibold text-carnet-red uppercase tracking-[0.12em] text-[11px]">Objectif concret</th>
                  <th className="text-left p-3 font-semibold text-carnet-red uppercase tracking-[0.12em] text-[11px]">Outil d'apprentissage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bases Python', 'Entrées/sorties, boucles, conditions, fonctions', 'Vidéos « micro-concepts » + quiz « 54 commandes »'],
                  ['Algèbre & NumPy', 'Inverser une matrice, résoudre Ax = b', 'TP guidé sur Colab'],
                  ['Analyse', 'Tracer f(x), suite (uₙ) et chercher une racine', 'Notebook interactif + corrigé vidéo'],
                  ['Probas/Stats', 'Simuler loi binomiale, moyenne, médiane', '20 exos progressifs'],
                  ['Exos concours', '50 questions récurrentes (BCE/Ecricome)', 'Plateforme IA qui corrige ton code en direct'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-dashed border-[rgba(78,55,30,0.18)]">
                    <td className="p-3 font-semibold text-carnet-ink">{row[0]}</td>
                    <td className="p-3">{row[1]}</td>
                    <td className="p-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CarnetCallout variant="propriete" label="USP — l'évaluation interactive">
            Tu colles ton script → l'IA lance les tests → elle t'indique exactement où ça bloque et te propose un indice. Tu corriges → tu relances → tu valides. Boucle <em>Lire → Coder → Tester → Corriger</em>, jusqu'à la réussite complète.
          </CarnetCallout>
        </CarnetSection>

        {/* Section 5 - L'offre en détail */}
        <CarnetSection
          number="05"
          title={
            <span className="flex items-center gap-3">
              <Star className="h-6 w-6 text-carnet-red flex-shrink-0" />
              L'offre en détail
            </span>
          }
          tilt="left"
        >
          <div className="space-y-5">
            <CarnetCallout variant="propriete" label="Produit cœur">
              <p className="mb-3">
                <strong className="text-carnet-ink">6 h de coaching individuel</strong> (visioconférence, Colab partagé).
              </p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Analyse d'extraits de sujets 2021-2024</li>
                <li>Algorithmes « à connaître par cœur » expliqués pas à pas</li>
              </ul>
            </CarnetCallout>

            <div>
              <div className="carnet-eyebrow mb-3">Bonus inclus</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { n: '1', t: 'Pack 50 exercices', d: 'À maîtriser avant les concours, avec corrigés vidéo.' },
                  { n: '2', t: 'Cheatsheet PDF', d: 'La fiche « 54 commandes » à coller sur ton bureau.' },
                  { n: '3', t: 'WhatsApp privé 30 jours', d: 'Questions illimitées, réponse en moins de 24 h.' },
                  { n: '4', t: '1 h de contenu vidéo', d: 'Optimisations & pièges classiques.' },
                ].map((b) => (
                  <div key={b.n} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                    <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">
                      Bonus {b.n}
                    </div>
                    <h5 className="font-lora text-[18px] text-carnet-ink mb-1">{b.t}</h5>
                    <p className="font-instrument text-[13px] text-carnet-ink-soft">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <CarnetCallout variant="exemple" label="Lead magnet gratuit">
              Quiz interactif <strong className="text-carnet-ink">« Commandes Python essentielles »</strong> — 15 questions chronométrées pour évaluer ton niveau immédiatement.
            </CarnetCallout>
          </div>
        </CarnetSection>

        {/* Section 6 - Prix */}
        <CarnetSection
          number="06"
          title={
            <span className="flex items-center gap-3">
              <Star className="h-6 w-6 text-carnet-red flex-shrink-0" />
              Combien ça coûte&nbsp;?
            </span>
          }
          tilt="right"
        >
          <div className="bg-carnet-ink rounded-md p-8 text-center mb-6 relative">
            <div
              className="absolute -top-3 left-6 bg-carnet-red text-carnet-paper-2 px-3 py-0.5 carnet-hand text-[16px] font-semibold"
              style={{ transform: 'rotate(-3deg)' }}
            >
              Tarif
            </div>
            <div className="font-lora text-[48px] text-carnet-paper mb-2">297 €</div>
            <p className="font-instrument text-[16px] text-carnet-paper">Coaching 6 h + 4 bonus</p>
            <p className="font-instrument text-[13px] text-carnet-paper opacity-80 mt-1">≈ 50 € l'heure, soit le tarif d'un cours particulier standard… avec tout le contenu numérique en prime.</p>
          </div>
          <ul className="space-y-3 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
              <span>Paiement en 2× sans frais disponible.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
              <span>Pas de garantie ? Exact : tu payes si — et seulement si — tu veux ce résultat. (J'assume : taux de satisfaction supérieur à 95 %, inutile de mettre un filet de sécurité artificiel.)</span>
            </li>
          </ul>
        </CarnetSection>

        {/* Section 7 - Témoignage */}
        <CarnetSection
          number="07"
          title={
            <span className="flex items-center gap-3">
              <Users className="h-6 w-6 text-carnet-red flex-shrink-0" />
              Témoignage — Léa, 2ᵉ année ECG
            </span>
          }
          tilt="left"
        >
          <blockquote className="font-lora italic text-[19px] text-carnet-ink leading-[1.55] mb-4">
            « Dimitar a démystifié Python ; je partais de zéro. Résultat : sur mon dernier DS, j'ai réussi toutes les questions Python. Je me sens enfin sereine pour le concours. »
          </blockquote>
          <p className="font-instrument text-[15px] text-carnet-ink-soft">
            <strong className="text-carnet-ink">Si Léa peut le faire en quelques semaines, tu le peux aussi.</strong>
          </p>
        </CarnetSection>

        {/* Section 8 - Appel à l'action */}
        <CarnetSection
          number="08"
          title={
            <span className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-carnet-red flex-shrink-0" />
              Comment passer à l'action
            </span>
          }
          tilt="right"
        >
          <ol className="space-y-3 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-8">
            {[
              <><strong className="text-carnet-ink">Commence par la formation :</strong> accède directement aux modules de cours et d'exercices.</>,
              <>Pratique avec nos outils : flashcards et commandes de référence.</>,
              <><strong className="text-carnet-ink">Besoin d'un accompagnement personnalisé ?</strong> Réserve ton coaching individuel.</>,
            ].map((txt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="carnet-hand text-[26px] text-carnet-red font-semibold leading-none mt-0.5">{i + 1}</span>
                <span>{txt}</span>
              </li>
            ))}
          </ol>
          <div className="text-center space-y-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/python-flashcards">
                <Button variant="outline" size="lg" className="rounded-full border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red font-instrument font-semibold">
                  Flashcards Python
                </Button>
              </Link>
              <Link to="/python-reference">
                <Button variant="outline" size="lg" className="rounded-full border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red font-instrument font-semibold">
                  Toutes les commandes
                </Button>
              </Link>
            </div>
            <Link to="/offre/coaching-python">
              <Button size="lg" className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper rounded-full px-8 font-instrument font-semibold">
                Coaching personnalisé
              </Button>
            </Link>
          </div>
        </CarnetSection>

        {/* Section 9 - FAQ */}
        <CarnetSection
          number="09"
          title={
            <span className="flex items-center gap-3">
              <Users className="h-6 w-6 text-carnet-red flex-shrink-0" />
              FAQ express
            </span>
          }
          tilt="left"
        >
          <div className="space-y-5">
            {[
              { q: 'Et si je n\'ai jamais installé Python ?', r: 'On travaillera directement sur Google Colab : aucune installation, juste un navigateur.' },
              { q: 'Je vise HEC, pas EM Lyon ; c\'est assez pointu ?', r: 'Oui : on décortique les sujets HEC 2022-2024 et on pousse jusqu\'aux pièges d\'oraux.' },
              { q: '297 € pour 6 h, c\'est vraiment « premium mais pas trop cher » ?', r: 'Regarde les prépas privées : 90 € l\'heure, sans quiz, sans PDF, sans suivi WhatsApp. À toi de voir.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-carnet-red pl-4 py-1">
                <p className="font-instrument font-semibold text-carnet-ink mb-1">Q : {item.q}</p>
                <p className="font-instrument text-[14px] text-carnet-ink-soft">R : {item.r}</p>
              </div>
            ))}
          </div>
        </CarnetSection>

        {/* Vidéo YouTube finale */}
        <section className="mb-10">
          <div className="carnet-eyebrow mb-3 flex items-center gap-2">
            <Youtube className="h-4 w-4" /> Pourquoi Python est essentiel en ECG
          </div>
          <div className="carnet-card p-4 sm:p-6">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/cBG8EJsHkwA"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PythonArticlePage;
