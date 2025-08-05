import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre14DeveloppementsLimitesEtTaylorExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({ 
    level, 
    title, 
    icon: Icon, 
  }: { 
    level: string; 
    title: string; 
    icon: any; 
  }) => (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500 text-white rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{level} : {title}</h2>
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({ 
    id, 
    title, 
    content, 
    correction, 
    difficulty 
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
        
        <div className="mb-4">
          {content}
        </div>
        
        <Button
          onClick={() => toggleCorrection(id)}
          variant={visibleCorrections[id] ? "secondary" : "default"}
          className="mb-4"
        >
          {visibleCorrections[id] ? "Masquer la correction" : "Afficher la correction"}
        </Button>
        
        {visibleCorrections[id] && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-green-800 mb-2">Corrigé détaillé</h4>
            <div className="text-green-800">
              {correction}
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-approfondies" className="hover:text-[#1e3a8a] transition-colors">
              Maths Approfondies
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 14</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 14 : Développements limités & formule de Taylor
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les développements limités et la formule de Taylor.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Développements limités classiques"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-4">Donner le développement limité de la fonction <LatexRenderer latex="x \mapsto \sqrt{1 + x}" /> à l'ordre 2 au voisinage de 0.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Méthode :</strong>
                <p>On utilise la formule de développement limité de la fonction <LatexRenderer latex="(1 + x)^\alpha" /> au voisinage de 0.</p>
              </div>

              <div>
                <strong className="text-green-600">Identification :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\forall x \in ]-1, +\infty[, \quad \sqrt{1 + x} = (1 + x)^{1/2}" />
                  </div>
                  <p>Ici, <LatexRenderer latex="\alpha = \frac{1}{2}" />.</p>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Application de la formule générale :</strong>
                <p>Pour <LatexRenderer latex="(1 + x)^\alpha" />, on a :</p>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="(1 + x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha - 1)}{2!} x^2 + o(x^2)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Calcul des coefficients :</strong>
                <div className="space-y-2">
                  <p>Avec <LatexRenderer latex="\alpha = \frac{1}{2}" /> :</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Coefficient de <LatexRenderer latex="x" /> : <LatexRenderer latex="\alpha = \frac{1}{2}" /></li>
                    <li>Coefficient de <LatexRenderer latex="x^2" /> : <LatexRenderer latex="\frac{\alpha(\alpha - 1)}{2} = \frac{\frac{1}{2}(\frac{1}{2} - 1)}{2} = \frac{\frac{1}{2} \cdot (-\frac{1}{2})}{2} = \frac{-\frac{1}{4}}{2} = -\frac{1}{8}" /></li>
                  </ul>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Développement explicite :</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\sqrt{1 + x} = 1 + \frac{1}{2}x + \frac{1}{2} \left( \frac{1}{2} - 1 \right) \frac{x^2}{2} + o(x^2)" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Résultat final :</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\sqrt{1 + x} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2)" />
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
              <p className="mb-4">Calculer les développements limités en 0 des fonctions suivantes :</p>
              <ol className="list-decimal ml-6 space-y-2">
                <li><LatexRenderer latex="x \mapsto \frac{1}{3 - 2x}" /> à l'ordre 3</li>
                <li><LatexRenderer latex="x \mapsto \sqrt{5 - 2x}" /> à l'ordre 3</li>
                <li><LatexRenderer latex="x \mapsto (1 + 2x)^{1/4}" /> à l'ordre 3</li>
                <li><LatexRenderer latex="x \mapsto e^{2x} \ln(1 - x)" /> à l'ordre 3</li>
                <li><LatexRenderer latex="x \mapsto \frac{\ln(1 + 2x)}{2 + x}" /> à l'ordre 3</li>
                <li><LatexRenderer latex="x \mapsto \frac{\ln(1 + x) - x + \frac{x^2}{2}}{x^3}" /> à l'ordre 4</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Correction :</strong>
              </div>

              <div>
                <strong>1.</strong> <LatexRenderer latex="\frac{1}{3 - 2x} = \frac{1}{3} \cdot \frac{1}{1 - \frac{2x}{3}}" />
                <div className="text-center">
                  <LatexRenderer latex="\frac{1}{3 - 2x} = \frac{1}{3} + \frac{2}{9}x + \frac{4}{27}x^2 + \frac{8}{81}x^3 + o(x^3)" />
                </div>
              </div>

              <div>
                <strong>2.</strong> <LatexRenderer latex="\sqrt{5 - 2x} = \sqrt{5} \sqrt{1 - \frac{2x}{5}}" />
                <div className="text-center">
                  <LatexRenderer latex="\sqrt{5 - 2x} = \sqrt{5} - \frac{\sqrt{5}}{5}x - \frac{\sqrt{5}}{50}x^2 + \frac{\sqrt{5}}{250}x^3 + o(x^3)" />
                </div>
              </div>

              <div>
                <strong>3.</strong> Utilisation de <LatexRenderer latex="(1 + u)^{1/4}" /> avec <LatexRenderer latex="u = 2x" />
                <div className="text-center">
                  <LatexRenderer latex="(1 + 2x)^{1/4} = 1 + \frac{x}{2} - \frac{3}{8}x^2 + \frac{7}{16}x^3 + o(x^3)" />
                </div>
              </div>

              <div>
                <strong>4.</strong> Produit de <LatexRenderer latex="e^{2x}" /> et <LatexRenderer latex="\ln(1 - x)" />
                <div className="text-center">
                  <LatexRenderer latex="e^{2x} \ln(1 - x) = -x - \frac{5}{2}x^2 - \frac{10}{3}x^3 + o(x^3)" />
                </div>
              </div>

              <div>
                <strong>5.</strong> Quotient de séries
                <div className="text-center">
                  <LatexRenderer latex="\frac{\ln(1 + 2x)}{2 + x} = x - \frac{3}{2}x^2 + \frac{25}{12}x^3 + o(x^3)" />
                </div>
              </div>

              <div>
                <strong>6.</strong> Développement du numérateur puis division par <LatexRenderer latex="x^3" />
                <div className="text-center">
                  <LatexRenderer latex="\frac{\ln(1 + x) - x + \frac{x^2}{2}}{x^3} = \frac{1}{3} - \frac{x}{4} + \frac{x^2}{5} - \frac{x^3}{6} + \frac{x^4}{7} + o(x^5)" />
                </div>
              </div>
            </div>
          }
        />

        <DifficultyHeader
          level="Module 2"
          title="Développements limités en un point"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex3"
          title="Exercice 3"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4">Développement limité à l'ordre 3 en 1 de <LatexRenderer latex="h(x) = \frac{\ln(x)}{x^2}" /></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Étape 1 : Changement de variable</strong>
                <p>On pose <LatexRenderer latex="u = x - 1" />. Alors <LatexRenderer latex="x = 1 + u" /> et quand <LatexRenderer latex="x \to 1" />, <LatexRenderer latex="u \to 0" />.</p>
                <div className="text-center">
                  <LatexRenderer latex="h(x) = \frac{\ln(1 + u)}{(1 + u)^2}" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 2 : Développements nécessaires</strong>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\ln(1 + u) = u - \frac{u^2}{2} + \frac{u^3}{3} + o(u^3)" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="\frac{1}{(1 + u)^2} = 1 - 2u + 3u^2 - 4u^3 + o(u^3)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 3 : Produit des séries</strong>
                <p>On multiplie les deux développements :</p>
                <div className="text-center">
                  <LatexRenderer latex="\frac{\ln(1 + u)}{(1 + u)^2} = u - \frac{5}{2} u^2 + \frac{13}{3} u^3 + o(u^3)" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 4 : Retour à la variable x</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="h(x) = \frac{\ln(x)}{x^2} = (x - 1) - \frac{5}{2}(x - 1)^2 + \frac{13}{3}(x - 1)^3 + o((x - 1)^3)" />
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
              <p className="mb-4">Calculer les développements limités à l'ordre 3 :</p>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Développement limité de <LatexRenderer latex="f(x) = \sqrt{x}" /> en 1 à l'ordre 3</li>
                <li>Développement limité de <LatexRenderer latex="g(x) = e^{\sqrt{x}}" /> en 1 à l'ordre 3</li>
                <li>Développement limité de <LatexRenderer latex="h(x) = \ln(\sin x)" /> en <LatexRenderer latex="\frac{\pi}{3}" /> à l'ordre 3</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">1. Développement de √x en 1</strong>
                <p>On utilise la formule de Taylor avec <LatexRenderer latex="f(x) = x^{1/2}" /> :</p>
                <div className="space-y-2">
                  <p><LatexRenderer latex="f'(x) = \frac{1}{2}x^{-1/2}, f''(x) = -\frac{1}{4}x^{-3/2}, f^{(3)}(x) = \frac{3}{8}x^{-5/2}" /></p>
                  <p><LatexRenderer latex="f(1) = 1, f'(1) = \frac{1}{2}, f''(1) = -\frac{1}{4}, f^{(3)}(1) = \frac{3}{8}" /></p>
                  <div className="text-center bg-green-50 p-2 rounded">
                    <LatexRenderer latex="\sqrt{x} = 1 + \frac{1}{2}(x - 1) - \frac{1}{8}(x - 1)^2 + \frac{1}{16}(x - 1)^3 + o((x - 1)^3)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Développement de e^√x en 1</strong>
                <p>On utilise la composition avec <LatexRenderer latex="u = \sqrt{x}" /> :</p>
                <div className="space-y-2">
                  <p>On a <LatexRenderer latex="\sqrt{x} = 1 + \frac{1}{2}(x - 1) - \frac{1}{8}(x - 1)^2 + \frac{1}{16}(x - 1)^3 + o((x - 1)^3)" /></p>
                  <p>Et <LatexRenderer latex="e^u = e + e(u - 1) + \frac{e}{2!}(u - 1)^2 + \frac{e}{3!}(u - 1)^3 + o((u - 1)^3)" /></p>
                  <div className="text-center bg-green-50 p-2 rounded">
                    <LatexRenderer latex="e^{\sqrt{x}} = e + \frac{e}{2}(x - 1) + \frac{e}{48}(x - 1)^2 + \frac{e}{96}(x - 1)^3 + o((x - 1)^3)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">3. Développement de ln(sin x) en π/3</strong>
                <p>On pose <LatexRenderer latex="u = x - \frac{\pi}{3}" /> et on utilise :</p>
                <div className="space-y-2">
                  <p><LatexRenderer latex="\sin x = \frac{\sqrt{3}}{2} + \frac{1}{2} u - \frac{\sqrt{3}}{4} u^2 - \frac{1}{12} u^3 + o(u^3)" /></p>
                  <div className="text-center bg-green-50 p-2 rounded">
                    <LatexRenderer latex="\ln(\sin x) = \ln\left(\frac{\sqrt{3}}{2}\right) + \frac{1}{\sqrt{3}}(x - \frac{\pi}{3}) - \frac{2}{3}(x - \frac{\pi}{3})^2 + \frac{4}{9\sqrt{3}}(x - \frac{\pi}{3})^3 + o((x - \frac{\pi}{3})^3)" />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <DifficultyHeader
          level="Module 3"
          title="Formule de Taylor et applications"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex5"
          title="Exercice 5"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-4">Application de l'inégalité de Taylor-Lagrange à sin(x)</p>
              <p className="mb-4"><strong>Rappel :</strong> Soit <LatexRenderer latex="f \in \mathcal{C}^{n+1}(I)" />. Alors :</p>
              <div className="text-center mb-4">
                <LatexRenderer latex="\left| f(b) - \sum_{k=0}^n \frac{(b - a)^k}{k!} f^{(k)}(a) \right| \leq \frac{|b - a|^{n+1}}{(n+1)!} \cdot \max_{u \in [a,b]} |f^{(n+1)}(u)|" />
              </div>
              <p className="mb-4"><strong>Exercice :</strong> Montrer que :</p>
              <div className="text-center">
                <LatexRenderer latex="\forall x \in \mathbb{R}^+, \quad |\sin(x) - x| \leq \frac{x^3}{6}" />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Application de Taylor-Lagrange</strong>
                <p>On applique l'inégalité à <LatexRenderer latex="f(x) = \sin(x)" /> autour de 0 à l'ordre 2 :</p>
              </div>

              <div>
                <strong className="text-green-600">Calcul des dérivées :</strong>
                <div className="space-y-2">
                  <p><LatexRenderer latex="f(x) = \sin(x), f'(x) = \cos(x), f''(x) = -\sin(x), f^{(3)}(x) = -\cos(x)" /></p>
                  <p><LatexRenderer latex="f(0) = 0, f'(0) = 1, f''(0) = 0" /></p>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Polynôme de Taylor d'ordre 2 :</strong>
                <div className="text-center">
                  <LatexRenderer latex="P_2(x) = 0 + 1 \cdot x + \frac{0}{2!} x^2 = x" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Application de l'inégalité :</strong>
                <div className="space-y-2">
                  <p>Pour <LatexRenderer latex="x \geq 0" />, on a <LatexRenderer latex="|f^{(3)}(u)| = |\cos(u)| \leq 1" /> pour tout <LatexRenderer latex="u \in [0,x]" />.</p>
                  <div className="text-center">
                    <LatexRenderer latex="|\sin(x) - x| \leq \frac{x^3}{3!} \cdot 1 = \frac{x^3}{6}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Conclusion :</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\forall x \in \mathbb{R}^+, \quad |\sin(x) - x| \leq \frac{x^3}{6}" />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex6"
          title="Exercice 6"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-4">Soit <LatexRenderer latex="n \in \mathbb{N}" />. On considère la fonction :</p>
              <div className="text-center mb-4">
                <LatexRenderer latex="f_n(x) = x e^{-n/x}, \quad \text{définie sur } ]0, +\infty[" />
              </div>
              <p className="mb-4">et on note <LatexRenderer latex="\mathcal{C}_n" /> sa courbe représentative.</p>
              
              <div className="space-y-4">
                <div>
                  <p><strong>1.</strong> Rappeler le développement limité de <LatexRenderer latex="e^u" /> à l'ordre 2 au voisinage de 0.</p>
                </div>
                <div>
                  <p><strong>2.</strong> En déduire le développement asymptotique de <LatexRenderer latex="f_n(x)" /> quand <LatexRenderer latex="x \to +\infty" />.</p>
                </div>
                <div>
                  <p><strong>3.</strong> Montrer que la droite <LatexRenderer latex="D_n" /> d'équation <LatexRenderer latex="y = x - n" /> est une asymptote oblique à <LatexRenderer latex="\mathcal{C}_n" />.</p>
                </div>
                <div>
                  <p><strong>4.</strong> Préciser la position relative de <LatexRenderer latex="\mathcal{C}_n" /> par rapport à <LatexRenderer latex="D_n" />.</p>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">1. Développement de e^u :</strong>
                <div className="text-center">
                  <LatexRenderer latex="e^u = 1 + u + \frac{u^2}{2} + o(u^2) \quad \text{pour } u \to 0" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Application à u = -n/x :</strong>
                <div className="space-y-2">
                  <p>Quand <LatexRenderer latex="x \to +\infty" />, on a <LatexRenderer latex="u = -\frac{n}{x} \to 0" />, donc :</p>
                  <div className="text-center">
                    <LatexRenderer latex="e^{-n/x} = 1 - \frac{n}{x} + \frac{n^2}{2x^2} + o\left(\frac{1}{x^2}\right)" />
                  </div>
                  <p>Ainsi :</p>
                  <div className="text-center">
                    <LatexRenderer latex="f_n(x) = x e^{-n/x} = x - n + \frac{n^2}{2x} + o\left(\frac{1}{x}\right)" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">3. Asymptote oblique :</strong>
                <div className="space-y-2">
                  <p>On calcule :</p>
                  <div className="text-center">
                    <LatexRenderer latex="\lim_{x \to +\infty} \left(f_n(x) - (x - n)\right) = \lim_{x \to +\infty} \left(\frac{n^2}{2x} + o\left(\frac{1}{x}\right)\right) = 0" />
                  </div>
                  <p>Donc la droite <LatexRenderer latex="D_n : y = x - n" /> est bien une asymptote oblique.</p>
                </div>
              </div>

              <div>
                <strong className="text-green-600">4. Position relative :</strong>
                <div className="space-y-2">
                  <p>Comme <LatexRenderer latex="f_n(x) = x - n + \frac{n^2}{2x} + o\left(\frac{1}{x}\right)" /> et <LatexRenderer latex="\frac{n^2}{2x} > 0" /> pour <LatexRenderer latex="x > 0" />, on a :</p>
                  <div className="text-center">
                    <LatexRenderer latex="f_n(x) > x - n \quad \text{pour } x \gg 0" />
                  </div>
                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                    <p>La courbe <LatexRenderer latex="\mathcal{C}_n" /> est <strong>au-dessus</strong> de la droite <LatexRenderer latex="D_n" /> au voisinage de <LatexRenderer latex="+\infty" />.</p>
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

export default Chapitre14DeveloppementsLimitesEtTaylorExercicesPage;
