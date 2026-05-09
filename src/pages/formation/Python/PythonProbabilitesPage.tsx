import { CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import { Button } from '@/components/ui/button';
import { CarnetHero, CarnetSection, CarnetCallout, CarnetCodeBlock } from '@/components/carnet';

const PythonProbabilitesPage = () => {
  const { markAsComplete, isChapterComplete } = usePythonProgress();
  const chapterId = 'python-3-cours';
  const isComplete = isChapterComplete(chapterId);

  const handleComplete = () => {
    markAsComplete(chapterId);
  };

  return (
    <PythonModuleLayout>
      <CarnetHero
        eyebrow="03 · Module · Probabilités"
        title="Probabilités"
        accent="en Python"
        tagline="Simuler, estimer et visualiser — du tirage uniforme à Monte-Carlo, le réflexe à automatiser."
        highlight="automatiser"
        handNote={'↘ pense\nMonte-Carlo'}
      />

      <PythonNavigationTabs className="mb-8" />

      {/* Objectifs du module */}
      <section className="carnet-card p-8 sm:p-10 mb-12">
        <div className="carnet-eyebrow mb-4">Objectifs du module</div>
        <hr className="carnet-divider mb-6" />
        <ul className="space-y-4 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
          {[
            { titre: 'Simulation', desc: 'Maîtriser la génération de nombres aléatoires et la simulation de lois de probabilité.' },
            { titre: 'Statistiques', desc: 'Calculer des statistiques descriptives et analyser des échantillons.' },
            { titre: 'Monte-Carlo', desc: 'Appliquer la méthode de Monte-Carlo pour estimer des probabilités et espérances.' },
            { titre: 'Visualisation', desc: 'Créer des graphiques statistiques avec Matplotlib.' },
          ].map((obj, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-carnet-ink">{obj.titre}</p>
                <p className="text-[14px]">{obj.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Imports et principes généraux */}
      <CarnetSection
        number="01"
        title="Imports et principes généraux"
        tilt="left"
      >
        <CarnetCodeBlock label="Imports">{`import numpy as np
import numpy.random as rd
import matplotlib.pyplot as plt`}</CarnetCodeBlock>

        <div className="grid sm:grid-cols-2 gap-3 mt-6">
          <CarnetCallout variant="propriete" label="Simulation">
            Quand le nombre de tirages devient grand, la <strong className="text-carnet-ink">fréquence observée</strong> se rapproche de la <strong className="text-carnet-ink">probabilité théorique</strong>.
          </CarnetCallout>
          <CarnetCallout variant="propriete" label="Monte-Carlo">
            Pour estimer une espérance, on simule un grand nombre de valeurs et on prend la <strong className="text-carnet-ink">moyenne</strong>.
          </CarnetCallout>
        </div>
      </CarnetSection>

      {/* Génération aléatoire de base */}
      <CarnetSection
        number="02"
        title={<>Génération <em className="font-lora italic text-carnet-red">aléatoire</em> de base</>}
        tilt="right"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Objectif</TableHead>
              <TableHead>Commande</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Réel uniforme sur [0, 1[</TableCell><TableCell><code>rd.random()</code></TableCell></TableRow>
            <TableRow><TableCell>Vecteur de taille n</TableCell><TableCell><code>rd.random(n)</code></TableCell></TableRow>
            <TableRow><TableCell>Matrice n×m</TableCell><TableCell><code>rd.random((n, m))</code></TableCell></TableRow>
            <TableRow><TableCell>Dé (faces 1 à 6)</TableCell><TableCell><code>np.floor(6 * rd.random()) + 1</code></TableCell></TableRow>
            <TableRow><TableCell>Uniforme sur [a, b]</TableCell><TableCell><code>(b - a) * rd.random() + a</code></TableCell></TableRow>
          </TableBody>
        </Table>
      </CarnetSection>

      {/* Lois discrètes courantes */}
      <CarnetSection
        number="03"
        title="Lois discrètes courantes"
        tilt="left"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Loi</TableHead>
              <TableHead>Appel rd.</TableHead>
              <TableHead>Paramètres</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Bernoulli(p)</TableCell><TableCell><code>binomial(1, p)</code></TableCell><TableCell>p entre 0 et 1</TableCell></TableRow>
            <TableRow><TableCell>Binomiale(n, p)</TableCell><TableCell><code>binomial(n, p)</code></TableCell><TableCell>n, p</TableCell></TableRow>
            <TableRow><TableCell>Uniforme discrète [a, b]</TableCell><TableCell><code>randint(a, b+1)</code></TableCell><TableCell>a, b entiers</TableCell></TableRow>
            <TableRow><TableCell>Géométrique(p)</TableCell><TableCell><code>geometric(p)</code></TableCell><TableCell>p</TableCell></TableRow>
            <TableRow><TableCell>Poisson(λ)</TableCell><TableCell><code>poisson(lam)</code></TableCell><TableCell>λ &gt; 0</TableCell></TableRow>
          </TableBody>
        </Table>
      </CarnetSection>

      {/* Fonctions "maison" alternatives */}
      <CarnetSection
        number="04"
        title="Fonctions « maison » alternatives"
        tilt="right"
      >
        <div className="space-y-6">
          <div>
            <div className="carnet-eyebrow mb-2">Fonction Bernoulli</div>
            <CarnetCodeBlock label="Code">{`def bernoulli(p):
    if rd.random() <= p:
        return 1
    return 0`}</CarnetCodeBlock>
          </div>
          <div>
            <div className="carnet-eyebrow mb-2">Fonction Géométrique</div>
            <CarnetCodeBlock label="Code">{`def geometrique(p):
    n = 1
    while rd.random() > p:
        n += 1
    return n`}</CarnetCodeBlock>
          </div>
          <div>
            <div className="carnet-eyebrow mb-2">Fonction Binomiale</div>
            <CarnetCodeBlock label="Code">{`def binomiale(n, p):
    S = 0
    for _ in range(n):
        if rd.random() <= p:
            S += 1
    return S`}</CarnetCodeBlock>
          </div>
        </div>
      </CarnetSection>

      {/* Statistiques descriptives */}
      <CarnetSection
        number="05"
        title="Statistiques descriptives (NumPy)"
        tilt="left"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fonction</TableHead>
              <TableHead>Rôle</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><code>np.min(A)</code> / <code>np.max(A)</code></TableCell><TableCell>Valeurs extrêmes</TableCell></TableRow>
            <TableRow><TableCell><code>np.mean(A)</code></TableCell><TableCell>Moyenne</TableCell></TableRow>
            <TableRow><TableCell><code>np.median(A)</code></TableCell><TableCell>Médiane</TableCell></TableRow>
            <TableRow><TableCell><code>np.var(A)</code> / <code>np.std(A)</code></TableCell><TableCell>Variance / écart-type</TableCell></TableRow>
            <TableRow><TableCell><code>np.sum(A)</code></TableCell><TableCell>Somme totale</TableCell></TableRow>
            <TableRow><TableCell><code>np.cumsum(A)</code></TableCell><TableCell>Sommes cumulées</TableCell></TableRow>
          </TableBody>
        </Table>
      </CarnetSection>

      {/* Graphiques Matplotlib */}
      <CarnetSection
        number="06"
        title="Graphiques de base (Matplotlib)"
        tilt="right"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Graphe</TableHead>
              <TableHead>Syntaxe</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Courbe</TableCell><TableCell><code>plt.plot(x, y)</code></TableCell></TableRow>
            <TableRow><TableCell>Diagramme en barres</TableCell><TableCell><code>plt.bar(x, y, width)</code></TableCell></TableRow>
            <TableRow><TableCell>Histogramme</TableCell><TableCell><code>plt.hist(x, bins, density=True)</code></TableCell></TableRow>
            <TableRow><TableCell>Boîte à moustaches</TableCell><TableCell><code>plt.boxplot(x)</code></TableCell></TableRow>
            <TableRow><TableCell><strong>Affichage</strong></TableCell><TableCell><code>plt.show()</code></TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="mt-6">
          <CarnetCallout variant="propriete" label="Conseil">
            Utiliser <code>density=True</code> dans <code>plt.hist</code> pour comparer directement à la <strong className="text-carnet-ink">densité théorique</strong>.
          </CarnetCallout>
        </div>
      </CarnetSection>

      {/* Méthode de Monte-Carlo */}
      <CarnetSection
        number="07"
        title="Méthode de Monte-Carlo et estimation"
        tilt="left"
      >
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <CarnetCallout variant="exemple" label="Estimer une espérance">
            <CarnetCodeBlock label="Code">{`np.mean(rd.<loi>(..., size=N))`}</CarnetCodeBlock>
            <p className="text-[13px] mt-2">avec un grand <strong className="text-carnet-ink">N</strong>.</p>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Estimer une probabilité">
            <CarnetCodeBlock label="Code">{`freq = np.mean(condition_bool)`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-3">Exemple — approximation d'une intégrale</div>
        <CarnetCodeBlock label="Code">{`def approx_Jn(n, m=5000):
    x = rd.exponential(1, m)
    y = -x / (1 + np.exp(-n * x))
    return y.mean()`}</CarnetCodeBlock>
      </CarnetSection>

      {/* Exercices types */}
      <CarnetSection
        number="08"
        title="Exercices types"
        tilt="right"
      >
        <div className="space-y-6">
          <div>
            <div className="carnet-eyebrow mb-2">1 · Deux faces « Pile » consécutives</div>
            <CarnetCodeBlock label="Code">{`def simul_X():
    tirs, pile = 0, 0
    while pile < 2:
        pile = pile + 1 if rd.random() < 0.5 else 0
        tirs += 1
    return tirs`}</CarnetCodeBlock>
          </div>
          <div>
            <div className="carnet-eyebrow mb-2">2 · Jeu de dés — A gagne s'il obtient 6 avant B</div>
            <CarnetCodeBlock label="Code">{`def partie():
    while True:
        if rd.randint(1, 7) == 6:  # A
            return 1
        if rd.randint(1, 7) == 6:  # B
            return 0

proba_A = np.mean([partie() for _ in range(10000)])`}</CarnetCodeBlock>
          </div>
          <div>
            <div className="carnet-eyebrow mb-2">3 · Géométrique(p=0.2) — simulation vs théorie</div>
            <CarnetCodeBlock label="Code">{`ech = rd.geometric(0.2, 10000)
c = np.arange(0.5, 21)
plt.hist(ech, c, density=True, label="Simulation")

x = np.arange(1, 21)
y = 0.2 * 0.8**(x - 1)
plt.bar(x, y, label="Théorique")
plt.legend(); plt.show()`}</CarnetCodeBlock>
          </div>
        </div>
      </CarnetSection>

      {/* Mémo-commandes rapides */}
      <CarnetSection
        number="09"
        title="Mémo-commandes rapides"
        tilt="left"
      >
        <CarnetCodeBlock label="Cheatsheet">{`rd.random()              # uniforme 0–1
rd.randint(a, b)         # uniforme discrète a … b-1
rd.binomial(n, p)        # binomiale
rd.geometric(p)          # géométrique
rd.poisson(lam)          # poisson
rd.exponential(1/l)      # exponentielle
rd.normal(mean, sigma)   # normale`}</CarnetCodeBlock>
      </CarnetSection>

      {/* Quiz express */}
      <CarnetSection
        number="10"
        title="Quiz express"
        tilt="right"
      >
        <ul className="space-y-3 font-instrument text-[15px] text-carnet-ink-soft leading-[1.65]">
          {[
            <><code>rd.random((3,4))</code> produit-il bien 12 réels indépendants entre 0 et 1 ?</>,
            'Quelle commande simule une valeur de loi de Poisson avec paramètre 2 ?',
            'Pour estimer une espérance, quelle syntaxe est la plus simple ?',
            <>Pourquoi ajouter <code>density=True</code> dans un histogramme ?</>,
            'Une ligne pour simuler dix mille valeurs de la loi géométrique avec paramètre 0.25 ?',
          ].map((q, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="carnet-hand text-[18px] text-carnet-red font-semibold leading-none mt-0.5">{i + 1}.</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <CarnetCallout variant="piege" label="Indice">
            Les réponses se déduisent directement des sections précédentes. Reprends-les si besoin.
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

      <ModuleNavigationCards
        currentModule={{
          id: 3,
          title: 'Probabilités',
          slug: 'probabilites',
          color: 'blue',
        }}
      />
    </PythonModuleLayout>
  );
};

export default PythonProbabilitesPage;
