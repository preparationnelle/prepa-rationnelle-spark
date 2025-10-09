import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Database, Calculator, Zap, Target, Code, Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";

const OteriaFonctionsVariableReelleCoursPage = () => {
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const toggleCode = (codeId: string) => {
    setExpandedCode(expandedCode === codeId ? null : codeId);
  };

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
            <span className="text-teal-600 font-medium">Séance 5 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Database className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 5 : Fonctions, croissance, polynômes (I)</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Parité, périodicité, continuité (aperçu), Théorème de croissance comparée
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">5</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">3h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Parité, périodicité, continuité (aperçu), Théorème de croissance comparée
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <BookOpen className="h-5 w-5 mx-auto mb-2" />
                  Cours
                </button>
                <Link to="/formation/oteria/fonctions-exercices" className="w-full">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg">
                  <Target className="h-5 w-5 mx-auto mb-2" />
                  Exercices
                </button>
                </Link>
                <Link to="/formation/oteria/fonctions-flashcards" className="w-full">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg">
                  <Calculator className="h-5 w-5 mx-auto mb-2" />
                  Flashcards
                </button>
                </Link>
                <Link to="/formation/oteria/fonctions-qcm" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu du cours */}
        <div className="max-w-4xl mx-auto">

          {/* Section 1: Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              1. Introduction
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 leading-relaxed">
                Les fonctions d'une variable réelle jouent un rôle central en analyse mathématique. 
                Elles permettent d'étudier des phénomènes continus, de modéliser des variations et d'analyser des comportements limites.
              </p>
            </div>
          </div>

          {/* Section 2: Opérations sur les ensembles */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              2. Opérations sur les ensembles
            </h2>

            {/* A.1 Comparaison entre ensembles */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">A.1. Comparaison entre ensembles</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-blue-300">
                    <p className="text-blue-800 mb-2">
                      On dit qu'un ensemble A est contenu dans un ensemble B, et l'on écrit <strong>A⊂B</strong>, 
                      lorsque tout élément de A appartient également à B.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <strong className="text-blue-900">Égalité :</strong>
                    <p className="text-blue-800 mt-2">A=B ⟺ A⊂B et B⊂A</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                    <strong className="text-blue-900">Parties :</strong>
                    <p className="text-blue-800 mt-2">A⊂E ⇒ A est une partie de E</p>
                    <p className="text-blue-700 text-sm mt-1">Notation : P(E) = ensemble des parties de E</p>
                  </div>
                </div>
              </div>
            </div>

            {/* A.2 Intersection et réunion */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">A.2. Intersection et réunion</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Intersection</h4>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">x∈A∩B ⟺ x∈A et x∈B</strong>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Réunion</h4>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">x∈A∪B ⟺ x∈A ou x∈B</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* A.3 Propriétés fondamentales */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">A.3. Propriétés fondamentales</h3>
              
              <div className="space-y-6">
                {/* Commutativité */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Commutativité</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      A∩B = B∩A
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      A∪B = B∪A
                    </div>
                  </div>
                </div>

                {/* Associativité */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Associativité</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                      (A∩B)∩C = A∩(B∩C)
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                      (A∪B)∪C = A∪(B∪C)
                    </div>
                  </div>
                </div>

                {/* Distributivité */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Distributivité</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                      A∩(B∪C) = (A∩B)∪(A∩C)
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                      A∪(B∩C) = (A∪B)∩(A∪C)
                    </div>
                  </div>
                </div>

                {/* Complémentaire */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Complémentaire</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                      x∈Ā ⟺ x∉A
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                      (Ā) = A, ∅̄ = Ω, Ω̄ = ∅
                    </div>
                  </div>
                </div>

                {/* Lois de Morgan */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Lois de Morgan</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                      <strong className="text-blue-900">(A∩B)̄ = Ā∪B̄</strong>
                    </div>
                    <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                      <strong className="text-blue-900">(A∪B)̄ = Ā∩B̄</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Applications et bijections */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              3. Applications et bijections
            </h2>

            {/* B.1 Fonctions et applications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">B.1. Fonctions et applications</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 mb-3">
                    Une <strong>fonction</strong> f de E vers F associe à certains éléments de E des éléments de F.
                  </p>
                  <p className="text-blue-800">
                    Une <strong>application</strong> f:E→F est une fonction pour laquelle chaque x∈E possède exactement une image f(x)∈F.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Identité</h4>
                  <p className="text-blue-800">Pour tout x∈E, Id<sub>E</sub>(x) = x</p>
                </div>
              </div>
            </div>

            {/* B.2 Types d'applications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">B.2. Types d'applications</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Injection</h4>
                  <div className="bg-white p-4 rounded border-2 border-blue-300">
                    <p className="text-blue-800">
                      Pour tout (x₁,x₂)∈E², f(x₁)=f(x₂) ⇒ x₁=x₂
                    </p>
                    <p className="text-blue-700 text-sm mt-2">
                      (Des images égales impliquent des antécédents égaux)
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Surjection</h4>
                  <div className="bg-white p-4 rounded border-2 border-blue-300">
                    <p className="text-blue-800">
                      Pour tout y∈F, il existe x∈E tel que y=f(x)
                    </p>
                    <p className="text-blue-700 text-sm mt-2">
                      (Tout élément de F a au moins un antécédent)
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Bijection</h4>
                  <div className="bg-white p-4 rounded border-2 border-blue-300">
                    <p className="text-blue-800">
                      Pour tout y∈F, il existe un <strong>unique</strong> x∈E tel que y=f(x)
                    </p>
                    <p className="text-blue-700 text-sm mt-2">
                      (Injection + Surjection)
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Bijection réciproque</h4>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900 text-lg">
                      y=f(x) ⟺ x=f⁻¹(y)
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* B.3 Théorème de la bijection monotone */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">B.3. Théorème de la bijection monotone</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-blue-300">
                    <p className="text-blue-800 font-semibold mb-3">Théorème :</p>
                    <p className="text-blue-800">
                      Soit f une application continue et strictement monotone sur un intervalle I⊂ℝ. 
                      Alors f est une bijection de I sur J=f(I).
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <p className="text-blue-800">
                    <strong>Propriété importante :</strong> Lorsque f est continue et strictement monotone sur I, 
                    les fonctions f et f⁻¹ ont les mêmes variations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Valeur absolue */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              4. Valeur absolue
            </h2>

            <div className="mb-6">
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-3">Définition</h4>
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900 text-lg">
                    |x| = x si x ≥ 0, |x| = -x si x &lt; 0
                  </strong>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Propriétés</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      <strong>Paire :</strong> |-x| = |x|
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                      <strong>Multiplication :</strong> |xy| = |x||y|
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                      <strong>Inégalité triangulaire :</strong><br/>
                      ∀x,y ∈ ℝ, |x+y| ≤ |x| + |y|
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                      <strong>Encadrement :</strong><br/>
                      |x| ≤ M ⟺ -M ≤ x ≤ M
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Généralités sur les fonctions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              5. Généralités sur les fonctions
            </h2>

            {/* 3.1 Définition */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définition</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  Une fonction f: ℝ → ℝ est définie sur un ensemble Df ⊆ ℝ et représentée par sa courbe (Cf).
                </p>
              </div>
            </div>

            {/* 3.2 Parité */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Parité</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-900 mb-2">Fonction paire</h5>
                  <p className="text-blue-800 mb-2">f(-x) = f(x)</p>
                  <p className="text-blue-700 text-sm">Symétrie par rapport à l'axe des ordonnées</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                  <h5 className="font-semibold text-blue-900 mb-2">Fonction impaire</h5>
                  <p className="text-blue-800 mb-2">f(-x) = -f(x)</p>
                  <p className="text-blue-700 text-sm">Symétrie par rapport à l'origine</p>
                </div>
              </div>
            </div>

            {/* 3.3 Périodicité */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Périodicité</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900">f est T-périodique si ∀x, f(x+T) = f(x)</strong>
                </div>
              </div>
            </div>

            {/* 3.4 Visualisation avec Python */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Visualisation des fonctions avec Python</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 mb-3">
                  Python et la bibliothèque Matplotlib permettent de visualiser facilement les fonctions mathématiques.
                </p>
              </div>

              {/* Exemple 1: Fonction simple */}
              <div className="mb-6">
                <h4 className="font-semibold text-blue-900 mb-3">Exemple 1 : Tracer une fonction polynomiale</h4>
                <div className="border border-blue-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-blue-900 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Code Python - f(x) = x² - 4
                      </h5>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCode('python-poly')}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {expandedCode === 'python-poly' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        {expandedCode === 'python-poly' ? 'Masquer' : 'Voir le code'}
                      </Button>
                    </div>
                  </div>
                  
                  {expandedCode === 'python-poly' && (
                    <div className="p-4 bg-gray-50">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`import matplotlib.pyplot as plt
import numpy as np

# Définir l'intervalle
x = np.linspace(-5, 5, 100)
y = x**2 - 4

# Tracer la courbe
plt.plot(x, y)
plt.axhline(y=0, color='k', linestyle='-', linewidth=0.5)
plt.axvline(x=0, color='k', linestyle='-', linewidth=0.5)
plt.title("f(x) = x² - 4")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.grid(True)
plt.show()`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Exemple 2: Fonction trigonométrique */}
              <div className="mb-6">
                <h4 className="font-semibold text-blue-900 mb-3">Exemple 2 : Fonction trigonométrique</h4>
                <div className="border border-blue-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-blue-900 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Code Python - f(x) = sin(x)
                      </h5>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCode('python-trig')}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {expandedCode === 'python-trig' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        {expandedCode === 'python-trig' ? 'Masquer' : 'Voir le code'}
                      </Button>
                    </div>
                  </div>
                  
                  {expandedCode === 'python-trig' && (
                    <div className="p-4 bg-gray-50">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`import matplotlib.pyplot as plt
import numpy as np

# Définir l'intervalle
x = np.linspace(-2*np.pi, 2*np.pi, 200)
y = np.sin(x)

# Tracer la courbe
plt.plot(x, y, label='sin(x)')
plt.axhline(y=0, color='k', linestyle='-', linewidth=0.5)
plt.axvline(x=0, color='k', linestyle='-', linewidth=0.5)
plt.title("Fonction sinus")
plt.xlabel("x")
plt.ylabel("sin(x)")
plt.grid(True)
plt.legend()
plt.show()`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Exemple 3: Plusieurs fonctions */}
              <div className="mb-6">
                <h4 className="font-semibold text-blue-900 mb-3">Exemple 3 : Comparer plusieurs fonctions</h4>
                <div className="border border-blue-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-blue-900 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Code Python - Fonctions paire et impaire
                      </h5>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCode('python-compare')}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {expandedCode === 'python-compare' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        {expandedCode === 'python-compare' ? 'Masquer' : 'Voir le code'}
                      </Button>
                    </div>
                  </div>
                  
                  {expandedCode === 'python-compare' && (
                    <div className="p-4 bg-gray-50">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-3, 3, 100)

# Fonction paire : f(x) = x²
y_paire = x**2

# Fonction impaire : g(x) = x³
y_impaire = x**3

# Tracer les deux courbes
plt.plot(x, y_paire, label='f(x) = x² (paire)', color='blue')
plt.plot(x, y_impaire, label='g(x) = x³ (impaire)', color='red')
plt.axhline(y=0, color='k', linestyle='-', linewidth=0.5)
plt.axvline(x=0, color='k', linestyle='-', linewidth=0.5)
plt.title("Fonctions paire et impaire")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True)
plt.legend()
plt.show()`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Points clés</h4>
                <ul className="text-blue-800 space-y-1 list-disc list-inside">
                  <li><code>np.linspace(a, b, n)</code> : crée n points uniformément répartis entre a et b</li>
                  <li><code>plt.plot(x, y)</code> : trace la courbe de la fonction</li>
                  <li><code>plt.axhline()</code> et <code>plt.axvline()</code> : ajoutent les axes</li>
                  <li><code>plt.legend()</code> : affiche la légende pour identifier les courbes</li>
                  <li>La visualisation aide à comprendre les propriétés (parité, périodicité, etc.)</li>
                </ul>
              </div>
            </div>

            {/* 3.5 Fonctions mathématiques de base en Python */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Fonctions mathématiques de base en Python</h3>
              
              <div className="space-y-6">
                {/* Fonctions mathématiques */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Fonctions NumPy</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      <strong className="text-blue-900">np.abs(x)</strong>
                      <p className="text-blue-700 text-sm">Valeur absolue</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      <strong className="text-blue-900">np.sqrt(x)</strong>
                      <p className="text-blue-700 text-sm">Racine carrée</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                      <strong className="text-blue-900">np.exp(x)</strong>
                      <p className="text-blue-700 text-sm">Exponentielle (e^x)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                      <strong className="text-blue-900">np.log(x)</strong>
                      <p className="text-blue-700 text-sm">Logarithme népérien (ln)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                      <strong className="text-blue-900">np.cos(x)</strong>
                      <p className="text-blue-700 text-sm">Cosinus</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                      <strong className="text-blue-900">np.sin(x)</strong>
                      <p className="text-blue-700 text-sm">Sinus</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                      <strong className="text-blue-900">np.floor(x)</strong>
                      <p className="text-blue-700 text-sm">Partie entière</p>
                    </div>
                  </div>
                </div>

                {/* Constantes */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Constantes mathématiques</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                      <strong className="text-blue-900 text-lg">np.pi</strong>
                      <p className="text-blue-700 text-sm mt-1">π (pi) ≈ 3.14159...</p>
                    </div>
                    <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                      <strong className="text-blue-900 text-lg">np.e</strong>
                      <p className="text-blue-700 text-sm mt-1">e (nombre d'Euler) ≈ 2.71828...</p>
                    </div>
                  </div>
                </div>

                {/* Exemple d'utilisation */}
                <div className="border border-blue-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-blue-900 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Exemple : Utilisation des fonctions mathématiques
                      </h5>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCode('python-math-functions')}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {expandedCode === 'python-math-functions' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        {expandedCode === 'python-math-functions' ? 'Masquer' : 'Voir le code'}
                      </Button>
                    </div>
                  </div>
                  
                  {expandedCode === 'python-math-functions' && (
                    <div className="p-4 bg-gray-50">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`import matplotlib.pyplot as plt
import numpy as np

# Fonctions mathématiques
x = np.linspace(-2*np.pi, 2*np.pi, 200)

# Tracer plusieurs fonctions
plt.figure(figsize=(12, 8))

# Fonctions trigonométriques
plt.subplot(2, 2, 1)
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')
plt.title("Fonctions trigonométriques")
plt.legend()
plt.grid(True)

# Exponentielle et logarithme
plt.subplot(2, 2, 2)
x_pos = np.linspace(0.1, 3, 100)
plt.plot(x_pos, np.exp(x_pos), label='exp(x)')
plt.plot(x_pos, np.log(x_pos), label='log(x)')
plt.title("Exponentielle et logarithme")
plt.legend()
plt.grid(True)

# Valeur absolue
plt.subplot(2, 2, 3)
x_abs = np.linspace(-5, 5, 100)
plt.plot(x_abs, np.abs(x_abs), label='|x|')
plt.title("Valeur absolue")
plt.legend()
plt.grid(True)

# Racine carrée
plt.subplot(2, 2, 4)
plt.plot(x_pos, np.sqrt(x_pos), label='√x')
plt.title("Racine carrée")
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.show()

# Utilisation des constantes
print(f"π = {np.pi}")
print(f"e = {np.e}")
print(f"e^π = {np.exp(np.pi)}")`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 3.5 Bornes et extrémums */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Bornes et extrémums</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>Majorée :</strong> ∃M : f(x) ≤ M
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong>Minorée :</strong> ∃m : f(x) ≥ m
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                    <strong>Maximum global :</strong><br/>
                    f(x₀) ≥ f(x) pour tout x
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                    <strong>Minimum global :</strong><br/>
                    f(x₀) ≤ f(x) pour tout x
                  </div>
                </div>
              </div>
            </div>

            {/* 3.5 Variations */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Variations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>Croissante :</strong><br/>
                    x ≤ y ⟹ f(x) ≤ f(y)
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong>Strictement croissante :</strong><br/>
                    x &lt; y ⟹ f(x) &lt; f(y)
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                    <strong>Décroissante :</strong><br/>
                    x ≤ y ⟹ f(x) ≥ f(y)
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                    <strong>Monotone :</strong><br/>
                    croissante ou décroissante
                  </div>
                </div>
              </div>
            </div>

            {/* 3.6 Composition et bijection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Composition et bijection</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  Si f croît et g croît, alors g ∘ f croît
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  Si f est strictement monotone, f⁻¹ existe, est continue et conserve le sens de variation
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Continuité */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              6. Continuité
            </h2>

            {/* 4.1 Définitions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définitions</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-2 border-blue-300">
                    <p className="text-blue-800 mb-2">
                      <strong>Continuité en x₀ :</strong>
                    </p>
                    <p className="text-center text-blue-900 font-semibold">
                      f est continue en x₀ si lim(x→x₀) f(x) = f(x₀)
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>Continuité unilatérale :</strong> limite à gauche/droite correspond à f(x₀)
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong>Continuité sur I :</strong> f est continue en tout point de I
                  </div>
                </div>
              </div>
            </div>

            {/* 4.2 Théorèmes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Théorèmes</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-900 mb-2">Théorème des valeurs intermédiaires</h5>
                  <p className="text-blue-800">
                    Si f continue sur [a,b], pour toute valeur λ entre f(a) et f(b), ∃c ∈ [a,b] : f(c) = λ
                  </p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                  <h5 className="font-semibold text-blue-900 mb-2">Théorème de Weierstrass</h5>
                  <p className="text-blue-800">
                    Si f est continue sur [a,b], alors f est bornée et atteint ses bornes
                  </p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-700">
                  <h5 className="font-semibold text-blue-900 mb-2">Bijection continue</h5>
                  <p className="text-blue-800">
                    Si f est continue et strictement monotone sur I, alors f est bijective de I sur f(I), et f⁻¹ est continue
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Limites */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              7. Limites
            </h2>

            {/* 5.1 Définition */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définition</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900 text-lg">
                    lim(x→x₀) f(x) = ℓ ⟺ ∀ε&gt;0, ∃α&gt;0, 0&lt;|x-x₀|&lt;α ⟹ |f(x)-ℓ|&lt;ε
                  </strong>
                </div>
              </div>
            </div>

            {/* 6.2 Limites unilatérales */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Limites unilatérales</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-center">
                  <strong>Limite à gauche :</strong><br/>
                  lim(x→x₀⁻) f(x) = ℓ
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-600 text-center">
                  <strong>Limite à droite :</strong><br/>
                  lim(x→x₀⁺) f(x) = ℓ
                </div>
              </div>
            </div>

            {/* 6.3 Limites infinies et à l'infini */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Limites infinies et à l'infini</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→x₀) f(x) = +∞ ⟺ ∀A&gt;0, ∃α&gt;0, 0&lt;|x-x₀|&lt;α ⟹ f(x) &gt; A
                    </strong>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→+∞) f(x) = ℓ ⟺ ∀ε&gt;0, ∃B&gt;0, x&gt;B ⟹ |f(x)-ℓ|&lt;ε
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 6.4 Limites usuelles */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Limites usuelles</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→0) sin x / x = 1
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→0) (eˣ-1) / x = 1
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→0) ln(1+x) / x = 1
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 6.5 Croissances comparées */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Croissances comparées</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→+∞) ln x / x = 0
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→+∞) xⁿ / eˣ = 0 (n ∈ ℕ*)
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/articles/oteria-cyber-school">
              <div className="text-blue-600">← Séance précédente</div>
            </Link>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                Exercices
              </button>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
            <div className="text-blue-600 font-medium">Séance suivante →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaFonctionsVariableReelleCoursPage;
