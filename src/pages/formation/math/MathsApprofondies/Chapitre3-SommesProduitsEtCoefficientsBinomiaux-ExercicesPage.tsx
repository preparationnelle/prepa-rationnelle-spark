import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 3</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 3 : Sommes, produits & coefficients binomiaux
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les sommes, produits et coefficients binomiaux.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Quelques sommes à calculer"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <LatexRenderer latex={"\\sum_{k=3}^{n} (2k + 4), \\quad \\text{pour } n \\geq 3"} />
          }
          correction={
            <LatexRenderer latex={"\\begin{aligned} \\sum_{k=3}^{n} (2k + 4) &= 2 \\sum_{k=3}^{n} k + \\sum_{k=3}^{n} 4 \\\\ &= 2\\left( \\sum_{k=0}^{n} k - (0 + 1 + 2) \\right) + 4(n - 2) \\\\ &= 2\\left( \\frac{n(n+1)}{2} - 3 \\right) + 4(n - 2) \\\\ &= n(n+1) + 4n - 14 \\\\ &= n(n + 5) - 14 \\end{aligned}"} />
          }
        />

        <ExerciseCard
          id="ex2"
          title="Exercice 2"
          difficulty="Facile"
          content={
            <LatexRenderer latex={"\\sum_{k=0}^{n} 3^{k+1}, \\quad \\text{pour } n \\in \\mathbb{N}"} />
          }
          correction={
            <LatexRenderer latex={"\\begin{aligned} \\sum_{k=0}^{n} 3^{k+1} &= 3 \\sum_{k=0}^{n} 3^k \\\\ &= 3 \\cdot \\frac{1 - 3^{n+1}}{1 - 3} \\\\ &= \\frac{3}{2}(3^{n+1} - 1) \\end{aligned}"} />
          }
        />

        <ExerciseCard
          id="ex3"
          title="Exercice 3"
          difficulty="Facile"
          content={
            <LatexRenderer latex={"\\sum_{k=0}^{n} 2^{3k+2}, \\quad \\text{pour } n \\in \\mathbb{N}"} />
          }
          correction={
            <LatexRenderer latex={"\\begin{aligned} \\sum_{k=0}^{n} 2^{3k+2} &= 4 \\sum_{k=0}^{n} 8^k \\\\ &= 4 \\cdot \\frac{1 - 8^{n+1}}{1 - 8} \\\\ &= \\frac{4}{7}(8^{n+1} - 1) \\end{aligned}"} />
          }
        />

        <ExerciseCard
          id="ex4"
          title="Exercice 4"
          difficulty="Facile"
          content={
            <LatexRenderer latex={"\\sum_{k=0}^{n} \\frac{1}{2^{3k+2}}, \\quad \\text{pour } n \\in \\mathbb{N}"} />
          }
          correction={
            <LatexRenderer latex={"\\begin{aligned} \\sum_{k=0}^{n} \\frac{1}{2^{3k+2}} &= \\frac{1}{4} \\sum_{k=0}^{n} \\left(\\frac{1}{8}\\right)^k \\\\ &= \\frac{1}{4} \\cdot \\frac{1 - (1/8)^{n+1}}{1 - 1/8} \\\\ &= \\frac{2}{7} \\left(1 - \\left(\\frac{1}{8}\\right)^{n+1} \\right) \\end{aligned}"} />
          }
        />

        <ExerciseCard
          id="ex5"
          title="Exercice 5"
          difficulty="Facile"
          content={
            <LatexRenderer latex={"\\sum_{k=2}^{n} \\frac{-1}{3^k}, \\quad \\text{pour } n \\geq 2"} />
          }
          correction={
            <LatexRenderer latex={"\\begin{aligned} \\sum_{k=2}^{n} \\frac{-1}{3^k} &= - \\left( \\sum_{k=0}^{n} \\left( \\frac{1}{3} \\right)^k - 1 - \\frac{1}{3} \\right) \\\\ &= - \\left( \\frac{1 - (1/3)^{n+1}}{1 - 1/3} - \\frac{4}{3} \\right) \\\\ &= \\frac{1}{2} \\left( \\left( \\frac{1}{3} \\right)^n - \\frac{1}{9} \\right) \\end{aligned}"} />
          }
        />

        <ExerciseCard
          id="ex6"
          title="Exercice 6"
          difficulty="Facile"
          content={
            <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^{n+k}, \\quad \\text{pour } n \\in \\mathbb{N}"} />
          }
          correction={
            <LatexRenderer latex={"\\begin{aligned} \\sum_{k=0}^{2n} 5^{n+k} &= 5^n \\sum_{k=0}^{2n} 5^k \\\\ &= 5^n \\cdot \\frac{1 - 5^{2n+1}}{1 - 5} \\\\ &= \\frac{5^n (5^{2n+1} - 1)}{4} \\end{aligned}"} />
          }
        />

        <ExerciseCard
          id="ex7"
          title="Exercice 7"
          difficulty="Facile"
          content={
            <LatexRenderer latex={"\\sum_{k=0}^{n} k(k+1)(k-1), \\quad \\text{pour } n \\in \\mathbb{N}"} />
          }
          correction={
            <LatexRenderer latex={"\\begin{aligned} \\sum_{k=0}^{n} k(k+1)(k-1) &= \\sum_{k=0}^{n} (k^3 - k) \\\\ &= \\left( \\frac{n(n+1)}{2} \\right)^2 - \\frac{n(n+1)}{2} \\\\ &= \\frac{n(n+1)}{2} \\left( \\frac{n(n+1)}{2} - 1 \\right) \\\\ &= \\frac{n(n+1)(n-1)(n+2)}{4} \\end{aligned}"} />
          }
        />

        <ExerciseCard
          id="ex8"
          title="Exercice 8"
          difficulty="Facile"
          content={
            <div>
              <div className="mb-2">
                Montrer : <LatexRenderer latex={"\\forall k \\in \\mathbb{N}, \\quad \\dfrac{1}{(k+1)(k+2)} = \\dfrac{1}{k+1} - \\dfrac{1}{k+2}."} />
              </div>
              <div>
                En déduire : <LatexRenderer latex={"\\sum_{k=0}^{98} \\frac{1}{(k+1)(k+2)}"} />
              </div>
            </div>
          }
          correction={
            <div>
              <div className="mb-3">
                <strong>1. Par identification :</strong>
                <LatexRenderer latex={"\\frac{1}{k+1} - \\frac{1}{k+2} = \\frac{(k+2)-(k+1)}{(k+1)(k+2)} = \\frac{1}{(k+1)(k+2)}"} />
                <LatexRenderer latex={"\\frac{1}{(k+1)(k+2)} = \\frac{1}{k+1} - \\frac{1}{k+2}"} />
              </div>
              <div className="mb-3">
                <strong>2. On applique la linéarité de la somme :</strong>
                <LatexRenderer latex={"\\sum_{k=0}^{98} \\frac{1}{(k+1)(k+2)} = \\sum_{k=0}^{98} \\left( \\frac{1}{k+1} - \\frac{1}{k+2} \\right)"} />
                <LatexRenderer latex={"= \\left(\\frac{1}{1} - \\frac{1}{2} \\right) + \\left( \\frac{1}{2} - \\frac{1}{3} \\right) + \\cdots + \\left( \\frac{1}{99} - \\frac{1}{100} \\right)"} />
                <LatexRenderer latex={"= 1 - \\frac{1}{100} = \\frac{99}{100}"} />
              </div>
            </div>
          }
        />













      </div>
    </div>
  );
};

export default Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage;
