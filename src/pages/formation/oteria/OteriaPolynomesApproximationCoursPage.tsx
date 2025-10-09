import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Calculator, Zap, Code, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaPolynomesApproximationCoursPage = () => {
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const toggleCode = (codeId: string) => {
    setExpandedCode(expandedCode === codeId ? null : codeId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles" className="hover:text-blue-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-600 font-medium">Séance 6 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Séance 6 : Polynômes & dichotomie (II)</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Degré, racines, division euclidienne, Algorithme de la dichotomie pour f(x)=0
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">6</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">3h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
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
                Degré, racines, division euclidienne, Algorithme de la dichotomie pour f(x)=0
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <BookOpen className="h-5 w-5 mx-auto mb-2" />
                  Cours
                </button>
                <Link to="/formation/oteria/polynomes-exercices" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <Link to="/formation/oteria/polynomes-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <button className="w-full bg-gray-400 text-white px-4 py-3 rounded-lg cursor-not-allowed font-medium shadow-md" disabled>
                  <Zap className="h-5 w-5 mx-auto mb-2" />
                  QCM
                  <span className="text-xs block mt-1">Bientôt disponible</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu du cours */}
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Introduction
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 leading-relaxed">
                Les polynômes sont des outils fondamentaux en algèbre, utilisés pour représenter des fonctions polynomiales et analyser leurs propriétés. Ce chapitre couvre les définitions, les opérations, la dérivation, les racines, la factorisation, et les relations entre racines et coefficients.
              </p>
            </div>
          </div>

          {/* Définition : Polynôme */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Polynôme
            </h2>
            <div className="space-y-4">
              <p>Un polynôme réel est une expression de la forme :</p>
              <div className="my-2 text-center bg-blue-50 p-4 rounded"><LatexRenderer latex={"P(x) = a_0 + a_1 x + \\dots + a_n x^n \\quad (n \\in \\mathbb{N})"} /></div>
              <p>où <LatexRenderer latex={"a_i \\in \\mathbb{R}"} />.</p>
              <p>S'il est non nul, son <em>degré</em> est le plus grand indice <LatexRenderer latex={"n"} /> tel que <LatexRenderer latex={"a_n \\neq 0"} />; <LatexRenderer latex={"a_n"} /> est alors le <em>coefficient dominant</em>.</p>
              <p>Lorsque <LatexRenderer latex={"a_n = 1"} />, on dit que <LatexRenderer latex={"P"} /> est <em>unitaire</em>.</p>
              <p>Par convention, <LatexRenderer latex={"\\deg 0 = -\\infty"} />.</p>
              <p>On note <LatexRenderer latex={"\\mathbb{R}[X]"} /> l'ensemble de tous les polynômes réels, et <LatexRenderer latex={"\\mathbb{R}_n[X]"} /> ceux de degré <LatexRenderer latex={"\\leq n"} />.</p>
            </div>
          </div>

          {/* Définition : Égalité de deux polynômes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Égalité de deux polynômes
            </h2>
            <p>Deux polynômes non nuls sont identiques s'ils ont le même degré et des coefficients correspondants égaux.</p>
          </div>

          {/* Opération : Somme et produit */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Opération : Somme et produit
            </h2>
            <div className="space-y-4">
              <p>Pour <LatexRenderer latex={"P, Q \\in \\mathbb{R}[X]"} /> :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"\\deg(P + Q) \\leq \\max(\\deg P, \\deg Q), \\qquad \\deg(PQ) = \\deg P + \\deg Q"} />
              </div>
            </div>
          </div>

          {/* Théorème : Division euclidienne */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Théorème : Division euclidienne
            </h2>
            <div className="space-y-4">
              <p>Pour <LatexRenderer latex={"A, B \\in \\mathbb{R}[X]"} /> avec <LatexRenderer latex={"B \\neq 0"} />, il existe un unique couple <LatexRenderer latex={"(Q, R)"} /> tel que :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"A = B Q + R, \\qquad \\deg R < \\deg B"} />
              </div>
            </div>
          </div>

          {/* Définition : Polynôme dérivé */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Polynôme dérivé
            </h2>
            <div className="space-y-4">
              <p>Si <LatexRenderer latex={"P(x) = \\sum\\limits_{i=0}^n a_i x^i"} />, alors :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"P'(x) = \\sum\\limits_{i=1}^n i a_i x^{i-1}"} />
              </div>
              <p>et <LatexRenderer latex={"P'"} /> est nul lorsque <LatexRenderer latex={"P"} /> est constant.</p>
            </div>
          </div>

          {/* Théorème : Dérivées successives */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Théorème : Dérivées successives
            </h2>
            <div className="space-y-4">
              <p>Définies par <LatexRenderer latex={"P^{(0)} = P"} /> et <LatexRenderer latex={"P^{(k)} = (P^{(k-1)})'"} />.</p>
              <p>Si <LatexRenderer latex={"P(x) = \\sum\\limits_{i=0}^n a_i x^i"} />, alors pour <LatexRenderer latex={"k \\leq n"} /> :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"P^{(k)}(x) = \\sum\\limits_{i=k}^n \\frac{i!}{(i-k)!} a_i x^{i-k}, \\qquad \\deg P^{(k)} = n - k"} />
              </div>
              <p>et <LatexRenderer latex={"P^{(k)} \\equiv 0"} /> pour <LatexRenderer latex={"k \\geq n + 1"} />.</p>
            </div>
          </div>

          {/* Théorème : Formule de Taylor */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Théorème : Formule de Taylor
            </h2>
            <div className="space-y-4">
              <p>Pour <LatexRenderer latex={"a \\in \\mathbb{R}"} /> et tout <LatexRenderer latex={"P \\in \\mathbb{R}[X]"} /> de degré <LatexRenderer latex={"n"} /> :</p>
              <div className="text-center bg-blue-50 p-4 rounded border-2 border-blue-300">
                <LatexRenderer latex={"\\boxed{P(x) = \\sum\\limits_{k=0}^n \\frac{P^{(k)}(a)}{k!} (x - a)^k}"} />
              </div>
            </div>
          </div>

          {/* Définition : Racines */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Racines
            </h2>
            <div className="space-y-4">
              <p>Un réel <LatexRenderer latex={"r"} /> est une racine de <LatexRenderer latex={"P"} /> si <LatexRenderer latex={"P(r) = 0"} />, équivalemment si <LatexRenderer latex={"x - r"} /> divise <LatexRenderer latex={"P"} />.</p>
              <p>Un polynôme non nul de degré <LatexRenderer latex={"n"} /> possède au plus <LatexRenderer latex={"n"} /> racines réelles.</p>
              <p>S'il en a <LatexRenderer latex={"n"} /> distinctes <LatexRenderer latex={"r_1, \\dots, r_n"} />, alors <LatexRenderer latex={"\\prod\\limits_{i=1}^n (x - r_i)"} /> divise <LatexRenderer latex={"P"} />.</p>
            </div>
          </div>

          {/* Définition : Racine multiple */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Racine multiple
            </h2>
            <p>On dit que <LatexRenderer latex={"r"} /> est une racine d'ordre <LatexRenderer latex={"m \\geq 1"} /> de <LatexRenderer latex={"P"} /> si <LatexRenderer latex={"(x - r)^m"} /> divise <LatexRenderer latex={"P"} /> tandis que <LatexRenderer latex={"(x - r)^{m+1}"} /> ne le divise pas.</p>
          </div>

          {/* Théorème : Factorisation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Théorème : Factorisation
            </h2>
            <p>Tout polynôme réel se factorise en produit de polynômes de degré 1 et de polynômes quadratiques sans racine réelle.</p>
          </div>

          {/* Définition : Trinôme et discriminant */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Trinôme et discriminant
            </h2>
            <div className="space-y-4">
              <p>Pour <LatexRenderer latex={"P(x) = a x^2 + b x + c"} /> (<LatexRenderer latex={"a \\neq 0"} />), on pose <LatexRenderer latex={"\\Delta = b^2 - 4ac"} />.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><LatexRenderer latex={"\\Delta < 0"} /> : aucune racine réelle.</li>
                <li><LatexRenderer latex={"\\Delta = 0"} /> : racine double <LatexRenderer latex={"x_0 = -\\frac{b}{2a}"} /> et <LatexRenderer latex={"P(x) = a (x - x_0)^2"} />.</li>
                <li><LatexRenderer latex={"\\Delta > 0"} /> : racines <LatexRenderer latex={"x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}"} /> et <LatexRenderer latex={"x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}"} />, <LatexRenderer latex={"P(x) = a (x - x_1)(x - x_2)"} />.</li>
              </ul>
            </div>
          </div>

          {/* Théorème : Signe du trinôme */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Théorème : Signe du trinôme
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Si <LatexRenderer latex={"\\Delta \\leq 0"} />, le signe de <LatexRenderer latex={"P"} /> est celui de <LatexRenderer latex={"a"} /> pour tout <LatexRenderer latex={"x"} />.</li>
              <li>Si <LatexRenderer latex={"\\Delta > 0"} />, le signe est celui de <LatexRenderer latex={"a"} /> en dehors de <LatexRenderer latex={"[x_1, x_2]"} /> et celui de <LatexRenderer latex={"-a"} /> entre <LatexRenderer latex={"x_1"} /> et <LatexRenderer latex={"x_2"} />.</li>
            </ul>
          </div>

          {/* Théorème : Relations entre racines et coefficients */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Théorème : Relations entre racines et coefficients
            </h2>
            <div className="space-y-4">
              <p>Lorsque <LatexRenderer latex={"\\Delta \\geq 0"} /> et <LatexRenderer latex={"x_1, x_2"} /> sont les racines de <LatexRenderer latex={"a x^2 + b x + c"} /> :</p>
              <div className="text-center bg-blue-50 p-4 rounded border-2 border-blue-300">
                <LatexRenderer latex={"\\boxed{x_1 + x_2 = -\\frac{b}{a}, \\qquad x_1 x_2 = \\frac{c}{a}}"} />
              </div>
            </div>
          </div>

          {/* Formule du binôme de Newton */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Formule du binôme de Newton
            </h2>
            <div className="space-y-4">
              <p>Pour tous réels <LatexRenderer latex={"(a,b)"} /> et tout entier <LatexRenderer latex={"n \\geq 0"} /> :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"(a+b)^n = \\sum\\limits_{k=0}^n \\binom{n}{k} a^k b^{n-k} = \\sum\\limits_{k=0}^n \\binom{n}{k} a^{n-k} b^k"} />
              </div>
            </div>
          </div>

          {/* Nombre de parties d'un ensemble */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Nombre de parties d'un ensemble
            </h2>
            <div className="space-y-4">
              <p>En posant <LatexRenderer latex={"a = b = 1"} /> dans l'identité précédente, on obtient :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"\\sum\\limits_{k=0}^n \\binom{n}{k} = 2^n"} />
              </div>
            </div>
          </div>

          {/* Section : Méthode de dichotomie */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Méthode de dichotomie
            </h2>

            {/* Objectif */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Objectif</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  Savoir implémenter en Python une méthode rapide et rigoureuse pour approximer une racine réelle d'une équation <LatexRenderer latex="f(x) = 0" /> sur un intervalle donné.
                </p>
              </div>
            </div>

            {/* Principe mathématique */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Principe mathématique</h3>
              <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                <p className="text-blue-800">La méthode de dichotomie repose sur :</p>
                <ul className="list-disc list-inside space-y-2 text-blue-800 ml-4">
                  <li><strong>Le théorème des valeurs intermédiaires :</strong> si <LatexRenderer latex="f(a) \\cdot f(b) < 0" />, alors <LatexRenderer latex="f" /> s'annule entre <LatexRenderer latex="a" /> et <LatexRenderer latex="b" />.</li>
                  <li><strong>Une recherche par découpage successif :</strong> on remplace <LatexRenderer latex="[a,b]" /> par la moitié où le signe change.</li>
                </ul>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500 mt-3">
                  <strong className="text-blue-700">Condition obligatoire :</strong> <LatexRenderer latex="f(a) \\cdot f(b) < 0" /> (changement de signe)
                </div>
              </div>
            </div>

            {/* Algorithme Python */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Algorithme Python – version commentée</h3>
              
              <div className="border border-blue-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Code Python - Dichotomie
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode('dichotomie')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {expandedCode === 'dichotomie' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {expandedCode === 'dichotomie' ? 'Masquer' : 'Voir le code'}
                    </Button>
                  </div>
                </div>
                
                {expandedCode === 'dichotomie' && (
                  <div className="p-4 bg-gray-50">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`def dichotomie(f, a, b, precision=1e-6):
    assert f(a)*f(b) < 0, "f(a) et f(b) doivent avoir des signes opposés"
    while b - a > precision:
        c = (a + b) / 2    # milieu de l'intervalle
        if f(a) * f(c) <= 0:  # racine dans [a, c]
            b = c
        else:                 # racine dans [c, b]
            a = c
    return (a + b) / 2     # approximation finale`}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Explication ligne par ligne */}
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Explication ligne par ligne</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Ligne</th>
                        <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Que fait-on ?</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-blue-200 px-3 py-2"><code className="text-sm">assert f(a)*f(b)&lt;0</code></td>
                        <td className="border border-blue-200 px-3 py-2">Vérifie le prérequis mathématique</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 px-3 py-2"><code className="text-sm">while b - a &gt; precision</code></td>
                        <td className="border border-blue-200 px-3 py-2">Tant que l'intervalle est trop large</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 px-3 py-2"><code className="text-sm">c = (a + b)/2</code></td>
                        <td className="border border-blue-200 px-3 py-2">On coupe l'intervalle en deux</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 px-3 py-2"><code className="text-sm">if f(a)*f(c) &lt;= 0</code></td>
                        <td className="border border-blue-200 px-3 py-2">Si changement de signe entre a et c</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 px-3 py-2"><code className="text-sm">b = c ou a = c</code></td>
                        <td className="border border-blue-200 px-3 py-2">On garde l'intervalle où la racine se trouve</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 px-3 py-2"><code className="text-sm">return</code></td>
                        <td className="border border-blue-200 px-3 py-2">On retourne le milieu comme approximation finale</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Exemple d'utilisation */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Exemple d'utilisation</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <h4 className="font-semibold text-blue-900 mb-2">Problème</h4>
                <p className="text-blue-800 mb-3">Résoudre</p>
                <div className="text-center bg-white p-4 rounded">
                  <div className="mb-2"><LatexRenderer latex="f(x) = x^3 - 2x - 1 = 0" /></div>
                  <div className="text-blue-700 italic">sur l'intervalle [1, 2]</div>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Exemple complet
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode('exemple-dichotomie')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {expandedCode === 'exemple-dichotomie' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {expandedCode === 'exemple-dichotomie' ? 'Masquer' : 'Voir le code'}
                    </Button>
                  </div>
                </div>
                
                {expandedCode === 'exemple-dichotomie' && (
                  <div className="p-4 bg-gray-50">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`def f(x):
    return x**3 - 2*x - 1

r = dichotomie(f, 1, 2, 1e-6)
print(r)  # ≈ 1.618`}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>

            {/* Exercice : Méthode de Babylone */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Approximation de racine carrée</h3>
              
              <div className="space-y-4">
                <p className="text-blue-800">
                  <strong>Implémenter la méthode de Babylone</strong> (ou méthode de Héron) pour approcher la racine carrée d'un nombre positif.
                </p>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-blue-800 mb-3">On considère la suite définie pour <LatexRenderer latex="a > 0" /> par :</p>
                  <div className="text-center bg-blue-50 p-4 rounded space-y-3">
                    <div><LatexRenderer latex="u_0 = 1" /></div>
                    <div><LatexRenderer latex="u_{n+1} = \frac{u_n + a/u_n}{2}" /></div>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-3 text-blue-800 ml-4">
                  <li>Cette suite converge vers <LatexRenderer latex="\sqrt{a}" />. En effet, si <LatexRenderer latex="u_n" /> est proche de <LatexRenderer latex="\sqrt{a}" />, alors <LatexRenderer latex="a/u_n" /> l'est aussi, et leur moyenne l'est encore plus.</li>
                  <li>Écrire une fonction Python qui, pour un réel <LatexRenderer latex="a > 0" /> et un seuil <LatexRenderer latex="\varepsilon > 0" />, renvoie une valeur approchée de <LatexRenderer latex="\sqrt{a}" />, obtenue en arrêtant l'itération dès que <LatexRenderer latex="|u_{n+1} - u_n| \leq \varepsilon" />.</li>
                  <li>Tester cette fonction avec <LatexRenderer latex="a = 2" /> et <LatexRenderer latex="\varepsilon = 10^{-5}" />. Comparer avec la valeur exacte de <LatexRenderer latex="\sqrt{2}" />.</li>
                </ol>

                <div className="border border-blue-200 rounded-lg overflow-hidden mt-4">
                  <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Solution - Méthode de Babylone
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCode('babylone')}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {expandedCode === 'babylone' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        {expandedCode === 'babylone' ? 'Masquer' : 'Voir le code'}
                      </Button>
                    </div>
                  </div>
                  
                  {expandedCode === 'babylone' && (
                    <div className="p-4 bg-gray-50">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`import numpy as np

def racine(a, eps):
    assert a > 0, "a doit être strictement positif"
    
    u = 1.0
    x = 0.5 * (u + a/u)
    
    while abs(x - u) > eps:
        u = x
        x = 0.5 * (u + a/u)
    
    return x

# Test avec a = 2 et eps = 1e-5
a, eps = 2, 1e-5
approx = racine(a, eps)
exact = np.sqrt(a)

print(f"Approximation de √{a} : {approx}")
print(f"Valeur exacte : {exact}")
print(f"Erreur absolue : {abs(approx - exact)}")`}</code>
                      </pre>
                    </div>
                  )}
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
              <Link to="/formation/oteria/polynomes-exercices">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  Exercices
                </button>
              </Link>
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

export default OteriaPolynomesApproximationCoursPage;
