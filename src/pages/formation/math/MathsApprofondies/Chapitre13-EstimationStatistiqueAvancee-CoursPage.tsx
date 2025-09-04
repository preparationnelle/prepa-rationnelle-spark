import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

const Chapitre13EstimationStatistiqueAvanceeCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={13}
      chapterTitle="Estimation statistique avancée"
      description="Estimation ponctuelle, intervalles de confiance asymptotiques, critères d'efficacité et comparaison des estimateurs"
      slug="estimation-statistique-avancee"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-estimation-statistique-avancee-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-estimation-statistique-avancee-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 - Présentation générale */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Présentation générale
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              On considère une variable aléatoire <LatexRenderer latex="X" inline /> dont on connaît la <em>famille de lois</em> mais qui dépend d'un paramètre réel (par exemple le paramètre <LatexRenderer latex="\lambda" inline /> d'une loi exponentielle) ou vectoriel (par exemple le couple <LatexRenderer latex="(m,\sigma^{2})" inline /> d'une loi normale).
            </p>
            <p className="text-lg mb-4">
              L'objectif est d'estimer <em>une quantité réelle</em> <LatexRenderer latex="\theta" inline /> liée au paramètre inconnu.
            </p>
            <p className="text-lg">
              Dans la suite, la lettre <LatexRenderer latex="n\ge 2" inline /> désigne la taille de l'échantillon.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 - Échantillonnage */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Échantillonnage
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• n-échantillon</h3>
            <p className="text-lg mb-4">
              Un <em>n-échantillon</em> de la loi de <LatexRenderer latex="X" inline /> est tout n-uplet :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="(Z_{1},Z_{2},\dots,Z_{n})" />
            </div>
            <p className="text-lg">
              de variables aléatoires <strong>mutuellement indépendantes</strong> définies sur un même espace probabilisé <LatexRenderer latex="(\Omega,\mathcal A,\mathbb P)" inline /> et ayant toutes la même loi que <LatexRenderer latex="X" inline />.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Réalisation observée</h3>
            <p className="text-lg">
              Lorsque l'on observe un échantillon, on obtient un n-uplet de valeurs réelles <LatexRenderer latex="(z_{1},z_{2},\dots,z_{n})" inline />, appelé <em>échantillon observé</em> ou <em>réalisation</em> de <LatexRenderer latex="(Z_{1},\dots,Z_{n})" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 - Estimateurs et estimations */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Estimateurs et estimations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Définitions</h3>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>
                Un <strong>estimateur</strong> de <LatexRenderer latex="\theta" inline /> est toute variable aléatoire
                <div className="text-center py-2">
                  <LatexRenderer latex="T_{n}=T_{n}(Z_{1},\dots,Z_{n})" />
                </div>
                fonction de l'échantillon, donc indépendante de <LatexRenderer latex="\theta" inline />.
              </li>
              <li>
                En remplaçant <LatexRenderer latex="Z_{k}" inline /> par la valeur observée <LatexRenderer latex="z_{k}" inline />,
                <div className="text-center py-2">
                  <LatexRenderer latex="t_{n}=T_{n}(z_{1},\dots,z_{n})" />
                </div>
                est appelé <strong>estimation</strong> de <LatexRenderer latex="\theta" inline />.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 - Propriétés classiques des estimateurs */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Propriétés classiques des estimateurs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Biais</h3>
            <p className="text-lg mb-4">
              Le <em>biais</em> de <LatexRenderer latex="T_{n}" inline /> est :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="b_{\theta}(T_{n})=\mathbb E(T_{n})-\theta" />
            </div>
            <p className="text-lg">
              L'estimateur est <em>sans biais</em> si <LatexRenderer latex="\mathbb E(T_{n})=\theta" inline />.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Convergence (consistance)</h3>
            <p className="text-lg mb-4">
              On dit que la suite <LatexRenderer latex="(T_{n})_{n\ge1}" inline /> est <em>convergente</em> vers <LatexRenderer latex="\theta" inline /> (ou que <LatexRenderer latex="T_{n}" inline /> est <em>consistant</em>) lorsque :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\forall\varepsilon>0,\qquad \lim_{n\to\infty}\mathbb P\bigl(\lvert T_{n}-\theta\rvert\ge\varepsilon\bigr)=0" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Condition suffisante</h3>
            <p className="text-lg mb-4">
              Si les moments d'ordre 2 existent :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\lim_{n\to\infty}\mathbb E(T_{n})=\theta \quad\text{et}\quad \lim_{n\to\infty}\operatorname{Var}(T_{n})=0" />
            </div>
            <p className="text-lg">
              impliquent la convergence en probabilité de <LatexRenderer latex="T_{n}" inline /> vers <LatexRenderer latex="\theta" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 5 - Moyenne empirique */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            5. Moyenne empirique
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              La <em>moyenne empirique</em> :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\overline{Z}_{\,n}=\frac1n\sum_{k=1}^{n}Z_{k}" />
            </div>
            <p className="text-lg">
              est un estimateur sans biais de l'espérance <LatexRenderer latex="\mathbb E(X)" inline /> et, d'après la loi faible des grands nombres, elle converge vers cette espérance.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 6 - Fonction continue d'un estimateur convergent */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            6. Fonction continue d'un estimateur convergent
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg">
              Si <LatexRenderer latex="(T_{n})_{n\ge1}" inline /> converge vers <LatexRenderer latex="\theta" inline /> et si <LatexRenderer latex="f:\mathbb R\to\mathbb R" inline /> est continue, alors <LatexRenderer latex="(f(T_{n}))_{n\ge1}" inline /> converge vers <LatexRenderer latex="f(\theta)" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 7 - Intervalles de confiance */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            7. Intervalles de confiance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Définition générale</h3>
            <p className="text-lg mb-4">
              Soit <LatexRenderer latex="\alpha\in[0,1]" inline />.
            </p>
            <p className="text-lg mb-4">
              Deux variables aléatoires <LatexRenderer latex="U_{n}" inline /> et <LatexRenderer latex="V_{n}" inline />, fonctions de l'échantillon, constituent un <em>intervalle de confiance</em> <LatexRenderer latex="[U_{n},V_{n}]" inline /> pour <LatexRenderer latex="\theta" inline /> au niveau de confiance <LatexRenderer latex="1-\alpha" inline /> si :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\mathbb P\bigl(U_{n}\le\theta\le V_{n}\bigr)\ge1-\alpha" />
            </div>
            <p className="text-lg">
              En notant <LatexRenderer latex="u_{n}" inline /> et <LatexRenderer latex="v_{n}" inline /> les valeurs obtenues après observation, <LatexRenderer latex="[u_{n},v_{n}]" inline /> est l'<em>estimation</em> de l'intervalle de confiance.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4 my-4">
            <h4 className="text-lg font-semibold mb-2">Remarque (application de Bienaymé–Tchebychev)</h4>
            <p className="text-base">
              Lorsque <LatexRenderer latex="\theta" inline /> est l'espérance <LatexRenderer latex="m" inline /> d'une variable <LatexRenderer latex="X" inline />, l'inégalité de Tchebychev appliquée à <LatexRenderer latex="\overline{Z}_{\,n}" inline /> fournit un intervalle de confiance pour <LatexRenderer latex="m" inline />.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Intervalle asymptotique</h3>
            <p className="text-lg mb-4">
              On parle d'<em>intervalle de confiance asymptotique</em> lorsque :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\lim_{n\to\infty}\mathbb P\bigl(U_{n}\le\theta\le V_{n}\bigr)=1-\alpha" />
            </div>
            <p className="text-lg">
              avec une suite <LatexRenderer latex="(\alpha_{n})" inline /> tendant vers <LatexRenderer latex="\alpha" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 8 - Synthèse biais / variance / convergence */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            8. Synthèse biais / variance / convergence
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-x-auto">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left p-4 font-bold text-gray-800 bg-blue-50">Propriété</th>
                    <th className="text-left p-4 font-bold text-gray-800 bg-blue-50">Condition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Sans biais</td>
                    <td className="p-4">
                      <LatexRenderer latex="\mathbb E(T_{n})=\theta" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Convergent</td>
                    <td className="p-4">
                      <LatexRenderer latex="T_{n}\xrightarrow{\;\mathbb P\;}\theta" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Condition suffisante</td>
                    <td className="p-4">
                      <div className="flex flex-col space-y-2">
                        <LatexRenderer latex="\mathbb E(T_{n})\longrightarrow\theta" />
                        <LatexRenderer latex="\operatorname{Var}(T_{n})\longrightarrow0" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card className="border-0 shadow-lg bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-approfondies-2e-annee">
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-estimation-statistique-avancee-exercices">
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

export default Chapitre13EstimationStatistiqueAvanceeCoursPage;
