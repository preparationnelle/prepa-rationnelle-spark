import React from 'react';
import { CheckCircle } from 'lucide-react';
import { PythonModuleQuiz } from '@/components/python/PythonModuleQuiz';
import { analyseQuizQuestions } from '@/data/pythonQuizQuestions';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import { LatexRenderer } from '@/components/LatexRenderer';
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

const PythonAnalysePage = () => {
  const { markAsComplete, isChapterComplete } = usePythonProgress();
  const chapterId = 'python-2-cours';
  const isComplete = isChapterComplete(chapterId);

  const handleComplete = () => {
    markAsComplete(chapterId);
  };

  return (
    <PythonModuleLayout>
      <CarnetHero
        eyebrow="02 · Module · Analyse"
        title="Analyse"
        accent="numérique"
        tagline="Sommes, produits, suites, dichotomie — les routines de calcul à automatiser."
        highlight="automatiser"
        handNote={'↘ S = 0\nP = 1'}
      />

      <PythonNavigationTabs className="mb-8" />

      {/* Objectifs du module */}
      <section className="carnet-card p-8 sm:p-10 mb-12">
        <div className="carnet-eyebrow mb-4">Objectifs du module</div>
        <hr className="carnet-divider mb-6" />
        <ul className="space-y-3 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
          {[
            'Calculer des sommes et des produits finis avec une boucle, une liste ou NumPy.',
            'Simuler et analyser une suite définie par récurrence.',
            'Définir et réutiliser ses propres fonctions Python.',
            'Maîtriser les fonctions et constantes mathématiques de NumPy.',
            'Implémenter la méthode de dichotomie pour approximer une racine.',
          ].map((obj, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
        <p className="font-instrument text-[14px] text-carnet-ink-mute leading-[1.7] mt-6">
          <span className="text-carnet-ink font-semibold">Prérequis —</span> maîtrise des modules 0 et 1 (fondamentaux Python et matrices NumPy) et connaissances de base en analyse mathématique.
        </p>
      </section>

      {/* Section 1 — Calcul de sommes */}
      <CarnetSection
        number="01"
        title={<>Calcul de <em className="font-lora italic text-carnet-red">sommes</em></>}
        tilt="left"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Savoir calculer une somme de la forme{' '}
          <span className="inline-block align-middle"><LatexRenderer latex="S = \sum \text{expression}(k)" /></span>
          {' '}en utilisant trois méthodes : boucle, liste, NumPy.
        </p>

        <div className="space-y-4 mb-6">
          <CarnetCallout variant="exemple" label="Méthode 1 — Boucle avec variable initialisée">
            <CarnetCodeBlock label="Code">{`n = 5
S = 0
for k in range(1, n+1):
    S += k**2  # pour ∑ k²
print(S)`}</CarnetCodeBlock>
            <p className="text-[13px] mt-3">✔️ Méthode simple et lisible. Fonctionne dans tous les cas, même avec des doubles sommes.</p>
          </CarnetCallout>

          <CarnetCallout variant="exemple" label="Méthode 2 — Liste & np.sum()">
            <CarnetCodeBlock label="Code">{`n = 5
L = [k**2 for k in range(1, n+1)]
S = np.sum(L)
print(S)`}</CarnetCodeBlock>
            <p className="text-[13px] mt-3">✔️ Permet de manipuler la liste des termes si besoin (affichage, tracé).</p>
          </CarnetCallout>

          <CarnetCallout variant="exemple" label="Méthode 3 — Vectorisation NumPy">
            <CarnetCodeBlock label="Code">{`import numpy as np

n = 5
k = np.arange(1, n+1)
S = np.sum(k**2)
print(S)`}</CarnetCodeBlock>
            <p className="text-[13px] mt-3">✔️ Très rapide pour de grandes tailles. ⚠️ Moins intuitif pour débutants.</p>
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-3">Comparatif synthétique</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Méthode</TableHead>
              <TableHead>Avantages</TableHead>
              <TableHead>Inconvénients</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>Boucle for</strong></TableCell><TableCell>Très claire, généralisable</TableCell><TableCell>Un peu plus longue</TableCell></TableRow>
            <TableRow><TableCell><strong>Liste + sum()</strong></TableCell><TableCell>Intermédiaire : claire et rapide</TableCell><TableCell>Consomme plus de mémoire</TableCell></TableRow>
            <TableRow><TableCell><strong>np.sum()</strong></TableCell><TableCell>Très rapide pour grands n</TableCell><TableCell>Moins optimal pour petits n</TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="mt-8">
          <div className="carnet-eyebrow mb-3">Exemples guidés — sommes à calculer</div>
          <ul className="space-y-2 font-instrument text-[15px] text-carnet-ink-soft mb-6 pl-5">
            <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex="S_1 = \sum_{k=1}^{n} k^2" /></span></li>
            <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex="S_2 = \sum_{k=1}^{n} (k^3 - 2k)" /></span></li>
            <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex="S_3 = \sum_{i=1}^{n} \sum_{j=1}^{m} (i^2 + j^3)" /></span></li>
          </ul>

          <div className="space-y-4">
            <CarnetCallout variant="exemple" label="Méthode 1 — Boucles imbriquées">
              <CarnetCodeBlock label="Code">{`n = 5
m = 4

S1 = 0
for k in range(1, n+1):
    S1 += k**2

S2 = 0
for k in range(1, n+1):
    S2 += k**3 - 2*k

S3 = 0
for k in range(1, n+1):
    for j in range(1, m+1):
        S3 += k**2 + j**3`}</CarnetCodeBlock>
            </CarnetCallout>

            <CarnetCallout variant="exemple" label="Méthode 2 — Listes en compréhension">
              <CarnetCodeBlock label="Code">{`S1 = sum([k**2 for k in range(1, n+1)])
S2 = sum([k**3 - 2*k for k in range(1, n+1)])
S3 = sum([k**2 + j**3 for k in range(1, n+1) for j in range(1, m+1)])`}</CarnetCodeBlock>
            </CarnetCallout>

            <CarnetCallout variant="exemple" label="Méthode 3 — NumPy">
              <CarnetCodeBlock label="Code">{`import numpy as np

k = np.arange(1, n+1)
S1 = np.sum(k**2)
S2 = np.sum(k**3 - 2*k)
S3 = np.sum([k**2 + j**3 for k in range(1, n+1) for j in range(1, m+1)])`}</CarnetCodeBlock>
            </CarnetCallout>
          </div>
        </div>
      </CarnetSection>

      {/* Section 2 — Calcul de produits */}
      <CarnetSection
        number="02"
        title="Calcul de produits"
        tilt="right"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Savoir calculer un produit de la forme{' '}
          <span className="inline-block align-middle"><LatexRenderer latex="P = \prod_{k=1}^{n} \text{expression}(k)" /></span>
          {' '}par boucle ou avec une version vectorisée.
        </p>

        <div className="space-y-4 mb-6">
          <CarnetCallout variant="exemple" label="Produit avec une boucle (méthode universelle)">
            <CarnetCodeBlock label="Code">{`n = 5
P = 1
for k in range(1, n+1):
    P *= k
print(P)`}</CarnetCodeBlock>
            <p className="text-[13px] mt-3">✔️ Lisible, robuste. Adaptée à toutes les situations.</p>
          </CarnetCallout>

          <CarnetCallout variant="piege" label="Pièges initialisation">
            Ne jamais initialiser à <code>0</code> pour un produit — sinon tout est annulé. Toujours <code>P = 1</code>.
          </CarnetCallout>

          <CarnetCallout variant="exemple" label="Produit avec une fonction générique">
            <CarnetCodeBlock label="Code">{`def produit_fini(i0, i1, f):
    P = 1
    for k in range(i0, i1+1):
        P *= f(k)
    return P

# Exemple d'appel
def carre(k):
    return k**2

produit_fini(1, 5, carre)
# Renvoie 1² × 2² × 3² × 4² × 5² = 14400`}</CarnetCodeBlock>
          </CarnetCallout>

          <CarnetCallout variant="exemple" label="Produit avec NumPy (optionnel)">
            <CarnetCodeBlock label="Code">{`import numpy as np

k = np.arange(1, 6)
P = np.prod(k)
print(P)`}</CarnetCodeBlock>
            <p className="text-[13px] mt-3">✔️ Plus rapide pour grands n. ⚠️ Moins souple pour des produits complexes.</p>
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-3">Exemples types</div>
        <div className="space-y-4 mb-6">
          <CarnetCallout variant="exemple" label="Calcul de n! (factorielle)">
            <CarnetCodeBlock label="Code">{`def factorielle(n):
    P = 1
    for k in range(1, n+1):
        P *= k
    return P

print(factorielle(6))  # 720`}</CarnetCodeBlock>
          </CarnetCallout>

          <CarnetCallout variant="exemple" label={'Produit ∏ (2k+1) pour k = 0..14'}>
            <CarnetCodeBlock label="Code">{`P = 1
for k in range(0, 15):
    P *= 2*k + 1
print(P)`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-3">Comparatif somme vs produit</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Opération</TableHead>
              <TableHead>Initialisation</TableHead>
              <TableHead>Opérateur dans la boucle</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>Somme</strong></TableCell><TableCell><code>S = 0</code></TableCell><TableCell><code>S += ...</code></TableCell></TableRow>
            <TableRow><TableCell><strong>Produit</strong></TableCell><TableCell><code>P = 1</code></TableCell><TableCell><code>P *= ...</code></TableCell></TableRow>
          </TableBody>
        </Table>
      </CarnetSection>

      {/* Section 3 — Suites */}
      <CarnetSection
        number="03"
        title={<>Suites par <em className="font-lora italic text-carnet-red">récurrence</em></>}
        tilt="left"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Savoir simuler et analyser une suite définie par récurrence en Python. Utiliser les bons algorithmes selon le type d'exercice.
        </p>

        <div className="carnet-eyebrow mb-3">Structure générale</div>
        <CarnetCodeBlock label="Code">{`def terme_suite(u0, n, f):
    u = u0
    for _ in range(n):
        u = f(u)
    return u`}</CarnetCodeBlock>

        <div className="grid sm:grid-cols-2 gap-3 mt-6 mb-6">
          <CarnetCallout variant="exemple" label="Exemple simple">
            <CarnetCodeBlock label="Code">{`def f(u):
    return 5*u + 3

print(terme_suite(2.4, 4, f))  # u₄`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Exemple avec conditions">
            <p className="text-[13px] mb-2">u₀ = 4, u_(n+1) = 3u_n + 1 si pair, (u_n + 1)/2 si impair.</p>
            <CarnetCodeBlock label="Code">{`n = int(input('Valeur de n : '))
U = 4
for k in range(n):
    if U % 2 == 0:
        U = 3*U + 1
    else:
        U = (U + 1) / 2
print(U)`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-3">Types d'exercices autour des suites</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type de question</TableHead>
              <TableHead>Structure de code</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Afficher un terme u_n</TableCell><TableCell>Boucle <code>for</code> simple</TableCell></TableRow>
            <TableRow><TableCell>Afficher u₀ à u_n</TableCell><TableCell><code>for</code> + affichage</TableCell></TableRow>
            <TableRow><TableCell>Plus petit n tel que u_n ≥ S</TableCell><TableCell><code>while</code> + incrément</TableCell></TableRow>
            <TableRow><TableCell>Plus grand n tel que u_n &lt; S</TableCell><TableCell>idem puis n − 1</TableCell></TableRow>
            <TableRow><TableCell>Stocker dans une liste</TableCell><TableCell>Liste + boucle</TableCell></TableRow>
            <TableRow><TableCell>Tracer la suite</TableCell><TableCell><code>matplotlib</code></TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="mt-8 space-y-4">
          <CarnetCallout variant="exemple" label="a · Afficher les 5 premiers termes">
            <CarnetCodeBlock label="Code">{`def f(u):
    return 5*u + 3

u = 2.4
for k in range(5):
    print(u)
    u = f(u)`}</CarnetCodeBlock>
          </CarnetCallout>

          <CarnetCallout variant="exemple" label="b · Premier n tel que u_n ≥ 10 000">
            <CarnetCodeBlock label="Code">{`u = 2.4
n = 0
while u < 10_000:
    u = 5*u + 3
    n += 1
print("n =", n)`}</CarnetCodeBlock>
          </CarnetCallout>

          <CarnetCallout variant="exemple" label="c · Stocker les termes dans une liste">
            <CarnetCodeBlock label="Code">{`U = []
u = 2.4
for _ in range(5):
    U.append(u)
    u = 5*u + 3
print(U)`}</CarnetCodeBlock>
          </CarnetCallout>

          <CarnetCallout variant="propriete" label="Fonctions prêtes à l'emploi">
            <CarnetCodeBlock label="Code">{`def plus_petit_n(u0, f, seuil):
    u = u0
    n = 0
    while u < seuil:
        u = f(u)
        n += 1
    return n

def plus_grand_n(u0, f, seuil):
    u = u0
    n = 0
    while u < seuil:
        u = f(u)
        n += 1
    return n - 1

def liste_termes(u0, N, f):
    L = []
    u = u0
    for _ in range(N):
        L.append(u)
        u = f(u)
    return L`}</CarnetCodeBlock>
          </CarnetCallout>

          <CarnetCallout variant="exemple" label="Visualisation Matplotlib">
            <CarnetCodeBlock label="Code">{`import matplotlib.pyplot as plt

def f(u):
    return 5*u + 3

u = 2.4
N = 10
U = [u]
for _ in range(1, N):
    u = f(u)
    U.append(u)

plt.plot(range(N), U)
plt.show()`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>
      </CarnetSection>

      {/* Section 4 — Fonctions et constantes usuelles */}
      <CarnetSection
        number="04"
        title="Fonctions et constantes NumPy"
        tilt="right"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Maîtriser les fonctions mathématiques essentielles et les constantes prédéfinies de NumPy pour les calculs d'analyse numérique.
        </p>

        <div className="carnet-eyebrow mb-3">Fonctions mathématiques de base</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fonction</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Exemple</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><code>np.abs()</code></TableCell><TableCell>Valeur absolue</TableCell><TableCell><code>np.abs(-5) → 5</code></TableCell></TableRow>
            <TableRow><TableCell><code>np.cos()</code></TableCell><TableCell>Cosinus</TableCell><TableCell><code>np.cos(np.pi) → -1</code></TableCell></TableRow>
            <TableRow><TableCell><code>np.sin()</code></TableCell><TableCell>Sinus</TableCell><TableCell><code>np.sin(np.pi/2) → 1</code></TableCell></TableRow>
            <TableRow><TableCell><code>np.log()</code></TableCell><TableCell>Logarithme népérien</TableCell><TableCell><code>np.log(np.e) → 1</code></TableCell></TableRow>
            <TableRow><TableCell><code>np.exp()</code></TableCell><TableCell>Exponentielle</TableCell><TableCell><code>np.exp(1) → e</code></TableCell></TableRow>
            <TableRow><TableCell><code>np.sqrt()</code></TableCell><TableCell>Racine carrée</TableCell><TableCell><code>np.sqrt(16) → 4</code></TableCell></TableRow>
            <TableRow><TableCell><code>np.floor()</code></TableCell><TableCell>Partie entière</TableCell><TableCell><code>np.floor(3.7) → 3</code></TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="carnet-eyebrow mb-3 mt-8">Constantes</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Constante</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Valeur approchée</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><code>np.pi</code></TableCell><TableCell><span className="inline-block align-middle"><LatexRenderer latex="\pi" /></span> (pi)</TableCell><TableCell><code>3.141592653...</code></TableCell></TableRow>
            <TableRow><TableCell><code>np.e</code></TableCell><TableCell><em>e</em> (nombre d'Euler)</TableCell><TableCell><code>2.718281828...</code></TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="grid sm:grid-cols-2 gap-3 mt-8">
          <CarnetCallout variant="exemple" label="Calculs trigonométriques">
            <CarnetCodeBlock label="Code">{`import numpy as np

angle = np.pi / 4  # 45 degrés
print(np.cos(angle))  # ≈ 0.707
print(np.sin(angle))  # ≈ 0.707`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Exponentielle, log, racine">
            <CarnetCodeBlock label="Code">{`x = 2
print(np.exp(x))      # e²
print(np.log(np.e))   # 1
print(np.sqrt(25))    # 5`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>
      </CarnetSection>

      {/* Section 5 — Définir ses propres fonctions */}
      <CarnetSection
        number="05"
        title="Définir soi-même une fonction (def)"
        tilt="left"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Créer ses propres fonctions Python pour structurer et réutiliser le code dans les calculs d'analyse.
        </p>

        <div className="carnet-eyebrow mb-3">Syntaxe générale</div>
        <CarnetCodeBlock label="Code">{`def nom_fonction(p1, p2):
    resultat = calcul
    return resultat`}</CarnetCodeBlock>

        <div className="mt-6 mb-6">
          <CarnetCallout variant="propriete" label="Points importants">
            <ul className="space-y-1 list-disc list-inside">
              <li>Le corps est indenté (4 espaces recommandés)</li>
              <li>Noms de paramètres courts et clairs</li>
              <li>Toujours terminer par un <code>return</code></li>
            </ul>
          </CarnetCallout>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <CarnetCallout variant="exemple" label="Fonction à un paramètre">
            <CarnetCodeBlock label="Code">{`def f(x):
    return 7*x**3 + 1

print(f(2))  # 7×8 + 1 = 57`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Fonction à plusieurs paramètres">
            <CarnetCodeBlock label="Code">{`def fpv(x, y, z):
    return 3*x + 100*y + 10000*z

print(fpv(1, 2, 3))  # 30203`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-3">Fonctions mathématiques utiles</div>
        <div className="space-y-4 mb-6">
          <CarnetCallout variant="exemple" label="Fonction polynomiale">
            <CarnetCodeBlock label="Code">{`def polynome(x, a, b, c):
    return a*x**2 + b*x + c`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Fonction avec NumPy">
            <CarnetCodeBlock label="Code">{`import numpy as np

def g(x):
    return np.exp(x) * np.cos(x)`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Fonction pour suite récurrente">
            <CarnetCodeBlock label="Code">{`def f(u):
    return 2*u + 3`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <CarnetCallout variant="propriete" label="✔️ À faire">
            <ul className="space-y-1 list-disc list-inside">
              <li>Noms de fonctions explicites</li>
              <li>Docstring claire et concise</li>
              <li>Indentation cohérente (4 espaces)</li>
              <li>Toujours un <code>return</code></li>
            </ul>
          </CarnetCallout>
          <CarnetCallout variant="piege" label="❌ À éviter">
            <ul className="space-y-1 list-disc list-inside">
              <li>Fonctions sans docstring</li>
              <li>Oublier le <code>return</code></li>
              <li>Indentation incorrecte</li>
              <li>Noms de variables non explicites</li>
            </ul>
          </CarnetCallout>
        </div>
      </CarnetSection>

      {/* Section 6 — Méthode de dichotomie */}
      <CarnetSection
        number="06"
        title={<>Méthode de <em className="font-lora italic text-carnet-red">dichotomie</em></>}
        tilt="right"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Implémenter en Python une méthode rapide et rigoureuse pour approximer une racine réelle d'une équation <code>f(x) = 0</code> sur un intervalle donné.
        </p>

        <div className="carnet-eyebrow mb-3">Principe mathématique</div>
        <ul className="space-y-2 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6 pl-5">
          <li className="list-disc"><strong className="text-carnet-ink">Théorème des valeurs intermédiaires :</strong> si <span className="inline-block align-middle"><LatexRenderer latex="f(a) \cdot f(b) < 0" /></span>, alors <em>f</em> s'annule entre <em>a</em> et <em>b</em>.</li>
          <li className="list-disc"><strong className="text-carnet-ink">Recherche par découpage successif :</strong> on remplace <em>[a, b]</em> par la moitié où le signe change.</li>
        </ul>

        <CarnetCallout variant="piege" label="Condition obligatoire">
          <span className="inline-block align-middle"><LatexRenderer latex="f(a) \cdot f(b) < 0" /></span> (changement de signe sur l'intervalle).
        </CarnetCallout>

        <div className="mt-8">
          <div className="carnet-eyebrow mb-3">Algorithme Python — version commentée</div>
          <CarnetCodeBlock label="Code">{`def dichotomie(f, a, b, precision=1e-6):
    assert f(a)*f(b) < 0, "f(a) et f(b) doivent avoir des signes opposés"
    while b - a > precision:
        c = (a + b) / 2          # milieu de l'intervalle
        if f(a) * f(c) <= 0:     # racine dans [a, c]
            b = c
        else:                    # racine dans [c, b]
            a = c
    return (a + b) / 2           # approximation finale`}</CarnetCodeBlock>
        </div>

        <div className="mt-8">
          <div className="carnet-eyebrow mb-3">Explication ligne par ligne</div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ligne</TableHead>
                <TableHead>Que fait-on ?</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell><code>assert f(a)*f(b)&lt;0</code></TableCell><TableCell>Vérifie le prérequis mathématique</TableCell></TableRow>
              <TableRow><TableCell><code>while b - a &gt; precision</code></TableCell><TableCell>Tant que l'intervalle est trop large</TableCell></TableRow>
              <TableRow><TableCell><code>c = (a + b)/2</code></TableCell><TableCell>On coupe l'intervalle en deux</TableCell></TableRow>
              <TableRow><TableCell><code>if f(a)*f(c) &lt;= 0</code></TableCell><TableCell>Si changement de signe entre a et c</TableCell></TableRow>
              <TableRow><TableCell><code>b = c</code> ou <code>a = c</code></TableCell><TableCell>On garde l'intervalle où la racine se trouve</TableCell></TableRow>
              <TableRow><TableCell><code>return</code></TableCell><TableCell>Retourne le milieu comme approximation finale</TableCell></TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-8">
          <CarnetCallout variant="exemple" label="Exemple d'utilisation">
            <p className="text-[14px] mb-3">
              Résoudre{' '}
              <span className="inline-block align-middle"><LatexRenderer latex="f(x) = x^3 - 2x - 1 = 0" /></span>
              {' '}sur <code>[1, 2]</code>.
            </p>
            <CarnetCodeBlock label="Code">{`def f(x):
    return x**3 - 2*x - 1

r = dichotomie(f, 1, 2, 1e-6)
print(r)  # ≈ 1.618`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>
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
          Teste tes connaissances sur l'analyse numérique en Python avec ce quiz interactif.
        </p>
        <PythonModuleQuiz title="Quiz pratique — Module 2" questions={analyseQuizQuestions} />
      </section>

      <ModuleNavigationCards
        currentModule={{
          id: 2,
          title: 'Analyse',
          slug: 'analyse',
          color: 'carnet',
        }}
        isExercisePage={false}
      />
    </PythonModuleLayout>
  );
};

export default PythonAnalysePage;
