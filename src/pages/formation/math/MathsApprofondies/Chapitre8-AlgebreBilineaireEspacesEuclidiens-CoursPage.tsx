import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, PenTool, Brain } from 'lucide-react';

const Chapitre8AlgebreBilineaireEspacesEuclidiensCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={8}
      chapterTitle="Algèbre bilinéaire et espaces euclidiens"
      description="Bases orthonormées d'un espace euclidien, formules dans une base orthonormée, matrices orthogonales"
      slug="
      algebre-bilineaire-espaces-euclidiens"
      showNavigation={true}
      
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-algebre-bilineaire-espaces-euclidiens-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-algebre-bilineaire-espaces-euclidiens-flashcards">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-algebre-bilineaire-espaces-euclidiens-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 — Espaces euclidiens */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Espaces euclidiens
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition</p>
              <div className="mt-2">
                <p>Un <strong>espace euclidien</strong> est un espace vectoriel réel <LatexRenderer latex="E" inline /> de dimension finie muni d'un produit scalaire <LatexRenderer latex="\langle \cdot,\cdot \rangle" inline />.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 — Existence de bases orthonormées */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Existence de bases orthonormées
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2">
                <p>Dans un espace euclidien <LatexRenderer latex="(E,\langle \cdot,\cdot\rangle)" inline />, toute famille orthonormée peut être complétée en une base orthonormée de <LatexRenderer latex="E" inline />.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Formules dans une base orthonormée */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Formules dans une base orthonormée
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-3">
                <p>Soit <LatexRenderer latex="(e_1,\dots,e_n)" inline /> une base orthonormée de <LatexRenderer latex="E" inline />.</p>
                
                <div>
                  <p><strong>1.</strong> Pour tout <LatexRenderer latex="x \in E" inline /> :</p>
                  <div className="text-center py-2 space-y-2">
                    <div><LatexRenderer latex="x = \sum_{i=1}^n \langle e_i,x\rangle e_i" /></div>
                    <div><LatexRenderer latex="M_{\mathcal{B}}(x)=\begin{pmatrix}\langle x,e_1\rangle \\ \vdots \\ \langle x,e_n\rangle\end{pmatrix}" /></div>
                  </div>
                </div>

                <div>
                  <p><strong>2.</strong> Pour <LatexRenderer latex="x=\sum x_ie_i" inline />, <LatexRenderer latex="y=\sum y_ie_i" inline /> :</p>
                  <div className="text-center py-2">
                    <LatexRenderer latex="\langle x,y \rangle = \sum_{i=1}^n x_iy_i" />
                  </div>
                </div>

                <div>
                  <p><strong>3.</strong> Norme :</p>
                  <div className="text-center py-2">
                    <LatexRenderer latex="\|x\|^2 = \sum_{i=1}^n x_i^2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="x,y \in E" inline /> et <LatexRenderer latex="X,Y" inline /> leurs coordonnées dans une base orthonormée <LatexRenderer latex="\mathcal{B}" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\langle x,y \rangle = X^T Y, \quad \|x\|^2 = X^T X" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 — Matrices orthogonales */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Matrices orthogonales
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2">
                <p>Une matrice <LatexRenderer latex="M \in \mathcal{M}_n(\mathbb{R})" inline /> est orthogonale <LatexRenderer latex="\iff" inline /> les colonnes de <LatexRenderer latex="M" inline /> forment une base orthonormée de <LatexRenderer latex="\mathbb{R}^n" inline /> (muni du produit scalaire canonique).</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Soit <LatexRenderer latex="E" inline /> un espace euclidien, <LatexRenderer latex="\mathcal{B}=(e_1,\dots,e_n)" inline /> une base orthonormée.</p>
                <p>Une base <LatexRenderer latex="\mathcal{B}'=(f_1,\dots,f_n)" inline /> est orthonormée <LatexRenderer latex="\iff" inline /> la matrice de passage <LatexRenderer latex="P_{\mathcal{B},\mathcal{B}'}" inline /> est orthogonale.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation secondaire */}
      <Card className="border-0 shadow-lg bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-approfondies-2e-annee">
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-algebre-bilineaire-espaces-euclidiens-exercices">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre8AlgebreBilineaireEspacesEuclidiensCoursPage;
