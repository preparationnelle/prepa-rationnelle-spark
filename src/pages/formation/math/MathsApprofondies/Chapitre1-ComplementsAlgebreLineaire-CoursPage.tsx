import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, PenTool, Brain } from 'lucide-react';

const Chapitre1ComplementsAlgebreLineaireCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={1}
      chapterTitle="Compléments d'algèbre linéaire"
      description="Somme directe de sous-espaces, supplémentaires, dimensions et formules de Grassmann ; généralisation à p sous-espaces, unicité de décomposition"
      slug="complements-algebre-lineaire"
      showNavigation={true}
    >
      {/* Section 1 — Sommes de deux sous-espaces et supplémentaires */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Sommes de deux sous-espaces et supplémentaires
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <p>
              Soient <LatexRenderer latex="F,G\subset E" inline /> deux sous-espaces vectoriels d'un espace vectoriel <LatexRenderer latex="E" inline />.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition</p>
              <div className="mt-2 space-y-2">
                <div>
                  <LatexRenderer latex="F+G=\{u+v\mid u\in F,\ v\in G\}" />
                </div>
                <div>
                  <span>Somme directe </span>
                  <LatexRenderer latex="F\oplus G" inline />
                  <span> si et seulement si </span>
                  <LatexRenderer latex="F\cap G=\{0\}" inline />.
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Proposition — unicité de décomposition</p>
              <p className="mt-2">
                <em>
                  <span>Les assertions suivantes sont équivalentes :</span>
                </em>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  <LatexRenderer latex="F\cap G=\{0\}" inline />.
                </li>
                <li>
                  <span>Tout </span>
                  <LatexRenderer latex="u\in F+G" inline />
                  <span> s'écrit de manière unique </span>
                  <LatexRenderer latex="u=u_F+u_G" inline />
                  <span> avec </span>
                  <LatexRenderer latex="u_F\in F,\ u_G\in G" inline />.
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — sous-espaces supplémentaires</p>
              <div className="mt-2">
                <LatexRenderer latex="F\text{ et }G\text{ sont \textbf{supplémentaires} dans }E\iff E=F\oplus G" />
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-200 p-4 rounded-lg">
              <p>
                En dimension finie, tout sous-espace de <LatexRenderer latex="E" inline /> admet un supplémentaire.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 — Dimension et formules */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Dimension et formules (Grassmann)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Somme directe</p>
              <div className="mt-2">
                <LatexRenderer latex="\dim(F\oplus G)=\dim F+\dim G" />
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Formule de Grassmann</p>
              <div className="mt-2">
                <LatexRenderer latex="\dim(F+G)=\dim F+\dim G-\dim(F\cap G)" />
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Caractérisation des supplémentaires (dim. finie)</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  <LatexRenderer latex="F+G=E\ \text{ et }\ \dim F+\dim G=\dim E" inline />.
                </li>
                <li>
                  <LatexRenderer latex="F\cap G=\{0\}\ \text{ et }\ \dim F+\dim G=\dim E" inline />.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Somme de p sous-espaces */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Somme de p sous-espaces et somme directe
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définitions</p>
              <div className="mt-2 space-y-2">
                <div>
                  <LatexRenderer latex="\sum_{i=1}^{p}F_i=\{u_1+\cdots+u_p\mid u_i\in F_i\}" />
                </div>
                <div>
                  <span>Somme directe si </span>
                  <LatexRenderer latex="u_1+\cdots+u_p=0\Rightarrow u_1=\cdots=u_p=0" inline />.
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Unicité de décomposition</p>
              <p className="mt-2">
                Tout vecteur de <LatexRenderer latex="\sum_{i=1}^{p}F_i" inline /> s'écrit de manière unique comme somme de vecteurs <LatexRenderer latex="u_i\in F_i" inline /> ssi la somme est directe.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Critères équivalents (dimension finie)</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Concaténation des bases de chaque <LatexRenderer latex="F_i" inline /> forme une base de la somme.
                </li>
                <li>
                  <LatexRenderer latex="\dim\big(\sum_{i=1}^{p}F_i\big)=\sum_{i=1}^{p}\dim F_i" inline />.
                </li>
              </ul>
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
            <Link to="/formation/maths-complements-algebre-lineaire-exercices">
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

export default Chapitre1ComplementsAlgebreLineaireCoursPage;


