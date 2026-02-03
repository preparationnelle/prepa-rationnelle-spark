import React, { useState } from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Crown, Lightbulb, Target, Award } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre16EspacesProbabilisesEtConditionnementExercicesPage = () => {
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
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
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
              {id.replace(/[^0-9.]/g, '')}
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
      chapterNumber={16}
      chapterTitle="Espaces probabilisés & conditionnement"
      description="Exercices sur les calculs de probabilités, conditionnement et indépendance."
      slug="espaces-probabilises-conditionnement"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "integrales-impropres-et-criteres",
        title: "Intégrales Impropres"
      }}
      nextChapter={{
        slug: "variables-aleatoires-discretes",
        title: "Variables Aléatoires"
      }}
    >
      <div className="space-y-8">

        {/* Niveau Facile */}
        <section id="facile">
          <DifficultyHeader
            level="Niveau Facile"
            title="Application directe"
            icon={Lightbulb}
            stars={1}
          />
          <div className="space-y-6">
            <ExerciseCard
              id="16.1"
              title="Union et Complémentaire"
              difficulty="Facile"
              content={
                <div className="space-y-4">
                  <p>Soient <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> deux événements tels que <LatexRenderer latex="P(A) = 0.6" />, <LatexRenderer latex="P(B) = 0.5" /> et <LatexRenderer latex="P(A \cap B) = 0.3" />.</p>
                  <p>1. Calculer <LatexRenderer latex="P(A \cup B)" />.</p>
                  <p>2. Calculer <LatexRenderer latex="P(\bar{A})" />.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>On applique les formules élémentaires :</p>
                  <p>1. <LatexRenderer latex="P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.6 + 0.5 - 0.3 = 0.8" />.</p>
                  <p>2. <LatexRenderer latex="P(\bar{A}) = 1 - P(A) = 1 - 0.6 = 0.4" />.</p>
                </div>
              }
            />
            <ExerciseCard
              id="16.2"
              title="Conditionnement simple"
              difficulty="Facile"
              content={
                <div className="space-y-4">
                  <p>On reprend les événements de l'exercice précédent.</p>
                  <p>Calculer <LatexRenderer latex="P_B(A)" /> (probabilité de A sachant B).</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>Par définition :</p>
                  <LatexRenderer latex="\displaystyle P_B(A) = \frac{P(A \cap B)}{P(B)} = \frac{0.3}{0.5} = 0.6" />
                  <p>Remarque : ici <LatexRenderer latex="P_B(A) = P(A)" />, donc <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> sont indépendants.</p>
                </div>
              }
            />
          </div>
        </section>

        {/* Niveau Intermédiaire */}
        <section id="intermediaire">
          <DifficultyHeader
            level="Niveau Intermédiaire"
            title="Classiques & Techniques"
            icon={Target}
            stars={2}
          />
          <div className="space-y-6">
            <ExerciseCard
              id="16.3"
              title="Formule des probabilités totales"
              difficulty="Moyen"
              content={
                <div className="space-y-4">
                  <p>On dispose de 3 urnes :</p>
                  <ul className="list-disc list-inside">
                    <li><LatexRenderer latex="U_1" /> contient 2 boules noires et 3 blanches.</li>
                    <li><LatexRenderer latex="U_2" /> contient 3 boules noires et 2 blanches.</li>
                    <li><LatexRenderer latex="U_3" /> contient 5 boules noires.</li>
                  </ul>
                  <p>On choisit une urne au hasard, puis on tire une boule. Quelle est la probabilité de tirer une boule noire (<LatexRenderer latex="N" />) ?</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>Le système <LatexRenderer latex="(U_1, U_2, U_3)" /> est un système complet d'événements (urnes équiprobables <LatexRenderer latex="1/3" />).</p>
                  <p>D'après la formule des probabilités totales :</p>
                  <LatexRenderer latex="\displaystyle P(N) = \sum_{i=1}^3 P(U_i) P_{U_i}(N)" />
                  <p>On a <LatexRenderer latex="P_{U_1}(N) = 2/5" />, <LatexRenderer latex="P_{U_2}(N) = 3/5" />, <LatexRenderer latex="P_{U_3}(N) = 5/5 = 1" />.</p>
                  <LatexRenderer latex="\displaystyle P(N) = \frac{1}{3} \times \frac{2}{5} + \frac{1}{3} \times \frac{3}{5} + \frac{1}{3} \times 1 = \frac{1}{3} (\frac{2}{5} + \frac{3}{5} + \frac{5}{5}) = \frac{1}{3} \times 2 = \frac{2}{3}" />
                </div>
              }
            />
            <ExerciseCard
              id="16.4"
              title="Indépendance"
              difficulty="Moyen"
              content={
                <div className="space-y-4">
                  <p>Soient <LatexRenderer latex="A, B, C" /> trois événements mutuellement indépendants.</p>
                  <p>Montrer que <LatexRenderer latex="A" /> et <LatexRenderer latex="B \cup C" /> sont indépendants.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>On calcule <LatexRenderer latex="P(A \cap (B \cup C))" /> :</p>
                  <LatexRenderer latex="\displaystyle P(A \cap (B \cup C)) = P((A \cap B) \cup (A \cap C))" />
                  <p>Par la formule du crible :</p>
                  <LatexRenderer latex="\displaystyle = P(A \cap B) + P(A \cap C) - P(A \cap B \cap A \cap C)" />
                  <LatexRenderer latex="\displaystyle = P(A)P(B) + P(A)P(C) - P(A \cap B \cap C)" />
                  <LatexRenderer latex="\displaystyle = P(A)P(B) + P(A)P(C) - P(A)P(B)P(C)" />
                  <LatexRenderer latex="\displaystyle = P(A) [ P(B) + P(C) - P(B \cap C) ]" />
                  <LatexRenderer latex="\displaystyle = P(A) P(B \cup C)" />
                  <p>Donc <LatexRenderer latex="A" /> et <LatexRenderer latex="B \cup C" /> sont indépendants.</p>
                </div>
              }
            />
          </div>
        </section>

        {/* Niveau Dur */}
        <section id="dur">
          <DifficultyHeader
            level="Niveau Dur"
            title="Approfondissement"
            icon={Crown}
            stars={3}
          />
          <div className="space-y-6">
            <ExerciseCard
              id="16.5"
              title="Formule de Bayes - Test médical"
              difficulty="Difficile"
              content={
                <div className="space-y-4">
                  <p>Une maladie touche 1% de la population (<LatexRenderer latex="P(M)=0.01" />).</p>
                  <p>Un test a une sensibilité de 95% (<LatexRenderer latex="P_M(T) = 0.95" />) et une spécificité de 90% (<LatexRenderer latex="P_{\bar{M}}(\bar{T}) = 0.90" />).</p>
                  <p>Un patient est testé positif. Quelle est la probabilité qu'il soit malade ?</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>On cherche <LatexRenderer latex="P_T(M)" />.</p>
                  <p>D'après la formule de Bayes :</p>
                  <LatexRenderer latex="\displaystyle P_T(M) = \frac{P(M) P_M(T)}{P(T)}" />
                  <p>On calcule <LatexRenderer latex="P(T)" /> avec les probabilités totales :</p>
                  <LatexRenderer latex="\displaystyle P(T) = P(M)P_M(T) + P(\bar{M})P_{\bar{M}}(T)" />
                  <p>On a <LatexRenderer latex="P_{\bar{M}}(T) = 1 - P_{\bar{M}}(\bar{T}) = 0.10" />.</p>
                  <LatexRenderer latex="\displaystyle P(T) = 0.01 \times 0.95 + 0.99 \times 0.10 = 0.0095 + 0.099 = 0.1085" />
                  <p>Donc :</p>
                  <LatexRenderer latex="\displaystyle P_T(M) = \frac{0.0095}{0.1085} \approx 0.087" />
                  <p>Le patient n'a que 8.7% de chances d'être malade (effet de base).</p>
                </div>
              }
            />
          </div>
        </section>

        {/* Niveau Concours */}
        <section id="concours">
          <DifficultyHeader
            level="Niveau Concours"
            title="Type BCE/Ecricome"
            icon={Award}
            stars={4}
          />
          <div className="space-y-6">
            <ExerciseCard
              id="16.6"
              title="Continuité croissante"
              difficulty="Très Difficile"
              content={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="(X_n)" /> une suite de variables aléatoires i.i.d. suivant une loi exponentielle <LatexRenderer latex="\mathcal{E}(1)" />.</p>
                  <p>Soit <LatexRenderer latex="M_n = \max(X_1, \dots, X_n)" />. On veut étudier la limite de <LatexRenderer latex="P(M_n \le x)" />.</p>
                  <p>1. Exprimer l'événement <LatexRenderer latex="\{ M_n \le x \}" /> en fonction des <LatexRenderer latex="X_i" />.</p>
                  <p>2. Calculer <LatexRenderer latex="F_n(x) = P(M_n \le x)" />.</p>
                  <p>3. Déterminer la limite quand <LatexRenderer latex="n \to +\infty" />. Interpréter avec la continuité décroissante.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>1. Événement :</strong></p>
                  <p><LatexRenderer latex="\{ M_n \le x \} = \{ X_1 \le x \} \cap \dots \cap \{ X_n \le x \}" />.</p>
                  <p><strong>2. Calcul :</strong></p>
                  <p>Par indépendance : <LatexRenderer latex="P(M_n \le x) = (P(X_1 \le x))^n = (1 - e^{-x})^n" /> (pour <LatexRenderer latex="x \ge 0" />).</p>
                  <p><strong>3. Limite :</strong></p>
                  <p>Si <LatexRenderer latex="x > 0" />, <LatexRenderer latex="1-e^{-x} \in [0, 1[" />, donc <LatexRenderer latex="(1-e^{-x})^n \to 0" />.</p>
                  <p>On remarque que la suite d'événements <LatexRenderer latex="A_n = \{ M_n \le x \}" /> est décroissante (<LatexRenderer latex="M_{n+1} \ge M_n \implies \{ M_{n+1} \le x \} \subset \{ M_n \le x \}" />).</p>
                  <p>Par continuité décroissante :</p>
                  <LatexRenderer latex="\displaystyle P(\bigcap_{n=1}^{+\infty} A_n) = \lim P(A_n) = 0" />
                  <p>Cela signifie que presque sûrement, le maximum tend vers l'infini.</p>
                </div>
              }
            />
          </div>
        </section>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre16EspacesProbabilisesEtConditionnementExercicesPage;
