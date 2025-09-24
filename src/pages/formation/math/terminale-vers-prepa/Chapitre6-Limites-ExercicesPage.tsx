import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen, Infinity, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre6LimitesExercicesPage = () => {
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
          className="mb-4 bg-blue-600 hover:bg-blue-700"
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
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-[#1e3a8a] transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 6</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 6 : Limites
            </h1>
            <p className="text-slate-600 text-lg mb-4">
              Exercices progressifs pour maîtriser le calcul des limites
            </p>
            <div className="flex gap-2">
              <Link
                to="/formation/math/terminale-vers-prepa/limites-cours"
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                Voir le cours
              </Link>
              <Link
                to="/formation/math/terminale-vers-prepa"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                ← Retour au sommaire
              </Link>
            </div>
          </div>
        </Card>

        {/* Niveau 1 - Bases */}
        <DifficultyHeader 
          level="Niveau 1" 
          title="Calculs de limites élémentaires" 
          icon={BookOpen} 
        />

        <ExerciseCard
          id="limite-1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Calculer les limites suivantes :</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) <LatexRenderer latex="\lim_{x \to 2} (3x + 1)" /></p>
                <p>b) <LatexRenderer latex="\lim_{x \to +\infty} \frac{2x + 1}{x + 3}" /></p>
                <p>c) <LatexRenderer latex="\lim_{x \to 0} \frac{\sin(3x)}{x}" /></p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) <LatexRenderer latex="\lim_{x \to 2} (3x + 1)" /></p>
                <p>Il s'agit d'une fonction polynomiale, continue en x = 2.</p>
                <p>Par substitution directe : <LatexRenderer latex="3 \times 2 + 1 = 7" /></p>
                <p><strong>Réponse : 7</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) <LatexRenderer latex="\lim_{x \to +\infty} \frac{2x + 1}{x + 3}" /></p>
                <p>On divise numérateur et dénominateur par x :</p>
                <p><LatexRenderer latex="\lim_{x \to +\infty} \frac{2 + \frac{1}{x}}{1 + \frac{3}{x}} = \frac{2 + 0}{1 + 0} = 2" /></p>
                <p><strong>Réponse : 2</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) <LatexRenderer latex="\lim_{x \to 0} \frac{\sin(3x)}{x}" /></p>
                <p>On utilise la limite de référence en écrivant :</p>
                <p><LatexRenderer latex="\frac{\sin(3x)}{x} = 3 \cdot \frac{\sin(3x)}{3x}" /></p>
                <p>Donc : <LatexRenderer latex="\lim_{x \to 0} \frac{\sin(3x)}{x} = 3 \times 1 = 3" /></p>
                <p><strong>Réponse : 3</strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="limite-2"
          title="Exercice 2"
          difficulty="Facile"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Déterminer les limites suivantes :</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) <LatexRenderer latex="\lim_{x \to +\infty} (x^2 - 3x + 1)" /></p>
                <p>b) <LatexRenderer latex="\lim_{x \to 1^-} \frac{1}{x - 1}" /></p>
                <p>c) <LatexRenderer latex="\lim_{x \to 0} \frac{e^x - 1}{x}" /></p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) <LatexRenderer latex="\lim_{x \to +\infty} (x^2 - 3x + 1)" /></p>
                <p>Le terme de plus haut degré domine : <LatexRenderer latex="x^2 \to +\infty" /></p>
                <p><strong>Réponse : <LatexRenderer latex="+\infty" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) <LatexRenderer latex="\lim_{x \to 1^-} \frac{1}{x - 1}" /></p>
                <p>Quand x tend vers 1 par valeurs inférieures, <LatexRenderer latex="x - 1 \to 0^-" /></p>
                <p>Donc <LatexRenderer latex="\frac{1}{x - 1} \to -\infty" /></p>
                <p><strong>Réponse : <LatexRenderer latex="-\infty" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) <LatexRenderer latex="\lim_{x \to 0} \frac{e^x - 1}{x}" /></p>
                <p>C'est une limite de référence fondamentale.</p>
                <p><strong>Réponse : 1</strong></p>
              </div>
            </div>
          }
        />

        {/* Niveau 2 - Formes indéterminées */}
        <DifficultyHeader 
          level="Niveau 2" 
          title="Formes indéterminées" 
          icon={Infinity} 
        />

        <ExerciseCard
          id="limite-3"
          title="Exercice 3"
          difficulty="Moyen"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Lever les indéterminations et calculer :</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) <LatexRenderer latex="\lim_{x \to 1} \frac{x^2 - 1}{x - 1}" /></p>
                <p>b) <LatexRenderer latex="\lim_{x \to +\infty} \frac{3x^2 + 2x - 1}{x^2 - x + 5}" /></p>
                <p>c) <LatexRenderer latex="\lim_{x \to 0} \frac{\ln(1 + 2x)}{x}" /></p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) <LatexRenderer latex="\lim_{x \to 1} \frac{x^2 - 1}{x - 1}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>Factorisation : <LatexRenderer latex="x^2 - 1 = (x-1)(x+1)" /></p>
                <p><LatexRenderer latex="\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x+1" /> pour <LatexRenderer latex="x \neq 1" /></p>
                <p>Donc : <LatexRenderer latex="\lim_{x \to 1} (x+1) = 2" /></p>
                <p><strong>Réponse : 2</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) <LatexRenderer latex="\lim_{x \to +\infty} \frac{3x^2 + 2x - 1}{x^2 - x + 5}" /> (forme <LatexRenderer latex="\frac{\infty}{\infty}" />)</p>
                <p>On divise par <LatexRenderer latex="x^2" /> :</p>
                <p><LatexRenderer latex="\lim_{x \to +\infty} \frac{3 + \frac{2}{x} - \frac{1}{x^2}}{1 - \frac{1}{x} + \frac{5}{x^2}} = \frac{3 + 0 - 0}{1 - 0 + 0} = 3" /></p>
                <p><strong>Réponse : 3</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) <LatexRenderer latex="\lim_{x \to 0} \frac{\ln(1 + 2x)}{x}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>On pose <LatexRenderer latex="u = 2x" />, donc <LatexRenderer latex="x = \frac{u}{2}" /></p>
                <p>Quand <LatexRenderer latex="x \to 0" />, <LatexRenderer latex="u \to 0" /></p>
                <p><LatexRenderer latex="\frac{\ln(1 + 2x)}{x} = \frac{\ln(1 + u)}{\frac{u}{2}} = 2 \cdot \frac{\ln(1 + u)}{u}" /></p>
                <p>En utilisant la limite de référence : <LatexRenderer latex="\lim_{u \to 0} \frac{\ln(1 + u)}{u} = 1" /></p>
                <p><strong>Réponse : 2</strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="limite-4"
          title="Exercice 4"
          difficulty="Moyen"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Calculer les limites suivantes :</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) <LatexRenderer latex="\lim_{x \to +\infty} (\sqrt{x+1} - \sqrt{x})" /></p>
                <p>b) <LatexRenderer latex="\lim_{x \to 0} \frac{1 - \cos x}{x^2}" /></p>
                <p>c) <LatexRenderer latex="\lim_{x \to 2} \frac{x^3 - 8}{x - 2}" /></p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) <LatexRenderer latex="\lim_{x \to +\infty} (\sqrt{x+1} - \sqrt{x})" /> (forme <LatexRenderer latex="\infty - \infty" />)</p>
                <p>Multiplier par l'expression conjuguée :</p>
                <p><LatexRenderer latex="(\sqrt{x+1} - \sqrt{x}) \times \frac{\sqrt{x+1} + \sqrt{x}}{\sqrt{x+1} + \sqrt{x}} = \frac{(x+1) - x}{\sqrt{x+1} + \sqrt{x}} = \frac{1}{\sqrt{x+1} + \sqrt{x}}" /></p>
                <p>Quand <LatexRenderer latex="x \to +\infty" />, le dénominateur tend vers <LatexRenderer latex="+\infty" /></p>
                <p><strong>Réponse : 0</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) <LatexRenderer latex="\lim_{x \to 0} \frac{1 - \cos x}{x^2}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>C'est une limite de référence fondamentale.</p>
                <p><strong>Réponse : <LatexRenderer latex="\frac{1}{2}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) <LatexRenderer latex="\lim_{x \to 2} \frac{x^3 - 8}{x - 2}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>Factorisation : <LatexRenderer latex="x^3 - 8 = (x-2)(x^2 + 2x + 4)" /></p>
                <p><LatexRenderer latex="\frac{x^3 - 8}{x - 2} = x^2 + 2x + 4" /> pour <LatexRenderer latex="x \neq 2" /></p>
                <p>Donc : <LatexRenderer latex="\lim_{x \to 2} (x^2 + 2x + 4) = 4 + 4 + 4 = 12" /></p>
                <p><strong>Réponse : 12</strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="limite-5"
          title="Exercice 5"
          difficulty="Moyen"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Étudier les limites suivantes :</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) <LatexRenderer latex="\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}" /></p>
                <p>b) <LatexRenderer latex="\lim_{x \to +\infty} \frac{2x^3 - x^2 + 1}{3x^3 + x - 5}" /></p>
                <p>c) <LatexRenderer latex="\lim_{x \to 1} \frac{\sqrt{x} - 1}{x - 1}" /></p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) <LatexRenderer latex="\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>On utilise : <LatexRenderer latex="\tan x - \sin x = \sin x \left(\frac{1}{\cos x} - 1\right) = \sin x \cdot \frac{1 - \cos x}{\cos x}" /></p>
                <p>Donc : <LatexRenderer latex="\frac{\tan x - \sin x}{x^3} = \frac{\sin x}{x} \cdot \frac{1 - \cos x}{x^2} \cdot \frac{1}{\cos x}" /></p>
                <p>En utilisant les limites de référence : <LatexRenderer latex="\lim_{x \to 0} \frac{\sin x}{x} = 1" />, <LatexRenderer latex="\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}" /></p>
                <p><strong>Réponse : <LatexRenderer latex="\frac{1}{2}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) <LatexRenderer latex="\lim_{x \to +\infty} \frac{2x^3 - x^2 + 1}{3x^3 + x - 5}" /> (forme <LatexRenderer latex="\frac{\infty}{\infty}" />)</p>
                <p>On divise par <LatexRenderer latex="x^3" /> (terme de plus haut degré) :</p>
                <p><LatexRenderer latex="\lim_{x \to +\infty} \frac{2 - \frac{1}{x} + \frac{1}{x^3}}{3 + \frac{1}{x^2} - \frac{5}{x^3}} = \frac{2 - 0 + 0}{3 + 0 - 0} = \frac{2}{3}" /></p>
                <p><strong>Réponse : <LatexRenderer latex="\frac{2}{3}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) <LatexRenderer latex="\lim_{x \to 1} \frac{\sqrt{x} - 1}{x - 1}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>Multiplier par l'expression conjuguée :</p>
                <p><LatexRenderer latex="\frac{\sqrt{x} - 1}{x - 1} \times \frac{\sqrt{x} + 1}{\sqrt{x} + 1} = \frac{x - 1}{(x - 1)(\sqrt{x} + 1)} = \frac{1}{\sqrt{x} + 1}" /></p>
                <p>Donc : <LatexRenderer latex="\lim_{x \to 1} \frac{1}{\sqrt{x} + 1} = \frac{1}{\sqrt{1} + 1} = \frac{1}{2}" /></p>
                <p><strong>Réponse : <LatexRenderer latex="\frac{1}{2}" /></strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="limite-6"
          title="Exercice 6"
          difficulty="Moyen"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Déterminer les limites suivantes :</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) <LatexRenderer latex="\lim_{x \to 0} \frac{e^{2x} - 1 - 2x}{x^2}" /></p>
                <p>b) <LatexRenderer latex="\lim_{x \to +\infty} x\left(e^{\frac{1}{x}} - 1\right)" /></p>
                <p>c) <LatexRenderer latex="\lim_{x \to 0^+} \frac{\ln(1 + x^2)}{x^2}" /></p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) <LatexRenderer latex="\lim_{x \to 0} \frac{e^{2x} - 1 - 2x}{x^2}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>On pose <LatexRenderer latex="u = 2x" />, donc <LatexRenderer latex="x = \frac{u}{2}" />. Quand <LatexRenderer latex="x \to 0" />, <LatexRenderer latex="u \to 0" />.</p>
                <p><LatexRenderer latex="\frac{e^{2x} - 1 - 2x}{x^2} = \frac{e^u - 1 - u}{\frac{u^2}{4}} = 4 \cdot \frac{e^u - 1 - u}{u^2}" /></p>
                <p>En utilisant le développement limité : <LatexRenderer latex="e^u = 1 + u + \frac{u^2}{2} + o(u^2)" /></p>
                <p>Donc : <LatexRenderer latex="e^u - 1 - u = \frac{u^2}{2} + o(u^2)" /></p>
                <p><LatexRenderer latex="\lim_{u \to 0} \frac{e^u - 1 - u}{u^2} = \frac{1}{2}" />, donc la limite est <LatexRenderer latex="4 \times \frac{1}{2} = 2" /></p>
                <p><strong>Réponse : 2</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) <LatexRenderer latex="\lim_{x \to +\infty} x\left(e^{\frac{1}{x}} - 1\right)" /> (forme <LatexRenderer latex="\infty \times 0" />)</p>
                <p>On pose <LatexRenderer latex="t = \frac{1}{x}" />, donc <LatexRenderer latex="x = \frac{1}{t}" />. Quand <LatexRenderer latex="x \to +\infty" />, <LatexRenderer latex="t \to 0^+" />.</p>
                <p><LatexRenderer latex="x\left(e^{\frac{1}{x}} - 1\right) = \frac{1}{t}(e^t - 1) = \frac{e^t - 1}{t}" /></p>
                <p>Par limite de référence : <LatexRenderer latex="\lim_{t \to 0} \frac{e^t - 1}{t} = 1" /></p>
                <p><strong>Réponse : 1</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) <LatexRenderer latex="\lim_{x \to 0^+} \frac{\ln(1 + x^2)}{x^2}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>On pose <LatexRenderer latex="u = x^2" />. Quand <LatexRenderer latex="x \to 0^+" />, <LatexRenderer latex="u \to 0^+" />.</p>
                <p><LatexRenderer latex="\frac{\ln(1 + x^2)}{x^2} = \frac{\ln(1 + u)}{u}" /></p>
                <p>Par limite de référence : <LatexRenderer latex="\lim_{u \to 0} \frac{\ln(1 + u)}{u} = 1" /></p>
                <p><strong>Réponse : 1</strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="limite-7"
          title="Exercice 7"
          difficulty="Moyen"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Calculer les limites suivantes :</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) <LatexRenderer latex="\lim_{x \to 0} \frac{\sqrt{1 + x} - \sqrt{1 - x}}{x}" /></p>
                <p>b) <LatexRenderer latex="\lim_{x \to +\infty} \frac{\sqrt{x^2 + x} - x}{\sqrt{x}}" /></p>
                <p>c) <LatexRenderer latex="\lim_{x \to 3} \frac{x^2 - 9}{\sqrt{x + 1} - 2}" /></p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) <LatexRenderer latex="\lim_{x \to 0} \frac{\sqrt{1 + x} - \sqrt{1 - x}}{x}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>Multiplier par l'expression conjuguée :</p>
                <p><LatexRenderer latex="\frac{\sqrt{1 + x} - \sqrt{1 - x}}{x} \times \frac{\sqrt{1 + x} + \sqrt{1 - x}}{\sqrt{1 + x} + \sqrt{1 - x}}" /></p>
                <p><LatexRenderer latex="= \frac{(1 + x) - (1 - x)}{x(\sqrt{1 + x} + \sqrt{1 - x})} = \frac{2x}{x(\sqrt{1 + x} + \sqrt{1 - x})} = \frac{2}{\sqrt{1 + x} + \sqrt{1 - x}}" /></p>
                <p>Donc : <LatexRenderer latex="\lim_{x \to 0} \frac{2}{\sqrt{1 + x} + \sqrt{1 - x}} = \frac{2}{\sqrt{1} + \sqrt{1}} = \frac{2}{2} = 1" /></p>
                <p><strong>Réponse : 1</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) <LatexRenderer latex="\lim_{x \to +\infty} \frac{\sqrt{x^2 + x} - x}{\sqrt{x}}" /> (forme <LatexRenderer latex="\frac{\infty}{\infty}" />)</p>
                <p>Multiplier par l'expression conjuguée :</p>
                <p><LatexRenderer latex="\frac{\sqrt{x^2 + x} - x}{\sqrt{x}} \times \frac{\sqrt{x^2 + x} + x}{\sqrt{x^2 + x} + x}" /></p>
                <p><LatexRenderer latex="= \frac{(x^2 + x) - x^2}{\sqrt{x}(\sqrt{x^2 + x} + x)} = \frac{x}{\sqrt{x}(\sqrt{x^2 + x} + x)} = \frac{\sqrt{x}}{\sqrt{x^2 + x} + x}" /></p>
                <p>Diviser par <LatexRenderer latex="x" /> : <LatexRenderer latex="\frac{\frac{1}{\sqrt{x}}}{\sqrt{1 + \frac{1}{x}} + 1} \to \frac{0}{1 + 1} = 0" /></p>
                <p><strong>Réponse : 0</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) <LatexRenderer latex="\lim_{x \to 3} \frac{x^2 - 9}{\sqrt{x + 1} - 2}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>Factoriser le numérateur : <LatexRenderer latex="x^2 - 9 = (x - 3)(x + 3)" /></p>
                <p>Multiplier dénominateur par expression conjuguée :</p>
                <p><LatexRenderer latex="\sqrt{x + 1} - 2 = \frac{(\sqrt{x + 1})^2 - 4}{\sqrt{x + 1} + 2} = \frac{x + 1 - 4}{\sqrt{x + 1} + 2} = \frac{x - 3}{\sqrt{x + 1} + 2}" /></p>
                <p>Donc : <LatexRenderer latex="\frac{x^2 - 9}{\sqrt{x + 1} - 2} = \frac{(x - 3)(x + 3)}{\frac{x - 3}{\sqrt{x + 1} + 2}} = (x + 3)(\sqrt{x + 1} + 2)" /></p>
                <p><LatexRenderer latex="\lim_{x \to 3} (x + 3)(\sqrt{x + 1} + 2) = 6 \times (\sqrt{4} + 2) = 6 \times 4 = 24" /></p>
                <p><strong>Réponse : 24</strong></p>
              </div>
            </div>
          }
        />

        {/* Niveau 3 - Avancé */}
        <DifficultyHeader 
          level="Niveau 3" 
          title="Techniques avancées" 
          icon={Target} 
        />

        <ExerciseCard
          id="limite-8"
          title="Exercice 8"
          difficulty="Difficile"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Calculer les limites suivantes :</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) <LatexRenderer latex="\lim_{x \to 0} \frac{\sin x - x}{x^3}" /></p>
                <p>b) <LatexRenderer latex="\lim_{x \to +\infty} x(\sqrt{x^2 + 1} - x)" /></p>
                <p>c) <LatexRenderer latex="\lim_{x \to 0^+} x \ln x" /></p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) <LatexRenderer latex="\lim_{x \to 0} \frac{\sin x - x}{x^3}" /> (forme <LatexRenderer latex="\frac{0}{0}" />)</p>
                <p>Utilisation du développement limité de <LatexRenderer latex="\sin x" /> :</p>
                <p><LatexRenderer latex="\sin x = x - \frac{x^3}{6} + o(x^3)" /></p>
                <p>Donc : <LatexRenderer latex="\sin x - x = -\frac{x^3}{6} + o(x^3)" /></p>
                <p><LatexRenderer latex="\frac{\sin x - x}{x^3} = -\frac{1}{6} + o(1)" /></p>
                <p><strong>Réponse : <LatexRenderer latex="-\frac{1}{6}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) <LatexRenderer latex="\lim_{x \to +\infty} x(\sqrt{x^2 + 1} - x)" /> (forme <LatexRenderer latex="\infty \times 0" />)</p>
                <p>Multiplier par l'expression conjuguée :</p>
                <p><LatexRenderer latex="x(\sqrt{x^2 + 1} - x) \times \frac{\sqrt{x^2 + 1} + x}{\sqrt{x^2 + 1} + x} = \frac{x((x^2 + 1) - x^2)}{\sqrt{x^2 + 1} + x} = \frac{x}{\sqrt{x^2 + 1} + x}" /></p>
                <p>Diviser par x : <LatexRenderer latex="\frac{1}{\sqrt{1 + \frac{1}{x^2}} + 1} \to \frac{1}{1 + 1} = \frac{1}{2}" /></p>
                <p><strong>Réponse : <LatexRenderer latex="\frac{1}{2}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) <LatexRenderer latex="\lim_{x \to 0^+} x \ln x" /> (forme <LatexRenderer latex="0 \times (-\infty)" />)</p>
                <p>Changement de variable : <LatexRenderer latex="u = \frac{1}{x}" />, donc <LatexRenderer latex="x = \frac{1}{u}" /></p>
                <p>Quand <LatexRenderer latex="x \to 0^+" />, <LatexRenderer latex="u \to +\infty" /></p>
                <p><LatexRenderer latex="x \ln x = \frac{1}{u} \ln\left(\frac{1}{u}\right) = -\frac{\ln u}{u}" /></p>
                <p>Par croissances comparées : <LatexRenderer latex="\lim_{u \to +\infty} \frac{\ln u}{u} = 0" /></p>
                <p><strong>Réponse : 0</strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="limite-9"
          title="Exercice 9"
          difficulty="Difficile"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Étudier la limite suivante :</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p><LatexRenderer latex="\lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x" /></p>
              </div>
              <p className="text-gray-600 text-sm">Indication : penser au nombre e</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Limite fondamentale : <LatexRenderer latex="\lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x = e" /></p>
                <p>Méthode par logarithme :</p>
                <p>Posons <LatexRenderer latex="y = \left(1 + \frac{1}{x}\right)^x" />, alors <LatexRenderer latex="\ln y = x \ln\left(1 + \frac{1}{x}\right)" /></p>
                <p>Changement de variable : <LatexRenderer latex="u = \frac{1}{x}" />, donc <LatexRenderer latex="x = \frac{1}{u}" /></p>
                <p><LatexRenderer latex="\ln y = \frac{1}{u} \ln(1 + u) = \frac{\ln(1 + u)}{u}" /></p>
                <p>Quand <LatexRenderer latex="x \to +\infty" />, <LatexRenderer latex="u \to 0" /></p>
                <p>Par limite de référence : <LatexRenderer latex="\lim_{u \to 0} \frac{\ln(1 + u)}{u} = 1" /></p>
                <p>Donc <LatexRenderer latex="\ln y \to 1" />, ce qui implique <LatexRenderer latex="y \to e" /></p>
                <p><strong>Réponse : e</strong></p>
              </div>
            </div>
          }
        />

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t border-blue-200">
          <Link
            to="/formation/math/terminale-vers-prepa"
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          >
            ← Retour au sommaire
          </Link>
          <Link
            to="/formation/math/terminale-vers-prepa/limites-cours"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Revoir le cours
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapitre6LimitesExercicesPage;
