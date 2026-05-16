import React from 'react';
import { CheckCircle } from 'lucide-react';
import { PythonModuleQuiz } from '@/components/python/PythonModuleQuiz';
import { matricesQuizQuestions } from '@/data/pythonQuizQuestions';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import { Button } from '@/components/ui/button';
import { CarnetHero, CarnetSection, CarnetCallout, CarnetCodeBlock } from '@/components/carnet';

/* ── Tableau carnet (bordures rgba(78,55,30,*), zéro slate) ── */
const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full overflow-x-auto rounded-md border border-[rgba(78,55,30,0.18)]">
    <table className="w-full border-collapse font-instrument text-[14px] text-carnet-ink-soft">
      {children}
    </table>
  </div>
);
const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-carnet-paper-2">{children}</thead>
);
const TableBody = ({ children }: { children: React.ReactNode }) => <tbody>{children}</tbody>;
const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="border-b border-[rgba(78,55,30,0.12)] last:border-0">{children}</tr>
);
const TableHead = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold border-b border-[rgba(78,55,30,0.18)]">
    {children}
  </th>
);
const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="px-4 py-3 align-top text-carnet-ink-soft">{children}</td>
);

const PythonMatricesPage = () => {
  const { markAsComplete, isChapterComplete } = usePythonProgress();
  const chapterId = 'python-1-cours';
  const isComplete = isChapterComplete(chapterId);

  const handleComplete = () => {
    markAsComplete(chapterId);
  };

  return (
    <PythonModuleLayout>
      <CarnetHero
        eyebrow="01 · Module · Matrices"
        title="Les matrices"
        accent="avec NumPy"
        tagline="Manipuler les tableaux multi-dimensionnels avec aisance — la base de tout calcul vectoriel en prépa."
        highlight="aisance"
        handNote={'↘ np.dot ≠\nA * B'}
      />

      <PythonNavigationTabs className="mb-8" />

      {/* Objectifs du module */}
      <section className="carnet-card p-8 sm:p-10 mb-12">
        <div className="carnet-eyebrow mb-4">Objectifs du module</div>
        <hr className="carnet-divider mb-6" />
        <ul className="space-y-3 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
          {[
            'Maîtriser la création et la manipulation de matrices avec NumPy.',
            'Comprendre l\'indexation et le slicing des matrices.',
            'Effectuer des opérations matricielles essentielles.',
            'Utiliser les fonctions NumPy pour l\'analyse de données.',
            'Appliquer NumPy dans des contextes pratiques de prépa ECG.',
          ].map((obj, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Notion 1 — Introduction à NumPy */}
      <CarnetSection
        number="01"
        title="Introduction à NumPy"
        tilt="left"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          <strong className="text-carnet-ink">NumPy (Numerical Python)</strong> est la bibliothèque fondamentale pour le calcul scientifique en Python. Elle fournit un objet tableau multidimensionnel performant et un ensemble d'outils pour travailler efficacement avec ces tableaux.
        </p>

        <CarnetCallout variant="propriete" label="Astuce concours" className="mb-6">
          NumPy est essentiel pour les épreuves d'informatique ECG. Sa maîtrise vous permettra de résoudre rapidement les exercices de calcul matriciel.
        </CarnetCallout>

        <div className="carnet-eyebrow mb-3">Importation standard</div>
        <CarnetCodeBlock label="Import">{`import numpy as np`}</CarnetCodeBlock>
        <p className="font-instrument text-[14px] text-carnet-ink-soft mt-2 mb-6">
          Cette convention d'importation avec l'alias <code>np</code> est universellement adoptée dans la communauté Python.
        </p>

        <div className="carnet-eyebrow mb-4">Avantages de NumPy</div>
        <div className="grid sm:grid-cols-2 gap-3">
          <CarnetCallout variant="exemple" label="Performance">
            Calculs jusqu'à <strong className="text-carnet-ink">100×</strong> plus rapides que les listes Python natives, grâce à l'implémentation en C.
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Syntaxe intuitive">
            Opérations vectorisées permettant d'écrire du code concis et lisible.
          </CarnetCallout>
        </div>
      </CarnetSection>

      {/* Notion 2 — Création de matrices */}
      <CarnetSection
        number="02"
        title={<>Création de <em className="font-lora italic text-carnet-red">matrices</em></>}
        tilt="right"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
          La fonction <code>np.array()</code> permet de créer une matrice à partir de listes Python.
        </p>

        <CarnetCodeBlock label="Code">{`# Syntaxe générale
A = np.array([[1, 2, 3], [4, 5, 6]])  # Matrice 2×3

# Cas particuliers
vecteur_ligne = np.array([1, 2, 3])           # Vecteur ligne
vecteur_colonne = np.array([[1], [2], [3]])   # Vecteur colonne`}</CarnetCodeBlock>

        <div className="carnet-eyebrow mb-3 mt-8">Matrices spéciales</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Syntaxe</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>Matrice nulle</strong></TableCell><TableCell><code>np.zeros([n, m])</code></TableCell><TableCell>Matrice n×m remplie de zéros</TableCell></TableRow>
            <TableRow><TableCell><strong>Matrice unité</strong></TableCell><TableCell><code>np.ones([n, m])</code></TableCell><TableCell>Matrice n×m remplie de uns</TableCell></TableRow>
            <TableRow><TableCell><strong>Matrice identité</strong></TableCell><TableCell><code>np.eye(n)</code></TableCell><TableCell>Matrice identité n×n</TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="carnet-eyebrow mb-3 mt-8">Création de vecteurs</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fonction</TableHead>
              <TableHead>Syntaxe</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>arange</strong></TableCell><TableCell><code>np.arange(début, fin, pas)</code></TableCell><TableCell>Vecteur de valeurs régulièrement espacées</TableCell></TableRow>
            <TableRow><TableCell><strong>linspace</strong></TableCell><TableCell><code>np.linspace(début, fin, nb_points)</code></TableCell><TableCell>nb_points valeurs uniformément réparties</TableCell></TableRow>
          </TableBody>
        </Table>
      </CarnetSection>

      {/* Notion 3 — Indexation et accès */}
      <CarnetSection
        number="03"
        title="Indexation et accès aux éléments"
        tilt="left"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
          Les matrices NumPy utilisent un système d'indexation commençant à <strong className="text-carnet-ink">0</strong>. Pour une matrice <code>A</code> de dimensions n×m :
        </p>
        <ul className="space-y-1 font-instrument text-[15px] text-carnet-ink-soft list-disc list-inside mb-6">
          <li>Les lignes sont numérotées de <strong>0 à n-1</strong>.</li>
          <li>Les colonnes sont numérotées de <strong>0 à m-1</strong>.</li>
        </ul>

        <div className="carnet-eyebrow mb-3">Accès aux éléments / lignes / colonnes</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Opération</TableHead>
              <TableHead>Syntaxe</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>Élément</strong></TableCell><TableCell><code>A[i, j]</code></TableCell><TableCell>Élément ligne i, colonne j</TableCell></TableRow>
            <TableRow><TableCell><strong>Ligne</strong></TableCell><TableCell><code>A[i, :]</code></TableCell><TableCell>Ligne i complète</TableCell></TableRow>
            <TableRow><TableCell><strong>Colonne</strong></TableCell><TableCell><code>A[:, j]</code></TableCell><TableCell>Colonne j complète</TableCell></TableRow>
            <TableRow><TableCell><strong>Sous-matrice</strong></TableCell><TableCell><code>A[i1:i2, j1:j2]</code></TableCell><TableCell>Extraction d'une sous-matrice</TableCell></TableRow>
          </TableBody>
        </Table>
      </CarnetSection>

      {/* Notion 4 — Opérations matricielles */}
      <CarnetSection
        number="04"
        title="Opérations matricielles essentielles"
        tilt="right"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
          Pour deux matrices <code>A</code> et <code>B</code> de mêmes dimensions :
        </p>

        <div className="carnet-eyebrow mb-3">Opérations arithmétiques</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Opération</TableHead>
              <TableHead>Syntaxe</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>Addition</strong></TableCell><TableCell><code>A + B</code></TableCell><TableCell>Élément par élément</TableCell></TableRow>
            <TableRow><TableCell><strong>Soustraction</strong></TableCell><TableCell><code>A - B</code></TableCell><TableCell>Élément par élément</TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="carnet-eyebrow mb-3 mt-8">Multiplication</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Syntaxe</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>Terme à terme</strong></TableCell><TableCell><code>A * B</code></TableCell><TableCell>Élément par élément</TableCell></TableRow>
            <TableRow><TableCell><strong>Matricielle</strong></TableCell><TableCell><code>np.dot(A, B)</code></TableCell><TableCell>Produit matriciel classique</TableCell></TableRow>
            <TableRow><TableCell><strong>Par scalaire</strong></TableCell><TableCell><code>k * A</code></TableCell><TableCell>Multiplication par un scalaire</TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="mt-6">
          <CarnetCallout variant="piege" label="Attention">
            <strong>Ne pas confondre</strong> <code>A * B</code> (produit terme à terme) et <code>np.dot(A, B)</code> (vrai produit matriciel). C'est une erreur classique en concours.
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-3 mt-8">Division et transposition</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Opération</TableHead>
              <TableHead>Syntaxe</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>Division</strong></TableCell><TableCell><code>A / B</code></TableCell><TableCell>Élément par élément</TableCell></TableRow>
            <TableRow><TableCell><strong>Transposition</strong></TableCell><TableCell><code>A.T</code></TableCell><TableCell>Transposée de A</TableCell></TableRow>
          </TableBody>
        </Table>
      </CarnetSection>

      {/* Notion 5 — Fonctions d'analyse */}
      <CarnetSection
        number="05"
        title="Fonctions d'analyse et statistiques"
        tilt="left"
      >
        <div className="carnet-eyebrow mb-3">Fonctions globales</div>
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-3">
          Ces fonctions s'appliquent à <strong className="text-carnet-ink">tous les éléments</strong> de la matrice :
        </p>
        <CarnetCodeBlock label="Code">{`np.sum(A)      # Somme de tous les éléments
np.min(A)      # Valeur minimale
np.max(A)      # Valeur maximale
np.mean(A)     # Moyenne arithmétique
np.median(A)   # Médiane
np.std(A)      # Écart-type
np.prod(A)     # Produit de tous les éléments`}</CarnetCodeBlock>

        <div className="carnet-eyebrow mb-3 mt-8">Fonctions par axe</div>
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
          Ces fonctions peuvent être appliquées <strong className="text-carnet-ink">ligne par ligne</strong> ou <strong className="text-carnet-ink">colonne par colonne</strong> :
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <CarnetCallout variant="exemple" label="Par ligne (axis=1)">
            <CarnetCodeBlock label="Code">{`np.sum(A, axis=1)`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Par colonne (axis=0)">
            <CarnetCodeBlock label="Code">{`np.sum(A, axis=0)`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-3 mt-8">Fonctions mathématiques</div>
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-3">
          Les fonctions mathématiques s'appliquent <strong className="text-carnet-ink">élément par élément</strong> :
        </p>
        <CarnetCodeBlock label="Code">{`np.exp(A)      # Exponentielle de chaque élément
np.log(A)      # Logarithme de chaque élément
np.abs(A)      # Valeur absolue de chaque élément
np.sqrt(A)     # Racine carrée de chaque élément`}</CarnetCodeBlock>
      </CarnetSection>

      {/* Validation Button */}
      <div className="flex justify-center my-12">
        <Button
          onClick={handleComplete}
          size="lg"
          className={`text-base px-8 py-5 rounded-full transition-all font-instrument font-semibold ${
            isComplete
              ? 'bg-carnet-red hover:bg-carnet-red text-carnet-paper'
              : 'bg-carnet-ink hover:bg-carnet-red text-carnet-paper'
          }`}
          disabled={isComplete}
        >
          <CheckCircle className="mr-2 h-5 w-5" />
          {isComplete ? 'Chapitre terminé' : 'Terminer ce chapitre'}
        </Button>
      </div>

      {/* Quiz Section */}
      <section className="carnet-card p-8 sm:p-10 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="h-5 w-5 text-carnet-red" />
          <h3 className="font-lora text-[24px] text-carnet-ink">Quiz d'auto-évaluation</h3>
        </div>
        <hr className="carnet-divider mb-6" />
        <p className="font-instrument text-[15px] text-carnet-ink-soft mb-4">
          Teste tes connaissances sur les matrices NumPy avec ce quiz interactif.
        </p>
        <PythonModuleQuiz title="Quiz pratique — Module 1" questions={matricesQuizQuestions} />
      </section>

      {/* Navigation */}
      <ModuleNavigationCards
        currentModule={{
          id: 1,
          title: 'Matrices',
          slug: 'matrices',
          color: 'carnet',
        }}
        isExercisePage={false}
      />
    </PythonModuleLayout>
  );
};

export default PythonMatricesPage;
