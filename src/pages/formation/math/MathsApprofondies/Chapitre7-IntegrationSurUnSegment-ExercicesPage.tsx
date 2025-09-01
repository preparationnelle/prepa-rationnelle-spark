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

                <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-4"><strong>Calculer :</strong></p>
              <div className="text-center">
                <LatexRenderer latex="\int_{-1}^{2} e^{-|x|} \, dx" />
            </div>
          </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Propriété de la valeur absolue :</strong>
                <p>On utilise la propriété suivante :</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="\forall x \leq 0, \quad |x| = -x" />
                  <LatexRenderer latex="\forall x \geq 0, \quad |x| = x" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Décomposition par la relation de Chasles :</strong>
                <div className="text-center">
                  <LatexRenderer latex="\int_{-1}^{2} e^{-|x|} \, dx = \int_{-1}^{0} e^{x} \, dx + \int_{0}^{2} e^{-x} \, dx" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul de la première intégrale :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\int_{-1}^{0} e^{x} \, dx = \left[e^{x}\right]_{-1}^{0}" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= e^{0} - e^{-1} = 1 - \frac{1}{e}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul de la seconde intégrale :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\int_{0}^{2} e^{-x} \, dx = \left[-e^{-x}\right]_{0}^{2}" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= -e^{-2} + e^{0} = 1 - \frac{1}{e^2}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Résultat final :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\int_{-1}^{2} e^{-|x|} \, dx = \left(1 - \frac{1}{e}\right) + \left(1 - \frac{1}{e^2}\right)" />
                  </div>
                  
                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                    <LatexRenderer latex="\int_{-1}^{2} e^{-|x|} \, dx = 2 - \frac{1}{e} - \frac{1}{e^2}" />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex2"
          title="Exercice 2"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-4"><strong>Calculer :</strong></p>
              <div className="text-center">
                <LatexRenderer latex="\int_0^n \lfloor x \rfloor \, dx \quad \text{pour } n \in \mathbb{N}^*" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Analyse de la fonction partie entière :</strong>
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}^*" />. La fonction partie entière est continue sur <LatexRenderer latex="]0,1[, ]1,2[, ]2,3[, \ldots, ]n-1,n[" />, et elle admet une limite à droite et à gauche en chacun des points de discontinuité.</p>
                <p>Elle est donc continue par morceaux sur <LatexRenderer latex="[0,n]" />.</p>
              </div>

              <div>
                <strong className="text-green-600">Comportement sur chaque intervalle :</strong>
                <p>Pour <LatexRenderer latex="k \in \llbracket 0, n-1 \rrbracket" />, on a :</p>
                <div className="text-center">
                  <LatexRenderer latex="\forall x \in [k, k+1[, \quad \lfloor x \rfloor = k" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Décomposition de l'intégrale :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\int_0^n \lfloor x \rfloor \, dx = \sum_{k=0}^{n-1} \int_k^{k+1} \lfloor x \rfloor \, dx" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \sum_{k=0}^{n-1} \int_k^{k+1} k \, dx = \sum_{k=0}^{n-1} k \int_k^{k+1} dx" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \sum_{k=0}^{n-1} k \cdot (k+1 - k) = \sum_{k=0}^{n-1} k" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul de la somme :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\sum_{k=0}^{n-1} k = \frac{(n-1)n}{2}" />
                  </div>
                  
                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                    <LatexRenderer latex="\forall n \in \mathbb{N}^*, \quad \int_0^n \lfloor x \rfloor \, dx = \frac{n(n - 1)}{2}" />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex3"
          title="Exercice 3"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4">Montrer que <LatexRenderer latex="\forall x \in ]0,1[" /> :</p>
              <div className="text-center">
                <LatexRenderer latex="\forall n \in \mathbb{N}, \quad 0 \leq \int_0^x \frac{t^n}{1 - t} \, dt \leq -\ln(1 - x)" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Données :</strong>
                <p>Soit <LatexRenderer latex="x \in ]0,1[" /> et <LatexRenderer latex="n \in \mathbb{N}" />.</p>
              </div>

              <div>
                <strong className="text-green-600">Encadrement de l'intégrande :</strong>
                <p>Pour tout <LatexRenderer latex="t \in [0,x]" />, on a :</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="0 \leq t^n \leq x^n \leq 1" />
                  <LatexRenderer latex="\Rightarrow \quad 0 \leq \frac{t^n}{1 - t} \leq \frac{1}{1 - t} \quad \text{car } 1 - t > 0" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Application de la croissance de l'intégrale :</strong>
                <div className="text-center">
                  <LatexRenderer latex="0 \leq \int_0^x \frac{t^n}{1 - t} \, dt \leq \int_0^x \frac{1}{1 - t} \, dt" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul de l'intégrale majorante :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\int_0^x \frac{1}{1 - t} \, dt = \left[ -\ln(1 - t) \right]_0^x" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= -\ln(1 - x) + \ln(1) = -\ln(1 - x)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Conclusion :</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="0 \leq \int_0^x \frac{t^n}{1 - t} \, dt \leq -\ln(1 - x)" />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4"
          title="Exercice 4"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4">On note pour <LatexRenderer latex="n \in \mathbb{N}" /> :</p>
              <div className="text-center mb-4">
                <LatexRenderer latex="I_n = \int_0^1 \frac{(-t)^n}{1 + t} \, dt" />
              </div>
              <p>Montrer que :</p>
              <div className="text-center">
                <LatexRenderer latex="\forall n \in \mathbb{N}, \quad 0 \leq |I_n| \leq \ln(2)" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Données :</strong>
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}" />.</p>
              </div>

              <div>
                <strong className="text-green-600">Inégalité évidente :</strong>
                <p>On a évidemment <LatexRenderer latex="0 \leq |I_n|" />.</p>
              </div>

              <div>
                <strong className="text-green-600">Majoration par inégalité triangulaire :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="|I_n| = \left| \int_0^1 \frac{(-t)^n}{1 + t} \, dt \right| \leq \int_0^1 \left| \frac{(-t)^n}{1 + t} \right| dt" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \int_0^1 \frac{t^n}{1 + t} \, dt" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Encadrement :</strong>
                <p>Pour tout <LatexRenderer latex="t \in [0,1]" /> :</p>
                <div className="text-center">
                  <LatexRenderer latex="\frac{t^n}{1 + t} \leq \frac{1}{1 + t} \quad \Rightarrow \quad \int_0^1 \frac{t^n}{1 + t} \, dt \leq \int_0^1 \frac{1}{1 + t} \, dt" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul de l'intégrale majorante :</strong>
                <div className="text-center">
                  <LatexRenderer latex="\int_0^1 \frac{1}{1 + t} \, dt = [\ln(1 + t)]_0^1 = \ln(2)" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Conclusion :</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\forall n \in \mathbb{N}, \quad 0 \leq |I_n| \leq \ln(2)" />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex5"
          title="Exercice 5"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4">Étudier le sens de variation de la suite <LatexRenderer latex="(I_n)_{n \in \mathbb{N}}" /> définie par :</p>
              <div className="text-center">
                <LatexRenderer latex="\forall n \in \mathbb{N}, \quad I_n = \int_0^1 \frac{e^{nx}}{e^x + 1} \, dx" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Calcul de la différence :</strong>
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}" />.</p>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="I_{n+1} - I_n = \int_0^1 \frac{e^{(n+1)x}}{e^x + 1} \, dx - \int_0^1 \frac{e^{nx}}{e^x + 1} \, dx" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \int_0^1 \left( \frac{e^{(n+1)x}}{e^x + 1} - \frac{e^{nx}}{e^x + 1} \right) dx" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Simplification :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="= \int_0^1 \frac{e^{nx} e^x - e^{nx}}{e^x + 1} \, dx = \int_0^1 \frac{e^{nx}(e^x - 1)}{e^x + 1} \, dx" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Analyse du signe :</strong>
                <p>Pour <LatexRenderer latex="\forall x \in [0,1]" /> :</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="e^{nx} > 0, \quad e^x > 0, \quad e^x - 1 \geq 0, \quad e^x + 1 > 0" />
                  <LatexRenderer latex="\Rightarrow \frac{e^{nx}(e^x - 1)}{e^x + 1} \geq 0" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Conclusion :</strong>
                <p>De plus, la fonction intégrée est continue sur <LatexRenderer latex="[0,1]" />.</p>
                <p>Donc par croissance de l'intégrale :</p>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\int_0^1 \frac{e^{nx}(e^x - 1)}{e^x + 1} \, dx \geq 0 \Rightarrow I_{n+1} \geq I_n" />
                  </div>
                  
                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                    <LatexRenderer latex="\forall n \in \mathbb{N}, \quad I_{n+1} \geq I_n \quad \text{et donc la suite } (I_n) \text{ est croissante}" />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex6"
          title="Exercice 6"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4">Déterminer la limite de la suite <LatexRenderer latex="(I_n)_{n \in \mathbb{N}}" /> définie par :</p>
              <div className="text-center">
                <LatexRenderer latex="\forall n \in \mathbb{N}, \quad I_n = \int_0^1 x^n \ln(x + 1) \, dx" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Encadrement de ln(x+1) :</strong>
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}" />. Pour tout <LatexRenderer latex="x \in [0,1]" /> :</p>
                <div className="text-center">
                  <LatexRenderer latex="\ln(1) \leq \ln(1 + x) \leq \ln(2)" />
                </div>
                <div className="text-center">
                  <LatexRenderer latex="\Rightarrow \quad 0 \leq x^n \ln(1 + x) \leq x^n \ln(2)" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Continuité :</strong>
                <p>Les fonctions <LatexRenderer latex="x \mapsto x^n \ln(1 + x)" /> et <LatexRenderer latex="x \mapsto x^n \ln(2)" /> sont continues sur <LatexRenderer latex="[0,1]" />.</p>
              </div>

              <div>
                <strong className="text-green-600">Application de la croissance de l'intégrale :</strong>
                <div className="text-center">
                  <LatexRenderer latex="0 \leq \int_0^1 x^n \ln(1 + x) \, dx \leq \int_0^1 x^n \ln(2) \, dx" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul de l'intégrale majorante :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\int_0^1 x^n \ln(2) \, dx = \ln(2) \int_0^1 x^n \, dx = \ln(2) \cdot \left[ \frac{x^{n+1}}{n+1} \right]_0^1 = \frac{\ln(2)}{n+1}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Encadrement final :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="0 \leq I_n \leq \frac{\ln(2)}{n+1}" />
                  </div>
                  <p>Or <LatexRenderer latex="\lim_{n \to \infty} \frac{\ln(2)}{n+1} = 0" /></p>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Conclusion par encadrement :</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\lim_{n \to \infty} I_n = 0" />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex7"
          title="Exercice 7"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>Intégration par parties - ln(x) et polynôme</strong></p>
              <p className="mb-4">Calculer l'intégrale suivante :</p>
              <div className="text-center">
                <LatexRenderer latex="I = \int_1^2 \frac{\ln(x)}{x^2} \, dx" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Choix des fonctions :</strong>
                <p>On pose :</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="u(x) = \ln(x), \quad v'(x) = \frac{1}{x^2}" />
                  <LatexRenderer latex="\Rightarrow u'(x) = \frac{1}{x}, \quad v(x) = -\frac{1}{x}" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Conditions de régularité :</strong>
                <p>Les fonctions <LatexRenderer latex="u" /> et <LatexRenderer latex="v" /> sont de classe <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="[1,2]" />.</p>
              </div>

              <div>
                <strong className="text-green-600">Application de la formule d'IPP :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="I = \left[ \frac{-\ln(x)}{x} \right]_1^2 - \int_1^2 \left( -\frac{1}{x} \cdot \frac{1}{x} \right) dx" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= -\frac{\ln(2)}{2} + \ln(1) + \int_1^2 \frac{1}{x^2} \, dx" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calculs :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="= -\frac{1}{2} \ln(2) + \left[ -\frac{1}{x} \right]_1^2" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= -\frac{1}{2} \ln(2) + \left( -\frac{1}{2} + 1 \right)" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= -\frac{1}{2} \ln(2) + \frac{1}{2}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Résultat final :</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\int_1^2 \frac{\ln(x)}{x^2} \, dx = \frac{1}{2} - \frac{1}{2} \ln(2)" />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex8"
          title="Exercice 8"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>IPP exponentielle et polynôme</strong></p>
              <p className="mb-4">Calculer l'intégrale suivante :</p>
              <div className="text-center">
                <LatexRenderer latex="I = \int_0^1 (x - 1) e^{2x} \, dx" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Choix des fonctions :</strong>
                <p>On pose :</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="u(x) = x - 1, \quad v'(x) = e^{2x}" />
                  <LatexRenderer latex="\Rightarrow u'(x) = 1, \quad v(x) = \frac{1}{2} e^{2x}" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Application de l'IPP :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="I = \left[ \frac{1}{2}(x - 1) e^{2x} \right]_0^1 - \int_0^1 \frac{1}{2} e^{2x} \, dx" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \frac{1}{2}(1 - 1)e^{2} - \frac{1}{2}(0 - 1) e^{0} - \frac{1}{2} \int_0^1 e^{2x} \, dx" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Simplification :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="= \frac{1}{2} \cdot 0 - \left( -\frac{1}{2} \cdot 1 \right) - \frac{1}{2} \left[ \frac{1}{2} e^{2x} \right]_0^1" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \frac{1}{2} + \left( -\frac{1}{4} (e^2 - 1) \right)" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \frac{1}{2} - \frac{1}{4} e^2 + \frac{1}{4} = \frac{3}{4} - \frac{1}{4} e^2" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Résultat final :</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\int_0^1 (x - 1) e^{2x} \, dx = \frac{3 - e^2}{4}" />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex9"
          title="Exercice 9"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>La « grosse astuce » - Intégration par parties</strong></p>
              <p className="mb-4">Calculer l'intégrale suivante :</p>
              <div className="text-center">
                <LatexRenderer latex="I = \int_0^1 \ln(2 + x) \, dx" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Choix des fonctions :</strong>
                <p>On pose :</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="u(x) = \ln(2 + x), \quad v'(x) = 1" />
                  <LatexRenderer latex="\Rightarrow u'(x) = \frac{1}{2 + x}, \quad v(x) = x" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Application de l'IPP :</strong>
                <div className="text-center">
                  <LatexRenderer latex="I = \left[ x \ln(2 + x) \right]_0^1 - \int_0^1 \frac{x}{2 + x} \, dx" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul du terme tout intégré :</strong>
                <div className="text-center">
                  <LatexRenderer latex="x \ln(2 + x) \bigg|_0^1 = 1 \cdot \ln(3) - 0 \cdot \ln(2) = \ln(3)" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul de l'intégrale restante :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\int_0^1 \frac{x}{2 + x} \, dx = \int_0^1 \left(1 - \frac{2}{2 + x} \right) dx" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \int_0^1 1 \, dx - 2 \int_0^1 \frac{1}{2 + x} \, dx" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= [x]_0^1 - 2 [\ln(2 + x)]_0^1" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= 1 - 2(\ln(3) - \ln(2)) = 1 - 2 \ln\left(\frac{3}{2}\right)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul final :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="I = \ln(3) - (1 - 2\ln(3) + 2\ln(2))" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \ln(3) - 1 + 2\ln(3) - 2\ln(2)" />
                  </div>
                  
                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                    <LatexRenderer latex="\int_0^1 \ln(2 + x) \, dx = 3 \ln(3) - 2 \ln(2) - 1" />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex10"
          title="Exercice 10"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>Changement de variable affine</strong></p>
              <p className="mb-4">Calculer l'intégrale suivante :</p>
              <div className="text-center">
                <LatexRenderer latex="I = \int_0^1 \frac{x}{2x + 1} \, dx" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Méthode par linéarité :</strong>
                <p>On factorise :</p>
              <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="I = \frac{1}{2} \int_0^1 \frac{2x}{2x + 1} \, dx = \frac{1}{2} \int_0^1 \left( \frac{2x + 1 - 1}{2x + 1} \right) dx" />
              </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \frac{1}{2} \int_0^1 \left(1 - \frac{1}{2x + 1} \right) dx" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Décomposition :</strong>
                <div className="text-center">
                  <LatexRenderer latex="= \frac{1}{2} \left( \int_0^1 1 \, dx - \int_0^1 \frac{1}{2x + 1} \, dx \right)" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul de l'intégrale :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\int_0^1 \frac{1}{2x + 1} \, dx = \frac{1}{2} \int_0^1 \frac{2}{2x + 1} \, dx" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \frac{1}{2} \left[ \ln(2x + 1) \right]_0^1 = \frac{1}{2} \ln(3)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Résultat final :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="I = \frac{1}{2} \left( 1 - \frac{1}{2} \ln(3) \right) = \frac{1}{4} (2 - \ln(3))" />
                  </div>
                  
                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                    <LatexRenderer latex="\int_0^1 \frac{x}{2x + 1} \, dx = \frac{1}{4} (2 - \ln(3))" />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex11"
          title="Exercice 11"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-4"><strong>Changement de variable non affine</strong></p>
              <p className="mb-4">En posant le changement de variable <LatexRenderer latex="x = \ln(t)" />, calculer :</p>
              <div className="text-center">
                <LatexRenderer latex="I = \int_0^1 \frac{dx}{1 + e^x}" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Changement de variable :</strong>
                <p>On pose :</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="x = \ln(t) \Rightarrow e^x = t \Rightarrow dx = \frac{1}{t} \, dt" />
                </div>
                <p>Pour <LatexRenderer latex="x \in [0,1]" />, on a <LatexRenderer latex="t \in [1, e]" />.</p>
              </div>

              <div>
                <strong className="text-green-600">Transformation de l'intégrale :</strong>
                <div className="text-center">
                  <LatexRenderer latex="I = \int_1^e \frac{1}{1 + t} \cdot \frac{1}{t} \, dt = \int_1^e \frac{1}{t(1 + t)} \, dt" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Décomposition en éléments simples :</strong>
            <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\frac{1}{t(1 + t)} = \frac{1}{t} - \frac{1}{1 + t}" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="\Rightarrow I = \int_1^e \left( \frac{1}{t} - \frac{1}{1 + t} \right) dt" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="= \left[ \ln|t| - \ln(1 + t) \right]_1^e" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \left( \ln(e) - \ln(1 + e) \right) - \left( \ln(1) - \ln(2) \right)" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= 1 - \ln(1 + e) + \ln(2)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Résultat final :</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\int_0^1 \frac{dx}{1 + e^x} = 1 + \ln(2) - \ln(1 + e)" />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex12"
          title="Exercice 12"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-4"><strong>Changement de variable <LatexRenderer latex="u = e^x" /></strong></p>
              <p className="mb-4">Calculer l'intégrale suivante :</p>
              <div className="text-center">
                <LatexRenderer latex="I = \int_0^1 \frac{e^x}{1 + e^x} \, dx" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Changement de variable :</strong>
                <p>On pose :</p>
                <div className="text-center">
                  <LatexRenderer latex="u = e^x \quad \Rightarrow \quad du = e^x dx" />
                </div>
                <p>Pour <LatexRenderer latex="x \in [0,1]" />, on a <LatexRenderer latex="u \in [1,e]" />.</p>
              </div>

              <div>
                <strong className="text-green-600">Transformation de l'intégrale :</strong>
                <div className="text-center">
                  <LatexRenderer latex="I = \int_1^e \frac{1}{1 + u} \, du" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul direct :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="= \left[ \ln(1 + u) \right]_1^e" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= \ln(1 + e) - \ln(2)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Résultat final :</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\int_0^1 \frac{e^x}{1 + e^x} \, dx = \ln(1 + e) - \ln(2)" />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex12"
          title="Exercice 12"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-4"><strong>Intégration et dérivation</strong></p>
              <p className="mb-4">On considère la fonction :</p>
              <div className="text-center mb-6">
                <LatexRenderer latex="F(x) = \int_0^1 \frac{e^t}{t + x} \, dt \quad \text{définie sur } \mathbb{R}_+^*" />
              </div>
              
              <ol className="list-decimal ml-6 space-y-3">
                <li>Montrer que <LatexRenderer latex="F" /> est décroissante sur <LatexRenderer latex="\mathbb{R}_+^*" />.</li>
                <li>Montrer que <LatexRenderer latex="F(x) = e^{-x} \int_x^{x+1} \frac{e^u}{u} \, du" />.</li>
                <li>Montrer que <LatexRenderer latex="F'(x) + F(x) = \frac{e}{x+1} - \frac{1}{x}" />.</li>
                <li>Étudier la limite de <LatexRenderer latex="F(x)" /> en <LatexRenderer latex="+\infty" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-green-600">1. F est décroissante sur ℝ₊*</strong>
                <div className="mt-2 space-y-2">
                  <p>Soient <LatexRenderer latex="x, y \in \mathbb{R}_+^*" /> avec <LatexRenderer latex="x < y" />. Pour tout <LatexRenderer latex="t \in [0,1]" />, on a :</p>
                  <div className="text-center">
                    <LatexRenderer latex="t + x < t + y \Rightarrow \frac{1}{t + x} > \frac{1}{t + y}" />
                  </div>
                  <p>Comme <LatexRenderer latex="e^t > 0" />, on obtient :</p>
                  <div className="text-center">
                    <LatexRenderer latex="\frac{e^t}{t + x} > \frac{e^t}{t + y}" />
                  </div>
                  <p>Par intégration :</p>
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="F(x) = \int_0^1 \frac{e^t}{t + x} \, dt > \int_0^1 \frac{e^t}{t + y} \, dt = F(y)" />
                  </div>
                  <p className="text-center"><strong>Donc F est décroissante sur ℝ₊*.</strong></p>
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Changement de variable</strong>
                <div className="mt-2 space-y-2">
                  <p>On effectue le changement de variable <LatexRenderer latex="u = t + x \Rightarrow du = dt" />.</p>
                  <p>Quand <LatexRenderer latex="t = 0" />, <LatexRenderer latex="u = x" />. Quand <LatexRenderer latex="t = 1" />, <LatexRenderer latex="u = x + 1" />.</p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex="F(x) = \int_0^1 \frac{e^t}{t + x} dt = \int_x^{x+1} \frac{e^{u - x}}{u} \, du" />
                    <LatexRenderer latex="= \int_x^{x+1} \frac{e^{-x} \cdot e^u}{u} \, du = e^{-x} \int_x^{x+1} \frac{e^u}{u} \, du" />
                  </div>
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="F(x) = e^{-x} \int_x^{x+1} \frac{e^u}{u} \, du" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">3. Relation différentielle</strong>
                <div className="mt-2 space-y-2">
                  <p>Soit <LatexRenderer latex="G(x) = \int_1^x \frac{e^u}{u} \, du" />. Alors <LatexRenderer latex="G'(x) = \frac{e^x}{x}" />.</p>
                  <p>On peut écrire :</p>
                  <div className="text-center">
                    <LatexRenderer latex="F(x) = e^{-x} \left[ G(x+1) - G(x) \right]" />
                  </div>
                  <p>En dérivant :</p>
            <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex="F'(x) = -e^{-x} [G(x+1) - G(x)] + e^{-x} [G'(x+1) - G'(x)]" />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex="= -F(x) + e^{-x} \left( \frac{e^{x+1}}{x+1} - \frac{e^x}{x} \right)" />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex="= -F(x) + \frac{e}{x+1} - \frac{1}{x}" />
                    </div>
                  </div>
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="F'(x) + F(x) = \frac{e}{x + 1} - \frac{1}{x}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">4. Limite en +∞</strong>
                <div className="mt-2 space-y-2">
                  <p>On encadre l'intégrande. Pour <LatexRenderer latex="t \in [0,1]" /> :</p>
                  <div className="text-center">
                    <LatexRenderer latex="0 < \frac{1}{t + x} \leq \frac{1}{x} \quad \Rightarrow \quad \frac{e^t}{t + x} \leq \frac{e^t}{x}" />
                  </div>
                  <p>Par intégration :</p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex="0 \leq F(x) \leq \frac{1}{x} \int_0^1 e^t dt = \frac{e - 1}{x}" />
                    </div>
                  </div>
                  <p>Par le théorème des gendarmes :</p>
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="\lim_{x \to +\infty} F(x) = 0" />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex13"
          title="Exercice 13"
          difficulty="Expert"
          content={
            <div>
              <p className="mb-4"><strong>Variante des intégrales de Wallis</strong></p>
              <p className="mb-4">Pour tout <LatexRenderer latex="x \in \mathbb{R}" />, on pose :</p>
              <div className="text-center mb-4">
                <LatexRenderer latex="c(x) = \frac{e^x + e^{-x}}{2}, \quad s(x) = \frac{e^x - e^{-x}}{2}" />
              </div>
              <p className="mb-4">On vérifie que <LatexRenderer latex="c'(x) = s(x)" />, <LatexRenderer latex="s'(x) = c(x)" />, et <LatexRenderer latex="c(x)^2 - s(x)^2 = 1" />.</p>
              <p className="mb-4">Soit <LatexRenderer latex="\alpha = \ln(1 + \sqrt{2})" />. Pour <LatexRenderer latex="n \in \mathbb{N}" />, on pose :</p>
              <div className="text-center mb-6">
                <LatexRenderer latex="W_n = \int_0^\alpha s(t)^n \, dt" />
              </div>
              
              <ol className="list-decimal ml-6 space-y-3">
                <li>
                  <p>a) Vérifier que <LatexRenderer latex="s(\alpha) = 1" />.</p>
                  <p>b) Étudier les variations de la suite <LatexRenderer latex="W_n" />.</p>
                  <p>c) Étudier la convergence de <LatexRenderer latex="W_n" />.</p>
                </li>
                <li>Établir la relation de récurrence : <LatexRenderer latex="(n + 2)W_{n+2} + (n + 1)W_n = \sqrt{2}" />.</li>
                <li>En déduire un encadrement de <LatexRenderer latex="W_n" />.</li>
                <li>Déterminer le comportement asymptotique de <LatexRenderer latex="W_n" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-green-600">1a. Calcul de s(α)</strong>
                <div className="mt-2 space-y-2">
                  <p>Avec <LatexRenderer latex="\alpha = \ln(1 + \sqrt{2})" /> :</p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex="e^\alpha = 1 + \sqrt{2}" />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex="e^{-\alpha} = \frac{1}{1 + \sqrt{2}} = \frac{1 - \sqrt{2}}{(1 + \sqrt{2})(1 - \sqrt{2})} = \frac{1 - \sqrt{2}}{1 - 2} = \sqrt{2} - 1" />
                    </div>
                  </div>
                  <p>Donc :</p>
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="s(\alpha) = \frac{e^\alpha - e^{-\alpha}}{2} = \frac{(1 + \sqrt{2}) - (\sqrt{2} - 1)}{2} = \frac{2}{2} = 1" />
                  </div>
                  <p>Comme <LatexRenderer latex="s" /> est croissante sur ℝ, pour tout <LatexRenderer latex="t \in [0, \alpha]" /> : <LatexRenderer latex="0 \leq s(t) \leq 1" />.</p>
                </div>
              </div>

              <div>
                <strong className="text-green-600">1b. Variations de Wₙ</strong>
                <div className="mt-2 space-y-2">
                  <p>Comme <LatexRenderer latex="0 \leq s(t) \leq 1" /> pour <LatexRenderer latex="t \in [0, \alpha]" />, on a :</p>
                  <div className="text-center">
                    <LatexRenderer latex="s(t)^{n+1} \leq s(t)^n \quad \text{pour tout } t \in [0, \alpha]" />
                  </div>
                  <p>Par intégration :</p>
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="0 \leq W_{n+1} \leq W_n \Rightarrow (W_n) \text{ est décroissante}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">1c. Convergence de Wₙ</strong>
                <div className="mt-2">
                  <p>La suite <LatexRenderer latex="(W_n)" /> est décroissante et minorée par 0, donc elle converge vers une limite réelle <LatexRenderer latex="\ell \in \mathbb{R}_+" />.</p>
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Relation de récurrence</strong>
                <div className="mt-2 space-y-3">
                  <p><strong>Intégration par parties :</strong></p>
                  <p>On pose <LatexRenderer latex="u = s(t)^{n+1}" /> et <LatexRenderer latex="dv = s(t) dt" />.</p>
                  <p>Alors <LatexRenderer latex="du = (n+1)s(t)^n c(t) dt" /> et <LatexRenderer latex="v = c(t)" />.</p>
                  
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex="W_{n+2} = \int_0^\alpha s(t)^{n+2} dt = [c(t)s(t)^{n+1}]_0^\alpha - \int_0^\alpha c(t)(n+1)s(t)^n c(t) dt" />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex="= c(\alpha)s(\alpha)^{n+1} - (n+1)\int_0^\alpha c(t)^2 s(t)^n dt" />
                    </div>
                  </div>
                  
                  <p>Avec <LatexRenderer latex="c(\alpha) = \frac{e^\alpha + e^{-\alpha}}{2} = \frac{(1+\sqrt{2}) + (\sqrt{2}-1)}{2} = \sqrt{2}" /> et <LatexRenderer latex="c(t)^2 = 1 + s(t)^2" /> :</p>
                  
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex="W_{n+2} = \sqrt{2} - (n+1)(W_n + W_{n+2})" />
                    </div>
                  </div>
                  
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="(n + 2)W_{n+2} + (n + 1)W_n = \sqrt{2}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">3. Encadrement de Wₙ</strong>
                <div className="mt-2 space-y-2">
                  <p>Comme <LatexRenderer latex="W_n" /> est décroissante : <LatexRenderer latex="W_{n+2} \leq W_n" />.</p>
                  <p>De la relation de récurrence :</p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex="(n+2)W_{n+2} + (n+1)W_n \leq (n+2)W_n + (n+1)W_n = (2n+3)W_n" />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex="\sqrt{2} \leq (2n+3)W_n \Rightarrow W_n \geq \frac{\sqrt{2}}{2n+3}" />
                    </div>
                  </div>
                  
                  <p>De même, <LatexRenderer latex="W_n \geq W_{n+2}" /> donne :</p>
                  <div className="text-center">
                    <LatexRenderer latex="W_n \leq \frac{\sqrt{2}}{2n-1}" />
                  </div>
                  
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="\frac{\sqrt{2}}{2n+3} \leq W_n \leq \frac{\sqrt{2}}{2n-1}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">4. Comportement asymptotique</strong>
                <div className="mt-2 space-y-2">
                  <p>Par le théorème des gendarmes :</p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex="\lim_{n \to +\infty} \frac{\sqrt{2}}{2n+3} = \lim_{n \to +\infty} \frac{\sqrt{2}}{2n-1} = 0" />
                    </div>
                  </div>
                  
                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                    <LatexRenderer latex="W_n \to 0 \quad \text{et} \quad W_n \sim \frac{\sqrt{2}}{2n}" />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Chapitre7IntegrationSurUnSegmentExercicesPage;