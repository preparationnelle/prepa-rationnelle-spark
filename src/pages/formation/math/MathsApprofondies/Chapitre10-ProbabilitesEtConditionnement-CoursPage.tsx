
import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

const MathsProbabilitesFiniesPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={10}
      chapterTitle="Chapitre 10 : Espaces probabilisés & conditionnement"
      description="Fondements (univers, tribu, axiomes de Kolmogorov, continuité croissante/décroissante) ; propriétés et calculs (crible, complémentaire, équiprobabilité, probabilités composées) ; conditionnement et formule de Bayes ; indépendance d'événements et familles indépendantes"
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
            <Link to="/formation/maths-probabilites-conditionnement-exercices">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-probabilites-conditionnement-flashcards">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-probabilites-conditionnement-quiz">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Fondements */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Espaces probabilisés : Fondements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Une <em>épreuve aléatoire</em> a un univers <span className="inline-block align-middle"><LatexRenderer latex="\Omega" /></span> d'issues possibles.</li>
              <li>Un <em>système d'événements</em> <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{A} \subset \mathcal{P}(\Omega)" /></span> satisfait :
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\Omega \in \mathcal{A}" /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex="A \in \mathcal{A} \implies A^{\complement} \in \mathcal{A}" /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\bigcup_{k \in I} A_k \in \mathcal{A}" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="(A_k) \subset \mathcal{A}" /></span></li>
                </ul>
              </li>
              <li>Événements notables : <span className="inline-block align-middle"><LatexRenderer latex="\Omega" /></span> (certain), <span className="inline-block align-middle"><LatexRenderer latex="\varnothing" /></span> (impossible), <span className="inline-block align-middle"><LatexRenderer latex="\{\omega\}" /></span> (élémentaire)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes importants</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Théorème de limite monotone (croissante)</p>
                <p className="text-slate-700">Si <span className="inline-block align-middle"><LatexRenderer latex="A_n \uparrow" /></span>, alors :</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="\mathbb{P}\!\bigl(\bigcup_{k=0}^{\infty} A_k\bigr) = \lim_{n \to \infty} \mathbb{P}(A_n)" />
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Théorème de limite monotone (décroissante)</p>
                <p className="text-slate-700">Si <span className="inline-block align-middle"><LatexRenderer latex="A_n \downarrow" /></span>, alors :</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="\mathbb{P}\!\bigl(\bigcap_{k=0}^{\infty} A_k\bigr) = \lim_{n \to \infty} \mathbb{P}(A_n)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Probabilités et propriétés */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Probabilités et propriétés
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Une <em>probabilité</em> <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}: \mathcal{A} \to [0, 1]" /></span> vérifie :
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(\Omega) = 1" /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(\bigcup_{i \in I} A_i) = \sum_{i \in I} \mathbb{P}(A_i)" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="(A_i)" /></span> incompatibles</li>
                </ul>
              </li>
              <li>Le triplet <span className="inline-block align-middle"><LatexRenderer latex="(\Omega, \mathcal{A}, \mathbb{P})" /></span> est un espace probabilisé</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Formules essentielles</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Formule du crible (2 événements)</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)" />
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Équiprobabilité</p>
                <p className="text-slate-700">Si <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(\{\omega\}) = 1/|\Omega|" /></span>, alors :</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="\mathbb{P}(A) = \frac{|A|}{|\Omega|}" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Conditionnement et indépendance */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Conditionnement et indépendance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Probabilité conditionnelle : Si <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(B) > 0" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}_B(A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}" /></span></li>
              <li>Indépendance : <span className="inline-block align-middle"><LatexRenderer latex="A" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="B" /></span> sont indépendants si <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(A \cap B) = \mathbb{P}(A) \mathbb{P}(B)" /></span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Formules clés</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Probabilités composées</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="\mathbb{P}\!\Bigl(\bigcap_{k=1}^n A_k\Bigr) = \mathbb{P}(A_1) \mathbb{P}_{A_1}(A_2) \cdots \mathbb{P}_{A_1 \cap \dots \cap A_{n-1}}(A_n)" />
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Formule de Bayes</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="\mathbb{P}_B(A) = \frac{\mathbb{P}(A) \mathbb{P}_A(B)}{\mathbb{P}(B)}" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes importants</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Propriété conditionnelle</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}_B(\Omega) = 1" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}_B(A^{\complement}) = 1 - \mathbb{P}_B(A)" /></span></li>
              <li><strong>Indépendance complémentaire</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="A" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="B" /></span> sont indépendants, <span className="inline-block align-middle"><LatexRenderer latex="A" /></span> l'est de <span className="inline-block align-middle"><LatexRenderer latex="B^{\complement}" /></span></li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default MathsProbabilitesFiniesPage;
