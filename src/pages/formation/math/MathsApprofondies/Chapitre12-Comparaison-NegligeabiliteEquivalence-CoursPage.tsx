
import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

const MathsComparaisonsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={12}
      chapterTitle="Comparaison — négligeabilité & équivalence"
      description="Définitions et notations : f=o(g), u_n=o(v_n), f\sim g, u_n\sim v_n ; propriétés : transitivité, compatibilité avec produit, quotient et composition par une puissance entière (mise en garde pour l'addition et pour \ln, \exp,\dots) ; croissances comparées des suites usuelles ((n^{a}),((\ln n)^{b}),(q^{n})) ; équivalents usuels et limites"
      showNavigation={true}
      
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50 mb-8">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Cours
            </Button>
            <Link to="/formation/maths-comparaison-negligeabilite-equivalence-exercices">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-comparaison-negligeabilite-equivalence-flashcards">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-comparaison-negligeabilite-equivalence-quiz">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Négligeabilité */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Négligeabilité : fonctions et suites
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                Une fonction <span className="inline-block align-middle"><LatexRenderer latex="f" /></span> est <em>négligeable</em> devant <span className="inline-block align-middle"><LatexRenderer latex="g" /></span> près de <span className="inline-block align-middle"><LatexRenderer latex="a \in \mathbb{R} \cup \{\pm \infty\}" /></span> si :
                <div className="ml-6 mt-2">
                  <span className="inline-block align-middle"><LatexRenderer latex="\exists \varepsilon(x) \to 0 \text{ tel que } f(x) = \varepsilon(x) g(x)" /></span>
                </div>
                <p className="ml-6 mt-1">Notation : <span className="inline-block align-middle"><LatexRenderer latex="f(x) = o(g(x)) (x \to a)" /></span></p>
              </li>
              <li>
                Une suite <span className="inline-block align-middle"><LatexRenderer latex="(u_n)" /></span> est <em>négligeable</em> devant <span className="inline-block align-middle"><LatexRenderer latex="(v_n)" /></span> si :
                <div className="ml-6 mt-2">
                  <span className="inline-block align-middle"><LatexRenderer latex="\exists (\varepsilon_n) \to 0 \text{ tel que } u_n = \varepsilon_n v_n" /></span>
                </div>
                <p className="ml-6 mt-1">Notation : <span className="inline-block align-middle"><LatexRenderer latex="u_n = o(v_n) (n \to +\infty)" /></span></p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Formules essentielles</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                Pour les fonctions : Si <span className="inline-block align-middle"><LatexRenderer latex="g \neq 0" /></span> près de <span className="inline-block align-middle"><LatexRenderer latex="a" /></span>
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="f(x) = o(g(x)) \iff \lim_{x \to a} \frac{f(x)}{g(x)} = 0" />
                </div>
              </li>
              <li>
                Pour les suites : Si <span className="inline-block align-middle"><LatexRenderer latex="v_n \neq 0" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="n" /></span> assez grand
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="u_n = o(v_n) \iff \lim_{n \to \infty} \frac{u_n}{v_n} = 0" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes importants</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Opérations (fonctions)</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f = o(h)" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="g = o(h)" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="\alpha f + \beta g = o(h)" /></span>
              </li>
              <li>
                <strong>Transitivité</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f = o(g)" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="g = o(h)" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="f = o(h)" /></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Équivalence */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Équivalence : fonctions et suites
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                Deux fonctions sont <em>équivalentes</em> près de <span className="inline-block align-middle"><LatexRenderer latex="a" /></span> si :
                <div className="ml-6 mt-2">
                  <span className="inline-block align-middle"><LatexRenderer latex="\exists \alpha(x) \to 1 \text{ tel que } f(x) = \alpha(x) g(x)" /></span>
                </div>
                <p className="ml-6 mt-1">Notation : <span className="inline-block align-middle"><LatexRenderer latex="f(x) \sim g(x) (x \to a)" /></span></p>
              </li>
              <li>
                Deux suites sont <em>équivalentes</em> si :
                <div className="ml-6 mt-2">
                  <span className="inline-block align-middle"><LatexRenderer latex="\exists (\alpha_n) \to 1 \text{ tel que } u_n = \alpha_n v_n" /></span>
                </div>
                <p className="ml-6 mt-1">Notation : <span className="inline-block align-middle"><LatexRenderer latex="u_n \sim v_n (n \to +\infty)" /></span></p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes fondamentaux</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Lien avec négligeabilité</strong> : <span className="inline-block align-middle"><LatexRenderer latex="f(x) \sim g(x) \iff f(x) = g(x) + o(g(x))" /></span>
              </li>
              <li>
                <strong>Transitivité</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f \sim g" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="g \sim h" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="f \sim h" /></span>
              </li>
              <li>
                <strong>Opérations</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f \sim g" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="h \sim k" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="f h \sim g k" /></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Équivalents usuels */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Équivalents usuels et limites
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Équivalents usuels</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Pour <span className="inline-block align-middle"><LatexRenderer latex="x \to 0" /></span> :</p>
                <ul className="list-disc list-inside space-y-2 ml-6 text-slate-700">
                  <li><span className="inline-block align-middle"><LatexRenderer latex="e^x - 1 \sim x" /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\ln(1 + x) \sim x" /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex="(1 + x)^\alpha - 1 \sim \alpha x" /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\sin x \sim x" /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex="1 - \cos x \sim \frac{x^2}{2}" /></span></li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Pour <span className="inline-block align-middle"><LatexRenderer latex="n \to +\infty" /></span> :</p>
                <ul className="list-disc list-inside space-y-2 ml-6 text-slate-700">
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\ln n \sim n" /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex="n^\alpha \sim q^n" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="q > 1" /></span></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes sur les limites</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                Si <span className="inline-block align-middle"><LatexRenderer latex="f \sim g" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="\lim_{x \to a} f(x) = \ell" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="\lim_{x \to a} g(x) = \ell" /></span>
              </li>
              <li>
                <strong>Réciproque</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="\lim_{x \to a} f(x) = \ell \neq 0" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="f(x) \sim \ell" /></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default MathsComparaisonsPage;
