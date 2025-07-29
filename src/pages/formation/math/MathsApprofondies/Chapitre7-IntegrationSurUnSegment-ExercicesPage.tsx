import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  Home,
  Star,
  BookOpen,
  Lightbulb,
  Target,
  Crown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre7IntegrationSurUnSegmentExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<
    Record<string, boolean>
  >({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections((prev) => ({
      ...prev,
      [exerciseId]: !prev[exerciseId],
    }));
  };

  /* ------------------------------------------
     Composant ré-utilisables
  ------------------------------------------ */

  const DifficultyHeader = ({
    level,
    title,
    icon: Icon,
    stars,
    color = 'blue',
  }: {
    level: string;
    title: string;
    icon: React.ElementType;
    stars: number;
    color?: string;
  }) => (
    <div
      className={`bg-gradient-to-r from-${color}-100 to-${color}-50 border-l-4 border-${color}-500 p-6 mb-6 rounded-r-lg shadow-sm`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 bg-${color}-500 text-white rounded-lg`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {level} : {title}
          </h2>
          <div className="flex gap-1 mt-1">
            {[...Array(stars)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 fill-${color}-500 text-${color}-500`}
              />
            ))}
            {[...Array(4 - stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gray-300" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({
    id,
    title,
    content,
    correction,
    difficulty,
  }: {
    id: string;
    title: string;
    content: React.ReactNode;
    correction: React.ReactNode;
    difficulty: string;
  }) => (
    <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {title}
          </div>
          <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
            {difficulty}
          </div>
        </div>

        <div className="mb-4">{content}</div>

        <Button
          onClick={() => toggleCorrection(id)}
          variant={visibleCorrections[id] ? 'secondary' : 'default'}
          className="mb-4"
        >
          {visibleCorrections[id]
            ? 'Masquer la correction'
            : 'Afficher la correction'}
        </Button>

        {visibleCorrections[id] && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-green-800 mb-2">
              Corrigé détaillé
            </h4>
            <div className="text-green-800">{correction}</div>
          </div>
        )}
      </div>
    </Card>
  );

  /* ------------------------------------------
     Rendu principal
  ------------------------------------------ */

  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d’Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors"
            >
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link
              to="/formations"
              className="hover:text-[#1e3a8a] transition-colors"
            >
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link
              to="/formation/maths-choix"
              className="hover:text-[#1e3a8a] transition-colors"
            >
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link
              to="/formation/maths-approfondies"
              className="hover:text-[#1e3a8a] transition-colors"
            >
              Maths Approfondies
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">
              Exercices - Chapitre 7
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 7 : Intégration sur un segment
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser l’intégration sur un segment.
            </p>
          </div>
        </Card>

        {/* Tableau de primitives */}
        <Card className="mb-8 border-0 shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              Tableau de primitives classiques
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border p-3">
                      <LatexRenderer latex="f(x)" />
                    </th>
                    <th className="border p-3">
                      <LatexRenderer latex="\\text{Domaine } D_f" />
                    </th>
                    <th className="border p-3">
                      <LatexRenderer latex="\\text{Une primitive sur } D_f" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">
                      <LatexRenderer latex="x^n \\quad (n \\in \\mathbb{N})" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\mathbb{R}" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\frac{x^{n+1}}{n+1}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">
                      <LatexRenderer latex="\\frac{1}{x^n} \\quad (n \\geq 1)" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\mathbb{R}^{\\ast}" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="-\\frac{1}{(n-1)x^{n-1}}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">
                      <LatexRenderer latex="x^{\\alpha} \\quad (\\alpha \\neq -1)" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\mathbb{R}_{+}^{\\ast}" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\frac{x^{\\alpha+1}}{\\alpha+1}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">
                      <LatexRenderer latex="\\frac{1}{x}" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\mathbb{R}^{\\ast}" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\ln|x|" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">
                      <LatexRenderer latex="\\frac{1}{\\sqrt{x}}" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\mathbb{R}_{+}^{\\ast}" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="2\\sqrt{x}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">
                      <LatexRenderer latex="e^x" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\mathbb{R}" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="e^x" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">
                      <LatexRenderer latex="\\ln x" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="\\mathbb{R}_{+}^{\\ast}" />
                    </td>
                    <td className="border p-3">
                      <LatexRenderer latex="x\\ln x - x" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        {/* ----------------------------------------------------
            Niveau 1
        ---------------------------------------------------- */}
        <DifficultyHeader
          level="Niveau 1"
          title="Intégration sur un segment"
          icon={BookOpen}
          stars={1}
        />

        <ExerciseCard
          id="1.1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-2">Calculer&nbsp;:</p>
              <LatexRenderer latex="I = \\int_{-1}^{2} e^{-|x|} \\, dx" />
            </div>
          }
          correction={
            <div className="space-y-3">
              <p>La fonction est paire. On scinde l’intégrale&nbsp;:</p>
              <LatexRenderer latex="I = \\int_{-1}^{0} e^{x} \\, dx + \\int_{0}^{2} e^{-x} \\, dx" />
              <p>
                <LatexRenderer latex="\\int_{-1}^{0} e^{x} \\, dx = [e^{x}]_{-1}^{0} = 1 - \\frac{1}{e}" />
              </p>
              <p>
                <LatexRenderer latex="\\int_{0}^{2} e^{-x} \\, dx = [-e^{-x}]_{0}^{2} = 1 - \\frac{1}{e^2}" />
              </p>
              <p>D’où&nbsp;:</p>
              <LatexRenderer latex="I = 2 - \\frac{1}{e} - \\frac{1}{e^2}" />
            </div>
          }
        />

        <ExerciseCard
          id="1.2"
          title="Exercice 2"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-2">
                Soient <LatexRenderer latex="n \\in \\mathbb{N}^{\\ast}" /> et{' '}
                <LatexRenderer latex="x \\in ]0,1[" />. Montrer que :
              </p>
              <LatexRenderer latex="\\int_{0}^{x} \\frac{t^{n-1}}{1-t} \\, dt = \\sum_{k=1}^{n} \\frac{x^k}{k}" />
            </div>
          }
          correction={
            <div className="space-y-3">
              <p>Pour <LatexRenderer latex="|t| < 1" />, la série géométrique donne :</p>
              <LatexRenderer latex="\\frac{1}{1-t} = \\sum_{k=0}^{\\infty} t^k" />
              <p>Donc&nbsp;:</p>
              <LatexRenderer latex="\\frac{t^{n-1}}{1-t} = \\sum_{k=0}^{\\infty} t^{n+k-1}" />
              <p>La convergence est absolue sur <LatexRenderer latex="[0,x]" /> ; on intègre terme à terme&nbsp;:</p>
              <LatexRenderer latex="\\int_{0}^{x} \\frac{t^{n-1}}{1-t} \\, dt = \\sum_{k=0}^{\\infty} \\frac{x^{n+k}}{n+k}" />
              <p>Changement d’indice <LatexRenderer latex="j=n+k" /> donne le résultat voulu.</p>
            </div>
          }
        />

        <ExerciseCard
          id="1.3"
          title="Exercice 3"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-2">
                Pour <LatexRenderer latex="n\in\mathbb{N}" /> calculer&nbsp;:
              </p>
              <LatexRenderer latex="J_{n}=\displaystyle\int_{0}^{1}\lfloor nt\rfloor\,\mathrm{d}t" />
            </div>
          }
          correction={
            <div className="space-y-3">
              <p>On découpe <LatexRenderer latex="[0,1]" /> en <LatexRenderer latex="n" /> intervalles&nbsp;:</p>
              <LatexRenderer latex="I_{k}=\Bigl[\tfrac{k}{n},\tfrac{k+1}{n}\Bigr),\quad 0\leq k\leq n-1" />
              <p>Sur chaque <LatexRenderer latex="I_{k}" /> on a <LatexRenderer latex="\lfloor nt\rfloor=k" />.</p>
              <LatexRenderer latex="J_{n}=\sum_{k=0}^{n-1}k\int_{k/n}^{(k+1)/n}\mathrm{d}t=\frac{1}{n}\sum_{k=0}^{n-1}k=\frac{n-1}{2}" />
            </div>
          }
        />

        {/* ----------------------------------------------------
            Niveau 2
        ---------------------------------------------------- */}
        <DifficultyHeader
          level="Niveau 2"
          title="Intégration par parties et changements de variable"
          icon={Lightbulb}
          stars={2}
          color="green"
        />

        <ExerciseCard
          id="2.1"
          title="Exercice 9"
          difficulty="Intermédiaire"
          content={
            <div>
              <p className="mb-2">Calculer&nbsp;:</p>
              <LatexRenderer latex="I=\displaystyle\int_{1}^{2}\frac{\ln t}{t^{2}+1}\,\mathrm{d}t" />
            </div>
          }
          correction={
            <div className="space-y-3">
              <p>Intégration par parties avec</p>
              <LatexRenderer latex="u=\ln t,\quad\mathrm{d}v=\frac{\mathrm{d}t}{t^{2}+1}" />
              <LatexRenderer latex="\implies\mathrm{d}u=\frac{\mathrm{d}t}{t},\quad v=\arctan t" />
              <p>D’où&nbsp;:</p>
              <LatexRenderer latex="I=\Bigl[\ln t\,\arctan t\Bigr]_{1}^{2}-\int_{1}^{2}\frac{\arctan t}{t}\,\mathrm{d}t" />
              <p>Substitution <LatexRenderer latex="t=\mathrm{e}^{x}" /> puis calcul complet&nbsp;:</p>
              <LatexRenderer latex="I=\frac{\ln 2-\arctan 2+\tfrac{\pi}{4}}{2}" />
            </div>
          }
        />

        <ExerciseCard
          id="2.2"
          title="Exercice 10"
          difficulty="Intermédiaire"
          content={
            <div>
              <p className="mb-2">Calculer&nbsp;:</p>
              <LatexRenderer latex="I=\displaystyle\int_{0}^{1}(x-1)\,\mathrm{e}^{x}\,\mathrm{d}x" />
            </div>
          }
          correction={
            <div className="space-y-3">
              <p>Par parties avec <LatexRenderer latex="u=x-1,\;\mathrm{d}v=\mathrm{e}^{x}\mathrm{d}x" /> :</p>
              <LatexRenderer latex="I=\Bigl[(x-1)\,\mathrm{e}^{x}\Bigr]_{0}^{1}-\int_{0}^{1}\mathrm{e}^{x}\,\mathrm{d}x=0-\Bigl[\mathrm{e}^{x}\Bigr]_{0}^{1}=1-\mathrm{e}" />
            </div>
          }
        />

        <ExerciseCard
          id="2.3"
          title="Exercice 11"
          difficulty="Intermédiaire"
          content={
            <div>
              <p className="mb-2">Calculer&nbsp;:</p>
              <LatexRenderer latex="I=\displaystyle\int_{0}^{1}\ln\!\left(x^{2}+3\right)\mathrm{d}x" />
            </div>
          }
          correction={
            <div className="space-y-3">
              <p>Par symétrie <LatexRenderer latex="x\mapsto 1-x" /> et calculs&nbsp;:</p>
              <LatexRenderer latex="I=2\ln 2-2+\ln 3" />
            </div>
          }
        />

        {/* ----------------------------------------------------
            Niveau 3
        ---------------------------------------------------- */}
        <DifficultyHeader
          level="Niveau 3"
          title="Suites d’intégrales"
          icon={Target}
          stars={3}
          color="orange"
        />

        <ExerciseCard
          id="3.1"
          title="Exercice 8"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-2">
                Pour <LatexRenderer latex="n\in\mathbb{N}" /> on pose&nbsp;:
              </p>
              <div className="space-y-2">
                <LatexRenderer latex="h_{n}=\displaystyle\int_{0}^{1}\frac{t^{n}}{1+t}\,\mathrm{d}t" />
                <LatexRenderer latex="k_{n}=\displaystyle\int_{0}^{1}\frac{t^{n}}{(1+t)^{2}}\,\mathrm{d}t" />
              </div>
              <p className="mt-2">Étudier ces suites d’intégrales.</p>
            </div>
          }
          correction={
            <div className="space-y-2">
              <p>
                <strong>1)</strong> Les intégrandes sont continues sur{' '}
                <LatexRenderer latex="[0,1]" /> ⟹ existence.
              </p>
              <p>
                <strong>2)</strong>{' '}
                <LatexRenderer latex="k_{0}=\frac12" />
              </p>
              <p>
                <strong>3)</strong> <LatexRenderer latex="h_{n+1}\leq h_{n}" /> (suite décroissante).
              </p>
              <p>
                <strong>4)</strong> <LatexRenderer latex="0\leq h_{n}\leq\frac{1}{n+1}" />
              </p>
              <p>
                <strong>5)</strong> <LatexRenderer latex="\lim_{n\to\infty}h_{n}=0" />
              </p>
              <p>
                <strong>6)</strong> <LatexRenderer latex="0\leq k_{n}\leq h_{n}\Rightarrow k_{n}\to0" />
              </p>
            </div>
          }
        />

        {/* ----------------------------------------------------
            Niveau 4
        ---------------------------------------------------- */}
        <DifficultyHeader
          level="Niveau 4"
          title="Sommes de Riemann"
          icon={Crown}
          stars={4}
          color="purple"
        />

        <ExerciseCard
          id="4.1"
          title="Exercice 15"
          difficulty="Expert"
          content={
            <div>
              <p className="mb-2">
                Soit <LatexRenderer latex="f\in\mathcal{C}^{1}([0,1])" /> et{' '}
                <LatexRenderer latex="M=\max_{[0,1]}|f'|" />. On pose&nbsp;:
              </p>
              <LatexRenderer latex="S_{n}=\sum_{k=1}^{n}f\!\left(\frac{k}{n}\right)\frac{1}{n}" />
              <p className="mt-2">
                Montrer, pour tout <LatexRenderer latex="n\in\mathbb{N}^{\ast}" /> :
              </p>
              <LatexRenderer latex="\left|\displaystyle\int_{0}^{1}f(t)\,\mathrm{d}t-S_{n}\right|\leq\frac{M}{2n}" />
            </div>
          }
          correction={
            <div className="space-y-3">
              <p>Découpage en <LatexRenderer latex="n" /> sous-intervalles&nbsp;:</p>
              <LatexRenderer latex="I_{k}=\Bigl[\frac{k-1}{n},\frac{k}{n}\Bigr]" />
              <p>Accroissements finis puis sommation&nbsp;:</p>
              <LatexRenderer latex="\left|\int_{0}^{1}f(t)\,\mathrm{d}t-S_{n}\right|\leq\frac{M}{2n}" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Chapitre7IntegrationSurUnSegmentExercicesPage;