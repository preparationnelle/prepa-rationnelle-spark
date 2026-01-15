import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Shield, Code, BarChart3 } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OteriaVariablesAleatoiresCoursPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Séance 9 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 9 : Introduction aux variables aléatoires</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Lois usuelles (Bernoulli, Binomiale, Exponentielle…) — Simulation et applications en sécurité informatique
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Séance</span>
                  <span className="text-2xl font-bold text-blue-900">9</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">4h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Lois usuelles (Bernoulli, Binomiale, Exponentielle…)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <BookOpen className="h-5 w-5 mx-auto mb-2" />
                  Cours
                </button>
                <Link to="/formation/oteria/variables-aleatoires-exercices" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <Link to="/formation/oteria/variables-aleatoires-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BarChart3 className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <Link to="/formation/oteria/variables-aleatoires-qcm" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Informations de cours */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Informations du cours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-lg">
              <p className="font-semibold text-blue-900">
                Professeur : Dimitar Dimitrov
              </p>
              <p className="text-blue-800">
                Oteria Cyber School, Bachelor 2 — 2025
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Généralités */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              1. Généralités
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Une <strong>variable aléatoire réelle</strong> <LatexRenderer latex="X:\Omega \to \mathbb{R}" block={false} /> sur <LatexRenderer latex="(\Omega, A, P)" block={false} /> est une fonction mesurable telle que :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="\{ \omega \in \Omega \mid X(\omega) \leq x \} \in A, \quad \forall x \in \mathbb{R}" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Support</p>
                <p className="mb-3">
                  Le <strong>support</strong> <LatexRenderer latex="\mathrm{Supp}(X) = X(\Omega)" block={false} /> est l'ensemble des valeurs possibles.
                </p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Discrète</p>
                    <p>Support fini ou dénombrable.</p>
                  </div>
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Continue</p>
                    <p>Support non dénombrable (non étudié ici).</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Fonction de répartition</p>
                <p className="mb-3">
                  La fonction de répartition de <LatexRenderer latex="X" block={false} /> est définie par :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="F(x) = P(X \leq x)" block={true} />
                </div>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P(a < X \leq b) = F(b) - F(a), \quad a < b" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Lois de probabilité */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              2. Lois de probabilité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Une loi de probabilité discrète est donnée par :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P(X=x) \quad \text{pour } x \in \mathrm{Supp}(X), \quad \sum_{x \in \mathrm{Supp}(X)} P(X=x) = 1" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Espérance et variance</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="E(X) = \sum_{x \in \mathrm{Supp}(X)} x P(X=x), \quad \mathrm{Var}(X) = E\big((X-E(X))^2\big)" block={true} />
                </div>
                <p className="mb-3 mt-4">
                  <strong>Formule de König-Huygens :</strong>
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\mathrm{Var}(X) = E(X^2) - (E(X))^2" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Lois discrètes usuelles */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              3. Lois discrètes usuelles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-3 text-blue-700">Loi de Bernoulli <LatexRenderer latex="B(p)" block={false} /></p>
                <div className="space-y-2">
                  <LatexRenderer latex="P(X=1)=p" block={true} />
                  <LatexRenderer latex="E(X)=p, \quad \mathrm{Var}(X)=p(1-p)" block={true} />
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-3 text-blue-700">Loi Binomiale <LatexRenderer latex="B(n,p)" block={false} /></p>
                <div className="space-y-2">
                  <LatexRenderer latex="P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}" block={true} />
                  <LatexRenderer latex="E(X)=np, \quad \mathrm{Var}(X)=np(1-p)" block={true} />
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-3 text-blue-700">Loi Géométrique <LatexRenderer latex="G(p)" block={false} /></p>
                <div className="space-y-2">
                  <LatexRenderer latex="P(X=k) = (1-p)^{k-1}p" block={true} />
                  <LatexRenderer latex="E(X)=\frac{1}{p}, \quad \mathrm{Var}(X)=\frac{1-p}{p^2}" block={true} />
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-3 text-blue-700">Loi de Poisson <LatexRenderer latex="P(\lambda)" block={false} /></p>
                <div className="space-y-2">
                  <LatexRenderer latex="P(X=k) = \frac{\lambda^k}{k!} e^{-\lambda}" block={true} />
                  <LatexRenderer latex="E(X)=\lambda, \quad \mathrm{Var}(X)=\lambda" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Simulation en Python */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              4. Simulation en Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-lg">
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Bernoulli</p>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block">
                  random.choices([0,1], weights=[1-p,p])
                </code>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Binomiale</p>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block">
                  numpy.random.binomial(n,p)
                </code>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Géométrique</p>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block">
                  numpy.random.geometric(p)
                </code>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Poisson</p>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block">
                  numpy.random.poisson(lam)
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Cas pratique - Sécurité des mots de passe */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              5. Cas pratique : Sécurité des mots de passe
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Problème</p>
                <p className="mb-3">
                  On veut estimer la probabilité qu'un mot de passe soit suffisamment sécurisé.
                </p>
                <p>
                  Supposons un alphabet de <LatexRenderer latex="N" block={false} /> caractères et un mot de passe de longueur <LatexRenderer latex="L" block={false} />.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Nombre de possibilités</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\text{Nombre de mots de passe possibles} = N^L" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Probabilité de deviner au hasard</p>
                <p className="mb-3">
                  Si un attaquant essaie un mot de passe au hasard :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="P(\text{succès}) = \frac{1}{N^L}" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemple</p>
                <p className="mb-3">
                  Pour <LatexRenderer latex="N=62" block={false} /> (26 lettres majuscules + 26 minuscules + 10 chiffres) et <LatexRenderer latex="L=8" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-3">
                  <LatexRenderer latex="62^8 \approx 2.18 \times 10^{14}" block={true} />
                </div>
                <p>
                  La probabilité de succès en une tentative est donc <LatexRenderer latex="\approx 4.6 \times 10^{-15}" block={false} />.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Application Python : Générateur robuste</p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    {`import random, string

def generate_password(length=12):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))

print(generate_password())`}
                  </pre>
                </div>
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded p-4">
                <p className="font-semibold text-blue-900 mb-3">Conclusion</p>
                <p>
                  L'approche probabiliste montre que la robustesse d'un mot de passe dépend fortement de la taille de l'alphabet et de la longueur choisie.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Référence Python */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              6. Référence Python - Génération aléatoire et visualisation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Génération aléatoire de base */}
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Génération aléatoire de base</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="border border-blue-500 px-4 py-3 text-left">Objectif</th>
                      <th className="border border-blue-500 px-4 py-3 text-left">Commande</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Réel uniforme sur [0, 1[</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">rd.random()</code></td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Vecteur de taille n</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">rd.random(n)</code></td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Matrice n×m</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">rd.random((n, m))</code></td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Dé (faces 1 à 6)</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">np.floor(6 * rd.random()) + 1</code></td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Uniforme sur [a, b]</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">(b - a) * rd.random() + a</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lois discrètes courantes */}
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Lois discrètes courantes</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="border border-blue-500 px-4 py-3 text-left">Loi</th>
                      <th className="border border-blue-500 px-4 py-3 text-left">Appel rd.</th>
                      <th className="border border-blue-500 px-4 py-3 text-left">Paramètres</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Bernoulli(p)</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">binomial(1, p)</code></td>
                      <td className="border border-blue-200 px-4 py-2">p entre 0 et 1</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Binomiale(n, p)</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">binomial(n, p)</code></td>
                      <td className="border border-blue-200 px-4 py-2">n, p</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Uniforme discrète [a, b]</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">randint(a, b+1)</code></td>
                      <td className="border border-blue-200 px-4 py-2">a, b entiers</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Géométrique(p)</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">geometric(p)</code></td>
                      <td className="border border-blue-200 px-4 py-2">p</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Poisson(λ)</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">poisson(lam)</code></td>
                      <td className="border border-blue-200 px-4 py-2">λ {'>'} 0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fonctions "maison" alternatives */}
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Fonctions "maison" alternatives</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Fonction Bernoulli</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">{`def bernoulli(p):
    """Retourne 1 avec une probabilité p, 0 sinon."""
    return 1 if rd.random() <= p else 0`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Fonction Géométrique</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">{`def geometrique(p):
    """Retourne le rang de la première réussite (>= 1)."""
    n = 1
    while rd.random() > p:
        n += 1
    return n`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Fonction Binomiale</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">{`def binomiale(n, p):
    """Retourne le nombre de succès sur n essais."""
    S = 0
    for _ in range(n):
        if rd.random() <= p:
            S += 1
    return S`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistiques descriptives */}
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Statistiques descriptives (NumPy)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="border border-blue-500 px-4 py-3 text-left">Fonction</th>
                      <th className="border border-blue-500 px-4 py-3 text-left">Rôle</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">np.min(A) / np.max(A)</code></td>
                      <td className="border border-blue-200 px-4 py-2">Valeurs extrêmes</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">np.mean(A)</code></td>
                      <td className="border border-blue-200 px-4 py-2">Moyenne</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">np.median(A)</code></td>
                      <td className="border border-blue-200 px-4 py-2">Médiane</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">np.var(A) / np.std(A)</code></td>
                      <td className="border border-blue-200 px-4 py-2">Variance / écart-type</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">np.sum(A)</code></td>
                      <td className="border border-blue-200 px-4 py-2">Sommes totales</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">np.cumsum(A)</code></td>
                      <td className="border border-blue-200 px-4 py-2">Sommes cumulées</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Graphiques de base */}
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Graphiques de base (Matplotlib)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="border border-blue-500 px-4 py-3 text-left">Graphe</th>
                      <th className="border border-blue-500 px-4 py-3 text-left">Syntaxe</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Courbe</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">plt.plot(x, y)</code></td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Diagramme en barres</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">plt.bar(x, y, width)</code></td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Histogramme</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">plt.hist(x, bins, density=True)</code></td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Boîte à moustaches</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">plt.boxplot(x)</code></td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-blue-200 px-4 py-2">Affichage</td>
                      <td className="border border-blue-200 px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">plt.show()</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-blue-800">
                  <strong>Conseil :</strong> Utiliser <code className="bg-blue-100 px-2 py-1 rounded">density=True</code> dans <code className="bg-blue-100 px-2 py-1 rounded">plt.hist</code> pour comparer directement à la densité théorique.
                </p>
              </div>
            </div>

            {/* Exemple complet */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Exemple complet d'utilisation</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">{`import numpy as np
import numpy.random as rd
import matplotlib.pyplot as plt

# Génération d'une loi binomiale
n, p = 100, 0.3
echantillon = rd.binomial(n, p, size=10000)

# Statistiques
print(f"Moyenne: {np.mean(echantillon):.2f} (théorique: {n*p})")
print(f"Écart-type: {np.std(echantillon):.2f} (théorique: {np.sqrt(n*p*(1-p)):.2f})")

# Visualisation
plt.figure(figsize=(10, 6))
plt.hist(echantillon, bins=30, density=True, alpha=0.7, edgecolor='black')
plt.xlabel('Nombre de succès')
plt.ylabel('Densité')
plt.title(f'Loi Binomiale B(n={n}, p={p})')
plt.grid(True, alpha=0.3)
plt.show()`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Retour */}
        <div className="text-center mt-8">
          <Link to="/articles/oteria-cyber-school">
            <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-lg">
              <ArrowLeft className="h-5 w-5" />
              Retour au programme OTERIA
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaVariablesAleatoiresCoursPage;

