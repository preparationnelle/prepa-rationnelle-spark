import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Target, Brain } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre10ProbabilitesEtConditionnementExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{ [key: string]: boolean }>({});

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
    stars,
    color = "slate"
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
    color?: string;
  }) => (
    <div className="flex items-center gap-4 mb-6 mt-8 pb-4 border-b border-slate-200">
      <div className={`p-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-800">{level} : {title}</h2>
        <div className="flex gap-1 mt-1">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          {[...Array(4 - stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-slate-200" />
          ))}
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
    <Card className="mb-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">
              {id.replace(/[^0-9]/g, '')}
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
          </div>
          <span className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
            {difficulty}
          </span>
        </div>

        <div className="mb-6 text-slate-700 leading-relaxed pl-1">
          {content}
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => toggleCorrection(id)}
            variant="ghost"
            size="sm"
            className="w-fit text-slate-500 hover:text-slate-900 hover:bg-slate-50 self-start -ml-2"
          >
            {visibleCorrections[id] ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Masquer la correction
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Afficher la correction
              </>
            )}
          </Button>

          {visibleCorrections[id] && (
            <div className="bg-slate-50 border-l-2 border-emerald-500 p-6 rounded-r-lg animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="font-semibold text-emerald-800 mb-3 text-sm uppercase tracking-wider">Solution détaillée</h4>
              <div className="text-slate-700 leading-relaxed space-y-2">
                {correction}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <MathChapterTemplate
      chapterNumber={10}
      chapterTitle="Probabilités et Conditionnement"
      description="Exercices sur les espaces probabilisés, le conditionnement et l'indépendance."
      slug="probabilites-conditionnement"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "reduction-matrices-symetriques",
        title: "Réduction des matrices symétriques"
      }}
      nextChapter={{
        slug: "applications-lineaires-structures-vectorielles",
        title: "Applications Linéaires & Structures"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Dénombrement et Conditionnement Base"
            icon={Target}
            stars={2}
          />

          <ExerciseCard
            id="ex1"
            title="Urne avec remise et sans remise"
            difficulty="Moyen"
            content={
              <div>
                <p>Urne : 2 jaunes, 7 noires. <LatexRenderer latex="n" /> tirages.</p>
                <p>1. Avec remise : Probabilités de A="que des jaunes" et <LatexRenderer latex="B_k" />="1ère jaune au k-ième tirage".</p>
                <p>2. Sans remise : Proba d'avoir 2 jaunes aux 2 premiers tirages.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="\mathbb{P}(A) = (2/9)^n" />, <LatexRenderer latex="\mathbb{P}(B_k) = (7/9)^{k-1} \times 2/9" />.</p>
                <p>2. Sans remise : <LatexRenderer latex="\mathbb{P}(J_1 \cap J_2) = (2/9) \times (1/8) = 1/36" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Lancer de n dés"
            difficulty="Moyen"
            content={
              <div>
                <p><LatexRenderer latex="n" /> dés. <LatexRenderer latex="A_n" /> : "au moins un 6".</p>
                <p>Calculer <LatexRenderer latex="\mathbb{P}(A_n)" /> et sa limite.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="\mathbb{P}(A_n) = 1 - (5/6)^n" />. Tend vers 1.</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Formules de Bayes et Probabilités Totales"
            icon={BookOpen}
            stars={3}
          />

          <ExerciseCard
            id="ex3"
            title="Contrôle qualité (Bayes)"
            difficulty="Difficile"
            content={
              <div>
                <p>5% défectueux. Test : Bon accepté 0.96, Mauvais refusé 0.98.</p>
                <p>1. Proba erreur de contrôle.</p>
                <p>2. <LatexRenderer latex="\mathbb{P}_A(M)" /> : proba qu'un objet accepté soit mauvais.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="\mathbb{P}(E) = 0.039" />.</p>
                <p>2. Bayes : <LatexRenderer latex="\frac{0.05 \times 0.02}{0.05 \times 0.02 + 0.95 \times 0.96} = \frac{1}{913}" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Suite arithmético-géométrique"
            difficulty="Difficile"
            content={
              <div>
                <p>Pièces A (1/2) et B (1/3). Règle de changement de pièce.</p>
                <p><LatexRenderer latex="a_{n+1}" /> en fonction de <LatexRenderer latex="a_n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="a_{n+1} = -1/6 a_n + 2/3" />.</p>
                <p><LatexRenderer latex="a_n" /> converge vers 4/7.</p>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Formule de Poincaré et Indépendance"
            icon={Brain}
            stars={4}
          />
          <ExerciseCard
            id="ex5"
            title="Reconstitution de paires (Poincaré)"
            difficulty="Difficile"
            content={
              <div>
                <p>3 paires, tirage de 4 chaussures.</p>
                <p>Proba d'avoir au moins une paire.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="\mathbb{P}(\text{au moins 1 paire}) = 1" /> (Principe des tiroirs ou Poincaré).</p>
              </div>
            }
          />
          <ExerciseCard
            id="ex9"
            title="Indépendance min/max dés"
            difficulty="Difficile"
            content={
              <div>
                <p>3 dés. <LatexRenderer latex="M_i" /> : max(D1, D2) <LatexRenderer latex="\leq i" />. <LatexRenderer latex="m_i" /> : min(D2, D3) <LatexRenderer latex="\geq i" />.</p>
                <p>Indépendance ?</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Indépendants ssi <LatexRenderer latex="i \in \{1, 6\}" />.</p>
              </div>
            }
          />

        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre10ProbabilitesEtConditionnementExercicesPage;
